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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    hamburgerBtn.classList.toggle('active', menuOpen);
    mobileMenu.classList.toggle('open', menuOpen);
    mobileOverlay.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileOverlay.addEventListener('click', () => { if(menuOpen) toggleMenu(); });

  // Close menu on link click
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => { if (menuOpen) toggleMenu(); });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) toggleMenu();
  });

  // Active states
  const currentPath = window.location.pathname;

  // Highlight active mobile link
  document.querySelectorAll('[data-mobile-nav]').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-link');
    }
  });

  // Highlight active quick nav
  document.querySelectorAll('[data-quick-nav]').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-quick');
    }
  });

  // Highlight active bottom nav
  document.querySelectorAll('[data-bottom-nav]').forEach(tab => {
    if (tab.getAttribute('href') === currentPath) {
      tab.classList.add('active-tab');
    }
  });

  // Desktop nav active state
  document.querySelectorAll('.navlinks a[data-nav]').forEach(link => {
    if(link.getAttribute('href') === currentPath && currentPath !== '/') {
      link.classList.add('text-white');
      link.classList.remove('text-slate-400');
    }
  });

  // Hide/show bottom nav on scroll
  let lastScrollY = 0;
  const bottomNav = document.getElementById('bottomNav');
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      bottomNav.classList.add('hidden-nav');
    } else {
      bottomNav.classList.remove('hidden-nav');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  // Tilt Effect for cards
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width) - 0.5;
      const yPct = (y / rect.height) - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${xPct * 4}deg) rotateX(${yPct * -4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });
  });

  // Haptic-style feedback on mobile link tap
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('touchstart', () => {
      link.style.transform = 'scale(0.98)';
    }, { passive: true });
    link.addEventListener('touchend', () => {
      link.style.transform = 'scale(1)';
    }, { passive: true });
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
      
<div className="bg-grid"></div>
<div className="glow"></div>

<div className="mobile-overlay fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" id="mobileOverlay"></div>

<header className="nav fixed top-0 w-full z-50 bg-[#070a0f]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="wrap navin max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="brand flex items-center gap-2 group" href="/home">
<span className="logo w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-300 to-blue-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(124,255,196,0.3)]">
<iconify-icon icon="solar:command-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
<span className="font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">Caledonia</span>
</a>

<nav className="navlinks hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" data-nav="" href="/home">Home</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" data-nav="" href="/pricing">Pricing</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" data-nav="" href="/about">About</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" data-nav="" href="/faqs">FAQs</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" data-nav="" href="/terms-and-conditions">Terms</a>
<a className="btn btn-primary ml-2 px-5 py-2 rounded-full text-xs font-bold text-[#050a10] bg-gradient-to-r from-[#7CFFC4] to-[#76B6FF] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(124,255,196,0.2)]" href="/audit">Free Audit</a>
</nav>

<button aria-label="Toggle menu" className="hamburger lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors" id="hamburgerBtn">
<span className="hamburger-line w-5 h-[1.5px] bg-slate-300 rounded-full block"></span>
<span className="hamburger-line w-5 h-[1.5px] bg-slate-300 rounded-full block"></span>
<span className="hamburger-line w-5 h-[1.5px] bg-slate-300 rounded-full block"></span>
</button>
</div>
</header>

<div className="mobile-menu lg:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-[#070a0f]/98 backdrop-blur-2xl overflow-y-auto" id="mobileMenu">
<nav className="max-w-md mx-auto px-6 pt-6 pb-32 flex flex-col gap-1.5">

<div className="quick-nav flex gap-2 overflow-x-auto pb-4 mb-2 -mx-1 px-1">
<a className="quick-nav-item flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-400" data-quick-nav="" href="/home">
<iconify-icon icon="solar:home-smile-linear" width="14"></iconify-icon> Home
      </a>
<a className="quick-nav-item flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-400" data-quick-nav="" href="/pricing">
<iconify-icon icon="solar:tag-price-linear" width="14"></iconify-icon> Pricing
      </a>
<a className="quick-nav-item flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-400" data-quick-nav="" href="/about">
<iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> About
      </a>
<a className="quick-nav-item flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-400" data-quick-nav="" href="/faqs">
<iconify-icon icon="solar:chat-round-dots-linear" width="14"></iconify-icon> FAQs
      </a>
<a className="quick-nav-item flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-400" data-quick-nav="" href="/terms">
<iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon> Terms
      </a>
<div className="swipe-hint flex-shrink-0 flex items-center text-slate-600 pl-1">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<a className="mobile-link relative flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium text-slate-300 border border-transparent hover:text-white hover:bg-white/5 transition-all" data-mobile-nav="" href="/home">
<div className="active-indicator absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-emerald-300 shadow-[0_0_8px_#7CFFC4]"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div>Home</div>
<div className="text-xs text-slate-500 font-normal mt-0.5">Overview &amp; intro</div>
</div>
<iconify-icon className="text-slate-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="mobile-link relative flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium text-slate-300 border border-transparent hover:text-white hover:bg-white/5 transition-all" data-mobile-nav="" href="/pricing">
<div className="active-indicator absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-emerald-300 shadow-[0_0_8px_#7CFFC4]"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:tag-price-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div>Pricing</div>
<div className="text-xs text-slate-500 font-normal mt-0.5">Packages &amp; options</div>
</div>
<iconify-icon className="text-slate-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="mobile-link relative flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium text-slate-300 border border-transparent hover:text-white hover:bg-white/5 transition-all" data-mobile-nav="" href="/about">
<div className="active-indicator absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-emerald-300 shadow-[0_0_8px_#7CFFC4]"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div>About</div>
<div className="text-xs text-slate-500 font-normal mt-0.5">Who's behind Caledonia</div>
</div>
<iconify-icon className="text-slate-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="mobile-link relative flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium text-slate-300 border border-transparent hover:text-white hover:bg-white/5 transition-all" data-mobile-nav="" href="/faqs">
<div className="active-indicator absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-emerald-300 shadow-[0_0_8px_#7CFFC4]"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div>FAQs</div>
<div className="text-xs text-slate-500 font-normal mt-0.5">Common questions</div>
</div>
<iconify-icon className="text-slate-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="mobile-link relative flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium text-slate-300 border border-transparent hover:text-white hover:bg-white/5 transition-all" data-mobile-nav="" href="/terms">
<div className="active-indicator absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-emerald-300 shadow-[0_0_8px_#7CFFC4]"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div>Terms &amp; Conditions</div>
<div className="text-xs text-slate-500 font-normal mt-0.5">Legal information</div>
</div>
<iconify-icon className="text-slate-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<div className="mobile-cta mt-6 pt-6 border-t border-white/5">
<a className="btn-primary flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold w-full active:scale-[0.98] transition-transform" href="/audit">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
        Book Your Free Audit
      </a>
<p className="text-center text-xs text-slate-500 mt-3">No commitment — just clear feedback on your site</p>
</div>

<div className="mobile-contact mt-6 pt-6 border-t border-white/5">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-4">Quick Contact</p>
<div className="flex gap-3">
<a className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 active:scale-95 transition-all" href="tel:07702518340">
<iconify-icon className="text-emerald-300" icon="solar:phone-calling-linear" width="16"></iconify-icon>
          Call
        </a>
<a className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 active:scale-95 transition-all" href="mailto:Caledoniadigitalstudios1@gmail.com">
<iconify-icon className="text-blue-300" icon="solar:letter-linear" width="16"></iconify-icon>
          Email
        </a>
<a className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 active:scale-95 transition-all" href="https://instagram.com">
<iconify-icon className="text-purple-300" icon="solar:camera-linear" width="16"></iconify-icon>
          Insta
        </a>
</div>
</div>
</nav>
</div>

<nav className="bottom-nav lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070a0f]/90 backdrop-blur-xl border-t border-white/10" id="bottomNav">
<div className="flex items-center justify-around px-2 pt-2 pb-3" style={{paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))'}}>
<a className="bottom-nav-item flex flex-col items-center gap-1 py-1 px-3 text-slate-500" data-bottom-nav="" href="/home">
<iconify-icon icon="solar:home-smile-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
<span className="bottom-dot w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_6px_#7CFFC4]"></span>
</a>
<a className="bottom-nav-item flex flex-col items-center gap-1 py-1 px-3 text-slate-500" data-bottom-nav="" href="/pricing">
<iconify-icon icon="solar:tag-price-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Pricing</span>
<span className="bottom-dot w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_6px_#7CFFC4]"></span>
</a>
<a className="relative flex flex-col items-center -mt-5" href="/audit">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-300 to-blue-400 flex items-center justify-center text-slate-900 shadow-[0_0_25px_rgba(124,255,196,0.3)] active:scale-90 transition-transform">
<iconify-icon icon="solar:calendar-add-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-400 mt-1">Audit</span>
</a>
<a className="bottom-nav-item flex flex-col items-center gap-1 py-1 px-3 text-slate-500" data-bottom-nav="" href="/about">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">About</span>
<span className="bottom-dot w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_6px_#7CFFC4]"></span>
</a>
<a className="bottom-nav-item flex flex-col items-center gap-1 py-1 px-3 text-slate-500" data-bottom-nav="" href="/faqs">
<iconify-icon icon="solar:chat-round-dots-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">FAQs</span>
<span className="bottom-dot w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_6px_#7CFFC4]"></span>
</a>
</div>
</nav>
<main className="pt-16 pb-24 lg:pb-24 overflow-hidden">

<section className="py-20 max-w-[1100px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">

<div>
<p className="text-sm font-semibold opacity-80 text-emerald-300 mb-2.5">
          Edinburgh-based • Websites
        </p>
<h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
          If customers can't trust you online,
          they won't book you.
        </h1>
<p className="text-lg text-slate-300/90 leading-relaxed mb-6">
          We build high-converting websites for local businesses that turn Google traffic into calls, enquiries, and bookings —
          with a clean brand, fast load speed, and clear next steps.
        </p>
<div className="flex flex-wrap gap-2.5 mb-2.5">
<a className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm transition-transform hover:-translate-y-0.5" href="https://calendly.com/thompsonross719/30min" rel="noreferrer" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
            Book a free 30-min call
          </a>
<a className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm text-slate-200 border border-white/20 bg-white/5 hover:bg-white/10 transition-colors" href="/audit">
<iconify-icon icon="solar:clipboard-check-linear" width="18"></iconify-icon>
            Get a free website audit
          </a>
</div>
<p className="text-sm text-slate-500/70 mt-1.5 font-medium">
          No pressure. If we're not a fit, we'll tell you.
        </p>
</div>

<div aria-label="Credibility stats" className="border border-white/15 rounded-[18px] p-5 bg-[#0b1018]/50 backdrop-blur-sm shadow-xl">
<div className="flex items-center gap-3 py-3">
<div className="text-4xl font-extrabold text-white leading-none">75%</div>
<div className="text-sm font-bold text-slate-300/85 leading-tight">
            of people judge credibility<br/>based on website design.
          </div>
</div>
<div className="border-t border-white/10 my-1"></div>
<div className="flex items-center gap-3 py-3">
<div className="text-4xl font-extrabold text-white leading-none">97%</div>
<div className="text-sm font-bold text-slate-300/85 leading-tight">
            of consumers read online reviews<br/>for local businesses.
          </div>
</div>
<div className="text-xs text-slate-500/70 mt-3 leading-relaxed">
          Sources: Stanford Web Credibility Research • BrightLocal Local Consumer Review Survey (2026)
        </div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
        Serious businesses invest in how they're perceived.
      </h2>
<p className="text-lg text-slate-400 leading-relaxed">
        Your website is often the first impression someone has of your business.
        In seconds, visitors decide whether you look established or replaceable.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:crown-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Professional positioning</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          Clean structure, clear messaging, strong calls-to-action.
        </p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Built for local competition</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          Designed specifically for service-based businesses in Edinburgh.
        </p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Conversion-focused</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          Not just attractive — built to turn visitors into enquiries.
        </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
<div className="max-w-3xl mx-auto text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
        Most businesses don't lose customers to competitors…
      </h2>
<p className="text-lg text-slate-400">
        They lose them at the moment of doubt.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">When someone searches you</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          If your site looks outdated (or you don't have one), customers assume the business is the same.
        </p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sort-horizontal-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">When someone compares options</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          They pick the business that feels most legitimate — clear services, clear pricing, clear booking.
        </p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">When someone's ready to book</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          If it's not effortless to call, message, or book… they move on.
        </p>
</div>
</div>
<div className="flex flex-wrap gap-3 mt-10 justify-center">
<a className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:-translate-y-0.5" href="https://calendly.com/thompsonross719/30min" rel="noreferrer" target="_blank">
        Fix your online presence
        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-300 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" href="/audit">
        Start with a free audit
      </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Who we build for</h2>
<p className="text-lg text-slate-400 leading-relaxed">
        If you rely on local customers, a strong website isn't optional — it's your sales system.
      </p>
</div>
<div className="flex flex-wrap justify-center gap-3">
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
        Trades (Plumbers, Joiners, Electricians)
      </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
        Barbers &amp; Salons
      </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
        Cafés &amp; Hospitality
      </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
        Clinics &amp; Local Services
      </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
        Gyms &amp; Coaches
      </div>
<div className="px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10 transition-all cursor-default">
        Any business that needs enquiries
      </div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
<div className="text-center max-w-2xl mx-auto mb-12">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-emerald-300 mb-5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
        Edinburgh, Scotland
      </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
        Proudly built in Edinburgh
      </h2>
<p className="text-lg text-slate-400 leading-relaxed">
        From Stockbridge to Leith, Bruntsfield to Portobello —
        local businesses deserve a digital presence that matches their real-world reputation.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:compass-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Local understanding</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          We understand the competitive landscape of Edinburgh service businesses.
        </p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Direct communication</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          No overseas outsourcing. Clear, fast responses.
        </p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Long-term growth</h3>
<p className="text-sm text-slate-400 leading-relaxed">
          Built for businesses planning to grow, not just exist.
        </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
<div className="card-gradient rounded-3xl p-8 md:p-12 text-center md:text-left">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          If your website is missing or unclear,<br className="hidden md:block"/> customers pick someone else.
        </h2>
<p className="text-slate-400">
          People compare options fast. Your site needs to show what you do, why you're solid, and how to book — instantly.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magnet-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Capture leads 24/7</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Enquiry forms, click-to-call buttons, and booking links that actually convert visitors.
          </p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Look premium instantly</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Clean design aligned to your brand value. No cheap "template" feel.
          </p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-200 mb-2">Show up locally</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Local SEO foundations built-in so Edinburgh customers can actually find you.
          </p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 gap-8 items-stretch">
<div className="card-gradient rounded-3xl p-8 md:p-10" data-tilt="">
<h2 className="text-2xl font-semibold text-white mb-2">What we build</h2>
<p className="text-sm text-slate-400 mb-8">No fluff. Just what drives enquiries.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-300 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
            Home, Services, About, Contact (plus extras)
          </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-300 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
            Click-to-call, enquiry form, map, reviews
          </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-300 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
            Fast loading + mobile-first layout
          </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-300 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
            Tracking setup (GA4) so you know what works
          </li>
</ul>
</div>
<div className="card-gradient rounded-3xl p-8 md:p-10 flex flex-col justify-between" data-tilt="">
<div>
<h2 className="text-2xl font-semibold text-white mb-2">How it works</h2>
<p className="text-sm text-slate-400 mb-8">Simple process. Fast delivery.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
<span className="text-xs font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">01</span>
<span className="text-sm font-medium text-slate-200">Free audit + plan</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
<span className="text-xs font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">02</span>
<span className="text-sm font-medium text-slate-200">Build + copywriting</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
<span className="text-xs font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">03</span>
<span className="text-sm font-medium text-slate-200">Launch + support</span>
</div>
</div>
</div>
<div className="flex gap-4 mt-8">
<a className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 flex items-center gap-1" href="/audit">
            Get Free Audit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-300" href="/faqs">FAQs</a>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-12 mb-20 lg:mb-12">
<div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-[#111620] to-[#070a0f] p-10 md:p-16 text-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<h2 className="relative text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
        Ready to stop losing enquiries?
      </h2>
<p className="relative text-slate-400 mb-10 max-w-lg mx-auto">
        Book the free audit and I'll send back clear improvements for your business — no pressure to buy.
      </p>
<div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
<a className="btn-primary px-8 py-3.5 rounded-full text-sm font-bold w-full md:w-auto flex items-center justify-center gap-2" href="/audit">
          Book Free Audit
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm font-semibold w-full md:w-auto hover:bg-white/10 transition-colors" href="/pricing">
          View Pricing
        </a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#05080c] py-16 pb-32 lg:pb-16">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
<div>
<div className="flex items-center gap-2 text-slate-200 font-semibold mb-4">
<iconify-icon className="text-emerald-300" icon="solar:command-linear"></iconify-icon> Caledonia
      </div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-4">
        Websites for Edinburgh service businesses — built to generate enquiries and build trust.
      </p>
<div className="flex flex-col gap-2 text-sm text-slate-500">
<a className="hover:text-slate-300 transition-colors flex items-center gap-2" href="mailto:Caledoniadigitalstudios1@gmail.com">
<iconify-icon className="text-emerald-300" icon="solar:letter-linear" width="14"></iconify-icon>
          Caledoniadigitalstudios1@gmail.com
        </a>
<a className="hover:text-slate-300 transition-colors flex items-center gap-2" href="tel:07702518340">
<iconify-icon className="text-emerald-300" icon="solar:phone-calling-linear" width="14"></iconify-icon>
          07702 518340
        </a>
</div>
</div>
<div className="flex flex-wrap gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-200 transition-colors" href="/pricing">Pricing</a>
<a className="hover:text-slate-200 transition-colors" href="/about">About</a>
<a className="hover:text-slate-200 transition-colors" href="/audit">Free Audit</a>
<a className="hover:text-slate-200 transition-colors" href="/faqs">FAQs</a>
<a className="hover:text-slate-200 transition-colors" href="/terms">Terms &amp; Conditions</a>
</div>
</div>
</footer>


    </>
  );
}
