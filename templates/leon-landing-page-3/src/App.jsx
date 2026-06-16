import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          document.addEventListener('DOMContentLoaded', () => {
              const ctx = document.getElementById('mainChart').getContext('2d');
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, 'rgba(153, 246, 219, 0.5)');
              gradient.addColorStop(1, 'rgba(153, 246, 219, 0)');

              new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
                      datasets: [{
                          label: 'Appointments',
                          data: [12, 18, 25, 38, 45, 56, 68, 80, 95, 110, 118, 130],
                          borderColor: '#99f6db',
                          backgroundColor: gradient,
                          borderWidth: 2,
                          tension: 0.4,
                          fill: true,
                          pointRadius: 0,
                          pointHoverRadius: 4
                      }]
                  },
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: {
                          x: { display: false },
                          y: { display: false }
                      },
                      animation: { duration: 2000 }
                  }
              });
          });
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0660ac]/40 via-[#022950]/80 to-transparent blur-[80px]"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-[#99f6db]/10 bg-[#022950]/80 backdrop-blur-xl">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="flex text-xs font-medium text-white bg-gradient-to-br from-[#99f6db] to-[#1b9df3] w-6 h-6 rounded items-center justify-center">
<iconify-icon className="text-white" icon="solar:swimming-pool-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">
              LOCAL LEAD AUTOMATION
            </span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-xs font-normal text-[#99f6db]/70 hover:text-white sm:block" href="#pricing">
            Pricing
          </a>
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#1b9df3] px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#1b9df3]/80 shadow-[0_0_20px_rgba(27,157,243,0.3)] hover:shadow-[0_0_25px_rgba(27,157,243,0.5)]" href="#">
<span>Book Strategy Call</span>
</a>
</div>
</div>
</nav>
<main className="relative">

<section className="overflow-hidden min-h-[1100px] pt-32 pb-44 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none mask-radar-bottom select-none">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
<div className="radar-sweep w-full h-full rounded-full"></div>
<div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-b from-[#99f6db] via-[#1b9df3] to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_30px_rgba(27,157,243,1)]"></div>
</div>
<div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-[#1b9df3]/20 opacity-30 animate-[spin-slow_120s_linear_infinite]"></div>
<div className="absolute w-[80%] h-[80%] rounded-full border border-[#1b9df3]/20 opacity-60"></div>
<svg className="absolute w-[80%] h-[80%] animate-[spin-reverse-slow_60s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="49" stroke="rgba(27,157,243,0.2)" stroke-dasharray="20 40" strokeWidth="0.2"></circle>
</svg>
<div className="absolute w-[72%] h-[72%] rounded-full border border-[#1b9df3]/10"></div>
<div className="absolute w-full h-full opacity-20">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1b9df3]"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-[#1b9df3]"></div>
<div className="absolute top-[14.6%] left-[14.6%] w-[70.8%] h-[70.8%] border border-[#1b9df3] rounded-full"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-[#1b9df3]/20 blur-xl rounded-full animate-pulse"></div>
<div className="w-[60%] h-[60%] border border-[#1b9df3]/40 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#99f6db] rounded-full shadow-[0_0_10px_#99f6db]"></div>
</div>
</div>
<div className="absolute top-[20%] left-[75%] w-32 h-8 flex items-center gap-2 text-[#99f6db]/70 text-xs font-mono animate-pulse">
<div className="w-1.5 h-1.5 bg-[#99f6db] rounded-full"></div>
              LEAD_CAPTURED
            </div>
<div className="absolute bottom-[40%] left-[25%] w-32 h-8 flex items-center gap-2 text-[#1b9df3]/70 text-xs font-mono animate-pulse delay-700">
<div className="w-1.5 h-1.5 bg-[#1b9df3] rounded-full"></div>
              QUALIFYING...
            </div>
</div>
</div>

<div className="flex flex-col max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="text-center max-w-4xl mx-auto mb-16 pt-10">
<div className="inline-flex items-center gap-2 rounded-full border border-[#1b9df3]/30 bg-[#0660ac]/40 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(27,157,243,0.2)]">
<div className="h-1.5 w-1.5 animate-pulse bg-[#99f6db] rounded-full"></div>
<span className="text-xs font-medium tracking-widest uppercase text-[#99f6db] font-jakarta">
                Pool Profit Accelerator
              </span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal text-white tracking-tight mb-6">
              Get 125 Qualified Pool Sales Appointments in 90 Days
              <span className="text-gradient-cyan relative inline-block">
                Or You Pay Nothing
                <svg className="absolute w-full h-2 bottom-0 left-0 text-[#99f6db]/40" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="1"></path>
</svg>
</span>
</h1>
<p className="text-lg text-[#99f6db]/80 font-normal max-w-2xl mx-auto leading-relaxed">
              We help $1M–$5M+ pool builders eliminate inconsistent leads and
              missed opportunities with a fully automated lead generation and
              follow-up system.
            </p>
<div className="mt-12 relative w-full max-w-3xl mx-auto rounded-2xl border border-[#1b9df3]/30 bg-[#0660ac]/20 p-2 shadow-[0_0_30px_rgba(27,157,243,0.2)] backdrop-blur-md z-30">
<div className="aspect-video w-full rounded-xl bg-[#022950]/80 flex flex-col items-center justify-center border border-[#99f6db]/10 relative overflow-hidden group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-[#1b9df3] flex items-center justify-center text-white shadow-[0_0_20px_rgba(27,157,243,0.5)] group-hover:scale-110 transition-transform duration-300 z-10">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium text-[#99f6db]/80 z-10 group-hover:text-white transition-colors">
                  Watch How It Works
                </span>
<div className="absolute inset-0 bg-gradient-to-br from-[#1b9df3]/10 to-transparent opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#1b9df3]/20 blur-[50px] rounded-full pointer-events-none"></div>
</div>
</div>
</div>

<div className="w-full max-w-6xl z-20 mt-[-20px] relative perspective-1000">
<div className="glass-surface border-x overflow-hidden transition-all duration-500 animate-enter bg-[#0660ac]/60 border-[#99f6db]/20 rounded-t-2xl border-b relative backdrop-blur-md">
<div className="glass-top-border"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
<div className="z-20 flex bg-[#022950]/50 border-[#99f6db]/10 border-b pt-4 pr-6 pb-4 pl-6 relative items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/60"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/60"></div>
<div className="w-3 h-3 rounded-full bg-[#73e049]/40 border border-[#73e049]/60"></div>
</div>
<div className="h-4 w-px bg-white/20 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-mono text-[#99f6db]">
<iconify-icon className="text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span>LEAD.MANAGEMENT</span>
<span className="text-[#99f6db]/40">/</span>
<span className="text-white">MAIN_PIPELINE</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0660ac]/60 border border-[#1b9df3]/40">
<div className="w-1.5 h-1.5 rounded-full bg-[#99f6db] animate-pulse"></div>
<span className="text-xs font-medium text-[#99f6db] tracking-wide">
                      LIVE FEED
                    </span>
</div>
</div>
</div>
<div className="z-20 flex h-[500px] relative">

<div className="flex flex-col gap-6 bg-[#022950]/30 w-16 border-[#99f6db]/10 border-r pt-6 pb-6 items-center">
<div className="p-2.5 rounded-xl bg-[#1b9df3]/20 text-[#1b9df3] shadow-[0_0_15px_rgba(27,157,243,0.3)]">
<iconify-icon className="text-xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-2.5 rounded-xl text-[#99f6db]/50 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:server-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-2.5 rounded-xl text-[#99f6db]/50 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-auto p-2.5 rounded-xl text-[#99f6db]/50 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden pt-6 pr-6 pb-6 pl-6">

<div className="col-span-12 grid grid-cols-3 gap-6 h-32">

<div className="rounded-xl border border-[#99f6db]/10 bg-[#0660ac]/30 p-5 flex flex-col justify-between group hover:border-[#1b9df3]/40 transition-all hover:bg-[#1b9df3]/10">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-[#99f6db]/70 uppercase tracking-wider mb-1">
                            Leads Captured
                          </p>
<h3 className="text-2xl font-medium text-white tracking-tight">
                            842
                          </h3>
</div>
<div className="text-[#1b9df3] bg-[#1b9df3]/20 rounded-md p-1.5">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
<div className="h-full w-[85%] bg-[#1b9df3] rounded-full shadow-[0_0_10px_rgba(27,157,243,0.6)]"></div>
</div>
</div>

<div className="rounded-xl border border-[#99f6db]/10 bg-[#0660ac]/30 p-5 flex flex-col justify-between group hover:border-[#1b9df3]/40 transition-all hover:bg-[#1b9df3]/10">
<div className="flex justify-between items-start">
<div className="">
<p className="text-xs font-medium text-[#99f6db]/70 uppercase tracking-wider mb-1">
                            Avg Response
                          </p>
<h3 className="text-2xl font-medium text-white tracking-tight">
                            &lt; 60
                            <span className="text-sm font-normal text-[#99f6db]/70 ml-1">
                              sec
                            </span>
</h3>
</div>
<div className="text-[#1b9df3] bg-[#1b9df3]/20 rounded-md p-1.5">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-[#73e049] mt-2">
<iconify-icon icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
                        Instantly engages
                      </div>
</div>

<div className="rounded-xl border border-[#99f6db]/10 bg-[#0660ac]/30 p-5 flex flex-col justify-between group hover:border-[#1b9df3]/40 transition-all hover:bg-[#1b9df3]/10">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-[#99f6db]/70 uppercase tracking-wider mb-1">
                            Conv. Rate
                          </p>
<h3 className="text-2xl font-medium text-white tracking-tight">
                            61%
                          </h3>
</div>
<div className="text-[#1b9df3] bg-[#1b9df3]/20 rounded-md p-1.5">
<iconify-icon className="text-lg" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-[#73e049] rounded-full opacity-100 shadow-[0_0_5px_#73e049]"></div>
<div className="h-1 flex-1 bg-[#73e049] rounded-full opacity-100 shadow-[0_0_5px_#73e049]"></div>
<div className="h-1 flex-1 bg-[#73e049] rounded-full opacity-100 shadow-[0_0_5px_#73e049]"></div>
<div className="h-1 flex-1 bg-[#73e049] rounded-full opacity-40"></div>
</div>
</div>
</div>

<div className="col-span-8 bg-[#0660ac]/20 border border-[#99f6db]/10 rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-medium text-white">
                        Pipeline Growth
                      </h4>
<div className="flex gap-2">
<button className="text-xs px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                          30D
                        </button>
<button className="text-xs px-2 py-0.5 rounded text-[#99f6db]/70 hover:text-white transition-colors">
                          90D
                        </button>
</div>
</div>
<div className="relative w-full h-[200px]">
<canvas className="" height="250" id="mainChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '528.5px'}} width="660"></canvas>
</div>
</div>

<div className="col-span-4 bg-[#0660ac]/20 border border-[#99f6db]/10 rounded-xl flex flex-col">
<div className="p-4 border-b border-[#99f6db]/10 flex justify-between items-center">
<h4 className="text-xs font-medium text-white">
                        Automation Log
                      </h4>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1b9df3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1b9df3]"></span>
</span>
</div>
<div className="flex-1 overflow-y-hidden p-3 space-y-2 font-mono text-xs">
<div className="flex gap-2 items-center text-[#99f6db]/80 p-1.5 hover:bg-white/10 rounded cursor-pointer group">
<span className="text-[#99f6db]/50">10:42:01</span>
<span className="text-[#1b9df3]">LEAD</span>
<span className="group-hover:text-white transition-colors">
                          Google Ads capture
                        </span>
</div>
<div className="flex gap-2 items-center text-[#99f6db]/80 p-1.5 hover:bg-white/10 rounded cursor-pointer group">
<span className="text-[#99f6db]/50">10:42:05</span>
<span className="text-[#1b9df3]">SMS</span>
<span className="group-hover:text-white transition-colors">
                          Initial outreach sent
                        </span>
</div>
<div className="flex gap-2 items-center text-[#99f6db]/80 p-1.5 hover:bg-white/10 rounded cursor-pointer group">
<span className="text-[#99f6db]/50">10:42:12</span>
<span className="text-[#1b9df3]">AI</span>
<span className="group-hover:text-white transition-colors">
                          Qualifying responses
                        </span>
</div>
<div className="flex gap-2 items-center text-[#99f6db]/80 p-1.5 hover:bg-white/10 rounded cursor-pointer group">
<span className="text-[#99f6db]/50">10:42:18</span>
<span className="text-[#73e049]">BOOKED</span>
<span className="group-hover:text-white transition-colors">
                          Calendar synchronized
                        </span>
</div>
<div className="flex gap-2 items-center text-[#99f6db]/80 p-1.5 hover:bg-white/10 rounded cursor-pointer group opacity-50">
<span className="text-[#99f6db]/50">10:42:22</span>
<span className="text-[#1b9df3]">INFO</span>
<span className="group-hover:text-white transition-colors">
                          CRM updated
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-10 left-0 right-0 h-20 bg-[#1b9df3]/20 blur-[50px] pointer-events-none z-0"></div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#022950]/80 to-[#022950] z-[15]"></div>


</section>

<section className="overflow-visible max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-64 pl-6 relative" id="problem">
<style>
          @keyframes flow-custom {
            to { stroke-dashoffset: -1000; }
          }
          .animate-flow-custom {
            animation: flow-custom 10s linear infinite;
          }
          @keyframes scanner {
            0%, 100% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-scanner {
            animation: scanner 3s ease-in-out infinite;
          }
        </style>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1b9df3]/20 via-transparent to-transparent opacity-40"></div>
<div className="absolute top-24 left-24 h-0.5 w-0.5 bg-white rounded-full opacity-20 animate-pulse"></div>
<div className="absolute top-48 right-1/4 h-1 w-1 bg-[#1b9df3]/40 rounded-full blur-[1px] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-32 left-1/3 h-0.5 w-0.5 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 text-center mb-20">
<h2 className="sm:text-5xl leading-tight text-4xl font-normal text-white tracking-tight max-w-4xl mr-auto ml-auto">
            Your Pipeline Isn’t Broken Because of Demand.
            <span className="text-[#1b9df3]">It’s Broken Because of Systems</span>
</h2>
<p className="leading-relaxed text-lg font-normal text-[#99f6db]/80 max-w-2xl mt-6 mr-auto ml-auto">
<strong className="">
              78% of buyers choose the first company that responds
            </strong>
            not the best or cheapest. If your follow-ups are slow, you are
            losing deals.
          </p>
</div>
<div className="max-w-5xl mr-auto ml-auto relative">
<svg className="absolute inset-0 -top-12 h-[1000px] w-full pointer-events-none hidden md:block overflow-visible z-0" preserveaspectratio="none" viewbox="0 0 1000 800">
<path d="M 125,280 C 125,550 480,500 500,680" fill="none" stroke="rgba(153,246,219,0.1)" strokeWidth="1"></path>
<path d="M 375,280 C 375,550 490,500 500,680" fill="none" stroke="rgba(153,246,219,0.1)" strokeWidth="1"></path>
<path d="M 625,280 C 625,550 510,500 500,680" fill="none" stroke="rgba(153,246,219,0.1)" strokeWidth="1"></path>
<path d="M 875,280 C 875,550 520,500 500,680" fill="none" stroke="rgba(153,246,219,0.1)" strokeWidth="1"></path>
<path className="animate-flow-custom" d="M 125,280 C 125,550 480,500 500,680" fill="none" stroke="#1b9df3" stroke-dasharray="200, 400" stroke-dashoffset="0" strokeWidth="2" style={{animationDuration: '8s', opacity: '0.4'}}></path>
<path className="animate-flow-custom" d="M 375,280 C 375,550 490,500 500,680" fill="none" stroke="#1b9df3" stroke-dasharray="200, 400" stroke-dashoffset="-200" strokeWidth="2" style={{animationDuration: '10s', opacity: '0.4'}}></path>
<path className="animate-flow-custom" d="M 625,280 C 625,550 510,500 500,680" fill="none" stroke="#1b9df3" stroke-dasharray="200, 400" stroke-dashoffset="-100" strokeWidth="2" style={{animationDuration: '9s', opacity: '0.4'}}></path>
<path className="animate-flow-custom" d="M 875,280 C 875,550 520,500 500,680" fill="none" stroke="#1b9df3" stroke-dasharray="200, 400" stroke-dashoffset="-300" strokeWidth="2" style={{animationDuration: '11s', opacity: '0.4'}}></path>
<path className="animate-flow-custom" d="M 125,280 C 125,550 480,500 500,680" fill="none" stroke="#99f6db" stroke-dasharray="20, 600" stroke-dashoffset="0" strokeWidth="3" style={{animationDuration: '4s', opacity: '1', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 375,280 C 375,550 490,500 500,680" fill="none" stroke="#99f6db" stroke-dasharray="20, 600" stroke-dashoffset="-200" strokeWidth="3" style={{animationDuration: '5s', opacity: '1', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 625,280 C 625,550 510,500 500,680" fill="none" stroke="#99f6db" stroke-dasharray="20, 600" stroke-dashoffset="-100" strokeWidth="3" style={{animationDuration: '4.5s', opacity: '1', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 875,280 C 875,550 520,500 500,680" fill="none" stroke="#99f6db" stroke-dasharray="20, 600" stroke-dashoffset="-300" strokeWidth="3" style={{animationDuration: '6s', opacity: '1', strokeLinecap: 'round'}}></path>
</svg>

<div className="grid grid-cols-2 gap-6 md:grid-cols-4 z-10 mb-20 relative">
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Inconsistent Leads
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Late Responses
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:user-cross-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Lost to Competitors
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:folder-error-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  No Follow-up
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Empty Calendar
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Tire Kickers
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Manual Work
                </span>
</div>
</div>
<div className="group flex transition-all duration-300 hover:bg-[#0660ac]/40 hover:border-[#1b9df3]/50 hover:shadow-[0_0_20px_rgba(27,157,243,0.2)] overflow-hidden bg-[#0660ac]/20 w-full h-24 border-[#99f6db]/10 border relative items-center justify-center">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#1b9df3]/40 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#1b9df3] transition-all"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl text-[#99f6db]/60 group-hover:text-white transition-all duration-300 mb-1" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#99f6db]/70 group-hover:text-white font-medium uppercase tracking-wider">
                  Lost Revenue
                </span>
</div>
</div>
</div>

<div className="flex mt-32 z-20 relative justify-center">
<div className="flex relative items-center justify-center">
<div className="absolute -top-32 h-32 w-[2px] bg-gradient-to-b from-transparent via-[#1b9df3]/50 to-[#1b9df3] shadow-[0_0_20px_#1b9df3] overflow-hidden">
<div className="absolute inset-0 bg-white/50 w-full h-1/2 animate-[scanner_2s_linear_infinite] blur-[2px]"></div>
</div>
<div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#022950] shadow-[0_0_50px_rgba(27,157,243,0.5)] border border-[#1b9df3]/40">
<div className="absolute inset-[-10px] rounded-full border border-[#1b9df3]/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-[-4px] rounded-full border border-[#99f6db]/30 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 rounded-full bg-[#1b9df3]/20 blur-xl animate-pulse"></div>
<div className="relative z-10 animate-[pulse_3s_ease-in-out_infinite]">
<iconify-icon className="text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden" id="system">
<div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0660ac]/50 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-32">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#99f6db]/20 bg-[#0660ac]/40 backdrop-blur-sm mb-8 shadow-lg shadow-[#0660ac]/30">
<span className="text-xs font-medium tracking-wider text-[#99f6db] uppercase">
                The Solution
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Automated Lead Management System
            </h2>
<p className="text-[#99f6db]/80 text-lg max-w-xl mx-auto font-normal">
              Google Ads Lead Generation meets 24/7 AI Follow-up to capture,
              qualify, and book directly to your calendar.
            </p>
</div>
<div className="relative max-w-5xl mx-auto">
<div className="absolute top-1/2 left-[-50%] right-[-50%] h-[1px] bg-gradient-to-r from-transparent via-[#99f6db]/20 to-transparent -translate-y-1/2"></div>
<div className="absolute left-1/2 top-[-50%] bottom-[-50%] w-[1px] bg-gradient-to-b from-transparent via-[#99f6db]/20 to-transparent -translate-x-1/2"></div>
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="relative w-[260px] h-[260px]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-circle center-circle--3 w-56 h-56 rounded-full bg-[#1b9df3]/15"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-circle center-circle--2 w-40 h-40 rounded-full bg-[#1b9df3]/30"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-circle w-24 h-24 rounded-full bg-[#1b9df3]/55"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-horizontal center-ray-left bg-gradient-to-l from-[#99f6db]/80 via-[#99f6db]/60 to-transparent w-14 gap-x-32 gap-y-32"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-horizontal center-ray-right w-14 bg-gradient-to-r from-[#99f6db]/80 via-[#99f6db]/60 to-transparent"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-vertical center-ray-top h-14 bg-gradient-to-t from-[#99f6db]/80 via-[#99f6db]/60 to-transparent"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-vertical center-ray-bottom h-14 bg-gradient-to-b from-[#99f6db]/80 via-[#99f6db]/60 to-transparent"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex bg-[#1b9df3] w-16 h-16 rounded-full ring-[#022950] ring-8 relative shadow-[0_0_40px_rgba(27,157,243,0.65)] gap-x-32 gap-y-32 items-center justify-center">
<iconify-icon className="text-3xl text-white" icon="solar:swimming-pool-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-32">
<style>
                @keyframes centerCirclePulse {
                  0% { opacity: 0; transform: scale(0.6); }
                  15% { opacity: 0.9; }
                  100% { opacity: 0; transform: scale(2.2); }
                }
                .center-circle {
                  animation: centerCirclePulse 5s linear infinite !important;
                  animation-delay: 0s !important;
                }
                .center-circle--2 { animation-delay: -1.6s !important; }
                .center-circle--3 { animation-delay: -3.3s !important; }
              </style>
<div className="flex flex-col items-center text-center group z-10">
<div className="w-16 h-16 rounded-2xl bg-[#0660ac]/40 border border-[#99f6db]/20 flex items-center justify-center mb-6 group-hover:border-[#1b9df3]/60 group-hover:shadow-[0_0_20px_rgba(27,157,243,0.3)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#99f6db] group-hover:text-white transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">
                  Google Ads Generation
                </h4>
<p className="text-sm text-[#99f6db]/80 max-w-[240px]">
                  Targets high-intent searches like "pool builder near me" to
                  consistently generate 20–30 qualified leads per month.
                </p>
</div>
<div className="flex flex-col items-center text-center group z-10">
<div className="w-16 h-16 rounded-2xl bg-[#0660ac]/40 border border-[#99f6db]/20 flex items-center justify-center mb-6 group-hover:border-[#1b9df3]/60 group-hover:shadow-[0_0_20px_rgba(27,157,243,0.3)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#99f6db] group-hover:text-white transition-colors" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">
                  Under 60s Response
                </h4>
<p className="text-sm text-[#99f6db]/80 max-w-[240px]">
                  Instantly engages every lead 24/7 via SMS, email, and
                  conversational AI voice before competitors even see them.
                </p>
</div>
<div className="flex flex-col items-center text-center group z-10">
<div className="w-16 h-16 rounded-2xl bg-[#0660ac]/40 border border-[#99f6db]/20 flex items-center justify-center mb-6 group-hover:border-[#1b9df3]/60 group-hover:shadow-[0_0_20px_rgba(27,157,243,0.3)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#99f6db] group-hover:text-white transition-colors" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">
                  Qualify &amp; Book
                </h4>
<p className="text-sm text-[#99f6db]/80 max-w-[240px]">
                  Our AI qualifies the leads, handles objections, and books
                  high-value estimates directly into your calendar.
                </p>
</div>
<div className="flex flex-col items-center text-center group z-10">
<div className="w-16 h-16 rounded-2xl bg-[#0660ac]/40 border border-[#99f6db]/20 flex items-center justify-center mb-6 group-hover:border-[#1b9df3]/60 group-hover:shadow-[0_0_20px_rgba(27,157,243,0.3)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#99f6db] group-hover:text-white transition-colors" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">
                  30-Day Follow-Up
                </h4>
<p className="text-sm text-[#99f6db]/80 max-w-[240px]">
                  Persistent, automated outreach follows up for up to 30 days so
                  no opportunity ever slips through the cracks.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#99f6db]/10 pt-24 pr-24 pb-24 pl-24" id="proof">
<div className="border-gradient-mask group relative overflow-hidden rounded-[2.5rem] bg-[#0660ac]/20 backdrop-blur-md">
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1b9df3]/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#1b9df3]/30 transition-colors duration-700"></div>
<div className="grid lg:grid-cols-2 z-10 gap-x-0 gap-y-0" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(153, 246, 219, 0), rgba(153, 246, 219, 0.2), rgba(153, 246, 219, 0))'}}>
<div className="md:p-16 flex flex-col z-10 pt-12 pr-12 pb-12 pl-12 justify-center">
<div className="mb-6 h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner">
<iconify-icon className="text-2xl text-[#1b9df3]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl tracking-tight text-white sm:text-4xl font-normal">
                Real Pool Builders.

                <span className="text-gradient-blue block mt-2">Real Revenue.</span>
</h2>
<div className="space-y-6 text-lg text-[#99f6db]/80 font-normal leading-relaxed">
<p className="mt-6 text-lg text-[#99f6db]/80 leading-relaxed">
                  Stop settling for low-quality shared leads. See how we help
                  pool builders scale directly with automated, exclusive
                  systems.
                </p>
<ul className="mt-10 space-y-6">
<li className="flex items-start gap-3 text-base text-white">
<iconify-icon className="text-xl text-[#73e049] mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-white">Cody — Texas</strong>
<span className="text-[#99f6db]/70 text-sm">
                        Scaled from $1.5M to $5.5M in one month. Generated 286
                        appointments vs 160–170 previously.
                      </span>
</div>
</li>
<li className="flex items-start gap-3 text-base text-white">
<iconify-icon className="text-xl text-[#73e049] mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-white">Bryan — Orlando</strong>
<span className="text-[#99f6db]/70 text-sm">
                        Grew from $3.5M to $7–10M. "We sold $700K–$800K in
                        January alone."
                      </span>
</div>
</li>
<li className="flex items-start gap-3 text-base text-white">
<iconify-icon className="text-xl text-[#73e049] mt-1 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<strong className="block text-white">John — Austin</strong>
<span className="text-[#99f6db]/70 text-sm">
                        Gained 15% market share while industry declined 60%. "It
                        runs 24 hours a day."
                      </span>
</div>
</li>
</ul>
</div>
</div>
<div className="min-h-[500px] lg:border-t-0 lg:border-l font-jakarta bg-[#022950]/60 border-[#99f6db]/10 border-t relative overflow-hidden">
<div className="-translate-x-1/2 -translate-y-1/2 z-20 w-[85%] max-w-md absolute top-1/2 left-1/2">
<div className="relative overflow-hidden rounded-2xl border border-[#99f6db]/20 bg-[#0660ac]/80 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-[#1b9df3]/50">
<div className="flex items-center justify-between mb-3 pb-3 border-b border-[#99f6db]/10">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-[#1b9df3] animate-pulse"></div>
<span className="text-xs font-medium text-[#99f6db]">
                        System Analysis
                      </span>
</div>
<span className="text-[10px] text-[#99f6db]/50">
                      Live Query
                    </span>
</div>
<div className="flex gap-3 mb-4">
<div className="h-6 w-6 rounded-full bg-[#022950] flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-[10px] text-[#99f6db]/80" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm text-white font-normal leading-relaxed">
                      Summarize performance metrics for Cody (Texas). Show
                      pipeline growth and appointment conversion.
                    </div>
</div>
<div className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-[#1b9df3]/20 flex items-center justify-center shrink-0 border border-[#1b9df3]/40">
<iconify-icon className="text-[10px] text-[#1b9df3]" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full space-y-2">
<div className="h-2 w-3/4 bg-[#0660ac] rounded animate-pulse"></div>
<div className="h-2 w-1/2 bg-[#0660ac] rounded animate-pulse delay-75"></div>
<div className="mt-4 rounded-lg border border-[#99f6db]/20 bg-[#022950]/80 p-4 font-mono text-xs md:text-sm leading-relaxed overflow-hidden relative group">
<div className="absolute top-2 right-2 text-[8px] text-[#99f6db]/50 border border-[#99f6db]/20 px-1.5 rounded bg-[#0660ac]/50">
                          JSON
                        </div>
<div className="text-[#99f6db]/80">
<span className="text-[#1b9df3]">"client"</span>
                          :
                          <span className="text-[#73e049]">"Cody - Texas"</span>
                          ,
                        </div>
<div className="text-[#99f6db]/80">
<span className="text-[#1b9df3]">"revenue_growth"</span>
                          :
                          <span className="text-white">"$1.5M -&gt; $5.5M"</span>
                          ,
                        </div>
<div className="text-[#99f6db]/80">
<span className="text-[#1b9df3]">"timeframe"</span>
                          :
                          <span className="text-[#73e049]">"1 Month"</span>
                          ,
                        </div>
<div className="text-[#99f6db]/80">
<span className="text-[#1b9df3]">"appointments"</span>
                          : {
                        </div>
<div className="pl-4 text-[#99f6db]/80">
<span className="text-[#1b9df3]">"previous"</span>
                          :
                          <span className="text-white">165</span>
                          ,
                        </div>
<div className="pl-4 text-[#99f6db]/80">
<span className="text-[#1b9df3]">"current"</span>
                          :
                          <span className="text-white">286</span>
</div>
<div className="text-[#99f6db]/80">},</div>
<div className="text-[#99f6db]/80">
<span className="text-[#1b9df3]">"conversion_rate"</span>
                          :
                          <span className="text-white">"61%"</span>
</div>
<div className="absolute bottom-4 left-10 w-1.5 h-3 bg-[#1b9df3]/80 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
<style>
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
              </style>
<div className="absolute inset-0 p-8 opacity-10 pointer-events-none select-none overflow-hidden">
<div className="absolute inset-0 w-full h-full" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<div className="w-full" style={{animation: 'scrollUp 30s linear infinite'}}>
<div className="text-xs text-[#99f6db] space-y-1 pb-16 font-mono">
<p>Pipeline Generated: $4,200,000</p>
<p>Status: Qualified</p>
<p>SMS_Sent: True</p>
<p>AI_Voice_Handled: True</p>
<p>Appt_Booked: Confirmed</p>
<p className="pt-4">Pipeline Generated: $1,550,000</p>
<p>Status: Qualified</p>
<p>SMS_Sent: True</p>
<p>AI_Voice_Handled: True</p>
<p>Appt_Booked: Confirmed</p>
</div>
<div className="text-xs text-[#99f6db] space-y-1 pb-16 font-mono">
<p>Pipeline Generated: $4,200,000</p>
<p>Status: Qualified</p>
<p>SMS_Sent: True</p>
<p>AI_Voice_Handled: True</p>
<p>Appt_Booked: Confirmed</p>
<p className="pt-4">Pipeline Generated: $1,550,000</p>
<p>Status: Qualified</p>
<p>SMS_Sent: True</p>
<p>AI_Voice_Handled: True</p>
<p>Appt_Booked: Confirmed</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Clear Pricing. Massive ROI.
            </h2>
<p className="text-[#99f6db]/80 text-lg">
              We align our success directly with yours.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-[#99f6db]/20 bg-[#0660ac]/30 hover:border-[#1b9df3]/50 transition-colors flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">System Setup</h3>
<p className="text-[#99f6db]/70 text-sm mb-6">
                One-time build out fee.
              </p>
<div className="text-4xl font-normal text-white mb-6 tracking-tight">
                $15,000
              </div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#1b9df3] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Custom High-Converting Landing Pages
                </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#1b9df3] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Google Ads Campaign Build
                </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#1b9df3] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  AI Voice &amp; SMS System Setup
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-white/10 hover:bg-[#1b9df3]/20 border border-white/10 hover:border-[#1b9df3]/50 text-white text-center rounded-lg font-medium transition-colors" href="#">
                Book Strategy Call
              </a>
</div>

<div className="p-8 rounded-2xl border border-[#1b9df3] bg-[#0660ac]/60 relative flex flex-col shadow-[0_0_30px_rgba(27,157,243,0.15)]">
<div className="-translate-y-1/2 uppercase text-xs font-medium text-white tracking-wider bg-[#1b9df3] rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-0 right-1/2 translate-x-1/2">
                Monthly Retainer
              </div>
<h3 className="text-xl font-medium text-white mb-2">
                Lead Management
              </h3>
<p className="text-[#99f6db]/70 text-sm mb-6">
                Fully automated follow-up &amp; ads management.
              </p>
<div className="text-4xl font-normal text-white mb-2 tracking-tight">
                $5,000
                <span className="text-lg font-normal text-[#99f6db]/70">/mo</span>
</div>
<p className="text-xs text-[#1b9df3] mb-6">
                + $30–$50 per appointment &amp; Ad Spend
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#99f6db] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  20–30 Qualified Leads per Month
                </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#99f6db] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  24/7 AI Lead Qualification
                </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#99f6db] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Continuous Ads Optimization
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-[#1b9df3] hover:bg-[#1b9df3]/80 text-white text-center rounded-lg font-medium transition-colors shadow-lg shadow-[#1b9df3]/25" href="#">
                Secure Your Spot
              </a>
</div>

<div className="p-8 rounded-2xl border border-[#73e049]/50 bg-[#73e049]/5 hover:border-[#73e049] transition-colors flex flex-col shadow-[0_0_20px_rgba(115,224,73,0.05)]">
<h3 className="text-xl font-medium text-white mb-2">
                Expected ROI Example
              </h3>
<p className="text-[#99f6db]/70 text-sm mb-6">
                What this means for your bottom line.
              </p>
<div className="text-4xl font-normal text-[#73e049] mb-6 tracking-tight">
                47:1
                <span className="text-lg font-normal text-[#73e049]/70">
                  Return
                </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#73e049] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  44 Appointments/mo
                </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-xl text-[#73e049] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  15% Close Rate ($75k Avg Deal)
                </li>
<li className="flex gap-3 text-sm text-[#73e049] font-medium mt-4">
<iconify-icon className="text-xl text-[#73e049] shrink-0" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
                  = $495,000 Revenue from ~$10.5k/mo
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-white/10 hover:bg-[#73e049]/20 border border-[#73e049]/30 hover:border-[#73e049] text-[#73e049] text-center rounded-lg font-medium transition-colors" href="#">
                Calculate Your ROI
              </a>
</div>
</div>
</div>
</section>
<section className="border-[#99f6db]/10 border-t pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-normal text-white mb-12 text-center tracking-tight">
            The 125 Appointment Guarantee
          </h2>
<div className="space-y-4">
<details className="group border border-[#99f6db]/20 bg-[#0660ac]/20 rounded-xl open:bg-[#0660ac]/40 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium">
<span>What happens if I don't get 125 appointments?</span>
<iconify-icon className="text-xl text-[#99f6db]/50 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#99f6db]/80 leading-relaxed text-sm">
                If 125 qualified appointments are not booked within your first
                90 days, you receive a full refund of all our fees. No questions
                asked. We are confident in our system and absorb the risk so you
                don't have to.
              </div>
</details>
<details className="group border border-[#99f6db]/20 bg-[#0660ac]/20 rounded-xl open:bg-[#0660ac]/40 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium">
<span>Is ad spend included in the guarantee?</span>
<iconify-icon className="text-xl text-[#99f6db]/50 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#99f6db]/80 leading-relaxed text-sm">
                No. Ad spend ($3,000–$5,000/month) is paid directly to Google
                and is non-refundable. Our guarantee covers the system setup and
                monthly management fees.
              </div>
</details>
<details className="group border border-[#99f6db]/20 bg-[#0660ac]/20 rounded-xl open:bg-[#0660ac]/40 transition-all">
<summary className="flex cursor-pointer list-none font-medium text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span>Who is this system for?</span>
<iconify-icon className="text-xl text-[#99f6db]/50 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#99f6db]/80 leading-relaxed text-sm">
                This system is exclusively designed for established pool
                builders doing $1M–$5M+ annually who have the capacity to handle
                increased volume but lack consistent lead flow and structured
                follow-up.
              </div>
</details>
</div>
</div>
</section>
<section className="mx-auto max-w-4xl px-6 py-32 text-center">
<h2 className="text-4xl tracking-tight text-white sm:text-5xl font-normal">
          Book a 30-Minute Call With The Founder
        </h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-[#99f6db]/80">
          On the call, we'll review your current lead flow, evaluate your
          market, and determine if the guarantee applies to your business. If
          it’s not a fit, we'll be direct and tell you.
        </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-[#1b9df3] px-8 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-[#1b9df3]/80 shadow-[0_0_20px_rgba(27,157,243,0.3)]" href="#">
            Book Your Strategy Call
          </a>
</div>
</section>
</main>
<footer className="border-t border-[#99f6db]/10 bg-[#022950] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="text-xl font-medium text-white tracking-tight">
                Local Lead Automation
              </span>
</a>
<p className="text-[#99f6db]/70 text-sm leading-relaxed max-w-xs mb-8">
              Guaranteed appointments. Automated follow-up. Predictable pipeline
              growth for $1M+ pool builders.
            </p>
</div>
<div>
<h4 className="font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#problem">
                  The Problem
                </a>
</li>
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#system">
                  The System
                </a>
</li>
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#pricing">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Results</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#proof">
                  Case Studies
                </a>
</li>
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#faq">
                  The Guarantee
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="text-[#99f6db]/70 hover:text-[#1b9df3] transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#99f6db]/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#99f6db]/50">
            © 2024 Local Lead Automation. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#73e049] animate-pulse"></div>
<span className="text-xs text-[#99f6db]/70 font-mono">
              Accepting New Clients
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
