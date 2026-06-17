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



      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const btn = document.getElementById('copyWifi');
        const pw = document.getElementById('wifiPassword');
        const toast = document.getElementById('toast');

        btn?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(pw.textContent.trim());
            toast.style.opacity = '1';
            setTimeout(() => (toast.style.opacity = '0'), 1400);
          } catch (e) {
            const range = document.createRange();
            range.selectNodeContents(pw);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            document.execCommand('copy');
            sel.removeAllRanges();
            toast.style.opacity = '1';
            setTimeout(() => (toast.style.opacity = '0'), 1400);
          }
        });
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
      
<div className="mx-auto max-w-md min-h-screen">

<header className="relative">
<div className="relative h-48 overflow-hidden">
<img alt="Hotel Lobby" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>

<div className="relative z-10 px-5 pt-5 flex items-start gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center text-slate-900 font-semibold">G</div>
<div className="leading-tight">
<div className="text-white text-lg tracking-tight font-semibold">The Grand Hotel</div>
<div className="text-white/70 text-xs">Powered by AeroTag Assist</div>
</div>
</div>
<div className="ml-auto">
<button className="h-9 w-9 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center">
<i className="h-5 w-5 text-slate-700" data-lucide="home"></i>
</button>
</div>
</div>

<div className="absolute inset-x-0 bottom-3 flex justify-center z-10">
<div className="px-3.5 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur text-white">
<span className="text-xs">You are in</span>
<span className="ml-1 font-medium">Room 101</span>
</div>
</div>
</div>
</header>

<main className="relative z-10 -mt-1 rounded-t-3xl bg-white shadow-sm">

<section className="px-5 pt-7">
<h2 className="text-center text-[18px] font-medium text-slate-700">Discover Your Perfect Stay</h2>

<div className="mt-4 rounded-2xl overflow-hidden relative">
<img alt="Staff" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"></div>
<div className="absolute inset-0 p-4 flex flex-col justify-between">
<div className="w-9 h-6 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
<i className="h-4 w-4 text-white" data-lucide="megaphone"></i>
</div>
<div className="max-w-[70%]">
<h3 className="text-white text-[18px] tracking-tight leading-snug font-medium">Help Us Make Your Stay Better</h3>
<p className="text-white/80 text-xs mt-1">Share quick feedback or requests in under 30 seconds.</p>
<button className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-medium">
                  Give Feedback
                  <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
<button className="shrink-0 px-4 py-2 rounded-full bg-slate-800 text-white text-sm font-medium">Hotel Hub</button>
<button className="shrink-0 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">Room Service</button>
<button className="shrink-0 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">Essentials</button>
</div>
</section>

<div className="mt-5 h-px bg-slate-100"></div>

<section className="px-5 py-4">
<div className="flex items-center">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Hotel Hub</h3>
<button className="ml-auto h-9 w-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5 text-slate-700" data-lucide="search"></i>
</button>
</div>

<div className="mt-3 p-4 rounded-2xl border border-slate-200 bg-white">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center">
<i className="h-5 w-5 text-rose-500" data-lucide="wifi"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-700"><span className="font-medium">Wifi Name:</span> <span className="font-medium">Hotel Hub</span></p>
<p className="text-sm text-slate-700 mt-1"><span className="font-medium">Wifi Password:</span> <span className="font-medium" id="wifiPassword">HotelHub@123</span></p>
</div>
<button className="mt-0.5 h-9 w-9 rounded-lg bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center" id="copyWifi">
<i className="h-5 w-5 text-slate-700" data-lucide="copy"></i>
</button>
</div>
</div>

<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="Resort" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>

<div className="mt-4">
<h4 className="text-xl tracking-tight font-semibold text-slate-900">About Hotel</h4>
<p className="mt-1 text-sm leading-6 text-slate-700">
              A perfect blend of comfort, elegance, and warm hospitality. Experience modern stays designed to make every visit memorable. Enjoy world-class amenities, serene spaces, and thoughtful service throughout your stay.
            </p>
</div>
</section>
</main>
</div>

<div className="fixed bottom-5 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-full bg-slate-900 text-white text-xs font-medium shadow-lg opacity-0 pointer-events-none transition-opacity" id="toast">
      Copied to clipboard
    </div>




    </>
  );
}
