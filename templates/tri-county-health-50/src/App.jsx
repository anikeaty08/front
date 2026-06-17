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
      

<nav className="py-8 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-start">
<img alt="Tri-County Wellness" className="h-12 md:h-16 w-auto object-contain" src="https://i0.wp.com/tricountywellness.com/wp-content/uploads/2025/12/Transparent-Logo-With-Larger-Text.webp"/>
</nav>

<section className="py-16 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-neutral-900">
                You've Been Told Everything Is Fine. <br className="hidden md:block"/>But You Don't Feel Fine.
            </h1>
<p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Dr. Megan Malone helps women in O'Fallon get real answers, real relief, and a plan that actually works. No rushed appointments. No dismissed symptoms.
            </p>
<div className="mt-12">
<a className="inline-block bg-[#3F5340] text-white px-10 py-5 rounded-full text-base font-medium transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-[#3F5340]/20" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-16 px-6 bg-neutral-50/50">
<div className="max-w-5xl mx-auto">
<div className="aspect-video w-full rounded-3xl border-[3px] border-[#3F5340] bg-neutral-900 flex flex-col items-center justify-center text-center p-8 overflow-hidden relative group">
<div className="z-10">
<iconify-icon className="text-white text-6xl mb-4 opacity-80" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-white text-xl font-medium tracking-tight">Watch: Dr. Megan Malone — Why I Built This Clinic</p>
</div>

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3F5340] to-transparent"></div>
</div>
<p className="mt-6 text-center text-sm md:text-base text-neutral-500 font-medium italic">
                Watch this short video before you book. It will make your first visit make a lot more sense.
            </p>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">This is for you if...</h2>
<div className="space-y-10 mb-16">
<p className="text-lg md:text-xl text-neutral-700 leading-relaxed">You've been exhausted for a long time and no one has explained why.</p>
<p className="text-lg md:text-xl text-neutral-700 leading-relaxed">Your cycle feels off, your hormones feel off, or your body just feels off.</p>
<p className="text-lg md:text-xl text-neutral-700 leading-relaxed">You've had back pain, neck pain, or headaches that keep coming back.</p>
<p className="text-lg md:text-xl text-neutral-700 leading-relaxed">You've been to other providers and left feeling unheard.</p>
<p className="text-lg md:text-xl text-neutral-700 leading-relaxed">You want someone who will actually listen and build a plan around you.</p>
</div>
<a className="inline-block bg-[#3F5340] text-white px-10 py-5 rounded-full text-base font-medium transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-[#3F5340]/20" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-50">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Dr. Megan Malone" className="rounded-3xl w-full shadow-2xl grayscale-[20%]" src="https://i0.wp.com/tricountywellness.com/wp-content/uploads/2026/01/460937718_2873032412846802_5082962498190822299_nwhite_cropped.webp"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-neutral-100">
<p className="text-[#3F5340] font-semibold text-lg">Dr. Megan Malone, DC, MS</p>
<p className="text-neutral-500 text-sm">Specialist in Functional Medicine</p>
</div>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Dr. Megan Malone, DC, MS</h2>
<div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed">
<p>Dr. Malone is a chiropractor and functional medicine provider based in O'Fallon, Missouri.</p>
<p>She has a Master of Science in Nutrition and Human Performance from Logan University.</p>
<p>She specializes in women's health, hormonal balance, chronic fatigue, and whole body care.</p>
<p>She built Tri-County Wellness because she watched someone she loved fight for years to be believed by her doctors. That experience shaped everything about how this clinic runs.</p>
<p className="pt-4 font-medium italic text-[#3F5340]">Care here is not rushed. Questions are always welcome. And you never have to prove your symptoms are real.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-16">Real words from real patients</h2>
<div className="space-y-8">

<div className="bg-[#3F5340]/5 p-8 md:p-10 rounded-3xl border border-[#3F5340]/10">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-800 text-lg leading-relaxed mb-6">"I walked in here last year not even able to stand up on my own. I had excruciating pain in my lower back, a bulging disc, and sciatic nerve pain. This day now I'm standing up straight and walking with no issue. My back has never felt so great."</p>
<p className="font-medium text-[#3F5340]">— Shanise G.</p>
</div>

<div className="bg-[#3F5340]/5 p-8 md:p-10 rounded-3xl border border-[#3F5340]/10">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-800 text-lg leading-relaxed mb-6">"In just 4 short weeks we changed my 5 degree curve in my spine to a 3 degree curve. Just started on my nutrition journey and I'm only on day 2 but I feel so much better. And that's worth everything."</p>
<p className="font-medium text-[#3F5340]">— Olivia L.</p>
</div>

<div className="bg-[#3F5340]/5 p-8 md:p-10 rounded-3xl border border-[#3F5340]/10">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-800 text-lg leading-relaxed mb-6">"It's such a relief to find someone so knowledgeable and helping me without meds or surgery."</p>
<p className="font-medium text-[#3F5340]">— Toni M.</p>
</div>

<div className="bg-[#3F5340]/5 p-8 md:p-10 rounded-3xl border border-[#3F5340]/10">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-800 text-lg leading-relaxed mb-6">"I've been going to Dr. Malone for 3 years because of how much she's helped me. My back and neck are so much more aligned and functional. I am forever grateful."</p>
<p className="font-medium text-[#3F5340]">— Maggie H.</p>
</div>
</div>
<p className="mt-8 text-center text-xs text-neutral-400">
                Results vary. Individual outcomes depend on your specific health situation and care plan.
            </p>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white border-y border-neutral-100">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-20">Your first visit is simple</h2>
<div className="space-y-12">
<div className="flex items-start gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3F5340]/10 text-[#3F5340] flex items-center justify-center font-semibold text-xl">1</span>
<p className="text-lg md:text-xl text-neutral-700 pt-2">We listen to your story. No rushing.</p>
</div>
<div className="flex items-start gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3F5340]/10 text-[#3F5340] flex items-center justify-center font-semibold text-xl">2</span>
<p className="text-lg md:text-xl text-neutral-700 pt-2">We talk through what is going on so we actually understand it.</p>
</div>
<div className="flex items-start gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3F5340]/10 text-[#3F5340] flex items-center justify-center font-semibold text-xl">3</span>
<p className="text-lg md:text-xl text-neutral-700 pt-2">A gentle exam and any testing that makes sense for you.</p>
</div>
<div className="flex items-start gap-6">
<span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3F5340]/10 text-[#3F5340] flex items-center justify-center font-semibold text-xl">4</span>
<p className="text-lg md:text-xl text-neutral-700 pt-2">A clear plan built around your body and your life. No pressure.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#3F5340] py-24 md:py-32 px-6 text-center text-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Finally Feel Better?</h2>
<p className="text-lg md:text-xl text-neutral-200 mb-12 opacity-90">
                Book your consultation with Dr. Megan Malone at Tri-County Wellness Clinic in O'Fallon, MO.
            </p>
<div className="mb-12">
<a className="inline-block bg-white text-[#3F5340] px-10 py-5 rounded-full text-base font-medium transition-all hover:bg-neutral-100 active:scale-95 shadow-xl" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
<div className="space-y-2 opacity-80">
<p className="text-sm md:text-base">28 Crossroads Plaza, O'Fallon, MO 63368</p>
<p className="text-sm md:text-base font-medium underline underline-offset-4 decoration-white/30">(636) 294-7933</p>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-neutral-100 text-center">
<div className="max-w-xl mx-auto space-y-4">
<p className="text-xs md:text-sm text-neutral-500 font-medium uppercase tracking-widest">Tri-County Wellness Clinic. O'Fallon, Missouri.</p>
<p className="text-xs text-neutral-400 max-w-md mx-auto">
                This page is for informational purposes. Results vary by individual.
            </p>
</div>
</footer>

    </>
  );
}
