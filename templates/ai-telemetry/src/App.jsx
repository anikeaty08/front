import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
base: '#F6F7F9',
surface: '#FFFFFF',
panel: '#F2F4F7',
emerald: {
400: '#34D399',
500: '#10B981',
600: '#059669',
},
cyan: {
400: '#22D3EE',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.1em',
},
boxShadow: {
'subtle-up': '0 -4px 20px -10px rgba(0, 0, 0, 0.05)',
'float': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
'glow': '0 0 60px -15px rgba(16, 185, 129, 0.25)',
}
}
}
}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
    


            if (!window.auraChartAnimInit) {
            window.auraChartAnimInit = true;
            setInterval(() => {
                document.querySelectorAll('.js-aura-number').forEach(el => {
                    let val = parseFloat(el.innerText);
                    val += (Math.random() * 0.3);
                    el.innerText = val.toFixed(1);
                });
                document.querySelectorAll('.js-aura-number-sm').forEach(el => {
                    let val = parseFloat(el.innerText);
                    val += (Math.random() * 0.1);
                    el.innerText = val.toFixed(1);
                });
            }, 300);
        }
          
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col w-full max-w-[1360px] mr-auto ml-auto relative shadow-sm items-center">

<div className="mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>


<header className="sticky z-50 flex w-[calc(100%-2rem)] lg:px-8 shadow-black/20 [animation:animationIn_0.8s_ease-out_0.1s_both] bg-neutral-950/80 h-[64px] max-w-5xl border-neutral-800 border rounded-full mr-auto ml-auto pr-6 pl-6 top-4 shadow-lg backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2">
<div className="font-semibold text-base font-geist text-neutral-50 tracking-wide">TELEMETRY</div>
</div>
<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium font-geist text-neutral-400 transition-all duration-300 rounded-full hover:text-neutral-50 hover:bg-neutral-800/80" href="/product">
            Product
        </a>
<a className="px-4 py-2 text-sm font-medium font-geist text-neutral-400 transition-all duration-300 rounded-full hover:text-neutral-50 hover:bg-neutral-800/80" href="#">
            Solutions
        </a>
<a className="px-4 py-2 text-sm font-medium font-geist text-neutral-400 transition-all duration-300 rounded-full hover:text-neutral-50 hover:bg-neutral-800/80" href="#">
            Integrations
        </a>
<a className="px-4 py-2 text-sm font-medium font-geist text-neutral-400 transition-all duration-300 rounded-full hover:text-neutral-50 hover:bg-neutral-800/80" href="#">
            Pricing
        </a>
<a className="px-4 py-2 text-sm font-medium font-geist text-neutral-400 transition-all duration-300 rounded-full hover:text-neutral-50 hover:bg-neutral-800/80" href="#">
            Docs
        </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium transition-colors font-geist text-neutral-400 hover:text-neutral-50" href="#">
            Book Demo
        </a>
<a className="text-sm font-medium bg-neutral-100 px-5 py-2 rounded-full shadow-sm transition-transform duration-200 hover:-translate-y-[0.5px] font-geist hover:bg-white text-neutral-950" href="#">
            Start Free Trial
        </a>
</div>
</header>

<main className="flex-1 flex flex-col z-10 w-full pr-6 pb-16 pl-6 relative items-center pt-0">

<div className="flex flex-col z-10 overflow-hidden bg-neutral-900/40 w-full max-w-[1100px] rounded-none mr-auto mb-0 ml-auto pt-16 pr-6 pb-12 pl-6 relative shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md items-center">

<div className="absolute inset-0 z-0 pointer-events-none w-full h-full mix-blend-screen opacity-60" data-us-project="xLvbfXE8t7glcJDs4g9g" style={{width: '100%', height: '100%'}}></div>


<div className="inline-flex gap-2 border-white/[0.1] [animation:animationIn_0.8s_ease-out_0.2s_both] z-10 bg-neutral-950/80 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 relative shadow-sm backdrop-blur-md items-center">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-[11px] font-semibold uppercase tracking-widest font-geist text-neutral-300">AI Telemetry Platform</span>
</div>

<h1 className="md:text-5xl lg:text-6xl leading-[1.1] [animation:animationIn_0.8s_ease-out_0.3s_both] text-4xl text-neutral-50 tracking-tight font-geist text-center max-w-[800px] z-10 mb-6 relative">
        Monitor Every AI System <br className="hidden sm:block"/>Through One Telemetry Platform
    </h1>

<p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.4s_both] md:text-lg text-base text-neutral-400 font-geist text-center max-w-[600px] z-10 mb-10 relative">
        A unified telemetry platform that helps engineering teams monitor AI agents, track infrastructure health,
        analyze system telemetry, detect anomalies, and respond to operational events from a single dashboard.
    </p>

<div className="z-10 flex flex-col gap-4 sm:w-auto sm:flex-row [animation:animationIn_0.8s_ease-out_0.5s_both] w-full mb-14 relative items-center justify-center">
<a className="group flex w-full items-center justify-center gap-2 rounded-lg border border-[#009b81] bg-gradient-to-b from-[#00c9a7] to-[#009b81] px-6 py-2.5 text-sm font-medium shadow-md transition-all duration-200 hover:from-[#20d7b2] hover:to-[#00a88a] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c9a7] focus-visible:ring-offset-2 sm:w-auto text-white" href="#">
            Start Free Trial
            <iconify-icon className="text-base transition-transform duration-200 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="font-geist flex w-full items-center justify-center rounded-lg border border-white/[0.1] px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto bg-neutral-950/80 backdrop-blur-md text-neutral-300 hover:bg-neutral-800 hover:text-white">
            Watch Demo
        </button>
</div>

<div className="flex flex-col md:flex-row md:gap-8 [animation:animationIn_0.8s_ease-out_0.6s_both] z-10 text-xs font-medium relative items-center justify-center text-neutral-400">
<div className="flex items-center gap-2 font-geist">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:chart-square-linear"></iconify-icon>
            Real-time AI telemetry and system metrics
        </div>
<div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2 font-geist">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-warning-linear"></iconify-icon>
            Automated anomaly detection across infrastructure
        </div>
<div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
<div className="flex items-center gap-2 font-geist">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:radar-linear"></iconify-icon>
            Security monitoring and operational insights
        </div>
</div>
</div>






<div className="[animation:animationIn_0.8s_ease-out_0.6s_both] z-10 bg-neutral-900 w-full max-w-[1100px] rounded-[20px] mt-0 mr-auto ml-auto pt-1.5 pr-1.5 pb-1.5 pl-1.5 relative shadow-float">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] pointer-events-none bg-emerald-400/10 w-[80%] h-[60%] rounded-full absolute top-1/2 left-1/2">
</div>

<div className="border-white/[0.05] overflow-hidden flex flex-col bg-neutral-900 w-full z-10 border rounded-[16px] relative shadow-inner">

<div className="border-white/[0.05] flex h-12 border-b pr-4 pl-4 items-center justify-between bg-neutral-950/50">

<div className="flex items-center gap-1.5 w-1/4">
<div className="w-3 h-3 rounded-full border bg-[#FF5F56] border-white/10"></div>
<div className="w-3 h-3 rounded-full border bg-[#FFBD2E] border-white/10"></div>
<div className="w-3 h-3 rounded-full border bg-[#27C93F] border-white/10"></div>
</div>

<div className="flex-1 max-w-[340px] flex justify-center">
<div className="flex gap-2 border-white/[0.05] text-[0.65rem] text-neutral-500 font-mono w-full border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center shadow-inner bg-neutral-950">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
          CMD + K to search telemetry...
        </div>
</div>

<div className="flex items-center justify-end gap-3 w-1/4">
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-white/[0.05] text-[0.65rem] font-mono font-medium font-geist bg-neutral-950 text-neutral-400">
          SYS_OPT
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)]">
</div>
</div>
</div>
</div>

<div className="flex flex-1 min-h-[640px]">

<div className="border-white/[0.05] flex flex-col shrink-0 w-14 border-r pt-4 pb-4 gap-x-6 gap-y-6 items-center bg-neutral-950/50">
<button className="w-8 h-8 rounded-md border text-emerald-500 flex items-center justify-center transition-colors bg-neutral-800 border-neutral-700">
<iconify-icon className="text-xl" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md text-neutral-500 flex items-center justify-center transition-colors hover:text-neutral-300 hover:bg-neutral-800">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md text-neutral-500 flex items-center justify-center transition-colors hover:text-neutral-300 hover:bg-neutral-800">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md text-neutral-500 flex items-center justify-center transition-colors hover:text-neutral-300 hover:bg-neutral-800">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md text-neutral-500 flex items-center justify-center transition-colors hover:text-neutral-300 hover:bg-neutral-800">
<iconify-icon className="text-xl" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="mt-auto"></div>
<button className="w-8 h-8 rounded-md text-neutral-500 flex items-center justify-center transition-colors hover:text-neutral-300 hover:bg-neutral-800">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex-1 grid grid-cols-1 overflow-y-auto no-scrollbar md:grid-cols-3 bg-neutral-950 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4">

<div className="md:col-span-2 flex flex-col gap-x-5 gap-y-5 h-full">

<div className="border-white/[0.05] flex flex-col overflow-hidden bg-gradient-to-r from-white/10 to-white/0 h-full rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>

<div className="flex items-center justify-between mb-6 z-10">
<h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">AI Telemetry
                Throughput</h3>

<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.05] transition-colors cursor-pointer text-xs font-medium font-geist shadow-sm bg-neutral-950 hover:bg-neutral-800 text-neutral-400">
                Hourly
                <svg className="text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 z-10">
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md border bg-neutral-950/50 border-neutral-800">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]">
</div>
<span className="text-xs font-medium font-geist text-neutral-400">Data Throughput <span className="ml-1 text-neutral-50">124.8 TB/s</span></span>
</div>
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md border bg-neutral-950/50 border-neutral-800">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]">
</div>
<span className="text-xs font-medium font-geist text-neutral-400">Active AI Agents <span className="ml-1 text-neutral-50">4,210</span></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end z-10">

<div className="md:col-span-1 flex flex-col pb-2 md:pb-6">
<span className="text-4xl font-medium tracking-tight text-emerald-500 tabular-data font-geist">+28.4%</span>
<span className="text-xs font-medium mt-2 leading-relaxed font-geist text-neutral-400">Telemetry processing efficiency</span>
</div>

<div className="md:col-span-3 relative h-32 md:h-40 w-full mt-6 md:mt-0">
<style>
                  @keyframes tooltipFadeInFloat {
                    0% {
                      opacity: 0;
                      transform: translate(-50%, 8px);
                    }

                    100% {
                      opacity: 1;
                      transform: translate(-50%, -4px);
                    }
                  }

                  .anim-tooltip {
                    animation: tooltipFadeInFloat 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                  }

                  @keyframes lineDrawIn {
                    0% {
                      stroke-dashoffset: 1200;
                    }

                    45% {
                      stroke-dashoffset: 0;
                    }

                    100% {
                      stroke-dashoffset: 0;
                    }
                  }

                  .anim-line-draw {
                    stroke-dasharray: 1200;
                    animation: lineDrawIn 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
                </style>

<div className="absolute left-[66.66%] top-[14.28%] -translate-x-1/2 -translate-y-[calc(100%+4px)] z-20 flex flex-col items-center pointer-events-none anim-tooltip opacity-0">
<div className="text-[10px] font-medium px-2.5 py-1.5 rounded-md shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] whitespace-nowrap font-geist flex items-center gap-2 border backdrop-blur-sm bg-neutral-800 text-neutral-50 border-neutral-700">
<div className="relative flex h-1.5 w-1.5 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-400"></span>
</div>
                    Node Cluster W4
                  </div>

<div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent -mt-px border-t-neutral-800">
</div>
</div>

<svg className="overflow-visible w-full h-full" preserveaspectratio="none" viewbox="0 0 600 140">
<defs>
<lineargradient id="emeraldSmoothArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.25"></stop>
<stop 100%"="" offset="6
                        &lt;stop offset=" stop-color="#10B981" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="amberSmoothArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F59E0B" stop-opacity="0.12"></stop>
<stop offset="100%" stop-color="#F59E0B" stop-opacity="0"></stop>
</lineargradient>
<filter height="300%" id="nodeGlow" width="300%" x="-100%" y="-100%">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="4">
</fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g className="" stroke="#262626" stroke-dasharray="4 4" strokeWidth="1.5">
<line className="" x1="100" x2="100" y1="0" y2="140"></line>
<line x1="200" x2="200" y1="0" y2="140"></line>
<line x1="300" x2="300" y1="0" y2="140"></line>

<line stroke="#404040" stroke-dasharray="2 4" x1="400" x2="400" y1="0" y2="140"></line>
<line x1="500" x2="500" y1="0" y2="140"></line>
</g>

<path d="M0,130 C70,125 100,130 180,110 C260,90 300,115 360,90 C410,69 480,95 540,85 C570,80 590,90 600,90 L600,140 L0,140 Z" fill="url(#amberSmoothArea)"></path>
<path d="M0,130 C70,125 100,130 180,110 C260,90 300,115 360,90 C410,69 480,95 540,85 C570,80 590,90 600,90" fill="none" stroke="#F59E0B" stroke-opacity="0.5" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>

<path className="" d="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70 L600,140 L0,140 Z" fill="url(#emeraldSmoothArea)"></path>

<path className="anim-line-draw" d="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<circle className="" fill="#10B981" filter="url(#nodeGlow)" r="4">
<animatemotion calcmode="linear" dur="4s" keypoints="0;1" keytimes="0;1" path="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="4s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>

<circle fill="#34D399" opacity="0.8" r="2.5">
<animatemotion begin="2s" calcmode="linear" dur="4s" keypoints="0;1" keytimes="0;1" path="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="2s" dur="4s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;0.8;0.8;0"></animate>
</circle>

<circle className="" cx="180" cy="110" fill="#171717" r="3" stroke="#F59E0B" strokeWidth="1.5"></circle>
<circle cx="360" cy="90" fill="#171717" r="3" stroke="#F59E0B" strokeWidth="1.5"></circle>
<circle cx="540" cy="85" fill="#171717" r="3" stroke="#F59E0B" strokeWidth="1.5"></circle>

<circle className="transition-all duration-300" cx="150" cy="80" fill="#171717" r="3.5" stroke="#10B981" strokeWidth="2"></circle>
<circle className="transition-all duration-300" cx="300" cy="60" fill="#171717" r="3.5" stroke="#10B981" strokeWidth="2"></circle>
<circle className="transition-all duration-300" cx="500" cy="60" fill="#171717" r="3.5" stroke="#10B981" strokeWidth="2"></circle>

<g transform="translate(400, 20)">
<circle cx="0" cy="0" fill="#171717" filter="url(#nodeGlow)" r="5" stroke="#10B981" strokeWidth="2.5"></circle>

<circle cx="0" cy="0" fill="none" r="5" stroke="#10B981" strokeWidth="2">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="5;16"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.8;0"></animate>
</circle>
</g>
</svg>
</div>
</div>
</div>

</div>

<div className="border-white/[0.05] flex flex-col bg-gradient-to-r from-white/10 to-white/0 w-full h-full rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>

<div className="flex flex-col items-start mb-6 w-full gap-1.5">
<h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">Active Threat
              Signals</h3>
<p className="text-[12px] font-geist text-neutral-400">Monitoring 4,210 nodes across 3 regions</p>
</div>

<div className="w-[180px] h-[180px] relative mb-8 mx-auto">
<svg className="w-[180px] h-[180px] animate-[spin_20s_linear_infinite]" strokeWidth="3.4" viewbox="0 0 36 36">

<circle cx="18" cy="18" fill="none" r="15" stroke="#262626" strokeWidth="5.5"></circle>

<circle cx="18" cy="18" fill="none" r="15" stroke="#facc15" stroke-dasharray="18 77" stroke-dashoffset="2" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.1s'}}></circle>
<circle className="" cx="18" cy="18" fill="none" r="15" stroke="#fb923c" stroke-dasharray="18 77" stroke-dashoffset="22" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.2s'}}></circle>
<circle className="" cx="18" cy="18" fill="none" r="15" stroke="#f97373" stroke-dasharray="18 77" stroke-dashoffset="42" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.3s'}}></circle>
<circle className="" cx="18" cy="18" fill="none" r="15" stroke="#ec4899" stroke-dasharray="18 77" stroke-dashoffset="62" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.4s'}}></circle>
<circle className="" cx="18" cy="18" fill="none" r="15" stroke="#8b5cf6" stroke-dasharray="18 77" stroke-dashoffset="82" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.5s'}}></circle>
<circle className="" cx="18" cy="18" fill="none" r="15" stroke="#3b82f6" stroke-dasharray="18 77" stroke-dashoffset="102" strokeLinecap="round" strokeWidth="5.5" style={{animationDelay: '0.6s'}}></circle>
</svg>

<div className="absolute inset-[32px] rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] border flex flex-col items-center justify-center text-center bg-neutral-900 border-neutral-800">
<span className="text-[9px] font-medium text-neutral-500 font-geist uppercase tracking-widest mt-1">
        Detected
      </span>
<span className="text-4xl font-semibold tracking-tight font-geist tabular-nums leading-none mt-1 text-neutral-50">
        27
      </span>
</div>
</div>

<div className="w-full flex flex-col gap-3 px-2">
<div className="flex items-center justify-between text-[13px] font-geist">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_6px_rgba(59,130,246,0.4)]">
</div>
<span className="font-medium text-neutral-400">Neural Networks</span>
</div>
<span className="font-semibold tabular-nums text-neutral-50">12</span>
</div>
<div className="flex items-center justify-between text-[13px] font-geist">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_6px_rgba(139,92,246,0.4)]">
</div>
<span className="font-medium text-neutral-400">Edge Devices</span>
</div>
<span className="font-semibold tabular-nums text-neutral-50">8</span>
</div>
<div className="flex items-center justify-between text-[13px] font-geist">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-[#ec4899] shadow-[0_0_6px_rgba(236,72,153,0.4)]">
</div>
<span className="font-medium text-neutral-400">Cloud Clusters</span>
</div>
<span className="font-semibold tabular-nums text-neutral-50">7</span>
</div>
</div>
</div>

<div className="border-white/[0.05] min-h-[220px] flex flex-col bg-gradient-to-r from-white/10 to-white/0 rounded-xl px-5 py-5 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-medium font-geist text-neutral-400">Real-Time Activity Log</h3>
<span className="text-[0.65rem] text-neutral-500 font-mono font-geist">Live Sync</span>
</div>
<div className="flex flex-col gap-2.5 flex-1 justify-center">
<div className="flex items-start gap-3 rounded-lg border border-white/[0.05] px-3 py-2.5 bg-neutral-950/50">
<span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.45)]"></span>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-2">
<span className="text-[0.6rem] uppercase tracking-wide text-emerald-500 font-medium font-mono font-geist">Success</span>
<span className="text-[0.6rem] text-neutral-500 font-mono font-geist">14:02:41</span>
</div>
<p className="text-[0.72rem] leading-snug font-geist truncate text-neutral-400">
                  Agent-X7 completed data sync across 4 nodes
                </p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/[0.05] px-3 py-2.5 bg-neutral-950/50">
<span className="mt-1.5 w-2 h-2 rounded-full shadow-[0_0_6px_rgba(251,146,60,0.35)] bg-orange-400"></span>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-2">
<span className="text-[0.6rem] uppercase tracking-wide text-orange-500 font-medium font-mono font-geist">Warning</span>
<span className="text-[0.6rem] text-neutral-500 font-mono font-geist">14:02:38</span>
</div>
<p className="text-[0.72rem] leading-snug font-geist truncate text-neutral-400">
                  Unrecognized payload format from IP 192.168.1.104
                </p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/[0.05] px-3 py-2.5 bg-neutral-950/50">
<span className="mt-1.5 w-2 h-2 rounded-full shadow-[0_0_6px_rgba(96,165,250,0.35)] bg-blue-400"></span>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-2">
<span className="text-[0.6rem] uppercase tracking-wide text-blue-500 font-medium font-mono font-geist">Info</span>
<span className="text-[0.6rem] text-neutral-500 font-mono font-geist">14:01:15</span>
</div>
<p className="text-[0.72rem] leading-snug font-geist truncate text-neutral-400">
                  Nightly Backup initiated by System
                </p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/[0.05] px-3 py-2.5 bg-neutral-950/50">
<span className="mt-1.5 w-2 h-2 rounded-full shadow-[0_0_6px_rgba(16,185,129,0.35)] bg-emerald-400"></span>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-2">
<span className="text-[0.6rem] uppercase tracking-wide text-emerald-500 font-medium font-mono font-geist">Success</span>
<span className="text-[0.6rem] text-neutral-500 font-mono font-geist">13:58:22</span>
</div>
<p className="text-[0.72rem] leading-snug font-geist truncate text-neutral-400">
                  Model retrain pipeline deployed to production edge
                </p>
</div>
</div>
</div>
</div>

<div className="border-white/[0.05] flex flex-col group overflow-hidden md:col-span-2 md:p-7 bg-gradient-to-r from-white/10 to-white/0 rounded-[20px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<style className="">
            @keyframes drawPath {
              to {
                stroke-dashoffset: 0;
              }
            }

            @keyframes pulseNode {

              0%,
              100% {
                opacity: 0.5;
              }

              50% {
                opacity: 1;
              }
            }

            .draw-anim {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: drawPath 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            .node-anim {
              animation: pulseNode 3s infinite ease-in-out;
            }
          </style>

<div className="flex items-start justify-between mb-8 relative z-10">
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">AI Compute Load
                Projection</h3>
<p className="text-[13px] font-geist text-neutral-400">Projected AI processing capacity</p>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-medium font-mono uppercase tracking-widest shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981] animate-pulse"></div>
                Live Forecast
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row items-end gap-6 h-full relative z-10 w-full mt-auto">

<div className="flex flex-col shrink-0 mb-4 md:mb-6 w-full md:w-auto relative z-20">
<span className="text-[44px] leading-none font-semibold tracking-tight tabular-nums font-geist flex items-baseline gap-1 text-neutral-50">
<span className="js-aura-number">NaN</span>
<span className="text-[22px] font-medium text-neutral-500">PB</span>
</span>
<span className="text-[13px] font-medium mt-3 font-geist flex items-center gap-2 text-neutral-400">
<svg className="text-neutral-500 lucide lucide-activity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
                Projected telemetry throughput
            </span>
</div>

<div className="flex-1 md:mt-0 w-full h-[160px] mt-2 relative">
<style className="">
                @keyframes tooltipFloat {

                  0%,
                  100% {
                    transform: translate(-50%, calc(-100% - 12px));
                  }

                  50% {
                    transform: translate(-50%, calc(-100% - 18px));
                  }
                }

                .anim-tooltip {
                  animation: tooltipFloat 3s infinite ease-in-out;
                }

                @keyframes barPulse1 {

                  0%,
                  100% {
                    transform: scaleY(1);
                  }

                  50% {
                    transform: scaleY(0.7);
                  }
                }

                @keyframes barPulse2 {

                  0%,
                  100% {
                    transform: scaleY(1);
                  }

                  50% {
                    transform: scaleY(0.5);
                  }
                }

                @keyframes barPulse3 {

                  0%,
                  100% {
                    transform: scaleY(1);
                  }

                  50% {
                    transform: scaleY(0.85);
                  }
                }

                @keyframes barPulse4 {

                  0%,
                  100% {
                    transform: scaleY(1);
                  }

                  50% {
                    transform: scaleY(0.6);
                  }
                }

                .loop-bar-1 {
                  transform-origin: 50% 140px;
                  animation: barPulse1 2.5s infinite ease-in-out;
                }

                .loop-bar-2 {
                  transform-origin: 50% 140px;
                  animation: barPulse2 3.2s infinite ease-in-out;
                }

                .loop-bar-3 {
                  transform-origin: 50% 140px;
                  animation: barPulse3 2.8s infinite ease-in-out;
                }

                .loop-bar-4 {
                  transform-origin: 50% 140px;
                  animation: barPulse4 3.5s infinite ease-in-out;
                }
              </style>

<div className="absolute left-[35%] top-[25%] -translate-x-1/2 -translate-y-[calc(100%+12px)] z-30 group/label cursor-default anim-tooltip">
<div className="border text-[13px] font-medium px-3 py-1.5 rounded-lg shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] font-geist tabular-nums flex items-center gap-2 bg-neutral-800 border-neutral-700 text-neutral-50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]">
</div>
<span className="js-aura-number-sm">NaN</span> PB
                </div>

<div className="absolute left-1/2 bottom-0 w-px h-3 bg-emerald-500/30 -translate-x-1/2 translate-y-full">
</div>
</div>

<svg className="overflow-visible w-[366px] h-[160px]" preserveaspectratio="none" strokeWidth="2" style={{width: '366px', height: '160px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 800 160">
<defs>
<pattern height="6" id="diagonalHatch" patterntransform="rotate(45 0 0)" patternunits="userSpaceOnUse" width="6">
<line stroke="#171717" stroke-opacity="0.3" strokeWidth="1.5" x1="0" x2="0" y1="0" y2="6"></line>
</pattern>
<filter height="140%" id="pillarGlow" width="200%" x="-50%" y="-20%">
<fegaussianblur result="blur" stddeviation="8"></fegaussianblur>
<fecomponenttransfer in="blur" result="glow">
<fefunca slope="0.45" type="linear"></fefunca>
</fecomponenttransfer>
<femerge>
<femergenode in="glow"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="300%" id="nodeGlow" width="300%" x="-100%" y="-100%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomponenttransfer>
<fefunca slope="0.6" type="linear"></fefunca>
</fecomponenttransfer>
<femerge>
<femergenode></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g stroke="#262626" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5">
<line x1="40" x2="40" y1="0" y2="140"></line>
<line stroke="#404040" stroke-dasharray="2 4" x1="280" x2="280" y1="0" y2="140">
</line>
<line x1="520" x2="520" y1="0" y2="140"></line>
<line x1="760" x2="760" y1="0" y2="140"></line>
</g>

<g className="loop-bar-1" style={{animationDelay: '0.00s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M24,140 L24,124 Q24,120 28,120 L52,120 Q56,120 56,124 L56,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-2" style={{animationDelay: '0.15s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M104,140 L104,114 Q104,110 108,110 L132,110 Q136,110 136,114 L136,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-3" style={{animationDelay: '0.30s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M184,140 L184,94 Q184,90 188,90 L212,90 Q216,90 216,94 L216,140 Z" fill="currentColor">
</path>
</g>

<g className="loop-bar-4" style={{animationDelay: '0.45s'}}>
<path d="M264,140 L264,44 Q264,40 268,40 L292,40 Q296,40 296,44 L296,140 Z" fill="#10B981" filter="url(#pillarGlow)"></path>
<path d="M264,140 L264,44 Q264,40 268,40 L292,40 Q296,40 296,44 L296,140 Z" fill="url(#diagonalHatch)">
</path>
<circle cx="280" cy="40" fill="#171717" filter="url(#nodeGlow)" r="5" stroke="#10B981" strokeWidth="2.5"></circle>
</g>
<g className="loop-bar-1" style={{animationDelay: '0.60s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M344,140 L344,84 Q344,80 348,80 L372,80 Q376,80 376,84 L376,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-2" style={{animationDelay: '0.75s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M424,140 L424,104 Q424,100 428,100 L452,100 Q456,100 456,104 L456,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-3" style={{animationDelay: '0.90s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M504,140 L504,99 Q504,95 508,95 L532,95 Q536,95 536,99 L536,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-4" style={{animationDelay: '1.05s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M584,140 L584,114 Q584,110 588,110 L612,110 Q616,110 616,114 L616,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-1" style={{animationDelay: '1.20s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M664,140 L664,129 Q664,125 668,125 L692,125 Q696,125 696,129 L696,140 Z" fill="currentColor">
</path>
</g>
<g className="loop-bar-2" style={{animationDelay: '1.35s'}}>
<path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d="M744,140 L744,134 Q744,130 748,130 L772,130 Q776,130 776,134 L776,140 Z" fill="currentColor">
</path>
</g>

<line stroke="#262626" stroke-dasharray="none" strokeWidth="1" x1="0" x2="800" y1="140" y2="140">
</line>

<g className="font-geist font-normal" fill="#737373" fontSize="14" text-anchor="middle">
<text x="40" y="156">Jul</text>
<text x="120" y="156">Aug</text>
<text x="200" y="156">Sep</text>
<text fill="#10B981" font-weight="500" x="280" y="156">Oct</text>
<text className="" x="360" y="156">Nov</text>
<text className="" x="440" y="156">Dec</text>
<text x="520" y="156">Jan</text>
<text x="600" y="156">Feb</text>
<text x="680" y="156">Mar</text>
<text x="760" y="156">Apr</text>
</g>
</svg>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</main>

<section className="flex-1 flex flex-col lg:pt-32 z-10 bg-neutral-950/80 w-full pt-24 pr-6 pb-16 pl-6 relative items-center">
<div className="w-full max-w-[1180px]">

<div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-20">

<div className="flex-1 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-[600px]">
<div className="flex items-center gap-2 mb-6">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</div>
<span className="text-xs font-semibold uppercase tracking-widest font-geist text-neutral-400">Platform Capabilities</span>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
          Built to monitor, detect, and respond across every AI layer
        </h2>
</div>

<div className="flex-1 w-full max-w-[480px] md:mt-12">
<p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-base text-neutral-400 font-geist">
          A unified platform that brings telemetry, anomaly detection, infrastructure visibility, and operational logs
          into one system. Maintain complete oversight of your distributed AI architecture without switching contexts.
        </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full gap-x-4 gap-y-4">
<style>
        @keyframes micro-eq1 {

          0%,
          100% {
            transform: scaleY(0.7);
          }

          50% {
            transform: scaleY(1.3);
          }
        }

        @keyframes micro-eq2 {

          0%,
          100% {
            transform: scaleY(1.2);
          }

          50% {
            transform: scaleY(0.6);
          }
        }

        @keyframes micro-eq3 {

          0%,
          100% {
            transform: scaleY(0.8);
          }

          50% {
            transform: scaleY(1.4);
          }
        }

        @keyframes micro-draw-line1 {

          0%,
          15% {
            stroke-dashoffset: 150;
          }

          35%,
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes micro-draw-spike {

          0%,
          35% {
            stroke-dashoffset: 50;
          }

          50%,
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes micro-draw-line2 {

          0%,
          50% {
            stroke-dashoffset: 100;
          }

          70%,
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes micro-spike-dot {

          0%,
          48% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }

          55%,
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes micro-prog1 {

          0%,
          15% {
            width: 0%;
          }

          40%,
          85% {
            width: 64%;
          }

          100% {
            width: 0%;
          }
        }

        @keyframes micro-prog2 {

          0%,
          25% {
            width: 0%;
          }

          50%,
          85% {
            width: 42%;
          }

          100% {
            width: 0%;
          }
        }

        @keyframes micro-prog3 {

          0%,
          35% {
            width: 0%;
          }

          60%,
          85% {
            width: 91%;
          }

          100% {
            width: 0%;
          }
        }

        @keyframes micro-log-seq1 {

          0%,
          100% {
            opacity: 0;
            transform: translateY(4px);
          }

          15%,
          85% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes micro-log-seq2 {

          0%,
          25%,
          100% {
            opacity: 0;
            transform: translateY(4px);
          }

          40%,
          85% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes micro-log-seq3 {

          0%,
          50%,
          100% {
            opacity: 0;
            transform: translateY(4px);
          }

          65%,
          85% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<h3 className="text-lg font-medium text-neutral-50 tracking-tight font-geist">Unified Telemetry</h3>
<p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
          Aggregates agent events, node throughput, and system streams into one centralized monitoring layer.
        </p>
<div className="border-white/[0.05] flex flex-col overflow-hidden w-full border rounded-xl mt-auto px-3 py-3 relative gap-x-3 gap-y-3 bg-neutral-950">
<div className="flex items-center justify-between z-10">
<div className="flex items-center gap-2 px-2 py-1 rounded-md border border-white/[0.05] shadow-sm bg-neutral-800/80">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</div>
<span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-neutral-400">Live View</span>
</div>
<div className="text-[10px] font-mono font-medium tabular-nums px-2 py-1 rounded-md border border-white/[0.05] shadow-sm text-neutral-50 bg-neutral-800/80">
              2.16 TB/s
            </div>
</div>
<div className="flex items-end gap-[3px] w-full h-12 z-10 px-0.5">
<div className="flex-1 rounded-t-[2px] h-[30%] transition-all duration-300 group-hover:h-[35%] group-hover:bg-neutral-700 bg-neutral-800" style={{transformOrigin: 'center bottom', animation: '1.4s ease-in-out 0.1s infinite normal none running micro-eq1'}}></div>
<div className="flex-1 rounded-t-[2px] h-[45%] transition-all duration-300 group-hover:h-[60%] group-hover:bg-cyan-400 bg-cyan-400/60" style={{transformOrigin: 'center bottom', animation: '1.5s ease-in-out 0.2s infinite normal none running micro-eq2'}}></div>
<div className="flex-1 bg-emerald-500/70 rounded-t-[2px] h-[65%] transition-all duration-300 group-hover:h-[80%] group-hover:bg-emerald-500" style={{transformOrigin: 'center bottom', animation: '1.3s ease-in-out 0.3s infinite normal none running micro-eq3'}}></div>
<div className="flex-1 rounded-t-[2px] h-[40%] transition-all duration-300 group-hover:h-[45%] group-hover:bg-neutral-700 bg-neutral-800" style={{transformOrigin: 'center bottom', animation: '1.6s ease-in-out 0.4s infinite normal none running micro-eq1'}}></div>
<div className="flex-1 rounded-t-[2px] h-[75%] transition-all duration-300 group-hover:h-[85%] group-hover:bg-cyan-400 bg-cyan-400/70" style={{transformOrigin: 'center bottom', animation: '1.4s ease-in-out 0.5s infinite normal none running micro-eq2'}}></div>
<div className="flex-1 bg-emerald-500/80 rounded-t-[2px] h-[95%] transition-all duration-300 group-hover:h-[100%] group-hover:bg-emerald-500" style={{transformOrigin: 'center bottom', animation: '1.5s ease-in-out 0.1s infinite normal none running micro-eq3'}}></div>
<div className="flex-1 bg-emerald-500/90 rounded-t-[2px] h-[100%] transition-all duration-300 group-hover:h-[90%] group-hover:bg-emerald-500" style={{transformOrigin: 'center bottom', animation: '1.3s ease-in-out 0.2s infinite normal none running micro-eq1'}}></div>
<div className="flex-1 rounded-t-[2px] h-[85%] transition-all duration-300 group-hover:h-[75%] group-hover:bg-cyan-400 bg-cyan-400/70" style={{transformOrigin: 'center bottom', animation: '1.6s ease-in-out 0.3s infinite normal none running micro-eq2'}}></div>
<div className="flex-1 rounded-t-[2px] h-[50%] transition-all duration-300 group-hover:h-[65%] group-hover:bg-neutral-700 bg-neutral-800" style={{transformOrigin: 'center bottom', animation: '1.4s ease-in-out 0.4s infinite normal none running micro-eq3'}}></div>
<div className="flex-1 bg-emerald-500/80 rounded-t-[2px] h-[70%] transition-all duration-300 group-hover:h-[85%] group-hover:bg-emerald-500" style={{transformOrigin: 'center bottom', animation: '1.5s ease-in-out 0.5s infinite normal none running micro-eq1'}}></div>
<div className="flex-1 rounded-t-[2px] h-[40%] transition-all duration-300 group-hover:h-[50%] group-hover:bg-cyan-400 bg-cyan-400/60" style={{transformOrigin: 'center bottom', animation: '1.3s ease-in-out 0.1s infinite normal none running micro-eq2'}}></div>
<div className="flex-1 rounded-t-[2px] h-[20%] transition-all duration-300 group-hover:h-[30%] group-hover:bg-neutral-700 bg-neutral-800" style={{transformOrigin: 'center bottom', animation: '1.6s ease-in-out 0.2s infinite normal none running micro-eq3'}}></div>
<div className="flex-1 bg-emerald-500/70 rounded-t-[2px] h-[55%] transition-all duration-300 group-hover:h-[40%] group-hover:bg-emerald-500" style={{transformOrigin: 'center bottom', animation: '1.4s ease-in-out 0.3s infinite normal none running micro-eq1'}}></div>
<div className="flex-1 rounded-t-[2px] h-[35%] transition-all duration-300 group-hover:h-[45%] group-hover:bg-cyan-400 bg-cyan-400/50" style={{transformOrigin: 'center bottom', animation: '1.5s ease-in-out 0.4s infinite normal none running micro-eq2'}}></div>
<div className="flex-1 rounded-t-[2px] h-[25%] transition-all duration-300 group-hover:h-[20%] group-hover:bg-neutral-700 bg-neutral-800" style={{transformOrigin: 'center bottom', animation: '1.3s ease-in-out 0.5s infinite normal none running micro-eq3'}}></div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t to-transparent pointer-events-none z-20 from-neutral-950">
</div>
</div>
</div>

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">Anomaly Detection</h3>
<p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
          Identifies irregular system behavior, unstable workloads, and prioritizes high-risk events automatically.
        </p>
<div className="border-white/[0.05] flex flex-col overflow-hidden w-full border rounded-xl mt-auto px-3 py-3 relative gap-x-2 gap-y-2 bg-neutral-950">
<div className="flex items-center justify-between z-10">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-wide font-semibold font-geist text-amber-600">Spike Detected</span>
</div>
<span className="text-[10px] font-mono font-medium tabular-nums text-neutral-50">94% CONF</span>
</div>
<div className="relative h-12 w-full mt-1">
<div className="absolute inset-0 flex flex-col justify-between opacity-30 pointer-events-none">
<div className="border-b border-dashed w-full h-[1px] border-neutral-700"></div>
<div className="border-b border-dashed w-full h-[1px] border-neutral-700"></div>
<div className="border-b border-dashed w-full h-[1px] border-neutral-700"></div>
</div>
<div className="absolute left-[65%] top-0 bottom-0 w-[25%] bg-amber-500/10 border-x border-amber-500/20 z-0 rounded-sm">
</div>
<svg className="absolute inset-0 w-full h-full z-10 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,32 L10,28 L20,31 L30,29 L40,32 L50,28 L60,31 L68,30" fill="none" stroke="#404040" stroke-dasharray="150" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'micro-draw-line1 4s infinite ease-in-out'}}></path>
<path className="" d="M68,30 L75,6 L82,32" fill="none" stroke="#f59e0b" stroke-dasharray="50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animation: 'micro-draw-spike 4s infinite ease-in-out'}}></path>
<path d="M82,32 L90,29 L100,31" fill="none" stroke="#404040" stroke-dasharray="100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'micro-draw-line2 4s infinite ease-in-out'}}></path>
</svg>
<div className="absolute left-[75%] top-[15%] w-2 h-2 border border-amber-500 rounded-full z-20 -translate-x-1/2 -translate-y-1/2 bg-neutral-950" style={{animation: 'micro-spike-dot 4s infinite ease-in-out'}}>
<div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75"></div>
<div className="absolute inset-[1.5px] rounded-full bg-amber-500"></div>
</div>
</div>
<div className="flex items-center gap-1.5 mt-1 z-10">
<iconify-icon className="text-[10px] text-amber-500 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-[10px] font-mono truncate text-neutral-400">Spike in unauthorized access</span>
</div>
</div>
</div>

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">Infrastructure Health</h3>
<p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
          Real-time monitoring across compute resources, memory usage, cluster stability, and network latency.
        </p>
<div className="border-white/[0.05] flex flex-col w-full border rounded-xl mt-auto px-3.5 py-3.5 gap-x-3.5 gap-y-3.5 bg-neutral-950">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-[10px] font-mono">
<span className="text-neutral-500 uppercase tracking-widest font-semibold">CPU</span>
<span className="tabular-nums text-neutral-300">64%</span>
</div>
<div className="w-full rounded-full h-1.5 overflow-hidden bg-neutral-800">
<div className="h-full rounded-full transition-all duration-500 group-hover:bg-neutral-500 w-[64%] bg-neutral-600" style={{animation: '4s ease-in-out 0s infinite normal none running micro-prog1'}}></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-[10px] font-mono">
<span className="text-neutral-500 uppercase tracking-widest font-semibold">RAM</span>
<span className="text-emerald-500 tabular-nums font-medium">42%</span>
</div>
<div className="w-full rounded-full h-1.5 overflow-hidden bg-neutral-800">
<div className="bg-emerald-500/80 h-full rounded-full transition-all duration-500 group-hover:bg-emerald-500 w-[42%]" style={{animation: '4s ease-in-out 0s infinite normal none running micro-prog2'}}></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-[10px] font-mono">
<div className="flex items-center gap-1.5">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</div>
<span className="text-amber-500 uppercase tracking-widest font-semibold">I/O</span>
</div>
<span className="text-amber-500 tabular-nums font-bold">91%</span>
</div>
<div className="w-full rounded-full h-1.5 overflow-hidden bg-neutral-800">
<div className="bg-amber-500 h-full rounded-full transition-all duration-500 group-hover:bg-amber-400 relative w-[91%]" style={{animation: '4s ease-in-out 0s infinite normal none running micro-prog3'}}>
<div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l to-transparent from-black/30"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">Operational Logs</h3>
<p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
          Review automated deployments, model actions, incident reports, and a synchronized history of all activity.
        </p>
<div className="border-white/[0.05] overflow-hidden w-full border rounded-xl mt-auto px-3 py-3 relative bg-neutral-950">
<div className="flex items-center justify-between mb-3 z-10 relative px-1">
<div className="flex items-center gap-1.5">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-500"></span>
</div>
<span className="text-[9px] uppercase tracking-wider font-semibold text-neutral-500 font-geist">Live Stream</span>
</div>
</div>
<div className="relative flex flex-col gap-3 z-10 pl-1.5">
<div className="absolute left-[9px] top-1.5 bottom-1 w-[1px] bg-gradient-to-b to-transparent from-neutral-800 via-neutral-800">
</div>
<div className="flex items-start gap-2.5 relative group/log cursor-default" style={{animation: 'micro-log-seq1 4s infinite ease-out'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-[3px] relative z-10 ring-[3px] transition-transform duration-300 group-hover/log:scale-150 ring-neutral-950">
</div>
<div className="flex flex-col min-w-0">
<span className="text-[9px] text-neutral-500 font-mono tabular-nums leading-none mb-0.5">14:02:41</span>
<span className="text-[10px] font-mono truncate font-medium text-neutral-100">Model retrain deployed</span>
</div>
</div>
<div className="flex items-start gap-2.5 relative group/log cursor-default" style={{animation: 'micro-log-seq2 4s infinite ease-out'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-[3px] relative z-10 ring-[3px] transition-transform duration-300 group-hover/log:scale-150 ring-neutral-950">
</div>
<div className="flex flex-col min-w-0">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section aria-label="System Performance Dashboard" className="flex-1 flex flex-col lg:pt-32 bg-neutral-950/80 w-full z-50 pt-32 pr-6 pb-16 pl-6 relative items-center">
<style>
        @keyframes drawLine {
            0% {
                stroke-dashoffset: 1200;
            }

            100% {
                stroke-dashoffset: 0;
            }
        }

        .anim-draw-line {
            stroke-dasharray: 1200;
            stroke-dashoffset: 1200;
            animation: drawLine 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes pulseSoft {

            0%,
            100% {
                opacity: 0.4;
                transform: scale(0.95);
            }

            50% {
                opacity: 1;
                transform: scale(1.05);
            }
        }

        .anim-pulse-soft {
            animation: pulseSoft 4s ease-in-out infinite;
        }
    </style>
<div className="w-full max-w-[1180px]">
<header className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-16">
<div className="flex-1 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-[520px]">
<div className="flex items-center gap-2 mb-6">
<div aria-hidden="true" className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</div>
<span className="text-xs font-medium uppercase tracking-widest font-geist text-neutral-600">System Performance</span>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
                    Operating at scale across distributed AI systems
                </h2>
</div>
<div className="flex-1 w-full max-w-[420px] md:mt-12">
<p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-base text-neutral-500 font-geist">
                    Real-time telemetry processing built for enterprise scale. Monitor infrastructure health, analyze
                    agent throughput, and maintain complete reliability across all your active environments without
                    dropping a single event.
                </p>
</div>
</header>
<div className="grid grid-cols-2 lg:grid-cols-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll w-full mb-16 gap-x-2 gap-y-2">
<div className="flex flex-col gap-2 py-4 pl-4 border-l-2 border-emerald-500 group relative transition-transform hover:-translate-y-1 duration-300">
<div className="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -ml-4 from-emerald-500/10">
</div>
<div className="flex items-center gap-2 relative z-10">
<span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Active AI Agents</span>
<div aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
</div>
<span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist relative z-10 text-neutral-50">4,210+</span>
</div>
<div className="flex flex-col gap-2 py-4 pl-4 border-l-2 group transition-transform hover:-translate-y-1 duration-300 border-neutral-800">
<div className="flex items-center gap-2">
<span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Data Throughput</span>
<svg aria-hidden="true" className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist text-neutral-50">124.8 <span className="text-xl ml-0.5 text-neutral-500">TB/s</span></span>
</div>
<div className="flex flex-col gap-2 group transition-transform hover:-translate-y-1 duration-300 border-neutral-800 border-l-2 pt-4 pb-4 pl-4 gap-x-2 gap-y-2">
<div className="flex items-center gap-2">
<span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">System Uptime</span>
<svg aria-hidden="true" className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist text-neutral-50">99.98%</span>
</div>
<div className="flex flex-col gap-2 py-4 pl-4 border-l-2 group transition-transform hover:-translate-y-1 duration-300 border-neutral-800">
<div className="flex items-center gap-2">
<span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Regions Monitored</span>
</div>
<span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist text-neutral-50">32</span>
</div>
</div>
<div className="flex sm:p-8 selection:bg-emerald-100 selection:text-emerald-900 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll font-geist w-full pt-4 pr-4 pb-4 pl-4 justify-center" id="dashboard-root">
<main className="z-10 border-white/[0.05] p-6 sm:p-8 flex flex-col lg:flex-row gap-6 w-full max-w-[1100px] border rounded-[24px] relative shadow-2xl bg-neutral-900" id="main-card">

<div className="w-full lg:w-1/3 flex flex-col gap-4">

<div className="p-5 rounded-xl bg-neutral-950/50 border border-white/[0.05] flex flex-col group hover:bg-neutral-950 transition-colors">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider">US-East</span>
</div>
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
</div>
<div className="flex items-end justify-between">
<div className="text-3xl font-medium tracking-tight text-neutral-50 tabular-nums">12<span className="text-sm text-neutral-500 ml-1">ms</span></div>
<div className="flex items-center gap-1 text-emerald-500 text-xs font-medium">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        99.9%
                    </div>
</div>
<div className="mt-5 flex flex-col gap-2">
<div className="flex justify-between text-[10px] text-neutral-500 font-mono"><span>CAPACITY</span><span>82%</span></div>
<div className="w-full bg-neutral-800 rounded-full h-1"><div className="bg-emerald-500 h-1 rounded-full transition-all duration-1000" style={{width: '82%'}}></div></div>
</div>
</div>

<div className="p-5 rounded-xl bg-neutral-950/50 border border-white/[0.05] flex flex-col group hover:bg-neutral-950 transition-colors">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider">EU-Central</span>
</div>
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
</div>
<div className="flex items-end justify-between">
<div className="text-3xl font-medium tracking-tight text-neutral-50 tabular-nums">24<span className="text-sm text-neutral-500 ml-1">ms</span></div>
<div className="flex items-center gap-1 text-emerald-500 text-xs font-medium">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        99.8%
                    </div>
</div>
<div className="mt-5 flex flex-col gap-2">
<div className="flex justify-between text-[10px] text-neutral-500 font-mono"><span>CAPACITY</span><span>64%</span></div>
<div className="w-full bg-neutral-800 rounded-full h-1"><div className="bg-emerald-500 h-1 rounded-full transition-all duration-1000" style={{width: '64%'}}></div></div>
</div>
</div>

<div className="p-5 rounded-xl bg-neutral-950/50 border border-amber-500/20 flex flex-col group hover:bg-neutral-950 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.05)]">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono font-medium text-amber-500 uppercase tracking-wider">AP-South</span>
</div>
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</span>
</div>
<div className="flex items-end justify-between">
<div className="text-3xl font-medium tracking-tight text-neutral-50 tabular-nums">142<span className="text-sm text-neutral-500 ml-1">ms</span></div>
<div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                        98.4%
                    </div>
</div>
<div className="mt-5 flex flex-col gap-2">
<div className="flex justify-between text-[10px] text-amber-500/70 font-mono"><span>CAPACITY</span><span>91%</span></div>
<div className="w-full bg-neutral-800 rounded-full h-1"><div className="bg-amber-500 h-1 rounded-full transition-all duration-1000" style={{width: '91%'}}></div></div>
</div>
</div>
</div>

<div className="w-full lg:w-2/3 p-6 sm:p-8 rounded-xl bg-neutral-950/50 border border-white/[0.05] flex flex-col relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] blur-[100px] rounded-full pointer-events-none bg-emerald-500/10"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 gap-4">
<div className="">
<h3 className="text-base font-medium text-neutral-50 font-geist tracking-tight">Active Node Topology</h3>
<p className="text-xs text-neutral-400 font-geist mt-1">Live routing visualization across global regions.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] text-neutral-400 font-mono uppercase">Optimal</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-[10px] text-neutral-400 font-mono uppercase">Degraded</span>
</div>
</div>
</div>
<div className="flex-1 relative min-h-[320px] flex items-center justify-center z-10 border border-white/[0.05] rounded-lg bg-neutral-950">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="line-grad-1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0.8"></stop>
</lineargradient>
<lineargradient id="line-grad-2" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#f59e0b" stop-opacity="0.5"></stop>
</lineargradient>
<filter height="140%" id="glow-emerald" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path className="opacity-70" d="M 20 45 C 35 45, 40 50, 50 50" fill="none" stroke="url(#line-grad-1)" strokeWidth="1"></path>
<path className="opacity-50 animate-[dash_20s_linear_infinite]" d="M 20 45 C 30 30, 40 30, 50 50" fill="none" stroke="url(#line-grad-1)" stroke-dasharray="2 4" strokeWidth="1.5"></path>
<path className="opacity-70" d="M 50 50 C 65 50, 75 35, 80 35" fill="none" stroke="url(#line-grad-1)" strokeWidth="1"></path>
<path className="opacity-80 animate-[dash_15s_linear_infinite]" d="M 50 50 C 60 70, 70 70, 75 65" fill="none" stroke="url(#line-grad-2)" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<circle fill="#10b981" filter="url(#glow-emerald)" r="1">
<animatemotion dur="3s" path="M 20 45 C 35 45, 40 50, 50 50" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#10b981" filter="url(#glow-emerald)" r="1">
<animatemotion begin="1s" dur="2s" path="M 20 45 C 30 30, 40 30, 50 50" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#10b981" filter="url(#glow-emerald)" r="1">
<animatemotion dur="2.5s" path="M 50 50 C 65 50, 75 35, 80 35" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#f59e0b" r="1.5">
<animatemotion begin="0.5s" dur="4s" path="M 50 50 C 60 70, 70 70, 75 65" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<style>
                    @keyframes dash {
                        to { stroke-dashoffset: -100; }
                    }
                    @keyframes float-node {
                        0%, 100% { transform: translate(-50%, -50%) translateY(0); }
                        50% { transform: translate(-50%, -50%) translateY(-5px); }
                    }
                </style>


<div className="absolute left-[20%] top-[45%] flex flex-col items-center gap-2" style={{animation: 'float-node 6s ease-in-out infinite'}}>
<div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-neutral-900 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] relative">
<div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-50"></div>
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex flex-col items-center">
<span className="text-[9px] font-mono text-neutral-300 bg-neutral-800/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">US-E1</span>
</div>
</div>

<div className="absolute left-[50%] top-[50%] flex flex-col items-center gap-2" style={{animation: 'float-node 7s ease-in-out infinite 1s'}}>
<div className="w-14 h-14 rounded-full border-2 border-emerald-500 bg-neutral-900 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.25)] relative">
<div className="absolute -inset-2 rounded-full border border-emerald-500/20 animate-[spin_10s_linear_infinite] border-t-emerald-500"></div>
<svg className="text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 backdrop-blur-sm">CORE-ROUTER</span>
</div>
</div>

<div className="absolute left-[80%] top-[35%] flex flex-col items-center gap-2" style={{animation: 'float-node 5s ease-in-out infinite 0.5s'}}>
<div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-neutral-900 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex flex-col items-center">
<span className="text-[9px] font-mono text-neutral-300 bg-neutral-800/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">EU-C1</span>
</div>
</div>

<div className="absolute left-[75%] top-[65%] flex flex-col items-center gap-2" style={{animation: 'float-node 6s ease-in-out infinite 2s'}}>
<div className="w-10 h-10 rounded-full border border-amber-500/40 bg-neutral-900 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] relative">
<div className="absolute top-0 right-0 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-neutral-900"></div>
<svg className="text-amber-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex flex-col items-center">
<span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-sm">AP-S1</span>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs font-mono text-neutral-500">
<div className="flex gap-4">
<span>IN: 4.2 TB/s</span>
<span className="">OUT: 3.8 TB/s</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    SYNCED
                </div>
</div>
</div>
</main>
</div>
</div>
</section><section className="flex-1 flex flex-col lg:pt-32 z-10 bg-neutral-950/80 w-full pt-32 pr-6 pb-16 pl-6 relative items-center">
<div className="w-full max-w-[1180px]">

<div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 items-start justify-between">

<div className="flex-1 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-[520px]">
<div className="flex items-center gap-2 mb-6">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</div>
<span className="text-xs font-semibold uppercase tracking-widest font-geist text-neutral-600">Customer Validation</span>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
                    Trusted by engineering teams operating AI at scale
                </h2>
</div>

<div className="flex-1 w-full max-w-[420px] md:mt-12">
<p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-base text-neutral-500 font-geist">
                    Integrated into production environments across high-throughput data pipelines. See how leading infrastructure teams use our platform to maintain complete observability and reliability.
                </p>
</div>
</div>

<section className="sm:py-24 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll w-full pt-24 pb-16">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 w-full">

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 bg-gradient-to-r from-white/10 to-white/0 z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
<svg className="w-6 h-6 text-emerald-500 mb-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
</svg>
<div className="flex items-center gap-1.5 mb-6">
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path className="" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-base leading-relaxed font-geist mb-8 flex-1 text-neutral-400">
          "The telemetry platform gave us unprecedented visibility into our agent networks. Anomaly detection catches issues before they hit production."
        </p>
<div className="flex items-center gap-3 mt-auto">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-full border border-white/[0.08] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-medium font-geist text-neutral-50">Sarah Jenkins</div>
<div className="text-xs font-geist text-neutral-500">VP Engineering, DataFlow</div>
</div>
</div>
</div>
<div className="p-8 lg:p-10 border-t border-white/[0.05] relative z-10">
<div className="text-4xl lg:text-5xl font-medium tracking-tight font-geist mb-2 tabular-nums text-neutral-50">4.2<span className="text-2xl ml-0.5 text-neutral-400">ms</span></div>
<div className="text-sm font-geist leading-snug text-neutral-400">Average telemetry ingestion latency</div>
</div>
</div>

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 bg-gradient-to-r from-white/10 to-white/0 z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
<svg className="w-6 h-6 text-emerald-500 mb-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
</svg>
<div className="flex items-center gap-1.5 mb-6">
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-base leading-relaxed font-geist mb-8 flex-1 text-neutral-400">
          "Integrating the monitoring layer took minutes. We now have real-time throughput metrics across 32 global clusters with zero configuration."
        </p>
<div className="flex items-center gap-3 mt-auto">
<img alt="David Chen" className="w-10 h-10 rounded-full border border-white/[0.08] object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-medium font-geist text-neutral-50">David Chen</div>
<div className="text-xs font-geist text-neutral-500">Lead Architect, NeuralNet</div>
</div>
</div>
</div>
<div className="p-8 lg:p-10 border-t border-white/[0.05] relative z-10">
<div className="text-4xl lg:text-5xl font-medium tracking-tight font-geist mb-2 tabular-nums text-neutral-50">32<span className="text-emerald-500">+</span></div>
<div className="text-sm font-geist leading-snug text-neutral-400">Global regions actively monitored</div>
</div>
</div>

<div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 bg-gradient-to-r from-white/10 to-white/0 z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
<svg className="w-6 h-6 text-emerald-500 mb-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
</svg>
<div className="flex items-center gap-1.5 mb-6">
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path className="" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-base leading-relaxed font-geist mb-8 flex-1 text-neutral-400">
          "From infrastructure health to operational logs, everything is unified. Our incident resolution time dropped significantly in the first month."
        </p>
<div className="flex items-center gap-3 mt-auto">
<img alt="Elena Rodriguez" className="w-10 h-10 rounded-full border border-white/[0.08] object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-medium font-geist text-neutral-50">Elena Rodriguez</div>
<div className="text-xs font-geist text-neutral-500">CTO, Synthetix</div>
</div>
</div>
</div>
<div className="p-8 lg:p-10 border-t border-white/[0.05] relative z-10">
<div className="text-4xl lg:text-5xl font-medium tracking-tight font-geist mb-2 tabular-nums text-neutral-50">70<span className="text-2xl ml-0.5 text-neutral-400">%</span></div>
<div className="text-sm font-geist leading-snug text-neutral-400">Reduction in incident resolution time</div>
</div>
</div>
</div>
</section>
</div>
</section><section className="flex-1 flex flex-col lg:pt-32 z-10 bg-neutral-950/80 w-full pt-24 pr-6 pb-16 pl-6 relative items-center">
<div className="w-full max-w-[1180px]">
<div className="flex flex-col md:flex-row md:items-end [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full mb-16 gap-x-8 gap-y-8 items-start justify-between">
<div className="flex-1 w-full max-w-[600px]">
<div className="flex mb-6 gap-x-2 gap-y-2 items-center">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</div>
<span className="text-xs font-semibold uppercase tracking-widest font-geist text-neutral-400">Pricing</span>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist mb-4">
          Simple, flexible plans
        </h2>
<p className="text-base leading-relaxed font-geist text-neutral-400">
          Choose the right plan for your team and scale as you grow.
        </p>
</div>
<div className="flex-shrink-0 mt-4 md:mt-0 pb-2">
<div className="relative inline-flex flex-col items-center">
<div className="flex items-center p-1 border border-white/[0.05] rounded-full shadow-sm bg-neutral-950">
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all font-geist shadow-[0_2px_8px_-2px_rgba(0,0,0,0.5)] border border-white/[0.05] text-white bg-neutral-800">Annually</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all font-geist text-neutral-400 hover:text-neutral-200">Monthly</button>
</div>
<div className="absolute -top-3.5 -right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border font-geist shadow-sm whitespace-nowrap z-10 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 rotate-[4deg]">
            Save 53%
          </div>
</div>
</div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll grid grid-cols-1 lg:grid-cols-3 lg:gap-6 fade-in-up animate z-10 w-full relative gap-x-5 gap-y-5">
<div className="group flex flex-col border border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 bg-gradient-to-r from-white/10 to-white/0 z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] bg-neutral-950 relative" style={{-BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-2xl font-medium tracking-tight font-geist mb-2 text-neutral-50">Starter</h3>
<p className="text-sm font-geist leading-relaxed min-h-[44px] mb-6 text-neutral-400">
            For individuals looking to automate their daily tasks.
          </p>
<div className="flex gap-1 mb-8 gap-x-1 gap-y-1 items-baseline">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-geist tabular-nums text-neutral-50">$19</span>
<span className="text-sm font-geist text-neutral-400">/mo</span>
</div>
<button className="font-geist mt-auto flex w-full items-center justify-center rounded-lg border px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white focus-visible:ring-neutral-300 border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900">
                Get Started
            </button>
</div>
<div className="p-8 lg:p-10 border-t border-white/[0.05] relative z-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-700"></div>
<span className="text-sm font-geist text-neutral-400">100 tasks/month</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-700"></div>
<span className="text-sm font-geist text-neutral-400">Email automation</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-700"></div>
<span className="text-sm font-geist text-neutral-400">Meeting summaries</span>
</li>
</ul>
</div>
</div>
<div className="group flex flex-col border border-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 to-transparent z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] bg-neutral-950 relative" style={{-BorderGradient: 'linear-gradient(90deg, rgba(16, 185, 129, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-2xl font-medium tracking-tight font-geist mb-2 text-neutral-50">Pro</h3>
<p className="text-sm font-geist leading-relaxed min-h-[44px] mb-6 text-neutral-400">
            For fast-moving teams ready to offload the busywork.
          </p>
<div className="flex gap-1 mb-8 items-baseline">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-geist tabular-nums text-neutral-50">$39</span>
<span className="text-sm font-geist text-neutral-400">/mo</span>
</div>
<button className="group/btn mt-auto font-geist flex w-full items-center justify-center gap-2 rounded-lg border border-[#009b81] bg-gradient-to-b from-[#00c9a7] to-[#009b81] px-6 py-2.5 text-sm font-medium shadow-md transition-all duration-200 hover:from-[#20d7b2] hover:to-[#00a88a] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c9a7] focus-visible:ring-offset-2 text-white">
                Get Started
                <iconify-icon className="text-base transition-transform duration-200 group-hover/btn:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="p-8 lg:p-10 border-t border-emerald-500/10 relative z-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)] shrink-0">
</div>
<span className="text-sm font-medium font-geist text-neutral-50">Everything in Starter</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)] shrink-0">
</div>
<span className="text-sm font-geist text-neutral-300">1,000 tasks/month</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)] shrink-0">
</div>
<span className="text-sm font-geist text-neutral-300">Priority email automation</span>
</li>
</ul>
</div>
</div>
<div className="group flex flex-col border border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 bg-gradient-to-r from-white/10 to-white/0 z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] bg-neutral-950 relative" style={{-BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '20px'}}>
<div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-2xl font-medium tracking-tight font-geist mb-2 text-neutral-50">Enterprise</h3>
<p className="text-sm font-geist leading-relaxed min-h-[44px] mb-6 text-neutral-400">
            For large teams and organizations that need scale and security.
          </p>
<div className="flex gap-1 mb-8 items-baseline">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-geist tabular-nums text-neutral-50">$99</span>
<span className="text-sm font-geist text-neutral-400">/mo</span>
</div>
<button className="font-geist mt-auto flex w-full items-center justify-center rounded-lg border px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white focus-visible:ring-neutral-300 border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900">
                Get Started
            </button>
</div>
<div className="p-8 lg:p-10 border-t border-white/[0.05] relative z-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-600"></div>
<span className="text-sm font-medium font-geist text-neutral-50">Everything in Pro</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-700"></div>
<span className="text-sm font-geist text-neutral-400">Unlimited tasks/month</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-neutral-700"></div>
<span className="text-sm font-geist text-neutral-400">Dedicated account manager</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section><section className="flex flex-col w-full z-10 relative items-center">

<div className="flex-1 flex flex-col lg:pt-32 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 w-full z-10 pt-32 pr-6 pb-16 pl-6 relative items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none bg-emerald-400/10">
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.05] mb-6 shadow-sm relative z-10 bg-neutral-900/50">
<span className="text-xs font-medium uppercase font-geist tracking-widest text-neutral-400">Support</span>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
        Frequently asked questions
    </h2>
<p className="text-base md:text-lg font-geist max-w-[600px] text-center mb-16 relative z-10 leading-relaxed text-neutral-500">
        Everything you need to know about the product and billing. Can't find the answer you're looking for? Please <a className="text-emerald-500 transition-colors hover:text-emerald-400" href="#">chat to our friendly team</a>.
    </p>
<div className="flex flex-col gap-3 z-10 w-full max-w-[800px] relative gap-x-3 gap-y-3">
<details className="group w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm" open="">
<summary className="flex w-full items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-50">
            How does the platform integrate with our existing infrastructure?
            <span className="group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 group-hover:text-emerald-500">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 -mt-2 text-neutral-400">
            Our platform provides native integrations for Kubernetes, AWS, GCP, and Azure, along with SDKs for Python, Node.js, and Go. Deployment takes minutes using our Helm charts or Terraform modules.
        </div>
</details>
<details className="group w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm">
<summary className="flex w-full items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-50">
            What is the data retention policy for telemetry logs?
            <span className="group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 group-hover:text-emerald-500">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 -mt-2 text-neutral-400">
            By default, we retain high-resolution telemetry data for 30 days and aggregated historical data for 12 months. Custom retention policies are available on our Enterprise plan.
        </div>
</details>
<details className="group w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm">
<summary className="flex w-full items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-50">
            Can we self-host the telemetry platform?
            <span className="group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 group-hover:text-emerald-500">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 -mt-2 text-neutral-400">
            Yes, we offer both a fully managed cloud solution and a self-hosted Enterprise edition that can be deployed within your VPC for strict compliance and security requirements.
        </div>
</details>
<details className="group w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm">
<summary className="flex w-full items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-50">
            How does pricing scale with telemetry volume?
            <span className="group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 group-hover:text-emerald-500">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 -mt-2 text-neutral-400">
            Our pricing is based on the number of active AI agents and data throughput. We offer tiered volume discounts to ensure predictable costs as your infrastructure scales.
        </div>
</details>
<details className="group w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm">
<summary className="flex w-full items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-50">
            Is there a limit to the number of team members?
            <span className="group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 group-hover:text-emerald-500">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 -mt-2 text-neutral-400">
            No, all our plans include unlimited seats. We believe observability should be accessible to your entire engineering and operations organization without arbitrary limits.
        </div>
</details>
<details className="group w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm">
<summary className="flex w-full items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-200 hover:text-neutral-50 transition-colors">
            What kind of support is included with the plans?
            <span className="group-open:rotate-45 transition-all duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 group-hover:text-neutral-50">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 -mt-2 text-neutral-400">
            All plans include access to our comprehensive documentation and community forum. Pro and Enterprise plans include priority email support, with Enterprise offering a dedicated technical account manager and a 1-hour SLA for critical incidents.
        </div>
</details>
</div>
</div>

<footer className="flex-1 flex flex-col lg:pt-32 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 w-full z-10 pt-32 pr-6 pb-16 pl-6 relative items-center">
<div className="w-full max-w-[1180px] mx-auto flex flex-col">
<div className="w-full mb-12 overflow-hidden">
<h2 className="text-[13vw] md:text-[14vw] lg:text-[150px] xl:text-[165px] leading-[0.75] uppercase select-none lg:text-left font-bold tracking-tighter text-center w-full text-neutral-100">
                telemetry
            </h2>
</div>
<div className="w-full h-px bg-black/[0.06] mb-12"></div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 w-full mb-16">
<div className="flex flex-col gap-4 col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">Product</p>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">Features</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">Solution</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">Integration</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4 col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">Resources</p>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">FAQ</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">Testimonials</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">Support</a>
</div>
<div className="flex flex-col gap-4 col-span-2 md:col-start-4 lg:col-start-6 items-start md:items-end">
<p className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">Connect</p>
<div className="flex flex-col gap-4 items-start md:items-end">
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">YouTube</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">X (Twitter)</a>
<a className="text-base transition-colors hover:text-black text-neutral-600" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="w-full pt-8 border-t border-black/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
<div className="flex gap-6 order-2 md:order-1">
<a className="transition-colors hover:text-black" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-black" href="#">Terms of Service</a>
</div>
<div className="text-center md:text-right order-1 md:order-2">
<span>© 2026 Telemetry Platform, Inc. All Rights Reserved.</span>
</div>
</div>
</div>
</footer>
</section>
</div>

    </>
  );
}
