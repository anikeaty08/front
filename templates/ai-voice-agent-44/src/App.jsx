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
      

<div className="absolute inset-0 z-0 pointer-events-none flex justify-center w-full">
<div className="w-[800px] h-[400px] bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl rounded-full translate-y-[-50%]"></div>
</div>

<header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-lg font-medium tracking-tighter">CVAI</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Platform</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Solutions</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Developers</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</header>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center max-w-4xl mx-auto w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
<iconify-icon className="text-zinc-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
            Introducing the new interactive voice agent
        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6">
            Conversational intelligence for the modern web
        </h1>
<p className="text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
            Deploy hyper-realistic voice agents to your platform in minutes. Enhance user engagement, automate workflows, and provide round-the-clock support with unparalleled latency.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                Deploy Agent
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                Read Documentation
            </button>
</div>
<div className="mt-16 flex items-center gap-2 text-sm text-zinc-500">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Try the widget in the bottom right corner of your screen.</span>
</div>
</main>

<section className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-lg text-zinc-300" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Ultra-low latency</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Experience human-like conversational speed with sub-400ms response times globally.
                </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-lg text-zinc-300" icon="solar:soundwave-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Expressive synthesis</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Lifelike intonation, pacing, and emotional intelligence tailored to your specific use case.
                </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-lg text-zinc-300" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Seamless integration</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Drop a single script tag into your application and bring your customized agent to life instantly.
                </p>
</div>
</div>
</section>

<footer className="relative z-10 w-full border-t border-white/5 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-sm text-zinc-500 font-light tracking-tight">
                © 2024 CVAI Systems Inc. All rights reserved.
            </div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:window-frame-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

<elevenlabs-convai agent-id="agent_1601kpejkw9cf7vrxfpr9yahw527"></elevenlabs-convai>


    </>
  );
}
