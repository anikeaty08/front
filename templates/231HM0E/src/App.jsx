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



    // Lucide icons
    lucide.createIcons();

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Chart.js doughnut
    const ctx = document.getElementById('reasonsChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Family Time', 'Mental Health', 'Nature', 'Creativity'],
        datasets: [{
          data: [40, 30, 20, 10],
          backgroundColor: ['#f59e0b', '#fbbf24', '#fde68a', '#fff7d6'],
          borderWidth: 1,
          borderColor: '#ffffff'
        }]
      },
      options: {
        cutout: '60%',
        plugins: { legend: { position: 'bottom' } }
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
      

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="text-2xl font-semibold tracking-tight" href="#">RF</a>
<nav className="hidden md:flex space-x-10 text-sm">
<a className="hover:text-amber-600 transition" href="#manifesto">Manifesto</a>
<a className="hover:text-amber-600 transition" href="#stats">Stats</a>
<a className="hover:text-amber-600 transition" href="#partners">Partners</a>
<a className="hover:text-amber-600 transition" href="#toolkit">Toolkit</a>
</nav>
</div>
</header>

<section className="relative overflow-hidden">
<img alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-20 pointer-events-none" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Reclaim Fridays</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8">A global movement to unplug one day a week—so we can all reconnect with what really matters.</p>
<a className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-700 transition" href="#manifesto">
<span>Learn More</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20 space-y-12" id="manifesto">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Manifesto</h2>
<p className="prose md:prose-lg text-gray-700">
        We are wired, always-on, forever scrolling. Yet the moments that matter most still happen away from screens—around dinner tables, sunrise trails, and uncharted daydreams. <strong>Reclaim Fridays</strong> is a collective promise to step back every week, to turn off notifications and turn toward each other. One day. Every week. Everywhere.
      </p>
</div>
<blockquote className="border-l-4 border-amber-500 pl-6 text-xl md:text-2xl font-medium text-gray-800">
      “When we unplug together, we reconnect with the world and ourselves.” 
    </blockquote>
<div className="flex flex-col md:flex-row md:space-x-8">
<img alt="" className="w-full md:w-1/2 rounded-lg shadow-sm mb-6 md:mb-0" src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="" className="w-full md:w-1/2 rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</section>

<div className="max-w-7xl mx-auto border-t border-gray-200"></div>

<section className="max-w-7xl mx-auto px-6 py-20" id="stats">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">The Impact</h2>
<p className="text-gray-700">Thousands around the planet have already reclaimed their Fridays. The results speak for themselves.</p>
<div className="grid grid-cols-2 gap-6">
<div className="text-center">
<p className="text-5xl font-semibold tracking-tight text-amber-600">71%</p>
<p className="text-sm text-gray-600">report less stress</p>
</div>
<div className="text-center">
<p className="text-5xl font-semibold tracking-tight text-amber-600">6 hrs</p>
<p className="text-sm text-gray-600">offline on average</p>
</div>
<div className="text-center">
<p className="text-5xl font-semibold tracking-tight text-amber-600">52</p>
<p className="text-sm text-gray-600">countries involved</p>
</div>
<div className="text-center">
<p className="text-5xl font-semibold tracking-tight text-amber-600">+38%</p>
<p className="text-sm text-gray-600">increase in joy</p>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-xl shadow-lg border border-gray-200 p-6">
<h3 className="text-center text-sm uppercase tracking-wide font-medium text-gray-500 mb-4">Why people unplug</h3>
<canvas height="400" id="reasonsChart" width="400"></canvas>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto border-t border-gray-200"></div>

<section className="max-w-7xl mx-auto px-6 py-20" id="partners">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">Partner Organizations</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">WN</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">SQ</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">MN</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">PL</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">DC</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">HC</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">RG</div>
<div className="text-2xl font-semibold tracking-tight border border-gray-200 rounded-lg px-6 py-4 w-full text-center hover:shadow transition">TB</div>
</div>
</section>

<div className="max-w-7xl mx-auto border-t border-gray-200"></div>

<section className="max-w-7xl mx-auto px-6 py-20" id="toolkit">
<div className="flex flex-col md:flex-row items-center md:space-x-10">
<img alt="" className="w-full md:w-1/2 rounded-lg shadow-sm mb-8 md:mb-0" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Download the Social Kit</h2>
<p className="text-gray-700">Share your unplugged Fridays with the world. Our kit includes ready-to-post graphics, color-matched stickers, and templates for every platform.</p>
<a className="inline-flex items-center space-x-3 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="download"></i>
<span>Get the Kit</span>
</a>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
<a className="text-xl font-semibold tracking-tight" href="#">RF</a>
<p className="text-sm text-gray-500">© <span id="year"></span> Reclaim Fridays. All rights reserved.</p>
<div className="flex space-x-4">
<a aria-label="Twitter" className="hover:text-amber-600 transition" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i></a>
<a aria-label="Instagram" className="hover:text-amber-600 transition" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i></a>
<a aria-label="LinkedIn" className="hover:text-amber-600 transition" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>



    </>
  );
}
