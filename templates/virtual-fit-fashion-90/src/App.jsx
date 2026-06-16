import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tighter">VIRTUAL</span>
<span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-medium text-slate-500 uppercase tracking-widest">Beta</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Technology</a>
<a className="hover:text-slate-900 transition-colors" href="#">Catalog</a>
<a className="hover:text-slate-900 transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900">
<iconify-icon icon="lucide:user" width="18"></iconify-icon>
<span>Sign in</span>
</button>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm ring-1 ring-slate-900 ring-offset-2 ring-offset-white">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-12 px-4 max-w-7xl mx-auto h-screen flex flex-col lg:flex-row gap-6">

<div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">

<div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
<div className="bg-white/90 backdrop-blur border border-slate-200 rounded-lg p-1 flex flex-col gap-1 shadow-sm">
<button className="p-2 hover:bg-slate-50 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:move" width="18"></iconify-icon>
</button>
<button className="p-2 hover:bg-slate-50 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:zoom-in" width="18"></iconify-icon>
</button>
<button className="p-2 hover:bg-slate-50 rounded-md text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:eraser" width="18"></iconify-icon>
</button>
</div>
<div className="bg-white/90 backdrop-blur border border-slate-200 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-600">Model Active</span>
</div>
</div>

<div className="w-full h-full bg-slate-50 flex items-center justify-center relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-64 h-96 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center">
<div className="text-center p-6">
<div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3 text-slate-400">
<iconify-icon icon="lucide:camera" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-900 mb-1">Upload Photo</p>
<p className="text-xs text-slate-500">Drag &amp; drop or click to browse</p>
</div>

<div className="absolute -right-24 top-10 bg-white p-3 rounded-lg shadow-xl border border-slate-100 w-48 rotate-3 transition-transform group-hover:rotate-0 duration-500">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:shirt" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Merino Wool</div>
<div className="text-[10px] text-slate-500">Applying texture...</div>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-slate-900 w-2/3 h-full rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
<button className="bg-white text-slate-900 text-xs font-medium px-4 py-2.5 rounded-full shadow-lg border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-2 group">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="lucide:refresh-ccw" width="14"></iconify-icon>
<span>Reset View</span>
</button>
<button className="bg-slate-900 text-white text-xs font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:wand-2" width="14"></iconify-icon>
<span>Generate Fit</span>
</button>
</div>
</div>

<div className="w-full lg:w-96 flex flex-col gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Body Parameters</h3>
<iconify-icon className="text-slate-400" icon="lucide:settings-2" width="16"></iconify-icon>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span>Height</span>
<span className="text-slate-900">175 cm</span>
</div>
<div className="relative h-1 bg-slate-100 rounded-full w-full">
<div className="absolute top-0 left-0 h-full bg-slate-900 rounded-full w-[65%]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-3 h-3 bg-white border border-slate-300 shadow-sm rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span>Weight</span>
<span className="text-slate-900">68 kg</span>
</div>
<div className="relative h-1 bg-slate-100 rounded-full w-full">
<div className="absolute top-0 left-0 h-full bg-slate-900 rounded-full w-[40%]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-3 h-3 bg-white border border-slate-300 shadow-sm rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<span className="text-xs font-medium text-slate-700">Auto-detect from photo</span>
<button className="w-9 h-5 bg-slate-900 rounded-full relative transition-colors focus:outline-none">
<span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform"></span>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 flex-1 flex flex-col shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-100">
<h3 className="text-sm font-medium text-slate-900 mb-4">Select Garment</h3>

<div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
<button className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-medium whitespace-nowrap">All Items</button>
<button className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-xs font-medium whitespace-nowrap transition-colors">Outerwear</button>
<button className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-xs font-medium whitespace-nowrap transition-colors">Tops</button>
<button className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-xs font-medium whitespace-nowrap transition-colors">Bottoms</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
<div className="grid grid-cols-2 gap-3">

<div className="group relative aspect-[3/4] rounded-lg border border-slate-900 bg-slate-50 cursor-pointer overflow-hidden">
<div className="absolute top-2 right-2 z-10">
<div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="10"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-white">

<div className="w-20 h-32 bg-slate-100 rounded flex items-center justify-center text-slate-300">
<iconify-icon icon="lucide:shirt" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-2 border-t border-slate-100 transform translate-y-0 transition-transform">
<p className="text-[10px] font-semibold text-slate-900 truncate">Oxford Cotton Shirt</p>
<p className="text-[10px] text-slate-500">$89.00</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-lg border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-32 bg-stone-50 rounded flex items-center justify-center text-stone-300">
<iconify-icon icon="lucide:shirt" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white p-2 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-[10px] font-medium text-slate-900 truncate">Relaxed Tee</p>
<p className="text-[10px] text-slate-500">$45.00</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-lg border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-32 bg-zinc-50 rounded flex items-center justify-center text-zinc-300">
<iconify-icon icon="lucide:scissors" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white p-2 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-[10px] font-medium text-slate-900 truncate">Pleated Trousers</p>
<p className="text-[10px] text-slate-500">$120.00</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-lg border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-32 bg-orange-50 rounded flex items-center justify-center text-orange-200">
<iconify-icon icon="lucide:layers" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white p-2 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-[10px] font-medium text-slate-900 truncate">Wool Coat</p>
<p className="text-[10px] text-slate-500">$250.00</p>
</div>
</div>
</div>
</div>

<div className="p-4 bg-slate-50 border-t border-slate-200">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-700">Size</span>
<a className="text-[10px] text-slate-400 hover:text-slate-900 underline" href="#">Size Guide</a>
</div>
<div className="grid grid-cols-5 gap-2">
<button className="h-8 rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-500 hover:border-slate-300 hover:text-slate-900 transition-colors">XS</button>
<button className="h-8 rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-500 hover:border-slate-300 hover:text-slate-900 transition-colors">S</button>
<button className="h-8 rounded bg-slate-900 text-white text-[10px] font-medium shadow-sm">M</button>
<button className="h-8 rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-500 hover:border-slate-300 hover:text-slate-900 transition-colors">L</button>
<button className="h-8 rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-500 hover:border-slate-300 hover:text-slate-900 transition-colors">XL</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
