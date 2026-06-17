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



    function handleRouting() {
      const hash = window.location.hash || '#/';
      const views = document.querySelectorAll('.page-view');
      
      let targetViewId = 'view-home';

      if (hash.startsWith('#/')) {
        const route = hash.split('?')[0]; 
        if (route !== '#/' && route !== '#') {
           targetViewId = 'view-' + route.substring(2);
        }
      }

      const targetEl = document.getElementById(targetViewId);
      
      views.forEach(view => {
        if (view.id === targetViewId) {
          view.classList.remove('hidden');
          view.classList.add('block');
        } else {
          view.classList.remove('block');
          view.classList.add('hidden');
        }
      });

      if (hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.length > 1) {
        document.getElementById('view-home').classList.remove('hidden');
        document.getElementById('view-home').classList.add('block');
        setTimeout(() => {
          const anchor = document.querySelector(hash);
          if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
      
      closeMenu(); 
    }

    window.addEventListener('hashchange', handleRouting);
    document.addEventListener('DOMContentLoaded', handleRouting);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    const siteNav = document.getElementById("site-nav");
    function updateNavShadow() {
      if (window.scrollY > 10) siteNav.classList.add("nav-scrolled");
      else siteNav.classList.remove("nav-scrolled");
    }
    updateNavShadow();
    window.addEventListener("scroll", updateNavShadow, { passive: true });

    const mobileMenu = document.getElementById("mobile-menu");
    const menuBtn = document.getElementById("menu-btn");
    const menuClose = document.getElementById("menu-close");

    function openMenu() {
      mobileMenu.classList.remove("translate-x-full");
      document.body.classList.add("overflow-hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      mobileMenu.classList.add("translate-x-full");
      document.body.classList.remove("overflow-hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    }

    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("translate-x-full");
      isOpen ? closeMenu() : openMenu();
    });
    menuClose.addEventListener("click", closeMenu);
    document.querySelectorAll("#mobile-menu a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

    const portfolioSelect = document.getElementById("portfolio");
    if(portfolioSelect) {
      portfolioSelect.addEventListener("change", () => {
        if (portfolioSelect.value) portfolioSelect.classList.add("has-value");
        else portfolioSelect.classList.remove("has-value");
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-transparent transition-all duration-300 bg-white/0" id="site-nav">
<div className="section-wrap md:px-8 flex pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#/">
<div className="w-8 h-8 flex items-center justify-center rounded-md font-semibold text-lg tracking-tight bg-gray-900 text-white">L</div>
<span className="text-lg leading-none font-semibold tracking-tight text-gray-900">Lumina</span>
</a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
<li><a className="transition-colors hover:text-gray-900" href="#/services">Services</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#/process">Our Process</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#/contact">Contact</a></li>
</ul>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium transition-colors text-gray-900 hover:text-gray-600" href="#/contact">Log In</a>
<a className="px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm bg-gray-900 text-white hover:bg-gray-800" href="#/contact">
          Get Started
        </a>
</div>
<button aria-expanded="false" aria-label="Menu" className="lg:hidden text-gray-900" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<aside className="fixed inset-0 z-[60] translate-x-full transition-transform duration-500 border-l bg-white border-gray-200" id="mobile-menu">
<div className="pt-24 px-8 h-full flex flex-col overflow-y-auto">
<button aria-label="Close menu" className="absolute top-6 right-6 text-gray-900" id="menu-close">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<nav className="flex flex-col gap-6">
<a className="text-3xl font-semibold tracking-tight text-gray-900" href="#/services">Services</a>
<a className="text-3xl font-semibold tracking-tight text-gray-900" href="#/process">Our Process</a>
<a className="text-3xl font-semibold tracking-tight text-gray-900" href="#/contact">Contact</a>
</nav>
<div className="mt-auto pb-12 pt-12">
<a className="flex items-center justify-center w-full py-3 rounded-md font-medium text-sm bg-gray-900 text-white" href="#/contact">Get Started</a>
</div>
</div>
</aside>

<div id="app-content">

<main className="page-view block" id="view-home">

<header className="relative min-h-screen flex items-center pt-24 px-6 md:px-8 overflow-hidden bg-gray-50">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-200/50 via-gray-50 to-gray-50"></div>
<svg className="absolute right-0 top-0 opacity-[0.03] w-[800px] h-[800px]" fill="none" viewbox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
<path d="M800 0H0V800" stroke="#000" strokeWidth="2"></path>
<path d="M800 100H100V800" stroke="#000" strokeWidth="2"></path>
<path d="M800 200H200V800" stroke="#000" strokeWidth="2"></path>
<path d="M800 300H300V800" stroke="#000" strokeWidth="2"></path>
</svg>
</div>
<div className="section-wrap relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="text-gray-900">
<div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border shadow-sm opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards] border-gray-200 bg-white">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium tracking-wide text-gray-600">Now integrating with most PMS platforms</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-6 opacity-0 animate-[fadeUp_0.9s_ease_0.2s_forwards] tracking-tight text-gray-900">
              Automate your <br/><span className="text-gray-400">turnovers.</span><br/> Scale your portfolio.
            </h1>
<p className="text-lg max-w-lg leading-relaxed mb-10 opacity-0 animate-[fadeUp_0.9s_ease_0.35s_forwards] text-gray-600">
              The luxury cleaning and operations platform built specifically for property managers. Flawless execution, powered by intelligent workflows.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeUp_0.9s_ease_0.5s_forwards]">
<a className="px-6 py-3.5 rounded-md text-sm font-medium tracking-wide transition-colors shadow-sm text-center bg-gray-900 text-white hover:bg-gray-800" href="#/contact">
                Book a Demo
              </a>
<a className="px-6 py-3.5 border rounded-md text-sm font-medium tracking-wide transition-colors text-center flex items-center justify-center gap-2 border-gray-200 bg-white text-gray-900 hover:bg-gray-50" href="#/process">
                See Our Process <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative hidden lg:block opacity-0 animate-[fadeUp_1s_ease_0.4s_forwards]">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
<img alt="Pristine luxury living room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md border rounded-lg p-4 shadow-lg flex items-center justify-between bg-white/95 border-gray-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-gray-900">Post-Clean Audit Passed</p>
<p className="text-xs text-gray-500">Photos verified • 2 mins ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-8 bg-gray-50" id="process-snippet">
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative reveal">
<div className="w-full aspect-square border rounded-xl relative overflow-hidden shadow-sm p-8 flex flex-col justify-center bg-white border-gray-200">
<div className="space-y-6">

<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-100 text-gray-900">
<iconify-icon icon="solar:server-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-gray-900">PMS Auto-Sync</p>
<p className="text-xs text-gray-500 mt-1">Schedules are pulled directly from your calendar.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 relative bg-gray-900 text-white">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 rounded-full bg-blue-500"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span></span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-gray-900">Agentic Dispatch</p>
<p className="text-xs text-gray-500 mt-1">Automated communications keep you in the loop instantly.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-100 text-gray-900">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-gray-900">Visual Audit</p>
<p className="text-xs text-gray-500 mt-1">Final photo validation on guest-critical items.</p>
</div>
</div>
</div>
</div>
</div>
<div className="reveal delay-100">
<h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight text-gray-900">
              A systematic approach to operations.
            </h2>
<div className="space-y-6 mb-8 text-lg text-gray-600">
<p>We replace fragmented cleaning teams and manual text threads with a centralized, reliable process. Our custom workflow connects seamlessly to most property management systems to automate scheduling.</p>
<p>By leveraging agentic workflows to automate communications and mandating post-clean photo audits, you're always kept in the loop without having to manage the chaos.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors border-b border-transparent pb-0.5 text-gray-900 hover:text-gray-600 hover:border-gray-900" href="#/process">
              Read about our process
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-gray-900 text-white" id="services-snippet">
<div className="section-wrap px-6 md:px-8">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Comprehensive portfolio care.</h2>
<p className="mb-8 text-lg text-gray-400">More than just cleaning. We offer a full suite of services designed to keep your properties in perfect condition year-round.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors border-b border-transparent pb-0.5 text-white hover:text-gray-300 hover:border-white" href="#/services">
                View All Services
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<a className="block border rounded-xl p-8 transition-colors group reveal delay-100 bg-gray-800/50 border-gray-700/50 hover:bg-gray-800" href="#/services">
<iconify-icon className="mb-6 text-gray-300" icon="solar:sparkles-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Turnover Cleaning</h3>
<p className="text-sm leading-relaxed mb-2 text-gray-400">Standardized hotel-quality cleans executed within tight back-to-back windows.</p>
</a>
<a className="block border rounded-xl p-8 transition-colors group reveal delay-200 bg-gray-800/50 border-gray-700/50 hover:bg-gray-800" href="#/services">
<iconify-icon className="mb-6 text-gray-300" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Deep Cleaning</h3>
<p className="text-sm leading-relaxed mb-2 text-gray-400">Bi-annual intensive maintenance cleans to preserve property value.</p>
</a>
<a className="block border rounded-xl p-8 transition-colors group reveal delay-100 bg-gray-800/50 border-gray-700/50 hover:bg-gray-800" href="#/services">
<iconify-icon className="mb-6 text-gray-300" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Amenity Stocking</h3>
<p className="text-sm leading-relaxed mb-2 text-gray-400">Automated tracking and restocking of essential supplies and toiletries.</p>
</a>
<div className="grid grid-rows-2 gap-4 sm:col-span-1">
<a className="block border rounded-xl p-6 transition-colors group reveal delay-200 bg-gray-800/50 border-gray-700/50 hover:bg-gray-800" href="#/services">
<h3 className="text-base font-semibold tracking-tight flex items-center gap-3"><iconify-icon className="text-gray-300" icon="solar:bed-linear" width="20"></iconify-icon> Linen Supply</h3>
</a>
<a className="block border rounded-xl p-6 transition-colors group reveal delay-300 bg-gray-800/50 border-gray-700/50 hover:bg-gray-800" href="#/services">
<h3 className="text-base font-semibold tracking-tight flex items-center gap-3"><iconify-icon className="text-gray-300" icon="solar:washing-machine-linear" width="20"></iconify-icon> In-House Laundry Facility</h3>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden pt-20" id="view-services">
<div className="py-24 px-6 text-center border-b bg-white border-gray-200">
<div className="section-wrap">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">Services</h1>
<p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">A unified approach to property maintenance, readiness, and luxury standards.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="block border rounded-xl p-8 transition-all group border-gray-200 bg-gray-50/50">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:sparkles-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900">Turnover Cleaning</h3>
<p className="text-gray-500 leading-relaxed text-sm">Reliable, rapid turnovers synchronized with your booking calendar. Standardized hotel-quality cleans executed flawlessly within tight back-to-back windows.</p>
</div>
<div className="block border rounded-xl p-8 transition-all group border-gray-200 bg-gray-50/50">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900">Deep Cleaning</h3>
<p className="text-gray-500 leading-relaxed text-sm">Scheduled intensive maintenance cleans designed to address hidden wear-and-tear, preserving your property value and ensuring pristine ratings year-round.</p>
</div>
<div className="block border rounded-xl p-8 transition-all group border-gray-200 bg-gray-50/50">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900">Amenity Stocking</h3>
<p className="text-gray-500 leading-relaxed text-sm">Automated tracking and restocking of coffee, toiletries, paper goods, and essentials. Never rely on manual counts again; we ensure your guests always have what they need.</p>
</div>
<div className="block border rounded-xl p-8 transition-all group border-gray-200 bg-gray-50/50">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900">Linen Supply</h3>
<p className="text-gray-500 leading-relaxed text-sm">Elevate the guest experience with our premium rental linens. We supply high-thread-count sheets and luxury towels mapped perfectly for seamless swaps during every turnover.</p>
</div>
<div className="block border rounded-xl p-8 transition-all group border-gray-200 bg-gray-50/50">
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:washing-machine-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900">In-House Laundry Facility</h3>
<p className="text-gray-500 leading-relaxed text-sm">Eliminate in-unit laundry bottlenecks entirely. All laundering is processed off-site at our commercial-grade in-house facility to guarantee sanitation and rapid return times.</p>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-process">
<div className="py-24 px-6 text-center border-b bg-gray-50 border-gray-200">
<div className="section-wrap max-w-3xl">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-gray-900">Our Process</h1>
<p className="text-lg text-gray-500">Bridging the gap between digital bookings and physical reality through intelligent, automated workflows.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-8 max-w-4xl mx-auto">
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 shrink-0 border rounded-2xl flex items-center justify-center shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-900">1. Custom Workflow Connects to Most PMS</h2>
<p className="leading-relaxed mb-4 text-gray-600">
                We eliminate the manual overhead of schedule management. Our custom integration hooks directly into your existing Property Management System. The moment a guest books, alters, or cancels a reservation, our system automatically synchronizes the change, dynamically adjusting cleaner dispatch schedules to ensure no property is ever left unserviced.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 shrink-0 border rounded-2xl flex items-center justify-center shadow-sm bg-gray-900 border-gray-900 text-white">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-900">2. Agentic Workflows &amp; Automated Communications</h2>
<p className="leading-relaxed mb-4 text-gray-600">
                You shouldn't have to chase down updates. We utilize state-of-the-art agentic workflows to automate field communications. When a technician arrives, reports a maintenance issue, or completes a job, intelligent agents automatically process the data and notify you instantly. You are kept fully in the loop with real-time, actionable insights—without endless text threads.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 shrink-0 border rounded-2xl flex items-center justify-center shadow-sm bg-white border-gray-200 text-gray-900">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-900">3. Post-Clean Audit with Verification Photos</h2>
<p className="leading-relaxed mb-4 text-gray-600">
                Quality control is non-negotiable. Every service concludes with a rigorous post-clean audit. Field personnel are required to submit timestamped photos specifically focusing on the items that are most important to guests—immaculate beds, pristine bathrooms, and fully stocked amenities. This verified digital record guarantees standards are met before the next arrival.
              </p>
</div>
</div>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-contact">
<div className="py-24 md:py-32 px-6 md:px-8 border-b bg-white border-gray-200">
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900">Ready to scale?</h2>
<p className="text-lg text-gray-500 mb-12 max-w-md">Get in touch to discuss your portfolio size, specific needs, and how our process can streamline your operations.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded border flex items-center justify-center shrink-0 border-gray-200 bg-gray-50">
<iconify-icon className="text-gray-600" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium block mb-1 text-gray-900">Headquarters</span>
<p className="text-sm text-gray-500">100 Tech Blvd, Suite 400<br/>Austin, TX 78701</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded border flex items-center justify-center shrink-0 border-gray-200 bg-gray-50">
<iconify-icon className="text-gray-600" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium block mb-1 text-gray-900">Sales &amp; Partnerships</span>
<a className="text-sm text-gray-500 transition-colors hover:text-gray-900" href="mailto:partners@luminastays.com">partners@luminastays.com</a>
</div>
</div>
</div>
</div>
<div className="border rounded-xl p-8 shadow-sm reveal delay-100 bg-white border-gray-200">
<h3 className="font-semibold text-xl mb-6 tracking-tight text-gray-900">Request a Proposal</h3>
<form className="space-y-5" id="lead-form" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-5">
<div className="input-group relative">
<input className="w-full border px-4 py-3 rounded-md text-sm focus:outline-none focus:border-gray-900 placeholder-transparent transition-colors bg-white border-gray-200 text-gray-900" id="name" name="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-3 top-3 text-gray-500 pointer-events-none text-sm" htmlFor="name">Full Name</label>
</div>
<div className="input-group relative">
<input className="w-full border px-4 py-3 rounded-md text-sm focus:outline-none focus:border-gray-900 placeholder-transparent transition-colors bg-white border-gray-200 text-gray-900" id="email" name="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-3 top-3 text-gray-500 pointer-events-none text-sm" htmlFor="email">Work Email</label>
</div>
</div>
<div className="input-group relative">
<input className="w-full border px-4 py-3 rounded-md text-sm focus:outline-none focus:border-gray-900 placeholder-transparent transition-colors bg-white border-gray-200 text-gray-900" id="company" name="company" placeholder="Company" required="" type="text"/>
<label className="absolute left-3 top-3 text-gray-500 pointer-events-none text-sm" htmlFor="company">Company Name</label>
</div>
<div className="input-group relative">
<select className="w-full border px-4 py-3 rounded-md text-sm focus:outline-none focus:border-gray-900 appearance-none transition-colors bg-white border-gray-200 text-gray-900" id="portfolio" name="portfolio" required="">
<option disabled="" selected="" value=""></option>
<option value="1-10">1 - 10 Units</option>
<option value="11-50">11 - 50 Units</option>
<option value="51-100">51 - 100 Units</option>
<option value="100+">100+ Units</option>
</select>
<label className="absolute left-3 top-3 text-gray-500 pointer-events-none text-sm" htmlFor="portfolio">Portfolio Size</label>
<iconify-icon className="absolute right-4 top-3.5 pointer-events-none text-gray-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="input-group relative">
<textarea className="w-full border px-4 py-3 rounded-md text-sm focus:outline-none focus:border-gray-900 placeholder-transparent resize-none transition-colors bg-white border-gray-200 text-gray-900" id="message" name="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-3 top-3 text-gray-500 pointer-events-none text-sm" htmlFor="message">Specific requirements (optional)</label>
</div>
<button className="w-full py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 group shadow-sm mt-2 bg-gray-900 text-white hover:bg-gray-800" id="submit-btn" type="submit">
                Submit Request
              </button>
</form>
</div>
</div>
</div>
</main>
</div> 

<footer className="border-t pt-16 pb-8 text-sm bg-white border-gray-200 text-gray-600">
<div className="section-wrap px-6 md:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<a className="flex items-center gap-2 mb-6" href="#/">
<div className="w-6 h-6 flex items-center justify-center rounded font-semibold text-xs tracking-tight bg-gray-900 text-white">L</div>
<span className="text-base font-semibold tracking-tight text-gray-900">Lumina</span>
</a>
<p className="mb-6 leading-relaxed max-w-xs">Software-enabled turnover and operational solutions for professional short-term rental managers.</p>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight text-gray-900">Platform</h4>
<ul className="space-y-3">
<li><a className="transition-colors hover:text-gray-900" href="#/services">Services</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#/process">Our Process</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#/contact">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight text-gray-900">Company</h4>
<ul className="space-y-3">
<li><a className="transition-colors hover:text-gray-900" href="#/contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight text-gray-900">System Status</h4>
<div className="flex items-center gap-2 mb-4 p-2 rounded border w-max border-gray-200 bg-gray-50">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-gray-700">All systems operational</span>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-gray-100">
<p>© 2024 Lumina Stays Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="transition-colors hover:text-gray-900" href="#">Privacy</a>
<a className="transition-colors hover:text-gray-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
