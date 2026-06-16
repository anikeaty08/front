import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b backdrop-blur-md sticky top-0 z-50 border-stone-800/60 bg-stone-950/80">
<div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-base font-medium tracking-tighter uppercase text-stone-100" href="#">Vault</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors text-stone-400 hover:text-stone-100" href="#">Overview</a>
<a className="text-sm font-medium text-stone-100" href="#">Upload</a>
<a className="text-sm transition-colors text-stone-400 hover:text-stone-100" href="#">Catalog</a>
</nav>
</div>
<div className="flex items-center gap-5">
<button className="transition-colors flex items-center text-stone-400 hover:text-stone-100">
<iconify-icon height="20" icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-7 w-7 rounded-full flex items-center justify-center text-xs border cursor-pointer hover:border-stone-500 transition-colors bg-stone-800 text-stone-400 border-stone-700/80">
                    JD
                </div>
</div>
</div>
</header>

<main className="flex-grow max-w-3xl w-full mx-auto px-4 sm:px-6 py-12 flex flex-col gap-10">

<div className="space-y-1.5">
<h1 className="text-2xl tracking-tight font-medium text-stone-50">Upload Media</h1>
<p className="text-sm text-stone-400">Add new video files to your catalog. Supported formats include MP4, MKV, and WEBM.</p>
</div>

<div className="group flex flex-col border-dashed transition-all cursor-pointer overflow-hidden text-center border rounded-xl pt-16 pr-6 pb-16 pl-6 relative items-center justify-center hover:bg-stone-900/40 hover:border-stone-600 bg-stone-900/20 border-stone-700/70">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 from-stone-800/5"></div>
<div className="relative h-12 w-12 rounded-full border flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm bg-stone-800/50 border-stone-700/50 text-stone-300 shadow-stone-950/50">
<iconify-icon height="24" icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-1.5 tracking-tight relative z-10 text-stone-100">Click to browse or drag file here</h3>
<p className="text-xs text-stone-500 mb-6 max-w-[260px] relative z-10">High-definition files up to 50GB. Ensure files are properly encoded before upload.</p>
<button className="relative z-10 inline-flex items-center justify-center h-8 px-4 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-950 shadow-sm bg-stone-100 text-stone-900 hover:bg-white">
                Select File
            </button>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b pb-3 border-stone-800/60">
<h2 className="text-sm font-medium tracking-tight text-stone-100">Processing Queue</h2>
<span className="text-xs text-stone-500 px-2 py-0.5 rounded-full border bg-stone-900 border-stone-800">1 Item</span>
</div>

<div className="rounded-lg border p-4 flex flex-col sm:flex-row gap-4 sm:items-center relative overflow-hidden border-stone-800/80 bg-stone-900/30">

<div className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r to-transparent pointer-events-none from-stone-800/10"></div>
<div className="h-10 w-10 rounded border flex items-center justify-center shrink-0 z-10 bg-stone-800/80 border-stone-700/50 text-stone-400">
<iconify-icon height="20" icon="solar:video-frame-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-grow min-w-0 z-10">
<div className="flex justify-between items-end mb-1.5">
<h4 className="text-sm font-medium truncate pr-4 text-stone-200">interstellar_4k_remaster.mkv</h4>
<span className="text-xs font-medium shrink-0 text-stone-300">65%</span>
</div>
<div className="flex items-center gap-3">
<div className="h-1.5 w-full rounded-full overflow-hidden border bg-stone-950 border-stone-800/50">
<div className="h-full rounded-full w-[65%] relative bg-stone-300">
<div className="absolute inset-0 animate-pulse bg-white/20"></div>
</div>
</div>
<span className="text-xs text-stone-500 whitespace-nowrap tabular-nums">14.2 GB / 22.0 GB</span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0 mt-3 sm:mt-0 sm:ml-4 z-10">
<button className="p-1.5 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-800" title="Pause">
<iconify-icon height="18" icon="solar:pause-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-orange-900/50 text-stone-400 hover:text-orange-400 hover:bg-orange-400/10" title="Cancel">
<iconify-icon height="18" icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="rounded-lg border p-5 space-y-6 mt-2 border-stone-800/80 bg-stone-900/20">
<h3 className="text-sm font-medium tracking-tight text-stone-100">Metadata Configuration</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

<div className="space-y-2 col-span-1 md:col-span-2">
<label className="text-xs font-medium text-stone-400">Display Title</label>
<input className="w-full border rounded-md h-9 px-3 text-sm placeholder:text-stone-600 focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all bg-stone-950/50 border-stone-800/80 text-stone-200" placeholder="Enter movie title" type="text" value="Interstellar"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-stone-400">Release Year</label>
<input className="w-full border rounded-md h-9 px-3 text-sm placeholder:text-stone-600 focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all bg-stone-950/50 border-stone-800/80 text-stone-200" placeholder="YYYY" type="text" value="2014"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-stone-400">Primary Genre</label>
<div className="relative">
<select className="w-full border rounded-md h-9 pl-3 pr-8 text-sm focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all appearance-none cursor-pointer bg-stone-950/50 border-stone-800/80 text-stone-200">
<option>Sci-Fi</option>
<option>Action</option>
<option>Drama</option>
<option>Thriller</option>
<option>Documentary</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-stone-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2 col-span-1 md:col-span-2">
<label className="text-xs font-medium text-stone-400">Synopsis</label>
<textarea className="w-full border rounded-md py-2 px-3 text-sm placeholder:text-stone-600 focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all resize-none leading-relaxed bg-stone-950/50 border-stone-800/80 text-stone-200" placeholder="Brief description of the plot..." rows="3"></textarea>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col gap-4 py-4 border-t mt-1 border-stone-800/60">

<label className="flex items-center justify-between cursor-pointer group">
<div className="pr-4">
<p className="text-sm font-medium group-hover:text-stone-50 transition-colors text-stone-200">Generate Thumbnails</p>
<p className="text-xs text-stone-500 mt-0.5">Automatically extract preview frames during processing.</p>
</div>
<div className="relative inline-flex h-5 w-9 shrink-0 items-center justify-center rounded-full">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-full w-full rounded-full peer-checked:bg-stone-200 transition-colors duration-200 ease-in-out border peer-checked:border-stone-200 bg-stone-800 border-stone-700"></div>
<div className="absolute left-0.5 inline-block h-4 w-4 transform rounded-full peer-checked:bg-stone-900 shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-4 bg-stone-400"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer group">
<div className="pr-4">
<p className="text-sm font-medium group-hover:text-stone-50 transition-colors text-stone-200">Make Public</p>
<p className="text-xs text-stone-500 mt-0.5">Allow anyone with the link to view this file.</p>
</div>
<div className="relative inline-flex h-5 w-9 shrink-0 items-center justify-center rounded-full">
<input className="peer sr-only" type="checkbox"/>
<div className="h-full w-full rounded-full peer-checked:bg-stone-200 transition-colors duration-200 ease-in-out border peer-checked:border-stone-200 bg-stone-800 border-stone-700"></div>
<div className="absolute left-0.5 inline-block h-4 w-4 transform rounded-full peer-checked:bg-stone-900 shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-4 bg-stone-400"></div>
</div>
</label>
</div>
</div>

<div className="flex items-center justify-end gap-3 pt-5 border-t border-stone-800/60">
<button className="px-4 h-8 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-800/50">
                        Cancel
                    </button>
<button className="inline-flex items-center justify-center px-4 h-8 rounded-md text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-950 shadow-sm bg-stone-800 text-stone-100 border-stone-700 hover:bg-stone-700 hover:border-stone-600">
                        Save Metadata
                    </button>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t py-8 text-center border-stone-800/50">
<p className="text-xs text-stone-500 tracking-wide font-medium uppercase">© 2024 VAULT SYSTEMS</p>
</footer>

    </>
  );
}
