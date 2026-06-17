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
      
    lucide.createIcons();

    // Radar-style chart
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf'],
        datasets: [{
          label: 'Signals Detected',
          data: [7, 12, 9, 17, 13, 21, 16],
          fill: true,
          backgroundColor: 'rgba(34,211,238,0.07)',
          borderColor: 'rgba(34,211,238,1)',
          tension: 0.4,
          pointBackgroundColor: 'rgba(16,185,129,1)',
          pointBorderColor: '#fff',
          pointRadius: 5,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: "rgba(34,197,94,0.09)" },
            ticks: { color: "#4ade80", font: { family: 'Inter', weight: 500 } }
          },
          y: {
            grid: { color: "rgba(34,197,94,0.09)" },
            ticks: { color: "#4ade80", font: { family: 'Inter', weight: 500 } },
            beginAtZero: true
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
      

<header className="w-full px-6 py-6 md:py-8 flex items-center justify-between border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-gradient-to-tr from-green-500 to-blue-600 flex items-center justify-center">
<svg fill="none" height="28" viewbox="0 0 28 28" width="28">
<circle cx="14" cy="14" r="13" stroke="#91ef6b" stroke-opacity="0.25" strokeWidth="2"></circle>
<circle cx="14" cy="14" r="7" stroke="#91ef6b" stroke-opacity="0.45" strokeWidth="2"></circle>
<circle cx="14" cy="14" fill="#91ef6b" fillOpacity="0.3" r="3"></circle>
<path d="M14 14V4" stroke="#4ade80" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight">Battlespace</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-green-400 transition" href="#">Radar</a>
<a className="hover:text-green-400 transition" href="#">Ops Feed</a>
<a className="hover:text-green-400 transition" href="#">Integrations</a>
<a className="hover:text-green-400 transition" href="#">Contact</a>
</nav>
<button className="hidden md:inline-flex items-center px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white font-medium transition">Request Demo</button>
<button className="md:hidden">
<svg className="w-7 h-7 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"></path></svg>
</button>
</header>

<section className="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
<div className="flex flex-col items-center">
<div className="relative w-64 h-64 mx-auto mb-8">

<svg className="w-full h-full" viewbox="0 0 256 256">
<circle cx="128" cy="128" fill="none" r="120" stroke="#22d3ee" stroke-opacity="0.12" strokeWidth="2"></circle>
<circle cx="128" cy="128" fill="none" r="80" stroke="#4ade80" stroke-opacity="0.18" strokeWidth="2"></circle>
<circle cx="128" cy="128" fill="none" r="40" stroke="#4ade80" stroke-opacity="0.35" strokeWidth="2"></circle>
<circle cx="128" cy="128" fill="#22d3ee" fillOpacity="0.3" r="12"></circle>
<path d="M128 128L128 28" stroke="#22d3ee" strokeLinecap="round" strokeWidth="5"></path>
<path d="M128 128L198 78" stroke="#4ade80" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="198" cy="78" fill="#4ade80" fillOpacity="0.9" r="5"></circle>
<circle cx="128" cy="28" fill="#22d3ee" fillOpacity="0.8" r="5"></circle>
</svg>

<span className="absolute left-[66%] top-[18%] block w-3 h-3 bg-green-400 rounded-full opacity-80 shadow-lg"></span>
<span className="absolute left-[39%] top-[75%] block w-2 h-2 bg-blue-400 rounded-full opacity-70"></span>
<span className="absolute left-[70%] top-[60%] block w-2 h-2 bg-green-300 rounded-full opacity-50"></span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        AI Driven Intelligence,<br/>
<span className="text-green-400">Situational Awareness</span> Delivered
      </h1>
<p className="text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mx-auto mb-8">
        Battlespace aggregates and analyzes multi-source data in real time, arming your team with actionable intelligence and a <span className="text-green-400">live operational radar</span> for any mission.
      </p>
<div className="flex justify-center gap-4 mb-10">
<button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded font-medium shadow transition">Get Early Access</button>
<button className="px-6 py-3 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 rounded font-medium text-neutral-200 transition">View Live Demo</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-800">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-center">Mission Workflow</h2>
<div className="grid md:grid-cols-3 gap-10 text-center">
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-green-400" data-lucide="radio"></i>
</div>
<h3 className="text-lg font-medium">Scan Sources</h3>
<p className="text-neutral-400 text-sm">Ingest from public feeds, comms, sensors, or secured data assets. Plug in with zero friction.</p>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-blue-400" data-lucide="radar"></i>
</div>
<h3 className="text-lg font-medium">Radar-Grade Analysis</h3>
<p className="text-neutral-400 text-sm">Battlespace sweeps for signals, highlights anomalies, and filters out noise—live.</p>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-amber-400" data-lucide="target"></i>
</div>
<h3 className="text-lg font-medium">Deploy Intelligence</h3>
<p className="text-neutral-400 text-sm">Receive actionable SITREPs and alerts, integrated into your ops toolchain, instantly.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">Integrate with Your Command Stack</h2>
<div className="flex flex-wrap justify-center gap-6 mb-10">
<div className="flex items-center gap-2 px-5 py-3 border border-green-800 rounded-lg bg-neutral-900">
<i className="w-5 h-5 text-green-400" data-lucide="satellite-dish"></i>
<span className="text-sm font-medium">Sensor Feeds</span>
</div>
<div className="flex items-center gap-2 px-5 py-3 border border-blue-800 rounded-lg bg-neutral-900">
<i className="w-5 h-5 text-blue-400" data-lucide="globe"></i>
<span className="text-sm font-medium">Web &amp; Intel APIs</span>
</div>
<div className="flex items-center gap-2 px-5 py-3 border border-amber-700 rounded-lg bg-neutral-900">
<i className="w-5 h-5 text-amber-400" data-lucide="rss"></i>
<span className="text-sm font-medium">News &amp; Reports</span>
</div>
<div className="flex items-center gap-2 px-5 py-3 border border-fuchsia-800 rounded-lg bg-neutral-900">
<i className="w-5 h-5 text-fuchsia-400" data-lucide="message-square"></i>
<span className="text-sm font-medium">Comms &amp; Alerts</span>
</div>
<div className="flex items-center gap-2 px-5 py-3 border border-neutral-700 rounded-lg bg-neutral-900">
<i className="w-5 h-5 text-neutral-400" data-lucide="shield"></i>
<span className="text-sm font-medium">Classified Channels</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center h-56">
<img alt="Ops Integrations" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-xl font-semibold mb-2 tracking-tight">Field-Tested Flexibility</h3>
<p className="text-neutral-400 mb-4">From deep data to instant alerts, Battlespace adapts to tactical or strategic needs—keeping your team connected and aware.</p>
<ul className="text-neutral-300 flex flex-col gap-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Real-time multi-domain fusion</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Secure, encrypted by default</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Mission-ready integrations</li>
</ul>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-800">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Operational Radar, Live</h2>
<p className="text-neutral-400 mb-6">Visualize signal traffic and anomaly detections across your data sources. The Battlespace chart gives command-grade clarity at a glance.</p>
<ul className="flex flex-col gap-3 text-neutral-300">
<li className="flex items-center gap-2"><i className="w-5 h-5 text-green-400" data-lucide="activity"></i> Live Signal Tracking</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-amber-400" data-lucide="alert-octagon"></i> Threat &amp; Anomaly Alerts</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-blue-400" data-lucide="file-search"></i> Actionable SITREPs</li>
</ul>
</div>
<div className="bg-neutral-900 rounded-xl border border-neutral-800 p-4 flex flex-col items-center">
<canvas className="w-full h-48" id="radarChart"></canvas>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-16 border-t border-neutral-800 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Secure the High Ground</h2>
<p className="text-neutral-400 mb-8">Deploy Battlespace for situational awareness, mission confidence, and signal advantage. Request access—your radar, your edge.</p>
<form className="flex flex-col md:flex-row gap-3 justify-center max-w-lg mx-auto">
<input className="px-4 py-3 rounded border border-neutral-700 bg-neutral-900 text-neutral-200 focus:outline-none focus:border-green-600 w-full md:w-auto" placeholder="Your call sign (email)" required="" type="email"/>
<button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded font-medium text-white transition" type="submit">Request Access</button>
</form>
</section>

<footer className="w-full px-6 py-8 border-t border-neutral-800 text-center text-neutral-500 text-sm bg-neutral-950">
    © 2024 Battlespace. Radar-driven intelligence for the decisive edge.
  </footer>


    </>
  );
}
