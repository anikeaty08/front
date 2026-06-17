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
      

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">

<header className="pt-12 pb-4 px-6 flex justify-between items-center bg-[#FAFAFA] z-10">
<h1 className="text-2xl font-semibold tracking-tight uppercase tracking-[0.2em]">Nmd</h1>
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</header>
<main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-6">

<div className="mt-2 mb-8 relative">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Where to?</h2>
<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 p-4 flex items-center gap-3 cursor-pointer">
<iconify-icon className="text-xl text-[#30170A]/40" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex-1">
<p className="text-sm font-medium">Search destinations</p>
<p className="text-xs text-[#30170A]/50 mt-0.5">Anywhere • Any week • Add guests</p>
</div>
</div>
</div>

<div className="mb-8 -mx-6">
<div className="px-6 flex justify-between items-end mb-4">
<h3 className="text-lg font-semibold tracking-tight">Top Destinations</h3>
<span className="text-xs font-medium text-[#30170A]/50">See all</span>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-2 snap-x">

<div className="snap-start shrink-0 w-[140px]">
<div className="w-full h-[160px] rounded-xl overflow-hidden mb-2 relative">
<img alt="Bali" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon className="text-[10px] text-[#FFCE00]" icon="solar:star-bold"></iconify-icon>
<span className="text-[10px] font-semibold">4.9</span>
</div>
</div>
<h4 className="text-sm font-medium">Bali, Indonesia</h4>
</div>

<div className="snap-start shrink-0 w-[140px]">
<div className="w-full h-[160px] rounded-xl overflow-hidden mb-2 relative">
<img alt="Paris" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon className="text-[10px] text-[#FFCE00]" icon="solar:star-bold"></iconify-icon>
<span className="text-[10px] font-semibold">4.8</span>
</div>
</div>
<h4 className="text-sm font-medium">Paris, France</h4>
</div>

<div className="snap-start shrink-0 w-[140px]">
<div className="w-full h-[160px] rounded-xl overflow-hidden mb-2 relative">
<img alt="London" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon className="text-[10px] text-[#FFCE00]" icon="solar:star-bold"></iconify-icon>
<span className="text-[10px] font-semibold">4.7</span>
</div>
</div>
<h4 className="text-sm font-medium">London, UK</h4>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold tracking-tight mb-4">Nomad Curated</h3>
<div className="flex flex-col gap-4">

<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 p-3 flex gap-4">
<div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
<img alt="Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex flex-col justify-between flex-1 py-1">
<div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold leading-tight line-clamp-1">The Alpine Retreat</h4>
<iconify-icon className="text-[#30170A]/40 text-lg" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-[#30170A]/50">Swiss Alps</p>
</div>
<div className="flex justify-between items-end mt-2">
<div className="bg-[#FFCE00]/20 text-[#30170A] text-[10px] font-semibold px-2 py-1 rounded-md">
                                    Breakfast Incl.
                                </div>
<div className="text-right">
<p className="text-sm font-semibold">$340</p>
<p className="text-[10px] text-[#30170A]/50">total per night</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 p-3 flex gap-4">
<div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
<img alt="Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex flex-col justify-between flex-1 py-1">
<div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold leading-tight line-clamp-1">Urban Oasis Hotel</h4>
<iconify-icon className="text-[#30170A]/40 text-lg" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-[#30170A]/50">Downtown Tokyo</p>
</div>
<div className="flex justify-between items-end mt-2">
<div className="text-right w-full">
<p className="text-sm font-semibold">$215</p>
<p className="text-[10px] text-[#30170A]/50">total per night</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-[#30170A]/5 px-6 pb-8 pt-4 flex justify-between items-center z-20">
<div className="flex flex-col items-center gap-1 text-[#30170A]">
<iconify-icon className="text-xl" icon="solar:home-angle-bold"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#30170A]/40">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-[10px] font-medium">Search</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#30170A]/40">
<iconify-icon className="text-xl" icon="solar:case-minimalistic-linear"></iconify-icon>
<span className="text-[10px] font-medium">Trips</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#30170A]/40">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</div>
</nav>
</div>

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">

<header className="pt-12 pb-4 px-4 bg-white border-b border-[#30170A]/5 flex items-center justify-between sticky top-0 z-20">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="text-center">
<h2 className="text-sm font-semibold">Kyoto, Japan</h2>
<p className="text-[10px] text-[#30170A]/50 mt-0.5">Oct 12 - 15 • 2 Guests</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#30170A]/10 relative">
<iconify-icon className="text-base" icon="solar:tuning-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#FFCE00] rounded-full"></span>
</button>
</header>
<main className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-5">
<p className="text-xs font-medium text-[#30170A]/50">142 properties found</p>

<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 overflow-hidden">
<div className="w-full h-40 relative">
<img alt="Kyoto Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
<iconify-icon className="text-base text-[#30170A]" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold leading-tight w-3/4">The Machiya Villa</h3>
<div className="flex items-center gap-1">
<iconify-icon className="text-xs text-[#FFCE00]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold">4.9</span>
</div>
</div>
<p className="text-xs text-[#30170A]/50 mb-3">Gion District • 1.2km from center</p>
<div className="flex gap-2 mb-4">
<span className="text-[10px] border border-[#30170A]/10 rounded px-2 py-0.5">Free Cancellation</span>
<span className="text-[10px] border border-[#30170A]/10 rounded px-2 py-0.5">No Prepayment</span>
</div>
<div className="flex justify-between items-end border-t border-[#30170A]/5 pt-3">
<p className="text-xs text-[#30170A]/50">3 nights, 2 adults</p>
<div className="text-right">
<p className="text-lg font-semibold">$480</p>
<p className="text-[10px] text-[#30170A]/40">incl. taxes &amp; fees</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 overflow-hidden">
<div className="w-full h-40 relative">
<img alt="Kyoto Hotel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
<iconify-icon className="text-base text-[#30170A]" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold leading-tight w-3/4">Zen Garden Resort</h3>
<div className="flex items-center gap-1">
<iconify-icon className="text-xs text-[#FFCE00]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold">4.7</span>
</div>
</div>
<p className="text-xs text-[#30170A]/50 mb-3">Arashiyama • 4km from center</p>
<div className="flex justify-between items-end border-t border-[#30170A]/5 pt-3 mt-4">
<p className="text-xs text-[#30170A]/50">3 nights, 2 adults</p>
<div className="text-right">
<p className="text-lg font-semibold">$390</p>
<p className="text-[10px] text-[#30170A]/40">incl. taxes &amp; fees</p>
</div>
</div>
</div>
</div>

<div className="h-6"></div>
</main>

<div className="absolute bottom-0 w-full bg-white rounded-t-[1.5rem] border-t border-[#30170A]/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transform translate-y-2/3 transition-transform">
<div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-4"></div>
<div className="px-6 pb-6">
<h3 className="text-sm font-semibold mb-4">Filter by</h3>

</div>
</div>
</div>

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">

<main className="flex-1 overflow-y-auto no-scrollbar pb-24">

<div className="relative w-full h-72">
<img alt="Hotel Room" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-12 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="absolute bottom-4 right-4 bg-[#30170A]/70 text-white backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-medium tracking-wide">
                    1 / 12
                </div>
</div>
<div className="p-6">

<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl font-semibold tracking-tight w-3/4">The Machiya Villa</h2>
<div className="flex items-center gap-1 bg-[#FFCE00]/20 px-2 py-1 rounded-md">
<iconify-icon className="text-xs text-[#30170A]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold">4.9</span>
</div>
</div>
<p className="text-sm text-[#30170A]/60 mb-6 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:map-point-linear"></iconify-icon>
                    Gion District, Kyoto
                </p>

<div className="flex justify-between mb-8 pb-8 border-b border-[#30170A]/5">
<div className="flex flex-col items-center gap-2 w-16">
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#30170A]/5 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:wifi-router-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-[#30170A]/60">Free WiFi</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#30170A]/5 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-[#30170A]/60">Breakfast</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#30170A]/5 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:swimming-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-[#30170A]/60">Pool</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#30170A]/5 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:dumbell-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-[#30170A]/60">Gym</span>
</div>
</div>

<h3 className="text-lg font-semibold tracking-tight mb-4">Select Room</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#FFCE00] p-4 mb-4 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#FFCE00] text-[#30170A] text-[9px] font-semibold px-2 py-0.5 rounded-bl-lg">
                        POPULAR
                    </div>
<div className="flex gap-4">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Deluxe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h4 className="text-sm font-semibold">Deluxe King Room</h4>
<p className="text-xs text-[#30170A]/50 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Max 2 Guests
                                </p>
</div>
<div className="flex justify-between items-end mt-2">
<p className="text-sm font-semibold">$160<span className="text-[10px] font-normal text-[#30170A]/50">/night</span></p>

<div className="flex items-center gap-3 border border-[#30170A]/10 rounded-md px-2 py-1 bg-[#FAFAFA]">
<button className="w-4 h-4 flex items-center justify-center text-[#30170A]/40">-</button>
<span className="text-xs font-semibold">1</span>
<button className="w-4 h-4 flex items-center justify-center">+</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-100 rounded-xl p-4 flex gap-3 mt-6">
<iconify-icon className="text-xl text-[#30170A]/60 shrink-0" icon="solar:shield-warning-linear"></iconify-icon>
<div>
<h4 className="text-xs font-semibold mb-1">Cancellation Policy</h4>
<p className="text-[10px] text-[#30170A]/60 leading-relaxed">Free cancellation before Oct 10, 2:00 PM. After that, the first night will be charged.</p>
</div>
</div>
</div>
</main>

<div className="absolute bottom-0 w-full bg-white border-t border-[#30170A]/10 px-6 py-4 pb-8 flex justify-between items-center z-20">
<div>
<p className="text-[10px] text-[#30170A]/50 uppercase tracking-wide">Total Price</p>
<p className="text-xl font-semibold">$480</p>
</div>
<button className="bg-[#FFCE00] text-[#30170A] px-8 py-3 rounded-lg font-semibold text-sm shadow-[0_4px_14px_rgba(255,206,0,0.4)]">
                Book Now
            </button>
</div>
</div>

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">

<header className="pt-12 pb-4 px-4 bg-[#FAFAFA] flex items-center relative z-10">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 absolute left-4">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h2 className="text-base font-semibold w-full text-center">Summary</h2>
</header>
<main className="flex-1 overflow-y-auto no-scrollbar p-6 pt-2 pb-24">

<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 p-4 mb-6">
<div className="flex gap-4 mb-4 pb-4 border-b border-[#30170A]/5">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
<img alt="Hotel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-semibold mb-1">The Machiya Villa</h3>
<p className="text-xs text-[#30170A]/60 mb-2">Deluxe King Room • 1 Room</p>
<div className="flex items-center gap-1 bg-gray-100 w-max px-2 py-0.5 rounded text-[10px] font-medium">
<iconify-icon className="text-[#FFCE00]" icon="solar:star-bold"></iconify-icon> 4.9 Superb
                        </div>
</div>
</div>
<div className="flex justify-between items-center text-sm">
<div>
<p className="text-[10px] text-[#30170A]/50 mb-0.5">Check-in</p>
<p className="font-medium">Oct 12</p>
</div>
<div className="w-8 border-t border-dashed border-[#30170A]/20"></div>
<div className="text-center bg-[#FAFAFA] px-3 py-1 rounded-full text-[10px] font-medium border border-[#30170A]/5">
                        3 Nights
                    </div>
<div className="w-8 border-t border-dashed border-[#30170A]/20"></div>
<div className="text-right">
<p className="text-[10px] text-[#30170A]/50 mb-0.5">Check-out</p>
<p className="font-medium">Oct 15</p>
</div>
</div>
</div>
<h3 className="text-sm font-semibold mb-3">Optional Add-ons</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 p-4 mb-6 flex flex-col gap-4">

<label className="flex justify-between items-start cursor-pointer group">
<div className="flex gap-3">
<div className="w-5 h-5 rounded border border-[#30170A]/20 bg-[#FAFAFA] flex items-center justify-center mt-0.5 group-hover:border-[#FFCE00] transition-colors">

</div>
<div>
<p className="text-sm font-medium">Airport Transfer</p>
<p className="text-[10px] text-[#30170A]/50">Private car, one way</p>
</div>
</div>
<span className="text-sm font-medium">+$45</span>
</label>

<label className="flex justify-between items-start cursor-pointer group">
<div className="flex gap-3">
<div className="w-5 h-5 rounded border border-[#FFCE00] bg-[#FFCE00] flex items-center justify-center mt-0.5">
<iconify-icon className="text-xs text-[#30170A]" icon="solar:check-read-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Daily Breakfast</p>
<p className="text-[10px] text-[#30170A]/50">Buffet style</p>
</div>
</div>
<span className="text-sm font-medium">+$60</span>
</label>
</div>

<div className="bg-[#10B981]/10 text-[#059669] border border-[#10B981]/20 rounded-lg p-3 flex items-center gap-2 mb-6">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-xs font-medium">Price checked &amp; validated.</p>
</div>
<h3 className="text-sm font-semibold mb-3">Price Breakdown</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 p-4 flex flex-col gap-3 text-sm">
<div className="flex justify-between text-[#30170A]/70">
<span>$160 x 3 nights</span>
<span>$480</span>
</div>
<div className="flex justify-between text-[#30170A]/70">
<span>Add-ons</span>
<span>$60</span>
</div>
<div className="flex justify-between text-[#30170A]/70 pb-3 border-b border-[#30170A]/5">
<span>Taxes &amp; Fees</span>
<span>$42</span>
</div>
<div className="flex justify-between font-semibold text-base pt-1">
<span>Total</span>
<span>$582</span>
</div>
</div>
</main>
<div className="absolute bottom-0 w-full bg-white border-t border-[#30170A]/10 px-6 py-4 pb-8 z-20">
<button className="w-full bg-[#FFCE00] text-[#30170A] py-3.5 rounded-lg font-semibold text-sm shadow-[0_4px_14px_rgba(255,206,0,0.4)]">
                Continue to Checkout
            </button>
</div>
</div>

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">

<header className="pt-12 pb-4 px-6 bg-white border-b border-[#30170A]/5 flex items-center justify-between z-10">
<h2 className="text-lg font-semibold tracking-tight">Checkout</h2>
<div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-semibold tabular-nums">09:59</span>
</div>
</header>
<main className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-3">

<div className="bg-white rounded-xl border border-[#30170A]/10 overflow-hidden shadow-sm">
<div className="p-4 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center">
<iconify-icon className="text-[10px]" icon="solar:check-read-bold"></iconify-icon>
</div>
<h3 className="text-sm font-semibold">1. Guest Details</h3>
</div>
<span className="text-xs text-[#30170A]/50">Edit</span>
</div>
</div>

<div className="bg-white rounded-xl border border-[#FFCE00] overflow-hidden shadow-sm relative">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFCE00]"></div>
<div className="p-4 flex items-center gap-3 border-b border-[#30170A]/5">
<div className="w-6 h-6 rounded-full bg-[#FFCE00] text-[#30170A] flex items-center justify-center font-bold text-xs">2</div>
<h3 className="text-sm font-semibold">Payment Method</h3>
</div>
<div className="p-4">

<div className="flex bg-gray-100 rounded-lg p-1 mb-6">
<button className="flex-1 bg-white text-sm font-semibold py-2 rounded-md shadow-sm border border-[#30170A]/5">Credit Card</button>
<button className="flex-1 text-[#30170A]/50 text-sm font-medium py-2 rounded-md">Pix / Instant</button>
</div>

<div className="space-y-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-[#30170A]/60 font-semibold mb-1">Card Number</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#30170A]/40 text-lg" icon="solar:card-linear"></iconify-icon>
<input className="w-full bg-[#FAFAFA] border border-[#30170A]/10 rounded-lg py-2.5 pl-10 pr-3 text-sm font-medium focus:outline-none focus:border-[#FFCE00] focus:ring-1 focus:ring-[#FFCE00] placeholder-[#30170A]/30" placeholder="0000 0000 0000 0000" type="text"/>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-[10px] uppercase tracking-wider text-[#30170A]/60 font-semibold mb-1">Expiry</label>
<input className="w-full bg-[#FAFAFA] border border-[#30170A]/10 rounded-lg py-2.5 px-3 text-sm font-medium focus:outline-none focus:border-[#FFCE00] focus:ring-1 focus:ring-[#FFCE00] placeholder-[#30170A]/30" placeholder="MM/YY" type="text"/>
</div>
<div className="flex-1">
<label className="block text-[10px] uppercase tracking-wider text-[#30170A]/60 font-semibold mb-1">CVC</label>
<input className="w-full bg-[#FAFAFA] border border-[#30170A]/10 rounded-lg py-2.5 px-3 text-sm font-medium focus:outline-none focus:border-[#FFCE00] focus:ring-1 focus:ring-[#FFCE00] placeholder-[#30170A]/30" placeholder="•••" type="password"/>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-[#30170A]/60 font-semibold mb-1">Cardholder Name</label>
<input className="w-full bg-[#FAFAFA] border border-[#30170A]/10 rounded-lg py-2.5 px-3 text-sm font-medium focus:outline-none focus:border-[#FFCE00] focus:ring-1 focus:ring-[#FFCE00] placeholder-[#30170A]/30" placeholder="John Doe" type="text"/>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#30170A]/10 overflow-hidden shadow-sm">
<div className="p-4 flex items-center gap-3 bg-gray-50/50">
<div className="w-6 h-6 rounded-full border border-[#30170A]/20 text-[#30170A]/40 flex items-center justify-center font-bold text-xs">3</div>
<div className="flex-1 flex justify-between items-center">
<h3 className="text-sm font-semibold text-[#30170A]/50">Review &amp; Confirm</h3>
<span className="text-sm font-semibold text-[#30170A]/50">$582</span>
</div>
</div>
</div>
</main>
<div className="p-6 bg-white border-t border-[#30170A]/5 z-20 pb-8">
<button className="w-full bg-[#FFCE00] text-[#30170A] py-3.5 rounded-lg font-semibold text-sm flex justify-center items-center gap-2 shadow-[0_4px_14px_rgba(255,206,0,0.4)]">
<iconify-icon className="text-base" icon="solar:lock-password-linear"></iconify-icon>
                Pay $582 &amp; Confirm
            </button>
<p className="text-[10px] text-center text-[#30170A]/40 mt-3">By confirming, you agree to our Terms &amp; Conditions.</p>
</div>
</div>

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">
<main className="flex-1 overflow-y-auto no-scrollbar pt-20 pb-8 px-6 flex flex-col items-center">

<div className="w-20 h-20 bg-[#FFCE00] rounded-full flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(255,206,0,0.3)]">
<iconify-icon className="text-4xl text-[#30170A]" icon="solar:ticket-sale-bold"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-center mb-2">Booking Confirmed!</h2>
<p className="text-sm text-[#30170A]/60 text-center mb-8">You're going to Kyoto. We've sent the details to your email.</p>

<div className="w-full bg-white rounded-2xl border-2 border-dashed border-[#30170A]/10 p-6 relative mb-8 shadow-sm">

<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FAFAFA] rounded-full border-r-2 border-dashed border-[#30170A]/10"></div>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FAFAFA] rounded-full border-l-2 border-dashed border-[#30170A]/10"></div>
<div className="text-center mb-6">
<p className="text-[10px] uppercase tracking-widest text-[#30170A]/50 font-semibold mb-1">Confirmation Code</p>
<p className="text-2xl font-semibold tracking-tight">XY89-KTM</p>
</div>
<div className="border-t border-[#30170A]/5 pt-4">
<h3 className="font-semibold text-sm mb-1 text-center">The Machiya Villa</h3>
<p className="text-xs text-[#30170A]/50 text-center">Oct 12 - Oct 15 • 3 Nights</p>
</div>
</div>

<div className="w-full mt-auto">
<h3 className="text-sm font-semibold mb-3">Complete your trip</h3>
<div className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2 snap-x">
<div className="w-[200px] shrink-0 bg-white rounded-xl p-2 border border-[#30170A]/5 shadow-sm snap-start flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0">
<img alt="Tour" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-xs font-semibold">Tea Ceremony</h4>
<p className="text-[10px] text-[#30170A]/50 mt-0.5">From $45</p>
</div>
</div>
</div>
</div>
</main>
<div className="px-6 pb-8 pt-4 bg-[#FAFAFA]">
<button className="w-full bg-white border border-[#30170A]/10 text-[#30170A] py-3.5 rounded-lg font-semibold text-sm shadow-sm">
                View Reservation
            </button>
</div>
</div>

<div className="w-full max-w-[375px] h-[812px] bg-[#FAFAFA] rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white flex flex-col shrink-0">

<header className="pt-12 bg-white border-b border-[#30170A]/5 z-10">
<h2 className="text-2xl font-semibold tracking-tight px-6 mb-6">Trips</h2>
<div className="flex px-6 gap-6">
<button className="text-sm font-semibold pb-3 border-b-2 border-[#FFCE00] text-[#30170A]">Upcoming</button>
<button className="text-sm font-medium pb-3 border-b-2 border-transparent text-[#30170A]/40 hover:text-[#30170A]">Past</button>
<button className="text-sm font-medium pb-3 border-b-2 border-transparent text-[#30170A]/40 hover:text-[#30170A]">Canceled</button>
</div>
</header>
<main className="flex-1 overflow-y-auto no-scrollbar p-6 pb-24 flex flex-col gap-6">

<div className="bg-white rounded-2xl shadow-sm border border-[#30170A]/5 overflow-hidden">
<div className="relative h-32">
<img alt="Kyoto" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute top-3 left-3 bg-[#FFCE00] text-[#30170A] px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:calendar-linear"></iconify-icon>
                        In 12 days
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Kyoto, Japan</h3>
<p className="text-xs text-[#30170A]/60 mt-1">Oct 12 - 15 • The Machiya Villa</p>
</div>
<div className="bg-gray-100 p-2 rounded-lg">
<iconify-icon className="text-xl text-[#30170A]" icon="solar:qr-code-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<button className="bg-white border border-[#30170A]/10 text-[#30170A] py-2 rounded-lg font-medium text-xs shadow-sm hover:bg-gray-50 transition-colors">
                            Manage Guests
                        </button>
<button className="bg-white border border-[#30170A]/10 text-[#30170A] py-2 rounded-lg font-medium text-xs shadow-sm hover:bg-gray-50 transition-colors">
                            Change Dates
                        </button>
<button className="col-span-2 bg-transparent text-[#30170A]/50 py-2 rounded-lg font-medium text-xs hover:text-[#30170A] transition-colors">
                            Cancel Booking
                        </button>
</div>
</div>
</div>

<h3 className="text-sm font-semibold mt-4">Past Trips</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#30170A]/5 flex p-3 gap-4 opacity-70 grayscale-[20%]">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Paris" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-sm font-semibold mb-1">Paris, France</h4>
<p className="text-xs text-[#30170A]/60">Le Meurice</p>
<p className="text-[10px] text-[#30170A]/40 mt-2">Aug 5 - Aug 10, 2023</p>
</div>
<div className="ml-auto flex items-center justify-center pr-2">
<button className="text-xs font-semibold text-[#30170A]/60 underline">Rebook</button>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-[#30170A]/5 px-6 pb-8 pt-4 flex justify-between items-center z-20">
<div className="flex flex-col items-center gap-1 text-[#30170A]/40">
<iconify-icon className="text-xl" icon="solar:home-angle-linear"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#30170A]/40">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-[10px] font-medium">Search</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#30170A]">
<iconify-icon className="text-xl" icon="solar:case-minimalistic-bold"></iconify-icon>
<span className="text-[10px] font-medium">Trips</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#30170A]/40">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</div>
</nav>
</div>

    </>
  );
}
