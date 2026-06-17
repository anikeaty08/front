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
colors: {
primary: "#1c1917",
secondary: "#57534e",
background: "#F9F8F6",
surface: "#F9F8F6",
line: "#e7e5e4",
warm: "#F6F4F1",
},
fontFamily: {
sans: ["DM Sans", "sans-serif"],
serif: ["Playfair Display", "serif"],
},
letterSpacing: {
tightest: "-0.03em",
widest: "0.15em",
}
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // If user prefers reduced motion, CSS media query overrides opacity/transform. 
        // We exit JS entirely to save processing.
        if (prefersReducedMotion) return;

        // 1. HERO ANIMATION TIMELINE
        const tl = gsap.timeline();
        
        tl.to('[data-anim="hero-eyebrow"]', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15 })
          .to('[data-anim="hero-line"]', { y: '0%', opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out' }, "-=0.2")
          .to('[data-anim="hero-p"]', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.4")
          .to('[data-anim="hero-search"]', { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' }, "-=0.6")
          .to('[data-anim="hero-search-item"]', { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out' }, "-=0.7");

        // Subtle Hero BG Parallax
        gsap.to(".hero-bg-img", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: "header",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        // 2. SCROLL REVEALS (Once: true)
        
        // Standard Fade Up
        gsap.utils.toArray('.reveal-fade, [data-anim="fade-delayed"]').forEach(el => {
          const delayAmt = el.hasAttribute('data-anim') && el.getAttribute('data-anim') === 'fade-delayed' ? 0.2 : 0;
          gsap.to(el, {
            y: 0, opacity: 1, duration: 0.8, delay: delayAmt, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: "top 85%", once: true }
          });
        });

        // Stagger Group Children
        gsap.utils.toArray('[data-anim="stagger"]').forEach(container => {
          gsap.to(container.children, {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: container, start: "top 85%", once: true }
          });
        });

        // Line-by-Line Group Masks
        gsap.utils.toArray('.reveal-line-group').forEach(group => {
          const lines = group.querySelectorAll('.reveal-line');
          gsap.to(lines, {
            y: '0%', opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: group, start: "top 85%", once: true }
          });
        });

        // 3. PARALLAX & SCRUB (Continuous)

        // Cards/Images Scale Shrink
        gsap.utils.toArray('[data-anim="scale-scrub"]').forEach(inner => {
          gsap.fromTo(inner, 
            { scale: 1.04 }, 
            { scale: 1, ease: 'none',
              scrollTrigger: { trigger: inner.parentElement, start: "top bottom", end: "bottom top", scrub: true }
            }
          );
        });

        // Editorial Background Depth Scale
        gsap.utils.toArray('[data-anim="scale-scrub-editorial"]').forEach(img => {
          gsap.fromTo(img, 
            { scale: 1.04 }, 
            { scale: 1.08, ease: 'none',
              scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
            }
          );
        });

        // Subtle Inner Image Y Parallax
        gsap.utils.toArray('[data-anim="parallax-y"]').forEach(img => {
          gsap.fromTo(img, 
            { yPercent: -8 }, 
            { yPercent: 8, ease: 'none',
              scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
            }
          );
        });

        // 4. NAVBAR MICRO TRANSITION
        const nav = document.getElementById("navbar");
        ScrollTrigger.create({
          start: "top -50",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(nav, { backgroundColor: "rgba(255, 255, 255, 0.85)", boxShadow: "0 6px 24px rgba(0,0,0,0.03)", duration: 0.35, ease: "power3.out", overwrite: "auto" });
            } else {
              gsap.to(nav, { backgroundColor: "rgba(255, 255, 255, 0.60)", boxShadow: "none", duration: 0.35, ease: "power3.out", overwrite: "auto" });
            }
          }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-b border-black/5" id="navbar">
<div className="w-full max-w-7xl mx-auto px-6 md:px-8 h-auto lg:h-[72px] flex flex-col lg:flex-row items-center justify-between py-3 lg:py-0 gap-3 lg:gap-0">
<div className="flex lg:justify-start gap-6 lg:gap-12 lg:w-1/3 order-2 lg:order-1 flex-wrap w-full gap-x-6 gap-y-3 items-center justify-center">
<a className="uppercase text-primary/80 hover:text-primary transition-colors duration-300 text-xs font-medium tracking-widest" href="/residences">
          Residences
        </a>
<a className="uppercase text-primary/80 hover:text-primary transition-colors duration-300 text-xs font-medium tracking-widest" href="/neighbourhoods">
          Neighbourhoods
        </a>
</div>
<div className="flex lg:w-1/3 order-1 lg:order-2 w-full justify-center">
<a className="md:text-2xl text-primary text-xl font-medium tracking-tight font-serif" href="/home">
          MERIDIAN
        </a>
</div>
<div className="flex items-center justify-center lg:justify-end gap-6 lg:gap-12 w-full lg:w-1/3 order-3">
<a className="uppercase text-primary/80 hover:text-primary transition-colors duration-300 text-xs font-medium tracking-widest" href="/lifestyle">
          Lifestyle
        </a>
<a className="uppercase text-primary/80 hover:text-primary transition-colors duration-300 whitespace-nowrap text-xs font-medium tracking-widest" href="/studio">
          Studio
        </a>
<a className="border-primary/30 uppercase hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap text-xs font-medium tracking-widest border rounded-[2px] pt-2 pr-5 pb-2 pl-5" href="/viewing">Private Viewing</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pt-28 lg:pt-0 pb-24 lg:pb-32 px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Architectural facade" className="w-full h-full object-cover hero-bg-img will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae62edef-02fe-425f-a021-e3e48ad379ea_3840w.jpg"/>
<div className="absolute inset-0 bg-black/15"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto">
<div className="max-w-4xl">
<span className="block text-[10px] uppercase tracking-widest text-white/80 font-sans mb-8 lg:mb-6" data-anim="hero-eyebrow">
            ARCHITECTURAL LIVING SYSTEM
          </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif tracking-tight leading-[1.08] mb-6">
<span className="line-mask"><span className="reveal-line" data-anim="hero-line">Architecture</span></span>
<span className="line-mask"><span className="reveal-line" data-anim="hero-line">Refined.</span></span>
</h1>
<p className="md:text-base text-sm font-light text-white/90 font-sans max-w-lg mb-12" data-anim="hero-p">
            A curated collection of residences shaped by light, proportion, and
            quiet intention.
          </p>

<div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2px] px-8 py-6 flex flex-col md:flex-row items-end gap-6 max-w-5xl origin-center" data-anim="hero-search">
<div className="w-full md:flex-1 group cursor-pointer" data-anim="hero-search-item">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Neighbourhood
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">
                  Neighbourhoods
                </span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer" data-anim="hero-search-item">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Bedrooms
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">2 Bedrooms</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer" data-anim="hero-search-item">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Availability
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">Immediate</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto mt-6 md:mt-0 flex flex-col items-center md:w-64" data-anim="hero-search-item">
<span className="block text-white/60 text-[10px] uppercase tracking-widest mb-3">
                NOW LEASING • LIMITED AVAILABILITY
              </span>
<a className="inline-block w-full text-center text-[10px] uppercase tracking-widest bg-white text-primary px-6 py-3 rounded-[2px] font-medium hover:bg-primary hover:text-white transition-all duration-300" href="/residences">
                View Residences
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-primary reveal-fade">
<span className="block text-[10px] uppercase tracking-widest mt-4">
            01 — Philosophy
          </span>
</div>
<div className="w-full md:w-3/4">
<h2 className="md:text-5xl leading-tight text-primary text-3xl font-light tracking-tight font-serif max-w-3xl mb-10 reveal-line-group">
<span className="line-mask"><span className="reveal-line">We design spaces for clarity,</span></span>
<span className="line-mask"><span className="reveal-line">proportion, and quiet permanence.</span></span>
</h2>
<div className="border-t border-line py-6 mb-10 flex flex-col md:flex-row gap-4 md:gap-12 md:items-center" data-anim="stagger">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
              Light over noise
            </span>
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
              Materials with intention
            </span>
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
              Silence as a feature
            </span>
</div>
<div className="w-full aspect-[21/9] overflow-hidden rounded-[2px] border border-line mb-14 img-zoom-container group reveal-fade">

<div className="w-full h-full parallax-inner" data-anim="scale-scrub">
<img alt="Architectural Detail" className="img-zoom object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34912fd8-c9c7-4c5c-8731-c9476acb42f8_1600w.jpg"/>
</div>
</div>
<div className="max-w-xl reveal-fade">
<p className="text-secondary leading-relaxed font-light mb-8">
              Meridian is a study in restraint—chosen for light, proportion, and
              material honesty. Spaces that feel calm on arrival, and quieter
              over time.
            </p>
<a className="inline-block text-[10px] uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium" href="/lifestyle">
              Read the Meridian Journal
            </a>
</div>
</div>
</div>
</section>
<div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 reveal-fade">
<div className="w-full border-t border-line relative flex justify-center">
<span className="absolute top-0 -translate-y-1/2 bg-background px-4 text-[10px] uppercase tracking-widest text-secondary/60">
          Next — Neighbourhood
        </span>
</div>
</div>

<section className="w-full relative pt-20 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 relative">
<div className="aspect-[16/9] w-full overflow-hidden relative border border-line shadow-[0_18px_60px_rgba(0,0,0,0.06)] group reveal-fade">
<img alt="Neighbourhood" className="w-full h-full object-cover transform transition duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-105 group-hover:contrast-105 group-hover:saturate-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a915ee86-bb85-4eda-b007-ace7c27582c2_1600w.jpg"/>
</div>
<div className="absolute bottom-4 left-4 z-10 bg-white/60 backdrop-blur-sm border border-black/10 px-4 py-2 rounded-[2px] shadow-sm" data-anim="fade-delayed">
<span className="text-[10px] uppercase tracking-widest text-primary font-medium">
              Waterfront Quarter
            </span>
</div>
</div>
<div className="lg:col-span-5 lg:pl-16 lg:-translate-y-4 max-w-full lg:max-w-md">
<span className="block text-[10px] uppercase tracking-widest mb-6 text-secondary reveal-fade">
            02 — Neighbourhood
          </span>
<h3 className="font-serif text-3xl md:text-4xl mb-6 font-light leading-tight tracking-tight reveal-fade">
            A district defined by walkability.
          </h3>
<p className="text-secondary leading-relaxed font-light mb-8 reveal-fade">
            Set between water and culture, Meridian situates daily life within
            walking distance of markets, galleries, and green space — a rhythm
            shaped by proximity, not pace.
          </p>

<div className="border-t border-line pt-6 mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4" data-anim="stagger">
<div className="flex items-baseline gap-2 group cursor-default">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">06 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light group-hover:text-secondary group-hover:underline decoration-line underline-offset-4 transition-all">Farmers’ Market Hall</span>
</div>
<div className="flex items-baseline gap-2 group cursor-default">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">08 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light group-hover:text-secondary group-hover:underline decoration-line underline-offset-4 transition-all">Waterfront Esplanade</span>
</div>
<div className="flex items-baseline gap-2 group cursor-default">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">10 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light group-hover:text-secondary group-hover:underline decoration-line underline-offset-4 transition-all">Cultural Promenade</span>
</div>
<div className="flex items-baseline gap-2 group cursor-default">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">12 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light group-hover:text-secondary group-hover:underline decoration-line underline-offset-4 transition-all">Contemporary Gallery Row</span>
</div>
</div>
<div className="border-t border-line mt-10 pt-6 mb-10 text-center lg:text-left reveal-fade">
<span className="text-xs uppercase tracking-widest text-secondary/60 font-light">
              Quiet mornings • Waterfront light • Gallery nights
            </span>
</div>
<div className="flex flex-col items-start gap-4 reveal-fade">
<a className="text-[10px] uppercase border-primary/60 inline-block hover:bg-primary hover:text-white transition-colors duration-300 tracking-widest border rounded-[2px] pt-3 pr-8 pb-3 pl-8" href="/neighbourhoods">
              Explore Neighbourhoods
            </a>
<a className="text-[10px] uppercase tracking-widest text-secondary/70 border-b border-secondary/30 hover:border-secondary hover:text-secondary transition-colors pb-0.5" href="/neighbourhoods">
              View transit + commute times
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-primary reveal-fade">
<span className="block text-[10px] uppercase tracking-widest mt-4">
            03 — Amenities
          </span>
</div>
<div className="w-full md:w-3/4">
<div className="mb-12 reveal-fade">
<h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-6 leading-tight tracking-tight">
              Designed for the hours between.
            </h2>
<p className="text-secondary font-light text-sm md:text-base max-w-xl leading-relaxed">
              Resident-only spaces curated for stillness, wellness, and
              effortless living. A landscape of amenities that extends your home
              beyond its walls.
            </p>
</div>

<div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-line/60 py-12 md:py-16">
<div className="w-full lg:col-span-5 reveal-fade">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Lobby Detail" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 parallax-inner" data-anim="parallax-y" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/111ca588-31c4-44cd-8724-eacc4cbcda19_800w.jpg"/>
</div>
</div>
<div className="w-full lg:col-span-7 lg:pl-8">
<span className="block text-[10px] uppercase text-secondary/60 tracking-widest mb-8 reveal-fade">
                Living, Considered
              </span>
<ul className="space-y-8" data-anim="stagger">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="text-primary text-xl tracking-tight font-serif">Concierge + Secure Arrival</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">24/7 Service</span>
</div>
<span className="block text-secondary border-line/40 group-hover:border-primary/20 transition-colors text-xs font-light border-b pb-4">
                    24/7 presence + parcel room
                  </span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary tracking-tight">Turnkey Residences</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Furnished</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">
                    Integrated appliances + furnished options
                  </span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary tracking-tight">EV Ready Parking</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Underground</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">
                    Secure underground facility
                  </span>
</li>
</ul>
<div className="mt-12 reveal-fade">
<a className="inline-block text-[10px] uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium" href="/residences">
                  Explore Amenities
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 bg-[#F6F2EC] px-6 md:px-12 border-y border-line overflow-hidden">
<div className="max-w-[1400px] mx-auto">

<div className="mb-16 md:mb-24 reveal-fade">
<span className="block text-[10px] uppercase tracking-widest text-primary/60 mb-6 font-medium">
            04 — Featured Residences
          </span>
<h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-8 tracking-tight">
            Residences Defined by
            <br className="hidden md:block"/>
            Light and Proportion.
          </h2>
<p className="text-secondary font-light max-w-3xl text-lg leading-relaxed">
            Each residence is a study in proportion and light. Curated
            materials, intelligent layouts, and quiet confidence define the
            Meridian collection.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20" data-anim="stagger">

<a className="group cursor-pointer flex flex-col h-full hover:-translate-y-0.5 transition-all duration-300 block" href="/residences">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<div className="w-full h-full parallax-inner" data-anim="scale-scrub">
<img alt="The Arcott" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.03] group-hover:brightness-90 duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/056a7e6c-374e-4920-a376-7043eb2dcc00_1600w.jpg"/>
</div>
<span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </span>
</div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">The Arcott</h4>
<span className="font-sans text-sm font-medium text-primary">$3,450<span className="text-xs font-light text-secondary ml-1">/mo</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>950 SQ FT</span><span className="text-secondary/30">•</span><span>2 Bed</span><span className="text-secondary/30">•</span><span>2 Bath</span>
</div>
<p className="text-[10px] text-secondary/80 font-light border-t border-line/40 pt-3">South-facing with floor-to-ceiling glazing.</p>
</a>

<a className="group cursor-pointer flex flex-col h-full hover:-translate-y-0.5 transition-all duration-300 md:translate-y-5 block" href="/residences">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<div className="w-full h-full parallax-inner" data-anim="scale-scrub">
<img alt="Vantage Point" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.03] group-hover:brightness-90 duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c22291f6-a511-4d6f-9f6c-97caf79cf402_1600w.jpg"/>
</div>
<span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </span>
</div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">Vantage Point</h4>
<span className="font-sans text-sm font-medium text-primary">$2,800<span className="text-xs font-light text-secondary ml-1">/mo</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>780 SQ FT</span><span className="text-secondary/30">•</span><span>1 Bed</span><span className="text-secondary/30">•</span><span>1 Bath</span>
</div>
<p className="text-[10px] text-secondary/80 font-light border-t border-line/40 pt-3">Open-concept loft with exposed concrete.</p>
</a>

<a className="group cursor-pointer flex flex-col h-full hover:-translate-y-0.5 transition-all duration-300 block" href="/residences">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<div className="w-full h-full parallax-inner" data-anim="scale-scrub">
<img alt="The Elysian" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.03] group-hover:brightness-90 duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9fef1af-7076-41f8-94ac-87cf3a20563d_1600w.jpg"/>
</div>
<span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </span>
</div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">The Elysian</h4>
<span className="font-sans text-sm font-medium text-primary">$5,200<span className="text-xs font-light text-secondary ml-1">/mo</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>1,600 SQ FT</span><span className="text-secondary/30">•</span><span>2 Bed</span><span className="text-secondary/30">•</span><span>2.5 Bath</span>
</div>
<p className="text-[10px] text-secondary/80 font-light border-t border-line/40 pt-3">Corner unit with dual-aspect views.</p>
</a>
</div>

<div className="flex justify-center mt-20 reveal-fade">
<a className="inline-block text-[10px] uppercase tracking-widest border border-primary/40 px-10 py-4 rounded-[2px] hover:bg-primary hover:text-white transition-all duration-300 text-primary font-medium" href="/residences">
            Browse All Available Residences
          </a>
</div>
</div>
</section>

<section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-background">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
<div className="md:col-span-4 reveal-fade">
<span className="block text-[10px] uppercase tracking-widest text-secondary/60">
            05 — Resident Perspective
          </span>
<h2 className="font-serif text-2xl md:text-3xl font-light text-primary leading-tight mt-6 tracking-tight">
            A quiet confidence, lived daily.
          </h2>
<p className="md:text-base text-secondary leading-relaxed text-sm font-light max-w-sm mt-5">A few reflections from residents who chose light, proportion, and calm — and found it.</p>
</div>
<div className="md:col-span-8 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full" data-anim="stagger">
<div className="bg-white border border-line rounded-[2px] px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
<p className="md:text-xl text-primary leading-relaxed text-lg font-light font-serif">“The light changes through the day. The space changes with it. It’s the first home I’ve lived in that feels deliberately quiet.”</p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-secondary/70">— Amelia Laurent, Resident</span>
</div>
<div className="bg-white border border-line rounded-[2px] px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
<p className="md:text-xl text-primary leading-relaxed text-lg font-light font-serif">“Everything is restrained — materials, proportions, even sound. It’s calming the moment you arrive.”</p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-secondary/70">— Daniel R., Resident</span>
</div>
<div className="bg-white border border-line rounded-[2px] px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:col-span-1">
<p className="md:text-xl text-primary leading-relaxed text-lg font-light font-serif">“I didn’t expect a residence to feel this considered. The details are subtle — and you notice them daily.”</p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-secondary/70">— Sophie M., Resident</span>
</div>
</div>
<div className="mt-10 md:mt-12 reveal-fade">
<a className="inline-block text-[10px] uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium text-primary" href="/lifestyle">
              Read more in the Journal
            </a>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-primary editorial-container">
<img alt="Exterior building facade" className="w-full h-full object-cover editorial-img origin-center will-change-transform" data-anim="scale-scrub-editorial" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e42bb99a-1498-4503-88a2-da4046b8f2bd_3840w.jpg"/>

<div className="absolute bottom-36 md:bottom-52 left-6 right-6 md:left-16 md:right-auto text-center md:text-left z-30 max-w-lg reveal-fade">
<span className="block text-[10px] uppercase font-medium text-white/70 tracking-widest mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">Meridian — Architectural Living</span>
<h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-[1.15] tracking-tight drop-shadow-[0_8px_26px_rgba(0,0,0,0.45)]">
          Where city and stillness meet.
        </h2>
</div>
</section>

<section className="relative -mt-24 md:-mt-40 bg-[#EDE7DE] px-6 pt-24 md:pt-28 pb-28 md:pb-36 z-20 overflow-hidden">
<div className="max-w-xl mx-auto text-center" data-anim="stagger">
<p className="text-[10px] uppercase tracking-widest text-primary/60 mb-6">Now leasing — private viewings by appointment</p>
<h2 className="md:text-5xl text-primary text-4xl font-light tracking-tight font-serif mb-6">Begin at Meridian.</h2>
<p className="md:text-base text-primary/70 leading-relaxed text-sm font-light mb-10">Architecture shaped by proportion, material honesty, and calm permanence.</p>
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-[10px] uppercase tracking-widest rounded-[2px] hover:bg-primary/90 transition-all duration-300" href="/inquire">
            Schedule a Viewing
          </a>
<a className="inline-block text-primary/70 border-primary/30 hover:text-primary hover:border-primary/60 transition-all duration-300 text-[10px] uppercase tracking-widest border-b mt-6 pb-1" href="/residences">View Floorplans</a>
</div>
<p className="text-primary/50 text-xs font-light mt-10">Personal response within 24 hours.</p>
</div>
</section>

<footer className="border-line md:px-12 md:pt-14 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-t pt-14 pr-6 pb-14 pl-6">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
<div className="flex flex-col items-start">
<h3 className="font-serif text-3xl font-medium tracking-tight text-primary mb-8">
              MERIDIAN
            </h3>
<p className="text-secondary text-sm font-light leading-relaxed max-w-[200px]">
              Architectural residences shaped by light, proportion, and quiet permanence.
            </p>
</div>
<div className="flex flex-col items-start">
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-8">
              Explore
            </span>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="/residences">
                  Residences
                </a>
</li>
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="/neighbourhoods">
                  Neighbourhoods
                </a>
</li>
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="/inquire">
                  Schedule a Viewing
                </a>
</li>
</ul>
</div>
<div className="flex flex-col items-start">
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-8">
              Visit
            </span>
<div className="mb-8">
<p className="text-sm font-light text-primary leading-relaxed">
                Meridian
                <br/>
                145 Harbour Crescent
                <br/>
                Waterfront District
                <br/>
                Toronto, ON M5V 3L9
                <br/>
                Canada
              </p>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-2">
                Leasing Office
              </span>
<p className="text-sm font-light text-secondary leading-relaxed">
                Mon–Sat — 10:00–18:00
                <br/>
                By appointment Sunday
              </p>
</div>
</div>
<div className="flex flex-col items-start">
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-8">
              Inquiries
            </span>
<p className="text-sm font-light text-secondary mb-6 leading-relaxed max-w-[240px]">
              Personal response within 24 hours.
            </p>
<form className="w-full relative group mb-8" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent border-b border-line py-2 text-sm font-light text-primary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors duration-300 pr-12" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300 border-b border-transparent hover:border-secondary pb-0.5" type="submit">
                Send
              </button>
</form>
<div className="flex flex-col gap-1">
<a className="text-sm font-light text-primary hover:text-secondary transition-colors duration-300" href="mailto:[EMAIL]">
                leasing@meridianliving.com
              </a>
<a className="text-sm font-light text-secondary hover:text-primary transition-colors duration-300" href="tel:[PHONE]">
                +1 (416) 555-0187
              </a>
</div>
</div>
</div>
<div className="border-t border-line mt-20 pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="flex flex-col gap-3">
<span className="text-[10px] uppercase tracking-widest text-secondary/40">
              Built with intention.
            </span>
<p className="text-[10px] uppercase tracking-widest text-secondary/60">
              © Meridian. All rights reserved.
            </p>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-secondary/60">
<a className="hover:text-primary transition-colors duration-300" href="#">
                Privacy
              </a>
<a className="hover:text-primary transition-colors duration-300" href="#">
                Terms
              </a>
</div>
<div className="flex gap-5 text-secondary/50">
<a className="hover:text-primary transition-colors duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
<a className="hover:text-primary transition-colors duration-300" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
