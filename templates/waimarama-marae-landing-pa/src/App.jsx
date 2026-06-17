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



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
400: '#D4AF37', // Historic Gold
500: '#C5A028',
900: '#5C4808',
}
},
animation: {
'glow-pulse': 'glow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
},
keyframes: {
'glow-pulse': {
'0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)' },
'50%': { boxShadow: '0 0 20px 0 rgba(212, 175, 55, 0.3)' },
},
'slow-zoom': {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}

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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-white/90 border-stone-200/60" style={{}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">

<svg className="text-stone-900" fill="none" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3L2 12H5V20H19V12H22L12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="group-hover:text-gold-900 transition-colors uppercase text-lg font-semibold text-stone-900 tracking-tight" style={{}}>Waimārama Marae</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900" href="#book" style={{}}>Book Our Marae</a>
<a className="transition-colors hover:text-stone-900 text-sm font-medium text-stone-500" href="#kura-reo" style={{}}>Kura Reo</a>
<a className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900" href="#" style={{}}>Experiences</a>
<a className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900" href="#" style={{}}>Shop</a>
<a className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900" href="#" style={{}}>About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-10 px-5 text-xs font-medium bg-transparent border rounded-full transition-all focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 text-stone-900 border-stone-200 hover:border-gold-400 hover:text-gold-900" href="#contact" style={{}}>
                    Enquire
                </a>
<button className="md:hidden p-2 text-stone-500 rounded-md hover:bg-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="min-h-[95vh] flex overflow-hidden pt-20 relative items-center">

<div className="absolute inset-0 -z-10 select-none bg-stone-900" style={{}}>

<img alt="Waimārama Marae Wharenui and Courtyard in Summer" className="w-full h-full object-cover animate-slow-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05881264-d148-42b8-9816-48378ff7d0a7_3840w.png" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-t mix-blend-multiply from-stone-900 via-stone-900/50 to-stone-900/10" style={{}}></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 mt-16">
<div className="max-w-3xl">
<div className="inline-flex gap-2 bg-white/10 border-white/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-lg backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-gold-400"></span>
<span className="uppercase text-xs font-medium text-stone-50 tracking-wide drop-shadow-md" style={{}}>Open for 2026 Bookings</span>
</div>
<h1 className="md:text-7xl text-balance text-5xl font-semibold text-white tracking-tight mb-8 drop-shadow-lg" style={{}}>Waimārama Marae</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-stone-100 max-w-xl mb-12 drop-shadow-md" style={{}}>Our living marae connected to ngā hapū o Waimārama. We host pōwhiri, wānanga, and corporate retreats with deep cultural integrity.</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

<a className="group relative inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-lg transition-all w-full sm:w-auto overflow-hidden animate-glow-pulse shadow-xl hover:shadow-2xl text-stone-900 bg-white" href="#book" style={{}}>
<span className="z-10 flex items-center gap-2 relative" style={{}}>Book Our Marae <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform text-gold-900 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[#5c533d] to-[#dcc4a3] opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</a>
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium border backdrop-blur-md rounded-lg transition-all w-full sm:w-auto shadow-lg text-white bg-black/20 border-white/30 hover:bg-white/10 hover:border-gold-400/50 hover:text-gold-400" href="#contact">
                        Make an Enquiry
                    </a>
</div>
</div>
</div>

<div className="bg-gradient-to-t from-[#fafaf9] to-transparent h-24 z-20 absolute right-0 bottom-0 left-0"></div>
</section>

<section className="border-b relative border-stone-200 bg-white" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-stone-100" style={{}}>
<div className="flex items-center gap-4 pt-4 md:pt-0">
<div className="p-2.5 rounded-full border bg-stone-50 text-gold-900 border-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path className="" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-stone-900" style={{}}>Whareora Accommodation</h3>
<p className="text-xs text-stone-500 mt-0.5" style={{}}>Sleeping for large and small groups</p>
</div>
</div>
<div className="flex gap-4 md:pt-0 md:pl-12 pt-4 gap-x-4 gap-y-4 items-center">
<div className="p-2.5 rounded-full border bg-stone-50 text-gold-900 border-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-stone-900" style={{}}>Full Dining &amp; Kitchen</h3>
<p className="text-xs text-stone-500 mt-0.5" style={{}}>Modern facilities for self-catering</p>
</div>
</div>
<div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-12">
<div className="p-2.5 rounded-full border bg-stone-50 text-gold-900 border-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:languages" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-stone-900" style={{}}>Immersive Kura Reo</h3>
<p className="text-xs text-stone-500 mt-0.5" style={{}}>Annual rumaki in January</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-stone-50" style={{}}>

<div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
<svg fill="none" height="400" viewbox="0 0 100 100" width="400">
<path d="M0 0L50 50L0 100" stroke="currentColor" strokeWidth="2"></path>
<path d="M20 0L70 50L20 100" stroke="currentColor" strokeWidth="2"></path>
<path d="M40 0L90 50L40 100" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-6" style={{}}>Deeply rooted in history</h2>
<div className="space-y-4 leading-relaxed text-sm md:text-base text-stone-600" style={{}}>
<p className="">
                        Waimārama Marae stands as the beating heart of our community on the east coast of Hawke’s Bay. We are a living marae, guided by the tikanga of our ancestors and the aspirations of ngā hapū o Waimārama.
                    </p>
<p className="">
                        More than just a venue, we are a place of connection—whakawhanaungatanga. Whether you are returning home, seeking cultural education, or looking for a grounded space for strategic planning, we offer an environment that clears the mind and warms the spirit.
                    </p>
</div>
<a className="inline-flex items-center gap-2 mt-8 text-sm font-medium border-b pb-0.5 transition-colors text-stone-900 border-gold-400/50 hover:border-gold-400" href="#" style={{}}>
                    Read our full history
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-4">

<img alt="Māori Carving Detail" className="aspect-[3/4] grayscale-[10%] shadow-stone-900/5 bg-stone-200 object-cover rounded-xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15c20dbe-9654-466f-b2be-3423ccad94fa_800w.png" style={{}}/>
<div className="space-y-4 pt-12">

<img alt="Waimārama Coastline view" className="aspect-square grayscale-[20%] shadow-stone-900/5 bg-stone-200 object-cover rounded-xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af66a5f8-20c0-4b79-824b-1677f7ee1056_800w.png"/>
<div className="p-6 rounded-xl border shadow-sm relative overflow-hidden bg-white border-gold-400/20">
<div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gold-400/10"></div>
<span className="text-4xl font-semibold tracking-tight text-stone-900" style={{}}>100+</span>
<p className="text-xs font-medium text-stone-500 mt-1 uppercase tracking-wide" style={{}}>Years of History</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6 relative" id="book">
<div className="maori-pattern-border absolute top-0 left-0 right-0"></div>
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 gap-x-6 gap-y-6 justify-between">
<div className="">
<span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-gold-900">Venue Hire</span>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight" style={{}}>Book our Marae</h2>
<p className="text-stone-500 mt-2 max-w-md" style={{}}>Our spaces are available for community hui, corporate retreats, and educational wānanga.</p>
</div>
<div className="flex gap-3">
<button className="transition-colors hover:bg-stone-800 shadow-stone-900/10 text-sm font-medium text-white bg-stone-900 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg">Request a Booking</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="group relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 bg-stone-50 border-stone-100 hover:border-gold-400/30 hover:shadow-stone-900/5" style={{}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform group-hover:border-gold-400/50 bg-white border-stone-200" style={{}}>
<svg aria-hidden="true" className="iconify group-hover:text-gold-900 transition-colors text-stone-700 iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-stone-900" style={{}}>Hui &amp; Wānanga</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed" style={{}}>Perfect for large whānau gatherings, community meetings, and educational workshops.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify text-gold-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Full Marae access
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify text-gold-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Whareora accommodation
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 bg-stone-50 border-stone-100 hover:border-gold-400/30 hover:shadow-stone-900/5" style={{}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform group-hover:border-gold-400/50 bg-white border-stone-200" style={{}}>
<svg aria-hidden="true" className="iconify group-hover:text-gold-900 transition-colors text-stone-700 iconify--lucide" data-icon="lucide:briefcase" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-stone-900" style={{}}>Corporate Retreats</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed" style={{}}>A unique environment for strategic planning days and cultural competency training.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify text-gold-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Meeting spaces
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify text-gold-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Cultural guidance
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 bg-stone-50 border-stone-100 hover:border-gold-400/30 hover:shadow-stone-900/5" style={{}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform group-hover:border-gold-400/50 bg-white border-stone-200" style={{}}>
<svg aria-hidden="true" className="iconify group-hover:text-gold-900 transition-colors text-stone-700 iconify--lucide" data-icon="lucide:graduation-cap" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-stone-900" style={{}}>Schools &amp; Education</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed" style={{}}>Safe and enriching noho marae experiences for learning tikanga and history.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify text-gold-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Catering options
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify text-gold-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> History talks available
                        </li>
</ul>
</div>
</div>

<div className="rounded-2xl border p-8 lg:p-10 shadow-sm bg-stone-50 border-stone-200" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-4 flex flex-col justify-between">
<div className="">
<h3 className="text-xl font-semibold mb-2 text-stone-900" style={{}}>Check Availability</h3>
<p className="text-sm text-stone-500 mb-6" style={{}}>Select your preferred dates to see if the marae is available for your hui.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-stone-700" style={{}}>Number of Guests</label>
<select className="w-full h-10 border rounded-md px-3 text-sm focus:ring-1 focus:ring-gold-400 outline-none bg-white border-stone-200" style={{}}>
<option>10 - 30 Manuhiri</option>
<option>30 - 60 Manuhiri</option>
<option>60+ Manuhiri</option>
</select>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 text-stone-700" style={{}}>Event Type</label>
<select className="w-full h-10 border rounded-md px-3 text-sm focus:ring-1 focus:ring-gold-400 outline-none bg-white border-stone-200" style={{}}>
<option>Wānanga</option>
<option>Corporate Retreat</option>
<option>School Visit</option>
<option>Tangihanga (Please call)</option>
</select>
</div>
</form>
</div>
<button className="mt-8 w-full h-11 font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 animate-glow-pulse shadow-md bg-stone-900 text-white hover:bg-stone-800 shadow-gold-400/10" style={{}}>
                            Start Booking Request
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="lg:col-span-8 rounded-xl border p-6 bg-white border-stone-100" style={{}}>
<div className="flex items-center justify-between mb-6">
<h4 className="text-sm font-semibold text-stone-900" style={{}}>November 2024</h4>
<div className="flex gap-2">
<button className="p-1 rounded hover:bg-stone-100 text-stone-400 hover:text-stone-900" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<button className="p-1 rounded hover:bg-stone-100 text-stone-400 hover:text-stone-900" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>

<div className="grid grid-cols-7 mb-2 text-center">
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>Mo</span>
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>Tu</span>
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>We</span>
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>Th</span>
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>Fr</span>
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>Sa</span>
<span className="text-[10px] font-medium uppercase tracking-wide py-2 text-stone-400" style={{}}>Su</span>
</div>

<div className="grid grid-cols-7 gap-1 lg:gap-2">

<div className="aspect-square"></div>
<div className="aspect-square"></div>
<div className="aspect-square"></div>


<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>1</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>2</button>

<div className="aspect-square rounded-md text-xs flex items-center justify-center cursor-not-allowed relative group bg-stone-100 text-stone-300" style={{}}>
                                3
                                <span className="hidden group-hover:block absolute bottom-full mb-1 text-[10px] px-1.5 py-0.5 rounded bg-stone-900 text-white" style={{}}>Booked</span>
</div>
<div className="aspect-square rounded-md text-xs flex items-center justify-center cursor-not-allowed bg-stone-100 text-stone-300" style={{}}>4</div>

<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>5</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>6</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>7</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>8</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>9</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>10</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>11</button>

<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>12</button>
<button className="aspect-square rounded-md text-xs font-medium flex items-center justify-center shadow-sm bg-gold-400 text-white">13</button>
<button className="aspect-square rounded-md text-xs font-medium flex items-center justify-center shadow-sm bg-gold-400 text-white">14</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>15</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>16</button>
<div className="aspect-square rounded-md text-xs flex items-center justify-center cursor-not-allowed bg-stone-100 text-stone-300" style={{}}>17</div>
<div className="aspect-square rounded-md text-xs flex items-center justify-center cursor-not-allowed bg-stone-100 text-stone-300" style={{}}>18</div>

<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>19</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>20</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>21</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>22</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>23</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>24</button>
<button className="aspect-square rounded-md text-xs transition-colors flex items-center justify-center text-stone-600 hover:bg-gold-400/20 hover:text-stone-900" style={{}}>25</button>
</div>
<div className="mt-4 flex items-center gap-4 text-[10px] text-stone-500 justify-end" style={{}}>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full border border-stone-200 bg-white" style={{}}></div> Available</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gold-400"></div> Selected</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-stone-200" style={{}}></div> Booked</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-stone-900 text-stone-50" id="kura-reo" style={{}}>

<div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2 bg-gold-400/10"></div>
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 bg-stone-800 border-stone-700" style={{}}>
<span className="uppercase text-gold-400 text-xs font-medium tracking-wide" style={{}}>Upcoming: January 2026</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Kura Reo o Waimārama</h2>
<p className="text-lg mb-8 max-w-2xl leading-relaxed text-stone-400" style={{}}>
                    An immersive multi-day rumaki (immersion) course designed for intermediate to advanced learners of te reo Māori. Join us for intensive learning, whanaungatanga, and connection to the taiao.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
<div className="">
<h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:target" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg> Who it's for
                        </h4>
<p className="text-sm text-stone-400" style={{}}>Proficient speakers looking to refine their dialect, grammar, and tikanga knowledge.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg> What to expect
                        </h4>
<p className="text-sm text-stone-400" style={{}}>Full immersion environment, expert kaiako, sleeping in the wharenui, shared kai.</p>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="h-11 px-6 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_-3px_rgba(255,255,255,0.2)] bg-white text-stone-900 hover:bg-stone-100" style={{}}>
                        Join Waitlist / Register Interest
                    </button>
<button className="transition-colors hover:bg-stone-800 hover:border-gold-400 hover:text-gold-400 text-sm font-medium text-white bg-transparent h-11 border-stone-700 border rounded-lg pr-6 pl-6" style={{}}>View 2026 Dates</button>
</div>
</div>

<div className="lg:col-span-5">
<div className="backdrop-blur-sm border p-8 rounded-2xl relative overflow-hidden bg-stone-800/50 border-stone-700" style={{}}>
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:feather" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-start gap-4 mb-6 pb-6 border-b relative z-10 border-stone-700" style={{}}>
<div className="text-center rounded-lg p-3 min-w-[70px] border bg-stone-900 border-stone-700" style={{}}>
<span className="block text-xs uppercase font-medium text-gold-400">Jan</span>
<span className="block text-2xl font-bold text-white">12-16</span>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white">5 Day Rumaki</h3>
<p className="text-sm mt-1 text-stone-400" style={{}}>Limited spaces available.</p>
</div>
</div>
<ul className="space-y-3 relative z-10">
<li className="flex justify-between text-sm">
<span className="text-stone-400" style={{}}>Kaiako</span>
<span className="font-medium text-right text-white">Renowned national experts</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-stone-400" style={{}}>Level</span>
<span className="font-medium text-right text-white">Intermediate / Advanced</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-950 to-stone-950 pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800/30 via-transparent to-transparent opacity-60 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
<div className="max-w-xl">
<span className="text-gold-400 font-medium text-xs tracking-[0.2em] uppercase mb-4 block">The Shop</span>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-5" style={{}}>Waimārama Shop</h2>
<p className="leading-relaxed text-lg font-light text-stone-400">
                        Thoughtfully designed apparel and taonga inspired by our whenua. Every purchase directly supports the preservation and operations of our marae.
                    </p>
</div>

<div className="flex gap-3 mb-1">
<button aria-label="Scroll Left" className="w-11 h-11 rounded-full border border-stone-800 text-stone-400 flex items-center justify-center hover:bg-stone-800 hover:text-white hover:border-stone-700 transition-all active:scale-95">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Scroll Right" className="w-11 h-11 rounded-full border border-stone-800 text-stone-400 flex items-center justify-center hover:bg-stone-800 hover:text-white hover:border-stone-700 transition-all active:scale-95">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-12 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-900 mb-5 border border-white/5">
<img alt="Waimārama Classic Tee" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?w=800&amp;q=80"/>


<button className="absolute bottom-5 right-5 h-12 w-12 bg-white text-stone-950 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
<div className="absolute top-4 left-4">
<span className="bg-stone-900/90 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wide">Best Seller</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white text-lg font-medium tracking-tight group-hover:text-gold-400 transition-colors">Classic Tee</h3>
<p className="text-stone-500 text-sm mt-1">Heavyweight Cotton</p>
</div>
<span className="text-white font-medium bg-stone-800/50 px-2 py-1 rounded text-sm">$45</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-900 mb-5 border border-white/5">
<img alt="Essential Hoodie" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1610582144787-eda2e6f293b4?w=800&amp;q=80"/>
<button className="absolute bottom-5 right-5 h-12 w-12 bg-white text-stone-950 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white text-lg font-medium tracking-tight group-hover:text-gold-400 transition-colors">Essential Hoodie</h3>
<p className="text-stone-500 text-sm mt-1">Fleece Lined, Black</p>
</div>
<span className="text-white font-medium bg-stone-800/50 px-2 py-1 rounded text-sm">$85</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-900 mb-5 border border-white/5">
<img alt="Everyday Tote" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute bottom-5 right-5 h-12 w-12 bg-white text-stone-950 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white text-lg font-medium tracking-tight group-hover:text-gold-400 transition-colors">Market Tote</h3>
<p className="text-stone-500 text-sm mt-1">Organic Canvas</p>
</div>
<span className="text-white font-medium bg-stone-800/50 px-2 py-1 rounded text-sm">$30</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-900 mb-5 border border-white/5">
<img alt="Marae Cap" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute bottom-5 right-5 h-12 w-12 bg-white text-stone-950 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
<div className="absolute top-4 left-4">
<span className="bg-stone-800/90 backdrop-blur text-stone-300 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wide">Limited</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white text-lg font-medium tracking-tight group-hover:text-gold-400 transition-colors">Corduroy Cap</h3>
<p className="text-stone-500 text-sm mt-1">Embroidered Logo</p>
</div>
<span className="text-white font-medium bg-stone-800/50 px-2 py-1 rounded text-sm">$35</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-900 mb-5 border border-white/5 flex items-center justify-center group-hover:border-gold-400/30 transition-colors">
<div className="text-center p-6">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-gold-400 group-hover:text-stone-950 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<h3 className="text-white text-lg font-medium tracking-tight">View All Products</h3>
<p className="text-stone-500 text-sm mt-2">Browse our full collection</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-stone-200 bg-white" style={{}}>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold text-stone-900" style={{}}>How to book the Marae</h2>
<p className="text-stone-500 mt-2 text-sm" style={{}}>We ensure a seamless process from enquiry to pōwhiri.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r -translate-y-1/2 z-0 from-stone-100 via-gold-400/20 to-stone-100" style={{}}></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="p-4 text-center md:text-left group bg-white">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-4 mx-auto md:mx-0 ring-4 shadow-lg group-hover:bg-gold-500 transition-colors bg-stone-900 text-white ring-white" style={{}}>1</div>
<h4 className="text-sm font-semibold text-stone-900" style={{}}>Submit Enquiry</h4>
<p className="text-xs text-stone-500 mt-1" style={{}}>Fill out the form with your preferred dates and numbers.</p>
</div>

<div className="p-4 text-center md:text-left group bg-white">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-4 mx-auto md:mx-0 ring-4 shadow-sm group-hover:ring-gold-400/20 transition-all bg-stone-100 text-stone-600 ring-white" style={{}}>2</div>
<h4 className="text-sm font-semibold text-stone-900" style={{}}>Confirmation</h4>
<p className="text-xs text-stone-500 mt-1" style={{}}>We check availability and send you a tentative booking.</p>
</div>

<div className="p-4 text-center md:text-left group bg-white">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-4 mx-auto md:mx-0 ring-4 shadow-sm group-hover:ring-gold-400/20 transition-all bg-stone-100 text-stone-600 ring-white" style={{}}>3</div>
<h4 className="text-sm font-semibold text-stone-900" style={{}}>Preparation</h4>
<p className="text-xs text-stone-500 mt-1" style={{}}>We provide tikanga guides, menu options and key info.</p>
</div>

<div className="p-4 text-center md:text-left group bg-white">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-4 mx-auto md:mx-0 ring-4 shadow-sm group-hover:ring-gold-400/20 transition-all bg-stone-100 text-stone-600 ring-white" style={{}}>4</div>
<h4 className="text-sm font-semibold text-stone-900" style={{}}>Your Stay</h4>
<p className="text-xs text-stone-500 mt-1" style={{}}>Welcome onto the marae. Manaakitanga in action.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold mb-10 text-stone-900" style={{}}>Kōrero from our manuhiri</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl shadow-sm border transition-colors bg-white border-stone-100 hover:border-gold-400/20" style={{}}>
<div className="flex gap-1 mb-4 text-gold-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6 text-stone-600" style={{}}>"Our team retreat at Waimārama was transformative. The facilities were excellent, but it was the warmth of the hosting that made it special."</p>
<div className="flex items-center gap-3">
<div className="bg-stone-200 w-8 h-8 bg-[url(https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&amp;q=80)] bg-cover bg-center rounded-full" style={{}}></div>
<div className="">
<p className="text-[10px] text-stone-400" style={{}}>Corporate Retreat</p>
</div>
</div>
</div>

<div className="p-8 rounded-xl shadow-sm border transition-colors bg-white border-stone-100 hover:border-gold-400/20" style={{}}>
<div className="flex gap-1 mb-4 text-gold-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6 text-stone-600" style={{}}>"The Kura Reo pushed my language skills to the next level. The environment is supportive but challenging in the best way."</p>
<div className="flex items-center gap-3">
<div className="bg-stone-200 w-8 h-8 bg-[url(https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=320&amp;q=80)] bg-cover bg-center rounded-full" style={{}}></div>
<div className="">
<p className="text-[10px] text-stone-400" style={{}}>Kura Reo Student</p>
</div>
</div>
</div>

<div className="p-8 rounded-xl shadow-sm border transition-colors bg-white border-stone-100 hover:border-gold-400/20" style={{}}>
<div className="flex gap-1 mb-4 text-gold-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6 text-stone-600" style={{}}>"A beautiful, well-maintained marae. The kitchen facilities were perfect for our large hui. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="bg-stone-200 w-8 h-8 bg-[url(https://images.unsplash.com/photo-1615464684446-95b73066d285?w=320&amp;q=80)] bg-cover bg-center rounded-full" style={{}}></div>
<div className="">
<p className="text-[10px] text-stone-400" style={{}}>Whānau Reunion</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-t border-stone-200" id="contact" style={{}}>

<div className="relative min-h-[300px] lg:min-h-full overflow-hidden grayscale-[50%] bg-stone-200" style={{}}>

<img alt="Marae Location Landscape" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?w=1600&amp;q=80" style={{}}/>
<div className="flex bg-center text-stone-600 opacity-100 mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15c20dbe-9654-466f-b2be-3423ccad94fa_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0 blur-none backdrop-blur-sm items-center justify-center" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="text-center bg-slate-50/80 border-white border-0 rounded-2xl px-8 py-8 translate-x-1 scale-125">
<svg aria-hidden="true" className="iconify mx-auto mb-3 text-stone-900 iconify--lucide" data-icon="lucide:map-pin" data-width="32" height="32" role="img" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<p className="text-sm font-bold text-stone-900" style={{}}>Waimārama Marae</p>
<p className="text-xs mt-1 text-stone-600" style={{}}>Waimārama Road, Hawke's Bay</p>
<a className="mt-4 inline-block text-xs font-semibold underline text-gold-900" href="#">Get Directions</a>
</div>
</div>
</div>

<div className="lg:p-20 bg-stone-50 pt-10 pr-10 pb-10 pl-10 scale-90">
<h2 className="text-3xl font-semibold mb-2 text-stone-900" style={{}}>Get in touch</h2>
<p className="text-stone-500 mb-8 text-sm" style={{}}>Fill out the form below for bookings, merchandise enquiries or general pātai.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" style={{}}>First Name</label>
<input className="w-full h-10 px-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all border-stone-200 bg-white" style={{}} type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" style={{}}>Last Name</label>
<input className="w-full h-10 px-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all border-stone-200 bg-white" style={{}} type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" style={{}}>Email Address</label>
<input className="focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm bg-white w-full h-10 border-stone-200 border rounded-md pr-3 pl-3" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" style={{}}>Enquiry Type</label>
<div className="relative">
<select className="w-full h-10 px-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 appearance-none border-stone-200 bg-white text-stone-600" style={{}}>
<option>Booking the Marae</option>
<option>Kura Reo Enquiry</option>
<option>Merchandise</option>
<option>Other</option>
</select>
<span className="absolute right-3 top-3 pointer-events-none text-stone-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" style={{}}>Message</label>
<textarea className="w-full p-3 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all border-stone-200 bg-white" rows="4" style={{}}></textarea>
</div>
<button className="w-full h-10 text-sm font-medium rounded-md transition-colors mt-2 shadow-lg bg-stone-900 text-white hover:bg-stone-800 shadow-stone-900/10 hover:shadow-stone-900/20" style={{}} type="button">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 bg-white border-stone-200" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="block text-base font-semibold tracking-tight uppercase mb-4 flex items-center gap-2 text-stone-900" href="#" style={{}}>
                        Waimārama Marae
                    </a>
<p className="text-sm text-stone-500 mb-6" style={{}}>
                        Protecting our past,<br/>building our future.
                    </p>
<div className="flex gap-4">
<a className="transition-colors text-stone-400 hover:text-stone-900" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="transition-colors text-stone-400 hover:text-stone-900" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wide mb-4 text-stone-900" style={{}}>Site</h4>
<ul className="space-y-3 text-sm text-stone-500" style={{}}>
<li className=""><a className="transition-colors hover:text-stone-900" href="#" style={{}}>Home</a></li>
<li><a className="transition-colors hover:text-stone-900" href="#" style={{}}>About</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wide mb-4 text-stone-900" style={{}}>Offerings</h4>
<ul className="space-y-3 text-sm text-stone-500" style={{}}>
<li className=""><a className="transition-colors hover:text-stone-900" href="#" style={{}}>Venue Hire</a></li>
<li className=""><a className="transition-colors hover:text-stone-900" href="#" style={{}}>Kura Reo</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wide mb-4 text-stone-900" style={{}}>Newsletter</h4>
<p className="text-xs text-stone-500 mb-4" style={{}}>Receive updates on Kura Reo dates and marae news.</p>
<form className="flex gap-2">
<input className="w-full h-9 px-3 text-xs border rounded-md focus:outline-none focus:border-gold-400 transition-colors border-stone-200" placeholder="Email address" style={{}} type="email"/>
<button className="h-9 px-3 text-xs font-medium rounded-md transition-colors bg-stone-900 text-white hover:bg-stone-800" style={{}}>Join</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row text-xs text-stone-400 border-stone-100 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p>© 2024 Waimārama Marae. All rights reserved.</p>
<p>Designed with respect.</p>
</div>
</div>
</footer>

    </>
  );
}
