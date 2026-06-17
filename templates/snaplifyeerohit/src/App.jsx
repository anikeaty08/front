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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-800 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white text-lg font-semibold tracking-tight group-hover:text-indigo-100 transition-colors">Snaplifye</span>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Log In</a>
<a className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all shadow-[0_0_15px_-3px_rgba(79,70,229,0.3)] border border-indigo-500" href="#programs">
                        Get Started
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-300 hover:text-white focus:outline-none">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="home">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-xs font-medium text-indigo-400 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New Workshops Available
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Master the Art of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Digital Craftsmanship</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
                Project-based learning for modern developers. Buy production-ready source code, join live workshops, and deploy your next big idea with Snaplifye.
            </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3.5 rounded-lg bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#projects">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
                    Browse Projects
                </a>
<a className="px-8 py-3.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" href="#programs">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
                    View Programs
                </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-800/50">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Powered by Modern Stacks</p>
<div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-slate-400" icon="lucide:code-2" width="32"></iconify-icon>
<iconify-icon className="text-slate-400" icon="lucide:database" width="32"></iconify-icon>
<iconify-icon className="text-slate-400" icon="lucide:server" width="32"></iconify-icon>
<iconify-icon className="text-slate-400" icon="lucide:cloud" width="32"></iconify-icon>
<iconify-icon className="text-slate-400" icon="lucide:layout" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950 relative border-t border-slate-900" id="programs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Live Programs</h2>
<p className="mt-2 text-slate-400">Interactive workshops to level up your engineering skills.</p>
</div>
<a className="text-indigo-400 text-sm font-medium hover:text-indigo-300 flex items-center gap-1" href="#">
                    View all programs <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                Full Stack
                            </span>
<span className="text-slate-500 text-xs font-medium">4 Weeks</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-200 transition-colors">MERN Stack Mastery</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Build a scalable e-commerce platform from scratch using MongoDB, Express, React, and Node.</p>
<div className="flex items-center gap-3 mb-6">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=3"/>
</div>
<span className="text-xs text-slate-500">+42 joined</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800">
<span className="text-white font-medium">$199</span>
<button className="text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors">Enroll</button>
</div>
</div>
</div>

<div className="group relative rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                DevOps
                            </span>
<span className="text-slate-500 text-xs font-medium">2 Weeks</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-200 transition-colors">CI/CD with Render</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Automate your deployments using GitHub Actions, Docker, and Render for zero-downtime updates.</p>
<div className="flex items-center gap-3 mb-6">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=4"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=5"/>
</div>
<span className="text-xs text-slate-500">+18 joined</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800">
<span className="text-white font-medium">$99</span>
<button className="text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">Enroll</button>
</div>
</div>
</div>

<div className="group relative rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                Backend
                            </span>
<span className="text-slate-500 text-xs font-medium">Self-Paced</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-purple-200 transition-colors">Advanced Node Patterns</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Deep dive into Streams, Buffers, Worker Threads, and System Design concepts for Node.js.</p>
<div className="flex items-center gap-3 mb-6">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=8"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=9"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800" src="https://i.pravatar.cc/100?img=10"/>
</div>
<span className="text-xs text-slate-500">+120 joined</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800">
<span className="text-white font-medium">$149</span>
<button className="text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">Enroll</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950 relative" id="projects">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Project Marketplace</h2>
<p className="mt-3 text-slate-400">Production-ready templates and full-stack applications. Save weeks of development time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
<div className="aspect-video bg-slate-800 relative group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-600 w-12 h-12" icon="lucide:layout-dashboard" width="48"></iconify-icon>
</div>
<div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium border border-white/10">
                            v2.1.0
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">SaaS Starter Kit</h3>
<p className="text-xs text-slate-500">Next.js • Tailwind • Prisma</p>
</div>
<div className="text-right">
<span className="block text-lg font-semibold text-white">$49</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">
                            Complete authentication, stripe integration, and dashboard UI ready to deploy on Vercel or Netlify.
                        </p>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-2 rounded-lg bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                                Buy Source
                            </button>
<a className="px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors flex items-center justify-center" href="#" title="Live Preview">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
<div className="aspect-video bg-slate-800 relative group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-600 w-12 h-12" icon="lucide:shopping-cart" width="48"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">E-Commerce Core</h3>
<p className="text-xs text-slate-500">React • Redux • Node</p>
</div>
<div className="text-right">
<span className="block text-lg font-semibold text-white">$89</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">
                            Headless commerce solution with admin dashboard, inventory management, and analytics.
                        </p>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-2 rounded-lg bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                                Buy Source
                            </button>
<a className="px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors flex items-center justify-center" href="#" title="Live Preview">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
<div className="aspect-video bg-slate-800 relative group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-600 w-12 h-12" icon="lucide:message-square" width="48"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Chat Realtime</h3>
<p className="text-xs text-slate-500">Socket.io • Express • Mongo</p>
</div>
<div className="text-right">
<span className="block text-lg font-semibold text-white">Free</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">
                            Real-time messaging app with room support, media sharing, and read receipts. Perfect for learning.
                        </p>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                                Download
                            </button>
<a className="px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors flex items-center justify-center" href="#" title="Live Preview">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" href="#">
                    View full marketplace <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-slate-900" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Why developers choose Snaplifye</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:rocket" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Production Ready</h4>
<p className="text-sm text-slate-400 leading-relaxed">Code that adheres to industry standards. Clean architecture, secure, and ready to scale.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
<iconify-icon className="text-cyan-400" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Secure &amp; Verified</h4>
<p className="text-sm text-slate-400 leading-relaxed">Every project is vetted for security vulnerabilities. Environment variables handled securely.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
<iconify-icon className="text-purple-400" icon="lucide:users" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Community &amp; Support</h4>
<p className="text-sm text-slate-400 leading-relaxed">Get help from authors and the community. Lifetime updates on purchased products.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"></div>
<div className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
<div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="space-y-3">
<div className="h-2 bg-slate-800 rounded w-3/4 animate-pulse"></div>
<div className="h-2 bg-slate-800 rounded w-1/2 animate-pulse"></div>
<div className="h-2 bg-slate-800 rounded w-5/6 animate-pulse"></div>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="h-20 bg-slate-800/50 rounded-lg border border-slate-800"></div>
<div className="h-20 bg-slate-800/50 rounded-lg border border-slate-800"></div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Deployment Status</p>
<p className="text-xs font-medium text-white">Live on Netlify</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" width="14"></iconify-icon>
</div>
<span className="text-white text-base font-semibold tracking-tight">Snaplifye</span>
</div>
<p className="text-sm text-slate-500 mb-6">
                        Premium digital resources and learning for the modern web ecosystem.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="https://bit.ly/49mblEu" target="_blank"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://sorts.pro/WxeOhv" target="_blank"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://bit.ly/3YFDdx8" target="_blank"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://bit.ly/4oZOfrL" target="_blank"><iconify-icon icon="lucide:youtube" width="18"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#programs">Workshops</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#projects">Marketplace</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#about">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Admin Portal</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5" icon="lucide:mail" width="16"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="mailto:snaplifye@gmail.com">snaplifye@gmail.com</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5" icon="lucide:globe" width="16"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="https://www.snaplifye.com">www.snaplifye.com</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-0.5" icon="lucide:message-circle" width="16"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="https://bit.ly/4qmjPkO" target="_blank">WhatsApp Support</a>
</li>
<div className="pt-4 flex gap-4">
<a className="text-slate-400 hover:text-blue-500 transition-colors" href="https://bit.ly/3KWucwC" target="_blank"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-pink-500 transition-colors" href="https://bit.ly/4phykWc" target="_blank"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
</div>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 Snaplifye. All rights reserved.</p>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
