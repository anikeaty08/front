import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <iconify-icon icon="solar:layers-minimalistic-linear" class="text-white text-base"></iconify-icon>
          </div>
          <span className="font-medium tracking-tight text-white">NexusFlow</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
          <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
          <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-light text-neutral-400 hover:text-white transition-colors hidden md:block">Log in</Link>
          <Link to="/signup" className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}