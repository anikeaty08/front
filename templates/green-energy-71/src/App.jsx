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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('techRain');
        const ctx = canvas.getContext('2d');

        let width, height;
        const chars = '01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/';
        const charArray = chars.split('');
        
        let fontSize = 14;
        let columns;
        let drops = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight * 1.2;
            columns = width / fontSize;
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100; 
            }
        }

        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.fillStyle = 'rgba(248, 250, 249, 0.25)'; 
            ctx.fillRect(0, 0, width, height);
            ctx.font = '12px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                const opacity = Math.random() > 0.8 ? 1 : 0.6;
                
                // Color adapted to light theme (green/lime mix)
                ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`; 
                if(Math.random() > 0.9) ctx.fillStyle = `rgba(21, 128, 61, ${opacity})`;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 0.7; 
            }
            requestAnimationFrame(draw);
        }
        draw();
    
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
      <div className="fixed inset-0 -z-50 h-full w-full bg-moving-gradient"></div><div className="fixed inset-0 -z-40 pointer-events-none h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<nav className="fixed top-6 left-0 w-full z-50 px-4 md:px-6">
<div className="glass-panel flex shadow-black/5 h-16 max-w-7xl rounded-full mr-auto ml-auto pr-6 pl-6 shadow-2xl items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-br from-green-900 to-green-950 rounded-lg flex items-center justify-center text-lime-300 shadow-lg shadow-green-900/20 group-hover:rotate-90 transition-transform duration-500">
<iconify-icon icon="solar:leaf-bold-duotone" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 font-serif-display">Biovera</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
<a className="px-5 py-2 rounded-full text-xs font-medium text-slate-900 bg-white shadow-sm border border-slate-200/50 transition-all font-sans" href="#">Platform</a>
<a className="px-5 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all font-sans" href="#">Technology</a>
<a className="px-5 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all font-sans" href="#">Ledger</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans">
                    Login
                </button>
<button className="bg-slate-900 text-white pl-4 pr-3 py-2 rounded-full text-xs font-medium hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20 active:scale-95 font-sans">
                    Start Pilot
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>
</nav>

<section className="flex flex-col overflow-hidden w-full min-h-screen relative items-center justify-center pt-20">

<canvas className="z-0 opacity-60 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0" height="922" id="techRain" width="1440"></canvas>

<div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#F8FAF9] via-[#F8FAF9]/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8FAF9] to-transparent z-10 pointer-events-none"></div>

<div className="container z-20 text-center pt-0 pr-6 pl-6 relative">
<div className="animate-reveal opacity-0 inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl shadow-lime-900/5 px-4 py-1.5 rounded-full mb-10 hover:scale-105 transition-transform cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase font-sans">Series B Secured • $40M Raised</span>
</div>
<h1 className="animate-reveal delay-100 leading-[0.9] md:text-8xl text-6xl font-normal text-slate-900 tracking-tighter font-space-grotesk opacity-0 mb-8">Fuelling Canadas <br/> <span className="text-shine inline-block py-1 relative">Green Energy Shift</span></h1>
<p className="animate-reveal delay-200 md:text-xl leading-relaxed text-lg font-light text-slate-600 font-sans opacity-0 mix-blend-multiply max-w-xl mr-auto mb-12 ml-auto">
                Converting organic waste streams into drop-in sustainable aviation fuels. The closed-loop energy standard for the next century.
            </p>
<div className="animate-reveal opacity-0 delay-300 flex flex-col md:flex-row items-center justify-center gap-4 font-sans">
<button className="w-full md:w-auto group relative overflow-hidden bg-lime-400 text-green-950 px-8 py-4 rounded-full font-medium transition-all hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.6)] shadow-2xl shadow-lime-500/20 active:scale-95">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Deploy Infrastructure
                        <iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:bolt-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
<button className="w-full md:w-auto group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-300 text-slate-600 bg-white/50 backdrop-blur-md hover:bg-white transition-all hover:border-slate-400 active:scale-95">
<span className="w-2 h-2 rounded-full border border-slate-400 group-hover:bg-slate-400 transition-colors"></span>
<span className="font-medium">View Methodology</span>
</button>
</div>
</div>

<div className="absolute bottom-10 z-20 w-full overflow-hidden mask-linear-fade">
<div className="flex whitespace-nowrap animate-marquee gap-20 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> AIRBUS</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> BOEING</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> DELTA</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> LUFTHANSA</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> MAERSK</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> AIRBUS</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> BOEING</span>
<span className="text-xl font-semibold tracking-tight text-slate-500 flex items-center gap-2 font-serif-display"><iconify-icon className="text-lime-500" icon="solar:stars-minimalistic-linear"></iconify-icon> DELTA</span>
</div>
</div>
</section>

<section className="md:px-6 group/section z-30 pt-24 pr-4 pb-24 pl-4 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-tr from-lime-400/10 to-violet-400/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight font-serif-display">System Metrics</h2>
<p className="text-slate-500 mt-2 font-sans font-light text-lg">Real-time performance across the Biovera network.</p>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm text-xs font-mono text-slate-500 hover:border-lime-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    LIVE MONITORING
                </div>
</div>
</div>
<div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 md:row-span-2 glass-card bg-white/60 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 border border-white/60">

<div className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] absolute top-0 right-0 bottom-0 left-0">

<div className="opacity-[0.04] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute top-8 right-8 flex flex-col items-end gap-1.5 z-10">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lime-50/50 border border-lime-100/50 backdrop-blur-sm shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></div>
<span className="font-mono text-[9px] font-semibold text-lime-700 tracking-wider uppercase">System_Active</span>
</div>
<div className="flex flex-col items-end text-[9px] font-mono text-slate-400 gap-0.5 opacity-80">
<span>EFF: 98.4%</span>
<span>LOAD: NOMINAL</span>
</div>
</div>

<div className="absolute top-8 left-8 z-10 pointer-events-none select-none">
<div className="font-serif-display text-slate-200 text-4xl opacity-20 font-bold tracking-tighter">C<span className="text-2xl align-baseline">16</span></div>
<div className="font-mono text-[9px] text-slate-400 opacity-40 mt-1 tracking-widest uppercase">Iso-Paraffinic Kerosene</div>
</div>

<svg className="absolute top-20 left-0 w-full h-24 opacity-20 pointer-events-none" preserveaspectratio="none" viewbox="0 0 400 100">
<path className="text-slate-400" d="M0,50 C50,40 100,70 150,40 S250,10 300,50 S350,80 400,60" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path className="text-lime-500" d="M0,60 C60,50 120,80 180,50 S280,30 350,70 S400,80 400,80" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-lime-200/40 via-lime-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-1 text-xs font-medium text-lime-700 bg-lime-100/50 px-2 py-1 rounded-lg border border-lime-200/50">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +2.4% vs last batch
                        </div>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-3 font-serif-display tracking-tight">Molecular Efficiency</h3>
<p className="text-slate-500 max-w-lg text-lg font-sans font-light leading-relaxed">Our catalytic process achieves <span className="text-slate-900 font-medium">98.5% carbon conversion</span> efficiency, surpassing traditional Fischer-Tropsch methods.</p>
</div>

<div className="flex gap-3 select-none group/chart isolate w-full h-64 mt-8 pr-2 pl-2 relative gap-x-3 gap-y-3 items-end justify-between">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute top-0 w-full h-px bg-slate-200/40"></div>
<div className="absolute top-1/4 w-full h-px bg-slate-200/20 border-t border-dashed border-slate-300/40"></div>
<div className="absolute top-2/4 w-full h-px bg-slate-200/20 border-t border-dashed border-slate-300/40"></div>
<div className="absolute top-3/4 w-full h-px bg-slate-200/20 border-t border-dashed border-slate-300/40"></div>
<div className="absolute bottom-0 w-full h-px bg-slate-300"></div>

<div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-slate-300/40 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-slate-300/40 to-transparent"></div>
</div>

<svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none mix-blend-multiply" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="trendGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#84cc16" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#84cc16" stop-opacity="0"></stop>
</lineargradient>
<pattern height="2" id="gridPattern" patternunits="userSpaceOnUse" width="2">
<circle cx="1" cy="1" fill="#84cc16" fillOpacity="0.3" r="0.5"></circle>
</pattern>
</defs>

<path d="M5,60 C25,55 25,45 45,52 C65,59 65,25 85,20 L85,100 L5,100 Z" fill="url(#trendGradient)"></path>
<path d="M5,60 C25,55 25,45 45,52 C65,59 65,25 85,20 L85,100 L5,100 Z" fill="url(#gridPattern)" opacity="0.3"></path>

<path className="opacity-80" d="M5,60 C25,55 25,45 45,52 C65,59 65,25 85,20" fill="none" stroke="#84cc16" stroke-dasharray="3 3" strokeLinecap="round" strokeWidth="1.5"></path>
<circle cx="45" cy="52" fill="white" r="1.5" stroke="#84cc16" strokeWidth="1.5"></circle>
</svg>

<div className="relative w-full h-[40%] flex flex-col justify-end group/bar cursor-crosshair transition-all duration-500 hover:h-[42%] z-10 group-hover/chart:opacity-50 hover:!opacity-100">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 pointer-events-none z-50">
<div className="bg-slate-900/95 backdrop-blur border border-slate-700 text-white text-[9px] font-mono py-1.5 px-3 rounded shadow-xl flex flex-col items-center gap-0.5 min-w-[60px]">
<span className="text-slate-400 uppercase tracking-widest text-[8px]">Yield</span>
<span className="font-semibold text-lime-400">42.8K</span>
</div>
<div className="w-px h-2 bg-slate-900 mx-auto"></div>
</div>
<div className="w-full h-full bg-slate-50/50 border border-slate-200/80 rounded-sm relative overflow-hidden backdrop-blur-sm group-hover/bar:bg-lime-50/20 transition-colors">
<div className="absolute bottom-0 w-full h-0.5 bg-slate-300"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '4px 4px'}}></div>
</div>
<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-medium text-slate-400 uppercase tracking-widest">Q1</div>
</div>

<div className="relative w-full h-[55%] flex flex-col justify-end group/bar cursor-crosshair transition-all duration-500 delay-75 hover:h-[57%] z-10 group-hover/chart:opacity-50 hover:!opacity-100">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 pointer-events-none z-50">
<div className="bg-slate-900/95 backdrop-blur border border-slate-700 text-white text-[9px] font-mono py-1.5 px-3 rounded shadow-xl flex flex-col items-center gap-0.5 min-w-[60px]">
<span className="text-slate-400 uppercase tracking-widest text-[8px]">Yield</span>
<span className="font-semibold text-lime-400">58.2K</span>
</div>
<div className="w-px h-2 bg-slate-900 mx-auto"></div>
</div>
<div className="w-full h-full bg-slate-50/50 border border-slate-200/80 rounded-sm relative overflow-hidden backdrop-blur-sm group-hover/bar:bg-lime-50/20 transition-colors">
<div className="absolute bottom-0 w-full h-0.5 bg-slate-300"></div>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '4px 4px'}}></div>
</div>
<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-medium text-slate-400 uppercase tracking-widest">Q2</div>
</div>

<div className="relative w-full h-[48%] flex flex-col justify-end group/bar cursor-crosshair transition-all duration-500 delay-100 hover:h-[50%] z-10 group-hover/chart:opacity-50 hover:!opacity-100">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 pointer-events-none z-50">
<div className="bg-slate-900/95 backdrop-blur border border-slate-700 text-white text-[9px] font-mono py-1.5 px-3 rounded shadow-xl flex flex-col items-center gap-0.5 min-w-[60px]">
<span className="text-slate-400 uppercase tracking-widest text-[8px]">Yield</span>
<span className="font-semibold text-lime-400">49.1K</span>
</div>
<div className="w-px h-2 bg-slate-900 mx-auto"></div>
</div>
<div className="w-full h-full bg-slate-50/50 border border-slate-200/80 rounded-sm relative overflow-hidden backdrop-blur-sm group-hover/bar:bg-lime-50/20 transition-colors">
<div className="absolute bottom-0 w-full h-0.5 bg-slate-300"></div>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '4px 4px'}}></div>
</div>
<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-medium text-slate-400 uppercase tracking-widest">Q3</div>
</div>

<div className="relative w-full h-[75%] flex flex-col justify-end group/bar cursor-pointer transition-all duration-500 delay-150 hover:h-[78%] z-20 hover:scale-105">

<div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-100 transition-all duration-300 transform hover:-translate-y-1 pointer-events-none z-50 flex flex-col items-center">
<div className="bg-lime-500/90 backdrop-blur text-white text-[9px] font-mono font-bold py-1 px-3 rounded shadow-[0_4px_12px_-2px_rgba(132,204,22,0.4)] flex items-center gap-2 whitespace-nowrap ring-1 ring-lime-400 ring-offset-1 ring-offset-transparent">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
</span>
<span className="tracking-widest">LIVE</span>
</div>
<div className="w-px h-3 bg-gradient-to-b from-lime-500/50 to-transparent"></div>
</div>

<div className="w-full h-full bg-gradient-to-t from-lime-50 via-white to-lime-50 border-x border-t border-lime-300/80 rounded-t-sm relative overflow-hidden shadow-[0_0_30px_-5px_rgba(132,204,22,0.2)] group-hover/bar:shadow-[0_0_40px_-5px_rgba(132,204,22,0.4)] transition-all">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#84cc16 1px, transparent 1px)', backgroundSize: '6px 6px'}}></div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.8)] animate-[shimmer_2s_infinite]"></div>

<div className="absolute bottom-0 w-full h-1 bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.6)]"></div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-lime-600 rounded-full animate-[ping_3s_infinite]"></div>
</div>

<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
<div className="w-1 h-1 rounded-full bg-lime-500 shadow-[0_0_5px_rgba(132,204,22,1)]"></div>
<div className="text-[9px] font-bold font-mono text-lime-600 uppercase tracking-widest">NOW</div>
</div>
</div>

<div className="relative w-full h-[90%] flex flex-col justify-end group/bar cursor-help transition-all duration-500 delay-200 hover:h-[92%] z-10 group-hover/chart:opacity-50 hover:!opacity-100">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 pointer-events-none z-50">
<div className="bg-white/90 backdrop-blur-md border border-slate-200 text-slate-600 text-[9px] font-mono py-1 px-2.5 rounded shadow-lg whitespace-nowrap flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-slate-400">Est.</span>
<span className="font-bold text-slate-700">95K</span>
</div>
<div className="w-px h-2 bg-slate-300 mx-auto border-l border-dashed border-slate-400"></div>
</div>

<div className="w-full h-full bg-slate-50/10 border-x border-t border-dashed border-slate-300 rounded-t-sm relative overflow-hidden flex flex-col justify-center items-center group-hover/bar:border-lime-300/60 group-hover/bar:bg-lime-50/5 transition-colors">

<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px'}}></div>
<div className="bg-white/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-slate-200/50 text-[8px] font-mono font-medium text-slate-400 uppercase tracking-widest rotate-[-90deg] shadow-sm group-hover/bar:text-lime-600 group-hover/bar:border-lime-200 transition-colors">
                PROJ
            </div>
</div>
<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-medium text-slate-400 uppercase tracking-widest">Q4</div>
</div>

<div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime-500/50 to-transparent opacity-0 group-hover/chart:opacity-100 group-hover/chart:left-[85%] left-0 transition-all duration-[1.5s] ease-in-out pointer-events-none z-30 blur-[0.5px]"></div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 bg-[#050505] text-white rounded-[2rem] p-8 flex flex-col relative overflow-hidden group shadow-2xl ring-1 ring-white/10">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4d4d4d 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-500/20 rounded-full blur-[80px] group-hover:bg-lime-500/30 transition-colors duration-700"></div><div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-[80px] group-hover:bg-violet-500/30 transition-colors duration-700"></div>
<div className="relative z-10 flex-1 flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-lime-400">
<iconify-icon icon="solar:globe-bold-duotone" width="24"></iconify-icon>
</div>
<div className="flex gap-1.5">
<span className="w-1.5 h-1.5 bg-lime-500 rounded-full shadow-[0_0_8px_rgba(132,204,22,0.8)] animate-pulse"></span>
<span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
<span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
</div>
</div>
<div className="mb-auto">
<h3 className="text-xl font-medium mb-2 font-serif-display text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-slate-400">Logistics Net</h3>
<p className="text-slate-400 text-sm leading-relaxed font-sans font-light">Tracking Carbon Intensity (CI) scores across 12 major ports in real-time.</p>
</div>

<div absolute="" animate-[spin_4s_linear_infinite]="" bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(132,204,22,0.2)_360deg)]="" className="relative w-full aspect-square mt-8 bg-gradient-to-b from-white/5 to-transparent rounded-full border border-white/10 p-4 class=" inset-0="" opacity-30"="" rounded-full=""></div>

<div className="absolute inset-0 border border-white/5 rounded-full scale-75"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-50"></div>
<div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 h-full w-px bg-white/5 -translate-x-1/2"></div>

<div className="absolute w-2 h-2 bg-lime-500 rounded-full shadow-[0_0_15px_rgba(132,204,22,1)] z-10"></div>

<div className="absolute top-[30%] left-[40%] group">
<div className="w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(132,204,22,1)] animate-ping absolute opacity-75"></div>
<div className="w-2 h-2 bg-lime-400 rounded-full relative z-10"></div>
<div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 border border-white/10 text-[9px] px-1.5 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LAX: 98%</div>
</div>
<div className="absolute top-[65%] right-[25%] group">
<div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
<div className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 border border-white/10 text-[9px] px-1.5 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">JFK: 92%</div>
</div>
<div className="absolute bottom-[35%] left-[25%] w-1.5 h-1.5 bg-white/40 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-lime-300 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
<iconify-icon className="text-lime-500" icon="solar:database-bold-duotone" width="100"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div className="">
<p className="text-sm text-slate-500 font-medium mb-1 font-sans">Production Capacity</p>
<h4 className="text-4xl font-medium text-slate-900 font-serif-display tracking-tight">850k <span className="text-lg text-slate-400 font-normal font-sans">bpd</span></h4>
</div>
<div className="w-10 h-10 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-lime-600 group-hover:bg-lime-50 group-hover:border-lime-200 transition-all">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-[75%] rounded-full group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
</div>
<span className="text-xs font-mono text-slate-400">85%</span>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-lime-300 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300 cursor-default relative overflow-hidden">
<div className="absolute -bottom-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12">
<iconify-icon className="text-lime-500" icon="solar:leaf-bold-duotone" width="120"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm text-slate-500 font-medium mb-1 font-sans">Carbon Offset</p>
<h4 className="text-4xl font-medium text-slate-900 font-serif-display tracking-tight">-4.2 <span className="text-lg text-slate-400 font-normal font-sans">Mt</span></h4>
</div>
<div className="w-10 h-10 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-lime-600 group-hover:bg-lime-50 group-hover:border-lime-200 transition-all">
<iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-md border border-green-100">
<iconify-icon className="text-green-600 text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
<span className="text-xs font-semibold text-green-700 font-sans">12% above target</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-lime-600 font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Proprietary Process</span>
<h2 className="text-5xl font-medium tracking-tight text-slate-900 mb-6 font-serif-display">Refining the future <br/> of flight.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8 font-light font-sans text-pretty">
                        Our 3-stage hydro-processing technology allows for the complete removal of oxygen from bio-oils, resulting in a pure hydrocarbon drop-in fuel.
                    </p>
<div className="flex flex-col gap-6 font-sans">

<div className="flex gap-4 group cursor-default">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-slate-300 text-slate-500 flex items-center justify-center text-xs font-mono group-hover:bg-lime-400 group-hover:text-green-950 group-hover:border-lime-400 transition-colors">01</div>
<div className="w-px h-full bg-slate-200 my-2 group-hover:bg-lime-200 transition-colors"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium text-slate-900 group-hover:text-lime-700 transition-colors">Deoxygenation</h4>
<p className="text-sm text-slate-500 mt-2 max-w-sm font-light">Catalytic removal of oxygen using hydrogen at high pressure (40-60 bar).</p>
</div>
</div>

<div className="flex gap-4 group cursor-default">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-slate-300 text-slate-500 flex items-center justify-center text-xs font-mono group-hover:bg-lime-400 group-hover:text-green-950 group-hover:border-lime-400 transition-colors">02</div>
<div className="w-px h-full bg-slate-200 my-2 group-hover:bg-lime-200 transition-colors"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium text-slate-900 group-hover:text-lime-700 transition-colors">Selective Cracking</h4>
<p className="text-sm text-slate-500 mt-2 max-w-sm font-light">Breaking long carbon chains into jet fuel range hydrocarbons (C8-C16).</p>
</div>
</div>

<div className="flex gap-4 group cursor-default">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-slate-300 text-slate-500 flex items-center justify-center text-xs font-mono group-hover:bg-violet-400 group-hover:text-violet-950 group-hover:border-violet-400 transition-colors">03</div>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 group-hover:text-violet-700 transition-colors">Isomerization</h4>
<p className="text-sm text-slate-500 mt-2 max-w-sm font-light">Rearranging molecular structure to improve cold flow properties (-47°C freeze point).</p>
</div>
</div>
</div>
</div>

<div className="relative h-[600px] bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-inner flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-tr from-lime-300 to-green-400 shadow-[0_0_60px_rgba(132,204,22,0.6)] flex items-center justify-center animate-float">
<div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full"></div>
<iconify-icon className="text-green-900 text-6xl relative z-20 animate-[spin_20s_linear_infinite]" icon="solar:atom-linear"></iconify-icon>
</div>

<div className="absolute w-80 h-80 border border-slate-300/60 rounded-full animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">H₂</div>
</div>
<div className="absolute w-[450px] h-[450px] border border-slate-300/40 rounded-full animate-[spin_25s_linear_infinite]">
<div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white border border-violet-200 rounded-full flex items-center justify-center text-[10px] font-bold text-violet-600 shadow-sm shadow-violet-200/50">CO₂</div>
</div>

<div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-xl w-48 font-sans">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] uppercase font-bold text-slate-400">Purity</span>
<iconify-icon className="text-lime-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="text-2xl font-mono font-medium text-slate-900">99.9%</div>
<div className="w-full bg-slate-100 h-1 mt-2 rounded-full overflow-hidden">
<div className="w-[99%] h-full bg-lime-500"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight font-serif-display mb-4">The Carbon Ledger</h2>
<p className="text-slate-500 max-w-2xl mx-auto font-light font-sans">Immutable proof of sustainability. Every batch of fuel is tracked on our public ledger.</p>
</div>

<div className="glass-card rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden">

<div className="bg-white/50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<span className="text-xs font-mono text-slate-500">biovera_mainnet.json</span>
</div>
<div className="flex gap-3 text-xs font-medium text-slate-500 font-sans">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Real-time</span>
<span className="flex items-center gap-1 text-lime-600"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> Synced</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

<div className="lg:col-span-2 overflow-x-auto bg-white/40">
<table className="w-full text-left text-sm font-sans">
<thead className="bg-slate-50/50 text-slate-500 font-medium text-xs uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-normal">Batch ID</th>
<th className="px-6 py-4 font-normal">Origin</th>
<th className="px-6 py-4 font-normal">Volume</th>
<th className="px-6 py-4 font-normal">Carbon Intensity</th>
<th className="px-6 py-4 font-normal">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 font-mono text-xs">
<tr className="hover:bg-lime-50/30 cursor-pointer transition-colors group">
<td className="px-6 py-4 text-lime-700 font-medium group-hover:text-lime-600">#BV-2904</td>
<td className="px-6 py-4 text-slate-600">Rotterdam, NL</td>
<td className="px-6 py-4 text-slate-900">45,000 L</td>
<td className="px-6 py-4 text-slate-600">8.4 gCO2e/MJ</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-800 border border-green-200 font-sans">Verified</span></td>
</tr>
<tr className="hover:bg-lime-50/30 cursor-pointer transition-colors group">
<td className="px-6 py-4 text-lime-700 font-medium group-hover:text-lime-600">#BV-2903</td>
<td className="px-6 py-4 text-slate-600">Los Angeles, US</td>
<td className="px-6 py-4 text-slate-900">12,500 L</td>
<td className="px-6 py-4 text-slate-600">9.1 gCO2e/MJ</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-800 border border-green-200 font-sans">Verified</span></td>
</tr>
<tr className="hover:bg-lime-50/30 cursor-pointer transition-colors group">
<td className="px-6 py-4 text-lime-700 font-medium group-hover:text-lime-600">#BV-2902</td>
<td className="px-6 py-4 text-slate-600">Singapore, SG</td>
<td className="px-6 py-4 text-slate-900">88,200 L</td>
<td className="px-6 py-4 text-slate-600">7.8 gCO2e/MJ</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-violet-50 text-violet-700 border border-violet-100 font-sans">In Transit</span></td>
</tr>
</tbody>
</table>
</div>

<div className="lg:col-span-1 bg-[#FDFDFD] p-6 font-mono text-xs leading-relaxed text-slate-500 relative">
<div className="absolute top-0 right-0 p-4 opacity-30"><iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon></div>
<div className="space-y-2">
<p className="text-slate-400">// Batch Metadata Payload</p>
<p><span className="text-purple-600">const</span> batch = {</p>
<p className="pl-4"><span className="text-blue-600">id</span>: <span className="text-green-600">"BV-2904"</span>,</p>
<p className="pl-4"><span className="text-blue-600">feedstock</span>: {</p>
<p className="pl-8"><span className="text-blue-600">type</span>: <span className="text-green-600">"UCO"</span>,</p>
<p className="pl-8"><span className="text-blue-600">purity</span>: <span className="text-orange-600">0.998</span>,</p>
<p className="pl-4">},</p>
<p className="pl-4"><span className="text-blue-600">certificates</span>: [</p>
<p className="pl-8"><span className="text-green-600">"ISCC-PLUS"</span></p>
<p className="pl-4">]</p>
<p>}</p>
</div>
<button className="mt-8 w-full py-2 border border-slate-200 rounded text-slate-600 hover:bg-slate-50 transition-colors text-xs font-medium font-sans">Verify on Etherscan</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden relative font-sans">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-lime-500/10 to-violet-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-20">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center text-green-950">
<iconify-icon icon="solar:leaf-bold-duotone" width="18"></iconify-icon>
</div>
<span className="text-xl font-medium font-serif-display">Biovera</span>
</div>
<p className="text-slate-400 font-light">
                        Accelerating the transition to a net-zero future through molecular engineering and scalable infrastructure.
                    </p>
</div>
<div className="flex gap-16 mt-10 md:mt-0">
<div>
<h4 className="text-sm font-semibold mb-4 text-white">Platform</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-lime-400 transition-colors" href="#">Technology</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Sustainabilty</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-lime-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2025 Biovera Energy Corp. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
