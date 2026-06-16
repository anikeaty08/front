import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
    isScrolled 
      ? 'bg-[#2d2a21]/90 backdrop-blur-md border-white/10 py-3' 
      : isHome 
        ? 'bg-transparent border-white/10 py-5' 
        : 'bg-[#efe9db] border-[#d8cfbf] py-5'
  }`;

  const textClasses = isHome || isScrolled ? 'text-white' : 'text-[#2f281f]';
  const textMutedClasses = isHome || isScrolled ? 'text-white/80' : 'text-[#5a5146]';
  const borderClasses = isHome || isScrolled ? 'border-white/70' : 'border-[#2f281f]/70';

  return (
    <>
      <header className={headerClasses}>
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className={`flex items-center gap-2 ${textClasses}`}>
            <div className={`h-5 w-5 rounded-full border ${borderClasses}`}></div>
            <span className="font-serif-custom text-xl tracking-tight">Serenique</span>
          </Link>

          <nav className={`hidden items-center gap-8 text-sm md:flex ${textMutedClasses}`}>
            <Link to="/about" className={`transition hover:${textClasses}`}>About</Link>
            <Link to="/services" className={`transition hover:${textClasses}`}>Services</Link>
            <Link to="/experience" className={`transition hover:${textClasses}`}>Experience</Link>
            <Link to="/contact" className={`transition hover:${textClasses}`}>Contact</Link>
          </nav>

          <div className={`hidden items-center gap-8 text-sm md:flex ${textMutedClasses}`}>
            <span>+6283 3044 100903</span>
            <Link to="/contact" className={`transition hover:${textClasses}`}>Talk to us ↗</Link>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden rounded-full border p-2 transition ${
              isHome || isScrolled ? 'border-white/20 text-white hover:bg-white/10' : 'border-[#cfc5b4] text-[#2f281f] hover:bg-[#cfc5b4]/20'
            }`}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#2d2a21] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl font-serif-custom">
          <Link to="/" className="hover:text-white/70 transition">Home</Link>
          <Link to="/about" className="hover:text-white/70 transition">About</Link>
          <Link to="/services" className="hover:text-white/70 transition">Services</Link>
          <Link to="/experience" className="hover:text-white/70 transition">Experience</Link>
          <Link to="/contact" className="hover:text-white/70 transition">Contact</Link>
          <div className="mt-8 text-sm font-sans text-white/50 tracking-widest uppercase">
            +6283 3044 100903
          </div>
        </div>
      </div>
    </>
  );
}