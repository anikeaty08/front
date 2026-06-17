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



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Reveal Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -80px 0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.clipzy-reveal');
            animatedElements.forEach((el) => {
                observer.observe(el);
            });

            // FAQ Dropdown Logic
            const faqBtns = document.querySelectorAll('.faq-btn');
            
            faqBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const icon = this.querySelector('.faq-icon');
                    const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

                    // Close all FAQs first smoothly
                    document.querySelectorAll('.faq-content').forEach(el => {
                        el.style.maxHeight = null;
                        el.style.opacity = '0';
                        el.style.paddingTop = '0';
                        el.style.paddingBottom = '0';
                    });
                    
                    document.querySelectorAll('.faq-icon').forEach(el => {
                        el.style.transform = 'rotate(0deg)';
                    });

                    // If it was not previously open, open it
                    if (!isExpanded) {
                        content.style.maxHeight = content.scrollHeight + 40 + "px";
                        content.style.opacity = '1';
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // Smoother Scroll-driven Scale Animation
            const revealTarget = document.getElementById('reveal-image-container');

            if(revealTarget) {
                window.addEventListener('scroll', () => {
                    window.requestAnimationFrame(() => {
                        const rect = revealTarget.getBoundingClientRect();
                        const windowHeight = window.innerHeight;
                        
                        let progress = (windowHeight - rect.top) / (windowHeight / 1.5);
                        progress = Math.max(0, Math.min(1, progress));
                        
                        const easeOut = progress * (2 - progress);
                        
                        const scale = 0.85 + (0.15 * easeOut);
                        revealTarget.style.transform = `scale(${scale})`;
                        
                        const radius = 2 - (1 * easeOut);
                        revealTarget.style.borderRadius = `${radius}rem`;
                    });
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
      

<nav className="fixed top-0 w-full bg-[var(--light)]/80 backdrop-blur-xl z-50 border-b border-[var(--primary)]/5 transition-all duration-500">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon className="text-[var(--secondary)]" height="28" icon="solar:programming-minimalistic-linear" width="28"></iconify-icon>
<span className="text-xl font-medium tracking-tight text-[var(--primary)]">ConnectWright</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-[var(--tertiary)] hover:text-[var(--primary)] transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-[var(--tertiary)] hover:text-[var(--primary)] transition-colors" href="#">Case Studies</a>
<a className="text-sm font-medium text-[var(--tertiary)] hover:text-[var(--primary)] transition-colors" href="#">About</a>
<a className="text-sm font-medium text-[var(--tertiary)] hover:text-[var(--primary)] transition-colors" href="#">Partners</a>
</div>

<div className="hidden md:flex">
<a className="inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--dark)] text-white transition-all duration-300 text-sm font-medium rounded-full py-2.5 px-6 shadow-sm" href="#">
                        Book a Consultation
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-[var(--primary)] p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="relative flex flex-col min-h-screen bg-[var(--light)] pt-32 pb-24 overflow-hidden items-center justify-center">


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[700px] aspect-square rounded-full border border-[var(--primary)]/5 animate-spin-premium z-0 pointer-events-none" style={{animationDirection: 'reverse', animationDuration: '160s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1000px] aspect-square rounded-full border border-[var(--primary)]/10 animate-spin-premium z-0 pointer-events-none">

<div className="absolute w-12 h-12 bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--primary)]/10 shadow-sm flex items-center justify-center z-10 animate-counter-spin text-[var(--primary)]" style={{top: '0%', left: '50%'}}>
<iconify-icon height="22" icon="ri:amazon-line" width="22"></iconify-icon>
</div>

<div className="absolute w-12 h-12 bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--primary)]/10 shadow-sm flex items-center justify-center z-10 animate-counter-spin text-[var(--primary)]" style={{top: '34.55%', left: '97.55%'}}>
<iconify-icon height="22" icon="ri:instagram-line" width="22"></iconify-icon>
</div>

<div className="absolute w-12 h-12 bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--primary)]/10 shadow-sm flex items-center justify-center z-10 animate-counter-spin text-[var(--primary)]" style={{top: '90.45%', left: '79.35%'}}>
<iconify-icon height="22" icon="ri:tiktok-line" width="22"></iconify-icon>
</div>

<div className="absolute w-12 h-12 bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--primary)]/10 shadow-sm flex items-center justify-center z-10 animate-counter-spin text-[var(--primary)]" style={{top: '90.45%', left: '20.65%'}}>
<iconify-icon height="22" icon="ri:meta-line" width="22"></iconify-icon>
</div>

<div className="absolute w-12 h-12 bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--primary)]/10 shadow-sm flex items-center justify-center z-10 animate-counter-spin text-[var(--primary)]" style={{top: '34.55%', left: '2.45%'}}>
<iconify-icon height="22" icon="ri:google-fill" width="22"></iconify-icon>
</div>
</div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center relative animate-subtle-float">

<div className="clipzy-reveal mb-8">
<span className="inline-block py-1.5 px-4 rounded-full border border-[var(--primary)]/10 bg-white/50 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase text-[var(--tertiary)]">
                    For 6–8 Figure Brand Owners
                </span>
</div>

<h1 className="clipzy-reveal delay-100 text-5xl md:text-7xl font-semibold text-[var(--primary)] tracking-tight leading-[1.05] mb-8">
                Strategic Marketing Leadership for 
                <span className="inline-flex items-center justify-center align-middle mx-1 md:mx-2 -translate-y-[2px] md:-translate-y-[4px] animate-fade-in-slow" style={{animationDelay: '500ms'}}>
<iconify-icon className="text-[var(--secondary)]" height="1.1em" icon="solar:star-fall-linear" width="1.1em"></iconify-icon>
</span>
<span className="font-playfair italic font-medium text-[var(--secondary)]">Growing Brands.</span>
</h1>

<p className="clipzy-reveal delay-200 text-lg md:text-xl font-medium text-[var(--tertiary)] max-w-3xl mx-auto leading-relaxed mb-12">
                We help brands figure out what marketing actually works, who should run it, and how to make every dollar perform. Whether as a strategic advisor, an operator guiding execution, or both, we diagnose your growth strategy, place the right partners, and stay involved to ensure execution delivers results.
            </p>

<div className="clipzy-reveal delay-300">
<a className="inline-flex items-center justify-center bg-[var(--secondary)] hover:opacity-90 transition-opacity text-[var(--primary)] text-base font-semibold rounded-full py-4 px-9 shadow-md" href="#">
                    Book a Free Strategy Call <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</main>

<section className="overflow-hidden bg-white border-y border-[var(--primary)]/5 py-5 relative z-20 shadow-sm">
<div className="marquee-mask relative overflow-hidden flex">
<div className="animate-marquee-x flex items-center gap-12 pr-12 opacity-80">

<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Paid Media</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">SEO</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">GEO</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Email</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Amazon</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">TikTok Shop</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Branding</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Creative</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">PR</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Affiliate</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Tracking</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Tech Stack</span>

<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Paid Media</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">SEO</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">GEO</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Email</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Amazon</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">TikTok Shop</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Branding</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Creative</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">PR</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Affiliate</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Tracking</span>
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] whitespace-nowrap">Tech Stack</span>
</div>
</div>
</section>

<section className="md:py-24 z-10 overflow-hidden pt-16 pb-16" id="scroll-reveal-section">
<div className="sm:px-6 lg:px-8 flex max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-center">
<div className="w-full h-[55vh] md:h-[70vh] origin-center will-change-transform rounded-[2rem] overflow-hidden shadow-2xl shadow-[var(--primary)]/10" id="reveal-image-container" style={{transform: 'scale(0.85)'}}>
<img alt="Strategic consulting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="bg-center mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7fe234e-f9b7-4d5e-96dc-3301257b123d_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<section className="bg-[var(--light)] pt-16 pb-32 relative z-20 border-t border-[var(--primary)]/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 relative z-10">
<p className="clipzy-reveal text-sm font-semibold tracking-widest uppercase text-[var(--tertiary)] mb-4">If any of these hit — you're in the right place.</p>
<h2 className="clipzy-reveal delay-100 md:text-5xl text-[var(--primary)] text-4xl font-semibold tracking-tight">Sound <span className="font-playfair italic font-medium text-[var(--secondary)]">Familiar?</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

<div className="clipzy-reveal delay-100 bg-white/80 backdrop-blur-sm p-8 rounded-[1.5rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.05)] hover:-translate-y-1 transition-transform duration-500">
<span className="text-xs font-semibold tracking-widest text-[var(--secondary)] mb-4 block">01</span>
<p className="text-xl font-medium text-[var(--primary)] leading-snug">You don't know what's actually driving results.</p>
</div>
<div className="clipzy-reveal delay-200 bg-white/80 backdrop-blur-sm p-8 rounded-[1.5rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.05)] hover:-translate-y-1 transition-transform duration-500">
<span className="text-xs font-semibold tracking-widest text-[var(--secondary)] mb-4 block">02</span>
<p className="text-xl font-medium text-[var(--primary)] leading-snug">You've been burned by the wrong agency.</p>
</div>
<div className="clipzy-reveal delay-300 bg-white/80 backdrop-blur-sm p-8 rounded-[1.5rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.05)] hover:-translate-y-1 transition-transform duration-500">
<span className="text-xs font-semibold tracking-widest text-[var(--secondary)] mb-4 block">03</span>
<p className="text-xl font-medium text-[var(--primary)] leading-snug">You're overpaying and you know it.</p>
</div>
<div className="clipzy-reveal delay-400 bg-white/80 backdrop-blur-sm p-8 rounded-[1.5rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.05)] hover:-translate-y-1 transition-transform duration-500">
<span className="text-xs font-semibold tracking-widest text-[var(--secondary)] mb-4 block">04</span>
<p className="text-xl font-medium text-[var(--primary)] leading-snug">Your team is stretched too thin.</p>
</div>
<div className="clipzy-reveal delay-500 bg-white/80 backdrop-blur-sm p-8 rounded-[1.5rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.05)] hover:-translate-y-1 transition-transform duration-500">
<span className="text-xs font-semibold tracking-widest text-[var(--secondary)] mb-4 block">05</span>
<p className="text-xl font-medium text-[var(--primary)] leading-snug">You don't know who to trust.</p>
</div>
<div className="clipzy-reveal delay-[600ms] bg-white/80 backdrop-blur-sm p-8 rounded-[1.5rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.05)] hover:-translate-y-1 transition-transform duration-500">
<span className="text-xs font-semibold tracking-widest text-[var(--secondary)] mb-4 block">06</span>
<p className="text-xl font-medium text-[var(--primary)] leading-snug">You're growing — but leaving money on the table.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-20">
<p className="clipzy-reveal text-sm font-semibold tracking-widest uppercase text-[var(--tertiary)] mb-4">That's exactly why we exist.</p>
<h2 className="clipzy-reveal delay-100 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--primary)] leading-tight">
                    You Don’t Need Another Agency.<br/>
<span className="text-[var(--secondary)] font-medium italic font-playfair">You Need Experience That Sees the Patterns.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="clipzy-reveal delay-100 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Current, Not Stale</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">Strategies built for today's algorithms and consumer behavior, not outdated playbooks.</p>
</div>
<div className="clipzy-reveal delay-200 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon className="" height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Strategic Diagnosis First</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">We don't prescribe tactics until we fully understand your unit economics and growth hurdles.</p>
</div>
<div className="clipzy-reveal delay-300 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon height="24" icon="solar:shield-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">We Fight For You</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">Positioned on your side of the table to audit partners, negotiate terms, and ensure accountability.</p>
</div>
<div className="clipzy-reveal delay-100 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Pattern Recognition</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">Leveraging data across multiple 8-figure brands to anticipate issues before they cost you.</p>
</div>
<div className="clipzy-reveal delay-200 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon className="" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">The Network</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">Direct access to vetted, top-tier operators and agencies that standard brands can't reach.</p>
</div>
<div className="clipzy-reveal delay-300 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon className="" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Ongoing Stewardship</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">We stay involved post-strategy to ensure execution aligns with the vision and ROI targets.</p>
</div>
<div className="clipzy-reveal delay-100 bg-white p-8 rounded-[1.5rem] shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)] border border-[var(--primary)]/5 hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full lg:col-start-2">
<div className="w-12 h-12 rounded-full bg-[var(--light)] flex items-center justify-center text-[var(--secondary)] mb-6">
<iconify-icon height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Straight Talk Only</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed flex-grow">No vanity metrics or agency fluff. Just transparent facts about what's working and what isn't.</p>
</div>
</div>
<div className="mt-16 text-center clipzy-reveal">
<a className="inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors tracking-wide uppercase" href="#">
                    Work With Us <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="overflow-hidden z-20 video-strip-container bg-white pb-32 relative">

<div className="flex w-max animate-slide-left mb-4 sm:mb-6">

<div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Strategy Session" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1598013924228-f336656b163c?w=800&amp;q=80"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Data Analytics" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Social Media Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Marketing Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Mobile Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Strategy Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Data Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Social Media Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Marketing Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Mobile Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>

<div className="flex w-max animate-slide-right">

<div className="flex gap-4 sm:gap-6 sm:pr-6 shrink-0 pr-4 gap-x-4 gap-y-4">

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Team Collaboration" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Creative Agency" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1662947368907-808ab49b9495?w=800&amp;q=80"/>
</div>

<div className="sm:w-[320px] lg:w-[360px] aspect-square overflow-hidden group cursor-pointer border-[var(--primary)]/10 shrink-0 w-[260px] border rounded-[1.5rem] relative shadow-sm">
<img alt="Performance Marketing" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&amp;q=80"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Data Analysis" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Design Blueprint" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="flex gap-4 sm:gap-6 sm:pr-6 shrink-0 pr-4">

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Team Collaboration" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Creative Agency" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Performance Marketing" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1661953118591-2f5be524698e?w=800&amp;q=80"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Data Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-[260px] sm:w-[320px] lg:w-[360px] aspect-square rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm border border-[var(--primary)]/10 shrink-0 bg-[var(--light)]">
<img alt="Design Blueprint" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="bg-[var(--light)] pt-32 pb-32 border-y border-[var(--primary)]/5">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-20">
<p className="clipzy-reveal text-sm font-semibold tracking-widest uppercase text-[var(--tertiary)] mb-4">What We Do</p>
<h2 className="clipzy-reveal delay-100 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--primary)] mb-6">
                    Full-Service Marketing.<br/>
<span className="font-playfair italic font-medium text-[var(--secondary)]">Built Around Your ROI.</span>
</h2>
<p className="clipzy-reveal delay-200 text-lg text-[var(--tertiary)] max-w-2xl mx-auto">We don't sell generic packages. We assemble the exact strategic mix required to scale your specific unit economics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="clipzy-reveal delay-100 bg-white rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)] overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-500">
<div className="h-48 w-full overflow-hidden">
<img alt="Strategy &amp; Consulting" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47a80352-0e9b-4230-8bae-67074bfcbe1d_1600w.png"/>
</div>
<div className="p-8 md:p-10 flex-1">
<h3 className="text-[var(--primary)] text-2xl font-semibold tracking-tight mb-4">Strategy &amp; Consulting</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">High-level advisory to build your roadmap, structure offers, and establish clear growth targets.</p>
</div>
</div>
<div className="clipzy-reveal delay-200 bg-white rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)] overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-500">
<div className="h-48 w-full overflow-hidden">
<img alt="Paid &amp; Performance" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9224eede-87ff-4ff9-8112-5640831b640d_1600w.png"/>
</div>
<div className="p-8 md:p-10 flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-[var(--primary)] mb-4">Paid &amp; Performance</h3>
<p className="text-[var(--tertiary)] leading-relaxed text-base">Meta, TikTok, Google, and Amazon ad management focused strictly on profitable acquisition.</p>
</div>
</div>
<div className="clipzy-reveal delay-300 bg-white rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)] overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-500">
<div className="h-48 w-full overflow-hidden">
<img alt="Organic &amp; Content" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8e70617-fe19-481d-a45a-36b13d0c7ef2_1600w.png"/>
</div>
<div className="p-8 md:p-10 flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-[var(--primary)] mb-4">Organic &amp; Content</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">SEO, short-form video ecosystems, and owned-media strategies that build compounding traffic.</p>
</div>
</div>
<div className="clipzy-reveal delay-100 bg-white rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)] overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-500">
<div className="h-48 w-full overflow-hidden">
<img alt="Creative &amp; Brand" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952c6196-f460-43bb-9ce4-b63fc4e1bb80_1600w.png"/>
</div>
<div className="p-8 md:p-10 flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-[var(--primary)] mb-4">Creative &amp; Brand</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">Direct-response creative paired with elevated brand positioning that builds long-term trust.</p>
</div>
</div>
<div className="clipzy-reveal delay-200 bg-white rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)] overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-500">
<div className="h-48 w-full overflow-hidden">
<img alt="Retention &amp; Lifecycle" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48d47f30-e001-4d61-a9ff-d9fd4ff40c53_1600w.png"/>
</div>
<div className="p-8 md:p-10 flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-[var(--primary)] mb-4">Retention &amp; Lifecycle</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">Email, SMS, and post-purchase funnels designed to maximize LTV and repeat purchase rates.</p>
</div>
</div>
<div className="clipzy-reveal delay-300 bg-white rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)] overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-500">
<div className="h-48 w-full overflow-hidden">
<img alt="Tracking &amp; Profitability" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08d53afd-33ce-4530-93cb-e0452b439a26_1600w.png"/>
</div>
<div className="p-8 md:p-10 flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-[var(--primary)] mb-4">Tracking &amp; Profitability</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">Server-side tracking setup, contribution margin analysis, and clear financial modeling.</p>
</div>
</div>
<div className="clipzy-reveal delay-100 md:col-span-2 lg:col-span-3 bg-[var(--primary)] rounded-[2rem] flex flex-col md:flex-row overflow-hidden border border-[var(--primary)]/10 shadow-xl group hover:-translate-y-1 transition-all duration-500">
<div className="p-10 md:w-1/2 flex flex-col justify-center z-10 bg-[var(--primary)]">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Tech Stack &amp; Infrastructure</h3>
<p className="text-base text-zinc-300 leading-relaxed max-w-md">We audit and implement the right software infrastructure to automate workflows, streamline operations, and provide unshakeable data truth across your entire ecosystem.</p>
</div>
<div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
<img alt="Tech Stack" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de45bedb-d475-4cc9-aa72-dce1fa4a1142_1600w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
<div className="mt-24 clipzy-reveal flex flex-col items-center max-w-3xl mx-auto text-center">
<div className="border-l-2 border-[var(--secondary)] pl-8 py-2">
<p className="text-2xl font-playfair italic text-[var(--tertiary)] leading-relaxed">"We don't do all of this for everyone. We find out what's right for your stage and build the right team around it."</p>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center bg-white border border-[var(--primary)]/10 hover:bg-[var(--primary)] hover:text-white transition-all duration-500 text-[var(--primary)] text-sm font-semibold rounded-full py-3 px-8 shadow-sm" href="#">
                        See How We Work <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-20">
<p className="clipzy-reveal text-sm font-semibold tracking-widest uppercase text-[var(--tertiary)] mb-4">How It Works</p>
<h2 className="clipzy-reveal delay-100 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--primary)]">
                    From First Call to <span className="font-playfair italic font-medium text-[var(--secondary)]">Full Clarity — Fast.</span>
</h2>
</div>

<div className="relative mt-16">

<div className="hidden md:block absolute top-0 left-6 right-6 h-[2px] -translate-y-1/2 bg-[var(--primary)]/5 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--secondary)]/30 to-transparent w-full h-full animate-flow-x"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">

<div className="clipzy-reveal delay-100 relative group">
<div className="hidden md:block absolute top-0 left-0 w-6 h-6 rounded-full bg-white border-4 border-[var(--light)] z-10 -mt-3 flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_15px_rgba(201,169,106,0.3)] transition-all duration-500">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
</div>
<div className="md:mt-8">
<span className="text-sm font-bold tracking-widest text-[var(--secondary)] block mb-3">01</span>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Discovery &amp; Diagnosis</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">A deep dive into your current metrics, team structure, and bottlenecks. We look under the hood.</p>
</div>
</div>

<div className="clipzy-reveal delay-200 relative group">
<div className="hidden md:block absolute top-0 left-0 w-6 h-6 rounded-full bg-white border-4 border-[var(--light)] z-10 -mt-3 flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_15px_rgba(201,169,106,0.3)] transition-all duration-500">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
</div>
<div className="md:mt-8">
<span className="text-sm font-bold tracking-widest text-[var(--secondary)] block mb-3">02</span>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Strategic Blueprint</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">We present a customized action plan detailing exact resource allocation and expected ROI timelines.</p>
</div>
</div>

<div className="clipzy-reveal delay-300 relative group">
<div className="hidden md:block absolute top-0 left-0 w-6 h-6 rounded-full bg-white border-4 border-[var(--light)] z-10 -mt-3 flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_15px_rgba(201,169,106,0.3)] transition-all duration-500">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
</div>
<div className="md:mt-8">
<span className="text-sm font-bold tracking-widest text-[var(--secondary)] block mb-3">03</span>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Placement &amp; Execution</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">We onboard the right vetted partners or guide your internal team to execute the roadmap flawlessly.</p>
</div>
</div>

<div className="clipzy-reveal delay-400 relative group">
<div className="hidden md:block absolute top-0 left-0 w-6 h-6 rounded-full bg-white border-4 border-[var(--light)] z-10 -mt-3 flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_15px_rgba(201,169,106,0.3)] transition-all duration-500">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
</div>
<div className="md:mt-8">
<span className="text-sm font-bold tracking-widest text-[var(--secondary)] block mb-3">04</span>
<h3 className="text-xl font-semibold tracking-tight text-[var(--primary)] mb-3">Ongoing Optimization</h3>
<p className="text-base text-[var(--tertiary)] leading-relaxed">Continuous stewardship, weekly reporting, and strategic pivots as the market demands.</p>
</div>
</div>
</div>
</div>
<div className="mt-20 clipzy-reveal">
<a className="inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors tracking-wide uppercase" href="#">
                    Book a Free Strategy Call <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[var(--light)] pt-32 pb-32 border-t border-[var(--primary)]/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="clipzy-reveal text-sm font-semibold tracking-widest uppercase text-[var(--tertiary)] mb-12">You're in good company.</p>

<div className="clipzy-reveal flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-2xl font-bold font-playfair tracking-tight text-[var(--primary)]">Aura</span>
<span className="text-2xl font-bold tracking-tight text-[var(--primary)] flex items-center gap-2"><iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon> Botanica</span>
<span className="text-2xl font-semibold tracking-widest uppercase text-[var(--primary)]">Vanguard</span>
<span className="text-2xl font-bold font-playfair italic tracking-tight text-[var(--primary)]">Lumière</span>
<span className="text-2xl font-bold tracking-tight text-[var(--primary)] flex items-center gap-2"><iconify-icon icon="solar:crown-linear" width="28"></iconify-icon> Apex</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

<div className="clipzy-reveal delay-100 bg-white p-10 rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)]">
<div className="flex text-[var(--secondary)] mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-[var(--primary)] leading-relaxed mb-8">"ConnectWright didn't just bring us an agency; they fixed our fundamental unit economics. We scaled from $2M to $8M ARR in 14 months because we finally knew where to deploy capital."</p>
<div>
<h4 className="text-base font-semibold text-[var(--primary)]">James Carter</h4>
<p className="text-sm text-[var(--tertiary)]">Founder, E-com Brand</p>
</div>
</div>

<div className="clipzy-reveal delay-200 bg-white p-10 rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)]">
<div className="flex text-[var(--secondary)] mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-[var(--primary)] leading-relaxed mb-8">"I was exhausted trying to manage three different specialized agencies. Having a strategic partner audit their work and enforce alignment gave me my life back."</p>
<div className="">
<h4 className="text-base font-semibold text-[var(--primary)]">Elena Rostova</h4>
<p className="text-sm text-[var(--tertiary)]">CEO, SaaS Platform</p>
</div>
</div>

<div className="clipzy-reveal delay-300 bg-white p-10 rounded-[2rem] border border-[var(--primary)]/5 shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)]">
<div className="flex text-[var(--secondary)] mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-[var(--primary)] leading-relaxed mb-8">"Straight talk is rare in marketing. They told us exactly why our previous setup was burning cash and implemented a streamlined tracking stack that changed everything."</p>
<div>
<h4 className="text-base font-semibold text-[var(--primary)]">Marcus Lin</h4>
<p className="text-sm text-[var(--tertiary)]">CMO, Tech Hardware</p>
</div>
</div>
</div>
<div className="mt-16 clipzy-reveal">
<a className="inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors tracking-wide uppercase" href="#">
                    See More Case Studies <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[var(--primary)] pt-32 pb-32 relative overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--tertiary)]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--secondary)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="clipzy-reveal text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8">
                Stop Guessing.<br/>
<span className="font-playfair italic font-medium text-[var(--secondary)]">Start Growing.</span>
</h2>
<p className="clipzy-reveal delay-100 text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                One conversation is all it takes. We'll tell you exactly where your marketing dollars should be going — and who should be running them.
            </p>
<div className="clipzy-reveal delay-200">
<a className="inline-flex items-center justify-center bg-[var(--secondary)] hover:bg-white transition-colors duration-500 text-[var(--primary)] text-base font-semibold rounded-full py-4 px-10 shadow-xl" href="#">
                    Book Your Free Strategy Call
                </a>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="clipzy-reveal text-3xl md:text-4xl font-semibold tracking-tight text-[var(--primary)]">Questions We Get <br/><span className="font-playfair italic font-medium text-[var(--secondary)]">Before Every First Call.</span></h2>
</div>
<div className="space-y-4">

<div className="clipzy-reveal delay-100 bg-white rounded-2xl border border-[var(--primary)]/10 transition-all duration-300 overflow-hidden faq-container">
<button className="faq-btn w-full flex justify-between items-center text-left p-6 md:px-8 focus:outline-none hover:bg-[var(--light)] transition-colors">
<span className="text-lg font-medium text-[var(--primary)]">Do you replace our current marketing team?</span>
<div className="text-[var(--tertiary)] shrink-0 ml-4">
<iconify-icon className="faq-icon transition-transform duration-500" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 opacity-0 px-6 md:px-8 bg-[var(--light)]/50">
<p className="pb-6 pt-2 text-base text-[var(--tertiary)] leading-relaxed">
                            Not necessarily. We act as an extension of your leadership. If your current team is strong but needs direction, we provide the strategy. If there are gaps, we fill them by bringing in vetted partners from our network.
                        </p>
</div>
</div>

<div className="clipzy-reveal delay-200 bg-white rounded-2xl border border-[var(--primary)]/10 transition-all duration-300 overflow-hidden faq-container">
<button className="faq-btn w-full flex justify-between items-center text-left p-6 md:px-8 focus:outline-none hover:bg-[var(--light)] transition-colors">
<span className="text-lg font-medium text-[var(--primary)]">How are you different from an agency?</span>
<div className="text-[var(--tertiary)] shrink-0 ml-4">
<iconify-icon className="faq-icon transition-transform duration-500" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 opacity-0 px-6 md:px-8 bg-[var(--light)]/50">
<p className="pb-6 pt-2 text-base text-[var(--tertiary)] leading-relaxed">
                            Agencies sell execution (media buying, SEO). We provide independent, unbiased strategy first. We don't push a specific channel just because we sell it; we build the holistic plan and then oversee the execution, ensuring absolute alignment with your financials.
                        </p>
</div>
</div>

<div className="clipzy-reveal delay-300 bg-white rounded-2xl border border-[var(--primary)]/10 transition-all duration-300 overflow-hidden faq-container">
<button className="faq-btn w-full flex justify-between items-center text-left p-6 md:px-8 focus:outline-none hover:bg-[var(--light)] transition-colors">
<span className="text-lg font-medium text-[var(--primary)]">What is the required investment?</span>
<div className="text-[var(--tertiary)] shrink-0 ml-4">
<iconify-icon className="faq-icon transition-transform duration-500" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 opacity-0 px-6 md:px-8 bg-[var(--light)]/50">
<p className="pb-6 pt-2 text-base text-[var(--tertiary)] leading-relaxed">
                            Engagements vary based on complexity, ranging from one-time strategic audits to ongoing fractional CMO leadership. We discuss specific structures during our discovery call once we understand the scope of your challenge.
                        </p>
</div>
</div>

<div className="clipzy-reveal delay-400 bg-white rounded-2xl border border-[var(--primary)]/10 transition-all duration-300 overflow-hidden faq-container">
<button className="faq-btn w-full flex justify-between items-center text-left p-6 md:px-8 focus:outline-none hover:bg-[var(--light)] transition-colors">
<span className="text-lg font-medium text-[var(--primary)]">How quickly can we start?</span>
<div className="text-[var(--tertiary)] shrink-0 ml-4">
<iconify-icon className="faq-icon transition-transform duration-500" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 opacity-0 px-6 md:px-8 bg-[var(--light)]/50">
<p className="pb-6 pt-2 text-base text-[var(--tertiary)] leading-relaxed">
                            If there is mutual fit, we can typically commence the Discovery &amp; Diagnosis phase within 7–10 days of signing. We strictly limit our active client roster to maintain high-touch quality.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-[var(--primary)] pt-24 pb-12 overflow-hidden border-t border-[var(--secondary)]/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
<div className="md:w-5/12">
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-[var(--secondary)]" height="28" icon="solar:programming-minimalistic-linear" width="28"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">ConnectWright</span>
</div>
<p className="text-base text-zinc-400 mb-8 leading-relaxed pr-8 max-w-sm">
                        Built for 6–8 figure brands who are serious about growth and done wasting budget on the wrong partners.
                    </p>
<p className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> Working in New York City and beyond.
                    </p>
</div>
<div className="md:w-auto flex gap-12 sm:gap-24">
<ul className="space-y-5">
<li><a className="text-sm font-medium text-zinc-400 hover:text-[var(--secondary)] transition-colors duration-300 tracking-wide uppercase" href="#">Services</a></li>
<li><a className="text-sm font-medium text-zinc-400 hover:text-[var(--secondary)] transition-colors duration-300 tracking-wide uppercase" href="#">About</a></li>
<li><a className="text-sm font-medium text-zinc-400 hover:text-[var(--secondary)] transition-colors duration-300 tracking-wide uppercase" href="#">Case Studies</a></li>
</ul>
<ul className="space-y-5">
<li><a className="text-sm font-medium text-zinc-400 hover:text-[var(--secondary)] transition-colors duration-300 tracking-wide uppercase" href="#">Partners</a></li>
<li><a className="text-sm font-medium text-[var(--secondary)] hover:text-white transition-colors duration-300 tracking-wide uppercase" href="#">Book a Call</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm pt-8 border-t border-[var(--tertiary)]/20">
<p>© 2025 ConnectWright</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition-colors duration-300" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors duration-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
