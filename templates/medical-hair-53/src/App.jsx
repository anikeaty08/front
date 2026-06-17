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
      

<header className="py-12 flex justify-center">
<img alt="Shapiro Medical Group" className="h-10 md:h-12 w-auto object-contain" src="https://shapiromedical.com/wp-content/uploads/2024/10/Shapiro_logo_white.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 text-center py-16 md:py-24">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            The Surgeon Other Surgeons Trust With Their Own Hair.
        </h1>
<p className="text-bronze text-base md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            35 years. 100+ countries. One patient per day. Now accepting new consultations in Minneapolis.
        </p>
<div className="flex justify-center">
<a className="bg-bronze hover:bg-opacity-90 text-black text-sm md:text-base font-semibold px-8 py-4 rounded-full transition-all flex items-center gap-2 tracking-wide uppercase" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="aspect-video w-full bg-zinc-900 border border-bronze/30 rounded-sm flex items-center justify-center relative overflow-hidden group">
<div className="z-10 text-center">
<iconify-icon className="text-bronze text-6xl mb-4 opacity-80" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-zinc-400 text-sm tracking-widest uppercase">[Video goes here]</p>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
</section>

<section className="bg-zinc-950 border-y border-white/5 py-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
<div className="flex items-center gap-3">
<iconify-icon className="text-bronze text-xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs md:text-sm font-medium tracking-wide uppercase opacity-90">Board-Certified Since 1990</span>
</div>
<div className="hidden md:block h-4 w-[1px] bg-bronze/30"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-bronze text-xl" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs md:text-sm font-medium tracking-wide uppercase opacity-90">Co-Author of the Hair Transplant Bible</span>
</div>
<div className="hidden md:block h-4 w-[1px] bg-bronze/30"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-bronze text-xl" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs md:text-sm font-medium tracking-wide uppercase opacity-90">Golden Follicle Award Winner, ISHRS</span>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24 text-center">
<div className="space-y-8 text-base md:text-lg leading-relaxed opacity-90">
<p>Hair loss is personal.</p>
<p>You want real results from someone who actually knows what they're doing.</p>
<p className="text-xl md:text-2xl font-medium text-white tracking-tight">Dr. Ron Shapiro wrote the textbook other surgeons use to learn this procedure.</p>
<p>Physicians fly in from around the world to have him operate on them.</p>
<p>One patient per day. Full attention. No shortcuts.</p>
<p className="text-bronze font-medium">If you are ready to do something about your hair loss, this is the place.</p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">Real Results. Real Patients.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="aspect-video border border-bronze/20 rounded-sm overflow-hidden bg-zinc-900">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/kbvO5oX_OK0"></iframe>
</div>
<div className="aspect-video border border-bronze/20 rounded-sm overflow-hidden bg-zinc-900">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/pMni3Rxoyag"></iframe>
</div>
<div className="aspect-video border border-bronze/20 rounded-sm overflow-hidden bg-zinc-900">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/A3OXO3rjZ1k"></iframe>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-zinc-900/40 p-10 border border-bronze/20 rounded-sm">
<iconify-icon className="text-bronze/40 text-3xl mb-4" icon="solar:quote-bold-linear" strokeWidth="1.5"></iconify-icon>
<p className="italic text-base md:text-lg mb-6 leading-relaxed">
                    "I would've paid double for the experience I got, in addition to stellar results. Dr. Joe is a genius, amazing bedside manner. I fell asleep during the procedure."
                </p>
<p className="text-xs font-semibold tracking-widest uppercase text-bronze">— Mehdi R., Verified Patient</p>
</div>
<div className="bg-zinc-900/40 p-10 border border-bronze/20 rounded-sm">
<iconify-icon className="text-bronze/40 text-3xl mb-4" icon="solar:quote-bold-linear" strokeWidth="1.5"></iconify-icon>
<p className="italic text-base md:text-lg mb-6 leading-relaxed">
                    "Everyone at Shapiro Medical Group is amazing. The staff is friendly and informative, procedures are clearly explained, and questions are always encouraged."
                </p>
<p className="text-xs font-semibold tracking-widest uppercase text-bronze">— Malia L., Verified Patient</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
<div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Dr. Ron Shapiro" className="w-full h-full object-cover rounded-sm border border-bronze/30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2t-YxBfd_zUIrAgwISOuO-tsNIpoxqbHmqA&amp;s"/>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-2xl font-semibold tracking-tight mb-1">Dr. Ron Shapiro, MD</h3>
<p className="text-bronze text-sm font-medium mb-6 uppercase tracking-widest">Medical Director, Shapiro Medical Group</p>
<div className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base">
<p>Dr. Shapiro co-authored the leading medical textbook on hair transplantation. He has lectured in over 50 countries.</p>
<p>Other hair transplant surgeons come to him, not just to learn, but to have their own procedures done.</p>
<p className="text-white font-medium italic">He sees one patient per day. That patient is you.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-24 px-6 text-center border-t border-white/5">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to do something about it?</h2>
<p className="text-bronze text-lg mb-10">Book your free consultation today. No pressure. Just answers.</p>
<div className="flex justify-center">
<a className="bg-bronze hover:bg-opacity-90 text-black text-sm md:text-base font-semibold px-10 py-5 rounded-full transition-all flex items-center gap-2 tracking-wide uppercase shadow-lg shadow-bronze/10" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-12 border-t border-white/5 px-6">
<div className="max-w-6xl mx-auto text-center space-y-4">
<p className="text-[10px] md:text-xs text-zinc-500 tracking-wider uppercase">
                Shapiro Medical Group | 5270 West 84th St., Suite 500, Bloomington, MN 55437 | 952-926-2933 | info@shapiromedical.com
            </p>
<div className="flex justify-center gap-6 pt-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-zinc-700 text-xl" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-zinc-700 text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
