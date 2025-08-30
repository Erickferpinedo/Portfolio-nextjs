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

const OrbQuest    = dynamic(() => import("../Components/OrbQuest"), { ssr: false });
const MiniGameHUD = dynamic(() => import("../Components/MiniGameHUD"), { ssr: false });
const ConfettiToast    = dynamic(() => import("../Components/ConfettiToast"), { ssr: false });

export default function Home() {
  // Start paused
  const [gameActive, setGameActive] = useState(false);
  const [collected, setCollected] = useState(0);
  const [win, setWin] = useState(false);
  const [dismissedWin, setDismissedWin] = useState(false);
  const [completedOnce, setCompletedOnce] = useState(false);
  const totalOrbs = 8;

  // Show win modal the first time we reach total; stop the game; remember completion
  useEffect(() => {
    if (collected >= totalOrbs && !win && !dismissedWin) {
      setWin(true);
      setGameActive(false);    // stop until user starts again
      setCompletedOnce(true);  // remember we've completed at least once
    }
  }, [collected, totalOrbs, win, dismissedWin]);

  // SINGLE close handler for the modal
  const closeWin = () => {
    setWin(false);
    setDismissedWin(true); // prevents immediate re-open
  };

  const resetGame = () => {
    setCollected(0);
    setWin(false);
    setDismissedWin(false);
    setGameActive(true);   // reset + start
    // keep completedOnce = true so future rounds still stop unless user starts
  };

  const onStart = () => {
    // If round was finished or modal was shown, start a fresh round
    if (win || collected >= totalOrbs || completedOnce) {
      setCollected(0);
      setWin(false);
      setDismissedWin(false);
    }
    setGameActive(true);
  };

  const onPause = () => setGameActive(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-neutral-100 text-neutral-900">
      <header><Header gameActive={gameActive} setGameActive={setGameActive} /></header>

      <section><Intro /></section>
      <section><ScrollToTopButton /></section>
      <section><AboutMe /></section>

      {/* 🔑 Add IDs so the modal can scroll to these */}
      <section id="projects"><Projects /></section>
      <section><Experience /></section>
      <section id="contact"><ContactMe /></section>

      <footer><Footer /></footer>

      {/* Only runs while active and not in win state */}
      <OrbQuest
        active={gameActive && !win}
        onComplete={() => {
          setWin(true);
          setGameActive(false);
          setCompletedOnce(true);
        }}
        onCountChange={(n) => setCollected(n)}
      />

      <MiniGameHUD
        total={totalOrbs}
        collected={collected}
        onReset={resetGame}
        gameActive={gameActive}
        onStart={onStart}
        onPause={onPause}
        completedOnce={completedOnce}
      />

      {/* Modal
      <ConfettiToast show={win} onClose={closeWin} /> */}

    </main>
  );
}
