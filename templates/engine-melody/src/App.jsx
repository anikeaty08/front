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
      

<div className="fixed top-0 w-full h-screen -z-10 opacity-50">
<video autoplay="" className="w-full h-full object-cover grayscale brightness-75 contrast-100" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/4b8627e3-f2e2-44a5-aa3c-557cf281e638/1.mp4"></video>

<div className="absolute inset-0 bg-gradient-to-b from-[#161618]/90 via-[#161618]/70 to-[#161618]"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-[#161618]/80 border-b border-white/10">
<nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-teal-400 text-2xl group-hover:text-teal-300 transition-colors" icon="solar:soundwave-square-linear"></iconify-icon>
<span className="text-base tracking-tight font-medium font-inter">Engine Melody</span>
</a>
<ul className="hidden lg:flex items-center gap-8">
<li><a className="text-sm text-teal-400 font-medium font-inter" href="#">Features</a></li>
<li><a className="text-sm text-white/70 hover:text-teal-400 transition font-inter" href="#">Pricing</a></li>
<li><a className="text-sm text-white/70 hover:text-teal-400 transition font-inter" href="#">Docs</a></li>
</ul>
<div className="flex items-center gap-4">
<a className="hidden lg:inline-block text-sm text-white/70 hover:text-teal-400 transition font-inter" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition text-sm font-semibold px-4 py-2 ring-1 ring-white/20 shadow-[0_2px_10px_rgba(20,184,166,0.2)]" href="#">
<span className="font-inter">Get started</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>
</header>

<main className="flex-1 flex flex-col pt-24 pb-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

<div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/10 px-3 py-1 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
<span className="text-xs font-medium tracking-wide text-teal-100">V2.4 IS NOW LIVE</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-inter drop-shadow-lg">
        The Audio Engine for <br className="hidden sm:block"/> Modern Applications.
      </h1>
<p className="mx-auto max-w-2xl text-lg text-white/70 mb-10 font-inter leading-relaxed">
        Process, analyze, and stream high-fidelity audio with our global edge network. 
        Engine Melody provides the infrastructure for the next generation of music and voice platforms.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition text-sm font-semibold px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.15)]">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
<span className="font-inter">View Demo</span>
</button>
<button className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 transition text-sm font-semibold px-6 py-3 rounded-lg text-white backdrop-blur-sm">
<iconify-icon className="text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="font-inter">Documentation</span>
</button>
</div>

<div className="mt-20 border-t border-white/10 pt-10">
<p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70">
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition duration-300" height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition duration-300" height="24" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition duration-300" height="36" icon="logos:stripe" width="96"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition duration-300" height="20" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition duration-300" height="28" icon="logos:spotify" width="96"></iconify-icon>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32" id="features">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition duration-500 overflow-hidden shadow-2xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/25 transition duration-500 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
<iconify-icon height="24" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-inter text-white">Stem Separation</h3>
<p className="text-sm text-white/70 leading-relaxed">
              Isolate vocals, drums, bass, and instruments in real-time with our proprietary AI models. Zero-latency processing for live DJ applications.
            </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition duration-500 overflow-hidden shadow-2xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/25 transition duration-500 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
<iconify-icon height="24" icon="solar:cloud-upload-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-inter text-white">Global CDN</h3>
<p className="text-sm text-white/70 leading-relaxed">
              Distribute audio assets instantly across 42 regions. Our smart caching ensures your users hit the nearest edge node, every time.
            </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition duration-500 overflow-hidden shadow-2xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/25 transition duration-500 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-inter text-white">DRM &amp; Security</h3>
<p className="text-sm text-white/70 leading-relaxed">
              Enterprise-grade encryption at rest and in transit. Dynamic watermarking and token-based access control to protect your IP.
            </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition duration-500 overflow-hidden shadow-2xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/25 transition duration-500 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-inter text-white">Deep Analytics</h3>
<p className="text-sm text-white/70 leading-relaxed">
              Track play counts, skip rates, and listener geography with granular precision. Export raw data or visualize via our dashboard.
            </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition duration-500 overflow-hidden shadow-2xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/25 transition duration-500 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
<iconify-icon height="24" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-inter text-white">Robust API</h3>
<p className="text-sm text-white/70 leading-relaxed">
              Fully documented REST and GraphQL endpoints. SDKs available for React, Python, Node.js, and Swift to speed up development.
            </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition duration-500 overflow-hidden shadow-2xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-pink-500/15 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/25 transition duration-500 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-inter text-white">Collaboration</h3>
<p className="text-sm text-white/70 leading-relaxed">
              Multi-user session support. Allow teams to comment on waveforms, version tracks, and approve mixes within a unified interface.
            </p>
</div>
</div>
</div>

<div className="mt-24 mb-16 relative overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1D] px-6 py-16 sm:px-16 sm:py-24 text-center shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-teal-500/30 blur-[120px] -z-10 rounded-full mix-blend-screen"></div>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 font-inter">Ready to amplify your product?</h2>
<p className="mx-auto max-w-xl text-lg text-white/70 mb-10 font-inter">
          Join 10,000+ developers building the future of audio. Start for free, scale as you grow.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition text-sm font-semibold px-6 py-3 shadow-[0_0_25px_rgba(13,148,136,0.4)] ring-1 ring-white/20">
<span className="font-inter">Get API Key</span>
</button>
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition text-sm font-semibold px-6 py-3 text-white">
<span className="font-inter">Contact Sales</span>
</button>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/10 bg-[#111113] pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-teal-400 text-xl" icon="solar:soundwave-square-linear"></iconify-icon>
<span className="text-lg font-semibold font-inter">Engine Melody </span>
</a>
<p className="text-sm text-white/50 leading-relaxed">
            The standard for programmable audio. Built by engineers, for engineers.
          </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-teal-400 transition" href="#">Features</a></li>
<li><a className="hover:text-teal-400 transition" href="#">SDKs</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Pricing</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-teal-400 transition" href="#">About</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Careers</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Blog</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-teal-400 transition" href="#">Privacy</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40">© 2026 Engine Melody Inc. All rights reserved.</p>
<div className="flex gap-4 text-white/40">
<a className="hover:text-white transition" href="#"><iconify-icon height="16" icon="logos:twitter" style={{filter: 'grayscale(100%) brightness(200%)'}} width="16"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon height="16" icon="logos:github-icon" style={{filter: 'grayscale(100%) brightness(200%)'}} width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
