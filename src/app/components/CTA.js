export default function CTA() {
    return (
      <section className="container" style={{ paddingTop:'2rem', paddingBottom:'2rem' }}>
        <div className="cta">
          <div>
            <p className="kicker">Ready?</p>
            <h3 style={{ margin: 0 }}>Start building your knowledge garden.</h3>
          </div>
          <div style={{ display:'flex', gap:'0.6rem' }}>
            <button className="btn btn-primary">Create account</button>
            <button className="btn btn-outline">Read docs</button>
          </div>
        </div>
      </section>
    );
  }
  