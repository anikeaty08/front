import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');

        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1024) {
                if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    sidebar.classList.add('-translate-x-full');
                }
            }
        });

        // Auto-resize textarea
        const textarea = document.querySelector('textarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed left-0 top-0 h-full w-64 bg-zinc-900/50 backdrop-blur-xl border-r border-zinc-800 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" id="sidebar">
<div className="p-6">

<div className="mb-8">
<h1 className="text-xl font-semibold tracking-tight text-green-400">AIBUILDER</h1>
</div>

<nav className="space-y-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 glow-green-subtle" href="#">
<i className="w-4 h-4" data-lucide="home" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="grid-3x3" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Apps</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Deployment</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Usage</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Teams</span>
</a>
</nav>

<div className="mt-8">
<h3 className="text-sm font-medium text-zinc-500 mb-3 uppercase tracking-wide">Templates</h3>
<div className="space-y-1">
<a className="block px-3 py-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200" href="#">E-commerce</a>
<a className="block px-3 py-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200" href="#">SaaS Dashboard</a>
<a className="block px-3 py-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200" href="#">Portfolio</a>
<a className="block px-3 py-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200" href="#">Landing Page</a>
<a className="block px-3 py-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200" href="#">CRM</a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&amp;h=32&amp;fit=crop&amp;crop=face&amp;auto=format"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-zinc-400 truncate">john@example.com</p>
</div>
</div>
</div>
</div>

<button className="fixed top-4 left-4 z-60 lg:hidden bg-zinc-900/80 backdrop-blur-lg p-2 rounded-lg border border-zinc-700" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="lg:ml-64 min-h-screen">

<header className="p-6 lg:p-8 border-b border-zinc-800 bg-black/50 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="fade-in">
<h2 className="text-2xl lg:text-3xl font-semibold text-green-400 tracking-tight">Hi John! 👋</h2>
<p className="text-zinc-400 mt-1">Ready to build something amazing?</p>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-green-500/50 transition-colors duration-200">
<i className="w-5 h-5" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-green-500/50 transition-colors duration-200">
<i className="w-5 h-5" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</header>

<main className="p-6 lg:p-8">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-12 slide-up">
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                        Turn your <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">ideas</span> into apps with <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">AI</span>
</h1>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Describe your vision in plain English and watch as AI transforms it into a fully functional application in minutes.
                    </p>
</div>

<div className="mb-8 slide-up" style={{animationDelay: '0.2s'}}>
<div className="relative max-w-3xl mx-auto">
<div className="gradient-border rounded-2xl p-1">
<div className="bg-zinc-900 rounded-2xl p-6">
<textarea className="w-full bg-transparent text-white placeholder-zinc-500 resize-none border-none outline-none text-lg leading-relaxed" placeholder="Describe your app idea in one or two sentences..." rows="3"></textarea>
<div className="flex items-center justify-between mt-4">
<span className="text-sm text-zinc-500">Press Tab for AI suggestions</span>
<button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200 glow-green">
<span>Start Building</span>
<i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="slide-up" style={{animationDelay: '0.4s'}}>
<h3 className="text-center text-zinc-500 mb-6">Or start with a template</h3>
<div className="flex flex-wrap justify-center gap-3">
<button className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-green-500/50 px-4 py-3 rounded-lg transition-all duration-200 hover:glow-green-subtle">
<i className="w-4 h-4 text-red-400" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Clone Netflix</span>
</button>
<button className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-green-500/50 px-4 py-3 rounded-lg transition-all duration-200 hover:glow-green-subtle">
<i className="w-4 h-4 text-blue-400" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Doc</span>
</button>
<button className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-green-500/50 px-4 py-3 rounded-lg transition-all duration-200 hover:glow-green-subtle">
<i className="w-4 h-4 text-purple-400" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Dashboard</span>
</button>
<button className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-green-500/50 px-4 py-3 rounded-lg transition-all duration-200 hover:glow-green-subtle">
<i className="w-4 h-4 text-green-400" data-lucide="edit-3" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">Blog</span>
</button>
<button className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-green-500/50 px-4 py-3 rounded-lg transition-all duration-200 hover:glow-green-subtle">
<i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">More</span>
</button>
</div>
</div>

<div className="mt-16 slide-up" style={{animationDelay: '0.6s'}}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
<div className="text-zinc-400">Apps Created</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-blue-400 mb-2">&lt; 5min</div>
<div className="text-zinc-400">Average Build Time</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
<div className="text-zinc-400">Uptime</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
<div className="absolute top-3/4 left-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
</div>


    </>
  );
}
