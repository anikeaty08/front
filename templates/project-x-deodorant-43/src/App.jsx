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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
gold: {
400: '#D4AF37', // Premium Gold
500: '#C5A028',
},
dermadry: {
400: '#0077CC', // Lighter accent
500: '#005EB8', // Dermadry Blue (Medical/Trust)
900: '#002D59',
},
charcoal: '#121212',
offwhite: '#F9FAFB',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-line': 'slideLine 1.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
slideLine: {
'0%': { width: '0%' },
'100%': { width: '100%' },
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Unobserve if you only want it to trigger once
                        // observer.unobserve(entry.target);
                        
                        // Special trigger for the underline animation
                        if(entry.target.querySelector('#revolution-line')) {
                            entry.target.querySelector('#revolution-line').style.width = '100%';
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            document.querySelectorAll('.reveal-element').forEach((el) => {
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="text-white font-display tracking-tight text-xl font-medium uppercase hover:text-gold-400 transition-colors" href="#">
                Project X
            </a>
<a className="bg-gold-400 text-charcoal px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded hover:bg-white transition-all duration-300 hover:scale-105" href="#hero">
                Get Started
            </a>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden text-white pt-24 pb-12 relative items-center" id="hero">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-dermadry-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" style={{animationDelay: '4s'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50"></div>
<div className="contrast-150 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0 brightness-100"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="order-2 lg:order-1 flex flex-col items-start space-y-8">

<div className="reveal-element inline-flex items-center border border-gold-400/60 bg-black/40 backdrop-blur-md rounded-full px-5 py-1.5 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
<span className="text-gold-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em]">Lifetime deodorant for lasting confidence</span>
</div>
<h1 className="reveal-element delay-100 font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white drop-shadow-xl">
                    From hiding in <br/> the back to <br/> <span className="text-neutral-400">walking in first.</span>
</h1>
<p className="reveal-element delay-200 text-neutral-300 text-base md:text-lg max-w-lg leading-relaxed font-light">
                    Project X is a lifetime, non‑toxic, non‑sticky deodorant that helps you worry less about sweat and odor in job interviews, dates, classrooms, and presentations—so you can focus on speaking up, not staying hidden.
                </p>
<div className="reveal-element delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">

<a className="group relative px-8 py-4 bg-transparent border border-gold-400 text-gold-400 font-semibold uppercase tracking-wider text-sm rounded transition-all duration-300 hover:text-charcoal hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] overflow-hidden" href="#shop">
<span className="relative z-10">Start your Project X ritual</span>
<div className="absolute inset-0 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
</a>

<a className="group relative px-8 py-4 border border-dermadry-500 text-white font-semibold uppercase tracking-wider text-sm rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,94,184,0.4)]" href="#how-it-works">
<span className="relative z-10 flex items-center gap-2">
                            How Project X works
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-dermadry-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center items-center h-full reveal-element delay-200 lg:animate-float">
<div className="relative w-48 h-96 md:w-64 md:h-[450px] product-stick rounded-t-[100px] rounded-b-[40px] flex items-end justify-center pb-10 border border-white/5 z-20 group cursor-pointer transition-transform hover:scale-[1.02] duration-500">

<div className="absolute top-[35%] w-full h-[1px] bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>

<div className="text-gold-400/90 font-display text-4xl tracking-[0.25em] font-light opacity-90 vertical-text drop-shadow-md" style={{writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)'}}>
                        PROJECT X
                    </div>

<div className="absolute top-0 right-[20%] h-full w-[25%] bg-gradient-to-l from-white/5 to-transparent rounded-tr-[100px] rounded-br-[40px] pointer-events-none"></div>

<div className="absolute inset-0 rounded-t-[100px] rounded-b-[40px] opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
</div>

<div className="absolute -bottom-16 w-48 h-8 bg-black/60 blur-2xl rounded-[100%] z-10"></div>

<div className="-translate-x-1/2 -translate-y-1/2 -z-10 bg-dermadry-900/40 w-[120%] h-[120%] rounded-full absolute top-1/2 left-1/2 blur-3xl"></div>
</div>
</div>
</header>

<section className="py-24 bg-offwhite overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
<div className="reveal-element inline-block relative">
<h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-charcoal pb-4 relative z-10">
                    The Freshness Revolution Starts Here
                </h2>

<div className="absolute bottom-0 left-0 h-[3px] bg-dermadry-500 rounded-full w-0 transition-all duration-1000 ease-out" id="revolution-line" style={{width: '100%'}}></div>
</div>
<p className="reveal-element delay-100 leading-relaxed text-lg md:text-xl font-light text-neutral-600 max-w-2xl mx-auto">
                Discover how Project X deodorant changes everyday hygiene—and why it outperforms traditional deodorant sticks for people who are tired of worrying about sweat and odor.
            </p>
</div>
</section>

<section className="pb-24 bg-offwhite">
<div className="max-w-5xl mx-auto px-6">
<div className="reveal-element border-l-[3px] border-gold-400 pl-8 md:pl-12 py-6 bg-white shadow-sm rounded-r-xl">
<h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-charcoal mb-8">
                    What is Project X deodorant?
                </h2>
<div className="space-y-6 text-neutral-600 font-light text-base md:text-lg">
<div className="flex gap-4 items-start">
<iconify-icon className="text-dermadry-500 shrink-0 mt-1" icon="solar:star-fall-linear" width="24"></iconify-icon>
<p className="">Project X deodorant is a lifetime‑style deodorant alternative, not a disposable stick.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-dermadry-500 shrink-0 mt-1" icon="solar:leaf-linear" width="24"></iconify-icon>
<p>It is non‑toxic and non‑sticky, free from harsh chemicals and heavy perfumes.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-dermadry-500 shrink-0 mt-1" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
<p>A simple daily ritual helps reduce sweat and odor over time, rather than only masking smells.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-dermadry-500 shrink-0 mt-1" icon="solar:wallet-linear" width="24"></iconify-icon>
<p>It’s more cost‑effective and sustainable than buying a new deodorant every month.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-element">
<span className="text-dermadry-500 font-bold tracking-widest uppercase text-xs mb-3 block">The Ritual</span>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-charcoal">
                    How Project X Works
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="reveal-element delay-100 flex flex-col items-start p-8 rounded-2xl bg-offwhite border border-transparent hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-full flex justify-between items-start mb-6">
<div className="w-14 h-14 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-dermadry-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:hand-swipe-linear" width="28"></iconify-icon>
</div>
<span className="font-display text-4xl text-gold-400/40 font-bold">01</span>
</div>
<h3 className="font-display font-medium text-2xl tracking-tight text-charcoal mb-4 group-hover:text-dermadry-500 transition-colors">Swipe in 5 seconds</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Glide Project X once or twice over each underarm. The clean formula goes on smooth and light, with no sticky feel or stains on clothes.
                    </p>
</div>

<div className="reveal-element delay-200 flex flex-col items-start p-8 rounded-2xl bg-offwhite border border-transparent hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-full flex justify-between items-start mb-6">
<div className="w-14 h-14 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-dermadry-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<span className="font-display text-4xl text-gold-400/40 font-bold">02</span>
</div>
<h3 className="font-display font-medium text-2xl tracking-tight text-charcoal mb-4 group-hover:text-dermadry-500 transition-colors">Neutralize odor</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Active ingredients target odor‑causing bacteria and help control moisture, keeping you fresher for longer instead of just masking smells.
                    </p>
</div>

<div className="reveal-element delay-300 flex flex-col items-start p-8 rounded-2xl bg-offwhite border border-transparent hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-full flex justify-between items-start mb-6">
<div className="w-14 h-14 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-dermadry-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<span className="font-display text-4xl text-gold-400/40 font-bold">03</span>
</div>
<h3 className="font-display font-medium text-2xl tracking-tight text-charcoal mb-4 group-hover:text-dermadry-500 transition-colors">Build control</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        With consistent daily use, sweat and odor are managed better week after week, so interviews, dates, classes, and presentations feel less stressful.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-dermadry-500/5 via-white to-dermadry-500/5 relative overflow-hidden">

<div className="absolute top-10 right-10 opacity-5 animate-float"><iconify-icon className="" icon="solar:atom-linear" width="100"></iconify-icon></div>
<div className="absolute bottom-10 left-10 opacity-5 animate-float" style={{animationDelay: '2s'}}><iconify-icon className="" icon="solar:dna-linear" width="100"></iconify-icon></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="reveal-element inline-block mb-6 p-3 bg-white rounded-full shadow-sm border border-dermadry-500/20">
<iconify-icon className="text-dermadry-500" icon="solar:test-tube-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="reveal-element delay-100 font-display font-medium text-3xl md:text-5xl tracking-tight text-charcoal mb-8">
                Backed by science, <span className="text-dermadry-500">built for confidence</span>
</h2>
<p className="reveal-element delay-200 text-neutral-600 text-lg md:text-xl leading-relaxed font-light mb-10">
                Project X uses a clean, non‑toxic formula designed for daily use. By focusing on odor‑causing bacteria and moisture instead of perfume alone, it supports long‑term sweat and odor management so your confidence grows the longer you stick with the ritual.
            </p>
<div className="reveal-element delay-300 flex justify-center gap-12 border-t border-dermadry-500/10 pt-8">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-dermadry-500" icon="solar:shield-user-linear" width="32"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-500">Skin Safe</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-dermadry-500" icon="solar:leaf-linear" width="32"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-500">Non-Toxic</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-dermadry-500" icon="solar:infinite-linear" width="32"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-500">Lifetime Use</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-dermadry-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="reveal-element font-display font-medium text-3xl md:text-5xl tracking-tight text-center mb-20">
                Old deodorant vs Project X deodorant
            </h2>
<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">

<div className="w-full lg:w-5/12 space-y-8 reveal-element">
<h3 className="text-neutral-500 font-display font-medium text-xl uppercase tracking-[0.2em] text-center lg:text-left border-b border-neutral-800 pb-4">Old Deodorant</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-neutral-400">
<iconify-icon className="text-neutral-600 shrink-0 mt-1" icon="solar:close-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Only masks odor for a few hours</span>
</li>
<li className="flex items-start gap-4 text-neutral-400">
<iconify-icon className="text-neutral-600 shrink-0 mt-1" icon="solar:close-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Often packed with harsh chemicals and strong perfumes</span>
</li>
<li className="flex items-start gap-4 text-neutral-400">
<iconify-icon className="text-neutral-600 shrink-0 mt-1" icon="solar:close-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Sticky texture that sits on skin and stains clothes</span>
</li>
<li className="flex items-start gap-4 text-neutral-400">
<iconify-icon className="text-neutral-600 shrink-0 mt-1" icon="solar:close-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Disposable sticks that require constant refills and create more waste</span>
</li>
</ul>
</div>

<div className="w-full lg:w-2/12 flex justify-center py-8 lg:py-0 reveal-element delay-200">
<div className="w-20 h-48 lg:w-24 lg:h-64 product-stick rounded-t-[50px] rounded-b-[20px] border border-white/10 relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-gold-400/40 font-display tracking-widest text-lg" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>PX</span>
</div>
</div>
</div>

<div className="w-full lg:w-5/12 space-y-8 reveal-element delay-300">
<h3 className="text-gold-400 font-display font-medium text-xl uppercase tracking-[0.2em] text-center lg:text-right border-b border-gold-400/20 pb-4">Project X</h3>
<ul className="space-y-6">
<li className="flex flex-row-reverse lg:flex-row items-start gap-4 text-right lg:text-left text-white">
<iconify-icon className="text-dermadry-400 shrink-0 mt-1" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Targets odor at the source instead of just covering it</span>
</li>
<li className="flex flex-row-reverse lg:flex-row items-start gap-4 text-right lg:text-left text-white">
<iconify-icon className="text-dermadry-400 shrink-0 mt-1" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Non‑toxic, non‑sticky formula that feels clean on skin</span>
</li>
<li className="flex flex-row-reverse lg:flex-row items-start gap-4 text-right lg:text-left text-white">
<iconify-icon className="text-dermadry-400 shrink-0 mt-1" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Helps reduce sweat and odor with consistent long‑term use</span>
</li>
<li className="flex flex-row-reverse lg:flex-row items-start gap-4 text-right lg:text-left text-white">
<iconify-icon className="text-dermadry-400 shrink-0 mt-1" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-base font-light">Lifetime‑style design that cuts monthly refills and reduces waste</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-offwhite">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal-element font-display font-medium text-3xl md:text-5xl tracking-tight text-charcoal mb-16 text-center">
                From hiding in the back to walking in first
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal-element delay-100 bg-white p-8 rounded-xl shadow-sm border border-dermadry-500/10 hover:border-dermadry-500 hover:-translate-y-2 transition-all duration-300 group">
<div className="mb-6 text-charcoal group-hover:text-dermadry-500 transition-colors">
<iconify-icon icon="solar:case-round-linear" strokeWidth="1" width="36"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">Job interview</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Walk into the room without worrying about sweat patches.</p>
</div>

<div className="reveal-element delay-200 bg-white p-8 rounded-xl shadow-sm border border-dermadry-500/10 hover:border-dermadry-500 hover:-translate-y-2 transition-all duration-300 group">
<div className="mb-6 text-charcoal group-hover:text-dermadry-500 transition-colors">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1" width="36"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">First date</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Focus on the person in front of you, not on your underarms.</p>
</div>

<div className="reveal-element delay-300 bg-white p-8 rounded-xl shadow-sm border border-dermadry-500/10 hover:border-dermadry-500 hover:-translate-y-2 transition-all duration-300 group">
<div className="mb-6 text-charcoal group-hover:text-dermadry-500 transition-colors">
<iconify-icon icon="solar:notebook-linear" strokeWidth="1" width="36"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">Classroom</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Raise your hand without feeling self‑conscious about odor.</p>
</div>

<div className="reveal-element delay-200 bg-white p-8 rounded-xl shadow-sm border border-dermadry-500/10 hover:border-dermadry-500 hover:-translate-y-2 transition-all duration-300 group">
<div className="mb-6 text-charcoal group-hover:text-dermadry-500 transition-colors">
<iconify-icon className="" icon="solar:microphone-2-linear" strokeWidth="1" width="36"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">Presentation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Stay dry and calm under bright lights and pressure.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="reveal-element font-display font-medium text-3xl md:text-5xl tracking-tight text-charcoal mb-16 text-center">
                Project X FAQ
            </h2>
<div className="space-y-4">
<details className="reveal-element delay-100 group p-6 bg-offwhite rounded-lg cursor-pointer open:bg-dermadry-500/5 transition-colors duration-300">
<summary className="flex justify-between items-center font-medium text-lg text-charcoal list-none group-hover:text-dermadry-500 transition-colors">
<span>How is Project X different from normal deodorant?</span>
<span className="text-dermadry-500 transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="overflow-hidden h-0 group-open:h-auto transition-all">
<div className="text-neutral-600 font-light text-base mt-4 leading-relaxed border-t border-gold-400/30 pt-4">
                            Project X is a lifetime mineral-based tool, not a chemical paste. Instead of masking odor with heavy perfumes, it neutralizes bacteria at the source. It lasts for years with proper care, eliminating the need for monthly plastic waste.
                        </div>
</div>
</details>
<details className="reveal-element delay-100 group p-6 bg-offwhite rounded-lg cursor-pointer open:bg-dermadry-500/5 transition-colors duration-300">
<summary className="flex justify-between items-center font-medium text-lg text-charcoal list-none group-hover:text-dermadry-500 transition-colors">
<span>Is Project X safe for daily use?</span>
<span className="text-dermadry-500 transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="overflow-hidden h-0 group-open:h-auto transition-all">
<div className="text-neutral-600 font-light text-base mt-4 leading-relaxed border-t border-gold-400/30 pt-4">
                            Yes. Project X uses a non-toxic, clean formula free from harsh synthetic chemicals found in traditional antiperspirants. It is designed to be gentle on skin while being tough on odor.
                        </div>
</div>
</details>
<details className="reveal-element delay-100 group p-6 bg-offwhite rounded-lg cursor-pointer open:bg-dermadry-500/5 transition-colors duration-300">
<summary className="flex justify-between items-center font-medium text-lg text-charcoal list-none group-hover:text-dermadry-500 transition-colors">
<span>Can Project X really last for years?</span>
<span className="text-dermadry-500 transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="overflow-hidden h-0 group-open:h-auto transition-all">
<div className="text-neutral-600 font-light text-base mt-4 leading-relaxed border-t border-gold-400/30 pt-4">
                            Absolutely. Because the solid crystal formula dissolves very slowly with water application, a single Project X stick can last for several years if dried properly after each use.
                        </div>
</div>
</details>
<details className="reveal-element delay-100 group p-6 bg-offwhite rounded-lg cursor-pointer open:bg-dermadry-500/5 transition-colors duration-300">
<summary className="flex justify-between items-center font-medium text-lg text-charcoal list-none group-hover:text-dermadry-500 transition-colors">
<span>Will Project X help me sweat less over time?</span>
<span className="text-dermadry-500 transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="overflow-hidden h-0 group-open:h-auto transition-all">
<div className="text-neutral-600 font-light text-base mt-4 leading-relaxed border-t border-gold-400/30 pt-4">
                            Many users report normalized sweating patterns after switching. While it is not a pore-clogging antiperspirant, consistent use helps manage moisture and odor, making high-pressure situations feel much more manageable.
                        </div>
</div>
</details>
<details className="reveal-element delay-100 group p-6 bg-offwhite rounded-lg cursor-pointer open:bg-dermadry-500/5 transition-colors duration-300">
<summary className="flex justify-between items-center font-medium text-lg text-charcoal list-none group-hover:text-dermadry-500 transition-colors">
<span>Is Project X suitable for sensitive skin?</span>
<span className="text-dermadry-500 transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="overflow-hidden h-0 group-open:h-auto transition-all">
<div className="text-neutral-600 font-light text-base mt-4 leading-relaxed border-t border-gold-400/30 pt-4">
                             Yes, the formula is hypoallergenic and fragrance-free, making it an excellent choice for those who get irritation or rashes from store-bought deodorants.
                        </div>
</div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-charcoal text-white text-center relative overflow-hidden" id="shop">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dermadry-900/40 to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 space-y-8">
<h2 className="reveal-element font-display font-medium text-4xl md:text-6xl tracking-tight">
                Stop hiding. Start living.
            </h2>
<p className="reveal-element delay-100 text-neutral-400 text-lg font-light">
                Join thousands who have upgraded their confidence for life.
            </p>
<div className="reveal-element delay-200">
<a className="inline-block px-12 py-5 bg-gold-400 text-charcoal font-semibold uppercase tracking-wider text-sm rounded shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-white hover:scale-105 transition-all duration-300" href="#">
                    Start your Project X ritual
                </a>
</div>
<p className="reveal-element delay-300 text-xs text-neutral-500 tracking-wider uppercase">Free shipping worldwide • 30-day confidence guarantee</p>
</div>
</section>

<footer className="bg-charcoal border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-white font-display tracking-widest text-lg font-medium uppercase opacity-40">
                Project X
            </div>
<div className="flex gap-8 text-neutral-500 text-sm font-medium">
<a className="hover:text-gold-400 transition-colors" href="#">Terms</a>
<a className="hover:text-gold-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-gold-400 transition-colors" href="#">Contact</a>
</div>
<div className="text-neutral-600 text-xs">
                © 2023 Project X Deodorant.
            </div>
</div>
</footer>



    </>
  );
}
