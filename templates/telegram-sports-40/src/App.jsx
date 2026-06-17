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
      
<main className="flex flex-col text-center w-full max-w-lg mr-auto ml-auto items-center">

<div className="flex shadow-pink-500/20 cursor-pointer w-24 h-24 rounded-full ring-white/10 ring-1 mb-6 shadow-2xl items-center justify-center" onclick="window.location.href='https://ibb.co/wNfSWxtQ'" role="button" style={{background: 'linear-gradient(45deg, #ff00cc, #ff5ae3)'}}>
<span className="text-4xl font-semibold text-white tracking-tighter"></span>
</div>

<h1 className="sm:text-4xl text-3xl font-semibold text-[#ff4bd1] tracking-tight mb-2">MG CRICKET KING™</h1>
<p className="text-base text-zinc-300 mb-10 font-medium">
            Premium Prediction System
        </p>

<div className="border-white/[0.08] overflow-hidden group w-full border rounded-3xl mb-8 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="flex justify-center mb-4">
<iconify-icon className="text-3xl text-[#ff66d9]" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#ff66d9] mb-4 relative">
                Join Our Telegram Channel
            </h2>
<div className="text-sm text-zinc-300 space-y-4 mb-8 leading-relaxed relative">
<p className=""></p>
<p className="flex items-center justify-center gap-2 text-zinc-400">
<iconify-icon className="text-lg animate-bounce" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Click the button below to join our Telegram channel now
                </p>
</div>
<a className="inline-flex items-center justify-center gap-2.5 shadow-pink-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-pink-500/40 text-base font-semibold text-white w-full ring-white/10 ring-1 rounded-full pt-4 pr-6 pb-4 pl-6 relative shadow-lg" href="https://t.me/+WqCxBxEs1UExMDNl" style={{background: 'linear-gradient(90deg, #ff00cc, #ff4bd1)'}}>
<iconify-icon className="text-xl rotate-45" height="20" icon="solar:map-arrow-up-linear" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
    JOIN TELEGRAM NOW
</a>
</div>

<div className="w-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 text-left shadow-2xl relative">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-[#ff66d9]" icon="solar:crown-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-xl tracking-tight font-semibold text-[#ff66d9]">Premium Features</h2>
</div>
<ul className="flex flex-col text-sm text-zinc-300">
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<iconify-icon className="shrink-0 group-hover:scale-110 transition-transform text-lg text-[#ff4bd1] mt-0.5" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5', color: 'rgb(0, 136, 204)'}} width="18"></iconify-icon>
<span className="">100%Cricket Predictions</span>
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<iconify-icon className="text-lg text-[#ff4bd1] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Daily VIP Tips with High Win Rate</span>
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<iconify-icon className="text-lg text-[#ff4bd1] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Expert Analysis &amp; Match Insights</span>
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<iconify-icon className="text-lg text-[#ff4bd1] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Live Score Updates &amp; Real-Time Alerts</span>
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<span>24/7 Support from Professional Tipsters</span>
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<span className=""></span>
</li>
<li className="flex items-start gap-3 py-3.5 border-b border-white/[0.06] last:border-0 group transition-colors hover:text-white">
<span className=""></span>
</li>
</ul>
</div>

<footer className="text-xs font-medium text-zinc-500 mt-12">
            © 2026 Sondip Channel. All rights reserved.
        </footer>
</main>

    </>
  );
}
