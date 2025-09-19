export default function Navbar() {
    return (
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">Stardust <span style={{opacity:.9}}>Nexus</span></div>
  
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-sm">Features</a>
            <a href="#how" className="text-sm">How it works</a>
            <a href="#showcase" className="text-sm">Showcase</a>
            <a href="#about" className="text-sm">About</a>
          </nav>
  
          <div className="flex items-center gap-3">
            <button className="btn btn-outline hidden md:inline">Sign in</button>
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
      </header>
    );
  }
  