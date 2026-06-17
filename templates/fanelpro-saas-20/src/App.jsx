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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<div className="fixed top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] pointer-events-none z-0"></div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-max max-w-[90%]">
<div className="glass-nav flex items-center gap-1 p-1 pr-1.5 border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5">
<div className="pl-4 pr-3 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold text-zinc-100 tracking-tight">FanelPro</span>
</div>
<div className="hidden sm:flex items-center border-l border-white/5 pl-1 mr-1">
<a className="text-[11px] font-medium text-zinc-500 hover:text-zinc-200 px-3 py-1.5 transition-colors" href="#features">Mogućnosti</a>
<a className="text-[11px] font-medium text-zinc-500 hover:text-zinc-200 px-3 py-1.5 transition-colors" href="#demo">Demo</a>
</div>
<a className="flex items-center gap-1.5 bg-zinc-100 hover:bg-white text-black pl-3 pr-3 py-1.5 rounded-full text-[11px] font-semibold transition-all shimmer-btn" href="#pricing">
                Uzmi Lifetime
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<main className="w-full max-w-[34rem] px-6 pt-32 pb-20 flex flex-col items-center text-center z-10 mx-auto">

<section className="mb-20 w-full animate-fade-in">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span className="text-[10px] font-medium text-zinc-400 tracking-wide uppercase">Limited Offer</span>
</div>
<h1 className="text-5xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
                Plati jednom.<br/>
<span className="text-zinc-600">Gradi, hostaj i prodaji.</span>
</h1>
<p className="text-base text-zinc-400 max-w-sm mx-auto mb-8 font-normal leading-relaxed">
                FanelPro spaja website &amp; landing builder + hosting + checkout. 
                Bez mjesečnih pretplata. Bez Stripe drame.
            </p>
<div className="flex flex-col items-center gap-4 w-full">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl text-sm font-medium transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group" href="#pricing">
<i className="w-4 h-4 fill-white/20 group-hover:fill-white transition-colors" data-lucide="zap"></i>
                    Uzmi Lifetime 2.950€
                </a>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">Samo 1000 Lifetime mjesta</span>
</div>
</section>

<section className="w-full mb-24 group cursor-pointer relative" id="demo">
<div className="bg-[#0A0A0A] border border-white/10 rounded-[24px] p-1.5 overflow-hidden shadow-2xl relative">
<div className="aspect-video w-full bg-zinc-900 rounded-[18px] relative overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transition-transform group-hover:scale-110 shadow-lg">
<i className="w-5 h-5 fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="text-left">
<div className="text-xs text-white font-medium">Video Walkthrough</div>
<div className="text-[10px] text-zinc-400">2 min</div>
</div>
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</section>

<section className="mb-24 w-full text-left">
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Intuitivno za Balkan.</h2>
<p className="text-zinc-500 text-base leading-relaxed mb-6">
                Trenutni alati nisu pravljeni za naše tržište. Stripe ograničenja, verifikacije, zamrznut novac.
                <span className="text-zinc-300 block mt-2">FanelPro rješava sve na jednom mjestu.</span>
</p>
<div>
<a className="text-white text-xs font-medium inline-flex items-center gap-1 hover:gap-2 transition-all group" href="#pricing">
                    Pogledaj rješenje <i className="w-3 h-3 text-blue-500" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="w-full mb-24 space-y-4" id="features">

<div className="bg-[#0A0A0A] border border-white/10 rounded-[24px] p-6 text-left relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Builder + Hosting</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    Izgradi web ili landing stranicu bez kodiranja. Hosting i SSL su uključeni zauvijek.
                </p>
<div className="w-full h-24 bg-zinc-900/50 rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer-fast"></div>

<div className="absolute top-3 left-3 w-16 h-2 bg-zinc-800 rounded-full"></div>
<div className="absolute top-7 left-3 w-10 h-2 bg-zinc-800 rounded-full"></div>
<div className="absolute bottom-3 right-3 w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-[24px] p-6 text-left relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="credit-card"></i>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lokalni Checkout</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    Upsell, Downsell i Bump ponude. Kartično plaćanje prilagođeno našem tržištu.
                </p>
<div className="w-full h-24 bg-zinc-900/50 rounded-xl border border-white/5 relative flex items-center justify-center">
<div className="bg-black border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-zinc-300 font-mono">Payment_Success</span>
</div>
</div>
</div>
</section>

<section className="w-full mb-24 bg-[#0A0A0A] rounded-[24px] border border-white/10 text-left overflow-hidden">
<div className="px-5 py-4 border-b border-white/5 bg-white/[0.02]">
<h3 className="text-[11px] text-zinc-500 font-semibold uppercase tracking-widest">Šta dobijaš u paketu</h3>
</div>
<div className="divide-y divide-white/5">
<div className="flex items-center justify-between p-4 pr-5 hover:bg-white/[0.02] transition-colors">
<span className="text-zinc-300 text-sm">Website Builder</span>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 pr-5 hover:bg-white/[0.02] transition-colors">
<span className="text-zinc-300 text-sm">Checkout + Bump</span>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 pr-5 hover:bg-white/[0.02] transition-colors">
<span className="text-zinc-300 text-sm">Hosting + SSL</span>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 pr-5 hover:bg-white/[0.02] transition-colors">
<span className="text-zinc-300 text-sm">Custom domena</span>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 pr-5 hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-zinc-300 text-sm">Upsell / Downsell</span>
<span className="text-[10px] text-zinc-600">Ključno za profit</span>
</div>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="check"></i>
</div>
</div>
</section>

<section className="mb-24 text-center w-full px-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 mb-4 border border-white/10">
<i className="w-5 h-5 text-zinc-400" data-lucide="shield"></i>
</div>
<h2 className="text-xl font-medium text-white mb-3">Sigurnost.</h2>
<p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                Tvoji podaci, tvoja pravila. FanelPro štiti tvoj IP i daje ti opciju da hostaš fajlove sigurno.
            </p>
<div className="flex justify-center gap-6 opacity-30 grayscale">
<i className="w-6 h-6 text-white" data-lucide="lock"></i>
<i className="w-6 h-6 text-white" data-lucide="server"></i>
<i className="w-6 h-6 text-white" data-lucide="database"></i>
</div>
</section>

<section className="w-full mb-24 relative" id="pricing">

<div className="bg-[#0A0A0A] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden relative z-10">

<div className="px-5 py-4 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
<span className="text-xs font-medium text-zinc-400">Odaberi Plan</span>
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
</div>

<div className="p-2 space-y-1">

<div className="flex items-center gap-3 p-3 rounded-xl opacity-40 grayscale">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500 shrink-0">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-300 truncate">Standardni Alati</div>
<div className="text-[10px] text-zinc-500">~600€ / godišnje</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/10 border border-blue-500/20 relative overflow-hidden group">
<div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white relative z-10 shadow-lg shadow-blue-900/50 shrink-0">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
<div className="flex-1 relative z-10 min-w-0">
<div className="text-sm font-medium text-white truncate">FanelPro Lifetime</div>
<div className="text-[10px] text-blue-400">2.950€ jednokratno</div>
</div>
</div>
</div>

<div className="px-5 py-5 bg-white/[0.02] border-t border-white/5 mt-2">
<div className="flex items-start gap-2 mb-4">
<i className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" data-lucide="info"></i>
<div className="text-[11px] text-zinc-500 leading-snug">
                            Kad se popuni 1000 mjesta, prelazimo na mjesečne pretplate.
                        </div>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-black font-semibold text-sm py-3 rounded-xl transition-colors flex justify-center items-center gap-2 shadow-lg shadow-white/10">
                        Kupi Sada
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<div className="text-center mt-3 text-[10px] text-zinc-600">
                        Sigurno plaćanje putem Stripe-a
                    </div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
</section>

<section className="w-full mb-24">
<div className="space-y-3">
<details className="group bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none text-zinc-300 text-sm font-medium hover:bg-white/[0.02] transition-colors">
                        Šta znači “lifetime”?
                        <i className="w-4 h-4 text-zinc-600 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 pt-1 text-xs text-zinc-500 leading-relaxed">
                        Doživotan pristup platformi, bez mjesečnih ili godišnjih uplata. Platiš jednom i koristiš zauvijek.
                    </div>
</details>
<details className="group bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none text-zinc-300 text-sm font-medium hover:bg-white/[0.02] transition-colors">
                        Postoji li povrat novca?
                        <i className="w-4 h-4 text-zinc-600 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 pt-1 text-xs text-zinc-500 leading-relaxed">
                        Da. Imaš garantni period (14 dana) da isprobaš platformu bez rizika. Ako nisi zadovoljan, vraćamo novac.
                    </div>
</details>
</div>
</section>

<footer className="text-center w-full border-t border-white/5 pt-12">
<div className="w-10 h-10 bg-zinc-100 rounded-xl mx-auto flex items-center justify-center text-black mb-6">
<i className="w-5 h-5 fill-black" data-lucide="zap"></i>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Pametniji način za<br/>online prodaju.
            </h2>
<a className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-xs font-medium mt-6 transition-colors" href="#pricing">
                Osiguraj svoje mjesto <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
<div className="mt-12 flex justify-center gap-6 text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
<a className="hover:text-zinc-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-400 transition-colors" href="#">LinkedIn</a>
<span>© 2024</span>
</div>
</footer>
</main>


    </>
  );
}
