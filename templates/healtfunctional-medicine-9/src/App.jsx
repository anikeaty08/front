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
      

<nav className="sticky top-0 z-50 w-full border-b border-stone-100 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
<div className="flex items-center">
<img alt="Logo" className="h-12 w-auto object-contain" src="https://images.squarespace-cdn.com/content/v1/60998771a2196c1effe99d51/1620675084568-TFTFBSPM3WNINLXO8QDE/download-2.png?format=1500w"/>
</div>
<div className="hidden sm:flex items-center gap-8">
<a className="text-sm font-medium text-black transition-colors hover:text-sky-600 flex items-center gap-2" href="tel:5618427422">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    (561) 842-7422
                </a>
<a className="rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-sky-600" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="relative px-6 pt-24 pb-20 sm:pt-32 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                Tired Of Doctors Telling You Everything Is Fine When You Know It's Not?
            </h1>
<p className="mt-8 text-lg leading-relaxed text-stone-600 sm:text-xl">
                Take this short quiz to find out if your hormones, stress levels, or hidden toxins could be the reason you still feel exhausted, anxious, or just... off.
            </p>
<div className="mt-12 flex flex-col items-center justify-center gap-6">
<a className="inline-flex h-14 items-center justify-center rounded-full bg-black px-12 text-lg font-medium text-white transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-stone-200" href="#">
                    Take The Free Quiz
                </a>
<div className="flex items-center gap-2 text-sm font-medium text-stone-400">
<iconify-icon className="text-sky-500" icon="solar:map-point-linear"></iconify-icon>
                    Palm Beach Gardens, FL
                </div>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-6 py-24">
<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
<div className="group rounded-3xl border border-stone-100 bg-stone-50/30 p-8 transition-all hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-sm ring-1 ring-stone-100">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-black mb-3">Chronic Fatigue</h3>
<p className="text-sm leading-relaxed text-stone-600">
                    You sleep 8 or 10 hours and still wake up drained. Your doctor says your blood work is perfect, but you don't feel perfect.
                </p>
</div>
<div className="group rounded-3xl border border-stone-100 bg-stone-50/30 p-8 transition-all hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-sm ring-1 ring-stone-100">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-black mb-3">Sudden Anxiety</h3>
<p className="text-sm leading-relaxed text-stone-600">
                    The anxiety came out of nowhere. GP's offer prescriptions, but nobody looks deeper into the root cause.
                </p>
</div>
<div className="group rounded-3xl border border-stone-100 bg-stone-50/30 p-8 transition-all hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-sm ring-1 ring-stone-100">
<iconify-icon icon="solar:battery-charge-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-black mb-3">Loss of Drive</h3>
<p className="text-sm leading-relaxed text-stone-600">
                    You used to have energy, focus, and drive. Now you're running on fumes and caffeine, wondering what happened.
                </p>
</div>
</div>
</section>

<section className="bg-sky-50/50 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">Real Patients. Real Results.</h2>
<p className="mt-4 text-stone-500 font-medium italic">Function Higher — Physically, Mentally, Sexually.®</p>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="flex flex-col bg-white p-8 rounded-3xl border border-sky-100 shadow-sm">
<div className="mb-6 flex gap-1 text-sky-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wider">I needed to be pro-active.</p>
<div className="flex-grow space-y-4 text-sm leading-relaxed text-stone-600">
<p>“I came to see Dr. Bieley after suffering from menopausal-related anxiety and general sleeplessness for 7 years. During those 7 years, I sought out various specialists... I was given various RX’s and ended up on clonazepam to ease the anxiety. That was the best they could do.”</p>
<p>“After all of the testing came back... It appeared that one of my main problems was cortisol-related. I realized that most medical doctors are not trained in cortisol-related symptoms unless severe.”</p>
<p className="font-medium text-black">“In approximately 3 months, I was sleeping through the night and my anxiety had all but disappeared!”</p>
</div>
<div className="mt-8 pt-6 border-t border-stone-100">
<p className="text-sm font-semibold text-black">— Lori Anderson</p>
</div>
</div>

<div className="flex flex-col bg-white p-8 rounded-3xl border border-sky-100 shadow-sm">
<div className="mb-6 flex gap-1 text-sky-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wider">Enthusiasm for living back.</p>
<div className="flex-grow space-y-4 text-sm leading-relaxed text-stone-600">
<p>“I have been seeing Dr. Bieley for 6 months now and I feel alive for the first time in 2 years. I was having problems with severe fatigue and could not get help from my GP who did all the usual tests... They all said I was fine and my blood work was perfect, I just didn’t feel fine!”</p>
<p>“I am a firm believer in Functional doctors and their way of treating the whole body and fixing the problem rather than just getting rid of the symptoms. Dr. Bieley is a very caring Doctor.”</p>
</div>
<div className="mt-8 pt-6 border-t border-stone-100">
<p className="text-sm font-semibold text-black">— Kitty Perry</p>
</div>
</div>

<div className="flex flex-col bg-white p-8 rounded-3xl border border-sky-100 shadow-sm">
<div className="mb-6 flex gap-1 text-sky-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wider">Incredibly tenacious and sincere.</p>
<div className="flex-grow space-y-4 text-sm leading-relaxed text-stone-600">
<p>“Dr. Bieley is an unbelievably caring and attentive physician. It was Dr. Bieley’s testing that finally provided answers to the question of why I felt so sick. The tests showed that my heavy metal levels were three times that of a normal person.”</p>
<p>“It’s no stretch to say that Dr. Bieley saved my life. For the first time in a long time my symptoms of fibromyalgia and chronic fatigue are at bay. I don’t know when I’ve felt better.”</p>
<p className="font-medium text-black italic">“He practices amazing, customized medicine.”</p>
</div>
<div className="mt-8 pt-6 border-t border-stone-100">
<p className="text-sm font-semibold text-black">— Catherine Peters</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 py-24 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl mb-12">Expertise You Can Trust</h2>
<div className="space-y-8 text-lg leading-relaxed text-stone-600">
<p>Dr. Harlan Bieley spends <span className="text-black font-semibold">60 to 90 minutes</span> on your first visit. He listens when others rush.</p>
<p>He holds an MD from the University of Miami and graduated first in his class with a Master of Science in Metabolic and Nutritional Medicine from USF.</p>
<p>With <span className="text-black font-semibold">16+ years</span> as an Advanced Fellow in Anti-Aging and Regenerative Medicine, he holds a US Patent for a nutritional health invention.</p>
</div>
</section>

<section className="bg-black py-24 text-white">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What We Actually Test</h2>
<p className="mt-4 text-sky-400 font-medium">Beyond the basic blood panel</p>
</div>
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="flex flex-col items-center gap-3 text-center group">
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-rounded-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">Hormones</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:atom-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">Metals</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:leaf-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">Mycotoxins</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bill-list-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">Gut Health</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group">
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:dna-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">Genetics</span>
</div>
</div>
</div>
</section>

<section className="bg-sky-500 py-24 text-center">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready To Find Out What's Really Going On?</h2>
<p className="mt-6 text-lg text-sky-50 font-medium">Take the free quiz. It takes 60 seconds. No commitment.</p>
<div className="mt-10">
<a className="inline-flex h-14 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-sky-600 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl" href="#">
                    Take The Free Quiz
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-16">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col items-center justify-between gap-10 md:flex-row">
<div className="space-y-4 text-center md:text-left">
<img alt="Logo" className="h-10 w-auto object-contain mx-auto md:mx-0" src="https://images.squarespace-cdn.com/content/v1/60998771a2196c1effe99d51/1620675084568-TFTFBSPM3WNINLXO8QDE/download-2.png?format=1500w"/>
<p className="text-xs text-stone-500 max-w-xs">8295 N. Military Trail, Suite K, Palm Beach Gardens, FL 33410</p>
</div>
<div className="flex gap-8">
<div className="text-center md:text-right">
<p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Contact</p>
<p className="text-sm font-medium text-black">(561) 842-7422</p>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-50 flex flex-col items-center justify-between gap-4 md:flex-row">
<p className="text-xs text-stone-400">© 2024 Healthy Living &amp; Longevity Medical Center.</p>
<p className="text-[10px] text-stone-300 uppercase tracking-widest">We are not a substitute for your primary care doctor.</p>
</div>
</div>
</footer>

    </>
  );
}
