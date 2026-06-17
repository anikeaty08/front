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
      

<div className="max-w-[1440px] mx-auto bg-[#F3EFE6] relative">

<nav className="sticky top-0 z-50 w-full h-[88px] flex items-center bg-[#F3EFE6]/90 backdrop-blur-md border-b border-[#6B4F3A]/10">
<div className="xl:px-0 grid grid-cols-12 w-full max-w-[1200px] mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center">

<div className="col-span-3 flex items-center gap-2">
<svg className="" fill="none" height="28" stroke="#6B4F3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28">
<path className="" d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path className="" d="M16 16v.01"></path>
<path d="M12 12v.01"></path>
</svg>
<span className="text-lg font-semibold text-[#6B4F3A] tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button">Walnut &amp; Wheel</span>
</div>

<div className="hidden md:flex col-span-6 justify-center gap-8">
<a className="hover:text-[#6B4F3A] transition-colors text-sm font-medium text-[#5A646A]" href="/collection">Collections</a>
<a className="hover:text-[#6B4F3A] transition-colors text-sm font-medium text-[#5A646A]" href="/collectiondetails">Process</a>
<a className="hover:text-[#6B4F3A] transition-colors text-sm font-medium text-[#5A646A]" href="/commission">Commission</a>
<a className="hover:text-[#6B4F3A] transition-colors text-sm font-medium text-[#5A646A]" href="/sustainablity">Sustainability</a>
</div>

<div className="col-span-9 md:col-span-3 flex justify-end gap-3">
<button className="hidden lg:flex hover:bg-[#6B4F3A]/5 transition-colors text-sm font-medium text-[#6B4F3A] h-12 border-[#6B4F3A]/20 border rounded-[20px] pr-[18px] pl-[18px] items-center justify-center cursor-pointer" onclick="window.location.href='/commission'" role="button">
                        Request a Commission
                    </button>
<button className="flex hover:bg-[#594230] transition-colors text-sm font-medium text-[#F3EFE6] bg-[#6B4F3A] h-12 rounded-[20px] pr-[18px] pl-[18px] shadow-sm items-center justify-center cursor-pointer" onclick="window.location.href='/collections'" role="button">
                        Shop Collections
                    </button>
</div>
</div>
</nav>

<section className="pt-10 pb-24">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="h-auto md:h-[680px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

<div className="col-span-1 md:col-span-5 flex flex-col justify-center h-full space-y-8">
<div className="space-y-6">
<span className="text-xs font-semibold tracking-widest uppercase text-[#C56A4A]">Handmade Studio Editions</span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#6B4F3A] text-balance leading-[1.1]">
                                Made slowly.<br/>Kept forever.
                            </h1>
<p className="text-lg text-[#5A646A] leading-relaxed max-w-md text-balance">
                                Small-batch ceramics, linen pieces, and reclaimed silver—crafted in warm earth tones, with full material traceability.
                            </p>
</div>
<div className="flex flex-wrap gap-4">
<button className="hover:bg-[#594230] transition-all text-sm font-medium text-[#F3EFE6] bg-[#6B4F3A] h-12 rounded-[20px] pr-6 pl-6 shadow-[0_12px_30px_rgba(107,79,58,0.15)] cursor-pointer" onclick="window.location.href='/collections'" role="button">
                                Shop Collections
                            </button>
<button className="hover:bg-[#6B4F3A]/5 transition-colors text-sm font-medium text-[#6B4F3A] h-12 border-[#6B4F3A]/20 border rounded-[20px] pr-6 pl-6 cursor-pointer" onclick="window.location.href='/commission'" role="button">
                                Request a Commission
                            </button>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-[#6B4F3A]/10">
<div className="flex items-center gap-2 text-xs text-[#5A646A] font-medium">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
                                Made in small batches
                            </div>
<div className="flex items-center gap-2 text-xs text-[#5A646A] font-medium">
<svg aria-hidden="true" data-icon="lucide:scan-line" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Traceable materials
                            </div>
<div className="flex items-center gap-2 text-xs text-[#5A646A] font-medium">
<svg aria-hidden="true" data-icon="lucide:package" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg>
                                Ships in 3–7 days (in-stock)
                            </div>
</div>
</div>

<div className="col-span-1 md:col-span-7 h-[400px] md:h-full relative mt-8 md:mt-0">

<div className="w-full h-full rounded-[20px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-[#6B4F3A]/10 relative group">
<img alt="Handmade materials still life" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9bc8dbe-6999-4599-8ae5-d6d9edfe84c8_1600w.webp" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-3 w-[168px] h-[168px] rounded-[20px] border border-[#F3EFE6] shadow-lg overflow-hidden bg-[#F3EFE6] hidden lg:block hover:rotate-2 transition-transform duration-500">
<img alt="Glaze texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b035687-caaa-4eef-8a9a-2e9ebc7e347f_800w.webp"/>
</div>

<div className="absolute -bottom-6 right-6 md:bottom-12 md:right-6 w-[168px] h-[168px] rounded-[20px] border border-[#F3EFE6] shadow-lg overflow-hidden bg-[#F3EFE6] hidden lg:block hover:-rotate-2 transition-transform duration-500">
<img alt="Pottery hands" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e513bb7-ac74-4399-93ad-0465b0c2dac0_800w.webp" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/50 backdrop-blur-sm border border-[#6B4F3A]/10 rounded-[20px] p-6 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300">
<img alt="Workbench" className="w-[72px] h-[72px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07582bf8-325d-42d7-8944-67ea9ced639c_320w.webp"/>
<div className="">
<h3 className="text-lg font-semibold text-[#6B4F3A] mb-2 tracking-tight">Small-batch, never rushed</h3>
<p className="text-sm text-[#5A646A] leading-relaxed">Each drop is capped. When a series sells out, we rest the studio before making more.</p>
</div>
</div>

<div className="bg-white/50 backdrop-blur-sm border border-[#6B4F3A]/10 rounded-[20px] p-6 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300">
<img alt="Traceable materials" className="w-[72px] h-[72px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0c2506b-9dbb-4ba1-9e97-d6cefd598dd5_320w.webp"/>
<div className="">
<h3 className="text-lg font-semibold text-[#6B4F3A] mb-2 tracking-tight">Traceable materials</h3>
<p className="text-sm text-[#5A646A] leading-relaxed">Recycled sterling silver, natural linen, and low-impact packaging—documented by source and batch.</p>
</div>
</div>

<div className="bg-white/50 backdrop-blur-sm border border-[#6B4F3A]/10 rounded-[20px] p-6 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300">
<img alt="Made to be kept" className="w-[72px] h-[72px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4c3e001-09e9-4d92-a5f7-214072a1b607_320w.webp"/>
<div className="">
<h3 className="text-lg font-semibold text-[#6B4F3A] mb-2 tracking-tight">Made to be kept</h3>
<p className="text-sm text-[#5A646A] leading-relaxed">Repair-friendly designs, care guides, and finishes that age beautifully instead of peeling away.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="xl:px-0 grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-[1200px] mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12">

<div className="col-span-1 md:col-span-4 flex flex-col justify-start">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold text-[#6B4F3A] tracking-tight mb-6">Process Diary</h2>
<p className="text-[#5A646A] mb-8 leading-relaxed">We document the quiet parts: heat, patience, and the small decisions that make every piece singular.</p>
<a className="inline-flex items-center hover:text-[#B05B3D] transition-colors group text-sm font-semibold text-[#C56A4A]" href="/collections">
                            Explore the full diary
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-8 flex flex-col gap-6">

<div className="w-full h-[360px] rounded-[20px] overflow-hidden border border-[#6B4F3A]/10">
<img alt="Wood firing kiln" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fedf80c-eb76-4c16-9890-b0424e06731e_1600w.webp"/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="flex flex-col gap-3">
<div className="aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-gray-100 border border-[#6B4F3A]/10">
<img alt="Throwing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b18d0443-1c06-4449-b76a-9103e65c1233_800w.webp"/>
</div>
<h4 className="text-base font-medium text-[#6B4F3A]">Throwing</h4>
<p className="text-sm text-[#5A646A] leading-snug">Centering clay is the first promise: balance before beauty.</p>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-gray-100 border border-[#6B4F3A]/10">
<img alt="Wood Firing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a03ea204-5d49-4f85-a8d1-cd805d013305_800w.webp"/>
</div>
<h4 className="text-base font-medium text-[#6B4F3A]">Wood Firing</h4>
<p className="text-sm text-[#5A646A] leading-snug">Flame writes the final signature—unrepeatable, sometimes wild.</p>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-gray-100 border border-[#6B4F3A]/10">
<img alt="Glazing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd182ac5-eeb5-41cc-8b93-9560b156d6fd_800w.webp" style={{}}/>
</div>
<h4 className="text-base font-medium text-[#6B4F3A]">Glazing</h4>
<p className="text-sm text-[#5A646A] leading-snug">Minerals, ash, and gravity decide where color settles.</p>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-gray-100 border border-[#6B4F3A]/10">
<img alt="Linen Finishing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad439e23-f54c-4c07-a4f9-c30f20a102dc_800w.webp" style={{}}/>
</div>
<h4 className="text-base font-medium text-[#6B4F3A]">Linen Finishing</h4>
<p className="text-sm text-[#5A646A] leading-snug">Washed, pressed, and stitched to soften with time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#6B4F3A]/5 pt-24 pb-24">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">

<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-[#6B4F3A] tracking-tight">Collections</h2>
<button className="md:mt-0 hover:bg-white transition-colors text-sm font-medium text-[#6B4F3A] h-12 border-[#6B4F3A]/20 border rounded-[20px] mt-4 pr-6 pl-6 cursor-pointer" onclick="window.location.href='/collections'" role="button">
                        View all collections
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group flex flex-col">
<div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-6 relative">
<img alt="Winter Solstice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="group-hover:bg-[#6B4F3A]/5 transition-colors bg-[#6B4F3A]/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2897d75-6271-48ed-b6bf-3bcf1ee23d01_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<h3 className="text-xl font-semibold text-[#6B4F3A] mb-2 tracking-tight">Winter Solstice</h3>
<p className="text-sm text-[#5A646A] mb-6 min-h-[40px]">Deep ash-speckled glazes and soft linen—quiet pieces for long evenings.</p>

<div className="space-y-4">
<div className="flex items-center gap-4 group/item cursor-pointer">
<img alt="Mug" className="w-12 h-12 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62e043e7-9726-4afc-8004-1c810dc2200e_320w.png"/>
<div className="flex-1">
<div className="text-sm font-medium text-[#6B4F3A]">Solstice Speckle Mug</div>
<div className="text-xs text-[#5A646A]">$86</div>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-4 group/item cursor-pointer">
<img alt="Bowl" className="w-12 h-12 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3fc79ce-2113-49ac-8219-cd761957e204_320w.png"/>
<div className="flex-1">
<div className="text-sm font-medium text-[#6B4F3A]">Nightfall Serving Bowl</div>
<div className="text-xs text-[#5A646A]">$148</div>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-6 relative">
<img alt="Wood-Fire" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd182ac5-eeb5-41cc-8b93-9560b156d6fd_800w.webp"/>
<div className="group-hover:bg-[#6B4F3A]/5 transition-colors bg-[#6B4F3A]/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<h3 className="text-xl font-semibold text-[#6B4F3A] mb-2 tracking-tight">Wood-Fire Gifts</h3>
<p className="text-sm text-[#5A646A] mb-6 min-h-[40px]">Flame-kissed surfaces with unexpected blush and shadow—each one a one-off.</p>

<div className="space-y-4">
<div className="flex items-center gap-4 group/item cursor-pointer">
<img alt="Vase" className="w-12 h-12 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d787fb7-aab0-40b2-8c59-0a3f70364c50_320w.webp"/>
<div className="flex-1">
<div className="text-sm font-medium text-[#6B4F3A]">Ember Curve Vase</div>
<div className="text-xs text-[#5A646A]">$220</div>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-4 group/item cursor-pointer">
<img alt="Plates" className="w-12 h-12 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/303aea6f-7b6f-42e3-b02c-db10d0414583_320w.webp"/>
<div className="flex-1">
<div className="text-sm font-medium text-[#6B4F3A]">Coal Ridge Plate Set (2)</div>
<div className="text-xs text-[#5A646A]">$132</div>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-6 relative">
<img alt="Linen" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a80093f0-9343-41c8-bf96-e5c19d1fa135_800w.webp"/>
<div className="group-hover:bg-[#6B4F3A]/5 transition-colors bg-[#6B4F3A]/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<h3 className="text-xl font-semibold text-[#6B4F3A] mb-2 tracking-tight">Linen &amp; Alloy</h3>
<p className="text-sm text-[#5A646A] mb-6 min-h-[40px]">Natural linen and reclaimed silver—designed to wear in, not wear out.</p>

<div className="space-y-4">
<div className="flex items-center gap-4 group/item cursor-pointer">
<img alt="Apron" className="w-12 h-12 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2c75abd-8cf5-4f45-9f7c-35fd3afb29dd_320w.webp"/>
<div className="flex-1">
<div className="text-sm font-medium text-[#6B4F3A]">Workshop Linen Apron</div>
<div className="text-xs text-[#5A646A]">$92</div>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-4 group/item cursor-pointer">
<img alt="Ring" className="w-12 h-12 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ed75207-1565-4147-9d9e-4a0ec96e1c10_320w.png"/>
<div className="flex-1">
<div className="text-sm font-medium text-[#6B4F3A]">Reclaimed Silver Signet Ring</div>
<div className="text-xs text-[#5A646A]">$210</div>
</div>
<svg aria-hidden="true" className="" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#6B4F3A]/10">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="col-span-1 md:col-span-6 space-y-10">
<div className="space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold text-[#6B4F3A] tracking-tight">Request a Commission</h2>
<p className="text-[#5A646A] text-lg leading-relaxed text-balance">
                                Upload inspiration, choose materials, set a budget, and pick a delivery window. We reply within 48 hours with feasibility and timeline.
                            </p>
</div>

<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6B4F3A]/10 text-[#6B4F3A] flex items-center justify-center text-xs font-semibold mt-0.5">1</div>
<div className="text-sm text-[#5A646A] pt-0.5">Share inspiration (1–3 images)</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6B4F3A]/10 text-[#6B4F3A] flex items-center justify-center text-xs font-semibold mt-0.5">2</div>
<div className="text-sm text-[#5A646A] pt-0.5">Choose material: Clay / Linen / Reclaimed Silver</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6B4F3A]/10 text-[#6B4F3A] flex items-center justify-center text-xs font-semibold mt-0.5">3</div>
<div className="text-sm text-[#5A646A] pt-0.5">Set budget &amp; delivery window</div>
</div>
</div>

<div className="p-6 rounded-[20px] bg-white/50 border border-[#6B4F3A]/10 space-y-4">

<div className="h-[44px] rounded-lg border border-dashed border-[#6B4F3A]/30 flex items-center justify-center text-xs text-[#5A646A] bg-white cursor-pointer hover:bg-gray-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:upload-cloud" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
                                Inspiration images (JPG/PNG)
                            </div>

<div className="grid grid-cols-2 gap-4">
<div className="relative">
<div className="h-[44px] px-3 rounded-lg border border-[#6B4F3A]/20 bg-white flex items-center text-xs text-[#5A646A] justify-between">
                                        $150–$300
                                        <svg aria-hidden="true" className="" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="relative">
<div className="h-[44px] px-3 rounded-lg border border-[#6B4F3A]/20 bg-white flex items-center text-xs text-[#5A646A] justify-between">
                                        4–6 weeks
                                        <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4 pt-2">
<button className="hover:bg-[#B05B3D] transition-colors text-sm font-medium text-white bg-[#C56A4A] h-12 rounded-[20px] pr-8 pl-8 shadow-sm cursor-pointer" onclick="window.location.href='/commission'" role="button">
                                Start a Commission Request
                            </button>
<button className="h-12 px-6 text-[#6B4F3A] text-sm font-medium hover:underline decoration-[#6B4F3A]/30">
                                See past commissions
                            </button>
</div>
</div>

<div className="col-span-1 md:col-span-6 h-full min-h-[500px] relative">
<div className="w-full h-full rounded-[20px] overflow-hidden border border-[#6B4F3A]/10">
<img alt="Artisan portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c77f0f3c-86df-4114-82f9-8aadfd63fd1a_1600w.webp"/>
</div>

<div className="absolute bottom-8 -left-6 md:-left-12 w-[200px] h-[200px] bg-[#F3EFE6] rounded-[20px] shadow-xl border border-white p-2 rotate-2">
<div className="w-full h-full rounded-[14px] overflow-hidden">
<img alt="Moodboard" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8ec4aa6-65a1-4244-bc4d-7ea51ba31de5_800w.webp"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#6B4F3A] tracking-tight mb-4">Sustainability, made concrete</h2>
<p className="text-[#5A646A] leading-relaxed">
                        We list materials by source and batch, ship with low-impact packaging, and design pieces to be repaired—not replaced.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-[20px] overflow-hidden bg-white border border-[#6B4F3A]/10">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Materials" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79f88c5c-4753-475c-94b1-0c4ce8275d90_1600w.png"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-[#6B4F3A] mb-4 tracking-tight">Materials Transparency</h3>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-[#5A646A]">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Recycled sterling silver (re-melted in small batches)
                                </li>
<li className="flex items-start gap-2 text-sm text-[#5A646A]">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Natural linen (washed and softened without harsh finishes)
                                </li>
<li className="flex items-start gap-2 text-sm text-[#5A646A]">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Mineral glazes (small-run, mixed in-studio)
                                </li>
</ul>
</div>
</div>

<div className="group relative rounded-[20px] overflow-hidden bg-white border border-[#6B4F3A]/10">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Packaging" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62abec5c-1210-49b2-b737-fa68035e6358_1600w.png"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-[#6B4F3A] mb-4 tracking-tight">Low-Impact Packaging</h3>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-[#5A646A]">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Plastic-free mailers
                                </li>
<li className="flex items-start gap-2 text-sm text-[#5A646A]">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Kraft paper wrap + paper tape
                                </li>
<li className="flex items-start gap-2 text-sm text-[#5A646A]">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Reusable cotton dust bag for ceramics
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#6B4F3A]/5">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-[#6B4F3A] tracking-tight mb-2">What collectors say</h2>
<p className="text-[#5A646A]">Real commissions and studio drops—made to last, meant to be used daily.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">


<div className="col-span-1 md:col-span-4 bg-[#F3EFE6] p-6 rounded-[20px] border border-[#6B4F3A]/10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<img alt="Naomi" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a87e8a68-3ed2-418d-b898-91bb800511bb_320w.png"/>
<div className="">
<div className="text-sm font-semibold text-[#6B4F3A]">Naomi Carter</div>
<div className="text-xs text-[#5A646A]">Brooklyn, NY</div>
</div>
</div>
<p className="text-sm text-[#5A646A] italic mb-6 flex-grow">"The ash-speckled mug feels alive in my hands. You can see the time in it, and it makes slow mornings feel earned."</p>
<div className="pt-4 border-t border-[#6B4F3A]/10 text-xs font-medium text-[#C56A4A]">
                            Solstice Speckle Mug — $86
                        </div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#F3EFE6] p-6 rounded-[20px] border border-[#6B4F3A]/10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<img alt="Mateo" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffee9d40-8dc0-47a3-84af-a516dd79dbd8_800w.png"/>
<div className="">
<div className="text-sm font-semibold text-[#6B4F3A]">Mateo Alvarez</div>
<div className="text-xs text-[#5A646A]">Austin, TX</div>
</div>
</div>
<p className="text-sm text-[#5A646A] italic mb-6 flex-grow">"I commissioned a vase with a wood-fired finish. The glaze turned out wilder than expected—in the best way."</p>
<div className="pt-4 border-t border-[#6B4F3A]/10 text-xs font-medium text-[#C56A4A]">
                            Ember Curve Vase — $220
                        </div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#F3EFE6] p-6 rounded-[20px] border border-[#6B4F3A]/10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<img alt="Hannah" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62dc2abb-d1bd-490e-8ee2-e43a6c5a19b4_320w.png"/>
<div className="">
<div className="text-sm font-semibold text-[#6B4F3A]">Hannah Park</div>
<div className="text-xs text-[#5A646A]">Seattle, WA</div>
</div>
</div>
<p className="text-sm text-[#5A646A] italic mb-6 flex-grow">"The linen apron is soft but sturdy. It’s the kind of piece that gets better the more you cook and wash it."</p>
<div className="pt-4 border-t border-[#6B4F3A]/10 text-xs font-medium text-[#C56A4A]">
                            Workshop Linen Apron — $92
                        </div>
</div>

<div className="hidden md:block col-span-2"></div>

<div className="col-span-1 md:col-span-4 bg-[#F3EFE6] p-6 rounded-[20px] border border-[#6B4F3A]/10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<img alt="Grace" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96a6001e-face-4357-8700-cdfe922ef262_320w.png"/>
<div className="">
<div className="text-sm font-semibold text-[#6B4F3A]">Grace Thompson</div>
<div className="text-xs text-[#5A646A]">London, UK</div>
</div>
</div>
<p className="text-sm text-[#5A646A] italic mb-6 flex-grow">"Their materials list is unusually transparent. It gave me confidence to buy, and the bowl arrived perfectly packed—no plastic."</p>
<div className="pt-4 border-t border-[#6B4F3A]/10 text-xs font-medium text-[#C56A4A]">
                            Nightfall Serving Bowl — $148
                        </div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#F3EFE6] p-6 rounded-[20px] border border-[#6B4F3A]/10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center gap-4 mb-4">
<img alt="Ethan" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fb1661-c1c0-46a1-bd4d-cde481ff1ca7_320w.png"/>
<div className="">
<div className="text-sm font-semibold text-[#6B4F3A]">Ethan Nguyen</div>
<div className="text-xs text-[#5A646A]">San Francisco, CA</div>
</div>
</div>
<p className="text-sm text-[#5A646A] italic mb-6 flex-grow">"The signet ring has tiny imperfections that make it feel personal. It doesn’t look factory-perfect—and that’s why I love it."</p>
<div className="pt-4 border-t border-[#6B4F3A]/10 text-xs font-medium text-[#C56A4A]">
                            Reclaimed Silver Signet Ring — $210
                        </div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-12 border-t border-[#6B4F3A]/10 bg-white">
<div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="col-span-1 md:col-span-4 space-y-6">
<div className="flex items-center gap-2">
<svg fill="none" height="24" stroke="#6B4F3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 16v.01"></path>
<path d="M12 12v.01"></path>
</svg>
<span className="text-base font-semibold tracking-tight text-[#6B4F3A]">Walnut &amp; Wheel</span>
</div>
<p className="text-sm text-[#5A646A] leading-relaxed max-w-xs">Small-batch studio editions in ceramic, linen, and reclaimed silver.</p>
</div>

<div className="col-span-1 md:col-span-4">
<h4 className="text-sm font-semibold text-[#6B4F3A] mb-6">Support</h4>
<div className="flex flex-col gap-4">
<a className="text-sm text-[#5A646A] hover:text-[#C56A4A] transition-colors" href="#">Shipping &amp; Returns</a>
<a className="text-sm text-[#5A646A] hover:text-[#C56A4A] transition-colors" href="#">Care Guide</a>
<a className="text-sm text-[#5A646A] hover:text-[#C56A4A] transition-colors" href="#">Commission Policy</a>
<a className="text-sm text-[#5A646A] hover:text-[#C56A4A] transition-colors" href="#">Privacy Policy</a>
</div>
</div>

<div className="col-span-1 md:col-span-4">
<h4 className="text-sm font-semibold text-[#6B4F3A] mb-4">Studio Notes</h4>
<p className="text-sm text-[#5A646A] mb-6 leading-relaxed">One email every two weeks—new drops, process stories, and material updates.</p>
<form className="flex gap-2">
<input className="flex-1 h-[44px] px-4 rounded-lg bg-[#F3EFE6] border border-transparent focus:border-[#6B4F3A]/20 focus:outline-none text-sm text-[#6B4F3A] placeholder-[#5A646A]/50 transition-colors" placeholder="Email address" type="email"/>
<button className="hover:bg-[#594230] transition-colors text-sm font-medium text-[#F3EFE6] bg-[#6B4F3A] h-[44px] rounded-lg pr-6 pl-6" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-[#6B4F3A]/10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-[#5A646A]">© 2026 Walnut &amp; Wheel. All rights reserved.</div>
<div className="flex gap-6">
<a className="text-[#5A646A] hover:text-[#6B4F3A] transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-[#5A646A] hover:text-[#6B4F3A] transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
