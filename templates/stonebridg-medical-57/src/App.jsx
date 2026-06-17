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
      

<header className="pt-8 pb-12 px-6">
<div className="max-w-screen-xl mx-auto flex flex-col items-center">
<img alt="Stonebridge Medical" className="h-16 md:h-20 w-auto mb-12 rounded-lg border border-white/10 shadow-xl" src="https://i.ytimg.com/vi/bG-JcVIL_0U/maxresdefault.jpg"/>
<h1 className="text-3xl md:text-5xl font-semibold text-center tracking-tight max-w-3xl leading-tight">
                Still Dealing With Pain After Trying Everything?
            </h1>
<p className="text-base md:text-lg font-normal text-center mt-6 max-w-2xl text-white/90 leading-relaxed">
                Stonebridge Medical combines Chiropractic, Physical Therapy, and Medical care under one roof in The Colony. So you get real answers, not another band-aid.
            </p>
<div className="mt-10 flex flex-col items-center gap-4">
<a className="bg-[#21ABFF] hover:bg-[#1a8ecc] transition-all duration-300 text-white font-medium py-4 px-10 rounded-full text-lg shadow-lg hover:scale-105 active:scale-95" href="#">
                    Click Here to Book Your Consultation
                </a>
<span className="text-xs text-white/60 tracking-wide">
                    Free consultation. No pressure. No commitment.
                </span>
</div>
</div>
</header>

<section className="py-12 px-6">
<div className="max-w-3xl mx-auto">
<div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer vsl-shadow">

<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="mt-4 text-xs font-medium uppercase tracking-widest text-white/70">[VSL VIDEO GOES HERE]</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-2xl mx-auto text-center space-y-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Most clinics only treat the symptom.
            </h2>
<div className="space-y-6 text-base md:text-lg text-white/90 font-light leading-relaxed">
<p>You go in. You get adjusted. You feel better for a few days. Then it comes back.</p>
<p>That's not a solution. That's a cycle.</p>
<p>At Stonebridge Medical, we look at the full picture. Chiropractic, Physical Therapy, and Medical services all working together for you.</p>
<p className="font-medium text-white">One team. One plan. One place.</p>
</div>
</div>
</section>

<section className="py-12 border-t border-white/10 bg-white/5">
<div className="max-w-screen-xl mx-auto px-6 text-center">
<h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-2">
                241 Reviews. 100% Recommend.
            </h3>
<p className="text-[#21ABFF] text-sm md:text-base font-medium tracking-wide">
                Serving The Colony, Frisco, Prosper, and the surrounding DFW area.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-[#3d3d3d]">
<div className="max-w-screen-xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
                Real Patients. Real Results.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

<div className="space-y-6">
<div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/5">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/_A9ET-99iTo" title="Patient Testimonial"></iframe>
</div>
<p className="text-center text-sm md:text-base text-white/80 italic font-light">
                        "Come here once. You'll be a client for life."
                    </p>
</div>

<div className="space-y-6">
<div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/5">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/I2h2eXI268Y" title="Patient Testimonial"></iframe>
</div>
<p className="text-center text-sm md:text-base text-white/80 italic font-light">
                        Weight Loss and Healing from Sciatica — A Stonebridge Story
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-screen-xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
                What Patients Are Saying
            </h2>
<div className="max-w-2xl mx-auto space-y-6">

<div className="bg-white p-8 rounded-2xl shadow-xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                        "I have been to multiple chiropractors and everything just felt like a band aid. Here, I finally am able to find solutions that work. Everyone here genuinely cares about you."
                    </p>
<span className="text-slate-500 font-medium text-sm">— Ashley G.</span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                        "A visit to Dr. Oteo is like catching up with an old friend who just happens to make you feel like a million bucks. Stonebridge has created a trust-filled haven where real relationships are built alongside realigned spines."
                    </p>
<span className="text-slate-500 font-medium text-sm">— Preston W.</span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                        "I have felt heard from day one and have received the highest quality care. I would recommend them to everyone."
                    </p>
<span className="text-slate-500 font-medium text-sm">— Chelsei P.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/5 border-y border-white/5">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12">
                Here's What Happens When You Book
            </h2>
<div className="space-y-8 text-base md:text-lg text-white/90 leading-relaxed font-light">
<p>You get a free consultation with the Stonebridge team.</p>
<p>They'll listen. Ask real questions. Look at the full picture.</p>
<p>Then they'll build a plan around you. Not a generic protocol. <span className="font-medium text-white underline decoration-[#21ABFF] underline-offset-4">Your plan.</span></p>
<p>Chiropractic, Physical Therapy, Medical. Whatever you need, it's all here.</p>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                Ready to Feel Like Yourself Again?
            </h2>
<p className="text-lg md:text-xl text-white/80 font-light mb-12">
                Book your free consultation with the Stonebridge Medical team today.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="bg-[#21ABFF] hover:bg-[#1a8ecc] transition-all duration-300 text-white font-medium py-5 px-12 rounded-full text-xl shadow-2xl hover:scale-105 active:scale-95 group flex items-center gap-3" href="#">
                    Click Here to Book Your Consultation
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<span className="text-sm text-white/50 tracking-wide flex items-center gap-2">
<iconify-icon className="text-[#21ABFF]" icon="solar:alarm-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Spots are limited. Same-week appointments available.
                </span>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/10">
<div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
<img alt="Stonebridge Medical" className="h-12 w-auto mb-8 rounded shadow-lg opacity-80 hover:opacity-100 transition-opacity" src="https://i.ytimg.com/vi/bG-JcVIL_0U/maxresdefault.jpg"/>
<div className="space-y-2 text-xs md:text-sm text-white/60 font-light tracking-wide">
<p>7204 Main St Suite 100, The Colony, TX 75056</p>
<p>Phone: (469) 522-3912</p>
<p className="pt-8 opacity-40">© 2024 Stonebridge Medical. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
