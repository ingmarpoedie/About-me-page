'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { translations } from "./translation";
import { useLanguage } from "./component/languagecontext";
import Minigame from "./component/minigame";
import ScrollReveal from "./component/scrollreveal";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [showGame, setShowGame] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-400/40 blur-3xl animate-float"></div>
        <div className="absolute right-8 top-44 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] animate-fade-in">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-slate-900/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100 shadow-lg shadow-slate-900/20 animate-pulse">
              {t.personalPortfolio}
            </span>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 animate-text-float sm:text-6xl">
              {t.homeHeadline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              {t.hello}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-800 animate-pop"
                onClick={() => setShowGame(true)}
              >
                {t.playGame}
              </button>
            </div>
          </div>

          <ScrollReveal className="reveal-right" delay={200}>
            <div className="relative isolate overflow-hidden rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
              <div className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-blue-400/50 blur-3xl"></div>
              <div className="absolute -left-12 bottom-6 h-24 w-24 rounded-full bg-sky-300/50 blur-3xl"></div>
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/researchable-logo.png"
                    alt={t.researchableLogoAlt}
                    width={140}
                    height={140}
                    className="rounded-3xl"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.featuredTag}</p>
                    <h2 className="text-3xl font-bold text-slate-950">{t.creativeTechHeading}</h2>
                  </div>
                </div>
                <div className="grid gap-4 rounded-3xl bg-slate-100 p-5 text-slate-700">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.featuredWeb}</p>
                    <p className="mt-2 text-base font-semibold">{t.featuredWebText}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.featuredAI}</p>
                    <p className="mt-2 text-base font-semibold">{t.featuredAIText}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.featuredPlay}</p>
                    <p className="mt-2 text-base font-semibold">{t.featuredPlayText}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <ScrollReveal className="reveal-left" delay={0}>
            <Link href="/skill" className="block group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 group-hover:text-slate-900">{t.cardSkillLabel}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{t.cardSkillHeading}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.cardSkillText}</p>
            </Link>
          </ScrollReveal>
          <ScrollReveal className="reveal-up" delay={150}>
            <Link href="/project" className="block group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 group-hover:text-slate-900">{t.cardProjectLabel}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{t.cardProjectHeading}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.cardProjectText}</p>
            </Link>
          </ScrollReveal>
          <ScrollReveal className="reveal-right" delay={300}>
            <Link href="/vision" className="block group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 group-hover:text-slate-900">{t.cardVisionLabel}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{t.cardVisionHeading}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.cardVisionText}</p>
            </Link>
          </ScrollReveal>
        </section>

        <ScrollReveal className="reveal-up" delay={100}>
          <section className="grid gap-6 rounded-4xl border border-slate-200 bg-slate-950/95 p-8 text-white shadow-2xl shadow-slate-950/20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{t.outreachLabel}</p>
                <h2 className="mt-2 text-3xl font-bold">{t.outreachHeading}</h2>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ingmarsmits@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                {t.outreachButton}
              </a>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-slate-300/90">{t.outreachText}</p>
          </section>
        </ScrollReveal>
      </div>

      {showGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl">
            <button
              type="button"
              className="absolute right-4 top-4 z-40 rounded-full border border-slate-200 bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
              onClick={() => setShowGame(false)}
            >
              {t.close}
            </button>
            <Minigame />
          </div>
        </div>
      )}
    </main>
  );
}
