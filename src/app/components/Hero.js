export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Top-left triangle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '50%',
          backgroundColor: '#1C2122',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />
      
      {/* Top-right triangle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '50%',
          height: '50%',
          backgroundColor: '#694F2E',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        }}
      />
      
      {/* Bottom-left triangle */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '50%',
          height: '50%',
          backgroundColor: '#0B3533',
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        }}
      />
      
      {/* Bottom-right triangle */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '50%',
          height: '50%',
          backgroundColor: '#393B32',
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
        }}
      />

      {/* Hero content */}
      <div
        className="container hero-card"
        style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}
      >
        <p className="kicker">Welcome</p>
        <h1 className="h1" style={{ color: 'var(--white)' }}>Stardust Nexus</h1>
        <p className="lead" style={{ marginTop: '0.75rem' }}>
          Build a timeless, clean, interactive space for ideas — notes, media breakdowns, and connected learning.
        </p>
        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-outline">Explore</button>
        </div>
      </div>
    </section>
  );
}
