import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-300 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="flex items-center justify-between py-4 px-6 lg:px-12 w-full max-w-screen-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900">
          <iconify-icon icon="solar:slash-square-linear" className="text-2xl text-purple-600" strokeWidth="1.5"></iconify-icon>
          <span>platform</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-normal text-slate-600">
          <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors group">
            Products
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth="1.5"></iconify-icon>
          </button>
          <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors group">
            Solutions
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth="1.5"></iconify-icon>
          </button>
          <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors group">
            Developers
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth="1.5"></iconify-icon>
          </button>
          <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors group">
            Resources
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth="1.5"></iconify-icon>
          </button>
          <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 text-sm font-normal">
          <a href="#" className="hidden md:block px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors">Sign in</a>
          <a href="#" className="bg-purple-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300">
            Contact sales
            <iconify-icon icon="solar:arrow-right-linear" className="text-lg" strokeWidth="1.5"></iconify-icon>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;