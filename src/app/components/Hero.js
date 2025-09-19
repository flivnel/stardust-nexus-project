'use client';

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Triangular background */}
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

      {/* Subtle diagonal overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(0,0,0,0.08))',
          zIndex: 5,
        }}
      />

      {/* Cinematic WELCOME watermark */}
      <h1
  style={{
    position: 'absolute',
    fontSize: '15rem',
    color: 'rgba(255,255,255,0.08)',
    top: '10%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 900,
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    animation: 'glitchFlicker 1s ease forwards',
  }}
>
  WELCOME
</h1>



      {/* Hero content */}
      <div
        className="hero-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '61.8%', // Golden ratio width
          margin: '0 auto',
          padding: '2rem',
          opacity: 0,
          transform: 'translateY(40px)',
          animation: 'fadeUp 1.2s ease forwards',
          animationDelay: '0.5s',
        }}
      >
        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '70px',
            fontWeight: 900,
            letterSpacing: '0.05em',
            color: 'var(--white)',
            textShadow: '2px 2px 15px rgba(0,0,0,0.5)',
            margin: 0,
          }}
        >
          Stardust Nexus
        </h1>
        <p
          className="lead"
          style={{
            fontSize: '43px', // Golden ratio scaling
            marginTop: '1rem',
            color: 'var(--white)',
          }}
        >
          Build a timeless, clean, interactive space for ideas — notes, media breakdowns, and connected learning.
        </p>
        <div
          style={{
            marginTop: '1.618rem', // Golden ratio spacing
            display: 'flex',
            justifyContent: 'center',
            gap: '1.618rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(135deg, #694F2E, #0B3533)',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              fontWeight: 700,
              color: 'var(--white)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
              transition: 'all 0.5s ease'
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #0B3533, #694F2E)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #694F2E, #0B3533)')
            }
          >
            Get started
          </button>
          <button
            className="btn btn-outline"
            style={{
              border: '2px solid var(--white)',
              color: 'var(--white)',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              fontWeight: 700,
              background: 'transparent',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--white)';
              e.currentTarget.style.color = 'var(--dark-base)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--white)';
            }}
          >
            Explore
          </button>
        </div>
      </div>

      {/* Fade-up animation keyframes */}
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
