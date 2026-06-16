import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Lucide icons init
  lucide.createIcons();

  // Particles.js config
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 40, "density": { "enable": true, "value_area": 900 } },
      "color": { "value": ["#34BBFF", "#4EFB7F", "#24272A"] },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.18, "random": true },
      "size": { "value": 6, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#34BBFF",
        "opacity": 0.08,
        "width": 1
      },
      "move": { "enable": true, "speed": 1.3, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": false }
      },
      "modes": {
        "repulse": { "distance": 63, "duration": 0.4 }
      }
    },
    "retina_detect": true
  });

  // Chart.js Pie for desktop
  const purityPieChart = new Chart(document.getElementById('purityPieChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Valid', 'Missing', 'Anomaly', 'Rejected'],
      datasets: [{
        data: [76, 12, 8, 4],
        backgroundColor: ['#4EFB7F', '#34BBFF', '#F4C15C', '#FF5C94'],
        borderWidth: 2,
        borderColor: ['#24272A', '#24272A', '#24272A', '#24272A'],
        hoverOffset: 14,
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(ctx) {
              return ctx.label + ': ' + ctx.parsed + '%';
            }
          }
        }
      }
    }
  });

  // Chart.js Pie for mobile
  const criMobilePieChart = new Chart(document.getElementById('criMobilePieChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Valid', 'Missing', 'Anomaly', 'Rejected'],
      datasets: [{
        data: [76, 12, 8, 4],
        backgroundColor: ['#4EFB7F', '#34BBFF', '#F4C15C', '#FF5C94'],
        borderWidth: 2,
        borderColor: ['#24272A', '#24272A', '#24272A', '#24272A'],
        hoverOffset: 12,
      }]
    },
    options: {
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(ctx) {
              return ctx.label + ': ' + ctx.parsed + '%';
            }
          }
        }
      }
    }
  });

  // Tooltip logic
  const tooltip = document.getElementById('tooltip');
  let tooltipTimeout;
  document.querySelectorAll('[title]').forEach(el => {
    el.addEventListener('mouseenter', e => {
      tooltip.textContent = el.getAttribute('title');
      tooltip.style.display = 'block';
      const rect = el.getBoundingClientRect();
      tooltip.style.left = (rect.left + window.scrollX + rect.width/2 - tooltip.offsetWidth/2) + 'px';
      tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight - 10) + 'px';
    });
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      tooltip.style.left = (rect.left + window.scrollX + rect.width/2 - tooltip.offsetWidth/2) + 'px';
      tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight - 10) + 'px';
    });
    el.addEventListener('mouseleave', e => {
      tooltipTimeout = setTimeout(() => tooltip.style.display = 'none', 80);
    });
  });

  // State toggle: just demo, not full logic
  document.querySelectorAll('.state-toggle input[type="radio"]').forEach((radio, idx, arr) => {
    radio.addEventListener('change', e => {
      arr.forEach(r => r.nextElementSibling.classList.remove('active'));
      if (radio.checked) {
        radio.nextElementSibling.classList.add('active');
      }
    });
  });

  // Mode toggle logic
  document.querySelectorAll('.mode-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.mode-toggle-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="particles-js" style={{position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: '0'}}><canvas className="particles-js-canvas-el" height="1606" style={{width: '100%', height: '100%'}} width="2992"></canvas></div>

<div className="desktop-only flex flex-col w-full min-h-screen z-10 relative">

<header className="flex items-center justify-between px-8 py-4 glass neon-border shadow-md" style={{margin: '1.5rem 2rem 0 2rem'}}>
<div className="flex items-center gap-4 fade-in-stagger" style={{animationDelay: '0.08s'}}>
<svg fill="none" height="40" id="logo" viewbox="0 0 48 48" width="40">
<circle cx="24" cy="24" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" fill="#101216" r="23" stroke="#34BBFF" strokeWidth="2" style={{-DarkreaderInlineStroke: 'var(--darkreader-text-34bbff, #3ebeff)', -DarkreaderInlineFill: 'var(--darkreader-text-101216, #dcd9d4)'}}></circle>
<circle cx="24" cy="24" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" fill="#101216" r="13" stroke="#4EFB7F" strokeWidth="2" style={{-DarkreaderInlineStroke: 'var(--darkreader-text-4efb7f, #51fb81)', -DarkreaderInlineFill: 'var(--darkreader-text-101216, #dcd9d4)'}}></circle>
<path d="M24 11v13l11 8" data-darkreader-inline-stroke="" stroke="#4EFB7F" strokeLinecap="round" strokeWidth="2.2" style={{-DarkreaderInlineStroke: 'var(--darkreader-text-4efb7f, #51fb81)'}}></path>
</svg>
<h1 className="tracking-tight" data-darkreader-inline-color="" id="aura-emc2fps7v" style={{fontFamily: '"IBM Plex Sans", sans-serif', fontSize: '2.15rem', fontWeight: '600', letterSpacing: '-0.025em', color: 'rgb(184, 249, 255)', marginRight: '1.5rem', marginLeft: '0.5rem', textShadow: 'rgba(52, 187, 255, 0.125) 0px 2px 7px', -DarkreaderInlineColor: 'var(--darkreader-text-b8f9ff, #9af6ff)'}}>CASO Studio: Data Refinery Panel</h1>
</div>
<div className="flex items-center gap-5 fade-in-stagger" style={{animationDelay: '0.19s'}}>

<select className="dropdown hover-outline" title="Select Dataset Source">
<option>CSV Upload: sensors_Q1_2024.csv</option>
<option>SQL: twinarc_sensor_db.table</option>
<option>Streaming API: live/well_02</option>
</select>

<div className="mode-toggle">
<button className="mode-toggle-btn active">Live</button>
<button className="mode-toggle-btn">Snapshot</button>
<button className="mode-toggle-btn">Test Mode</button>
</div>

<div className="flex items-center gap-1" title="Dataset Health (0–100)">
<div className="health-gauge-circle">
<div className="health-gauge-inner">76</div>
</div>
<span className="text-[#4EFB7F] font-semibold" style={{fontFamily: '\'IBM Plex Sans\'', fontSize: '1.07rem'}}>Healthy</span>
</div>

<button className="icon-btn hover-outline" title="Load a new dataset">
<svg className="lucide lucide-database" data-darkreader-inline-stroke="" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '19px', height: '19px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Load New Dataset
      </button>
<button className="icon-btn hover-outline" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'linear-gradient(90deg, rgba(52, 187, 255, 0.2) 0%, rgba(78, 251, 127, 0.2) 100%)', -DarkreaderInlineBgimage: 'linear-gradient(90deg, var(--darkreader-background-34bbff33, rgba(0, 115, 173, 0.2)) 0%, var(--darkreader-background-4efb7f33, rgba(4, 156, 74, 0.2)) 100%)', -DarkreaderInlineBgcolor: 'initial'}} title="Run Quick Audit">
<svg className="lucide lucide-activity" data-darkreader-inline-stroke="" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '19px', height: '19px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Quick Audit
      </button>
</div>
</header>
<main className="flex flex-1 gap-8 px-4 py-5" style={{marginTop: '1.5rem'}}>

<aside className="relative flex flex-col items-center min-w-[240px] max-w-[260px] z-20 fade-in-stagger" style={{animationDelay: '0.21s'}}>
<div className="pipeline-trail"></div>
<div className="flex flex-col items-center gap-0 z-10">
<div className="pipeline-progress-dot"></div>

<div className="fade-in-stagger" style={{gap: '0.2rem', display: 'flex', flexDirection: 'column'}}>
<div className="nav-step active glass card-outline p-4 flex flex-col items-center w-[210px] mb-0 relative" title="Scan for data purity and missingness">
<svg className="lucide lucide-microscope" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(78, 251, 127)', width: '26px', height: '26px', marginBottom: '7px', -DarkreaderInlineColor: 'var(--darkreader-text-4efb7f, #51fb81)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
<span className="font-semibold text-[#B4E3FC] text-[1.05rem]">Source Purity Scanner</span>
<span className="text-xs text-[#50FFCF] mt-1">🔬</span>
</div>
<div className="nav-arrow"></div>
<div className="nav-stepactive glass card-outline p-4 flex flex-col items-center w-[210px] mb-0 relative" title="Visualize and resolve data gaps">
<svg className="lucide lucide-zoom-in" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 187, 255)', width: '26px', height: '26px', marginBottom: '7px', -DarkreaderInlineColor: 'var(--darkreader-text-34bbff, #3ebeff)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
<span className="font-semibold text-[#B4E3FC] text-[1.05rem]">Gap Inspector</span>
<span className="text-xs text-[#34BBFF] mt-1">👁️‍🗨️</span>
</div>
<div className="nav-arrow"></div>
<div className="nav-step glass card-outline p-4 flex flex-col items-center w-[210px] mb-0 relative" title="Detect and correct anomalies">
<svg className="lucide lucide-wand-2" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(78, 251, 127)', width: '26px', height: '26px', marginBottom: '7px', -DarkreaderInlineColor: 'var(--darkreader-text-4efb7f, #51fb81)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="font-semibold text-[#B4E3FC] text-[1.05rem]">Anomaly Fixer</span>
<span className="text-xs text-[#50FFCF] mt-1">✨</span>
</div>
<div className="nav-arrow"></div>
<div className="nav-step glass card-outline p-4 flex flex-col items-center w-[210px] mb-0 relative" title="Configure feature engineering">
<svg className="lucide lucide-settings" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 187, 255)', width: '26px', height: '26px', marginBottom: '7px', -DarkreaderInlineColor: 'var(--darkreader-text-34bbff, #3ebeff)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-semibold text-[#B4E3FC] text-[1.05rem]">Feature Engineer</span>
<span className="text-xs text-[#34BBFF] mt-1">⚙️</span>
</div>
<div className="nav-arrow"></div>
<div className="nav-step glass card-outline p-4 flex flex-col items-center w-[210px] mb-0 relative" title="Final output and export">
<svg className="lucide lucide-share" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(78, 251, 127)', width: '26px', height: '26px', marginBottom: '7px', -DarkreaderInlineColor: 'var(--darkreader-text-4efb7f, #51fb81)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span className="font-semibold text-[#B4E3FC] text-[1.05rem]">Export/Deploy</span>
<span className="text-xs text-[#50FFCF] mt-1">🚀</span>
</div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col gap-7 z-10">
<div className="panel-label card-anim" style={{animationDelay: '0.25s'}}>
        Source Purity Scanner
      </div>
<div className="glass neon-border card-outline p-7 card-anim fade-in-stagger" style={{animationDelay: '0.28s'}}>

<div className="flex items-center justify-between flex-wrap gap-6">
<div className="flex items-center gap-4">
<svg className="lucide lucide-microscope" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(78, 251, 127)', width: '32px', height: '32px', -DarkreaderInlineColor: 'var(--darkreader-text-4efb7f, #51fb81)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
<div>
<div data-darkreader-inline-color="" style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(184, 249, 255)', -DarkreaderInlineColor: 'var(--darkreader-text-b8f9ff, #9af6ff)'}}>
                Data Source Health Overview
              </div>
<div data-darkreader-inline-color="" style={{color: 'rgb(164, 247, 228)', fontSize: '1.03rem', -DarkreaderInlineColor: 'var(--darkreader-text-a4f7e4, #90f5de)'}}>
<span data-darkreader-inline-color="" style={{color: 'rgb(78, 251, 127)', -DarkreaderInlineColor: 'var(--darkreader-text-4efb7f, #51fb81)'}}>76%</span> valid, <span data-darkreader-inline-color="" style={{color: 'rgb(52, 187, 255)', -DarkreaderInlineColor: 'var(--darkreader-text-34bbff, #3ebeff)'}}>12%</span> missing, <span data-darkreader-inline-color="" style={{color: 'rgb(244, 193, 92)', -DarkreaderInlineColor: 'var(--darkreader-text-f4c15c, #f4c15d)'}}>8%</span> anomalous, <span data-darkreader-inline-color="" style={{color: 'rgb(255, 92, 148)', -DarkreaderInlineColor: 'var(--darkreader-text-ff5c94, #ff5a93)'}}>4%</span> rejected
              </div>
</div>
</div>
<div className="flex gap-3 items-center">
<div className="state-toggle flex items-center">
<input checked="" id="purity-mode-1" name="purity-mode" type="radio"/>
<label htmlFor="purity-mode-1">Summary</label>
<input id="purity-mode-2" name="purity-mode" type="radio"/>
<label htmlFor="purity-mode-2">By Column</label>
<input id="purity-mode-3" name="purity-mode" type="radio"/>
<label htmlFor="purity-mode-3">By Row</label>
</div>
<button className="icon-btn hover-outline" title="Export Purity Report">
<svg className="lucide lucide-download-cloud" data-darkreader-inline-stroke="" data-lucide="download-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg> Export Report
            </button>
</div>
</div>
<div className="divider"></div>
<div className="flex flex-col md:flex-row gap-10 mt-4">

<div className="flex-1 min-w-[290px] flex flex-col gap-2 items-center">
<canvas aria-label="Purity breakdown pie chart" height="1044" id="purityPieChart" role="img" style={{display: 'block', boxSizing: 'border-box', height: '522px', width: '522px'}} width="1044"></canvas>
</div>

<div className="flex-1 min-w-[315px] flex flex-col gap-3 justify-center">
<div className="text-[#B8F9FF] font-semibold mb-1 text-lg">Key Data Stats</div>
<div className="grid grid-cols-2 gap-4 text-[1.07rem]">
<div>
<span className="text-[#4EFB7F] font-bold">10,240</span>
<span className="text-[#B4E3FC] text-sm block"> Valid Rows </span>
</div>
<div>
<span className="text-[#34BBFF] font-bold">1,627</span>
<span className="text-[#B4E3FC] text-sm block"> Missing Entries </span>
</div>
<div>
<span className="text-[#F4C15C] font-bold">1,092</span>
<span className="text-[#B4E3FC] text-sm block"> Anomalies </span>
</div>
<div>
<span className="text-[#FF5C94] font-bold">547</span>
<span className="text-[#B4E3FC] text-sm block"> Rejected </span>
</div>
</div>
<div className="divider"></div>
<div className="flex flex-wrap gap-2 items-center">
<span className="text-xs text-[#B4E3FC]">Last scanned: <span className="text-[#4EFB7F] font-semibold">2 min ago</span></span>
<span className="text-xs text-[#34BBFF] ml-3">Source: sensors_Q1_2024.csv</span>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-4 mt-2 fade-in-stagger" style={{animationDelay: '0.35s'}}>
<button className="icon-btn hover-outline" title="Impute missing values"><svg className="lucide lucide-wand-sparkles" data-darkreader-inline-stroke="" data-lucide="wand-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg> Impute Missing</button>
<button className="icon-btn hover-outline" title="View anomaly breakdown"><svg className="lucide lucide-alert-triangle" data-darkreader-inline-stroke="" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg> Anomaly Breakdown</button>
<button className="icon-btn hover-outline" title="Configure source"><svg className="lucide lucide-settings-2" data-darkreader-inline-stroke="" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg> Source Config</button>
<button className="icon-btn hover-outline" title="View full audit log"><svg className="lucide lucide-clipboard-list" data-darkreader-inline-stroke="" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg> Audit Log</button>
</div>
</section>
</main>
</div>

<div className="mobile-only w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 z-10 relative">
<div className="glass neon-border card-outline px-6 py-7 w-full max-w-md mt-8 card-anim" style={{animationDelay: '0.11s'}}>
<div className="flex items-center gap-3 mb-5">
<svg className="lucide lucide-bar-chart-3" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 187, 255)', width: '28px', height: '28px', -DarkreaderInlineColor: 'var(--darkreader-text-34bbff, #3ebeff)', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<div>
<div className="text-[#B8F9FF] font-semibold text-xl mb-0.5">Executive CRI View</div>
<div className="text-[#B4E3FC] text-[1.02rem]">Data Quality: <span className="font-bold text-[#4EFB7F]">76% Healthy</span></div>
</div>
</div>
<div className="divider"></div>
<canvas aria-label="Purity breakdown pie chart" className="mx-auto mt-4" height="0" id="criMobilePieChart" role="img" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
<div className="flex flex-col gap-2 mt-7">
<div className="flex items-center gap-2 text-[1.08rem]">
<span className="inline-block w-2 h-2 rounded-full bg-[#4EFB7F]"></span>
<span>Valid: <span className="font-bold">76%</span></span>
</div>
<div className="flex items-center gap-2 text-[1.08rem]">
<span className="inline-block w-2 h-2 rounded-full bg-[#34BBFF]"></span>
<span>Missing: <span className="font-bold">12%</span></span>
</div>
<div className="flex items-center gap-2 text-[1.08rem]">
<span className="inline-block w-2 h-2 rounded-full bg-[#F4C15C]"></span>
<span>Anomaly: <span className="font-bold">8%</span></span>
</div>
<div className="flex items-center gap-2 text-[1.08rem]">
<span className="inline-block w-2 h-2 rounded-full bg-[#FF5C94]"></span>
<span>Rejected: <span className="font-bold">4%</span></span>
</div>
</div>
<div className="divider"></div>
<div className="flex items-center justify-between mt-5">
<span className="text-[#B4E3FC] text-xs">Last scan: <span className="text-[#4EFB7F] font-semibold">2 min ago</span></span>
<button className="icon-btn hover-outline text-xs py-1 px-2" style={{fontSize: '0.99rem'}}><svg className="lucide lucide-download-cloud" data-darkreader-inline-stroke="" data-lucide="download-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', -DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg> Export</button>
</div>
</div>
</div>

<div className="tooltip" id="tooltip" style={{display: 'none', left: '433.961px', top: '87.5509px'}}>Select Dataset Source</div>


    </>
  );
}
