import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#F5F5F7',
surface: '#FFFFFF',
text: '#1D1D1F',
subtext: '#86868B',
gold: '#B49B67',
goldDark: '#9A8352',
goldLight: '#E8DCC4',
border: '#E2E2E5',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
boxShadow: {
'soft': '0 4px 20px rgba(0,0,0,0.03)',
'glow': '0 0 30px rgba(180, 155, 103, 0.2)',
'card-hover': '0 20px 40px -5px rgba(0,0,0,0.05)',
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'grow-bar': 'growBar 1.5s ease-out forwards',
'fade-in-down': 'fadeInDown 0.3s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
growBar: {
'0%': { height: '0%' },
'100%': { height: 'var(--target-height)' },
},
fadeInDown: {
'0%': { opacity: '0', transform: 'translateY(-10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



  // Initialize Icons
  lucide.createIcons();
  
  // Mobile Menu Logic
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        iconMenu.classList.toggle('hidden');
        iconMenu.classList.toggle('block');
        iconClose.classList.toggle('hidden');
        iconClose.classList.toggle('block');
        
        // Prevent background scrolling when menu is open
        if(!mobileMenu.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
             if(!mobileMenu.classList.contains('hidden')) {
                 toggleMenu();
             }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Simple counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-target'));
                let startValue = 0;
                const duration = 1500;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(startValue + (endValue - startValue) * ease);
                    target.textContent = current + "%";

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    const counter = document.querySelector('.counter');
    if(counter) counterObserver.observe(counter);
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">

<a className="flex items-center gap-3 group relative z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-text text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 5h14M5 12h10M5 19h4" strokeLinecap="round"></path>
<path d="M5 5v14" strokeLinecap="round"></path>
</svg>
</div>
<span className="font-medium tracking-tight text-sm text-text">Faithful Stewards</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-subtext uppercase tracking-widest">
<a className="hover:text-gold transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-gold transition-colors duration-300" href="#approach">Approach</a>
<a className="hover:text-gold transition-colors duration-300" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4 relative z-50">
<a className="hidden sm:flex bg-text text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-gold transition-all duration-300 shadow-soft hover:shadow-glow transform hover:-translate-y-0.5" href="#contact">
        Get Estimate
      </a>

<button aria-label="Toggle menu" className="md:hidden text-text p-2 -mr-2 hover:bg-black/5 rounded-md transition-colors focus:outline-none" id="menu-btn">
<svg className="w-6 h-6 block" fill="none" height="24" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="w-6 h-6 hidden" fill="none" height="24" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl md:hidden animate-fade-in-down origin-top h-screen sm:h-auto" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-2xl font-semibold text-text hover:text-gold tracking-tight py-2 border-b border-gray-50 mobile-link" href="#services">Services</a>
<a className="text-2xl font-semibold text-text hover:text-gold tracking-tight py-2 border-b border-gray-50 mobile-link" href="#approach">Approach</a>
<a className="text-2xl font-semibold text-text hover:text-gold tracking-tight py-2 border-b border-gray-50 mobile-link" href="#contact">Contact</a>
<div className="pt-4 sm:hidden">
<a className="block w-full bg-text text-white text-center py-4 rounded-xl text-sm font-medium hover:bg-gold transition-all mobile-link" href="#contact">
                Get Estimate
            </a>
</div>
</div>
</div>
</nav>

<section className="pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden relative">

<div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gold/5 rounded-full blur-3xl mix-blend-multiply filter animate-blob opacity-70 -z-10 translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-100/30 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000 opacity-70 -z-10 -translate-x-1/3 translate-y-1/4"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">

<div className="flex-1 w-full max-w-xl animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/60 shadow-sm backdrop-blur-sm mb-6 md:mb-8 hover:bg-white transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-subtext">Small Business Specialists</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6 md:mb-8 text-text">
          Accounting <br/>
<span className="text-subtext/60 bg-clip-text text-transparent bg-gradient-to-r from-subtext/60 to-subtext/30">made simple.</span>
</h1>
<p className="text-base sm:text-lg md:text-xl text-subtext font-normal leading-relaxed mb-8 md:mb-10 max-w-md">
          Tailored bookkeeping, fractional CFO services, and loan assistance designed to help ambitious businesses harvest their success.
        </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
<a className="bg-gold text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-goldDark transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto" href="#contact">
            Start Your Growth
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="bg-white/50 backdrop-blur-sm text-text px-8 py-4 rounded-full text-sm font-medium hover:bg-white border border-white/60 transition-all flex items-center justify-center shadow-sm hover:shadow-md w-full sm:w-auto" href="#services">
            Explore Services
          </a>
</div>
</div>

<div className="flex-1 w-full relative animate-on-scroll delay-200 perspective-[1000px] mt-8 md:mt-0">

<div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white overflow-hidden p-6 md:p-8 flex flex-col justify-between transform transition-transform hover:rotate-y-2 hover:rotate-x-2 duration-500 ease-out preserve-3d">

<div className="absolute top-0 right-0 p-32 md:p-48 bg-gradient-to-bl from-gold/10 via-gold/5 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-8 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-text/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-text/20"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs text-subtext font-medium uppercase tracking-wider">Cash Flow</span>
<div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-md">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
<span className="text-xs font-bold">+24.5%</span>
</div>
</div>

<div className="h-24 md:h-32 w-full flex items-end gap-2 md:gap-3 pt-4">
<div className="w-full bg-gray-100 rounded-md animate-grow-bar" style={{-TargetHeight: '40%'}}></div>
<div className="w-full bg-gray-100 rounded-md animate-grow-bar" style={{-TargetHeight: '60%', animationDelay: '100ms'}}></div>
<div className="w-full bg-gray-100 rounded-md animate-grow-bar" style={{-TargetHeight: '50%', animationDelay: '200ms'}}></div>
<div className="w-full bg-gold/30 rounded-md animate-grow-bar" style={{-TargetHeight: '75%', animationDelay: '300ms'}}></div>
<div className="w-full bg-gradient-to-t from-gold to-goldLight rounded-md animate-grow-bar relative group shadow-lg shadow-gold/20" style={{-TargetHeight: '90%', animationDelay: '400ms'}}>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text text-white text-[10px] font-medium py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-xl z-20">
                                Projected <span className="text-goldLight ml-1">↗</span>
<div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-text rotate-45"></div>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 border-t border-gray-100 pt-6 mt-6 flex justify-between items-end">
<div>
<p className="font-semibold text-base md:text-lg tracking-tight text-text">Financial Clarity</p>
<p className="text-[10px] md:text-xs text-subtext mt-1">Make decisions based on data.</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 pr-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white animate-float z-20 flex items-center gap-3 md:gap-4 max-w-[200px] md:max-w-none">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-inner shrink-0">
<svg className="md:w-5 md:h-5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-subtext">Status</p>
<p className="text-xs md:text-sm font-semibold text-text">Books Balanced</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-y border-border/60 bg-white/50 backdrop-blur-sm py-20 md:py-32" id="approach">
<div className="max-w-3xl mx-auto px-6 text-center animate-on-scroll">
<div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-gold bg-gold/10 rounded-2xl flex items-center justify-center rotate-3 hover:rotate-6 transition-transform duration-500">
<svg className="lucide lucide-sprout w-6 h-6 md:w-8 md:h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 md:mb-8 text-text leading-tight">
      "Sowing seeds of dreams,<br/>harvesting <span className="italic font-serif text-gold">success</span>."
    </h2>
<p className="text-subtext leading-relaxed font-normal text-base md:text-xl max-w-2xl mx-auto">
      At Faithful Stewards, we understand that every number represents a part of your dream. We provide the soil—through accurate data and strategic oversight—so you can focus on the harvest.
    </p>
</div>
</section>

<section className="py-20 md:py-32 relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 animate-on-scroll">
<div>
<span className="text-gold text-xs font-bold tracking-widest uppercase mb-3 block pl-1">Expertise</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text">Holistic Financial Care.</h2>
</div>
<p className="text-subtext max-w-xs text-sm leading-relaxed font-medium">
        Comprehensive services designed to move you from basic compliance to strategic growth.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-6 md:p-8 rounded-3xl border border-white shadow-soft hover:shadow-card-hover hover:border-gold/20 transition-all duration-500 animate-on-scroll flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-text mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-text group-hover:text-goldDark transition-colors">Precision Bookkeeping</h3>
<p className="text-sm text-subtext leading-relaxed mb-6 group-hover:text-text/80 transition-colors">
            Tailored day-to-day management of your ledgers. We ensure every transaction is categorized correctly so you're always audit-ready.
            </p>
</div>
<ul className="space-y-3 pt-6 border-t border-gray-50">
<li className="flex items-center gap-2 text-xs text-text font-medium opacity-80">
<div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-600"><svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                Monthly Reconciliation
            </li>
<li className="flex items-center gap-2 text-xs text-text font-medium opacity-80">
<div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-600"><svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                Expense Tracking
            </li>
</ul>
</div>

<div className="group bg-text p-6 md:p-8 rounded-3xl border border-text shadow-xl relative overflow-hidden animate-on-scroll delay-100 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-500">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/20 transition-colors duration-700"></div>
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 border border-white/10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Fractional CFO</h3>
<p className="text-sm text-white/70 leading-relaxed mb-6">
            High-level strategic guidance without the full-time executive salary. Useful insights to help you make the right decisions for your future.
            </p>
</div>
<ul className="space-y-3 pt-6 border-t border-white/10">
<li className="flex items-center gap-2 text-xs text-white font-medium">
<div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold"><svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                Cash Flow Forecasting
            </li>
<li className="flex items-center gap-2 text-xs text-white font-medium">
<div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold"><svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                Budgeting &amp; Strategy
            </li>
</ul>
</div>

<div className="group bg-white p-6 md:p-8 rounded-3xl border border-white shadow-soft hover:shadow-card-hover hover:border-gold/20 transition-all duration-500 animate-on-scroll delay-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-text mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-text group-hover:text-goldDark transition-colors">Business Loans</h3>
<p className="text-sm text-subtext leading-relaxed mb-6 group-hover:text-text/80 transition-colors">
            Navigating capital acquisition can be daunting. We prepare your documentation and connect you with the right lending solutions.
            </p>
</div>
<ul className="space-y-3 pt-6 border-t border-gray-50">
<li className="flex items-center gap-2 text-xs text-text font-medium opacity-80">
<div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-600"><svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                Application Prep
            </li>
<li className="flex items-center gap-2 text-xs text-text font-medium opacity-80">
<div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-600"><svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                Lender Matching
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-white border-y border-border/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
<div className="text-center md:text-left group cursor-default">
<p className="text-3xl md:text-4xl font-semibold text-text tracking-tighter mb-2 group-hover:text-gold transition-colors duration-300 counter" data-target="100">0%</p>
<p className="text-[10px] md:text-xs uppercase tracking-widest text-subtext">Compliance</p>
</div>
<div className="text-center md:text-left group cursor-default">
<p className="text-3xl md:text-4xl font-semibold text-text tracking-tighter mb-2 group-hover:text-gold transition-colors duration-300">24h</p>
<p className="text-[10px] md:text-xs uppercase tracking-widest text-subtext">Response Time</p>
</div>
<div className="text-center md:text-left group cursor-default">
<p className="text-3xl md:text-4xl font-semibold text-text tracking-tighter mb-2 group-hover:text-gold transition-colors duration-300">Tailored</p>
<p className="text-[10px] md:text-xs uppercase tracking-widest text-subtext">Pricing Models</p>
</div>
<div className="text-center md:text-left group cursor-default">
<p className="text-3xl md:text-4xl font-semibold text-text tracking-tighter mb-2 group-hover:text-gold transition-colors duration-300">Expert</p>
<p className="text-[10px] md:text-xs uppercase tracking-widest text-subtext">Advisory Team</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-radial from-gold/5 to-transparent opacity-50 pointer-events-none animate-pulse-slow"></div>
<div className="max-w-xl mx-auto px-6 relative z-10 animate-on-scroll">
<div className="text-center mb-10 md:mb-12">
<span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">Free Consultation</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4">Let's grow your business.</h2>
<p className="text-subtext font-light text-base md:text-lg">Leave your details below. We'll reach out within one business day to discuss your needs.</p>
</div>
<form className="space-y-4 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-wider text-subtext pl-1">First Name</label>
<input className="w-full bg-white/50 border border-border p-3 md:p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm placeholder-gray-400 focus:bg-white" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-wider text-subtext pl-1">Last Name</label>
<input className="w-full bg-white/50 border border-border p-3 md:p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm placeholder-gray-400 focus:bg-white" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-wider text-subtext pl-1">Email Address</label>
<input className="w-full bg-white/50 border border-border p-3 md:p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm placeholder-gray-400 focus:bg-white" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-wider text-subtext pl-1">Interested In</label>
<div className="grid grid-cols-3 gap-2 md:gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 border border-border/80 rounded-xl text-xs font-semibold text-subtext transition-all bg-white hover:bg-gray-50 peer-checked:shadow-lg">Bookkeeping</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 border border-border/80 rounded-xl text-xs font-semibold text-subtext transition-all bg-white hover:bg-gray-50 peer-checked:shadow-lg">CFO</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 border border-border/80 rounded-xl text-xs font-semibold text-subtext transition-all bg-white hover:bg-gray-50 peer-checked:shadow-lg">Loans</div>
</label>
</div>
</div>
<button className="w-full bg-gold text-white py-4 rounded-xl font-semibold tracking-wide hover:bg-goldDark transition-all shadow-lg hover:shadow-gold/25 mt-6 active:scale-95 duration-200">
        Request Free Estimate
      </button>
<p className="text-center text-[10px] text-subtext mt-4 opacity-70">
        By submitting, you agree to our Privacy Policy. No spam, ever.
      </p>
</form>
</div>
</section>

<footer className="bg-white border-t border-border pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">

<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-text text-white rounded flex items-center justify-center">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 5h14M5 12h10M5 19h4" strokeLinecap="round"></path>
<path d="M5 5v14" strokeLinecap="round"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-text">Faithful Stewards</span>
</div>
<p className="text-sm text-subtext leading-relaxed">
            Empowering small businesses with clarity, strategy, and capital. Harvesting success together.
        </p>
</div>

<div className="grid grid-cols-2 gap-16 md:flex">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-text mb-4">Company</h4>
<ul className="space-y-3 text-sm text-subtext">
<li><a className="hover:text-gold transition-colors" href="#">About</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-text mb-4">Services</h4>
<ul className="space-y-3 text-sm text-subtext">
<li><a className="hover:text-gold transition-colors" href="#">Bookkeeping</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Fractional CFO</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Business Loans</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-subtext">
<p>© 2024 Faithful Stewards Bookkeeping Inc.</p>
<div className="flex gap-4">
<a className="hover:text-text transition-colors" href="#">Terms</a>
<span className="text-border">|</span>
<a className="hover:text-text transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
