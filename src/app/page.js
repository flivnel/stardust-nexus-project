export default function Home() {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 style={{ color: 'var(--accent-warm)' }} className="text-6xl font-bold">
            Stardust Nexus
          </h1>
          <p style={{ color: 'var(--foreground)' }} className="mt-4 text-lg">
            Build a timeless, clean, interactive space for ideas.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button>Get Started</button>
            <button style={{ backgroundColor: 'var(--accent-muted)' }}>Learn More</button>
          </div>
        </div>
      </section>
    );
}
