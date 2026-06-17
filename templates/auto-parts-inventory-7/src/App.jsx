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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        function enterApp() {
            const intro = document.getElementById('intro-page');
            const app = document.getElementById('app-dashboard');

            // Fade out intro
            intro.style.opacity = '0';
            intro.style.transition = 'opacity 0.5s ease-in-out';

            setTimeout(() => {
                intro.style.display = 'none';
                app.style.display = 'flex';
                // Trigger reflow to ensure fade-in animation plays
                void app.offsetWidth; 
                app.classList.add('animate-fade-in');
            }, 500);
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden" id="intro-page">

<div className="absolute inset-0 z-0 opacity-40">

<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/4489763/4489763-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
</div>
<div className="z-10 flex flex-col items-center animate-slide-up">

<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-8 flex items-center select-none">
<span className="text-yellow-200 logo-merge">S</span>
<span>SAPCO</span>
</h1>
<p className="text-zinc-400 text-sm tracking-widest uppercase mb-12 font-medium">Auto Parts &amp; Lifters Solutions</p>
<button className="group relative px-8 py-3 bg-zinc-100 text-zinc-950 text-sm font-medium rounded-full hover:bg-white transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950" onclick="enterApp()">
<span className="flex items-center gap-2">
                    CONTINUE
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
</div>
</div>

<div className="min-h-screen flex flex-col md:flex-row bg-zinc-950 text-sm fade-in-element" id="app-dashboard">

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950 flex flex-col flex-shrink-0">
<div className="h-16 flex items-center px-6 border-b border-zinc-800">
<div className="text-xl font-semibold tracking-tighter text-white flex items-center select-none">
<span className="text-yellow-200 logo-merge mr-[1px]">S</span>
<span>SAPCO</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-zinc-100 bg-zinc-900 rounded-md group transition-colors" href="#">
<span className="iconify text-zinc-400 group-hover:text-white" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md group transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300" data-icon="lucide:package" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Inventory</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md group transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300" data-icon="lucide:shopping-cart" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Orders</span>
<span className="ml-auto bg-blue-500/10 text-blue-400 text-xs py-0.5 px-2 rounded-full border border-blue-500/20">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md group transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md group transition-colors" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300" data-icon="lucide:wrench" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Lifters Mgmt</span>
</a>
</nav>
<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-200 to-yellow-500 flex items-center justify-center text-zinc-950 font-bold text-xs">A</div>
<div className="flex flex-col">
<span className="text-zinc-200 font-medium text-xs">Admin User</span>
<span className="text-zinc-500 text-xs">admin@ssapco.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-[calc(100vh-4rem)] md:h-screen overflow-hidden">

<header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-4 text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Overview</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-zinc-200">Stock</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="absolute left-3 top-2.5 text-zinc-500 iconify" data-icon="lucide:search" data-width="16"></span>
<input className="bg-zinc-900 border border-zinc-800 text-zinc-200 pl-9 pr-4 py-2 rounded-lg text-xs w-64 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all placeholder:text-zinc-600" placeholder="Search SKU, Part..." type="text"/>
</div>
<button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-1">Inventory Overview</h2>
<p className="text-zinc-500 text-xs">Manage your auto parts, lifters, and shop supplies.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-medium">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                            Export
                        </button>
<button className="flex items-center gap-2 px-3 py-2 bg-zinc-100 text-zinc-950 rounded-md hover:bg-white transition-all text-xs font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                            Add Product
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400">
<span className="iconify" data-icon="lucide:box" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-emerald-500 text-xs flex items-center gap-1 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                +2.4% <span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">2,453</div>
<div className="text-zinc-500 text-xs">Total Products in Stock</div>
</div>
<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400">
<span className="iconify" data-icon="lucide:alert-circle" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-orange-400 text-xs flex items-center gap-1 font-medium bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                                4 Items
                            </span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">Low Stock</div>
<div className="text-zinc-500 text-xs">Requires immediate attention</div>
</div>
<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400">
<span className="iconify" data-icon="lucide:dollar-sign" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$842,390.00</div>
<div className="text-zinc-500 text-xs">Estimated Stock Value</div>
</div>
</div>

<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20">
<div className="border-b border-zinc-800 px-6 py-4 flex flex-col md:flex-row gap-4 justify-between items-center bg-zinc-900/40">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-200">Products</span>
<span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">2,453</span>
</div>
<div className="flex items-center gap-2 w-full md:w-auto">
<button className="px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:filter" data-width="12"></span> Filter
                            </button>
<button className="px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:arrow-up-down" data-width="12"></span> Sort
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800 text-zinc-500 text-xs uppercase tracking-wider bg-zinc-900/20">
<th className="px-6 py-3 font-medium w-12">
<input className="rounded border-zinc-700 bg-zinc-800 text-zinc-600 focus:ring-0 focus:ring-offset-0 w-3 h-3" type="checkbox"/>
</th>
<th className="px-6 py-3 font-medium">Product Name</th>
<th className="px-6 py-3 font-medium">Category</th>
<th className="px-6 py-3 font-medium">SKU</th>
<th className="px-6 py-3 font-medium">Stock</th>
<th className="px-6 py-3 font-medium">Price</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50 text-xs">

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-zinc-700 bg-zinc-800 text-zinc-600 focus:ring-0 focus:ring-offset-0 w-3 h-3" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:wrench" data-width="14"></span>
</div>
<span className="text-zinc-200 font-medium">Hydraulic 2-Post Lifter</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Lifters</td>
<td className="px-6 py-4 text-zinc-500 font-mono">LFT-4000-HD</td>
<td className="px-6 py-4 text-zinc-300">4</td>
<td className="px-6 py-4 text-zinc-300">$3,200.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                            Low Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-zinc-700 bg-zinc-800 text-zinc-600 focus:ring-0 focus:ring-offset-0 w-3 h-3" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:disc" data-width="14"></span>
</div>
<span className="text-zinc-200 font-medium">Brake Pad Set (Ceramic)</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Auto Parts</td>
<td className="px-6 py-4 text-zinc-500 font-mono">BP-CER-99</td>
<td className="px-6 py-4 text-zinc-300">142</td>
<td className="px-6 py-4 text-zinc-300">$45.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-zinc-700 bg-zinc-800 text-zinc-600 focus:ring-0 focus:ring-offset-0 w-3 h-3" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:droplet" data-width="14"></span>
</div>
<span className="text-zinc-200 font-medium">Synthetic Motor Oil 5W-30</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Fluids</td>
<td className="px-6 py-4 text-zinc-500 font-mono">OIL-SYN-5W</td>
<td className="px-6 py-4 text-zinc-300">85</td>
<td className="px-6 py-4 text-zinc-300">$28.50</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-zinc-700 bg-zinc-800 text-zinc-600 focus:ring-0 focus:ring-offset-0 w-3 h-3" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:cog" data-width="14"></span>
</div>
<span className="text-zinc-200 font-medium">Transmission Filter Kit</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Auto Parts</td>
<td className="px-6 py-4 text-zinc-500 font-mono">TF-KIT-200</td>
<td className="px-6 py-4 text-zinc-300">0</td>
<td className="px-6 py-4 text-zinc-300">$32.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                                            Out of Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-zinc-700 bg-zinc-800 text-zinc-600 focus:ring-0 focus:ring-offset-0 w-3 h-3" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:hammer" data-width="14"></span>
</div>
<span className="text-zinc-200 font-medium">Heavy Duty Jack Stand (6T)</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Shop Supplies</td>
<td className="px-6 py-4 text-zinc-500 font-mono">JCK-ST-06</td>
<td className="px-6 py-4 text-zinc-300">24</td>
<td className="px-6 py-4 text-zinc-300">$89.99</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-zinc-800 flex items-center justify-between">
<span className="text-xs text-zinc-500">Showing 1-5 of 2,453 products</span>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-50" disabled="">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="p-1.5 rounded hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
