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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


            // Simple count-up animation for Treasury Balance
          (function() {
            const el = document.getElementById('treasury-balance');
            const target = 412906;
            const duration = 2000; // ms
            const start = 0;
            const startTime = performance.now();
            
            function update(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
              
              const current = Math.floor(start + (target - start) * ease);
              el.textContent = '$' + current.toLocaleString();
              
              if (progress < 1) {
                requestAnimationFrame(update);
              }
            }
            requestAnimationFrame(update);
          })();
          


            document.addEventListener('DOMContentLoaded', function() {
                const ctx = document.getElementById('spendChart').getContext('2d');
                
                // Create gradient
                const gradient = ctx.createLinearGradient(0, 0, 0, 150);
                gradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0.1)');

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Ops', 'Vend', 'Infra', 'Pay', 'Trav', 'Tax', 'Oth'],
                        datasets: [{
                            label: 'Spend',
                            data: [45, 65, 55, 85, 40, 30, 20],
                            backgroundColor: gradient,
                            borderRadius: 4,
                            barThickness: 8,
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: { enabled: false } 
                        },
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { 
                                    color: '#94a3b8', 
                                    font: { size: 8, family: "system-ui" } 
                                },
                                border: { display: false }
                            },
                            y: {
                                display: false,
                                grid: { display: false }
                            }
                        },
                        animation: {
                            duration: 2000,
                            easing: 'easeOutQuart'
                        }
                    }
                });
            });
          


    if (window.lucide) {
      lucide.createIcons();
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div></div>

<div className="min-h-screen">

<nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2.5" href="#">
<div className="flex bg-gradient-to-br from-emerald-400 to-emerald-600 w-6 h-6 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] items-center justify-center" style={{}}>
<svg className="lucide lucide-zap h-3.5 w-3.5 text-black fill-black w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="solar" data-solar="bolt-bold-duotone" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="#000000" fill-rule="evenodd"></path>
<path className="" d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="#000000" opacity=".5"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{}}>MatrixPay</span>
</a>
<div className="hidden items-center gap-1 sm:flex">
<a className="rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors" href="#" style={{}}>Overview</a>
<a className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-colors" href="#" style={{}}>Treasury</a>
<a className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-colors" href="#" style={{}}>Intelligence</a>
<a className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-colors" href="#" style={{}}>API</a>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<svg className="lucide lucide-search absolute left-2.5 top-1.5 h-3.5 w-3.5 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="h-7 w-48 rounded-full border border-white/10 bg-white/5 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-600 focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none" placeholder="Search assets..." style={{}} type="text"/>
</div>
<button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-emerald-400 transition-colors" style={{}}>
<svg className="lucide lucide-bell h-3.5 w-3.5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="h-7 w-7 overflow-hidden rounded-full border border-emerald-500/30 bg-emerald-900/20 p-0.5" style={{}}>
<div className="h-full w-full rounded-full bg-emerald-500/20 flex items-center justify-center text-[0.6rem] font-medium text-emerald-300" style={{}}>JS</div>
</div>
</div>
</div>
</nav>
<div className="sm:pt-20 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-20 pl-4">


<style className="">
      @keyframes fadeInUpBlur {
        0% {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(8px);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      }

      @keyframes pulse-glow {

        0%,
        100% {
          box-shadow: 0 0 0 rgba(16, 185, 129, 0);
        }

        50% {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
      }

      @keyframes gradient-x {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }

      .animate-in {
        animation: fadeInUpBlur 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .animate-gradient-text {
        background-size: 200% auto;
        animation: gradient-x 4s linear infinite;
      }

      .hover-card-effect {
        transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
      }

      .hover-card-effect:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
        border-color: rgba(52, 211, 153, 0.4);
      }

      .delay-0 {
        animation-delay: 0ms;
      }

      .delay-100 {
        animation-delay: 100ms;
      }

      .delay-200 {
        animation-delay: 200ms;
      }

      .delay-300 {
        animation-delay: 300ms;
      }

      .delay-400 {
        animation-delay: 400ms;
      }

      .delay-500 {
        animation-delay: 500ms;
      }
    </style>

<section className="animate-in delay-0 z-10 mt-24 mb-24 relative">

<div className="pointer-events-none absolute -top-24 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px] opacity-50" style={{}}></div>
<div className="z-10 max-w-2xl relative">
<div className="inline-flex bg-emerald-500/5 border-emerald-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30 cursor-default" style={{}}>
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{}}></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" style={{}}></span>
</span>
<span className="text-xs font-normal tracking-tight text-emerald-300" style={{}}>System Operational</span>
<span className="mx-1 text-emerald-500/30" style={{}}>|</span>
<span className="text-xs tracking-tight text-slate-400" style={{}}>v3.4.0 Active</span>
</div>
<h1 className="text-5xl font-normal tracking-tight text-white sm:text-6xl">
<span className="block text-slate-400">Financial Intelligence</span>
<span className="block bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-100 bg-clip-text text-transparent animate-gradient-text" style={{}}>For The Future.</span>
</h1>
<p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg font-light" style={{}}>
          Orchestrate capital across chains, automate payouts, and visualize your global treasury through a single,
          quantum-secure lens.
        </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<button className="group relative inline-flex h-10 min-w-[140px] items-center justify-center gap-2 overflow-hidden rounded-full border-none bg-transparent px-5 text-sm font-medium tracking-tight text-white outline-none transition-all duration-200 active:scale-95 hover:scale-105 aura-button-green-beam" style={{}}>
<style>
            .aura-button-green-beam {
              background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(52, 211, 153, 0.8) 0%, rgba(52, 211, 153, 0) 100%), 
                          linear-gradient(0deg, #059669, #10b981);
              box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
              position: relative;
            }
            .aura-button-green-beam::before {
              content: "";
              position: absolute;
              inset: 1px;
              background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
              border-radius: 9999px;
              z-index: 0;
              transition: all 0.5s ease-in-out;
            }
            .aura-button-green-beam::after {
              content: "";
              position: absolute;
              inset: 2px;
              background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(52, 211, 153, 0.8) 0%, rgba(52, 211, 153, 0) 100%), 
                          linear-gradient(0deg, #059669, #10b981);
              border-radius: 9999px;
              z-index: 0;
            }
            .aura-button-green-beam:hover::before {
              background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%);
              box-shadow: 0 0 20px rgba(52, 211, 153, 0.6);
            }
            .points_wrapper {
              overflow: hidden;
              width: 100%;
              height: 100%;
              pointer-events: none;
              position: absolute;
              inset: 0;
              z-index: 1;
              border-radius: 9999px;
            }
            .point {
              bottom: -10px;
              position: absolute;
              animation: floating-points infinite ease-in-out;
              pointer-events: none;
              width: 2px;
              height: 2px;
              background-color: #ecfdf5;
              border-radius: 9999px;
            }
            @keyframes floating-points {
              0% { transform: translateY(0); }
              85% { opacity: 0; }
              100% { transform: translateY(-40px); opacity: 0; }
            }
            .point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
            .point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
            .point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
            .point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
            .point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
            .point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.5s; }
            .point:nth-child(7) { left: 88%; opacity: 0.9; animation-duration: 2.2s; animation-delay: 0.2s; }
            .point:nth-child(8) { left: 58%; opacity: 0.8; animation-duration: 2.25s; animation-delay: 0.2s; }
            .point:nth-child(9) { left: 98%; opacity: 0.6; animation-duration: 2.6s; animation-delay: 0.1s; }
            .point:nth-child(10) { left: 65%; opacity: 1; animation-duration: 2.5s; animation-delay: 0.2s; }
            @keyframes float-card {
              0%, 100% { transform: rotateY(-15deg) rotateX(5deg) translateY(0px); }
              50% { transform: rotateY(-15deg) rotateX(5deg) translateY(-15px); }
            }
            .animate-float-card {
              animation: float-card 6s ease-in-out infinite;
            }
          </style>
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="relative z-10 flex items-center gap-2">
            Initiate Transfer
            <svg aria-hidden="true" className="text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</span>
</button>
<button className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-normal text-slate-200 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all active:scale-95" style={{}}>
<svg aria-hidden="true" className="" data-height="16" data-icon="solar:copy-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M6.6 11.397c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.073 0 4.916.847c.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936c-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847s-.843-2.21-.843-4.936z" fill="currentColor"></path><path d="M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828c.617.618 1.433.91 2.62 1.048c-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19c-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2S5.343 2 4.172 3.172" fill="currentColor" opacity=".5"></path></svg>
<span className="">Copy Wallet ID</span>
</button>
</div>
</div>

<div className="absolute right-0 top-1/2 hidden h-[260px] w-[420px] -translate-y-1/2 translate-x-10 perspective-[1200px] lg:block" style={{zIndex: '20'}}>
<div className="animate-float-card relative h-full w-full transition-all duration-500 hover:scale-105" style={{transformStyle: 'preserve-3d', transform: 'rotateY(-15deg) rotateX(5deg)'}}>

<div className="absolute inset-8 -z-10 rounded-full bg-emerald-500/30 blur-[80px]"></div>

<div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1115]/95 via-[#13161C]/90 to-black/95 p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl">

<div className="absolute inset-0 rounded-2xl opacity-30" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>
<div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[60px]"></div>

<div className="relative flex h-full flex-col justify-between z-10">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">

<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">MatrixPay</span>
</div>

<svg className="text-slate-400/40 rotate-90" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3">

<div className="h-10 w-14 rounded-lg bg-gradient-to-tr from-yellow-100/80 via-yellow-400/80 to-yellow-600/80 relative overflow-hidden shadow-sm border border-white/20">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%)'}}>
</div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to bottom, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%)'}}>
</div>
<div className="absolute left-2 top-2 right-2 bottom-2 border border-black/20 rounded-sm"></div>
</div>
</div>
<div className="space-y-1">
<div className="font-mono text-xl tracking-[0.15em] text-slate-200 drop-shadow-md" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>4820 1029 4810 3094</div>
<div className="flex items-center justify-between pt-3">
<span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">James Wilson</span>
<div className="flex flex-col items-end">
<span className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Valid Thru</span>
<span className="font-mono text-sm text-slate-200">12/28</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none">
</div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent rounded-2xl pointer-events-none mix-blend-overlay">
</div>
</div>

<div className="absolute inset-0 rounded-2xl bg-slate-800 -z-10" style={{transform: 'translateZ(-4px)'}}></div>
</div>
</div>
</section>

<div className="h-px animate-in delay-100 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent w-full mb-12" style={{}}></div>

<div className="grid gap-6 lg:grid-cols-2 gap-x-6 gap-y-6">

<section className="animate-in delay-200 overflow-hidden sm:p-8 hover-card-effect group bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0_60px_rgba(16,185,129,0.15)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="pointer-events-none group-hover:opacity-60 transition-opacity duration-500 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl animate-pulse" style={{}}></div>
<div className="absolute right-0 -bottom-10 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" style={{}}></div>
</div>
<div className="relative flex flex-col gap-6">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-emerald-300/70" style={{}}>
                Total Treasury
              </p>
<div className="mt-2 flex items-end gap-3">
<p className="text-4xl font-medium tracking-tight text-slate-50 tabular-nums" id="treasury-balance" style={{}}>$412,906</p>
<div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5" style={{}}>
<svg aria-hidden="true" className="" data-height="14" data-icon="solar:graph-up-bold-duotone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M14.5 10.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z" fill="currentColor">
</path>
</svg>
<span className="text-xs font-normal tracking-tight text-emerald-200" style={{}}>+9.73%</span>
</div>
</div>
<p className="mt-1 text-xs text-slate-400" style={{}}>
                Last 30 days across 6 liquidity pools
              </p>
</div>
<div className="flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-3 py-1.5 text-xs font-normal tracking-tight text-black shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-all hover:scale-105 hover:shadow-emerald-500/60" style={{animation: 'pulse-glow 3s infinite'}}>
<svg aria-hidden="true" className="iconify text-black iconify--solar" data-height="14" data-icon="solar:bolt-bold-duotone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
              Instant Top-Up
            </button>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-emerald-400/20 bg-black/40 p-3 backdrop-blur-sm transition-colors hover:bg-emerald-500/10 group/item cursor-pointer" style={{}}>
<div className="flex items-center justify-between">
<p className="text-xs font-normal tracking-tight text-slate-200" style={{}}>
                  Inflows this cycle
                </p>
<span className="text-[0.7rem] font-normal tracking-tight text-emerald-300" style={{}}>+5.8%</span>
</div>
<p className="mt-2 text-xl font-medium tracking-tight text-slate-50 group-hover/item:translate-x-1 transition-transform" style={{}}>
                $92,441
              </p>
<div className="mt-3 h-14 rounded-xl bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent overflow-hidden" style={{}}>
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.9),_transparent_55%)] opacity-60 group-hover/item:opacity-80 transition-opacity">
</div>
</div>
</div>
<div className="rounded-2xl border border-emerald-400/20 bg-black/40 p-3 backdrop-blur-sm transition-colors hover:bg-rose-500/10 group/item cursor-pointer" style={{}}>
<div className="flex items-center justify-between">
<p className="text-xs font-normal tracking-tight text-slate-200" style={{}}>
                  Outflows this cycle
                </p>
<span className="text-[0.7rem] font-normal tracking-tight text-rose-300" style={{}}>-2.4%</span>
</div>
<p className="mt-2 text-xl font-medium tracking-tight text-slate-50 group-hover/item:translate-x-1 transition-transform" style={{}}>
                $61,307
              </p>
<div className="mt-3 h-14 rounded-xl bg-gradient-to-tr from-rose-500/20 via-emerald-400/10 to-transparent overflow-hidden" style={{}}>
<div className="h-full w-full bg-[radial-gradient(circle_at_bottom,_rgba(248,113,113,0.9),_transparent_55%)] opacity-70 group-hover/item:opacity-90 transition-opacity">
</div>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-between text-xs text-slate-400" style={{}}>
<span className="">Auto-rebalancing enabled • 4 venues</span>
<span className="">Latency: 37ms</span>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-70" style={{}}></div>
<div className="relative mt-6 flex items-center justify-between">
<div className="">
<h2 className="text-lg font-medium tracking-tight text-slate-50" style={{}}>
              Treasury Console
            </h2>
<p className="text-sm text-slate-300 font-light" style={{}}>
              Orchestrate capital across exchanges and chains.
            </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-[0.7rem] text-slate-400" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" style={{}}></span>
            Synced 8 seconds ago
          </div>
</div>
</section>

<section className="animate-in delay-300 overflow-hidden sm:p-8 bg-gradient-to-bl from-emerald-500/20 via-emerald-500/5 to-transparent rounded-3xl pt-6 pr-6 pb-6 pl-6 relative hover-card-effect" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="absolute right-0 top-0 h-60 w-60 -translate-y-10 translate-x-10 rounded-full bg-emerald-500/25 blur-3xl" style={{}}></div>
<div className="absolute left-1/4 bottom-0 h-40 w-40 translate-y-1/3 rounded-full bg-emerald-400/20 blur-3xl" style={{}}></div>
</div>
<div className="relative flex flex-col gap-5">
<div className="flex items-center justify-between gap-4">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-emerald-200/80" style={{}}>
              Smart Transfer Path
            </p>
<div className="flex items-center gap-2 rounded-full bg-black/40 px-2.5 py-1 border border-emerald-300/40" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" style={{}}></span>
<span className="text-[0.7rem] font-normal tracking-tight text-emerald-100" style={{}}>Route optimized</span>
</div>
</div>
<div className="space-y-4">

<div className="relative rounded-2xl border border-emerald-400/40 bg-black/60 p-4 shadow-[0_0_40px_rgba(16,185,129,0.35)] backdrop-blur-sm transition-all hover:border-emerald-400/70" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-normal tracking-tight text-emerald-100 border border-emerald-400/60" style={{}}>
                  US
                </span>
<div className="">
<p className="text-xs font-normal tracking-tight text-slate-200" style={{}}>You Dispatch</p>
<p className="mt-0.5 text-xl font-medium tracking-tight text-slate-50" style={{}}>$1,204.66</p>
</div>
</div>
<div className="text-right">
<p className="text-[0.7rem] text-slate-400" style={{}}>Wallet: Ops-Main</p>
<p className="text-[0.7rem] text-emerald-300" style={{}}>Fee: $1.03 • 0.09s</p>
</div>
</div>
</div>

<div className="flex items-center justify-center">
<div className="relative flex items-center gap-2">
<div className="h-px w-20 bg-gradient-to-r from-transparent via-emerald-400/60 to-emerald-400/10 overflow-hidden" style={{}}>
<div className="h-full w-1/2 bg-emerald-400/80 blur-[1px] animate-[shimmer_2s_infinite_linear]" style={{transform: 'translateX(-100%)'}}></div>
<style>
                    @keyframes shimmer {
                      100% {
                        transform: translateX(200%);
                      }
                    }
                  </style>
</div>
<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/50 backdrop-blur-md transition-transform hover:scale-110" style={{}}>
<svg aria-hidden="true" data-height="16" data-icon="solar:cpu-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" fill="currentColor" opacity=".5"></path>
</svg>
<span className="absolute -bottom-4 text-[0.6rem] font-normal tracking-tight text-emerald-200/80 w-max" style={{}}>
                  AI Bridge
                </span>
</div>
<div className="h-px w-20 bg-gradient-to-l from-transparent via-emerald-400/60 to-emerald-400/10 overflow-hidden" style={{}}>
<div className="h-full w-1/2 bg-emerald-400/80 blur-[1px] animate-[shimmer_2s_infinite_linear_0.5s]" style={{transform: 'translateX(200%)'}}></div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-emerald-400/40 bg-black/60 p-4 backdrop-blur-sm transition-all hover:border-emerald-400/70" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-normal tracking-tight text-emerald-100 border border-emerald-400/60" style={{}}>
                  SG
                </span>
<div className="">
<p className="text-xs font-normal tracking-tight text-slate-200" style={{}}>Partner Receives</p>
<p className="mt-0.5 text-xl font-medium tracking-tight text-slate-50" style={{}}>S$1,589.42</p>
</div>
</div>
<div className="text-right">
<p className="text-[0.7rem] text-slate-400" style={{}}>Settlement: 3 rails</p>
<p className="text-[0.7rem] text-emerald-300" style={{}}>Rate locked for 12m</p>
</div>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-between text-xs text-slate-300" style={{}}>
<span className="">
            Slippage protected at <span className="text-emerald-300 font-normal tracking-tight" style={{}}>0.18%</span>
</span>
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/40 bg-black/30 px-2.5 py-1 text-[0.7rem] font-normal tracking-tight text-emerald-100 hover:bg-emerald-500/20 transition-colors" style={{}}>
<svg aria-hidden="true" data-height="14" data-icon="solar:settings-bold-duotone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M15.523 12c0 1.657-1.354 3-3.023 3s-3.023-1.343-3.023-3S10.83 9 12.5 9s3.023 1.343 3.023 3" fill="currentColor"></path></svg>
            Edit route
          </button>
</div>
</div>
<div className="relative mt-6">
<h2 className="text-lg font-medium tracking-tight text-slate-50" style={{}}>
            Cross-Border Orchestration
          </h2>
<p className="mt-1 text-sm text-slate-300 font-light" style={{}}>
            Auto-discover the cheapest corridor and confirm payouts instantly.
          </p>
</div>
</section>
</div>

<div className="grid gap-6 md:grid-cols-3 mt-6 gap-x-6 gap-y-6">

<section className="animate-in delay-400 overflow-hidden sm:p-6 bg-gradient-to-tr from-emerald-500/10 via-black to-black rounded-3xl pt-5 pr-5 pb-5 pl-5 relative hover-card-effect" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="pointer-events-none absolute inset-0 opacity-30">
<div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-emerald-500/30 blur-3xl" style={{}}></div>
</div>
<div className="relative h-full flex flex-col">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-emerald-200/80" style={{}}>
              Spend Intelligence
            </p>
<span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.7rem] font-normal tracking-tight text-emerald-200" style={{}}>
            Week 34
          </span>
</div>
<div className="mt-4 rounded-2xl border border-emerald-400/25 bg-black/50 p-3 flex-grow flex flex-col" style={{}}>
<div className="flex items-center justify-between text-xs text-slate-300 mb-2" style={{}}>
<span className="">Outflow radar</span>
<span className="">02 Sep – 08 Sep</span>
</div>

<div className="relative h-32 w-full">
<canvas className="" height="256" id="spendChart" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '283.3px'}} width="566"></canvas>
</div>
</div>

<div className="mt-4 space-y-1">
<h3 className="text-base font-medium tracking-tight text-slate-50" style={{}}>
              Weekly Flow Snapshots
            </h3>
<p className="text-sm text-slate-300 font-light" style={{}}>
              Decode your operational burn with anomaly alerts.
            </p>
</div>
</div>
</section>

<section className="animate-in delay-500 overflow-hidden sm:p-6 bg-gradient-to-tr from-black via-slate-950 to-emerald-500/10 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative hover-card-effect group" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-500/30 blur-3xl" style={{}}></div>
</div>
<div className="relative flex h-full flex-col">
<div className="flex flex-col items-center gap-3 pt-2">
<div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40 group-hover:border-emerald-400/80 transition-colors" style={{}}>
<div className="absolute inset-3 rounded-full bg-emerald-500/20 blur-md group-hover:blur-lg transition-all">
</div>
<svg aria-hidden="true" className="transition-transform duration-700 group-hover:rotate-[360deg]" data-icon="solar:lock-keyhole-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" fill="currentColor" opacity=".5"></path>
<path className="" d="M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z" fill="currentColor"></path>
</svg>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-200" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" style={{}}></span>
<span className="font-normal tracking-tight">HSM Shards Active</span>
</div>
</div>
<div className="mt-4 space-y-1.5 text-center">
<h3 className="text-base font-medium tracking-tight text-slate-50" style={{}}>
              Sentinel Vault
            </h3>
<p className="text-sm text-slate-300 font-light" style={{}}>
              Distribute signing authority across regions securely.
            </p>
</div>
<div className="mt-4 grid gap-3 text-[0.7rem] text-slate-300" style={{}}>
<div className="flex items-center justify-between rounded-2xl border border-emerald-400/30 bg-black/40 px-3 py-2 transition-colors hover:border-emerald-400/80 hover:bg-emerald-500/10 cursor-pointer" style={{}}>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-height="14" data-icon="solar:scanner-bold-duotone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" fill="currentColor" opacity=".5"></path>
<path d="M10.004 5.752a.75.75 0 1 0-.008-1.5c-1.082.006-1.98.03-2.713.159c-.752.131-1.395.382-1.922.883c-.455.433-.76.872-.925 1.503c-.15.572-.177 1.275-.184 2.198a.75.75 0 1 0 1.5.011c.008-.949.04-1.466.135-1.828c.08-.303.206-.51.509-.798c.242-.23.572-.392 1.145-.492c.592-.103 1.37-.13 2.463-.136m4-1.5a.75.75 0 0 0-.008 1.5c1.093.006 1.871.033 2.463.136c.573.1.903.262 1.145.492c.303.289.43.495.509.798c.095.362.128.88.135 1.828a.75.75 0 0 0 1.5-.011c-.007-.923-.034-1.626-.184-2.198c-.166-.63-.47-1.07-.925-1.503c-.527-.501-1.17-.752-1.922-.883c-.733-.129-1.631-.153-2.713-.159M5 11.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm.752 3.745a.75.75 0 1 0-1.5.011c.007.923.034 1.626.184 2.198c.166.63.47 1.07.925 1.503c.527.5 1.17.751 1.922.883c.733.128 1.631.153 2.713.159a.75.75 0 0 0 .008-1.5c-1.093-.006-1.871-.033-2.463-.137c-.573-.1-.903-.261-1.145-.492c-.303-.288-.43-.495-.509-.797c-.095-.362-.127-.88-.135-1.828m13.996.011a.75.75 0 1 0-1.5-.011c-.008.948-.04 1.466-.135 1.828c-.08.302-.206.509-.509.797c-.242.23-.572.392-1.145.492c-.592.104-1.37.13-2.463.137a.75.75 0 1 0 .008 1.5c1.082-.006 1.98-.03 2.713-.16c.752-.13 1.395-.381 1.922-.882c.455-.434.76-.873.925-1.503c.15-.572.177-1.275.184-2.198" fill="currentColor">
</path>
</svg>
<span>Policy groups</span>
</div>
<span className="font-normal tracking-tight text-emerald-200" style={{}}>Level 4</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-emerald-400/30 bg-black/40 px-3 py-2 transition-colors hover:border-emerald-400/80 hover:bg-emerald-500/10 cursor-pointer" style={{}}>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-height="14" data-icon="solar:heart-pulse-bold-duotone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26C22 3.35 16.5.663 12 5.5C7.5.663 2 3.349 2 9.26" fill="currentColor" opacity=".5"></path>
<path d="M10.093 10.747q.133-.191.23-.325c.056.097.119.21.194.348l1.71 3.109c.166.302.33.598.493.813c.175.23.482.546.975.555s.813-.294.996-.518c.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.764c.113-.154.179-.204.228-.231s.125-.058.315-.077c.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027a2.2 2.2 0 0 0-.91.264a2.2 2.2 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377l-1.709-3.108c-.154-.28-.307-.56-.463-.764c-.17-.224-.462-.52-.93-.545c-.467-.025-.789.237-.982.442c-.177.186-.36.448-.543.71l-.31.442c-.227.324-.37.526-.493.672a.8.8 0 0 1-.223.203c-.046.024-.118.05-.293.066c-.19.018-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024c.29-.026.571-.085.85-.23c.28-.145.489-.343.676-.564c.173-.205.354-.464.559-.757z" fill="currentColor">
</path>
</svg>
<span className="">Tamper feed</span>
</div>
<span className="font-normal tracking-tight text-emerald-200" style={{}}>Secure</span>
</div>
</div>
</div>
</section>

<section className="animate-in delay-500 overflow-hidden sm:p-6 bg-gradient-to-tr from-emerald-500/15 via-black to-black rounded-3xl pt-5 pr-5 pb-5 pl-5 relative hover-card-effect" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>
<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="absolute right-0 bottom-0 h-44 w-44 translate-y-10 translate-x-6 rounded-full bg-emerald-500/30 blur-3xl" style={{}}></div>
</div>
<div className="relative flex h-full flex-col">
<div className="flex items-center justify-between">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-emerald-200/80" style={{}}>
              Liquidity Grid
            </p>
<span className="text-[0.7rem] font-normal tracking-tight text-emerald-200" style={{}}>
            18 Currencies
          </span>
</div>
<div className="mt-4 space-y-3">
<div className="relative rounded-2xl border border-emerald-400/30 bg-black/50 px-3 py-2.5 transition-all hover:border-emerald-400/60 hover:bg-black/70 hover:scale-[1.02] cursor-pointer" style={{}}>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-[0.7rem] font-normal tracking-tight text-emerald-100 border border-emerald-400/60" style={{}}>
                  EUR
                </span>
<div className="">
<p className="text-xs font-normal tracking-tight text-slate-200" style={{}}>Eurozone</p>
<p className="text-[0.7rem] text-slate-400" style={{}}>SEPA • T+0</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium tracking-tight text-emerald-200" style={{}}>+€842</p>
<p className="text-[0.7rem] text-slate-400" style={{}}>Bal: €12,907</p>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-emerald-400/30 bg-black/50 px-3 py-2.5 transition-all hover:border-emerald-400/60 hover:bg-black/70 hover:scale-[1.02] cursor-pointer" style={{}}>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-[0.7rem] font-normal tracking-tight text-emerald-100 border border-emerald-400/60" style={{}}>
                  BRL
                </span>
<div className="">
<p className="text-xs font-normal tracking-tight text-slate-200" style={{}}>Brazil</p>
<p className="text-[0.7rem] text-slate-400" style={{}}>PIX • Instant</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium tracking-tight text-emerald-200" style={{}}>+R$5,104</p>
<p className="text-[0.7rem] text-slate-400" style={{}}>Bal: R$31,220</p>
</div>
</div>
</div>
</div>
<div className="mt-4 space-y-1">
<h3 className="text-base font-medium tracking-tight text-slate-50" style={{}}>
              Currency Hub
            </h3>
<p className="text-sm text-slate-300 font-light" style={{}}>
              Route funds without manual FX ops.
            </p>
</div>
</div>
</section>
</div>
</div>
<section className="overflow-hidden group/section sm:p-10 bg-gradient-to-b from-white/[0.02] to-black max-w-6xl border-white/10 border rounded-[2.5rem] mt-24 mr-auto mb-44 ml-auto pt-6 pr-6 pb-6 pl-6 relative">

<div className="pointer-events-none -translate-x-1/2 blur-[100px] bg-emerald-500/5 w-full h-full max-w-3xl absolute top-0 left-1/2"></div>

<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
</div>
<div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

<div className="flex h-full flex-col justify-between">
<div className="">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1" style={{}}>
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{}}></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" style={{}}></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-emerald-400" style={{}}>Neural Treasury Layer</span>
</div>
<h2 className="text-4xl font-medium leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Deploy autonomous
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 bg-clip-text text-transparent" style={{}}>financial agents.</span>
</h2>

<div className="relative mt-10">
<div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent">
</div>
<div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
<div className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/50 py-2 pr-4 backdrop-blur-sm sm:border-none sm:bg-transparent sm:p-0">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" style={{}}>
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5">
</path>
<path d="M11.25 8v1a2.25 2.25 0 0 1 0 4.5h1.5a2.25 2.25 0 0 1 0 4.5h-2a.75.75 0 0 0 0 1.5h2a3.75 3.75 0 0 0 0-7.5h-1.5a3.75 3.75 0 0 0 0-7.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" fill="currentColor">
</path>
</svg>
</div>
<span className="text-sm font-medium text-slate-300" style={{}}>Smart Liquidity</span>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/50 py-2 pr-4 backdrop-blur-sm sm:border-none sm:bg-transparent sm:p-0">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" style={{}}>
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.192 21.762c.456.209.98.209 1.436 0c4.193-1.915 8.267-6.256 8.166-12.83c-.01-1.644-.78-3.174-2.11-4.194l-4.25-3.26c-.926-.71-2.223-.71-3.149 0l-4.25 3.26c-1.33 1.02-2.1 2.55-2.11 4.194c-.101 6.574 3.973 10.915 8.167 12.83" fill="currentColor" opacity=".5"></path>
<path d="M15.53 10.47a.75.75 0 0 0-1.06-1.06l-3.72 3.72l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" fill="currentColor">
</path>
</svg>
</div>
<span className="text-sm font-medium text-slate-300" style={{}}>Auto Hedging</span>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/50 py-2 pr-4 backdrop-blur-sm sm:border-none sm:bg-transparent sm:p-0">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" style={{}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M15.5 13a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zm-3.5-2a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0zm-3.5 1a.75.75 0 0 0-1.5 0v3.25a.75.75 0 0 0 1.5 0z" fill="currentColor">
</path>
</svg>
</div>
<span className="text-sm font-medium text-slate-300" style={{}}>Live Ledger</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/5 pt-8 sm:grid-cols-2">
<div className="">
<p className="text-base font-light leading-relaxed text-slate-400" style={{}}>
              Our neural engine continuously monitors 40+ liquidity venues to optimize your treasury's yield while
              maintaining zero-trust security protocols.
            </p>
<button className="group mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium tracking-tight text-black transition-all hover:scale-105 hover:bg-slate-200 active:scale-95" style={{}}>
<span className="">Activate Agents</span>
<svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>
<div className="hidden border-l border-white/5 pl-8 sm:block">
<div className="flex flex-col gap-4">
<div className="">
<div className="text-2xl font-medium tracking-tight text-white">24/7</div>
<div className="mt-1 text-xs uppercase tracking-wider text-slate-500" style={{}}>Active Monitoring</div>
</div>
<div className="">
<div className="text-2xl font-medium tracking-tight text-white">0.02s</div>
<div className="mt-1 text-xs uppercase tracking-wider text-slate-500" style={{}}>Execution Time</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative gap-x-4 gap-y-4">

<div className="group overflow-hidden transition-colors hover:border-emerald-500/30 bg-slate-900 h-[220px] border-white/10 border rounded-2xl relative">
<img alt="Liquidity" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f13eb4bd-6551-4b44-8e81-5fe72cdc696a_800w.webp"/>
<div className="bg-gradient-to-b from-black/0 via-black/0 to-transparent/50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-3 top-3" style={{}}>
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-400 backdrop-blur-md" style={{}}>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M7 7.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 7.75M7.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM7 15.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75" fill="currentColor">
</path>
</svg>
</div>
</div>
<div className="absolute right-3 top-3" style={{}}>
<span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300 backdrop-blur-md" style={{}}>Active</span>
</div>
<div className="absolute bottom-4 left-4 right-4" style={{}}>
<h3 className="text-lg font-medium tracking-tight text-white">LiquidityBot</h3>
<p className="mt-0.5 text-xs font-light text-slate-400" style={{}}>Yield optimization v3</p>
</div>
</div>

<div className="group relative h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-colors hover:border-emerald-500/30" style={{}}>
<img alt="Risk" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab5ef303-02e3-4abe-81ee-4d5f4d162e6b_800w.webp"/>
<div className="bg-gradient-to-b from-black/0 via-black/0 to-transparent/25 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-3 top-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-400 backdrop-blur-md" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.192 21.762c.456.209.98.209 1.436 0c4.193-1.915 8.267-6.256 8.166-12.83c-.01-1.644-.78-3.174-2.11-4.194l-4.25-3.26c-.926-.71-2.223-.71-3.149 0l-4.25 3.26c-1.33 1.02-2.1 2.55-2.11 4.194c-.101 6.574 3.973 10.915 8.167 12.83" fill="currentColor" opacity=".5"></path>
<path d="M12 7a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 7m0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2" fill="currentColor">
</path>
</svg>
</div>
</div>
<div className="absolute right-3 top-3">
<span className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md" style={{}}>Sentinel</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-lg font-medium tracking-tight text-white">RiskGuard</h3>
<p className="mt-0.5 text-xs font-light text-slate-400" style={{}}>Real-time monitoring</p>
</div>
</div>

<div className="group overflow-hidden transition-colors hover:border-emerald-500/30 bg-slate-900 h-[220px] border-white/10 border rounded-2xl relative">
<img alt="Ledger" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63b53fdb-8e5f-4cfa-87c1-ac56c2e9893b_800w.webp"/>
<div className="bg-gradient-to-b from-black/0 via-black/0 to-transparent/25 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute left-3 top-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-400 backdrop-blur-md" style={{}}>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" opacity=".5" r="10"></circle>
<path className="" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z" fill="currentColor">
</path>
</svg>
</div>
</div>
<div className="absolute right-3 top-3">
<span className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md" style={{}}>Sync</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-lg font-medium tracking-tight text-white">LedgerCore</h3>
<p className="mt-0.5 text-xs font-light text-slate-400" style={{}}>Multi-chain reconcile</p>
</div>
</div>

<div className="group overflow-hidden transition-colors hover:border-emerald-500/30 bg-slate-900 h-[220px] border-white/10 border rounded-2xl relative">
<img alt="Compliance" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc165254-838f-4a43-a591-31619f8dec85_800w.webp"/>
<div className="bg-gradient-to-b from-black/0 via-black/0 to-transparent/25 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute left-3 top-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-400 backdrop-blur-md" style={{}}>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path className="" d="M13 2.05c-.324.016-.654.05-1 .1v19.7c.346.05.676.084 1 .1c4.454 0 8.21-3.79 8.898-8.863c.074-.542-.334-1.033-.88-1.087h-8.018zM11 2.05c-4.454 0-8.21 3.79-8.898 8.863c-.074.542.334 1.033.88 1.087h8.018V2.15c-.324-.05-.654-.084-1-.1" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="absolute right-3 top-3">
<span className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md" style={{}}>Global</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-lg font-medium tracking-tight text-white">ComplianceAI</h3>
<p className="mt-0.5 text-xs font-light text-slate-400" style={{}}>Automated KYB/AML</p>
</div>
</div>
</div>
</div>
<div className="pointer-events-none group-hover:opacity-60 transition-opacity duration-500 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl animate-pulse" style={{}}></div>
<div className="absolute right-0 -bottom-10 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" style={{}}></div>
</div></section>

<div className="max-w-6xl mr-auto mb-24 ml-auto pr-4 pb-20 pl-4">

<div className="flex flex-col gap-4 sm:flex-row sm:items-center border-white/5 border-t mt-4 mb-10 pt-10 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-white">
          Operational Intelligence
        </h2>
<p className="mt-2 text-sm text-slate-400" style={{}}>
          Advanced controls for the modern treasury stack.
        </p>
</div>
<button className="group flex gap-2 transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-slate-300 bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center">
<span className="">View Documentation</span>
<svg aria-hidden="true" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>

<div className="grid gap-6 md:grid-cols-2 gap-x-6 gap-y-6">

<div className="group overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:bg-emerald-950/30 transition-all duration-500 bg-emerald-950/20 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.2))', -BorderRadiusBefore: '2rem'}}>
<div className="flex bg-gradient-to-b from-white/5 to-transparent h-64 rounded-3xl mb-8 relative shadow-inner items-center justify-center group-hover:bg-white/[0.07] transition-colors duration-500" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(107, 114, 128, 0.1), rgba(107, 114, 128, 0))', -BorderRadiusBefore: '24px'}}>

<div className="[mask-image:radial-gradient(black,transparent)] absolute top-0 right-0 bottom-0 left-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700">
</div>

<div className="relative z-10 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F0F] p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="relative h-2 w-2">
<div className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></div>
<div className="relative h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
</div>
</div>
<div className="">
<div className="text-xs font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">VWAP
                    Strategy</div>
<div className="text-[10px] text-slate-500">ETH / USDC • 50bps</div>
</div>
</div>
</div>

<div className="mb-6 space-y-1.5">
<div className="flex justify-between text-[10px] font-medium">
<span className="text-slate-400 font-mono">00:48</span>
<span className="text-slate-400 font-mono">1:59</span>
</div>
<div className="h-1.5 overflow-hidden bg-white/10 w-full rounded-full relative" style={{}}>
<div className="group-hover:w-1/2 transition-all duration-[2000ms] ease-in-out bg-emerald-500 w-1/3 h-full rounded-full absolute top-0 left-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6">
<button className="text-slate-600 hover:text-slate-300 transition-colors hover:scale-110 active:scale-95">
<svg aria-hidden="true" data-icon="solar:skip-previous-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" fill="currentColor" opacity=".5"></path><path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648z" fill="currentColor"></path></svg>
</button>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 active:scale-95 hover:bg-emerald-400 hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
<svg aria-hidden="true" data-icon="solar:pause-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18z" fill="currentColor"></path><path d="M14 6c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" fill="currentColor" opacity=".5"></path></svg>
</button>
<button className="text-slate-600 hover:text-slate-300 transition-colors hover:scale-110 active:scale-95">
<svg aria-hidden="true" data-icon="solar:skip-next-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z" fill="currentColor" opacity=".5"></path><path d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648z" fill="currentColor"></path></svg>
</button>
</div>

<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] py-1.5 pl-2 pr-3 shadow-lg transition-all duration-300 group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10">
<div className="h-4 w-4 rounded bg-gradient-to-br from-rose-500 to-orange-500 animate-pulse"></div>
<div className="text-[10px] font-medium text-slate-300">Order Filling...</div>
<svg aria-hidden="true" className="text-emerald-500" data-icon="solar:soundwave-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-8 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path>
<path d="M16.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z" fill="currentColor" opacity=".5"></path>
</svg>
</div>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-white transition-colors">
          Algorithmic Execution
        </h3>
<p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          Manage your VWAP orders and TWAP strategies from one unified panel. Never miss a liquidity window.
        </p>
</div>

<div className="group overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:bg-emerald-950/30 transition-all duration-500 bg-emerald-950/20 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.2))', -BorderRadiusBefore: '2rem'}}>
<div className="flex bg-gradient-to-b from-white/5 to-transparent h-64 rounded-3xl mb-8 relative shadow-inner items-center justify-center group-hover:bg-white/[0.07] transition-colors duration-500" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(107, 114, 128, 0.1), rgba(107, 114, 128, 0))', -BorderRadiusBefore: '24px'}}>
<div className="relative z-10 w-64 rounded-2xl border border-white/10 bg-[#0F0F0F] p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-[1.02]">
<div className="mb-5 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent group-hover:border-emerald-500/30 transition-colors">
<svg aria-hidden="true" className="text-emerald-400" data-icon="solar:chart-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293" fill="currentColor">
</path>
<path d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293" fill="currentColor" opacity=".4"></path>
<path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z" fill="currentColor" opacity=".7"></path>
<path d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" fill="currentColor"></path>
</svg>
</div>
<div className="">
<div className="text-xs font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
                    Liquidity</div>
<div className="text-[10px] text-slate-500">2/4 Pools Active</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">98%</span>
<span className="text-[8px] uppercase tracking-wider text-slate-500">Health</span>
</div>
</div>

<div className="flex h-20 items-end justify-between gap-1.5 px-1">
<div className="w-full rounded-t-md bg-emerald-500/10 h-[40%] group-hover:h-[55%] transition-all duration-500 ease-out">
</div>
<div className="w-full rounded-t-md bg-emerald-500/20 h-[60%] group-hover:h-[45%] transition-all duration-500 ease-out delay-75">
</div>
<div className="w-full rounded-t-md bg-emerald-500/40 h-[35%] group-hover:h-[65%] transition-all duration-500 ease-out delay-100">
</div>
<div className="w-full rounded-t-md bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] h-[85%] group-hover:h-[95%] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-500 ease-out delay-150">
</div>
<div className="w-full rounded-t-md bg-emerald-500/30 h-[55%] group-hover:h-[40%] transition-all duration-500 ease-out delay-75">
</div>
<div className="w-full rounded-t-md bg-emerald-500/10 h-[30%] group-hover:h-[50%] transition-all duration-500 ease-out">
</div>
</div>
<div className="mt-4 flex gap-2">
<div className="flex-1 rounded-full border border-white/5 bg-white/5 py-1.5 text-center text-[10px] font-medium text-slate-400 cursor-pointer hover:bg-white/10 transition-colors">
                Treasury</div>
<div className="flex-1 rounded-full border border-white/5 bg-white/5 py-1.5 text-center text-[10px] font-medium text-slate-400 cursor-pointer hover:bg-white/10 transition-colors">
                Flows</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-white transition-colors">
          Data-Driven Forecasts
        </h3>
<p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          Track your runway, team burn rate, and projected cash positions with actionable, real-time data.
        </p>
</div>

<div className="group overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:bg-emerald-950/30 transition-all duration-500 bg-emerald-950/20 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.2))', -BorderRadiusBefore: '2rem'}}>
<div className="flex bg-gradient-to-b from-white/5 to-transparent h-64 rounded-3xl mb-8 relative shadow-inner items-center justify-center group-hover:bg-white/[0.07] transition-colors duration-500" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(107, 114, 128, 0.1), rgba(107, 114, 128, 0))', -BorderRadiusBefore: '24px'}}>

<div className="absolute top-10 opacity-30 blur-[1px] transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-6 group-hover:translate-x-2">
<div className="h-28 w-48 rounded-xl bg-slate-800 border border-white/20 shadow-2xl"></div>
</div>

<div className="relative z-10 mt-8 w-60 rounded-xl border border-white/10 bg-[#0F0F0F] p-4 shadow-2xl ring-1 ring-white/5 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105 group-hover:-rotate-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="text-emerald-400" data-icon="solar:card-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828S6.23 20 10 20" fill="currentColor" opacity=".5"></path>
<path d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-6.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" fill="currentColor">
</path>
</svg>
<span className="text-xs font-bold text-white">MatrixPay</span>
</div>
<span className="text-[10px] font-mono text-slate-500">•••• 8888</span>
</div>
<div className="mt-8">
<div className="text-[10px] text-slate-500">Pending Batch</div>
<div className="mt-0.5 flex items-baseline gap-1">
<span className="text-lg font-semibold text-white">$60.00</span>
<span className="text-[10px] text-slate-500">USD</span>
</div>
</div>

<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-400 backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="animate-spin" data-icon="solar:refresh-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" opacity=".5" r="10"></circle>
<path d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z" fill="currentColor">
</path>
</svg>
              Processing
            </div>

<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
<div className="flex -space-x-2">
<div className="h-5 w-5 rounded-full border border-[#0F0F0F] bg-slate-700 ring-2 ring-[#0F0F0F]"></div>
<div className="h-5 w-5 rounded-full border border-[#0F0F0F] bg-slate-600 ring-2 ring-[#0F0F0F]"></div>
</div>
<span className="text-[10px] text-slate-500 group-hover:text-emerald-400 transition-colors">Approved via Slack</span>
</div>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-white transition-colors">
          One-Tap Reconciliation
        </h3>
<p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          Execute vendor payouts and inter-company loans with confidence. Secure, fast, and fully compliant.
        </p>
</div>

<div className="group overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:bg-emerald-950/30 transition-all duration-500 bg-emerald-950/20 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.2))', -BorderRadiusBefore: '2rem'}}>
<div className="flex bg-gradient-to-b from-white/5 to-transparent h-64 rounded-3xl mb-8 relative shadow-inner items-center justify-center group-hover:bg-white/[0.07] transition-colors duration-500" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(107, 114, 128, 0.1), rgba(107, 114, 128, 0))', -BorderRadiusBefore: '24px'}}>
<div className="relative z-10 w-64 rounded-2xl border border-white/10 bg-[#0F0F0F] p-4 shadow-2xl ring-1 ring-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-[1.02]">

<div className="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
<div className="relative">
<div className="h-2 w-2 absolute -right-0.5 -top-0.5 rounded-full bg-emerald-500 ring-2 ring-[#0F0F0F] animate-pulse">
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black border border-white/10 shadow-inner">
<svg aria-hidden="true" className="text-slate-200" data-icon="solar:user-id-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4" fill="currentColor" opacity=".5"></path>
<path d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" fill="currentColor">
</path>
</svg>
</div>
</div>
<div className="">
<div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">Risk Analyst AI
                </div>
<div className="text-[10px] text-emerald-400">Active Now</div>
</div>
</div>

<div className="space-y-2.5">
<div className="w-3/4 rounded-lg rounded-tl-none bg-white/5 p-2 transition-all duration-300 hover:bg-white/10 hover:translate-x-1 cursor-default">
<div className="h-1.5 w-12 rounded-full bg-slate-600 mb-1.5"></div>
<div className="h-1.5 w-24 rounded-full bg-slate-700"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-black p-2 transition-all duration-300 hover:border-emerald-500/30 shadow-sm">
<div className="flex gap-2">
<div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/5 text-indigo-300">
<svg aria-hidden="true" data-icon="solar:graph-new-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003l.004-.001q.004 0 .011.004a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" fill="currentColor">
</path>
</svg>
</div>
<div className="flex-1 py-1">
<div className="h-1.5 w-16 rounded-full bg-slate-600 mb-2"></div>
<div className="h-1.5 w-10 rounded-full bg-slate-700"></div>
</div>
</div>

<div className="mt-2 flex items-center gap-2 rounded-full bg-white/5 px-2 py-1.5 border border-transparent focus-within:border-emerald-500/30 focus-within:bg-black transition-colors">
<div className="flex gap-1 ml-1">
<div className="h-1 w-1 rounded-full bg-slate-500 animate-bounce"></div>
<div className="h-1 w-1 rounded-full bg-slate-500 animate-bounce delay-100"></div>
<div className="h-1 w-1 rounded-full bg-slate-500 animate-bounce delay-200"></div>
</div>
<div className="ml-auto h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center text-black hover:bg-emerald-400 cursor-pointer transition-colors">
<svg aria-hidden="true" data-icon="solar:arrow-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 20.75a.75.75 0 0 0 .75-.75v-9.25h-1.5V20c0 .414.336.75.75.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path d="M6 10.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-3 left-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-110 hover:rotate-90 hover:bg-emerald-400 cursor-pointer">
<svg aria-hidden="true" data-icon="solar:add-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor">
</path>
</svg>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-white transition-colors">
          Your AI Risk Sentinel
        </h3>
<p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          Brainstorm hedging strategies, get compliance feedback, and collaborate live with your integrated AI partner.
        </p>
</div>
</div>
</div>
<div className="max-w-6xl mr-auto mb-24 ml-auto pr-4 pb-20 pl-4">
<style>
      @keyframes scan-line {
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }

        50% {
          opacity: 1;
        }

        100% {
          transform: translateY(300px);
          opacity: 0;
        }
      }

      @keyframes blink {

        0%,
        100% {
          opacity: 1;
        }

        50% {
          opacity: 0;
        }
      }

      .animate-scan {
        animation: scan-line 3s linear infinite;
      }

      .animate-cursor {
        animation: blink 1s step-end infinite;
      }
    </style>

<div className="flex flex-col gap-4 sm:flex-row sm:items-center border-white/5 border-t mt-4 mb-10 pt-10 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-white group cursor-default">
          Global Infrastructure
          <span className="inline-block ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</h2>
<p className="mt-2 text-sm text-slate-400" style={{}}>
          Built on a redundant, quantum-secure mesh network.
        </p>
</div>
<button className="group flex gap-2 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] text-xs font-medium text-slate-300 bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center cursor-pointer">
<div className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{}}></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" style={{}}></span>
</div>
<span className="group-hover:text-emerald-400 transition-colors">Systems Operational</span>
</button>
</div>

<div className="grid gap-6 md:grid-cols-12">

<div className="group col-span-1 overflow-hidden hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 md:col-span-7 md:p-10 bg-gradient-to-br from-emerald-400/5 to-emerald-600/20 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '2rem'}}>

<div className="absolute inset-0 pointer-events-none">
<img alt="Network Mesh" className="h-full w-full object-cover opacity-20 mix-blend-screen transition-transform duration-[2s] ease-in-out group-hover:scale-110 group-hover:rotate-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ebff6d5-cc57-4279-972f-e83f6c19894e_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>

<div className="absolute inset-x-0 top-0 h-px bg-emerald-500/50 blur-sm shadow-[0_0_10px_#10b981] opacity-0 group-hover:animate-scan transition-opacity duration-300">
</div>
</div>
<div className="z-10 flex flex-col gap-12 h-full relative gap-x-12 gap-y-12 justify-between">
<div className="flex items-start justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors duration-300">
<svg className="text-emerald-400 group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
</path>
</svg>
</div>
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors" style={{}}>
              Edge Network v4.0
            </div>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
<div className="transform transition-transform duration-300 hover:-translate-y-1 cursor-default">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                140+</div>
<div className="mt-1 text-[10px] text-slate-500 uppercase tracking-wider group-hover:text-emerald-500/70 transition-colors" style={{}}>Countries</div>
</div>
<div className="transform transition-transform duration-300 hover:-translate-y-1 cursor-default delay-75">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                12ms</div>
<div className="mt-1 text-[10px] text-slate-500 uppercase tracking-wider group-hover:text-emerald-500/70 transition-colors" style={{}}>Latency Avg</div>
</div>
<div className="transform transition-transform duration-300 hover:-translate-y-1 cursor-default delay-150">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                99.99%</div>
<div className="mt-1 text-[10px] text-slate-500 uppercase tracking-wider group-hover:text-emerald-500/70 transition-colors" style={{}}>Uptime</div>
</div>
</div>
</div>
</div>

<div className="group col-span-1 flex flex-col overflow-hidden hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 md:col-span-5 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-emerald-400/20 via-[#ededed]/0 to-emerald-600/10 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '2rem'}}>
<div className="mb-6 flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
<svg className="text-slate-200 group-hover:text-emerald-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-md border border-transparent group-hover:border-white/10 group-hover:bg-white/10 transition-all cursor-pointer hover:text-emerald-400" style={{}}>
<span className="">api.matrix.finance</span>
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" style={{}}></div>
</div>
</div>
<div className="overflow-hidden group-hover:border-emerald-500/20 transition-colors duration-300 group-hover:bg-black/80 bg-black/50 rounded-xl mb-6 pt-4 pr-4 pb-4 pl-4 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '12px'}}>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 cursor-pointer text-slate-400 hover:text-white transition-colors">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</div>
</div>
<div className="flex gap-1.5 mb-3 opacity-50">
<div className="h-2 w-2 rounded-full bg-slate-600 group-hover:bg-rose-500 transition-colors"></div>
<div className="h-2 w-2 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors delay-75"></div>
<div className="h-2 w-2 rounded-full bg-slate-600 group-hover:bg-emerald-500 transition-colors delay-150"></div>
</div>
<code className="font-mono text-[10px] leading-relaxed text-slate-300 relative block" style={{}}>
<span className="text-purple-400" style={{}}>const</span> payout = <span className="text-blue-400" style={{}}>await</span> client.send({
            amount: <span className="text-emerald-400" style={{}}>500000</span>,
            currency: <span className="text-orange-400" style={{}}>'USDC'</span>,
            chain: <span className="text-orange-400" style={{}}>'SOL'</span>
          });<span className="inline-block w-1.5 h-3 bg-emerald-500 ml-0.5 align-middle animate-cursor opacity-0 group-hover:opacity-100"></span>
</code>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-white transition-colors" style={{}}>
            Developer API
          </h3>
<p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors" style={{}}>
            Integrate programmed money into your app with type-safe SDKs for Node, Python, and Go.
          </p>
</div>
</div>

<div className="group relative col-span-1 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950/80 to-slate-950/40 p-8 md:col-span-12 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]" style={{}}>
<div className="absolute right-0 top-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:bg-emerald-500/10 opacity-60" style={{}}></div>
<div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-4">
<div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-500">
<div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<svg className="relative z-10 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Bank-Grade Security</h3>
<p className="mt-1 max-w-lg text-sm text-slate-400 group-hover:text-slate-300 transition-colors" style={{}}>
                We are SOC2 Type II certified and GDPR compliant. Your funds are secured by MPC wallets and hardware
                security modules.
              </p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition-all hover:bg-white/10 hover:border-emerald-500/30 hover:translate-x-1" href="#">
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs font-medium text-slate-200" style={{}}>SOC2 Type II</span>
</a>
<a className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition-all hover:bg-white/10 hover:border-emerald-500/30 hover:translate-x-1 delay-75" href="#">
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs font-medium text-slate-200" style={{}}>ISO 27001</span>
</a>
<a className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition-all hover:bg-white/10 hover:border-emerald-500/30 hover:translate-x-1 delay-150" href="#">
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs font-medium text-slate-200" style={{}}>PCI-DSS</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div><div className="max-w-6xl mr-auto ml-auto pr-4 pb-12 pl-4">

<div className="mb-20 flex items-center justify-center">
<div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<div className="mb-24">
<div className="mb-12 text-center">
<div className="inline-flex gap-2 bg-[#ffffff]/5 border-[#ffffff]/10 border rounded-full mb-6 pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{}}></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" style={{}}></span>
</span>
<span className="text-xs font-medium text-slate-50">Community Feedback</span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Trusted by the <span className="text-emerald-400" style={{}}>modern economy</span>.
      </h2>
<p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm font-light" style={{}}>
        Join 4,000+ forward-thinking teams who have replaced manual treasury operations with MatrixPay's intelligent automation.
      </p>
</div>
<div className="relative flex w-full flex-col overflow-hidden py-8" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-100% - 1.5rem)); }
    }
    .animate-marquee {
      animation: marquee 40s linear infinite;
    }
  </style>
<div className="flex w-full gap-6 overflow-hidden group">

<div className="flex shrink-0 flex-row items-stretch gap-6 animate-marquee group-hover:[animation-play-state:paused]">

<div className="w-[350px] md:w-[400px] flex-none group/card relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]">
<div className="mb-4 text-emerald-400">
<svg className="opacity-80 w-[20px] h-[20px] text-slate-50" fill="currentColor" height="20" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 font-light">
          "The API is a masterpiece of engineering. What used to take our ops team 3 days of manual reconciliation now happens in <span className="text-white font-medium">400 milliseconds</span>. It's not just software, it's leverage."
        </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex text-[10px] font-semibold text-white bg-slate-50/20 w-8 h-8 rounded-full items-center justify-center">
            SM
          </div>
<div>
<div className="text-xs font-medium text-white">Sarah Miller</div>
<div className="text-[10px] text-slate-500">CTO at Nexus Protocol</div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] flex-none group/card relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]">
<div className="mb-4 text-emerald-400">
<svg className="opacity-80 w-[20px] h-[20px] text-slate-50" fill="currentColor" height="20" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 font-light">
          "We needed a solution that could handle multi-chain payroll without the headache of managing 12 distinct wallets. MatrixPay gave us a <span className="text-white font-medium">single pane of glass</span> for everything."
        </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex text-[10px] font-semibold text-white bg-slate-50/20 w-8 h-8 rounded-full items-center justify-center">
            AC
          </div>
<div className="">
<div className="text-xs font-medium text-white">Alex Chen</div>
<div className="text-[10px] text-slate-500">Founder at Horizon Labs</div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] flex-none group/card relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]">
<div className="mb-4 text-emerald-400">
<svg className="opacity-80 w-[20px] h-[20px] text-slate-50" fill="currentColor" height="20" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 font-light">
          "The security architecture is unmatched. As a regulated entity, we can't compromise on compliance. MatrixPay built the <span className="text-white font-medium">vault infrastructure</span> we were trying to build internally."
        </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex text-[10px] font-semibold text-white bg-slate-50/20 w-8 h-8 rounded-full items-center justify-center">
            JW
          </div>
<div>
<div className="text-xs font-medium text-white">James Wilson</div>
<div className="text-[10px] text-slate-500">Head of Ops at SwiftPay</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex shrink-0 flex-row items-stretch gap-6 animate-marquee group-hover:[animation-play-state:paused]">

<div className="w-[350px] md:w-[400px] flex-none group/card relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]">
<div className="mb-4 text-emerald-400">
<svg className="opacity-80 w-[20px] h-[20px] text-slate-50" fill="currentColor" height="20" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 font-light">
          "The API is a masterpiece of engineering. What used to take our ops team 3 days of manual reconciliation now happens in <span className="text-white font-medium">400 milliseconds</span>. It's not just software, it's leverage."
        </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex text-[10px] font-semibold text-white bg-slate-50/20 w-8 h-8 rounded-full items-center justify-center">
            SM
          </div>
<div>
<div className="text-xs font-medium text-white">Sarah Miller</div>
<div className="text-[10px] text-slate-500">CTO at Nexus Protocol</div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] flex-none group/card relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]">
<div className="mb-4 text-emerald-400">
<svg className="opacity-80 w-[20px] h-[20px] text-slate-50" fill="currentColor" height="20" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 font-light">
          "We needed a solution that could handle multi-chain payroll without the headache of managing 12 distinct wallets. MatrixPay gave us a <span className="text-white font-medium">single pane of glass</span> for everything."
        </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex text-[10px] font-semibold text-white bg-slate-50/20 w-8 h-8 rounded-full items-center justify-center">
            AC
          </div>
<div>
<div className="text-xs font-medium text-white">Alex Chen</div>
<div className="text-[10px] text-slate-500">Founder at Horizon Labs</div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] flex-none group/card relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]">
<div className="mb-4 text-emerald-400">
<svg className="opacity-80 w-[20px] h-[20px] text-slate-50" fill="currentColor" height="20" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 font-light">
          "The security architecture is unmatched. As a regulated entity, we can't compromise on compliance. MatrixPay built the <span className="text-white font-medium">vault infrastructure</span> we were trying to build internally."
        </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex text-[10px] font-semibold text-white bg-slate-50/20 w-8 h-8 rounded-full items-center justify-center">
            JW
          </div>
<div>
<div className="text-xs font-medium text-white">James Wilson</div>
<div className="text-[10px] text-slate-500">Head of Ops at SwiftPay</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="overflow-hidden z-10 border-white/10 border rounded-[2rem] mb-20 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)'}}><img alt="Container background" className="opacity-20 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec628e67-bca5-465e-8434-f4b09e9dd1f8_1600w.webp" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 35%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 35%, transparent)'}}/>

<div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" style={{}}></div>
<div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-10 translate-y-10 rounded-full bg-emerald-500/5 blur-[80px]" style={{}}></div>
<div className="z-10 flex flex-col text-center pt-20 pr-6 pb-20 pl-6 relative items-center justify-center">
<h2 className="max-w-2xl text-4xl font-medium tracking-tight text-white sm:text-5xl">
        Ready to modernize your 
        <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 bg-clip-text text-transparent" style={{}}>treasury stack?</span>
</h2>
<p className="mt-6 max-w-md text-lg text-slate-400 font-light" style={{}}>
        Get started with a free sandbox account today. No credit card required for testing environments.
      </p>
<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
<button className="group flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95">
<span>Start Building</span>
<svg aria-hidden="true" className="text-black/50 transition-transform group-hover:translate-x-1 group-hover:text-black" data-icon="solar:arrow-right-bold-duotone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
<button className="flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10">
<svg aria-hidden="true" className="text-slate-400" data-icon="solar:letter-bold-duotone" height="16" role="img" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 20c1.886 0 2.828 0 3.414-.586S22 17.886 22 16V8c0-1.886 0-2.828-.586-3.414S19.886 4 18 4H6c-1.886 0-2.828 0-3.414.586S2 6.114 2 8v8c0 1.886 0 2.828.586 3.414S4.114 20 6 20z" fill="currentColor" opacity=".5"></path><path d="M12.004 13.574a.75.75 0 0 1-.924-.266l-3.92-6.092A.75.75 0 0 1 7.16 6h9.68a.75.75 0 0 1 0 1.216l-3.912 6.092a.75.75 0 0 1-.924.266" fill="currentColor"></path></svg>
<span className="">Contact Sales</span>
</button>
</div>
<div className="mt-8 flex items-center gap-6 text-[10px] text-slate-500" style={{}}>
<div className="flex items-center gap-1.5">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">14-day free trial</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Cancel anytime</span>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 pt-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2.5" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.4)]" style={{}}>
<svg className="h-3.5 w-3.5 text-black fill-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{}}>MatrixPay</span>
</a>
<p className="mt-4 text-xs leading-relaxed text-slate-500" style={{}}>
          The financial operating system for internet-native organizations.
        </p>
<div className="mt-4 flex gap-4">
<a className="text-slate-500 transition-colors hover:text-white" href="#" style={{}}><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 transition-colors hover:text-white" href="#" style={{}}><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 transition-colors hover:text-white" href="#" style={{}}><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
<div className="col-span-2 md:col-span-3">
<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
<div>
<h4 className="text-xs font-medium text-white">Product</h4>
<ul className="mt-4 space-y-2.5 text-xs text-slate-500" style={{}}>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Treasury</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Payments</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Intelligence</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Vault</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white">Resources</h4>
<ul className="mt-4 space-y-2.5 text-xs text-slate-500" style={{}}>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>API Reference</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>System Status</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Security</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white">Company</h4>
<ul className="mt-4 space-y-2.5 text-xs text-slate-500" style={{}}>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Customers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#" style={{}}>Legal</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
<p className="text-[10px] text-slate-600" style={{}}>
        © 2024 MatrixPay Technologies Inc. All rights reserved.
      </p>
<div className="flex items-center gap-6 text-[10px] text-slate-600" style={{}}>
<a className="hover:text-slate-400" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-slate-400" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
