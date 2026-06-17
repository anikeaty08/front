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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        (function() {
            const canvas = document.getElementById('canvas-aura-emmabuf9700a9axf');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width, height, time = 0;

            function resize() {
                width = canvas.width = canvas.parentElement.clientWidth;
                height = canvas.height = canvas.parentElement.clientHeight;
            }

            window.addEventListener('resize', resize);
            resize();

            function animate() {
                time += 0.0015;
                ctx.fillStyle = '#02040a';
                ctx.fillRect(0, 0, width, height);
                ctx.globalCompositeOperation = 'screen';

                const numFolds = 28;
                for (let i = 0; i < numFolds; i++) {
                    const normalizedX = i / numFolds;
                    const xPos = (normalizedX * width) + Math.sin(time * 2 + i) * (width * 0.05);
                    const foldWidth = (width / numFolds) * 3;
                    
                    const baseIntensity = Math.sin(normalizedX * Math.PI) * 0.6 + 0.4;
                    const waveIntensity = (Math.sin(time * 3 + i * 0.4) + 1) * 0.5;
                    const gradientBoost = (normalizedX * 0.5) + 0.5;
                    const finalIntensity = baseIntensity * waveIntensity * gradientBoost;

                    const grad = ctx.createLinearGradient(0, 0, 0, height);
                    grad.addColorStop(0, `rgba(2, 6, 20, 0)`);
                    grad.addColorStop(0.4, `rgba(14, 60, 120, ${finalIntensity * 0.2})`);
                    grad.addColorStop(0.7, `rgba(0, 160, 240, ${finalIntensity * 0.5})`);
                    grad.addColorStop(1, `rgba(180, 240, 255, ${finalIntensity * 0.9})`);

                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.rect(xPos - foldWidth / 2, 0, foldWidth, height);
                    ctx.fill();
                }

                ctx.globalCompositeOperation = 'source-over';
                const radialGrad = ctx.createRadialGradient(width * 0.8, height, 0, width * 0.8, height, height * 0.8);
                radialGrad.addColorStop(0, 'rgba(0, 180, 255, 0.15)');
                radialGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = radialGrad;
                ctx.fillRect(0, 0, width, height);

                requestAnimationFrame(animate);
            }
            animate();
        })();
    
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
      

<div className="aura-background-component -z-10 w-full top-0 opacity-60 absolute h-[800px]" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 69%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 69%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<nav className="fixed w-full z-50 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3" href="#">
<span className="text-white font-bold text-xl tracking-tighter">TRST.</span>
</a>
<div className="hidden lg:flex gap-1 border border-white/10 rounded-full px-4 h-10 items-center">
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Market Map</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Benchmark</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Grader</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Insights</a>
</div>
</div>
<div className="flex gap-4 items-center">
<a className="group inline-flex hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)]" href="#" style={{backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))'}}>
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[110px] transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] h-full rounded-full pt-2 pr-4 pb-2 pl-4">
            Discuss Strategic Fit
            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 pt-48 pb-32 relative overflow-hidden bg-[#02040a]">
<canvas className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80" height="852" id="canvas-aura-emmabuf9700a9axf" width="1568"></canvas>
<div className="grid lg:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<h1 className="text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Trust infrastructure, <span className="text-indigo-400">mapped and benchmarked.</span>
</h1>
<p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                TRST.com is a developing intelligence layer for the systems behind digital trust — identity, verification, fraud controls, consent, credentialing, trust &amp; safety, and compliance infrastructure. We’re organizing the category through structured vendor intelligence, transparent benchmarking, and practical research.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
<button className="relative group border border-white/5 rounded-full focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300" style={{background: 'radial-gradient(140% 140% at 20% 20%, rgba(255, 255, 255, 0.08), transparent 40%), linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.22)), rgba(30, 41, 59, 0.4)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 20px -4px rgba(0,0,0,0.4)'}}>

<div className="absolute inset-[4px] rounded-full border border-white/5 pointer-events-none" style={{background: 'radial-gradient(120% 120% at 25% 30%, rgba(255, 255, 255, 0.06), transparent 48%), linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(255, 255, 255, 0.02)), rgba(15, 23, 42, 0.6)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'}}></div>

<div className="flex gap-2 group-hover:text-white transition-colors z-10 font-medium text-white/90 pt-3 pr-6 pb-3 pl-6 relative drop-shadow-sm gap-x-2 gap-y-2 items-center justify-center">
                    Discuss Strategic Fit 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
<button className="text-slate-300 px-6 py-3 font-medium hover:text-white flex items-center gap-2 group">
                    Explore the Benchmark <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 border-t border-white/10 pt-6">
<div className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Structured market map</div>
<div className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Transparent benchmark criteria</div>
<div className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Lightweight trust stack grader</div>
<div className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Research for operators</div>
</div>
</div>

<div className="relative hidden lg:block">

<div className="-translate-y-1/2 absolute top-1/2 right-0 z-20 border-[6px] transform transition hover:scale-105 duration-500 bg-white w-[280px] border-slate-100 rounded-[2rem] p-4 shadow-2xl rotate-x-[4deg] rotate-y-[-6deg]">
<div className="flex flex-col mt-4 mb-6 items-center">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl shadow-lg mb-3 flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold tracking-tight">Trust Stack Score</h3>
<p className="text-slate-500 text-sm">Overall Coverage: 84/100</p>
</div>
<div className="space-y-4 mt-2">
<div className="">
<div className="flex justify-between text-[11px] font-medium text-slate-500 mb-1 px-1">
<span>Identity Verification</span>
<span className="text-indigo-600">92%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-[11px] font-medium text-slate-500 mb-1 px-1">
<span>Fraud Exposure Controls</span>
<span className="text-indigo-600">88%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-[11px] font-medium text-slate-500 mb-1 px-1">
<span>Consent Frameworks</span>
<span className="text-orange-500">45%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-orange-400 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div className="pt-4 border-t border-slate-100">
<button className="hover:bg-slate-800 transition flex gap-2 text-sm font-medium text-white bg-slate-900 w-full rounded-full pt-2.5 pb-2.5 shadow-md items-center justify-center">
                            View Full Report
                        </button>
</div>
</div>
</div>

<div className="absolute right-24 top-0 w-[500px] bg-white rounded-xl shadow-xl border border-slate-200/60 p-6 z-10 rotate-y-12 opacity-90 scale-90 origin-right">
<div className="flex gap-8 mb-6 border-b border-slate-100 pb-4">
<div className="text-sm font-semibold text-slate-900 border-b-2 border-indigo-600 pb-4 -mb-4.5">Market Map</div>
<div className="text-sm font-medium text-slate-400">Categories</div>
<div className="text-sm font-medium text-slate-400">Methodology</div>
</div>
<div className="grid grid-cols-2 gap-8 mb-8">
<div className="">
<div className="text-xs text-slate-500 font-medium mb-1">Categories Analyzed</div>
<div className="text-2xl font-bold text-slate-900">12</div>
</div>
<div className="">
<div className="text-xs text-slate-500 font-medium mb-1">Vendors Mapped</div>
<div className="text-2xl font-bold text-slate-900">142</div>
</div>
</div>

<div className="h-32 flex items-end justify-between gap-1">
<div className="w-full bg-slate-100 h-[20%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[35%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[55%] rounded-t-sm"></div>
<div className="w-full bg-indigo-100 h-[85%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[65%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[25%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>

</header>

<section className="bg-white pt-16 pb-16 relative overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse 70% 60% at center, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at center, black, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h4 className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Tracking key trust infrastructure categories</h4>

<div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm">
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:user-id-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Identity Verification</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:buildings-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">KYB / Business Verif.</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:shield-warning-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Fraud &amp; Risk</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:lock-keyhole-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Authentication</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:clipboard-check-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Consent Management</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:wallet-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Digital Credentials</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:safe-square-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Trust &amp; Safety</span>
</div>
<div className="flex flex-col gap-3 justify-center items-center py-10 px-4 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer text-center">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors duration-500" height="32" icon="solar:star-fall-linear" width="32"></iconify-icon>
<span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Reputation Signals</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden sm:py-32 sm:px-8 text-gray-800 pt-24 pr-4 pb-24 pl-4 relative" style={{fontFamily: '\'Inter\', sans-serif'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-white/70 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-40">
<svg className="min-w-[1400px] min-h-[1400px] object-cover" fill="none" viewbox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
<lineargradient id="chipGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="100%" stop-color="#f4f4f5"></stop>
</lineargradient>
<filter height="300%" id="chipShadow" width="300%" x="-100%" y="-100%">
<fedropshadow dx="0" dy="25" flood-color="#000" flood-opacity="0.15" stddeviation="20"></fedropshadow>
</filter>
</defs>
<g stroke="#d4d4d8" strokeWidth="1.5">
<line x1="120" x2="160" y1="210" y2="210"></line>
<line x1="120" x2="160" y1="220" y2="220"></line>
<line x1="120" x2="160" y1="230" y2="230"></line>
</g>
<rect fill="url(#chipGrad)" filter="url(#chipShadow)" height="50" rx="6" stroke="rgba(0,0,0,0.12)" strokeWidth="1" width="70" x="160" y="195"></rect>
<circle cx="170" cy="205" fill="#a1a1aa" r="1.5">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="215" cy="220" fill="#6366f1" filter="url(#glow)" r="2.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
<path d="M 215 220 H 350 L 480 350 H 550" fill="none" stroke="#d4d4d8" strokeWidth="1.5"></path>
<path d="M 215 220 H 350 L 480 350 H 550" fill="none" stroke="#6366f1" stroke-dasharray="60 600" stroke-dashoffset="600" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="3s" repeatcount="indefinite" values="600;-60"></animate>
</path>
<g stroke="#d4d4d8" strokeWidth="1.5">
<line x1="120" x2="160" y1="670" y2="670"></line>
<line x1="120" x2="160" y1="680" y2="680"></line>
<line x1="120" x2="160" y1="690" y2="690"></line>
</g>
<rect fill="url(#chipGrad)" filter="url(#chipShadow)" height="50" rx="6" stroke="rgba(0,0,0,0.12)" strokeWidth="1" width="70" x="160" y="655"></rect>
<circle cx="170" cy="665" fill="#a1a1aa" r="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="215" cy="680" fill="#10b981" filter="url(#glow)" r="2.5">
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
<path d="M 215 680 H 350 L 480 550 H 550" fill="none" stroke="#d4d4d8" strokeWidth="1.5"></path>
<path d="M 215 680 H 350 L 480 550 H 550" fill="none" stroke="#10b981" stroke-dasharray="60 600" stroke-dashoffset="600" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="3.5s" repeatcount="indefinite" values="600;-60"></animate>
</path>
<g stroke="#d4d4d8" strokeWidth="1.5">
<line x1="1280" x2="1240" y1="410" y2="410"></line>
<line x1="1280" x2="1240" y1="420" y2="420"></line>
<line x1="1280" x2="1240" y1="430" y2="430"></line>
</g>
<rect fill="url(#chipGrad)" filter="url(#chipShadow)" height="50" rx="6" stroke="rgba(0,0,0,0.12)" strokeWidth="1" width="70" x="1170" y="395"></rect>
<circle cx="1230" cy="405" fill="#a1a1aa" r="1.5">
<animate attributename="opacity" dur="1.7s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="1185" cy="420" fill="#3b82f6" filter="url(#glow)" r="2.5">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
<path d="M 1185 420 H 1050 L 920 550 H 850" fill="none" stroke="#d4d4d8" strokeWidth="1.5"></path>
<path d="M 1185 420 H 1050 L 920 550 H 850" fill="none" stroke="#3b82f6" stroke-dasharray="60 600" stroke-dashoffset="600" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="4s" repeatcount="indefinite" values="600;-60"></animate>
</path>
</svg>
</div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="max-w-2xl mb-24">
<h4 className="text-indigo-600 font-medium mb-4 text-sm tracking-wide uppercase">Inside the TRST intelligence layer</h4>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6" style={{textShadow: '0 1px 2px rgba(0,0,0,0.05)'}}>
                A clearer view of digital trust systems
            </h2>
<p className="text-lg text-slate-600 font-normal leading-relaxed">
                Identity, verification, fraud, consent, governance, and trust signals are often evaluated in isolation even though operators deploy them as an interconnected stack. TRST maps the reality of how these tools are evaluated and implemented.
            </p>
</div>

<div className="space-y-32">

<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl flex items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_15px_-3px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-indigo-600" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="font-normal text-lg text-slate-900">Market Map</span>
</div>
<h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-5">Structured market map</h3>
<p className="text-base text-slate-600 font-normal mb-10 leading-relaxed">
                        Map the trust infrastructure landscape across categories such as identity verification, KYB, fraud prevention, authentication, consent, digital credentials, trust &amp; safety, and reputation systems.
                    </p>
<button className="transition-all active:scale-[0.98] inline-flex gap-2 text-sm font-medium text-white bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-xl mb-10 pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_20px_-5px_rgba(79,70,229,0.4),0_0_0_1px_#4338ca] items-center">
                        Explore categories <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="grid grid-cols-2 gap-y-5 text-sm font-medium">
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Vendor Intelligence</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Category Taxonomy</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Use Case Coverage</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Platform Matrix</a>
</div>
</div>

<div className="overflow-hidden min-h-[340px] flex transition-transform hover:-translate-y-2 duration-500 ease-out bg-gradient-to-b from-[#ffffff] to-[#f8f8f8] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(99,102,241,0.2),0_20px_40px_-15px_rgba(79,70,229,0.1)] items-center justify-center">
<div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full animate-pulse bg-indigo-500/40"></div>
<div className="w-full max-w-sm bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl p-6 shadow-[inset_0_1px_1px_#fff,0_5px_15px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)]">
<div className="flex gap-2 mb-4 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
<div className="flex-1 pb-2 border-b border-slate-200">Category</div>
<div className="w-16 pb-2 border-b border-slate-200 text-center">Vendors</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 mb-2 flex items-center justify-between">
<span className="font-medium text-sm text-slate-700">Identity Verification</span>
<div className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">42</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 mb-2 flex items-center justify-between opacity-80">
<span className="font-medium text-sm text-slate-700">Fraud Prevention</span>
<div className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">38</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center justify-between opacity-60">
<span className="font-medium text-sm text-slate-700">KYB &amp; Compliance</span>
<div className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">24</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="lg:order-2">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl flex items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_15px_-3px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-emerald-500" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<span className="font-normal text-lg text-slate-900">Benchmark</span>
</div>
<h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-5">Transparent benchmark</h3>
<p className="text-base text-slate-600 font-normal mb-10 leading-relaxed">
                        A methodology-led view of how trust stacks are evaluated: coverage, controls, transparency, governance, recovery, and implementation fit.
                    </p>
<button className="bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] text-slate-900 rounded-xl py-3 px-6 text-sm font-medium transition-all active:scale-[0.98] inline-flex items-center gap-2 mb-10 shadow-[inset_0_1px_1px_#fff,0_5px_15px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)] hover:bg-slate-50">
                        Review methodology <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="grid grid-cols-2 gap-y-5 text-sm font-medium">
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Coverage Logic</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Evaluation Criteria</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Scoring Model</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">Contribute Data</a>
</div>
</div>

<div className="lg:order-1 relative p-8 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#f8f8f8] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(16,185,129,0.2),0_20px_40px_-15px_rgba(16,185,129,0.08)] overflow-hidden min-h-[340px] flex items-center justify-center transition-transform hover:-translate-y-2 duration-500 ease-out">
<div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse"></div>
<div className="w-72 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-6">
<div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Framework Score</span>
<span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-1 rounded-full font-bold tracking-wide">VERIFIED</span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
<span>Transparency</span><span>High</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1">
<div className="bg-emerald-400 h-1 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
<span>Governance</span><span>Robust</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1">
<div className="bg-emerald-400 h-1 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
<span>Integration</span><span>Native</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1">
<div className="bg-emerald-400 h-1 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl flex items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_15px_-3px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-blue-500" height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="font-normal text-lg text-slate-900">Insights</span>
</div>
<h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-5">Operator-focused research</h3>
<p className="text-base text-slate-600 font-normal mb-10 leading-relaxed">
                        Definitions, implementation notes, category primers, and benchmark roundups designed for teams evaluating trust architecture decisions.
                    </p>
<button className="bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] text-slate-900 rounded-xl py-3 px-6 text-sm font-medium transition-all active:scale-[0.98] inline-flex items-center gap-2 mb-10 shadow-[inset_0_1px_1px_#fff,0_5px_15px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)] hover:bg-slate-50">
                        Read insights <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#f8f8f8] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(59,130,246,0.2),0_20px_40px_-15px_rgba(59,130,246,0.08)] overflow-hidden min-h-[340px] flex items-center justify-center transition-transform hover:-translate-y-2 duration-500 ease-out">
<div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse"></div>
<div className="flex flex-col gap-4 w-full max-w-sm">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-400" icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-1.5 w-full bg-slate-100 rounded mb-1.5"></div>
<div className="h-1.5 w-4/5 bg-slate-100 rounded"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center opacity-70">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-400" icon="solar:document-linear" width="20"></iconify-icon>
</div>
<div className="w-full">
<div className="h-2 w-32 bg-slate-200 rounded mb-2"></div>
<div className="h-1.5 w-11/12 bg-slate-100 rounded mb-1.5"></div>
<div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#02040a] mt-12 mb-12 pt-24 pb-24 relative -skew-y-3">
<div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 60%)'}}></div>
<div className="max-w-7xl mx-auto px-6 skew-y-3 relative z-10">
<h5 className="text-indigo-400 font-semibold mb-6 tracking-wide uppercase text-sm">Transparent Methodology</h5>
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div className="">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Built on structural category logic</h2>
<p className="text-slate-400 text-xl leading-relaxed">
                        TRST is intentionally focused on trust infrastructure rather than broad "trust" commentary. The aim is to create a useful, inspectable category asset with clear definitions, visible methodology, and practical utility.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-800/50 pt-12">
<div className="">
<h3 className="text-lg font-semibold mb-3 text-white">Category Taxonomy</h3>
<p className="text-slate-400 text-sm leading-relaxed">Clearly defined segments separating distinct tools like identity verification from adjacent compliance operations.</p>
</div>
<div>
<h3 className="text-lg font-semibold mb-3 text-white">Benchmark Dimensions</h3>
<p className="text-slate-400 text-sm leading-relaxed">Standardized evaluation paths covering transparency, risk mitigation, and implementation complexity.</p>
</div>
<div>
<h3 className="text-lg font-semibold mb-3 text-white">Editorial Process</h3>
<p className="text-slate-400 text-sm leading-relaxed">Research-led insights without pay-to-play editorial placements or superficial product rankings.</p>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-3 text-white">Structured Schema</h3>
<p className="text-slate-400 text-sm leading-relaxed">Truthful data linking categories, vendors, and frameworks to support programmatic infrastructure research.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-40">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Built for operators, vendors, and partners</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-light w-full gap-x-8 gap-y-8">

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl pt-8 pr-8 pb-8 pl-8 relative border border-slate-100 shadow-sm" style={{background: 'linear-gradient(145deg, rgb(255, 255, 255) 0%, rgb(248, 250, 252) 100%)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-xl tracking-tight text-slate-900 font-semibold">Operators evaluating stacks</h3>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-slate-200">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">Use structured research, category pages, and the grader to compare options and identify architecture gaps.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-slate-50 bg-white border border-slate-200 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-700 tracking-widest uppercase font-semibold">Try Grader</span>
<iconify-icon className="text-slate-500 group-hover/btn:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl p-8 relative border border-slate-100 shadow-sm" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-xl tracking-tight text-slate-900 font-semibold">Vendors seeking visibility</h3>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-slate-200">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">Participate in benchmark coverage, contribute methodology input, or support category intelligence initiatives.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-slate-50 bg-white border border-slate-200 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-700 tracking-widest uppercase font-semibold">Submit Input</span>
<iconify-icon className="text-slate-500 group-hover/btn:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl p-8 relative border border-slate-100 shadow-sm" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-xl tracking-tight text-slate-900 font-semibold">Researchers &amp; ecosystem</h3>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-slate-200">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">Use the taxonomy, benchmark framing, and structured market coverage as a category reference point.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-slate-50 bg-white border border-slate-200 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-700 tracking-widest uppercase font-semibold">Read Insights</span>
<iconify-icon className="text-slate-500 group-hover/btn:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl p-8 relative border border-slate-100 shadow-sm" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f0fdfa 100%)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-xl tracking-tight text-teal-900 font-semibold">Strategic partners &amp; acquirers</h3>
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-teal-100">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">Explore TRST as an emerging authority asset with long-term relevance to identity, security, compliance, and trust infrastructure.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-teal-50 bg-white border border-teal-100 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-2">
<span className="text-[11px] text-teal-700 tracking-widest uppercase font-semibold">Discuss Fit</span>
<iconify-icon className="text-teal-500 group-hover/btn:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="flex overflow-hidden text-slate-900 font-sans bg-slate-50 w-full pt-24 pb-24 relative items-center justify-center border-t border-slate-200/50">
<div className="max-w-7xl w-full mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h5 className="text-indigo-600 font-medium mb-4 tracking-wide text-sm uppercase">PSEO Support</h5>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">A structured knowledge base, not a content farm</h2>
<p className="text-lg text-slate-600 leading-relaxed">TRST is being built around repeatable, high-value page systems that help buyers, operators, and researchers navigate the trust infrastructure market.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col group hover:-translate-y-2 transition-transform w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 border border-indigo-100">
<iconify-icon className="text-indigo-600" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Vendor intelligence</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">Structured profiles for identity verification, KYB, fraud, authentication, consent, trust &amp; safety, credentialing, and reputation providers.</p>
<a className="mt-auto text-indigo-600 text-sm font-medium flex items-center gap-2 hover:underline" href="#">See vendor taxonomy <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>

<div className="flex flex-col group hover:-translate-y-2 transition-transform w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6 border border-cyan-100">
<iconify-icon className="text-cyan-600" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Comparison frameworks</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">Side-by-side evaluation paths for specific categories, use cases, and operational tradeoffs based on the benchmark model.</p>
<a className="mt-auto text-cyan-600 text-sm font-medium flex items-center gap-2 hover:underline" href="#">View comparison logic <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>

<div className="flex flex-col group hover:-translate-y-2 transition-transform w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 border border-emerald-100">
<iconify-icon className="text-emerald-600" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Use-case evaluations</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">Guides by industry and risk environment, including fintech, healthcare, marketplaces, crypto, hiring, and B2B SaaS.</p>
<a className="mt-auto text-emerald-600 text-sm font-medium flex items-center gap-2 hover:underline" href="#">Browse use cases <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-slate-900 mt-12 mb-12 pt-24 pb-24 relative -skew-y-3">
<div className="max-w-7xl mx-auto px-6 skew-y-3">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h5 className="text-cyan-400 font-medium mb-6 tracking-wide uppercase text-sm">Utility Layer</h5>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Digital Trust Stack Grader</h2>
<p className="text-slate-400 text-xl leading-relaxed mb-8">
                    A lightweight way to assess coverage across identity, verification, fraud, consent, governance, transparency, and recovery. The grader is designed as a practical entry point into the benchmark framework. Teams can quickly assess how complete their current trust stack is and use the output as a starting point for deeper evaluation.
                </p>
<button className="bg-cyan-500 text-slate-900 px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-colors">
                        Try the Grader <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 font-mono text-sm overflow-hidden">
<div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-700">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
</div>
<div className="text-slate-500 text-xs">/api/v1/grade-stack</div>
</div>
<div className="p-6 text-slate-300">
<div className="flex mb-4">
<span className="text-cyan-400 mr-2">$</span>
<span className="">curl -X POST https://api.trst.com/v1/grade-stack \</span>
</div>
<div className="pl-4">
<span className="text-slate-500">-d industry="fintech" \</span>
</div>
<div className="pl-4">
<span className="text-slate-500">-d risk_profile="high" \</span>
</div>
<div className="pl-4 mb-4">
<span className="text-slate-500">-d active_modules="identity,kyb"</span>
</div>
<div className="text-emerald-400 mb-1">{</div>
<div className="pl-4 text-emerald-400 mb-1">"assessment_id": "eval_9a8b7c6d",</div>
<div className="pl-4 text-emerald-400 mb-1">"stack_profile": "fintech_onboarding",</div>
<div className="pl-4 text-emerald-400 mb-1">"coverage_score": 42,</div>
<div className="pl-4 text-emerald-400 mb-1">"categories_mapped": {</div>
<div className="pl-8 text-emerald-400 mb-1">"identity": "strong",</div>
<div className="pl-8 text-emerald-400 mb-1">"fraud_controls": "missing",</div>
<div className="pl-8 text-emerald-400 mb-1">"consent": "weak"</div>
<div className="pl-4 text-emerald-400 mb-1">},</div>
<div className="pl-4 text-emerald-400 mb-1">"recommendation": "Review Fraud &amp; Consent Frameworks"</div>
<div className="text-emerald-400">}</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Research for trust infrastructure operators</h2>
<p className="text-lg text-slate-600">Latest category notes and deep dives into the tools shaping digital identity and risk.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">

<div className="flex flex-col group cursor-pointer border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8 relative overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:document-text-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wider">Evaluation Guide</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">How to evaluate identity verification vendors beyond onboarding accuracy</h3>
<div className="mt-auto pt-6 text-sm text-slate-500 flex items-center gap-2">
<span>By TRST Research</span>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8 relative overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:shield-warning-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wider">Category Overlap</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">KYB, fraud, and trust signals: where stack overlap creates buyer confusion</h3>
<div className="mt-auto pt-6 text-sm text-slate-500 flex items-center gap-2">
<span>Editorial Note</span>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8 relative overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:tuning-square-2-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow bg-white">
<div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wider">Methodology</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Designing a trust infrastructure benchmark that operators can actually use</h3>
<div className="mt-auto pt-6 text-sm text-slate-500 flex items-center gap-2">
<span>By TRST Research</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-y pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">TRST is actively developing with selective partner conversations</h3>
<p className="text-slate-600 mb-8 text-lg leading-relaxed">If you operate in identity, verification, fraud, compliance, or trust infrastructure and see alignment with the benchmark, market map, research layer, or long-term operating potential, we’re open to a strategic conversation.</p>
<div className="flex gap-4">
<button className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-md">
                        Discuss Strategic Fit <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="text-slate-600 px-5 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:text-slate-900 transition-colors border border-transparent hover:border-slate-200">
                        Review benchmark direction <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h4 className="font-semibold text-slate-900 mb-4 text-lg">Collaboration Pathways</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600"><iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<div>
<span className="block font-medium text-sm text-slate-800">Partnerships &amp; Sponsorship</span>
<span className="block text-sm text-slate-500 mt-1">Support research initiatives and gain visibility in category coverage.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600"><iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<div>
<span className="block font-medium text-sm text-slate-800">Benchmark Collaboration</span>
<span className="block text-sm text-slate-500 mt-1">Provide input on methodology and category boundaries.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-indigo-600"><iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<div>
<span className="block font-medium text-sm text-slate-800">Operator Discussions</span>
<span className="block text-sm text-slate-500 mt-1">Acquisition interest can be discussed where there is strong strategic alignment.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-12 mb-16">
<div className="space-y-6 xl:col-span-1">
<span className="text-slate-900 font-bold text-2xl tracking-tighter block">TRST.</span>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    TRST.com is a developing intelligence asset for digital trust infrastructure.
                </p>
<div className="flex gap-4 pt-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Code</span>
<iconify-icon height="20" icon="solar:code-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div className="">
<h4 className="text-sm font-semibold text-slate-900 tracking-tight">Intelligence</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Market Map</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Benchmark</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Taxonomy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Vendor Directory</a></li>
</ul>
</div>
<div className="mt-12 md:mt-0">
<h4 className="text-sm font-semibold text-slate-900 tracking-tight">Resources</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Insights</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Use Cases</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Digital Trust Grader</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Methodology</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-2 md:gap-8">
<div className="">
<h4 className="text-sm font-semibold text-slate-900 tracking-tight">TRST</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About TRST</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Strategic Fit</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contribute Data</a></li>
</ul>
</div>
<div className="mt-12 md:mt-0">
<h4 className="text-sm font-semibold text-slate-900 tracking-tight">Legal</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row border-slate-200 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-4 text-sm text-slate-500">
<span>© 2024 TRST. All rights reserved.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
