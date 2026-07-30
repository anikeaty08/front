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

  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  mobileNavToggle?.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
  });

  mobileNavClose?.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });

  // Close mobile nav when clicking outside
  mobileNav?.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      mobileNav.classList.add('hidden');
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center z-[-1]" style={{backgroundImage: `url("https://images.unsplash.com/photo-1635776063328-153b13e3c245?w=3840&q=80")`}}></div>
<header className="py-6 lg:py-8 animate-fade-in">
<nav className="flex max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a className="flex items-center space-x-3 group" href="#">
<div className="h-9 w-9 flex group-hover:scale-105 transition-transform duration-200 bg-gradient-to-t from-indigo-200 via-red-200 to-yellow-100 rounded-xl items-center justify-center" style={{}}>
<svg className="lucide lucide-trending-up h-5 w-5 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight font-sans text-gray-100" style={{}}>FinanceFlow</span>
</a>
<div className="hidden gap-8 text-sm font-medium lg:flex text-gray-100" style={{}}>
<a className="transition-colors hover:underline underline-offset-4 font-sans hover:text-gray-100" href="#" style={{}}>Solutions</a>
<a className="transition-colors hover:underline underline-offset-4 font-sans hover:text-gray-100" href="#" style={{}}>Analytics</a>
<a className="transition-colors hover:underline underline-offset-4 font-sans hover:text-gray-100" href="#" style={{}}>Pricing</a>
<a className="transition-colors hover:underline underline-offset-4 font-sans hover:text-gray-100" href="#" style={{}}>Resources</a>
<a className="transition-colors hover:underline underline-offset-4 font-sans hover:text-gray-100" href="#" style={{}}>Company</a>
</div>
<div className="hidden lg:flex items-center space-x-3">
<button className="px-4 py-2 text-sm font-medium transition-colors font-sans hover:text-gray-100 text-gray-100" style={{}}>Sign In</button>
<button className="px-5 py-2.5 text-sm font-medium rounded-lg transition-colors shadow-sm text-black font-sans bg-gray-100 hover:bg-gray-200" style={{}}>
          Start Free Trial
        </button>
</div>
<button aria-label="Open Menu" className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-900" id="mobileNavToggle" style={{}}>
<svg className="lucide lucide-menu h-5 w-5 text-gray-100" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
<div className="fixed inset-0 z-50 hidden backdrop-blur-md lg:hidden bg-black/95" id="mobileNav">
<div className="flex items-center justify-between p-4 border-b border-gray-800" style={{}}>
<a className="flex items-center space-x-3" href="#">
<div className="h-9 w-9 rounded-xl flex items-center justify-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500" style={{}}>
<svg className="lucide lucide-trending-up h-5 w-5 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xl font-semibold font-sans text-gray-100" style={{}}>FinanceFlow</span>
</a>
<button aria-label="Close Menu" className="p-2 rounded-lg transition-colors hover:bg-gray-900" id="mobileNavClose" style={{}}>
<svg className="lucide lucide-x h-5 w-5 text-gray-100" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-4 space-y-4">
<a className="block py-3 text-lg font-medium transition-colors font-sans hover:text-gray-100 text-gray-100" href="#" style={{}}>Solutions</a>
<a className="block py-3 text-lg font-medium transition-colors font-sans hover:text-gray-100 text-gray-100" href="#" style={{}}>Analytics</a>
<a className="block py-3 text-lg font-medium transition-colors font-sans hover:text-gray-100 text-gray-100" href="#" style={{}}>Pricing</a>
<a className="block py-3 text-lg font-medium transition-colors font-sans hover:text-gray-100 text-gray-100" href="#" style={{}}>Resources</a>
<a className="block py-3 text-lg font-medium transition-colors font-sans hover:text-gray-100 text-gray-100" href="#" style={{}}>Company</a>
<div className="pt-4 border-t space-y-3 border-gray-800" style={{}}>
<button className="w-full py-2.5 text-sm font-medium border rounded-lg transition-colors font-sans border-gray-700 hover:bg-gray-950 text-gray-100" style={{}}>Sign In</button>
<button className="w-full py-2.5 text-sm font-medium rounded-lg transition-colors text-black font-sans bg-gray-100 hover:bg-gray-200" style={{}}>Start Free Trial</button>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
<div className="rounded-3xl shadow-xl overflow-hidden bg-black shadow-gray-800/20" style={{}}>
<div className="lg:grid lg:grid-cols-2 lg:gap-0">
<section className="px-6 py-12 sm:px-12 lg:py-20 flex flex-col justify-center">
<div className="animate-slide-right delay-100">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r border text-sm font-medium mb-6 to-red-950 font-sans from-pink-950 border-pink-800 text-pink-300" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4 mr-2" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              AI-Powered Analytics
            </div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight animate-slide-right delay-200 font-manrope font-light text-gray-100" style={{}}>
            Transform Your<br />
<span className="bg-clip-text text-transparent font-manrope font-light bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500" style={{}}>Financial Future</span>
</h1>
<p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-lg animate-slide-right delay-300 font-sans text-gray-100" style={{}}>
            Harness the power of advanced AI to analyze market trends, optimize portfolios, and make data-driven investment decisions with unprecedented accuracy.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-right delay-400">
<button className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group text-black font-sans bg-gray-100 hover:bg-gray-200" style={{}}>
              Get Started Free
              <svg className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 border font-medium rounded-xl transition-all duration-200 group font-sans border-gray-700 text-gray-100 hover:bg-gray-950" style={{}}>
<svg className="lucide lucide-play mr-2 h-4 w-4 group-hover:scale-110 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Watch Demo
            </button>
</div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md animate-slide-right delay-500">
<div className="flex items-start space-x-4 group">
<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform from-pink-900 to-gray-900" style={{}}>
<svg className="lucide lucide-users h-6 w-6 text-green-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-2xl font-manrope font-light text-gray-100" style={{}}>287k+</p>
<p className="text-sm leading-relaxed font-sans text-gray-100" style={{}}>Active traders using our platform</p>
</div>
</div>
<div className="flex items-start space-x-4 group">
<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform to-pink-900 from-gray-900" style={{}}>
<svg className="lucide lucide-bar-chart-3 h-6 w-6 text-blue-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div>
<p className="text-2xl font-manrope font-light text-gray-100" style={{}}>$4.2B+</p>
<p className="text-sm leading-relaxed font-sans text-gray-100" style={{}}>Assets analyzed daily</p>
</div>
</div>
</div>
<div className="mt-12 flex items-center space-x-6 animate-slide-right delay-600">
<p className="text-sm font-medium font-sans text-gray-100" style={{}}>Trusted by leading institutions</p>
<div className="flex items-center space-x-4 opacity-60">
<div className="h-8 w-20 rounded bg-gray-800" style={{}}></div>
<div className="h-8 w-16 rounded bg-gray-800" style={{}}></div>
<div className="h-8 w-18 rounded bg-gray-800" style={{}}></div>
</div>
</div>
</section>
<section className="relative sm:px-12 lg:py-20 bg-center bg-[url(https://images.unsplash.com/photo-1678581231067-644dddeca6dc?w=2560&q=80)] bg-cover pt-12 pr-6 pb-12 pl-6" style={{}}>
<div className="absolute top-8 right-8 animate-fade-in delay-300">
<button className="inline-flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-black/80">
<svg className="lucide lucide-more-horizontal h-5 w-5 text-gray-100" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="relative max-w-sm h-[500px] lg:h-[600px] animate-fade-in delay-400 mr-auto ml-auto">

<div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r rounded-2xl animate-float delay-100 opacity-20 from-red-600 to-pink-600" style={{}}></div>
<div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r rounded-xl animate-float delay-300 opacity-20 from-pink-600 to-rose-600" style={{}}></div>

<div className="absolute left-0 top-8 -translate-x-1/2 h-64 w-44 transform animate-slide-up delay-500 w-[280px] bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 rounded-2xl shadow-2xl -rotate-12" style={{}}>
<div className="h-full flex flex-col text-black pt-6 pr-6 pb-6 pl-6 justify-between" style={{}}>
<div className="">
<p className="text-sm opacity-90 font-sans" style={{}}>Premium Card</p>
<p className="text-xs opacity-70 mt-1 font-sans" style={{}}>**** 8527</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-xl font-semibold font-sans" style={{}}>$12,450</p>
</div>
<svg className="lucide lucide-credit-card h-6 w-6 opacity-80" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>
</div>
<div className="absolute left-8 top-16 -translate-x-1/2 h-72 w-48 rotate-6 transform rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 shadow-2xl animate-slide-up delay-600 to-pink-400 w-[290px]" style={{}}>
<div className="h-full flex flex-col text-black pt-6 pr-6 pb-6 pl-6 justify-between" style={{}}>
<div className="">
<p className="text-sm opacity-90 font-sans" style={{}}>Business Elite</p>
<p className="text-xs opacity-70 mt-1 font-sans" style={{}}>**** 3892</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-2xl font-manrope font-light" style={{}}>$28,900</p>
</div>
<svg className="lucide lucide-diamond h-6 w-6 opacity-80" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
</div>
</div>
<div className="absolute left-16 top-32 -translate-x-1/2 h-80 w-52 -rotate-2 transform rounded-2xl shadow-2xl border animate-slide-up delay-700 bg-black border-gray-900 w-[300px]" style={{}}>
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-semibold font-sans text-gray-100" style={{}}>FinanceFlow</span>
<i className="h-6 w-6 text-gray-600" data-lucide="contactless" style={{}}></i>
</div>
<div className="space-y-3">
<div className="h-2 bg-gradient-to-r rounded-full to-red-800 from-pink-800" style={{}}>
<div className="h-2 bg-gradient-to-r to-red-500 rounded-full w-3/4 from-pink-500" style={{}}></div>
</div>
<p className="text-3xl font-manrope font-light text-gray-100" style={{}}>$47,820.00</p>
<p className="text-sm tracking-widest font-sans text-gray-100" style={{}}>**** **** **** 9418</p>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between text-sm">
<span className="font-sans text-gray-100" style={{}}>Available Balance</span>
<span className="font-medium font-sans text-gray-100" style={{}}>$47,820.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-wifi h-5 w-5 text-gray-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span className="text-xs font-sans text-gray-100" style={{}}>Contactless</span>
</div>
<div className="flex items-center space-x-1">
<div className="h-6 w-8 bg-gradient-to-r to-red-500 rounded-full from-pink-500" style={{}}></div>
<div className="h-6 w-8 bg-gradient-to-r rounded-full -ml-2 to-red-600 from-pink-600" style={{}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>



    </>
  );
}
