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
      
      // Initialize Lucide icons with default stroke width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5, class: 'w-5 h-5' }
        });
      });

      // Smooth scrolling for internal links
      function smoothLinks(scope = document) {
        scope.querySelectorAll('a[href^="#"]').forEach(a => {
          a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const y = target.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top: y, behavior: 'smooth' });
            // Close mobile drawer if open
            if (drawerOpen) toggleDrawer(false);
          });
        });
      }
      smoothLinks();

      // Header hide on scroll + shadow after threshold
      const header = document.getElementById('site-header');
      let lastY = window.scrollY;
      let ticking = false;
      function onScroll() {
        const y = window.scrollY;
        const goingDown = y > lastY;
        if (y > 8) {
          header.classList.add('shadow-[0_8px_30px_rgba(0,0,0,0.25)]');
        } else {
          header.classList.remove('shadow-[0_8px_30px_rgba(0,0,0,0.25)]');
        }
        if (y > 120 && goingDown) {
          header.classList.add('-translate-y-full');
        } else {
          header.classList.remove('-translate-y-full');
        }
        lastY = y;
        updateActiveLinks();
      }
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            onScroll();
            ticking = false;
          });
          ticking = true;
        }
      });

      // Intersection animations (fade/slide in)
      const animateEls = document.querySelectorAll(
        'h1, h2, h3, h4, p, img, section a, .rounded-xl, .ring-1'
      );
      animateEls.forEach(el => {
        // Only add if not already fully visible (hero boot)
        if (!el.classList.contains('opacity-0')) return;
      });
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0','translate-y-3','-translate-y-3');
            entry.target.classList.add('opacity-100','translate-y-0');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
      document.querySelectorAll('.opacity-0').forEach(el => io.observe(el));

      // Boost initial hero elements
      window.addEventListener('load', () => {
        document.querySelectorAll('#home .opacity-0').forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove('opacity-0','-translate-y-3');
            el.classList.add('opacity-100','translate-y-0');
          }, 80 + i * 80);
        });
      });

      // Mobile drawer
      const drawer = document.getElementById('mobile-drawer');
      const btnOpen = document.getElementById('btn-open');
      const btnClose = document.getElementById('btn-close');
      let drawerOpen = false;

      function trapFocus(container, enable) {
        if (!enable) return;
        const focusable = container.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        container.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault(); first.focus();
            }
          }
          if (e.key === 'Escape') toggleDrawer(false);
        });
      }

      function toggleDrawer(open) {
        drawerOpen = open ?? !drawerOpen;
        const panel = drawer.children[1];
        const overlay = drawer.children[0];
        if (drawerOpen) {
          drawer.classList.remove('invisible','opacity-0','pointer-events-none');
          // animate in
          requestAnimationFrame(() => {
            panel.classList.remove('translate-y-2','scale-[0.98]','opacity-0');
            overlay.classList.remove('opacity-0');
          });
          document.body.classList.add('overflow-hidden');
          btnOpen.setAttribute('aria-expanded','true');
          // stagger links
          drawer.querySelectorAll('[data-mobile-link], [href="#contact"].inline-flex').forEach((el, idx) => {
            setTimeout(() => {
              el.classList.remove('opacity-0','translate-y-2');
            }, 80 + idx * 40);
          });
          trapFocus(drawer, true);
        } else {
          // animate out
          panel.classList.add('translate-y-2','scale-[0.98]','opacity-0');
          drawer.querySelectorAll('[data-mobile-link], [href="#contact"].inline-flex').forEach((el) => {
            el.classList.add('opacity-0','translate-y-2');
          });
          document.body.classList.remove('overflow-hidden');
          btnOpen.setAttribute('aria-expanded','false');
          setTimeout(() => {
            drawer.classList.add('invisible','opacity-0','pointer-events-none');
          }, 220);
        }
      }
      btnOpen.addEventListener('click', () => toggleDrawer(true));
      btnClose.addEventListener('click', () => toggleDrawer(false));
      drawer.addEventListener('click', (e) => {
        if (e.target === drawer || e.target === drawer.firstElementChild) toggleDrawer(false);
      });

      // Scrollspy for active nav links
      const sections = ['home','about','services','work','testimonials','contact']
        .map(id => ({ id, el: document.getElementById(id) }))
        .filter(s => s.el);

      function updateActiveLinks() {
        const y = window.scrollY + 84; // header offset
        let current = sections[0]?.id;
        for (const s of sections) {
          if (y >= s.el.offsetTop) current = s.id;
        }
        document.querySelectorAll('[data-navlink]').forEach(a => {
          const active = a.getAttribute('data-navlink') === current;
          a.classList.toggle('text-teal-400', active);
          const underline = a.querySelector('span');
          if (underline) {
            underline.style.width = active ? '100%' : '0px';
            underline.style.left = active ? '0' : '50%';
          }
        });
        document.querySelectorAll('[data-mobile-link]').forEach(a => {
          const active = a.getAttribute('data-mobile-link') === current;
          a.classList.toggle('bg-white/5', active);
        });
      }
      updateActiveLinks();

      // Re-init icons for dynamically revealed nodes (after drawer mounts)
      const reicon = () => lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      document.addEventListener('readystatechange', reicon);
      document.addEventListener('visibilitychange', reicon);
    
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO" width="100%"></iframe></div>

<header className="fixed top-0 inset-x-0 z-50 transition-transform duration-500 ease-out border-b border-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-black/65" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a aria-label="Prism Studio home" className="group flex items-center gap-2" href="#home">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-teal-500/20 to-teal-300/10 ring-1 ring-white/10">
<svg className="lucide lucide-diamond w-[20px] h-[20px] w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(94, 234, 212)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</span>
<span className="text-lg sm:text-xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Prism Studio</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="group relative inline-flex items-center text-sm font-medium transition-colors text-gray-300 hover:text-teal-400 text-teal-400" data-navlink="home" href="#home">
              Home
              <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" style={{width: '100%', left: '0px'}}></span>
</a>
<a className="group relative inline-flex items-center text-sm font-medium transition-colors text-gray-300 hover:text-teal-400" data-navlink="about" href="#about">
              About
              <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" style={{width: '0px', left: '50%'}}></span>
</a>
<a className="group relative inline-flex items-center text-sm font-medium transition-colors text-gray-300 hover:text-teal-400" data-navlink="services" href="#services">
              Services
              <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" style={{width: '0px', left: '50%'}}></span>
</a>
<a className="group relative inline-flex items-center text-sm font-medium transition-colors text-gray-300 hover:text-teal-400" data-navlink="work" href="#work">
              Work
              <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" style={{width: '0px', left: '50%'}}></span>
</a>
<a className="group relative inline-flex items-center text-sm font-medium transition-colors text-gray-300 hover:text-teal-400" data-navlink="testimonials" href="#testimonials">
              Testimonials
              <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" style={{width: '0px', left: '50%'}}></span>
</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.03] bg-gray-100 text-black hover:bg-gray-200" href="#contact">
              Let's Talk
              <svg className="lucide lucide-arrow-right w-4 h-4 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-teal-400 hover:bg-gray-900/60 transition-colors" id="btn-open">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</header>

<div className="fixed inset-0 z-[60] invisible transition-all duration-300 ease-out pointer-events-none opacity-100 translate-y-0" id="mobile-drawer">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="absolute inset-x-3 top-3 bottom-3 rounded-2xl border border-white/10 bg-neutral-950/95 shadow-2xl overflow-hidden transform translate-y-2 scale-[0.98] transition-all duration-300 ease-out opacity-100 translate-y-0">

<div className="flex items-center justify-between px-5 h-14 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-teal-500/20 to-teal-300/10 ring-1 ring-white/10">
<svg className="lucide lucide-diamond text-teal-300 w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</span>
<span className="text-base font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Prism Studio</span>
</div>
<button aria-label="Close menu" className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-teal-400 hover:bg-gray-900/60 transition-colors" id="btn-close">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="h-full overflow-y-auto">
<div className="px-5 py-6 flex flex-col gap-2">
<a className="group flex items-center justify-between rounded-lg px-4 py-3 text-gray-200 hover:bg-white/5 transition-colors translate-y-2 bg-white/5 opacity-100 translate-y-0" data-mobile-link="home" href="#home" style={{transition: 'all .5s cubic-bezier(.25,.46,.45,.94) .05s'}}>
<span className="text-lg font-medium">Home</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-lg px-4 py-3 text-gray-200 hover:bg-white/5 transition-colors translate-y-2 opacity-100 translate-y-0" data-mobile-link="about" href="#about" style={{transition: 'all .5s cubic-bezier(.25,.46,.45,.94) .1s'}}>
<span className="text-lg font-medium">About</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-lg px-4 py-3 text-gray-200 hover:bg-white/5 transition-colors translate-y-2 opacity-100 translate-y-0" data-mobile-link="services" href="#services" style={{transition: 'all .5s cubic-bezier(.25,.46,.45,.94) .15s'}}>
<span className="text-lg font-medium">Services</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-lg px-4 py-3 text-gray-200 hover:bg-white/5 transition-colors translate-y-2 opacity-100 translate-y-0" data-mobile-link="work" href="#work" style={{transition: 'all .5s cubic-bezier(.25,.46,.45,.94) .2s'}}>
<span className="text-lg font-medium">Work</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-lg px-4 py-3 text-gray-200 hover:bg-white/5 transition-colors translate-y-2 opacity-100 translate-y-0" data-mobile-link="testimonials" href="#testimonials" style={{transition: 'all .5s cubic-bezier(.25,.46,.45,.94) .25s'}}>
<span className="text-lg font-medium">Testimonials</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="px-5 pt-2 pb-6 border-t border-white/10">
<a className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-teal-400 text-black hover:bg-teal-300 transition-colors translate-y-2 opacity-100 translate-y-0" href="#contact" style={{transition: 'all .5s cubic-bezier(.25,.46,.45,.94) .3s'}}>
              Let's Talk
              <svg className="lucide lucide-send w-4 h-4 w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
</div>
</div>
</div>
</div>

<main className="">

<section className="relative pt-24 pb-16 overflow-hidden" id="home">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[url('https://cdn.midjourney.com/d5ecaf44-94b7-47f5-9bb8-5d1967358128/0_0.png?w=1200&amp;q=80')] bg-cover bg-center opacity-25"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
                Design That
                <span className="bg-gradient-to-r from-[#3c4f56] to-[#e7edf1] bg-clip-text text-transparent">Converts</span>
</h1>
<p className="mt-6 text-lg text-gray-400 max-w-xl transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0">
                We create sophisticated digital experiences that drive results. From concept to conversion, we design with purpose and precision.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0">
<a className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-[1.03] text-black bg-teal-400 hover:bg-teal-300" href="#work">
                  View Our Work
                  <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full font-medium bg-gray-900 text-gray-100 hover:bg-gray-800 transition-colors" href="#about">
                  Learn More
                  <svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-5 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-300 opacity-100 translate-y-0">
<div className="flex -space-x-2">
<img alt="Client 1" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=320&amp;q=80"/>
<img alt="Client 2" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1630926906914-f98970d8894c?w=320&amp;q=80"/>
<img alt="Client 3" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&amp;q=80"/>
<div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-black bg-teal-400">
<span className="text-sm font-medium text-black">50+</span>
</div>
</div>
<div>
<p className="text-sm font-medium text-gray-100">Trusted by 50+ companies</p>
<p className="text-sm text-gray-500">From startups to enterprises</p>
</div>
</div>
</div>
<div className="relative transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
<img alt="Design workspace" className="w-full h-[440px] sm:h-[500px] object-cover" src="https://cdn.midjourney.com/c3289185-0786-422e-b449-32ef8428f66e/0_0.png?w=1200&amp;q=80"/>
<div className="absolute top-5 right-5 rounded-xl p-4 shadow-lg bg-black/85 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex rounded-full items-center justify-center bg-[#2a3333]">
<svg className="lucide lucide-trending-up w-5 h-5 text-neutral-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<p className="text-sm text-gray-200">Conversion Rate</p>
<p className="text-lg font-semibold text-white">+147%</p>
</div>
</div>
</div>
<div className="absolute bottom-5 left-5 rounded-xl p-4 shadow-lg bg-black/85 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex rounded-full items-center justify-center bg-[#262b2b]">
<svg className="lucide lucide-users w-5 h-5 text-neutral-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-sm text-gray-200">User Engagement</p>
<p className="text-lg font-semibold text-white">+89%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="space-y-6">
<p className="text-sm font-medium uppercase tracking-wider text-teal-400 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0">About Prism Studio</p>
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-gray-100 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
                We Don't Just Design—We Engineer Success
              </h2>
<p className="text-lg text-gray-400 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0">
                Founded in 2019, Prism Studio has been at the forefront of digital transformation, helping ambitious companies create experiences that resonate with their audience and drive measurable results.
              </p>
<div className="transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-300 opacity-100 translate-y-0">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-[1.03] bg-gray-100 text-black hover:bg-gray-200" href="#services">
                  Discover Our Process
                  <svg className="lucide lucide-arrow-right w-4 h-4 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Team collaboration" className="rounded-xl object-cover w-full h-44 sm:h-56 md:h-64 lg:h-72 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0" src="https://images.unsplash.com/photo-1675981004381-6305f7dd07fe?w=800&amp;q=80"/>
<img alt="Design process" className="rounded-xl object-cover w-full h-44 sm:h-56 md:h-64 lg:h-72 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0" src="https://images.unsplash.com/photo-1642923051153-07d4c98fe203?w=800&amp;q=80"/>
<img alt="Creative workspace" className="rounded-xl object-cover w-full h-44 sm:h-56 md:h-64 lg:h-72 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0" src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=800&amp;q=80"/>
<img alt="Strategy session" className="rounded-xl object-cover w-full h-44 sm:h-56 md:h-64 lg:h-72 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-300 opacity-100 translate-y-0" src="https://images.unsplash.com/photo-1644251966613-170a26996adb?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="bg-gray-950/40 border-white/5 border-t pt-20 pb-20 backdrop-blur-md" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm font-medium uppercase tracking-wider text-teal-400 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0">Our Services</p>
<h3 className="mt-3 text-3xl lg:text-4xl tracking-tight font-semibold text-gray-100 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>
              Everything You Need to Scale
            </h3>
<p className="mt-5 text-lg text-gray-400 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0">
              From strategy to execution, we provide end-to-end solutions that transform your vision into reality.
            </p>
</div>
<div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/10 bg-black/60 hover:bg-black/70 transition-all duration-200 hover:-translate-y-1 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0" style={{transitionDuration: '700ms'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-teal-900/40 ring-1 ring-white/10">
<svg className="lucide lucide-palette w-6 h-6 text-teal-300 w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h4 className="text-lg font-semibold mb-2">Brand Identity</h4>
<p className="text-gray-400 mb-4">Crafting memorable brand experiences that resonate and differentiate.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Logo &amp; Visual Identity</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Brand Guidelines</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Marketing Materials</li>
</ul>
</div>
<div className="p-6 rounded-xl border border-white/10 bg-black/60 hover:bg-black/70 transition-all duration-200 hover:-translate-y-1 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0" style={{transitionDuration: '700ms'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-purple-900/40 ring-1 ring-white/10">
<svg className="lucide lucide-layout w-6 h-6 text-purple-300 w-5 h-5" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h4 className="text-lg font-semibold mb-2">UI/UX Design</h4>
<p className="text-gray-400 mb-4">Intuitive, beautiful interfaces that drive engagement and conversion.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>User Research &amp; Testing</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Wireframing &amp; Prototyping</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Responsive Design</li>
</ul>
</div>
<div className="p-6 rounded-xl border border-white/10 bg-black/60 hover:bg-black/70 transition-all duration-200 hover:-translate-y-1 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0" style={{transitionDuration: '700ms'}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-green-900/40 ring-1 ring-white/10">
<svg className="lucide lucide-code w-[24px] h-[24px] w-5 h-5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(134, 239, 172)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h4 className="text-lg font-semibold mb-2">Content Creation</h4>
<p className="text-gray-400 mb-4">Fast, secure, and scalable applications using modern best practices.</p>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex gap-2 items-center"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Eye catching graphics, videos taliored to brand</li>
<li className="flex gap-2 items-center"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Clear, persuasive words that align with target</li>
<li className="flex gap-2 items-center"><svg className="lucide lucide-check w-4 h-4 text-green-400 w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Visual storytelling that brings your audience to you</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Selected Work</h3>
<a className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition-colors" href="#contact">
              Start a project
              <svg className="lucide lucide-arrow-right w-4 h-4 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="relative group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0">
<img alt="Case study 1" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&amp;q=80"/>
<div className="p-4">
<p className="text-sm text-gray-400">E-commerce Redesign</p>
<p className="text-base font-medium text-gray-100">+38% Conversion</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0">
<img alt="Case study 2" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=1200&amp;q=80"/>
<div className="p-4">
<p className="text-sm text-gray-400">SaaS Dashboard</p>
<p className="text-base font-medium text-gray-100">+22% Retention</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0">
<img alt="Case study 3" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&amp;q=80"/>
<div className="p-4">
<p className="text-sm text-gray-400">Brand System</p>
<p className="text-base font-medium text-gray-100">Global Rollout</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-emerald-300/20 via-teal-500/25 to-cyan-800 border-t pt-20 pb-20 backdrop-blur-md" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<h3 className="text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>What clients say</h3>
<p className="mt-4 text-gray-400">Real impact, real results.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-black/60 p-6 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] opacity-100 translate-y-0">
<p className="text-gray-300">“A flawless experience from start to finish. Our metrics have never looked better.”</p>
<div className="mt-4 text-sm text-gray-500">Head of Growth, Nexus Labs</div>
</div>
<div className="rounded-xl border border-white/10 bg-black/60 p-6 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-100 opacity-100 translate-y-0">
<p className="text-gray-300">“They ship fast and with precision. The new UI boosted engagement significantly.”</p>
<div className="mt-4 text-sm text-gray-500">Product Lead, Velocity</div>
</div>
<div className="rounded-xl border border-white/10 bg-black/60 p-6 transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] delay-200 opacity-100 translate-y-0">
<p className="text-gray-300">“A true partner in our transformation. Strategic and detail-oriented.”</p>
<div className="mt-4 text-sm text-gray-500">CMO, Fortress</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm font-medium uppercase tracking-wider text-teal-400">Let's Work Together</p>
<h3 className="mt-3 text-3xl lg:text-4xl tracking-tight font-semibold" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Ready to Transform Your Business?</h3>
<p className="mt-4 text-lg text-gray-400">Get in touch today and let's discuss how we can help you achieve your goals.</p>
</div>
<div className="mt-10 max-w-2xl mx-auto">
<form className="rounded-2xl border border-white/10 bg-gray-950 p-6 sm:p-8">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm text-gray-300 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/60" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/60" placeholder="Doe" type="text"/>
</div>
</div>
<div className="mt-6">
<label className="block text-sm text-gray-300 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/60" placeholder="jane@company.com" type="email"/>
</div>
<div className="mt-6">
<label className="block text-sm text-gray-300 mb-2">Project Type</label>
<select className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500/60">
<option>Brand Identity</option>
<option>UI/UX Design</option>
<option>Web Development</option>
<option>E-commerce</option>
<option>Digital Marketing</option>
<option>Other</option>
</select>
</div>
<div className="mt-6">
<label className="block text-sm text-gray-300 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/60" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<div className="mt-8">
<button className="w-full py-4 px-6 rounded-lg text-black font-medium bg-teal-400 hover:bg-teal-300 transition-colors" type="submit">
                  Send Message
                </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-gray-950 border-t border-white/5 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-teal-500/20 to-teal-300/10 ring-1 ring-white/10">
<svg className="lucide lucide-diamond text-teal-300 w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Prism Studio</span>
</div>
<p className="mt-3 text-gray-400">Design that converts. We create sophisticated digital experiences that drive results.</p>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-wider text-gray-300">Services</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-teal-400 transition-colors" href="#services">Brand Identity</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#services">UI/UX Design</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#services">Development</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#services">Digital Marketing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-wider text-gray-300">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-teal-400 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#work">Work</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#contact">Careers</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-wider text-gray-300">Connect</h4>
<div className="mt-3 flex gap-3">
<a className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5 text-gray-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-gray-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5 text-gray-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
          © 2024 Prism Studio. All rights reserved.
        </div>
</div>
</footer>


    </>
  );
}
