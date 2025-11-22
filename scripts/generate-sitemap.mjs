#!/usr/bin/env node

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as ts from 'typescript';

const normalizeBaseUrl = (url) => url.replace(/\/+$/, '');

const baseUrl = normalizeBaseUrl(process.env.SITE_URL ?? 'https://kalyany-mix.ru');
const apiUrl = process.env.API_URL ?? 'http://109.205.56.225:3001/api';
const sitemapDir = join(process.cwd(), 'public', 'sitemaps');
const MAX_URLS_PER_FILE = 15000;

/**
 * Быстрое чтение TS-модулей с категориями без отдельной сборки.
 * Транспилируем в JS на лету и импортируем через data: URL.
 */
async function importTsModule(relativePath) {
  const fullPath = join(process.cwd(), relativePath);
  const source = readFileSync(fullPath, 'utf8');

  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
    },
    fileName: fullPath,
  });

  const dataUrl = `data:text/javascript;base64,${Buffer.from(outputText, 'utf8').toString('base64')}`;
  return import(dataUrl);
}

async function loadFilterCategories() {
  const [
    { strengthCategories },
    { flavorCategoryCategories },
    { coolingCategories },
    { mintCategories },
  ] = await Promise.all([
    importTsModule('src/data/categories/strengthCategories.ts'),
    importTsModule('src/data/categories/flavorCategoryCategories.ts'),
    importTsModule('src/data/categories/coolingCategories.ts'),
    importTsModule('src/data/categories/mintCategories.ts'),
  ]);

  return {
    strength: Object.keys(strengthCategories),
    flavor: Object.keys(flavorCategoryCategories),
    cooling: Object.keys(coolingCategories),
    mint: Object.keys(mintCategories),
  };
}

try {
  mkdirSync(sitemapDir, { recursive: true });
} catch (error) {
  console.error('❌ Ошибка при создании директории sitemap:', error);
}

const generateMainUrls = () => [
  baseUrl,
  `${baseUrl}/blog`,
  `${baseUrl}/faq`,
  `${baseUrl}/istoriya`,
];

async function fetchRecipes(limit = 100) {
  const collected = [];
  let page = 1;
  let total = 0;

  do {
    const searchParams = new URLSearchParams({ page: String(page), limit: String(limit) });
    const response = await fetch(`${apiUrl}/recipes?${searchParams.toString()}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const { items, total: totalFromApi } = await response.json();
    collected.push(...items);
    total = totalFromApi ?? total;
    page += 1;
  } while (collected.length < total);

  return collected;
}

function generateRecipeUrls(recipes) {
  return recipes.map((recipe) => {
    const cleanedLink = recipe.link?.replace(/^\/+/, '');

    if (cleanedLink) {
      return `${baseUrl}/${cleanedLink}`;
    }

    const slugFromName = (recipe.name || 'recept')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    return `${baseUrl}/recept/${slugFromName}-${recipe.id}`;
  });
}

async function generateFilterUrls() {
  const urls = new Set([`${baseUrl}/recepty`]);

  const { strength, flavor, cooling, mint } = await loadFilterCategories();

  const strengths = [undefined, ...strength];
  const flavors = [undefined, ...flavor];
  const coolings = [undefined, ...cooling];
  const mints = [undefined, ...mint];

  for (const strengthCategory of strengths) {
    for (const flavorCategory of flavors) {
      for (const coolingCategory of coolings) {
        for (const mintCategory of mints) {
          const parts = [strengthCategory, flavorCategory, coolingCategory, mintCategory].filter(Boolean);
          if (!parts.length) continue;
          urls.add(`${baseUrl}/recepty/${parts.join('/')}`);
        }
      }
    }
  }

  return Array.from(urls);
}

function chunkArray(list, size) {
  const chunks = [];
  for (let index = 0; index < list.length; index += size) {
    chunks.push(list.slice(index, index + size));
  }
  return chunks;
}

function generateSitemapFile(urls, baseFilename, priority = '0.8') {
  const chunks = chunkArray(urls, MAX_URLS_PER_FILE);
  const results = [];

  chunks.forEach((chunk, index) => {
    const filename = chunks.length === 1 ? baseFilename : `${baseFilename.replace('.xml', '')}-${index + 1}.xml`;
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunk
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    writeFileSync(join(sitemapDir, filename), sitemap, 'utf8');
    results.push({ filename, count: chunk.length });
  });

  return results;
}

function generateSitemapIndex(sitemaps) {
  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    ({ filename }) => `  <sitemap>
    <loc>${baseUrl}/sitemaps/${filename}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), index, 'utf8');
}

async function generateAllSitemaps() {
  try {
    const allSitemaps = [];

    allSitemaps.push(...generateSitemapFile(generateMainUrls(), 'sitemap-main.xml', '1.0'));

    const recipes = await fetchRecipes();
    const recipeUrls = generateRecipeUrls(recipes);
    allSitemaps.push(...generateSitemapFile(recipeUrls, 'sitemap-recipes.xml', '0.9'));

    const filterUrls = await generateFilterUrls();
    allSitemaps.push(...generateSitemapFile(filterUrls, 'sitemap-categories.xml', '0.7'));

    generateSitemapIndex(allSitemaps);

    console.log('\n📊 Статистика сгенерированных sitemap:');
    console.log('----------------------------------------');
    allSitemaps.forEach(({ filename, count }) => {
      console.log(`📑 ${filename}: ${count} URL`);
    });
    console.log('----------------------------------------');
    const totalUrls = allSitemaps.reduce((sum, { count }) => sum + count, 0);
    console.log(`📈 Общее количество URL: ${totalUrls}`);
    console.log('----------------------------------------');
    console.log('✅ Sitemap успешно созданы в директории:', sitemapDir);
    console.log('✅ Главный sitemap создан:', join(process.cwd(), 'public', 'sitemap.xml'));
  } catch (error) {
    console.error('❌ Ошибка при создании sitemap:', error);
    process.exit(1);
  }
}

const command = process.argv[2];

switch (command) {
  case 'create-file':
    generateAllSitemaps();
    break;
  default:
    console.log(`
Available commands:
  create-file   - Create sitemap files with all recipe and category pages
    `);
}
