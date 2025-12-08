export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <h1>Your AI Voice Agent, Reimagined</h1>
        <p>
          Xentia delivers natural AI voice interactions with speed, accuracy,
          and ultra-human tonality.
        </p>
        <a className="btn-primary" href="#">Get Started</a>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <h2 className="section-title">Capabilities</h2>
        <p className="section-subtitle">Real-time reasoning, natural voice, and enterprise-grade intelligence.</p>

        <div className="card-grid">
          <div className="card">
            <h3>Real-Time Voice AI</h3>
            <p>High-precision streaming interactions with near-instant latency.</p>
          </div>

          <div className="card">
            <h3>Context Memory</h3>
            <p>Understands multi-step conversations with long-term context retention.</p>
          </div>

          <div className="card">
            <h3>Multi-Modal Reasoning</h3>
            <p>Processes voice, text, and instructions with complex logical thinking.</p>
          </div>
        </div>
      </section>

      {/* VOICE INTELLIGENCE */}
      <section className="section">
        <h2 className="section-title">Voice Intelligence</h2>
        <p className="section-subtitle">
          Natural, human-level voice AI that adapts, reasons, and responds with real emotion and clarity.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Ultra-Natural Speech</h3>
            <p>Advanced prosody modeling allows Xentia to speak with emotion, rhythm, and human-like dynamics.</p>
          </div>

          <div className="card">
            <h3>Adaptive Tone</h3>
            <p>Automatically adjusts tone based on user sentiment, intent, and context.</p>
          </div>

          <div className="card">
            <h3>Real-Time Interruptions</h3>
            <p>Users can interrupt mid-sentence — Xentia instantly adjusts and continues naturally.</p>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section">
        <h2 className="section-title">Integrations</h2>
        <p className="section-subtitle">Connect Xentia to your existing tools and workflows with seamless API and SDK support.</p>

        <div className="card-grid">
          <div className="card">
            <h3>REST API</h3>
            <p>Control voice interactions programmatically with simple, powerful API endpoints.</p>
          </div>

          <div className="card">
            <h3>WebSocket Streaming</h3>
            <p>Real-time audio + reasoning streaming for ultra-low latency experiences.</p>
          </div>

          <div className="card">
            <h3>Web & Mobile SDKs</h3>
            <p>Use the drop-in SDKs for browser, Android, and iOS applications.</p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: "#f9f9f9" }}>
        <h2 className="section-title">Use Cases</h2>
        <p className="section-subtitle">Xentia powers voice automation across industries with unmatched performance and quality.</p>

        <div className="card-grid">
          <div className="card">
            <h3>Customer Support</h3>
            <p>Fully autonomous voice agents that resolve issues instantly with natural conversation.</p>
          </div>

          <div className="card">
            <h3>Sales Assistants</h3>
            <p>AI voice that books meetings, qualifies leads, and gives human-level responses.</p>
          </div>

          <div className="card">
            <h3>AI Receptionists</h3>
            <p>Phone call automation with real personality, emotions, and contextual memory.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px", opacity: 0.6 }}>
        Xentia © {new Date().getFullYear()}
      </footer>

    </main>
  );
}
