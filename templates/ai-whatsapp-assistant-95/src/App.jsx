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



                      for(let i=0; i<625; i++) {
                          const div = document.createElement('div');
                          div.className = `qr-cell ${Math.random() > 0.5 ? 'active' : ''}`;
                          document.write(div.outerHTML);
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
      
<div className="spotlight"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-xs font-medium tracking-widest uppercase text-white">
            ShareClaw
          </span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-gray-500">
<a className="hover:text-white transition-colors" href="#sync">Sync</a>
<a className="hover:text-white transition-colors" href="#specs">
            Architecture
          </a>
<a className="hover:text-white transition-colors" href="#security">
            Risk Assessment
          </a>
</div>
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] text-emerald-500 font-mono tracking-tight uppercase">
            System Online
          </span>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="pt-32 pb-20 md:pt-48 md:pb-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-[10px] font-medium tracking-wider uppercase mb-10 backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:shield-warning-linear"></iconify-icon>
            Protocol v2.4 Active
          </div>
<h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] text-glow">
            Autonomous
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
              Agents Only.
            </span>
</h1>
<p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-lg mx-auto mb-12">
            Stop manually handling your infrastructure. Deploy an intelligent
            layer that executes tasks without supervision.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="h-12 px-8 bg-white text-black text-xs font-semibold rounded-full flex items-center gap-3 hover:bg-gray-200 transition-colors" href="#access">
              Initialize Agent
              <iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</a>
<div className="flex items-center gap-4 text-xs font-mono text-gray-500">
<span>// 0.04ms Latency</span>
<div className="w-px h-3 bg-gray-700"></div>
<span>// Encrypted</span>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030303]" id="sync">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="relative w-64 h-64 mx-auto md:ml-0 glass-panel p-4 rounded-xl">

<div className="w-full h-full bg-black relative overflow-hidden p-2">
<div className="qr-grid">


<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
<div className="qr-cell active"></div>
</div>

<div className="absolute top-2 left-2 w-12 h-12 border-4 border-white bg-transparent z-10">
<div className="absolute inset-2 bg-white"></div>
</div>
<div className="absolute top-2 right-2 w-12 h-12 border-4 border-white bg-transparent z-10">
<div className="absolute inset-2 bg-white"></div>
</div>
<div className="absolute bottom-2 left-2 w-12 h-12 border-4 border-white bg-transparent z-10">
<div className="absolute inset-2 bg-white"></div>
</div>
<div className="scan-line"></div>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-mono border border-white/20 rounded">
                      SCAN_AUTHORIZATION
                    </div>
</div>
</div>
</div>
<div className="mt-6 flex gap-4 text-[10px] font-mono text-gray-500 md:ml-0 mx-auto max-w-[256px]">
<div className="flex-1 border-t border-white/10 pt-2">
                  KEY_ID: 8X-299
                </div>
<div className="flex-1 border-t border-white/10 pt-2 text-right text-emerald-500">
                  READY
                </div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
                Hard-Link Authentication.
              </h2>
<p className="text-sm text-gray-400 leading-relaxed mb-8">
                We don't use passwords. Passwords leak. We use a dynamic
                cryptographic handshake between your device and our core. Scan
                to generate your ephemeral keypair.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">
                      Biometric Gate
                    </h4>
<p className="text-xs text-gray-500 mt-1">
                      Requires local device FaceID/TouchID confirmation.
                    </p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium">
                      Session Isolation
                    </h4>
<p className="text-xs text-gray-500 mt-1">
                      Every command runs in a sterile, temporary VM.
                    </p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black" id="specs">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">
              System Specifications
            </h2>
<p className="text-xs text-gray-500 font-mono mt-4 md:mt-0">
              BUILD_VER: 2.0.4 // STABLE
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 glass-panel p-8 rounded-xl relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                    Neural Core Processing
                  </h3>
<p className="text-sm font-light text-gray-500 max-w-sm">
                    Direct integration with LLM primitives. Bypass the API
                    latency of traditional wrappers. We run on bare metal.
                  </p>
</div>
<div className="grid grid-cols-3 gap-2 mt-8">
<div className="h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-full animate-pulse"></div>
</div>
<div className="h-1 bg-white/10 rounded-full"></div>
<div className="h-1 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl opacity-50"></div>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center">
<span className="text-4xl font-medium text-white mb-2 tracking-tighter">
                99.9%
              </span>
<span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Uptime Guarantee
              </span>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center">
<iconify-icon className="text-white mb-3" icon="solar:lock-password-unlocked-linear" width="28"></iconify-icon>
<span className="text-[10px] text-gray-500 uppercase tracking-widest">
                End-to-End Encryption
              </span>
</div>

<div className="md:col-span-2 glass-panel p-6 rounded-xl flex items-center justify-between group">
<div className="pr-4">
<h3 className="text-white font-medium text-sm mb-1">
                  Self-Healing Infrastructure
                </h3>
<p className="text-xs text-gray-500">
                  Nodes automatically restart upon failure detection.
                </p>
</div>
<div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-spin-slow" style={{animationDuration: '10s'}}>
<iconify-icon className="text-white" icon="solar:restart-linear"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel p-0 rounded-xl overflow-hidden flex flex-col">
<div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 font-mono text-[10px] text-gray-400 space-y-2 overflow-hidden">
<div className="flex">
<span className="text-emerald-500 mr-2">➜</span>
<span className="text-white">init_agent --secure</span>
</div>
<div className="opacity-70">Allocating resources...</div>
<div className="opacity-70">Verifying signature... OK</div>
<div className="opacity-70">Establishing tunnel...</div>
<div className="text-emerald-500">Connected to ShareClaw Core.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]" id="security">
<div className="max-w-5xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">
              Security Architecture
            </h2>
<p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Most open-source solutions leave your API keys exposed in plain
              text. We built a fortress. Compare the exposure surface.
            </p>
</div>
<div className="border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">

<div className="grid grid-cols-12 bg-white/5 p-4 border-b border-white/10 text-[10px] uppercase tracking-widest font-medium text-gray-400">
<div className="col-span-4">Vulnerability Vector</div>
<div className="col-span-4 text-center">Open Source / DIY</div>
<div className="col-span-4 text-center text-white">
                ShareClaw Enclave
              </div>
</div>

<div className="grid grid-cols-12 p-6 comparison-row items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-4">
<h4 className="text-white text-sm font-medium">Data Retention</h4>
<p className="text-xs text-gray-600 mt-1">
                  What happens to your prompts?
                </p>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<span className="text-red-400/80 text-xs font-medium bg-red-900/10 px-2 py-1 rounded border border-red-900/20">
                  Persistent Logs
                </span>
<p className="text-[10px] text-gray-600 mt-2">
                  Saved to disk (unsafe)
                </p>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<span className="text-emerald-400/80 text-xs font-medium bg-emerald-900/10 px-2 py-1 rounded border border-emerald-900/20">
                  Ephemeral (RAM only)
                </span>
<p className="text-[10px] text-gray-600 mt-2">
                  Wiped on session close
                </p>
</div>
</div>

<div className="grid grid-cols-12 p-6 comparison-row items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-4">
<h4 className="text-white text-sm font-medium">Key Management</h4>
<p className="text-xs text-gray-600 mt-1">API credential storage</p>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<span className="text-gray-400 text-xs">.env file / Plaintext</span>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<span className="text-white text-xs flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                  Hardware Security Module
                </span>
</div>
</div>

<div className="grid grid-cols-12 p-6 comparison-row items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-4">
<h4 className="text-white text-sm font-medium">Model Isolation</h4>
<p className="text-xs text-gray-600 mt-1">Training on your data</p>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<span className="text-red-400/80 text-xs">High Risk</span>
<p className="text-[10px] text-gray-600 mt-1">
                  Models often retrain on inputs
                </p>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<span className="text-white text-xs">Strict No-Train Policy</span>
<p className="text-[10px] text-gray-600 mt-1">Legal Guarantee</p>
</div>
</div>

<div className="grid grid-cols-12 p-6 comparison-row items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-4">
<h4 className="text-white text-sm font-medium">Audit Trail</h4>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-gray-600" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="col-span-4 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black relative overflow-hidden" id="access">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">
              Deploy Your Agent
            </h2>
<p className="text-sm text-gray-500">
              Immediate provisioning. No waiting lists.
            </p>
</div>
<div className="space-y-4">

<label className="block relative group cursor-pointer">
<input checked="" className="peer sr-only" name="plan" type="radio"/>
<div className="glass-panel p-6 rounded-xl border border-white/10 peer-checked:border-white peer-checked:bg-white/5 transition-all">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="w-5 h-5 mt-1 rounded-full border border-white/20 flex items-center justify-center peer-checked:border-white peer-checked:bg-white text-black transition-colors">
<div className="w-2 h-2 bg-black rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div>
<h3 className="text-white font-medium text-sm">
                        Operator License
                      </h3>
<div className="flex gap-2 mt-2">
<span className="text-[10px] border border-white/10 px-1.5 py-0.5 rounded text-gray-400">
                          Unlimited Threads
                        </span>
<span className="text-[10px] border border-white/10 px-1.5 py-0.5 rounded text-gray-400">
                          Priority CPU
                        </span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-white font-medium text-xl">
                      $49
                    </span>
<span className="text-[10px] text-gray-500">/month</span>
</div>
</div>
</div>
</label>

<label className="block relative group cursor-pointer">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="glass-panel p-6 rounded-xl border border-white/5 opacity-60 hover:opacity-100 transition-all">
<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"></div>
<div className="">
<h3 className="text-white font-medium text-sm">
                        Dedicated Cluster
                      </h3>
<p className="text-xs text-gray-500 mt-0.5">
                        Private VPC &amp; Custom Models.
                      </p>
</div>
</div>
<span className="text-white font-medium text-sm">Inquire</span>
</div>
</div>
</label>

<div className="pt-8">
<a className="shimmer-btn flex items-center justify-center uppercase hover:border-white/30 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-sm font-semibold text-white tracking-widest w-full h-14 border-white/10 border rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.05)]" href="https://buy.stripe.com/test_8x200j5Yi9Dva026Bi6J200">
                Get Your Agent Right Now
              </a>
<div className="mt-6 flex justify-center gap-6 text-[10px] text-gray-600 font-mono">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                  256-BIT ENCRYPTED
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:server-linear"></iconify-icon>
                  INSTANT PROVISION
                </span>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white/20 rounded-full"></div>
<p className="text-[10px] text-gray-600 font-mono">
            SYSTEM_STATUS: NORMAL
          </p>
</div>
<div className="flex gap-8">
<a className="text-[10px] text-gray-600 hover:text-white uppercase tracking-wider" href="#">
            Protocol
          </a>
<a className="text-[10px] text-gray-600 hover:text-white uppercase tracking-wider" href="#">
            Manifesto
          </a>
<a className="text-[10px] text-gray-600 hover:text-white uppercase tracking-wider" href="#">
            Legal
          </a>
</div>
</div>
</footer>

    </>
  );
}
