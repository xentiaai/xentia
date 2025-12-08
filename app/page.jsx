"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./globals.css";

export default function Home() {
  // Dark mode toggle
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <main className="page-wrapper">
      {/* DARK MODE SWITCH */}
      <div className="theme-toggle">
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* HERO */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Your AI Voice Agent, Reimagined</h1>
          <p className="hero-subtitle">
            Xentia delivers natural AI voice interactions with speed, accuracy,
            and ultra-human tonality.
          </p>
          <motion.a
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Capabilities</h2>
          <p>Real-time reasoning, natural voice, and enterprise-grade intelligence.</p>
        </motion.div>

        <div className="card-grid">
          {["Real-Time Voice AI", "Context Memory", "Multi-Modal Reasoning"].map(
            (t, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3>{t}</h3>
                <p>High-performance adaptive reasoning and natural voice response.</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* VOICE INTELLIGENCE */}
      <section className="section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Voice Intelligence</h2>
          <p>
            Natural, human-level voice AI that adapts, reasons, and responds with emotion.
          </p>
        </motion.div>

        <div className="card-grid">
          {["Ultra-Natural Speech", "Adaptive Tone", "Real-Time Interruptions"].map(
            (t, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3>{t}</h3>
                <p>Advanced voice intelligence for truly natural conversations.</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer> Xentia © {new Date().getFullYear()} </footer>
    </main>
  );
}
