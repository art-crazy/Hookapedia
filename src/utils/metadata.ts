import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const DEFAULT_OG_IMAGE = '/placeholder-image.png';

export const defaultRobots: Metadata['robots'] = {
	index: true,
	follow: true,
	googleBot: {
		index: true,
		follow: true,
		'max-video-preview': -1,
		'max-image-preview': 'large',
		'max-snippet': -1,
	},
};

type OpenGraphType = 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

type BuildMetadataProps = {
	title: string;
	description: string;
	url?: string;
	image?: string;
	type?: OpenGraphType;
	keywords?: Metadata['keywords'];
	robots?: Metadata['robots'];
	ogTitle?: string;
	ogDescription?: string;
	twitterTitle?: string;
	twitterDescription?: string;
};

export function buildMetadata({
	title,
	description,
	url = siteConfig.url.current,
	image = DEFAULT_OG_IMAGE,
	type = 'website',
	keywords,
	robots = defaultRobots,
	ogTitle,
	ogDescription,
	twitterTitle,
	twitterDescription,
}: BuildMetadataProps): Metadata {
	const ogImages = image
		? [{
			url: image,
			width: 1200,
			height: 630,
			alt: title,
		}]
		: undefined;

	const twitterImages = image ? [image] : undefined;

	return {
		title,
		description,
		metadataBase: new URL(siteConfig.url.current),
		keywords,
		openGraph: {
			title: ogTitle ?? title,
			description: ogDescription ?? description,
			type,
			locale: 'ru_RU',
			siteName: siteConfig.metadata.name,
			url,
			images: ogImages,
		},
		alternates: {
			canonical: url,
		},
		twitter: {
			card: 'summary_large_image',
			title: twitterTitle ?? title,
			description: twitterDescription ?? description,
			images: twitterImages,
		},
		robots,
	};
}
