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
      
tailwind.config = {
theme: {
extend: {
colors: {
base: {
50: "#fafafa",
100: "#f4f4f5",
200: "#e4e4e7",
300: "#d4d4d8",
400: "#a1a1aa",
500: "#71717a",
600: "#52525b",
700: "#3f3f46",
800: "#27272a",
900: "#18181b",
950: "#0b0b0d",
},
brand: {
400: "#8AFF75",
500: "#DEFF51",
600: "#8AFF75"
},
},
boxShadow: {
'soft': '0 10px 25px -15px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.03)',
'card': '0 12px 40px -20px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.04)',
},
backdropBlur: {
32: '32px',
},
}
}
}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile nav
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // GSAP
      gsap.registerPlugin(ScrollTrigger);

      // Global grid subtle drift
      const globalGrid = document.getElementById('globalGrid');
      gsap.to(globalGrid, {
        backgroundPosition: '80px 40px',
        ease: 'none',
        duration: 6,
        repeat: -1,
        yoyo: true
      });

      // Cursor highlight follows mouse
      const cursor = document.getElementById('cursorHighlight');
      const qx = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
      const qy = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
      window.addEventListener('mousemove', (e) => {
        qx(e.clientX - 80);
        qy(e.clientY - 80);
      });

      // Expand hero grid lines on load
      const heroLines = document.querySelectorAll('#heroLines > div');
      gsap.set(heroLines, { scaleX: 0, scaleY: 0, opacity: 0.0 });
      gsap.to(heroLines, { opacity: 1, duration: 0.6, stagger: 0.07, ease: "power2.out" });
      gsap.to(heroLines[0], { scaleX: 1, duration: 1.2, ease: "power4.out", delay: 0.05 });
      gsap.to(heroLines[1], { scaleX: 1, duration: 1.2, ease: "power4.out", delay: 0.15 });
      gsap.to(heroLines[2], { scaleY: 1, duration: 1.2, ease: "power4.out", delay: 0.25 });
      gsap.to(heroLines[3], { scaleY: 1, duration: 1.2, ease: "power4.out", delay: 0.35 });

      // Parallax on hero containers
      gsap.utils.toArray('#hero .shadow-card').forEach((card, i) => {
        gsap.to(card, {
          yPercent: i % 2 === 0 ? -6 : -3,
          ease: "none",
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      });

      // About connection lines animate with text
      gsap.utils.toArray('#about .connection-line').forEach((line, idx) => {
        const block = line.parentElement;
        gsap.fromTo(line,
          { opacity: 0, scaleX: line.classList.contains('w-6') ? 0 : 1, scaleY: line.classList.contains('h-6') ? 0 : 1 },
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
        gsap.from(block.querySelector('h3'), {
          y: 16, opacity: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: block, start: 'top 85%', toggleActions: 'play none none reverse' }
        });
        gsap.from(block.querySelector('p'), {
          y: 12, opacity: 0, duration: 0.6, delay: 0.05, ease: "power3.out",
          scrollTrigger: { trigger: block, start: 'top 85%', toggleActions: 'play none none reverse' }
        });
      });

      // Services subtle entrance
      gsap.utils.toArray('#services .shadow-card').forEach((card, i) => {
        gsap.from(card, {
          y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: i * 0.06,
          scrollTrigger: { trigger: card, start: 'top 85%' }
        });
      });

      // Portfolio carousel logic
      const track = document.getElementById('portfolioTrack');
      const slides = Array.from(track.children);
      let index = 0;
      function goto(i) {
        index = (i + slides.length) % slides.length;
        const width = slides[0].getBoundingClientRect().width;
        // On small: full width, on larger: partial width slides -> compute offset by slide width incl padding
        let offset = 0;
        for (let s = 0; s < index; s++) {
          offset += slides[s].getBoundingClientRect().width;
        }
        gsap.to(track, { x: -offset, duration: 0.8, ease: "power3.inOut" });
      }
      document.getElementById('prevProject')?.addEventListener('click', () => goto(index - 1));
      document.getElementById('nextProject')?.addEventListener('click', () => goto(index + 1));
      document.getElementById('prevProjectM')?.addEventListener('click', () => goto(index - 1));
      document.getElementById('nextProjectM')?.addEventListener('click', () => goto(index + 1));
      // Snap to first slide on load
      window.addEventListener('load', () => setTimeout(() => goto(0), 50));
      window.addEventListener('resize', () => goto(index));

      // Grid overlay transitions on portfolio hover
      slides.forEach((slide) => {
        const overlay = slide.querySelector('div[style*="background-image"]');
        slide.addEventListener('mouseenter', () => {
          gsap.to(overlay, { opacity: 0.9, duration: 0.4, ease: "power2.out" });
        });
        slide.addEventListener('mouseleave', () => {
          gsap.to(overlay, { opacity: 0.6, duration: 0.6, ease: "power2.out" });
        });
      });

      // Testimonials subtle connector shimmer
      gsap.to('#testimonials [aria-hidden="true"] .w-full.h-px', {
        opacity: 0.3,
        ease: 'none',
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4
      });

      // Team fade-ins
      gsap.utils.toArray('#team .shadow-card, #team .bg-base-900\\/50').forEach((card, i) => {
        gsap.from(card, {
          y: 18, opacity: 0, duration: 0.7, ease: "power3.out", delay: i * 0.05,
          scrollTrigger: { trigger: card, start: 'top 85%' }
        });
      });

      // Contact morphing grid: focus causes highlight expansion (brand tint)
      document.querySelectorAll('#contact input, #contact textarea').forEach((el) => {
        el.addEventListener('focus', () => {
          gsap.to(el, { boxShadow: '0 0 0 1px rgba(138,255,117,0.4), 0 0 0 10px rgba(138,255,117,0.08)', duration: 0.3, ease: 'power2.out' });
        });
        el.addEventListener('blur', () => {
          gsap.to(el, { boxShadow: '0 0 0 0 rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out' });
        });
      });

      // Section-connecting grid lines (storytelling)
      function connectSections(fromSelector, toSelector, opts = {}) {
        const from = document.querySelector(fromSelector);
        const to = document.querySelector(toSelector);
        if (!from || !to) return;
        const connector = document.createElement('div');
        connector.className = 'fixed z-0 pointer-events-none opacity-0';
        connector.style.left = '0';
        connector.style.top = '0';
        connector.style.width = '100%';
        connector.style.height = '100%';
        connector.style.background = 'transparent';
        document.body.appendChild(connector);

        const lineX = document.createElement('div');
        const lineY = document.createElement('div');
        [lineX, lineY].forEach(l => {
          l.className = 'absolute';
          l.style.background = 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)';
          l.style.height = '1px';
          l.style.width = '0px';
          l.style.opacity = '0';
        });
        lineY.style.background = 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)';
        lineY.style.width = '1px';
        lineY.style.height = '0px';

        connector.appendChild(lineX);
        connector.appendChild(lineY);

        function positionLines() {
          const f = from.getBoundingClientRect();
          const t = to.getBoundingClientRect();
          const startX = f.left + f.width / 2;
          const startY = f.bottom;
          const endX = t.left + t.width / 2;
          const endY = t.top;
          lineX.style.left = Math.min(startX, endX) + 'px';
          lineX.style.top = startY + 'px';
          lineX.style.width = Math.abs(endX - startX) + 'px';
          lineY.style.left = endX + 'px';
          lineY.style.top = Math.min(startY, endY) + 'px';
          lineY.style.height = Math.abs(endY - startY) + 'px';
        }
        positionLines();
        window.addEventListener('resize', positionLines);
        window.addEventListener('scroll', positionLines, { passive: true });

        gsap.timeline({
          scrollTrigger: {
            trigger: to,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.6
          }
        })
        .to(connector, { opacity: 1, duration: 0.2, ease: 'none' }, 0)
        .fromTo(lineX, { scaleX: 0, transformOrigin: 'left center', opacity: 0 }, { scaleX: 1, opacity: 1, duration: 1, ease: 'power2.out' }, 0)
        .fromTo(lineY, { scaleY: 0, transformOrigin: 'center top', opacity: 0 }, { scaleY: 1, opacity: 1, duration: 1, ease: 'power2.out' }, 0.1);
      }

      connectSections('#hero', '#about');
      connectSections('#about', '#services');
      connectSections('#services', '#work');
      connectSections('#work', '#testimonials');
      connectSections('#testimonials', '#team');
      connectSections('#team', '#contact');

      // Smooth scroll for local anchors
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="<iframe src='https://my.spline.design/lumenarc-gGvhk4p82caipWSvJr7aVru0/' frameborder='0' width='100%' height='100%'></iframe>" width="100%"></iframe></div>

<div className="fixed z-[90] pointer-events-none mix-blend-screen" id="cursorHighlight" style={{inset: `auto auto 0 0`, width: `160px`, height: `160px`, transform: `translate(-9999px, -9999px)`, background: `radial-gradient(100px 100px at center, rgba(138,255,117,0.18), rgba(222,255,81,0.06) 35%, rgba(138,255,117,0.02) 60%, transparent 70%)`, filter: `blur(8px)`}}></div>

<div aria-hidden="true" className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-80" id="globalGrid" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)`, backgroundSize: `48px 48px`, backgroundPosition: `0px 0px`}}>
</div>

<div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(1200px 600px at 50% -10%, rgba(138,255,117,0.16), transparent 60%), radial-gradient(800px 400px at 80% 120%, rgba(222,255,81,0.12), transparent 70%), radial-gradient(900px 900px at -20% 20%, rgba(255,255,255,0.05), transparent 60%)`}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-xl border border-white/5 bg-base-900/60 backdrop-blur-xl shadow-soft">
<div className="flex items-center justify-between px-4 sm:px-6 py-3">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-base-800 border border-white/10 shadow-inner">
<span className="text-base-100 text-sm tracking-tight font-semibold">GS</span>
</div>
<span className="text-base-200/90 font-medium tracking-tight">Grids Studios</span>
</div>
<nav className="hidden md:flex items-center gap-7">
<a className="text-base-300 hover:text-base-100 transition-colors" href="#work">Work</a>
<a className="text-base-300 hover:text-base-100 transition-colors" href="#about">About</a>
<a className="text-base-300 hover:text-base-100 transition-colors" href="#services">Services</a>
<a className="text-base-300 hover:text-base-100 transition-colors" href="#team">Team</a>
<a className="text-base-100 bg-base-800/80 border border-white/10 hover:border-brand-500/40 hover:text-brand-500 transition-all rounded-lg px-3 py-1.5" href="#contact">Contact</a>
</nav>
<button className="md:hidden inline-flex items-center gap-2 text-base-200 hover:text-base-100 border border-white/10 hover:border-white/20 rounded-lg px-2.5 py-1.5 transition-colors" id="menuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden hidden px-4 sm:px-6 pb-4" id="mobileNav">
<div className="grid grid-cols-2 gap-2">
<a className="px-3 py-2 rounded-lg bg-base-800/60 border border-white/10 hover:border-brand-500/40 hover:text-brand-500 transition-all" href="#work">Work</a>
<a className="px-3 py-2 rounded-lg bg-base-800/60 border border-white/10 hover:border-brand-500/40 hover:text-brand-500 transition-all" href="#about">About</a>
<a className="px-3 py-2 rounded-lg bg-base-800/60 border border-white/10 hover:border-brand-500/40 hover:text-brand-500 transition-all" href="#services">Services</a>
<a className="px-3 py-2 rounded-lg bg-base-800/60 border border-white/10 hover:border-brand-500/40 hover:text-brand-500 transition-all" href="#team">Team</a>
<a className="col-span-2 px-3 py-2 rounded-lg bg-base-800/60 border border-white/10 hover:border-brand-500/40 hover:text-brand-500 transition-all" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-28" id="hero">

<div aria-hidden="true" className="pointer-events-none absolute inset-0" id="heroLines">

<div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0" style={{transformOrigin: `left`}}></div>
<div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0" style={{transformOrigin: `right`}}></div>

<div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0" style={{transformOrigin: `top`}}></div>
<div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-0" style={{transformOrigin: `bottom`}}></div>
</div>
<div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">

<div className="lg:col-span-7 grid grid-rows-6 gap-4 lg:gap-6">
<div className="row-span-4 relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card group">

<div className="absolute inset-0 opacity-60" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `36px 36px`, backgroundPosition: `0px 0px`}}>
</div>
<div className="relative h-full flex flex-col justify-end p-6 sm:p-10">
<span className="text-base-300 text-sm">Grids Studios</span>
<h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">Legacies Driven</h1>
<p className="mt-3 sm:mt-4 text-base sm:text-lg text-base-300/90 max-w-2xl">We craft stories, brands, and experiences that leave lasting impact.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-600/40 text-base-100 transition-colors" href="#work">
<i className="w-4 h-4" data-lucide="grid"></i>
<span className="font-medium">Explore Our Work</span>
</a>
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-base-800/70 hover:bg-base-700/70 border border-white/10 hover:border-white/20 text-base-200 transition-colors" href="#about">
<i className="w-4 h-4" data-lucide="scroll"></i>
<span className="font-medium">Our Story</span>
</a>
</div>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: `radial-gradient(400px 200px at 80% 20%, rgba(138,255,117,0.15), transparent 60%)`}}></div>
</div>
<div className="row-span-2 grid grid-cols-2 gap-4 lg:gap-6">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card group">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="relative p-5 sm:p-6">
<div className="flex items-center justify-between">
<span className="text-base-300 text-sm">Since</span>
<i className="w-4 h-4 text-brand-600" data-lucide="sparkles"></i>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold text-white">2016</p>
<p className="mt-2 text-sm text-base-400 max-w-[34ch]">Independent studio building timeless, story-led brands.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card group">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="relative p-5 sm:p-6">
<div className="flex items-center justify-between">
<span className="text-base-300 text-sm">Studios</span>
<i className="w-4 h-4 text-brand-600" data-lucide="map"></i>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold text-white">Remote First</p>
<p className="mt-2 text-sm text-base-400 max-w-[34ch]">Designing across timezones with precision and care.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 grid grid-rows-6 gap-4 lg:gap-6">
<div className="row-span-3 relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card group">
<img alt="Studio mood" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0 opacity-40" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `32px 32px`}}></div>
<div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
<div>
<span className="text-base-300 text-sm">Expertise</span>
<h3 className="mt-2 text-2xl tracking-tight font-semibold text-white">Strategy + Design</h3>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="team1" className="w-8 h-8 rounded-full ring-2 ring-base-900/80" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop" />
<img alt="team2" className="w-8 h-8 rounded-full ring-2 ring-base-900/80" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
<img alt="team3" className="w-8 h-8 rounded-full ring-2 ring-base-900/80" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
</div>
<span className="text-base-300 text-sm">24+ collaborators</span>
</div>
</div>
</div>
<div className="row-span-3 relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card group">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `32px 32px`}}></div>
<div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
<div>
<span className="text-base-300 text-sm">Recognition</span>
<h3 className="mt-2 text-2xl tracking-tight font-semibold text-white">Trusted by teams</h3>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-base-800/50 px-3 py-2 text-center text-base-300">Aww</div>
<div className="rounded-lg border border-white/10 bg-base-800/50 px-3 py-2 text-center text-base-300">Beh</div>
<div className="rounded-lg border border-white/10 bg-base-800/50 px-3 py-2 text-center text-base-300">Drb</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2" style={{background: `radial-gradient(400px 200px at 50% 100%, rgba(138,255,117,0.2), transparent 70%)`}}></div>
</div>
</div>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-3 text-base-400">
<div className="h-8 w-4 rounded-full border border-white/20 relative overflow-hidden">
<div className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/60 animate-bounce"></div>
</div>
<span className="text-xs">Scroll</span>
</div>
</section>

<section className="relative py-24 sm:py-28 lg:py-36" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-900/60 px-3 py-1.5 text-xs text-base-300">
<i className="w-3.5 h-3.5" data-lucide="link"></i>
<span>About Us</span>
</div>
<h2 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold text-white">We connect ideas, design, and culture.</h2>
<p className="mt-4 text-base sm:text-lg text-base-300/90 max-w-[60ch]">Our craft merges strategy and storytelling. We work with founders and brands to build clarity, shape identity, and orchestrate experiences that outlast trends.</p>
<div className="mt-8 space-y-6">

<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-px bg-white/30 origin-left opacity-0 connection-line"></div>
<div className="absolute left-0 top-1.5 w-px h-6 bg-white/30 origin-top opacity-0 connection-line"></div>
<h3 className="text-xl tracking-tight font-semibold text-white">Vision</h3>
<p className="mt-2 text-base-300/90 max-w-[60ch]">To craft legacies that inspire trust and accelerate meaningful change.</p>
</div>

<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-px bg-white/30 origin-left opacity-0 connection-line"></div>
<div className="absolute left-0 top-1.5 w-px h-6 bg-white/30 origin-top opacity-0 connection-line"></div>
<h3 className="text-xl tracking-tight font-semibold text-white">Mission</h3>
<p className="mt-2 text-base-300/90 max-w-[60ch]">We partner deeply, design intentionally, and deliver systems that scale—from identity to product, motion, and content.</p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card">
<video autoPlay className="w-full h-[320px] sm:h-[420px] object-cover opacity-80" loop muted playsInline poster="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop">
<source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(600px 300px at 80% 20%, rgba(138,255,117,0.14), transparent 60%)`}}></div>
<div className="absolute inset-0 opacity-50" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `32px 32px`}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-28" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-900/60 px-3 py-1.5 text-xs text-base-300">
<i className="w-3.5 h-3.5" data-lucide="app-window"></i>
<span>Services</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-white">Bento services designed to scale</h2>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card p-5 sm:p-6">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `radial-gradient(200px 200px at 20% 20%, rgba(138,255,117,0.12), transparent 60%)`}}></div>
<div className="absolute inset-0 opacity-50 transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="relative">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Branding</h3>
<i className="w-5 h-5 text-brand-600" data-lucide="asterisk"></i>
</div>
<p className="mt-3 text-base-300/90">We create identities that inspire trust and recognition.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-base-300">
<i className="w-4 h-4" data-lucide="move"></i>
<span>Grid pulse on hover</span>
</div>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-6 border border-brand-600/30 rounded-xl"></div>
<div className="absolute inset-10 border border-brand-600/20 rounded-xl"></div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card p-5 sm:p-6">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `radial-gradient(200px 200px at 80% 20%, rgba(138,255,117,0.12), transparent 60%)`}}></div>
<div className="absolute inset-0 opacity-50 transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="relative">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">UI/UX</h3>
<i className="w-5 h-5 text-brand-600" data-lucide="cursor-click"></i>
</div>
<p className="mt-3 text-base-300/90">Designing seamless, intuitive digital experiences for users worldwide.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-base-300">
<i className="w-4 h-4" data-lucide="scan-line"></i>
<span>Interactive grids</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-6 border border-brand-600/30 rounded-xl"></div>
<div className="absolute inset-10 border border-brand-600/20 rounded-xl"></div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card p-5 sm:p-6">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `radial-gradient(200px 200px at 20% 80%, rgba(138,255,117,0.12), transparent 60%)`}}></div>
<div className="absolute inset-0 opacity-50 transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="relative">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Motion</h3>
<i className="w-5 h-5 text-brand-600" data-lucide="flame"></i>
</div>
<p className="mt-3 text-base-300/90">Dynamic visuals that capture attention and communicate with energy.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-base-300">
<i className="w-4 h-4" data-lucide="waves"></i>
<span>Scroll-triggered flow</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-6 border border-brand-600/30 rounded-xl"></div>
<div className="absolute inset-10 border border-brand-600/20 rounded-xl"></div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card p-5 sm:p-6">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `radial-gradient(200px 200px at 80% 80%, rgba(138,255,117,0.12), transparent 60%)`}}></div>
<div className="absolute inset-0 opacity-50 transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="relative">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Content</h3>
<i className="w-5 h-5 text-brand-600" data-lucide="feather"></i>
</div>
<p className="mt-3 text-base-300/90">Story-driven strategies that amplify voices and engage communities.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-base-300">
<i className="w-4 h-4" data-lucide="rss"></i>
<span>Systems for scale</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-6 border border-brand-600/30 rounded-xl"></div>
<div className="absolute inset-10 border border-brand-600/20 rounded-xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-28" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-900/60 px-3 py-1.5 text-xs text-base-300">
<i className="w-3.5 h-3.5" data-lucide="layout-grid"></i>
<span>Portfolio</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-white">Selected work</h2>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" id="prevProject">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" id="nextProject">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="mt-8 relative">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card">
<div className="flex transition-transform duration-700 ease-out will-change-transform" id="portfolioTrack">

<article className="relative shrink-0 w-full sm:w-[80%] lg:w-[70%] p-4 sm:p-6">
<div className="relative overflow-hidden rounded-xl border border-white/10">
<img alt="Project A" className="w-full h-[260px] sm:h-[360px] object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: `24px 24px`, opacity: `.6`}}></div>

<div className="pointer-events-none absolute inset-3 rounded-lg border border-white/0 group-hover:border-white/20 transition-colors duration-500"></div>
<div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-base-950/70 via-base-900/0 to-transparent">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Atlas Identity System</h3>
<i className="w-5 h-5 text-base-300" data-lucide="arrow-up-right"></i>
</div>
<p className="mt-1 text-base-300/90">Brand, UI/UX</p>
</div>
</div>
</article>
<article className="relative shrink-0 w-full sm:w-[80%] lg:w-[70%] p-4 sm:p-6">
<div className="relative overflow-hidden rounded-xl border border-white/10">
<img alt="Project B" className="w-full h-[260px] sm:h-[360px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: `24px 24px`, opacity: `.6`}}></div>
<div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-base-950/70 via-base-900/0 to-transparent">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Nebula Commerce</h3>
<i className="w-5 h-5 text-base-300" data-lucide="arrow-up-right"></i>
</div>
<p className="mt-1 text-base-300/90">Product, Motion</p>
</div>
</div>
</article>
<article className="relative shrink-0 w-full sm:w-[80%] lg:w-[70%] p-4 sm:p-6">
<div className="relative overflow-hidden rounded-xl border border-white/10">
<img alt="Project C" className="w-full h-[260px] sm:h-[360px] object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: `24px 24px`, opacity: `.6`}}></div>
<div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-base-950/70 via-base-900/0 to-transparent">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Pulse Health</h3>
<i className="w-5 h-5 text-base-300" data-lucide="arrow-up-right"></i>
</div>
<p className="mt-1 text-base-300/90">UX, Content</p>
</div>
</div>
</article>
</div>
</div>

<div className="mt-4 flex sm:hidden items-center justify-center gap-2">
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" id="prevProjectM">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" id="nextProjectM">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card" href="#contact">
<img alt="" className="w-full h-64 object-cover opacity-80" src="https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-3 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/70 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-semibold text-white">Aurora Fintech</h4>
<i className="w-4 h-4 text-base-300" data-lucide="square"></i>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card" href="#contact">
<img alt="" className="w-full h-64 object-cover opacity-80" src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-3 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/70 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-semibold text-white">Kite Travel</h4>
<i className="w-4 h-4 text-base-300" data-lucide="square"></i>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card" href="#contact">
<img alt="" className="w-full h-64 object-cover opacity-80" src="https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-3 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/70 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-semibold text-white">Flux Media</h4>
<i className="w-4 h-4 text-base-300" data-lucide="square"></i>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative py-24 sm:py-28" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-900/60 px-3 py-1.5 text-xs text-base-300">
<i className="w-3.5 h-3.5" data-lucide="quote"></i>
<span>Testimonials</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-white">What clients say</h2>
</div>
</div>
<div className="mt-8 relative">
<div className="grid sm:grid-cols-3 gap-4 lg:gap-6">

<div className="relative rounded-2xl border border-white/10 bg-base-900/40 shadow-card p-6 backdrop-blur-32">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: `26px 26px`}}></div>
<p className="relative text-base text-base-200">“Grids Studios elevated our brand to a global standard.”</p>
<div className="relative mt-4 flex items-center justify-between">
<span className="text-base-400 text-sm">— Client A</span>
<div className="flex items-center gap-2 text-base-400">
<div className="w-8 h-px bg-white/15"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-base-900/40 shadow-card p-6 backdrop-blur-32">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: `26px 26px`}}></div>
<p className="relative text-base text-base-200">“The storytelling in their design left a lasting impression.”</p>
<div className="relative mt-4 flex items-center justify-between">
<span className="text-base-400 text-sm">— Client B</span>
<div className="flex items-center gap-2 text-base-400">
<div className="w-8 h-px bg-white/15"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-base-900/40 shadow-card p-6 backdrop-blur-32">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: `26px 26px`}}></div>
<p className="relative text-base text-base-200">“They blend creativity with professionalism effortlessly.”</p>
<div className="relative mt-4 flex items-center justify-between">
<span className="text-base-400 text-sm">— Client C</span>
<div className="flex items-center gap-2 text-base-400">
<div className="w-8 h-px bg-white/15"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-x-6 -bottom-4 h-12 opacity-40">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-28" id="team">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-900/60 px-3 py-1.5 text-xs text-base-300">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
<span>Team</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-white">People behind the grids</h2>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card">
<img alt="Member 1" className="w-full h-64 object-cover opacity-90" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-4 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-semibold">Ava Lin</p>
<p className="text-sm text-base-300">Graphics Designer</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card">
<img alt="Member 2" className="w-full h-64 object-cover opacity-90" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-4 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-semibold">Mila Hart</p>
<p className="text-sm text-base-300">Product & Brand Designer / Content Creator</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card">
<img alt="Member 3" className="w-full h-64 object-cover opacity-90" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-4 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-semibold">Rin Okada</p>
<p className="text-sm text-base-300">Social Media Manager / Videographer / Content Creator</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/50 backdrop-blur-xl shadow-card">
<img alt="Member 4" className="w-full h-64 object-cover opacity-90" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
<div className="absolute inset-4 rounded-xl border border-white/10 group-hover:border-brand-600/40 transition-colors"></div>
<div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-semibold">Leo Park</p>
<p className="text-sm text-base-300">Videographer</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-28" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 backdrop-blur-xl shadow-card">
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `32px 32px`}}></div>
<div className="relative grid lg:grid-cols-2 gap-6 p-6 sm:p-10">
<div className="flex flex-col justify-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white">Let’s Build Legacies Together.</h2>
<p className="mt-4 text-base-300/90">Tell us about your vision. We’ll map the path and construct the grid that connects every moment.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-600/40 text-base-100 transition-colors" href="mailto:hello@grids.studio">
<i className="w-4 h-4" data-lucide="mail"></i>
<span className="font-medium">hello@grids.studio</span>
</a>
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-base-300 hover:text-brand-600 hover:border-brand-600/40 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<form className="grid grid-cols-1 gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs text-base-400 mb-2">Name</label>
<input className="w-full rounded-lg bg-base-800/70 border border-white/10 focus:border-brand-600/40 outline-none px-3 py-2 text-base-100 placeholder:text-base-500 transition-colors" placeholder="Your name" type="text" />

<div className="pointer-events-none absolute inset-y-2 left-2 w-px bg-white/10"></div>
</div>
<div className="relative">
<label className="block text-xs text-base-400 mb-2">Email</label>
<input className="w-full rounded-lg bg-base-800/70 border border-white/10 focus:border-brand-600/40 outline-none px-3 py-2 text-base-100 placeholder:text-base-500 transition-colors" placeholder="you@company.com" type="email" />
<div className="pointer-events-none absolute inset-x-2 top-2 h-px bg-white/10"></div>
</div>
</div>
<div className="relative">
<label className="block text-xs text-base-400 mb-2">Company</label>
<input className="w-full rounded-lg bg-base-800/70 border border-white/10 focus:border-brand-600/40 outline-none px-3 py-2 text-base-100 placeholder:text-base-500 transition-colors" placeholder="Org / Team" type="text" />
<div className="pointer-events-none absolute inset-y-2 right-2 w-px bg-white/10"></div>
</div>
<div className="relative">
<label className="block text-xs text-base-400 mb-2">Project</label>
<textarea className="w-full rounded-lg bg-base-800/70 border border-white/10 focus:border-brand-600/40 outline-none px-3 py-2 text-base-100 placeholder:text-base-500 transition-colors" placeholder="Tell us briefly about your project..." rows="4"></textarea>
<div className="pointer-events-none absolute inset-x-2 bottom-2 h-px bg-white/10"></div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2 text-base-400 text-sm">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>We’ll get back within 48 hours.</span>
</div>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-600/40 text-base-100 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
<span className="font-medium">Send</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="relative py-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-md bg-base-800 border border-white/10 shadow-inner">
<span className="text-base-100 text-xs tracking-tight font-semibold">GS</span>
</div>
<span className="text-base-400 text-sm">© <span id="year"></span> Grids Studios. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-sm text-base-400">
<a className="hover:text-base-200" href="#work">Work</a>
<a className="hover:text-base-200" href="#about">About</a>
<a className="hover:text-base-200" href="#services">Services</a>
<a className="hover:text-base-200" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
