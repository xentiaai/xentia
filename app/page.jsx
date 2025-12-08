"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* HERO */}
      <section className="hero py-28">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your AI Voice Agent, Reimagined
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Xentia delivers natural AI voice interactions with speed, accuracy, 
            and ultra-human tonality.
          </motion.p>

          <motion.a
            href="#features"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Capabilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="card bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Real-Time Voice AI</h3>
            <p className="text-gray-400">
              High-precision streaming interactions with near-instant latency.
            </p>
          </div>

          <div className="card bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Context Memory</h3>
            <p className="text-gray-400">
              Understands multi-step conversations with long-term context retention.
            </p>
          </div>

          <div className="card bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Multi-Modal Reasoning</h3>
            <p className="text-gray-400">
              Processes voice, text, and instructions with complex logical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        Xentia © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
