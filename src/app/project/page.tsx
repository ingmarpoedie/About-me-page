"use client";

import Link from "next/link";
import { translations } from "../translation";
import { useLanguage } from "../component/languagecontext";
import ScrollReveal from "../component/scrollreveal";


export default function ProjectPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <main className="min-h-screen bg-background px-6 py-12 text-slate-900">
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
                        <h1 className="text-4xl font-bold tracking-tight">{t.projectPageTitle}</h1>
                        <p className="mt-6 text-lg leading-8 text-slate-700">
                            {t.projectPageIntro}
                        </p>
                        <div className="mt-8 space-y-4 text-slate-600">
                            <ScrollReveal className="reveal-left" delay={300}>
                                <p>{t.projectPageParagraph1}</p>
                            </ScrollReveal>
                            <ScrollReveal className="reveal-right" delay={450}>
                                <p>{t.projectPageParagraph2}</p>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
}
