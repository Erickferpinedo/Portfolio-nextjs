"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Header from "../Components/Header";
import Intro from "../Components/Intro";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrollToTopButton";

const OrbQuest   = dynamic(() => import("../Components/OrbQuest"), { ssr: false });
const MiniGameHUD = dynamic(() => import("../Components/MiniGameHUD"), { ssr: false });
const Confetti   = dynamic(() => import("../Components/Confetti"), { ssr: false });

export default function Home() {
  const [gameActive, setGameActive] = useState(true);
  const [collected, setCollected] = useState(0);
  const [win, setWin] = useState(false);
  const [dismissedWin, setDismissedWin] = useState(false); // <-- NEW
  const totalOrbs = 8;

  // Open win modal only when we FIRST cross the threshold and it's not dismissed
  useEffect(() => {
    if (collected >= totalOrbs && !win && !dismissedWin) {
      setWin(true);
      setGameActive(false);
    }
  }, [collected, totalOrbs, win, dismissedWin]);

  const resetGame = () => {
    setCollected(0);
    setGameActive(true);
    setWin(false);
    setDismissedWin(false); // <-- allow win to show again on next completion
  };

  const closeWin = () => {
    setWin(false);
    setDismissedWin(true); // <-- prevents immediate re-open
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-neutral-100 text-neutral-900">
      <header><Header gameActive={gameActive} setGameActive={setGameActive} /></header>

      <section><Intro /></section>
      <section><ScrollToTopButton /></section>
      <section><AboutMe /></section>
      <section><Projects /></section>
      <section><Experience /></section>
      <section><ContactMe /></section>

      <footer><Footer /></footer>

      <OrbQuest
        active={gameActive && !win}
        onComplete={() => setWin(true)}
        onCountChange={(n) => setCollected(n)}
      />

      <MiniGameHUD
        total={totalOrbs}
        collected={collected}
        onReset={resetGame}
        gameActive={gameActive}
        onToggleGame={() => setGameActive((v) => !v)}
      />

      {/* Pass closeWin so any of the 3 buttons can dismiss it */}
      <Confetti show={win} onClose={closeWin} />
    </main>
  );
}
