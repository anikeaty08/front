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
      

<header className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-6 flex justify-center">
<img alt="Beverly Hills Hair Group" className="h-12 md:h-16 w-auto" src="https://www.beverlyhillshairgroup.com/wp-content/uploads/2024/11/logo.svg"/>
</div>
</header>

<main className="max-w-5xl mx-auto px-6 pb-24 text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Beverly Hills Hair Restoration. <br/>Real Results. One Consultation.
        </h1>
<p className="mt-8 text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto font-normal leading-relaxed">
            Dr. Ben Talei is one of the only surgeons in the country to complete two separate fellowships in Facial Plastic and Reconstructive Surgery. If you are dealing with hair loss, this is where you start.
        </p>

<div className="mt-16 relative aspect-video bg-zinc-50 rounded-2xl border border-zinc-100 overflow-hidden shadow-sm group cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-zinc-900 text-5xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="absolute bottom-4 left-4 text-xs font-medium text-zinc-400 tracking-widest uppercase">
                VSL Preview Placeholder
            </div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-10 py-5 bg-zinc-900 text-white text-base font-medium rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-zinc-200" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</main>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-16">What Patients Are Saying</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/TeJahCRdOHk" title="YouTube video player"></iframe>
</div>
<div className="aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/jeLDQy72QGg" title="YouTube video player"></iframe>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-left shadow-sm">
<p className="text-zinc-600 text-sm leading-relaxed italic mb-6">"The Beverly Hills Hair Group is an absolutely stunning clinic paired with an even more incredible staff."</p>
<p className="text-zinc-900 font-medium text-xs tracking-wider uppercase">— Stephania O.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-left shadow-sm">
<p className="text-zinc-600 text-sm leading-relaxed italic mb-6">"Everyone was so professional and the office space is gorgeous."</p>
<p className="text-zinc-900 font-medium text-xs tracking-wider uppercase">— Jon A.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-left shadow-sm">
<p className="text-zinc-600 text-sm leading-relaxed italic mb-6">"Fabian and Dr. T were extremely attentive and professional."</p>
<p className="text-zinc-900 font-medium text-xs tracking-wider uppercase">— Ryan Y.</p>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-8">Why Beverly Hills Hair Group</h2>
<div className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed space-y-6">
<p>Dr. Ben Talei is a dual board-certified facial plastic and reconstructive surgeon. He completed two separate fellowships. That is rare.</p>
<p>His work has been featured in Vogue, GQ, Harper's Bazaar, and more. Results are natural. Recovery is minimal. And the consultation is free.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 text-center mb-16">What We Can Do For You</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-center flex flex-col items-center group hover:border-zinc-300 transition-colors duration-300">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">NeoGraft Hair Transplant</h3>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-center flex flex-col items-center group hover:border-zinc-300 transition-colors duration-300">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">Follicular Unit Transfer (FUT)</h3>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-center flex flex-col items-center group hover:border-zinc-300 transition-colors duration-300">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">Female Hair Restoration</h3>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-center flex flex-col items-center group hover:border-zinc-300 transition-colors duration-300">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">Non-Surgical Treatments</h3>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 text-center flex flex-col items-center group hover:border-zinc-300 transition-colors duration-300">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">PRP Hair Therapy</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-12 md:p-20 text-center text-white">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to Get Your Hair Back?</h2>
<p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-normal">
                Book your free consultation today. No pressure. No commitment. Just answers.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-white text-zinc-900 text-base font-medium rounded-full hover:bg-zinc-100 transition-all duration-300" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<footer className="py-12 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-zinc-900 font-medium tracking-tight text-sm mb-2">Beverly Hills Hair Group</p>
<p className="text-zinc-500 text-xs mb-1">9661 Brighton Way, Beverly Hills, CA 90210</p>
<p className="text-zinc-500 text-xs">(424) 343-3343</p>
<div className="mt-8 text-zinc-300 text-[10px] uppercase tracking-widest font-medium">
                © 2024 Beverly Hills Hair Group. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
