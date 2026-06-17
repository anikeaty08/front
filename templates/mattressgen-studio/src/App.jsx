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



        document.addEventListener('DOMContentLoaded', () => {
            // Dark Mode Logic
            const themeToggle = document.getElementById('themeToggle');
            const html = document.documentElement;
            
            // Check local storage or system preference
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }

            themeToggle.addEventListener('click', () => {
                html.classList.toggle('dark');
                if (html.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
            });

            // Upload Simulation Logic
            const uploadZone = document.getElementById('uploadZone');
            const uploadPlaceholder = document.getElementById('uploadPlaceholder');
            const imagePreview = document.getElementById('imagePreview');
            const removeImage = document.getElementById('removeImage');

            uploadZone.addEventListener('click', (e) => {
                if(e.target.closest('#removeImage')) return; // ignore if click is on remove button
                // Simulate upload success
                uploadPlaceholder.classList.add('hidden');
                imagePreview.classList.remove('hidden');
            });

            removeImage.addEventListener('click', (e) => {
                e.stopPropagation();
                imagePreview.classList.add('hidden');
                uploadPlaceholder.classList.remove('hidden');
            });

            // Generation Logic
            const generateBtn = document.getElementById('generateBtn');
            const btnIcon = document.getElementById('btnIcon');
            const btnLoader = document.getElementById('btnLoader');
            const btnText = document.getElementById('btnText');
            
            const emptyState = document.getElementById('emptyState');
            const loadingState = document.getElementById('loadingState');
            const resultsGrid = document.getElementById('resultsGrid');

            generateBtn.addEventListener('click', () => {
                // 1. Reset State
                resultsGrid.classList.add('hidden');
                emptyState.classList.add('hidden');
                
                // 2. Loading UI
                generateBtn.disabled = true;
                btnIcon.classList.add('hidden');
                btnLoader.classList.remove('hidden');
                btnText.innerText = "Generating Concepts...";
                
                loadingState.classList.remove('hidden');

                // 3. Simulate API Call (3 seconds)
                setTimeout(() => {
                    // Stop Loading
                    loadingState.classList.add('hidden');
                    
                    // Show Results
                    resultsGrid.classList.remove('hidden');
                    
                    // Reset Button
                    generateBtn.disabled = false;
                    btnIcon.classList.remove('hidden');
                    btnLoader.classList.add('hidden');
                    btnText.innerText = "Generate Again";
                    
                    // Optional: Scroll to results on mobile
                    if(window.innerWidth < 1024) {
                        resultsGrid.scrollIntoView({ behavior: 'smooth' });
                    }

                }, 3000);
            });
        });
    
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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:bed-double" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h1 className="font-medium tracking-tight text-lg font-geist" style={{}}>
                    MattressGen <span className="text-indigo-600 dark:text-indigo-400 font-semibold font-geist" style={{}}>Studio</span>
</h1>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:block text-xs font-medium text-slate-500 dark:text-slate-400 font-geist" style={{}}>AI-Powered Design Ideation</span>
<div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors" id="themeToggle">
<svg aria-hidden="true" className="iconify block dark:hidden iconify--lucide" data-icon="lucide:sun" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<svg aria-hidden="true" className="iconify hidden dark:block iconify--lucide" data-icon="lucide:moon" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

<div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white mb-3 font-playfair" style={{}}>
                Visualize Your Next Best-Seller
            </h2>
<p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-geist" style={{}}>
                Transform your mattress concepts into photorealistic studio renders instantly. 
                Iterate on fabrics, textures, and environments in seconds.
            </p>
</div>
<div className="flex flex-col lg:flex-row lg:gap-12 gap-x-8 gap-y-8 items-start">

<div className="w-full lg:w-[360px] flex-shrink-0 flex flex-col gap-6">
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-geist" style={{}}>Design Parameters</h3>
</div>

<div className="space-y-4">
<div className="group">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 font-geist" style={{}}>Top Fabric Details</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-800 dark:text-white dark:placeholder:text-slate-600 transition-shadow" placeholder="e.g. White Knitted Jacquard, organic cotton..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 font-geist" style={{}}>Side Wall Fabric</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-800 dark:text-white dark:placeholder:text-slate-600 transition-shadow" placeholder="e.g. Navy Blue Velvet, vertical stitching..." type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 font-geist" style={{}}>Edge Tape Color</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-800 dark:text-white dark:placeholder:text-slate-600 transition-shadow" placeholder="e.g. Gold Piping, 2 inch width..." type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 font-geist" style={{}}>Additional Ideas</label>
<textarea className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-800 dark:text-white dark:placeholder:text-slate-600 transition-shadow resize-none" placeholder="Describe the environment, lighting mood, or specific patterns..." rows="3"></textarea>
</div>
</div>

<div className="mt-4">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 font-geist" style={{}}>Reference Image (Optional)</label>
<div className="relative mt-1 flex justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700 px-6 py-8 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer" id="uploadZone">
<div className="text-center" id="uploadPlaceholder">
<span className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600 flex justify-center items-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:upload-cloud" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
</span>
<div className="mt-2 flex text-xs leading-6 text-slate-600 dark:text-slate-400 justify-center">
<span className="font-semibold text-indigo-600 hover:text-indigo-500 font-geist" style={{}}>Upload a file</span>
<span className="pl-1 font-geist" style={{}}>or drag and drop</span>
</div>
</div>

<div className="hidden absolute inset-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800" id="imagePreview">
<img alt="Preview" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=200"/>
<button className="absolute top-2 right-2 p-1 bg-white/90 text-slate-600 rounded-full hover:bg-red-50 hover:text-red-600 shadow-sm" id="removeImage">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="rounded-md bg-indigo-50/50 dark:bg-indigo-950/20 p-4 border border-indigo-100 dark:border-indigo-900/50">
<div className="flex">
<div className="flex-shrink-0">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:lightbulb" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="ml-3">
<h3 className="text-xs font-medium text-indigo-800 dark:text-indigo-300 font-geist" style={{}}>Tips for best results</h3>
<div className="mt-1 text-xs text-indigo-700 dark:text-indigo-400/80">
<ul className="list-disc space-y-1 pl-4" role="list">
<li className="font-geist" style={{}}>Specify fabric textures (e.g., quilted, smooth).</li>
<li className="font-geist" style={{}}>Mention lighting (e.g., morning sun, studio).</li>
<li className="font-geist" style={{}}>Use precise color names (e.g., slate grey).</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<button className="group relative flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.99]" id="generateBtn">
<svg aria-hidden="true" className="iconify transition-transform group-hover:translate-x-0.5 iconify--lucide" data-icon="lucide:play" data-width="16" height="16" id="btnIcon" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify animate-spin hidden iconify--lucide" data-icon="lucide:loader-2" data-width="18" height="18" id="btnLoader" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-geist" id="btnText" style={{}}>Generate Concepts</span>
</button>
<div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium mb-3 font-geist" style={{}}>Powered By snapweaves.com</p>
<a className="inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors font-geist" href="#" style={{}}>
                        Work with us
                        <svg aria-hidden="true" className="iconify iconify--lucide ml-1.5 w-[12px] h-[12px]" data-icon="lucide:arrow-right" data-icon-replaced="true" data-width="12" height="12" role="img" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="flex-1 min-h-[500px] w-full">

<div className="h-full w-full rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-12 text-center bg-slate-50/50 dark:bg-slate-900/20" id="emptyState">
<div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm mb-4">
<svg aria-hidden="true" className="iconify text-slate-300 dark:text-slate-600 iconify--lucide" data-icon="lucide:image" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
<h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white font-geist" style={{}}>No designs generated yet</h3>
<p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xs font-geist" style={{}}>Fill in the design parameters on the left and click Generate to see your mattress concepts.</p>
</div>

<div className="hidden h-full w-full" id="loadingState">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
<div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse delay-75"></div>
<div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse delay-150"></div>
<div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse delay-200"></div>
<div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse delay-300"></div>
<div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse delay-500"></div>
</div>
</div>

<div className="hidden flex-col gap-6" id="resultsGrid">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 font-geist" style={{}}>Generated Results <span className="ml-2 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 font-geist" style={{}}>Success</span></h3>
<span className="text-xs font-mono text-slate-400 font-geist" style={{}}>ID: #MG-2024</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm animate-fade-in" style={{animationDelay: '0ms'}}>
<img alt="Mattress Design" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
<span className="text-xs font-medium text-white font-geist" style={{}}>Minimalist Collection</span>
<button className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm animate-fade-in" style={{animationDelay: '100ms'}}>
<img alt="Mattress Design" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
<span className="text-xs font-medium text-white font-geist" style={{}}>Minimalist - Detail</span>
<button className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm animate-fade-in" style={{animationDelay: '200ms'}}>
<img alt="Mattress Design" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
<span className="text-xs font-medium text-white font-geist" style={{}}>Luxury Hotel</span>
<button className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm animate-fade-in" style={{animationDelay: '300ms'}}>
<img alt="Mattress Design" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
<span className="text-xs font-medium text-white font-geist" style={{}}>Commercial Range</span>
<button className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm animate-fade-in" style={{animationDelay: '400ms'}}>
<img alt="Mattress Design" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
<span className="text-xs font-medium text-white font-geist" style={{}}>Close-up Texture</span>
<button className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm animate-fade-in" style={{animationDelay: '500ms'}}>
<img alt="Mattress Design" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
<span className="text-xs font-medium text-white font-geist" style={{}}>Dark Aesthetic</span>
<button className="rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
