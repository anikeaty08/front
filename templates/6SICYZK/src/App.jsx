import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Chart.js: Root Cause Rank Shift
    const ctx = document.getElementById('rootCauseChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Valve', 'Temp', 'Feed', 'RPM', 'Pressure'],
        datasets: [
          {
            label: 'Before',
            data: [3, 2, 1, 4, 2],
            backgroundColor: 'rgba(62,112,255,0.23)',
            borderRadius: 6,
            borderWidth: 0,
            barPercentage: 0.45,
          },
          {
            label: 'After',
            data: [1, 1, 3, 3, 2],
            backgroundColor: 'rgba(43,242,185,0.31)',
            borderRadius: 6,
            borderWidth: 0,
            barPercentage:
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="particles-js" style={{position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none'}}></div>

<header className="glass gradient-outline w-full flex items-center px-8 py-3 justify-between fade-in" style={{zIndex: '10', position: 'relative', gap: '2rem', marginBottom: '0.75rem'}}>
<div className="flex items-center gap-5">
<span className="text-2xl font-semibold tracking-tight" id="aura-emc2g9s6s" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>TwinARC CASO Lab Console</span>
<span className="bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-200 rounded px-2 py-0.5 ml-2 text-xs font-medium text-white tracking-tight shadow-sm" style={{letterSpacing: '0.01em'}}>Reliance R&amp;D</span>
</div>
<div className="flex items-center gap-7">

<div className="relative">
<select className="custom-dropdown pr-10" id="plant-zone" style={{minWidth: '170px'}}>
<option selected="">Gasification &gt; Stage 1</option>
<option>Gasification &gt; Stage 2</option>
<option>Ammonia Loop</option>
<option>Syngas Purification</option>
</select>
<div className="dropdown-arrow" style={{right: '1.2rem'}}><svg height="16" width="16"><use href="#chevron-down"></use></svg></div>
</div>

<div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gradient-to-br from-[#1e2d4c] to-[#283558] border border-[#323b54]">
<svg data-darkreader-inline-color="" height="20" style={{color: 'rgb(126, 180, 255)', -DarkreaderInlineColor: 'var(--darkreader-text-7eb4ff, #72bbff)'}} width="20"><use href="#calendar"></use></svg>
<span className="font-medium text-sm tracking-tight text-blue-100">2024-06-20 11:00</span>
<span className="mx-1 text-blue-400 text-xs">→</span>
<span className="font-medium text-sm tracking-tight text-blue-100">2024-06-20 15:00</span>
</div>
<button className="custom-btn flex items-center gap-2">
<svg height="20" width="20"><use href="#plus-circle"></use></svg>
        New Intervention Test
      </button>
</div>
</header>
<div className="divider"></div>

<main className="main-layout grid grid-cols-[320px_1fr_340px] gap-4 pr-6 pb-24 pl-6" style={{zIndex: '2', position: 'relative'}}>

<aside className="sidebar-left glass gradient-outline flex flex-col py-4 px-3 min-w-[260px] max-w-[350px] mr-2 slide-in-left" style={{zIndex: '2'}}>
<h2 className="text-lg font-semibold tracking-tight mb-2 flex items-center gap-2">
<svg data-darkreader-inline-color="" height="20" style={{color: 'rgb(126, 180, 255)', -DarkreaderInlineColor: 'var(--darkreader-text-7eb4ff, #72bbff)'}} width="20"><use href="#settings"></use></svg>
        Intervention Toolkit
      </h2>
<div className="divider"></div>

<div className="mt-1 mb-4">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-xs text-sky-200">Editable Parameters</span>
<button className="text-xs text-cyan-300 hover:underline px-1 py-0.5 rounded" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'rgba(48, 120, 255, 0.05)', -DarkreaderInlineBgimage: 'initial', -DarkreaderInlineBgcolor: 'var(--darkreader-background-3078ff0d, rgba(0, 61, 175, 0.05))'}}>Auto-Tune</button>
</div>
<div className="flex flex-col gap-2 mb-2">
<div className="flex flex-col gap-0.5">
<label className="text-[13px] font-medium text-blue-100" htmlFor="reactor-temp">1st Reactor Temperature</label>
<input aria-label="1st Reactor Temperature" className="bg-[#19234a] border border-[#31467c] rounded px-2 py-1 text-blue-200 font-semibold focus:border-cyan-400 focus:ring-1 focus:ring-blue-300 transition-all outline-none" id="reactor-temp" max="2000" min="0" type="number" value="785"/>
</div>
<div className="flex flex-col gap-0.5">
<label className="text-[13px] font-medium text-blue-100" htmlFor="oxygen-pdi">Oxygen PDI</label>
<input aria-label="Oxygen PDI" className="bg-[#19234a] border border-[#31467c] rounded px-2 py-1 text-blue-200 font-semibold focus:border-cyan-400 focus:ring-1 focus:ring-blue-300 transition-all outline-none" id="oxygen-pdi" max="100" min="0" type="number" value="48"/>
</div>
<div className="flex flex-col gap-0.5">
<label className="text-[13px] font-medium text-blue-100" htmlFor="slurry-pdi">Slurry PDI</label>
<input aria-label="Slurry PDI" className="bg-[#19234a] border border-[#31467c] rounded px-2 py-1 text-blue-200 font-semibold focus:border-cyan-400 focus:ring-1 focus:ring-blue-300 transition-all outline-none" id="slurry-pdi" max="100" min="0" type="number" value="84"/>
</div>
</div>
</div>
<div className="divider"></div>

<div className="mb-3">
<span className="font-medium text-xs text-sky-200 mb-1 block">Test Profiles</span>
<div className="flex flex-col gap-2">
<label className="custom-checkbox">
<input checked="" type="checkbox"/>
            RIL Baseline
          </label>
<label className="custom-checkbox">
<input type="checkbox"/>
            Failure Replay
          </label>
<label className="custom-checkbox">
<input type="checkbox"/>
            AI Optimized Profile
          </label>
</div>
</div>
<div className="flex gap-2 mt-3 mb-2">
<button className="custom-btn flex-1 flex items-center gap-1 justify-center">
<svg height="18" width="18"><use href="#play"></use></svg>
          Run Simulation
        </button>
<button className="custom-btn flex-1 flex items-center gap-1 justify-center" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'linear-gradient(90deg, rgb(30, 41, 59) 0%, rgb(41, 54, 84) 100%)', -DarkreaderInlineBgimage: 'linear-gradient(90deg, var(--darkreader-background-1e293b, #18212f) 0%, var(--darkreader-background-293654, #212b43) 100%)', -DarkreaderInlineBgcolor: 'initial'}}>
<svg height="17" width="17"><use href="#refresh-ccw"></use></svg>
          Reset
        </button>
</div>
</aside>

<section className="main-panel flex flex-col gap-4 px-3 py-2 fade-in" style={{minWidth: '0'}}>
<div className="flex gap-4 h-[430px] max-h-[45vh] mb-2">

<div className="glass gradient-outline flex-1 flex flex-col relative mr-2 pt-4 pr-4 pb-4 pl-4 blur-in items-center justify-center" style={{minWidth: '270px', minHeight: '390px'}}>
<div className="flex items-center gap-2 mb-2">
<span className="font-semibold text-base tracking-tight text-teal-200">Digital Twin Playback</span>
<span className="ml-2 text-xs text-blue-200 font-medium bg-[#20325e] px-2 py-0.5 rounded">Before / After</span>
</div>
<div className="w-full h-[260px] flex flex-col items-center justify-center relative">

<div className="absolute bottom-2 right-3 flex gap-2">
<button className="custom-btn px-3 py-1 text-xs flex items-center gap-1" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'rgba(29, 48, 80, 0.83)', -DarkreaderInlineBgimage: 'initial', -DarkreaderInlineBgcolor: 'var(--darkreader-background-1d3050d4, rgba(23, 38, 64, 0.83))'}}>
<svg height="16" width="16"><use href="#play-circle"></use></svg>
                Play
              </button>
<button className="custom-btn px-3 py-1 text-xs flex items-center gap-1" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'rgba(29, 48, 80, 0.66)', -DarkreaderInlineBgimage: 'initial', -DarkreaderInlineBgcolor: 'var(--darkreader-background-1d3050a8, rgba(23, 38, 64, 0.66))'}}>
<svg className="" height="14" width="14"><use href="#camera"></use></svg>
                Snapshot
              </button>
</div>
</div>

<div className="flex items-center gap-2 mt-4">
<span className="text-xs text-cyan-100 font-medium">Snapshot Overlay</span>
<div aria-checked="false" className="toggle" onclick="toggleSnapshot(this)">
<div className="toggle-knob"></div>
</div>
</div>
</div>

<div className="glass gradient-outline flex-1 flex flex-col px-4 py-4 slide-in-up" style={{minWidth: '320px', minHeight: '390px'}}>
<div className="flex items-center gap-2 mb-2">
<span className="font-semibold text-base tracking-tight text-blue-200">Outcome Forecast</span>
<button className="ml-auto custom-btn py-1 px-2 text-xs flex items-center gap-1" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'linear-gradient(90deg, rgb(30, 41, 59) 0%, rgb(41, 54, 84) 100%)', fontSize: '12px', -DarkreaderInlineBgimage: 'linear-gradient(90deg, var(--darkreader-background-1e293b, #18212f) 0%, var(--darkreader-background-293654, #212b43) 100%)', -DarkreaderInlineBgcolor: 'initial'}}>
<svg height="16" width="16"><use href="#sparkles"></use></svg>
              AI Explain
            </button>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-6 mb-1">
<div className="">
<span className="block text-xs text-cyan-100">Syngas Output Δ</span>
<span className="font-semibold text-xl tracking-tight text-green-400">+5.2%</span>
</div>
<div>
<span className="block text-xs text-cyan-100">Failure Likelihood</span>
<span className="font-semibold text-xl tracking-tight text-orange-400">9.6%</span>
</div>
</div>
<div className="mt-2 mb-3 w-full h-[108px] glass" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'rgba(36, 56, 105, 0.13)', -DarkreaderInlineBgimage: 'initial', -DarkreaderInlineBgcolor: 'var(--darkreader-background-24386921, rgba(29, 45, 84, 0.13))'}}>

<div className="w-full h-full pt-2">
<canvas className="" id="rootCauseChart"></canvas>
</div>
</div>
<div className="flex items-center gap-3 mt-2">
<svg data-darkreader-inline-color="" height="19" style={{color: 'rgb(56, 189, 248)', -DarkreaderInlineColor: 'var(--darkreader-text-38bdf8, #42c0f8)'}} width="19"><use href="#shuffle"></use></svg>
<span className="text-xs text-sky-100 font-medium">Root cause rank shift after intervention</span>
</div>
</div>
</div>
</div>

<section className="glass gradient-outline w-full flex items-center px-6 py-3 gap-6 mb-1 shadow-md fade-in" style={{minHeight: '76px'}}>
<div className="flex flex-col px-1">
<span className="block text-xs text-sky-200 font-medium mb-0.5">Test Summary</span>
<span className="font-semibold tracking-tight text-base text-blue-100">Intervention R-0021A: Valve optim, +5.2% syngas</span>
</div>
<div className="divider h-8 mx-3"></div>
<div>
<span className="block text-xs text-sky-200 font-medium mb-0.5">Success Probability</span>
<span className="font-semibold text-lg tracking-tight text-green-400">92.7%</span>
</div>
<div>
<span className="block text-xs text-sky-200 font-medium mb-0.5">Top 3 Metrics</span>
<span className="font-semibold text-base tracking-tight text-cyan-300">Syngas, Temp, Valve %</span>
</div>
<div className="">
<span className="block text-xs text-sky-200 font-medium mb-0.5">Confidence</span>
<span className="inline-flex items-center gap-1 font-semibold text-base tracking-tight text-green-300">
            High
            <svg className="" height="18" width="18"><use className="" href="#shield-check"></use></svg>
</span>
</div>
<div className="flex gap-3 ml-auto">
<button className="custom-btn flex items-center gap-1 px-3 py-1">
<svg height="15" width="15"><use href="#file-text"></use></svg>
            Export to PDF
          </button>
<button className="custom-btn flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-teal-400 text-blue-900 font-semibold" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-darkreader-inline-border-right="" data-darkreader-inline-border-top="" style={{border: '1.5px solid rgb(28, 238, 193)', -DarkreaderInlineBorderTop: 'var(--darkreader-border-1ceec1, #0ca383)', -DarkreaderInlineBorderRight: 'var(--darkreader-border-1ceec1, #0ca383)', -DarkreaderInlineBorderBottom: 'var(--darkreader-border-1ceec1, #0ca383)', -DarkreaderInlineBorderLeft: 'var(--darkreader-border-1ceec1, #0ca383)'}}>
<svg height="15" width="15"><use href="#fast-forward"></use></svg>
            Forward for Implementation
          </button>
<button className="custom-btn flex items-center gap-1 px-3 py-1" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'linear-gradient(90deg, rgb(30, 41, 59) 0%, rgb(41, 54, 84) 100%)', -DarkreaderInlineBgimage: 'linear-gradient(90deg, var(--darkreader-background-1e293b, #18212f) 0%, var(--darkreader-background-293654, #212b43) 100%)', -DarkreaderInlineBgcolor: 'initial'}}>
<svg height="15" width="15"><use href="#book-open"></use></svg>
            Log in EvidenceBook
          </button>
</div>
</section>
</section>

<aside className="sidebar-right glass gradient-outline flex flex-col py-5 px-4 min-w-[260px] max-w-[370px] ml-2 slide-in-up" style={{zIndex: '2'}}>
<h2 className="text-lg font-semibold tracking-tight mb-2 flex items-center gap-2">
<svg data-darkreader-inline-color="" height="20" style={{color: 'rgb(251, 191, 36)', -DarkreaderInlineColor: 'var(--darkreader-text-fbbf24, #fbc434)'}} width="20"><use href="#history"></use></svg>
        Historical Validator
      </h2>
<div className="divider"></div>

<div className="mb-3">
<span className="font-medium text-xs text-orange-200 block mb-1">Pattern Matcher</span>
<div className="flex items-center gap-2">
<input className="bg-[#19234a] focus:border-cyan-400 focus:ring-1 focus:ring-blue-300 transition-all outline-none w-28 font-semibold text-blue-200 border-[#31467c] border rounded pt-1 pr-2 pb-1 pl-2" type="text" value="R-0021A"/>
<button className="custom-btn py-1 px-2 text-xs flex items-center gap-1" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'linear-gradient(90deg, rgb(30, 41, 59) 0%, rgb(41, 54, 84) 100%)', fontSize: '12px', -DarkreaderInlineBgimage: 'linear-gradient(90deg, var(--darkreader-background-1e293b, #18212f) 0%, var(--darkreader-background-293654, #212b43) 100%)', -DarkreaderInlineBgcolor: 'initial'}}>
<svg height="16" width="16"><use href="#search"></use></svg>
            Match
          </button>
</div>
</div>

<div className="mb-2">
<span className="block text-xs text-blue-200 font-medium mb-1">Response Overlay</span>
<div className="glass mb-1" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{background: 'rgba(36, 56, 105, 0.11)', minHeight: '80px', -DarkreaderInlineBgimage: 'initial', -DarkreaderInlineBgcolor: 'var(--darkreader-background-2438691c, rgba(29, 45, 84, 0.11))'}}>
<div className="pt-1">
<canvas className="" height="65" id="historicalPlot"></canvas>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-cyan-200 mt-1">
<svg height="15" width="15"><use href="#activity"></use></svg>
          Similarity Score:
          <span className="font-semibold text-lg tracking-tight text-green-400 ml-1">87%</span>
</div>
</div>
<div className="flex items-center gap-2 mt-2">
<button className="custom-btn flex-1 flex items-center gap-1 justify-center">
<svg height="15" width="15"><use href="#repeat"></use></svg>
          Replay Historical Test
        </button>
</div>
</aside>
</main>

<svg style={{display: 'none'}}>
<symbol id="chevron-down" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="calendar" viewbox="0 0 24 24"><rect data-darkreader-inline-stroke="" fill="none" height="18" rx="2" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}} width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18" data-darkreader-inline-stroke="" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="plus-circle" viewbox="0 0 24 24"><circle cx="12" cy="12" data-darkreader-inline-stroke="" fill="none" r="10" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></circle><path d="M12 8v8M8 12h8" data-darkreader-inline-stroke="" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="settings" viewbox="0 0 24 24"><circle cx="12" cy="12" data-darkreader-inline-stroke="" fill="none" r="3" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></circle><path d="M19.4 15A1.65 1.65 0 0 0 21 13.6l0-3.2A1.65 1.65 0 0 0 19.4 9M4.6 9A1.65 1.65 0 0 0 3 10.4l0 3.2A1.65 1.65 0 0 0 4.6 15" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M16.24 7.76l2.12-2.12M7.76 16.24l-2.12 2.12M16.24 16.24l2.12 2.12M7.76 7.76l-2.12-2.12" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="play" viewbox="0 0 24 24"><polygon data-darkreader-inline-stroke="" fill="none" points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polygon></symbol>
<symbol id="refresh-ccw" viewbox="0 0 24 24"><path d="M1 4v6h6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M23 20v-6h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M3.51 9a9 9 0 0 1 14.13-3.36L21 10M3 14l1.36 1.36A9 9 0 0 0 20.49 15" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="play-circle" viewbox="0 0 24 24"><circle cx="12" cy="12" data-darkreader-inline-stroke="" fill="none" r="10" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></circle><polygon data-darkreader-inline-stroke="" fill="none" points="10 8 16 12 10 16 10 8" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polygon></symbol>
<symbol id="camera" viewbox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.17a2 2 0 0 0 1.41-.59l1.83-1.83a2 2 0 0 1 1.41-.59h2.17a2 2 0 0 1 1.41.59l1.83 1.83A2 2 0 0 0 17.83 5H21a2 2 0 0 1 2 2z" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><circle cx="12" cy="13" data-darkreader-inline-stroke="" fill="none" r="4" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></circle></symbol>
<symbol id="sparkles" viewbox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><circle cx="12" cy="12" data-darkreader-inline-stroke="" fill="none" r="5" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></circle></symbol>
<symbol id="shuffle" viewbox="0 0 24 24"><polyline data-darkreader-inline-stroke="" fill="none" points="16 3 21 3 21 8" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polyline><line data-darkreader-inline-stroke="" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}} x1="4" x2="21" y1="20" y2="3"></line><polyline data-darkreader-inline-stroke="" fill="none" points="21 16 21 21 16 21" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polyline><line data-darkreader-inline-stroke="" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}} x1="15" x2="21" y1="15" y2="21"></line></symbol>
<symbol id="shield-check" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M9 12l2 2 4-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="file-text" viewbox="0 0 24 24"><path d="M4 4h16v16H4z" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M8 8h8M8 12h8M8 16h4" data-darkreader-inline-stroke="" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="fast-forward" viewbox="0 0 24 24"><polygon data-darkreader-inline-stroke="" fill="none" points="13 19 22 12 13 5 13 19" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polygon><polygon data-darkreader-inline-stroke="" fill="none" points="2 19 11 12 2 5 2 19" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polygon></symbol>
<symbol id="book-open" viewbox="0 0 24 24"><path d="M2 7v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M16 3a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12z" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="history" viewbox="0 0 24 24"><path d="M3 3v5h5" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M3.05 13A9 9 0 1 0 12 3v9z" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
<symbol id="search" viewbox="0 0 24 24"><circle cx="11" cy="11" data-darkreader-inline-stroke="" fill="none" r="8" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></circle><line data-darkreader-inline-stroke="" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}} x1="21" x2="16.65" y1="21" y2="16.65"></line></symbol>
<symbol id="activity" viewbox="0 0 24 24"><polyline data-darkreader-inline-stroke="" fill="none" points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></polyline></symbol>
<symbol id="repeat" viewbox="0 0 24 24"><path d="M17 1l4 4-4 4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M3 11V9a4 4 0 0 1 4-4h14" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M7 23l-4-4 4-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path><path d="M21 13v2a4 4 0 0 1-4 4H3" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></symbol>
</svg>

    </>
  );
}
