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
      

<div className="bg-[#F2F6F3] w-full max-w-[1600px] h-[90vh] rounded-[40px] shadow-2xl flex overflow-hidden relative ring-8 ring-white/20">

<aside className="flex flex-col w-24 pt-8 pb-8 items-center">

<div className="mb-4">
<div className="grid grid-cols-2 gap-1">
<div className="w-3 h-3 bg-black rounded-full"></div>
<div className="w-3 h-3 bg-black rounded-full"></div>
<div className="w-3 h-3 bg-black rounded-full"></div>
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
</div>

<nav className="flex flex-col gap-6 items-center w-full">

<div className="relative">

<div className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-1 h-8 bg-[#10b880] rounded-r-full"></div>
<button className="text-white bg-[#10b880] rounded-full px-3 py-3 shadow-lg ring-4 ring-[#10b880]/20 transition">
<i className="w-6 h-6" data-lucide="home"></i>
</button>
</div>
<div className="relative group flex justify-center">
<button className="hover:text-gray-600 hover:bg-white/50 transition text-gray-400 rounded-full pt-2 pr-2 pb-2 pl-2" onclick="document.getElementById('addPropertyModal').classList.remove('hidden')">
<div className="border-2 border-current rounded-full p-0.5">
<svg className="lucide lucide-plus w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path className="" d="M5 12h14"></path></svg>
</div>
</button>

<div aria-labelledby="modal-title" aria-modal="true" className="hidden relative z-[9999]" id="addPropertyModal" role="dialog">

<div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity"></div>

<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-[32px] bg-white text-left shadow-2xl transition-all w-full max-w-2xl border border-white/20">

<div className="px-8 pt-8 pb-6 flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#10b880]/10 flex items-center justify-center text-[#10b880]">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18"></path><path d="M5 21V7l8-4 8 4v14"></path><path d="M17 21v-8H7v8"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Add New Property</h3>
<p className="text-sm text-gray-500 mt-1">Fill in the details to list a new property.</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition" onclick="document.getElementById('addPropertyModal').classList.add('hidden')">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="px-8 pb-8 space-y-6">

<div className="group relative w-full h-48 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#10b880] bg-gray-50 transition-colors cursor-pointer flex flex-col items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-[#10b880] group-hover:scale-110 transition-all mb-3">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<p className="text-sm font-medium text-gray-700">Upload property image</p>
<p className="text-xs text-gray-400 mt-1">Support SVG, PNG, JPG (max 800x400)</p>
</div>

<div className="grid grid-cols-2 gap-5">
<div className="col-span-2">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Property Name</label>
<input className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#10b880] focus:ring-4 focus:ring-[#10b880]/10 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 transition-all outline-none" placeholder="e.g. Modern Sunset Villa" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Price Estimate</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
<input className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#10b880] focus:ring-4 focus:ring-[#10b880]/10 rounded-xl pl-8 pr-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 transition-all outline-none" placeholder="0.00" type="text"/>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Property Type</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#10b880] focus:ring-4 focus:ring-[#10b880]/10 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 appearance-none outline-none cursor-pointer transition-all">
<option>Residential House</option>
<option>Apartment Unit</option>
<option>Commercial Space</option>
<option>Industrial Loft</option>
</select>
<svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="col-span-2">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Location Address</label>
<div className="relative">
<svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-[#10b880] focus:ring-4 focus:ring-[#10b880]/10 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 transition-all outline-none" placeholder="Search address..." type="text"/>
</div>
</div>

<div className="col-span-2 grid grid-cols-2 gap-4 pt-2">
<div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-600">
<svg className="w-4 h-4 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path><path d="M5 20h14"></path><path d="m3 10 9-8 9 8"></path></svg>
<span className="text-sm font-medium">Beds</span>
</div>
<div className="flex items-center gap-3">
<button className="w-6 h-6 rounded-md bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-[#10b880] transition"><svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></button>
<span className="text-sm font-semibold text-gray-900">3</span>
<button className="w-6 h-6 rounded-md bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-[#10b880] transition"><svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-600">
<svg className="w-4 h-4 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1L2 5l2 10h3"></path><path d="m9 6 10 10h3"></path><path d="m9 6 3 3"></path><path d="m21 16-2 3h4"></path><line x1="17" x2="20" y1="21" y2="16"></line></svg>
<span className="text-sm font-medium">Baths</span>
</div>
<div className="flex items-center gap-3">
<button className="w-6 h-6 rounded-md bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-[#10b880] transition"><svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></button>
<span className="text-sm font-semibold text-gray-900">2</span>
<button className="w-6 h-6 rounded-md bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-[#10b880] transition"><svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
</div>
</div>
</div>

<div className="flex gap-3 pt-4">
<button className="flex-1 bg-white border border-gray-200 text-gray-700 font-medium py-3.5 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition shadow-sm" onclick="document.getElementById('addPropertyModal').classList.add('hidden')">Cancel</button>
<button className="flex-1 bg-[#10b880] text-white font-medium py-3.5 rounded-xl hover:bg-[#0e9f6e] transition shadow-lg shadow-[#10b880]/25 flex items-center justify-center gap-2" onclick="document.getElementById('addPropertyModal').classList.add('hidden')">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5l10 -10"></path></svg>
                                Create Property
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<button className="transition group text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-full pt-3 pr-3 pb-3 pl-3 relative" onclick="window.open(window.location.href, '_blank')">
<svg className="lucide lucide-monitor w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(75, 85, 99)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</button>
<button className="hover:text-gray-600 hover:bg-white/50 transition text-gray-400 rounded-full pt-2 pr-2 pb-2 pl-2">
<i className="w-6 h-6" data-lucide="file-text"></i>
</button>
</nav>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="ticket"></i>
</button>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="settings"></i>
</button>
<div className="flex text-lg font-bold text-white bg-[#10b880] w-10 h-10 rounded-full items-center justify-center">A</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden mt-2 mb-2 pt-4 pr-4 pb-4 pl-0">

<div className="relative w-full h-[55%] rounded-[32px] overflow-hidden group shadow-sm">

<img alt="Map" className="bg-[#000000] opacity-100 w-full h-full grayscale" onerror="this.src='https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop'; this.style.opacity='0.6';" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>


<div className="flex flex-wrap gap-3 absolute top-4 right-4 left-4 gap-x-3 gap-y-3 items-center">

<div className="bg-white rounded-xl shadow-sm px-4 py-2.5 flex items-center gap-3 w-80">
<i className="w-5 h-5 text-gray-400" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-gray-700 w-full placeholder-gray-400 text-sm font-medium" placeholder="Search" type="text"/>
</div>

<div className="relative flex cursor-pointer hover:bg-gray-50 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center" onclick="this.querySelector('.dropdown-menu').classList.toggle('hidden')">
<span className="text-sm font-medium text-gray-700">PropertyType</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="dropdown-menu hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">House</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Apartment</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Condo</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Villa</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Townhouse</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
<span className="text-sm font-medium text-gray-700">State</span>
<i className="w-5 h-5 text-gray-400" data-lucide="search"></i>
</div>
<div className="relative flex gap-2 cursor-pointer hover:bg-gray-50 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center" onclick="this.querySelector('.dropdown-menu').classList.toggle('hidden')">
<span className="text-sm font-medium text-gray-700">City</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="dropdown-menu hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Los Angeles</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">San Francisco</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">San Diego</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Costa Mesa</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Tustin</div>
</div>
</div>
<div className="relative flex cursor-pointer hover:bg-gray-50 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center" onclick="this.querySelector('.dropdown-menu').classList.toggle('hidden')">
<span className="text-sm font-medium text-gray-700">District</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="dropdown-menu hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Downtown</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Midtown</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Uptown</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Westside</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Eastside</div>
</div>
</div>
<div className="relative flex cursor-pointer hover:bg-gray-50 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center" onclick="this.querySelector('.dropdown-menu').classList.toggle('hidden')">
<span className="text-sm font-medium text-gray-700">Commercial</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="dropdown-menu hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Commercial</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Residential</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Industrial</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Mixed Use</div>
<div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Land</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 z-10">
<div className="flex flex-col min-w-[90px] text-white bg-[#10B880] rounded-l-2xl pt-4 pr-5 pb-4 pl-5 shadow-xl items-center justify-center">
<span className="text-2xl font-medium tracking-tight">12</span>
<span className="text-[10px] text-neutral-50 mt-0.5">House Number</span>
</div>
<div className="flex flex-col min-w-[140px] text-white bg-[#10B880] rounded-md px-6 py-4 shadow-xl items-center justify-center">
<span className="text-2xl font-medium tracking-tight">$954.380</span>
<span className="text-[10px] text-neutral-50 mt-0.5">Estimate House Price</span>
</div>
<div className="flex flex-col min-w-[90px] text-white bg-[#10B880] rounded-r-2xl px-5 py-4 shadow-xl items-center justify-center">
<span className="text-2xl font-medium tracking-tight">3Y</span>
<span className="text-[10px] text-neutral-50 mt-0.5">Average Age</span>
</div>

<div className="-bottom-2 -translate-x-1/2 bg-[#10B880] w-4 h-4 absolute left-1/2 rotate-45"></div>
</div>

<div className="absolute top-1/3 left-1/4">
<div className="relative flex items-center justify-center">
<div className="animate-ping bg-[#10b880]/50 opacity-50 w-8 h-8 rounded-full absolute"></div>
<div className="bg-[#10b880] w-4 h-4 border-white border-2 rounded-full relative shadow-md"></div>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4">
<div className="relative flex items-center justify-center">
<div className="bg-[#10b880]/50 opacity-40 w-12 h-12 rounded-full absolute"></div>
<div className="bg-[#10b880] w-4 h-4 border-white border-2 rounded-full relative shadow-md"></div>
</div>
</div>
<div className="absolute top-20 right-20">
<div className="bg-[#10b880] w-3 h-3 border-white border rounded-full relative"></div>
</div>

<div className="absolute bottom-6 right-6">
<button className="flex hover:bg-gray-900 transition text-white bg-[#10b880] w-12 h-12 rounded-full shadow-lg items-center justify-center">
<i className="w-6 h-6" data-lucide="help-circle"></i>
</button>
</div>

<span className="absolute top-[40%] right-[20%] text-gray-500 font-medium text-xs tracking-wide uppercase mix-blend-multiply">Tustin</span>
</div>

<div className="flex-1 grid grid-cols-12 w-full h-[42%] mt-4 mr-0 mb-0">

<div className="col-span-12 flex flex-col lg:col-span-5 bg-white border-neutral-400/20 border-2 rounded-[32px] mr-4 pt-6 pr-6 pb-6 pl-6 shadow-sm justify-between">
<div className="">
<div className="flex mb-2 items-start justify-between">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Location</h2>
<i className="w-5 h-5 text-orange-400 fill-orange-400" data-lucide="heart"></i>
</div>
<p className="text-gray-800 font-medium text-sm">789 Costa Mesa, Los Angeles, CA 90210</p>
<div className="flex justify-between items-center mt-2">
<p className="text-gray-500 text-xs">HO-1, HO-3, HO-7</p>
<p className="text-gray-400 text-xs">31 Jan 2025</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-4">

<div className="bg-[#F6F8F7] rounded-2xl p-4 flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<div className="">
<p className="text-xs text-gray-500 font-medium mb-1">Building Age</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">5Y</p>
</div>
</div>

<div className="bg-[#F6F8F7] rounded-2xl p-4 flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
<i className="w-4 h-4" data-lucide="eye"></i>
</div>
<div className="">
<p className="text-xs text-gray-500 font-medium mb-1">Daily Visitors</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">10,742</p>
</div>
</div>

<div className="bg-[#F6F8F7] rounded-2xl p-4 flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
<i className="w-4 h-4" data-lucide="thermometer"></i>
</div>
<div className="">
<p className="text-xs text-gray-500 font-medium mb-1">Temperature</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">29°F</p>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3 bg-white rounded-[32px] overflow-hidden shadow-sm relative group">
<img alt="Modern House" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full">
<img alt="Modern Flat Interior" className="w-full h-full object-cover border-neutral-400/20 mr-0" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2160&amp;q=80"/>
</div>
</div>

<div className="col-span-12 flex flex-col lg:col-span-4 bg-white border-neutral-400/20 border-2 rounded-[32px] ml-4 pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Tenants</h2>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=9"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3"/>
</div>
</div>
<p className="text-gray-500 text-sm leading-relaxed max-w-[80%]">
                        Join our growing community of active members.
                    </p>

<div className="flex overflow-hidden h-32 mt-auto relative items-end justify-center">


<div className="absolute bottom-0 left-0 right-0 text-center mb-1">
<div className="text-3xl font-medium text-gray-900 tracking-tight">8,5k</div>
<div className="text-xs text-gray-500">members</div>
</div><svg className="w-[360px] h-[128px]" data-icon-replaced="true" strokeWidth="2" style={{width: '360px', height: '128px', color: 'rgb(16, 184, 128)'}} viewbox="0 0 100 50">

<path className="" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f3f4f6" strokeLinecap="round" strokeWidth="10"></path>

<path className="" d="M 10 50 A 40 40 0 0 1 75 25" fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="10"></path>
</svg>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
