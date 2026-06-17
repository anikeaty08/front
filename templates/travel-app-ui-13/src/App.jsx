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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="w-full max-w-[375px] h-[100dvh] sm:h-[812px] bg-[#FFFFFF] sm:rounded-[32px] sm:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col border border-[#E0E0E0]/50">

<input __gchrome_uniqueid="1" checked="" className="peer/home hidden" id="nav-home" name="screen" type="radio"/>
<input __gchrome_uniqueid="2" className="peer/explore hidden" id="nav-explore" name="screen" type="radio"/>
<input __gchrome_uniqueid="3" className="peer/trips hidden" id="nav-trips" name="screen" type="radio"/>
<input __gchrome_uniqueid="4" className="peer/wishlist hidden" id="nav-wishlist" name="screen" type="radio"/>
<input __gchrome_uniqueid="5" className="peer/profile hidden" id="nav-profile" name="screen" type="radio"/>
<input __gchrome_uniqueid="6" className="peer/details hidden" id="nav-details" name="screen" type="radio"/>
<input __gchrome_uniqueid="7" className="peer/booking hidden" id="nav-booking" name="screen" type="radio"/>

<div className="absolute inset-0 overflow-y-auto overflow-x-hidden pb-24 hidden peer-checked/home:block bg-[#F9FAFB]" style={{scrollbarWidth: 'none'}}>
<header className="flex items-center justify-between p-4 pt-8 sm:pt-6">
<div className="flex flex-col gap-0.5">
<h1 className="text-xl font-medium tracking-tight text-[#1D1D1D] tracking-tighter uppercase">Explore BD</h1>
<span className="text-xs font-light text-[#4F4F4F] flex items-center gap-1">
<iconify-icon className="text-[#0CAF60]" icon="solar:map-point-linear"></iconify-icon>
                        Dhaka, Bangladesh
                    </span>
</div>
<label className="w-10 h-10 rounded-full bg-[#FFFFFF] overflow-hidden border border-[#E0E0E0] shadow-sm active:scale-95 transition-transform cursor-pointer" htmlFor="nav-profile">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</label>
</header>
<div className="px-4 pb-5">
<div className="relative w-full h-12 bg-[#FFFFFF] rounded-[16px] border border-[#E0E0E0]/60 flex items-center px-4 shadow-sm focus-within:border-[#0CAF60] focus-within:shadow-[0_0_0_4px_rgba(12,175,96,0.1)] transition-all duration-300">
<iconify-icon className="text-xl text-[#4F4F4F]" icon="solar:magnifer-linear"></iconify-icon>
<input __gchrome_uniqueid="8" className="w-full h-full bg-transparent border-none outline-none pl-3 pr-2 text-sm text-[#1D1D1D] placeholder:text-[#4F4F4F] placeholder:font-light" placeholder="Where do you want to go?" type="text"/>
<div className="w-px h-5 bg-[#E0E0E0] mx-2"></div>
<button className="text-[#4F4F4F] hover:text-[#0CAF60] transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:tuning-linear"></iconify-icon>
</button>
</div>
</div>
<div className="pl-4 pb-6 overflow-x-auto" style={{scrollbarWidth: 'none'}}>
<div className="flex gap-3 w-max pr-4 gap-x-2 gap-y-2">
<button className="flex gap-2 text-sm font-medium text-[#FFFFFF] bg-[#0CAF60] h-10 rounded-[12px] pr-4 pl-4 shadow-[0_4px_12px_rgba(12,175,96,0.2)] gap-x-2 gap-y-2 items-center justify-center">
                        All
                    </button>
<button className="flex gap-2 text-sm font-medium text-white h-10 border-transparent border rounded-[12px] pr-4 pl-4 gap-x-2 gap-y-2 items-center justify-center relative overflow-hidden shadow-sm" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(\'https: //images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp', q=80'), url('https: '//images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp', backgroundSize: 'cover, cover, cover', backgroundPosition: 'center, center, center', backgroundBlendMode: 'normal, overlay, normal'}}>
                        Beaches
                    </button>
<button className="flex gap-2 text-sm font-medium text-[#4F4F4F] bg-[#FFFFFF] h-10 border-[#E0E0E0] border rounded-[12px] pr-4 pl-4 gap-x-2 gap-y-2 items-center justify-center">
                        Hills
                    </button>
<button className="flex items-center justify-center gap-2 bg-[#FFFFFF] border border-[#E0E0E0] text-[#4F4F4F] px-4 h-10 rounded-[12px] text-sm font-medium">
                        Nature
                    </button>
<button className="flex items-center justify-center gap-2 bg-[#FFFFFF] border border-[#E0E0E0] text-[#4F4F4F] px-4 h-10 rounded-[12px] text-sm font-medium">
                        Historical
                    </button>
</div>
</div>
<div className="px-4 pb-8">
<label className="block relative w-full h-[180px] rounded-[16px] overflow-hidden group cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.08)]" htmlFor="nav-details">
<img alt="Sajek Valley" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8786b5be-2939-4eea-89df-2a50df73e1b0_800w.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D]/90 via-[#1D1D1D]/30 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="bg-[#F2994A] text-[#FFFFFF] text-xs font-medium px-2 py-1 rounded-[6px] mb-2 inline-block">Featured</span>
<h2 className="text-xl font-medium tracking-tight text-[#FFFFFF] mb-0.5">Sajek Valley</h2>
<p className="text-xs text-[#E0E0E0] font-light">Explore the clouds of Rangamati</p>
</div>
</label>
</div>
<div className="flex pr-4 pb-4 pl-4 items-end justify-between">
<h2 className="text-lg font-medium tracking-tight text-[#1D1D1D]">Popular Destinations</h2>
<button className="text-xs font-medium text-[#2D9CDB] pb-0.5">See all</button>
</div>
<div className="pl-4 overflow-x-auto" style={{scrollbarWidth: 'none'}}>
<div className="flex gap-4 pr-4 w-max">
<label className="w-[220px] bg-[#FFFFFF] border border-[#E0E0E0]/60 rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block cursor-pointer" htmlFor="nav-details">
<div className="h-[130px] relative overflow-hidden">
<img alt="Cox's Bazar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f75b043e-9dd6-451b-b7b7-b59f7190a6f0_800w.jpg"/>
<div className="absolute top-3 right-3 w-8 h-8 bg-[#FFFFFF]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#FFFFFF]">
<svg className="text-lg" data-icon-set="solar" data-solar="heart-linear" height="18" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" fill="currentColor"></path></svg>
</div>
</div>
<div className="p-3.5">
<div className="flex justify-between items-start mb-1.5">
<h3 className="text-sm font-medium tracking-tight text-[#1D1D1D]">Cox's Bazar Beach</h3>
<div className="flex items-center gap-1 bg-[#F9FAFB] px-1.5 py-0.5 rounded-[6px]">
<iconify-icon className="text-[#F2994A] text-xs" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium text-[#1D1D1D]">4.8</span>
</div>
</div>
<div className="flex items-center gap-1 mb-3.5 text-[#4F4F4F]">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-light">Chattogram</span>
</div>
<div className="flex justify-between items-center border-t border-[#E0E0E0]/40 pt-3">
<div className="flex items-baseline gap-0.5">
<span className="text-[#0CAF60] text-sm font-medium tracking-tight">$120</span>
<span className="text-xs font-light text-[#4F4F4F]">/trip</span>
</div>
</div>
</div>
</label>
<label className="w-[220px] bg-[#FFFFFF] border border-[#E0E0E0]/60 rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block cursor-pointer" htmlFor="nav-details">
<div className="h-[130px] relative overflow-hidden">
<img alt="Sundarbans" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/118a9407-c4d6-4e0a-ac9e-77ee1111d9ed/800w.png"/>
<div className="absolute top-3 right-3 w-8 h-8 bg-[#FFFFFF]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#FFFFFF]">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="p-3.5">
<div className="flex justify-between items-start mb-1.5">
<h3 className="text-sm font-medium tracking-tight text-[#1D1D1D]">Sundarbans Safari</h3>
<div className="flex items-center gap-1 bg-[#F9FAFB] px-1.5 py-0.5 rounded-[6px]">
<iconify-icon className="text-[#F2994A] text-xs" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium text-[#1D1D1D]">4.9</span>
</div>
</div>
<div className="flex items-center gap-1 mb-3.5 text-[#4F4F4F]">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-light">Khulna</span>
</div>
<div className="flex justify-between items-center border-t border-[#E0E0E0]/40 pt-3">
<div className="flex items-baseline gap-0.5">
<span className="text-[#0CAF60] text-sm font-medium tracking-tight">$85</span>
<span className="text-xs font-light text-[#4F4F4F]">/trip</span>
</div>
</div>
</div>
</label>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto pb-24 hidden peer-checked/explore:block bg-[#F9FAFB]" style={{scrollbarWidth: 'none'}}>
<div className="px-4 pt-8 pb-4 flex justify-between items-center sticky top-0 bg-[#F9FAFB]/90 backdrop-blur-md z-10">
<h2 className="text-xl font-medium tracking-tight">Explore</h2>
<div className="bg-[#E0E0E0]/40 p-1 rounded-[12px] flex">
<button className="bg-[#FFFFFF] shadow-sm rounded-[8px] px-4 py-1.5 text-xs font-medium text-[#1D1D1D]">List</button>
<button className="px-4 py-1.5 text-xs font-medium text-[#4F4F4F]">Map</button>
</div>
</div>
<div className="flex gap-2 px-4 overflow-x-auto pb-4" style={{scrollbarWidth: 'none'}}>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-[12px] border border-[#0CAF60] bg-[#0CAF60]/5 text-[#0CAF60] text-xs font-medium shrink-0">
<iconify-icon icon="solar:wallet-linear"></iconify-icon> Budget
                </button>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-[12px] border border-[#E0E0E0] bg-[#FFFFFF] text-[#4F4F4F] text-xs font-medium shrink-0">
<iconify-icon icon="solar:star-linear"></iconify-icon> Rating
                </button>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-[12px] border border-[#E0E0E0] bg-[#FFFFFF] text-[#4F4F4F] text-xs font-medium shrink-0">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Distance
                </button>
</div>
<div className="px-4 space-y-4">

<label className="flex gap-3 bg-[#FFFFFF] p-3 rounded-[16px] border border-[#E0E0E0]/60 shadow-sm block cursor-pointer" htmlFor="nav-details">
<img className="w-24 h-24 rounded-[10px] object-cover shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fae3bb10-d7c1-427f-be92-16f50138f57d_800w.webp"/>
<div className="flex-1 py-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight">Sajek Valley</h3>
<iconify-icon className="text-[#4F4F4F]" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-[#4F4F4F] font-light mt-1 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Rangamati</p>
<div className="flex justify-between items-end mt-3">
<div className="flex items-center gap-1 bg-[#F9FAFB] px-1.5 py-0.5 rounded-[6px]">
<iconify-icon className="text-[#F2994A] text-xs" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium">4.9</span>
</div>
<span className="text-[#0CAF60] text-sm font-medium tracking-tight">$150<span className="text-xs font-light text-[#4F4F4F]">/trip</span></span>
</div>
</div>
</label>

<label className="flex gap-3 bg-[#FFFFFF] p-3 rounded-[16px] border border-[#E0E0E0]/60 shadow-sm block cursor-pointer" htmlFor="nav-details">
<img className="w-24 h-24 rounded-[10px] object-cover shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8961d332-fc79-46b6-90f4-9839c02f2ccb_800w.webp"/>
<div className="flex-1 py-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight">Cox's Bazar</h3>
<iconify-icon className="text-[#F2994A]" icon="solar:heart-bold"></iconify-icon>
</div>
<p className="text-xs text-[#4F4F4F] font-light mt-1 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Chattogram</p>
<div className="flex justify-between items-end mt-3">
<div className="flex items-center gap-1 bg-[#F9FAFB] px-1.5 py-0.5 rounded-[6px]">
<iconify-icon className="text-[#F2994A] text-xs" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium">4.8</span>
</div>
<span className="text-[#0CAF60] text-sm font-medium tracking-tight">$120<span className="text-xs font-light text-[#4F4F4F]">/trip</span></span>
</div>
</div>
</label>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto pb-24 hidden peer-checked/trips:block bg-[#F9FAFB]" style={{scrollbarWidth: 'none'}}>
<div className="p-4 pt-8">
<h2 className="text-xl font-medium tracking-tight text-[#1D1D1D] mb-6">Trip Planner</h2>
<div className="bg-[#FFFFFF] rounded-[20px] p-5 shadow-sm border border-[#E0E0E0]/50 space-y-5">
<div>
<label className="text-xs font-medium text-[#1D1D1D] mb-2 block">Destination</label>
<div className="w-full h-12 bg-[#F9FAFB] rounded-[12px] border border-[#E0E0E0]/80 flex items-center px-4 focus-within:border-[#0CAF60]">
<iconify-icon className="text-[#4F4F4F] mr-2" icon="solar:map-point-linear"></iconify-icon>
<input __gchrome_uniqueid="9" className="w-full bg-transparent text-sm outline-none placeholder:font-light" placeholder="e.g. Sylhet" type="text"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-[#1D1D1D] mb-2 block">Duration (Days)</label>
<div className="flex items-center justify-between w-full h-12 bg-[#F9FAFB] rounded-[12px] border border-[#E0E0E0]/80 px-4">
<button className="w-8 h-8 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center text-[#4F4F4F]">-</button>
<span className="text-sm font-medium">3 Days</span>
<button className="w-8 h-8 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center text-[#0CAF60]">+</button>
</div>
</div>
<div>
<label className="text-xs font-medium text-[#1D1D1D] mb-2 block">Budget Preference</label>
<div className="grid grid-cols-3 gap-2">
<div className="py-2.5 border border-[#E0E0E0] rounded-[10px] text-center text-xs font-medium text-[#4F4F4F]">Economy</div>
<div className="py-2.5 border-2 border-[#0CAF60] bg-[#0CAF60]/5 rounded-[10px] text-center text-xs font-medium text-[#0CAF60]">Standard</div>
<div className="py-2.5 border border-[#E0E0E0] rounded-[10px] text-center text-xs font-medium text-[#4F4F4F]">Luxury</div>
</div>
</div>
<button className="w-full h-12 bg-[#0CAF60] text-[#FFFFFF] rounded-[12px] text-sm font-medium shadow-[0_4px_12px_rgba(12,175,96,0.2)] mt-2">
                        Generate Plan
                    </button>
</div>
<div className="mt-8">
<h3 className="text-sm font-medium tracking-tight mb-4">Suggested Itinerary</h3>
<div className="relative pl-4 border-l border-[#E0E0E0] space-y-6 ml-2">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#0CAF60] ring-4 ring-[#F9FAFB]"></div>
<h4 className="text-xs font-medium text-[#0CAF60] mb-1">Day 1</h4>
<p className="text-sm font-medium text-[#1D1D1D]">Arrival &amp; City Tour</p>
<p className="text-xs font-light text-[#4F4F4F] mt-1">Check-in at hotel, visit local markets and evening sunset point.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#E0E0E0] ring-4 ring-[#F9FAFB]"></div>
<h4 className="text-xs font-medium text-[#4F4F4F] mb-1">Day 2</h4>
<p className="text-sm font-medium text-[#1D1D1D]">Nature Exploration</p>
<p className="text-xs font-light text-[#4F4F4F] mt-1">Guided forest trek and waterfall visit.</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto pb-24 hidden peer-checked/wishlist:block bg-[#F9FAFB]" style={{scrollbarWidth: 'none'}}>
<div className="p-4 pt-8">
<h2 className="text-xl font-medium tracking-tight text-[#1D1D1D] mb-4">Wishlist</h2>
<div className="grid grid-cols-2 gap-3">

<label className="bg-[#FFFFFF] border border-[#E0E0E0]/60 rounded-[16px] overflow-hidden shadow-sm block cursor-pointer" htmlFor="nav-details">
<div className="h-[110px] relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/173b04e0-5f07-414b-999d-b156ac6ff774_800w.webp"/>
<div className="absolute top-2 right-2 w-7 h-7 bg-[#FFFFFF]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#F2994A]">
<iconify-icon className="text-sm" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
<div className="p-3">
<h3 className="text-xs font-medium tracking-tight truncate">Sajek Valley</h3>
<span className="text-[#0CAF60] text-xs font-medium mt-1 block">$150</span>
</div>
</label>

<label className="bg-[#FFFFFF] border border-[#E0E0E0]/60 rounded-[16px] overflow-hidden shadow-sm block cursor-pointer" htmlFor="nav-details">
<div className="h-[110px] relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f6c861-feec-4ab6-b26c-dba226c46bcc_800w.webp"/>
<div className="absolute top-2 right-2 w-7 h-7 bg-[#FFFFFF]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#F2994A]">
<iconify-icon className="text-sm" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
<div className="p-3">
<h3 className="text-xs font-medium tracking-tight truncate">Cox's Bazar</h3>
<span className="text-[#0CAF60] text-xs font-medium mt-1 block">$120</span>
</div>
</label>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto pb-24 hidden peer-checked/profile:block bg-[#F9FAFB]" style={{scrollbarWidth: 'none'}}>
<div className="p-4 pt-10 flex flex-col items-center">
<div className="w-20 h-20 rounded-full border-2 border-[#0CAF60] p-1 mb-3">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h2 className="text-lg font-medium tracking-tight">Jane Doe</h2>
<p className="text-xs font-light text-[#4F4F4F]">jane.travels@explorebd.com</p>
<div className="w-full flex justify-between bg-[#FFFFFF] rounded-[16px] p-4 mt-6 shadow-sm border border-[#E0E0E0]/50">
<div className="text-center">
<p className="text-lg font-medium text-[#0CAF60]">12</p>
<p className="text-xs font-light text-[#4F4F4F]">Trips</p>
</div>
<div className="w-px bg-[#E0E0E0]"></div>
<div className="text-center">
<p className="text-lg font-medium text-[#1D1D1D]">8</p>
<p className="text-xs font-light text-[#4F4F4F]">Reviews</p>
</div>
<div className="w-px bg-[#E0E0E0]"></div>
<div className="text-center">
<p className="text-lg font-medium text-[#1D1D1D]">24</p>
<p className="text-xs font-light text-[#4F4F4F]">Saved</p>
</div>
</div>
<div className="w-full mt-6 space-y-2">
<div className="flex items-center justify-between p-4 bg-[#FFFFFF] rounded-[16px] border border-[#E0E0E0]/50 active:bg-[#F9FAFB]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-[8px] bg-[#F9FAFB] text-[#2D9CDB] flex items-center justify-center"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<span className="text-sm font-medium">Personal Info</span>
</div>
<iconify-icon className="text-[#4F4F4F]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 bg-[#FFFFFF] rounded-[16px] border border-[#E0E0E0]/50 active:bg-[#F9FAFB]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-[8px] bg-[#F9FAFB] text-[#0CAF60] flex items-center justify-center"><iconify-icon icon="solar:card-linear"></iconify-icon></div>
<span className="text-sm font-medium">Payment Methods</span>
</div>
<iconify-icon className="text-[#4F4F4F]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 bg-[#FFFFFF] rounded-[16px] border border-[#E0E0E0]/50 active:bg-[#F9FAFB]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-[8px] bg-[#F9FAFB] text-[#F2994A] flex items-center justify-center"><iconify-icon icon="solar:settings-linear"></iconify-icon></div>
<span className="text-sm font-medium">Settings</span>
</div>
<iconify-icon className="text-[#4F4F4F]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto hidden peer-checked/details:block bg-[#FFFFFF] z-30" style={{scrollbarWidth: 'none'}}>
<div className="relative h-[320px] w-full">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfac6628-eadd-49ba-967f-b4114853d6a6_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D]/80 via-transparent to-black/20"></div>
<label className="absolute top-8 left-4 w-10 h-10 bg-[#FFFFFF]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#FFFFFF] shadow-sm cursor-pointer hover:bg-[#FFFFFF]/30 transition-colors" htmlFor="nav-home">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</label>
<div className="absolute top-8 right-4 w-10 h-10 bg-[#FFFFFF]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#FFFFFF] shadow-sm cursor-pointer hover:text-[#F2994A] transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="relative -mt-6 bg-[#FFFFFF] rounded-t-[24px] px-5 py-6 pb-24 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-start mb-2">
<h1 className="text-2xl font-medium tracking-tight text-[#1D1D1D]">Sajek Valley</h1>
<div className="flex items-center gap-1 bg-[#F9FAFB] px-2 py-1 rounded-[8px] border border-[#E0E0E0]/50">
<iconify-icon className="text-[#F2994A] text-sm" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium">4.9</span>
</div>
</div>
<div className="flex items-center gap-4 text-[#4F4F4F] mb-6">
<span className="flex items-center gap-1 text-xs font-light"><iconify-icon className="text-[#0CAF60]" icon="solar:map-point-linear"></iconify-icon> Rangamati, BD</span>
<span className="flex items-center gap-1 text-xs font-light"><iconify-icon className="text-[#2D9CDB]" icon="solar:clock-circle-linear"></iconify-icon> 3 Days</span>
</div>
<h3 className="text-sm font-medium mb-2">Description</h3>
<p className="text-xs text-[#4F4F4F] font-light leading-relaxed mb-6">
                    Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains. Known as the Queen of Hills, it offers breathtaking views of sea-like clouds.
                </p>
<h3 className="text-sm font-medium mb-3">Gallery</h3>
<div className="flex gap-3 overflow-x-auto pb-2" style={{scrollbarWidth: 'none'}}>
<img className="w-20 h-20 rounded-[12px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43e7d22e-a547-4d83-ba08-42119c1f30e8_800w.webp"/>
<img className="w-20 h-20 rounded-[12px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f144c6ee-baf7-4fdd-aa71-256510388982_800w.jpg"/>
<img className="w-20 h-20 rounded-[12px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3987638d-703d-4e4b-9760-b4732d4e2139_800w.jpg"/>
<div className="w-20 h-20 rounded-[12px] bg-[#F9FAFB] border border-[#E0E0E0] flex items-center justify-center text-[#4F4F4F] text-xs font-medium shrink-0">
                        +5 More
                    </div>
</div>
</div>

<div className="fixed bottom-0 w-full max-w-[375px] bg-[#FFFFFF] border-t border-[#E0E0E0]/50 p-4 pb-6 sm:pb-4 flex justify-between items-center z-40">
<div>
<p className="text-xs font-light text-[#4F4F4F]">Total Price</p>
<p className="text-xl font-medium tracking-tight text-[#0CAF60]">$150 <span className="text-xs font-light text-[#4F4F4F] tracking-normal">/person</span></p>
</div>
<label className="bg-[#0CAF60] text-[#FFFFFF] px-8 h-12 rounded-[14px] flex items-center justify-center text-sm font-medium shadow-[0_4px_12px_rgba(12,175,96,0.2)] cursor-pointer active:scale-95 transition-transform" htmlFor="nav-booking">
                    Book Now
                </label>
</div>
</div>

<div className="absolute inset-0 overflow-y-auto hidden peer-checked/booking:block bg-[#F9FAFB] z-40" style={{scrollbarWidth: 'none'}}>
<div className="px-4 pt-8 pb-4 flex items-center gap-3 sticky top-0 bg-[#F9FAFB]/90 backdrop-blur-md z-10 border-b border-[#E0E0E0]/50">
<label className="w-8 h-8 flex items-center justify-center bg-[#FFFFFF] border border-[#E0E0E0] rounded-full cursor-pointer" htmlFor="nav-details">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</label>
<h2 className="text-lg font-medium tracking-tight">Booking Info</h2>
</div>
<div className="p-4 space-y-6">

<div className="bg-[#FFFFFF] p-3 rounded-[16px] border border-[#E0E0E0]/60 flex gap-3 shadow-sm">
<img className="w-20 h-20 rounded-[10px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9ee72b1-04ee-4486-bf86-62a8464e1235_800w.webp"/>
<div className="py-1 flex flex-col justify-between">
<h3 className="text-sm font-medium tracking-tight">Sajek Valley Resort</h3>
<div className="flex items-center gap-1 text-[#4F4F4F]">
<iconify-icon className="text-xs" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-light">12 Oct - 15 Oct</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium mb-3">Transport Option</h3>
<div className="grid grid-cols-3 gap-3">
<div className="border-2 border-[#0CAF60] bg-[#0CAF60]/5 rounded-[12px] p-3 flex flex-col items-center gap-2">
<iconify-icon className="text-xl text-[#0CAF60]" icon="solar:bus-linear"></iconify-icon>
<span className="text-xs font-medium text-[#0CAF60]">Bus</span>
</div>
<div className="border border-[#E0E0E0] bg-[#FFFFFF] rounded-[12px] p-3 flex flex-col items-center gap-2">
<iconify-icon className="text-xl text-[#4F4F4F]" icon="solar:tram-linear"></iconify-icon>
<span className="text-xs font-medium text-[#4F4F4F]">Train</span>
</div>
<div className="border border-[#E0E0E0] bg-[#FFFFFF] rounded-[12px] p-3 flex flex-col items-center gap-2">
<iconify-icon className="text-xl text-[#4F4F4F]" icon="solar:plane-linear"></iconify-icon>
<span className="text-xs font-medium text-[#4F4F4F]">Flight</span>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-[#FFFFFF] rounded-[16px] border border-[#E0E0E0]/60">
<div>
<h3 className="text-sm font-medium">Guests</h3>
<p className="text-xs font-light text-[#4F4F4F]">Number of travelers</p>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#4F4F4F]">-</button>
<span className="text-sm font-medium">2</span>
<button className="w-8 h-8 rounded-full bg-[#0CAF60] flex items-center justify-center text-[#FFFFFF]">+</button>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full bg-[#FFFFFF] border-t border-[#E0E0E0]/50 p-4 pb-6 sm:pb-4 z-40">
<button className="w-full h-12 bg-[#1D1D1D] text-[#FFFFFF] rounded-[14px] flex items-center justify-center text-sm font-medium shadow-md active:scale-95 transition-transform">
                    Confirm Payment - $300
                </button>
</div>
</div>


<nav className="absolute bottom-0 w-full bg-[#FFFFFF]/90 backdrop-blur-lg border-t border-[#E0E0E0]/50 px-6 py-4 pb-6 sm:pb-4 flex justify-between items-center z-20 shadow-[0_-4px_24px_rgba(0,0,0,0.02)] peer-checked/details:hidden peer-checked/booking:hidden">
<label className="flex flex-col items-center gap-1.5 text-[#4F4F4F] hover:text-[#0CAF60] cursor-pointer transition-colors" htmlFor="nav-home">
<iconify-icon className="text-[22px]" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</label>
<label className="flex flex-col items-center gap-1.5 text-[#4F4F4F] hover:text-[#0CAF60] cursor-pointer transition-colors" htmlFor="nav-explore">
<iconify-icon className="text-[22px]" icon="solar:compass-linear"></iconify-icon>
<span className="text-xs font-medium">Explore</span>
</label>
<label className="flex flex-col items-center gap-1.5 text-[#4F4F4F] hover:text-[#0CAF60] cursor-pointer transition-colors" htmlFor="nav-trips">
<iconify-icon className="text-[22px]" icon="solar:suitcase-linear"></iconify-icon>
<span className="text-xs font-medium">Trips</span>
</label>
<label className="flex flex-col items-center gap-1.5 text-[#4F4F4F] hover:text-[#0CAF60] cursor-pointer transition-colors" htmlFor="nav-wishlist">
<iconify-icon className="text-[22px]" icon="solar:heart-linear"></iconify-icon>
<span className="text-xs font-medium">Wishlist</span>
</label>
<label className="flex flex-col items-center gap-1.5 text-[#4F4F4F] hover:text-[#0CAF60] cursor-pointer transition-colors" htmlFor="nav-profile">
<iconify-icon className="text-[22px]" icon="solar:user-linear"></iconify-icon>
<span className="text-xs font-medium">Profile</span>
</label>
</nav>
</div>

    </>
  );
}
