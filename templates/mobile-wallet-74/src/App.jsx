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
      

<main className="w-full max-w-md bg-slate-50 min-h-screen relative shadow-2xl overflow-hidden flex flex-col">

<header className="flex items-center justify-between pt-12 pb-4 px-6 absolute w-full top-0 z-30">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-100/50 text-slate-700 hover:text-purple-600 active:scale-95 transition-all">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-100/50">
<h1 className="text-base tracking-tight font-semibold text-purple-600">Add Address</h1>
</div>
<div className="w-10 h-10"></div> 
</header>

<section className="relative w-full h-64 bg-slate-200 shrink-0">
<img alt="Map view" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-8">
<div className="relative flex flex-col items-center">
<div className="absolute w-14 h-14 bg-purple-500/20 rounded-full animate-ping top-[-8px]"></div>
<div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-purple-600/40 z-10 border-2 border-white">
<iconify-icon className="text-xl" icon="solar:point-on-map-linear"></iconify-icon>
</div>
<div className="w-1.5 h-1.5 bg-slate-800 rounded-full mt-1.5 shadow-md"></div>
</div>
</div>

<div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-50 to-transparent"></div>
</section>

<section className="px-6 flex flex-col gap-4 pb-36 overflow-y-auto -mt-2 relative z-20">

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">Full Name</label>
<div className="bg-white rounded-xl shadow-sm shadow-slate-200/50 border border-slate-100 px-4 py-3.5 flex items-center gap-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-50 transition-all">
<iconify-icon className="text-slate-400 text-lg" icon="solar:user-rounded-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-300 placeholder:font-normal" placeholder="Sarah Amina" type="text"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">Phone Number</label>
<div className="bg-white rounded-xl shadow-sm shadow-slate-200/50 border border-slate-100 px-4 py-3.5 flex items-center gap-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-50 transition-all">
<div className="flex items-center gap-1.5 shrink-0">
<span className="text-base leading-none">🇨🇲</span>
<span className="text-sm font-medium text-slate-600">+237</span>
<iconify-icon className="text-slate-400 text-xs ml-0.5" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="w-px h-5 bg-slate-200 mx-1"></div>
<input className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-300 placeholder:font-normal" placeholder="6 00 00 00 00" type="tel"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">Street Address / Landmark</label>
<div className="bg-white rounded-xl shadow-sm shadow-slate-200/50 border border-slate-100 px-4 py-3.5 flex items-center gap-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-50 transition-all">
<iconify-icon className="text-slate-400 text-lg" icon="solar:routing-2-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-300 placeholder:font-normal" placeholder="e.g. Opposite Pharmacie Deido" type="text"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">City / Area</label>
<div className="bg-white rounded-xl shadow-sm shadow-slate-200/50 border border-slate-100 px-4 py-3.5 flex items-center gap-3 relative focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-50 transition-all">
<iconify-icon className="text-slate-400 text-lg z-10" icon="solar:city-linear"></iconify-icon>
<select className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none appearance-none cursor-pointer z-10 relative" required="">
<option disabled="" hidden="" selected="" value="">Select City</option>
<option className="text-slate-800" value="douala">Douala</option>
<option className="text-slate-800" value="yaounde">Yaoundé</option>
<option className="text-slate-800" value="bafoussam">Bafoussam</option>
</select>
<iconify-icon className="text-slate-400 absolute right-4 z-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-2.5 mt-2">
<label className="text-xs font-medium text-slate-500 ml-1">Address Type</label>
<div className="flex items-center gap-3">

<button className="flex-1 py-3 bg-purple-600 text-white rounded-xl text-xs font-medium flex items-center justify-center gap-2 shadow-sm shadow-purple-200 active:scale-95 transition-all">
<iconify-icon className="text-sm" icon="solar:home-2-linear"></iconify-icon> Home
                    </button>

<button className="flex-1 py-3 bg-white text-slate-600 border border-slate-200 rounded-xl text-xs font-medium flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
<iconify-icon className="text-sm" icon="solar:buildings-2-linear"></iconify-icon> Work
                    </button>

<button className="flex-1 py-3 bg-white text-slate-600 border border-slate-200 rounded-xl text-xs font-medium flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Other
                    </button>
</div>
</div>

<div className="flex items-center justify-between mt-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm shadow-slate-200/50">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-800">Set as Default Address</span>
<span className="text-xs text-slate-400 mt-0.5">Use this for future deliveries</span>
</div>

<button className="w-12 h-7 bg-purple-600 rounded-full relative transition-colors focus:outline-none flex items-center px-1 shrink-0">
<div className="w-5 h-5 bg-white rounded-full shadow-sm transform translate-x-5 transition-transform duration-300 ease-out"></div>
</button>
</div>
</section>

<div className="fixed bottom-0 w-full max-w-md bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent pt-12 pb-8 px-6 z-40 pointer-events-none">

<button className="pointer-events-auto relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 py-4 shadow-[0_8px_20px_-6px_rgba(249,115,22,0.5)] active:scale-[0.98] transition-all group border border-orange-400/50">

<div className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
<div className="relative z-10 flex items-center justify-center gap-2">
<iconify-icon className="text-white text-xl" icon="solar:diskette-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide">Save Address</span>
</div>
</button>
</div>
</main>

    </>
  );
}
