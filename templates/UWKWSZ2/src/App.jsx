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



    function neutralPalette(t) {
      const a = 0.5, b = 0.3, c = 0.3, d = 2.0;
      const g = a + b * Math.cos(6.28318 * (c * t + d));
      return [g, g, g];
    }
    function pulse(frequency, off, t) {
      return 0.5 * (1.0 + Math.sin(6.28318 * frequency * t + off));
    }
    const canvas = document.getElementById('shader-canvas');
    const ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    }
    window.addEventListener('resize', resize);
    resize();
    function draw(time) {
      const t = time * 0.001;
      const w = canvas.width, h = canvas.height;
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0,0,w,h);
      const scale = Math.min(w,h);
      for(let i=0; i<18; ++i) {
        const ang = (Math.PI/9)*i;
        for(let j=0; j<3; ++j) {
          const a = t*1.2 + j*Math.PI;
          const sc = 0.6*pulse(0.2, j, t)+0.2;
          const offx = Math.cos(ang + a*0.3) * sc;
          const offy = Math.sin(ang + a) * sc;
          const cx = w/2 + offx*scale*0.36;
          const cy = h/2 + offy*scale*0.36;
          const rad = 0.06*scale*sc;
          const pal = neutralPalette(Math.sqrt(offx*offx+offy*offy) + t*0.3 + ang*0.3);
          ctx.beginPath();
          ctx.arc(cx, cy, rad, 0, 2*Math.PI);
          ctx.closePath();
          ctx.globalAlpha = 0.6;
          ctx.fillStyle = `rgb(${pal.map(x=>Math.max(0,Math.min(255,Math.floor(x*255)))).join(",")})`;
          ctx.shadowColor = `rgba(${pal.map(x=>Math.max(0,Math.min(255,Math.floor(x*255)))).join(",")},0.35)`;
          ctx.shadowBlur = 34;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    window.lucide && lucide.createIcons();
  
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
      
<div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<canvas height="2374" id="shader-canvas" width="3334"></canvas>
</div>

<div className="relative w-full md:w-1/2 h-screen flex items-center justify-center bg-zinc-900/70 hero-slide-in-left z-10">
<div className="flex flex-col items-center justify-center text-center gap-5 w-full max-w-md mx-auto">
<span className="text-zinc-400 uppercase tracking-widest text-xs mb-2 hero-fade-in">Innovation</span>
<h2 className="md:text-5xl hero-blur-in text-4xl font-bold text-white font-poppins text-center">
          Animated <span className="text-indigo-400">Technology</span> Visuals
        </h2>
<div className="flex flex-row gap-5 mt-4 hero-fade-in justify-center">
<button className="group rounded-full border-2 border-indigo-500 p-3 bg-zinc-950/70 hover:bg-indigo-500 transition-all duration-300 shadow-xl hover:shadow-indigo-600/40 flex items-center">
<svg className="lucide lucide-cpu w-7 h-7 text-indigo-400 group-hover:text-white transition-all" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path className="" d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</button>
<button className="group hover:bg-indigo-500 transition-all duration-300 hover:shadow-indigo-600/40 flex items-center bg-zinc-950/70 border-indigo-500 border-2 rounded-full pt-3 pr-3 pb-3 pl-3 shadow-xl">
<svg className="lucide lucide-cloud w-7 h-7 text-indigo-400 group-hover:text-white transition-all" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</button>
<button className="group rounded-full border-2 border-indigo-500 p-3 bg-zinc-950/70 hover:bg-indigo-500 transition-all duration-300 shadow-xl hover:shadow-indigo-600/40 flex items-center">
<svg className="lucide lucide-activity w-7 h-7 text-indigo-400 group-hover:text-white transition-all" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col justify-center md:px-16 md:py-0 z-10 hero-slide-in-right bg-zinc-950/90 pt-16 pr-8 pb-16 pl-8 blur-none backdrop-blur-xl">
<div className="max-w-xl flex flex-col gap-6 mx-auto">
<span className="text-indigo-400 text-sm font-semibold tracking-wide hero-fade-in">Cutting-Edge Solutions</span>
<h1 className="md:text-4xl hero-blur-in text-5xl font-semibold text-white font-geist">
          Empower Your Future With <span className="text-indigo-300">Technology</span>
</h1>
<p className="leading-relaxed text-lg font-thin text-zinc-400 hero-fade-in">
          Discover the next generation of digital transformation.
          We craft seamless, secure, and intelligent systems for tomorrow’s world. Harness the power of AI, cloud, and automation—designed for human impact.
        </p>
<div className="flex gap-4 mt-2 hero-slide-in-left">
<a className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg px-7 py-3 shadow hover:bg-indigo-600 hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-300 text-white font-normal group" href="#">
<span className="">Get Started</span>
<svg className="lucide lucide-arrow-right inline ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-block border border-indigo-400 rounded-lg px-7 py-3 text-indigo-300 hover:bg-indigo-950 hover:text-indigo-100 hover:scale-105 transition-all duration-300 font-normal group" href="#">
<span className="">Learn More</span>
<svg className="lucide lucide-book-open inline ml-2 w-5 h-5 text-indigo-300 group-hover:text-indigo-100 transition-colors" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-4 hero-blur-in">
<svg className="lucide lucide-server w-8 h-8 text-green-400 hover:scale-110 transition-transform duration-200" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<svg className="lucide lucide-feather w-8 h-8 text-fuchsia-400 hover:scale-110 transition-transform duration-200" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path className="" d="M16 8 2 22"></path><path className="" d="M17.5 15H9"></path></svg>
<span className="text-zinc-600 text-sm">Powered by modern tech</span>
</div>
</div>
</div>
</div>



    </>
  );
}
