import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Intersection Observer for "Linear-style" reveal animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-xl bg-[#FAF9F6]/70 border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex h-20 items-center justify-between">

<div className="md:hidden">
<button className="text-stone-600 hover:text-stone-900 transition-colors">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<a className="text-2xl font-serif font-medium tracking-tighter text-stone-800 uppercase flex items-center gap-2 reveal active" href="#">
                    LumaGlow
                </a>

<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#shop">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#about">Our Story</a>
<a className="hover:text-stone-900 transition-colors" href="#sustainability">Sustainability</a>
</div>

<div className="flex items-center gap-5">
<button className="text-stone-600 hover:text-stone-900 transition-colors">
<svg aria-hidden="true" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="text-stone-600 hover:text-stone-900 transition-colors relative group">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-stone-300 rounded-full group-hover:bg-amber-700 transition-colors"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div className="z-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] font-medium tracking-[0.2em] text-stone-500 uppercase">New Collection</span>
</div>
</div>
<h1 className="text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tighter text-stone-900 mb-6 reveal delay-100">
                    Light Up Your <br/>
<span className="italic text-stone-500 font-serif">Sanctuary.</span>
</h1>
<p className="text-lg lg:text-xl font-light text-stone-600 mb-8 max-w-md leading-relaxed reveal delay-200">
                    Hand-poured, sustainable soy candles designed to bring calm to your modern space. Crafted with nature, for nature.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium rounded-full hover:bg-stone-800 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300" href="#shop">
                        Shop Collection
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-stone-300 text-stone-800 text-sm font-medium rounded-full hover:bg-stone-100 transition-all duration-300" href="#about">
                        Our Process
                    </a>
</div>
</div>
<div className="relative h-[600px] w-full reveal delay-400">

<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(28,25,23,0.1)] border border-stone-200/50 group">
<img alt="Premium Candle on Table" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a875a362-f866-446b-bd2c-11daaf5b094e_1600w.webp" style={{}}/>
<div className="bg-gradient-to-t from-stone-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute bottom-8 -left-4 lg:-left-8 glass-card p-5 rounded-2xl shadow-sm max-w-[240px] animate-[float_6s_ease-in-out_infinite]">
<div className="flex items-start gap-4">
<div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 shrink-0">
<svg aria-hidden="true" data-icon="lucide:flame" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="font-serif text-lg leading-none text-stone-900 mb-1">Clean Burn</p>
<p className="text-xs text-stone-500 leading-snug">50+ hours of toxin-free illumination.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 order-2 lg:order-1">
<div className="reveal">
<h2 className="text-4xl font-medium tracking-tight text-stone-900 mb-6 font-serif">The Art of Slow Living</h2>
<p className="text-stone-600 font-light leading-relaxed mb-6 text-lg">
                            We believe a candle is more than just wax and wick—it's a ritual. Our candles are handcrafted in small batches using 100% natural soy wax and phthalate-free fragrances.
                        </p>
<div className="h-px w-24 bg-stone-200 my-8"></div>
<div className="grid grid-cols-2 gap-8">
<div>
<p className="text-3xl font-serif text-stone-900 mb-1">100%</p>
<p className="text-xs uppercase tracking-wider text-stone-500">Natural Soy</p>
</div>
<div>
<p className="text-3xl font-serif text-stone-900 mb-1">0%</p>
<p className="text-xs uppercase tracking-wider text-stone-500">Toxins</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
<div className="reveal delay-200">
<img alt="Pouring Wax" className="rounded-2xl h-80 w-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="mt-12 reveal delay-300">
<img alt="Candle Details" className="rounded-2xl h-80 w-full object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73927c17-9ab0-4914-8856-bbc46bc039a6_800w.webp" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAF9F6]" id="shop">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex justify-between items-end mb-16 reveal">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 font-serif mb-2">Curated Scents</h2>
<p className="text-stone-500 font-light">Elevate your atmosphere.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors group" href="#">
                    View all <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal delay-100">
<div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/5] mb-5 border border-stone-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-500">
<img alt="Lavender Candle" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ab58c2d-bc54-41fc-9616-e024bdb46d30_800w.webp"/>
<div className="absolute inset-x-4 bottom-4 glass-card rounded-xl p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-between items-center">
<span className="text-xs font-medium uppercase tracking-wide text-stone-800">Add to Cart</span>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-amber-900 transition-colors">Lavender Dusk</h3>
<p className="text-sm text-stone-500 font-light mt-1">Calming &amp; Floral</p>
</div>
<span className="text-sm font-medium text-stone-900">$28.00</span>
</div>
</div>

<div className="group cursor-pointer reveal delay-200">
<div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/5] mb-5 border border-stone-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-500">
<img alt="Citrus Candle" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55864d0d-fd34-4f29-bfcb-a0cbc83261b2_800w.jpg"/>
<div className="absolute inset-x-4 bottom-4 glass-card rounded-xl p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-between items-center">
<span className="text-xs font-medium uppercase tracking-wide text-stone-800">Add to Cart</span>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-amber-900 transition-colors">Morning Citrus</h3>
<p className="text-sm text-stone-500 font-light mt-1">Bright &amp; Energizing</p>
</div>
<span className="text-sm font-medium text-stone-900">$28.00</span>
</div>
</div>

<div className="group cursor-pointer reveal delay-300">
<div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/5] mb-5 border border-stone-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-500">
<img alt="Woody Candle" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08baa2e0-2ecd-4606-8564-0100c5c35c72_800w.jpg" style={{}}/>
<div className="absolute inset-x-4 bottom-4 glass-card rounded-xl p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-between items-center">
<span className="text-xs font-medium uppercase tracking-wide text-stone-800">Add to Cart</span>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-amber-900 transition-colors">Oak &amp; Amber</h3>
<p className="text-sm text-stone-500 font-light mt-1">Warm &amp; Grounding</p>
</div>
<span className="text-sm font-medium text-stone-900">$32.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1C1917] text-stone-50 relative overflow-hidden" id="sustainability">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase mb-4 block">Our Commitment</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight font-serif text-stone-100 mb-6">Mindfully Made for a Better Planet</h2>
<p className="text-stone-400 font-light text-lg leading-relaxed mb-8">
                        We don't just make candles; we craft them with a conscience. From our locally sourced soy wax to our recyclable glass vessels, every decision is made to minimize our footprint.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-300 font-light">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                            Clean burning, non-toxic ingredients
                        </li>
<li className="flex items-center gap-3 text-stone-300 font-light">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                            Plastic-free shipping materials
                        </li>
<li className="flex items-center gap-3 text-stone-300 font-light">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                            Small batch production to reduce waste
                        </li>
</ul>
</div>
<div className="grid gap-6 reveal delay-200">

<div className="bg-stone-800/30 backdrop-blur-md border border-stone-700/50 p-6 rounded-2xl hover:bg-stone-800/50 transition-colors duration-300 group">
<svg aria-hidden="true" data-icon="lucide:leaf" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<h3 className="text-lg font-medium text-stone-100 mb-2">100% Soy Wax</h3>
<p className="text-sm text-stone-400 font-light leading-relaxed">Derived from American-grown soybeans for an eco-friendly, clean burn.</p>
</div>

<div className="bg-stone-800/30 backdrop-blur-md border border-stone-700/50 p-6 rounded-2xl hover:bg-stone-800/50 transition-colors duration-300 group">
<svg aria-hidden="true" data-icon="lucide:recycle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path></g></svg>
<h3 className="text-lg font-medium text-stone-100 mb-2">Reusable Vessels</h3>
<p className="text-sm text-stone-400 font-light leading-relaxed">Designed to be repurposed as planters, tumblers, or storage.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-center text-stone-900 font-serif mb-16 reveal">Loved by the Community</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-500 reveal delay-100">
<div className="flex gap-0.5 text-amber-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 leading-relaxed text-sm">"The Lavender Dusk candle transformed my evening routine. The scent is subtle but present, not overpowering like others."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 text-xs font-medium">ER</div>
<div>
<p className="text-sm font-medium text-stone-900">Emily R.</p>
<p className="text-[10px] text-stone-400 uppercase tracking-wide">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-500 reveal delay-200">
<div className="flex gap-0.5 text-amber-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 leading-relaxed text-sm">"Absolutely gorgeous packaging. I bought three as gifts and kept one for myself. The unboxing experience is premium."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 text-xs font-medium">JM</div>
<div>
<p className="text-sm font-medium text-stone-900">Jordan M.</p>
<p className="text-[10px] text-stone-400 uppercase tracking-wide">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-500 reveal delay-300">
<div className="flex gap-0.5 text-amber-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 leading-relaxed text-sm">"Finally, a candle that doesn't give me a headache. Clean burning and the wood wick crackle is so soothing."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 text-xs font-medium">SK</div>
<div>
<p className="text-sm font-medium text-stone-900">Sarah K.</p>
<p className="text-[10px] text-stone-400 uppercase tracking-wide">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6 text-stone-600 ring-1 ring-stone-900/5">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 font-serif mb-4">Join the Inner Circle</h2>
<p className="text-stone-600 font-light mb-8 max-w-lg mx-auto">Subscribe for early access to new seasonal drops and exclusive community discounts.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-5 py-3 rounded-full border border-stone-200 bg-white/80 backdrop-blur-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all text-sm" placeholder="email@example.com" type="email"/>
<button className="px-8 py-3 bg-stone-900 text-stone-50 text-sm font-medium rounded-full hover:bg-stone-800 transition-all hover:scale-[1.02] shadow-lg shadow-stone-900/10 whitespace-nowrap" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-xl font-serif font-medium tracking-tighter text-stone-800 uppercase" href="#">
                    LumaGlow
                </a>
<div className="flex gap-8 text-sm text-stone-500 font-light">
<a className="hover:text-stone-900 transition-colors" href="#">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
<a className="hover:text-stone-900 transition-colors" href="#">FAQ</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms</a>
</div>
<div className="text-stone-400 flex gap-4">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-12 text-center text-xs text-stone-300 font-light">
                © 2024 LumaGlow Candles. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
