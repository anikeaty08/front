import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Update clock
    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const clockElement = document.getElementById('clock');
      if (clockElement) {
        clockElement.textContent = timeString;
      }
    }
    
    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1508615121316-fe792af62a63?w=3840&amp'}}></div>

<div className="max-w-7xl mx-auto w-full">

<section className="relative flex-1">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-32 -left-36 md:left-0 w-[130%] h-[130%] bg-[radial-gradient(at_top_left,_var(--tw-gradient-stops))] via-transparent to-transparent rotate-6 from-red-800/60"></div>
<div className="absolute top-40 right-0 w-[120%] h-[120%] bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] via-transparent to-transparent -rotate-6 from-red-700/50"></div>
<div className="absolute inset-0 backdrop-blur-xl bg-black/90"></div>
</div>

<div className="relative z-10 md:px-12 pr-6 pl-6">

<header className="flex fade-in pt-8 items-center justify-between">

<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-compass w-[24px] h-[24px] text-gray-600" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
<span className="text-xl font-black tracking-tight font-geist text-stone-100">Wanderlust</span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-300">
<div className="flex items-center gap-2 transition-colors hover:text-stone-100">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">Baden-Württemberg</span>
</div>
<div className="flex items-center gap-2 transition-colors hover:text-stone-100">
<svg className="lucide lucide-cloud-sun w-4 h-4" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
<span className="font-geist">23°C Sunny</span>
</div>
<div className="flex items-center gap-2 transition-colors hover:text-stone-100">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist" id="clock">01:42:31 PM</span>
</div>
</nav>

<div className="flex items-center gap-3">
<button className="relative flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-black/80 text-stone-300 hover:bg-black">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button className="flex gap-2 hover:scale-105 transition-all duration-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:bg-black text-sm font-semibold bg-pink-50/90 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm items-center" id="menuBtn">
<span className="hidden sm:block font-geist">Explore</span>
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<div className="mt-20 lg:mt-32 flex flex-col items-start">
<span className="uppercase tracking-wide text-xs font-semibold text-stone-500 mb-3 pl-1 slide-up stagger-1 font-geist">Curated luxury experiences</span>
<h1 className="sm:text-7xl lg:text-[7rem] leading-[0.9] slide-up stagger-2 text-5xl font-light text-stone-100 tracking-tighter font-geist">
            Extraordinary homes 
            <span className="bg-clip-text font-medium text-transparent tracking-tighter font-geist bg-gradient-to-r from-red-400 to-orange-400">worldwide</span>
</h1>
<p className="mt-6 text-lg max-w-2xl slide-up stagger-3 font-geist text-stone-400">
            Discover handpicked villas, penthouses, and unique stays in the world's most coveted destinations. 
            Each property tells a story of luxury, culture, and unforgettable experiences.
          </p>

<div className="mt-12 w-full max-w-5xl slide-up stagger-4">
<div className="flex flex-col lg:flex-row items-stretch backdrop-blur-sm rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border overflow-hidden bg-black/90 border-white/10">

<button className="flex-1 flex gap-3 transition-all duration-200 group hover:bg-black/60 text-left pt-5 pr-6 pb-5 pl-6 items-center">
<svg className="lucide lucide-map-pin w-5 h-5 group-hover:text-gray-900 transition-colors text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist">Where</span>
<span className="text-sm font-semibold text-stone-300 font-geist">Search destinations</span>
</div>
</button>

<button className="flex-1 flex items-center gap-3 px-6 py-5 transition-all duration-200 text-left border-t lg:border-t-0 lg:border-l group hover:bg-black/60 border-stone-800/50">
<svg className="lucide lucide-calendar w-5 h-5 group-hover:text-gray-900 transition-colors text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist">Check In</span>
<span className="text-sm font-semibold font-geist text-stone-300">Add dates</span>
</div>
</button>

<button className="flex-1 flex items-center gap-3 px-6 py-5 transition-all duration-200 text-left border-t lg:border-t-0 lg:border-l group hover:bg-black/60 border-stone-800/50">
<svg className="lucide lucide-calendar-check w-5 h-5 group-hover:text-gray-900 transition-colors text-gray-400" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist">Check Out</span>
<span className="text-sm font-semibold font-geist text-stone-300">Add dates</span>
</div>
</button>

<button className="flex-1 flex items-center gap-3 px-6 py-5 transition-all duration-200 text-left border-t lg:border-t-0 lg:border-l group hover:bg-black/60 border-stone-800/50">
<svg className="lucide lucide-users w-5 h-5 group-hover:text-gray-900 transition-colors text-gray-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist">Guests</span>
<span className="text-sm font-semibold font-geist text-stone-300">Add guests</span>
</div>
</button>

<button className="shrink-0 flex items-center gap-3 px-8 py-5 font-semibold hover:scale-105 transition-all duration-200 group bg-stone-100 text-black hover:bg-stone-200">
<span className="hidden sm:block font-geist">Discover luxury</span>
<svg className="lucide lucide-search w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</div>

<div className="mt-12 flex flex-wrap gap-8 text-sm slide-up stagger-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-yellow-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="font-geist text-stone-400">500+ Premium Properties</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist text-stone-400">4.9/5 Guest Rating</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist text-stone-400">Verified Hosts</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-16 md:mt-24 slide-up stagger-6">
<div className="flex gap-6 px-6 md:px-12 pb-6 overflow-x-auto">

<div className="min-w-[280px] flex flex-col group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-stone-800">
<img alt="Luxury villa in Portofino" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800&amp;q=80" style={{}}/>
<div className="absolute top-3 right-3 text-xs font-semibold text-stone-50 font-geist bg-black/90 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
<svg className="lucide lucide-heart w-3 h-3 inline mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                4.9
              </div>
</div>
<div className="mt-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold font-geist text-stone-100">Villa Portofino</h3>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-600 text-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium font-geist text-stone-300">4.9</span>
</div>
</div>
<p className="text-sm font-geist text-stone-400">Italian Riviera · 6 guests</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold font-geist text-stone-100">€2,450</span>
<span className="text-sm font-geist text-stone-400">per night</span>
</div>
</div>
</div>

<div className="min-w-[280px] flex flex-col group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-stone-800">
<img alt="Modern penthouse in Barcelona" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&amp;q=80" style={{}}/>
<div className="absolute top-3 right-3 text-xs font-semibold text-stone-50 font-geist bg-black/90 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
<svg className="lucide lucide-heart w-3 h-3 inline mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                4.8
              </div>
</div>
<div className="mt-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold font-geist text-stone-100">Barcelona Penthouse</h3>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-600 text-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium font-geist text-stone-300">4.8</span>
</div>
</div>
<p className="text-sm font-geist text-stone-400">Spain · 4 guests</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold font-geist text-stone-100">€1,850</span>
<span className="text-sm font-geist text-stone-400">per night</span>
</div>
</div>
</div>

<div className="min-w-[280px] flex flex-col group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-stone-800">
<img alt="Luxury chalet in Swiss Alps" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&amp;q=80" style={{}}/>
<div className="absolute top-3 right-3 text-xs font-semibold font-geist bg-stone-50/90 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
<svg className="lucide lucide-heart w-3 h-3 inline mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                5.0
              </div>
</div>
<div className="mt-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold font-geist text-stone-100">Alpine Chalet</h3>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-600 text-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium font-geist text-stone-300">5.0</span>
</div>
</div>
<p className="text-sm font-geist text-stone-400">Swiss Alps · 8 guests</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold font-geist text-stone-100">€3,200</span>
<span className="text-sm font-geist text-stone-400">per night</span>
</div>
</div>
</div>

<div className="min-w-[280px] flex flex-col group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-stone-800">
<img alt="Beachfront villa in Mykonos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&amp;q=80" style={{}}/>
<div className="absolute top-3 right-3 text-xs font-semibold text-stone-50 font-geist bg-black/90 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
<svg className="lucide lucide-heart w-3 h-3 inline mr-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                4.7
              </div>
</div>
<div className="mt-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold font-geist text-stone-100">Mykonos Beach Villa</h3>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-600 text-yellow-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-medium font-geist text-stone-300">4.7</span>
</div>
</div>
<p className="text-sm font-geist text-stone-400">Greece · 10 guests</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold font-geist text-stone-100">€4,100</span>
<span className="text-sm font-geist text-stone-400">per night</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
