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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Loader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const heroText = document.querySelectorAll('.reveal-text span');
            
            setTimeout(() => {
                loader.style.transform = 'translateY(-100%)';
                
                // Trigger Hero Animations
                setTimeout(() => {
                    heroText.forEach(span => {
                        span.style.transform = 'translateY(0)';
                    });
                    
                    const fadeUps = document.querySelectorAll('.fade-up');
                    fadeUps.forEach(el => el.classList.add('in-view'));
                    
                    document.getElementById('hero-bg').classList.add('in-view');
                }, 500);
            }, 1500);
        });

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            trigger.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text, .fade-up, .scale-in-wrapper').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.add('bg-white/90');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.remove('bg-white/90');
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
      

<div className="cursor-dot hidden md:block" style={{left: '603px', top: '21px'}}></div>
<div className="cursor-outline hidden md:block"></div>

<div className="loader-wrap" id="loader" style={{transform: 'translateY(-100%)'}}>
<div className="loader-logo">
<h1 className="loader-text text-4xl tracking-tighter font-quicksand font-medium" style={{}}>VELVET &amp; VOID</h1>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-emerald-50/80 backdrop-blur-md border-b border-emerald-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden hover-trigger p-2">
<svg className="lucide lucide-menu w-6 h-6 text-emerald-900" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="hidden md:flex items-center gap-8">
<a className="hover-trigger text-xs font-medium uppercase tracking-widest text-emerald-500 hover:text-emerald-900 transition-colors font-quicksand" href="#collections">Collections</a>
<a className="hover-trigger text-xs font-medium uppercase tracking-widest text-emerald-500 hover:text-emerald-900 transition-colors font-quicksand" href="#lookbook">Lookbook</a>
</div>

<a className="hover-trigger text-xl font-semibold tracking-tighter absolute left-1/2 -translate-x-1/2 font-quicksand" href="#">
                VELVET &amp; VOID
            </a>

<div className="flex items-center gap-6">
<a className="hidden md:block hover-trigger text-xs font-medium uppercase tracking-widest text-emerald-500 hover:text-emerald-900 transition-colors font-quicksand" href="#about">Heritage</a>
<button className="hover-trigger relative">
<svg className="lucide lucide-search w-5 h-5 text-emerald-900" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hover-trigger relative">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-emerald-900" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-700 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Hero Background" className="w-full h-full object-cover brightness-[0.75] scale-in" id="hero-bg" src="https://images.unsplash.com/photo-1627938363721-39648939c14c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-emerald-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-4xl">
<p className="text-xs font-medium uppercase tracking-[0.2em] mb-4 opacity-0 fade-up in-view font-quicksand" style={{}}>Est. 2024 • Handcrafted in Jaipur</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-tight mb-6 reveal-text in-view" id="hero-title">
<span className="font-quicksand font-medium" style={{transform: 'translateY(0px)'}}>ELEGANCE</span><br className=""/><span className="font-medium font-quicksand" style={{transform: 'translateY(0px)', maskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)'}}>WOVEN IN TIME</span>
</h1>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 fade-up in-view" style={{}}>
<a className="hover-trigger hover:bg-emerald-200 transition-colors text-sm font-medium text-emerald-900 bg-white rounded-sm pt-3 pr-8 pb-3 pl-8 font-quicksand" href="#collections">
                    Festive Edit
                </a>
<a className="hover-trigger px-8 py-3 border border-white/30 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-colors rounded-sm font-quicksand" href="#store">
                    Our Story
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<svg className="lucide lucide-arrow-down w-6 h-6 text-white" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="py-20 md:py-32 bg-white overflow-hidden" id="collections">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div className="reveal-text">
<span className="text-3xl md:text-4xl tracking-tight font-quicksand font-medium" style={{transform: 'translateY(0px)'}}>Curated Crafts</span>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 border border-emerald-200 rounded-full hover:bg-emerald-100 transition-colors"><svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="p-2 border border-emerald-200 rounded-full hover:bg-emerald-100 transition-colors"><svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto px-6 pb-12 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[400px] snap-center group hover-trigger">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-emerald-100 mb-4 scale-in-wrapper">

<img alt="The Jaipur Edit" className="w-full h-full object-cover scale-in group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629196911514-cfd8d63f03f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider font-quicksand">New Drop</div>
</div>
<h3 className="text-lg font-medium tracking-tight font-quicksand">The Jaipur Edit</h3>
<p className="text-emerald-500 text-sm mt-1 font-quicksand">Hand-blocked cottons &amp; airy voiles.</p>
<div className="mt-3 h-[1px] w-0 bg-cyan-900 group-hover:w-full transition-all duration-500"></div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group hover-trigger">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-emerald-100 mb-4 scale-in-wrapper">

<img alt="Festive Lights" className="w-full h-full object-cover scale-in group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1609357912384-9543be20e2b0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider font-quicksand">Trending</div>
</div>
<h3 className="text-lg font-medium tracking-tight font-quicksand">Festive Lights</h3>
<p className="text-emerald-500 text-sm mt-1 font-quicksand">Intricate embroidery for the season.</p>
<div className="mt-3 h-[1px] w-0 bg-cyan-900 group-hover:w-full transition-all duration-500"></div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group hover-trigger">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-emerald-100 mb-4 scale-in-wrapper">

<img alt="Heirloom" className="w-full h-full object-cover scale-in group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595981234058-a9302d7448d3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider font-quicksand">Limited</div>
</div>
<h3 className="text-lg font-medium tracking-tight font-quicksand">Heirloom Series</h3>
<p className="text-emerald-500 text-sm mt-1 font-quicksand">Zardozi work on pure silks.</p>
<div className="mt-3 h-[1px] w-0 bg-cyan-900 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-up">
<h2 className="text-3xl md:text-5xl tracking-tight font-quicksand font-medium" style={{}}>Essentials.<span className="text-emerald-400 font-quicksand font-medium" style={{}}>Rooted in culture.</span></h2>
<a className="hover-trigger text-sm font-medium border-b border-emerald-300 pb-1 hover:border-emerald-900 transition-colors mt-4 md:mt-0 font-quicksand" href="#">View All Products</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">

<div className="group hover-trigger cursor-none">
<div className="relative aspect-[4/5] overflow-hidden bg-emerald-100 mb-4 rounded-sm">

<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1631233859262-3112a95c4794?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-emerald-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-lg font-quicksand">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight font-quicksand">Floral Sharara Set</h3>
<p className="text-xs text-emerald-500 mt-1 font-quicksand">Cotton Mulmul</p>
</div>
<span className="text-sm font-medium font-quicksand">$85</span>
</div>
</div>

<div className="group hover-trigger cursor-none">
<div className="relative aspect-[4/5] overflow-hidden bg-emerald-100 mb-4 rounded-sm">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1610189012906-4c0aa9b2b516?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-emerald-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-lg font-quicksand">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight font-quicksand">Embroidered Kurta</h3>
<p className="text-xs text-emerald-500 mt-1 font-quicksand">Chanderi Silk</p>
</div>
<span className="text-sm font-medium font-quicksand">$120</span>
</div>
</div>

<div className="group hover-trigger cursor-none">
<div className="relative aspect-[4/5] overflow-hidden bg-emerald-100 mb-4 rounded-sm">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1589810635657-232948472d98?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-emerald-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-lg font-quicksand">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight font-quicksand">Block Print Anarkali</h3>
<p className="text-xs text-emerald-500 mt-1 font-quicksand">Hand-Dyed Indigo</p>
</div>
<span className="text-sm font-medium font-quicksand">$145</span>
</div>
</div>

<div className="group hover-trigger cursor-none">
<div className="relative aspect-[4/5] overflow-hidden bg-emerald-100 mb-4 rounded-sm">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1606293926075-69a00ce49680?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-emerald-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-lg font-quicksand">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight font-quicksand">Silk Dupatta</h3>
<p className="text-xs text-emerald-500 mt-1 font-quicksand">Banarasi Weave</p>
</div>
<span className="text-sm font-medium font-quicksand">$65</span>
</div>
</div>
</div>
</section>

<section className="bg-emerald-900 text-white py-24 md:py-32" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/20"></div>
<div className="aspect-[4/5] overflow-hidden rounded-sm scale-in-wrapper">

<img alt="Atelier" className="w-full h-full object-cover opacity-80 scale-in" src="https://images.unsplash.com/photo-1620612643640-5e347732a39a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/20"></div>
</div>
<div className="space-y-8">
<div className="reveal-text">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400 font-quicksand" style={{transform: 'translateY(0px)'}}>The Philosophy</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight reveal-text">
<span className="font-quicksand font-medium" style={{transform: 'translateY(0px)'}}>NOT JUST FABRIC.</span><br/><span className="font-quicksand font-medium" style={{transform: 'translateY(0px)'}}>A HERITAGE.</span>
</h2>
<p className="text-emerald-400 text-lg leading-relaxed max-w-md fade-up font-quicksand">
                    Born in the vibrant lanes of Jaipur, Velvet &amp; Void bridges the gap between traditional craftsmanship and contemporary silhouettes. We work directly with artisans to create pieces that breathe, flow, and tell a story of their own.
                </p>
<div className="fade-up pt-4">
<a className="hover-trigger inline-flex items-center gap-2 text-sm font-medium hover:text-emerald-300 transition-colors group font-quicksand" href="#">
                        Read Our Full Story
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 fade-up">
<div>
<h4 className="text-2xl font-quicksand font-medium" style={{}}>2021</h4>
<p className="text-xs text-emerald-500 mt-1 uppercase tracking-wider font-quicksand">Founded</p>
</div>
<div>
<h4 className="text-2xl font-quicksand font-medium" style={{}}>50+</h4>
<p className="text-xs text-emerald-500 mt-1 uppercase tracking-wider font-quicksand">Artisans</p>
</div>
<div>
<h4 className="text-2xl font-quicksand font-medium" style={{}}>100%</h4>
<p className="text-xs text-emerald-500 mt-1 uppercase tracking-wider font-quicksand">Handcrafted</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="lookbook">
<div className="text-center mb-16 fade-up">
<h2 className="text-8xl md:text-9xl tracking-tighter opacity-5 select-none absolute left-1/2 -translate-x-1/2 -translate-y-12 w-full font-quicksand font-medium" style={{}}>LOOKBOOK</h2>
<h2 className="relative text-3xl md:text-4xl tracking-tight font-quicksand font-medium" style={{}}>Visual Stories</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">

<div className="space-y-4 mt-0 md:mt-20 fade-up">
<div className="aspect-[3/4] overflow-hidden rounded-sm hover-trigger relative group">
<img alt="Look 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1596704017235-d91d179668d5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold tracking-wider font-quicksand">VOL. 04</div>
</div>
<div className="flex justify-between items-baseline">
<h3 className="text-xl font-medium tracking-tight font-quicksand">Bohemian Rhapsody</h3>
<a className="text-xs font-medium border-b border-emerald-300 hover:border-emerald-900 transition-colors font-quicksand" href="#">Shop Look</a>
</div>
</div>

<div className="space-y-4 fade-up">
<div className="aspect-[3/4] overflow-hidden rounded-sm hover-trigger relative group">
<img alt="Look 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1594913222019-278631b08492?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold tracking-wider font-quicksand">VOL. 05</div>
</div>
<div className="flex justify-between items-baseline">
<h3 className="text-xl font-medium tracking-tight font-quicksand">Modern Maharani</h3>
<a className="text-xs font-medium border-b border-emerald-300 hover:border-emerald-900 transition-colors font-quicksand" href="#">Shop Look</a>
</div>
</div>
</div>
</section>

<section className="bg-emerald-50 border-t border-emerald-200 py-20" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex justify-center mb-8 fade-up">
<div className="flex -space-x-4">
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-900 text-white flex items-center justify-center text-xs font-medium font-quicksand">+2k</div>
</div>
</div>
<h2 className="text-2xl md:text-3xl tracking-tight mb-8 fade-up font-quicksand font-medium" style={{}}>"The fabric quality is unmatched.<br/>Simply beautiful craftsmanship."</h2>
<div className="max-w-xl mx-auto bg-white p-1 rounded-full border border-emerald-200 shadow-sm flex items-center justify-between pl-6 fade-up">
<span className="text-emerald-400 text-sm font-quicksand">Join the family</span>
<form className="flex gap-2">
<input className="outline-none text-sm text-emerald-900 placeholder:text-emerald-300 w-40 md:w-60" placeholder="Email address" type="email"/>
<button className="bg-emerald-900 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-emerald-800 transition-colors font-quicksand">SUBSCRIBE</button>
</form>
</div>
</div>
</section>

<footer className="bg-emerald-900 text-emerald-400 py-12 border-t border-emerald-800 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-4 col-span-2 md:col-span-1">
<h3 className="text-white font-semibold tracking-tighter text-lg font-quicksand">VELVET &amp; VOID</h3>
<p className="text-xs leading-relaxed max-w-xs font-quicksand">Celebrating the art of slow fashion with authentic Indian craftsmanship and modern aesthetics.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest font-quicksand">Shop</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Kurtas &amp; Sets</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Sarees</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Dupattas</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest font-quicksand">Support</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Care Instructions</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest font-quicksand">Social</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Pinterest</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#">Facebook</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-600">
<p className="font-quicksand">© 2024 Velvet &amp; Void. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="font-quicksand" href="#">Privacy Policy</a>
<a className="font-quicksand" href="#">Terms of Service</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center hover-trigger" href="https://wa.me/">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16.95 14.4a1.57 1.57 0 0 1-2.22 0l-1.64-1.63a1.57 1.57 0 0 0-2.22 0l-1.64 1.63a1.57 1.57 0 0 1-2.22 0l-1.64-1.63a1.57 1.57 0 0 0-2.22 0"></path><path d="M8 8h.01"></path><path d="M12 8h.01"></path><path d="M16 8h.01"></path></svg>
</a>


    </>
  );
}
