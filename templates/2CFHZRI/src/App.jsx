import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons();

const sliderMin = document.getElementById('sliderMin');
const sliderMax = document.getElementById('sliderMax');
const minPrice  = document.getElementById('minPrice');
const maxPrice  = document.getElementById('maxPrice');
const sliderTrack = document.getElementById('sliderTrack');
const tipMin = document.getElementById('tipMin');
const tipMax = document.getElementById('tipMax');
const resultCount = document.getElementById('resultCount');
const MAX = 1000;

/* adjust positions */
function setPosition(){
  let minVal = +sliderMin.value;
  let maxVal = +sliderMax.value;

  if(minVal > maxVal-50){ minVal = maxVal-50; sliderMin.value = minVal; }
  if(maxVal < minVal+50){ maxVal = minVal+50; sliderMax.value = maxVal; }

  const pMin = (minVal / MAX) * 100;
  const pMax = (maxVal / MAX) * 100;

  sliderTrack.style.left  = pMin + '%';
  sliderTrack.style.width = (pMax - pMin) + '%';

  tipMin.style.left = pMin + '%';
  tipMax.style.left = pMax + '%';
  tipMin.textContent = '$' + minVal;
  tipMax.textContent = '$' + maxVal;

  minPrice.textContent = '$' + minVal;
  maxPrice.textContent = '$' + maxVal;

  const range = maxVal - minVal;
  resultCount.textContent = Math.max(15, Math.floor(150 - range/10));
}

['input','change'].forEach(e=>{
  sliderMin.addEventListener(e,setPosition);
  sliderMax.addEventListener(e,setPosition);
});

[sliderMin,sliderMax].forEach(el=>{
  el.addEventListener('pointerdown', ()=>{tipMin.style.opacity=1; tipMax.style.opacity=1;});
  el.addEventListener('pointerup',   ()=>{tipMin.style.opacity=0; tipMax.style.opacity=0;});
});

document.getElementById('resetBtn').addEventListener('click',()=>{
  sliderMin.value = 450; sliderMax.value = 850; setPosition();
});
document.getElementById('closeBtn').addEventListener('click',()=>{
  document.body.style.opacity='0'; setTimeout(()=>document.body.remove(),300);
});

setPosition();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-center bg-cover -z-10" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1660513924321-d9142645a41d?w=3840&amp'}}></div>

<div className="w-full max-w-4xl overflow-hidden opacity-0 animate-slide-up border rounded-2xl bg-black border-slate-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="flex items-center justify-between gap-4 bg-gradient-to-r from-slate-950 to-black border-b border-slate-900 pt-5 pr-6 pb-5 pl-6 opacity-0 animate-fade-in stagger-1">
<div className="flex items-center gap-3">
<span className="p-2 rounded-lg bg-slate-100"><i className="h-5 w-5 text-black" data-lucide="sliders-horizontal"></i></span>
<div>
<h1 className="text-lg font-semibold tracking-tight text-slate-100">Property Filters</h1>
<p className="text-sm text-slate-500">Refine your search results</p>
</div>
</div>
<button aria-label="Close" className="p-2 rounded-lg transition-colors hover:bg-slate-900 text-slate-600 hover:text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400" id="closeBtn">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>

<div className="border-b border-slate-900 bg-black opacity-0 animate-fade-in stagger-2">
<nav className="flex overflow-x-auto scrollbar-hide">
<button className="relative shrink-0 px-6 py-4 text-sm font-medium text-slate-100 bg-slate-950 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400">
<span className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="banknote"></i><span className="hidden sm:inline">Price Range</span><span className="sm:hidden">Price</span></span>
<span className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-cyan-400 to-green-400"></span>
</button>
<button className="shrink-0 px-6 py-4 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-950 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400">
<span className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="bed-double"></i><span className="hidden sm:inline">Rooms &amp; Beds</span><span className="sm:hidden">Rooms</span></span>
</button>
<button className="shrink-0 px-6 py-4 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-950 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400">
<span className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="building"></i><span className="hidden sm:inline">Property Type</span><span className="sm:hidden">Type</span></span>
</button>
<button className="shrink-0 px-6 py-4 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-950 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400">
<span className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="wifi"></i><span className="hidden sm:inline">Amenities</span><span className="sm:hidden">Features</span></span>
</button>
<button className="shrink-0 px-6 py-4 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-950 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400">
<span className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="calendar-check"></i><span className="hidden sm:inline">Booking Options</span><span className="sm:hidden">Booking</span></span>
</button>
</nav>
</div>

<div className="bg-slate-100 md:p-8 p-6 opacity-0 animate-fade-in stagger-3">

<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Price Range</h2>
<span className="flex items-center gap-2 text-sm text-slate-600"><i className="h-4 w-4" data-lucide="info"></i>Per night (USD)</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
<div className="flex items-center justify-between rounded-xl border px-5 py-4 transition bg-slate-200 border-slate-300 hover:border-slate-400 hover:ring-2 hover:ring-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400">
<div className="flex items-center gap-3">
<span className="p-2 rounded-lg bg-cyan-100"><i className="h-4 w-4 text-green-600" data-lucide="trending-down"></i></span>
<div>
<span className="text-sm font-medium text-slate-700">Minimum</span>
<p className="text-xs text-slate-500">Lowest price</p>
</div>
</div>
<span className="text-lg font-semibold text-slate-900" id="minPrice">$450</span>
</div>
<div className="flex items-center justify-between rounded-xl border px-5 py-4 transition bg-slate-200 border-slate-300 hover:border-slate-400 hover:ring-2 hover:ring-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400">
<div className="flex items-center gap-3">
<span className="p-2 rounded-lg bg-cyan-100"><i className="h-4 w-4 text-blue-600" data-lucide="trending-up"></i></span>
<div>
<span className="text-sm font-medium text-slate-700">Maximum</span>
<p className="text-xs text-slate-500">Highest price</p>
</div>
</div>
<span className="text-lg font-semibold text-slate-900" id="maxPrice">$850</span>
</div>
</div>

<div className="relative mb-14">
<div className="flex justify-between text-xs mb-3 select-none text-slate-500">
<span>$0</span><span>$250</span><span>$500</span><span>$750</span><span>$1000+</span>
</div>
<div className="relative h-6">

<div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-slate-300"></div>
<div className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" id="sliderTrack" style={{left: '45%', width: '40%'}}></div>

<input aria-label="Minimum price" className="absolute inset-0 z-20 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400" id="sliderMin" max="1000" min="0" step="10" type="range" value="450"/>
<input aria-label="Maximum price" className="absolute inset-0 z-20 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400" id="sliderMax" max="1000" min="0" step="10" type="range" value="850"/>

<span className="slider-tip absolute -top-8 px-2 py-1 text-xs font-medium border rounded-md shadow bg-slate-200 border-slate-300 text-slate-700 opacity-0" id="tipMin" style={{left: '45%'}}>$450</span>
<span className="slider-tip absolute -top-8 px-2 py-1 text-xs font-medium border rounded-md shadow bg-slate-200 border-slate-300 text-slate-700 opacity-0" id="tipMax" style={{left: '85%'}}>$850</span>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
<button className="p-3 rounded-lg border text-sm font-medium text-slate-700 border-slate-300 hover:border-cyan-600 hover:bg-slate-200 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400 flex items-center justify-center gap-1">
<i className="h-4 w-4 text-slate-600" data-lucide="dollar-sign"></i>$0 – $300
      </button>
<button className="p-3 rounded-lg border text-sm font-medium bg-slate-200 text-cyan-600 border-cyan-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400 flex items-center justify-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="dollar-sign"></i>$300 – $600
      </button>
<button className="p-3 rounded-lg border text-sm font-medium text-slate-700 border-slate-300 hover:border-cyan-600 hover:bg-slate-200 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400 flex items-center justify-center gap-1">
<i className="h-4 w-4 text-slate-600" data-lucide="dollar-sign"></i>$600 – $900
      </button>
<button className="p-3 rounded-lg border text-sm font-medium text-slate-700 border-slate-300 hover:border-cyan-600 hover:bg-slate-200 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400 flex items-center justify-center gap-1">
<i className="h-4 w-4 text-slate-600" data-lucide="dollar-sign"></i>$900+
      </button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-100 border-t border-slate-300 pt-6 pr-6 pb-6 pl-6 md:px-8 opacity-0 animate-fade-in stagger-4">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium border-slate-300 bg-slate-200 text-slate-700 hover:bg-slate-300 hover:border-slate-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400" id="resetBtn">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i>Reset
        </button>
<button className="flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium border-slate-300 bg-slate-200 text-slate-700 hover:bg-slate-300 hover:border-slate-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400">
<i className="h-4 w-4" data-lucide="bookmark"></i>Save
        </button>
</div>
<button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-300 to-green-300 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl text-black transition focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-black" id="submitBtn">
<i className="h-4 w-4" data-lucide="search"></i>
        Show <span className="text-black" id="resultCount">110</span> properties
      </button>
</div>
</div>


    </>
  );
}
