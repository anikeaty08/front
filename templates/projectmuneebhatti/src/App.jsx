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



        const video = document.getElementById('hero-video');
        const videoSrc = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8';
        
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
        }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tight text-white">scale</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Government</a>
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Customers</a>
<a className="text-sm font-normal text-gray-300 hover:text-white transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-6">
<a className="btn-gradient-border px-5 py-2 rounded-full text-xs font-medium hover:brightness-125 transition-all flex items-center gap-2 group" href="#">
                    Book a Demo
                    <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="hidden md:block text-xs font-normal text-gray-300 hover:text-white transition-colors" href="#">Log In</a>
</div>
</div>
</nav>


<main className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden w-full">

<div className="absolute inset-0 w-full h-full -z-10">
<div className="w-full h-full relative video-mask">

<video autoplay="" className="w-full h-full object-cover opacity-50" id="hero-video" loop="" muted="" playsinline=""></video>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/60"></div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] glow-effect pointer-events-none opacity-60"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10 mt-10">
<h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] font-medium tracking-tight text-white mb-8 drop-shadow-2xl">
                Power <span className="text-gradient">Generative AI</span><br/>With Your Data
            </h1>
<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed relative z-20 drop-shadow-md">
                Make the best models with the best data. Scale Data Engine leverages your enterprise data, and with Scale GenAI Platform, safely unlocks the value of AI for automation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20">
<a className="w-full sm:w-auto btn-gradient-border bg-[#0f0f10]/80 backdrop-blur-md px-8 py-3.5 rounded-full text-base font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2 group" href="#">
                    Book a Demo
                    <iconify-icon className="text-lg text-purple-400 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3.5 text-base font-medium text-white hover:text-purple-300 transition-colors flex items-center justify-center gap-2 group backdrop-blur-md rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10" href="#">
                    Build AI
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-32 w-full max-w-[90%] mx-auto px-6 relative z-20">
<p className="text-center text-xs font-normal text-gray-400 mb-10 border-b border-white/10 pb-2 inline-block mx-auto left-1/2 relative -translate-x-1/2">
                Scale works with Generative AI Companies, <span className="text-gray-200 border-b border-gray-500">U.S. Government Agencies</span> &amp; Enterprises
            </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70">
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
<div className="border border-white p-1 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-2xl text-white" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-[0.2em] hidden">ARMY</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
<iconify-icon className="text-4xl text-white drop-shadow-lg" icon="solar:shield-check-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-wider font-bold leading-none text-shadow">U.S. AIR FORCE</span>
</div>
</div>
<div className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
<div className="relative">
<iconify-icon className="text-3xl text-white rotate-45 drop-shadow-lg" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-[10px] font-bold uppercase tracking-widest text-shadow">Defense</span>
<span className="text-[10px] font-normal uppercase tracking-widest text-gray-400">Innovation Unit</span>
</div>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
<iconify-icon className="text-3xl text-white drop-shadow-lg" icon="solar:atom-linear"></iconify-icon>
<span className="text-lg font-bold tracking-widest text-shadow">CDAO</span>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 pb-24 pt-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 md:p-8 flex items-end h-[400px] relative">
<img alt="Speaker" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 w-full">
<span className="text-[10px] font-medium text-purple-300 mb-2 block uppercase tracking-wider">Tech Talk</span>
<h3 className="text-lg font-medium text-white mb-1">Building Enterprise AI</h3>
<p className="text-sm text-gray-400">by Eric Schmidt</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 md:p-8 flex items-end h-[400px] relative">
<img alt="Speaker" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 w-full">
<span className="text-[10px] font-medium text-blue-300 mb-2 block uppercase tracking-wider">Tech Talk</span>
<h3 className="text-lg font-medium text-white mb-1">Future of Computer Vision</h3>
<p className="text-sm text-gray-400">by Fei-Fei Li</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 md:p-8 flex items-end h-[400px] relative">
<img alt="Speaker" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 w-full">
<span className="text-[10px] font-medium text-pink-300 mb-2 block uppercase tracking-wider">Tech Talk</span>
<h3 className="text-lg font-medium text-white mb-1">Open Source Models</h3>
<p className="text-sm text-gray-400">by Nat Friedman</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="text-xl font-medium text-white">scale</span>
<p className="text-xs text-gray-500 mt-2">Powering the AI revolution.</p>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="mdi:twitter"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="mdi:linkedin"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="mdi:github"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
