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



        // State management
        let isClientView = false;
        
        const dashboardView = document.getElementById('dashboardView');
        const clientView = document.getElementById('clientView');
        const toggleBtnLabel = document.getElementById('viewLabel');
        const toggleBtn = document.getElementById('viewToggleBtn');

        function toggleView() {
            if (isClientView) {
                showDashboard();
            } else {
                openClientView();
            }
        }

        function showDashboard() {
            isClientView = false;
            clientView.classList.add('hidden');
            dashboardView.classList.remove('hidden');
            toggleBtnLabel.innerText = "Preview Client View";
            
            // Revert button style
            toggleBtn.classList.remove('bg-white', 'text-black', 'hover:bg-zinc-200', 'border-transparent');
            toggleBtn.classList.add('bg-zinc-900/50', 'text-zinc-400', 'border-zinc-800', 'hover:border-zinc-700', 'hover:bg-zinc-800', 'hover:text-white');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function openClientView() {
            isClientView = true;
            dashboardView.classList.add('hidden');
            clientView.classList.remove('hidden');
            toggleBtnLabel.innerText = "Back to Dashboard";
            
            // Active button style
            toggleBtn.classList.remove('bg-zinc-900/50', 'text-zinc-400', 'border-zinc-800', 'hover:border-zinc-700', 'hover:bg-zinc-800', 'hover:text-white');
            toggleBtn.classList.add('bg-white', 'text-black', 'hover:bg-zinc-200', 'border-transparent');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function downloadAll() {
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-24', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3000);
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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group" onclick="showDashboard()">
<div className="p-1 rounded bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="18"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white/90">Lumina</span>
</div>
<div className="flex items-center gap-4">

<button className="text-xs font-medium text-zinc-400 hover:text-white transition-all flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800" id="viewToggleBtn" onclick="toggleView()">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
<span id="viewLabel">Preview Client View</span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white shadow-inner">
                    RK
                </div>
</div>
</div>
</nav>

<main className="flex-grow pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">

<div className="fade-in" id="dashboardView">
<header className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white mb-2">Projects</h1>
<p className="text-zinc-500 text-sm">Manage your client deliveries and uploads.</p>
</div>
<button className="bg-white text-black hover:bg-zinc-200 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                    New Project
                </button>
</header>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
<div className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-3">Total Storage</div>
<div className="text-2xl font-medium text-white tracking-tight flex items-baseline gap-1">45.2 <span className="text-sm text-zinc-500 font-normal">GB</span></div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
<div className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-3">Active Links</div>
<div className="text-2xl font-medium text-white tracking-tight">12</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
<div className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-3">Downloads <span className="normal-case opacity-50">(30d)</span></div>
<div className="text-2xl font-medium text-white tracking-tight">843</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 overflow-hidden cursor-pointer" onclick="openClientView()">
<div className="aspect-[16/10] overflow-hidden bg-zinc-800 relative">
<img alt="Wedding" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1511285560982-193905a7972e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-medium tracking-wide backdrop-blur-md">Delivered</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white group-hover:text-white transition-colors">Anjali &amp; Rahul</h3>
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-right" data-width="18"></span>
</div>
<p className="text-xs text-zinc-500 mb-5">Wedding • Dec 12, 2023 • 452 items</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs hover:bg-white/10 hover:text-white transition-colors">Edit</button>
<button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-1.5">
<span className="iconify" data-icon="lucide:share-2" data-width="14"></span> Share
                            </button>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 overflow-hidden">
<div className="aspect-[16/10] overflow-hidden bg-zinc-800 relative">
<img alt="Product" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1551185627-88d408eb2739?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-1 rounded text-xs font-medium tracking-wide backdrop-blur-md">Editing</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white">Nike Campaign</h3>
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-right" data-width="18"></span>
</div>
<p className="text-xs text-zinc-500 mb-5">Commercial • Jan 05, 2024 • 120 items</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs hover:bg-white/10 hover:text-white transition-colors">Edit</button>
<button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-1.5">
<span className="iconify" data-icon="lucide:link" data-width="14"></span> Copy Link
                            </button>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 overflow-hidden">
<div className="aspect-[16/10] overflow-hidden bg-zinc-800 relative">
<img alt="Portrait" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 px-2 py-1 rounded text-xs font-medium tracking-wide backdrop-blur-md">Draft</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white">Graduation 2023</h3>
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-right" data-width="18"></span>
</div>
<p className="text-xs text-zinc-500 mb-5">Event • Nov 20, 2023 • 89 items</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs hover:bg-white/10 hover:text-white transition-colors">Resume</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in" id="clientView">

<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-8 backdrop-blur-md">
                    Pune, India
                </span>
<h1 className="text-4xl sm:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
                    Anjali &amp; Rahul
                </h1>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto font-normal">
                    A beautiful evening celebrating love and togetherness. Captured on December 12, 2023 at The Ritz-Carlton.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 transition-all px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transform active:scale-95 duration-200 shadow-[0_0_25px_rgba(255,255,255,0.15)]" onclick="downloadAll()">
<span className="iconify" data-icon="lucide:download" data-width="18"></span>
                        Download All Photos <span className="opacity-50 font-normal ml-1">1.2GB</span>
</button>
<button className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                        Highlight Film
                    </button>
</div>
</div>

<div className="flex justify-center gap-6 sm:gap-10 border-b border-white/5 pb-1 mb-10 overflow-x-auto">
<button className="text-sm font-medium text-white border-b-2 border-white pb-4 -mb-1.5 transition-colors">All Photos</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors pb-4 whitespace-nowrap">Highlights</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors pb-4 whitespace-nowrap">Ceremony</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors pb-4 whitespace-nowrap">Reception</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors pb-4 whitespace-nowrap">Videos</button>
</div>

<div className="masonry-grid space-y-6">

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
<img alt="Couple" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img alt="Detail" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
<span className="text-xs text-white/90 font-medium tracking-tight">IMG_8821.jpg</span>
<button className="text-white hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img alt="Ceremony" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
<span className="text-xs text-white/90 font-medium tracking-tight">IMG_8902.jpg</span>
<button className="text-white hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img alt="Decor" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
<span className="text-xs text-white/90 font-medium tracking-tight">IMG_9011.jpg</span>
<button className="text-white hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img alt="Portrait" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
<span className="text-xs text-white/90 font-medium tracking-tight">IMG_9100.jpg</span>
<button className="text-white hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img alt="Dancing" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511285560982-193905a7972e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
<span className="text-xs text-white/90 font-medium tracking-tight">IMG_9155.jpg</span>
<button className="text-white hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
<div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<img alt="Rings" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
<span className="text-xs text-white/90 font-medium tracking-tight">IMG_9201.jpg</span>
<button className="text-white hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="mt-24 text-center border-t border-white/5 pt-12 pb-10">
<p className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-3">Captured by</p>
<div className="flex items-center justify-center gap-2 mb-6">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="16"></span>
<p className="text-zinc-300 text-sm font-medium tracking-tight">Lumina Photography Studio</p>
</div>
<div className="flex justify-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:globe" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:mail" data-width="18"></span></a>
</div>
</div>
</div>
</main>

<div className="fixed bottom-8 right-8 translate-y-24 opacity-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) z-50" id="toast">
<div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 text-white pl-4 pr-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.1)]">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight">Download Started</h4>
<p className="text-xs text-zinc-400 mt-0.5">Your zip file is being prepared...</p>
</div>
</div>
</div>


    </>
  );
}
