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
      

<div className="w-full max-w-[400px] bg-[#F8F9FB] min-h-[850px] relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)] rounded-[2.5rem] border-[8px] border-slate-800 ring-1 ring-white/10">

<div className="h-full overflow-y-auto hide-scrollbar pb-32">

<header className="pt-12 px-5 pb-6 flex justify-between items-center relative z-10">
<div className="flex items-center gap-3">
<img alt="User Profile" className="w-11 h-11 rounded-full object-cover shadow-sm border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-medium">Good morning,</span>
<span className="text-lg font-semibold tracking-tight text-[#1A1A2E]">Sarah Doe</span>
</div>
</div>

<div className="flex items-center gap-2 bg-[#7028FF]/10 px-4 py-2 rounded-full border border-[#7028FF]/20 shadow-sm">
<iconify-icon className="text-[#7028FF] text-lg" icon="solar:wallet-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold text-[#7028FF]">12.5k <span className="text-xs font-medium">FCFA</span></span>
</div>
</header>

<div className="px-5 mb-8 relative z-10">
<div className="relative flex items-center bg-white rounded-[32px] shadow-[0_8px_24px_rgba(26,26,46,0.06)] border border-slate-100 p-1.5 focus-within:ring-2 focus-within:ring-[#7028FF]/20 transition-all">
<div className="pl-4 pr-2 flex items-center text-slate-400">
<span className="text-base">🔗</span>
</div>
<input className="flex-1 bg-transparent text-sm font-medium focus:outline-none min-w-0 placeholder-slate-400 text-[#1A1A2E]" placeholder="Paste Shein or Temu link here..." type="text"/>
<button className="bg-gradient-to-r from-[#7028FF] to-[#FF6B00] text-white px-5 py-3 rounded-[28px] text-sm font-semibold whitespace-nowrap shadow-[0_4px_12px_rgba(112,40,255,0.3)] hover:shadow-[0_6px_16px_rgba(112,40,255,0.4)] transition-all hover:scale-[1.02]">
                        IMPORT
                    </button>
</div>
</div>

<div className="px-5 mb-10">
<div className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden shadow-[0_12px_30px_rgba(26,26,46,0.1)] group">
<img alt="Fashion Models" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/90 via-[#1A1A2E]/60 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-center">
<div className="bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full border border-white/30 mb-3">
<span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider drop-shadow-sm">Special Offer</span>
</div>
<h2 className="text-white text-2xl font-semibold tracking-tight w-2/3 leading-tight mb-2 drop-shadow-md">30% Off Shipping</h2>
<p className="text-white/90 text-sm font-medium">On all Shein group orders today.</p>
</div>
</div>
</div>

<div className="mb-10 relative z-10">
<div className="px-5 flex justify-between items-end mb-5">
<h2 className="text-xl font-semibold tracking-tight text-[#1A1A2E]">Active Cargo Groups</h2>
<button className="text-sm font-semibold text-[#7028FF] hover:text-[#581cce] transition-colors">See all</button>
</div>
<div className="flex overflow-x-auto hide-scrollbar px-5 gap-4 pb-4">

<div className="min-w-[260px] bg-white rounded-3xl p-5 shadow-[0_8px_20px_rgba(26,26,46,0.04)] border border-slate-100 flex-shrink-0">
<div className="flex justify-between items-start mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl bg-[#7028FF]/10 flex items-center justify-center text-[#7028FF]">
<iconify-icon className="text-2xl" icon="solar:plane-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#1A1A2E] tracking-tight">Guangzhou → Dakar</h3>
<div className="text-xs text-slate-500 font-medium mt-0.5">Closes in 2 days</div>
</div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between text-xs font-semibold mb-2">
<span className="text-[#1A1A2E]">8kg <span className="text-slate-400 font-medium">filled</span></span>
<span className="text-slate-400 font-medium">10kg <span className="text-[#1A1A2E] font-semibold">total</span></span>
</div>
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#7028FF] to-[#FF6B00] w-[80%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2.5">
<img className="w-8 h-8 rounded-full border-[2.5px] border-white object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-8 h-8 rounded-full border-[2.5px] border-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-8 h-8 rounded-full border-[2.5px] border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-[2.5px] border-white bg-slate-50 flex items-center justify-center text-xs text-slate-500 font-semibold z-10">+12</div>
</div>
<button className="text-sm font-semibold text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-2 rounded-full hover:bg-[#FF6B00]/20 transition-colors">Join</button>
</div>
</div>

<div className="min-w-[260px] bg-white rounded-3xl p-5 shadow-[0_8px_20px_rgba(26,26,46,0.04)] border border-slate-100 flex-shrink-0">
<div className="flex justify-between items-start mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl bg-[#7028FF]/10 flex items-center justify-center text-[#7028FF]">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#1A1A2E] tracking-tight">Paris → Abidjan</h3>
<div className="text-xs text-slate-500 font-medium mt-0.5">Closes in 5 hrs</div>
</div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between text-xs font-semibold mb-2">
<span className="text-[#1A1A2E]">18kg <span className="text-slate-400 font-medium">filled</span></span>
<span className="text-slate-400 font-medium">25kg <span className="text-[#1A1A2E] font-semibold">total</span></span>
</div>
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#7028FF] to-[#FF6B00] w-[72%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2.5">
<img className="w-8 h-8 rounded-full border-[2.5px] border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-8 h-8 rounded-full border-[2.5px] border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-[2.5px] border-white bg-slate-50 flex items-center justify-center text-xs text-slate-500 font-semibold z-10">+4</div>
</div>
<button className="text-sm font-semibold text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-2 rounded-full hover:bg-[#FF6B00]/20 transition-colors">Join</button>
</div>
</div>
</div>
</div>

<div className="px-5 relative z-10">
<h2 className="text-xl font-semibold tracking-tight text-[#1A1A2E] mb-5">Trending Finds</h2>

<div className="columns-2 gap-4 space-y-4">

<div className="break-inside-avoid relative rounded-[2rem] overflow-hidden group bg-white shadow-[0_8px_20px_rgba(26,26,46,0.04)] border border-slate-100">
<img alt="Fashion" className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute bottom-3 left-3 right-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-3 flex justify-between items-center shadow-lg">
<div>
<div className="text-[11px] text-white/90 drop-shadow-md font-medium mb-0.5">Knit Sweater</div>
<div className="text-sm font-semibold text-white drop-shadow-md tracking-tight">8,500 FCFA</div>
</div>
<button className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-[#FF6B00] hover:bg-white transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative rounded-[2rem] overflow-hidden group bg-white shadow-[0_8px_20px_rgba(26,26,46,0.04)] border border-slate-100">
<img alt="Bag" className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute bottom-3 left-3 right-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-3 flex justify-between items-center shadow-lg">
<div>
<div className="text-[11px] text-white/90 drop-shadow-md font-medium mb-0.5">Leather Mini</div>
<div className="text-sm font-semibold text-white drop-shadow-md tracking-tight">12,000 FCFA</div>
</div>
<button className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-[#FF6B00] hover:bg-white transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative rounded-[2rem] overflow-hidden group bg-white shadow-[0_8px_20px_rgba(26,26,46,0.04)] border border-slate-100">
<img alt="Heels" className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute bottom-3 left-3 right-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-3 flex justify-between items-center shadow-lg">
<div>
<div className="text-[11px] text-white/90 drop-shadow-md font-medium mb-0.5">Velvet Heels</div>
<div className="text-sm font-semibold text-white drop-shadow-md tracking-tight">15,500 FCFA</div>
</div>
<button className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-[#FF6B00] hover:bg-white transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative rounded-[2rem] overflow-hidden group bg-white shadow-[0_8px_20px_rgba(26,26,46,0.04)] border border-slate-100">
<img alt="Dress" className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1572804013309-82a89b4f459c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute bottom-3 left-3 right-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-3 flex justify-between items-center shadow-lg">
<div>
<div className="text-[11px] text-white/90 drop-shadow-md font-medium mb-0.5">Summer Dress</div>
<div className="text-sm font-semibold text-white drop-shadow-md tracking-tight">9,200 FCFA</div>
</div>
<button className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-[#FF6B00] hover:bg-white transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-5 right-5 z-50 pointer-events-none">
<div className="bg-white/90 backdrop-blur-xl rounded-full shadow-[0_16px_40px_rgba(26,26,46,0.12)] border border-white/80 px-6 py-4 flex justify-between items-center pointer-events-auto">
<button className="flex flex-col items-center gap-1.5 text-[#7028FF] transition-colors">
<iconify-icon className="text-2xl drop-shadow-sm" icon="solar:home-smile-bold" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-semibold tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#1A1A2E] transition-colors">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Groups</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#1A1A2E] transition-colors">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Tracking</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#1A1A2E] transition-colors relative">
<div className="absolute top-0.5 right-1 w-2 h-2 bg-[#FF6B00] rounded-full ring-2 ring-white"></div>
<iconify-icon className="text-2xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Profile</span>
</button>
</div>
</div>
</div>

    </>
  );
}
