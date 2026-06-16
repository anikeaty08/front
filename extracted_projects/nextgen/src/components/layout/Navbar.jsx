import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl px-4 md:px-8 h-20 flex items-center justify-between border-b border-white/10 relative z-50 bg-black/80 backdrop-blur-md transition-all duration-1000 reveal-up is-revealed">
      {/* L-brackets for nav */}
      <div className="absolute bottom-[-1px] left-4 w-2 h-[1px] bg-white/40"></div>
      <div className="absolute bottom-[-1px] left-4 w-[1px] h-2 bg-white/40"></div>
      <div className="absolute bottom-[-1px] right-4 w-2 h-[1px] bg-white/40"></div>
      <div className="absolute bottom-[-1px] right-4 w-[1px] h-2 bg-white/40"></div>

      <Link to="/" className="flex items-center gap-2 font-medium text-lg tracking-tight hover:opacity-80 transition-opacity">
        <iconify-icon icon="solar:box-minimalistic-linear" class="text-2xl text-purple-400"></iconify-icon>
        <span className="tracking-tighter font-semibold">NextGen</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/60 tracking-wider uppercase">
        <Link to="/studio" className="hover:text-white transition-colors">Studio</Link>
        <Link to="/features" className="hover:text-white transition-colors">Features</Link>
        <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        <Link to="/work" className="hover:text-white transition-colors">Work</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Link 
          to="/access" 
          className="hidden md:flex items-center justify-center h-8 px-4 text-[10px] font-medium tracking-widest uppercase text-white hover:brightness-110 transition-all rounded-sm border border-white/10 shadow-lg" 
          style={{ background: 'linear-gradient(180deg, #5b21b6 0%, #3b0764 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }}
        >
          Access
        </Link>
        <button 
          className="text-white/60 hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-sm" 
          style={{ 
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5)', 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)', 
            border: '1px solid rgba(255,255,255,0.1)' 
          }}
        >
          <iconify-icon icon="solar:hamburger-menu-linear" class="text-xl"></iconify-icon>
        </button>
      </div>
    </nav>
  );
}