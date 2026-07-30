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

      lucide.createIcons();

      particlesJS('particles-bg', {
        particles: {
          number: { value: 68, density: { enable: true, value_area: 900 } },
          color: { value: ['#1fc8ff', '#38f9d7', '#43e97b'] },
          shape: { type: 'circle' },
          opacity: { value: 0.22, random: true },
          size: { value: 2.7, random: true },
          line_linked: { enable: true, distance: 90, color: '#1fc8ff', opacity: 0.19, width: 1.1 },
          move: { enable: true, speed: 1.1, direction: 'none', straight: false }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false }, resize: true },
          modes: { repulse: { distance: 60, duration: 0.2 } }
        },
        retina_detect: true
      });

      // Chart.js: Causal Strength Bar
      new Chart(document.getElementById('bar-causal-strength'), {
        type: 'bar',
        data: {
          labels: ['Production→Yield','Flow→Yield','Temp→Flow','Flow→Pressure','Confounder→Outcome'],
          datasets: [{
            label: 'Influence',
            data: [0.81, 0.75, 0.68, 0.61, 0.56],
            backgroundColor: [
              'rgba(31,200,255,0.75)',
              'rgba(67,233,123,0.75)',
              'rgba(255,176,50,0.65)',
              'rgba(246,79,152,0.65)',
              'rgba(67,233,123,0.55)'
            ],
            borderRadius: 6,
            barPercentage: 0.65,
            categoryPercentage: 0.7
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { color: "rgba(31,200,255,0.08)" },
              ticks: { color: "#c7f3ff", font: { weight: '600', size: 13 } }
            },
            y: {
              grid: { color: "rgba(31,200,255,0.06)" },
              ticks: { color: "#a4c8e7", font: { weight: '500', size: 12 } },
              min: 0, max: 1
            }
          }
        }
      });

      // Chart.js: Causal Drift Timeline
      new Chart(document.getElementById('line-causal-drift'), {
        type: 'line',
        data: {
          labels: ['T-5','T-4','T-3','T-2','T-1','Now'],
          datasets: [{
            label: 'Drift',
            data: [0.24,0.33,0.44,0.38,0.61,0.51],
            borderColor: '#1fc8ff',
            backgroundColor: 'rgba(31,200,255,0.08)',
            fill: true,
            pointBackgroundColor: ['#1fc8ff','#38f9d7','#38f9d7','#1fc8ff','#43e97b','#ffb032'],
            pointRadius: [5,5,5,5,9,6],
            tension: 0.42
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: "rgba(31,200,255,0.08)" }, ticks: { color: "#a4c8e7" } },
            y: { grid: { color: "rgba(31,200,255,0.06)" }, ticks: { color: "#a4c8e7" }, min: 0, max: 1 }
          }
        }
      });

      // Chart.js: Confounder Detector (Bar)
      new Chart(document.getElementById('confounder-graph'), {
        type: 'bar',
        data: {
          labels: ['Ambient Temp', 'Noise', 'Humidity', 'Operator'],
          datasets: [{
            label: 'p-value',
            data: [0.03, 0.29, 0.05, 0.16],
            backgroundColor: [
              'rgba(255,176,50,0.8)',
              'rgba(31,200,255,0.5)',
              'rgba(246,79,152,0.45)',
              'rgba(43,233,123,0.65)'
            ],
            borderRadius: 7}]}})
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
      
<a className="skip-link" href="#maincontent">Skip to main content</a>

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none" id="particles-bg"></div>

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: `radial-gradient(at 80% 10%, rgba(30, 180, 255, 0.14) 0px, transparent 70%)`, '--darkreader-inline-bgimage': `radial-gradient(at 80% 10%, var(--darkreader-background-1eb4ff24, rgba(0, 124, 186, 0.14)) 0px, var(--darkreader-background-00000000, rgba(0, 0, 0, 0)) 70%)`, '--darkreader-inline-bgcolor': `initial`}}></div>

<header aria-label="Main Navigation" className="relative z-10 fade-in fade-in-stagger-1">
<nav aria-label="Primary" className="flex items-center justify-between px-8 py-3 glass glass-outline mx-4 mt-4" role="navigation">

<div className="flex items-center space-x-4">
<img alt="TwinARC Logo" className="h-9 w-9 rounded-lg border border-[#1fc8ff] shadow-neon-blue" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=48&h=48&facepad=2&q=80" />
<span aria-current="page" className="text-2xl font-semibold tracking-tight text-white select-none">Causal Brain Suite</span>
</div>

<nav aria-label="Breadcrumb" className="flex items-center text-sm text-[#a4c8e7] font-medium space-x-2">
<span className="hover:text-[#1fc8ff] cursor-pointer">Home</span>
<lucide-chevron-right className="w-4 h-4 opacity-60"></lucide-chevron-right>
<span className="hover:text-[#1fc8ff] cursor-pointer">Causal Studio</span>
<lucide-chevron-right className="w-4 h-4 opacity-60"></lucide-chevron-right>
<span aria-current="page" className="text-white cursor-default">Causal Brain Suite</span>
</nav>

<div className="relative group" tabindex="0">
<button aria-expanded="false" aria-haspopup="true" aria-label="User menu" className="flex items-center space-x-2 hover:bg-[#1fc8ff1a] px-2.5 py-1.5 rounded-md transition focus:ring-2 focus:ring-[#1fc8ff] focus:outline-none focus:ring-offset-2">
<img alt="User avatar" className="h-8 w-8 rounded-full border border-[#38f9d7]" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=32&h=32&facepad=2&q=80" />
<span className="font-medium text-base">Dr. Aria Jain</span>
<lucide-chevron-down className="w-4 h-4"></lucide-chevron-down>
</button>
<div aria-label="User menu" className="absolute right-0 mt-2 w-44 glass glass-outline shadow-xl hidden group-focus-within:block group-hover:block transition" role="menu">
<div className="py-2">
<a className="block px-5 py-2 text-sm hover:bg-[#1fc8ff1a] transition focus:bg-[#1fc8ff1a] focus:outline-none" href="#" role="menuitem">Profile</a>
<a className="block px-5 py-2 text-sm hover:bg-[#1fc8ff1a] transition focus:bg-[#1fc8ff1a] focus:outline-none" href="#" role="menuitem">Settings</a>
<div className="border-t border-[#1fc8ff22] my-2"></div>
<a className="block px-5 py-2 text-sm text-[#f64f98] hover:bg-[#f64f981a] focus:bg-[#f64f981a] transition focus:outline-none" href="#" role="menuitem">Sign Out</a>
</div>
</div>
</div>
</nav>
</header>

<main className="relative z-5 grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-5 gap-y-0 h-[calc(100vh-90px)] fade-in fade-in-stagger-2 pt-6 pr-4 pb-2 pl-4" tabindex="-1">

<aside aria-label="Node controls" className="col-span-2 flex flex-col glass glass-outline p-4 gap-4 min-w-[252px] max-w-xs h-full fade-in fade-in-stagger-3">

<div className="">
<label className="block text-sm font-medium text-[#8bd8fd] tracking-tight mb-2" htmlFor="node-search">Node Search</label>
<div className="relative flex items-center">
<lucide-search className="w-4 h-4 absolute left-2 top-2.5 text-[#38f9d7]">
<input aria-label="Search nodes" className="bg-[#20254a] pl-8 pr-3 py-2 w-full rounded-lg border border-[#193d86] focus:outline-none focus:border-[#1fc8ff] text-[#c7f3ff] placeholder-[#7ddff5] transition focus:ring-2 focus:ring-[#1fc8ff]" id="node-search" placeholder="Find node..." type="text" />
</lucide-search></div>
</div>

<div aria-label="Node filters" className="flex space-x-2" role="group">
<button aria-pressed="true" className="flex items-center gap-1 px-2 py-1 rounded-md neon-blue text-xs font-semibold tracking-tight hover:outline hover:outline-2 hover:outline-[#199fff] focus:outline-none focus:ring-2 focus:ring-[#1fc8ff] transition">
<span>All</span>
</button>
<button aria-pressed="false" className="flex items-center gap-1 px-2 py-1 rounded-md text-[#1fc8ff] bg-[#1fc8ff1a] text-xs font-semibold tracking-tight hover:outline hover:outline-2 hover:outline-[#1fc8ff] focus:outline-none focus:ring-2 focus:ring-[#1fc8ff] transition">
<span className="">Cause</span>
</button>
<button aria-pressed="false" className="flex items-center gap-1 px-2 py-1 rounded-md text-[#43e97b] bg-[#43e97b1a] text-xs font-semibold tracking-tight hover:outline hover:outline-2 hover:outline-[#43e97b] focus:outline-none focus:ring-2 focus:ring-[#43e97b] transition">
<span>Mediator</span>
</button>
<button aria-pressed="false" className="flex items-center gap-1 px-2 py-1 rounded-md text-[#ffb032] bg-[#ffb0321a] text-xs font-semibold tracking-tight hover:outline hover:outline-2 hover:outline-[#ffb032] focus:outline-none focus:ring-2 focus:ring-[#ffb032] transition">
<span>Confounder</span>
</button>
<button aria-pressed="false" className="flex items-center gap-1 px-2 py-1 rounded-md text-[#f64f98] bg-[#f64f981a] text-xs font-semibold tracking-tight hover:outline hover:outline-2 hover:outline-[#f64f98] focus:outline-none focus:ring-2 focus:ring-[#f64f98] transition">
<span className="">Outcome</span>
</button>
</div>

<div className="flex-1 overflow-y-auto pr-1">
<ul aria-label="Node list" className="space-y-2">
<li aria-label="Production Rate, Cause" aria-selected="false" className="flex items-center node-cause node-hover px-2 py-2 rounded-lg transition cursor-pointer group focus:ring-2 focus:ring-[#1fc8ff] focus:outline-none" tabindex="0">
<lucide-zap aria-hidden="true" className="w-4 h-4 text-[#1fc8ff] mr-2">
<span className="flex-1 font-medium text-[#c7f3ff]">Production Rate</span>
<span className="text-xs font-normal text-[#38f9d7] px-1.5 py-0.5 rounded neon-blue">Cause</span>
</lucide-zap></li>
<li aria-label="Flow Pressure, Mediator" aria-selected="false" className="flex node-mediator node-hover transition cursor-pointer group focus:ring-2 focus:ring-[#43e97b] focus:outline-none rounded-lg pt-2 pr-2 pb-2 pl-2 items-center" tabindex="0">
</li>
<li aria-label="Ambient Temp, Confounder" aria-selected="false" className="flex node-confounder node-hover transition cursor-pointer group focus:ring-2 focus:ring-[#ffb032] focus:outline-none rounded-lg pt-2 pr-2 pb-2 pl-2 items-center" tabindex="0">
</li>
<li aria-label="Yield Quality, Outcome" aria-selected="false" className="flex items-center node-outcome node-hover px-2 py-2 rounded-lg transition cursor-pointer group focus:ring-2 focus:ring-[#f64f98] focus:outline-none" tabindex="0">
</li>
</ul>
</div>

<div className="flex justify-between pt-2 glass-divider">
<button aria-label="Add Node" className="focus-ring flex items-center gap-2 px-3 py-1.5 rounded-md neon-blue font-semibold text-sm tracking-tight hover:outline hover:outline-2 hover:outline-[#199fff] active:scale-95 transition" title="Add Node">
</button>
<button aria-label="Remove Node" className="focus-ring flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f64f981a] text-[#f64f98] font-semibold text-sm tracking-tight hover:outline hover:outline-2 hover:outline-[#f64f98] active:scale-95 transition" title="Remove Node">
</button>
<button aria-label="Highlight Path" className="focus-ring flex items-center gap-2 px-3 py-1.5 rounded-md neon-green font-semibold text-sm tracking-tight hover:outline hover:outline-2 hover:outline-[#38f9d7] active:scale-95 transition" title="Highlight Path">
</button>
</div>
</aside>

<section aria-label="DAG Explorer" className="col-span-6 flex flex-col h-full">
<div className="glass glass-outline relative flex-1 flex flex-col justify-stretch items-stretch p-4 fade-in fade-in-stagger-4">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl font-semibold tracking-tight text-white">DAG Explorer</h2>
<div className="flex items-center space-x-3">
<button aria-label="Zoom in" className="focus-ring flex items-center gap-1 px-2.5 py-1.5 rounded-md neon-blue font-medium text-xs hover:outline hover:outline-2 hover:outline-[#1fc8ff] transition" title="Zoom in">
<lucide-zoom-in className="w-4 h-4"> Zoom In
              </lucide-zoom-in></button>
<button aria-label="Zoom out" className="focus-ring flex items-center gap-1 px-2.5 py-1.5 rounded-md neon-blue font-medium text-xs hover:outline hover:outline-2 hover:outline-[#1fc8ff] transition" title="Zoom out">
</button>
<button aria-label="Reset view" className="focus-ring flex items-center gap-1 px-2.5 py-1.5 rounded-md neon-green font-medium text-xs hover:outline hover:outline-2 hover:outline-[#38f9d7] transition" title="Reset view">
</button>
</div>
</div>

<div className="relative flex-1 flex items-center justify-center min-h-[400px] z-1">
<div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: `radial-gradient(at 44% 60%, rgba(31, 200, 255, 0.1) 0px, transparent 85%)`, '--darkreader-inline-bgimage': `radial-gradient(at 44% 60%, var(--darkreader-background-1fc8ff1a, rgba(0, 140, 185, 0.1)) 0px, var(--darkreader-background-00000000, rgba(0, 0, 0, 0)) 85%)`, '--darkreader-inline-bgcolor': `initial`}}></div>
<div className="w-full h-full flex items-center justify-center" id="dag-3d-visualization">
<img alt="A stylized 3D DAG example" className="rounded-2xl shadow-xl opacity-80" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" style={{width: `82%`, height: `70%`, objectFit: `cover`, filter: `blur(0.5px) brightness(1.1)`}} />

<div aria-live="polite" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[190px] glass glass-outline px-5 py-4 rounded-xl shadow-lg fade-in fade-in-stagger-5" data-darkreader-inline-border-left="" style={{minWidth: `280px`, borderLeft: `5px solid rgb(31, 200, 255)`, '--darkreader-inline-border-left': `var(--darkreader-border-1fc8ff, #0080a9)`}}>
<div className="flex items-center gap-2 mb-1">
</div>
<div className="text-sm text-[#a4c8e7] mb-2">HSIC Score: <span className="text-[#1fc8ff] font-semibold">0.81</span></div>
<div className="flex gap-2 text-xs text-[#a4c8e7]">
<span>Connected: <span className="font-semibold text-[#38f9d7]">6 nodes</span></span>
<span>| Influence: <span className="font-semibold text-[#43e97b]">High</span></span>
</div>
</div>

<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" height="320" width="320">
<defs>
</defs>
<path fill="none" stroke="url(#edgeGlow)" strokeWidth="5" style={{filter: `blur(2.5px)`, opacity: `0.75`}}>
<animate attributename="stroke-dashoffset" dur="1.3s" from="40" repeatcount="indefinite" to="0"></animate>
</path>
</svg>
</div>
</div>
</div>
</section>

<aside aria-label="Insight Panels" className="col-span-4 flex flex-col h-full fade-in fade-in-stagger-5">
<div className="glass glass-outline flex flex-col h-full p-0">

<div className="relative flex items-center px-4 pt-4 pb-2 gap-2 glass-divider">
<button aria-controls="tab-content-strength" aria-selected="true" className="tab-btn px-4 py-2 font-semibold text-white tracking-tight rounded-lg neon-blue shadow transition outline-none focus:outline-none relative" id="tab-strength" tabindex="0">
              Causal Strength
            </button>
<button aria-controls="tab-content-drift" aria-selected="false" className="tab-btn px-4 py-2 font-semibold text-[#1fc8ff] tracking-tight rounded-lg hover:outline hover:outline-2 hover:outline-[#1fc8ff] transition outline-none relative" id="tab-drift" tabindex="0">
              Causal Drift
            </button>
<button aria-controls="tab-content-confounders" aria-selected="false" className="tab-btn px-4 py-2 font-semibold text-[#43e97b] tracking-tight rounded-lg hover:outline hover:outline-2 hover:outline-[#43e97b] transition outline-none relative" id="tab-confounders" tabindex="0">
              Confounder Detector
            </button>
<div className="tab-indicator" id="tab-indicator" style={{width: `140px`, left: `0`}}></div>
</div>

<div className="flex-1 relative overflow-y-auto">
<div aria-labelledby="tab-strength" className="px-6 py-4 fade-in fade-in-stagger-6" id="tab-content-strength" role="tabpanel">
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Top 5 Causal Influences</h3>
<div className="w-full h-44 flex items-center justify-center">
<canvas className="" id="bar-causal-strength"></canvas>
</div>
<div className="mt-4 flex justify-between text-xs text-[#a4c8e7]">
<span>Strongest: <span className="font-semibold text-[#1fc8ff]">Production Rate → Yield Quality</span></span>
<span>Updated 5 min ago</span>
</div>
</div>
<div aria-labelledby="tab-drift" className="hidden px-6 py-4 fade-in fade-in-stagger-6" id="tab-content-drift" role="tabpanel">
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Causal Drift Timeline</h3>
<div className="w-full h-40 flex items-center justify-center">
<canvas id="line-causal-drift"></canvas>
</div>
<div className="mt-4 text-xs text-[#a4c8e7]">Scroll to view timeline. Heatmap overlay indicates anomaly points.</div>
</div>
<div aria-labelledby="tab-confounders" className="hidden px-6 py-4 fade-in fade-in-stagger-6" id="tab-content-confounders" role="tabpanel">
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Confounder Test Results</h3>
<div className="w-full h-40 flex items-center justify-center">
<canvas id="confounder-graph"></canvas>
</div>
<div className="mt-4 text-xs text-[#a4c8e7]">Conditional independence tests highlight hidden confounders.</div>
</div>
</div>
</div>
</aside>

<footer aria-label="Footer toolbar" className="col-span-12 flex items-center justify-between glass glass-outline px-8 py-3 mt-4 shadow-xl fade-in fade-in-stagger-6">
<div aria-label="DAG Version Toggle" className="flex items-center gap-3" role="group">
<span className="font-medium text-sm text-[#a4c8e7]">Version:</span>
<button aria-pressed="true" className="focus-ring px-3 py-1.5 rounded-md neon-blue font-semibold text-sm tracking-tight hover:outline hover:outline-2 hover:outline-[#1fc8ff] active:scale-95 transition">Baseline</button>
<button aria-pressed="false" className="focus-ring px-3 py-1.5 rounded-md neon-green font-semibold text-sm tracking-tight hover:outline hover:outline-2 hover:outline-[#38f9d7] active:scale-95 transition">Updated</button>
<button aria-pressed="false" className="focus-ring bg-[#f64f981a] hover:outline hover:outline-2 hover:outline-[#f64f98] active:scale-95 transition text-sm font-semibold text-[#f64f98] tracking-tight rounded-md pt-1.5 pr-3 pb-1.5 pl-3">Simulated</button>
</div>
<div aria-label="Export options" className="flex items-center gap-3">
<button aria-label="Export as PNG" className="focus-ring flex items-center gap-1 px-3 py-1.5 rounded-md neon-blue font-semibold text-sm hover:outline hover:outline-2 hover:outline-[#1fc8ff] active:scale-95 transition"></button>
<button aria-label="Export as CSV" className="focus-ring flex items-center gap-1 px-3 py-1.5 rounded-md neon-blue font-semibold text-sm hover:outline hover:outline-2 hover:outline-[#1fc8ff] active:scale-95 transition"></button>
<button aria-label="Export as JSON" className="focus-ring flex items-center gap-1 px-3 py-1.5 rounded-md neon-blue font-semibold text-sm hover:outline hover:outline-2 hover:outline-[#1fc8ff] active:scale-95 transition"></button>
<button aria-label="Export as PDF" className="focus-ring flex items-center gap-1 px-3 py-1.5 rounded-md neon-blue font-semibold text-sm hover:outline hover:outline-2 hover:outline-[#1fc8ff] active:scale-95 transition"></button>
</div>
<button aria-label="Ask the DAG AI" className="focus-ring flex items-center gap-2 px-4 py-2 rounded-lg neon-green font-semibold text-base shadow outline-none hover:outline hover:outline-2 hover:outline-[#38f9d7] active:scale-95 transition">
</button>
</footer>
</main>


    </>
  );
}
