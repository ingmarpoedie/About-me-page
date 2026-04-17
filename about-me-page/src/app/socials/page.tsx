"use client";

import Link from "next/link";
import { translations } from "../translation";
import { useLanguage } from "../component/languagecontext";
import ScrollReveal from "../component/scrollreveal";

export default function SocialsPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
            <div className="mx-auto max-w-4xl">
                <ScrollReveal className="reveal-up" delay={0}>
                <div className="mb-6 flex items-center justify-between rounded-2xl bg-white/80 p-4 shadow-sm shadow-slate-900/5">
                    <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                        {t.back}
                    </Link>
                </div>
                </ScrollReveal>

                <ScrollReveal className="reveal-up" delay={150}>
                <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-900/10">
                    <h1 className="text-4xl font-bold tracking-tight">{t.socialsPageTitle}</h1>
                    <p className="mt-6 text-lg leading-8 text-slate-700">{t.socialsPageIntro}</p>

                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        <ScrollReveal className="reveal-left" delay={0}>
                            <a
                                href="https://github.com/ingmarpoedie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.936 0-1.31.47-2.38 1.235-3.22-.124-.305-.536-1.53.115-3.185 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 0 1 3.005-.405c1.02.005 2.045.138 3.005.405 2.29-1.552 3.295-1.23 3.295-1.23.655 1.655.243 2.88.12 3.185.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.48 5.925.43.37.81 1.105.81 2.225 0 1.61-.015 2.91-.015 3.305 0 .32.21.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </div>
                                <div className="mt-6">
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.socialsGitHubLabel}</p>
                                    <p className="mt-3 text-xl font-semibold text-slate-950">{t.socialsGitHubText}</p>
                                </div>
                            </a>
                        </ScrollReveal>
                        <ScrollReveal className="reveal-right" delay={200}>
                            <a
                                href="mailto:ingmarsmits@gmail.com"
                                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M4 4h16v16H4z" />
                                        <path d="M4 4l8 8 8-8" />
                                    </svg>
                                </div>
                                <div className="mt-6">
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.socialsEmailLabel}</p>
                                    <p className="mt-3 text-xl font-semibold text-slate-950">{t.socialsEmailText}</p>
                                </div>
                            </a>
                        </ScrollReveal>
                    </div>
                </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
