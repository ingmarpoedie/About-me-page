'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ScoreContextType = {
    highScore: number;
    updateHighScore: (value: number) => void;
};

const ScoreContext = createContext<ScoreContextType | null>(null);

export function ScoreProvider({ children }: { children: ReactNode }) {
    const [highScore, setHighScore] = useState(0);

    const value = useMemo(
        () => ({
            highScore,
            updateHighScore: (value: number) => setHighScore((current) => Math.max(current, value)),
        }),
        [highScore]
    );

    return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
}

export function useScore() {
    const context = useContext(ScoreContext);
    if (!context) {
        throw new Error("useScore must be used within ScoreProvider");
    }
    return context;
}
