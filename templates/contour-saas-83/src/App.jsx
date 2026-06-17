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
      

<header className="fixed top-0 inset-x-0 z-50 border-b bg-[#0a0a0a]/60 backdrop-blur-xl border-gray-900 transition-all duration-500 hover:bg-[#0a0a0a]/80 shadow-[0_1px_30px_rgba(255,255,255,0.02)]">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-base font-medium tracking-tighter text-gray-50 hover:text-white transition-colors hover:scale-105 transform duration-300" href="#">contour</a>
<nav className="hidden md:flex gap-6">
<a className="transition-colors hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full text-sm text-gray-400 relative" href="#features">Features</a>
<a className="relative text-sm transition-colors text-gray-400 hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full" href="#methodology">Methodology</a>
<a className="relative text-sm transition-colors text-gray-400 hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full" href="#changelog">Changelog</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm transition-colors hidden sm:block text-gray-400 hover:text-gray-50 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" href="#">Log in</a>
<a className="group relative px-4 py-1.5 rounded-full bg-gray-50 text-gray-950 overflow-hidden transition-transform active:scale-95" href="#">
<div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
<span className="relative z-10 text-sm font-medium">Sign up</span>
</a>
</div>
</div>
</header>

<main className="pt-32 pr-6 pb-16 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] pointer-events-none flex justify-center items-center opacity-40 z-0 mix-blend-screen">
<div className="absolute w-[30rem] h-[20rem] bg-gray-600/30 rounded-full blur-[100px] animate-[spin_10s_linear_infinite]" style={{transformOrigin: 'center center'}}></div>
<div className="absolute w-[20rem] h-[30rem] bg-gray-700/20 rounded-full blur-[120px] animate-[spin_15s_linear_infinite_reverse]" style={{transformOrigin: 'center right'}}></div>
</div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">

<a className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-0.5" href="#">
<div className="absolute inset-0 bg-gray-800/30"></div>
<div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_70%,#d4d4d4_100%)] animate-[spin_3s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-[1px] rounded-full bg-[#0a0a0a] z-0"></div>
<div className="absolute inset-[1px] rounded-full bg-gray-900/60 z-0 backdrop-blur-sm"></div>
<span className="relative z-10 text-xs font-medium tracking-wide uppercase text-gray-400 group-hover:text-gray-100 transition-colors duration-300">Contour 2.0 is out</span>
<iconify-icon className="relative z-10 text-gray-500 group-hover:text-gray-200 transition-all group-hover:translate-x-1 duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 pb-2 drop-shadow-sm">
                Design interfaces<br/>with pure intent.
            </h1>
<p className="text-lg max-w-2xl font-normal leading-relaxed mb-10 text-gray-400">
                Contour is a high-performance vector design environment built for modern product teams. Experience fluid workflows, deep system integration, and absolute precision.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="relative overflow-hidden px-6 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 bg-gray-50 text-gray-950 transition-transform active:scale-95 group">
<span className="relative z-10">Start designing free</span>

<div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-gray-900/15 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out z-0"></div>
</button>
<button className="bg-transparent border px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center justify-center gap-3 group border-gray-800 text-gray-50 hover:bg-gray-900 hover:border-gray-700 hover:-translate-y-0.5">
<div className="relative flex items-center justify-center">
<div className="absolute inset-0 rounded-full animate-ping bg-gray-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="relative z-10 group-hover:text-gray-50 transition-colors text-gray-400" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                    Watch the keynote
                </button>
</div>
</div>

<div className="mt-24 max-w-5xl mx-auto relative z-10 group" style={{perspective: '1200px'}}>

<div className="absolute -inset-4 blur-[80px] bg-gradient-to-b from-gray-800/40 via-gray-900/10 to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-2xl border bg-[#0a0a0a] shadow-[0_0_100px_-20px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col ring-1 border-gray-800/60 ring-white/5 transition-all duration-700 ease-out transform-gpu group-hover:[transform:rotateX(2deg)_rotateY(-1deg)_scale(1.01)] group-hover:shadow-[0_20px_100px_-20px_rgba(255,255,255,0.12)] group-hover:border-gray-700/80 z-10">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-1/3 transition-all duration-1000 z-50 pointer-events-none"></div>

<div className="h-12 border-b flex items-center px-4 gap-4 border-gray-800/60 bg-gray-900/20 backdrop-blur-md relative z-20">
<div className="flex gap-2 mr-4 group/dots">
<div className="w-3 h-3 rounded-full bg-gray-800 transition-colors group-hover/dots:bg-gray-600"></div>
<div className="w-3 h-3 rounded-full bg-gray-800 transition-colors group-hover/dots:bg-gray-600 delay-75"></div>
<div className="w-3 h-3 rounded-full bg-gray-800 transition-colors group-hover/dots:bg-gray-600 delay-150"></div>
</div>

<div className="flex items-center gap-5 text-gray-500 border-l pl-6 border-gray-800/60">
<iconify-icon className="text-gray-200 transition-transform hover:scale-110 cursor-pointer" icon="solar:cursor-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="transition-all cursor-pointer hover:text-gray-200 hover:-translate-y-0.5" icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="transition-all cursor-pointer hover:text-gray-200 hover:-translate-y-0.5" icon="solar:text-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="transition-all cursor-pointer hover:text-gray-200 hover:-translate-y-0.5" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="transition-all cursor-pointer hover:text-gray-200 hover:-translate-y-0.5 hover:rotate-12" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="ml-auto flex items-center gap-3">
<div className="text-xs text-gray-500 border rounded-md px-2 py-1 flex items-center gap-2 bg-gray-900 border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
<span>100%</span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="flex h-[450px]">

<div className="w-56 border-r hidden sm:flex flex-col p-4 gap-4 border-gray-800/60 bg-gray-900/10 relative z-20">
<div className="flex items-center gap-2 text-gray-400">
<iconify-icon icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Pages</span>
</div>
<div className="pl-6 flex flex-col gap-3">
<div className="text-xs text-gray-500 cursor-pointer transition-all hover:text-gray-200 hover:translate-x-1">Cover</div>
<div className="text-xs -ml-2 px-2 py-1 rounded text-gray-200 bg-gray-800/50 cursor-pointer transition-colors shadow-[0_0_10px_rgba(255,255,255,0.02)] border border-gray-700/30">Design System</div>
<div className="text-xs text-gray-500 cursor-pointer transition-all hover:text-gray-200 hover:translate-x-1">Prototype</div>
</div>
<div className="w-full h-px my-2 bg-gray-800/60"></div>
<div className="flex items-center gap-2 text-gray-400">
<iconify-icon icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Layers</span>
</div>
<div className="pl-6 flex flex-col gap-3">
<div className="flex items-center gap-2 text-xs cursor-pointer text-gray-300 transition-all hover:text-gray-100 hover:translate-x-1">
<iconify-icon icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Landing Page
                            </div>
<div className="flex items-center gap-2 text-xs text-gray-500 pl-4 cursor-pointer transition-all hover:text-gray-300 hover:translate-x-1">
<iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Header Navigation
                            </div>
<div className="flex items-center gap-2 text-xs text-gray-500 pl-4 cursor-pointer transition-all hover:text-gray-300 hover:translate-x-1">
<iconify-icon icon="solar:text-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Hero Headline
                            </div>
</div>
</div>

<div className="flex-1 relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center group/canvas">

<div className="absolute inset-0 opacity-50 transition-transform duration-1000 group-hover/canvas:scale-105" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-64 h-64 flex items-center justify-center cursor-crosshair">

<div className="absolute inset-0 blur-3xl rounded-full bg-gray-50/5 group-hover/canvas:bg-gray-50/10 transition-colors duration-700"></div>

<div className="absolute w-48 h-48 border border-gray-700/50 rounded-3xl bg-gray-900/20 transition-all duration-700 group-hover/canvas:-rotate-3 group-hover/canvas:translate-x-6 group-hover/canvas:-translate-y-4 opacity-0 group-hover/canvas:opacity-100"></div>
<div className="absolute w-48 h-48 border border-gray-600/50 rounded-3xl bg-gray-900/40 transition-all duration-700 group-hover/canvas:-rotate-1 group-hover/canvas:translate-x-3 group-hover/canvas:-translate-y-2 opacity-0 group-hover/canvas:opacity-100"></div>

<div className="w-48 h-48 border border-gray-500 rounded-3xl rotate-12 relative backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-700 group-hover/canvas:rotate-6 bg-gray-900/60 z-10 group-hover/canvas:shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover/canvas:border-gray-400">
<div className="w-24 h-24 border rounded-2xl -rotate-12 flex items-center justify-center transition-all duration-700 group-hover/canvas:-rotate-6 border-gray-600 group-hover/canvas:scale-110 bg-black/40 shadow-inner">
<div className="w-8 h-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-gray-100 group-hover/canvas:shadow-[0_0_30px_rgba(255,255,255,0.6)] group-hover/canvas:scale-110 transition-all duration-500 animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>

<div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-2 border-[#0a0a0a] rounded-sm bg-gray-50 opacity-50 group-hover/canvas:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-2 border-[#0a0a0a] rounded-sm bg-gray-50 opacity-50 group-hover/canvas:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-2 border-[#0a0a0a] rounded-sm bg-gray-50 opacity-50 group-hover/canvas:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-2 border-[#0a0a0a] rounded-sm bg-gray-50 opacity-50 group-hover/canvas:opacity-100 transition-opacity duration-300"></div>

<div className="absolute -inset-2 border border-dashed rounded-3xl opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-500 pointer-events-none border-gray-500/80 group-hover/canvas:animate-[spin_20s_linear_infinite]"></div>
</div>
</div>
</div>

<div className="w-64 border-l hidden md:flex flex-col p-4 gap-6 border-gray-800/60 bg-gray-900/10 relative z-20">

<div className="group/prop">
<div className="flex items-center justify-between text-xs font-medium mb-3 border-b pb-2 text-gray-400 border-gray-800/60 transition-colors group-hover/prop:text-gray-300">
<span>Layout</span>
<iconify-icon className="cursor-pointer hover:text-gray-100 hover:scale-110 transition-all" icon="solar:add-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-2 mb-4">
<div className="border rounded p-1.5 flex items-center gap-2 bg-gray-900/50 border-gray-800 transition-colors hover:border-gray-600 hover:bg-gray-800 cursor-text group/input">
<span className="text-xs text-gray-600 group-hover/input:text-gray-400">X</span>
<span className="text-xs text-gray-300 group-hover/input:text-white">240</span>
</div>
<div className="border rounded p-1.5 flex items-center gap-2 bg-gray-900/50 border-gray-800 transition-colors hover:border-gray-600 hover:bg-gray-800 cursor-text group/input">
<span className="text-xs text-gray-600 group-hover/input:text-gray-400">Y</span>
<span className="text-xs text-gray-300 group-hover/input:text-white">120</span>
</div>
<div className="border rounded p-1.5 flex items-center gap-2 bg-gray-900/50 border-gray-800 transition-colors hover:border-gray-600 hover:bg-gray-800 cursor-text group/input">
<span className="text-xs text-gray-600 group-hover/input:text-gray-400">W</span>
<span className="text-xs text-gray-300 group-hover/input:text-white">512</span>
</div>
<div className="border rounded p-1.5 flex items-center gap-2 bg-gray-900/50 border-gray-800 transition-colors hover:border-gray-600 hover:bg-gray-800 cursor-text group/input">
<span className="text-xs text-gray-600 group-hover/input:text-gray-400">H</span>
<span className="text-xs text-gray-300 group-hover/input:text-white">512</span>
</div>
</div>

<div className="flex items-center gap-3 group/slider">
<span className="text-xs text-gray-500 w-12 transition-colors group-hover/slider:text-gray-400">Opacity</span>
<div className="flex-1 h-1.5 rounded-full relative cursor-pointer bg-gray-800">
<div className="absolute inset-y-0 left-0 w-[85%] rounded-full bg-gray-400 group-hover/slider:bg-gray-300 transition-colors"></div>
<div className="absolute top-1/2 left-[85%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)] border bg-gray-100 border-gray-300 group-hover/slider:scale-125 transition-transform duration-300"></div>
</div>
<span className="text-xs w-8 text-right text-gray-300 group-hover/slider:text-white">85%</span>
</div>
</div>

<div className="group/prop2">
<div className="flex items-center justify-between text-xs font-medium mb-3 border-b pb-2 text-gray-400 border-gray-800/60 transition-colors group-hover/prop2:text-gray-300">
<span>Appearance</span>
<iconify-icon className="cursor-pointer hover:text-gray-100 hover:scale-110 transition-all" icon="solar:add-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="flex items-center justify-between mb-3 group/fill cursor-pointer">
<div className="flex items-center gap-2 text-xs text-gray-300 group-hover/fill:text-white transition-colors">
<div className="w-4 h-4 rounded border bg-gray-200 border-gray-400 shadow-inner"></div>
<span>E5E5E5</span>
</div>
<span className="text-xs text-gray-500">100%</span>
<div className="flex items-center gap-1.5 ml-auto">

<div className="w-7 h-4 rounded-full relative bg-gray-200 shadow-[0_0_8px_rgba(255,255,255,0.1)]">
<div className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full shadow-sm bg-gray-900 border border-gray-700 transition-transform"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group/stroke">
<div className="flex items-center gap-2 text-xs text-gray-400 group-hover/stroke:text-gray-300">
<div className="w-4 h-4 rounded border-2 relative overflow-hidden border-gray-600">
<div className="absolute w-[150%] h-px rotate-45 top-1.5 -left-1 bg-blue-500/50 group-hover/stroke:bg-blue-500/80 transition-colors"></div>
</div>
<span>Stroke</span>
</div>
<div className="w-7 h-4 rounded-full relative bg-gray-800 transition-colors group-hover/stroke:bg-gray-700">
<div className="absolute top-0.5 left-0.5 w-3 h-3 bg-gray-500 rounded-full shadow-sm transition-transform"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-32 px-6 border-t bg-[#0a0a0a] border-gray-900/50" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-gray-50 drop-shadow-sm">Meticulously crafted for speed.</h2>
<p className="text-lg max-w-xl leading-relaxed text-gray-400">Every interaction in Contour is optimized to reduce friction, allowing your ideas to flow directly to the canvas in real-time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative group rounded-2xl border border-gray-800/40 bg-[#0a0a0a] p-8 overflow-hidden transition-all duration-500 hover:border-gray-700/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 -left-[100%] w-[50%] h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-out z-0 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 border-gray-800 bg-gray-950 text-gray-400 transition-all duration-300 group-hover:text-gray-50 group-hover:border-gray-600 group-hover:bg-gray-900 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 group-hover:text-white transition-colors">Advanced Vector Networks</h3>
<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">Draw complex shapes effortlessly. Our proprietary rendering engine handles thousands of nodes natively without dropping a frame.</p>
</div>
</div>

<div className="relative group rounded-2xl border border-gray-800/40 bg-[#0a0a0a] p-8 overflow-hidden transition-all duration-500 hover:border-gray-700/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 -left-[100%] w-[50%] h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-out z-0 pointer-events-none delay-75"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 border-gray-800 bg-gray-950 text-gray-400 transition-all duration-300 group-hover:text-gray-50 group-hover:border-gray-600 group-hover:bg-gray-900 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 group-hover:text-white transition-colors">Component Variants</h3>
<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">Build extensive design systems with deeply nested component logic. Keep your entire workspace synced natively.</p>
</div>
</div>

<div className="relative group rounded-2xl border border-gray-800/40 bg-[#0a0a0a] p-8 overflow-hidden transition-all duration-500 hover:border-gray-700/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 -left-[100%] w-[50%] h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-out z-0 pointer-events-none delay-150"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 border-gray-800 bg-gray-950 text-gray-400 transition-all duration-300 group-hover:text-gray-50 group-hover:border-gray-600 group-hover:bg-gray-900 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:ruler-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 group-hover:text-white transition-colors">Responsive Auto-layout</h3>
<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">Design dynamically. Frames respond to content automatically based on CSS flexbox principles you already understand.</p>
</div>
</div>

<div className="relative group rounded-2xl border border-gray-800/40 bg-[#0a0a0a] p-8 overflow-hidden transition-all duration-500 hover:border-gray-700/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 -left-[100%] w-[50%] h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-out z-0 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 border-gray-800 bg-gray-950 text-gray-400 transition-all duration-300 group-hover:text-gray-50 group-hover:border-gray-600 group-hover:bg-gray-900 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 group-hover:text-white transition-colors">Interactive Prototypes</h3>
<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">Breathe life into static screens. Add micro-interactions, spring animations, and complex conditional states.</p>
</div>
</div>

<div className="relative group rounded-2xl border border-gray-800/40 bg-[#0a0a0a] p-8 overflow-hidden transition-all duration-500 hover:border-gray-700/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 -left-[100%] w-[50%] h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-out z-0 pointer-events-none delay-75"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 border-gray-800 bg-gray-950 text-gray-400 transition-all duration-300 group-hover:text-gray-50 group-hover:border-gray-600 group-hover:bg-gray-900 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 group-hover:text-white transition-colors">Variables &amp; Tokens</h3>
<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">Bridge the gap between design and engineering. Export tokens directly to JSON, CSS, or tailwind configurations.</p>
</div>
</div>

<div className="relative group rounded-2xl border border-gray-800/40 bg-[#0a0a0a] p-8 overflow-hidden transition-all duration-500 hover:border-gray-700/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 -left-[100%] w-[50%] h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-out z-0 pointer-events-none delay-150"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 border-gray-800 bg-gray-950 text-gray-400 transition-all duration-300 group-hover:text-gray-50 group-hover:border-gray-600 group-hover:bg-gray-900 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 group-hover:text-white transition-colors">Multiplayer Native</h3>
<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">Collaborate instantly. See cursors move in real-time with zero latency across desktop and web applications.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t relative overflow-hidden border-gray-900/60 group">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] via-[#0a0a0a] to-[#0a0a0a] from-gray-800/10 z-0"></div>
<div className="absolute -bottom-[50%] -left-[10%] w-[60%] h-[100%] bg-gray-800/10 blur-[120px] rounded-full mix-blend-screen transition-transform duration-[2000ms] ease-out group-hover:-translate-y-20 group-hover:scale-110 pointer-events-none z-0"></div>
<div className="absolute -bottom-[50%] -right-[10%] w-[60%] h-[100%] bg-gray-700/10 blur-[120px] rounded-full mix-blend-screen transition-transform duration-[2000ms] ease-out group-hover:-translate-y-10 group-hover:scale-105 pointer-events-none z-0"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-4xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 pb-1">Build the next generation.</h2>
<p className="text-base mb-10 leading-relaxed text-gray-400">Join thousands of product designers, engineers, and creatives already shaping the future on Contour.</p>
<form className="flex flex-col sm:flex-row items-center gap-3 justify-center max-w-md mx-auto group/form">
<input className="w-full sm:w-72 bg-[#0a0a0a] border text-sm rounded-full px-5 py-3 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all duration-300 placeholder:text-gray-600 border-gray-800 text-gray-50 hover:border-gray-700 shadow-inner" placeholder="name@company.com" required="" type="email"/>
<button className="relative overflow-hidden w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-transform active:scale-95 whitespace-nowrap bg-gray-50 text-gray-950 group/btn" type="submit">
<span className="relative z-10">Request access</span>
<div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-gray-900/20 to-transparent group-hover/btn:left-[100%] transition-all duration-700 ease-in-out z-0"></div>
</button>
</form>
<p className="text-xs mt-6 text-gray-600 transition-colors duration-500 group-hover:text-gray-500">Available on macOS, Windows, and modern browsers.</p>
</div>
</section>

<footer className="border-t py-12 px-6 bg-[#0a0a0a] border-gray-900/60">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-2 group">
<div className="text-base font-medium tracking-tighter text-gray-50 group-hover:text-white transition-colors duration-300 cursor-default">contour</div>
<div className="text-xs text-gray-500">© 2024 Contour Design Systems, Inc.</div>
</div>
<div className="flex flex-wrap gap-8 text-sm text-gray-400">
<a className="relative transition-colors hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full" href="#">Download</a>
<a className="relative transition-colors hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full" href="#">Documentation</a>
<a className="relative transition-colors hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full" href="#">Privacy Policy</a>
<a className="relative transition-colors hover:text-gray-50 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full" href="#">Terms of Service</a>
<div className="flex gap-4 items-center ml-4 border-l pl-8 border-gray-800">
<a className="transition-all duration-300 flex items-center hover:text-gray-50 hover:scale-110 hover:-translate-y-0.5" href="#">
<iconify-icon icon="solar:twitter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="transition-all duration-300 flex items-center hover:text-gray-50 hover:scale-110 hover:-translate-y-0.5" href="#">
<iconify-icon icon="solar:github-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
