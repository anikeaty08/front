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
},
colors: {
accent: {
300: '#F0E6D2',
400: '#E0C9A3',
500: '#C7A77B',
}
},
animation: {
'fade-in-up': 'fadeInUp 1s ease-out forwards',
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

            const heroSection = document.getElementById('hero');
            const productWrap = document.getElementById('product-wrap');
            const productImg = document.getElementById('hero-product');

            if(heroSection && productWrap && productImg) {
                heroSection.addEventListener('mousemove', (e) => {
                    const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
                    const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
                    
                    productWrap.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                    productImg.style.transform = `translateZ(40px) translateX(${xAxis * -0.3}px)`;
                });

                heroSection.addEventListener('mouseleave', () => {
                    productWrap.style.transform = `rotateY(0deg) rotateX(0deg)`;
                    productImg.style.transform = `translateZ(0px)`;
                });
            }

            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                document.querySelectorAll('.parallax-img').forEach(img => {
                    const speed = 0.04;
                    img.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });

            const container = document.getElementById('reviews-container');
            const nextBtn = document.getElementById('next-review');
            const prevBtn = document.getElementById('prev-review');

            if(container && nextBtn && prevBtn) {
                nextBtn.addEventListener('click', () => {
                    container.scrollBy({ left: 350, behavior: 'smooth' });
                });
                prevBtn.addEventListener('click', () => {
                    container.scrollBy({ left: -350, behavior: 'smooth' });
                });
            }
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
      
<div className="noise-bg"></div>
<div className="fixed inset-0 z-[-1] overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-accent-400/5 rounded-full blur-[150px] animate-pulse-slow"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-zinc-600/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
</div>
<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 backdrop-blur-xl bg-zinc-950/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-normal tracking-widest text-white uppercase" href="#">
                DELAIRE
            </a>
<div className="hidden md:flex items-center gap-10 text-sm text-zinc-400 font-light">
<a className="hover:text-white transition-colors tracking-wide" href="#">Fragrances</a>
<a className="hover:text-white transition-colors tracking-wide" href="#">Collections</a>
<a className="hover:text-white transition-colors tracking-wide" href="#">Heritage</a>
<a className="hover:text-white transition-colors tracking-wide" href="#">Boutiques</a>
</div>
<div className="flex items-center gap-5">
<button className="hidden md:block text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
</button>
<a className="ml-4 px-6 py-2.5 text-xs font-normal bg-white text-black hover:bg-zinc-200 transition-colors tracking-widest uppercase" href="#">
                    Discover
                </a>
</div>
</div>
</nav>
<header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-5 flex flex-col items-start gap-8 order-2 lg:order-1">
<div className="reveal-on-scroll opacity-0" style={{transitionDelay: '0.1s'}}>
<span className="text-accent-400 text-xs font-normal tracking-widest uppercase border border-accent-400/20 px-4 py-1.5 rounded-full bg-accent-400/5">Nuit D'Or Collection</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter reveal-on-scroll opacity-0" style={{transitionDelay: '0.2s'}}>
                    LIQUID<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">ILLUSION.</span>
</h1>
<p className="text-zinc-400 font-light text-base md:text-lg max-w-md leading-relaxed reveal-on-scroll opacity-0" style={{transitionDelay: '0.3s'}}>
                    An ethereal blend of smoked vanilla, rare oud, and night-blooming jasmine. A scent that lingers like a forgotten memory.
                </p>
<div className="flex items-center gap-4 mt-2 reveal-on-scroll opacity-0" style={{transitionDelay: '0.4s'}}>
<button className="px-8 py-4 bg-accent-400 text-black text-xs font-medium tracking-widest uppercase hover:bg-accent-300 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        Acquire Now
                    </button>
<button className="px-8 py-4 glass-panel text-white text-xs font-normal tracking-widest uppercase hover:bg-white/5 transition-all flex items-center gap-3 group">
<iconify-icon className="group-hover:text-accent-400 transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        The Film
                    </button>
</div>
</div>
<div className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2 h-[55vh] lg:h-auto group cursor-crosshair product-container" id="product-wrap">
<div className="absolute inset-0 bg-gradient-to-t from-accent-400/10 to-transparent blur-[100px] rounded-full opacity-40"></div>

<img alt="De Laire Flacon" className="product-img relative w-full max-w-[380px] object-cover rounded-3xl animate-float z-20" id="hero-product" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
<div className="highlight-sweep z-30 opacity-20"></div>
</div>
<div className="lg:col-span-3 flex flex-col justify-center items-end order-3 reveal-on-scroll opacity-0" style={{transitionDelay: '0.6s'}}>
<div className="glass-panel p-8 w-full max-w-sm rounded-sm backdrop-blur-2xl space-y-8">
<div className="flex justify-between items-end border-b border-white/5 pb-6">
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs font-normal uppercase tracking-widest">Extrait de Parfum</span>
<span className="text-3xl font-normal text-white tracking-tight">$320.00</span>
</div>
</div>
<div className="space-y-4">
<span className="text-zinc-500 text-xs font-normal uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon> Key Notes
                        </span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 border border-white/10 text-xs text-zinc-300 font-light rounded-sm">Smoked Vanilla</span>
<span className="px-3 py-1.5 border border-white/10 text-xs text-zinc-300 font-light rounded-sm">Oud Wood</span>
<span className="px-3 py-1.5 border border-white/10 text-xs text-zinc-300 font-light rounded-sm">Jasmine Absolute</span>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-zinc-500 text-xs font-normal uppercase tracking-widest">Volume</span>
</div>
<div className="grid grid-cols-2 gap-3 relative">
<div>
<input checked="" className="peer hidden size-radio" id="size-50" name="size" type="radio"/>
<label className="block w-full py-3 text-center border border-white/10 text-xs text-zinc-400 cursor-pointer transition-all hover:bg-white/5 rounded-sm tracking-wide" htmlFor="size-50">
                                    50 ML
                                </label>
</div>
<div>
<input className="peer hidden size-radio" id="size-100" name="size" type="radio"/>
<label className="block w-full py-3 text-center border border-white/10 text-xs text-zinc-400 cursor-pointer transition-all hover:bg-white/5 rounded-sm tracking-wide" htmlFor="size-100">
                                    100 ML
                                </label>
</div>
</div>
</div>
<button className="w-full py-4 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 rounded-sm mt-4">
                        Add to Bag <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-pulse-slow">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-light">Descend</span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-down-linear" strokeWidth="1" width="20"></iconify-icon>
</div>
</header>
<section className="py-32 relative z-10 border-t border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="p-6 group reveal-on-scroll">
<iconify-icon className="text-accent-400 mb-8 block group-hover:-translate-y-2 transition-transform duration-500" icon="solar:droplet-linear" strokeWidth="1" width="32"></iconify-icon>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Pure Concentration</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
                        Formulated at a 30% concentration level, ensuring a profound depth and an architectural structure that evolves perfectly on the skin.
                    </p>
</div>
<div className="p-6 group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-accent-400 mb-8 block group-hover:-translate-y-2 transition-transform duration-500" icon="solar:clock-circle-linear" strokeWidth="1" width="32"></iconify-icon>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Enduring Sillage</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
                        Engineered with advanced fixatives, the fragrance leaves a mesmerizing trail that commands presence from dusk until dawn.
                    </p>
</div>
<div className="p-6 group reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-accent-400 mb-8 block group-hover:-translate-y-2 transition-transform duration-500" icon="solar:earth-linear" strokeWidth="1" width="32"></iconify-icon>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Ethical Harvest</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
                        Ingredients sourced through sustainable partnerships globally, preserving biodiversity and honoring generational farming traditions.
                    </p>
</div>
</div>
</div>
</section>
<section className="py-32 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="space-y-10 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight">THE ANATOMY<br/>OF <span className="text-accent-400 italic">SCENT</span>.</h2>
<div className="border-t border-white/10">
<details className="group py-8 cursor-pointer border-b border-white/10" open="">
<summary className="flex justify-between items-center text-lg font-normal list-none tracking-wide">
<span className="text-white">01. Top Notes</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 font-light mt-5 text-sm leading-relaxed max-w-md">
                            The initial awakening. A sharp, fleeting burst of Calabrian Bergamot and Pink Pepper creates an immediate sense of intrigue and brightness before dissolving into the core.
                        </p>
</details>
<details className="group py-8 cursor-pointer border-b border-white/10">
<summary className="flex justify-between items-center text-lg font-normal list-none tracking-wide">
<span className="text-zinc-300 group-hover:text-white transition-colors">02. Heart Notes</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 font-light mt-5 text-sm leading-relaxed max-w-md">
                            The soul of the fragrance. Night-blooming Jasmine intertwines with dark Velvet Rose, establishing a deeply floral yet mysterious center that pulses with body heat.
                        </p>
</details>
<details className="group py-8 cursor-pointer border-b border-white/10">
<summary className="flex justify-between items-center text-lg font-normal list-none tracking-wide">
<span className="text-zinc-300 group-hover:text-white transition-colors">03. Base Notes</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 font-light mt-5 text-sm leading-relaxed max-w-md">
                            The enduring legacy. Cambodian Oud, Madagascan Vanilla, and rich Ambergris anchor the scent, fusing with the wearer's chemistry for a bespoke finish.
                        </p>
</details>
</div>
</div>
<div className="relative h-[700px] w-full reveal-on-scroll delay-200 rounded-sm overflow-hidden group">
<img alt="Liquid Texture" className="absolute inset-0 w-full h-[115%] object-cover object-center opacity-70 parallax-img transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{top: '-5%'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-12 left-10 glass-panel p-6 backdrop-blur-xl border-l border-accent-400 max-w-[240px]">
<span className="text-xs text-accent-400 uppercase tracking-widest font-normal block mb-2">Extraction</span>
<p className="text-xs text-zinc-300 font-light leading-relaxed">Cold-press enfleurage techniques preserve the volatile top notes often lost in modern distillation.</p>
</div>
</div>
</div>
</section>
<section className="py-32 border-y border-white/5 bg-zinc-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll gap-6">
<h2 className="text-3xl font-normal tracking-tight">CONNOISSEUR <span className="text-zinc-500">INSIGHTS</span></h2>
<div className="flex gap-3">
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-sm" id="prev-review">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-sm" id="next-review">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar" id="reviews-container" style={{scrollbarWidth: 'none'}}>
<div className="min-w-[320px] md:min-w-[420px] snap-start glass-panel p-10 flex flex-col justify-between h-[280px] reveal-on-scroll rounded-sm">
<div>
<iconify-icon className="text-accent-400/50 text-2xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base font-light leading-relaxed text-zinc-300">"A masterpiece of modern perfumery. It bridges the gap between classic French structure and audacious contemporary minimalism seamlessly."</p>
</div>
<div className="mt-8 border-t border-white/5 pt-4">
<p className="text-sm font-normal text-white tracking-wide">L'Officiel Parfums</p>
<p className="text-xs text-zinc-500 font-light mt-1">Editorial Review</p>
</div>
</div>
<div className="min-w-[320px] md:min-w-[420px] snap-start glass-panel p-10 flex flex-col justify-between h-[280px] reveal-on-scroll rounded-sm" style={{transitionDelay: '0.1s'}}>
<div>
<iconify-icon className="text-accent-400/50 text-2xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base font-light leading-relaxed text-zinc-300">"The dry down is where Liquid Illusion truly shines. It transforms from a bold statement into an intimate, skin-close whisper of amber and vanilla."</p>
</div>
<div className="mt-8 border-t border-white/5 pt-4">
<p className="text-sm font-normal text-white tracking-wide">A. Laurent</p>
<p className="text-xs text-zinc-500 font-light mt-1">Master Perfumer</p>
</div>
</div>
<div className="min-w-[320px] md:min-w-[420px] snap-start glass-panel p-10 flex flex-col justify-between h-[280px] reveal-on-scroll rounded-sm" style={{transitionDelay: '0.2s'}}>
<div>
<iconify-icon className="text-accent-400/50 text-2xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base font-light leading-relaxed text-zinc-300">"I have never encountered a fragrance that garners this level of attention. It is undeniably magnetic, yet utterly refined."</p>
</div>
<div className="mt-8 border-t border-white/5 pt-4">
<p className="text-sm font-normal text-white tracking-wide">Vogue Beauty</p>
<p className="text-xs text-zinc-500 font-light mt-1">Curator's Pick 2024</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl font-normal tracking-tight">AESTHETIC <span className="text-accent-400 italic">STUDY</span></h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 h-[70vh] gap-2">
<div className="relative overflow-hidden group reveal-on-scroll h-full md:col-span-2 row-span-2 bg-zinc-900">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="relative overflow-hidden group reveal-on-scroll h-full bg-zinc-900">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative overflow-hidden group reveal-on-scroll h-full bg-zinc-900">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative overflow-hidden group reveal-on-scroll md:col-span-2 h-full bg-zinc-900">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal object-top" src="https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>
<section className="py-40 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-accent-400/5 z-0 blur-3xl"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 text-center reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">FIND YOUR SIGNATURE.</h2>
<p className="text-zinc-400 font-light mb-12 text-sm md:text-base leading-relaxed max-w-lg mx-auto">Subscribe to the De Laire society for exclusive access to private blends, olfactory masterclasses, and unreleased archives.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="bg-transparent border border-white/10 text-white px-6 py-4 outline-none focus:border-accent-400 transition-colors w-full rounded-sm placeholder:text-zinc-600 font-light text-sm" placeholder="Email Address" type="email"/>
<button className="bg-white text-black font-medium px-8 py-4 whitespace-nowrap hover:bg-zinc-200 transition-colors rounded-sm text-xs tracking-widest uppercase">
                    Subscribe
                </button>
</form>
</div>
</section>
<footer className="border-t border-white/5 bg-zinc-950 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-4">
<a className="text-2xl font-normal tracking-widest text-white uppercase mb-8 block" href="#">
                        DELAIRE
                    </a>
<p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">
                        Elevating the art of perfumery through uncompromising ingredients and architectural design since 2024.
                    </p>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-white font-normal mb-6 text-xs uppercase tracking-widest">Collections</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li><a className="hover:text-accent-400 transition-colors" href="#">Nuit D'Or</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">L'Aube</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">Les Extraits</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">Home Ambience</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-normal mb-6 text-xs uppercase tracking-widest">Maison</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li><a className="hover:text-accent-400 transition-colors" href="#">Our Heritage</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">The Manifesto</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">Boutiques</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-normal mb-6 text-xs uppercase tracking-widest">Assistance</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li><a className="hover:text-accent-400 transition-colors" href="#">Concierge</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">Fragrance Fitting</a></li>
<li><a className="hover:text-accent-400 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600 font-light">
<p>© 2024 De Laire Parfums. All rights reserved.</p>
<div className="flex gap-6 mt-6 md:mt-0 items-center">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<div className="flex gap-4 ml-4 text-zinc-400">
<iconify-icon className="hover:text-accent-400 cursor-pointer transition-colors" icon="solar:brand-instagram-linear" width="18"></iconify-icon>
<iconify-icon className="hover:text-accent-400 cursor-pointer transition-colors" icon="solar:brand-twitter-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
