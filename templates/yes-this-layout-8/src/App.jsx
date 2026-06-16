import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl overflow-hidden relative pb-24">

<header className="flex justify-between items-center px-6 pt-6 pb-4 bg-white sticky top-0 z-20 border-b border-gray-100">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="p-2 bg-gray-50 rounded-full text-gray-600 group-hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Current Location</p>
<div className="flex items-center gap-1">
<h2 className="text-sm font-medium text-gray-800 tracking-tight">Kirti Nagar, New Delhi</h2>
<i className="w-3 h-3 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="relative">
<div className="w-9 h-9 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    JD
                </div>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
</button>
</header>

<section className="px-6 py-6">
<h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                What are you driving today?
            </h1>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="search"></i>
</div>
<input className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all shadow-sm" placeholder="Search 'BMW X5' or 'Oil Change'" type="text"/>
</div>
</section>


<section className="px-6 mb-8">
<div className="flex justify-between items-end mb-4">
<h3 className="text-lg font-medium tracking-tight text-gray-900">Browse by type</h3>
</div>
<div className="grid grid-cols-4 gap-3">
<button className="flex flex-col items-center gap-2 group">
<div className="w-full aspect-square bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-100 transition-all">
<i className="w-6 h-6 text-gray-600" data-lucide="car-front"></i>
</div>
<span className="text-xs font-medium text-gray-500">Sedan</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-full aspect-square bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-100 transition-all">
<i className="w-6 h-6 text-gray-600" data-lucide="truck"></i>
</div>
<span className="text-xs font-medium text-gray-500">SUV</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-full aspect-square bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-100 transition-all">
<i className="w-6 h-6 text-gray-600" data-lucide="zap"></i>
</div>
<span className="text-xs font-medium text-gray-500">EV</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-full aspect-square bg-white border border-dashed border-gray-300 rounded-2xl flex items-center justify-center group-hover:border-gray-400 transition-all">
<i className="w-6 h-6 text-gray-400" data-lucide="plus"></i>
</div>
<span className="text-xs font-medium text-gray-500">More</span>
</button>
</div>
</section>

<section className="px-6 mb-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium tracking-tight text-gray-900">Popular Services</h3>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">View all</a>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between h-32">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
<i className="w-5 h-5" data-lucide="wrench"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Periodic Service</h4>
<p className="text-sm text-gray-500 mt-1">Starts ₹2,999</p>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between h-32">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-2">
<i className="w-5 h-5" data-lucide="snowflake"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">AC Service</h4>
<p className="text-sm text-gray-500 mt-1">Starts ₹1,499</p>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between h-32">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 mb-2">
<i className="w-5 h-5" data-lucide="spray-can"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Denting &amp; Paint</h4>
<p className="text-sm text-gray-500 mt-1">Warranty included</p>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between h-32">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-2">
<i className="w-5 h-5" data-lucide="disc"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Tyres &amp; Wheels</h4>
<p className="text-sm text-gray-500 mt-1">Alignment free</p>
</div>
</div>
</div>
</section>

<section className="py-6 border-t border-gray-100 bg-gray-50/50">
<div className="px-6 mb-4 flex justify-between items-center">
<h3 className="text-lg font-medium tracking-tight text-gray-900">Select Manufacturer</h3>
</div>

<div className="flex overflow-x-auto gap-4 px-6 hide-scroll pb-2">

<button className="flex-shrink-0 flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-lg border-2 border-white">
<span className="text-lg font-semibold tracking-tighter">BMW</span>
</div>
<span className="text-sm font-medium text-zinc-900">BMW</span>
</button>

<button className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<span className="text-base font-semibold tracking-tighter text-gray-800">AUDI</span>
</div>
<span className="text-sm font-medium text-gray-600">Audi</span>
</button>
<button className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<span className="text-xl font-bold tracking-tighter text-gray-800 italic">H</span>
</div>
<span className="text-sm font-medium text-gray-600">Honda</span>
</button>
<button className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<span className="text-base font-semibold tracking-tighter text-gray-800">TATA</span>
</div>
<span className="text-sm font-medium text-gray-600">Tata</span>
</button>
<button className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<span className="text-lg font-serif font-semibold tracking-tighter text-gray-800">MB</span>
</div>
<span className="text-sm font-medium text-gray-600">Merc</span>
</button>
</div>
</section>

<section className="px-6 py-6">
<div className="rounded-2xl bg-zinc-900 p-6 relative overflow-hidden text-white flex justify-between items-center shadow-lg">
<div className="relative z-10 max-w-[60%]">
<div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] font-medium tracking-wide uppercase mb-2">Miles Membership</div>
<h3 className="text-xl font-medium tracking-tight mb-1">Save ₹30,000 /yr</h3>
<p className="text-sm text-gray-300 mb-4">Free roadside assistance &amp; zero labor charges.</p>
<button className="text-sm font-medium bg-white text-zinc-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                        Explore Plan
                    </button>
</div>

<div className="absolute -right-10 -bottom-20 w-48 h-48 bg-zinc-800 rounded-full blur-2xl opacity-50"></div>
<div className="relative z-10 p-2 bg-white/10 rounded-full">
<i className="w-8 h-8 text-white" data-lucide="shield-check"></i>
</div>
</div>
</section>

<nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50">
<button className="flex flex-col items-center gap-1 text-zinc-900">
<i className="w-6 h-6 fill-zinc-900/10" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-zinc-900 transition-colors">
<i className="w-6 h-6" data-lucide="package"></i>
<span className="text-[10px] font-medium">Orders</span>
</button>

<button className="flex flex-col items-center justify-center -mt-8">
<div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 ring-4 ring-white">
<i className="w-6 h-6 text-white" data-lucide="phone"></i>
</div>
<span className="text-[10px] font-medium text-red-600 mt-1">SOS</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-zinc-900 transition-colors">
<i className="w-6 h-6" data-lucide="help-circle"></i>
<span className="text-[10px] font-medium">Help</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-zinc-900 transition-colors">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[10px] font-medium">Account</span>
</button>
</nav>
</div>


    </>
  );
}
