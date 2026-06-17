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



    // Initialize Lucide icons
    // lucide.createIcons(); // Using CDN script automatically

    // Button hover effect
    function btnMove(e) {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--x', (e.clientX - r.left) + 'px');
      e.currentTarget.style.setProperty('--y', (e.clientY - r.top) + 'px');
    }

    // Scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade elements
    document.querySelectorAll('.scroll-fade').forEach(el => {
      observer.observe(el);
    });

    // FAQ Accordion functionality
    document.querySelectorAll('[data-faq-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const content = faqItem.querySelector('.faq-content');
        const icon = button.querySelector('[data-lucide="chevron-down"]');
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          const otherContent = item.querySelector('.faq-content');
          const otherIcon = item.querySelector('[data-lucide="chevron-down"]');
          if (item !== faqItem) {
            otherContent.style.maxHeight = '0px';
            if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });
        
        // Toggle current item
        if (isOpen) {
          content.style.maxHeight = '0px';
          if(icon) icon.style.transform = 'rotate(0deg)';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          if(icon) icon.style.transform = 'rotate(180deg)';
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
      

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/50 to-zinc-950"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>

<div className="pointer-events-none absolute inset-0" style={{backgroundImage: 'url(\'https://uploads-ssl.webflow.com/5f6d66c5f1e4a5f0c1b3b1a1/63a4d9b4b4c7d418f9ed2c73_noise.png\')', opacity: '0.2'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-40 transition animate-[slideInBlur_0.8s_ease-out_0.2s_forwards] bg-zinc-950/40 border-white/10 border-b blur-sm backdrop-blur translate-y-[-20px]">
<div className="max-w-7xl mx-auto px-6">
<div className="mt-4">
<div className="flex items-center justify-between pb-4">

<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center h-8 w-8 text-white">

<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="text-lg font-semibold text-white tracking-tighter uppercase">Argon Advisory</span>
</a>

<nav className="hidden md:flex gap-1 px-2 bg-zinc-900/40 border-white/10 border rounded-full p-1 items-center">
<a className="px-4 py-2 rounded-full transition hover:text-white text-sm font-medium text-zinc-400 hover:bg-white/5" href="#approach">Approach</a>
<a className="px-4 py-2 rounded-full transition hover:text-white text-sm font-medium text-zinc-400 hover:bg-white/5" href="#services">Services</a>
<a className="px-4 py-2 rounded-full transition hover:text-white text-sm font-medium text-zinc-400 hover:bg-white/5" href="#who-we-serve">Clients</a>
<a className="px-4 py-2 rounded-full transition hover:text-white text-sm font-medium text-zinc-400 hover:bg-white/5" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition border-white/10 bg-white text-zinc-950 hover:bg-zinc-200" href="#contact">
              Schedule Consultation
            </a>
</div>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="max-w-7xl mx-auto pt-40 pb-24 px-6 md:pt-48 md:pb-32">
<div className="flex flex-col text-center space-y-6 items-center">

<div className="relative animate-[scaleInBlur_1.2s_ease-out_0.6s_forwards] mb-8 blur-lg scale-50">
<div className="absolute -inset-8 bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)] blur-2xl"></div>
<div className="relative h-16 w-16 ring-1 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] flex ring-white/10 bg-zinc-900/80 backdrop-blur rounded-2xl items-center justify-center text-white p-3">
<svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
</div>

<div className="mb-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_0.8s_forwards]">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] border-white/10 bg-zinc-900/50 text-zinc-400">
<span className="h-1.5 w-1.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.1)] bg-white"></span>
            Family Office Services for $5M+ Households
          </span>
</div>

<h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b font-semibold opacity-0 translate-y-8 blur-sm animate-[slideInBlur_1s_ease-out_1s_forwards] from-white via-zinc-200 to-zinc-500">
<span className="block">Your Wealth Finally</span>
<span className="block">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-zinc-500">Has a Quarterback.</span>
</span>
</h1>

<p className="max-w-2xl sm:text-lg animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] text-zinc-400 opacity-0 mt-6 blur-sm translate-y-6 font-light leading-relaxed">
          Argon Advisory coordinates every aspect of your financial life — investments, tax strategy, estate planning, and insurance — so nothing falls through the cracks.
        </p>

<div className="pt-8 pb-8">
<div className="relative inline-block group">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-150 ease-out active:scale-[0.98] text-zinc-950 bg-white border-white border rounded-full px-8 py-4" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{'--x': '50%', '--y': '50%', '--o': '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold">
                Schedule a Consultation
                <svg className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</button>
<span className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

<div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_1.6s_forwards] text-zinc-500">
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">$380M+</div>
<div className="text-[10px] uppercase tracking-widest mt-1">Assets Advised</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">42</div>
<div className="text-[10px] uppercase tracking-widest mt-1">Families Served</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">100%</div>
<div className="text-[10px] uppercase tracking-widest mt-1">Fiduciary</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">2018</div>
<div className="text-[10px] uppercase tracking-widest mt-1">Established</div>
</div>
</div>
</div>
</section>
</main>

<section className="w-full max-w-7xl mx-auto px-6 py-20" id="approach">

<div className="flex mb-6 items-center justify-center scroll-fade">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-zinc-400 bg-white/5 border-white/10">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
        The Problem We Solve
      </span>
</div>

<div className="max-w-3xl scroll-fade scroll-fade-delay text-center mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Wealth Creates <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-400 italic font-['Playfair_Display']">Complexity.</span>
</h2>
<p className="md:text-lg text-zinc-400 mt-4 leading-relaxed">
        You manage a dozen relationships—advisors, CPAs, attorneys—who don't talk to each other. Opportunities fall through the cracks.
      </p>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden min-h-[22rem] scroll-fade scroll-fade-delay-3 hover:bg-white/[0.08] hover:ring-white/20 transition-all group bg-white/5 ring-white/10 ring-1 rounded-3xl">
<div className="absolute inset-0 group-hover:bg-[radial-gradient(40%_40%_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)] transition-all"></div>
<div className="p-8 relative z-20">
<h3 className="text-xl font-semibold tracking-tight text-white">One Team. Coordinated.</h3>
<p className="mt-2 text-sm max-w-sm text-zinc-400">
            We serve as the central hub. We evaluate, hire, and oversee every specialist you need, ensuring one cohesive strategy.
          </p>
</div>

<div className="absolute inset-0 top-12 overflow-hidden flex items-center justify-center">

<div className="pointer-events-none relative flex items-center justify-center scale-75 md:scale-100 mt-12">

<div className="absolute h-[340px] w-[340px] rounded-full border border-white/5 animate-pulse" style={{animationDelay: '0s'}}></div>
<div className="absolute h-[240px] w-[240px] rounded-full border border-white/10 animate-pulse" style={{animationDelay: '.6s'}}></div>
<div className="absolute h-[140px] w-[140px] rounded-full border border-white/20 animate-pulse" style={{animationDelay: '1.2s'}}></div>

<div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-zinc-900 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] z-10 p-5 text-white">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>

<div className="absolute h-[240px] w-[240px] animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center shadow-lg">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
<div className="absolute h-[240px] w-[240px] animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute bottom-10 left-0 h-10 w-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center shadow-lg">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
</div>
<div className="absolute h-[240px] w-[240px] animate-[spin_12s_linear_infinite]">
<div className="absolute bottom-10 right-0 h-10 w-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center shadow-lg">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
</div>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-3xl ring-1 p-8 min-h-[22rem] scroll-fade scroll-fade-delay-2 bg-white/5 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20 transition-all group">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent from-white/5"></div>
<div className="absolute -top-12 -right-10 h-48 w-48 rounded-full blur-2xl bg-white/5 group-hover:bg-white/10 transition-all"></div>

<div className="space-y-4 mb-8">
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm">
<span className="text-sm font-medium text-zinc-200">Fiduciary Duty</span>
<span className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg> Always
                </span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm">
<span className="text-sm font-medium text-zinc-200">Proprietary Products</span>
<span className="flex items-center gap-2 text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded-md">
                   Never
                </span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm">
<span className="text-sm font-medium text-zinc-200">Commissions</span>
<span className="flex items-center gap-2 text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded-md">
                   None
                </span>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold tracking-tight text-white">Unconflicted Advice</h3>
<p className="mt-2 text-sm text-zinc-400">
             We don't sell products. We don't accept commissions. We sit on your side of the table, 100% of the time.
          </p>
</div>
</article>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-10" id="services">

<div className="flex mb-12 items-center justify-center scroll-fade">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-zinc-400 bg-white/5 border-white/10">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
        Comprehensive Services
      </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 bg-white/5 ring-white/10 hover:bg-white/[0.08] transition-all group scroll-fade">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 ring-1 ring-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Investment Management</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
           Evidence-based, globally diversified portfolios. Tax-optimized and exposed to institutional strategies.
        </p>
</article>

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 bg-white/5 ring-white/10 hover:bg-white/[0.08] transition-all group scroll-fade scroll-fade-delay">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 ring-1 ring-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Tax Strategy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
           Proactive planning for income timing, Roth conversions, and entity structuring. We work directly with your CPA.
        </p>
</article>

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 bg-white/5 ring-white/10 hover:bg-white/[0.08] transition-all group scroll-fade scroll-fade-delay-2">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 ring-1 ring-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Estate &amp; Legacy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
           Coordinating with attorneys to ensure trusts are funded and your legacy intentions are executable.
        </p>
</article>

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 bg-white/5 ring-white/10 hover:bg-white/[0.08] transition-all group scroll-fade">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 ring-1 ring-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
           Objective review of life, disability, and liability coverage. We evaluate what you need, not what sells.
        </p>
</article>

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 bg-white/5 ring-white/10 hover:bg-white/[0.08] transition-all group scroll-fade scroll-fade-delay">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 ring-1 ring-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Executive Comp</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
           Specialized planning for stock options, RSUs, deferred comp, and concentrated positions.
        </p>
</article>

<article className="relative overflow-hidden rounded-2xl ring-1 p-6 bg-white/5 ring-white/10 hover:bg-white/[0.08] transition-all group scroll-fade scroll-fade-delay-2">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 ring-1 ring-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Family Governance</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
           Facilitating family meetings and financial education for the next generation.
        </p>
</article>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-20">
<div className="flex items-center justify-center scroll-fade">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-zinc-400 bg-white/5 border-white/10">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        Client Results
      </span>
</div>

<div className="max-w-3xl text-center mt-6 mx-auto scroll-fade scroll-fade-delay">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        What Our Clients <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-400 italic font-['Playfair_Display']">Experience</span>
</h2>
</div>

<div className="relative group mt-16 scroll-fade scroll-fade-delay-2 max-w-4xl mx-auto">

<div className="pointer-events-none absolute inset-x-6 -top-12 h-64 border border-white/5 bg-zinc-900/40 rounded-3xl opacity-40 scale-95 blur-[1px]"></div>
<div className="pointer-events-none absolute inset-x-3 -top-6 h-64 border border-white/5 bg-zinc-900/60 rounded-3xl opacity-70 scale-[0.98]"></div>

<div className="relative z-10 bg-zinc-900/80 border-white/10 border ring-white/10 ring-1 rounded-3xl backdrop-blur-xl p-8 md:p-12">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="text-zinc-500 mb-6">
<svg className="opacity-20" fill="currentColor" height="40" viewbox="0 0 24 24" width="40"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed italic font-['Playfair_Display']">
              "We interviewed five firms. Argon was the only one who asked about our CPA and estate attorney in the first meeting. That told us everything. They found $340k in tax savings in year one."
             </p>
<div className="mt-8 flex items-center gap-4">
<div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold border border-white/10">M</div>
<div>
<div className="text-white font-medium">M.R.</div>
<div className="text-sm text-zinc-500">Business Owner, Austin</div>
</div>
</div>
</div>

<div className="w-full md:w-64 space-y-4">
<div className="rounded-2xl border px-6 py-4 bg-white/5 border-white/10 backdrop-blur-sm">
<div className="text-2xl font-semibold text-white tracking-tight">$180k+</div>
<p className="mt-1 text-xs text-zinc-400 uppercase tracking-wide">Avg. 1st Year Tax Savings</p>
</div>
<div className="rounded-2xl border px-6 py-4 bg-white/5 border-white/10 backdrop-blur-sm">
<div className="text-2xl font-semibold text-white tracking-tight">98%</div>
<p className="mt-1 text-xs text-zinc-400 uppercase tracking-wide">Client Retention</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-20" id="who-we-serve">
<div className="flex items-center justify-center scroll-fade">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-zinc-400 bg-white/5 border-white/10">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
        Ideal Client Profiles
      </span>
</div>
<div className="max-w-3xl text-center mx-auto mt-6 mb-16 scroll-fade scroll-fade-delay">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Who We <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-400 italic font-['Playfair_Display']">Work With</span>
</h2>
</div>
<div className="grid gap-8 lg:grid-cols-3 scroll-fade scroll-fade-delay-3">

<div className="relative w-full h-fit overflow-hidden bg-gradient-to-r from-white/10 to-white/5 rounded-[1.5em] border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="p-8">
<h3 className="text-xl font-semibold tracking-tight text-white">Business Owners</h3>
<p className="mt-2 text-sm text-zinc-400">Navigating exits &amp; liquidity events</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Pre-sale planning &amp; valuation</span>
</div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Tax-efficient deal structuring</span>
</div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Post-exit wealth preservation</span>
</div>
</div>
</div>
</div>

<div className="relative w-full h-fit overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[1.5em] border border-white/20 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] ring-1 ring-white/10">
<div className="p-8">
<h3 className="text-xl font-semibold tracking-tight text-white">Corporate Executives</h3>
<p className="mt-2 text-sm text-zinc-400">Complex compensation structures</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>RSU &amp; Stock Option strategies</span>
</div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Deferred compensation planning</span>
</div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Concentrated stock management</span>
</div>
</div>
</div>
</div>

<div className="relative w-full h-fit overflow-hidden bg-gradient-to-r from-white/10 to-white/5 rounded-[1.5em] border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="p-8">
<h3 className="text-xl font-semibold tracking-tight text-white">Families</h3>
<p className="mt-2 text-sm text-zinc-400">Multi-generational wealth</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Family governance &amp; education</span>
</div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Trust &amp; Estate coordination</span>
</div>
<div className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="mt-0.5 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Philanthropic strategy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-20" id="faq">

<div className="max-w-3xl text-center mx-auto mb-16 scroll-fade">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Common <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-400 italic font-['Playfair_Display']">Questions</span>
</h2>
</div>

<div className="grid gap-6 lg:grid-cols-2">

<div className="relative overflow-hidden rounded-[1.5em] ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-all self-start scroll-fade scroll-fade-delay-2 p-8">
<div className="h-12 w-12 flex ring-white/10 ring-1 bg-black/40 rounded-xl items-center justify-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mt-4">Prefer to talk?</h3>
<p className="mt-2 text-sm text-zinc-400 mb-8">
            Schedule a confidential 20-minute discovery call. No obligation. No sales pressure.
          </p>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white text-zinc-950 px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition" href="#contact">
            Schedule Call
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>

<div className="scroll-fade scroll-fade-delay-3 space-y-4">

<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<button className="w-full flex gap-4 focus:outline-none text-left p-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm font-medium text-zinc-200">What is your minimum?</span>
<svg className="transition-transform duration-300 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-zinc-400 px-4" style={{maxHeight: '0px'}}>
<div className="pb-6 pt-2">
              We typically work with families who have $5M or more in investable assets. This allows us to deliver the comprehensive service level our clients expect.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<button className="w-full flex gap-4 focus:outline-none text-left p-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm font-medium text-zinc-200">Are you a fiduciary?</span>
<svg className="transition-transform duration-300 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-zinc-400 px-4" style={{maxHeight: '0px'}}>
<div className="pb-6 pt-2">
              Yes. 100% of the time. We are legally obligated to act in your best interest. We don't sell products, earn commissions, or have quotas.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<button className="w-full flex gap-4 focus:outline-none text-left p-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm font-medium text-zinc-200">Will you replace my current advisors?</span>
<svg className="transition-transform duration-300 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-zinc-400 px-4" style={{maxHeight: '0px'}}>
<div className="pb-6 pt-2">
              Not necessarily. If your CPA or attorney is excellent, we'll coordinate with them. If not, we'll help you find better specialists.
            </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<button className="w-full flex gap-4 focus:outline-none text-left p-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm font-medium text-zinc-200">How do you charge?</span>
<svg className="transition-transform duration-300 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-zinc-400 px-4" style={{maxHeight: '0px'}}>
<div className="pb-6 pt-2">
              We charge a transparent annual fee based on assets under advisement. We provide a complete fee schedule before you commit.
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-20 mb-20" id="contact">
<div className="relative scroll-fade visible text-center">
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight">
        Ready for Your Wealth to <br/> Finally Have a <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-400 italic font-['Playfair_Display']">Quarterback?</span>
</h2>
<p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
        Schedule a confidential discovery call. No obligation. Just a conversation about whether we can help.
      </p>
<div className="mt-10">
<button className="relative z-10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-150 ease-out active:scale-[0.98] text-zinc-950 bg-white border-white/20 border rounded-full px-10 py-4 font-semibold text-lg hover:bg-zinc-200">
           Schedule Your Consultation
         </button>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-zinc-500 text-sm">
<span>100% Confidential</span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span>No Sales Pitch</span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span>20-Minute Call</span>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<h4 className="text-white text-lg font-semibold tracking-tighter uppercase mb-6">Argon Advisory</h4>
<div className="space-y-2 text-sm text-zinc-500">
<p>100 Financial District Blvd, Suite 400</p>
<p>New York, NY 10005</p>
<p><a className="hover:text-white transition-colors" href="mailto:hello@argonadvisory.com">hello@argonadvisory.com</a></p>
</div>
</div>
<div className="grid grid-cols-2 gap-12 text-sm text-zinc-500">
<div className="space-y-3">
<a className="block hover:text-white transition-colors" href="#approach">Approach</a>
<a className="block hover:text-white transition-colors" href="#services">Services</a>
<a className="block hover:text-white transition-colors" href="#who-we-serve">Clients</a>
</div>
<div className="space-y-3">
<a className="block hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="block hover:text-white transition-colors" href="#">Disclosures</a>
<a className="block hover:text-white transition-colors" href="#">ADV Part 2</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2025 Argon Advisory. All rights reserved.</p>
<p>Argon Advisory is a registered investment adviser.</p>
</div>
</div>
</footer>



    </>
  );
}
