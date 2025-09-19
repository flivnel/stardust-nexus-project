export default function Footer() {
    return (
      <footer className="site-footer" style={{ marginTop: '3rem' }}>
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' }}>
          <div>
            <div style={{ fontWeight:700, color:'var(--white)' }}>Stardust Nexus</div>
            <small style={{ color:'rgba(234,217,196,0.7)' }}>Made with curiosity.</small>
          </div>
  
          <div style={{ display:'flex', gap:'1rem' }}>
            <a href="#" style={{ color:'rgba(234,217,196,0.8)' }}>GitHub</a>
            <a href="#" style={{ color:'rgba(234,217,196,0.8)' }}>Instagram</a>
            <a href="#" style={{ color:'rgba(234,217,196,0.8)' }}>Telegram</a>
            <a href="#" style={{ color:'rgba(234,217,196,0.8)' }}>YouTube</a>
            <a href="#" style={{ color:'rgba(234,217,196,0.8)' }}>Twitter</a>
          </div>
        </div>
      </footer>
    );
  }
  