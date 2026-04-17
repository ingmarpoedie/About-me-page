'use client'

import React, { useEffect, useState } from "react";
import { translations } from "../translation";
import { useLanguage } from "./languagecontext";
import { useScore } from "./scorecontext";

function getRandomPosition() {
    return {
        top: `${Math.random() * 70 + 10}%`,
        left: `${Math.random() * 70 + 10}%`,
    };
}

const defaultPosition = { top: "50%", left: "50%" };

export default function Minigame() {
    const { language } = useLanguage();
    const t = translations[language];
    const { highScore, updateHighScore } = useScore();

    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [level, setLevel] = useState(1);
    const [targetPosition, setTargetPosition] = useState(defaultPosition);

    useEffect(() => {
        setTargetPosition(getRandomPosition());
    }, []);

    useEffect(() => {
        setLevel(Math.min(5, Math.floor(score / 5) + 1));
    }, [score]);

    useEffect(() => {
        if (timeLeft <= 0) {
            return;
        }

        const timer = window.setTimeout(() => {
            setTimeLeft((current) => current - 1);
        }, 1000);

        return () => window.clearTimeout(timer);
    }, [timeLeft]);

    useEffect(() => {
        if (score > highScore) {
            updateHighScore(score);
        }
    }, [score, highScore, updateHighScore]);

    function handleTargetClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        if (timeLeft <= 0) {
            return;
        }
        setScore((current) => current + 1);
        setTargetPosition(getRandomPosition());
    }

    function handleAreaClick() {
        if (timeLeft <= 0) {
            return;
        }
        setScore((current) => current - 1);
    }

    function handleRestart() {
        setScore(0);
        setTimeLeft(20);
        setTargetPosition(getRandomPosition());
    }

    const gameEnded = timeLeft <= 0;
    const targetSize = 70 - (level - 1) * 10;

    return (
        <section className="mt-10 w-full max-w-3xl rounded-3xl border border-slate-300/70 bg-[rgba(244,235,206,0.95)] p-6 shadow-xl backdrop-blur-sm text-foreground">
            <h2 className="text-2xl font-bold text-slate-900">{t.gameTitle}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{t.gameInstructions}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-900">
                    {t.currentScore}: <strong>{score}</strong>
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-900">
                    {t.timeLeft}: <strong>{timeLeft}</strong>s
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-900">
                    {t.level}: <strong>{level}</strong>
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-900">
                    {t.highScore}: <strong>{highScore}</strong>
                </div>
            </div>

            <div className="relative mt-8 h-64 overflow-hidden rounded-3xl border border-slate-200 bg-background/60" onClick={handleAreaClick}>
                <button
                    type="button"
                    onClick={handleTargetClick}
                    disabled={gameEnded}
                    style={{
                        top: targetPosition.top,
                        left: targetPosition.left,
                        width: `${targetSize}px`,
                        height: `${targetSize}px`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-700 text-white text-sm font-semibold shadow-lg transition ${gameEnded ? "cursor-not-allowed opacity-60" : "hover:bg-cyan-800"
                        }`}
                >
                    {score === 0 ? t.clickTarget : ""}
                </button>

                {gameEnded && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-background/90 text-center text-lg font-semibold text-foreground">
                        {t.timeUp}
                    </div>
                )}
            </div>

            <button
                type="button"
                onClick={handleRestart}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-cyan-800"
            >
                {t.restart}
            </button>
        </section>
    );
}
