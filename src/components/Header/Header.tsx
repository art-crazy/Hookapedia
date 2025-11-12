'use client'
import {HeaderUI} from "ui-hookapedia";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {siteConfig} from "@/config/site";

export default function Header () {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/recepty?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/recepty');
    }
  };

  return (
      <HeaderUI
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          logoIcon={siteConfig.metadata.logo}
          logoText={siteConfig.metadata.name}
      />
  )
}
