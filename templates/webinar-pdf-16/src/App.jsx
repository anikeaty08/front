import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "WebinarLeadLab",
"url": "https://webinarleadlab.example.com/",
"logo": "https://webinarleadlab.example.com/logo.png",
"sameAs": [
"https://twitter.com/webinarleadlab",
"https://www.linkedin.com/company/webinarleadlab"
]
}



    (function () {
      const root = document.getElementById('aura-emfprd02h');
      if (!root) return;
      const cards = root.querySelectorAll('[data-ps]');
      if (!cards.length) return;

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.transform = 'none';
          entry.target.style.opacity = '1';
          io.unobserve(entry.target);
        });
      }, { threshold: 0.2 });

      cards.forEach((el, i) => {
        // Staggered delay for a smoother feel
        el.style.transitionDelay = (100 * i) + 'ms';
        io.observe(el);
      });
    })();
  


  (function () {
    const el = document.querySelector('[data-batch-timer]');
    if (!el) return;
    let total = (48 * 60 * 60) - 1; // 47:59:59
    const tick = () => {
      const h = Math.floor(total / 3600);
      const m = Math.floor((total % 3600) / 60);
      const s = total % 60;
      el.textContent = `[${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}]`;
      if (total > 0) {
        total -= 1;
        setTimeout(tick, 1000);
      }
    };
    tick();
  })();



      // Initialize icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        document.getElementById('year').textContent = new Date().getFullYear();
      });

      // Scroll progress bar
      const progressEl = document.querySelector('[data-scroll-progress]');
      const onScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const width = Math.min(100, Math.max(0, (scrollTop / height) * 100));
        if (progressEl) progressEl.style.width = width + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // Mobile menu
      const panel = document.querySelector('[data-mobile-panel]');
      const overlay = document.querySelector('[data-mobile-overlay]');
      const openBtn = document.querySelector('[data-mobile-toggle]');
      const closeBtn = document.querySelector('[data-mobile-close]');
      function openMenu() {
        panel.classList.remove('translate-x-full');
        overlay.classList.remove('pointer-events-none');
        overlay.classList.add('opacity-100');
        openBtn && openBtn.setAttribute('aria-expanded', 'true');
      }
      function closeMenu() {
        panel.classList.add('translate-x-full');
        overlay.classList.add('pointer-events-none');
        overlay.classList.remove('opacity-100');
        openBtn && openBtn.setAttribute('aria-expanded', 'false');
      }
      openBtn && openBtn.addEventListener('click', openMenu);
      closeBtn && closeBtn.addEventListener('click', closeMenu);
      overlay && overlay.addEventListener('click', closeMenu);
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

      // Reveal on scroll
      const reveals = document.querySelectorAll('[data-reveal]');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.style.transitionDelay = entry.target.style.transitionDelay || '0ms';
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      reveals.forEach((el) => revealObserver.observe(el));

      // Counters
      const counters = document.querySelectorAll('[data-counter]');
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const to = parseFloat(el.getAttribute('data-to')) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const val = (to * p).toFixed(decimals);
            el.textContent = val + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        });
      }, { threshold: 0.5 });
      counters.forEach((el) => counterObserver.observe(el));

      // Lazy images
      const lazyImgs = document.querySelectorAll('img[data-src]');
      const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (!src) return;
          img.onload = () => {
            img.classList.remove('opacity-0', 'blur-md');
            const sk = img.closest('[data-skeleton]')?.querySelector('[data-skeleton-bar]');
            if (sk) sk.remove();
          };
          img.src = src;
          imgObserver.unobserve(img);
        });
      }, { rootMargin: '200px' });
      lazyImgs.forEach((img) => imgObserver.observe(img));

      // Process progress bars
      const hBar = document.querySelector('[data-progress-h]');
      const vBar = document.querySelector('[data-progress-v]');
      const processSection = document.querySelector('#process');
      function updateProcessBars() {
        if (!processSection) return;
        const rect = processSection.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const visible = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
        if (hBar) hBar.style.transform = `scaleX(${visible})`;
        if (vBar) vBar.style.transform = `scaleY(${visible})`;
      }
      window.addEventListener('scroll', updateProcessBars, { passive: true });
      window.addEventListener('resize', updateProcessBars);
      updateProcessBars();

      // Hero entrance
      window.addEventListener('load', () => {
        const title = document.getElementById('hero-title');
        const sub = document.getElementById('hero-sub');
        setTimeout(() => {
          if (title) { title.style.opacity = '1'; title.style.transform = 'none'; title.style.transition = 'all 600ms cubic-bezier(0.22,1,0.36,1)'; }
          if (sub) { sub.style.opacity = '1'; sub.style.transform = 'none'; sub.style.transition = 'all 700ms cubic-bezier(0.22,1,0.36,1) 80ms'; }
        }, 100);
      });

      // Form submit (demo)
      const form = document.getElementById('lead-form');
      const success = document.getElementById('form-success');
      form && form.addEventListener('submit', (e) => {
        e.preventDefault();
        success?.classList.remove('hidden');
        form.querySelector('button[type="submit"]').disabled = true;
        form.querySelector('button[type="submit"]').classList.add('opacity-80');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-[0.18] blur-2xl" style={{backgroundImage: 'radial-gradient(900px 300px at 80% 10%, rgba(139,92,246,0.12), transparent 60%), radial-gradient(700px 240px at 20% 20%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(600px 200px at 50% 90%, rgba(16,185,129,0.08), transparent 60%)'}}></div>
<svg className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"><filter id="noiseFilter"><feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence></filter><rect filter="url(#noiseFilter)" height="100%" width="100%"></rect></svg>
<header className="sticky top-0 z-[60]">

<div aria-hidden="true" className="w-full h-0.5 bg-transparent">
<div className="h-0.5 w-0" data-scroll-progress="" style={{background: 'linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(124, 58, 237) 100%)', width: '100%'}}></div>
</div>
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="mt-3 md:mt-4 rounded-xl border border-slate-700 bg-[#1E293B]/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
<div className="grid grid-cols-3 items-center px-3 md:px-5" style={{minHeight: '64px'}}>
<div className="flex items-center gap-2 py-2">
<div className="hidden md:flex h-9 w-9 rounded-md bg-white/10 ring-1 ring-slate-700 items-center justify-center">
<span className="text-white/95 text-[13px] font-medium tracking-tight">WLL</span>
</div>
<a className="text-white/95 text-[16px] md:text-[18px] font-semibold tracking-tight leading-tight" href="#" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>WebinarLeadLab</a>
</div>
<nav className="hidden md:flex items-center justify-center gap-7">
<a className="group relative inline-flex items-center text-slate-300 hover:text-white/95 transition-all duration-300 ease-in-out text-sm leading-6 py-2" href="#process">
<span>How It Works</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-full"></span>
</a>
<a className="group relative inline-flex items-center text-slate-300 hover:text-white/95 transition-all duration-300 ease-in-out text-sm leading-6 py-2" href="#examples">
<span>Examples</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-full"></span>
</a>
<a className="group relative inline-flex items-center text-slate-300 hover:text-white/95 transition-all duration-300 ease-in-out text-sm leading-6 py-2" href="#pricing">
<span>Pricing</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-full"></span>
</a>
<a className="group relative inline-flex items-center text-slate-300 hover:text-white/95 transition-all duration-300 ease-in-out text-sm leading-6 py-2" href="#get-started">
<span>About</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-full"></span>
</a>
</nav>
<div className="hidden md:flex items-center justify-end">
<a className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[14px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-violet-400/40 shadow-lg shadow-violet-900/30 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl" href="#get-started" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)'}}>
                  Get Started
                  <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="flex md:hidden items-center justify-end">
<button aria-expanded="false" aria-label="Open menu" className="inline-flex items-center justify-center h-11 w-11 rounded-md ring-1 ring-slate-700 bg-white/5 active:bg-white/10 transition-all duration-300 ease-in-out" data-mobile-toggle="" type="button">
<svg className="lucide lucide-menu w-5 h-5 text-slate-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300" data-mobile-overlay=""></div>
<aside className="fixed top-0 right-0 z-50 h-full w-[88vw] max-w-sm translate-x-full transition-transform duration-300 ease-out bg-[#334155]/95 backdrop-blur-md ring-1 ring-slate-700 shadow-2xl" data-mobile-panel="">
<div className="flex items-center justify-between px-5 pt-4 pb-2">
<span className="text-white/95 text-[16px] font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Menu</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-11 w-11 rounded-md ring-1 ring-slate-700 bg-white/5 active:bg-white/10 transition-all duration-300 ease-in-out" data-mobile-close="" type="button">
<svg className="lucide lucide-x w-5 h-5 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="px-5 pb-6">
<a className="w-full inline-flex items-center justify-center rounded-md h-[52px] text-[15px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-violet-400/40 shadow-lg shadow-violet-900/30 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl mb-3" href="#get-started" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)'}}>
              Get Started
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<nav className="mt-3 divide-y divide-slate-700 rounded-lg ring-1 ring-slate-700 bg-[#334155]/80 overflow-hidden">
<a className="group relative flex items-center justify-between px-4 h-11 text-[15px] text-slate-300 transition-all duration-300 ease-in-out hover:bg-white/[0.06]" href="#process">
<span>How It Works</span>
<svg className="lucide lucide-chevron-right w-4 h-4 text-slate-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="pointer-events-none absolute left-4 bottom-0 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-2rem)]"></span>
</a>
</nav>
<div className="mt-3 space-y-2">
<a className="group relative block w-full rounded-md px-4 h-11 leading-[44px] text-[15px] text-slate-300 ring-1 ring-slate-700 bg-[#334155]/80 hover:bg-white/[0.06] transition-all duration-300 ease-in-out" href="#examples">
                Examples
                <span className="pointer-events-none absolute left-4 bottom-2 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-2rem)]"></span>
</a>
<a className="group relative block w-full rounded-md px-4 h-11 leading-[44px] text-[15px] text-slate-300 ring-1 ring-slate-700 bg-[#334155]/80 hover:bg-white/[0.06] transition-all duration-300 ease-in-out" href="#pricing">
                Pricing
                <span className="pointer-events-none absolute left-4 bottom-2 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-2rem)]"></span>
</a>
<a className="group relative block w-full rounded-md px-4 h-11 leading-[44px] text-[15px] text-slate-300 ring-1 ring-slate-700 bg-[#334155]/80 hover:bg-white/[0.06] transition-all duration-300 ease-in-out" href="#get-started">
                About
                <span className="pointer-events-none absolute left-4 bottom-2 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-2rem)]"></span>
</a>
</div>
</div>
</aside>
</header>
<section className="relative z-10 md:py-32 pt-20 pb-20">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/5 ring-1 ring-slate-700 text-slate-300 text-[14px] mb-6 transition-all duration-300 ease-in-out" style={{boxShadow: '0 0 16px rgba(124,58,237,0.18)'}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Created by a Lead Software Engineer tired of watching $5,000 webinars die after going live</span>
</div>
<h1 className="leading-[1.1] text-[32px] md:text-[48px] font-semibold text-white/95 tracking-tight mb-5" style={{fontFamily: 'Poppins, Inter, sans-serif', opacity: '1', transform: 'none', transition: '600ms cubic-bezier(0.22, 1, 0.36, 1)'}}>Your Webinars Are Dying. We Fix That.</h1>
<p className="text-[20px] leading-relaxed tracking-wide text-slate-300 mb-6 md:mb-8 opacity-0 translate-y-2 transition-all duration-300 ease-in-out" id="hero-sub" style={{opacity: '1', transform: 'none', transition: '700ms cubic-bezier(0.22, 1, 0.36, 1) 80ms'}}>
                We transform your recorded webinars into polished PDFs that generate leads 24/7. You distribute them across LinkedIn, email, your website, and sales.
              </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[14px] md:text-[15px]">Professional design</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[14px] md:text-[15px]">48-hour turnaround</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[14px] md:text-[15px]">Conversion-optimized</span>
</div>
</div>
<div className="flex items-center gap-4 mb-10">
<a className="group inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-medium text-white/95 shadow-lg shadow-violet-900/30 ring-1 ring-slate-700 hover:ring-violet-400/40 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" href="#get-started" id="hero-cta" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)', animation: 'pulseSoft 4s ease-in-out infinite'}}>
                  Transform My Webinar Now
                  <svg className="lucide lucide-arrow-right w-4.5 h-4.5 ml-2 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group relative inline-flex items-center text-slate-300 hover:text-white/95 transition-all duration-300 ease-in-out text-[15px]" href="#examples">
                  See Examples
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-current opacity-60 transition-all duration-300 ease-in-out group-hover:w-full"></span>
<svg className="lucide lucide-move-right w-4 h-4 ml-1.5" data-lucide="move-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
</a>
</div>
<div className="rounded-xl bg-[#334155] ring-1 ring-slate-700 p-4 md:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
<div className="flex items-center justify-between mb-3">
<p className="text-[13px] md:text-sm text-slate-300">
                    🚀 Founding Member Pricing - Limited to First 20 Customers
                  </p>
<div className="h-px flex-1 ml-4 bg-slate-700"></div>
</div>
<div className="relative">
<p className="text-[12px] md:text-[13px] text-slate-400">Works with all major webinar platforms:</p>
<div className="mt-2 flex items-center gap-2.5 md:gap-3.5 flex-wrap">
<div className="group inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-white/5 ring-1 ring-slate-700">
<div className="h-6 w-6 rounded bg-[#2D8CFF] ring-1 ring-slate-700 flex items-center justify-center">
<svg className="lucide lucide-video w-3.5 h-3.5 text-white" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="text-[12px] tracking-tight text-slate-300 group-hover:text-white/95 transition-colors">Zoom</span>
</div>
<div className="group inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-white/5 ring-1 ring-slate-700">
<div className="h-6 w-6 rounded bg-[#FFB400] ring-1 ring-slate-700 flex items-center justify-center">
<svg className="lucide lucide-asterisk w-3.5 h-3.5 text-black/80" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<span className="text-[12px] tracking-tight text-slate-300 group-hover:text-white/95 transition-colors">GoToWebinar</span>
</div>
<div className="group inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-white/5 ring-1 ring-slate-700">
<div className="h-6 w-6 rounded bg-[#6264A7] ring-1 ring-slate-700 flex items-center justify-center">
<svg className="lucide lucide-users w-3.5 h-3.5 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-[12px] tracking-tight text-slate-300 group-hover:text-white/95 transition-colors">Microsoft Teams</span>
</div>
<div className="group inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-white/5 ring-1 ring-slate-700">
<div className="h-6 w-6 rounded bg-[#34A853] ring-1 ring-slate-700 flex items-center justify-center">
<svg className="lucide lucide-video w-3.5 h-3.5 text-white" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="text-[12px] tracking-tight text-slate-300 group-hover:text-white/95 transition-colors">Google Meet</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="relative mx-auto md:mx-0 md:absolute md:right-0" style={{width: 'min(620px, 92vw)', transform: 'rotate(15deg)', transformOrigin: '70% 50%', animation: 'slideInRight 800ms ease-out 200ms both'}}>
<div className="absolute inset-0 rounded-[22px] bg-black/30 blur-xl"></div>
<div className="relative rounded-[18px] ring-1 ring-slate-700 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-3 backdrop-blur-xl will-change-transform" style={{animation: 'floatTiny 6s ease-in-out infinite'}}>
<div className="rounded-[14px] overflow-hidden bg-[#334155] ring-1 ring-slate-700">
<div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-slate-700">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full" style={{background: '#F59E0B'}}></div>
<div className="h-2 w-2 rounded-full" style={{background: '#3B82F6'}}></div>
<div className="h-2 w-2 rounded-full" style={{background: '#10B981'}}></div>
</div>
<div className="flex items-center gap-2 text-slate-400 text-xs">
<svg className="lucide lucide-presentation w-4 h-4" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
<span>Webinar to PDF</span>
</div>
</div>
<div className="grid grid-cols-2">
<div className="p-4 md:p-5 border-r border-slate-700 bg-white/[0.01]">
<div className="text-[11px] uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
<svg className="lucide lucide-history w-3.5 h-3.5" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
                          Before
                        </div>
<div className="rounded-md overflow-hidden ring-1 ring-slate-700 bg-white/5">
<img alt="Screenshot of a raw webinar recording with chat and controls visible" className="w-full h-28 md:h-36 object-cover opacity-90" decoding="async" height="664" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&amp;w=1180&amp;auto=format&amp;fit=crop" width="1180"/>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center gap-2 text-[12px] text-slate-300">
<svg className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#F59E0B'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Raw recording, low engagement
                          </li>
<li className="flex items-center gap-2 text-[12px] text-slate-300">
<svg className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#F59E0B'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Short-lived visibility
                          </li>
</ul>
</div>
<div className="p-4 md:p-5 bg-white/[0.015]">
<div className="text-[11px] uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
<svg className="lucide lucide-file-text w-3.5 h-3.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                          After
                        </div>
<div className="rounded-md ring-1 ring-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-transparent p-3">
<div className="bg-white rounded-sm p-3">
<div className="h-2 w-12 rounded" style={{background: '#10B981', opacity: '0.9', marginBottom: '0.5rem'}}></div>
<div className="h-1.5 w-24 rounded bg-gray-300 mb-3"></div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-gray-200 rounded"></div>
<div className="h-1.5 w-[90%] bg-gray-200 rounded"></div>
<div className="h-1.5 w-[80%] bg-gray-200 rounded"></div>
<div className="h-1.5 w-[88%] bg-gray-200 rounded"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="h-10 bg-gray-100 rounded"></div>
<div className="h-10 bg-gray-100 rounded"></div>
<div className="h-10 bg-gray-100 rounded"></div>
</div>
</div>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center gap-2 text-[12px] text-slate-300">
<svg className="lucide lucide-check-circle w-3.5 h-3.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Polished, brand-ready PDF
                          </li>
<li className="flex items-center gap-2 text-[12px] text-slate-300">
<svg className="lucide lucide-check-circle w-3.5 h-3.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Built to capture leads
                          </li>
</ul>
</div>
</div>
<div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-t border-slate-700">
<div className="flex items-center gap-2 text-[12px] text-slate-300">
<svg className="lucide lucide-timer w-4 h-4" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="">48-hour turnaround</span>
</div>
<div className="flex items-center gap-2 text-[12px] text-slate-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Conversion-optimized</span>
</div>
</div>
</div>
</div>
<div className="hidden md:block absolute -left-8 -top-8">
<div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-slate-700 px-3 py-2 flex items-center gap-2" style={{animation: 'floatSway 7s ease-in-out infinite'}}>
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="text-[12px] text-slate-300">Auto-layout applied</span>
</div>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-700"></div>
<section className="md:py-32 pt-20 pb-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="rounded-lg shadow-md ring-1 ring-slate-700 bg-[#334155] p-5 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg will-change-transform border-l-2" data-reveal="" style={{borderLeftColor: '#F59E0B', transitionDelay: '0ms'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-md p-2 bg-white/10 ring-1 ring-slate-700">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#F59E0B'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>48-Hour Guarantee</h3>
<span className="text-[11px] px-2 py-0.5 rounded-full ring-1" style={{color: '#F59E0B', background: 'rgba(245,158,11,0.10)', borderColor: 'rgba(245,158,11,0.35)'}}>
                        Guaranteed
                      </span>
</div>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">Your PDF delivered within 48 hours—or it's free.</p>
</div>
</div>
</div>
<div className="rounded-lg shadow-md ring-1 ring-slate-700 bg-[#334155] p-5 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg will-change-transform" data-reveal="" style={{transitionDelay: '100ms'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-md p-2 bg-white/10 ring-1 ring-slate-700">
<svg className="lucide lucide-timer w-5 h-5" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div className="flex-1">
<h3 className="text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Guaranteed 48-Hour Turnaround</h3>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">Every project delivered in 48 hours—guaranteed.</p>
</div>
</div>
</div>
<div className="rounded-lg shadow-md ring-1 ring-slate-700 bg-[#334155] p-5 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg will-change-transform" data-reveal="" style={{transitionDelay: '200ms'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-md p-2 bg-white/10 ring-1 ring-slate-700">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>100% Satisfaction Guarantee</h3>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">If you're not thrilled, we’ll fix it or refund you.</p>
</div>
</div>
</div>
<div className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg will-change-transform bg-[#334155] ring-slate-700 ring-1 rounded-lg border-l-2 pt-5 pr-5 pb-5 pl-5 shadow-md" data-reveal="" style={{borderLeftColor: 'rgba(59,130,246,0.7)', transitionDelay: '300ms'}}>
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-md p-2 bg-white/10 ring-1 ring-slate-700">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#3B82F6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-[18] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>🔒 Secure &amp; Confidential</h3>
<ul className="mt-2 space-y-1.5">
<li className="flex items-center gap-2 text-[14px] text-slate-300">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Your data never shared
        </li>
<li className="flex items-center gap-2 text-[14px] text-slate-300">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          SSL-encrypted transfers
        </li>
<li className="flex items-center gap-2 text-[14px] text-slate-300">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Trusted payment via Stripe
        </li>
</ul>
</div>
</div>
</div>
</div>
</section>
<div className="h-px w-full bg-slate-700"></div>
<section className="md:py-32 pt-20 pb-20">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
<h2 className="text-[28px] md:text-[36px] leading-[1.1] tracking-tight text-white/95 font-semibold" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
        Your Webinars Are Dying After Going Live
      </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="rounded-2xl ring-1 ring-slate-700 p-6 md:p-7 shadow-[0_24px_64px_rgba(0,0,0,0.35)]" data-ps="left" style={{background: 'linear-gradient(rgba(239, 68, 68, 0.14) 0%, rgba(239, 68, 68, 0.06) 100%)', transform: 'none', opacity: '1', transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform, opacity'}}>
<h3 className="text-[18px] md:text-[22px] font-medium tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
          Webinar Graveyard 💀
        </h3>
<ul className="mt-3 space-y-2">
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>You spent $5,000 producing it</li>
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>200 people attended live</li>
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>Now it has 12 YouTube views</li>
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>Zero ongoing lead generation</li>
</ul>
</div>

<div className="rounded-2xl ring-1 ring-slate-700 p-6 md:p-7 shadow-[0_24px_64px_rgba(0,0,0,0.35)]" data-ps="right" style={{background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.14) 0%, rgba(16, 185, 129, 0.12) 100%)', transform: 'none', opacity: '1', transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform, opacity'}}>
<h3 className="text-[18px] md:text-[22px] font-medium tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
          Lead Generation Machine 🚀
        </h3>
<ul className="mt-3 space-y-2">
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>8-12 page professional PDF</li>
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>Distribute anywhere, anytime</li>
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>Generate leads while you sleep</li>
<li className="text-[14px] text-slate-300"><span className="text-slate-500 mr-2">•</span>Your team stays focused on revenue</li>
</ul>
</div>
</div>
</div>

</section>
<section className="md:py-32 pt-20 pb-20">
<div className="relative rounded-2xl bg-[#334155] ring-1 ring-slate-700 p-6 md:p-8 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.35)] space-y-12 md:space-y-24">
<h2 className="text-center text-[28px] md:text-[36px] leading-[1.1] tracking-tight text-white/95 font-medium transition-all duration-300 ease-in-out" style={{fontFamily: 'Poppins, Inter, sans-serif', transitionDelay: '0ms'}}>
      Your Webinar Transformation in 5 Simple Steps
    </h2>
<div className="relative">
<div className="hidden md:block absolute left-6 right-6 top-[60px] h-1 rounded-full bg-slate-700"></div>
<div className="hidden md:block absolute left-6 right-6 top-[60px] h-1 rounded-full" style={{background: 'linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(124, 58, 237) 100%)', transformOrigin: 'left center', transform: 'scaleX(1)'}}></div>
<div className="md:hidden absolute top-[76px] bottom-[20px] left-[36px] w-1 rounded-full bg-slate-700"></div>
<div className="md:hidden absolute top-[76px] bottom-[20px] left-[36px] w-1 rounded-full" style={{background: 'linear-gradient(rgb(139, 92, 246) 0%, rgb(124, 58, 237) 100%)', transformOrigin: 'center top', transform: 'scaleY(1)'}}></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 lg:gap-10">
<div className="group relative flex md:block items-start md:items-center gap-4 md:gap-0 transition-all duration-300 ease-in-out">
<div className="relative mx-0 md:mx-auto">
<div className="relative h-16 w-16 rounded-xl ring-1 ring-slate-700 bg-white/[0.06] flex items-center justify-center shadow-lg shadow-black/20 transition-all group-hover:bg-white/10 group-hover:ring-violet-400/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]" style={{background: 'radial-gradient(120% 120% at 30% 20%, rgba(139,92,246,0.35) 0%, rgba(124,58,237,0.22) 45%, rgba(124,58,237,0.10) 75%, transparent 100%)'}}>
<svg className="lucide lucide-upload-cloud w-7 h-7 text-white/95" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
<span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-violet-600 text-white/95 text-[13px] font-medium flex items-center justify-center ring-1 ring-slate-700">1</span>
</div>
</div>
<div className="mt-4 md:mt-5 text-left md:text-center">
<h3 className="mt-0 text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Send Recording</h3>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">Share your recording link</p>
<div className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-slate-400">
<svg className="lucide lucide-timer w-3.5 h-3.5" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span>5 minutes</span>
</div>
</div>
</div>
<div className="group relative flex md:block items-start md:items-center gap-4 md:gap-0 transition-all duration-300 ease-in-out">
<div className="relative mx-0 md:mx-auto">
<div className="relative h-16 w-16 rounded-xl ring-1 ring-slate-700 bg-white/[0.06] flex items-center justify-center shadow-lg shadow-black/20 transition-all group-hover:bg-white/10 group-hover:ring-violet-400/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]">
<svg className="lucide lucide-lightbulb w-7 h-7 text-white/95" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-violet-600 text-white/95 text-[13px] font-medium flex items-center justify-center ring-1 ring-slate-700">2</span>
</div>
</div>
<div className="mt-4 md:mt-5 text-left md:text-center">
<h3 className="mt-0 text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>We Extract Insights</h3>
<div className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-slate-400">
</div>
</div>
</div>
<div className="group relative flex md:block items-start md:items-center gap-4 md:gap-0 transition-all duration-300 ease-in-out">
<div className="relative mx-0 md:mx-auto">
<div className="relative h-16 w-16 rounded-xl ring-1 ring-slate-700 bg-white/[0.06] flex items-center justify-center shadow-lg shadow-black/20 transition-all group-hover:bg-white/10 group-hover:ring-violet-400/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]">
<svg className="lucide lucide-file-text w-7 h-7 text-white/95" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-violet-600 text-white/95 text-[13px] font-medium flex items-center justify-center ring-1 ring-slate-700">3</span>
</div>
</div>
<div className="mt-4 md:mt-5 text-left md:text-center">
<h3 className="mt-0 text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Outline &amp; Draft</h3>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">Build compelling narrative</p>
<div className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-slate-400">
</div>
</div>
</div>
<div className="group relative flex md:block items-start md:items-center gap-4 md:gap-0 transition-all duration-300 ease-in-out">
<div className="relative mx-0 md:mx-auto">
<div className="relative h-16 w-16 rounded-xl ring-1 ring-slate-700 bg-white/[0.06] flex items-center justify-center shadow-lg shadow-black/20 transition-all group-hover:bg-white/10 group-hover:ring-violet-400/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]">
<svg className="lucide lucide-palette w-7 h-7 text-white/95" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-violet-600 text-white/95 text-[13px] font-medium flex items-center justify-center ring-1 ring-slate-700">4</span>
</div>
</div>
<div className="mt-4 md:mt-5 text-left md:text-center">
<h3 className="mt-0 text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Design &amp; Brand</h3>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">Match your brand perfectly</p>
<div className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-slate-400">
</div>
</div>
</div>
<div className="group relative flex md:block items-start md:items-center gap-4 md:gap-0 transition-all duration-300 ease-in-out">
<div className="relative mx-0 md:mx-auto">
<div className="relative h-16 w-16 rounded-xl ring-1 ring-slate-700 bg-white/[0.06] flex items-center justify-center shadow-lg shadow-black/20 transition-all group-hover:bg-white/10 group-hover:ring-emerald-400/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]" style={{background: 'radial-gradient(120% 120% at 30% 20%, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0.20) 45%, rgba(16,185,129,0.10) 75%, transparent 100%)'}}>
<svg className="lucide lucide-send w-7 h-7 text-white/95" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-emerald-500 text-white/95 text-[13px] font-medium flex items-center justify-center ring-1 ring-slate-700">5</span>
</div>
</div>
<div className="mt-4 md:mt-5 text-left md:text-center">
<h3 className="mt-0 text-[18px] md:text-[22px] font-normal tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>You Distribute</h3>
<p className="mt-2 text-[14px] text-slate-300 leading-relaxed tracking-wide">LinkedIn, email, website, sales</p>
<div className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-slate-400">
<svg className="lucide lucide-infinity w-3.5 h-3.5" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span>Forever value</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center">
<div className="inline-flex items-center gap-2 text-center text-[18px] text-white/95">
<svg className="lucide lucide-badge-check w-5 h-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Delivered in 48 hours. If you're not happy, you don't pay. Simple.</span>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 rounded-xl bg-white/[0.03] ring-1 ring-slate-700 px-4 py-4 md:px-6 md:py-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
<svg className="lucide lucide-zap w-4.5 h-4.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed tracking-wide">End-to-end handled by our team. You review and approve—done.</p>
</div>
<a className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[14px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-violet-400/40 shadow-lg shadow-violet-900/30 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl" href="#get-started" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7CAED 100%)'}}>
        Start Your Pilot →
      </a>
</div>
</div>
</section>
<section className="md:pt-24 md:pb-24 pt-16 pb-16">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="relative rounded-2xl bg-[#334155] ring-1 ring-slate-700 p-6 md:p-8 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
<div className="text-center mb-8 md:mb-10 transition-all duration-300 ease-in-out" data-reveal="" style={{transitionDelay: '0ms'}}>
<h2 className="text-[28px] md:text-[36px] leading-[1.1] tracking-tight text-white/95 font-medium" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
          The Simple Math That Makes Sense
        </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-300 ease-in-out" data-reveal="" style={{transitionDelay: '0ms'}}>
<div className="rounded-xl bg-[#1E293B] ring-1 ring-slate-700 p-5 md:p-6 border-l-2 hover:-translate-y-0.5 transition-all duration-300" style={{borderLeftColor: '#8B5CF6'}}>
<p className="text-[12px] md:text-[13px] text-slate-400">Webinar Cost</p>
<p className="mt-1 text-[20px] md:text-[22px] font-semibold tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>$5,000</p>
</div>
<div className="rounded-xl bg-[#1E293B] ring-1 ring-slate-700 p-5 md:p-6 border-l-2 hover:-translate-y-0.5 transition-all duration-300" style={{borderLeftColor: '#8B5CF6'}}>
<p className="text-[12px] md:text-[13px] text-slate-400">YouTube</p>
<p className="text-[20px] md:text-[22px] font-semibold text-white/95 tracking-tight mt-1" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>12 views</p>
</div>
<div className="rounded-xl bg-[#1E293B] ring-1 ring-slate-700 p-5 md:p-6 border-l-2 hover:-translate-y-0.5 transition-all duration-300" style={{borderLeftColor: '#8B5CF6'}}>
<p className="text-[12px] md:text-[13px] text-slate-400">PDF Reach</p>
<p className="mt-1 text-[20px] md:text-[22px] font-semibold tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Unlimited</p>
</div>
<div className="rounded-xl bg-[#1E293B] ring-1 ring-slate-700 p-5 md:p-6 border-l-2 hover:-translate-y-0.5 transition-all duration-300" style={{borderLeftColor: '#8B5CF6'}}>
<p className="text-[12px] md:text-[13px] text-slate-400">Your Time</p>
<p className="mt-1 text-[20px] md:text-[22px] font-semibold tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>5 minutes</p>
</div>
</div>
<p className="mt-8 md:mt-10 text-center text-[15px] md:text-[16px] text-slate-300 leading-relaxed tracking-wide transition-all duration-300 ease-in-out" data-reveal="" style={{transitionDelay: '0ms'}}>
        Stop letting expensive content die. Transform it into evergreen lead magnets.
      </p>
</div>
</div>
</section>
<section className="py-20 md:py-32" id="examples">
<div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
<h2 className="text-[28px] md:text-[36px] leading-[1.1] tracking-tight font-medium text-white/95 transition-all duration-300 ease-in-out" data-reveal="" style={{fontFamily: 'Poppins, Inter, sans-serif', transitionDelay: '0ms'}}>Examples That Turn Heads—and Capture Leads</h2>
<p className="mt-3 text-[15px] md:text-[16px] text-slate-300 leading-relaxed tracking-wide">Real-world webinar transformations crafted for B2B teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<article className="group rounded-xl overflow-hidden ring-1 ring-slate-700 bg-[#334155] hover:bg-[#334155]/90 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg" data-skeleton="">
<div className="relative">
<div <div="" className="relative aspect-[4/3] overflow-hidden bg-white/5 ring-1 ring-slate-700">
<img alt="Before-and-after PDF preview for a SaaS webinar" className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out" data-src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-60"></div>
<div className="absolute left-3 top-3">
<span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px] ring-1 ring-slate-700">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-emerald-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                        Case Study
                      </span>
</div>
</div>
<div className="p-4 md:p-5">
<h3 className="text-[17px] md:text-[18px] font-medium tracking-tight text-white/95 mb-1.5" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
                      SaaS: Turning Feature Demo into High-Converting Guide
                    </h3>
<p className="text-[14px] text-slate-300 leading-relaxed">
                      Repurposed a 45-min feature webinar into a 14-page guide with CTAs and data capture.
                    </p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 ring-1 ring-slate-700 text-slate-300">14 pages</span>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">+38% conversions</span>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/30 text-indigo-300">Brand-ready</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center text-[14px] text-slate-300 hover:text-white/95 transition-colors" href="#">
                        View Sample PDF
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center rounded-md px-3 py-1.5 text-[12px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-violet-400/40 transition-all" href="#get-started" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)'}}>
                        Repurpose Mine
                      </a>
</div>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-slate-700 bg-[#334155] hover:bg-[#334155]/90 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg" data-skeleton="">
<div className="relative">
<div className="relative aspect-[4/3] overflow-hidden bg-white/5 ring-1 ring-slate-700">
<img alt="Cybersecurity webinar turned into PDF checklist" className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out" data-src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" loading="lazy" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-60"></div>
<div className="absolute left-3 top-3">
<span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px] ring-1 ring-slate-700">
<svg className="lucide lucide-shield w-3.5 h-3.5 text-sky-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        Security
                      </span>
</div>
</div>
<div className="p-4 md:p-5">
<h3 className="text-[17px] md:text-[18px] font-medium tracking-tight text-white/95 mb-1.5" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
                      Cybersecurity: Webinar → Actionable Checklist
                    </h3>
<p className="text-[14px] text-slate-300 leading-relaxed">
                      Converted a thought-leadership session into a 10-step, high-retention checklist.
                    </p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 ring-1 ring-slate-700 text-slate-300">10 steps</span>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">+2.1x downloads</span>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-500/10 ring-1 ring-sky-400/30 text-sky-300">Lead capture</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center text-[14px] text-slate-300 hover:text-white/95 transition-colors" href="#">
                        View Sample PDF
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center rounded-md px-3 py-1.5 text-[12px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-violet-400/40 transition-all" href="#get-started" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)'}}>
                        Repurpose Mine
                      </a>
</div>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-slate-700 bg-[#334155] hover:bg-[#334155]/90 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg" data-skeleton="">
<div className="relative">
<div className="relative aspect-[4/3] overflow-hidden bg-white/5 ring-1 ring-slate-700">
<img alt="Enterprise webinar turned into executive PDF brief" className="absolute inset-0 h-full w-full object-cover opacity-0 blur-md transition-all duration-700 ease-out" data-src="https://images.unsplash.com/photo-1529336953121-a0f91c7f2e6b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" loading="lazy" src="https://images.unsplash.com/photo-1529336953121-a0f91c7f2e6b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 animate-pulse bg-slate-500/10" data-skeleton-bar=""></div>
<div className="absolute left-3 top-3">
<span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px] ring-1 ring-slate-700">
</span></div></div></div></article></div></section></div>
</section>

<section className="md:py-32 pt-20 pb-20">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-10 md:mb-14">
<h2 className="text-[28px] md:text-[36px] leading-[1.1] tracking-tight font-medium text-white/95 transition-all duration-300 ease-in-out" data-reveal="" style={{fontFamily: 'Poppins, Inter, sans-serif', transitionDelay: '0ms'}}>
        Simple pricing structure
      </h2>
<p className="text-right text-[13px] md:text-[14px] text-slate-400 tracking-wide">48-hour turnaround guaranteed</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

<div className="order-1 lg:order-2 will-change-transform transition-all duration-300" data-reveal="" style={{transitionDelay: '0ms'}}>
<div className="flex justify-center mb-3 md:mb-4">
<span className="inline-flex items-center gap-1.5 text-[12px] ring-1 ring-rose-400/20 animate-pulse text-rose-200 bg-rose-400/10 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Only 2 slots available for October<span>🔥</span></span>
</div>
<div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-[0_0_30px_rgba(124,58,237,0.18)] hover:shadow-[0_0_40px_rgba(124,58,237,0.28)] transition-all duration-300">
<div className="rounded-[18px] bg-[#1E293B] ring-1 ring-slate-700 p-6 md:p-7">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 text-[12px] ring-1 ring-violet-400/30 text-violet-200 bg-violet-500/15 rounded-full pt-1 pr-2.5 pb-1 pl-2.5">Most Popular<svg className="lucide lucide-heart lucide-sparkles w-3.5 h-3.5" data-icon-replaced="true" data-lucide="heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(221, 214, 254)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg></span>
</div>
<h3 className="mt-4 text-[20px] md:text-[22px] font-semibold tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Growth</h3>
<p className="text-[14px] text-slate-300 mt-1 leading-relaxed tracking-wide">3 webinars per month</p>
<div className="mt-4 flex items-end gap-2">
<span className="text-white/95 text-[56px] leading-none font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>$2,500</span>
<span className="mb-2 text-[13px] text-slate-400">/ month</span>
</div>
<ul className="mt-5 space-y-2.5 text-[14px] text-slate-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Includes 3 PDFs / month</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Priority 48-hour delivery</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Unlimited stakeholder seats</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#8B5CF6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Brand-aligned design each PDF</span>
</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-[14px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-violet-400/40 shadow-lg shadow-violet-900/30 transition-all duration-300 ease-in-out hover:brightness-110" href="#get-started" style={{background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)', animation: 'pulseSoft 5s ease-in-out infinite'}}>
              Reserve your slot →
            </a>
</div>
</div>
</div>

<div className="order-2 lg:order-1 will-change-transform transition-all duration-300" data-reveal="" style={{transitionDelay: '0ms'}}>
<div className="rounded-2xl bg-[#1E293B] ring-1 ring-slate-700 p-6 md:p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-full bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-300/30">
<svg className="lucide lucide-award w-3.5 h-3.5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
              Founders Rate
            </span>
</div>
<h3 className="mt-4 text-[20px] md:text-[22px] font-semibold tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Pilot</h3>
<p className="text-[14px] leading-relaxed text-slate-300 tracking-wide mt-1">Perfect for testing the waters</p>
<div className="mt-4">
<div className="flex items-end gap-2">
<span className="text-white/95 text-[48px] leading-none font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>$750</span>
</div>
<div className="mt-1 flex items-center gap-2">
<span className="text-[14px] text-slate-400 line-through">$1,500</span>
<span className="inline-flex items-center gap-1.5 text-[12px] rounded-full px-2 py-0.5 bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-300/30">
                50% off
              </span>
</div>
<p className="mt-2 text-[12px] text-slate-400 tracking-wide">Founders rate limited to 1x per customer. Afterwards: $1,500 per webinar.</p>
</div>
<ul className="mt-5 space-y-2.5 text-[14px] text-slate-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">8-12 page professionally designed PDF</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">48-hour delivery</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#10B981'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Two rounds of edits</span>
</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-[14px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-emerald-400/40 shadow-lg shadow-emerald-900/20 transition-all duration-300 ease-in-out hover:brightness-110" href="#get-started" style={{background: 'linear-gradient(90deg,#34D399 0%, #10B981 100%)'}}>
            Start with a sample →
          </a>
</div>
</div>

<div className="order-3 lg:order-3 will-change-transform transition-all duration-300" data-reveal="" style={{transitionDelay: '0ms'}}>
<div className="md:p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-[#1E293B] ring-slate-700 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Scale</h3>
<p className="text-[12px] md:text-[13px] text-slate-400 tracking-wide mt-1">For content machines</p>
<p className="text-[14px] text-slate-300 mt-1 leading-relaxed tracking-wide">6 webinars per month</p>
<div className="mt-4 flex items-end gap-2">
<span className="text-white/95 text-[48px] md:text-[56px] leading-none font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>$4,800</span>
<span className="mb-2 text-[13px] text-slate-400">/ month</span>
</div>
<ul className="mt-5 space-y-2.5 text-[14px] text-slate-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#3B82F6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Includes 6 PDFs / month</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#3B82F6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Dedicated account manager</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#3B82F6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Priority 48-hour delivery</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#3B82F6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Quarterly brand system refresh</span>
</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-[14px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-blue-400/40 shadow-lg shadow-blue-900/20 transition-all duration-300 ease-in-out hover:brightness-110" href="#get-started" style={{background: 'linear-gradient(90deg,#60A5FA 0%, #3B82F6 100%)'}}>
            Talk to sales →
          </a>
</div>
</div>
</div>
<p className="md:mt-8 text-[12px] md:text-[13px] text-slate-400 text-center mt-6">Save 40+ hours of internal design time per webinar</p>
<p className="mt-8 text-center text-[12px] md:text-[13px] text-slate-400">
      Need a custom plan for events or large batches? <a className="text-slate-200 hover:text-white underline-offset-2 hover:underline" href="#get-started">Get in touch</a>.
    </p>
</div>
</section></div>
<div className="mx-auto max-w-7xl px-6 md:px-8 mt-10 md:mt-12">
<div className="relative rounded-2xl bg-[#334155] ring-1 ring-slate-700 p-6 md:p-8 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.35)] overflow-hidden">
<div className="pointer-events-none absolute -top-24 -right-16 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-24 -left-16 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl"></div>
<div className="relative text-center">
<h3 className="text-[28px] md:text-[36px] leading-[1.1] tracking-tight font-medium text-white/95" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
        Stop Letting Your Webinars Die
      </h3>
<p className="mt-2 text-[15px] md:text-[16px] text-slate-300 leading-relaxed tracking-wide">
        Every day your webinar sits unwatched is a day of lost leads
      </p>
<div className="mt-6 flex items-center justify-center">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-medium text-white/95 ring-1 ring-slate-700 hover:ring-emerald-400/40 shadow-lg shadow-emerald-900/20 transition-all duration-300 ease-in-out hover:scale-[1.03]" href="#get-started" style={{background: 'linear-gradient(90deg,#34D399 0%, #10B981 100%)'}}>
          Start Your $750 Pilot →
        </a>
</div>
<div className="mt-4 flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[12px] text-slate-400">
<span className="animate-pulse">⏰ Next batch starts in:</span>
<span className="tabular-nums tracking-tight text-slate-300" data-batch-timer="">[47:59:59]</span>
</span>
</div>
</div>
</div>
</div>
<footer className="relative z-10 border-t border-slate-800/80 bg-[#0B1222]">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-white/10 ring-1 ring-slate-700 flex items-center justify-center">
<span className="text-white/95 text-[13px] font-medium tracking-tight">WLL</span>
</div>
<span className="text-white/95 text-[18px] font-semibold" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>WebinarLeadLab</span>
</div>
<p className="mt-3 text-[14px] text-slate-300 max-w-sm">We turn your webinars into professional, conversion-optimized PDFs so your best content keeps working—long after the event ends.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="h-9 w-9 rounded-md ring-1 ring-slate-700 bg-white/5 hover:bg-white/10 flex items-center justify-center transition" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5 text-slate-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="h-9 w-9 rounded-md ring-1 ring-slate-700 bg-white/5 hover:bg-white/10 flex items-center justify-center transition" href="#">
<svg className="lucide lucide-linkedin w-4.5 h-4.5 text-slate-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div>
<h4 className="text-white/95 font-medium mb-3" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Company</h4>
<ul className="space-y-2 text-[14px] text-slate-300">
<li><a className="hover:text-white/95 transition" href="#process">How it works</a></li>
<li><a className="hover:text-white/95 transition" href="#examples">Examples</a></li>
<li><a className="hover:text-white/95 transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white/95 transition" href="#get-started">Get started</a></li>
</ul>
</div>
<div>
<h4 className="text-white/95 font-medium mb-3" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Resources</h4>
<ul className="space-y-2 text-[14px] text-slate-300">
<li><a className="hover:text-white/95 transition" href="#">Templates</a></li>
<li><a className="hover:text-white/95 transition" href="#">Guide: PDF lead magnets</a></li>
<li><a className="hover:text-white/95 transition" href="#">Distribution checklist</a></li>
</ul>
</div>
<div>
<h4 className="text-white/95 font-medium mb-3" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Legal</h4>
<ul className="space-y-2 text-[14px] text-slate-300">
<li><a className="hover:text-white/95 transition" href="#">Privacy</a></li>
<li><a className="hover:text-white/95 transition" href="#">Terms</a></li>
<li><a className="hover:text-white/95 transition" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-10 h-px w-full bg-slate-800"></div>
<div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
<p className="text-[13px] text-slate-400">© <span id="year">2025</span> WebinarLeadLab. All rights reserved.</p>
<p className="text-[12px] text-slate-500">Built with care for marketers who love ROI.</p>
</div>
</div>
</footer>


    </>
  );
}
