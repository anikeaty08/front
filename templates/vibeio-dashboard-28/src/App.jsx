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



                                for(let i=0; i<30; i++) {
                                    let h = Math.floor(Math.random() * 80) + 10;
                                    document.write(`<div class="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style="height: ${h}%"></div>`);
                                }
                             


        // Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            if(menu.classList.contains('hidden')){
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });

        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
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
      

<div className="bg-slate-950 text-white py-2 px-4 relative transition-all duration-300" id="top-banner">
<div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-medium">
<span className="font-sans" style={{}}>Important Update Banner</span>
<span className="ml-2 group cursor-pointer inline-flex items-center text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white" onclick="document.getElementById('top-banner').style.display='none'">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-slate-900 font-sans" style={{}}>VIBEIO<span className="text-blue-600 font-sans" style={{}}>*</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<div className="relative group">
<button className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" style={{}}>
                            Product
                            <svg className="lucide lucide-chevron-down ml-1 w-4 h-4 text-slate-400 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<div className="py-1">
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-sans" href="#" style={{}}>Features</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-sans" href="#" style={{}}>Integrations</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-sans" href="#" style={{}}>Changelog</a>
</div>
</div>
</div>
<div className="relative group">
<button className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" style={{}}>
                            Resources
                            <svg className="lucide lucide-chevron-down ml-1 w-4 h-4 text-slate-400 transition-transform group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<div className="py-1">
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-sans" href="#" style={{}}>Documentation</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-sans" href="#" style={{}}>API Reference</a>
</div>
</div>
</div>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" href="#" style={{}}>Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" href="#" style={{}}>About</a>
</div>

<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-1 text-slate-500 hover:text-slate-900 cursor-pointer text-xs font-medium uppercase tracking-wide">
<span className="font-sans" style={{}}>EN</span>
<svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="text-slate-500 hover:text-slate-900">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 px-3 py-2 font-sans" href="#" style={{}}>Login</a>
<a className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors shadow-sm ring-1 ring-blue-600 ring-offset-2 hover:ring-offset-1 font-sans" href="#" style={{}}>
                        Sign up
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 p-2" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl hidden md:hidden z-40" id="mobile-menu">
<div className="px-4 py-6 space-y-4">
<a className="block text-lg font-medium text-slate-900 font-sans" href="#" style={{}}>Product</a>
<a className="block text-lg font-medium text-slate-900 font-sans" href="#" style={{}}>Resources</a>
<a className="block text-lg font-medium text-slate-900 font-sans" href="#" style={{}}>Pricing</a>
<a className="block text-lg font-medium text-slate-900 font-sans" href="#" style={{}}>About</a>
<div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
<a className="block text-center text-lg font-medium text-slate-600 font-sans" href="#" style={{}}>Login</a>
<a className="block text-center text-lg font-medium text-white bg-blue-600 py-3 rounded-lg font-sans" href="#" style={{}}>Sign up</a>
</div>
</div>
</div>
</nav>

<section className="overflow-hidden pt-20 pb-24 relative">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h1 className="reveal md:text-7xl leading-[1.1] active text-5xl text-slate-900 tracking-tight text-left max-w-4xl mr-auto mb-6 ml-0 font-sans font-semibold" style={{}}>
                Lorem ipsum dolor sit amet, consectetur <span className="text-gradient font-sans font-semibold" style={{}}>adipiscing elit.</span>
</h1>

<div className="reveal mt-16 relative mx-auto max-w-5xl active">

<div className="-top-12 -left-12 filter animate-blob bg-purple-200 opacity-30 mix-blend-multiply w-64 h-64 rounded-full absolute blur-3xl"></div>
<div className="-top-12 -right-12 filter animate-blob animation-delay-2000 bg-blue-200 opacity-30 mix-blend-multiply w-64 h-64 rounded-full absolute blur-3xl"></div>

<div className="overflow-hidden aspect-[16/10] flex flex-col md:aspect-[16/9] bg-white border-slate-200 border rounded-xl relative shadow-2xl">

<div className="flex text-left bg-slate-50/50 h-12 border-slate-100 border-b pr-4 pl-4 gap-x-4 gap-y-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
</div>
<div className="flex-1 max-w-sm mx-auto bg-white border border-slate-200 rounded h-6 w-full opacity-50"></div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="hidden sm:flex flex-col gap-4 bg-slate-50/30 w-48 border-slate-100 border-r pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<div className="h-8 w-8 bg-slate-200 rounded-lg mb-2"></div>
<div className="space-y-3">
<div className="h-2 w-24 bg-slate-200 rounded"></div>
<div className="h-2 w-32 bg-slate-200 rounded"></div>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>
<div className="mt-auto space-y-3">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-3/4 bg-slate-100 rounded"></div>
</div>
</div>

<div className="flex-1 md:p-8 overflow-y-auto bg-white pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-8 items-end justify-between">
<div className="">
<div className="h-3 w-32 bg-slate-200 rounded mb-2"></div>
<div className="h-6 w-64 bg-slate-900 rounded"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-24 border border-slate-200 rounded-md"></div>
<div className="h-8 w-8 border border-slate-200 rounded-md"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="h-3 w-24 bg-slate-200 rounded"></div>
<div className="h-4 w-4 bg-slate-100 rounded-full"></div>
</div>

<div className="flex items-center gap-6">
<div className="w-32 h-32 rounded-full border-[16px] border-purple-500 border-r-purple-200 border-b-purple-300"></div>
<div className="space-y-2 flex-1">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
<div className="h-2 w-4/5 bg-slate-100 rounded"></div>
</div>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="h-3 w-32 bg-slate-200 rounded"></div>
</div>

<div className="h-32 flex items-end gap-2 px-2">
<div className="w-full bg-blue-50 h-[20%] rounded-t"></div>
<div className="w-full bg-blue-50 h-[40%] rounded-t"></div>
<div className="w-full bg-blue-100 h-[35%] rounded-t"></div>
<div className="w-full bg-blue-100 h-[60%] rounded-t"></div>
<div className="w-full bg-blue-200 h-[50%] rounded-t"></div>
<div className="w-full bg-blue-300 h-[80%] rounded-t"></div>
<div className="w-full bg-blue-400 h-[75%] rounded-t"></div>
<div className="w-full bg-blue-500 h-[90%] rounded-t"></div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="h-12 w-full border border-slate-100 rounded-lg flex items-center px-4 gap-4">
<div className="w-4 h-4 rounded bg-purple-100"></div>
<div className="h-2 w-32 bg-slate-200 rounded"></div>
<div className="flex-1"></div>
<div className="h-2 w-16 bg-green-100 text-green-600 rounded"></div>
</div>
<div className="h-12 w-full border border-slate-100 rounded-lg flex items-center px-4 gap-4">
<div className="w-4 h-4 rounded bg-blue-100"></div>
<div className="h-2 w-24 bg-slate-200 rounded"></div>
<div className="flex-1"></div>
<div className="h-2 w-16 bg-red-100 text-red-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-4xl mx-auto px-4 text-center reveal active">
<h2 className="text-3xl md:text-5xl tracking-tight text-slate-900 leading-tight font-sans font-semibold" style={{}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="space-y-12 reveal">
<div className="group cursor-pointer">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
<p className="text-lg text-slate-500 leading-relaxed font-sans" style={{}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
</div>
<div className="group cursor-pointer">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
<p className="text-lg text-slate-500 leading-relaxed font-sans" style={{}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
</div>
<div className="group cursor-pointer">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
<p className="text-lg text-slate-500 leading-relaxed font-sans" style={{}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
</div>
</div>

<div className="relative reveal bg-slate-50 rounded-2xl p-8 lg:p-12">
<div className="relative bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden aspect-square flex flex-col p-6">
<div className="flex items-center gap-4 mb-8">
<div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<div className="h-3 w-32 bg-slate-200 rounded mb-1"></div>
<div className="h-2 w-24 bg-slate-100 rounded"></div>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-2">

<div className="w-full bg-indigo-50 h-[30%] rounded-t-sm hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-indigo-50 h-[50%] rounded-t-sm hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-indigo-100 h-[40%] rounded-t-sm hover:bg-indigo-200 transition-colors"></div>
<div className="w-full bg-indigo-200 h-[70%] rounded-t-sm hover:bg-indigo-300 transition-colors"></div>
<div className="w-full bg-indigo-300 h-[60%] rounded-t-sm hover:bg-indigo-400 transition-colors"></div>
<div className="w-full bg-indigo-500 h-[90%] rounded-t-sm shadow-lg relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-sans" style={{}}>240 Visits</div>
</div>
<div className="w-full bg-indigo-200 h-[65%] rounded-t-sm hover:bg-indigo-300 transition-colors"></div>
<div className="w-full bg-indigo-100 h-[45%] rounded-t-sm hover:bg-indigo-200 transition-colors"></div>
</div>
<div className="mt-6 flex gap-4">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-1/3 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 relative reveal border border-slate-200 rounded-2xl p-4 shadow-sm bg-white">
<div className="aspect-[16/9] flex flex-col justify-end p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
<svg className="lucide lucide-pie-chart w-4 h-4 text-white" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="h-3 w-40 bg-slate-200 rounded"></div>
</div>

<div className="flex-1 flex items-end justify-between gap-3 h-48">
<div className="w-full bg-purple-100 h-[40%] rounded-t-md"></div>
<div className="w-full bg-purple-200 h-[60%] rounded-t-md"></div>
<div className="w-full bg-purple-300 h-[30%] rounded-t-md"></div>
<div className="w-full bg-purple-400 h-[70%] rounded-t-md"></div>
<div className="w-full bg-purple-500 h-[50%] rounded-t-md relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white shadow-lg border border-slate-100 p-2 rounded-lg text-center min-w-[60px]">
<span className="block text-xs font-bold text-slate-900 font-sans" style={{}}>240</span>
</div>
</div>
<div className="w-full bg-purple-200 h-[45%] rounded-t-md"></div>
<div className="w-full bg-purple-100 h-[25%] rounded-t-md"></div>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-6 reveal">
<h3 className="text-3xl md:text-4xl tracking-tight text-slate-900 font-sans font-semibold" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
<p className="text-lg text-slate-500 leading-relaxed font-sans" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="space-y-6 reveal">
<h3 className="text-3xl md:text-4xl tracking-tight text-slate-900 font-sans font-semibold" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
<p className="text-lg text-slate-500 leading-relaxed font-sans" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
</div>

<div className="relative reveal bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
<svg className="lucide lucide-activity text-white w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<div className="h-3 w-24 bg-slate-300 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
</div>
</div>
<div className="h-8 w-24 bg-slate-100 rounded-full"></div>
</div>

<div className="flex items-end gap-2 h-40">
<div className="w-full bg-slate-100 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[35%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[55%] rounded-t-sm"></div>
<div className="w-full bg-blue-600 h-[85%] rounded-t-sm shadow-lg shadow-blue-200 relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white shadow-md border border-slate-100 px-3 py-1 rounded-full">
<div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin inline-block"></div>
</div>
</div>
<div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-4 text-center reveal">
<h2 className="text-4xl md:text-6xl tracking-tight text-slate-900 leading-[1.1] font-sans font-semibold" style={{}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl tracking-tight text-center mb-12 text-slate-900 font-sans font-semibold" style={{}}>Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50 transition-colors">
<span className="font-medium text-lg text-slate-900 font-sans" style={{}}>Question text goes here</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-lg text-slate-500 leading-relaxed border-t border-slate-100 pt-4 font-sans" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50 transition-colors">
<span className="font-medium text-lg text-slate-900 font-sans" style={{}}>Question text goes here</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-lg text-slate-500 leading-relaxed border-t border-slate-100 pt-4 font-sans" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50 transition-colors">
<span className="font-medium text-lg text-slate-900 font-sans" style={{}}>Question text goes here</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-lg text-slate-500 leading-relaxed border-t border-slate-100 pt-4 font-sans" style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-4xl mx-auto px-4 mb-12 reveal">
<h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 mb-6 font-sans font-semibold" style={{}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
</div>

<div className="max-w-6xl mx-auto px-4 reveal">
<div className="relative rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden aspect-[16/9] flex flex-col transform hover:scale-[1.01] transition-transform duration-500">
<div className="h-10 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="flex-1 flex bg-slate-50 p-6 md:p-12 items-center justify-center">

<div className="w-full h-full bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col">
<div className="flex justify-between mb-8">
<div className="h-4 w-48 bg-slate-200 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-20 border border-slate-200 rounded"></div>
<div className="h-8 w-20 border border-slate-200 rounded"></div>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-1">

<div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '35%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '46%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '82%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '32%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '54%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '60%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '17%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '75%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '78%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '65%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '30%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '76%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '79%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '53%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '54%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '28%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '29%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '41%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '56%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '34%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '21%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '66%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '86%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '29%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '83%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '69%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '33%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '63%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '23%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '47%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '67%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '48%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '59%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '13%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '20%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '74%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '79%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '35%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '84%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '59%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '39%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '23%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '22%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '55%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '52%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '54%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '30%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '43%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '76%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '22%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '48%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '84%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '86%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '61%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '57%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '75%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '80%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '72%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '31%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '69%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '27%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '60%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '82%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '17%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '27%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '63%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '51%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '17%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '71%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '85%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '38%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '80%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '53%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '57%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '44%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '80%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '77%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '78%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '85%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '41%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '24%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '41%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '57%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '71%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '63%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '47%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '74%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '48%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '39%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '46%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '88%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '51%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '71%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '23%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '16%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '19%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '24%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '47%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '37%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '13%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '61%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '21%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '47%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '11%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '51%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '13%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '22%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '57%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '35%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '23%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '53%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '56%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '85%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '74%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '36%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '28%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '57%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '77%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '55%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '17%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '41%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '43%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '83%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '36%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '31%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '46%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '32%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '79%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '76%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '29%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '11%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '15%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '21%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '38%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '77%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '22%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '27%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '79%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '27%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '78%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '28%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '86%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '30%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '40%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '52%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '66%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '76%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '77%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '54%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '30%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '17%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '66%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '47%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '22%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '83%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '11%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '27%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '14%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '78%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '59%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '25%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '16%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '40%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '88%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '39%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '52%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '82%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '65%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '31%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '80%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '11%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '72%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '41%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '16%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '52%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '53%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '80%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '51%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '26%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '65%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '68%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '34%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '44%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '31%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '49%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '75%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '38%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '76%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '34%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '42%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '82%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '81%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '82%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '67%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '78%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '66%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '44%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '55%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '14%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '87%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '88%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '16%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '55%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '80%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '48%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '31%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '28%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '89%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '72%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '63%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '83%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '65%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '13%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '40%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '43%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '78%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '58%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '36%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '19%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '72%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '69%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '88%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '17%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '55%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '53%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '19%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '55%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '20%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '28%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '18%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '86%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '10%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '74%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '77%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '32%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '25%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '14%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '74%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '64%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '40%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '88%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '40%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '71%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '39%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '49%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '37%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '76%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '42%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '24%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '50%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '49%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '70%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '60%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '21%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '45%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '88%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '12%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '66%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '48%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '37%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '61%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '82%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '75%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '43%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '37%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '73%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '25%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '62%'}}></div><div className="flex-1 bg-purple-100 rounded-t-sm hover:bg-purple-500 transition-colors duration-300" style={{height: '42%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12 reveal">
<h2 className="text-4xl tracking-tight text-slate-900 max-w-xl font-sans font-semibold" style={{}}>
                    Lorem ipsum dolor sit amet.
                </h2>
<button className="hidden md:inline-flex items-center text-sm font-medium border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 transition-colors font-sans" style={{}}>
                    VIEW ALL
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal">
<div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden aspect-[4/3] mb-6 flex items-center justify-center relative">
<div className="absolute inset-0 bg-slate-50 transition-colors group-hover:bg-slate-100"></div>

<div className="w-3/4 h-1/2 bg-white shadow-md rounded-lg flex items-end justify-between p-4 gap-1 relative z-10">
<div className="w-2 bg-indigo-500 h-full rounded-full"></div>
<div className="w-2 bg-indigo-300 h-2/3 rounded-full"></div>
<div className="w-2 bg-indigo-200 h-1/2 rounded-full"></div>
<div className="w-2 bg-indigo-400 h-3/4 rounded-full"></div>
<div className="w-2 bg-indigo-600 h-full rounded-full"></div>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur</h3>
<p className="text-base text-slate-500 mb-3 font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors font-sans" style={{}}>
                        Text Link Small <svg className="lucide lucide-arrow-right ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group cursor-pointer reveal" style={{}}>
<div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden aspect-[4/3] mb-6 flex items-center justify-center relative">
<div className="absolute inset-0 bg-slate-50 transition-colors group-hover:bg-slate-100"></div>
<div className="w-3/4 h-1/2 bg-white shadow-md rounded-lg flex flex-col p-4 gap-2 relative z-10">
<div className="flex gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-purple-100"></div>
<div className="h-2 w-20 bg-slate-200 rounded mt-2"></div>
</div>
<div className="space-y-1">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur</h3>
<p className="text-base text-slate-500 mb-3 font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors font-sans" style={{}}>
                        Text Link Small <svg className="lucide lucide-arrow-right ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group cursor-pointer reveal" style={{}}>
<div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden aspect-[4/3] mb-6 flex items-center justify-center relative">
<div className="absolute inset-0 bg-slate-50 transition-colors group-hover:bg-slate-100"></div>
<div className="w-3/4 h-1/2 bg-white shadow-md rounded-lg flex items-center justify-center relative z-10">
<div className="w-16 h-16 rounded-full border-4 border-emerald-500 border-t-emerald-200"></div>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur</h3>
<p className="text-base text-slate-500 mb-3 font-sans" style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors font-sans" style={{}}>
                        Text Link Small <svg className="lucide lucide-arrow-right ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
<div className="md:hidden mt-8 text-center">
<button className="inline-flex items-center text-sm font-medium border border-slate-200 rounded-full px-6 py-3 hover:bg-slate-50 transition-colors font-sans" style={{}}>
                    VIEW ALL
                </button>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 relative overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden flex justify-center opacity-10">
<h1 className="text-[18vw] text-slate-700 leading-none tracking-tighter font-sans font-semibold" style={{}}>VIBEIO+</h1>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

<div className="md:w-1/4">
<span className="text-2xl text-white tracking-tighter font-sans font-semibold" style={{}}>VIBEIO<span className="text-blue-500 font-sans font-semibold" style={{}}>*</span></span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-3/4">
<div className="flex flex-col gap-4">
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Products</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Resources</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Support</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Contact</a>
</div>
<div className="flex flex-col gap-4">
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Behance</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>LinkedIn</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Dribbble</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Instagram</a>
</div>
<div className="flex flex-col gap-4">
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Legal</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Site Map</a>
<a className="text-white font-medium hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>Privacy Policy</a>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm font-sans" style={{}}>© 2040 Copyright. All Rights Reserved.</p>
<div className="flex gap-4">
<a className="text-sm font-medium text-white border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-full transition-colors font-sans" href="#" style={{}}>
                        LOGIN
                    </a>
<a className="text-sm font-medium text-slate-900 bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full transition-colors font-sans" href="#" style={{}}>
                        SIGNUP
                    </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
