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
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('scroll-reveal');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach(element => {
                observer.observe(element);
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
      

<nav className="sticky top-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-1.5 text-lg font-medium tracking-tighter uppercase text-stone-900 group" href="#">
<iconify-icon className="text-xl text-stone-900 group-hover:text-emerald-700 transition-colors" icon="solar:leaf-linear"></iconify-icon>
                    Campagna
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#story">Our Story</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#ingredients">Ingredients</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-9 px-5 items-center justify-center rounded-full bg-red-700 text-white text-sm font-medium hover:bg-red-800 transition-colors shadow-sm" href="#shop">Shop Now</a>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border border-[#FAFAF9]"></span>
</button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden min-h-[80vh] flex items-center justify-center">

<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[#FAFAF9] opacity-0 animate-fade-in-up">
<div className="absolute inset-[-30%] rotate-[-6deg] origin-center opacity-90 mix-blend-multiply">
<div className="absolute inset-0 bg-gradient-to-tr from-[#7f1d1d]/30 via-[#dc2626]/10 to-transparent mix-blend-overlay animate-pulse" style={{animationDuration: '6s'}}></div>
<svg className="absolute top-[25%] w-[200%] h-[1200px] wave-1 blur-[2px]" preserveaspectratio="none" viewbox="0 0 2000 1000">
<path d="M0,100 C150,250 350,-50 500,100 C650,250 850,-50 1000,100 C1150,250 1350,-50 1500,100 C1650,250 1850,-50 2000,100 L2000,1000 L0,1000 Z" fill="#7f1d1d" opacity="0.9"></path>
</svg>
<svg className="absolute top-[32%] w-[200%] h-[1200px] wave-2" preserveaspectratio="none" viewbox="0 0 2000 1000">
<path d="M0,150 C200,50 300,300 500,150 C700,50 800,300 1000,150 C1200,50 1300,300 1500,150 C1700,50 1800,300 2000,150 L2000,1000 L0,1000 Z" fill="#991b1b" opacity="0.95"></path>
</svg>
<svg className="absolute top-[38%] w-[200%] h-[1200px] wave-3" preserveaspectratio="none" viewbox="0 0 2000 1000">
<path d="M0,200 C100,350 400,50 500,200 C600,350 900,50 1000,200 C1100,350 1400,50 1500,200 C1600,350 1900,50 2000,200 L2000,1000 L0,1000 Z" fill="#dc2626" opacity="0.85"></path>
</svg>
<div className="absolute top-[45%] left-[20%] w-96 h-96 bg-[#7f1d1d]/40 blob blur-xl mix-blend-overlay" style={{animationDelay: '0s'}}></div>
<div className="absolute top-[50%] left-[60%] w-[30rem] h-[30rem] bg-[#991b1b]/30 blob blur-2xl mix-blend-multiply" style={{animationDelay: '-4s', animationDirection: 'reverse'}}></div>
<div className="absolute top-[30%] left-[80%] w-80 h-80 bg-[#ea580c]/20 blob blur-xl mix-blend-screen" style={{animationDelay: '-8s'}}></div>
<svg className="absolute top-[42%] w-[200%] h-[1200px] wave-4" preserveaspectratio="none" viewbox="0 0 2000 1000">
<path d="M0,250 C250,150 250,350 500,250 C750,150 750,350 1000,250 C1250,150 1250,350 1500,250 C1750,150 1750,350 2000,250 L2000,1000 L0,1000 Z" fill="#ea580c" opacity="0.6"></path>
</svg>
<div className="absolute inset-0 mix-blend-screen">
<div className="absolute top-[70%] left-[30%] w-12 h-12 bg-amber-500/40 rounded-full blur-md simmer-1 blob"></div>
<div className="absolute top-[65%] left-[55%] w-8 h-8 bg-amber-400/50 rounded-full blur-sm simmer-2 blob"></div>
<div className="absolute top-[80%] left-[75%] w-16 h-16 bg-orange-500/30 rounded-full blur-lg simmer-3 blob"></div>
<div className="absolute top-[60%] left-[45%] w-4 h-4 bg-stone-800/40 rounded-full blur-[1px] simmer-4 blob"></div>
<div className="absolute top-[75%] left-[20%] w-6 h-6 bg-[#7f1d1d]/60 rounded-full blur-sm simmer-5 blob"></div>
</div>
</div>
<div className="absolute inset-0 z-10" style={{background: 'radial-gradient(circle at center, rgba(250,250,249,0.95) 0%, rgba(250,250,249,0.7) 45%, rgba(250,250,249,0.1) 100%)'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9]/60 via-transparent to-[#FAFAF9] z-10"></div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-30">
<div className="opacity-0 animate-fade-in-up delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200/60 bg-white/60 backdrop-blur-sm text-xs font-medium text-red-800 mb-8 shadow-sm">
<iconify-icon className="text-red-600" icon="solar:heart-linear"></iconify-icon>
                    100% Homemade Recipe &amp; Included Cheese
                </div>
<h1 className="opacity-0 animate-fade-in-up delay-200 text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.05] max-w-4xl mb-6">
                    Authentic homemade <span className="text-red-700">ragù.</span><br/>
<span className="text-stone-500">Ready in minutes.</span>
</h1>
<p className="opacity-0 animate-fade-in-up delay-300 text-lg md:text-xl font-normal text-stone-600 max-w-2xl leading-relaxed mb-10">
                    A lifesaver for busy evenings. Simply warm it up and toss with your favorite pasta. Universally loved by kids, and includes fresh cheese packages perfectly portioned and ready to go.
                </p>
<div className="opacity-0 animate-fade-in-up delay-400 flex flex-col items-center gap-4">
<a className="relative overflow-hidden h-14 px-10 inline-flex items-center justify-center rounded-full bg-red-700 text-white text-base font-medium hover:bg-red-800 transition-colors shadow-lg shadow-red-700/20 gap-2 hover:scale-[1.02] active:scale-95 duration-200 btn-shimmer" href="#shop">
                        Claim Your Jars Now
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
<div className="flex items-center gap-1 text-amber-500 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-600">"Saved my weeknights!" - Over 2,000 happy families</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-t border-stone-200/50" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="scroll-reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">The perfect meal for when you just don't want to cook.</h2>
<div className="space-y-6 text-base font-normal text-stone-600 leading-relaxed">
<p>Our ragù is a slow-simmered, homemade recipe crafted with deep care so you never have to spend hours in the kitchen after a long day. It brings the rich warmth of a Sunday dinner to your table in under 10 minutes.</p>
<p>It is universally loved, consistently clears kids' plates, and takes the stress out of dinner time. Plus, we've thought of everything—it arrives with fresh cheese packages ready to go, so you don't even have to grate the parmesan.</p>
</div>
</div>
<div className="scroll-reveal delay-200 aspect-[4/3] bg-stone-100 rounded-3xl border border-stone-200/50 relative overflow-hidden flex items-center justify-center shadow-sm">
<img alt="Fresh homemade ragù over pasta" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAFAF9] border-t border-stone-200/50" id="ingredients">
<div className="max-w-7xl mx-auto px-6">
<div className="scroll-reveal text-center max-w-2xl mx-auto mb-16 md:mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Uncompromising quality.</h2>
<p className="text-base font-normal text-stone-600">Every jar of Campagna contains only pure, natural ingredients you would find in a traditional Italian home kitchen.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

<div className="scroll-reveal delay-100 bg-white rounded-3xl border border-stone-200/50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 flex flex-col overflow-hidden">
<div className="h-48 w-full relative">
<img alt="Organic Tomatoes" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 pt-10 relative flex-grow">
<div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 border border-red-100 shadow-sm">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-3">Organic Tomatoes</h3>
<p className="text-sm font-normal text-stone-500 leading-relaxed">Vine-ripened and hand-selected for the perfect balance of natural sweetness and bright acidity.</p>
</div>
</div>

<div className="scroll-reveal delay-200 bg-white rounded-3xl border border-stone-200/50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 flex flex-col overflow-hidden">
<div className="h-48 w-full relative">
<img alt="Pasture-Raised Meats" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 pt-10 relative flex-grow">
<div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-700 border border-stone-100 shadow-sm">
<iconify-icon className="text-xl" icon="solar:bone-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-3">Pasture-Raised Meats</h3>
<p className="text-sm font-normal text-stone-500 leading-relaxed">A traditional rich blend of locally sourced, completely pasture-raised beef and premium pork.</p>
</div>
</div>

<div className="scroll-reveal delay-300 bg-white rounded-3xl border border-stone-200/50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 flex flex-col overflow-hidden">
<div className="h-48 w-full relative">
<img alt="Ready-to-go Cheese" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 pt-10 relative flex-grow">
<div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100 shadow-sm">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-3">Ready-to-go Cheese</h3>
<p className="text-sm font-normal text-stone-500 leading-relaxed">Every order comes with perfectly portioned, freshly grated cheese packages ready to top off your meal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-t border-stone-200/50" id="shop">
<div className="max-w-4xl mx-auto px-6">
<div className="scroll-reveal bg-[#FAFAF9] rounded-[2rem] p-6 md:p-12 border border-stone-200/50 flex flex-col md:flex-row gap-10 md:gap-16 items-center">

<div className="w-full md:w-1/2 aspect-[4/5] bg-stone-100 rounded-3xl border border-stone-200/50 shadow-sm relative overflow-hidden animate-float">
<img alt="Campagna Ragù Jar" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent"></div>
</div>

<div className="w-full md:w-1/2 flex flex-col">
<div className="inline-flex items-center gap-1.5 text-xs font-medium text-red-700 mb-4 bg-red-50 w-max px-2.5 py-1 rounded-full border border-red-100">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                            Customer Favorite
                        </div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-3">Campagna Homemade Ragù</h2>
<p className="text-sm font-normal text-stone-500 mb-8 leading-relaxed">Two 16oz jars of our slow-simmered homemade recipe. A lifesaver for quick meals, plus complimentary cheese packages ready to go with your pasta.</p>

<div className="space-y-4 mb-8 relative">

<label className="relative flex cursor-pointer rounded-2xl border-2 border-stone-200 bg-white p-4 shadow-sm hover:border-stone-300 has-[:checked]:border-red-700 has-[:checked]:bg-red-50/20 transition-all group overflow-hidden">
<div className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg z-10">Most Popular</div>
<input checked="" className="sr-only" name="purchase_type" type="radio"/>
<div className="flex w-full items-center justify-between pt-2">
<div className="flex items-center gap-4">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white transition-colors group-has-[:checked]:border-red-700 group-has-[:checked]:bg-red-700">
<div className="h-1.5 w-1.5 rounded-full bg-white opacity-0 transition-opacity group-has-[:checked]:opacity-100"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-stone-900">Subscribe &amp; Save 15%</span>
<span className="text-xs font-normal text-stone-500 mt-0.5">Delivered fresh every 4 weeks</span>
</div>
</div>
<span className="text-base font-semibold text-stone-900">$24.98</span>
</div>
</label>

<label className="relative flex cursor-pointer rounded-2xl border-2 border-stone-200 bg-white p-4 shadow-sm hover:border-stone-300 has-[:checked]:border-red-700 has-[:checked]:bg-red-50/20 transition-all group">
<input className="sr-only" name="purchase_type" type="radio"/>
<div className="flex w-full items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white transition-colors group-has-[:checked]:border-red-700 group-has-[:checked]:bg-red-700">
<div className="h-1.5 w-1.5 rounded-full bg-white opacity-0 transition-opacity group-has-[:checked]:opacity-100"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">One-time purchase</span>
</div>
</div>
<span className="text-sm font-medium text-stone-900">$29.39</span>
</div>
</label>
</div>
<button className="w-full h-14 flex items-center justify-center rounded-xl bg-stone-900 text-white text-base font-medium hover:bg-stone-800 transition-all shadow-md gap-2 active:scale-[0.98] duration-200">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
                            Add to Cart — Secure Checkout
                        </button>
<div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-stone-500">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base text-stone-400" icon="solar:shield-check-linear"></iconify-icon>
                                100% Satisfaction Guarantee
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base text-stone-400" icon="solar:box-linear"></iconify-icon>
                                Free Shipping over $50
                            </div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200/50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-1.5 text-stone-900 group">
<iconify-icon className="text-xl text-stone-900 group-hover:text-emerald-700 transition-colors" icon="solar:leaf-linear"></iconify-icon>
<span className="text-lg font-medium tracking-tighter uppercase">Campagna</span>
</div>
<div className="flex items-center gap-8 text-sm font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">FAQ</a>
<a className="hover:text-stone-900 transition-colors" href="#">Shipping &amp; Returns</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
<a className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
</div>
<p className="text-xs font-normal text-stone-400">© 2023 Campagna Foods. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
