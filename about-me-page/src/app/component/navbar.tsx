'use client';

import React from "react";
import { translations } from "../translation"
import { useLanguage } from "./languagecontext";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const { language, setLanguage } = useLanguage();
    const t = translations[language];

    return (
        <nav className="flex gap-4 justify-end p-4 bg-background border-b border-black">
            {/* Personal-logo */}
            <img
            src="/cat-aboutme.png"
            alt="Personal logo"
            className="h-20 w-20 rounded-full absolute left-4 top-1"
            />
            
           
            <a className="flex h-12 w-44 items-center justify-center rounded-full bg-transparent border relative z-1 border-red-500 px-5 text-black transition-colors hover:bg-red-500 hover:text-white"
                href="https://docs.google.com/document/d/1yZoqTBQvoE-OHxnTNbLbd_J2bOBDVXCerd0E5tMH4Nc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferreS"
            >
                {t.latest}
            </a>
            <a className="flex h-12 w-32 items-center justify-center rounded-full relative z-1 bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ingmarsmits@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.contact}
            </a>
            


           
            <div className="flex-col"> 
                <button className="hover h-12 w-32 items-center justify-center rounded-full relative z-1 bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {t.menu}
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-34 top-17 flex flex-col font-serif text-2xl text-blue-500 bg-white p-2 rounded-2xl" >
                        <a href="https://researchable.nl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:outline hover:outline-blue-500"
                        >
                            {t.home} ⮞
                        </a>
                        <a href="projects" target="_blank" rel="noopener noreferrer" className="hover:outline hover:outline-blue-500">
                            {t.projects} ⮞
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1C7rRg9KzO6_e4mUQRtORL8zB-oDku0fumdIaHb6meXU/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:outline hover:outline-blue-500"
                        >
                            {t.blog} ⮞
                        </a>
                        <a
                            href="socials"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:outline hover:outline-blue-500"
                        >
                            {t.socials} ⮞
                        </a>





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
