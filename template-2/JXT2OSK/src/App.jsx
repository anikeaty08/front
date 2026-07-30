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
      
    // Icon init
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple chart
    const ctx = document.getElementById('lesionChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Baseline', '3 m', '6 m', '9 m', '12 m'],
        datasets: [{
          label: 'Lesion volume (ml)',
          data: [12, 14, 13, 17, 22],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.2)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
          y: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' }, beginAtZero: true }
        }
      }
    });

    // Entrance animations
    document.addEventListener('DOMContentLoaded', () => {
      const toAnimate = document.querySelectorAll('[data-animate]');
      toAnimate.forEach((el, idx) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-6');
        }, idx * 90 + 200);
      });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 blur-xl"><iframe frameborder="0" height="100%" src="https://my.spline.design/iphone14wallpaper9copy-6e94be4fb0a16b265b124a4c7812adcf" width="100%"></iframe></div>

<header className="sticky top-0 backdrop-blur-sm bg-[#0f1117]/70 z-20">
<div className="max-w-7xl flex h-16 mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<span className="text-lg tracking-tight font-semibold text-white">Laminate</span>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-slate-300 transition" href="#">Home</a>
<a className="hover:text-slate-300 transition" href="#modules">Modules</a>
<a className="hover:text-slate-300 transition" href="#docs">Docs</a>
<a className="hover:text-slate-300 transition" href="#contact">Contact</a>
</nav>
<a className="rounded-md border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800 transition hidden md:inline-flex" href="#request-demo">Request demo</a>
<button aria-label="Menu" className="md:hidden p-2">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl md:py-32 grid md:grid-cols-2 gap-12 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 items-center">
<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white transition duration-700" data-animate="">
          Integrate medical imaging AI<br className="hidden md:block" />into clinical workflows.
        </h1>
<p className="max-w-lg text-slate-400 text-base md:text-lg transition duration-700 delay-100" data-animate="">
          Laminate connects cutting-edge AI modules with PACS, RIS and on-prem deployments, from brain
          lesion tracing to full-body CT segmentation.
        </p>
<div className="flex gap-4 transition duration-700 delay-200" data-animate="">
<a className="rounded-md bg-indigo-500 hover:bg-indigo-400 px-6 py-3 text-sm font-medium text-white shadow-md transition" href="#request-demo">Request a demo</a>
<a className="rounded-md border border-slate-700 hover:bg-slate-800 px-6 py-3 text-sm font-medium transition" href="#docs">Documentation</a>
</div>
</div>
<div className="relative w-full h-[320px] md:h-[440px] transition duration-700 delay-300" data-animate="">
<img alt="MRI brain scan" className="absolute inset-0 w-full h-full ring-1 ring-slate-700/50 object-cover rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=1600&q=80" />
</div>
</div>
<div className="pointer-events-none absolute -bottom-1 left-0 w-full h-24 bg-gradient-to-t from-[#0f1117] to-transparent"></div>
</section>

<section className="border-t border-slate-800" id="features">
<div className="max-w-7xl grid md:grid-cols-3 gap-12 bg-slate-900 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 border border-slate-700 rounded-xl shadow-lg">
<div className="flex flex-col gap-4 transition duration-700" data-animate="">
<div className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center">
<svg className="lucide lucide-layers w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Unified platform</h3>
<p className="text-slate-400 text-sm">
          Deploy, manage and monitor diverse imaging algorithms behind a single secure interface.
        </p>
</div>
<div className="flex flex-col gap-4 transition duration-700 delay-100" data-animate="">
<div className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center">
<svg className="lucide lucide-brain w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Clinical-grade output</h3>
<p className="text-slate-400 text-sm">
          FDA-ready pipeline with DICOM-RT support, audit trails and full versioning of each inference.
        </p>
</div>
<div className="flex flex-col gap-4 transition duration-700 delay-200" data-animate="">
<div className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center">
<svg className="lucide lucide-workflow w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Native workflows</h3>
<p className="text-slate-400 text-sm">
          Plug Laminate directly into PACS, zero-footprint viewers and hospital scheduling systems.
        </p>
</div>
</div>
</section>

<section className="border-t border-slate-800" id="modules">
<div className="mx-auto max-w-7xl px-6 py-20">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-12 transition duration-700" data-animate="">
        Highlighted AI modules
      </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative rounded-xl border border-slate-800 overflow-hidden hover:border-indigo-500 transition duration-700" data-animate="">
<img alt="MS Lesion" className="object-cover w-full h-44" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1000&q=60" />
<div className="p-6 bg-[#0f1117]">
<h3 className="font-medium text-white tracking-tight">MS Lesion Tracker</h3>
<p className="text-slate-400 text-sm mt-2">
              Longitudinal segmentation of demyelinating lesions across multi-timepoint MRIs.
            </p>
</div>
</div>

<div className="group relative rounded-xl border border-slate-800 overflow-hidden hover:border-indigo-500 transition duration-700 delay-100" data-animate="">
<img alt="Brain Atrophy" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1508028922235-7b9a1b690358?w=800&q=80" />
<div className="p-6 bg-[#0f1117]">
<h3 className="font-medium text-white tracking-tight">Neuro Atrophy Analyzer</h3>
<p className="text-slate-400 text-sm mt-2">
              Quantifies ventricular, gray and white matter changes to assist dementia staging.
            </p>
</div>
</div>

<div className="group relative rounded-xl border border-slate-800 overflow-hidden hover:border-indigo-500 transition duration-700 delay-200" data-animate="">
<img alt="Total Segmentator" className="object-cover w-full h-44" src="https://images.unsplash.com/photo-1559757175-0828e13882ed?w=800&q=80" />
<div className="p-6 bg-[#0f1117]">
<h3 className="font-medium text-white tracking-tight">Total Segmentator</h3>
<p className="text-slate-400 text-sm mt-2">
              Open-source whole-body CT segmentation with 100+ organ labels out-of-the-box.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800" id="analytics">
<div className="max-w-7xl grid md:grid-cols-2 gap-16 bg-slate-700 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 items-center">
<div className="transition duration-700 space-y-6" data-animate="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Evidence-driven reporting
        </h2>
<p className="text-slate-400 text-base">
          Laminate’s audit dashboard highlights lesion evolution, volume trends and algorithmic confidence,
          enabling radiologists to validate AI results and generate structured reports instantly.
        </p>
</div>
<div className="rounded-xl border border-slate-800 p-6 bg-[#0f1117] transition duration-700 delay-100" data-animate="">
<div className="">
<canvas className="!w-full !h-64" height="249" id="lesionChart" style={{display: `block`, boxSizing: `border-box`, height: `249px`, width: `498px`}} width="498"></canvas>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800" id="request-demo">
<div className="max-w-7xl transition duration-700 text-center bg-slate-900 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 space-y-6" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        Ready to integrate AI into your workflow?
      </h2>
<p className="max-w-2xl mx-auto text-slate-400">
        Explore Laminate or schedule a pilot to see our modules running on your own neuro or CT datasets.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="rounded-md bg-indigo-500 hover:bg-indigo-400 px-8 py-3 text-sm font-medium text-white shadow" href="#contact">Book a call</a>
<a className="rounded-md border border-slate-700 hover:bg-slate-800 px-8 py-3 text-sm font-medium" href="#docs">View documentation</a>
</div>
</div>
</section>

<footer className="border-t border-slate-800">
<div className="max-w-7xl grid md:grid-cols-2 gap-8 text-sm bg-slate-950 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="">
<span className="text-lg font-semibold tracking-tight text-white">Laminate</span>
<p className="text-slate-500 mt-4 max-w-sm">
          © <span id="year">2025</span> Laminate Inc. All rights reserved.
        </p>
</div>
<div className="grid grid-cols-3 gap-8">
<div className="space-y-2">
<h4 className="text-slate-300 font-medium">Product</h4>
<a className="block hover:text-slate-300" href="#">Overview</a>
<a className="block hover:text-slate-300" href="#modules">Modules</a>
<a className="block hover:text-slate-300" href="#analytics">Analytics</a>
</div>
<div className="space-y-2">
<h4 className="text-slate-300 font-medium">Developers</h4>
<a className="block hover:text-slate-300" href="#docs">Docs</a>
<a className="block hover:text-slate-300" href="#">API</a>
<a className="block hover:text-slate-300" href="#">GitHub</a>
</div>
<div className="space-y-2">
<h4 className="text-slate-300 font-medium">Company</h4>
<a className="block hover:text-slate-300" href="#">About</a>
<a className="block hover:text-slate-300" href="#contact">Contact</a>
<a className="block hover:text-slate-300" href="#">Careers</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
