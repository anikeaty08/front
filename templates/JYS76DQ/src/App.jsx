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



  lucide.createIcons();
  document.getElementById('download').addEventListener('click', () => {
    const html = '<!DOCTYPE html>' + document.documentElement.outerHTML;
    const blob = new Blob([html], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'velocity-build.html';
    a.click();
    URL.revokeObjectURL(url);
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
      

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-16 pl-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight animate-fade-in font-manrope tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>
    Build at the speed of thought. <span className="text-stone-400 font-manrope tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>Your applications deploy instantly with zero-config optimization and intelligent performance monitoring built right in.</span>
</h1>
<a className="inline-flex items-center gap-2 hover:opacity-90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 shadow-red-500/30 transition-all duration-200 animate-slide-up delay-200 text-lg font-medium text-center bg-gradient-to-r from-red-500 via-red-500 to-orange-500 rounded-full mt-10 pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
    Start Building
    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</section>

<section className="max-w-6xl grid gap-8 md:grid-cols-2 mr-auto ml-auto pr-4 pb-32 pl-4">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-up delay-300">
<div className="flex flex-col md:flex-row h-full">
<div className="p-8 flex-1">
<h3 className="text-lg font-semibold mb-2 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Visual first, code when needed.</h3>
<p className="text-sm text-stone-400 leading-relaxed font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Craft stunning motion graphics with advanced Timeline effects including Morphing, Stagger animations, and Depth scrolling to create immersive user experiences.</p>
</div>
<pre className="flex-1 m-6 rounded-xl bg-[#0e112b] text-[10px] leading-relaxed p-6 overflow-auto border border-white/5 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}><span className="text-red-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>// Advanced animation framework</span>
<span className="text-orange-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>import</span> motionEngine <span className="text-orange-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>from</span> <span className="text-pink-300 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>'@velocity/motion'</span>

<span className="text-orange-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>const</span> timeline = motionEngine.create(<span className="text-pink-300 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>'.timeline'</span>)

<span className="text-orange-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>function</span> <span className="text-red-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>animate</span>(element) {
  <span className="text-orange-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>return</span> timeline.morph(element, {
    duration: <span className="text-stone-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>0.8</span>,
    stagger: <span className="text-stone-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>0.1</span>
  })
}</pre>
</div>
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></span>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-up delay-400">
<div className="p-8 h-full flex flex-col justify-end bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-red-600/5 to-transparent">
<div className="flex bg-[url(https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80)] bg-cover rounded-lg mb-4 items-center justify-center">
<svg className="opacity-60 w-[180px] h-[180px]" fill="none" height="180" strokeWidth="2" style={{width: '180px', height: '180px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 180 180" width="180" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="90" cy="90" r="86" stroke="url(#grad)" strokeWidth="8"></circle>
<circle className="" cx="90" cy="90" opacity="0.6" r="65" stroke="url(#grad2)" strokeWidth="4"></circle>
<circle cx="90" cy="90" opacity="0.4" r="44" stroke="url(#grad3)" strokeWidth="2"></circle>
<defs>
</defs>
</svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Unleash your vision</h3>
<p className="text-sm text-stone-400 leading-relaxed font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Transform static designs into dynamic experiences with sophisticated Gesture controls, Magnetic interactions, Elastic animations, and Multi-touch gestures.</p>
</div>
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></span>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-up delay-500">
<div className="p-8 flex flex-col h-full">
<div className="flex bg-[url(https://images.unsplash.com/photo-1637825891028-564f672aa42c?w=1080&amp;q=80)] bg-cover border-0 rounded-lg mb-6 justify-center">
<svg className="opacity-70" fill="none" height="120" viewbox="0 0 220 120" width="220" xmlns="http://www.w3.org/2000/svg">
<rect className="" fill="#8b5cf6" height="60" rx="4" width="30" x="20" y="40"></rect>
<rect className="" fill="#3b82f6" height="40" rx="4" width="30" x="70" y="60"></rect>
<rect className="" fill="#06b6d4" height="50" rx="4" width="30" x="120" y="50"></rect>
<rect className="" fill="#8b5cf6" height="70" rx="4" width="30" x="170" y="30"></rect>
<circle cx="35" cy="35" fill="#06b6d4" opacity="0.6" r="3"></circle>
<circle cx="85" cy="55" fill="#8b5cf6" opacity="0.6" r="3"></circle>
<circle cx="135" cy="45" fill="#3b82f6" opacity="0.6" r="3"></circle>
<circle cx="185" cy="25" fill="#06b6d4" opacity="0.6" r="3"></circle>
</svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Smart Project Intelligence</h3>
<p className="text-sm text-stone-400 leading-relaxed font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Experience intelligent project management with our AI-powered workflow system. Automatically generate tasks, facilitate smart team collaboration, and receive predictive insights...</p>
</div>
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></span>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-up delay-500">
<div className="p-8 flex flex-col h-full">
<div className="mb-6 flex justify-center">
<svg className="opacity-70" fill="none" height="120" viewbox="0 0 240 120" width="240" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="80" rx="14" stroke="#8b5cf6" stroke-opacity=".8" strokeWidth="2" width="220" x="0" y="10"></rect>
<rect className="" height="80" rx="14" stroke="#3b82f6" stroke-opacity=".5" strokeWidth="2" width="220" x="10" y="20"></rect>
<rect className="" height="80" rx="14" stroke="#06b6d4" stroke-opacity=".3" strokeWidth="2" width="220" x="20" y="30"></rect>
<rect className="" fill="#8b5cf6" fillOpacity="0.1" height="40" rx="8" width="160" x="30" y="40"></rect>
<circle cx="50" cy="60" fill="#8b5cf6" opacity="0.6" r="4"></circle>
<circle className="" cx="70" cy="60" fill="#3b82f6" opacity="0.6" r="4"></circle>
<circle cx="90" cy="60" fill="#06b6d4" opacity="0.6" r="4"></circle>
</svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Platform Orchestration</h3>
<p className="text-sm text-stone-400 leading-relaxed font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Optimize your digital presence with seamless deployment pipelines. Implement preview environments for thorough testing and utilize instant rollback capabilities to maintain...</p>
</div>
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></span>
</div>
</section>

<button className="fixed bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 backdrop-blur px-4 py-2 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-all duration-200 animate-fade-in delay-300 font-sans" id="download" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="w-4 h-4" data-lucide="download"></i>
  Export
</button>


    </>
  );
}
