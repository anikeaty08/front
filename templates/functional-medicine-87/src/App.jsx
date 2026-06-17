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
      

<header className="w-full py-8 flex justify-center">
<img alt="Total Health Center" className="h-12 md:h-16 w-auto object-contain" src="https://totalhealthcentervb.com/wp-content/uploads/2017/02/TotalHealth_new_logo.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 py-12 text-center">
<div className="inline-block h-1 w-12 bg-sky-400 mb-6 rounded-full"></div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Your Doctor Says You're Fine. <br className="hidden md:block"/>
<span className="text-sky-500">But You Don't Feel Fine.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Dr. Mark Scott has spent nearly 30 years finding the real reason people feel tired, foggy, and stuck. Watch the short video below. Then book your free consultation with Total Health Center in Virginia Beach.
        </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full transition-all shadow-lg shadow-sky-200 hover:shadow-sky-300 transform hover:-translate-y-0.5 active:translate-y-0" href="#booking">
            Click Here to Book Your Free Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-4 py-8">
<div className="aspect-video w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative flex items-center justify-center">

<div className="text-center group cursor-pointer">
<div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center text-white mb-4 shadow-xl group-hover:scale-110 transition-transform mx-auto">
<iconify-icon height="32" icon="solar:play-bold" width="32"></iconify-icon>
</div>
<p className="text-slate-400 font-medium text-sm">VSL Video Placeholder</p>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-6 my-12">
<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon className="text-sky-500" icon="solar:history-linear" width="20"></iconify-icon>
<span className="text-xs md:text-sm font-medium">Nearly 30 Years in Practice</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon className="text-sky-500" icon="solar:star-linear" width="20"></iconify-icon>
<span className="text-xs md:text-sm font-medium">4.6 Stars on Google — 134 Reviews</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon className="text-sky-500" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-xs md:text-sm font-medium uppercase tracking-wider">Certified Practitioner</span>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20 text-center">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-500 mb-6 block">Is This You?</span>
<div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
<p>
                You've been to your doctor. Your labs come back normal. But you still feel exhausted. Still gaining weight. Still dealing with brain fog, thyroid issues, or gut problems that won't go away.
            </p>
<p className="font-semibold text-slate-900">
                You're not imagining it.
            </p>
<p>
                At Total Health Center, Dr. Scott looks deeper. He finds what standard testing misses. Then he builds a plan around you.
            </p>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-100">
<h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-500 text-center mb-12">Conditions We Help With</h2>
<div className="flex flex-col items-center space-y-4">
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 border-b border-slate-50 w-full text-center">Thyroid and Hashimoto's</div>
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 border-b border-slate-50 w-full text-center">Fatigue and Brain Fog</div>
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 border-b border-slate-50 w-full text-center">Stubborn Weight Gain and Insulin Resistance</div>
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 border-b border-slate-50 w-full text-center">Gut Issues and IBS</div>
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 border-b border-slate-50 w-full text-center">Hormonal Imbalances</div>
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 border-b border-slate-50 w-full text-center">Fibromyalgia and Chronic Pain</div>
<div className="text-xl md:text-2xl font-normal text-slate-800 py-2 w-full text-center">Anxiety and Mood</div>
</div>
</section>

<section className="bg-slate-50/50 py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/H7ccbr-DnuE"></iframe>
</div>
<div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/nhmtkOwEzYI"></iframe>
</div>
</div>
<p className="text-center text-slate-500 text-sm italic">These are real patients from Total Health Center sharing their own stories.</p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-white border border-slate-100 shadow-sm rounded-2xl flex flex-col justify-between">
<p className="text-slate-600 mb-6 leading-relaxed">"I've lost 30 pounds within 3 months, my stomach no longer aches, my migraines are nearly gone completely, and I feel like I'm ten years younger."</p>
<div className="font-medium text-xs uppercase tracking-widest text-slate-400">— Kristy S., Virginia Beach</div>
</div>

<div className="p-8 bg-white border border-slate-100 shadow-sm rounded-2xl flex flex-col justify-between">
<p className="text-slate-600 mb-6 leading-relaxed">"He doesn't just treat symptoms. He truly strives for Total Health."</p>
<div className="font-medium text-xs uppercase tracking-widest text-slate-400">— April H.</div>
</div>

<div className="p-8 bg-white border border-slate-100 shadow-sm rounded-2xl flex flex-col justify-between">
<p className="text-slate-600 mb-6 leading-relaxed">"I've seen dramatic improvements in my chronic fatigue syndrome. Worth every penny."</p>
<div className="font-medium text-xs uppercase tracking-widest text-slate-400">— Elisabeth F.</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-100">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<div className="relative">
<div className="absolute -inset-4 border border-sky-100 rounded-2xl -z-10"></div>
<img alt="Dr. Mark Scott" className="w-full rounded-xl shadow-xl" src="https://totalhealthcentervb.com/wp-content/uploads/2025/01/Meet-Dr.-Scott-Total-Health-Center-Founder.webp"/>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold rounded-full uppercase tracking-wider">Meet the Founder</div>
<h3 className="text-3xl font-semibold tracking-tight">Dr. Mark Scott has been in practice since 1996.</h3>
<div className="space-y-4 text-slate-600 text-lg leading-relaxed font-normal">
<p>He is a Certified Nutrition Specialist, a Certified Functional Medicine Practitioner, and Board Certified in Integrative Medicine.</p>
<p>He has helped thousands of patients find answers they couldn't get anywhere else.</p>
<p className="font-medium text-slate-900 italic">"His approach is simple. Find the root cause. Fix it. Keep you healthy long term."</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center" id="booking">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Ready to Find Out What's Really Going On?
        </h2>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12">
            Book your free consultation with Dr. Scott. It takes two minutes. And it could change everything.
        </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-sky-500 hover:bg-sky-600 text-white text-lg font-medium rounded-full transition-all shadow-xl shadow-sky-200 hover:shadow-sky-400 mb-12" href="javascript:void(0)">
            Click Here to Book Your Free Consultation
        </a>
<footer className="mt-20 pt-12 border-t border-slate-100">
<div className="text-xs font-medium text-slate-400 space-y-2 uppercase tracking-widest">
<p>Total Health Center</p>
<p>1801 Pleasure House Rd, Suite 105, Virginia Beach, VA 23455</p>
<p className="text-sky-500">(757) 363-8571</p>
</div>
</footer>
</section>

    </>
  );
}
