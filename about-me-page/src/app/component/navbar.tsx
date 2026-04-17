'use client';

import Link from "next/link";
import React from "react";
import { translations } from "../translation"
import { useLanguage } from "./languagecontext";
import { useScore } from "./scorecontext";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const { language, setLanguage } = useLanguage();
    const { highScore } = useScore();
    const t = translations[language];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex gap-4 justify-end bg-background/95 p-4 backdrop-blur-md shadow-sm border-b border-black">
            {/* Personal-logo */}
            <img
                src="/cat-aboutme.png"
                alt={t.personalLogoAlt}
                className="h-20 w-20 rounded-full absolute left-4 top-1"
            />

            <a className="flex h-12 w-44 items-center justify-center rounded-full bg-transparent border relative z-1 border-red-500 px-5 text-black transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-red-500 hover:text-white"
                href="https://docs.google.com/document/d/1yZoqTBQvoE-OHxnTNbLbd_J2bOBDVXCerd0E5tMH4Nc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.latest}
            </a>
            <a className="flex h-12 w-32 items-center justify-center rounded-full relative z-1 bg-blue-600 px-5 text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-700"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ingmarsmits@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.contact}
            </a>


            <div className="relative flex-col">
                <button className="hover h-12 w-32 items-center justify-center rounded-full bg-blue-600 px-5 text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-700"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {t.menu}
                </button>
                {isDropdownOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-3 flex min-w-55 -translate-x-1/2 flex-col gap-2 rounded-3xl bg-white p-4 text-sm text-slate-800 shadow-2xl shadow-slate-900/10 animate-dropdown">
                        <a href="/"
                            className="rounded-2xl px-3 py-2 transition duration-200 hover:bg-slate-100"
                        >
                            {t.home} ⮞
                        </a>
                        <a href="https://github.com/ingmarpoedie" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-3 py-2 transition hover:bg-slate-100">
                            {t.projects} ⮞
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1C7rRg9KzO6_e4mUQRtORL8zB-oDku0fumdIaHb6meXU/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl px-3 py-2 transition hover:bg-slate-100"
                        >
                            {t.blog} ⮞
                        </a>
                        <Link
                            href="/socials"
                            className="rounded-2xl px-3 py-2 transition hover:bg-slate-100"
                        >
                            {t.socials} ⮞
                        </Link>





                    </div>
                )}
            </div>
            {/* Language switcher */}
            <div className="flex items-center">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                    onClick={() => setLanguage("en")}
                >
                    EN
                </button>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                    onClick={() => setLanguage("nl")}
                >
                    NL
                </button>
            </div>
        </nav>
    );
}
