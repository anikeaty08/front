import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import 'iconify-icon';

export default function Layout() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change & close mobile menu
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Preloader & Global Scroll Reveal Logic
  useEffect(() => {
    const timer = setTimeout(() => setIsPreloading(false), 1500);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    // Allow DOM to update after route change before observing
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="antialiased select-none font-sans bg-bgPrimary text-textPrimary relative min-h-screen flex flex-col">
      
      {/* Preloader */}
      <div id="preloader" className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bgPrimary transition-opacity duration-700 ${isPreloading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative flex flex-col items-center">
          <div className="w-20 h-20 mb-6 relative flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current text-goldPrimary fill-none stroke-[1.5]">
              <path d="M30 80 V20 L70 80 V20 M30 50 H70" strokeLinecap="round" strokeLinejoin="round"></path>
              <circle cx="50" cy="50" r="45" strokeDasharray="6" strokeLinecap="round"></circle>
            </svg>
          </div>
          <h2 className="font-serif text-2xl tracking-[0.3em] text-textPrimary uppercase">N E R E O</h2>
          <p className="text-[9px] tracking-[0.5em] text-goldPrimary uppercase mt-2">Seafood Atelier</p>
          <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-goldPrimary to-transparent mt-6 overflow-hidden relative">
            <div className="h-full bg-white absolute left-0 top-0 w-1/2 animate-[shimmer_1.5s_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="fixed flex transition-all duration-500 lg:px-16 bg-[#050505]/40 w-full h-24 z-50 border-transparent border-b px-6 top-0 left-0 backdrop-blur-2xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <svg className="h-12 w-12 text-goldPrimary transition duration-500 group-hover:scale-105 group-hover:text-[#F0D28A]" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="29" stroke="currentColor" strokeWidth="1.5"></circle>
            <path d="M23 56V24L57 57V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M28 18L40 12L52 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M21 20L16 17M59 20L64 17M40 68V61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
          </svg>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] text-textPrimary uppercase leading-tight">Nereo</span>
            <span className="text-[7.5px] tracking-[0.35em] text-goldPrimary uppercase">Seafood Atelier</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {['About', 'Menu', 'Philosophy', 'Gallery', 'Reservations'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-goldPrimary hover:after:w-full after:transition-all after:duration-300 ${pathname === `/${item.toLowerCase()}` ? 'text-goldPrimary after:w-full' : 'text-textSecondary hover:text-goldPrimary after:w-0'}`}>
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link to="/reservations" className="hidden sm:inline-block border border-goldPrimary/60 px-6 py-3 text-[10px] tracking-[0.15em] font-medium text-textPrimary hover:bg-goldPrimary hover:text-bgPrimary hover:border-goldPrimary transition-all duration-500 uppercase rounded-none">
            Reserve a Table
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-textPrimary hover:text-goldPrimary transition-colors" aria-label="Toggle Menu">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-bgSecondary transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out flex flex-col justify-between p-8 pt-32`}>
        <nav className="flex flex-col gap-6">
          <Link to="/" className="text-3xl font-serif tracking-widest text-textPrimary uppercase">Home</Link>
          {['About', 'Menu', 'Philosophy', 'Gallery', 'Reservations'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-3xl font-serif tracking-widest text-textPrimary uppercase">
              {item}
            </Link>
          ))}
        </nav>
        <div className="border-t border-borderGold/30 pt-8">
          <p className="text-xs text-textMuted tracking-wider">RESERVATIONS & ENQUIRIES</p>
          <p className="text-lg text-goldPrimary font-serif mt-2">+1 (555) 234-5678</p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-bgSecondary border-t border-borderGold/10 pt-20 pb-12 relative overflow-hidden mt-auto">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center border border-goldPrimary/40 rounded-full">
                <span className="font-serif text-xl text-goldPrimary">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.25em] text-textPrimary uppercase">Nereo</span>
                <span className="text-[9px] tracking-[0.35em] text-goldPrimary uppercase">Seafood Atelier</span>
              </div>
            </Link>
            <p className="text-xs text-textMuted font-light leading-relaxed max-w-sm">
              Crafting elite maritime masterpieces daily under candlelight. Uncompromising standard of taste, aesthetic, and exclusivity.
            </p>
          </div>
          
          <div className="md:col-span-4 space-y-6 md:pl-12">
            <h4 className="text-[10px] tracking-[0.2em] text-goldPrimary font-bold uppercase">Quick Directives</h4>
            <ul className="space-y-3 text-xs text-textSecondary font-light">
              <li><Link to="/about" className="hover:text-goldPrimary transition-colors">Our Gastronomy Story</Link></li>
              <li><Link to="/menu" className="hover:text-goldPrimary transition-colors">Weekly Chef Collection</Link></li>
              <li><Link to="/philosophy" className="hover:text-goldPrimary transition-colors">Wine Cellar & Reserve</Link></li>
              <li><Link to="/reservations" className="hover:text-goldPrimary transition-colors">Book Private Events</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] tracking-[0.2em] text-goldPrimary font-bold uppercase">Atelier Address</h4>
            <p className="text-xs text-textSecondary font-light leading-relaxed">
              42 Ocean Atelier Avenue, Lower East Coast Harbor,<br />Suite 100, New York, NY
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: "simple-icons:instagram", label: "Instagram" },
                { icon: "simple-icons:facebook", label: "Facebook" },
                { icon: "solar:map-point-linear", label: "Location" }
              ].map((social, i) => (
                <a key={i} href="#" aria-label={social.label} className="w-8 h-8 rounded-full border border-borderGold/20 flex items-center justify-center text-textMuted hover:text-goldPrimary hover:border-goldPrimary transition-all">
                  <iconify-icon icon={social.icon} width="16"></iconify-icon>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 border-t border-borderGold/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-textMuted tracking-wider">© 2025 Nereo Seafood Atelier. All Rights Reserved.</p>
          <div className="flex gap-6 text-[10px] text-textMuted tracking-wider">
            <Link to="#" className="hover:text-goldPrimary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-goldPrimary transition-colors">Terms of Atelier Dining</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}