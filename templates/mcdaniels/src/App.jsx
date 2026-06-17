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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: unobserve after animating to keep it static once loaded
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            // Select all elements with animation classes
            const animatedElements = document.querySelectorAll('.reveal, .scale-in');
            animatedElements.forEach(el => observer.observe(el));
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
      

<div className="bg-neutral-950 text-neutral-300 py-2 border-b border-white/10 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium tracking-wide">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400 text-sm" icon="solar:shield-check-linear"></iconify-icon>
<span>Fast, Reliable Junk Removal in Perris &amp; the Inland Empire</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="mailto:info@mcdanielsjunkremoval.com">
<iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon>
                    Request Free Quote
                </a>
<a className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1.5 font-semibold" href="tel:9512839641">
<iconify-icon className="text-sm" icon="solar:phone-calling-linear"></iconify-icon>
                    (951) 283-9641
                </a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex flex-col" href="#">
<span className="text-lg font-semibold tracking-tighter text-white leading-none">MCDANIEL'S</span>
<span className="text-xs font-medium tracking-widest text-yellow-400 leading-none mt-1 uppercase">Junk Removal</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#service-area">Area</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="text-white text-sm font-medium hover:text-yellow-400 transition-colors hidden xl:block" href="tel:9512839641">(951) 283-9641</a>
<a className="bg-yellow-400 text-neutral-950 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(250,204,21,0.2)]" href="#contact">
                    Get a Free Quote
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative bg-neutral-950 pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden flex items-center min-h-[90vh]">

<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="glow-accent top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4"></div>
<div className="glow-accent bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">
<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>5.0 Rated Local Service</span>
</div>
<h1 className="reveal reveal-delay-100 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.05]">
                    Junk Removal Done Right.<br/>
<span className="text-neutral-400">Fast, Fair &amp; Local.</span>
</h1>
<p className="reveal reveal-delay-200 text-base md:text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-medium">
                    We do the heavy lifting. Dependable, stress-free junk hauling for homes and businesses in Perris and the Inland Empire. Point to what needs to go, and consider it gone.
                </p>
<div className="reveal reveal-delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-400 text-neutral-950 text-base font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(250,204,21,0.25)]" href="tel:9512839641">
<iconify-icon className="text-lg" icon="solar:phone-bold"></iconify-icon>
                        Call (951) 283-9641
                    </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 text-base font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm" href="#contact">
                        Get a Free Quote
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<p className="reveal reveal-delay-400 text-xs font-medium text-neutral-500 mt-6 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:clock-circle-linear"></iconify-icon>
                    Need junk gone today? Call now for fast availability.
                </p>
</div>

<div className="lg:col-span-5 hidden lg:block relative reveal reveal-delay-200">
<div className="relative w-full aspect-[4/5] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl shadow-black/50 group">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-950 z-0"></div>

<div className="absolute top-10 -left-6 bg-neutral-950 border border-white/10 rounded-2xl p-4 shadow-xl z-20 transform -rotate-3 transition-transform duration-700 group-hover:rotate-0 flex items-center gap-3 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 font-medium">Clutter Removed</p>
<p className="text-sm text-white font-semibold">100% Cleared</p>
</div>
</div>

<div className="flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38f87980-1302-4f45-b446-e5b61fed223f_1600w.jpg)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
</div>
</div>
</div>
</div>
</section>

<div className="bg-neutral-950 border-y border-white/5 py-5 overflow-hidden relative z-20 -mt-1">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-4 text-xs font-semibold text-neutral-400 tracking-wide uppercase">
<div className="flex items-center gap-2 reveal"><iconify-icon className="text-yellow-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Locally Owned</div>
<div className="flex items-center gap-2 reveal reveal-delay-100"><iconify-icon className="text-yellow-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Fast Scheduling</div>
<div className="flex items-center gap-2 reveal reveal-delay-200"><iconify-icon className="text-yellow-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Fair Pricing</div>
<div className="flex items-center gap-2 reveal reveal-delay-300"><iconify-icon className="text-yellow-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Fully Equipped</div>
<div className="flex items-center gap-2 reveal reveal-delay-400 hidden sm:flex"><iconify-icon className="text-yellow-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Eco-Friendly Disposal</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative scale-in">

<div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden relative group">
<img alt="Junk Removal Professional carrying a box" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1587040273238-9fa47fb0b6e8?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="flex pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<img alt="Team member" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de1dcecc-a645-4bcc-a5e5-e6ea494c07f3_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
<div className="text-white relative z-20">
<p className="font-semibold text-lg tracking-tight">Hardworking &amp; Respectful</p>
<p className="text-sm text-neutral-300 font-medium">Treating your property like our own.</p>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-2xl -z-10 opacity-20"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600 mb-6 reveal">
                    About Our Team
                </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-950 mb-6 leading-tight reveal reveal-delay-100">
                    Local, Dependable, and Ready to Work.
                </h2>
<div className="space-y-4 text-base text-neutral-600 font-medium leading-relaxed reveal reveal-delay-200">
<p className="">
                        At McDaniel’s Junk Removal LLC, we believe that getting rid of unwanted items shouldn't be a hassle. We are a locally-owned business proud to serve Perris and the surrounding Inland Empire communities.
                    </p>
<p>
                        Whether you are a homeowner reclaiming your garage, a landlord handling a cleanout, or a contractor clearing debris, our team shows up on time, works efficiently, and handles all the heavy lifting. We pride ourselves on straightforward communication, honest pricing, and leaving your space clean and ready for what's next.
                    </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 reveal reveal-delay-300">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-neutral-950 text-yellow-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-950">On-Time Arrival</h4>
<p className="text-xs text-neutral-500 mt-0.5">We respect your schedule.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-neutral-950 text-yellow-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-950">Honest Pricing</h4>
<p className="text-xs text-neutral-500 mt-0.5">No hidden fees, ever.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50 border-t border-neutral-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 mb-6 reveal">
                    Our Services
                </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-950 mb-6 leading-tight reveal reveal-delay-100">
                    What We Remove.
                </h2>
<p className="text-base text-neutral-600 font-medium reveal reveal-delay-200">
                    From single bulky items to entire property cleanouts, we handle the dirty work so you don't have to.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-950 mb-3">Furniture Removal</h3>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">Old couches, mattresses, tables, and heavy dressers removed safely without damaging your walls.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal reveal-delay-100">
<div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:washing-machine-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-950 mb-3">Appliance Removal</h3>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">Refrigerators, washers, dryers, and old TVs hauled away and disposed of properly.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal reveal-delay-200">
<div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-950 mb-3">Property Cleanouts</h3>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">Full service clearing for garages, basements, storage units, evictions, and estate cleanouts.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-950 mb-3">Yard Debris Removal</h3>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">Branches, fencing, old landscaping materials, and general yard waste cleared fast.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal reveal-delay-100">
<div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:hammer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-950 mb-3">Construction Debris</h3>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">Wood, drywall, tile, and remodel debris picked up from your residential or commercial site.</p>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal reveal-delay-200">
<div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-950 mb-3">Commercial Junk</h3>
<p className="text-sm text-neutral-600 leading-relaxed font-medium">Office furniture, electronics, cardboard, and general clutter removed for local businesses.</p>
</div>
</div>

<div className="mt-16 text-center reveal">
<p className="text-sm font-semibold text-neutral-950 mb-4 tracking-tight">Common Items We Haul:</p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Old Furniture</span>
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Mattresses</span>
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Appliances</span>
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Boxes &amp; Clutter</span>
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Yard Waste</span>
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Hot Tubs</span>
<span className="px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600">Scrap Metal</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 text-white relative overflow-hidden" id="process">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">How It Works.</h2>
<p className="text-neutral-400 font-medium max-w-xl mx-auto">Three simple steps to a clutter-free space.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="text-center relative reveal">
<div className="w-24 h-24 mx-auto bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative z-10">
<span className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 text-neutral-950 text-xs font-semibold rounded-full flex items-center justify-center -mt-1 -mr-1">1</span>
<iconify-icon className="text-3xl text-white" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Reach Out</h3>
<p className="text-sm text-neutral-400 font-medium">Call (951) 283-9641 or request a free quote online. Tell us what needs to go.</p>
</div>
<div className="text-center relative reveal reveal-delay-100">
<div className="w-24 h-24 mx-auto bg-neutral-900 border border-yellow-400/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(250,204,21,0.1)] relative z-10">
<span className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 text-neutral-950 text-xs font-semibold rounded-full flex items-center justify-center -mt-1 -mr-1">2</span>
<iconify-icon className="text-3xl text-yellow-400" icon="solar:calculator-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Get an Estimate</h3>
<p className="text-sm text-neutral-400 font-medium">We provide a transparent, upfront price based on volume. No surprises.</p>
</div>
<div className="text-center relative reveal reveal-delay-200">
<div className="w-24 h-24 mx-auto bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative z-10">
<span className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 text-neutral-950 text-xs font-semibold rounded-full flex items-center justify-center -mt-1 -mr-1">3</span>
<iconify-icon className="text-3xl text-white" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">We Haul It Away</h3>
<p className="text-sm text-neutral-400 font-medium">Our team arrives on time, does all the lifting, and sweeps up when done.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 mb-4">Trusted Locally.</h2>
<div className="flex items-center gap-3">
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-950">5.0 Star Rating</span>
</div>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-yellow-500 transition-colors" href="#contact">
                    Leave a Review <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 reveal">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 font-medium leading-relaxed mb-6">"Fast response and very professional. They came out the same day to clear out a pile of old furniture and boxes from my garage. Pricing was exactly what they quoted. Highly recommend McDaniel's!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-semibold text-sm">S</div>
<div>
<p className="text-sm font-semibold text-neutral-950">Sarah M.</p>
<p className="text-xs text-neutral-500">Perris, CA</p>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 reveal reveal-delay-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 font-medium leading-relaxed mb-6">"These guys work hard. We had a ton of construction debris after a remodel. They showed up on time, loaded everything quickly, and even swept the driveway afterward. Great local business."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-semibold text-sm">D</div>
<div>
<p className="text-sm font-semibold text-neutral-950">David R.</p>
<p className="text-xs text-neutral-500">Moreno Valley, CA</p>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 reveal reveal-delay-200">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 font-medium leading-relaxed mb-6">"Super easy communication. I texted them a picture of an old broken fridge and some yard waste. They gave me a fair quote immediately and took care of it the next morning. Zero hassle."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-semibold text-sm">J</div>
<div>
<p className="text-sm font-semibold text-neutral-950">Jason T.</p>
<p className="text-xs text-neutral-500">Riverside, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="service-area">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 mb-6">Serving the Inland Empire.</h2>
<p className="text-base text-neutral-600 font-medium mb-8 leading-relaxed">
                    Based in Perris, CA, McDaniel's Junk Removal LLC provides fast, dependable hauling services to homes and businesses throughout the surrounding communities.
                </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:map-point-linear"></iconify-icon> Perris
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:map-point-linear"></iconify-icon> Riverside
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:map-point-linear"></iconify-icon> Moreno Valley
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:map-point-linear"></iconify-icon> Menifee
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:map-point-linear"></iconify-icon> Hemet
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:map-point-linear"></iconify-icon> Lake Elsinore
                    </div>
</div>
<p className="text-sm text-neutral-500 italic mb-8">
                    Don't see your city? Call us anyway. If you're in the Inland Empire, we can likely help.
                </p>
<a className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors" href="tel:9512839641">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    Check Availability
                </a>
</div>
<div className="relative reveal reveal-delay-200">
<div className="aspect-square md:aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-200">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Perris%20CA&amp;output=embed" style={{border: '0'}} title="McDaniel's Junk Removal Service Area" width="100%">
</iframe>
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl -z-10 opacity-20"></div>
</div>
</div>
</section>

<section className="py-24 bg-yellow-400 text-neutral-950 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 scale-in">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Need junk gone today?
            </h2>
<p className="text-lg md:text-xl font-medium text-neutral-800 mb-10 max-w-2xl mx-auto">
                From single-item pickups to full property cleanouts, we make junk removal simple. Fast, honest, and local.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-950 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-neutral-800 transition-transform hover:-translate-y-1 shadow-xl" href="tel:9512839641">
<iconify-icon className="text-xl" icon="solar:phone-bold"></iconify-icon>
                    (951) 283-9641
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-neutral-950 border-2 border-neutral-950 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-neutral-950 hover:text-white transition-all hover:-translate-y-1" href="#contact">
                    Request a Quote Online
                </a>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-neutral-400 pt-24 pb-12 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 mb-16">

<div className="lg:col-span-4 reveal">
<a className="flex flex-col mb-6" href="#">
<span className="text-xl font-semibold tracking-tighter text-white leading-none">MCDANIEL'S</span>
<span className="text-xs font-medium tracking-widest text-yellow-400 leading-none mt-1 uppercase">Junk Removal LLC</span>
</a>
<p className="text-sm font-medium leading-relaxed mb-8 max-w-xs">
                        Dependable local junk removal serving Perris, CA and the Inland Empire. We do the heavy lifting so you don't have to.
                    </p>
<div className="space-y-4 text-sm font-medium">
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:9512839641">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
                            (951) 283-9641
                        </a>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
                            Perris, CA &amp; Inland Empire
                        </div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
                            Fast Scheduling Available
                        </div>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-6 reveal reveal-delay-100">
<h4 className="text-white text-sm font-semibold tracking-tight mb-6 uppercase">Company</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-yellow-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#process">How It Works</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#reviews">Reviews</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#service-area">Service Area</a></li>
</ul>
</div>

<div className="lg:col-span-5 reveal reveal-delay-200">
<h4 className="text-white text-sm font-semibold tracking-tight mb-6 uppercase">Get a Free Quote</h4>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Form submission simulated. In production, this connects to your lead system.');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" placeholder="Name" required="" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" placeholder="Phone" required="" type="tel"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" placeholder="City or Zip Code" required="" type="text"/>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none" placeholder="What do you need removed?" required="" rows="3"></textarea>
<button className="w-full bg-yellow-400 text-neutral-950 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors" type="submit">
                            Send Request
                        </button>
</form>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
<p>© 2023 McDaniel's Junk Removal LLC. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
