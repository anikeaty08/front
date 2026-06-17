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



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.remove('opacity-0','translate-y-8','blur-sm');
          el.classList.add('opacity-100','translate-y-0','blur-0');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e29626f0-78e5-4f5c-804a-7d6950dee264_3840w.jpg")'}}></div>
<main className="flex-1 w-full sm:px-6 pr-4 pb-12 pl-4 bg-cover bg-center bg-[url(default)]" style={{}}>
<div className="mx-auto max-w-7xl">
<div className="flex pt-8 items-center justify-center">
<div className="text-center">
<h1 className="sm:text-4xl text-7xl tracking-tight font-playfair" style={{fontFamily: '\'Instrument Serif\', serif', fontWeight: '400'}}>Matcha Rituals</h1>
<p className="text-sm text-slate-200/80 mt-1" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>Mindful tea guidance for your daily practice</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-zinc-300" style={{}}>
</div>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-12">

<div className="transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-reveal="">
<div className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-3xl group sm:p-10 ring-1 ring-emerald-500/10 bg-center relative overflow-hidden text-white bg-[url(https://cdn.midjourney.com/ab015e70-3530-4b30-957c-7e88ecccfe00/0_1.png?w=800&amp;q=80)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between" onmouseenter="(function(el){const v=el.querySelector('video'); if(v){v.currentTime=0; v.play().catch(()=&gt;{});}})(this)" onmouseleave="(function(el){const v=el.querySelector('video'); if(v){v.pause(); v.currentTime=0;}})(this)" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(16, 185, 129, 0.12) 0px 0px 0px 1px'}}><div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<video className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/7624a6bf-c70d-4c63-861d-9f9b79b5e226/1.mp4" webkit-playsinline=""></video>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div><div className="space-y-6 relative z-10">
<div className="flex items-center justify-between">
<svg className="lucide lucide-sunrise w-8 h-8 text-emerald-200 group-hover:scale-110 transition-transform" data-lucide="sunrise" fill="none" height="24" stroke="currentColor" stroke-line="round" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
<span className="text-xs px-3 py-1.5 bg-emerald-400/20 text-emerald-200 rounded-full" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>Fresh</span>
</div>
<div className="">
<p className="text-3xl sm:text-4xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif', fontWeight: '400'}}>7 Day Ritual</p>
<p className="text-emerald-200 text-lg mt-2" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>Morning Ceremony</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-emerald-200 text-2xl" style={{fontFamily: '"Instrument Serif", serif', fontWeight: '400'}}>12 min</p>
<p className="text-emerald-300 text-sm" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>completed</p>
</div>
</div>
</div><div className="space-y-4 border-t border-emerald-700/50 pt-6 relative z-10" style={{}}>
<p className="leading-relaxed text-sm text-slate-50" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>
      “Whisk, breathe, and be present. Today’s ritual celebrated calm, bright energy.”
    </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-xs tracking-wider" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600'}}>MATCHA</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-200" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-emerald-200 text-sm hover:underline transition-colors" href="#" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>Continue ritual</a>
</div>
</div></div>
</div>

<div className="transition-all duration-700 ease-out will-change-transform delay-100 opacity-100 translate-y-0 blur-0" data-reveal="">
<div className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-3xl group sm:p-10 ring-1 ring-cyan-400/10 bg-center text-white bg-[url(https://cdn.midjourney.com/1d4fd59c-9023-4628-8ea1-4256408af86b/0_1.png?w=800&amp;q=80)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden" onmouseenter="(function(el){const v=el.querySelector('video'); if(v){v.currentTime=0; v.play().catch(()=&gt;{});}})(this)" onmouseleave="(function(el){const v=el.querySelector('video'); if(v){v.pause(); v.currentTime=0;}})(this)" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(34, 211, 238, 0.12) 0px 0px 0px 1px'}}>
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<video className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/157de36c-d492-4080-87f3-0dcebd3b268f/1.mp4" webkit-playsinline=""></video>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="space-y-6 relative z-10">
<div className="flex items-center justify-between">
<svg className="lucide lucide-wind w-8 h-8 text-cyan-200 group-hover:scale-110 transition-transform" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-xs px-3 py-1.5 bg-cyan-400/20 text-cyan-200 rounded-full" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>Whisking</span>
</div>
<div className="">
<p className="text-2xl sm:text-3xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif', fontWeight: '400'}}>Whisk &amp; Breathe</p>
<p className="text-cyan-200 text-base mt-2" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>Calming Ritual</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-cyan-200 text-2xl" style={{fontFamily: '"Instrument Serif", serif', fontWeight: '400'}}>5 min</p>
<p className="text-cyan-300 text-sm" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '300'}}>session</p>
</div>
</div>
</div>
<div className="space-y-4 border-t border-cyan-600/50 pt-6 relative z-10">
<p className="leading-relaxed text-sm text-slate-50" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '300'}}>
      Pair mindful breathing with gentle whisking to settle the mind and invite steady energy.
    </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-xs tracking-wider" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600'}}>MATCHA</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-cyan-200" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-cyan-200 text-sm hover:underline transition-colors" href="#" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>Start ritual</a>
</div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-out will-change-transform delay-200 opacity-100 translate-y-0 blur-0" data-reveal="">
<div className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-3xl group sm:p-10 ring-1 ring-violet-400/10 bg-center text-white bg-[url(https://cdn.midjourney.com/a2ccbf1b-ad14-4f40-9667-0ac8bfdb7d70/0_2.png?w=800&amp;q=80)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden" onmouseenter="(function(el){const v=el.querySelector('video'); if(v){v.currentTime=0; v.play().catch(()=&gt;{});}})(this)" onmouseleave="(function(el){const v=el.querySelector('video'); if(v){v.pause(); v.currentTime=0;}})(this)" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(139, 92, 246, 0.12) 0px 0px 0px 1px'}}>
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<video className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/2624865a-07f4-4dc8-a9f3-12f620b1ff50/2.mp4" webkit-playsinline=""></video>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="space-y-6 relative z-10">
<div className="flex items-center justify-between">
<span className="text-xs px-3 py-1.5 bg-violet-400/20 text-violet-200 rounded-full" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>Tea House</span>
</div>
<h2 className="text-4xl sm:text-5xl tracking-tighter" style={{fontFamily: '\'Instrument Serif\', serif', fontWeight: '400'}}>Rituals</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors" style={{}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-slate-50 rounded-full" style={{}}></div>
<span className="" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '400'}}>Clarity</span>
</div>
<span className="text-[#ffffff]" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>12 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1 align-[-2px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors" style={{}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-slate-50 rounded-full"></div>
<span className="" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '400'}}>Calm Energy</span>
</div>
<span className="text-slate-50" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '500'}}>8 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1 align-[-2px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors" style={{}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-slate-50 rounded-full" style={{}}></div>
<span className="" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '400'}}>Gentle Kindness</span>
</div>
<span className="text-slate-50" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>15 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1 align-[-2px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors" style={{}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-slate-50 rounded-full" style={{}}></div>
<span className="" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '400'}}>Body Grounding</span>
</div>
<span className="text-slate-50" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>6 sessions <svg className="lucide lucide-play inline w-3 h-3 ml-1 align-[-2px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></span>
</div>
</div>
</div>
<div className="space-y-4 border-t border-violet-700/50 pt-6 relative z-10" style={{}}>
<p className="leading-relaxed text-sm text-slate-50" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>
      A curated tea-ritual library with guided ceremonies for every mood and moment.
    </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-xs tracking-wider" style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600'}}>MATCHA</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-violet-200" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-violet-200 text-sm hover:underline transition-colors" href="#" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>Explore rituals</a>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-6 mt-2 flex items-center justify-between">
<p className="text-xs text-zinc-400" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>© 2025 Matcha</p>
<div className="hidden sm:flex items-center gap-4 text-xs text-slate-900/80" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<span className="text-zinc-700" style={{}}>|</span>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</main>


    </>
  );
}
