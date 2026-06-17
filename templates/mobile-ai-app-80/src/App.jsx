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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-start overflow-hidden">
<div className="absolute top-[-20%] w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" style={{transform: 'translateZ(0)'}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold tracking-tighter text-lg text-white flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:augmented-reality-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    AURA
                </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#technology">Technology</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="h-8 px-4 rounded-full bg-white text-black text-sm font-medium flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#">
                    Get the App
                </a>
</div>
</div>
</header>
<main className="flex-grow z-10 relative mt-24">

<section className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Aura 2.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 max-w-4xl">
                Intelligence in your pocket.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mb-10 leading-relaxed">
                Experience an AI that sees, hears, and understands your world. Designed from the ground up to run seamlessly on your mobile device.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="h-12 px-6 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors w-full sm:w-auto justify-center" href="#">
<iconify-icon className="text-xl" icon="solar:apple-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Download for iOS
                </a>
<a className="h-12 px-6 rounded-full bg-neutral-900 border border-white/10 text-white text-sm font-medium flex items-center gap-2 hover:bg-neutral-800 transition-colors w-full sm:w-auto justify-center" href="#">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Download for Android
                </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-32">
<div className="relative w-full max-w-md mx-auto aspect-[1/2] md:aspect-[9/16] rounded-[2.5rem] md:rounded-[3rem] border-[8px] border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl shadow-indigo-500/10 flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-20"></div>

<div className="flex-grow relative flex flex-col justify-end p-6 z-10">

<div className="space-y-4 mb-8 w-full">
<div className="self-end bg-neutral-800/80 backdrop-blur-md rounded-2xl rounded-tr-sm p-4 w-[80%] ml-auto border border-white/5">
<p className="text-sm text-neutral-200">Summarize my notes from the design meeting today.</p>
</div>
<div className="self-start bg-indigo-500/10 backdrop-blur-md rounded-2xl rounded-tl-sm p-4 w-[85%] border border-indigo-500/20">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-indigo-400">Aura AI</span>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">Here is the summary: The team agreed to move forward with the darker color palette. Final assets are due by Friday.</p>
</div>
</div>

<div className="h-14 w-full bg-neutral-900/80 backdrop-blur-xl rounded-full border border-white/10 flex items-center px-4 justify-between">
<span className="text-sm text-neutral-500">Ask Aura anything...</span>
<div className="flex items-center gap-3 text-neutral-400">
<iconify-icon className="text-lg hover:text-white transition-colors cursor-pointer" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg hover:text-white transition-colors cursor-pointer" icon="solar:microphone-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Unprecedented capabilities.</h2>
<p className="text-base text-neutral-400 max-w-xl mx-auto">Powered by next-generation neural engines, Aura operates with speed and precision previously impossible on mobile.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">

<div className="md:col-span-2 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon className="text-2xl" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Visual Intelligence</h3>
<p className="text-sm text-neutral-400 max-w-md">Point your camera at anything. Aura identifies objects, translates text in real-time, and provides contextual information instantly.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">On-Device Processing</h3>
<p className="text-sm text-neutral-400">Zero latency. Complete privacy. Your data never leaves your phone unless you choose to share it.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon className="text-2xl" icon="solar:microphone-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Fluid Voice</h3>
<p className="text-sm text-neutral-400">Speak naturally. Interrupt, change topics, or ask complex multi-part questions effortlessly.</p>
</div>
</div>

<div className="md:col-span-2 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10 w-full flex flex-col h-full">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon className="text-2xl" icon="solar:code-scan-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Action Oriented</h3>
<p className="text-sm text-neutral-400 max-w-md">More than just chat. Aura connects with your apps to set reminders, draft emails, and manage your calendar automatically.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-neutral-950">
<div className="max-w-4xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to upgrade your mind?</h2>
<p className="text-base text-neutral-400 mb-10 max-w-lg mx-auto">Join hundreds of thousands of users who have made Aura their daily AI companion. Free to start.</p>
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-all">
                    Download Aura Now
                </button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0a0a0a] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 font-semibold tracking-tighter text-white">
<iconify-icon className="text-xl" icon="solar:augmented-reality-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                AURA
            </div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Discord</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 Aura Technologies Inc.
            </div>
</div>
</footer>

    </>
  );
}
