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
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100 px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="block" href="#">
<img alt="Clinic Logo" className="h-10 md:h-12 w-auto object-contain" src="https://rmd-assets.nyc3.digitaloceanspaces.com/clinic-assets/19901b50-9710-45d5-9df5-278333aec75c.png"/>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-gold transition-colors" href="#">Cosmetic Dentistry</a>
<a className="text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-gold transition-colors" href="#">Dental Spa</a>
<a className="text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-gold transition-colors" href="#">Smile Gallery</a>
<a className="bg-zinc-950 text-white px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-all" href="#quiz">
                Take Eligibility Quiz
            </a>
</div>
<button className="lg:hidden text-zinc-950">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative py-20 lg:py-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="mb-8 flex justify-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
<iconify-icon className="text-gold" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                NYC's Premier Cosmetic Dental Spa
            </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-950 mb-6">
            The Smile You've Always Envied.
        </h1>
<p className="text-xl md:text-2xl font-medium text-zinc-800 mb-8">
            Expertly crafted by Dr. Marianna Weiner to elevate your confidence.
        </p>
<div className="max-w-2xl mx-auto mb-10 text-zinc-500 space-y-2">
<p className="text-lg font-medium text-zinc-900">Envy Smile Dental Spa — Brooklyn, NY</p>
<p className="text-base">Comprehensive Artistry. Spa-like Comfort. World-Class Results.</p>
</div>
<a className="inline-block bg-zinc-950 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-xl mb-12" href="#quiz">
            Take The Eligibility Quiz →
        </a>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
<div className="flex items-center gap-2 text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium">Boutique Patient Care</span>
</div>
<div className="flex items-center gap-2 text-zinc-600">
<iconify-icon className="text-gold" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium">Elite Cosmetic Results</span>
</div>
<div className="flex items-center gap-2 text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:magic-stick-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium">Full Smile Makeovers</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-16 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="space-y-1">
<div className="text-4xl font-semibold text-zinc-950 tracking-tight">5,000+</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Transformations</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold text-zinc-950 tracking-tight">20+</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Years of Artistry</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold text-zinc-950 tracking-tight">4.9/5</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Patient Rating</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold text-zinc-950 tracking-tight">Top Doc</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Recognized Expert</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-6">
                Clinical Excellence Meets Spa Relaxation.
            </h2>
<p className="text-lg text-zinc-500 leading-relaxed max-w-3xl mx-auto">
                Led by Dr. Marianna Weiner, our boutique practice combines advanced cosmetic dentistry with a calming, luxurious environment. We design smiles that complement your unique features.
            </p>
</div>
<div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
<table className="hidden md:table w-full text-left">
<thead>
<tr className="bg-zinc-950 text-white">
<th className="p-6 text-sm font-semibold uppercase tracking-widest">The Experience</th>
<th className="p-6 text-sm font-semibold uppercase tracking-widest bg-zinc-900 border-x border-white/10">The Clinic Standard</th>
<th className="p-6 text-sm font-semibold uppercase tracking-widest">Standard Dentistry</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="p-5 text-sm font-medium text-zinc-500">Personalized Artistry</td>
<td className="p-5 text-sm font-semibold text-zinc-950 bg-zinc-50/50 border-x border-zinc-100">Custom Smile Design by Dr. Weiner</td>
<td className="p-5 text-sm text-zinc-400">One-size-fits-all approach</td>
</tr>
<tr>
<td className="p-5 text-sm font-medium text-zinc-500">Atmosphere</td>
<td className="p-5 text-sm font-semibold text-zinc-950 bg-zinc-50/50 border-x border-zinc-100">Luxury Spa Environment</td>
<td className="p-5 text-sm text-zinc-400">Clinical &amp; Sterilized feel</td>
</tr>
<tr>
<td className="p-5 text-sm font-medium text-zinc-500">Technology</td>
<td className="p-5 text-sm font-semibold text-zinc-950 bg-zinc-50/50 border-x border-zinc-100">Pain-Free &amp; Laser Dentistry</td>
<td className="p-5 text-sm text-zinc-400">Traditional Drill focus</td>
</tr>
</tbody>
</table>
<div className="md:hidden p-6 space-y-4">
<div className="inline-block px-3 py-1 bg-gold text-white text-[10px] font-semibold uppercase tracking-widest rounded-full">Our Standard</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm font-medium"><iconify-icon className="text-gold shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Custom Smile Design by Dr. Weiner</li>
<li className="flex gap-3 text-sm font-medium"><iconify-icon className="text-gold shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Luxury Spa Environment &amp; Comfort</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Real Smiles. Real Confidence.</h2>
<p className="text-lg text-zinc-600 font-medium">Hear directly from the patients who trusted Dr. Weiner.</p>
</div>
<div className="max-w-4xl mx-auto mb-16">
<div className="aspect-video bg-zinc-100 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/mfCnc04Hdr8" title="Patient Testimonial"></iframe>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-20 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold">
<iconify-icon icon="solar:medal-ribbons-star-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<span className="text-sm font-semibold uppercase tracking-widest text-white">Award-Winning Care</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold">
<iconify-icon icon="solar:stars-minimalistic-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<span className="text-sm font-semibold uppercase tracking-widest text-white">Veneer Specialists</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold">
<iconify-icon icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<span className="text-sm font-semibold uppercase tracking-widest text-white">20+ Years Excellence</span>
</div>
</div>
</section>

<section className="bg-white py-24 px-6" id="quiz">
<div className="max-w-4xl mx-auto text-center">
<div className="flex justify-center mb-10">
<img alt="Clinic Logo" className="h-16 w-auto object-contain" src="https://rmd-assets.nyc3.digitaloceanspaces.com/clinic-assets/19901b50-9710-45d5-9df5-278333aec75c.png"/>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Are You a Candidate?</h2>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed">
            Find out if you're eligible for our signature procedures in under 60 seconds. Our quick eligibility quiz analyzes your goals to see if Dr. Weiner's artistry is the right fit.
        </p>
<button className="bg-zinc-950 text-white px-12 py-6 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-2xl mb-8">
            Start the Eligibility Quiz →
        </button>
<p className="text-zinc-400 font-medium text-sm uppercase tracking-wider">Results are instant and confidential.</p>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="space-y-6">
<img alt="Clinic Logo" className="h-12 w-auto object-contain" src="https://rmd-assets.nyc3.digitaloceanspaces.com/clinic-assets/19901b50-9710-45d5-9df5-278333aec75c.png"/>
<p className="text-sm text-zinc-400 max-w-xs">
                    New York's elite boutique dental spa, specializing in cosmetic transformations and comprehensive oral health in a luxury setting.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-950">Procedures</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-400 hover:text-gold" href="#">Porcelain Veneers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-gold" href="#">Invisalign</a></li>
<li><a className="text-sm text-zinc-400 hover:text-gold" href="#">Smile Makeovers</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-950">Practice</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-400 hover:text-gold" href="#">Dr. Marianna Weiner</a></li>
<li><a className="text-sm text-zinc-400 hover:text-gold" href="#">Spa Amenities</a></li>
<li><a className="text-sm text-zinc-400 hover:text-gold" href="#">Patient Gallery</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                © 2024 Dental Spa Excellence. All Rights Reserved.
            </p>
<div className="flex gap-6">
<iconify-icon className="text-zinc-300 hover:text-gold cursor-pointer" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-gold cursor-pointer" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
