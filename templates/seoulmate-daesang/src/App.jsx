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



        // Simple script to handle fade-in animations on scroll
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select elements to animate that aren't already animated in hero
            const animatedElements = document.querySelectorAll('section:not(:first-of-type) h2, section:not(:first-of-type) .grid > div');
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase" href="#">
                SEOULMATE
            </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-semibold text-slate-600 hover:text-emerald-500 transition-colors" href="#builder">Builder</a>
<a className="text-sm font-semibold text-slate-600 hover:text-emerald-500 transition-colors" href="#benefits">Philosophy</a>
<a className="text-sm font-semibold text-slate-600 hover:text-emerald-500 transition-colors" href="#pricing">Plans</a>
</div>
<a className="hover:bg-emerald-500 transition-all duration-300 flex items-center gap-2 hover:shadow-md text-sm font-semibold text-white bg-slate-900 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#builder">
                Get Started
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="z-10 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold mb-8 tracking-wide">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    HYPER-PERSONALIZED NUTRITION
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-6 text-slate-900">
                    DESIGN<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-400">YOUR</span><br/>
                    OATS.
                </h1>
<p className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed">
                    Elevate your morning ritual. Build your perfect bowl with premium, sustainably sourced ingredients tailored to your specific wellness goals.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5" href="#builder">
                        Build Your Bowl
                        <iconify-icon className="" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-50 text-base font-semibold text-slate-900 bg-white border-slate-200 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#how-it-works">
                        Explore Blends
                    </a>
</div>
</div>
<div className="relative z-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-100 group">
<div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="Premium Oatmeal Bowl" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b95db7a4-3b0e-4661-be97-9cbf9efa1aa3_1600w.webp"/>

<div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-semibold text-slate-500 tracking-wider">Base Blend</p>
<p className="text-sm font-extrabold text-slate-900 tracking-tight">image your style</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="builder">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>THE LAB</h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">Craft your ultimate performance fuel in three simple steps.</p>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

<div className="lg:col-span-7 space-y-8" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">1</div>
<h3 className="text-2xl font-extrabold tracking-tight text-slate-900">Select Base</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<label className="cursor-pointer group relative">
<input checked="" className="peer hidden" name="base" type="radio"/>
<div className="p-4 rounded-2xl border-2 border-slate-100 bg-white hover:border-emerald-200 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50/50 text-center">
<div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform peer-checked:bg-emerald-100 peer-checked:text-emerald-600">
<iconify-icon className="" icon="solar:cup-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-900">sweet</p>
<p className="text-xs text-slate-500 mt-1">Slow release energy</p>
</div>
<div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-emerald-500 transition-opacity">
<iconify-icon className="" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer hidden" name="base" type="radio"/>
<div className="p-4 rounded-2xl border-2 border-slate-100 bg-white hover:border-emerald-200 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50/50 text-center">
<div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform peer-checked:bg-emerald-100 peer-checked:text-emerald-600">
<iconify-icon className="" icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-900">savory</p>
<p className="text-xs text-slate-500 mt-1">Omega-3 rich</p>
</div>
<div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-emerald-500 transition-opacity">
<iconify-icon className="" height="20" icon="solar:check-circle-bold" style={{color: 'rgb(16, 185, 129)'}} width="20"></iconify-icon>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer hidden" name="base" type="radio"/>
<div className="p-4 rounded-2xl border-2 border-slate-100 bg-white hover:border-emerald-200 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50/50 text-center">
<div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform peer-checked:bg-emerald-100 peer-checked:text-emerald-600">
<iconify-icon icon="solar:sprout-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-900">oil</p>
<p className="text-xs text-slate-500 mt-1">Complete protein</p>
</div>
<div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-emerald-500 transition-opacity">
<iconify-icon className="" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-semibold">2</div>
<h3 className="text-2xl font-extrabold tracking-tight text-slate-900">Add Texture</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
<input checked="" className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 accent-emerald-500" type="checkbox"/>
<div className="">
<p className="text-sm font-semibold text-slate-900">Toasted Almonds</p>
<p className="text-xs text-slate-500">+ Extra crunch</p>
</div>
</label>
<label className="cursor-pointer flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
<input className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 accent-emerald-500" type="checkbox"/>
<div className="">
<p className="text-sm font-semibold text-slate-900">dry Berries</p>
<p className="text-xs text-slate-500">Antioxidant boost</p>
</div>
</label>
<label className="cursor-pointer flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
<input checked="" className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 accent-emerald-500" type="checkbox"/>
<div className="">
<p className="text-sm font-semibold text-slate-900">Cacao Nibs</p>
<p className="text-xs text-slate-500">Deep flavor</p>
</div>
</label>
<label className="cursor-pointer flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
<input className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 accent-emerald-500" type="checkbox"/>
<div className="">
<p className="text-sm font-semibold text-slate-900">Coconut Flakes</p>
<p className="text-xs text-slate-500">Healthy fats</p>
</div>
</label>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-semibold">3</div>
<h3 className="text-2xl font-extrabold tracking-tight text-slate-900">The Plus</h3>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Whey Protein Isolate</p>
<p className="text-xs text-slate-500">25g clean protein</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
<iconify-icon icon="solar:sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500">Natural sweetness</p><p className="text-sm font-semibold text-slate-900">vitamin mineral mix</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="peer-focus:outline-none peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 bg-slate-200 w-11 h-6 rounded-full"></div>
</label>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:sticky lg:top-28" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10">
<p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">Your Formula</p>
<h3 className="text-3xl font-extrabold tracking-tight mb-8">The Power Bowl</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center pb-4 border-b border-white/10">
<span className="text-sm text-slate-400">Base</span>
<span className="text-sm font-semibold">sweet</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-white/10">
<span className="text-sm text-slate-400">Texture</span>
<span className="text-sm font-semibold">Almonds, Cacao</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-white/10">
<span className="text-sm text-slate-400">Plus</span>
<span className="text-sm font-semibold">Whey Protein</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-5 mb-8 border border-white/5">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1" icon="solar:stars-linear" width="20"></iconify-icon>
<div className="">
<p className="text-sm font-semibold italic">"BTS Jin's Pick"</p>
<p className="text-xs text-slate-300 mt-1">This high-protein combination is a favorite for sustained energy during intense schedules.</p>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-xs text-slate-400 mb-1">Total</p>
<p className="text-2xl font-extrabold">$8.50 <span className="text-sm font-normal text-slate-400">/ meal</span></p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 mb-1">Macros</p>
<p className="text-sm font-semibold">32g P · 45g C · 12g F</p>
</div>
</div>
<button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-base font-semibold py-4 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20">
                                Add to Subscription
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden" id="benefits">
<div className="bg-center max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col lg:flex-row items-center gap-16 mb-32 relative">
<div className="absolute top-0 left-0 lg:-left-20 -z-10 select-none">
<span className="text-[12rem] lg:text-[16rem] font-extrabold text-slate-50 leading-none tracking-tighter">01</span>
</div>
<div className="lg:w-1/2 relative z-10">
<div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-slate-100">
<img alt="Ingredients" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec2e2ad0-5d40-4dff-b782-4054277e3610_1600w.webp"/>
</div>
</div>
<div className="lg:w-1/2 relative z-10">
<h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>SOURCED WITH INTENT.</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        We skip the middleman to bring you organic, non-GMO ingredients directly from sustainable farms. Every grain, nut, and berry is tested for purity and nutrient density.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
                            100% Organic Certified
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
                            No Artificial Sweeteners
                        </li>
</ul>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32 relative">
<div className="absolute top-0 right-0 lg:-right-20 -z-10 select-none text-right">
<span className="text-[12rem] lg:text-[16rem] font-extrabold text-slate-50 leading-none tracking-tighter">02</span>
</div>
<div className="lg:w-1/2 relative z-10">
<div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-slate-100">
<img alt="Preparation" className="w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f24c8ed-3c97-4161-8026-45c10fe6d2d0_1600w.webp"/>
</div>
</div>
<div className="lg:w-1/2 relative z-10">
<h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>ZERO PREP TIME.</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Your custom blend arrives pre-portioned in compostable sachets. Just add hot water, milk, or soak overnight. Perfect nutrition designed for the modern, fast-paced lifestyle.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
<iconify-icon className="text-emerald-500" icon="solar:clock-circle-linear" strokeWidth="2" width="20"></iconify-icon>
                            Ready in 60 seconds
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
<iconify-icon className="text-emerald-500" icon="solar:leaf-linear" strokeWidth="2" width="20"></iconify-icon>
                            Plastic-free packaging
                        </li>
</ul>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-16 relative">
<div className="absolute top-0 left-0 lg:-left-20 -z-10 select-none">
<span className="text-[12rem] lg:text-[16rem] font-extrabold text-slate-50 leading-none tracking-tighter">03</span>
</div>
<div className="lg:w-1/2 relative z-10">
<div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-slate-100">
<img alt="Lifestyle" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9462271e-f2f7-4ff5-86ea-ae3f0b43b24a_1600w.webp"/>
</div>
</div>
<div className="lg:w-1/2 relative z-10">
<h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>DATA-BACKED MACROS.</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Stop guessing your intake. Every bowl you design comes with a precise nutritional profile tailored to hit your protein, fiber, and caloric targets.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
<iconify-icon className="text-emerald-500" icon="solar:chart-square-linear" strokeWidth="2" width="20"></iconify-icon>
                            Dynamic macro calculation
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
<iconify-icon className="text-emerald-500" icon="solar:target-linear" strokeWidth="2" width="20"></iconify-icon>
                            Aligns with fitness goals
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>NOT JUST OATMEAL.</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">Traditional cereal is loaded with sugar. Store-bought oats are generic. SEOULMATE is engineered for those who demand more.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-800/50 border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800 transition-colors duration-300" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400" icon="solar:dumbell-linear" width="24"></iconify-icon>
</div>
<p className="text-lg italic font-semibold text-slate-300 mb-6 leading-relaxed">
                        "I need exactly 40g of carbs and 30g of protein post-workout. Standard brands couldn't deliver without me adding a dozen extra ingredients."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-600">
<img alt="User" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold">Marcus T.</p>
<p className="text-xs text-slate-400">Hybrid Athlete</p>
</div>
</div>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800 transition-colors duration-300" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400" icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<p className="text-lg italic font-semibold text-slate-300 mb-6 leading-relaxed">
                        "Mornings are chaotic. Having a pre-portioned, chef-designed meal that actually tastes good and keeps me full until 2 PM is a lifesaver."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-600">
<img alt="User" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold">Elena R.</p>
<p className="text-xs text-slate-400">Startup Founder</p>
</div>
</div>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800 transition-colors duration-300" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<p className="text-lg italic font-semibold text-slate-300 mb-6 leading-relaxed">
                        "I'm super specific about my gut health. Being able to choose gluten-free oats and add specific prebiotics in exactly the right ratio is unmatched."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-600">
<img alt="User" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold">Sarah K.</p>
<p className="text-xs text-slate-400">Wellness Coach</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>SIMPLE SUBSCRIPTIONS.</h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">Cancel anytime. Modify your blend whenever you want.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6">Perfect for establishing a new morning routine.</p>
<div className="mb-8">
<span className="text-5xl font-extrabold tracking-tighter text-slate-900">$45</span>
<span className="text-slate-500 font-semibold">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            14 Custom Meals
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            1 Base + 2 Toppings
                        </li>
</ul>
<button className="w-full py-4 rounded-full border-2 border-slate-200 text-slate-900 font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                        Select Starter
                    </button>
</div>

<div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 relative transform md:-translate-y-4" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-slate-900 text-xs font-extrabold uppercase tracking-widest py-1 px-3 rounded-full">
                        Most Popular
                    </div>
<h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">Infinite</h3>
<p className="text-sm text-slate-400 mb-6">For the daily optimizer who wants complete control.</p>
<div className="mb-8">
<span className="text-5xl font-extrabold tracking-tighter text-white">$79</span>
<span className="text-slate-400 font-semibold">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-semibold text-slate-200">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            30 Custom Meals
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-slate-200">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Unlimited Base &amp; Toppings
                        </li>
</ul>
<button className="w-full py-4 rounded-full bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
                        Go Infinite
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center gap-1 mb-4 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-700 mb-4">"Honestly ruined regular oatmeal for me. The matcha base is incredible."</p>
<p className="text-xs text-slate-500">— David L.</p>
</div>

<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center gap-1 mb-4 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-700 mb-4">"Love the slick packaging and that I know exactly what I'm eating every morning."</p>
<p className="text-xs text-slate-500">— Jessica M.</p>
</div>

<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 lg:col-span-2" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-1 text-emerald-500">
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<iconify-icon className="text-slate-300" icon="solar:quote-right-linear" width="24"></iconify-icon>
</div>
<p className="text-base font-semibold text-slate-700 mb-4">"The builder is so fun to use. I tweak my macros depending on if I'm in a cutting or bulking phase. Customer service is also top-tier."</p>
<p className="text-xs text-slate-500">— Ryan P., Verified Buyer</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-10 text-center" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>FAQ</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900">
                        How fresh are the ingredients?
                        <iconify-icon className="transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        We blend to order. Your ingredients are stored in climate-controlled facilities and are mixed and sealed only after your order is placed, ensuring maximum freshness and nutrient retention.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900">
                        Can I change my blend later?
                        <iconify-icon className="transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        Absolutely. You can update your base, toppings, and add-ons anytime before your next billing cycle directly from your dashboard.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900">
                        Are your packages sustainable?
                        <iconify-icon className="transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        Yes. Our individual serving sachets are 100% commercially compostable, and our shipping boxes are made from post-consumer recycled cardboard.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase">
                SEOULMATE
            </div>
<div className="flex items-center gap-6 text-sm font-semibold text-slate-500">
<a className="hover:text-emerald-500 transition-colors" href="#">Instagram</a>
<a className="hover:text-emerald-500 transition-colors" href="#">TikTok</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Support</a>
</div>
<p className="text-xs text-slate-400">
                © 2024 Seoulmate Inc. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
