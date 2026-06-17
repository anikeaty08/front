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



    // Lucide Icons
    lucide.createIcons();

    // Staggered fade/slide-in
    document.addEventListener('DOMContentLoaded', () => {
      const els = [...document.querySelectorAll('[data-animate]')];
      els.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(12px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }, 200 + i * 150);
      });
    });

    // Chart.js line chart
    const ctx = document.getElementById('bidChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(240, 171, 252, 0.4)');
    gradient.addColorStop(1, 'rgba(24, 24, 27, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00'],
        datasets: [{
          label: 'Bid Price (USD)',
          data: [88000, 92000, 96500, 101000, 110000, 118000, 126000],
          borderColor: '#e879f9',
          backgroundColor: gradient,
          tension: 0.35,
          pointRadius: 3,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: { color: '#a1a1aa' },
            grid: { display: false }
          },
          y: {
            ticks: { color: '#a1a1aa', callback: val => '$' + val.toLocaleString() },
            grid: { color: 'rgba(63,63,70,0.2)' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#18181b',
            titleColor: '#ffffff',
            bodyColor: '#d4d4d8',
            borderColor: '#52525b',
            borderWidth: 1
          }
        }
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
      

<header className="sticky top-0 z-20 backdrop-blur bg-zinc-900/70 border-b border-zinc-800">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-fuchsia-500" data-lucide="globe"></i>
<span className="text-lg font-semibold tracking-tight">AuctionHub</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-fuchsia-400 transition-colors" href="#">Marketplace</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#">How it Works</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#">Pricing</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#">Support</a>
</nav>
<button className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36 flex flex-col items-center text-center gap-6">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight" style={{letterSpacing: '-0.025em'}}>Welcome to the Most Premium Domain Auctions</h1>
<p className="max-w-xl text-zinc-400">Acquire high-value digital properties with real-time bidding, transparent insights, and secure escrow.</p>
<div className="flex gap-4 mt-4">
<button className="px-6 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors text-sm font-medium">Get Started</button>
<button className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-fuchsia-600 transition-colors text-sm font-medium">View Marketplace</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
<div className="border border-zinc-800 rounded-2xl p-8 backdrop-blur bg-zinc-800/40" data-animate="">
<i className="w-8 h-8 text-fuchsia-500 mb-4" data-lucide="shield-check"></i>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Secure Escrow</h3>
<p className="text-zinc-400 text-sm">All transactions protected by industry-leading escrow service for peace of mind.</p>
</div>
<div className="border border-zinc-800 rounded-2xl p-8 backdrop-blur bg-zinc-800/40" data-animate="">
<i className="w-8 h-8 text-fuchsia-500 mb-4" data-lucide="clock"></i>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Real-Time Bidding</h3>
<p className="text-zinc-400 text-sm">Instant updates, lightning-fast bids, and transparent activity logs.</p>
</div>
<div className="border border-zinc-800 rounded-2xl p-8 backdrop-blur bg-zinc-800/40" data-animate="">
<i className="w-8 h-8 text-fuchsia-500 mb-4" data-lucide="bar-chart-3"></i>
<h3 className="text-lg font-semibold mb-2 tracking-tight">Market Insights</h3>
<p className="text-zinc-400 text-sm">Data-driven valuations and price trends across thousands of premium domains.</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Live Auctions</h2>
<a className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors" href="#">See all</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative border border-zinc-800 rounded-2xl p-6 bg-zinc-800/40 overflow-hidden hover:border-fuchsia-600 transition-colors" data-animate="">
<span className="absolute top-4 right-4 text-xs py-1 px-2 rounded-full bg-zinc-700 group-hover:bg-fuchsia-600 transition-colors">Ends in 02:14:23</span>
<h3 className="text-lg font-semibold tracking-tight mb-1">aiwallet.com</h3>
<p className="text-sm text-zinc-400 mb-4">Crypto &amp; AI synergy for next-gen wallets.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Current Bid</span>
<span className="font-medium">$18,400</span>
</div>
</div>

<div className="group relative border border-zinc-800 rounded-2xl p-6 bg-zinc-800/40 overflow-hidden hover:border-fuchsia-600 transition-colors" data-animate="">
<span className="absolute top-4 right-4 text-xs py-1 px-2 rounded-full bg-zinc-700 group-hover:bg-fuchsia-600 transition-colors">Ends in 00:44:09</span>
<h3 className="text-lg font-semibold tracking-tight mb-1">metaverse.io</h3>
<p className="text-sm text-zinc-400 mb-4">Prime gateway to virtual worlds &amp; experiences.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Current Bid</span>
<span className="font-medium">$126,000</span>
</div>
</div>

<div className="group relative border border-zinc-800 rounded-2xl p-6 bg-zinc-800/40 overflow-hidden hover:border-fuchsia-600 transition-colors" data-animate="">
<span className="absolute top-4 right-4 text-xs py-1 px-2 rounded-full bg-zinc-700 group-hover:bg-fuchsia-600 transition-colors">Ends in 05:27:51</span>
<h3 className="text-lg font-semibold tracking-tight mb-1">gigapixel.ai</h3>
<p className="text-sm text-zinc-400 mb-4">High-resolution AI imaging for creators.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Current Bid</span>
<span className="font-medium">$42,750</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<h2 className="text-2xl font-semibold tracking-tight mb-4">Bidding Trend – metaverse.io</h2>
<div className="border border-zinc-800 rounded-2xl bg-zinc-800/40 p-6">
<div className="max-w-full overflow-x-auto">
<div>
<canvas id="bidChart"></canvas>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 pt-12 pb-6">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
<div>
<div className="flex items-center gap-2 mb-2">
<i className="w-6 h-6 text-fuchsia-500" data-lucide="globe"></i>
<span className="text-lg font-semibold tracking-tight">AuctionHub</span>
</div>
<p className="text-sm text-zinc-500 max-w-sm">Empowering entrepreneurs and enterprises with high-impact digital real estate.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
<div className="flex flex-col gap-2">
<h4 className="font-semibold mb-1">Product</h4>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Features</a>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Pricing</a>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Roadmap</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="font-semibold mb-1">Company</h4>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">About</a>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Careers</a>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="font-semibold mb-1">Legal</h4>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Privacy</a>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Terms</a>
<a className="text-zinc-400 hover:text-fuchsia-400 transition-colors" href="#">Security</a>
</div>
</div>
</div>
<div className="mt-12 text-center text-xs text-zinc-600">© 2024 AuctionHub Inc. All rights reserved.</div>
</footer>



    </>
  );
}
