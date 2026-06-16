import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});

// Initialize Lucide icons
lucide.createIcons();

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15, 23, 42, 0.8)';
    header.style.backdropFilter = 'blur(24px)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.05)';
    header.style.backdropFilter = 'blur(20px)';
  }
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/bganimation-xIKR0ZTWWoifZLAKROH7y9YL" width="100%"></iframe></div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
</div>
<header className="sticky top-0 z-50 w-full glass fade-in">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
<a className="flex items-center space-x-2 sm:space-x-3 group" href="#">
<div className="p-1.5 sm:p-2 rounded-xl glass-strong group-hover:bg-white/10 transition-all duration-300">
<i className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-lg sm:text-xl font-semibold tracking-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">NeoForge</span>
</a>
<nav className="hidden gap-6 lg:gap-8 text-sm font-medium md:flex">
<a className="relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 group" href="#">
        Extensions
        <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
<a className="relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 group" href="#">
        Workspace
        <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
<a className="relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 group" href="#">
        Resources
        <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
<a className="relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 group" href="#">
        Developers
        <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
<a className="relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 group" href="#">
        Enterprise
        <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
<a className="relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 group" href="#">
        Pricing
        <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
</nav>
<div className="flex items-center space-x-2 sm:space-x-4">
<a className="hidden text-sm font-medium px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:text-cyan-400 md:block" href="#">Sign In</a>
<a className="glass-strong px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-cyan-400/20 transition-all duration-300 hover:from-cyan-500/30 hover:to-violet-500/30 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20" href="#">
        Get Started
      </a>
<button className="md:hidden p-1.5 sm:p-2 rounded-lg glass-strong hover:bg-white/10 transition-all duration-300" id="mobileMenuBtn">
<i className="w-4 h-4 sm:w-5 sm:h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="hidden border-t border-white/10 px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4 md:hidden glass" id="mobileMenu">
<nav className="flex flex-col gap-2 sm:gap-3 text-sm font-medium">
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Extensions</a>
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Workspace</a>
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Resources</a>
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Developers</a>
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Enterprise</a>
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Pricing</a>
<div className="h-px bg-white/10 my-1 sm:my-2"></div>
<a className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-cyan-400" href="#">Sign In</a>
</nav>
</div>
</header>
<main className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-8 top-24 hidden h-64 w-48 -rotate-6 rounded-2xl glass-strong shadow-2xl lg:block animate-float">
<div className="p-4 lg:p-6 h-full flex flex-col">
<div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-3 lg:mb-4 shadow-lg">
<i className="w-5 h-5 lg:w-6 lg:h-6 text-white" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-white mb-1.5 lg:mb-2">ColorSync Pro</h3>
<p className="text-xs text-gray-400 leading-relaxed">Advanced color palette management and synchronization across your entire design system.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-xs text-cyan-400 font-medium">4.9★</span>
<span className="text-xs text-gray-500">12.5k users</span>
</div>
</div>
</div>
<div className="absolute right-16 top-40 hidden h-56 w-44 rotate-12 rounded-2xl glass-strong shadow-2xl lg:block animate-float-delayed">
<div className="p-4 lg:p-5 h-full flex flex-col">
<div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center mb-2.5 lg:mb-3 shadow-lg">
<i className="w-4 h-4 lg:w-5 lg:h-5 text-white" data-lucide="code" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-white mb-1.5 lg:mb-2 text-sm">DevTools</h3>
<p className="text-xs text-gray-400 leading-relaxed">Powerful development utilities for debugging and optimization.</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-xs text-cyan-400 font-medium">4.7★</span>
<span className="text-xs text-gray-500">8.2k</span>
</div>
</div>
</div>
</div>
<section className="flex max-w-6xl flex-col sm:px-6 lg:px-8 text-center mr-auto ml-auto pr-4 pl-4 items-center" style={{paddingTop: '120px', paddingBottom: '6rem'}}>
<div className="glass-strong p-3 sm:p-4 rounded-2xl mb-6 sm:mb-8 fade-in">
<i className="h-10 w-10 sm:h-12 sm:w-12 text-cyan-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h1 className="sm:mt-6 max-w-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text fade-in-delayed text-xl font-medium text-transparent tracking-tighter bg-gradient-to-r from-white via-cyan-100 to-violet-200 mt-4">
      Supercharge your<br className="hidden sm:block"/>creative workflow.
    </h1>
<p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed px-2 sm:px-0 fade-in-delayed-2">
      Unlock infinite possibilities with our ecosystem of premium plugins. Seamless integrations, powerful tools, and intelligent automation that transforms the way you create.
    </p>
<div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row fade-in-delayed-3">
<a className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-violet-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25" href="#">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="store" strokeWidth="1.5"></i>
          Explore Marketplace
        </span>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</a>
<a className="group inline-flex items-center justify-center rounded-2xl glass-strong px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl" href="#">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i>
          View Documentation
        </span>
</a>
</div>

<div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 fade-in-delayed-3">

<div className="card hover:scale-105 transition-transform duration-300">
<div className="blob blob-cyan"></div>
<div className="bg bg-[url(https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7?w=800&amp;q=80)] bg-cover"></div>
<div className="card-content">
<div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
<div className="text-sm text-gray-300">Active Plugins</div>
</div>
</div>

<div className="card hover:scale-105 transition-transform duration-300">
<div className="blob blob-violet" style={{animationDelay: '1s'}}></div>
<div className="bg bg-[url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&amp;q=80)] bg-cover"></div>
<div className="card-content">
<div className="text-3xl font-bold text-violet-400 mb-2">2.5M+</div>
<div className="text-sm text-gray-300">Downloads</div>
</div>
</div>

<div className="card hover:scale-105 transition-transform duration-300">
<div className="blob blob-emerald" style={{animationDelay: '2s'}}></div>
<div className="bg bg-[url(https://images.unsplash.com/photo-1668681919287-7367677cdc4c?w=800&amp;q=80)] bg-cover"></div>
<div className="card-content">
<div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
<div className="text-sm text-gray-300">Developers</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative border-t border-white/10 glass px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
<div className="flex items-center space-x-2 sm:space-x-3">
<div className="p-1.5 sm:p-2 rounded-lg glass-strong">
<i className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-base sm:text-lg font-semibold tracking-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">NeoForge</span>
</div>
<div className="text-xs sm:text-sm text-slate-400">
        © 2024 NeoForge Studio — Crafted with precision
      </div>
</div>
</div>
</footer>


    </>
  );
}
