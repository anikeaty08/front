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
      
document.documentElement.style.fontFamily = "'Geist', sans-serif";



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Initial Load Soft Fade
    window.addEventListener('load', () => {
      document.body.style.opacity = "1";
    });

    document.addEventListener("DOMContentLoaded", () => {
      // Mobile Menu Logic
      const mobileToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');

      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          mobileMenu.classList.toggle('hidden');
        });
      }

      document.addEventListener('click', (e) => {
        if (mobileToggle && mobileMenu && !mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.add('hidden');
        }
      });

      // GSAP Animation System
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "power3.out";
        const dur = 1.2;

        // Nav Scroll Effect
        const navInner = document.getElementById('main-nav-inner');
        gsap.from(navInner, { y: -20, opacity: 0, duration: 1.5, ease, delay: 0.1 });

        ScrollTrigger.create({
          start: "top -50",
          onUpdate: (self) => {
            if (self.direction === 1) {
              navInner.classList.add('shadow-md', 'py-1');
              navInner.classList.replace('bg-white/80', 'bg-white/95');
            } else if (self.direction === -1 && self.scroll() < 50) {
              navInner.classList.remove('shadow-md', 'py-1');
              navInner.classList.replace('bg-white/95', 'bg-white/80');
            }
          }
        });

        // Hero Timeline
        const heroTl = gsap.timeline({ delay: 0.2, defaults: { ease, duration: dur } });
        heroTl.from(".hero-label", { opacity: 0, y: 15 }, 0)
              .from(".hero-headline span.block", { opacity: 0, y: 20, stagger: 0.1 }, 0.1)
              .from(".hero-copy", { opacity: 0, y: 15 }, 0.4)
              .from(".hero-btn-group > *", { opacity: 0, y: 15, stagger: 0.1 }, 0.5)
              .from(".hero-meta > div", { opacity: 0, y: 15, stagger: 0.1 }, 0.7)
              .from(".hero-img-wrap", { scale: 1.05, opacity: 0, duration: 1.8, ease: "power2.out" }, 0.2)
              .from(".hero-plaque", { opacity: 0, y: 20 }, 1.0);

        // Parallax Scrub
        gsap.utils.toArray('[data-anim="parallax"]').forEach(img => {
          gsap.set(img, { scale: 1.1 });
          gsap.to(img, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        });

        // Modular Elements Reveal
        const scrollConfig = (el) => ({ trigger: el, start: "top 85%" });

        // Up
        gsap.utils.toArray('[data-anim="up"]').forEach(el => {
          gsap.from(el, {
            scrollTrigger: scrollConfig(el),
            y: 30, opacity: 0, duration: dur, ease,
            delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0
          });
        });

        // Fade
        gsap.utils.toArray('[data-anim="fade"]').forEach(el => {
          gsap.from(el, {
            scrollTrigger: scrollConfig(el),
            opacity: 0, duration: dur, ease,
            delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0
          });
        });

        // Scale
        gsap.utils.toArray('[data-anim="scale"]').forEach(el => {
          gsap.from(el, {
            scrollTrigger: scrollConfig(el),
            scale: 1.03, opacity: 0, duration: 1.6, ease: "power2.out",
            delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0
          });
        });

        // Stagger
        gsap.utils.toArray('[data-anim="stagger"]').forEach(parent => {
          const children = parent.querySelectorAll('[data-anim-child]');
          if(children.length === 0) return;
          gsap.from(children, {
            scrollTrigger: scrollConfig(parent),
            y: 20, opacity: 0, duration: dur, ease, stagger: 0.1,
            delay: parent.dataset.delay ? parseFloat(parent.dataset.delay) : 0
          });
        });
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
      

<header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6">
<div className="max-w-7xl mx-auto">
<div className="flex sm:px-4 transition-all h-16 border-zinc-200/80 border rounded-full pr-3 pl-3 relative shadow-sm backdrop-blur-md items-center justify-between" id="main-nav-inner">

<a className="flex items-center gap-3 shrink-0 group relative z-20" href="#">
<div className="h-10 w-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-xs text-blue-600 font-normal uppercase tracking-wider group-hover:bg-blue-50 transition-colors">
            OF
          </div>
<div className="flex flex-col leading-none">
<span className="text-xs uppercase text-zinc-500 font-light tracking-widest mb-1">Oxford</span>
<span className="text-sm text-zinc-900 font-normal tracking-tight">Flooring</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-light tracking-widest" href="#showcase">Collections</a>
<a className="text-xs uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-light tracking-widest" href="#philosophy">Philosophy</a>
<a className="text-xs uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-light tracking-widest" href="#methodology">Process</a>
<a className="text-xs uppercase text-zinc-500 hover:text-zinc-900 transition-colors font-light tracking-widest" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-4 shrink-0 relative z-20 pl-4">
<div className="hidden xl:flex items-center gap-2 text-xs uppercase text-zinc-500 font-light tracking-widest">
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Central Florida
          </div>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-zinc-900 text-white hover:bg-blue-600 transition-colors duration-300 text-xs uppercase font-light tracking-widest" href="#contact">
            Get an Estimate
          </a>
</div>

<button aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 transition-colors relative z-20" id="mobile-menu-toggle">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden lg:hidden mt-3 rounded-3xl border border-zinc-200/80 bg-white/95 backdrop-blur-xl shadow-lg p-4 transition-all" id="mobile-menu">
<div className="flex flex-col gap-1">
<a className="px-4 py-3 rounded-2xl text-xs uppercase text-zinc-900 hover:bg-zinc-50 transition-colors font-light tracking-widest" href="#showcase">Collections</a>
<a className="px-4 py-3 rounded-2xl text-xs uppercase text-zinc-900 hover:bg-zinc-50 transition-colors font-light tracking-widest" href="#philosophy">Philosophy</a>
<a className="px-4 py-3 rounded-2xl text-xs uppercase text-zinc-900 hover:bg-zinc-50 transition-colors font-light tracking-widest" href="#methodology">Process</a>
<a className="px-4 py-3 rounded-2xl text-xs uppercase text-zinc-900 hover:bg-zinc-50 transition-colors font-light tracking-widest" href="#contact">Contact</a>
<div className="h-px bg-zinc-200 my-3"></div>
<a className="mt-1 inline-flex items-center justify-center h-12 px-5 rounded-full bg-zinc-900 text-white hover:bg-blue-600 transition-all duration-300 text-xs uppercase font-light tracking-widest" href="#contact">
            Get an Estimate
          </a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-zinc-50 border-zinc-200 border-b relative" id="hero">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-y-0 left-1/2 hidden lg:block w-px bg-zinc-200/60"></div>
</div>
<div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 min-h-screen">

<div className="flex flex-col sm:px-12 lg:px-16 lg:pt-0 lg:pb-0 lg:border-b-0 border-zinc-200 border-b pt-32 pr-6 pb-16 pl-6 relative justify-center">
<div className="mb-12 lg:mb-16 hero-label mt-12">
<div className="inline-flex gap-3 uppercase text-xs font-light text-zinc-500 tracking-widest gap-x-3 gap-y-3 items-center">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Premium Flooring Specialists
          </div>
</div>
<div className="max-w-xl">
<h1 className="text-zinc-900 text-5xl tracking-tight leading-none font-normal hero-headline sm:text-6xl lg:text-6xl">
<span className="block text-neutral-800 mb-2">Precision,</span>
<span className="block mb-2">quality, and</span>
<span className="block text-blue-600">lasting elegance.</span>
</h1>
<p className="lg:text-lg leading-relaxed hero-copy text-base font-light text-zinc-500 max-w-md mt-8">A premier flooring company in Oxford, Florida creating residential spaces that feel elevated and deeply lived-in, where every material and finish is executed with precision from the ground up.</p>
<div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-btn-group relative z-30">
<a className="inline-flex items-center justify-center gap-3 h-12 px-8 rounded-full bg-zinc-900 text-white hover:bg-blue-600 duration-300 text-xs uppercase tracking-widest font-light transition-colors" href="#showcase">
              View Collections
              <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 transition-colors duration-300 text-xs uppercase tracking-widest font-light" href="#contact">
              Start a Project
            </a>
</div>
</div>
<div className="mt-16 pt-8 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-8 hero-meta">
<div>
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">Location</p>
<p className="text-sm text-zinc-900 font-normal">Oxford — The Villages — Ocala</p>
</div>
<div className="">
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">Focus</p>
<p className="text-sm text-zinc-900 font-normal">Hardwood / Luxury Vinyl / Tile</p>
</div>
<div>
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">Established</p>
<p className="text-sm text-zinc-900 font-normal">2014</p>
</div>
</div>
</div>

<div className="group relative min-h-[60vh] lg:min-h-full overflow-hidden hero-img-wrap bg-zinc-200 lg:border-l border-zinc-200">
<img alt="Beautiful custom wood flooring" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 ease-out group-hover:scale-[1.03] group-hover:grayscale-[0%]" data-anim="parallax" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2fc8f9c-fedf-4eaa-8b4b-68c9a11b4238_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80"></div>
<div className="lg:inset-10 transition-all duration-700 group-hover:border-white/40 border-white/20 border absolute top-6 right-6 bottom-6 left-6"></div>
<div className="absolute left-6 right-6 bottom-6 lg:left-10 lg:bottom-10 lg:max-w-sm hero-plaque">
<div className="border border-white/10 bg-white/10 backdrop-blur-md p-6 transition-all duration-500 group-hover:bg-white/20">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs uppercase text-white/70 font-light tracking-widest mb-2">Featured Material</p>
<h3 className="text-2xl tracking-tight text-white font-normal">European White Oak</h3>
<p className="mt-3 text-sm leading-relaxed text-white/80 font-light">
                  Wide plank hardwood tailored for modern coastal and transitional interiors.
                </p>
</div>
<div className="shrink-0 h-10 w-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-zinc-200 bg-white overflow-hidden" id="philosophy">
<div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr]">

<div className="border-b lg:border-b-0 lg:border-r border-zinc-200 px-6 sm:px-12 py-16 lg:py-24">
<div className="lg:sticky lg:top-32" data-anim="stagger">
<div className="inline-flex items-center gap-3 text-xs uppercase text-zinc-500 font-light tracking-widest mb-8" data-anim-child="">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Our Approach
          </div>
<p className="text-sm leading-relaxed text-zinc-500 font-light max-w-xs" data-anim-child="">
            A flooring approach shaped by material integrity, flawless execution, and surfaces designed to last a lifetime.
          </p>
</div>
</div>

<div className="px-6 sm:px-12 py-16 lg:py-24">
<div className="max-w-3xl">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal text-zinc-900 tracking-tight" data-anim="up">We believe in
    crafting
    spaces from the ground up to reveal their true potential.</h2>
<div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-16 items-start pt-12 border-t border-zinc-200">

<div className="space-y-8">
<div className="space-y-6 text-base text-zinc-500 font-light leading-relaxed" data-anim="stagger" data-delay="0.1">
<p className="" data-anim-child="">
          Every custom installation begins with a deep understanding of your vision and the foundation. We install with
          precision, ensuring that flow, functionality, and aesthetic harmony create lasting value.
        </p>
<p className="" data-anim-child="">
          The result is carefully crafted groundwork: spaces that feel deeply personal, exceptionally built, and
          enduringly beautiful.
        </p>
</div>
<div className="pt-6 grid grid-cols-2 gap-6" data-anim="stagger" data-delay="0.2">
<div className="border-t border-zinc-200 pt-4" data-anim-child="">
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">01</p>
<p className="text-sm text-zinc-900 font-normal">Premium Selection</p>
</div>
<div className="border-t border-zinc-200 pt-4" data-anim-child="">
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">02</p>
<p className="text-sm text-zinc-900 font-normal">Expert Craftsmanship</p>
</div>
<div className="border-t border-zinc-200 pt-4" data-anim-child="">
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">03</p>
<p className="text-sm text-zinc-900 font-normal">Seamless Execution</p>
</div>
<div className="border-t border-zinc-200 pt-4" data-anim-child="">
<p className="text-xs uppercase text-zinc-400 font-light tracking-widest mb-2">04</p>
<p className="text-sm text-zinc-900 font-normal">Enduring Quality</p>
</div>
</div>
</div>

<div className="group relative" data-anim="scale">
<div className="relative overflow-hidden bg-zinc-100 aspect-[4/5]">
<img alt="Material palette" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-4 border border-white/20 transition-all duration-500 group-hover:border-white/40">
</div>
<div className="absolute inset-x-4 bottom-4" data-anim="up" data-delay="0.3">
<div className="bg-white/90 backdrop-blur-md p-5 border border-zinc-200 shadow-sm transition-all duration-500 group-hover:bg-white">
<p className="text-xs uppercase text-zinc-500 font-light tracking-widest mb-2">Material Study</p>
<p className="text-xl tracking-tight text-zinc-900 font-normal leading-snug">
              Engineered hardwood, natural stone, and seamless transitions
            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>









    </>
  );
}
