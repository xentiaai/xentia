// src/app/page.jsx
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="hero fade-in">
        <div className="container">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            Your AI Voice Agent, Reimagined
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.15}} className="hero-subtitle">
            Xentia delivers natural AI voice interactions with speed, accuracy, and ultra-human tonality.
          </motion.p>
          <motion.a href="#features" className="btn-primary" whileHover={{ scale: 1.03 }} style={{ display: "inline-block" }}>
            Get Started
          </motion.a>
        </div>
      </section>

      <section id="features" className="section">
        <h2 className="section-title">Capabilities</h2>
        <div className="card-grid">
          <div className="card"><h3>Real-Time Voice AI</h3><p>High-precision streaming interactions with near-instant latency.</p></div>
          <div className="card"><h3>Context Memory</h3><p>Understands multi-step conversations with long-term context retention.</p></div>
          <div className="card"><h3>Multi-Modal Reasoning</h3><p>Processes voice, text, and instructions with complex logical thinking.</p></div>
        </div>
      </section>

      <footer> Xentia © {new Date().getFullYear()} </footer>
    </main>
  );
}
