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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-emerald-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-zinc-800/20 blur-[100px] rounded-full"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
</div>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 sm:px-8 lg:py-24 w-full max-w-3xl mx-auto">

<div className="flex flex-col items-center mb-14 group select-none animate-fade-in-down">

<div className="relative flex flex-col items-center justify-end h-24 w-24 mb-2">
<i className="w-14 h-14 text-emerald-400 fill-emerald-400/10 relative z-10 transform group-hover:-rotate-12 transition-transform duration-500 origin-bottom-left" data-lucide="flag" strokeWidth="1.5"></i>

<div className="absolute bottom-2 w-16 h-3 border-[1.5px] border-emerald-500/50 rounded-[100%] bg-emerald-900/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]"></div>
</div>

<div className="w-64 h-[1.5px] bg-emerald-500/20 mt-2 mb-4 rounded-full"></div>

<h1 className="text-6xl sm:text-7xl font-display font-semibold tracking-tight text-zinc-50 uppercase leading-none text-center">
                The Yard
            </h1>

<div className="w-64 h-[1.5px] bg-emerald-500/20 mt-4 mb-5 rounded-full"></div>

<div className="flex items-center gap-3 text-xl tracking-[0.25em] text-emerald-500 font-display font-medium uppercase">
<span>Mini</span>
<span className="flex items-center relative">
                    G
                    <span className="relative mx-1 flex h-4 w-4 items-center justify-center">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/20 animate-ping opacity-75"></span>
<div className="relative w-3.5 h-3.5 bg-emerald-500 rounded-full">

<div className="absolute top-1 left-1 w-0.5 h-0.5 bg-emerald-950 rounded-full opacity-50"></div>
<div className="absolute top-1 right-1 w-0.5 h-0.5 bg-emerald-950 rounded-full opacity-50"></div>
<div className="absolute bottom-1 left-1.5 w-0.5 h-0.5 bg-emerald-950 rounded-full opacity-50"></div>
</div>
</span>
                    lf
                </span>
</div>
</div>

<div className="text-center space-y-6 mb-10 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs uppercase tracking-wider font-semibold text-zinc-400 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                Coming Soon to Tyler, Texas
            </div>
<h2 className="text-3xl sm:text-4xl font-display font-medium text-zinc-100 tracking-tight leading-tight">
                The next generation of mini golf is <br className="hidden sm:block"/> almost here.
            </h2>
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                Join our exclusive waiting list to get notified when we open and receive a <span className="text-emerald-400 font-medium border-b border-emerald-400/30 pb-0.5">30% off coupon</span> for your first round.
            </p>
</div>

<form className="w-full max-w-md relative group z-20" onsubmit="event.preventDefault();">
<div className="relative flex items-center transition-all duration-300">
<div className="absolute left-4 text-zinc-500 transition-colors group-focus-within:text-emerald-500">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-zinc-900/80 border border-zinc-800 text-zinc-100 pl-12 pr-36 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600 text-lg shadow-lg hover:border-zinc-700 backdrop-blur-sm" placeholder="Enter your email for access" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-[0.98]" type="submit">
<span>Claim Offer</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center justify-center gap-2 mt-4 text-sm text-zinc-500">
<i className="w-3 h-3" data-lucide="lock" strokeWidth="1.5"></i>
<span>We respect your inbox. Unsubscribe anytime.</span>
</div>
</form>

<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full border-t border-zinc-800/50 pt-12">

<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 text-emerald-400 shadow-sm">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 font-display tracking-tight">Local Favorite</h3>
<p className="text-base text-zinc-500 leading-snug">Located in the heart of Tyler, TX near the university district.</p>
</div>

<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 text-emerald-400 shadow-sm">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 font-display tracking-tight">Modern Design</h3>
<p className="text-base text-zinc-500 leading-snug">18 sleek, challenging holes designed for all skill levels.</p>
</div>

<div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 text-emerald-400 shadow-sm">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 font-display tracking-tight">Family Friendly</h3>
<p className="text-base text-zinc-500 leading-snug">Perfect for date nights, family outings, and parties.</p>
</div>
</div>
</main>

<footer className="w-full py-8 text-center border-t border-zinc-900 bg-zinc-950/80 backdrop-blur text-sm text-zinc-600 relative z-10">
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Facebook</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Contact</a>
</div>
<p>© 2024 The Yard Mini Golf. Tyler, Texas.</p>
</footer>


    </>
  );
}
