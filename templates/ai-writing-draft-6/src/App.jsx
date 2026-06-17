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
theme: {
extend: {
colors: {
primary: {
DEFAULT: '#7C3AED', // Violet 600
hover: '#6D28D9',   // Violet 700
light: '#F5F3FF',   // Violet 50
},
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'shimmer': 'shimmer 2s linear infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'slide-up': 'slideUp 0.3s ease-out forwards',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openStockModal() {
            const modal = document.getElementById('stock-modal');
            const loadingView = document.getElementById('stock-loading');
            const resultsView = document.getElementById('stock-results');
            const progressBar = document.getElementById('progress-bar-fill');

            // Reset State
            modal.classList.remove('hidden');
            loadingView.classList.remove('hidden');
            resultsView.classList.add('hidden');
            resultsView.classList.remove('flex');
            
            // Start Progress Animation
            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 100);

            // Transition to Results after 2.5s
            setTimeout(() => {
                loadingView.classList.add('hidden');
                resultsView.classList.remove('hidden');
                resultsView.classList.add('flex');
            }, 2500);
        }

        function closeStockModal() {
            const modal = document.getElementById('stock-modal');
            const progressBar = document.getElementById('progress-bar-fill');
            
            modal.classList.add('hidden');
            progressBar.style.width = '0%'; // Reset for next time
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
      

<aside className="w-[220px] flex-none bg-white border-r border-gray-200 flex flex-col z-20">

<div className="h-16 flex items-center px-6">
<div className="flex items-center gap-2 text-primary font-bold tracking-tight text-lg">
<iconify-icon icon="solar:pen-new-square-bold-duotone" width="20"></iconify-icon>
<span>WriteRush</span>
</div>
</div>

<div className="flex-1 px-6 py-6 overflow-y-auto no-scrollbar relative">
<div className="absolute left-[34px] top-8 bottom-32 w-px bg-gray-200 z-0"></div>
<div className="space-y-6 relative z-10">
<div className="flex gap-3 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
<div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center shrink-0 ring-4 ring-white">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700 pt-0.5">Topic</span>
</div>
<div className="flex gap-3 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
<div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center shrink-0 ring-4 ring-white">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700 pt-0.5">Title</span>
</div>
<div className="flex gap-3 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
<div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center shrink-0 ring-4 ring-white">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700 pt-0.5">Outline</span>
</div>
<div className="flex gap-3">
<div className="w-5 h-5 rounded-full bg-primary ring-4 ring-primary-light flex items-center justify-center shrink-0 shadow-sm">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-sm font-semibold text-primary pt-0.5">Draft</span>
</div>
<div className="flex gap-3">
<div className="w-5 h-5 rounded-full bg-white border-2 border-gray-200 ring-4 ring-white flex items-center justify-center shrink-0"></div>
<span className="text-sm font-medium text-gray-400 pt-0.5">Preview</span>
</div>
</div>
</div>

<div className="p-4">
<div className="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
<iconify-icon icon="solar:file-text-linear" width="14"></iconify-icon>
<span>Words</span>
</div>
<span className="text-xs text-gray-500">38/165</span>
</div>
<div className="w-full bg-gray-200 h-1.5 rounded-full mb-3 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[23%]"></div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
<iconify-icon className="text-amber-500" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span>Credits</span>
</div>
<span className="text-xs text-gray-500">0/700</span>
</div>
<div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-400 h-full rounded-full w-0"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative min-w-0 bg-gray-50">

<header className="h-16 px-8 flex items-center justify-between shrink-0 bg-gray-50 z-20">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-white transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<span className="text-lg font-semibold text-primary">Draft</span>
</div>
<div className="flex gap-2">
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:cloud-check-linear" width="14"></iconify-icon>
                    Saved just now
                </span>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar px-8 pb-32">
<div className="max-w-[680px] mx-auto space-y-8 py-4">

<div className="group">
<label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Title</label>
<input className="w-full text-3xl font-bold text-gray-900 bg-transparent border-0 border-b border-transparent hover:border-gray-200 focus:border-primary focus:ring-0 px-0 py-2 transition-colors placeholder-gray-300 leading-tight" type="text" value="7 Content Writing Tools I've Found Essential for Polished Writing"/>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-gray-500">Featured Image</label>
</div>
<div className="w-full rounded-xl border border-dashed border-gray-300 bg-white p-6 transition-all hover:border-primary/40 hover:bg-primary-light/20 hover:shadow-[0_4px_20px_rgba(124,58,237,0.05)]">

<div className="flex flex-col items-center justify-center text-center mb-8">
<div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center mb-3">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-900">Drop image here or choose source</p>
<p className="text-xs text-gray-400 mt-1">Supports JPG, PNG, WebP (16:9 recommended)</p>
</div>

<div className="grid grid-cols-3 gap-3">

<button className="flex flex-col items-center p-3 rounded-lg border border-gray-200 bg-white hover:border-primary hover:bg-primary-light hover:shadow-md hover:shadow-primary/5 transition-all group" onclick="openStockModal()">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gallery-check-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-700 group-hover:text-primary">Stock Images</span>
<span className="text-[10px] text-gray-400 mt-0.5 group-hover:text-primary/70">Auto-find relevant</span>
</button>

<button className="flex flex-col items-center p-3 rounded-lg border border-gray-200 bg-white hover:border-primary hover:shadow-md hover:shadow-primary/5 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative z-10">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-700 group-hover:text-indigo-700 relative z-10">Generate AI</span>
<span className="text-[10px] text-gray-400 mt-0.5 relative z-10">Uses word credits</span>
</button>

<button className="flex flex-col items-center p-3 rounded-lg border border-gray-200 bg-white hover:border-primary hover:shadow-md hover:shadow-primary/5 transition-all group">
<div className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:folder-with-files-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900">Media Library</span>
<span className="text-[10px] text-gray-400 mt-0.5">Your uploads</span>
</button>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-100 p-4 -mx-4 transition-all">

<div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
<p>After years of testing dozens of content writing tools, I've narrowed my toolkit to seven that consistently deliver polished, professional results. These aren't just popular picks—they're the applications I open every single day to transform rough drafts into publication-ready content.</p>
</div>

<div className="absolute -right-10 top-2 opacity-0 group-hover:opacity-100 flex flex-col gap-1 transition-opacity">
<button className="p-1.5 bg-white text-gray-400 hover:text-primary border border-gray-200 rounded shadow-sm hover:border-primary/30 transition-colors" title="AI Rewrite">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 bg-white text-gray-400 hover:text-gray-900 border border-gray-200 rounded shadow-sm transition-colors cursor-move">
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>

<div className="mt-4">
<div className="group/add relative">

<div className="h-8 flex items-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
<div className="h-px flex-1 bg-primary/20"></div>
<div className="flex items-center gap-2 text-primary bg-primary-light/50 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-light hover:shadow-sm transition-all border border-transparent hover:border-primary/20">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                    Add Section Image
                                </div>
<div className="h-px flex-1 bg-primary/20"></div>
</div>

<div className="hidden group-hover/add:flex justify-center gap-2 mt-2 absolute top-6 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 shadow-lg w-fit mx-auto">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:text-primary hover:border-primary hover:bg-primary-light/20 transition-all" onclick="openStockModal()">
<iconify-icon icon="solar:gallery-check-linear" width="14"></iconify-icon>
                                    Stock
                                </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 transition-all">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="14"></iconify-icon>
                                    AI Gen
                                </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all">
<iconify-icon icon="solar:folder-linear" width="14"></iconify-icon>
                                    Media
                                </button>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-100 p-4 -mx-4 transition-all">
<h2 className="text-lg font-semibold text-gray-900 mb-3" id="section-1">How I Use My Favorite Writing Tools</h2>
<div className="prose prose-sm max-w-none text-gray-700 leading-relaxed mb-6">
<p>My content writing tool stack isn't random—it's built around specific stages of the writing process. Each tool handles a distinct job, from ideation to final polish. Trying to use one tool for everything usually means mediocre results across the board.</p>
</div>

<div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">

<div className="relative w-full aspect-video bg-gray-100 rounded-md overflow-hidden mb-3 group/img">
<img alt="Dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button className="px-3 py-1.5 bg-white/90 text-gray-700 rounded text-xs font-medium hover:bg-white hover:text-primary transition-colors flex items-center gap-1" onclick="openStockModal()">
<iconify-icon icon="solar:refresh-circle-linear" width="14"></iconify-icon> Replace
                                </button>
<button className="px-3 py-1.5 bg-white/90 text-gray-700 rounded text-xs font-medium hover:bg-white hover:text-red-500 transition-colors flex items-center gap-1">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon> Remove
                                </button>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex-1 space-y-2">
<div>
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Alt Text</label>
<input className="w-full text-xs text-gray-700 border-gray-200 rounded bg-gray-50 focus:bg-white focus:border-primary focus:ring-0 px-2 py-1.5 transition-colors" type="text" value="Writer analyzing data on a dashboard"/>
</div>
</div>
<div className="text-right">
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Source</label>
<div className="text-xs text-gray-500 flex items-center justify-end gap-1">
<iconify-icon icon="solar:gallery-check-linear" width="12"></iconify-icon>
                                    Unsplash
                                </div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-100 p-4 -mx-4 transition-all">
<h2 className="text-lg font-semibold text-gray-900 mb-3" id="section-2">Why Grammarly Remains My Go-To Assistant</h2>
<div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
<p>Here's how I think about it: Jasper helps me break through creative blocks, Grammarly catches real-time errors, Hemingway strips complexity, and ProWritingAid handles deep structural analysis.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 px-8 flex items-center justify-between z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="font-medium">38</span> <span className="text-gray-400">/ 165 words</span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-amber-500" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<span className="font-medium">0</span> <span className="text-gray-400">/ 700 credits</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all">
                    Save Draft
                </button>
<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
                    Next Step
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</main>

<aside className="w-[320px] flex-none bg-white border-l border-gray-200 flex flex-col z-20">

<div className="h-16 flex items-center px-5 border-b border-gray-100">
<h3 className="text-sm font-semibold text-gray-800">Outline</h3>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-1">
<div className="relative group">
<div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r-full"></div>
<div className="p-3 bg-primary-light/40 rounded-r-lg cursor-pointer flex gap-3">
<span className="text-[10px] font-mono font-medium text-primary bg-white border border-primary/20 px-1 py-0.5 rounded h-fit mt-0.5">H2</span>
<p className="text-[13px] font-medium text-primary leading-snug">
                        How I Use My Favorite Writing Tools
                    </p>
</div>
</div>
<div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer flex gap-3 group transition-colors">
<span className="text-[10px] font-mono font-medium text-gray-400 group-hover:text-gray-500 h-fit mt-0.5">H2</span>
<p className="text-[13px] font-medium text-gray-600 group-hover:text-gray-900 leading-snug">
                    Why Grammarly Remains My Go-To Assistant
                </p>
</div>
<div className="pl-9 pr-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer flex gap-3 group transition-colors">
<span className="text-[10px] font-mono font-medium text-gray-300 group-hover:text-gray-400 h-fit mt-0.5">H3</span>
<p className="text-[13px] text-gray-500 group-hover:text-gray-900 leading-snug">
                    How the Advanced Suggestions Help Me
                </p>
</div>
</div>
</aside>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="stock-modal">

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity opacity-0 animate-fade-in" onclick="closeStockModal()"></div>

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden flex flex-col max-h-[85vh] animate-slide-up transform transition-all">

<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
<div className="flex items-center gap-2 text-gray-900 font-semibold">
<iconify-icon className="text-primary" icon="solar:gallery-check-bold-duotone" width="18"></iconify-icon>
                    Stock Images
                </div>
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-full hover:bg-gray-100" onclick="closeStockModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="p-8 flex flex-col items-center justify-center min-h-[420px]" id="stock-loading">
<div className="w-full max-w-md bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>

<div className="relative w-16 h-16 mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20"></div>
<div className="relative bg-white rounded-full p-3 shadow-sm border border-gray-100 animate-pulse-subtle">
<iconify-icon className="text-primary text-3xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>

<h3 className="text-base font-medium text-gray-900 mb-4 text-center z-10">Curating relevant images for:</h3>

<div className="w-full bg-primary-light border border-primary/10 rounded-lg p-3 mb-6 relative z-10">
<p className="text-sm text-gray-600 italic text-center">
                            "7 Content Writing Tools I've Found Essential for Polished Writing"
                        </p>
</div>

<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-6 relative z-10">
<div className="h-full bg-primary rounded-full w-0 transition-all ease-out duration-[2500ms]" id="progress-bar-fill"></div>
</div>

<div className="w-full space-y-3 pl-4 relative z-10">

<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span className="text-gray-700 font-medium">Analyzing section content</span>
</div>

<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-emerald-500 animate-fade-in" icon="solar:check-circle-bold" style={{animationDelay: '0.5s'}} width="16"></iconify-icon>
<span className="text-gray-700 font-medium">Extracting keywords</span>
</div>

<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-primary" icon="svg-spinners:90-ring-with-bg" width="16"></iconify-icon>
<span className="text-primary font-medium animate-pulse">Fetching from Unsplash...</span>
</div>
</div>
</div>
<button className="mt-8 text-sm text-gray-500 hover:text-gray-800 transition-colors" onclick="closeStockModal()">Cancel</button>
</div>

<div className="hidden flex-col h-full overflow-hidden" id="stock-results">

<div className="px-6 py-4 border-b border-gray-100 bg-white">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="text" value="content writing tools laptop"/>
</div>
</div>

<div className="px-6 py-2 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs font-medium text-emerald-800">
<iconify-icon icon="solar:stars-minimalistic-bold" width="14"></iconify-icon>
<span>24 images found matching your content</span>
</div>
<span className="text-[10px] text-emerald-600/80">Source: Unsplash</span>
</div>

<div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
<div className="grid grid-cols-3 gap-4">

<div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ring-offset-2 hover:ring-2 hover:ring-primary transition-all">
<img alt="Office" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>

<div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ring-offset-2 ring-2 ring-primary transition-all">
<img alt="Typing" className="w-full h-full object-cover transform scale-105" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-primary/10"></div>
<div className="absolute top-2 right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:check-bold" width="14"></iconify-icon>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ring-offset-2 hover:ring-2 hover:ring-primary transition-all">
<img alt="Team" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>

<div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ring-offset-2 hover:ring-2 hover:ring-primary transition-all">
<img alt="Writing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>

<div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ring-offset-2 hover:ring-2 hover:ring-primary transition-all">
<img alt="Laptop" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>

<div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ring-offset-2 hover:ring-2 hover:ring-primary transition-all">
<img alt="Design" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</div>
<button className="w-full mt-6 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors dashed">
                        Load More Images
                    </button>
</div>

<div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center shrink-0">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" onclick="closeStockModal()">Cancel</button>
<button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-lg shadow-primary/25 hover:bg-primary-hover transition-all flex items-center gap-2" onclick="closeStockModal()">
                        Insert Image
                    </button>
</div>
</div>
</div>
</div>



    </>
  );
}
