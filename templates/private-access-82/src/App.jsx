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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function () {
      var root = document.getElementById('aura-eme6nf1dc');
      if (!root) return;
      var slides = root.querySelectorAll('[data-slide]');
      var indicators = root.querySelectorAll('[data-indicator]');
      var index = 0;
      var timer;

      function show(i) {
        slides.forEach(function (el, idx) {
          if (idx === i) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
        indicators.forEach(function (dot, idx) {
          if (idx === i) {
            dot.classList.remove('w-1.5', 'bg-white/40');
            dot.classList.add('w-5', 'bg-white/80');
          } else {
            dot.classList.remove('w-5', 'bg-white/80');
            dot.classList.add('w-1.5', 'bg-white/40');
          }
        });
      }

      function next() {
        index = (index + 1) % slides.length;
        show(index);
      }

      function queue() {
        timer = setTimeout(function () {
          next();
          queue();
        }, 5000);
      }

      indicators.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
          index = i;
          show(index);
          if (timer) clearTimeout(timer);
          queue();
        });
      });

      show(index);
      queue();
    })();
  


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
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
      
<div className="fixed inset-0 pointer-events-none" style="background-image:
      radial-gradient(1200px 600px at -10% -20%, rgba(16,185,129,0.08), transparent 60%),
      radial-gradient(900px 500px at 110% 120%, rgba(59,130,246,0.08), transparent 55%),
      radial-gradient(600px 400px at 50% 0%, rgba(244,63,94,0.08), transparent 60%),
      radial-gradient(800px 500px at 40% 100%, rgba(99,102,241,0.08), transparent 60%);"></div>
<main className="relative z-10">
<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10">

<div className="w-full max-w-7xl ring-1 ring-white/10 shadow-black/40 bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7aa2a7af-86ba-4dbe-8883-bb3e87b1612a_1600w.jpg)] bg-cover rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl backdrop-blur-sm" style={{animation: 'fadeUp .7s ease forwards', animationDelay: '.12s'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

<section className="ring-1 ring-white/10 shadow-black/40 sm:px-8 bg-white/5 rounded-2xl pt-8 pr-6 pb-8 pl-6 shadow-2xl backdrop-blur-lg">
<div className="max-w-xl">

<div className="flex items-center gap-3 mb-5" style={{animation: 'fadeUp .6s ease forwards', animationDelay: '.05s'}}>
<div className="h-8 w-8 ring-1 ring-emerald-400/20 flex bg-emerald-400/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7de1229a-6a54-423d-a41c-2377d871bf2c_320w.jpg)] bg-cover rounded-lg items-center justify-center">
</div>
<span className="sm:text-base text-sm font-medium text-slate-100 tracking-tight font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>MindForge</span>
</div>
<h1 className="sm:text-4xl md:text-5xl text-3xl text-slate-100 tracking-tight font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Request Private Access</h1>
<p className="mt-4 text-sm sm:text-base leading-7 text-slate-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Enter a focused space for structured self-inquiry. We help you map cognitive patterns, reframe loops, and build durable clarity with guided exercises and measured progression.
              </p>
<form className="mt-8 space-y-5">
<div>
<label className="block text-sm text-slate-300 font-geist" htmlFor="name" style={{}}>Full name</label>
<input className="mt-2 w-full rounded-lg bg-white/[0.06] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition-shadow" id="name" name="name" placeholder="Avery Chen" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-300 font-geist" htmlFor="email" style={{}}>Email address</label>
<input className="mt-2 w-full rounded-lg bg-white/[0.06] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition-shadow" id="email" name="email" placeholder="avery.chen@example.com" required="" type="email"/>
</div>
<div className="relative">
<label className="block text-sm text-slate-300 font-geist" htmlFor="purpose" style={{}}>Primary objective</label>
<div className="mt-2 relative">
<select className="appearance-none w-full rounded-lg bg-white/[0.06] px-3.5 py-2.5 pr-10 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" id="purpose" name="purpose">
<option className="font-geist" disabled="" selected="" style={{transition: 'outline 0.1s ease-in-out'}} value="">Focus, resilience, growth, research…</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Personal Clarity</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Emotional Regulation</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Cognitive Resilience</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Professional Performance</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Research Collaboration</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="">
<span className="block text-sm text-slate-300 font-geist" style={{}}>Areas of interest</span>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center gap-3 rounded-lg bg-white/[0.06] px-3 py-2 ring-1 ring-white/10 hover:bg-white/[0.09] hover:ring-white/20 transition">
<input className="h-4 w-4 rounded border-white/20 bg-transparent text-emerald-400 accent-emerald-500 focus:ring-emerald-400/50" type="checkbox"/>
<span className="text-sm text-slate-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Pattern Mapping</span>
</label>
<label className="flex items-center gap-3 rounded-lg bg-white/[0.06] px-3 py-2 ring-1 ring-white/10 hover:bg-white/[0.09] hover:ring-white/20 transition">
<input className="h-4 w-4 rounded border-white/20 bg-transparent text-emerald-400 accent-emerald-500 focus:ring-emerald-400/50" type="checkbox"/>
<span className="text-sm text-slate-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Emotional Regulation</span>
</label>
<label className="flex items-center gap-3 rounded-lg bg-white/[0.06] px-3 py-2 ring-1 ring-white/10 hover:bg-white/[0.09] hover:ring-white/20 transition">
<input className="h-4 w-4 rounded border-white/20 bg-transparent text-emerald-400 accent-emerald-500 focus:ring-emerald-400/50" type="checkbox"/>
<span className="text-sm text-slate-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Cognitive Endurance</span>
</label>
<label className="flex items-center gap-3 rounded-lg bg-white/[0.06] px-3 py-2 ring-1 ring-white/10 hover:bg-white/[0.09] hover:ring-white/20 transition">
<input className="h-4 w-4 rounded border-white/20 bg-transparent text-emerald-400 accent-emerald-500 focus:ring-emerald-400/50" type="checkbox"/>
<span className="text-sm text-slate-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Behavioral Insights</span>
</label>
</div>
</div>
<label className="flex items-start gap-3 rounded-lg bg-white/[0.04] px-3 py-3 ring-1 ring-white/10 hover:ring-white/20 transition">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-emerald-400 accent-emerald-500 focus:ring-emerald-400/50" required="" type="checkbox"/>
<span className="text-xs text-slate-400 leading-5 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    I agree to the terms and acknowledge this intake involves a personal cognitive questionnaire.
                  </span>
</label>
<button className="w-full inline-flex gap-2 shadow-orange-500/20 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-orange-400/70 hover:shadow-orange-500/30 transition font-medium text-white font-geist bg-orange-500 rounded-lg pt-3.5 pr-5 pb-3.5 pl-5 shadow-md items-center justify-center" id="aura-eme6nc6xk" style={{transition: 'outline 0.1s ease-in-out', background: 'radial-gradient(130px 130px at 10% 15%, rgba(255, 188, 122, 0.95), rgba(255, 188, 122, 0) 60%), radial-gradient(170px 170px at 90% 20%, rgba(255, 115, 95, 0.9), rgba(255, 115, 95, 0) 60%), radial-gradient(180px 180px at 20% 90%, rgba(255, 170, 92, 0.95), rgba(255, 170, 92, 0) 60%), radial-gradient(160px 160px at 85% 85%, rgba(255, 140, 66, 0.9), rgba(255, 140, 66, 0) 60%), linear-gradient(180deg, #f97316 0%, #fb923c 100%)'}} type="submit">
<svg className="lucide lucide-sparkles h-4 w-4 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
  Request Access
</button>
<p className="text-xs text-slate-500 flex items-center gap-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-lock h-4 w-4 text-slate-500 stroke-[1.5]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Data is encrypted in transit and at rest. Unsubscribe anytime.
                </p>
</form>
</div>
</section>

<section className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-2xl shadow-black/50 overflow-hidden">
<img alt="Abstract portrait with motion blur" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72135b5e-1c8d-4f99-847a-22565c937cae_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
<div className="relative h-full flex flex-col sm:p-8 pt-6 pr-6 pb-6 pl-6 justify-end" id="aura-eme6nevy2">
<div className="max-w-xl" id="aura-eme6nf1dc">
<svg className="lucide lucide-quote h-7 w-7 text-white/80 stroke-[1.5]" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div data-carousel="">
<div data-slide="">
<p className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
        I kept optimizing around the same blind spots. The intake reframed how I track my thoughts, and the exercises helped me rebuild habits with intent. My focus and calm both improved.
      </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Member avatar" className="h-8 w-8 rounded-full ring-2 ring-white/30 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5197b21a-36b8-435c-84f0-e109840e65ca_800w.jpg"/>
<div className="text-sm">
<p className="text-white/90 font-geist" style={{}}>Noah S.</p>
<p className="text-white/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Member, Private Program</p>
</div>
</div>
</div>
<div className="hidden" data-slide="">
<p className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
        The framework gave me a language for patterns I could feel but couldn’t name. Weekly prompts turned into durable rituals. I’m less reactive, more deliberate.
      </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Member avatar" className="h-8 w-8 rounded-full ring-2 ring-white/30 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a37efc45-155a-4527-9242-07aecb87e958_320w.jpg"/>
<div className="text-sm">
<p className="text-white/90 font-geist" style={{}}>Avery C.</p>
<p className="text-white/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Founder, Applied Research</p>
</div>
</div>
</div>
<div className="hidden" data-slide="">
<p className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
        The intake surfaced subtle loops in my decisions. Small reframes compounded; within weeks my attention and mood stabilized.
      </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Member avatar" className="h-8 w-8 rounded-full ring-2 ring-white/30 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05e3e53f-e4cc-4941-8fa1-f22b5b9379f1_800w.jpg"/>
<div className="text-sm">
<p className="text-white/90 font-geist" style={{}}>Maya L.</p>
<p className="text-white/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Engineer, Cognitive Systems</p>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2">
<span className="h-1.5 w-5 rounded-full bg-white/80" data-indicator=""></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/40" data-indicator=""></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/40" data-indicator=""></span>
</div>

</div>
</div>
</section>
</div>
</div>
</div>
</main>


    </>
  );
}
