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

    const ctx = document.getElementById('crowdChart').getContext('2d');
    let occupancy = Math.floor(Math.random()*100);
    document.getElementById('occupancy-count').textContent = occupancy + ' / 100';

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Capacity'],
        datasets: [{
          data: [occupancy],
          backgroundColor: ['#D946EF'],
          borderRadius: 6,
          borderWidth: 0,
        }]
      },
      options: {
        indexAxis: 'y',
        animation: { duration: 500 },
        scales: {
          x: {
            max: 100,
            grid: { display: false },
            ticks: { display: false }
          },
          y: { grid: { display: false }, ticks: { display: false } }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });

    setInterval(() => {
      occupancy = Math.floor(Math.random()*100);
      chart.data.datasets[0].data[0] = occupancy;
      chart.update();
      document.getElementById('occupancy-count').textContent = occupancy + ' / 100';
    }, 15000);
  
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
      

<section className="relative isolate overflow-hidden">
<img alt="" className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1495555687391-2c4c39b13000?auto=format&fit=crop&w=1050&q=60')] mix-blend-screen opacity-30 bg-cover bg-center"></div>
<div className="mx-auto max-w-5xl px-6 py-32 flex flex-col items-center text-center space-y-6">
<h1 className="text-5xl md:text-6xl font-semibold">Vancouver Climbing Collective</h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-xl">Gravity-defying problems, world-class terrain, and a community coated in chalk.</p>
<div className="flex gap-4">
<a className="px-6 py-3 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors border border-white/10" href="#crowd">Check Crowd</a>
<a className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors border border-white/10" href="#pricing">View Pricing</a>
</div>
</div>
</section>

<section className="relative px-6 py-24 bg-neutral-950" id="crowd">
<div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1050&q=60')] opacity-20 bg-cover bg-center"></div>
<div className="mx-auto max-w-4xl">
<h2 className="text-4xl font-semibold mb-1">Real-Time Crowd Meter</h2>
<p className="text-neutral-400 mb-8">Know before you chalk up. Data updates every 15 seconds.</p>
<div className="bg-neutral-800/60 border border-white/10 rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="activity"></i>
<span className="font-medium">Current Occupancy</span>
</div>
<span className="text-xl font-semibold" id="occupancy-count">– / 100</span>
</div>
<div>
<canvas height="80" id="crowdChart"></canvas>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 bg-neutral-900">
<div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
<div className="space-y-6">
<h2 className="text-4xl font-semibold">First Time?</h2>
<p className="text-neutral-300">Welcome! Here’s everything you need to know to crush your first session.</p>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500 mt-1" data-lucide="check-circle"></i>
<span><span className="font-medium">Waiver:</span> Sign digitally before arriving.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500 mt-1" data-lucide="check-circle"></i>
<span><span className="font-medium">Orientation:</span> A quick 10-minute safety briefing.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500 mt-1" data-lucide="check-circle"></i>
<span><span className="font-medium">Rentals:</span> Shoes & chalk for <span className="whitespace-nowrap">$5 each</span>.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500 mt-1" data-lucide="check-circle"></i>
<span><span className="font-medium">Routes:</span> Colour-coded from V0 to V12.</span>
</li>
</ul>
</div>
<div className="relative">
<img alt="First-timer climber" className="rounded-lg shadow-xl object-cover h-full w-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-white/10"></div>
</div>
</div>
</section>

<section className="px-6 py-24 bg-neutral-950" id="pricing">
<div className="mx-auto max-w-5xl">
<h2 className="text-4xl font-semibold mb-12">Pricing</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-neutral-900 border border-white/10 rounded-lg p-6 flex flex-col">
<h3 className="text-2xl font-semibold mb-2">Day Pass</h3>
<p className="text-neutral-400 mb-6">Perfect for drop-ins.</p>
<div className="text-4xl font-semibold mb-6">$24</div>
<ul className="flex-1 space-y-3 mb-6">
<li className="flex gap-2 items-start"><i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="check"></i> Full-day access</li>
<li className="flex gap-2 items-start"><i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="check"></i> Re-entry allowed</li>
</ul>
<button className="mt-auto px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors border border-white/10">Buy Pass</button>
</div>

<div className="bg-neutral-900 border border-fuchsia-600 rounded-lg p-6 flex flex-col ring-1 ring-fuchsia-600">
<h3 className="text-2xl font-semibold mb-2">10-Punch Card</h3>
<p className="text-neutral-400 mb-6">Save per visit.</p>
<div className="text-4xl font-semibold mb-6">$199</div>
<ul className="flex-1 space-y-3 mb-6">
<li className="flex gap-2 items-start"><i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="check"></i> Transferable</li>
<li className="flex gap-2 items-start"><i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="check"></i> No expiry</li>
</ul>
<button className="mt-auto px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors border border-white/10">Grab Card</button>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-lg p-6 flex flex-col">
<h3 className="text-2xl font-semibold mb-2">Monthly Membership</h3>
<p className="text-neutral-400 mb-6">Unlimited sends.</p>
<div className="text-4xl font-semibold mb-6">$89</div>
<ul className="flex-1 space-y-3 mb-6">
<li className="flex gap-2 items-start"><i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="check"></i> Unlimited visits</li>
<li className="flex gap-2 items-start"><i className="w-5 h-5 stroke-current stroke-1.5 text-fuchsia-500" data-lucide="check"></i> Free yoga classes</li>
</ul>
<button className="mt-auto px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors border border-white/10">Join Now</button>
</div>
</div>
</div>
</section>

<footer className="px-6 py-12 bg-neutral-900 border-t border-white/5">
<div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-2 font-semibold tracking-tight text-white">
<span className="text-fuchsia-600">VCC</span>
<span>© 2023</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
