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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // Initialize icons
    lucide.createIcons();

    // Mobile navigation toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');

    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      const icon = menuBtn.querySelector('[data-lucide]');
      if (mobileNav.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
      } else {
        icon.setAttribute('data-lucide', 'x');
      }
      lucide.createIcons();
    });

    // Smooth scroll behavior for anchor links
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
      

<header className="max-w-6xl mx-auto mt-8 px-4 md:px-8 animate-fade-in">
<div className="backdrop-blur-lg rounded-3xl shadow-lg border flex items-center justify-between py-4 px-6 md:px-10 hover:shadow-xl transition-all duration-300 bg-white/95 border-white/20">

<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-xl bg-[#a3d977] flex items-center justify-center text-sm font-black font-martian group-hover:scale-105 transition-transform">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#2a1f20]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<span className="font-semibold tracking-tight text-lg font-quicksand">NovaVault</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[#6b7c32] transition-colors duration-200 flex items-center gap-2 font-quicksand" href="#">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
          Features
        </a>
<a className="hover:text-[#6b7c32] transition-colors duration-200 flex items-center gap-2 font-quicksand" href="#">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
          Reviews
        </a>
<a className="hover:text-[#6b7c32] transition-colors duration-200 flex items-center gap-2 font-quicksand" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
          Learn
        </a>
<a className="inline-flex items-center gap-2 bg-[#2a1f20] rounded-full px-5 py-2.5 hover:bg-[#3d2f30] transition-all duration-200 hover:shadow-lg font-quicksand text-white" href="#" style={{}}>
<svg className="lucide lucide-smartphone w-4 h-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
          Get App
        </a>
</nav>

<button className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-200 hover:bg-black/5" id="menuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>

<nav className="md:hidden mt-4 backdrop-blur-lg rounded-2xl shadow-lg border divide-y overflow-hidden hidden bg-white/95 border-white/20 divide-black/5" id="mobileNav">
<a className="flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors font-quicksand hover:bg-black/5" href="#">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
        Features
      </a>
<a className="flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors font-quicksand hover:bg-black/5" href="#">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
        Reviews
      </a>
<a className="flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors font-quicksand hover:bg-black/5" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
        Learn
      </a>
<a className="flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors font-quicksand hover:bg-black/5" href="#">
<svg className="lucide lucide-smartphone w-4 h-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
        Get App
      </a>
</nav>
</header>

<section className="max-w-6xl mx-auto mt-10 px-4 md:px-8 animate-slide-up delay-200">
<div className="rounded-3xl overflow-hidden shadow-xl border grid md:grid-cols-2 hover:shadow-2xl transition-all duration-500 bg-white border-white/30">

<div className="p-8 sm:p-12 lg:p-16">
<div className="animate-slide-up delay-300">
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#2a1f20] font-quicksand font-medium tracking-tight" style={{}}>
            Next-Gen<br />Digital Asset<br />Management
          </h1>
</div>
<div className="animate-slide-up delay-400">
<p className="mt-6 text-[#5a5a5a] max-w-md text-lg leading-relaxed font-quicksand" style={{}}>
            Trade, Store & Grow Your Digital Portfolio with Advanced Security
          </p>
</div>

<div className="mt-8 flex flex-wrap items-center gap-4 animate-slide-up delay-500">
<a className="inline-flex items-center gap-2 bg-[#a3d977] text-[#2a1f20] font-semibold rounded-full px-6 py-3 hover:bg-[#94d162] transition-all duration-200 hover:shadow-lg hover:scale-105 font-quicksand" href="#" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
            Start Trading
          </a>

<a className="flex items-center gap-2 border rounded-full px-5 py-3 text-sm shadow-sm hover:shadow-md transition-all duration-200 font-quicksand bg-white border-black/10 hover:border-black/20" href="#">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
            App Store
          </a>
<a className="flex items-center gap-2 border rounded-full px-5 py-3 text-sm shadow-sm hover:shadow-md transition-all duration-200 font-quicksand bg-white border-black/10 hover:border-black/20" href="#">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Google Play
          </a>
</div>
</div>

<div className="relative bg-[#a3d977] overflow-hidden">

<div className="absolute top-6 left-6 md:top-8 md:left-8 backdrop-blur-sm rounded-2xl p-4 text-xs shadow-lg border flex flex-col gap-1 hover:shadow-xl transition-all duration-300 bg-white/90 border-white/30">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-3 h-3 text-[#6b7c32]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-[10px] uppercase tracking-widest text-[#5a5a5a] font-medium font-quicksand" style={{}}>Portfolio Value</span>
</div>
<span className="font-martian text-[#2a1f20] text-lg font-semibold font-quicksand" style={{}}>12,847.52 ETH</span>
<div className="flex justify-between text-[10px] text-[#5a5a5a]" style={{}}>
<span className="font-quicksand">$24,156.90</span>
<span className="flex items-center gap-1 font-medium text-indigo-600" style={{}}>
<svg className="lucide lucide-arrow-up w-2 h-2" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="font-quicksand">+$1,847.33</span>
</span>
</div>
</div>

<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 backdrop-blur-sm rounded-2xl p-3 text-xs shadow-lg border hover:shadow-xl transition-all duration-300 bg-white/90 border-white/30">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity w-3 h-3 text-[#6b7c32]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-[10px] uppercase tracking-widest text-[#5a5a5a] font-medium font-quicksand" style={{}}>24h Change</span>
</div>
<span className="font-martian text-sm font-semibold font-quicksand text-indigo-600" style={{}}>+8.47%</span>
</div>

<div className="relative z-10 w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
<div className="w-48 md:w-56 h-80 md:h-96 bg-gradient-to-br from-[#2a1f20] to-[#3d2f30] rounded-3xl shadow-2xl border-4 flex flex-col p-4 md:p-6 border-white/20">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-400" style={{}}></div>
<span className="text-xs font-medium font-quicksand text-white" style={{}}>Online</span>
</div>
<svg className="lucide lucide-bell w-4 h-4 text-white/70" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>

<div className="text-center mb-8">
<p className="text-xs mb-1 font-quicksand text-white/60">Total Balance</p>
<p className="font-martian text-xl font-bold font-quicksand text-white" style={{}}>$24,156.90</p>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<button className="bg-[#a3d977] text-[#2a1f20] rounded-xl py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 font-quicksand" style={{}}>
<svg className="lucide lucide-arrow-up w-3 h-3" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                Send
              </button>
<button className="rounded-xl py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 font-quicksand bg-white/10 text-white" style={{}}>
<svg className="lucide lucide-arrow-down w-3 h-3" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                Receive
              </button>
</div>

<div className="space-y-3 flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center" style={{}}>
<svg className="lucide lucide-bitcoin w-3 h-3 text-white" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-xs font-quicksand text-white" style={{}}>BTC</span>
</div>
<span className="text-xs font-medium font-quicksand text-white" style={{}}>$18,247</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center" style={{}}>
<svg className="lucide lucide-circle w-3 h-3 text-white" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
</div>
<span className="text-xs font-quicksand text-white" style={{}}>ETH</span>
</div>
<span className="text-xs font-medium font-quicksand text-white" style={{}}>$5,909</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mt-20 px-4 md:px-8 pb-20">
<div className="grid md:grid-cols-2 gap-12 lg:gap-16">

<div className="animate-slide-up delay-600">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-type w-5 h-5 text-[#6b7c32]" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<h2 className="text-lg font-semibold tracking-tight text-[#5a5a5a] font-quicksand" style={{}}>Typography</h2>
</div>
<p className="text-4xl font-medium text-[#2a1f20] tracking-tight font-quicksand mt-3" style={{}}>Quicksand</p>
<p className="leading-6 text-sm text-[#5a5a5a] font-martian mt-6" style={{}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) - + = [ ] {"{"} {"}"} | \ : ; " ' {"<"} {">"} , . ? /
        </p>
</div>

<div className="animate-slide-up delay-700">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-palette w-5 h-5 text-[#6b7c32]" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="13.5" cy="6.5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" fill="currentColor"></circle></svg>
<h2 className="text-lg font-semibold tracking-tight text-[#5a5a5a] font-quicksand" style={{}}>Color Palette</h2>
</div>
<div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
<div className="flex flex-col items-center gap-2 group">
<div className="w-20 h-20 rounded-2xl bg-[#2a1f20] border-2 shadow-lg group-hover:scale-105 transition-transform border-white"></div>
<span className="text-xs font-mono">#2a1f20</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<div className="w-20 h-20 rounded-2xl bg-[#a3d977] border-2 shadow-lg group-hover:scale-105 transition-transform border-white"></div>
<span className="text-xs font-mono">#a3d977</span>
</div>
<div className="flex flex-col gap-2 group items-center">
<div className="w-20 h-20 rounded-2xl bg-[#f8f9fa] border-2 shadow-lg group-hover:scale-105 transition-transform border-blue-200" style={{}}></div>
<span className="text-xs font-mono">#f8f9fa</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<div className="w-20 h-20 rounded-2xl border-2 shadow-lg group-hover:scale-105 transition-transform bg-white border-blue-200" style={{}}></div>
<span className="text-xs font-mono">#ffffff</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<div className="w-20 h-20 rounded-2xl bg-[#e8f0d4] border-2 shadow-lg group-hover:scale-105 transition-transform border-white"></div>
<span className="text-xs font-mono">#e8f0d4</span>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
