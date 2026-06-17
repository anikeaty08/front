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



      // Initialize lucide icons
      lucide.createIcons();

      // Simple emoji confetti using Web Animations API (no external libs)
      const celebrateBtn = document.getElementById('celebrateBtn');
      celebrateBtn?.addEventListener('click', () => {
        const rect = celebrateBtn.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        const emojis = ['🎉','✨','🎊','⭐','💜','💫'];
        const total = 26;

        for (let i = 0; i < total; i++) {
          const span = document.createElement('span');
          span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          span.style.position = 'fixed';
          span.style.left = originX + 'px';
          span.style.top = originY + 'px';
          span.style.fontSize = (12 + Math.random() * 12) + 'px';
          span.style.pointerEvents = 'none';
          span.style.zIndex = 9999;
          document.body.appendChild(span);

          const angle = (Math.PI * 2) * (i / total) + (Math.random() * 0.6 - 0.3);
          const velocity = 160 + Math.random() * 180;
          const dx = Math.cos(angle) * velocity;
          const dy = Math.sin(angle) * (velocity * 0.8);
          const duration = 900 + Math.random() * 600;

          span.animate(
            [
              { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
              { transform: `translate(${dx}px, ${dy - 60}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ],
            { duration, easing: 'cubic-bezier(.2,.7,.2,1)' }
          ).onfinish = () => span.remove();
        }
      });

      // Fake receipt download
      document.getElementById('downloadReceipt')?.addEventListener('click', () => {
        const blob = new Blob(
          [ 'Thank you for your purchase.\nOrder: REM2PV8R\nTotal: $15.00 USD\nDate: 24/09/2025' ],
          { type: 'text/plain;charset=utf-8' }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'receipt_REM2PV8R.txt';
        document.body.appendChild(a);
        a.click();
        a.remove();
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
      

<div className="fixed inset-0 -z-20">
<img alt="" className="h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_30%,rgba(56,189,248,0.25),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_30%_70%,rgba(167,139,250,0.25),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-fuchsia-900/40 to-slate-950/80 backdrop-blur-[2px]"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute left-1/2 top-[-8rem] -translate-x-1/2 w-[40rem] h-[20rem] bg-gradient-to-r from-sky-400/20 via-indigo-400/20 to-fuchsia-400/20 blur-3xl rounded-full"></div>
</div>

<main className="z-10 flex sm:py-16 pt-10 pr-4 pb-10 pl-4 relative items-center justify-center">
<section className="w-full max-w-md">

<div className="relative">
<div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-indigo-400/40 via-fuchsia-400/30 to-sky-400/30 opacity-90"></div>
<div className="relative rounded-2xl bg-slate-900/60 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">

<div className="px-6 pt-6">
<span className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-2.5 py-1 ring-1 ring-inset ring-white/10 text-indigo-300">
<svg className="lucide lucide-check-circle-2 h-4 w-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[13px] font-medium">Payment successful</span>
</span>
<h1 className="mt-3 text-2xl tracking-tight font-semibold text-white">Thank you for your purchase</h1>
<p className="mt-1.5 text-sm text-slate-300/80">Your payment has been processed. Your account is now upgraded.</p>
</div>

<div className="px-6 pt-5">
<div className="rounded-xl bg-slate-950/50 ring-1 ring-white/10 overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 bg-white/5 text-[13px] text-slate-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-hash h-3.5 w-3.5 opacity-80" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
<span className="font-medium tracking-tight">ORDER #REM2PV8R</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar h-3.5 w-3.5 opacity-80" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">24/09/2025</span>
</div>
</div>

<div className="px-4 py-4 space-y-4">
<div className="flex items-start justify-between">
<div className="">
<p className="text-sm font-medium text-white">Aura Pro Plan Subscription</p>
<p className="mt-0.5 text-xs text-slate-300/80">Monthly Plan</p>
<p className="mt-0.5 text-xs text-slate-400/70">Next billing date: N/A</p>
</div>
<p className="text-sm font-medium text-slate-200">$15.00</p>
</div>
<div className="h-px bg-white/10"></div>
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300/90">Subtotal</p>
<p className="text-sm text-slate-200">$15.00</p>
</div>
<div className="h-px bg-white/10"></div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white">Total</p>
<p className="text-sm font-semibold text-white">$15.00 USD</p>
</div>
<div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 flex items-center gap-2 text-[13px] text-slate-300">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Receipt sent to <span className="text-slate-200 font-medium">info@venia.se</span></span>
<button className="ml-auto inline-flex items-center gap-1.5 text-slate-200/90 hover:text-white transition" id="downloadReceipt">
<svg className="lucide lucide-download h-3.5 w-3.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-xs font-medium">Download</span>
</button>
</div>
</div>
</div>
</div>

<div className="px-6 pt-5 pb-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2.5 text-sm font-medium shadow-[inset_0_-1px_0_rgba(255,255,255,0.2),0_6px_20px_-4px_rgba(56,189,248,0.5)] hover:brightness-105 active:brightness-95 transition" id="celebrateBtn">
<svg className="lucide lucide-party-popper h-4 w-4" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
<span>Celebrate</span>
<span aria-hidden="true">🎉</span>
</button>
<button className="mt-2.5 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 text-slate-200 px-4 py-2.5 text-sm font-medium ring-1 ring-inset ring-white/10 hover:bg-white/7 transition">
<svg className="lucide lucide-home h-4 w-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span>Return to Homepage</span>
</button>
</div>

<div className="px-6 pb-5 text-[12px] text-slate-400/80 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span>Paid just now</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400/80"></span>
<span>Payment system</span>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-8 -bottom-8 h-16 rounded-full bg-slate-900/40 blur-2xl"></div>
</div>
</section>
</main>

<div className="pointer-events-none fixed bottom-12 right-10 -z-10">
<div className="w-40 h-40 rounded-full bg-fuchsia-500/20 blur-2xl"></div>
</div>
<div className="pointer-events-none fixed top-24 left-16 -z-10">
<div className="w-52 h-52 rounded-full bg-sky-500/20 blur-3xl"></div>
</div>





    </>
  );
}
