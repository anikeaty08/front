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
      

<aside className="w-full md:w-60 bg-zinc-950 border-r border-zinc-800/60 p-4 flex-col hidden md:flex shrink-0">

<div className="text-lg font-medium tracking-tight mb-8 flex items-center gap-2 text-zinc-100 cursor-pointer">
<div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center text-zinc-950 text-xs tracking-tighter">GS</div>
            SPLATTER
        </div>

<nav className="space-y-0.5 flex-1">
<div className="text-xs font-medium text-zinc-500 mb-2 px-2 tracking-wide uppercase">Workspace</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 bg-zinc-900/80 rounded-md text-sm text-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon> Reconstructions
            </a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 rounded-md text-sm transition-colors" href="#">
<iconify-icon icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon> Datasets
            </a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 rounded-md text-sm transition-colors" href="#">
<iconify-icon icon="solar:server-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon> Compute Nodes
            </a>
<div className="text-xs font-medium text-zinc-500 mt-6 mb-2 px-2 tracking-wide uppercase">Settings</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 rounded-md text-sm transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon> Preferences
            </a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 rounded-md text-sm transition-colors" href="#">
<iconify-icon icon="solar:key-minimalistic-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon> API Keys
            </a>
</nav>

<div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center gap-3 px-2 cursor-pointer group">
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">System Admin</span>
<span className="text-xs text-zinc-500">Free Tier</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen min-w-0">

<header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-4 lg:px-6 bg-zinc-950/80 backdrop-blur-md shrink-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-zinc-100"><iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon></button>
<div className="flex items-center gap-2 text-sm text-zinc-400">
<span className="hover:text-zinc-200 cursor-pointer transition-colors">Reconstructions</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-zinc-100 font-medium">Project_Alpha_Scan</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 text-xs text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800/60">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span> GPU Active (RTX 4090)
                </div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-900">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-6 flex flex-col lg:flex-row gap-6">

<div className="w-full lg:w-80 xl:w-96 flex flex-col gap-5 shrink-0">

<section className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-100 tracking-tight">Input Source</h2>
<span className="text-xs text-zinc-500">Required</span>
</div>
<div className="border border-dashed border-zinc-700/60 rounded-xl p-6 flex flex-col items-center justify-center bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-500 transition-all cursor-pointer group relative overflow-hidden">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 mb-3 group-hover:text-zinc-100 group-hover:bg-zinc-700 transition-all group-hover:scale-110 duration-300">
<iconify-icon icon="solar:gallery-add-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-200 mb-0.5">Images or Video</h3>
<p className="text-xs text-zinc-500 text-center">Drag &amp; drop or click to browse.<br/>.zip, .mp4, or image sequence.</p>

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/10 pointer-events-none"></div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-2.5 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:zip-file-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 font-medium">drone_footage_park.zip</span>
<span className="text-xs text-zinc-500">428 images • 1.2 GB</span>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 p-1">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</section>
<hr className="border-zinc-800/60"/>

<section className="flex flex-col gap-4">
<h2 className="text-sm font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                        Training Parameters
                    </h2>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-baseline">
<label className="text-xs text-zinc-400">Target Iterations</label>
<span className="text-xs font-mono text-zinc-200">30,000</span>
</div>
<div className="relative w-full h-1.5 bg-zinc-800 rounded-full cursor-pointer group">

<div className="absolute top-0 left-0 h-full bg-zinc-300 w-3/4 rounded-full group-hover:bg-white transition-colors"></div>

<div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-100 rounded-full shadow-sm shadow-black border border-zinc-300 transition-transform group-hover:scale-110"></div>
</div>
<div className="flex justify-between text-xs text-zinc-600 font-mono mt-0.5">
<span>7k</span>
<span>30k</span>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs text-zinc-400">Spherical Harmonics Degree</label>
<div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 flex items-center justify-between hover:border-zinc-600 transition-colors cursor-pointer group">
<span>Degree 3 (Default)</span>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex flex-col">
<label className="text-sm text-zinc-200">Adaptive Densification</label>
<span className="text-xs text-zinc-500">Clone/split splats during training</span>
</div>

<div className="w-9 h-5 bg-zinc-200 rounded-full relative cursor-pointer flex items-center px-0.5 shrink-0 transition-colors">
<div className="w-4 h-4 bg-zinc-900 rounded-full absolute right-0.5 shadow-sm transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<label className="text-sm text-zinc-200">White Background</label>
<span className="text-xs text-zinc-500">Train against pure white</span>
</div>

<div className="w-9 h-5 bg-zinc-800 border border-zinc-700 rounded-full relative cursor-pointer flex items-center px-0.5 shrink-0 transition-colors hover:border-zinc-600">
<div className="w-4 h-4 bg-zinc-400 rounded-full absolute left-0.5 shadow-sm transition-transform"></div>
</div>
</div>
</section>
<div className="mt-auto pt-4">
<button className="w-full bg-zinc-100 text-zinc-950 font-medium text-sm py-2.5 rounded-lg hover:bg-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '2px'}} width="16"></iconify-icon> Start Reconstruction
                    </button>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 min-w-0">

<div className="flex-1 bg-zinc-950 border border-zinc-800/60 rounded-xl relative overflow-hidden flex flex-col min-h-[400px] shadow-inner shadow-black/50 group">

<div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-10 pointer-events-none">
<div className="flex gap-2 pointer-events-auto">
<div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-lg p-1 flex gap-1">
<button className="px-2.5 py-1.5 rounded-md text-xs font-medium bg-zinc-800 text-zinc-100 flex items-center gap-1.5 transition-colors shadow-sm">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon> Orbit
                                </button>
<button className="px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 flex items-center gap-1.5 transition-colors">
<iconify-icon icon="solar:box-linear" width="14"></iconify-icon> BBox
                                </button>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 pointer-events-auto text-zinc-200 shadow-sm">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
                            Training in progress
                        </div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950 to-zinc-950">

<div className="absolute bottom-0 w-[200%] h-64 border-t border-zinc-800/30 bg-[linear-gradient(to_right,#27272a33_1px,transparent_1px),linear-gradient(to_bottom,#27272a33_1px,transparent_1px)] bg-[size:2rem_2rem] [transform:rotateX(75deg)] opacity-40"></div>

<div className="relative w-full h-full max-w-lg max-h-lg flex items-center justify-center mix-blend-screen opacity-80">
<div className="absolute w-64 h-64 bg-emerald-500/10 blur-[60px] rounded-full translate-x-10 -translate-y-10"></div>
<div className="absolute w-72 h-72 bg-blue-500/10 blur-[70px] rounded-full -translate-x-12 translate-y-8"></div>
<div className="absolute w-56 h-56 bg-amber-500/10 blur-[50px] rounded-full translate-x-16 translate-y-12"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNTE1MTU0IiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+')] opacity-30 [mask-image:radial-gradient(circle,black_20%,transparent_70%)]"></div>
</div>

<div className="absolute bottom-6 right-6 w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-2 left-2 w-8 h-0.5 bg-red-500/70 origin-left"></div>
<div className="absolute bottom-2 left-2 w-0.5 h-8 bg-green-500/70 origin-bottom -translate-y-8"></div>
<div className="absolute bottom-2 left-2 w-8 h-0.5 bg-blue-500/70 origin-left -rotate-45"></div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 rounded-full px-4 py-2 flex items-center gap-4 z-10 pointer-events-auto shadow-lg">
<button className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"><iconify-icon icon="solar:rewind-back-linear" width="16"></iconify-icon></button>
<button className="text-zinc-100 hover:text-white transition-colors p-1 bg-zinc-800 rounded-full"><iconify-icon icon="solar:pause-linear" width="18"></iconify-icon></button>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"><iconify-icon icon="solar:forward-linear" width="16"></iconify-icon></button>
<div className="w-px h-4 bg-zinc-700 mx-1"></div>
<div className="flex flex-col items-center">
<div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-zinc-300 rounded-full"></div>
</div>
<div className="text-[10px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">Iter 13,500 / 30,000</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0">
<div className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-4 flex flex-col justify-center">
<div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon> PSNR</div>
<div className="text-xl font-medium text-zinc-100 font-mono tracking-tight">31.42 <span className="text-sm text-zinc-500 font-sans">dB</span></div>
</div>
<div className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-4 flex flex-col justify-center">
<div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon> Splat Count</div>
<div className="text-xl font-medium text-zinc-100 font-mono tracking-tight">2.41 <span className="text-sm text-zinc-500 font-sans">M</span></div>
</div>
<div className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-4 flex flex-col justify-center">
<div className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Elapsed Time</div>
<div className="text-xl font-medium text-zinc-100 font-mono tracking-tight">14:22</div>
</div>
<div className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-3.5 flex flex-col justify-between">
<div className="text-xs text-zinc-500 mb-2 flex items-center gap-1.5"><iconify-icon icon="solar:export-linear" width="14"></iconify-icon> Export Options</div>
<div className="flex gap-2">
<button className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs py-1.5 rounded-lg transition-all text-center font-medium">.PLY</button>
<button className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs py-1.5 rounded-lg transition-all text-center font-medium">.SPLAT</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
