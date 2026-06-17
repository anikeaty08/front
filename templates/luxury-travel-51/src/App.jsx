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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
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
      

<nav className="fixed w-full z-50 top-0 px-8 py-8 mix-blend-difference text-white flex justify-between items-center transition-all duration-700">
<div className="font-sans text-xs uppercase tracking-[0.25em] font-medium cursor-pointer">Lumina</div>
<div className="font-sans text-xs uppercase tracking-[0.2em] font-medium cursor-pointer hover:text-[#C2A679] transition-colors duration-500">Enquire</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#172A24]">
<div className="absolute inset-0 z-0">
<img alt="Maldives Aerial" className="w-full h-full object-cover scale-105 animate-[pulse_30s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#172A24]/40 via-[#172A24]/20 to-[#172A24]/80"></div>
</div>
<div className="relative z-10 text-white fade-up is-visible flex flex-col items-center w-full max-w-4xl mx-auto mt-20">
<h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8 lowercase leading-none">maldives, <br className="hidden sm:block"/>reimagined.</h1>
<p className="font-sans text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto opacity-90 mb-14 leading-relaxed">Where time slows down, and the horizon fades into absolute serenity.</p>
<button className="font-sans text-xs uppercase tracking-[0.2em] px-10 py-5 border border-white/30 hover:bg-white hover:text-[#172A24] transition-all duration-700 backdrop-blur-sm">Explore</button>
</div>
</header>

<section className="py-32 md:py-48 px-6 lg:px-12 max-w-[90rem] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start fade-up">
<div className="lg:col-span-5 lg:sticky top-32">
<span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679] mb-6">The Essence</span>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">A world away, <br/>yet completely at home.</h2>
</div>
<div className="lg:col-span-7 space-y-10 font-sans text-lg md:text-xl font-light leading-loose text-[#172A24]/80 mt-2 lg:mt-0">
<p>The Maldives is frequently painted with a single, repetitive brush—honeymoons and uniform overwater bungalows. But beneath the polished surface lies a profoundly nuanced archipelago waiting to be discovered by those who seek depth alongside their comfort.</p>
<p>We approach the Indian Ocean differently. We search for the distant, isolated atolls where marine ecosystems remain untouched, the design-forward sanctuaries that dissolve into the jungle canopy, and the private island estates that offer absolute, uncompromising discretion.</p>
</div>
</div>
</section>

<section className="py-32 md:py-40 px-6 lg:px-12 bg-[#F2EFEA]">
<div className="max-w-[90rem] mx-auto">
<div className="fade-up mb-24 max-w-2xl">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Why the Maldives</h2>
<p className="font-sans text-[#172A24]/70 text-lg font-light leading-relaxed">Our refined perspective on what makes this archipelago undeniably compelling for the modern traveler.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
<div className="fade-up border-t border-[#172A24]/20 pt-10" style={{transitionDelay: '0.1s'}}>
<h3 className="font-serif text-3xl tracking-tight mb-5">Unmatched Discretion</h3>
<p className="font-sans font-light text-[#172A24]/70 leading-relaxed text-lg">In an increasingly connected world, true luxury is privacy. Here, geographic isolation is not an inconvenience, but the ultimate privilege.</p>
</div>
<div className="fade-up border-t border-[#172A24]/20 pt-10" style={{transitionDelay: '0.2s'}}>
<h3 className="font-serif text-3xl tracking-tight mb-5">Marine Immersion</h3>
<p className="font-sans font-light text-[#172A24]/70 leading-relaxed text-lg">Beyond the shoreline lies one of the planet's most vibrant ecosystems. Swim alongside manta rays in Baa Atoll or dive completely unmapped reefs.</p>
</div>
<div className="fade-up border-t border-[#172A24]/20 pt-10" style={{transitionDelay: '0.3s'}}>
<h3 className="font-serif text-3xl tracking-tight mb-5">Barefoot Elegance</h3>
<p className="font-sans font-light text-[#172A24]/70 leading-relaxed text-lg">A complete rejection of formal luxury. The finest experiences here require no shoes, focusing entirely on space, stillness, and intuitive service.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 lg:px-12 max-w-[90rem] mx-auto space-y-32 md:space-y-48">
<div className="text-center fade-up mb-16">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">Curated Experiences</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center fade-up">
<div className="lg:col-span-7 overflow-hidden group">
<img alt="Private Island Retreat" className="w-full aspect-[4/3] object-cover transition duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-5 space-y-8">
<span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679]">01</span>
<h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">Exclusive Island Buyouts</h3>
<p className="font-sans text-lg md:text-xl font-light text-[#172A24]/70 leading-relaxed">For those requiring the utmost privacy, we arrange complete exclusivity of boutique islands. Your own dedicated staff, your own unhurried schedule, your own horizon.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center fade-up">
<div className="lg:col-span-5 space-y-8 lg:order-1 order-2">
<span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679]">02</span>
<h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">Baa Atoll Biosphere</h3>
<p className="font-sans text-lg md:text-xl font-light text-[#172A24]/70 leading-relaxed">Gain access to protected marine reserves alongside private marine biologists. Witness the surreal gathering of hundreds of manta rays in Hanifaru Bay in absolute quiet.</p>
</div>
<div className="lg:col-span-7 overflow-hidden group lg:order-2 order-1">
<img alt="Manta Ray Diving" className="w-full aspect-[4/3] object-cover transition duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center fade-up">
<div className="lg:col-span-7 overflow-hidden group">
<img alt="Luxury Yacht" className="w-full aspect-[4/3] object-cover transition duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-5 space-y-8">
<span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679]">03</span>
<h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">Private Yacht Expeditions</h3>
<p className="font-sans text-lg md:text-xl font-light text-[#172A24]/70 leading-relaxed">Navigate beyond the stationary luxury of resorts. Spend a week drifting between uninhabited atolls on a fully crewed luxury vessel, waking up to a new, pristine vista daily.</p>
</div>
</div>
</section>

<section className="py-32 md:py-40 px-6 lg:px-12 border-y border-[#172A24]/10">
<div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12 fade-up">
<div className="lg:col-span-1">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight">When to go</h2>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
<div>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679] mb-4">Peak Season</h4>
<p className="font-sans font-medium text-xl mb-3">Dec — April</p>
<p className="font-sans font-light text-[#172A24]/70 text-base leading-relaxed">Flawless blue skies, minimal rain, and consistently calm waters. Ideal for pure relaxation and the highest visibility for diving.</p>
</div>
<div>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679] mb-4">Shoulder Season</h4>
<p className="font-sans font-medium text-xl mb-3">May &amp; Nov</p>
<p className="font-sans font-light text-[#172A24]/70 text-base leading-relaxed">Transitional months offering a brilliant balance of value, warm weather, and significantly fewer crowds.</p>
</div>
<div>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679] mb-4">Green Season</h4>
<p className="font-sans font-medium text-xl mb-3">June — Oct</p>
<p className="font-sans font-light text-[#172A24]/70 text-base leading-relaxed">Higher chance of short rains, but brings dramatic skies and the arrival of manta rays. A secret favorite for marine enthusiasts.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 lg:px-12 max-w-[90rem] mx-auto">
<div className="fade-up mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
<div className="max-w-2xl">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Where to Stay</h2>
<p className="font-sans text-[#172A24]/70 text-lg md:text-xl font-light leading-relaxed">We bypass the generic, focusing exclusively on properties with distinct soul, flawless intuitive service, and remarkable architecture.</p>
</div>
<a className="font-sans text-xs uppercase tracking-[0.2em] border-b border-[#172A24] pb-2 hover:text-[#C2A679] hover:border-[#C2A679] transition-colors duration-500 inline-block w-max" href="#">View the collection</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

<div className="group cursor-pointer fade-up">
<div className="overflow-hidden mb-8">
<img alt="Design Sanctuary Resort" className="w-full aspect-[4/5] lg:aspect-square object-cover transition duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1505881402582-c5bc11054f91?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679] block mb-4">Design Sanctuary</span>
<h3 className="font-serif text-3xl tracking-tight mb-4 group-hover:underline underline-offset-8 decoration-1">The Patina Estuary</h3>
<p className="font-sans font-light text-lg text-[#172A24]/70 leading-relaxed">Fari Islands — A masterclass in biophilic design, offering a sophisticated, art-led approach to island life.</p>
</div>

<div className="group cursor-pointer fade-up md:mt-32">
<div className="overflow-hidden mb-8">
<img alt="Barefoot Luxury Resort" className="w-full aspect-[4/5] lg:aspect-square object-cover transition duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679] block mb-4">Barefoot Luxury</span>
<h3 className="font-serif text-3xl tracking-tight mb-4 group-hover:underline underline-offset-8 decoration-1">Soneva Fushi</h3>
<p className="font-sans font-light text-lg text-[#172A24]/70 leading-relaxed">Baa Atoll — The original castaway experience. No news, no shoes, pure ecological mindfulness and massive secluded villas.</p>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 lg:px-12 bg-[#172A24] text-[#FAF9F7]">
<div className="max-w-[90rem] mx-auto">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-24 fade-up text-center">Perfectly suited for</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 fade-up">
<div className="text-center group">
<div className="text-[#C2A679] mb-8 flex justify-center transform transition duration-500 group-hover:-translate-y-2">
<iconify-icon height="40" icon="solar:hearts-linear" width="40"></iconify-icon>
</div>
<h4 className="font-serif text-2xl tracking-tight mb-4">Discreet Honeymooners</h4>
<p className="font-sans font-light text-base text-[#FAF9F7]/60 leading-relaxed px-4">Absolute privacy in secluded villas, completely detached from the crowds.</p>
</div>
<div className="text-center group">
<div className="text-[#C2A679] mb-8 flex justify-center transform transition duration-500 group-hover:-translate-y-2">
<iconify-icon height="40" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
</div>
<h4 className="font-serif text-2xl tracking-tight mb-4">Multi-Gen Families</h4>
<p className="font-sans font-light text-base text-[#FAF9F7]/60 leading-relaxed px-4">Massive private residences with dedicated staff and curated activities.</p>
</div>
<div className="text-center group">
<div className="text-[#C2A679] mb-8 flex justify-center transform transition duration-500 group-hover:-translate-y-2">
<iconify-icon height="40" icon="solar:waterdrops-linear" width="40"></iconify-icon>
</div>
<h4 className="font-serif text-2xl tracking-tight mb-4">Avid Divers</h4>
<p className="font-sans font-light text-base text-[#FAF9F7]/60 leading-relaxed px-4">Exclusive access to remote atolls and entirely unmapped coral reefs.</p>
</div>
<div className="text-center group">
<div className="text-[#C2A679] mb-8 flex justify-center transform transition duration-500 group-hover:-translate-y-2">
<iconify-icon height="40" icon="solar:leaf-linear" width="40"></iconify-icon>
</div>
<h4 className="font-serif text-2xl tracking-tight mb-4">Mindful Escapists</h4>
<p className="font-sans font-light text-base text-[#FAF9F7]/60 leading-relaxed px-4">World-class wellness retreats guided by leading Ayurvedic practitioners.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 lg:px-12 max-w-6xl mx-auto">
<div className="text-center fade-up mb-24">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">Sample Journeys</h2>
<p className="font-sans text-[#172A24]/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">Every itinerary is a blank canvas, but these carefully constructed concepts serve as starting points to inspire.</p>
</div>
<div className="space-y-12 fade-up">

<a className="group block border-b border-[#172A24]/20 pb-12 hover:border-[#C2A679] transition-colors duration-700" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="space-y-4">
<span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679]">10 Days</span>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight group-hover:text-[#C2A679] transition-colors duration-500">The Cultural Contrast: Sri Lanka &amp; Maldives</h3>
<p className="font-sans font-light text-lg text-[#172A24]/70 max-w-3xl leading-relaxed">Combine the vibrant tea trails, leopard safaris, and ancient temples of Ceylon with five days of absolute stillness in a remote Maldivian atoll.</p>
</div>
<div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-transparent group-hover:border-[#C2A679]/30 transition-all duration-500">
<iconify-icon className="text-[#172A24]/30 group-hover:text-[#C2A679] transition-all duration-500 group-hover:translate-x-1" height="28" icon="solar:arrow-right-linear" width="28"></iconify-icon>
</div>
</div>
</a>

<a className="group block border-b border-[#172A24]/20 pb-12 hover:border-[#C2A679] transition-colors duration-700" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="space-y-4">
<span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C2A679]">14 Days</span>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight group-hover:text-[#C2A679] transition-colors duration-500">The Deep South Safari</h3>
<p className="font-sans font-light text-lg text-[#172A24]/70 max-w-3xl leading-relaxed">A multi-atoll luxury yacht charter exploring the untouched southern reefs, culminating in a serene four-night stay at a private island sanctuary.</p>
</div>
<div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-transparent group-hover:border-[#C2A679]/30 transition-all duration-500">
<iconify-icon className="text-[#172A24]/30 group-hover:text-[#C2A679] transition-all duration-500 group-hover:translate-x-1" height="28" icon="solar:arrow-right-linear" width="28"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#F2EFEA]">
<div className="max-w-[90rem] mx-auto">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-16 fade-up">Essential Information</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 fade-up">
<div className="space-y-4">
<span className="block text-[#172A24]/40"><iconify-icon height="32" icon="solar:plane-linear" width="32"></iconify-icon></span>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#172A24]">Flight Time</h4>
<p className="font-sans font-light text-base text-[#172A24]/70 leading-relaxed">10-14h from Europe<br/>Via Middle East Hubs</p>
</div>
<div className="space-y-4">
<span className="block text-[#172A24]/40"><iconify-icon height="32" icon="solar:passport-linear" width="32"></iconify-icon></span>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#172A24]">Visas</h4>
<p className="font-sans font-light text-base text-[#172A24]/70 leading-relaxed">30-day tourist visa<br/>issued on arrival.</p>
</div>
<div className="space-y-4">
<span className="block text-[#172A24]/40"><iconify-icon height="32" icon="solar:wallet-money-linear" width="32"></iconify-icon></span>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#172A24]">Currency</h4>
<p className="font-sans font-light text-base text-[#172A24]/70 leading-relaxed">USD widely accepted.<br/>Cards preferred.</p>
</div>
<div className="space-y-4">
<span className="block text-[#172A24]/40"><iconify-icon height="32" icon="solar:map-point-linear" width="32"></iconify-icon></span>
<h4 className="font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#172A24]">Transfers</h4>
<p className="font-sans font-light text-base text-[#172A24]/70 leading-relaxed">Seaplane or private<br/>speedboat required.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 lg:px-12 max-w-[90rem] mx-auto fade-up">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
<div className="order-2 lg:order-1">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 leading-tight">Why we <br/>love it here</h2>
<ul className="space-y-8 font-sans font-light text-lg md:text-xl text-[#172A24]/80">
<li className="flex items-start gap-6">
<iconify-icon className="text-[#C2A679] mt-1 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="leading-relaxed">The physical isolation forces a mental reset like nowhere else on earth.</span>
</li>
<li className="flex items-start gap-6">
<iconify-icon className="text-[#C2A679] mt-1 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="leading-relaxed">Service levels at top-tier properties are virtually telepathic, anticipating needs before they arise.</span>
</li>
<li className="flex items-start gap-6">
<iconify-icon className="text-[#C2A679] mt-1 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="leading-relaxed">The quiet architectural innovation of modern Maldivian resorts blending into nature.</span>
</li>
</ul>
</div>
<div className="h-full order-1 lg:order-2">
<img alt="Detail Shot" className="w-full h-[500px] lg:h-[700px] object-cover" src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#E6DFD3]/50 text-center fade-up">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">Continue your journey</h2>
<p className="font-sans font-light text-lg md:text-xl text-[#172A24]/70 mb-14 leading-relaxed">We design every journey entirely around you. No templates, no compromises. Just the world, tailored to your pace.</p>
<button className="font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 bg-[#172A24] text-[#FAF9F7] hover:bg-[#C2A679] transition-colors duration-500 w-full sm:w-auto">Start Planning</button>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#172A24] text-[#FAF9F7] text-center">
<div className="max-w-2xl mx-auto fade-up">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">Not sure where to begin?</h2>
<p className="font-sans font-light text-lg md:text-xl text-[#FAF9F7]/70 mb-14 leading-relaxed">Tell us what you're considering, and we'll shape the rest. A simple conversation is all it takes to start.</p>
<button className="font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 border border-[#FAF9F7]/30 hover:bg-[#FAF9F7] hover:text-[#172A24] transition-all duration-700 mb-10 w-full sm:w-auto">Begin a conversation</button>
<p className="font-sans text-xs font-light tracking-[0.25em] text-[#FAF9F7]/40 uppercase">Discreet. Personal. No obligation.</p>
</div>
</section>

<footer className="py-12 px-6 bg-[#172A24] border-t border-white/5 text-center text-[#FAF9F7]/30 font-sans text-[10px] tracking-[0.3em] uppercase">
        © 2024 Lumina. All rights reserved.
    </footer>



    </>
  );
}
