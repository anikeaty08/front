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

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.for
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/19c6fc28-f477-465c-83bf-e66378790cf8_3840w.jpg")'}}></div>

<header className="fixed top-0 left-0 right-0 z-40">
<div className="max-w-7xl mr-auto ml-auto px-4 sm:px-6">
<div className="mt-4 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-md shadow-sm">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-rose-500" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
<span className="text-3xl tracking-tight font-sans font-semibold" style={{}}>Glow</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
<a className="font-medium hover:text-zinc-900 transition-colors font-sans" href="#">Rituals</a>
<a className="font-medium hover:text-zinc-900 transition-colors font-sans" href="#">Journal</a>
<a className="font-medium hover:text-zinc-900 transition-colors font-sans" href="#">Analytics</a>
<a className="font-medium hover:text-zinc-900 transition-colors font-sans" href="#">Community</a>
</nav>
<div className="flex gap-2 items-center">
<button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors font-sans">
<i className="w-4 h-4" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
                            Search
                        </button>
<a className="inline-flex items-center hover:bg-zinc-800 transition-colors text-sm font-medium text-white bg-zinc-900 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-h="0" href="#" onmouseenter="this.dataset.h='1'; const g=this.querySelector('.cp-border'); if(!g) return; g.style.transition='transform .75s linear'; let dir=0; (function loop(){ if (this.dataset.h!=='1') return; dir = dir===0 ? -25 : 0; g.style.transform='translateX('+dir+'%)'; setTimeout(loop.bind(this),750); }).call(this);" onmouseleave="this.dataset.h='0'; const g=this.querySelector('.cp-border'); if(!g) return; g.style.transition='transform .25s ease-out'; g.style.transform='translateX(-5%)';" style={{position: 'relative', isolation: 'isolate', padding: '3px', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'transparent'}}>
<div aria-hidden="true" className="cp-border" style={{position: 'absolute', top: '0px', left: '0px', height: '100%', width: '400%', background: 'linear-gradient(115deg, rgb(79, 207, 112), rgb(250, 214, 72), rgb(167, 103, 229), rgb(18, 188, 254), rgb(68, 206, 123)) 0% 0% / 25% 100%', transform: 'translateX(-5%)', zIndex: '0'}}></div>
<span className="font-sans" style={{position: 'relative', display: 'block', padding: '0.5rem 0.75rem', fontSize: '0.875rem', background: '#000', borderRadius: '8px', height: '100%', zIndex: '1'}}>Get started</span>
</a>
</div>
</div>
</div>
</div>
</header>
<main className="w-full sm:px-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c01b7a18-4c69-46a5-b568-703ee1c983e8_3840w.jpg)] bg-cover pt-8 pr-4 pb-12 pl-4" style={{}}>
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mt-24 mb-12 space-y-4">
<h1 className="sm:text-6xl text-4xl font-semibold tracking-tight" style={{fontFamily: '"Instrument Serif", serif'}}>Beauty Rituals</h1>
<p className="text-lg font-light max-w-2xl mx-auto text-zinc-600 font-sans">Discover your inner radiance through mindful beauty practices and wellness rituals</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="card-animate flex flex-col w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-in rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg justify-between text-white" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f7e5239-1f0b-4f78-b88f-bf3590bb95b7_1600w.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-sparkles w-8 h-8 group-hover:scale-110 transition-transform text-rose-100" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/20 text-rose-100 font-sans">Morning</span>
</div>
<div className="">
<p className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>Glow Ritual</p>
<p className="text-lg mt-2 font-normal text-rose-100 font-sans">7-Step Skincare</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-2xl text-rose-100 font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>15 min</p>
<p className="text-sm font-light text-rose-200 font-sans">completed</p>
</div>
</div>
</div>
<div className="space-y-4 border-t pt-6 border-rose-300/30">
<p className="text-sm leading-relaxed font-light text-rose-50 font-sans">"Cleanse, tone, serum, moisturize. Your skin deserves this moment of care and attention."</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-medium text-xs tracking-wider font-sans">GLOW</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-rose-100" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-sm hover:underline transition-colors font-medium text-rose-100 font-sans" href="#">Continue routine</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-in border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm backdrop-blur-md justify-between text-zinc-800 bg-white/40 border-zinc-100">
<div className="flex flex-1 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddbc2405-ff2e-450d-873a-1fb853ef1299_800w.jpg)] bg-cover border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center border-amber-100" style={{}}>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium font-sans">Self-Care Journal</span>
<div className="flex gap-1">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
<div className="w-2 h-2 rounded-full bg-amber-300"></div>
<div className="w-2 h-2 rounded-full bg-amber-300"></div>
</div>
</div>
<h2 className="text-xl sm:text-2xl leading-tight tracking-tight font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>Reflect on your beauty journey</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-500 space-y-1 font-light">
<p className="font-sans">Daily gratitude &amp; affirmations</p>
<p className="font-sans">Track mood &amp; energy levels</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-zinc-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="card-animate flex flex-col w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-in bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg justify-between bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14a8e8c1-e440-4815-ad90-26c4e2df2fea_1600w.jpg)] text-white" style={{}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-heart w-8 h-8 group-hover:scale-110 transition-transform text-emerald-100" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/20 text-emerald-100 font-sans">Active</span>
</div>
<div className="">
<p className="text-2xl sm:text-3xl tracking-tight font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>Gua Sha Ritual</p>
<p className="text-base mt-2 font-normal text-emerald-100 font-sans">Sculpting Massage</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-2xl text-emerald-100 font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>10 min</p>
<p className="text-sm font-light text-emerald-200 font-sans">session</p>
</div>
</div>
</div>
<div className="space-y-4 border-t pt-6 border-emerald-300/30">
<p className="text-sm leading-relaxed font-light text-emerald-50 font-sans">Ancient technique to promote circulation, reduce puffiness, and enhance your natural glow.</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-medium text-xs tracking-wider font-sans">GLOW</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-100" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-sm hover:underline transition-colors font-medium text-emerald-100 font-sans" href="#">Begin massage</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-in border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm backdrop-blur-md justify-between text-zinc-800 bg-white/40 border-zinc-100">
<div className="flex flex-1 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8e09b4-f7e4-4778-bb01-2600e5f66527_800w.jpg)] bg-cover border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center border-purple-100" style={{}}>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium font-sans">Beauty Insights</span>
<div className="text-xs bg-purple-500 px-3 py-1.5 rounded-full font-medium text-white font-sans">+42%</div>
</div>
<h2 className="text-xl sm:text-2xl leading-tight tracking-tight font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>Track your glow progress</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-500 space-y-1 font-light">
<p className="font-sans">• 28 days consistent routine</p>
<p className="font-sans">• 35% skin hydration increase</p>
<p className="font-sans">• 92% confidence boost</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-zinc-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="card-animate flex flex-col w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-in bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a055708e-5727-4345-b339-0737966db630_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg justify-between text-white" style={{}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-palette w-8 h-8 group-hover:scale-110 transition-transform text-violet-100" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/20 text-violet-100 font-sans">Collection</span>
</div>
<h2 className="text-4xl sm:text-5xl tracking-tighter font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>Products</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center p-2 rounded-xl transition-colors hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-400"></div>
<span className="font-normal font-sans">Serums</span>
</div>
<span className="font-medium text-rose-300 font-sans">8 products <svg className="lucide lucide-chevron-right inline w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></span>
</div>
<div className="flex justify-between items-center p-2 rounded-xl transition-colors hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="font-normal font-sans">Moisturizers</span>
</div>
<span className="font-medium text-amber-300 font-sans">12 products <svg className="lucide lucide-chevron-right inline w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></span>
</div>
<div className="flex justify-between items-center p-2 rounded-xl transition-colors hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="font-normal font-sans">Cleansers</span>
</div>
<span className="font-medium text-emerald-300 font-sans">6 products <svg className="lucide lucide-chevron-right inline w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></span>
</div>
<div className="flex justify-between items-center p-2 rounded-xl transition-colors hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="font-normal font-sans">SPF &amp; Protection</span>
</div>
<span className="font-medium text-blue-300 font-sans">5 products <svg className="lucide lucide-chevron-right inline w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></span>
</div>
</div>
</div>
<div className="space-y-4 border-t pt-6 border-violet-400/30">
<p className="text-sm leading-relaxed font-light text-violet-100 font-sans">Curated collection of premium beauty products for your personalized routine.</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-medium text-xs tracking-wider font-sans">GLOW</span>
<svg className="lucide lucide-check-circle w-4 h-4 text-violet-100" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<a className="text-sm hover:underline transition-colors font-medium text-violet-100 font-sans" href="#">View all</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-in border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm backdrop-blur-md justify-between text-zinc-800 bg-white/40 border-zinc-100">
<div className="flex flex-1 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77445677-6c36-4871-8033-3455fbe878f2_800w.jpg)] bg-cover border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center border-rose-100" style={{}}>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium font-sans">Beauty Community</span>
<div className="text-xs bg-rose-500 px-3 py-1.5 rounded-full font-medium text-white font-sans">Live</div>
</div>
<h2 className="text-xl sm:text-2xl leading-tight tracking-tight font-sans font-semibold" style={{fontFamily: '"Instrument Serif", serif'}}>Connect with beauty enthusiasts</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-500 space-y-1 font-light">
<p className="font-sans">• Share your glow-up journey</p>
<p className="font-sans">• Get expert skincare advice</p>
<p className="font-sans">• Join beauty challenges</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-zinc-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
