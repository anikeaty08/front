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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      // Lucide
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      });

      // Sticky header shrink
      const header = document.getElementById('site-header');
      const toggleHeader = () => {
        const scrolled = window.scrollY > 10;
        header.classList.toggle('h-24', !scrolled);
        header.classList.toggle('h-16', scrolled);
        header.classList.toggle('border-b', scrolled);
        if (scrolled) header.style.borderColor = '#E8E3DA';
        else header.style.borderColor = 'transparent';
      };
      toggleHeader();
      window.addEventListener('scroll', toggleHeader, { passive: true });

      // Mobile nav
      const menuBtn = document.getElementById('menu-btn');
      const mobileNav = document.getElementById('mobile-nav');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          const open = mobileNav.classList.contains('hidden') ? false : true;
          mobileNav.classList.toggle('hidden');
          menuBtn.setAttribute('aria-expanded', String(!open));
          const icon = menuBtn.querySelector('svg');
          if (icon) icon.setAttribute('data-lucide', open ? 'menu' : 'x');
          if (window.lucide) lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        });
      }

      // Reveal on scroll (prefers-reduced-motion aware)
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const autoReveal = () => {
        document.querySelectorAll('section').forEach(section => {
          section.querySelectorAll(':scope > *').forEach((el, idx) => {
            el.setAttribute('data-reveal', '');
            el.style.transition = prefersReduced ? 'none' : 'opacity 400ms ease-out, transform 400ms ease-out, filter 500ms ease-out';
            el.style.willChange = 'opacity, transform';
            el.style.opacity = '0';
            el.style.transform = 'translateY(14px)';
            el.style.filter = 'blur(3px)';
            el.style.transitionDelay = prefersReduced ? '0ms' : `${Math.min(90, 40 + idx * 30)}ms`;
          });
        });
      };
      autoReveal();

      const onIntersect = (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.filter = 'blur(0px)';
            obs.unobserve(el);
          }
        });
      };
      if (!prefersReduced && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(onIntersect, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
        document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
      } else {
        document.querySelectorAll('[data-reveal]').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none'; });
      }

      // Counters
      const counters = document.querySelectorAll('.counter');
      const animateCounter = (el) => {
        const target = Number(el.getAttribute('data-target')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const start = 0;
        const duration = 1600;
        const startTime = performance.now();
        const format = (val) => {
          if (suffix.includes('M')) return Math.round(val) + 'M+';
          if (suffix.includes('yrs')) return Math.round(val) + ' yrs';
          if (suffix.includes('+') && !suffix.includes('M')) return Math.round(val) + '+';
          return Math.round(val) + (suffix || '');
        };
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const val = start + (target - start) * (progress < 1 ? (1 - Math.pow(1 - progress, 3)) : 1);
          el.textContent = format(val);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      if ('IntersectionObserver' in window) {
        const io2 = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });
        counters.forEach(c => io2.observe(c));
      } else {
        counters.forEach(animateCounter);
      }

      // Testimonials carousel
      const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
      let tIndex = 0;
      const showSlide = (i) => {
        slides.forEach((s, idx) => {
          const active = idx === i;
          s.classList.toggle('hidden', !active);
          s.style.opacity = active ? '1' : '0';
        });
      };
      document.getElementById('tnext')?.addEventListener('click', () => {
        tIndex = (tIndex + 1) % slides.length;
        showSlide(tIndex);
      });
      document.getElementById('tprev')?.addEventListener('click', () => {
        tIndex = (tIndex - 1 + slides.length) % slides.length;
        showSlide(tIndex);
      });

      // Timezone note + helper
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'your local timezone';
      const tzNote = document.getElementById('tz-note');
      if (tzNote) tzNote.textContent = `Detected timezone: ${tz}`;
      const timeHelp = document.getElementById('time-help');
      if (timeHelp) timeHelp.textContent = `We’ll schedule in your local timezone (${tz}).`;

      // Basic form validation (consent)
      const form = document.querySelector('#contact form');
      form?.addEventListener('submit', (e) => {
        const consent = document.getElementById('consent');
        if (consent && !consent.checked) {
          e.preventDefault();
          alert('Please check the consent box to proceed.');
        }
      });
    
}
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
      

<header aria-label="Primary" className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 transition-all duration-300 h-24 flex items-center" id="site-header">
<div className="mx-auto w-full max-w-[1200px] px-5">
<div className="grid grid-cols-12 items-center">

<div className="col-span-6 md:col-span-2 flex items-center">
<a aria-label="Global Expat Wealth Home" className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C] rounded-md" href="#">

<img alt="Global Expat Wealth logo" className="h-12 md:h-14 w-auto object-contain" decoding="async" height="60" src="assets/logo.webp" width="200" />
</a>
</div>

<nav className="col-span-6 md:col-span-7 hidden md:flex items-center justify-center gap-8 text-[15.5px]">
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline text-[#1D2733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C] rounded-sm" href="#services">Services</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline text-[#1D2733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C] rounded-sm" href="#why">Why Us</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline text-[#1D2733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C] rounded-sm" href="#process">Process</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline text-[#1D2733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C] rounded-sm" href="#insights">Insights</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline text-[#1D2733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C] rounded-sm" href="#contact">Contact</a>
</nav>

<div className="col-span-6 md:col-span-3 flex items-center justify-end gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full px-6 py-3 text-white text-[15.5px] font-medium tracking-tight shadow-sm transition hover:shadow md:px-7 md:py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F7A8C]" href="#contact" style={{backgroundColor: `#1F7A8C`}}>
              Book a Free 30‑Min Call
            </a>

<button aria-controls="mobile-nav" aria-expanded="false" className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-[#E8E3DA] text-[#0F2B46] hover:bg-[#F6F1E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C]" id="menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="absolute left-0 right-0 top-full hidden md:hidden bg-white border-b border-[#E8E3DA]" id="mobile-nav">
<div className="max-w-[1200px] mx-auto px-5 py-4 grid gap-3">
<a className="py-2 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#services">Services</a>
<a className="py-2 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#why">Why Us</a>
<a className="py-2 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#process">Process</a>
<a className="py-2 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#insights">Insights</a>
<a className="py-2 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white text-[15.5px] font-medium tracking-tight shadow-sm transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F7A8C]" href="#contact" style={{backgroundColor: `#1F7A8C`}}>Book a Free 30‑Min Call</a>
</div>
</div>
</header>

<section aria-label="Hero" className="relative isolate">
<div className="absolute inset-0">
<img alt="British expat couple walking a seaside promenade at sunset in Asia" className="h-[70vh] md:h-[78vh] w-full object-cover" fetchpriority="high" height="1400" loading="eager" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&auto=format&fit=crop&w=2400&h=1400" width="2400" />
<div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent"></div>
</div>
<div className="relative mx-auto max-w-[1200px] px-5 h-[70vh] md:h-[78vh] flex items-end">
<div className="max-w-[72ch] pb-12 sm:pb-16 md:pb-20 space-y-6">
<h1 className="text-white tracking-tight leading-tight font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`, fontWeight: `700`, fontSize: `clamp(44px,4vw,56px)`}}>
            Secure your UK pension. Enjoy life in Asia.
          </h1>
<p className="text-white/90 text-[18px] md:text-[18px] font-medium">
            UK‑qualified, independent advice for British and Western expats. Grow, protect, and pass on your wealth with confidence.
          </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-white text-[16px] font-medium tracking-tight shadow-sm transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70" href="#contact" style={{backgroundColor: `#1F7A8C`}}>
              Book a Free 30‑Min Consultation
            </a>
<a className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[16px] font-medium tracking-tight border transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 bg-white/90 text-[#1F7A8C] border-[#1F7A8C]" href="#guide">
              Download the 2025 Expat Retirement Checklist
            </a>
</div>
<div className="text-white text-[15px] font-semibold pt-2">
            27 years’ cross‑border experience • Independent (access to any fund or ETF)
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" id="services" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="grid grid-cols-12 gap-5 items-end">
<div className="col-span-12 md:col-span-8">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>What we do</h2>
<p className="mt-2 text-[17px] md:text-[18px] max-w-[72ch]">
            Independent advice built around your life in Asia — from UK pension transfers to efficient, global investing and family protection.
          </p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="group rounded-[16px] bg-white border border-[#E8E3DA] p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-md grid place-items-center" style={{backgroundColor: `#E8E3DA`}}>
<i className="w-6 h-6 text-[#0F2B46]" data-lucide="wallet"></i>
</div>
<div>
<h3 className="text-[#0F2B46] tracking-tight text-[24px] md:text-[26px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>UK Pension Transfers and Consolidation</h3>
<p className="mt-2 text-[17px]">
                Merge frozen plans into a modern SIPP or QROPS, cut fees, and invest properly for your life in Asia.
              </p>
<p className="mt-3 text-[15.5px] text-[#1D2733]/80">
<span className="font-medium" style={{color: `#1F7A8C`}}>Payoff:</span> Cut fees and see everything in one login.
              </p>
</div>
</div>
</article>

<article className="group rounded-[16px] bg-white border border-[#E8E3DA] p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-md grid place-items-center" style={{backgroundColor: `#E8E3DA`}}>
<i className="w-6 h-6 text-[#0F2B46]" data-lucide="line-chart"></i>
</div>
<div>
<h3 className="text-[#0F2B46] tracking-tight text-[24px] md:text-[26px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>Tax‑Efficient Investing</h3>
<p className="mt-2 text-[17px]">
                Global ETF portfolios and gross roll‑up structures designed to keep more growth working for you.
              </p>
<p className="mt-3 text-[15.5px] text-[#1D2733]/80">
<span className="font-medium" style={{color: `#1F7A8C`}}>Payoff:</span> Keep more of your returns compounding.
              </p>
</div>
</div>
</article>

<article className="group rounded-[16px] bg-white border border-[#E8E3DA] p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-md grid place-items-center" style={{backgroundColor: `#E8E3DA`}}>
<i className="w-6 h-6 text-[#0F2B46]" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-[#0F2B46] tracking-tight text-[24px] md:text-[26px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>Life‑Stage Protection and Estate Planning</h3>
<p className="mt-2 text-[17px]">
                Life assurance, critical‑illness, and beneficiary trusts so family access is fast and probate delays are avoided.
              </p>
<p className="mt-3 text-[15.5px] text-[#1D2733]/80">
<span className="font-medium" style={{color: `#1F7A8C`}}>Payoff:</span> Family access is immediate when life happens.
              </p>
</div>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" id="why" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="grid grid-cols-12 gap-5 md:gap-7">
<div className="col-span-12 md:col-span-7">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>
            Your empathetic guide through cross‑border finance
          </h2>
<p className="mt-4 text-[17px] md:text-[18px] max-w-[72ch]">
            Retirement planning as an expat can feel like a maze – UK rules, Asian residency, currency swings. We make it simple. Independent means we can select any solution or fund on the market – no sales quotas, only your best outcome.
          </p>
<p className="mt-4 text-[17px] md:text-[18px] max-w-[72ch]">
            After 27 years advising across Bangkok, KL and Dubai, we’ve learned the job is part numbers, part listening. You share the life you want; we build the plan that gets you there.
          </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5" data-lucide="check-circle" style={{color: `#1F7A8C`}}></i>
<span className="text-[17px]">Independent adviser, 27 yrs experience</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5" data-lucide="check-circle" style={{color: `#1F7A8C`}}></i>
<span className="text-[17px]">Access to any fund or ETF or insurer</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5" data-lucide="check-circle" style={{color: `#1F7A8C`}}></i>
<span className="text-[17px]">Ongoing stewardship, not one‑off sales</span>
</li>
</ul>
</div>
<div className="col-span-12 md:col-span-5">
<div className="rounded-[16px] overflow-hidden border border-[#E8E3DA]" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<img alt="Expat couple discussing a retirement plan with an adviser at a Bangkok café." className="w-full h-full object-cover" height="900" loading="lazy" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&fm=webp&auto=format&fit=crop&w=1200&h=900" style={{filter: `saturate(1.06) contrast(1.02) hue-rotate(-8deg)`}} width="1200" />
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="grid grid-cols-12 gap-5">
<div className="col-span-12">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>Challenges we solve</h2>
</div>
<div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{gap: `14px`}}>

<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-5 flex gap-3 items-start" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<i className="w-5 h-5 text-[#0F2B46]" data-lucide="files"></i>
<div>
<div className="font-medium">“Frozen” UK pensions</div>
<p className="text-[15.5px] mt-1">We model SIPP vs QROPS and handle the transfer paperwork end to end.</p>
</div>
</div>
<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-5 flex gap-3 items-start" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<i className="w-5 h-5 text-[#0F2B46]" data-lucide="coins"></i>
<div>
<div className="font-medium">Currency erosion</div>
<p className="text-[15.5px] mt-1">FX‑aware portfolios and multi‑currency platforms reduce leakage.</p>
</div>
</div>
<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-5 flex gap-3 items-start" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<i className="w-5 h-5 text-[#0F2B46]" data-lucide="file-warning"></i>
<div>
<div className="font-medium">Tax surprises</div>
<p className="text-[15.5px] mt-1">Clear, actionable tax planning to keep more returns compounding.</p>
</div>
</div>
<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-5 flex gap-3 items-start" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<i className="w-5 h-5 text-[#0F2B46]" data-lucide="heart-handshake"></i>
<div>
<div className="font-medium">Family security</div>
<p className="text-[15.5px] mt-1">Beneficiary trusts, life and CI cover so your family has immediate access if life happens.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" id="process" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="grid grid-cols-12 gap-5 md:gap-7 items-start">
<div className="col-span-12">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>How it works</h2>
</div>
<div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-6" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full grid place-items-center text-[#0F2B46] text-sm font-semibold" style={{backgroundColor: `#C5A989`}}>1</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: `Merriweather,Georgia,serif`, color: `#0F2B46`}}>Discovery Call</h3>
</div>
<p className="mt-3 text-[17px]">Map goals, pensions, passports, timeline. <span className="text-[#1D2733]/70">(15–20 min)</span></p>
</div>

<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-6" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full grid place-items-center text-[#0F2B46] text-sm font-semibold" style={{backgroundColor: `#C5A989`}}>2</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: `Merriweather,Georgia,serif`, color: `#0F2B46`}}>Your Personal Blueprint</h3>
</div>
<p className="mt-3 text-[17px]">The right mix of transfers, lump‑sum investing and protection. <span className="text-[#1D2733]/70">(delivered in 5–7 days)</span></p>
</div>

<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-6" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full grid place-items-center text-[#0F2B46] text-sm font-semibold" style={{backgroundColor: `#C5A989`}}>3</div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: `Merriweather,Georgia,serif`, color: `#0F2B46`}}>Ongoing Stewardship</h3>
</div>
<p className="mt-3 text-[17px]">Reviews, rebalancing, currency hedging, next‑gen planning. <span className="text-[#1D2733]/70">(quarterly or as needed)</span></p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="rounded-[16px] bg-white/70 border border-[#E8E3DA] p-6 md:p-8" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 items-center">
<div className="text-center">
<div className="text-[32px] md:text-[36px] font-semibold tracking-tight" style={{color: `#0F2B46`, fontFamily: `Merriweather,Georgia,serif`}}>
<span className="counter" data-suffix="+" data-target="2000">0</span>
</div>
<div className="text-[14.5px] mt-1">expat plans optimised</div>
</div>
<div className="text-center">
<div className="text-[32px] md:text-[36px] font-semibold tracking-tight" style={{color: `#0F2B46`, fontFamily: `Merriweather,Georgia,serif`}}>
<span className="counter" data-suffix="M+" data-target="420">0</span>
</div>
<div className="text-[14.5px] mt-1">USD guided across borders</div>
</div>
<div className="text-center">
<div className="text-[32px] md:text-[36px] font-semibold tracking-tight" style={{color: `#0F2B46`, fontFamily: `Merriweather,Georgia,serif`}}>
<span className="counter" data-suffix=" yrs" data-target="27">0</span>
</div>
<div className="text-[14.5px] mt-1">advisory experience</div>
</div>
<div className="text-center">
<div className="text-[32px] md:text-[36px] font-semibold tracking-tight" style={{color: `#0F2B46`, fontFamily: `Merriweather,Georgia,serif`}}>
<span className="counter" data-suffix="" data-target="15">0</span>
</div>
<div className="text-[14.5px] mt-1">jurisdictions covered</div>
</div>
</div>
<p className="text-[13px] text-[#1D2733]/70 mt-3 text-center">Figures include team history.</p>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="grid grid-cols-12 gap-5">
<div className="col-span-12">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>What clients say</h2>
</div>
<div className="col-span-12">
<div className="rounded-[16px] bg-white border border-[#E8E3DA] p-6 md:p-8 relative overflow-hidden" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="relative" id="testimonial-track">

<figure className="testimonial-slide opacity-100 transition-opacity duration-500">
<blockquote className="text-[18px] md:text-[20px] leading-relaxed">
                  “Dan moved three frozen UK schemes into one low‑fee SIPP and cut annual charges by 55%. I finally know what my retirement in Chiang Mai will cost.”
                </blockquote>
<figcaption className="mt-4 text-[15.5px] text-[#1D2733]/80">
                  — John D., British engineer, Thailand
                </figcaption>
</figure>

<figure className="testimonial-slide opacity-0 hidden">
<blockquote className="text-[18px] md:text-[20px] leading-relaxed">
                  “Clear, patient guidance on QROPS vs SIPP, and a plan that fits our life between Bangkok and London.”
                </blockquote>
<figcaption className="mt-4 text-[15.5px] text-[#1D2733]/80">
                  — Sarah & Mark, UK teachers, Thailand
                </figcaption>
</figure>
<figure className="testimonial-slide opacity-0 hidden">
<blockquote className="text-[18px] md:text-[20px] leading-relaxed">
                  “They coordinated the transfer paperwork and set up a cost‑efficient ETF portfolio. Seamless.”
                </blockquote>
<figcaption className="mt-4 text-[15.5px] text-[#1D2733]/80">
                  — Alex R., British designer, Malaysia
                </figcaption>
</figure>
</div>
<div className="mt-6 flex items-center justify-end gap-2">
<button aria-label="Previous testimonial" className="h-10 w-10 grid place-items-center rounded-md border border-[#E8E3DA] hover:bg-[#F6F1E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C]" id="tprev">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next testimonial" className="h-10 w-10 grid place-items-center rounded-md border border-[#E8E3DA] hover:bg-[#F6F1E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C]" id="tnext">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" id="guide" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="rounded-[16px] border border-[#E8E3DA] bg-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 items-center" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="md:col-span-7">
<h3 className="text-[28px] md:text-[32px] tracking-tight font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`, color: `#0F2B46`}}>
            Download the British Expat’s 2025 Retirement Checklist
          </h3>
<p className="mt-3 text-[17px] md:text-[18px] max-w-[65ch]">
            Learn the 7 tax traps, how to beat UK inflation abroad, and the pot you’ll need for a 60k THB per month lifestyle.
          </p>
<ul className="mt-4 space-y-2">
<li className="flex gap-2">
<i className="w-5 h-5" data-lucide="check" style={{color: `#1F7A8C`}}></i>
<span className="text-[16px]">The 7 tax traps Brits abroad still fall into</span>
</li>
<li className="flex gap-2">
<i className="w-5 h-5" data-lucide="check" style={{color: `#1F7A8C`}}></i>
<span className="text-[16px]">SIPP vs QROPS – a simple decision tree</span>
</li>
<li className="flex gap-2">
<i className="w-5 h-5" data-lucide="check" style={{color: `#1F7A8C`}}></i>
<span className="text-[16px]">What 60k THB per month actually costs after inflation and FX</span>
</li>
</ul>
<div className="mt-5 flex gap-3">
<a className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white text-[15.5px] font-medium tracking-tight shadow-sm transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F7A8C]" href="#contact" style={{backgroundColor: `#1F7A8C`}}>
              Get My Copy (PDF)
            </a>
</div>
<p className="text-[13px] text-[#1D2733]/70 mt-2">We’ll email the PDF and one useful follow‑up. No spam.</p>
</div>
<div className="md:col-span-5">
<div className="rounded-[16px] overflow-hidden border border-[#E8E3DA]" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<img alt="Flat‑lay of passport, sunglasses and printed retirement checklist." className="w-full h-full object-cover" height="900" loading="lazy" src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&fm=webp&auto=format&fit=crop&w=1200&h=900" style={{filter: `saturate(1.06) contrast(1.02) hue-rotate(-8deg)`}} width="1200" />
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1200px] px-5" id="insights" style={{paddingBlock: `clamp(48px,5vw,80px)`}}>
<div className="flex items-end justify-between gap-4">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>Insights</h2>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline text-[15.5px]" href="#">All articles</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="rounded-[16px] overflow-hidden bg-white border border-[#E8E3DA] transition hover:-translate-y-1" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="ETF chart and documents on a desk" className="w-full h-full object-cover" height="750" loading="lazy" src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&auto=format&fit=crop&w=1200&h=750" width="1200" />
</div>
<div className="p-5">
<h3 className="text-[22px] tracking-tight font-semibold text-[#0F2B46]" style={{fontFamily: `Merriweather,Georgia,serif`}}>QROPS vs SIPP in 2025: Which Wins for Thailand‑Based Brits?</h3>
<p className="mt-2 text-[15.5px]">A concise overview to help you make better cross‑border decisions as a UK or Western expat in Asia.</p>
<div className="mt-3 flex items-center justify-between text-[13.5px] text-[#1D2733]/70">
<span>6 min read</span>
<a className="inline-flex items-center gap-1 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#">
                Read more <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="rounded-[16px] overflow-hidden bg-white border border-[#E8E3DA] transition hover:-translate-y-1" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="Tax forms and calculator on a table" className="w-full h-full object-cover" height="750" loading="lazy" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&auto=format&fit=crop&w=1200&h=750" width="1200" />
</div>
<div className="p-5">
<h3 className="text-[22px] tracking-tight font-semibold text-[#0F2B46]" style={{fontFamily: `Merriweather,Georgia,serif`}}>How the UK Overseas Transfer Charge Could Affect You</h3>
<p className="mt-2 text-[15.5px]">Understand when it applies and the practical steps to avoid a nasty surprise later.</p>
<div className="mt-3 flex items-center justify-between text-[13.5px] text-[#1D2733]/70">
<span>5 min read</span>
<a className="inline-flex items-center gap-1 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#">
                Read more <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="rounded-[16px] overflow-hidden bg-white border border-[#E8E3DA] transition hover:-translate-y-1" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="Currency notes and a simple hedging notebook" className="w-full h-full object-cover" height="750" loading="lazy" src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&auto=format&fit=crop&w=1200&h=750" width="1200" />
</div>
<div className="p-5">
<h3 className="text-[22px] tracking-tight font-semibold text-[#0F2B46]" style={{fontFamily: `Merriweather,Georgia,serif`}}>Currency Hedging 101 for Long‑Term Expats</h3>
<p className="mt-2 text-[15.5px]">Simple ways to reduce FX drag and keep more of your returns compounding over decades.</p>
<div className="mt-3 flex items-center justify-between text-[13.5px] text-[#1D2733]/70">
<span>7 min read</span>
<a className="inline-flex items-center gap-1 underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#">
                Read more <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: `
      {
        "@context":"https://schema.org",
        "@graph":[
          {"@type":"Article","headline":"QROPS vs SIPP in 2025: Which Wins for Thailand‑Based Brits?","author":{"@type":"Organization","name":"Global Expat Wealth"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.globalexpatwealth.com/insights/qrops-vs-sipp-2025"},"image":"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&auto=format&fit=crop&w=1200&h=750"},
          {"@type":"Article","headline":"How the UK Overseas Transfer Charge Could Affect You","author":{"@type":"Organization","name":"Global Expat Wealth"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.globalexpatwealth.com/insights/otc-impact"},"image":"https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&auto=format&fit=crop&w=1200&h=750"},
          {"@type":"Article","headline":"Currency Hedging 101 for Long‑Term Expats","author":{"@type":"Organization","name":"Global Expat Wealth"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.globalexpatwealth.com/insights/currency-hedging-101"},"image":"https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&auto=format&fit=crop&w=1200&h=750"}
        ]
      }
      `
}} />
</section>

<section className="mx-auto max-w-[1200px] px-5" id="contact" style={{paddingBlock: `clamp(64px,6vw,96px)`}}>
<div className="grid grid-cols-12 gap-5 md:gap-7 items-start">
<div className="col-span-12 md:col-span-5">
<h2 className="text-[#0F2B46] tracking-tight text-[32px] md:text-[36px] font-semibold" style={{fontFamily: `Merriweather,Georgia,serif`}}>
            Ready to bridge the gap to a worry‑free retirement?
          </h2>
<p className="mt-3 text-[17px] md:text-[18px] max-w-[65ch]">
            Tell us where you call home and what keeps you up at night – we’ll reply within 24 hours.
          </p>
<div className="mt-6 rounded-[16px] overflow-hidden border border-[#E8E3DA]" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<img alt="Calm coastal cityscape in Asia at golden hour" className="w-full h-full object-cover" height="900" loading="lazy" src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&auto=format&fit=crop&w=1200&h=900" width="1200" />
</div>
</div>
<div className="col-span-12 md:col-span-7">
<form action="#" className="rounded-[16px] bg-white border border-[#E8E3DA] p-6 md:p-8" method="post" novalidate="" style={{boxShadow: `0 10px 30px rgba(15,43,70,.08)`}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div>
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="name">Name</label>
<input className="mt-1 block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] placeholder:text-[#1D2733]/50 focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="name" name="name" required type="text" />
</div>

<div>
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="email">Email</label>
<input className="mt-1 block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] placeholder:text-[#1D2733]/50 focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="email" name="email" required type="email" />
</div>

<div className="md:col-span-1">
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="country">Country of residence</label>
<div className="relative mt-1">
<select className="appearance-none block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="country" name="country">
<option>Thailand</option>
<option>Malaysia</option>
<option>Singapore</option>
<option>Hong Kong</option>
<option>Vietnam</option>
<option>Indonesia</option>
<option>Philippines</option>
<option>UAE</option>
<option>Other</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1D2733]/70" data-lucide="chevron-down"></i>
</div>
</div>

<div className="md:col-span-1">
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="pension">UK pension situation</label>
<input className="mt-1 block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] placeholder:text-[#1D2733]/50 focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="pension" name="pension" placeholder="e.g., 3 frozen schemes, want to consolidate" type="text" />
</div>

<div className="md:col-span-1">
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="preferred-date">Preferred date</label>
<input className="mt-1 block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="preferred-date" name="preferred_date" type="date" />
</div>

<div className="md:col-span-1">
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="preferred-time">Preferred time</label>
<input className="mt-1 block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="preferred-time" name="preferred_time" type="time" />
<p className="text-[12.5px] text-[#1D2733]/70 mt-1" id="time-help">We’ll schedule in your local timezone (Asia/Bangkok).</p>
<p className="text-[12.5px] text-[#1D2733]/70 mt-1" id="tz-note">Detected timezone: …</p>
</div>

<div className="md:col-span-1">
<label className="block text-[14.5px] font-medium text-[#0F2B46]" htmlFor="message">Anything else?</label>
<textarea className="mt-1 block w-full rounded-md border border-[#E8E3DA] bg-white px-3 py-2.5 text-[16px] focus:border-[#1F7A8C] focus:ring-2 focus:ring-[#1F7A8C]" id="message" name="message" rows="3"></textarea>
</div>
</div>

<div className="mt-5">
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 h-5 w-5 rounded border-[#E8E3DA] text-[#1F7A8C] focus:ring-[#1F7A8C]" id="consent" name="consent" type="checkbox" />
<span className="text-[14.5px]">I agree to be contacted about my enquiry and understand this site provides general information only.</span>
</label>
</div>

<div className="mt-6">
<button className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-white text-[16px] font-medium tracking-tight shadow-sm transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F7A8C] disabled:opacity-60" style={{backgroundColor: `#1F7A8C`}} type="submit">
                Book a Free 30‑Min Call
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="mt-8 pt-10 pb-12 border-t" style={{borderColor: `#E8E3DA`, backgroundColor: `#ffffff`}}>
<div className="mx-auto max-w-[1200px] px-5">
<div className="grid grid-cols-12 gap-5 md:gap-7 items-start">
<div className="col-span-12 md:col-span-3">
<div className="inline-flex items-center">
<img alt="Global Expat Wealth logo" className="h-10 w-auto object-contain" decoding="async" height="48" src="assets/logo.webp" width="160" />
</div>
</div>
<div className="col-span-12 md:col-span-6">
<nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14.5px]">
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#services">Services</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#why">Why Us</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#process">Process</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#insights">Insights</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#contact">Contact</a>
<a className="underline decoration-[#1F7A8C]/30 underline-offset-2 hover:no-underline" href="#">Privacy</a>
</nav>
</div>
<div className="col-span-12 md:col-span-3">
<div className="flex items-center justify-start md:justify-end gap-3">
<a aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-md border border-[#E8E3DA] hover:bg-[#F6F1E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A8C]" href="https://facebook.com/GlobalExpatWealth" rel="noopener" target="_blank">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
<div className="col-span-12">
<p className="mt-6 text-[13.5px] text-[#1D2733]/80">
              General information only – not personal advice. Advice provided by an independent adviser registered in relevant jurisdictions. We may introduce specialist managers or tax professionals where appropriate.
            </p>
</div>
</div>
</div>
</footer>



    </>
  );
}
