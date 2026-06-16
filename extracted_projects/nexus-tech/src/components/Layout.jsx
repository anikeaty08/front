import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`transition-colors ${isActive ? 'text-white' : 'hover:text-white text-neutral-400'}`}
    >
      {children}
    </Link>
  );
};

export default function Layout({ children }) {
  return (
    <>
      {/* Global Corner Brackets */}
      <div className="fixed top-0 left-0 w-4 h-4 border-t border-l border-neutral-500/50 pointer-events-none z-50"></div>
      <div className="fixed top-0 right-0 w-4 h-4 border-t border-r border-neutral-500/50 pointer-events-none z-50"></div>
      <div className="fixed bottom-0 left-0 w-4 h-4 border-b border-l border-neutral-500/50 pointer-events-none z-50"></div>
      <div className="fixed bottom-0 right-0 w-4 h-4 border-b border-r border-neutral-500/50 pointer-events-none z-50"></div>

      {/* Main Container Frame */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto border-x border-neutral-800/60 min-h-screen flex flex-col">
        
        {/* Vertical Guide Lines */}
        <div className="absolute inset-y-0 left-1/4 w-px bg-neutral-800/30 pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 left-2/4 w-px bg-neutral-800/30 pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 left-3/4 w-px bg-neutral-800/30 pointer-events-none hidden md:block"></div>

        {/* Navigation */}
        <nav className="w-full border-b border-neutral-800/60 flex items-center justify-between py-6 px-6 md:px-12 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
              <iconify-icon icon="solar:box-linear" className="text-white text-xl" stroke-width="1.5"></iconify-icon>
            </div>
          </Link>
          
          <ul className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-neutral-400">
            <li><NavLink to="/">Home</NavLink></li>
            <li className="w-1 h-px bg-neutral-700"></li>
            <li><NavLink to="/framework">Framework</NavLink></li>
            <li className="w-1 h-px bg-neutral-700"></li>
            <li><NavLink to="/methodology">Methodology</NavLink></li>
            <li className="w-1 h-px bg-neutral-700"></li>
            <li><NavLink to="/modules">Modules</NavLink></li>
          </ul>
          
          <button className="md:hidden text-neutral-400 hover:text-white transition-colors">
            <iconify-icon icon="solar:hamburger-menu-linear" className="text-2xl" stroke-width="1.5"></iconify-icon>
          </button>
        </nav>

        {/* Page Content */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Footer Expanded Details */}
        <footer className="py-16 px-6 md:px-12 flex flex-col border-t border-neutral-800/60 bg-neutral-950 mt-auto relative overflow-hidden">
          {/* Subtle Background Details */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.03)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 relative z-10">
            
            {/* Column 1: Brand & Desc */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center rounded-sm bg-neutral-900/50">
                  <iconify-icon icon="solar:box-linear" className="text-white text-2xl" stroke-width="1.5"></iconify-icon>
                </div>
                <div>
                  <div className="text-xl text-white tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>NEXUS</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">System Architecture</div>
                </div>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed mb-6 pr-4">
                Procedural generation and structural frameworks designed for infinite scalability and absolute structural precision.
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 w-max">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                Systems Operational
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">Core Sectors</h4>
              <ul className="flex flex-col gap-4 text-xs text-neutral-400">
                <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600"></iconify-icon> Home</Link></li>
                <li><Link to="/framework" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600"></iconify-icon> Framework</Link></li>
                <li><Link to="/methodology" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600"></iconify-icon> Methodology</Link></li>
                <li><Link to="/modules" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-600"></iconify-icon> Modules</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">Resources</h4>
              <ul className="flex flex-col gap-4 text-xs text-neutral-400">
                <li><Link to="/docs" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:document-text-linear" className="text-neutral-600"></iconify-icon> Documentation</Link></li>
                <li><Link to="/api" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" className="text-neutral-600"></iconify-icon> API Reference</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:shield-warning-linear" className="text-neutral-600"></iconify-icon> Security Protocol</Link></li>
                <li><Link to="/topology" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:database-linear" className="text-neutral-600"></iconify-icon> Network Topology</Link></li>
              </ul>
            </div>

            {/* Column 4: Comm-Link */}
            <div className="flex flex-col">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">Comm-Link</h4>
              <p className="text-xs text-neutral-500 mb-4">Receive cyclical updates on system architecture and newly deployed modules.</p>
              <div className="flex w-full mb-4 border border-neutral-700 bg-neutral-900/50 focus-within:border-cyan-500/50 transition-colors">
                <input type="email" placeholder="IDENTIFIER" className="bg-transparent text-xs text-white px-4 py-3 outline-none w-full placeholder:text-neutral-600 tracking-widest uppercase" />
                <button className="px-4 text-neutral-400 hover:text-white border-l border-neutral-700 hover:bg-neutral-800 transition-colors">
                  <iconify-icon icon="solar:plain-2-linear" className="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-800/60 text-[10px] font-medium tracking-widest uppercase text-neutral-500 relative z-10">
            <div className="mb-4 md:mb-0 flex items-center gap-2 flex-wrap justify-center">
              <span>NEXUS © 2026, SYSTEM</span>
              <span className="w-1 h-1 bg-neutral-700 rounded-full mx-2 hidden md:block"></span>
              <span>VERSION 4.2.0</span>
            </div>
            
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <div className="flex gap-4 pl-6 border-l border-neutral-800/60 ml-2">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-cyan-500 hover:text-white transition-colors"><iconify-icon icon="solar:twitter-linear" className="text-lg"></iconify-icon></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" className="text-[14px] mb-[2px]"></iconify-icon></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-red-500 hover:text-white transition-colors"><iconify-icon icon="solar:play-linear" className="text-lg"></iconify-icon></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}