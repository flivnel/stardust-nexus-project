import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
