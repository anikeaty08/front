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
      

<aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 flex-shrink-0 z-20">
<div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-md font-medium tracking-tighter mb-8 cursor-pointer shadow-sm">
            SP
        </div>
<nav className="flex flex-col gap-4 w-full">
<a className="w-full flex justify-center py-3 text-black relative group" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-black rounded-r-md"></div>
<iconify-icon className="text-xl" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full flex justify-center py-3 text-gray-400 hover:text-black transition-colors group relative" href="#">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute left-14 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">AI Generator</div>
</a>
<a className="w-full flex justify-center py-3 text-gray-400 hover:text-black transition-colors group relative" href="#">
<iconify-icon className="text-xl" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute left-14 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Theme Engine</div>
</a>
<a className="w-full flex justify-center py-3 text-gray-400 hover:text-black transition-colors group relative" href="#">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute left-14 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Sections</div>
</a>
</nav>
<div className="mt-auto flex flex-col gap-4 w-full">
<a className="w-full flex justify-center py-3 text-gray-400 hover:text-black transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="w-full flex justify-center py-3">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
<div className="flex items-center gap-2 text-sm">
<span className="text-gray-500">Drafts</span>
<span className="text-gray-300">/</span>
<span className="font-medium text-gray-900 flex items-center gap-2">
                    Bio-Tech Hybrid Portfolio
                    <iconify-icon className="text-gray-400 cursor-pointer hover:text-black" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
<iconify-icon className="text-gray-500" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-gray-600">AI Score:</span>
<span className="text-xs font-medium text-green-600">92/100</span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<button className="text-gray-600 hover:text-black flex items-center gap-1.5 transition-colors">
<iconify-icon className="text-lg" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Preview</span>
</button>
<button className="bg-black text-white px-3.5 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon className="text-sm" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
                    Deploy Portfolio
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 bg-[#F9FAFB] relative overflow-hidden flex flex-col items-center pt-8 pb-0 px-8 custom-scrollbar overflow-y-auto">

<div className="absolute top-4 left-1/2 -translate-x-1/2 flex bg-white border border-gray-200 rounded-md shadow-sm p-0.5 z-10">
<button className="px-3 py-1 rounded bg-gray-100 text-black shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-3 py-1 rounded text-gray-400 hover:text-black transition-colors flex items-center justify-center">
<iconify-icon icon="solar:tablet-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-3 py-1 rounded text-gray-400 hover:text-black transition-colors flex items-center justify-center">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="w-full max-w-5xl bg-white border border-gray-200 rounded-t-xl shadow-lg flex flex-col overflow-hidden min-h-[800px] mb-8 transition-all duration-300 ring-1 ring-black/5">

<div className="h-10 border-b border-gray-100 bg-gray-50/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
</div>
<div className="mx-auto bg-white border border-gray-200 rounded px-3 py-1 text-[10px] text-gray-400 w-64 text-center truncate shadow-sm">
                            dr-jane-doe.portfolio.builder.app
                        </div>
</div>

<div className="flex-1 overflow-y-auto relative bg-[#fafafa]">

<nav className="flex justify-between items-center px-8 py-6 max-w-4xl mx-auto">
<div className="font-normal tracking-tighter text-lg text-black">J. Doe</div>
<div className="flex gap-6 text-xs text-gray-500 font-normal">
<a className="text-black" href="#">Research</a>
<a className="hover:text-black transition-colors" href="#">Engineering</a>
<a className="hover:text-black transition-colors" href="#">Publications</a>
<a className="hover:text-black transition-colors" href="#">Contact</a>
</div>
</nav>

<div className="max-w-4xl mx-auto px-8 py-16 grid grid-cols-2 gap-12 items-center relative">

<div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-mono text-gray-600 mb-6 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span>System Status: Optimal</span>
</div>
<h1 className="text-4xl tracking-tight text-gray-900 font-normal leading-[1.1] mb-4">
                                    Decoding Life.<br/>
<span className="text-gray-400">Engineering Solutions.</span>
</h1>
<p className="text-sm text-gray-500 font-normal leading-relaxed mb-8 max-w-sm">
                                    Bridging the gap between molecular biology and scalable software architecture. Specializing in computational genomics and full-stack development.
                                </p>
<div className="flex gap-3">
<button className="bg-black text-white px-5 py-2.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm">View Projects</button>
<button className="bg-white border border-gray-200 text-gray-900 px-5 py-2.5 rounded-md text-xs font-medium hover:bg-gray-50 transition-colors shadow-sm">Read Papers</button>
</div>
</div>

<div className="relative w-full aspect-square bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center overflow-hidden group cursor-pointer">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"></div>
<div className="relative z-10 flex flex-col items-center gap-4 text-gray-300 group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center justify-center relative">
<iconify-icon className="text-6xl text-emerald-900/20 absolute -rotate-45" icon="solar:dna-linear" strokeWidth="1"></iconify-icon>
<iconify-icon className="text-5xl text-gray-900 z-10 bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-gray-100 shadow-sm" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">Interactive 3D Render Active</span>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
</div>
</div>

<div className="max-w-4xl mx-auto px-8 py-12 flex gap-8">

<div className="flex-1 bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-900"></div>
<h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
                                    Core Stack
                                </h3>
<div className="space-y-3 font-mono text-[11px]">
<div className="flex justify-between items-center text-gray-600 border-b border-gray-50 pb-2">
<span>React / Next.js</span>
<span className="text-gray-400">Advanced</span>
</div>
<div className="flex justify-between items-center text-gray-600 border-b border-gray-50 pb-2">
<span>Node.js / Python</span>
<span className="text-gray-400">Advanced</span>
</div>
<div className="flex justify-between items-center text-gray-600 pb-2">
<span>PostgreSQL / MongoDB</span>
<span className="text-gray-400">Intermediate</span>
</div>
</div>
</div>

<div className="flex-1 bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
<h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
                                    Laboratory Skills
                                </h3>
<div className="space-y-3 text-xs text-gray-600">
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Next-Generation Sequencing (NGS) data analysis pipeline construction.</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>CRISPR-Cas9 target design and off-target prediction modeling.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<aside className="w-[340px] bg-white border-l border-gray-200 flex flex-col h-full flex-shrink-0 z-10 shadow-[-4px_0_24px_-16px_rgba(0,0,0,0.1)] overflow-y-auto custom-scrollbar">
<div className="p-5 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
<h2 className="text-sm font-medium text-gray-900 tracking-tight">Configuration</h2>
<p className="text-xs text-gray-500 mt-1 font-normal">Adjust your hybrid portfolio parameters.</p>
</div>
<div className="p-5 space-y-8">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xs font-medium text-gray-900 uppercase tracking-wider">Hybrid Engine</h3>
</div>

<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Primary Field</label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 text-xs rounded-md px-3 py-2 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all cursor-pointer">
<option>Biotechnology</option>
<option>Software Development</option>
<option>Product Design</option>
<option>Data Science</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Secondary Field (Optional)</label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 text-xs rounded-md px-3 py-2 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all cursor-pointer font-mono">
<option>Software Developer</option>
<option>UI/UX Designer</option>
<option>None</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-[10px] text-gray-400 mt-1 leading-snug">Hybrid theme activated. UI elements will blend Bio (Scientific) and Tech (Code) styles.</p>
</div>
</div>
<div className="h-px bg-gray-100 w-full"></div>

<div className="space-y-2">
<label className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Experience Level</label>
<div className="flex bg-gray-50 border border-gray-200 rounded-md p-0.5 relative">
<button className="flex-1 text-center py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 rounded">Junior</button>
<button className="flex-1 text-center py-1.5 text-xs font-medium text-gray-900 bg-white shadow-sm rounded border border-gray-100">Mid-Level</button>
<button className="flex-1 text-center py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 rounded">Senior</button>
</div>
</div>
<div className="h-px bg-gray-100 w-full"></div>

<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-900 block">Enable 3D Assets</span>
<span className="text-[10px] text-gray-500">Requires Three.js library</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-black shadow-inner"></div>
</label>
</div>
<div className="h-px bg-gray-100 w-full"></div>

<div className="space-y-3 bg-gray-50/50 p-4 -mx-5 border-y border-gray-100">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-indigo-500" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-gray-900">AI Content Writer</span>
</div>
<span className="bg-indigo-100 text-indigo-700 text-[9px] px-1.5 py-0.5 rounded font-medium uppercase tracking-widest">Beta</span>
</div>
<div className="space-y-2 relative group">
<label className="text-[10px] text-gray-500">Auto-generate section:</label>
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md px-3 py-1.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all cursor-pointer shadow-sm">
<option>Professional Bio Summary</option>
<option>Project Descriptions</option>
<option>Technical Skills List</option>
</select>
</div>
<div className="relative mt-2">
<textarea className="w-full bg-white border border-gray-200 rounded-md p-3 text-xs text-gray-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm resize-none custom-scrollbar" placeholder="Provide context or let AI analyze your selected roles..." rows="4"></textarea>
<button className="absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded p-1.5 flex items-center justify-center transition-colors shadow-sm" title="Generate">
<iconify-icon className="text-sm" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-[9px] text-gray-400 leading-tight">AI uses OpenAI models to align content strictly with Biotechnology + Software Developer terminology.</p>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400" icon="solar:slider-minimalistic-horizontal-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xs font-medium text-gray-900 uppercase tracking-wider">Layout Density</h3>
</div>
<input className="w-full" max="100" min="1" type="range" value="50"/>
<div className="flex justify-between text-[10px] text-gray-400 font-medium">
<span>Compact</span>
<span>Spacious</span>
</div>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
