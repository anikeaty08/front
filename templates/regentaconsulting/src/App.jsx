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



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = { threshold: 0.5, rootMargin: "0px" };
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const counter = entry.target;
                      const target = parseFloat(counter.getAttribute('data-target'));
                      const duration = 1500;
                      const start = 0;
                      let startTime = null;

                      function animate(currentTime) {
                          if (!startTime) startTime = currentTime;
                          const progress = Math.min((currentTime - startTime) / duration, 1);
                          const ease = 1 - Math.pow(1 - progress, 3);
                          const value = start + (ease * (target - start));

                          if (target % 1 !== 0) {
                               counter.innerText = value.toFixed(1);
                          } else {
                               counter.innerText = Math.floor(value);
                          }

                          if (progress < 1) {
                              requestAnimationFrame(animate);
                          } else {
                              counter.innerText = target;
                          }
                      }
                      requestAnimationFrame(animate);
                      observer.unobserve(counter);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.counter').forEach(el => observer.observe(el));
      });
    


      if (typeof lucide !== 'undefined') lucide.createIcons();

      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      const iconMenu = document.getElementById('icon-menu');
      const iconClose = document.getElementById('icon-close');
      const links = document.querySelectorAll('.mobile-link');

      function toggleMenu() {
          const isClosed = menu.classList.contains('translate-x-full');
          if (isClosed) {
              menu.classList.remove('translate-x-full');
              document.body.style.overflow = 'hidden';
              iconMenu.classList.add('opacity-0', 'scale-75', '-rotate-90');
              iconClose.classList.remove('opacity-0', 'scale-75', 'rotate-90');
              iconClose.classList.add('opacity-100', 'scale-100', 'rotate-0');
          } else {
              menu.classList.add('translate-x-full');
              document.body.style.overflow = '';
              iconMenu.classList.remove('opacity-0', 'scale-75', '-rotate-90');
              iconClose.classList.add('opacity-0', 'scale-75', 'rotate-90');
              iconClose.classList.remove('opacity-100', 'scale-100', 'rotate-0');
          }
      }

      if(btn) btn.addEventListener('click', toggleMenu);
      if(links) links.forEach(l => l.addEventListener('click', toggleMenu));
    


      document.addEventListener('DOMContentLoaded', () => { const observerFade = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('fade-in-up'); observerFade.unobserve(entry.target); } }); }, { threshold: 0.1 }); document.querySelectorAll('.scroll-fade').forEach(el => observerFade.observe(el)); });
    


      document.addEventListener('DOMContentLoaded', () => {
        const cookieBanner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('cookie-accept');
        const declineBtn = document.getElementById('cookie-decline');

        // Show banner after short delay
        setTimeout(() => {
          cookieBanner.classList.remove('translate-y-full');
        }, 1000);

        function hideBanner() {
          cookieBanner.classList.add('translate-y-full');
        }

        if(acceptBtn) acceptBtn.addEventListener('click', hideBanner);
        if(declineBtn) declineBtn.addEventListener('click', hideBanner);
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3.5 group" href="#">
<div className="relative w-11 h-11 flex-none">
<div className="absolute bottom-0 left-0 w-9 h-9 bg-teal-500/90 rounded-sm"></div>
<div className="absolute top-0 right-0 w-9 h-9 bg-slate-900 rounded-sm shadow-sm flex items-center justify-center text-white z-10">
<div className="flex items-baseline gap-[1px]">
<span className="font-manrope font-bold text-xl leading-none">
                  R
                </span>
<span className="font-manrope font-medium text-sm leading-none">
                  c
                </span>
</div>
</div>
</div>
<div className="flex flex-col">
<span className="brand-font text-xl font-bold text-slate-900 leading-none tracking-tight">
              REGENTA
            </span>
<span className="font-inter text-[10px] font-semibold text-slate-500 tracking-[0.3em] lowercase leading-tight ml-0.5">
              consulting
            </span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-slate-900 transition-colors" href="#approach">
            Approach
          </a>
<a className="hover:text-slate-900 transition-colors" href="#cases">
            Case Studies
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 text-xs font-semibold tracking-wide uppercase hover:bg-slate-800 transition-colors" href="#request">
          Discuss Project
        </a>
<button className="md:hidden w-10 h-10 relative flex items-center justify-center text-slate-900 hover:text-teal-700 transition-colors z-50" id="mobile-menu-btn">
<div className="transition-all duration-300 absolute inset-0 flex items-center justify-center" id="icon-menu">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</div>
<div className="transition-all duration-300 absolute inset-0 flex items-center justify-center opacity-0 scale-75 rotate-90" id="icon-close">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
</button>
</div>
<div className="fixed top-20 right-0 w-3/4 sm:w-1/2 h-[calc(100vh-80px)] bg-white/95 backdrop-blur-sm z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col border-l border-t border-slate-100 shadow-2xl overflow-y-auto" id="mobile-menu">
<div className="flex flex-col p-6 gap-6">
<a className="mobile-link text-xl font-medium text-slate-900 py-3 border-b border-slate-50 flex justify-between items-center" href="#services">
            Services
            <svg className="lucide lucide-chevron-right w-5 h-5 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="mobile-link text-xl font-medium text-slate-900 py-3 border-b border-slate-50 flex justify-between items-center" href="#approach">
            Approach
            <svg className="lucide lucide-chevron-right w-5 h-5 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="mobile-link text-xl font-medium text-slate-900 py-3 border-b border-slate-50 flex justify-between items-center" href="#cases">
            Case Studies
            <svg className="lucide lucide-chevron-right w-5 h-5 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
<div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
<h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Start a Project
          </h4>
<a className="mobile-link flex w-full bg-slate-900 text-white py-4 justify-center items-center gap-2 text-sm font-bold uppercase tracking-wide hover:bg-slate-800 transition-colors rounded-sm" href="#request">
            Discuss Project
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="network-container hidden lg:block">
<div className="network-ring ring-1"><div className="orbit-dot"></div></div>
<div className="network-ring ring-2"></div>
<div className="network-ring ring-3">
<div className="orbit-dot" style={{backgroundColor: '#d4af37'}}></div>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col justify-center relative">
<div className="hidden xl:flex absolute -left-20 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
<span className="h-16 w-px bg-slate-300"></span>
<span className="text-xs uppercase tracking-widest font-semibold text-slate-400" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
              Strategy &amp; Marketing
            </span>
</div>
<h1 className="font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900 fade-in-up delay-100 text-4xl md:text-5xl lg:text-6xl">
            Strategic Consulting and
            <br/>
<span className="text-teal-700">Marketing</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed mb-10 fade-in-up delay-200">
            Real Insights. Real Markets. Real Growth.
          </p>
<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10 fade-in-up delay-300">
<div className="border-l-2 border-slate-100 pl-4">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
<span className="counter" data-target="120">0</span>
                +
              </div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Projects Delivered
              </div>
</div>
<div className="border-l-2 border-slate-100 pl-4">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
<span className="counter" data-target="30">0</span>
                +
              </div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Industries Analyzed
              </div>
</div>
<div className="border-l-2 border-slate-100 pl-4">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
<span className="counter" data-target="15">0</span>
                +
              </div>
<div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                Countries Covered
              </div>
</div>
<div className="border-l-2 border-slate-100 pl-4">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
<span className="counter" data-target="4.9">0</span>
                /5
              </div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Client Satisfaction
              </div>
</div>
</div>

<div className="fade-in-up bg-amber-50/50 max-w-lg border border-slate-200/60 p-6 md:p-8 rounded-sm shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
              Tell us about your project
            </h3>
<form action="https://formspree.io/f/xblnyvra" className="space-y-5" method="POST">

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="first_name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="last_name" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                  Work Email:
                  <span className="text-slate-400 font-normal">(required)</span>
</label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="email" required="" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                  How can we help?
                  <span className="text-slate-400 font-normal">(required)</span>
</label>
<textarea className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all resize-none" name="message" required="" rows="4"></textarea>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                  Which service do you need?
                </label>
<select className="custom-select w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3 text-sm text-slate-500 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all cursor-pointer pr-10" name="service">
<option value="">Select an option</option>
<option value="marketing_strategy">Marketing Strategy</option>
<option value="market_research">Market Research</option>
<option value="development_strategy">Growth Strategy</option>
<option value="individual_strategy">Custom Strategy</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                  Best time to discuss?
                </label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="preferred_dates" placeholder="e.g., next week, Mon-Wed afternoon" type="text"/>
</div>

<button className="w-full bg-slate-900 text-white py-4 text-base font-semibold tracking-tight hover:bg-slate-800 transition-colors rounded-sm flex items-center justify-center gap-2 mt-2" type="submit">
                Start Discussion
              </button>
</form>
</div>
</div>
</div>
</header>

<section className="bg-white border-b border-slate-100 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-8 leading-tight">
            Regenta Consulting partners with growth-oriented companies to bring
            market transparency, uncover hidden opportunities, and build
            data-driven strategies for scale.
          </h2>
<div className="flex flex-col md:flex-row gap-8 text-slate-600 leading-relaxed">
<p>
              We cut through the noise of traditional consulting. Regenta brings
              clarity and strategic direction for companies entering new
              markets, refining products, or seeking investment validation.
            </p>
<p>
              Our approach combines the rigor of institutional research with the
              agility of modern tech frameworks. We don't just deliver reports;
              we craft narratives that drive revenue.
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-slate-50/50 pt-16 pb-16" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Core Services
            </h2>
<p className="text-slate-500 max-w-xl">
              Comprehensive analytical frameworks designed to mitigate risk.
            </p>
</div>
<div className="h-px bg-slate-200 flex-grow ml-8 hidden md:block mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6"></path>
<path d="M12 21V3"></path>
<path d="M19 21V9"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">
              Market Research
            </h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                TAM/SAM/SOM Analysis
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Demand Modeling
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Consumer Insights
              </li>
</ul>
</div>

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">
              Marketing Strategy
            </h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Positioning &amp; Value Prop
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Channel Strategy
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Acquisition Funnels
              </li>
</ul>
</div>

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">Trend Reports</h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Macro Forecasting
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Industry Reviews
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Quarterly Reports
              </li>
</ul>
</div>

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">GTM Strategy</h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Market Entry Case
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Launch Calendar
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Pricing &amp; Distribution
              </li>
</ul>
</div>

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-swords w-5 h-5" data-lucide="swords" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
<line x1="13" x2="19" y1="19" y2="13"></line>
<line x1="16" x2="20" y1="16" y2="20"></line>
<line x1="19" x2="21" y1="21" y2="19"></line>
<polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline>
<line x1="5" x2="9" y1="14" y2="18"></line>
<line x1="7" x2="4" y1="17" y2="20"></line>
<line x1="3" x2="5" y1="19" y2="21"></line>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">
              Competitive Audit
            </h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                SWOT / TOWS
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Feature Comparison
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                GAP Analysis
              </li>
</ul>
</div>

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">
              Audience Analysis
            </h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Segmentation
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Jobs-to-be-done (JTBD)
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Buying Behavior
              </li>
</ul>
</div>

<div className="bg-white p-8 border border-slate-100 hover:border-teal-600/30 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-slate-900 group-hover:text-teal-700 transition-colors">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">
              Product Strategy
            </h3>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Product-Market Fit
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                USP Packaging
              </li>
<li className="flex items-start gap-2">
<span className="text-teal-600 text-[10px] mt-1">●</span>
                Pricing Logic
              </li>
</ul>
</div>

<div className="bg-slate-900 p-8 border border-slate-900 shadow-xl group transform lg:-translate-y-2">
<div className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center mb-6 text-teal-400">
<svg className="lucide lucide-microscope w-5 h-5" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path d="M9 14h2"></path>
<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-white mb-4">Custom Research</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex gap-2 items-start">
<span className="text-teal-400 text-[10px] mt-1">●</span>
                Primary Data Collection
              </li>
<li className="flex gap-2 items-start">
<span className="text-teal-400 text-[10px] mt-1">●</span>
                Custom Data Modeling
              </li>
<li className="flex gap-2 items-start">
<span className="text-teal-400 text-[10px] mt-1">●</span>
                Strategic Recommendations
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-100 py-16 md:py-24" id="approach">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">
          How We Work
        </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="relative pl-6 border-l-2 border-slate-100">
<span className="text-xs font-bold text-slate-300 mb-2 block">01</span>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Goal Definition
            </h4>
<p className="text-sm text-slate-500">
              We align on objectives, KPIs, and the specific questions that need
              answering.
            </p>
</div>
<div className="relative pl-6 border-l-2 border-teal-600">
<span className="text-xs font-bold text-teal-600 mb-2 block">02</span>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Research &amp; Insights
            </h4>
<p className="text-sm text-slate-500">
              Gathering quantitative and qualitative data using deep-dive
              methodologies.
            </p>
</div>
<div className="relative pl-6 border-l-2 border-slate-100">
<span className="text-xs font-bold text-slate-300 mb-2 block">03</span>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Strategy Development
            </h4>
<p className="text-sm text-slate-500">
              Synthesizing data into actionable frameworks and strategic
              roadmaps.
            </p>
</div>
<div className="relative pl-6 border-l-2 border-slate-100">
<span className="text-xs font-bold text-slate-300 mb-2 block">04</span>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Deliverables
            </h4>
<p className="text-sm text-slate-500">
              Clear decks, raw data access, and implementation support.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-16 md:py-24" id="cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">
          Featured Case Studies
        </h2>
<div className="grid grid-cols-1 gap-8">
<article className="group relative bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden opacity-0 scroll-fade">
<div className="flex flex-col md:flex-row min-h-[320px]">

<div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-between relative">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-100 group-hover:bg-teal-600 transition-colors duration-500"></div>
<div>
<div className="flex items-center gap-3 mb-6 pl-2">
<span className="text-[11px] font-bold tracking-[0.2em] text-teal-700 uppercase">
                      Fintech / UAE
                    </span>
</div>
<h3 className="text-3xl font-manrope font-bold text-slate-900 mb-8 pl-2 group-hover:text-teal-900 transition-colors leading-tight">
                    Neobank Market Entry
                  </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-2">
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        Challenge
                      </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                        Regulatory uncertainty and high user trust barriers
                        hindered the launch of a digital banking platform.
                      </p>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        Approach
                      </h4>
<ul className="space-y-2.5">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          Competitor Fee Audit
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          User Adoption Survey
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          Regulatory Mapping
                        </li>
</ul>
</div>
</div>
</div>
</div>

<div className="md:w-5/12 bg-slate-50/50 border-t md:border-t-0 md:border-l border-slate-100 p-8 md:p-12 flex flex-col justify-center relative group-hover:bg-slate-900 transition-colors duration-500">
<div className="relative z-10 space-y-10">
<div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-light text-teal-600 group-hover:text-teal-400 transition-colors">
                        $
                      </span>
<span className="counter text-5xl lg:text-6xl font-manrope font-bold text-slate-900 tracking-tighter group-hover:text-white transition-colors duration-500" data-target="15">
                        0
                      </span>
<span className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors">
                        M
                      </span>
</div>
<span className="text-xs font-bold text-teal-700 uppercase tracking-widest mt-2 block group-hover:text-teal-400 transition-colors">
                      Waitlist Signups
                    </span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="counter text-5xl lg:text-6xl font-manrope font-bold text-slate-900 tracking-tighter group-hover:text-white transition-colors duration-500" data-target="12">
                        0
                      </span>
<span className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors">
                        k+
                      </span>
</div>
<span className="text-xs font-bold text-teal-700 uppercase tracking-widest mt-2 block group-hover:text-teal-400 transition-colors">
                      Регистраций в лист ожидания
                    </span>
</div>
</div>
</div>
</div>
</article>
<article className="group relative bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden opacity-0 scroll-fade">
<div className="flex flex-col md:flex-row min-h-[320px]">
<div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-between relative">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-100 group-hover:bg-teal-600 transition-colors duration-500"></div>
<div>
<div className="flex items-center gap-3 mb-6 pl-2">
<span className="text-[11px] font-bold tracking-[0.2em] text-teal-700 uppercase">
                      Retail / USA
                    </span>
</div>
<h3 className="text-3xl font-manrope font-bold text-slate-900 mb-8 pl-2 group-hover:text-teal-900 transition-colors leading-tight">
                    Pricing Strategy Overhaul
                  </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-2">
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Challenge
                      </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                        Severe margin erosion in the luxury apparel sector due
                        to aggressive competitor discounting.
                      </p>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Approach
                      </h4>
<ul className="space-y-2.5">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          Price Elasticity Study
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          SKU Benchmarking
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          Dynamic Pricing Model
                        </li>
</ul>
</div>
</div>
</div>
</div>
<div className="md:w-5/12 bg-slate-50/50 border-t md:border-t-0 md:border-l border-slate-100 p-8 md:p-12 flex flex-col justify-center relative group-hover:bg-slate-900 transition-colors duration-500">
<div className="relative z-10 space-y-10">
<div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-teal-600 group-hover:text-teal-400 transition-colors">
                        +
                      </span>
<span className="counter text-5xl lg:text-6xl font-manrope font-bold text-slate-900 tracking-tighter group-hover:text-white transition-colors duration-500" data-target="22">
                        0
                      </span>
<span className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors">
                        %
                      </span>
</div>
<span className="text-xs font-bold text-teal-700 uppercase tracking-widest mt-2 block group-hover:text-teal-400 transition-colors">
                      Growth Targets Met
                    </span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-5xl lg:text-6xl font-manrope font-bold text-slate-900 tracking-tighter group-hover:text-white transition-colors duration-500">
                        Q3
                      </span>
</div>
<span className="text-xs font-bold text-teal-700 uppercase tracking-widest mt-2 block group-hover:text-teal-400 transition-colors">
                      Выполнение целей роста
                    </span>
</div>
</div>
</div>
</div>
</article>
<article className="group relative bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden opacity-0 scroll-fade">
<div className="flex flex-col md:flex-row min-h-[320px]">
<div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-between relative">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-100 group-hover:bg-teal-600 transition-colors duration-500"></div>
<div>
<div className="flex items-center gap-3 mb-6 pl-2">
<span className="text-[11px] font-bold tracking-[0.2em] text-teal-700 uppercase">
                      SaaS / Global
                    </span>
</div>
<h3 className="text-3xl font-manrope font-bold text-slate-900 mb-8 pl-2 group-hover:text-teal-900 transition-colors leading-tight">
                    PLG Transformation
                  </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-2">
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Challenge
                      </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                        High churn during enterprise sales cycles and stagnant
                        free-to-paid conversion.
                      </p>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Approach
                      </h4>
<ul className="space-y-2.5">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          User Journey Mapping
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          Feature Gating Logic
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0"></span>
                          UX Barrier Analysis
                        </li>
</ul>
</div>
</div>
</div>
</div>
<div className="md:w-5/12 bg-slate-50/50 border-t md:border-t-0 md:border-l border-slate-100 p-8 md:p-12 flex flex-col justify-center relative group-hover:bg-slate-900 transition-colors duration-500">
<div className="relative z-10 space-y-10">
<div>
<div className="flex items-baseline gap-1">
<span className="counter text-5xl lg:text-6xl font-manrope font-bold text-slate-900 tracking-tighter group-hover:text-white transition-colors duration-500" data-target="3.0">
                        0
                      </span>
<span className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors">
                        x
                      </span>
</div>
<span className="text-xs font-bold text-teal-700 uppercase tracking-widest mt-2 block group-hover:text-teal-400 transition-colors">
                      Churn Reduction
                    </span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-light text-teal-600 group-hover:text-teal-400 transition-colors">
                        -
                      </span>
<span className="counter text-5xl lg:text-6xl font-manrope font-bold text-slate-900 tracking-tighter group-hover:text-white transition-colors duration-500" data-target="15">
                        0
                      </span>
<span className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors">
                        %
                      </span>
</div>
<span className="text-xs font-bold text-teal-700 uppercase tracking-widest mt-2 block group-hover:text-teal-400 transition-colors">
                      Снижение оттока
                    </span>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div>
<h4 className="font-bold text-slate-900 mb-2">Results, Not Reports</h4>
<p className="text-sm text-slate-500">
              We prioritize practical logic over academic fluff. Business always
              comes first.
            </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-2">Tailored Frameworks</h4>
<p className="text-sm text-slate-500">
              No cookie-cutter strategies. Every market demands a unique lens.
            </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-2">
              Deep Market Intelligence
            </h4>
<p className="text-sm text-slate-500">
              Local nuances combined with global best practices.
            </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-2">Global Perspective</h4>
<p className="text-sm text-slate-500">
              Experience across EU, MENA, CIS, and North American markets.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:py-24 text-slate-900 bg-amber-50/60 pt-16 pb-16 relative" id="request">
<div className="max-w-2xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center">
          Tell us about your project
        </h2>
<p className="text-slate-500 mb-10 text-center">
          Send a brief request. We'll analyze the task and get back with a
          proposal.
        </p>
<form action="https://formspree.io/f/xblnyvra" className="space-y-6" method="POST">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                First Name
              </label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="first_name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name
              </label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="last_name" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">
              Work Email:
              <span className="text-slate-400 font-normal">(required)</span>
</label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="email" required="" type="email"/>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">
              How can we help?
              <span className="text-slate-400 font-normal">(required)</span>
</label>
<textarea className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all resize-none" name="message" required="" rows="5"></textarea>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">
              What is your research budget?
            </label>
<select className="custom-select w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3.5 text-sm text-slate-500 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all cursor-pointer pr-12" name="budget">
<option value="">Select an option</option>
<option value="under-10k">Under $10k</option>
<option value="10k-30k">$10k - $30k</option>
<option value="30k-50k">$30k - $50k</option>
<option value="50k-100k">$50k - $100k</option>
<option value="over-100k">Over $100k</option>
</select>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2">
              Best time to discuss?
            </label>
<input className="w-full bg-slate-100/80 border-0 rounded-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-600/20 focus:bg-white outline-none transition-all" name="preferred_dates" placeholder="e.g., next week, Mon-Wed afternoon" type="text"/>
</div>
<div className="pt-2">
<button className="w-full bg-slate-900 text-white py-4 text-base font-semibold tracking-tight hover:bg-slate-800 transition-colors rounded-sm" type="submit">
              Start Discussion
            </button>
</div>
</form>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="flex items-center gap-3 group justify-center md:justify-start md:mb-1 mb-4" href="#">
<div className="relative w-7 h-7 flex-none">
<div className="absolute bottom-0 left-0 w-5 h-5 bg-teal-500/90 rounded-sm"></div>
<div className="absolute top-0 right-0 w-5 h-5 bg-slate-900 rounded-sm shadow-sm flex items-center justify-center text-white z-10">
<div className="flex items-baseline gap-[1px]">
<span className="font-manrope font-bold text-sm leading-none">
                    R
                  </span>
<span className="font-manrope font-medium text-[8px] leading-none">
                    c
                  </span>
</div>
</div>
</div>
<div className="flex flex-col text-left">
<span className="brand-font leading-none text-base font-bold text-slate-900 tracking-tight">
                REGENTA
              </span>
<span className="font-inter text-[8px] font-semibold text-slate-500 tracking-[0.3em] lowercase leading-tight ml-0.5">
                consulting
              </span>
</div>
</a>
<p className="text-xs text-slate-500">
            © 2020 Regenta Consulting. All rights reserved.
          </p>
</div>
<div className="flex gap-8 text-xs text-slate-500 font-medium uppercase tracking-wider">

</div>
</div>
</footer>

<div className="fixed md:p-6 z-[60] transform transition-transform duration-500 bg-white/95 w-full border-slate-200 border-t pt-4 pr-4 pb-4 pl-4 bottom-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] backdrop-blur-md" id="cookie-banner">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-sm text-slate-500 text-center md:text-left max-w-3xl">
<p className="">
            We use cookies to improve your experience, personalize ads, and
            analyze traffic. By clicking "Accept", you agree to our use of
            cookies.
          </p>
</div>
<div className="flex gap-3 shrink-0">
<button className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 border border-slate-200 rounded-sm hover:border-slate-300 transition-all" id="cookie-decline">
            Decline
          </button>
<button className="uppercase hover:bg-slate-800 transition-all text-xs font-semibold text-white tracking-wider bg-slate-900 rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" id="cookie-accept">
            Accept
          </button>
</div>
</div>
</div>







    </>
  );
}
