'use client';

import Image from "next/image";
import React from "react";
import { translations } from "./translation"
import { useLanguage } from "./component/languagecontext";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-1 items-start justify-center pt-20 bg-background text-foreground min-h-screen">
      <Image
        src="/researchable-logo.png"
        alt="researchable logo"
        width={200}
        height={200}
      /><div className="ml-1 flex flex-col items-left gap-4 text-left sm:items-start sm:text-left">
        <h1 className="outline-olive-950 max-w-xs text-4xl font-serif leading-10 tracking-tight text-blue-700 dark:text-blue-500">
          Ingmar Smits
        </h1>
        <h1 className="max-w-md text-lg leading-8 text-cyan-400 dark:text-cyan-600">
          {t.hello} 
        </h1>
      </div>

    </div>
  );
}
