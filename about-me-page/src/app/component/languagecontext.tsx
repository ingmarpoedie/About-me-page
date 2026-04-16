'use client'

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: any) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 👇 THIS PART IS PROBABLY MISSING
export function useLanguage() {
  return useContext(LanguageContext);
}