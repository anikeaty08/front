import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    
    // Account type toggle functionality
    const personalBtn = document.getElementById('personalBtn');
    const businessBtn = document.getElementById('businessBtn');
    
    [personalBtn, businessBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        [personalBtn, businessBtn].forEach(b => {
          b.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/30');
          b.classList.add('text-slate-300', 'hover:text-white', 'hover:bg-white/5');
        });
        
        btn.classList.remove('text-slate-300', 'hover:text-white', 'hover:bg-white/5');
        btn.classList.add('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/30');
      });
    });

    // Animate numbers function
    function animateNumber(element, target, duration = 2000, suffix = '') {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          element.textContent = target + suffix;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(start) + suffix;
        }
      }, 16);
    }

    // Animate progress bars
    function animateProgressBar(element, targetWidth) {
      setTimeout(() => {
        element.style.width = targetWidth + '%';
      }, 500);
    }

    // Animate circular progress
    function animateCircularProgress(element, targetPercentage) {
      const circumference = 2 * Math.PI * 16; // radius is 16
      const targetDasharray = (targetPercentage / 100) * circumference;
      
      setTimeout(() => {
        element.setAttribute('stroke-dasharray', `${targetDasharray},${circumference}`);
      }, 500);
    }

    // Initialize animations when page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        // Animate all numbers
        document.querySelectorAll('[data-animate-number]').forEach(element => {
          const target = parseInt(element.getAttribute('data-animate-number'));
          const isPercentage = element.textContent.includes('%');
          const suffix = isPercentage ? '%' : '';
          animateNumber(element, target, 2000, suffix);
        });

        // Animate all progress bars
        document.querySelectorAll('[data-progress]').forEach(element => {
          const targetWidth = parseInt(element.getAttribute('data-progress'));
          animateProgressBar(element, targetWidth);
        });

        // Animate circular progress
        document.querySelectorAll('[data-circle-progress]').forEach(element => {
          const targetPercentage = parseInt(element.getAttribute('data-circle-progress'));
          animateCircularProgress(element, targetPercentage);
        });
      }, 1500); // Start animations after cards are visible
    });

    // Add custom animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(2rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  


    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.fixed.bottom-6 button');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    function toggleMobileMenu() {
      const isOpen = !mobileMenu.classList.contains('pointer-events-none');
      
      if (isOpen) {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100');
      } else {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100');
      }
    }

    mobileMenuToggle?.addEventListener('click', toggleMobileMenu);
    closeMobileMenu?.addEventListener('click', toggleMobileMenu);

    // Enhanced hover effects for cards
    document.querySelectorAll('.group').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add parallax effect to background elements
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      document.querySelectorAll('.absolute.top-1\\/4, .absolute.bottom-1\\/4, .absolute.top-3\\/4').forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });

    // Enhanced loading state
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      
      // Initialize Lucide icons with delay for better performance
      setTimeout(() => {
        lucide.createIcons();
      }, 100);
    });

    // Add CSS for loaded state
    const loadedStyle = document.createElement('style');
    loadedStyle.textContent = `
      .loaded .animate-pulse {
        animation-duration: 3s;
      }
      
      .loaded [data-animate-number] {
        transition: all 0.3s ease;
      }
      
      .group:hover [data-progress] {
        box-shadow: 0 0 20px rgba(var(--tw-gradient-stops), 0.3);
      }
    `;
    document.head.appendChild(loadedStyle);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai" width="100%"></iframe></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{transform: 'translateY(-117.5px)'}}></div>
<div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', transform: 'translateY(-117.5px)'}}></div>
<div className="absolute top-3/4 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', transform: 'translateY(-117.5px)'}}></div>
</div>
<main className="relative z-10 mx-auto max-w-7xl p-4 md:p-8">

<section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]" style={{animationFillMode: 'both'}}>

<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_70%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_70%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
</div>

<nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-12 border-b border-white/5 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]" style={{animationFillMode: 'both'}}>
<ul className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
<li className="relative group cursor-pointer">
<span className="hover:text-white transition-all duration-300 font-geist">Solutions</span>
<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
</li>
<li className="relative group cursor-pointer">
<span className="hover:text-white transition-all duration-300 font-geist">Partners</span>
<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
</li>
<li className="relative group cursor-pointer">
<span className="hover:text-white transition-all duration-300 font-geist">Learn</span>
<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
</li>
</ul>
<div className="flex items-center gap-3">
<div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 ring-1 ring-emerald-400/30 shadow-lg shadow-emerald-500/10">
<svg className="lucide lucide-droplet w-5 h-5 text-emerald-400" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<span className="text-xl font-semibold text-white tracking-tight font-geist">FlowFunds</span>
</div>
<ul className="hidden gap-8 text-sm font-medium text-slate-300 md:flex items-center">
<li className="relative group cursor-pointer">
<span className="hover:text-white transition-all duration-300 font-geist">FAQ</span>
<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
</li>
<li className="relative group cursor-pointer">
<span className="hover:text-white transition-all duration-300 font-geist">Help &amp; Support</span>
<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
</li>
<li>
<a className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 px-6 py-3 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/40 hover:from-emerald-500/30 hover:to-emerald-600/30 hover:ring-emerald-400/60 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/10 font-geist" href="#">
              Open Account
              <svg className="lucide lucide-external-link w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
</ul>
</nav>

<header className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-8 py-16 text-center md:py-24 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]" style={{animationFillMode: 'both'}}>
<div className="mb-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-5 py-3 text-sm font-medium text-slate-300 ring-1 ring-white/20 backdrop-blur-sm hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 group cursor-pointer font-geist" style={{transform: 'translateY(0px) scale(1)'}}>
<svg className="lucide lucide-sparkles w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          AI Powered Banking Revolution
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
</div>
<h1 className="mb-8 text-6xl leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl font-playfair font-medium">
          Unlock the 
          <div className="inline-flex items-center mx-3 p-3 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 ring-1 ring-yellow-400/30">
<svg className="lucide lucide-zap w-12 h-12 text-yellow-400 md:w-16 md:h-16 animate-pulse" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div><br/>
          Future of Banking<br/>
          with 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-playfair font-medium">FlowFunds</span>
</h1>
<p className="mb-12 max-w-3xl text-xl leading-relaxed text-slate-300 font-light font-geist">
          Experience next-generation banking with military-grade security, real-time AI insights,<br className="hidden md:block"/> 
          and seamless financial management designed for the modern world.
        </p>

<div className="flex flex-col items-center gap-6 sm:flex-row">
<a className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-lg font-medium text-white shadow-2xl shadow-indigo-600/40 transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105 overflow-hidden" href="#" style={{transform: 'translateY(0px) scale(1)'}}>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative font-geist">Open Account</span>
<svg className="lucide lucide-arrow-right relative w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-3 rounded-full bg-white/5 px-10 py-4 text-lg font-medium text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/30 hover:scale-105 font-geist" href="#" style={{transform: 'translateY(0px) scale(1)'}}>
<div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
<svg className="lucide lucide-play w-4 h-4 transition-transform group-hover:scale-110" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
            Watch Demo
          </a>
</div>
</header>

<div className="relative z-10 mt-12 grid grid-cols-1 gap-8 px-8 pb-20 sm:grid-cols-2 lg:grid-cols-4 md:px-12">

<div className="group relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 hover:from-white/10 hover:to-white/5 hover:ring-white/20 hover:scale-105 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] overflow-hidden" style={{animationFillMode: 'both'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl"></div>
<div className="relative mb-8 flex items-center justify-between">
<span className="text-sm font-semibold text-slate-300 tracking-wide font-geist">MY GOALS</span>
<button className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-all duration-200 bg-emerald-500/10 px-3 py-1.5 rounded-full hover:bg-emerald-500/20 font-geist">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Add goal
            </button>
</div>
<div className="relative space-y-8">
<div className="group/item">
<div className="flex items-center justify-between mb-3">
<p className="text-3xl text-white font-playfair font-medium" data-animate-number="56">56%</p>
<span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full font-geist">On track</span>
</div>
<div className="h-3 w-full rounded-full bg-white/10 overflow-hidden mb-3">
<div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-2000 shadow-lg shadow-emerald-500/30" data-progress="56" style={{width: '56%'}}></div>
</div>
<p className="text-sm text-slate-400 font-geist">Vacation Fund</p>
<p className="text-xs text-slate-500 font-geist">$<span className="font-geist" data-animate-number="3850">3850</span> of $7,000</p>
</div>
<div className="group/item">
<div className="flex items-center justify-between mb-3">
<p className="text-3xl text-white font-playfair font-medium" data-animate-number="89">89%</p>
<span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full font-geist">Almost there</span>
</div>
<div className="h-3 w-full rounded-full bg-white/10 overflow-hidden mb-3">
<div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-2000 shadow-lg shadow-blue-500/30" data-progress="89" style={{width: '89%'}}></div>
</div>
<p className="text-sm text-slate-400 font-geist">Tesla Model 3</p>
<p className="text-xs text-slate-500 font-geist">$<span className="font-geist" data-animate-number="33000">33000</span> of $37,000</p>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 hover:from-white/10 hover:to-white/5 hover:ring-white/20 hover:scale-105 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards] overflow-hidden" style={{animationFillMode: 'both'}}>
<div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl"></div>
<div className="relative mb-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></span>
<span className="h-3 w-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50"></span>
</div>
<span className="text-sm font-semibold text-slate-300 tracking-wide font-geist">FLOWFUNDS</span>
</div>
<div className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full font-geist">USD</div>
</div>
<div className="relative space-y-6 text-sm">
<div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/item">
<span className="text-slate-400 font-geist">Card Number</span>
<div className="flex items-center gap-2">
<span className="font-mono font-medium text-white tracking-wider font-geist">•••• 1535</span>
<svg className="lucide lucide-copy w-3 h-3 text-slate-500 opacity-0 group-hover/item:opacity-100 transition-opacity cursor-pointer hover:text-slate-300" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</div>
</div>
<div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
<span className="text-slate-400 font-geist">Expires</span>
<span className="font-mono font-medium text-white font-geist">10/25</span>
</div>
<div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/item">
<span className="text-slate-400 font-geist">CVV</span>
<div className="flex items-center gap-2">
<span className="font-mono font-medium text-white font-geist">•••</span>
<svg className="lucide lucide-eye w-3 h-3 text-slate-500 opacity-0 group-hover/item:opacity-100 transition-opacity cursor-pointer hover:text-slate-300" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 hover:from-white/10 hover:to-white/5 hover:ring-white/20 hover:scale-105 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards] overflow-hidden" style={{animationFillMode: 'both', transform: 'translateY(0px) scale(1)'}}>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
<div className="relative flex items-center justify-between mb-8">
<span className="text-sm font-semibold text-slate-300 tracking-wide font-geist">MONTHLY LIMIT</span>
<button className="flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-all duration-200 bg-indigo-500/10 px-3 py-1.5 rounded-full hover:bg-indigo-500/20 font-geist">
<svg className="lucide lucide-settings w-3 h-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Adjust
            </button>
</div>
<div className="relative mx-auto mb-6 h-36 w-36">
<svg className="h-full w-full -rotate-90 transform" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></circle>
<circle className="transition-all duration-2000 drop-shadow-lg" cx="18" cy="18" data-circle-progress="70" fill="none" r="16" stroke="url(#gradient1)" stroke-dasharray="70.37167544041137,100.53096491487338" strokeLinecap="round" strokeWidth="3"></circle>
<defs>
<lineargradient id="gradient1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#60a5fa'}}></stop>
<stop offset="100%" style={{stopColor: '#a855f7'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-2xl text-white mb-1 font-playfair font-medium" data-animate-number="70">70%</p>
<p className="text-xs text-slate-400 font-geist">Used this month</p>
</div>
</div>
</div>
<div className="relative text-center">
<p className="text-sm text-slate-400 mb-1 font-geist">$<span className="font-geist" data-animate-number="6345">6345</span> of $10,000</p>
<p className="text-xs text-slate-500 font-geist">Resets in 12 days</p>
</div>
</div>

<div className="group relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 hover:from-white/10 hover:to-white/5 hover:ring-white/20 hover:scale-105 flex items-center justify-center opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards] overflow-hidden cursor-pointer" style={{animationFillMode: 'both'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
<div className="relative text-center">
<div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 ring-1 ring-purple-400/20 mx-auto w-fit">
<svg className="lucide lucide-sparkles w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-300 block mb-2 font-geist">Investment Insights</span>
<span className="text-xs text-slate-500 font-geist">Coming Soon</span>
</div>
</div>
</div>

<div className="relative z-10 border-t border-white/5 px-8 py-12 md:px-12 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_1s_forwards]" style={{animationFillMode: 'both'}}>
<div className="flex flex-col items-center justify-between gap-8 md:flex-row">

<div className="flex items-center gap-6">
<div className="flex -space-x-4">
<img alt="User 1" className="h-12 w-12 rounded-full ring-3 ring-slate-700 transition-all duration-300 hover:scale-110 hover:ring-indigo-400 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8326850b-c44f-444f-8cc7-cd798d6894a0_320w.jpg"/>
<img alt="User 2" className="h-12 w-12 rounded-full ring-3 ring-slate-700 transition-all duration-300 hover:scale-110 hover:ring-indigo-400 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a070cb3f-5d6a-4dbb-a944-affdf6f83b49_320w.jpg"/>
<img alt="User 3" className="h-12 w-12 rounded-full ring-3 ring-slate-700 transition-all duration-300 hover:scale-110 hover:ring-indigo-400 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2de2a5b1-5048-4f3e-9c13-f8152f7e5834_320w.jpg"/>
<div className="h-12 w-12 rounded-full ring-3 ring-slate-700 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold hover:scale-110 transition-transform font-geist">+5K</div>
</div>
<div>
<p className="text-sm text-slate-300 font-geist">
<span className="font-semibold text-white font-geist"><span className="font-geist" data-animate-number="150">150</span>K+ users</span> joined this month
              </p>
<p className="text-xs text-slate-500 font-geist">Growing community of modern bankers</p>
</div>
</div>

<div className="flex gap-1 rounded-full bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm">
<button className="rounded-full px-8 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:bg-white/5 font-geist" id="personalBtn">
              Personal
            </button>
<button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:shadow-indigo-500/40 font-geist" id="businessBtn">
              Business
            </button>
</div>
</div>
</div>
</section>
</main>


<div className="fixed bottom-6 right-6 z-50 md:hidden">
<button className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl shadow-indigo-600/40 transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-110">
<svg className="lucide lucide-menu w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden fixed inset-x-4 top-4 z-40 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl ring-1 ring-white/10 p-6 opacity-0 pointer-events-none transition-all duration-300" id="mobileMenu">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 ring-1 ring-emerald-400/30">
<svg className="lucide lucide-droplet w-4 h-4 text-emerald-400" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<span className="text-lg font-semibold text-white font-geist">FlowFunds</span>
</div>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors" id="closeMobileMenu">
<svg className="lucide lucide-x w-5 h-5 text-slate-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="space-y-4">
<a className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-geist" href="#">Solutions</a>
<a className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-geist" href="#">Partners</a>
<a className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-geist" href="#">Learn</a>
<a className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-geist" href="#">FAQ</a>
<a className="block py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-geist" href="#">Help &amp; Support</a>
<div className="pt-4 border-t border-white/10">
<a className="block w-full text-center py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 ring-1 ring-emerald-500/40 hover:from-emerald-500/30 hover:to-emerald-600/30 transition-all duration-300 font-geist" href="#">
          Open Account
        </a>
</div>
</nav>
</div>



    </>
  );
}
