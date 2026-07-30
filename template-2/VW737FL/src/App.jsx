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



// Initialize Lucide icons
lucide.createIcons();

// Add smooth scroll behavior
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

// Add intersection observer for additional animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all cards for scroll animations
document.querySelectorAll('.card-animate').forEach(card => {
  observer.observe(card);
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
      
<header className="header-animate w-full flex justify-between items-center p-4 sm:p-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
<span className="text-white font-semibold text-sm tracking-tight font-geist">VX</span>
</div>
<span className="font-semibold text-zinc-900 tracking-tight font-geist">Vertex</span>
</div>
</header>
<main className="flex-1 w-full px-4 pb-12 sm:px-6">
<div className="mx-auto max-w-7xl">
<div className="title-animate text-center mb-12">
<h1 className="text-4xl sm:text-6xl lg:text-7xl text-zinc-900 tracking-tight mb-6 font-geist font-semibold">Trading Intelligence Cards</h1>
<p className="text-zinc-600 text-xl max-w-2xl mx-auto font-geist">Professional trading insights and market analytics at your fingertips</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in text-white bg-zinc-900 bg-[url(/assets/1186f423-e9dd-4944-903e-b47acd318366_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between" style={{boxShadow: `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px`}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-trending-up w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full font-geist">Live</span>
</div>
<div className="">
<p className="text-4xl sm:text-5xl tracking-tight font-geist font-semibold">NVDA +8.24%</p>
<p className="text-zinc-400 text-base mt-2 font-geist">NVIDIA Corporation</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-emerald-400 font-semibold text-lg font-geist">$892.13</p>
<p className="text-zinc-500 text-sm font-geist">+$67.82</p>
</div>
</div>
</div>
<div className="space-y-4 border-t border-zinc-800 pt-6">
<p className="text-zinc-400 text-sm leading-relaxed font-geist">
          AI chip demand drives exceptional growth. Strong quarterly earnings exceeded analyst expectations by 15%.
        </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm tracking-tight font-geist">VERTEX</span>
<svg className="lucide lucide-verified w-4 h-4 text-emerald-400" data-lucide="verified" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<a className="text-emerald-400 text-sm hover:underline transition-colors font-geist" href="#">vertex.trade</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col justify-between rounded-3xl bg-white text-zinc-900 p-8 sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl group animate-in" style={{boxShadow: `rgba(0, 0, 0, 0.15) 0px 25px 50px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`}}>
<div className="flex flex-1 bg-[url(/assets/686aa8d3-7d4f-455f-afba-ed9399e3708b_800w.jpg)] bg-cover rounded-2xl items-center justify-center">
<div className="relative">
</div>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-sm uppercase tracking-wide text-zinc-700 font-medium font-geist">Enterprise Security</span>
<div className="flex gap-1">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight font-geist">Military-grade encryption & 2FA authentication</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-600">
<p className="font-geist">SOC 2 Type II Certified</p>
<p className="font-geist">Bank-level security protocols</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group text-white bg-zinc-900 bg-[url(/assets/eab297ee-54cd-4050-b3a4-8849a59a4d35_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between animate-in" style={{boxShadow: `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px`}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-zap w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full font-geist">EV Leader</span>
</div>
<div className="">
<p className="text-4xl sm:text-5xl tracking-tight font-geist font-semibold">TSLA +4.71%</p>
<p className="text-zinc-400 text-base mt-2 font-geist">Tesla Inc.</p>
</div>
<div className="relative">
<div className="absolute top-0 right-0 text-right">
<p className="text-blue-400 font-semibold text-lg font-geist">$248.73</p>
<p className="text-zinc-500 text-sm font-geist">+$11.19</p>
</div>
</div>
</div>
<div className="space-y-4 border-t border-zinc-800 pt-6">
<p className="text-zinc-400 text-sm leading-relaxed font-geist">
          Cybertruck production ramping up. Autonomous driving technology showing promising results in latest trials.
        </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm tracking-tight font-geist">VERTEX</span>
<svg className="lucide lucide-verified w-4 h-4 text-blue-400" data-lucide="verified" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<a className="text-blue-400 text-sm hover:underline transition-colors font-geist" href="#">vertex.trade</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group text-zinc-900 bg-white rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between animate-in" style={{boxShadow: `rgba(0, 0, 0, 0.15) 0px 25px 50px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`}}>
<div className="flex flex-1 bg-[url(/assets/e4f6cd7d-ef57-4f1a-b6a2-ea028bcf34be_800w.jpg)] bg-cover rounded-2xl items-center justify-center">
<div className="relative">
</div>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-sm uppercase tracking-wide text-zinc-700 font-medium font-geist">Instant Payments</span>
<div className="text-xs bg-emerald-500 text-white px-3 py-1.5 rounded-full font-geist">0% Fees</div>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight font-geist">Lightning-fast deposits & withdrawals</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-600">
<p className="font-geist">• ACH transfers in under 1 hour</p>
<p className="font-geist">• Wire transfers same-day processing</p>
<p className="font-geist">• Crypto deposits instant confirmation</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="card-animate flex flex-col sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in text-white bg-zinc-900 bg-[url(/assets/81a82278-7c4d-4f1a-b091-8363387c969c_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl justify-between" style={{boxShadow: `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px`}}>
<div className="space-y-6">
<div className="flex items-center justify-between">
<svg className="lucide lucide-pie-chart w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="text-xs px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full font-geist">Portfolio</span>
</div>
<h2 className="text-5xl sm:text-6xl tracking-tight font-geist font-semibold">Markets</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center hover:bg-zinc-800 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
<span className="font-geist">NVDA</span>
</div>
<span className="text-emerald-400 font-medium font-geist">+8.24% <svg className="lucide lucide-trending-up inline w-3 h-3 ml-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-zinc-800 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="font-geist">TSLA</span>
</div>
<span className="text-blue-400 font-medium font-geist">+4.71% <svg className="lucide lucide-trending-up inline w-3 h-3 ml-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-zinc-800 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="font-geist">AMZN</span>
</div>
<span className="text-yellow-400 font-medium font-geist">+2.18% <svg className="lucide lucide-trending-up inline w-3 h-3 ml-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-zinc-800 p-2 rounded-xl transition-colors">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-rose-400 rounded-full"></div>
<span className="font-geist">META</span>
</div>
<span className="text-rose-400 font-medium font-geist">-1.24% <svg className="lucide lucide-trending-down inline w-3 h-3 ml-1" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg></span>
</div>
<div className="flex justify-between items-center hover:bg-zinc-800 p-2 rounded-xl transition-colors"><div className="flex items-center gap-2">
<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
<span className="font-geist">GOOGL</span>
</div>
<span className="text-cyan-400 font-medium font-geist">+1.87% <svg className="lucide lucide-trending-up inline w-3 h-3 ml-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></span>
</div>
</div>
</div>
<div className="space-y-4 border-t border-zinc-800 pt-6">
<p className="text-zinc-400 text-sm leading-relaxed font-geist">
          Real-time market overview with performance indicators. Diversified portfolio showing strong upward momentum.
        </p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm tracking-tight font-geist">VERTEX</span>
<svg className="lucide lucide-verified w-4 h-4 text-purple-400" data-lucide="verified" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<a className="text-purple-400 text-sm hover:underline transition-colors font-geist" href="#">vertex.trade</a>
</div>
</div>
</div>

<div className="card-animate flex flex-col justify-between rounded-3xl bg-white text-zinc-900 p-8 sm:p-10 w-full aspect-[3/5] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl group animate-in" style={{boxShadow: `rgba(0, 0, 0, 0.15) 0px 25px 50px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`}}>
<div className="flex flex-1 bg-[url(/assets/a5863e51-75a9-462d-96f9-bf5d99e2cdc4_800w.jpg)] bg-cover rounded-2xl items-center justify-center">
<div className="relative">
</div>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-between">
<span className="text-sm uppercase tracking-wide text-zinc-700 font-medium font-geist">AI-Powered Trading</span>
<div className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-full font-geist">Beta</div>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight font-geist">Smart algorithms & predictive analytics</h2>
<div className="flex items-center justify-between pt-2">
<div className="text-sm text-zinc-600">
<p className="font-geist">• Machine learning risk assessment</p>
<p className="font-geist">• Pattern recognition alerts</p>
<p className="font-geist">• Automated portfolio rebalancing</p>
</div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="mt-16 py-8 px-4 sm:px-6 border-t border-zinc-200">
<div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-900 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-xs tracking-tight font-geist">VX</span>
</div>
<span className="font-medium text-zinc-900 tracking-tight font-geist">Vertex Trading Platform</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-600 font-geist">
<a className="hover:text-zinc-900 transition-colors" href="#">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Security</a>
<a className="hover:text-zinc-900 transition-colors" href="#">API</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
