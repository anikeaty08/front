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
      
    // Reveal on scroll
    const revealEls=document.querySelectorAll('[data-reveal]');
    const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}})},{threshold:.15});
    revealEls.forEach(el=>io.observe(el));

    // Chart.js demo
    const ctx=document.getElementById('pointsChart').getContext('2d');
    new Chart(ctx,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{data:[0,4200,11600,17500,28600,48600],borderColor:'#fde047',backgroundColor:'rgba(253,224,71,.1)',fill:true,tension:.35}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:'#a1a1aa'}},y:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'#a1a1aa'},beginAtZero:true}}}});
  
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
      

<section className="relative overflow-hidden pt-24 pb-32 px-6 lg:px-20">
<div className="absolute inset-0 -z-10">
<div className="butter-gradient opacity-10 w-[120%] h-[120%] -rotate-12 origin-center blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6" data-reveal="">Butter<span className="font-light text-yellow-300">.</span> </h1>
<p className="text-lg lg:text-xl text-zinc-300 mb-8 max-w-md" data-reveal="" style={{transitionDelay: `.1s`}}>Spread your credit card rewards to every corner of your life. Track sign-up bonuses, spending categories and point multipliers with melt-in-your-mouth simplicity.</p>
<div className="flex gap-4" data-reveal="" style={{transitionDelay: `.2s`}}>
<a className="px-6 py-3 rounded-md font-medium bg-yellow-400 text-zinc-900 hover:bg-yellow-300 transition shadow-md shadow-yellow-500/20" href="#">Download on App Store</a>
<a className="px-6 py-3 rounded-md border border-zinc-700 hover:border-zinc-500 transition" href="#features">Learn more</a>
</div>
</div>

<div className="relative h-[360px] w-full flex items-center justify-center" data-reveal="" style={{transitionDelay: `.3s`}}>
<div className="isometric-card relative w-56 h-36 rounded-xl butter-gradient shadow-2xl shadow-yellow-500/20">
<div className="absolute inset-0 rounded-xl bg-yellow-50/5 backdrop-blur-sm"></div>
<div className="absolute inset-0 p-4 flex flex-col justify-between text-zinc-900">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">BUTTER</span>
<svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2"><use href="#credit-card"></use></svg>
</div>
<div>
<p className="text-xs text-zinc-800/80 mb-1">Available Points</p>
<p className="text-lg font-semibold">48,600</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="divider"></div>

<section className="py-24 px-6 lg:px-20" id="features">
<div className="max-w-5xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4" data-reveal="">Churn smarter, not harder</h2>
<p className="text-zinc-400 max-w-2xl mx-auto" data-reveal="" style={{transitionDelay: `.1s`}}>Butter turns complicated spreadsheets into deliciously intuitive cards, letting you know exactly where to swipe for maximum flavor.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

<div className="p-8 bg-zinc-900/40 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-yellow-500/10 transition border border-zinc-800" data-reveal="" style={{transitionDelay: `.2s`}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg butter-gradient shadow-md mb-6">
<svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2"><use href="#pie-chart"></use></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Category Insights</h3>
<p className="text-zinc-400 text-sm">Know your 5×, 3× and 2× multipliers instantly, so every purchase drips with value.</p>
</div>

<div className="p-8 bg-zinc-900/40 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-yellow-500/10 transition border border-zinc-800" data-reveal="" style={{transitionDelay: `.3s`}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg butter-gradient shadow-md mb-6">
<svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2"><use href="#bell"></use></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Bonus Deadlines</h3>
<p className="text-zinc-400 text-sm">Push notifications keep you on pace to meet minimum spend before bonuses melt away.</p>
</div>

<div className="p-8 bg-zinc-900/40 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-yellow-500/10 transition border border-zinc-800" data-reveal="" style={{transitionDelay: `.4s`}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg butter-gradient shadow-md mb-6">
<svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2"><use href="#check-circle"></use></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Smart Recommendations</h3>
<p className="text-zinc-400 text-sm">Our churn-aware engine suggests the next card that fits your pantry of points.</p>
</div>

<div className="p-8 bg-zinc-900/40 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-yellow-500/10 transition border border-zinc-800" data-reveal="" style={{transitionDelay: `.5s`}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg butter-gradient shadow-md mb-6">
<svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2"><use href="#wallet"></use></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Portfolio View</h3>
<p className="text-zinc-400 text-sm">See all your cards, balances, and annual fees in one churn-safe place.</p>
</div>

<div className="p-8 bg-zinc-900/40 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-yellow-500/10 transition border border-zinc-800" data-reveal="" style={{transitionDelay: `.6s`}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg butter-gradient shadow-md mb-6">
<svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2"><use href="#shield"></use></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Privacy First</h3>
<p className="text-zinc-400 text-sm">All data is encrypted and stored locally unless you opt-in to sync.</p>
</div>

<div className="p-8 bg-zinc-900/40 rounded-2xl backdrop-blur-lg hover:shadow-lg hover:shadow-yellow-500/10 transition border border-zinc-800" data-reveal="" style={{transitionDelay: `.7s`}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg butter-gradient shadow-md mb-6">
<svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2"><use href="#clock"></use></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Real-Time Sync</h3>
<p className="text-zinc-400 text-sm">Background refresh keeps spend & points up-to-date, even while you sleep.</p>
</div>
</div>
</section>
<div className="divider"></div>

<section className="py-24 px-6 lg:px-20">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1" data-reveal="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Watch your balance rise</h2>
<p className="text-zinc-400 mb-8 max-w-md">Butter visualizes every point you earn so you stay motivated and on budget.</p>
<a className="px-6 py-3 rounded-md font-medium bg-yellow-400 text-zinc-900 hover:bg-yellow-300 transition shadow-md shadow-yellow-500/20" href="#">Join the Waitlist</a>
</div>
<div className="relative w-full h-80 order-1 lg:order-2" data-reveal="" style={{transitionDelay: `.1s`}}>
<div className="absolute inset-0 p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 backdrop-blur-lg">
<canvas id="pointsChart"></canvas>
</div>
</div>
</div>
</section>
<div className="divider"></div>

<section className="py-24 px-6 lg:px-20">
<div className="max-w-3xl mx-auto text-center" data-reveal="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Ready to butter up your wallet?</h2>
<p className="text-zinc-400 mb-8">Be first in line when we launch. Your points will thank you.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="px-5 py-3 rounded-md bg-zinc-800/60 placeholder-zinc-500 text-zinc-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Email address" type="email" />
<button className="px-6 py-3 rounded-md font-medium bg-yellow-400 text-zinc-900 hover:bg-yellow-300 transition shadow-md shadow-yellow-500/20">Notify Me</button>
</div>
</div>
</section>
<div className="divider"></div>

<footer className="py-12 px-6 lg:px-20 text-zinc-500 text-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0" data-reveal="">
<p>© 2023 Butter Labs, Inc.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<a className="hover:text-zinc-300" href="#">Terms</a>
<a className="hover:text-zinc-300" href="#">Contact</a>
</div>
</div>
</footer>

<svg style={{display: `none`}}>
<symbol id="credit-card" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10H3m0 9h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path><path d="M4 15h2"></path><path d="M10 15h4"></path></symbol>
<symbol id="pie-chart" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9"></path><path d="M22 12A10 10 0 1 0 12 22"></path><path d="M12 2v10l7 7"></path></symbol>
<symbol id="bell" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></symbol>
<symbol id="check-circle" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></symbol>
<symbol id="wallet" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12V7a2 2 0 0 0-2-2H4"></path><path d="M22 15v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16"></path><path d="M18 15h2v2h-2z"></path></symbol>
<symbol id="shield" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></symbol>
<symbol id="clock" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></symbol>
</svg>


    </>
  );
}
