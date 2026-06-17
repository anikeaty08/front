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
      

<header className="py-10 flex justify-center">
<div className="text-3xl font-semibold tracking-tighter text-white uppercase">
            Tempus
        </div>
</header>

<section className="max-w-4xl mx-auto px-6 py-12 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            You Don't Have to Just Accept Hair Loss.
        </h1>
<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
            Dr. Marco Barusco has spent over 20 years helping people get their hair back. And their confidence. He performs every surgery himself. Every single one.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-[#B8D032] text-black px-8 py-5 rounded-xl font-semibold text-lg md:text-xl transition-transform hover:scale-105 shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
<p className="text-sm text-white/80">
                It's free. It's virtual. Dr. Barusco does every consultation himself.
            </p>
</div>
</section>

<section className="py-16 px-6 max-w-5xl mx-auto text-center">
<p className="text-base text-white/90 mb-4 font-medium uppercase tracking-widest">Watch this first. It's short.</p>
<div className="relative w-full aspect-video bg-slate-900/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl mb-12">

<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<iconify-icon className="text-7xl text-white/20 absolute" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-lg font-medium text-white/40 tracking-tight">VSL Video Goes Here</span>
</div>
<div className="flex flex-col items-center gap-4">
<a className="bg-[#B8D032] text-black px-8 py-5 rounded-xl font-semibold text-lg md:text-xl transition-transform hover:scale-105 shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
            Real patients. Real results.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transition hover:border-white/30">
<div className="aspect-video relative">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/lXwB0J2Pi-g"></iframe>
</div>
</div>

<div className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transition hover:border-white/30">
<div className="aspect-video relative">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/9NYkakfzp4U"></iframe>
</div>
</div>

<div className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transition hover:border-white/30">
<div className="aspect-video relative">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/n2yS8-rVv2Q"></iframe>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 max-w-4xl mx-auto">
<div className="bg-white text-[#305EA2] p-10 md:p-16 rounded-3xl border-l-[12px] border-[#B8D032] shadow-2xl">
<iconify-icon className="text-4xl text-[#B8D032] mb-4" icon="solar:double-quotes-l-linear"></iconify-icon>
<blockquote className="text-2xl md:text-3xl italic font-medium leading-snug mb-8">
                "Dr. Barusco and his staff were amazing. No words can describe the care I received at his practice. He is really the best out there."
            </blockquote>
<p className="text-sm font-semibold tracking-widest uppercase">
                Andrew Hanna — Verified Patient
            </p>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-20">
            Why patients choose Dr. Barusco.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col items-center text-center">
<div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#B8D032]/10 rounded-2xl">
<iconify-icon className="text-[#B8D032] text-4xl" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">He sees you himself.</h3>
<p className="text-white/80 leading-relaxed text-sm">
                    Dr. Barusco is involved in every single consultation. No handoffs. No assistants.
                </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#B8D032]/10 rounded-2xl">
<iconify-icon className="text-[#B8D032] text-4xl" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">20+ years of experience.</h3>
<p className="text-white/80 leading-relaxed text-sm">
                    He's one of Florida's most recognized hair restoration surgeons. Board certified. Harvard-trained researcher.
                </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#B8D032]/10 rounded-2xl">
<iconify-icon className="text-[#B8D032] text-4xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">No-Shave FUE.</h3>
<p className="text-white/80 leading-relaxed text-sm">
                    A technique he pioneered. No shaving required. Only the healthiest hairs are chosen.
                </p>
</div>
</div>
</section>

<section className="bg-[#B8D032] py-24 px-6 text-center">
<div className="max-w-4xl mx-auto text-[#305EA2]">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to get your hair back?
            </h2>
<p className="text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto opacity-90">
                Book your free virtual consultation. Dr. Barusco will walk you through your options personally.
            </p>
<a className="inline-block bg-[#305EA2] text-white px-10 py-5 rounded-xl font-semibold text-lg md:text-xl transition-all hover:scale-105 shadow-xl hover:bg-[#254d85]" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-16 px-6 text-center">
<div className="text-2xl font-semibold tracking-tighter text-white uppercase mb-8">
            Tempus
        </div>
<div className="space-y-2 text-white/70 text-sm">
<p className="font-medium text-white">Tempus Hair Restoration</p>
<p>Port Orange, FL</p>
<p>(877) 877-5200</p>
<p className="pt-4">
<a className="hover:text-[#B8D032] transition-colors underline underline-offset-4" href="https://hairdoctorflorida.com">hairdoctorflorida.com</a>
</p>
</div>
</footer>

    </>
  );
}
