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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
              navbar.classList.add('top-4');
              navbar.classList.remove('top-[32px]');
          } else {
              navbar.classList.add('top-[32px]');
              navbar.classList.remove('top-4');
          }
      });

      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setTimeout(() => {
                      entry.target.style.animationPlayState = 'running';
                      entry.target.classList.add('opacity-100');
                  }, 50);
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          el.style.animationPlayState = 'paused';
          observer.observe(el);
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
      

<div className="py-2 text-center text-xs font-medium tracking-wide bg-yellow-400 text-black">
      The proud part of
      <a className="font-semibold underline underline-offset-2 transition-colors decoration-black/30 hover:decoration-black" href="#">
        Unikorns. A world-class creative design agency.
      </a>
</div>

<nav className="fixed w-full z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
<div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-sm transform group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center bg-black">
<i className="w-4 h-4 text-white" data-lucide="slash" strokeWidth="3"></i>
</div>
<span className="text-lg font-semibold">Jupitor</span>
<span className="text-sm font-medium text-slate-500 ml-1">Agency</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full text-slate-600 hover:text-black" href="#">
              Case studies
            </a>
<a className="text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full text-slate-600 hover:text-black" href="#">
              How to start
            </a>
<a className="text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full text-slate-600 hover:text-black" href="#">
              Reviews
            </a>
<a className="text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full text-slate-600 hover:text-black" href="#">
              Benefits
            </a>
<a className="text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full text-slate-600 hover:text-black" href="#">
              Market comparison
            </a>
<a className="text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full text-slate-600 hover:text-black" href="#">
              FAQ
            </a>
</div>
<div className="">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 bg-black text-white" href="#">
              Contact
            </a>
<button className="md:hidden p-2 text-black">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<main className="hero-section relative overflow-hidden flex flex-col justify-center pt-24 pb-20 bg-cover w-full min-h-screen">

<div className="bg-center z-0 w-full h-full bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://res.cloudinary.com/jeff1/image/upload/v1773116164/rohit-choudhari-_E6sXQHsgQc-unsplash_ezj4sk.jpg\')'}}></div>

<div className="bg-gradient-to-t from-[var(--bg-color)] to-transparent h-48 z-[1] absolute right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 backdrop-blur-[1px] z-[1] pointer-events-none bg-white/20"></div>
<div className="flex flex-col sm:px-6 md:mt-16 lg:px-8 lg:mt-0 text-center w-full max-w-5xl z-10 mt-0 mr-auto ml-auto pr-4 pl-4 relative items-center">

<div className="animate-float inline-flex items-center gap-3 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] border mb-8 bg-white/90 border-white">
<span className="font-semibold text-sm tracking-tight">Clutch</span>
<div className="flex items-center text-red-500 gap-0.5">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-semibold">5.0</span>
</div>

<h1 className="reveal delay-100 sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-5xl font-medium tracking-tighter font-space-grotesk max-w-5xl mr-auto ml-auto relative text-black" style={{animationPlayState: 'paused'}}>
          Creative for brands
          <br className="hidden md:block"/>
<span className="relative inline-block">
<span className="relative z-10 italic font-light pr-2 text-slate-700">
              without
            </span>
<div className="absolute bottom-2 left-0 w-full h-3 -z-10 -rotate-1 rounded-sm bg-yellow-300/60"></div>
</span>
          in-house capacity

          
<div className="absolute -left-12 top-0 hidden lg:flex animate-float" style={{animationDelay: '1s'}}>
<div className="glass-card p-3 rounded-2xl rotate-[-12deg] shadow-lg">
<i className="w-6 h-6 text-indigo-500" data-lucide="pen-tool"></i>
</div>
</div>
<div className="absolute -right-8 bottom-0 hidden lg:flex animate-float" style={{animationDelay: '2s'}}>
<div className="glass-card p-3 rounded-2xl rotate-[12deg] shadow-lg">
<i className="w-6 h-6 text-yellow-500" data-lucide="sparkles"></i>
</div>
</div>
</h1>
<p className="reveal delay-200 mt-8 text-lg sm:text-xl max-w-2xl mx-auto font-medium text-slate-700" style={{animationPlayState: 'paused'}}>
          Scale your creative capacity: flexible, high-quality, and
          cost-effective.
        </p>

<div className="reveal delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto" style={{animationPlayState: 'paused'}}>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 group bg-black text-white hover:shadow-black/10" href="#">
            See how it works
            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 backdrop-blur-md border rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 bg-white/80 text-black border-slate-200 hover:bg-white" href="#">
            Book a call
          </a>
</div>
</div>
</main>

<section className="py-12 backdrop-blur-xl border-y relative z-20 bg-white/50 border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-semibold uppercase-label mb-8 text-slate-400">
          Trusted By
        </p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="box"></i>
<span className="font-semibold text-xl tracking-tight text-blue-500">
              Blue
            </span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="check-circle"></i>
<span className="font-semibold text-xl tracking-tight">testportal</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="font-semibold text-xl tracking-tight">Shopbox AI</span>
</div>
<div className="flex items-center gap-2">
<span className="font-bold text-2xl tracking-tighter italic">Lna</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="tent"></i>
<span className="font-semibold text-xl tracking-tight">AlohaCamp</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="puzzle"></i>
<span className="font-semibold text-xl tracking-tight">Puzzle</span>
</div>
<div className="flex items-center gap-2">
<span className="font-semibold text-xl tracking-tight">Chroma</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 z-20 relative bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
<div className="lg:col-span-8 reveal" style={{animationPlayState: 'paused'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
<span className="text-xs font-medium tracking-wide uppercase text-slate-700">Client Profiles</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 max-w-3xl mb-16 leading-[1.1]">
      Seamless integration where design bottlenecks occur.
    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
<div className="border-t border-slate-200 pt-6">
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Marketing Teams</h3>
<p className="text-sm leading-relaxed text-slate-600">
          Accelerate campaign and landing page launches. We manage all visual assets so your team can focus entirely on strategy and revenue growth.
        </p>
</div>
<div className="border-t border-slate-200 pt-6">
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Product Design</h3>
<p className="text-sm leading-relaxed text-slate-600">
          Keep your core team focused on essential product features. We offload marketing and support design tasks to maximize their bandwidth.
        </p>
</div>
<div className="border-t border-slate-200 pt-6">
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Founders &amp; Leadership</h3>
<p className="text-sm leading-relaxed text-slate-600">
          Secure enterprise-grade design without the overhead of hiring. Partner with a reliable extension of your internal team that delivers daily.
        </p>
</div>
</div>
</div>
<div className="lg:col-span-4 reveal delay-200" style={{animationPlayState: 'paused'}}>
<div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-transparent pointer-events-none"></div>
<div className="relative z-10 w-full flex flex-col items-center">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Clutch Rating</h3>
<div className="flex items-center text-amber-400 gap-1.5 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-500 text-sm mb-8">Recognized as a top B2B partner for design excellence.</p>
<a className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors mb-6" href="#">
          View verified reviews
        </a>
<div className="flex items-center gap-3 text-sm font-medium text-slate-600">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-slate-100 text-slate-900 border border-slate-200">
            C
          </div>
          Based on 18 reviews
        </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-x-16 gap-y-16 items-center">
<div className="space-y-6 reveal" style={{animationPlayState: 'paused'}}>

<div className="rounded-3xl p-8 relative overflow-hidden group bg-slate-50 border border-slate-200 shadow-sm">
<div className="absolute inset-0 bg-gradient-to-br opacity-50 from-white to-slate-50"></div>
<div className="relative z-10 flex flex-col h-full">
<div>
<h3 className="text-3xl font-medium tracking-tight mb-4 text-slate-900">
            Upgrade your accounting from manual to modern
          </h3>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 mb-8 bg-white border border-slate-200 shadow-sm">
<svg className="lucide lucide-calculator w-4 h-4 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
            puzzle.io
          </div>
</div>
<div className="relative h-64 w-full mt-auto">

<div className="absolute inset-x-0 bottom-0 h-56 rounded-t-xl shadow-[0_-4px_24px_rgba(0,0,0,0.02)] border-t border-x border-slate-200 bg-white p-6 transform group-hover:translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Net Income</p>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight">$124,500.00</h4>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
<svg className="lucide lucide-trending-up w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                +14.5%
              </div>
</div>

<div className="flex items-end justify-between gap-3 h-24 mt-4 px-2">
<div className="w-full bg-slate-100 rounded-t-md h-[40%] relative group-hover:bg-indigo-50 transition-colors"><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-[10px] text-slate-500 transition-opacity">Jan</div></div>
<div className="w-full bg-slate-100 rounded-t-md h-[60%] relative group-hover:bg-indigo-50 transition-colors"><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-[10px] text-slate-500 transition-opacity">Feb</div></div>
<div className="w-full bg-slate-100 rounded-t-md h-[45%] relative group-hover:bg-indigo-50 transition-colors"><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-[10px] text-slate-500 transition-opacity">Mar</div></div>
<div className="w-full bg-slate-100 rounded-t-md h-[80%] relative group-hover:bg-indigo-50 transition-colors"><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-[10px] text-slate-500 transition-opacity">Apr</div></div>
<div className="w-full bg-indigo-500 rounded-t-md h-[100%] relative shadow-sm"><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] font-medium text-indigo-600">May</div></div>
<div className="w-full bg-slate-100 rounded-t-md h-[75%] relative group-hover:bg-indigo-50 transition-colors"><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-[10px] text-slate-500 transition-opacity">Jun</div></div>
</div>
</div>

<div className="absolute top-2 right-4 w-52 rounded-xl shadow-xl border border-slate-200 bg-white p-4 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
<svg className="lucide lucide-zap w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div>
<p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-0.5">Auto-categorized</p>
<p className="text-sm font-semibold text-slate-900 leading-none">42 Transactions</p>
</div>
</div>
<div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5 font-medium">
<span>Progress</span>
<span className="text-indigo-600">85%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full w-[85%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="rounded-3xl overflow-hidden relative group border border-slate-200 shadow-sm">
<img alt="Professional workspace" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dae3a26-37c5-47e4-8c42-e88840f488e9_800w.webp"/>
<div className="group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
            Live Dashboard
          </div>
</div>
</div>
<div className="rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group bg-slate-900 text-white shadow-sm border border-slate-800">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-clock w-5 h-5 text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h4 className="text-2xl font-medium tracking-tight mb-2 text-white">
            Your time, back.
          </h4>
<p className="text-sm text-slate-400 leading-relaxed font-medium">
            Save hours weekly with automated reconciliation.
          </p>
</div>
<div className="relative z-10 mt-8">
<div className="flex items-end gap-1.5 mb-3">
<span className="text-5xl font-medium tracking-tighter leading-none">15</span>
<span className="text-sm text-slate-400 pb-1 font-medium">hrs / week</span>
</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-0 bg-indigo-500 w-[75%] rounded-full group-hover:w-[100%] transition-all duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
<div className="reveal" style={{animationPlayState: 'paused'}}>
<p className="text-xs font-semibold uppercase-label text-indigo-600 mb-6 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="puzzle"></i>
      PUZZLE
    </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-12 text-slate-900">
      Our aim was to provide a clear view of how the refresh fits in
      with the existing brand platform.
    </h2>
<div className="rounded-3xl p-8 md:p-10 shadow-sm border bg-white border-slate-200">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium bg-slate-900 text-white shadow-sm">
          C
        </div>
<div>
<div className="flex items-center text-amber-400 gap-0.5 mb-1">
<svg className="lucide lucide-star w-4 h-4 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-semibold ml-2 text-slate-900">5.0</span>
</div>
<p className="text-sm font-medium text-slate-500">Verified Review</p>
</div>
</div>
<p className="text-xl leading-relaxed mb-8 text-slate-800 font-medium tracking-tight">
        "After working with them, our website, marketing materials, and
        brand have improved significantly. Their attention to detail is unmatched."
      </p>
<div className="">
<p className="font-semibold text-slate-900">Denny Hollick</p>
<p className="text-slate-500 text-sm mt-0.5">Business Analyst at Chroma</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<p className="text-xs font-semibold uppercase-label text-slate-500 mb-4 reveal" style={{animationPlayState: 'paused'}}>
          How to start
        </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-16 reveal delay-100" style={{animationPlayState: 'paused'}}>
          Clear, fast, and simple
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="bg-[var(--bg-color)] rounded-3xl p-8 text-center group transition-colors duration-300 reveal delay-100 border h-full flex flex-col hover:bg-slate-50 border-slate-100" style={{animationPlayState: 'paused'}}>
<div className="h-48 flex items-center justify-center mb-6">
<div className="rounded-2xl shadow-sm border p-4 w-full max-w-[220px] group-hover:-translate-y-2 transition-transform duration-500 bg-white border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
<img alt="Manager" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-slate-900 leading-tight">Alex Johnson</p>
<p className="text-[10px] text-slate-500">Design Director</p>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-left">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-slate-700">Intro Call</span>
<span className="text-[10px] text-slate-500 font-medium">30 min</span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs bg-white border-slate-200 font-medium text-slate-700 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
                    Join Meeting
                  </div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-2">Meet on intro call</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Schedule a quick call to discuss your goals and choose the best
              setup for your business.
            </p>
</div>
<div className="bg-[var(--bg-color)] rounded-3xl p-8 text-center group transition-colors duration-300 reveal delay-200 border hover:bg-slate-50 border-slate-100" style={{animationPlayState: 'paused'}}>
<div className="h-48 flex items-center justify-center mb-6">
<div className="w-full max-w-[220px] rounded-2xl shadow-sm border p-4 bg-white border-slate-200 group-hover:-translate-y-2 transition-transform duration-500 text-left">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center border border-slate-200">
<svg className="w-3 h-3 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<span className="text-xs font-semibold text-slate-900">New Request</span>
</div>
<div className="space-y-2.5">
<div className="h-8 rounded-lg border border-slate-200 bg-slate-50 flex items-center px-2.5">
<span className="text-[10px] text-slate-400">Project title...</span>
</div>
<div className="h-12 rounded-lg border border-slate-200 bg-slate-50 flex items-start px-2.5 py-2">
<span className="text-[10px] text-slate-400">Describe what you need...</span>
</div>
<div className="h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[11px] font-medium mt-1 cursor-pointer shadow-sm hover:bg-slate-800 transition-colors">
                    Submit Request
                  </div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-2">Fill your brief</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Submit your first task using our simple template and our team will
              start working right away.
            </p>
</div>
<div className="bg-[var(--bg-color)] rounded-3xl p-8 text-center group transition-colors duration-300 reveal delay-300 border hover:bg-slate-50 border-slate-100" style={{animationPlayState: 'paused'}}>
<div className="h-48 flex items-center justify-center mb-6">
<div className="w-full max-w-[220px] rounded-2xl shadow-sm border p-4 bg-white border-slate-200 group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between mb-4 text-left">
<span className="text-xs font-semibold text-slate-900">Your Team</span>
<span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                  </span>
</div>
<div className="space-y-2.5 text-left">
<div className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-100 bg-slate-50">
<div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0">
<img alt="Designer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-xs font-semibold text-slate-900 leading-none mb-0.5">Sarah Lee</p>
<p className="text-[9px] text-slate-500">Lead Designer</p>
</div>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-100 bg-slate-50">
<div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0">
<img alt="Project Manager" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-xs font-semibold text-slate-900 leading-none mb-0.5">Mike Torres</p>
<p className="text-[9px] text-slate-500">Project Manager</p>
</div>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-2">Get a dedicated team</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              We assign professional designers who understand your brand and
              become part of your team immediately.
            </p>
</div>
<div className="bg-[var(--bg-color)] rounded-3xl p-8 text-center group transition-colors duration-300 reveal delay-300 border hover:bg-slate-50 border-slate-100" style={{animationPlayState: 'paused'}}>
<div className="h-48 flex items-center justify-center mb-6">
<div className="w-full max-w-[220px] rounded-2xl shadow-sm border p-4 bg-white border-slate-200 group-hover:-translate-y-2 transition-transform duration-500 text-left">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-slate-900">Deliverables</span>
<div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
<svg className="w-3 h-3 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
</div>
<div className="relative rounded-xl overflow-hidden border border-slate-200 mb-3 group/img cursor-pointer">
<img alt="Design preview" className="w-full h-16 object-cover" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
<span className="bg-white text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">Preview</span>
</div>
</div>
<div className="flex items-center justify-between mt-4">
<div>
<p className="text-[10px] font-semibold text-slate-900 mb-0.5">Landing_page.fig</p>
<p className="text-[9px] text-slate-500">Updated 2h ago</p>
</div>
<div className="px-2.5 py-1.5 rounded-lg border bg-emerald-500 border-emerald-600 text-white text-[10px] font-semibold cursor-pointer hover:bg-emerald-600 transition-colors shadow-sm">
                    Approve
                  </div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-2">Get the first results</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Receive high quality designs and launch your project without any
              delays or stress.
            </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 reveal" style={{animationPlayState: 'paused'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-black" data-lucide="check"></i>
<div className="text-left">
<p className="font-semibold text-sm">Total transparency</p>
<p className="text-xs text-slate-500 mt-0.5">
                You always know what you pay for with clear pricing.
              </p>
</div>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-black" data-lucide="check"></i>
<div className="text-left">
<p className="font-semibold text-sm">No micro-management</p>
<p className="text-xs text-slate-500 mt-0.5">
                We provide a project manager who handles all operations.
              </p>
</div>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-black" data-lucide="check"></i>
<div className="text-left">
<p className="font-semibold text-sm">Long-run partnership</p>
<p className="text-xs text-slate-500 mt-0.5">
                We grow with your business and provide steady design support.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative border-t bg-white border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center reveal" style={{animationPlayState: 'paused'}}>
<p className="text-xs font-semibold uppercase-label text-slate-500 mb-4">
          Clients' Reviews
        </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter">
          What our clients say
        </h2>
</div>
<div className="sm:pl-6 lg:pl-8 flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar reveal delay-100 max-w-[1600px] mr-auto ml-auto pb-12 pl-4 gap-x-6 gap-y-6" style={{animationPlayState: 'paused'}}>
<div className="snap-start shrink-0 w-[300px] md:w-[380px]">
<div className="clutch-gradient rounded-3xl p-10 h-full flex flex-col justify-center items-center text-center shadow-lg border border-white/50">
<h3 className="text-3xl font-semibold tracking-tight mb-4">Clutch</h3>
<div className="flex items-center text-red-500 gap-1 mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<a className="px-8 py-3.5 rounded-full text-sm font-medium transition-colors mb-6 w-full bg-black text-white hover:bg-slate-800" href="#">
              Check us
            </a>
<div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-800">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-black text-white">
                C
              </div>
              18 reviews
            </div>
</div>
</div>
<div className="snap-start shrink-0 w-[300px] md:w-[380px]">
<div className="bg-[var(--bg-color)] rounded-3xl p-8 h-full flex flex-col border transition-transform hover:-translate-y-1 duration-300 border-slate-100">
<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-900 text-white">
                C
              </div>
<div className="flex items-center text-red-500 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-semibold ml-1">5.0</span>
</div>
<p className="text-xl font-medium tracking-tight leading-tight flex-grow mb-8">
              "They consistently work with clarity and trust in mind."
            </p>
<div className="">
<p className="text-sm font-semibold">Alexander A.</p>
<p className="text-xs text-slate-500">
                Senior Product Manager, Consumer Electronics
              </p>
</div>
</div>
</div>
<div className="snap-start shrink-0 w-[300px] md:w-[380px]">
<div className="bg-[var(--bg-color)] rounded-3xl p-8 h-full flex flex-col border transition-transform hover:-translate-y-1 duration-300 border-slate-100">
<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-900 text-white">
                C
              </div>
<div className="flex items-center text-red-500 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-semibold ml-1">5.0</span>
</div>
<p className="text-xl font-medium tracking-tight leading-tight flex-grow mb-8">
              "After working with them, our website, marketing materials, and
              brand have improved significantly."
            </p>
<div className="">
<p className="text-sm font-semibold">Denny Hollick</p>
<p className="text-xs text-slate-500">Head of Product Marketing</p>
</div>
</div>
</div>
<div className="sticky right-0 w-24 bg-gradient-to-l to-transparent h-full z-10 from-white"></div>
</div>
<div className="flex justify-center gap-4 mt-4 reveal delay-200" style={{animationPlayState: 'paused'}}>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-slate-200 hover:bg-slate-50">
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-slate-200 hover:bg-slate-50">
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="py-24 md:py-32 bg-[var(--bg-color)]">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 reveal" style={{animationPlayState: 'paused'}}>
<p className="text-xs font-semibold uppercase-label text-slate-500 mb-4">
            Why brands choose us
          </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter max-w-2xl mx-auto leading-tight">
            Stop struggling with design and start growing your brand
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
<div className="md:col-span-1 rounded-3xl p-8 md:p-10 shadow-sm border flex flex-col justify-end min-h-[300px] reveal delay-100 bg-white border-slate-200" style={{animationPlayState: 'paused'}}>
<div className="mb-auto">
<div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-globe w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-slate-900">
      European talents
    </h3>
<p className="text-sm text-slate-500 leading-relaxed">
      We hire only the best designers from EU. Our very strict selection
      process ensures that only a few top candidates join our
      professional team.
    </p>
</div>
<div className="md:col-span-2 rounded-3xl overflow-hidden shadow-sm border relative min-h-[350px] flex items-center justify-center reveal delay-200 bg-slate-50 border-slate-200" style={{animationPlayState: 'paused'}}>
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
<div className="relative z-10 w-full max-w-md flex flex-col gap-3 p-6">
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm w-full">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-filter w-3 h-3 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
</div>
<span className="text-xs font-semibold text-slate-900 tracking-tight">Selection Funnel</span>
</div>
<span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md text-[10px] font-semibold tracking-wide uppercase">Top 1%</span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-slate-500">Total Applicants</span><span className="text-slate-900">~10,000</span></div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="w-full h-full bg-slate-200 rounded-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-slate-500">Portfolio Review</span><span className="text-slate-900">800</span></div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="w-[8%] h-full bg-slate-400 rounded-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-slate-500">Test Project</span><span className="text-slate-900">120</span></div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="w-[2%] h-full bg-indigo-400 rounded-full"></div></div>
</div>
<div className="">
<div className="flex justify-between text-xs mb-1.5 font-medium"><span className="text-slate-500">Hired Experts</span><span className="text-emerald-600">12</span></div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex"><div className="w-[1%] h-full bg-emerald-500 rounded-full relative"><div className="absolute inset-0 bg-white/30 animate-[pulse_2s_ease-in-out_infinite]"></div></div></div>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-1 rounded-3xl p-8 md:p-10 shadow-sm border relative min-h-[350px] flex flex-col justify-end reveal delay-100 bg-slate-50 border-slate-200 overflow-hidden" style={{animationPlayState: 'paused'}}>
<div className="absolute top-8 left-8 right-8">
<div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
<div className="flex items-center justify-between mb-5">
<div className="text-xs font-semibold text-slate-900 tracking-tight">Design Team</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-md text-[10px] font-medium tracking-wide uppercase">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></div> Ready
          </div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="text-right">
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide mb-0.5">Availability</div>
<div className="text-sm font-semibold text-slate-900">Immediate</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-24">
<h3 className="text-2xl font-medium tracking-tight mb-4 text-slate-900">
        No hiring dead end
      </h3>
<p className="text-sm text-slate-500 leading-relaxed">
        Stop wasting months on searching for the right designer. You can
        start your project immediately with our ready team and avoid any
        delays.
      </p>
</div>
</div>
<div className="md:col-span-1 rounded-3xl p-8 md:p-10 shadow-sm border relative min-h-[350px] flex flex-col justify-end reveal delay-200 bg-slate-50 border-slate-200 overflow-hidden" style={{animationPlayState: 'paused'}}>
<div className="absolute top-8 left-8 right-8">
<div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
<div className="flex justify-between items-center mb-6">
<div className="text-xs font-semibold text-slate-900 tracking-tight">Team Allocation</div>
<div className="text-[10px] font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-md uppercase tracking-wide">Full-time</div>
</div>
<div className="relative w-full h-8 flex items-center mb-2">
<div className="absolute w-full h-1 bg-slate-100 rounded-full"></div>
<div className="absolute w-[80%] h-1 bg-indigo-500 rounded-full"></div>
<div className="absolute left-0 w-1 h-2.5 bg-slate-300 rounded-full -translate-y-1/2 top-1/2"></div>
<div className="absolute left-1/2 w-1 h-2.5 bg-indigo-300 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
<div className="absolute left-[80%] w-5 h-5 bg-white border-[3.5px] border-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400 font-medium">
<span>Pause</span>
<span className="text-indigo-600">Scale up</span>
</div>
</div>
</div>
<div className="relative z-10 mt-24">
<h3 className="text-2xl font-medium tracking-tight mb-4 text-slate-900">
        Scale as you need
      </h3>
<p className="text-sm text-slate-500 leading-relaxed">
        Your business needs can change quickly. We allow you to adjust
        your team allocation and design resources whenever your project
        requires more or less power.
      </p>
</div>
</div>
<div className="md:col-span-1 rounded-3xl overflow-hidden shadow-sm relative min-h-[350px] flex flex-col justify-end group reveal delay-300 bg-slate-900 border border-slate-800" style={{animationPlayState: 'paused'}}>
<img alt="UI Design Result" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/401b4624-b14d-4d11-830c-883f0ac95277/800w.jpg"/>
<div className="bg-gradient-to-t to-transparent from-slate-900 via-slate-900/60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 right-6 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center gap-3 shadow-2xl">
<div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="pr-2">
<div className="text-white text-[11px] font-semibold tracking-tight">Pixel Perfect</div>
<div className="text-slate-300 text-[9px] font-medium uppercase tracking-wide">Ready for dev</div>
</div>
</div>
</div>
<div className="relative z-10 p-8 md:p-10 text-white mt-24">
<h3 className="text-2xl font-medium tracking-tight mb-3">
        Top-notch result
      </h3>
<p className="text-sm leading-relaxed text-slate-300">
        We deliver professional designs based on 10 years of experience.
        The Unikorns name guarantees a premium result that helps your
        brand stand out.
      </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white border-slate-100">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal" style={{animationPlayState: 'paused'}}>
<p className="text-xs font-semibold uppercase-label text-slate-500 mb-4">
            Market comparison
          </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter max-w-2xl mx-auto leading-tight">
            See how Unikorns Work
            <br/>
            fits your business needs
          </h2>
</div>
<div className="overflow-x-auto reveal delay-100" style={{animationPlayState: 'paused'}}>
<table className="w-full text-left min-w-[800px]">
<thead className="">
<tr className="border-b border-slate-200">
<th className="py-4 px-4 font-medium text-sm w-1/3 text-slate-400"></th>
<th className="py-4 px-4 font-medium text-xs uppercase-label text-center text-slate-600">
                  Flexibility
                </th>
<th className="py-4 px-4 font-medium text-xs uppercase-label text-center text-slate-600">
                  Scalability
                </th>
<th className="py-4 px-4 font-medium text-xs uppercase-label text-center text-slate-600">
                  Cost-effectiveness
                </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="transition-colors group bg-slate-50/50 hover:bg-slate-50">
<td className="py-6 px-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-black">
<i className="w-2.5 h-2.5 text-white" data-lucide="slash" strokeWidth="3"></i>
</div>
<span className="font-semibold">Unikorns Work</span>
</div>
<p className="text-xs text-slate-500">
                    We provide a dedicated team with quality and flexible
                    pricing for your daily tasks.
                  </p>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
</tr>
<tr className="transition-colors group hover:bg-slate-50">
<td className="py-6 px-4">
<p className="font-semibold mb-2">In-house team</p>
<p className="text-xs text-slate-500">
                    Hiring a full team is very expensive and slow because of
                    recruitment and management costs.
                  </p>
</td>
<td className="py-6 px-4 text-center">
<i className="w-4 h-4 mx-auto text-slate-300" data-lucide="x"></i>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
<td className="py-6 px-4 text-center">
<i className="w-4 h-4 mx-auto text-slate-300" data-lucide="x"></i>
</td>
</tr>
<tr className="transition-colors group hover:bg-slate-50">
<td className="py-6 px-4">
<p className="font-semibold mb-2">Agencies</p>
<p className="text-xs text-slate-500">
                    Traditional agencies focus on big creative projects and
                    often treat daily support tasks.
                  </p>
</td>
<td className="py-6 px-4 text-center">
<i className="w-4 h-4 mx-auto text-slate-300" data-lucide="x"></i>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
<td className="py-6 px-4 text-center">
<i className="w-4 h-4 mx-auto text-slate-300" data-lucide="x"></i>
</td>
</tr>
<tr className="transition-colors group hover:bg-slate-50">
<td className="py-6 px-4">
<p className="font-semibold mb-2">Freelancers</p>
<p className="text-xs text-slate-500">
                    Individual freelancers are hard to manage and often lack
                    consistency or fail to meet.
                  </p>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
<td className="py-6 px-4 text-center">
<i className="w-4 h-4 mx-auto text-slate-300" data-lucide="x"></i>
</td>
<td className="py-6 px-4 text-center">
<div className="inline-flex w-6 h-6 rounded-full items-center justify-center bg-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-color)]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 sticky lg:top-32 h-fit reveal" style={{animationPlayState: 'paused'}}>
<p className="text-xs font-semibold uppercase-label text-slate-500 mb-4">
              Common Questions
            </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight mb-12 max-w-sm">
              Everything you need to know about our service
            </h2>
<div className="rounded-3xl p-8 max-w-sm w-full border flex flex-col items-center text-center group hover:shadow-md transition-shadow bg-white border-slate-100">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Clutch</h3>
<div className="flex items-center text-red-500 gap-1 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<a className="px-8 py-3 rounded-full text-sm font-medium transition-colors mb-4 w-full bg-black text-white hover:bg-slate-800" href="#">
                Check us
              </a>
<div className="flex items-center gap-2 text-sm font-medium text-slate-800">
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold bg-black text-white">
                  C
                </div>
                18 reviews
              </div>
</div>
</div>
<div className="lg:col-span-7 space-y-2 reveal delay-100" style={{animationPlayState: 'paused'}}>
<div className="border-b py-6 group cursor-pointer border-slate-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium pr-8">
                  How does the pricing work?
                </h4>
<i className="w-5 h-5 group-hover:text-black transition-colors shrink-0 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="border-b py-6 group cursor-pointer border-slate-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium pr-8">
                  Can I start if I don't have a brand identity yet?
                </h4>
<i className="w-5 h-5 group-hover:text-black transition-colors shrink-0 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="border-b py-6 group cursor-pointer border-slate-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium pr-8">
                  What if my brand was created by another agency?
                </h4>
<i className="w-5 h-5 group-hover:text-black transition-colors shrink-0 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="border-b py-6 group cursor-pointer border-slate-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium pr-8">
                  Who will manage the design process?
                </h4>
<i className="w-5 h-5 group-hover:text-black transition-colors shrink-0 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="border-b py-6 group cursor-pointer border-slate-200">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium pr-8">
                  Can I change my team capacity later?
                </h4>
<i className="w-5 h-5 group-hover:text-black transition-colors shrink-0 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="py-6 group cursor-pointer">
<div className="flex justify-between items-center">
<h4 className="text-lg font-medium pr-8">
                  How do we stay in touch during the process?
                </h4>
<i className="w-5 h-5 group-hover:text-black transition-colors shrink-0 text-slate-400" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Field background" className="w-full h-full object-cover filter blur-[2px] opacity-90 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bacc4a0-99e3-4167-8620-7d28e052331b_3840w.webp"/>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6">
<div className="backdrop-blur-xl rounded-[2rem] p-10 md:p-16 max-w-xl border text-center reveal bg-white/95 border-white/50" style={{animationPlayState: 'paused'}}>
<h2 className="text-4xl font-medium tracking-tighter mb-4">
            Lets collaborate together
          </h2>
<p className="text-sm text-slate-500 mb-8">
            Scale your creative capacity:
            <br/>
            flexible, high-quality, and cost-effective.
          </p>
<form className="space-y-4">
<input className="w-full border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all placeholder:text-slate-400 bg-slate-50 border-slate-100" placeholder="Your name*" required="" type="text"/>
<input className="w-full border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all placeholder:text-slate-400 bg-slate-50 border-slate-100" placeholder="Your company name*" required="" type="text"/>
<input className="w-full border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all placeholder:text-slate-400 bg-slate-50 border-slate-100" placeholder="Your business email*" required="" type="email"/>
<textarea className="w-full border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all resize-none placeholder:text-slate-400 bg-slate-50 border-slate-100" placeholder="Share project details*" required="" rows="4"></textarea>
<div className="pt-4">
<button className="px-10 py-4 rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 w-full sm:w-auto bg-black text-white" type="submit">
                Send Request
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="pt-20 pb-10 relative z-10 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded-sm flex items-center justify-center bg-black">
<i className="w-3 h-3 text-white" data-lucide="slash" strokeWidth="3"></i>
</div>
<span className="font-semibold text-lg tracking-tight">Unikorns</span>
<span className="text-slate-500 font-medium text-sm">Work</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
              Creative department for brands without in-house capacity
            </p>
<a className="text-sm font-medium transition-colors hover:text-slate-600" href="mailto:hello@unikorns.work">
              hello@unikorns.work
            </a>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-6 rounded-sm flex items-center justify-center relative overflow-hidden bg-blue-800">
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-3 h-3 text-yellow-400" data-lucide="circle-dashed" strokeWidth="2"></i>
</div>
</div>
<div className="text-xs text-slate-500 leading-tight">
                European Union
                <br/>
                Warsaw, Poland
              </div>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-6">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="transition-colors hover:text-black" href="#">
                  Social media
                </a>
</li>
<li className="">
<a className="transition-colors hover:text-black" href="#">
                  Pitch deck design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Corporate website design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Landing page design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Product illustration design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Motion design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  UI/UX design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Advertising design
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Framer website development
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Webflow website development
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-6">Industries</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="">
<a className="transition-colors hover:text-black" href="#">
                  E-commerce
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Real estate
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Proptech
                </a>
</li>
<li className="">
<a className="transition-colors hover:text-black" href="#">
                  Fintech
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">SaaS</a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Hospitality
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Edtech
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-6">Navigation</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="">
<a className="transition-colors hover:text-black" href="#">
                  Case Studies
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  How to start
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Reviews
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Benefits
                </a>
</li>
<li className="">
<a className="transition-colors hover:text-black" href="#">
                  Comparison
                </a>
</li>
<li className="">
<a className="transition-colors hover:text-black" href="#">FAQ</a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-6">Meet us</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="transition-colors hover:text-black" href="#">
                  Agency
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Clutch
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Behance
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Framer
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Webflow
                </a>
</li>
<li>
<a className="transition-colors hover:text-black" href="#">
                  Instagram
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-slate-100 text-slate-400">
<p>
            Unikorns® All rights reserved •
            <a className="transition-colors hover:text-black" href="#">
              Privacy Policy
            </a>
</p>
<p>© 2024</p>
</div>
</div>
</footer>


    </>
  );
}
