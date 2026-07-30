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

  (function () {
    function initChart() {
      var el = document.getElementById('kpiChart');
      if (!el) return;
      var ctx = el.getContext('2d');

      var gradient1 = ctx.createLinearGradient(0, 0, 0, 220);
      gradient1.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
      gradient1.addColorStop(1, 'rgba(245, 158, 11, 0.02)');

      var gradient2 = ctx.createLinearGradient(0, 0, 0, 220);
      gradient2.addColorStop(0, 'rgba(52, 211, 153, 0.35)');
      gradient2.addColorStop(1, 'rgba(52, 211, 153, 0.02)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
          datasets: [
            {
              label: 'Active users',
              data: [420, 520, 610, 580, 690, 760, 820, 930],
              borderColor '#f59e0b',
              backgroundColor: gradient1,
              tension: 0.35,
              fill: true,
              pointRadius: 0,
              borderWidth: 2
            },
            {
              label: 'Conversions',
              data: [38, 44, 51, 49, 57, 63, 70, 79],
              borderColor: '#34d399',
              backgroundColor: gradient2,
              tension: 0.35,
              fill: true,
              pointRadius: 0,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(23,23,23,0.9)',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: 'rgba(64,64,64,0.7)',
              borderWidth: 1,
              padding: 10,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(64,64,64,0.5)', drawBorder: false },
              ticks: { color: '#a3a3a3', font: { family: 'Inter', size: 11 } }
            },
            y: {
              grid: { color: 'rgba(64,64,64,0.5)', drawBorder: false },
              ticks: { color: '#a3a3a3', font: { family: 'Inter', size: 11 } },
              beginAtZero: true
            }
          }
        }
      });
    }

    if (window.Chart) {
      initChart();
    } else {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      s.onload = initChart;
      document.head.appendChild(s);
    }
  })();

}

{

    // Initialize Lucide with consistent 1.5 stroke width
    document.addEventListener('DOMContentLoaded', function () {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="fixed inset-0 -z-10">
<iframe className="" frameborder="0" height="100%" src="https://my.spline.design/quantum-ncqHj2HO6cx7eQ4WfDYRpqZb/" width="100%"></iframe>
</div>

<div className="relative z-10" style={{animation: `fade-in 700ms ease-out both`}}>

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between rounded-xl border backdrop-blur-xl px-4 py-3 shadow-sm default border-neutral-800/80" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border flex items-center justify-center default border-neutral-800/80" style={{}}>
<svg className="lucide lucide-sparkles h-5 w-5 text-amber-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</div>
<span className="text-[18px] tracking-wide" style={{fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif`, fontWeight: `500`}}>
            Quantum
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[14px] transition-colors text-white/80 hover:text-white" href="#" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Work</a>
<a className="text-[14px] transition-colors text-white/80 hover:text-white" href="#" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Services</a>
<a className="text-[14px] transition-colors text-white/80 hover:text-white" href="#" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>About</a>
<a className="text-[14px] transition-colors text-white/80 hover:text-white" href="#" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Contact</a>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[14px] transition-colors shadow-sm default border-neutral-800/80 text-white hover:bg-white/10 hover:border-neutral-700" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
            Let’s Talk
            <svg className="lucide lucide-send h-[18px] w-[18px] text-amber-500" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
</nav>

<section className="container md:pt-16 mr-auto ml-auto pt-10 pr-6 pl-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="tracking-wider leading-tight mb-4 text-[32px] md:text-[40px] text-white" style={{fontFamily: `'Lora', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`, fontWeight: `400`}}>
          Impekable
        </h1>
<p className="mx-auto tracking-normal mb-8 text-[18px] md:text-[20px] text-white/85" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
          We harness the power of quantum creativity to craft revolutionary digital experiences that transcend conventional
          boundaries and redefine what's possible.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="inline-flex gap-2 text-[15px] transition-colors bg-amber-500 rounded-md pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-center hover:bg-amber-400 text-black" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
            Explore Universe
            <svg className="lucide lucide-arrow-right h-[18px] w-[18px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-[15px] transition-colors shadow-sm default border-neutral-800/80 text-white hover:bg-white/10 hover:border-neutral-700" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
            Quantum Process
            <svg className="lucide lucide-workflow h-[18px] w-[18px] text-amber-500" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8"></rect><path></path><rect height="8" rx="2" width="8"></rect></svg>
</button>
</div>
</div>
<div className="mt-12 border-t border-neutral-800/80" style={{}}></div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
<div className="rounded-xl border p-5 transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<p className="tracking-wider mb-1 text-[18px] text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>
            Quantum Branding
          </p>
<p className="text-[14px] text-white/80" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
            Multi-dimensional identity systems
          </p>
</div>
<div className="rounded-xl border p-5 transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<p className="tracking-wider mb-1 text-[18px] text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>
            Neural Interfaces
          </p>
<p className="text-[14px] text-white/80" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
            Mind-machine design experiences
          </p>
</div>
<div className="rounded-xl border p-5 transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<p className="tracking-wider mb-1 text-[18px] text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>
            Quantum Computing
          </p>
<p className="text-[14px] text-white/80" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
            Next-generation architectures
          </p>
</div>
<div className="rounded-xl border p-5 transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<p className="tracking-wider mb-1 text-[18px] text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>
            Dimensional Motion
          </p>
<p className="text-[14px] text-white/80" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
            Reality-bending animations
          </p>
</div>
</div>
<div className="mt-14 mb-8 flex items-center justify-center">
<div className="h-[1px] w-full max-w-5xl bg-neutral-800/80" style={{}}></div>
</div>
</section><section className="container mr-auto ml-auto pt-8 md:pt-12 pr-6 pl-6">
<div className="max-w-6xl mr-auto ml-auto">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
<div>
<h2 className="tracking-tight text-[28px] md:text-[32px] mb-2 text-white" style={{fontFamily: `'Lora', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`, fontWeight: `400`}}>
          Featured Work
        </h2>
<p className="text-[15px] md:text-[16px] text-white/80" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
          A glimpse into realities we’ve already shipped.
        </p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[14px] transition-colors shadow-sm default border-neutral-800/80 text-white hover:bg-white/10 hover:border-neutral-700" href="#" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
        View all work
        <svg className="lucide lucide-arrow-right h-[16px] w-[16px]" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
<div className="rounded-xl border overflow-hidden transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<img alt="Quantum commerce platform" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" />
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="text-[12px] px-2 py-1 rounded-md border default border-neutral-800/80 text-white/80" style={{fontFamily: `Inter, system-ui`, fontWeight: `400`}}>Ecommerce</span>
<span className="text-[12px] px-2 py-1 rounded-md border default border-neutral-800/80 text-white/80" style={{fontFamily: `Inter, system-ui`, fontWeight: `400`}}>AI</span>
</div>
<p className="tracking-tight text-[18px] mb-1 text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>Photon Storefront</p>
<p className="text-[14px] text-white/75" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>A zero-latency retail universe syncing millions of SKUs across dimensions.</p>
</div>
</div>
<div className="rounded-xl border overflow-hidden transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<img alt="Neural interface dashboard" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" />
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="text-[12px] px-2 py-1 rounded-md border default border-neutral-800/80 text-white/80" style={{fontFamily: `Inter, system-ui`, fontWeight: `400`}}>Neural</span>
<span className="text-[12px] px-2 py-1 rounded-md border default border-neutral-800/80 text-white/80" style={{fontFamily: `Inter, system-ui`, fontWeight: `400`}}>Realtime</span>
</div>
<p className="tracking-tight text-[18px] mb-1 text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>Synapse Console</p>
<p className="text-[14px] text-white/75" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Thought-to-action interface with sub-millisecond feedback loops.</p>
</div>
</div>
<div className="rounded-xl border overflow-hidden transition-colors shadow-sm default border-neutral-800/80 hover:bg-white/10 hover:border-neutral-700" style={{}}>
<img alt="Quantum simulation canvas" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" />
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="text-[12px] px-2 py-1 rounded-md border default border-neutral-800/80 text-white/80" style={{fontFamily: `Inter, system-ui`, fontWeight: `400`}}>Quantum</span>
<span className="text-[12px] px-2 py-1 rounded-md border default border-neutral-800/80 text-white/80" style={{fontFamily: `Inter, system-ui`, fontWeight: `400`}}>Research</span>
</div>
<p className="tracking-tight text-[18px] mb-1 text-white" style={{fontFamily: `'Lora', ui-serif`, fontWeight: `400`}}>Qubit Canvas</p>
<p className="text-[14px] text-white/75" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Interactive modeling suite for multi-state computation flows.</p>
</div>
</div>
</div>
<div className="mt-12 border-t border-neutral-800/80" style={{}}></div>
<div className="overflow-hidden default border-0 rounded-xl mt-10 shadow-sm" style={{}}>
<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-none">

<article className="group relative overflow-hidden sm:p-8 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm default border-white/10" style={{}}>
<div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" style={{}}></div>
<div className="flex gap-4 items-start">
<div className="relative">
<div className="grid h-12 w-12 place-items-center rounded-full ring-1 default ring-white/15">
<svg className="lucide lucide-zap h-5 w-5 text-indigo-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="pointer-events-none absolute -inset-4 rounded-full border border-white/5" style={{}}></div>
</div>
</div>
<h2 className="mt-6 text-[22px] sm:text-[24px] font-semibold tracking-tight text-white">
      Plan sprints without chaos
    </h2>
<p className="mt-3 text-slate-400" style={{}}>
      Drag initiatives onto your calendar and auto‑balance workload across the week—no spreadsheets required.
    </p>
</article>

<article className="group relative overflow-hidden rounded-2xl border p-6 sm:p-8 backdrop-blur-sm default border-white/10" style={{}}>
<div className="absolute right-[-20%] top-[-30%] h-64 w-64 rounded-full blur-3xl bg-cyan-400/10" style={{}}></div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="grid h-12 w-12 place-items-center rounded-full ring-1 default ring-white/15">
<svg className="lucide lucide-notebook-pen h-5 w-5 text-cyan-300" data-lucide="notebook-pen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div className="pointer-events-none absolute -inset-4 rounded-full border border-white/5" style={{}}></div>
</div>
</div>
<h2 className="mt-6 text-[22px] sm:text-[24px] font-semibold tracking-tight text-white">
      Notes that write themselves
    </h2>
<p className="mt-3 text-slate-400" style={{}}>
      Auto‑capture highlights for every session and keep everything searchable—zero templates to babysit.
    </p>
</article>

<article className="group relative overflow-hidden sm:p-8 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm default border-white/10" style={{}}>
<div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" style={{}}></div>
<div className="flex gap-4 items-start">
<div className="relative">
<div className="grid h-12 w-12 place-items-center rounded-full ring-1 default ring-white/15">
<svg className="lucide lucide-target h-5 w-5 text-fuchsia-300" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
</div>
<div className="pointer-events-none absolute -inset-4 rounded-full border border-white/5" style={{}}></div>
</div>
</div>
<h2 className="mt-6 text-[22px] sm:text-[24px] font-semibold tracking-tight text-white">
      Cut interruptions, stay in flow
    </h2>
<p className="mt-3 text-slate-400" style={{}}>
      Route pings to Focus Mode and surface only what’s urgent when you’re ready.
    </p>
<div className="mt-5 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 default text-slate-300 ring-white/10" style={{}}>
                FlowChat
                <span className="ml-1 rounded-full px-2 py-0.5 text-[10px] ring-1 default text-slate-300 ring-white/10" style={{}}>Soon</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 default text-slate-300 ring-white/10" style={{}}>
                Orbit Calls
                <span className="ml-1 rounded-full px-2 py-0.5 text-[10px] ring-1 default text-slate-300 ring-white/10" style={{}}>Soon</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 default text-slate-300 ring-white/10" style={{}}>
                Threadline
                <span className="ml-1 rounded-full px-2 py-0.5 text-[10px] ring-1 default text-slate-300 ring-white/10" style={{}}>Soon</span>
</span>
</div>
</article>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 default border-neutral-800/80 border rounded-xl mt-10 pt-4 pr-5 pb-4 pl-5 shadow-sm items-center justify-between" style={{}}>
<p className="text-[16px] text-white/85" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
        Ready to architect your next breakthrough?
      </p>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[14px] transition-colors shadow-sm default border-neutral-800/80 text-white hover:bg-white/10 hover:border-neutral-700" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
          Our Services
          <svg className="lucide lucide-layers h-[16px] w-[16px] text-amber-500" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
<button className="inline-flex gap-2 text-[14px] transition-colors bg-amber-500 rounded-md px-4 py-2 shadow-sm items-center justify-center hover:bg-amber-400 text-black" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
          Start a Project
          <svg className="lucide lucide-sparkles h-[16px] w-[16px]" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</button>
</div>
</div>
</div><section className="container mr-auto ml-auto pt-8 md:pt-12 pr-6 pl-6">
<div className="max-w-6xl mr-auto ml-auto">
<div className="flex flex-col sm:flex-row sm:items-end gap-4 items-start justify-between">
<div className="">
<h2 className="tracking-tight text-[28px] md:text-[32px] mb-2 text-white" style={{fontFamily: `'Lora', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`, fontWeight: `400`}}>
          Our Process
        </h2>
<p className="text-[15px] md:text-[16px] text-white/80" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
          A design thinking framework that moves from ambiguity to outcomes—fast.
        </p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[14px] transition-colors shadow-sm default border-neutral-800/80 text-white hover:bg-white/10 hover:border-neutral-700" href="#" style={{fontFamily: `Inter, system-ui`, fontWeight: `500`}}>
        Download playbook
        <svg className="lucide lucide-file-down h-[16px] w-[16px]" data-lucide="file-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</a>
</div>
<div className="overflow-hidden default border-neutral-800/80 border-0 rounded-xl mt-8 shadow-sm" style={{}}>
<div className="col-span-12 md:col-span-10 md:col-start-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="fade-in-up bg-[url(/assets/30eeab2d-e97c-4b45-b740-6695c7862813_1600w.jpg)] bg-cover border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6 border-zinc-800" style={{}}>
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center text-sm font-medium font-geist border-neutral-700" style={{}}>
            01</div>
<h3 className="text-2xl font-light font-playfair">Research & Discovery</h3>
</div>
<p className="leading-relaxed font-geist pl-16 text-neutral-300/80" style={{}}>
          Deep dive into user needs, business goals, and market landscape through interviews, surveys, and competitive
          analysis to establish a solid foundation.
        </p>
<div className="pl-16">
<div className="space-y-2 text-sm font-geist text-neutral-400" style={{}}>
<div className="">• User interviews & surveys</div>
<div className="">• Competitive analysis</div>
<div className="">• Stakeholder workshops</div>
<div className="">• Requirements gathering</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-1 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6 visible border-zinc-800" style={{}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border flex items-center justify-center text-sm font-medium font-geist border-neutral-700" style={{}}>
            02</div>
<h3 className="text-2xl font-light font-playfair">Define & Strategize</h3>
</div>
<p className="leading-relaxed font-geist pl-16 text-neutral-300/80" style={{}}>
          Synthesize research findings into actionable insights, define user personas, and establish clear design
          principles and success metrics.
        </p>
<div className="pl-16">
<div className="space-y-2 text-sm font-geist text-neutral-400" style={{}}>
<div className="">• User personas & journeys</div>
<div className="">• Problem definition</div>
<div className="">• Design principles</div>
<div className="">• Success metrics</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-2 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6 visible border-zinc-800" style={{}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border flex items-center justify-center text-sm font-medium font-geist border-neutral-700" style={{}}>
            03</div>
<h3 className="text-2xl font-light font-playfair">Ideate & Prototype</h3>
</div>
<p className="leading-relaxed font-geist pl-16 text-neutral-300/80" style={{}}>
          Generate multiple solutions through sketching and ideation, then create low to high-fidelity prototypes for
          testing and validation.
        </p>
<div className="pl-16">
<div className="space-y-2 text-sm font-geist text-neutral-400" style={{}}>
<div className="">• Sketching & wireframes</div>
<div className="">• Information architecture</div>
<div className="">• Interactive prototypes</div>
<div className="">• Design iterations</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-3 bg-[url(/assets/d332ff93-b258-4594-bf65-7ccd8793ff59_1600w.jpg)] bg-cover border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6 visible border-zinc-800" style={{}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border flex items-center justify-center text-sm font-medium font-geist border-neutral-700" style={{}}>
            04</div>
<h3 className="text-2xl font-light font-playfair">Test & Refine</h3>
</div>
<p className="leading-relaxed font-geist pl-16 text-neutral-300/80" style={{}}>
          Validate designs through user testing, gather feedback, and iterate based on insights to ensure the solution
          meets user needs effectively.
        </p>
<div className="pl-16">
<div className="space-y-2 text-sm font-geist text-neutral-400" style={{}}>
<div className="">• Usability testing</div>
<div className="">• A/B testing</div>
<div className="">• Design handoff</div>
<div className="">• Post-launch analysis</div>
</div>
</div>
</div>
</div><div className="fade-in-up mb-16 visible">
</div>
</div></div>
</div>
</section>
</section>

<footer className="container mx-auto px-6 pb-10">
<div className="rounded-xl border backdrop-blur-xl px-5 py-4 shadow-sm flex items-center justify-between default border-neutral-800/80" style={{}}>
<p className="text-[14px] text-white/70" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>
          © 2025 Quantum Design. All rights reserved.
        </p>
<div className="hidden sm:flex items-center gap-4">
<a className="text-[14px] transition-colors text-white/70 hover:text-white" href="#" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Privacy</a>
<span className="h-4 w-px bg-neutral-800/80" style={{}}></span>
<a className="text-[14px] transition-colors text-white/70 hover:text-white" href="#" style={{fontFamily: `'Inter', system-ui`, fontWeight: `400`}}>Terms</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
