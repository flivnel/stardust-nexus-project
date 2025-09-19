function Feature({ title, body }) {
    return (
      <div className="feature">
        <h3>{title}</h3>
        <p style={{ color: 'rgba(234,217,196,0.9)' }}>{body}</p>
      </div>
    );
  }
  
  export default function Features() {
    return (
      <section id="features" className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p className="kicker">Core</p>
          <h2 className="h2">What you can do</h2>
        </div>
  
        <div className="features">
          <Feature title="Connected Notes" body="Create interlinked pages, backlinks & graph visualization." />
          <Feature title="Media Annotations" body="Timestamped notes for videos and audio with highlights." />
          <Feature title="Export & Publish" body="Export to markdown or publish public, clean pages." />
        </div>
      </section>
    );
  }
  