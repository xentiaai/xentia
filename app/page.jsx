export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>
            Your AI Voice Agent, Reimagined  
          </h1>
          <p className="hero-subtitle">
            Xentia delivers natural AI voice interactions with speed, accuracy, and ultra-human tonality.
          </p>
          <a className="primary-btn" href="#">
            Get Started
          </a>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="container">

          <div className="section-header">
            <h2>Capabilities</h2>
            <p>Real-time reasoning, natural voice, and enterprise-grade intelligence.</p>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>Real-Time Voice AI</h3>
              <p>High-precision streaming interactions with near-instant latency.</p>
            </div>

            <div className="feature-card">
              <h3>Context Memory</h3>
              <p>Understands multi-step conversations with long-term context retention.</p>
            </div>

            <div className="feature-card">
              <h3>Multi-Modal Reasoning</h3>
              <p>Processes voice, text, and instructions with complex logical thinking.</p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Xentia © {new Date().getFullYear()}
      </footer>

    </main>
  );
}
