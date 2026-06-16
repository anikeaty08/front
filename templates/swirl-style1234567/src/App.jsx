import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Iconify
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-[20vh] pb-[30vh] overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
<span className="text-[25vw] font-black tracking-tighter text-white opacity-[0.02] whitespace-nowrap">SWIRL.</span>
</div>

<div className="absolute top-8 left-0 w-full flex justify-center z-50">
<span className="text-3xl font-black tracking-tighter uppercase reveal-up active cursor-pointer select-none">SWIRL.</span>
</div>
<div className="z-10 text-center flex flex-col items-center max-w-7xl px-6 relative">
<p className="md:text-3xl reveal-up active stagger-1 text-xl font-light text-neutral-300 tracking-tight max-w-3xl mb-4">
                Discover fashion like never before.
            </p>
<p className="text-sm md:text-lg font-light text-neutral-400 max-w-2xl mb-12 tracking-wide reveal-up active stagger-2">
                A hyper-personalized fashion discovery platform powered by intelligence.
            </p>
<p className="text-xs md:text-sm font-light text-neutral-500 mb-12 reveal-up active stagger-3">
                Over 1500+ brands. One experience built entirely around you.
            </p>
<a className="reveal-up active stagger-4 group transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:border-white text-sm font-medium border-neutral-700 border rounded-full pt-3 pr-8 pb-3 pl-8 relative" href="#explore">
                Explore Swirl
            </a>
</div>

<div className="absolute bottom-12 animate-bounce opacity-0 transition-opacity duration-1000 delay-[3000ms]" onload="this.classList.remove('opacity-0')">
<svg className="lucide lucide-arrow-down w-5 h-5 text-neutral-500" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
</section>

<section className="md:py-48 min-h-screen flex overflow-hidden text-black bg-white pt-32 pr-6 pb-32 pl-6 items-center" id="explore">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal-up">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-[1.1]">
                    Swirl is not another shopping app. It’s a new way to discover yourself.
                </h2>
<div className="space-y-6 text-lg md:text-xl font-light text-neutral-600 leading-relaxed">
<p className="">While marketplaces flood you with endless options, Swirl understands your intent.</p>
<p className="">It decodes your preferences across <span className="font-medium text-black hover-underline cursor-default">200+ style attributes</span> — texture, cut, color tone, silhouette, movement — creating a truly personal fashion journey.</p>
<p className="text-neutral-900 font-medium pt-4">Built by intelligence, not abundance.</p>
</div>
</div>

<div className="order-1 md:order-2 relative h-[600px] w-full flex items-center justify-center reveal-up stagger-2">

<div className="absolute w-[500px] h-[500px] bg-neutral-100 rounded-full blur-3xl opacity-60"></div>

<div className="iphone-frame relative w-[280px] h-[560px] bg-white rounded-[3rem] overflow-hidden z-10 border-4 border-neutral-800">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-neutral-900 rounded-b-2xl z-50"></div>

<div className="absolute top-8 left-0 w-full px-6 flex justify-between items-center z-40">
<span className="text-[10px] font-black tracking-tighter">SWIRL.</span>
<div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="text-neutral-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
<div className="icon-like flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/20 text-green-600 absolute -translate-x-1/2 -translate-y-1/2">
<svg fill="currentColor" height="32" stroke="none" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="icon-pass flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-600 absolute -translate-x-1/2 -translate-y-1/2">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</div>

<div className="card-stack relative w-full h-full p-4 pt-16 pb-20">

<div className="swipe-card card-3 absolute top-4 left-4 right-4 bottom-20 bg-neutral-100 rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
<div className="h-3/4 bg-neutral-200 w-full relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-32 bg-neutral-300 rounded opacity-50"></div>
</div>
</div>
<div className="p-4 bg-white h-1/4">
<div className="w-24 h-3 bg-neutral-900 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-neutral-300 rounded-full"></div>
</div>
</div>

<div className="swipe-card card-2 absolute top-4 left-4 right-4 bottom-20 bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-100 z-10">
<div className="h-3/4 bg-neutral-50 w-full relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-neutral-200 opacity-50"></div>
</div>
</div>
<div className="p-4 bg-white h-1/4">
<div className="flex justify-between items-center mb-2">
<div className="w-32 h-3 bg-neutral-900 rounded-full"></div>
<span className="text-xs text-neutral-400 font-mono">$120</span>
</div>
<div className="w-20 h-2 bg-neutral-300 rounded-full"></div>
</div>
</div>

<div className="swipe-card card-1 absolute top-4 left-4 right-4 bottom-20 bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200 z-20">
<div className="h-3/4 bg-neutral-800 w-full relative group">
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-0.5 h-16 bg-white/20"></div>
<div className="w-16 h-0.5 bg-white/20 absolute"></div>
</div>
<div className="absolute bottom-4 left-4 text-white/40 text-xs font-mono uppercase tracking-widest">Acne Studios</div>
</div>
<div className="p-4 bg-white h-1/4">
<div className="flex justify-between items-center mb-2">
<div className="w-28 h-3 bg-neutral-900 rounded-full"></div>
<span className="text-xs text-neutral-400 font-mono">$340</span>
</div>
<div className="w-24 h-2 bg-neutral-300 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-20 bg-white border-t border-neutral-100 flex items-center justify-around px-8 z-40">
<svg className="text-neutral-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<svg className="text-black fill-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
<svg className="text-neutral-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-200 rounded-full z-50"></div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-40 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden">

<span className="absolute -right-20 top-20 text-9xl font-black tracking-tighter text-neutral-900 opacity-20 select-none rotate-12">SWIRL.</span>
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-12 reveal-up">
                Fashion discovery is broken.
            </h2>
<p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 reveal-up stagger-1">
                Traditional e-commerce platforms still use the same grid-based UI built a decade ago.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-lg md:text-xl font-light text-neutral-500 mb-16">
<div className="flex items-center gap-3 reveal-up stagger-2">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>You scroll.</span>
</div>
<div className="flex items-center gap-3 reveal-up stagger-3">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>You compare.</span>
</div>
<div className="flex items-center gap-3 reveal-up stagger-4">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>You hesitate.</span>
</div>
</div>
<p className="text-2xl md:text-3xl font-normal tracking-tight mb-8 reveal-up stagger-4">
                Then you leave — overwhelmed by too much, inspired by too little.
            </p>
<div className="inline-block border-b border-white pb-1 text-lg reveal-up stagger-4">
                Swirl exists to fix that.
            </div>
</div>
</section>

<section className="bg-white text-black py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

<div className="space-y-12 border-l border-neutral-200 pl-8 reveal-up">
<div>
<h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest mb-2">The Old Way</h3>
<p className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Optimized for sales.</p>
<p className="text-lg text-neutral-600 font-light">Existing platforms push what sells, ignoring why you buy.</p>
</div>
<div>
<p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900">Where others see shoppers, we see evolving identities.</p>
</div>
</div>

<div className="space-y-12 border-l border-black pl-8 reveal-up stagger-2">
<div>
<div className="flex items-center gap-2 mb-2">

<span className="text-black text-sm font-black tracking-tighter uppercase">SWIRL.</span>
<h3 className="text-black text-sm font-semibold uppercase tracking-widest">Way</h3>
</div>
<p className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Optimized for individuality.</p>
<p className="text-lg text-neutral-600 font-light">Powered by deep personalization at over <span className="text-black font-medium">200 unique attributes</span> per user.</p>
</div>
<div>
<p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900">Where others rank products, we understand people.</p>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-40 px-6 min-h-screen flex items-center justify-center">
<div className="max-w-5xl mx-auto space-y-12 text-center md:text-left">
<p className="text-2xl md:text-5xl font-light tracking-tight leading-tight reveal-up text-neutral-300">
<span className="text-white font-medium">What once felt overwhelming</span> now feels intuitive, intentional, and alive.
            </p>
<p className="text-2xl md:text-5xl font-light tracking-tight leading-tight reveal-up stagger-1 text-neutral-400">
                Experience fashion that understands context — not just clicks.
            </p>
<p className="text-2xl md:text-5xl font-light tracking-tight leading-tight reveal-up stagger-2 text-neutral-500">
                Every scroll is designed to learn. The more you explore, the more your world becomes uniquely yours.
            </p>
<div className="pt-12 flex justify-center md:justify-start reveal-up stagger-3">
<span className="text-sm font-mono text-neutral-400 border border-neutral-800 rounded-full px-4 py-2">
                    Discovery, reimagined through intelligence.
                </span>
</div>
</div>
</section>

<section className="bg-white text-black py-32 overflow-hidden">
<div className="max-w-4xl mx-auto text-center px-6 mb-20 reveal-up">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-6">1500+ brands.</h2>
<p className="text-lg md:text-xl font-light text-neutral-600">From global icons to emerging designers — Swirl brings the world’s most loved fashion labels into a single, intelligent experience.</p>
</div>
<div className="marquee-container w-full relative">
<div className="marquee-content gap-16 md:gap-32 px-4 items-center">

<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">NIKE</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">ADIDAS</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">PUMA</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">BOSS</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">ARMANI</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">KLEIN</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">ZARA</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">GUCCI</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">PRADA</span>

<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">NIKE</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">ADIDAS</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">PUMA</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">BOSS</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">ARMANI</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">KLEIN</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">ZARA</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">GUCCI</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors duration-300 cursor-default shrink-0">PRADA</span>
</div>
</div>
<div className="text-center mt-12 text-sm text-neutral-400 reveal-up">
            And this is just the beginning.
        </div>
</section>

<section className="bg-black text-white py-32 px-6 border-t border-neutral-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
<div className="mb-12 md:mb-0 max-w-md reveal-up">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">Join the movement.</h2>
<p className="text-neutral-400 font-light mb-8">We are building the future of fashion discovery. If you obsess over detail, logic, and style, we want you.</p>
<a className="inline-flex items-center gap-2 hover-underline text-white font-medium" href="#">
                    Explore Roles <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="space-y-4 w-full md:w-auto reveal-up stagger-1">

<div className="group flex items-center justify-between gap-8 p-6 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors cursor-pointer w-full md:w-[400px]">
<div>
<h4 className="font-medium">Product Designer</h4>
<span className="text-xs text-neutral-500">Remote / Design</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="group flex items-center justify-between gap-8 p-6 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors cursor-pointer w-full md:w-[400px]">
<div>
<h4 className="font-medium">Frontend Engineer</h4>
<span className="text-xs text-neutral-500">London / Engineering</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="group flex items-center justify-between gap-8 p-6 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors cursor-pointer w-full md:w-[400px]">
<div>
<h4 className="font-medium">AI Researcher</h4>
<span className="text-xs text-neutral-500">SF / Data</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</section>

<footer className="bg-gradient-to-b from-black to-neutral-900 text-white pt-32 pb-12 px-6">
<div className="max-w-7xl mx-auto text-center mb-24 reveal-up">

<div className="mb-12 flex justify-center">
<span className="text-5xl md:text-7xl font-black tracking-tighter uppercase select-none">SWIRL.</span>
</div>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight mb-8">Ready to join the future?</h2>
<p className="text-xl md:text-2xl font-light text-neutral-400 mb-12">The waitlist is growing. Secure your spot.</p>
<button className="bg-white text-black text-lg md:text-xl font-medium px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                Join the Waitlist
            </button>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-neutral-800 pt-12 text-sm text-neutral-500">
<div className="mb-4 md:mb-0 flex items-center gap-2">
                © 2024 <span className="font-black tracking-tighter uppercase text-xs">SWIRL.</span> Inc. All rights reserved.
            </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="mailto:hello@swirl.com">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
