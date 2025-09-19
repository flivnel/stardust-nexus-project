function ShowCard({ title, desc }) {
    return (
      <div className="card">
        <h4 style={{ margin: 0, fontWeight: 700, color: 'var(--white)' }}>{title}</h4>
        <p style={{ marginTop: '.5rem' }}>{desc}</p>
      </div>
    );
  }
  
  export default function Showcase() {
    return (
      <section id="showcase" className="container" style={{ paddingTop: '2.5rem', paddingBottom:'2.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <ShowCard title="Research Notes" desc="Organize long-form research with persistent backlinks." />
          <ShowCard title="Scene Breakdowns" desc="Time-coded annotations for media analysis." />
          <ShowCard title="Learning Paths" desc="Curated sequences for deep study." />
        </div>
      </section>
    );
  }
  