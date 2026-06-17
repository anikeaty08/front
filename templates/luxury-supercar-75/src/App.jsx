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
      

<div className="fixed inset-0 z-0">

<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 15%, #5c2d6e 30%, #c44e2b 50%, #e8871e 65%, #f4a623 75%, #1a1a2e 90%, #0a0a14 100%)'}}>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1/2" style={{background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,20,0.8) 30%, rgba(10,10,20,0.95) 100%)'}}>
</div>

<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 60%, rgba(244,166,35,0.15) 0%, transparent 60%)'}}>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 100%), repeating-linear-gradient(0deg, transparent, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 100%)', backgroundSize: '3px 3px'}}>
</div>
</div>

<div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
<div className="absolute bottom-[20%] left-[10%] w-96 h-48 rounded-full opacity-30 animate-pulse" style={{background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, transparent 70%)', filter: 'blur(40px)', animationDuration: '3s'}}></div>
<div className="absolute bottom-[18%] right-[15%] w-80 h-40 rounded-full opacity-25 animate-pulse" style={{background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.35) 0%, transparent 70%)', filter: 'blur(35px)', animationDuration: '4s'}}></div>
<div className="absolute bottom-[22%] left-[40%] w-[500px] h-56 rounded-full opacity-20 animate-pulse" style={{background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.5) 0%, transparent 65%)', filter: 'blur(50px)', animationDuration: '2.5s'}}></div>
</div>

<div className="fixed inset-0 z-10 pointer-events-none">

<div className="absolute bottom-[22%] left-[8%] md:left-[12%]" style={{transform: 'rotate(-12deg) skewX(-5deg)'}}>
<div className="relative">

<div className="w-48 md:w-64 h-12 md:h-16 rounded-lg" style={{background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 40%, #ff6b6b 60%, #c0392b 100%)', clipPath: 'polygon(5% 100%, 0% 60%, 8% 30%, 25% 10%, 45% 0%, 70% 0%, 85% 10%, 95% 30%, 100% 60%, 98% 100%)', boxShadow: '0 8px 32px rgba(231, 76, 60, 0.5), 0 0 60px rgba(231,76,60,0.2)'}}></div>

<div className="absolute top-2 right-2 w-3 h-2 rounded-full" style={{background: '#fff', boxShadow: '0 0 15px #fff, 0 0 30px #ffeaa7, 0 0 45px #ffeaa7'}}></div>
<div className="absolute top-3 right-6 w-2 h-1.5 rounded-full" style={{background: '#fff', boxShadow: '0 0 10px #fff, 0 0 20px #ffeaa7'}}></div>

<div className="absolute top-full mt-1 w-48 md:w-64 h-8 opacity-30" style={{background: 'linear-gradient(180deg, rgba(231, 76, 60, 0.4) 0%, transparent 100%)', filter: 'blur(8px)', transform: 'scaleY(-0.5)'}}></div>
</div>
</div>

<div className="absolute bottom-[18%] left-1/2 -translate-x-1/2" style={{transform: 'translateX(-50%) rotate(-3deg)'}}>
<div className="relative">

<div className="w-64 md:w-80 lg:w-96 h-16 md:h-20 lg:h-24 rounded-lg" style={{background: 'linear-gradient(135deg, #1e8449 0%, #27ae60 30%, #58d68d 50%, #2ecc71 70%, #1e8449 100%)', clipPath: 'polygon(3% 100%, 0% 55%, 5% 25%, 20% 5%, 40% 0%, 65% 0%, 82% 8%, 95% 28%, 100% 55%, 97% 100%)', boxShadow: '0 12px 48px rgba(46, 204, 113, 0.5), 0 0 80px rgba(46, 204, 113, 0.25), inset 0 -2px 4px rgba(0,0,0,0.3)'}}></div>

<div className="absolute top-1 left-[30%] w-[25%] h-[40%] rounded-sm" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'}}></div>

<div className="absolute top-3 right-2 w-4 h-2.5 rounded-full" style={{background: '#fff', boxShadow: '0 0 20px #fff, 0 0 40px #ffeaa7, 0 0 60px rgba(255,234,167,0.5)'}}></div>
<div className="absolute top-4 right-7 w-3 h-2 rounded-full" style={{background: '#fff', boxShadow: '0 0 15px #fff, 0 0 30px #ffeaa7'}}></div>

<div className="absolute top-2 right-1 w-8 h-6" style={{borderRight: '2px solid rgba(255, 255, 255, 0.8)', borderBottom: '1px solid rgba(255, 255, 255, 0.4)', filter: 'blur(1px)'}}></div>

<div className="absolute top-full mt-2 w-64 md:w-80 lg:w-96 h-12 opacity-40" style={{background: 'linear-gradient(180deg, rgba(46, 204, 113, 0.5) 0%, transparent 100%)', filter: 'blur(12px)', transform: 'scaleY(-0.5)'}}></div>

<div className="absolute -bottom-8 -left-12 w-40 h-20 rounded-full opacity-40 animate-pulse" style={{background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.6) 0%, transparent 70%)', filter: 'blur(20px)'}}></div>
<div className="absolute -bottom-6 -right-8 w-32 h-16 rounded-full opacity-35 animate-pulse" style={{background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.5) 0%, transparent 70%)', filter: 'blur(18px)', animationDelay: '0.5s'}}></div>
</div>
</div>

<div className="absolute bottom-[21%] right-[8%] md:right-[12%]" style={{transform: 'rotate(8deg) skewX(3deg)'}}>
<div className="relative">

<div className="w-48 md:w-64 h-12 md:h-16 rounded-lg" style={{background: 'linear-gradient(135deg, #1a237e 0%, #283593 30%, #3f51b5 50%, #5c6bc0 65%, #1a237e 100%)', clipPath: 'polygon(5% 100%, 0% 55%, 6% 25%, 22% 8%, 42% 0%, 68% 0%, 83% 10%, 94% 30%, 100% 58%, 97% 100%)', boxShadow: '0 8px 32px rgba(63, 81, 181, 0.5), 0 0 60px rgba(63,81,181,0.2)'}}></div>

<div className="absolute top-0 left-[45%] w-1 h-full opacity-60" style={{background: 'linear-gradient(180deg, transparent 10%, rgba(200,200,220,0.5) 50%, transparent 90%)'}}></div>

<div className="absolute top-2 left-2 w-3 h-2 rounded-full" style={{background: '#fff', boxShadow: '0 0 15px #fff, 0 0 30px #ffeaa7, 0 0 45px #ffeaa7'}}></div>
<div className="absolute top-3 left-6 w-2 h-1.5 rounded-full" style={{background: '#fff', boxShadow: '0 0 10px #fff, 0 0 20px #ffeaa7'}}></div>

<div className="absolute top-full mt-1 w-48 md:w-64 h-8 opacity-30" style={{background: 'linear-gradient(180deg, rgba(63, 81, 181, 0.4) 0%, transparent 100%)', filter: 'blur(8px)', transform: 'scaleY(-0.5)'}}></div>
</div>
</div>

<div className="absolute bottom-[15%] left-0 right-0 h-[1px] opacity-10" style={{background: 'repeating-linear-gradient(90deg, white 0px, white 40px, transparent 40px, transparent 80px)'}}></div>
<div className="absolute bottom-[14%] left-0 right-0 h-[1px] opacity-10" style={{background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 20px, white 20px, white 60px, transparent 60px, transparent 80px)'}}></div>
</div>

<div className="fixed inset-0 z-11 pointer-events-none">
<div className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-white opacity-20 animate-ping" style={{animationDuration: '2s'}}></div>
<div className="absolute bottom-[28%] left-[35%] w-1.5 h-1.5 rounded-full bg-white opacity-15 animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
<div className="absolute bottom-[24%] right-[25%] w-1 h-1 rounded-full bg-white opacity-20 animate-ping" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
<div className="absolute bottom-[30%] left-[50%] w-2 h-2 rounded-full bg-white opacity-10 animate-ping" style={{animationDuration: '4s', animationDelay: '0.3s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5">
<div className="flex items-center justify-between max-w-7xl mx-auto">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)'}}>
<span className="text-white font-semibold text-sm tracking-tighter">A</span>
</div>
<span className="text-white font-semibold text-base tracking-tighter">APEX MOTORS</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-white/70 text-xs font-medium tracking-wide hover:text-white transition-colors" href="#">INVENTORY</a>
<a className="text-white/70 text-xs font-medium tracking-wide hover:text-white transition-colors" href="#">CONFIGURATOR</a>
<a className="text-white/70 text-xs font-medium tracking-wide hover:text-white transition-colors" href="#">EXPERIENCES</a>
<a className="text-white/70 text-xs font-medium tracking-wide hover:text-white transition-colors" href="#">CONCIERGE</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-white/70 text-xs font-medium hover:text-white transition-colors">
<iconify-icon height="16" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>+1 (888) 720-APEX</span>
</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium text-black" style={{background: 'linear-gradient(135deg, #f4a623 0%, #e8871e 100%)', boxShadow: '0 4px 16px rgba(244,166,35,0.3)'}}>
                    BOOK VIEWING
                </button>
</div>
</div>
</nav>

<main className="relative z-20 min-h-screen flex flex-col justify-between">

<div className="flex-1 flex items-center justify-center pt-24 pb-8 px-6">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)'}}>
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium text-white/80">3 NEW ARRIVALS — TRACK TESTED &amp; DELIVERY READY</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="text-white">Unleash</span>
<span className="block" style={{background: 'linear-gradient(135deg, #f4a623 0%, #e8871e 50%, #c44e2b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Pure Power</span>
</h1>
<p className="text-sm md:text-base text-white/50 font-light max-w-xl mx-auto leading-relaxed mb-8">
                    Curating the world's most exclusive hypercars. Every vehicle hand-selected, track-verified, and delivered with white-glove precision.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-black" style={{background: 'linear-gradient(135deg, #f4a623 0%, #e8871e 100%)', boxShadow: '0 8px 32px rgba(244,166,35,0.3)'}}>
<span>EXPLORE FLEET</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white transition-colors" style={{background: 'rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)'}}>
<iconify-icon height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>WATCH FILM</span>
</button>
</div>
</div>
</div>

<div className="px-4 md:px-8 lg:px-12 pb-8 relative z-30">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-6">

<div className="flex flex-col gap-4 w-full lg:w-auto lg:max-w-sm">

<div className="rounded-2xl p-5 relative overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.07)', backdropFilter: 'blur(30px) saturate(1.5)', border: '1px solid rgba(255, 255, 255, 0.12)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 opacity-5" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'}}></div>
<div className="relative">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #e74c3c, #c0392b)'}}>
<iconify-icon className="text-white" height="14" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Expert Verdict</span>
</div>
<div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{background: 'rgba(244, 166, 35, 0.15)', border: '1px solid rgba(244,166,35,0.3)'}}>
<span className="text-xs font-bold" style={{color: '#f4a623'}}>10/10</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))'}}>
<iconify-icon className="text-yellow-400" height="22" icon="solar:medal-ribbon-star-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">"An absolute masterpiece of engineering"</p>
<p className="text-xs text-white/40 mt-0.5">by <span className="font-semibold text-white/60">Top Gear</span> — November 2024</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-5 relative overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.07)', backdropFilter: 'blur(30px) saturate(1.5)', border: '1px solid rgba(255, 255, 255, 0.12)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 opacity-5" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'}}></div>
<div className="relative">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #2ecc71, #27ae60)'}}>
<iconify-icon className="text-white" height="14" icon="solar:shield-check-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Verified Owner Feedback</span>
</div>

<div className="flex items-center gap-1 mb-3">
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#f4a623', filter: 'drop-shadow(0 0 6px rgba(244,166,35,0.5))'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#f4a623', filter: 'drop-shadow(0 0 6px rgba(244,166,35,0.5))'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#f4a623', filter: 'drop-shadow(0 0 6px rgba(244,166,35,0.5))'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#f4a623', filter: 'drop-shadow(0 0 6px rgba(244,166,35,0.5))'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#f4a623', filter: 'drop-shadow(0 0 6px rgba(244,166,35,0.5))'}} width="18"></iconify-icon>
<span className="text-xs text-white/40 ml-2">5.0 (47 reviews)</span>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{background: 'linear-gradient(135deg, #8e44ad, #9b59b6)'}}>JR</div>
<div>
<p className="text-sm text-white/80 leading-relaxed">"The entire process was flawless — from selection to doorstep delivery in Monaco."</p>
<p className="text-xs text-white/30 mt-1.5">James R. — Dubai, UAE</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col items-center gap-3 pb-4">
<div className="flex items-center gap-8">
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight text-white">243</p>
<p className="text-xs text-white/40 mt-0.5">Cars Delivered</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight text-white">$2.1B</p>
<p className="text-xs text-white/40 mt-0.5">Total Portfolio</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight text-white">38</p>
<p className="text-xs text-white/40 mt-0.5">Countries</p>
</div>
</div>

<div className="flex flex-col items-center gap-2 mt-4 animate-bounce" style={{animationDuration: '2s'}}>
<span className="text-xs text-white/30">Scroll to explore</span>
<iconify-icon className="text-white/30" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>

<div className="w-full lg:w-auto lg:max-w-sm">
<div className="rounded-2xl p-6 relative overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.07)', backdropFilter: 'blur(30px) saturate(1.5)', border: '1px solid rgba(255, 255, 255, 0.12)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 opacity-5" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'}}></div>
<div className="relative">

<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/60" height="18" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Bespoke Configurator</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{background: 'rgba(46, 204, 113, 0.15)', border: '1px solid rgba(46,204,113,0.3)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs text-green-400 font-medium">Live</span>
</div>
</div>

<div className="mb-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Lamborghini Revuelto</h3>
<p className="text-xs text-white/40">V12 Hybrid · 1,001 HP · 0-60 in 2.5s</p>
</div>

<div className="space-y-3 mb-5">

<div className="flex items-center justify-between p-3 rounded-xl" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full border-2 border-white/20" style={{background: 'linear-gradient(135deg, #27ae60, #58d68d)'}}></div>
<div>
<p className="text-xs font-medium text-white">Paint: Verde Mantis</p>
<p className="text-xs text-white/30">Special matte finish</p>
</div>
</div>
<span className="text-xs font-medium" style={{color: '#f4a623'}}>+$18,000</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center" style={{background: 'rgba(30,30,30,0.8)'}}>
<iconify-icon className="text-white/60" height="12" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">Wheels: 21" Forged Black</p>
<p className="text-xs text-white/30">Titanium centre-lock</p>
</div>
</div>
<span className="text-xs font-medium" style={{color: '#f4a623'}}>+$12,500</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full border-2 border-white/20" style={{background: 'linear-gradient(135deg, #2c3e50, #34495e)'}}></div>
<div>
<p className="text-xs font-medium text-white">Interior: Nero Cosmus</p>
<p className="text-xs text-white/30">Full Alcantara package</p>
</div>
</div>
<span className="text-xs font-medium" style={{color: '#f4a623'}}>+$8,500</span>
</div>
</div>

<div className="h-px w-full mb-4" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'}}></div>

<div className="flex items-center justify-between mb-5">
<div>
<p className="text-xs text-white/40 uppercase tracking-wider font-medium">Total Build</p>
<p className="text-2xl font-semibold tracking-tight text-white mt-0.5">$635,000</p>
</div>
<div className="text-right">
<p className="text-xs text-white/30">Est. delivery</p>
<p className="text-xs font-medium text-white/60">Q2 2025</p>
</div>
</div>

<button className="group w-full py-3.5 rounded-xl text-sm font-semibold text-black flex items-center justify-center gap-2 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #f4a623 0%, #e8871e 100%)', boxShadow: '0 8px 32px rgba(244, 166, 35, 0.3), 0 0 60px rgba(244,166,35,0.1)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(135deg, #ffd700 0%, #f4a623 100%)'}}></div>
<span className="relative z-10">RESERVE NOW</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-white/25 mt-3">$25,000 fully refundable deposit required</p>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-5 pointer-events-none">

<div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10" style={{background: 'radial-gradient(ellipse, rgba(46, 204, 113, 0.5) 0%, transparent 70%)', filter: 'blur(60px)'}}></div>

<div className="absolute bottom-[12%] left-[15%] w-[300px] h-[150px] opacity-8" style={{background: 'radial-gradient(ellipse, rgba(231, 76, 60, 0.4) 0%, transparent 70%)', filter: 'blur(50px)'}}></div>

<div className="absolute bottom-[12%] right-[15%] w-[300px] h-[150px] opacity-8" style={{background: 'radial-gradient(ellipse, rgba(63, 81, 181, 0.4) 0%, transparent 70%)', filter: 'blur(50px)'}}></div>
</div>

<div className="fixed top-[30%] left-[45%] w-32 h-32 pointer-events-none z-15 opacity-20" style={{background: 'radial-gradient(circle, rgba(244, 166, 35, 0.4) 0%, transparent 70%)', filter: 'blur(20px)'}}></div>
<div className="fixed top-[28%] left-[48%] w-4 h-4 pointer-events-none z-15 rounded-full" style={{background: 'rgba(255, 255, 255, 0.3)', filter: 'blur(2px)'}}></div>
<style>
        * { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent; }
        body { -webkit-font-smoothing: antialiased; }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
    </style>

    </>
  );
}
