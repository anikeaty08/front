import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Initialize Lucide icons
if (window.lucide && typeof lucide.createIcons === 'function') {
  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
}

// Mobile menu toggle
const toggleBtn = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    const expanded = !isHidden;
    toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    iconMenu.classList.toggle('hidden', expanded);
    iconClose.classList.toggle('hidden', !expanded);
  });
}

// Scroll animation observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// Tech cards slider
const techScroller = document.getElementById('techCards');
const techPrev = document.getElementById('techPrev');
const techNext = document.getElementById('techNext');

if (techScroller && techPrev && techNext) {
  const getAmount = () => Math.min(600, Math.max(320, Math.floor(techScroller.clientWidth * 0.8)));
  
  function updateArrows() {
    const maxScroll = techScroller.scrollWidth - techScroller.clientWidth - 2;
    const atStart = techScroller.scrollLeft <= 2;
    const atEnd = techScroller.scrollLeft >= maxScroll;
    
    techPrev.style.opacity = atStart ? '0.5' : '1';
    techPrev.style.cursor = atStart ? 'not-allowed' : 'pointer';
    techPrev.classList.toggle('bg-gray-100', atStart);
    techPrev.classList.toggle('text-gray-400', atStart);
    techPrev.classList.toggle('bg-gray-900', !atStart);
    techPrev.classList.toggle('text-white', !atStart);
    
    techNext.style.opacity = atEnd ? '0.5' : '1';
    techNext.style.cursor = atEnd ? 'not-allowed' : 'pointer';
    techNext.classList.toggle('bg-gray-100', atEnd);
    techNext.classList.toggle('text-gray-400', atEnd);
    techNext.classList.toggle('bg-gray-900', !atEnd);
    techNext.classList.toggle('text-white', !atEnd);
  }
  
  techPrev.addEventListener('click', () => {
    techScroller.scrollBy({ left: -getAmount(), behavior: 'smooth' });
  });
  
  techNext.addEventListener('click', () => {
    techScroller.scrollBy({ left: getAmount(), behavior: 'smooth' });
  });
  
  techScroller.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full -z-10 h-screen overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
<div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl parallax-slow bg-blue-400/10"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl parallax-slow bg-indigo-400/10" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl parallax-slow bg-slate-300/5" style={{animationDelay: '-10s'}}></div>
</div>

<header className="relative z-20 border-b backdrop-blur-md border-gray-200 bg-white/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4 sm:py-5">

<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center text-2xl font-bold tracking-tighter text-gray-900" href="#">
<span className="inline-flex items-center gap-1.5">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold font-sans from-blue-600 to-indigo-700 text-white" style={{}}>IL</span>
<span className="font-medium font-playfair" style={{}}>InstantLaw</span>
</span>
</a>
</div>

<nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-600">
<a className="transition-colors font-medium font-sans hover:text-gray-900" href="#product" style={{}}>Product</a>
<a className="transition-colors font-medium font-sans hover:text-gray-900" href="#services" style={{}}>Services</a>
<a className="transition-colors font-medium font-sans hover:text-gray-900" href="#technology" style={{}}>Technology</a>
<a className="transition-colors font-medium font-sans hover:text-gray-900" href="#pricing" style={{}}>Pricing</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors font-sans bg-gray-900 text-white hover:bg-black" href="#contact" style={{}}>Schedule Demo</a>

<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center rounded-lg border px-2.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 border-gray-200 bg-white text-gray-700 hover:bg-gray-50" id="mobileToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" id="iconMenu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x h-5 w-5 hidden" data-lucide="x" fill="none" height="24" id="iconClose" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="sr-only font-sans" style={{}}>Toggle navigation</span>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-gray-200" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-3 space-y-1">
<a className="block px-2 py-3 text-sm font-sans text-gray-700 hover:text-gray-900" href="#product" style={{}}>Product</a>
<a className="block px-2 py-3 text-sm font-sans text-gray-700 hover:text-gray-900" href="#services" style={{}}>Services</a>
<a className="block px-2 py-3 text-sm font-sans text-gray-700 hover:text-gray-900" href="#technology" style={{}}>Technology</a>
<a className="block px-2 py-3 text-sm font-sans text-gray-700 hover:text-gray-900" href="#pricing" style={{}}>Pricing</a>
<div className="pt-3">
<a className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium font-sans bg-gray-900 text-white" href="#contact" style={{}}>Schedule Demo</a>
</div>
</div>
</div>
</div>
</header>

<main className="relative">
<div className="sm:px-6 lg:px-8 sm:pt-20 lg:pt-28 xl:pt-32 sm:pb-20 lg:pb-28 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">

<section className="order-2 lg:order-1 relative">
<div className="inline-flex text-xs font-medium border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 items-center animate-on-scroll animate font-sans text-gray-700 bg-blue-50 border-blue-100" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          AI-Powered Immigration Platform
        </div>
<h1 className="sm:mt-6 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.95] animate-on-scroll animate text-4xl font-medium tracking-tighter font-playfair mt-6" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>Intelligent Immigration Case Management</h1>
<p className="sm:mt-6 sm:text-lg lg:text-base xl:text-lg text-base max-w-xl mt-6 animate-on-scroll animate font-sans text-gray-600" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>
          Automate client intake, streamline case assessments, and transform your immigration practice with AI-powered decision trees.
        </p>
<div className="flex flex-col sm:flex-row sm:mt-8 gap-3 sm:items-center mt-8 items-start animate-on-scroll animate" style={{animation: 'fadeSlideIn 1s ease-out 0.4s both'}}>
<a className="group inline-flex items-center gap-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium bg-gradient-to-r rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg hover:bg-gray-800 text-white from-blue-600 to-indigo-700" href="#demo">
<span className="font-sans" style={{}}>Get Started Free</span>
<div className="relative flex items-center justify-center w-5 h-5 rounded-full group-hover:bg-white/30 transition-all duration-300 bg-white/20">
<svg className="lucide lucide-arrow-right h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<button className="inline-flex sm:px-5 transition sm:w-auto text-sm font-medium w-full border rounded-full pt-3 pr-4 pb-3 pl-4 shadow-sm gap-x-2 items-center justify-center font-sans hover:bg-gray-100 text-gray-900 bg-white border-gray-200" style={{}}>
<svg className="lucide lucide-play-circle h-5 w-5 text-gray-700" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Watch Demo
          </button>
</div>

<div className="sm:mt-8 h-px mt-6 animate-on-scroll animate bg-gray-200" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}></div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 sm:gap-6 sm:mt-8 mt-8 gap-x-4 gap-y-4 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1s ease-out 0.6s both'}}>
<div className="flex items-start gap-3">
<div className="flex shrink-0 sm:w-9 sm:h-9 w-8 h-8 border rounded-lg mt-0.5 shadow-sm items-center justify-center bg-blue-50 border-blue-100">
<svg className="lucide lucide-zap h-4 w-4 sm:h-5 sm:w-5 text-blue-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm font-semibold font-sans text-gray-900" style={{}}>80% Time Savings</p>
<p className="text-sm font-sans text-gray-600" style={{}}>Automate routine case assessments</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex shrink-0 sm:w-9 sm:h-9 w-8 h-8 border rounded-lg mt-0.5 shadow-sm items-center justify-center bg-blue-50 border-blue-100">
<svg className="lucide lucide-shield-check h-4 w-4 sm:h-5 sm:w-5 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-semibold font-sans text-gray-900" style={{}}>Compliance Built-In</p>
<p className="text-sm font-sans text-gray-600" style={{}}>Stay updated with latest regulations</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex shrink-0 sm:w-9 sm:h-9 w-8 h-8 border rounded-lg mt-0.5 shadow-sm items-center justify-center bg-blue-50 border-blue-100">
<svg className="lucide lucide-users h-4 w-4 sm:h-5 sm:w-5 text-blue-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-sm font-semibold font-sans text-gray-900" style={{}}>24/7 Client Access</p>
<p className="text-sm font-sans text-gray-600" style={{}}>Provide round-the-clock service</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex shrink-0 sm:w-9 sm:h-9 w-8 h-8 border rounded-lg mt-0.5 shadow-sm items-center justify-center bg-blue-50 border-blue-100">
<svg className="lucide lucide-file-text h-4 w-4 sm:h-5 sm:w-5 text-blue-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<p className="text-sm font-semibold font-sans text-gray-900" style={{}}>Smart Document Gen</p>
<p className="text-sm font-sans text-gray-600" style={{}}>Auto-generate requirements</p>
</div>
</div>
</div>
</section>

<section className="order-1 lg:order-2 relative animate-on-scroll animate" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>

<div className="z-10 sm:max-w-xl lg:mx-0 lg:ml-auto sm:rounded-3xl sm:p-5 max-w-lg ring-1 rounded-2xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 relative shadow-2xl backdrop-blur-md bg-white/90 ring-gray-200/50">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold font-sans text-gray-700" style={{}}>Case Management Dashboard</span>
<div className="flex items-center gap-2 text-xs text-gray-500">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium font-sans bg-emerald-50 text-emerald-600" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Active
              </span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-gradient-to-br ring-1 rounded-xl pt-4 pr-4 pb-4 pl-4 from-blue-50 to-indigo-50 ring-blue-200/50">
<div className="flex items-center justify-between">
<div className="flex w-12 h-12 bg-gradient-to-br rounded-xl shadow-md items-center justify-center from-blue-600 to-indigo-700">
<svg className="lucide lucide-briefcase h-6 w-6 text-white" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-xs font-semibold font-sans text-emerald-600" style={{}}>+23%</span>
</div>
<p className="mt-3 text-xs font-medium font-sans text-gray-600" style={{}}>Active Cases</p>
<p className="text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>487</p>
</div>
<div className="bg-gradient-to-br ring-1 rounded-xl pt-4 pr-4 pb-4 pl-4 from-purple-50 to-pink-50 ring-purple-200/50">
<div className="flex items-center justify-between">
<div className="flex w-12 h-12 bg-gradient-to-br rounded-xl shadow-md items-center justify-center from-purple-600 to-pink-700">
<svg className="lucide lucide-user-check h-6 w-6 text-white" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs font-semibold font-sans text-emerald-600" style={{}}>+18%</span>
</div>
<p className="mt-3 text-xs font-medium font-sans text-gray-600" style={{}}>Approvals</p>
<p className="text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>342</p>
</div>
<div className="rounded-xl bg-gradient-to-br p-4 ring-1 from-amber-50 to-orange-50 ring-amber-200/50">
<div className="flex items-center justify-between">
<div className="flex w-12 h-12 bg-gradient-to-br from-amber-500 rounded-xl shadow-md items-center justify-center to-orange-600">
<svg className="lucide lucide-clock h-6 w-6 text-white" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-xs font-semibold font-sans text-gray-600" style={{}}>Avg</span>
</div>
<p className="mt-3 text-xs font-medium font-sans text-gray-600" style={{}}>Processing Time</p>
<p className="text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>2.4 days</p>
</div>
<div className="rounded-xl bg-gradient-to-br p-4 ring-1 from-emerald-50 to-teal-50 ring-emerald-200/50">
<div className="flex items-center justify-between">
<div className="flex w-12 h-12 bg-gradient-to-br rounded-xl shadow-md items-center justify-center from-emerald-600 to-teal-700">
<svg className="lucide lucide-trending-up h-6 w-6 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs font-semibold font-sans text-emerald-600" style={{}}>+32%</span>
</div>
<p className="mt-3 text-xs font-medium font-sans text-gray-600" style={{}}>Success Rate</p>
<p className="text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>94.8%</p>
</div>
</div>

<div className="mt-4 h-px bg-gray-200"></div>

<div className="mt-3 flex justify-between items-center text-xs text-gray-500">
<span className="font-medium font-sans" style={{}}>Q1 2024 Overview</span>
<span className="inline-flex items-center gap-1 text-xs font-semibold font-sans text-gray-700" style={{}}>
<svg className="lucide lucide-arrow-right h-3 w-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              View Full Report
            </span>
</div>

<div className="pointer-events-none">
<div className="absolute -right-4 sm:-right-6 top-6 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl backdrop-blur ring-1 bg-white/95 ring-gray-200/50">
<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gradient-to-br shadow-md flex items-center justify-center from-blue-600 to-indigo-700">
<svg className="lucide lucide-sparkles h-4 w-4 sm:h-5 sm:w-5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<p className="text-[10px] text-gray-500 font-medium font-sans" style={{}}>AI Status</p>
<p className="text-xs sm:text-sm font-semibold tracking-tight font-sans text-gray-900" style={{}}>Processing</p>
</div>
</div>
<div className="absolute -left-4 sm:-left-6 bottom-8 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl backdrop-blur ring-1 bg-white/95 ring-gray-200/50">
<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 shadow-md flex items-center justify-center to-teal-600">
<svg className="lucide lucide-check-circle h-4 w-4 sm:h-5 sm:w-5 text-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<p className="text-[10px] text-gray-500 font-medium font-sans" style={{}}>Compliance</p>
<p className="text-xs sm:text-sm font-semibold tracking-tight font-sans text-gray-900" style={{}}>Verified</p>
</div>
</div>
</div>
</div>

<div className="z-10 flex gap-2 sm:gap-3 sm:rounded-2xl sm:mt-6 sm:px-4 sm:py-3 lg:mx-0 w-max ring-1 rounded-xl mt-4 mr-auto ml-auto pt-2 pr-3 pb-2 pl-3 relative shadow-xl backdrop-blur items-center bg-white/95 ring-gray-200/50">
<div className="flex -space-x-2">
<img alt="Law firm partner 1" className="h-7 w-7 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Law firm partner 2" className="h-7 w-7 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Law firm partner 3" className="h-7 w-7 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Law firm partner 4" className="h-7 w-7 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="text-xs">
<p className="font-semibold font-sans text-gray-900" style={{}}>Trusted by 200+ firms</p>
<div className="flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 stroke-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-1 font-medium font-sans text-gray-700" style={{}}>5.0</span>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<section aria-labelledby="service-models" className="overflow-hidden border-t relative bg-gradient-to-b border-gray-200 from-white to-gray-50" id="services">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="sm:text-sm animate-on-scroll text-xs font-semibold uppercase tracking-wider animate font-sans text-blue-600" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>Flexible Service Models</p>
<h2 className="sm:mt-4 sm:text-5xl md:text-6xl text-3xl tracking-tight mt-4 animate-on-scroll animate font-medium font-playfair" id="service-models" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
        Choose Your Automation Level
      </h2>
<p className="mt-4 text-base sm:text-lg animate-on-scroll animate font-sans text-gray-600" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>
        From partial automation to full end-to-end solutions, find the perfect fit for your firm
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<article className="relative group animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="h-full rounded-2xl p-6 sm:p-8 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200">
<div className="flex items-start justify-between mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600">
<svg className="lucide lucide-user-plus h-6 w-6" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold font-sans bg-blue-50 text-blue-700" style={{}}>
              Popular
            </span>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>Partial Automation</h3>
<p className="mt-2 text-sm font-sans text-gray-600" style={{}}>AI handles initial screening while you maintain attorney oversight</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Automated client intake and screening</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Attorney-led case strategy</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Reduce administrative burden</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Gradual transition support</p>
</div>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors font-sans bg-gray-900 text-white hover:bg-gray-800" href="#" style={{}}>
            Learn More
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>

<article className="relative group animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="h-full bg-gradient-to-br rounded-2xl p-6 sm:p-8 border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden from-blue-600 to-indigo-700">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-2xl bg-white/10"></div>
<div className="relative">
<div className="flex items-start justify-between mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-md bg-white/20 text-white">
<svg className="lucide lucide-users-2 h-6 w-6" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</div>
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold font-sans bg-white text-blue-700" style={{}}>
                Recommended
              </span>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-white" style={{}}>Hybrid Approach</h3>
<p className="mt-2 text-sm font-sans text-white/90" style={{}}>Personal consultations with streamlined document management</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-white/95" style={{}}>Attorney-led initial consultations</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-white/95" style={{}}>Automated form completion</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-white/95" style={{}}>Centralized document hub</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-white/95" style={{}}>Maximum operational efficiency</p>
</div>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors font-sans bg-white text-blue-700 hover:bg-gray-50" href="#" style={{}}>
              Get Started
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="relative group animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="h-full rounded-2xl p-6 sm:p-8 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200">
<div className="flex items-start justify-between mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600">
<svg className="lucide lucide-bot h-6 w-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold font-sans bg-purple-50 text-purple-700" style={{}}>
              Enterprise
            </span>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>Full Automation</h3>
<p className="mt-2 text-sm font-sans text-gray-600" style={{}}>Complete end-to-end automation from intake to assessment</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>AI-driven client journey</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Automated recommendations</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Direct-to-client option</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check h-5 w-5 shrink-0 mt-0.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm font-sans text-gray-700" style={{}}>Maximum case volume</p>
</div>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors font-sans bg-gray-900 text-white hover:bg-gray-800" href="#" style={{}}>
            Contact Sales
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section aria-labelledby="tech-section" className="overflow-hidden border-t relative border-gray-200 bg-white" id="technology">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start justify-between mb-12">
<div className="max-w-2xl">
<p className="sm:text-sm animate-on-scroll text-xs font-semibold uppercase tracking-wider animate font-sans text-blue-600" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>Advanced Technology</p>
<h2 className="sm:mt-4 sm:text-5xl md:text-6xl text-3xl tracking-tight mt-4 animate-on-scroll animate font-medium font-playfair" id="tech-section" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
          AI-Powered Decision Tree Engine
        </h2>
<p className="mt-4 text-base sm:text-lg animate-on-scroll animate font-sans text-gray-600" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>
          Our sophisticated immigration decision tree systematically explores pathways, calculates costs, and ensures compliance
        </p>
</div>

<div className="hidden sm:flex animate-on-scroll gap-x-2 items-center animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 transition cursor-not-allowed ring-gray-200 hover:bg-gray-200 bg-gray-100 text-gray-400" id="techPrev" style={{opacity: '0.5', cursor: 'not-allowed'}}>
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 transition ring-gray-900 hover:bg-gray-800 bg-gray-900 text-white" id="techNext" style={{opacity: '1', cursor: 'pointer'}}>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r to-transparent z-10 pointer-events-none from-white"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l to-transparent z-10 pointer-events-none from-white"></div>
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 animate-on-scroll animate" id="techCards" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none', animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>

<article className="relative min-w-[84%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-2xl bg-gradient-to-br border p-6 sm:p-8 shadow-lg from-blue-50 to-indigo-50 border-blue-200">
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-md mb-4 from-blue-600 to-indigo-700">
<svg className="lucide lucide-git-branch h-7 w-7 text-white" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>Immigration Pathway Mapping</h3>
<p className="mt-3 text-sm sm:text-base font-sans text-gray-700" style={{}}>
            Systematically explores potential avenues including family-based, humanitarian, employment, DACA, and specialized visa categories for optimal client outcomes.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-blue-200/50">
<svg className="lucide lucide-layers w-4 h-4 text-blue-700" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Multi-pathway analysis</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-blue-200/50">
<svg className="lucide lucide-target w-4 h-4 text-blue-700" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Optimal routing</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm transition font-semibold font-sans text-blue-700 hover:text-blue-900" href="#" style={{}}>
            Explore features
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="relative min-w-[84%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-2xl bg-gradient-to-br border p-6 sm:p-8 shadow-lg from-purple-50 to-pink-50 border-purple-200">
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-md mb-4 from-purple-600 to-pink-700">
<svg className="lucide lucide-calculator h-7 w-7 text-white" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>Dynamic Cost Calculation</h3>
<p className="mt-3 text-sm sm:text-base font-sans text-gray-700" style={{}}>
            Automatically builds comprehensive quotes including government fees, third-party costs, and attorney fees based on case complexity and requirements.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-purple-200/50">
<svg className="lucide lucide-dollar-sign w-4 h-4 text-purple-700" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Real-time pricing</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-purple-200/50">
<svg className="lucide lucide-pie-chart w-4 h-4 text-purple-700" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Cost breakdown</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm transition font-semibold font-sans text-purple-700 hover:text-purple-900" href="#" style={{}}>
            See pricing engine
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="relative min-w-[84%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-2xl bg-gradient-to-br border p-6 sm:p-8 shadow-lg from-emerald-50 to-teal-50 border-emerald-200">
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-md mb-4 from-emerald-600 to-teal-700">
<svg className="lucide lucide-file-check h-7 w-7 text-white" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>Smart Document Generation</h3>
<p className="mt-3 text-sm sm:text-base font-sans text-gray-700" style={{}}>
            Creates precise lists of necessary USCIS/EOIR forms and supporting documents tailored to each client's unique circumstances and case type.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-emerald-200/50">
<svg className="lucide lucide-clipboard-check w-4 h-4 text-emerald-700" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Auto-generation</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-emerald-200/50">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-700" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Validation</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm transition font-semibold font-sans text-emerald-700 hover:text-emerald-900" href="#" style={{}}>
            View documents
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="relative min-w-[84%] sm:min-w-[420px] lg:min-w-[480px] snap-start rounded-2xl bg-gradient-to-br border p-6 sm:p-8 shadow-lg from-amber-50 to-orange-50 border-amber-200">
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 shadow-md mb-4 to-orange-600">
<svg className="lucide lucide-shield-alert h-7 w-7 text-white" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair text-gray-900" style={{}}>Risk Assessment &amp; Compliance</h3>
<p className="mt-3 text-sm sm:text-base font-sans text-gray-700" style={{}}>
            Identifies potential complications or red flags requiring attorney review while ensuring jurisdiction-specific compliance and regulatory adherence.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-amber-200/50">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-amber-700" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Flag detection</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5 ring-1 bg-white/60 ring-amber-200/50">
<svg className="lucide lucide-book-open w-4 h-4 text-amber-700" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="font-medium font-sans text-gray-800" style={{}}>Up-to-date laws</span>
</span>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm transition font-semibold font-sans text-amber-700 hover:text-amber-900" href="#" style={{}}>
            Learn about compliance
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
</div>
</div>
</div>
</section>

<section aria-labelledby="benefits" className="overflow-hidden border-t relative border-gray-200 bg-gray-50">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="sm:text-sm animate-on-scroll text-xs font-semibold uppercase tracking-wider animate font-sans text-blue-600" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>Why Choose InstantLaw</p>
<h2 className="sm:mt-4 sm:text-5xl md:text-6xl text-3xl tracking-tight mt-4 animate-on-scroll animate font-medium font-playfair" id="benefits" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
        Transform Your Immigration Practice
      </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-blue-100 text-blue-600">
<svg className="lucide lucide-zap h-6 w-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>80% Faster Intake</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Reduce intake time dramatically with automated screening and assessment</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-emerald-100 text-emerald-600">
<svg className="lucide lucide-trending-up h-6 w-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>Increase Capacity</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Handle more cases without proportional staff growth</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-purple-100 text-purple-600">
<svg className="lucide lucide-clock h-6 w-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>24/7 Availability</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Provide round-the-clock service for initial consultations</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-amber-100 text-amber-600">
<svg className="lucide lucide-shield-check h-6 w-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>Reduce Errors</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Standardize processes and minimize human error</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.7s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-indigo-100 text-indigo-600">
<svg className="lucide lucide-dollar-sign h-6 w-6" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>Lower Costs</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Reduce operational overhead and non-billable hours</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.8s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-teal-100 text-teal-600">
<svg className="lucide lucide-smile h-6 w-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>Better Experience</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Deliver faster responses and transparent pricing</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 0.9s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-rose-100 text-rose-600">
<svg className="lucide lucide-file-check h-6 w-6" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>Full Documentation</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Maintain comprehensive records of all interactions</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate bg-white border-gray-200" style={{animation: 'fadeSlideIn 1.0s ease-out 1.0s both'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-cyan-100 text-cyan-600">
<svg className="lucide lucide-bar-chart h-6 w-6" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2 font-sans text-gray-900" style={{}}>Data Insights</h3>
<p className="text-sm font-sans text-gray-600" style={{}}>Gain valuable analytics on case types and trends</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-t relative bg-gradient-to-br border-gray-200 from-blue-600 to-indigo-700">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="text-center max-w-3xl mx-auto">
<h2 className="sm:text-5xl md:text-6xl text-3xl tracking-tight animate-on-scroll animate font-medium font-playfair text-white" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>
        Ready to Transform Your Practice?
      </h2>
<p className="mt-6 text-lg sm:text-xl animate-on-scroll animate font-sans text-white/90" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
        Join 200+ immigration law firms already using InstantLaw to automate their client intake and case management
      </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-colors shadow-xl font-sans bg-white text-blue-700 hover:bg-gray-50" href="#demo" style={{}}>
          Schedule a Demo
          <svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg backdrop-blur-md border-2 px-8 py-4 text-base font-semibold transition-colors font-sans bg-white/10 border-white/30 text-white hover:bg-white/20" href="#contact" style={{}}>
          Contact Sales
          <svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm animate-on-scroll animate text-white/80" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-5 w-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-sans" style={{}}>No credit card required</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-5 w-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-sans" style={{}}>14-day free trial</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-5 w-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-sans" style={{}}>Cancel anytime</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t relative text-gray-600 bg-white border-gray-200">
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">

<div className="col-span-2 sm:col-span-4 lg:col-span-2">
<a className="inline-flex items-center justify-center text-2xl font-bold tracking-tighter mb-4 text-gray-900" href="#">
<span className="inline-flex items-center gap-1.5">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold font-sans from-blue-600 to-indigo-700 text-white" style={{}}>IL</span>
<span className="font-medium font-playfair" style={{}}>InstantLaw</span>
</span>
</a>
<p className="text-sm max-w-xs mb-4 font-sans text-gray-600" style={{}}>
          AI-powered immigration case management for modern law firms.
        </p>
<div className="flex items-center gap-3">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition bg-gray-100 hover:bg-gray-200 text-gray-600" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition bg-gray-100 hover:bg-gray-200 text-gray-600" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-bold mb-4 font-sans text-gray-900" style={{}}>Product</h3>
<ul className="space-y-3">
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Features</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Pricing</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Security</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Integrations</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-bold mb-4 font-sans text-gray-900" style={{}}>Company</h3>
<ul className="space-y-3">
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>About</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Blog</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Careers</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Contact</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-bold mb-4 font-sans text-gray-900" style={{}}>Resources</h3>
<ul className="space-y-3">
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Documentation</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Help Center</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Guides</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Webinars</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-bold mb-4 font-sans text-gray-900" style={{}}>Legal</h3>
<ul className="space-y-3">
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Privacy</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Terms</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Compliance</a></li>
<li><a className="text-sm transition font-sans text-gray-600 hover:text-gray-900" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 border-gray-200">
<p className="text-xs text-gray-500 font-sans" style={{}}>© 2024 InstantLaw. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-gray-500">
<a className="transition font-sans hover:text-gray-900" href="#" style={{}}>Status</a>
<a className="transition font-sans hover:text-gray-900" href="#" style={{}}>Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
