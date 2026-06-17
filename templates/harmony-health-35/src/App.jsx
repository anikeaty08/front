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
      

<header className="w-full py-6 px-6 md:px-12 border-t-4 border-forest">
<div className="max-w-7xl mx-auto flex items-center">
<div className="flex items-center gap-3">
<img alt="Harmony Health Clinic" className="h-10 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-serif text-xl tracking-tighter font-medium text-forest uppercase">Harmony Health Clinic</span>
</div>
</div>
</header>

<section className="py-16 md:py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="font-serif text-4xl md:text-6xl text-forest font-medium tracking-tight leading-tight mb-6">
                Your Labs Say Fine. <br className="hidden md:block"/>But You Don't Feel Fine.
            </h1>
<p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Harmony Health Clinic helps patients in Naples find the real reason they feel off. Lab-guided. Root-cause focused. No memberships. No fluff.
            </p>
<div className="flex flex-col items-center">
<a className="bg-forest text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/10 mb-3" href="#">
                    Click Here to Book Your Consultation
                </a>
<p className="text-xs text-stone-400">Free consultation. No obligation.</p>
</div>
</div>
</section>

<section className="pb-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="aspect-video w-full bg-stone-900 rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110">
<iconify-icon className="text-white text-4xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-stone-900 to-stone-800 opacity-50"></div>
</div>
<p className="text-center mt-6 text-stone-500 italic text-sm">
                Watch this short video from Dr. Josh and Annaelle before you book.
            </p>
</div>
</section>

<section className="bg-forest py-4 px-6">
<div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-12 text-white text-sm font-medium tracking-wide uppercase">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="solar:star-bold"></iconify-icon>
<span>5.0 Stars on Google</span>
</div>
<span className="hidden md:block opacity-30">|</span>
<span>444 Patient Reviews</span>
<span className="hidden md:block opacity-30">|</span>
<span>Naples, FL</span>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-forest font-medium tracking-tight mb-8">This is for you if...</h2>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-lg text-stone-700 leading-snug">You've been told your labs look normal but you still feel exhausted.</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-lg text-stone-700 leading-snug">You've dealt with gut issues, hormone imbalances, or thyroid problems for years.</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-lg text-stone-700 leading-snug">You've tried the usual answers and they haven't worked.</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-lg text-stone-700 leading-snug">You're ready to find out what's actually going on.</p>
</li>
</ul>
</div>
<div className="text-center">
<div className="relative inline-block">
<div className="absolute -inset-4 border border-gold/30 rounded-2xl -z-10"></div>
<img alt="Dr. Joshua Lamers" className="rounded-xl grayscale-[20%] w-full max-w-sm mx-auto shadow-xl" src="https://static.wixstatic.com/media/012d85_ba24cc2362014ec78927a03189069eb5~mv2.jpeg"/>
</div>
<p className="mt-6 font-medium text-forest">Dr. Joshua Lamers, DC, NRCME</p>
<p className="text-xs text-stone-400 uppercase tracking-widest">Harmony Health Clinic — Naples, FL</p>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 px-6 border-y border-stone-100">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-12 mb-16">
<div className="text-center">
<span className="text-6xl font-serif text-gold/20 font-semibold block mb-4">1</span>
<h3 className="text-xl font-semibold text-forest mb-2">Book a free consultation call.</h3>
<p className="text-stone-500 font-light">Choose a time that works for your schedule.</p>
</div>
<div className="text-center">
<span className="text-6xl font-serif text-gold/20 font-semibold block mb-4">2</span>
<h3 className="text-xl font-semibold text-forest mb-2">We review your symptoms.</h3>
<p className="text-stone-500 font-light">A thorough look at your history and health goals.</p>
</div>
<div className="text-center">
<span className="text-6xl font-serif text-gold/20 font-semibold block mb-4">3</span>
<h3 className="text-xl font-semibold text-forest mb-2">A personalized care plan.</h3>
<p className="text-stone-500 font-light">Lab-guided steps built specifically for you.</p>
</div>
</div>
<div className="text-center pt-8 border-t border-stone-200">
<p className="text-forest/80 font-medium italic">No subscriptions. No pushy care plans. You work directly with the provider.</p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="font-serif text-3xl text-center text-forest font-medium tracking-tight mb-16">What Patients Are Saying</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 border border-stone-100 bg-white shadow-sm rounded-xl hover:border-gold/30 transition-colors">
<div className="flex text-gold mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">"The doctors are attentive, kind and truly care about your health care needs."</p>
<p className="font-medium text-forest text-sm">— Leslie M.</p>
</div>

<div className="p-8 border border-stone-100 bg-white shadow-sm rounded-xl hover:border-gold/30 transition-colors">
<div className="flex text-gold mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">"They are thorough, compassionate, very knowledgeable, and willing to do whatever is in their power to help you."</p>
<p className="font-medium text-forest text-sm">— Julio S.</p>
</div>

<div className="p-8 border border-stone-100 bg-white shadow-sm rounded-xl hover:border-gold/30 transition-colors">
<div className="flex text-gold mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">"What sets her apart is her ability and skill to dig deeper and truly get to the root of the problem."</p>
<p className="font-medium text-forest text-sm">— Shelby M.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 md:gap-20">
<div className="flex flex-col items-center text-center">
<img alt="Dr. Joshua Lamers" className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white mb-6" src="https://static.wixstatic.com/media/012d85_ba24cc2362014ec78927a03189069eb5~mv2.jpeg"/>
<h3 className="text-xl font-semibold text-forest mb-2">Dr. Joshua Lamers, DC, NRCME</h3>
<p className="text-stone-600 leading-relaxed max-w-sm">
                        Chiropractic and men's functional medicine. Root-cause care for gut issues, hormone imbalance, chronic fatigue, and metabolic health.
                    </p>
</div>
<div className="flex flex-col items-center text-center">
<img alt="Annaelle Lamers" className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white mb-6" src="https://static.wixstatic.com/media/012d85_429d9ba09c014052a9531f6778904c9c~mv2.png"/>
<h3 className="text-xl font-semibold text-forest mb-2">Annaelle Lamers, PA-C</h3>
<p className="text-stone-600 leading-relaxed max-w-sm">
                        Women's functional medicine and family care. Hormones, thyroid, metabolism, and whole-body wellness.
                    </p>
</div>
</div>
<p className="text-center mt-16 text-stone-400 text-sm italic">Care is delivered directly by your provider. Every visit.</p>
</div>
</section>

<section className="py-24 bg-forest px-6">
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-6">Ready to Find Out What's Actually Going On?</h2>
<p className="text-lg text-emerald-50/80 mb-12 font-light">
                Book a free consultation with Harmony Health Clinic.<br/>
                We'll look at the full picture, not just the surface.
            </p>
<div className="flex flex-col items-center">
<a className="bg-white text-forest px-10 py-5 rounded-full text-lg font-semibold transition-all hover:bg-stone-100 hover:shadow-xl active:scale-95 mb-6" href="#">
                    Click Here to Book Your Consultation
                </a>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-emerald-100/60 text-xs tracking-wide">
<span>538 10th St N, Naples, FL</span>
<span>(239) 596-4801</span>
<span>Admin@FLharmony.com</span>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-stone-400 font-medium uppercase tracking-widest">
                Harmony Health Clinic  |  Naples, FL  |  flharmony.com
            </p>
</div>
</footer>

    </>
  );
}
