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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#1f2937',
950: '#020617',
}
}
}
}
}



                  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                


        const themeToggleBtn = document.getElementById('theme-toggle');
        
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    
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
      

<header className="fixed w-full top-0 z-50 border-b border-slate-200/50 dark:border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900 dark:text-white group-hover:opacity-80 transition-opacity">BISHKEKSTAY</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#apartments">Apartments</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#features">Amenities</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#location">Location</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#about">About</a>
</nav>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10 transition-all focus:outline-none" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="lucide:sun" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" width="18"></iconify-icon>
</button>
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-xs font-medium text-white shadow transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200" href="#">
                    Host your home
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center">

<div className="aura-background-component top-0 w-full -z-10 absolute h-full opacity-60 dark:opacity-40 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 mb-6 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Now available in Downtown
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    Experience Bishkek <br className="hidden md:block"/> like never before.
                </h1>
<p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                    Premium short-term rentals designed for comfort and style. <br className="hidden md:block"/> Whether for business or leisure, find your perfect sanctuary.
                </p>

<div className="w-full max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
<form className="flex flex-col md:flex-row items-center gap-2">

<div className="w-full md:flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 p-1">
<div className="relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors p-3">
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Check in</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:calendar" width="16"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm font-medium text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-900 dark:placeholder:text-white" onblur="(this.type='text')" onfocus="(this.type='date')" placeholder="Add date" type="text"/>
</div>
</div>
<div className="relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors p-3">
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Check out</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:calendar" width="16"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm font-medium text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-900 dark:placeholder:text-white" onblur="(this.type='text')" onfocus="(this.type='date')" placeholder="Add date" type="text"/>
</div>
</div>
<div className="col-span-2 md:col-span-1 relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors p-3 border-t md:border-t-0 md:border-l border-slate-100 dark:border-white/10">
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Guests</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:users" width="16"></iconify-icon>
<select className="w-full bg-transparent border-none text-sm font-medium text-slate-900 dark:text-white focus:outline-none appearance-none cursor-pointer py-0">
<option className="dark:bg-slate-900">2 Guests</option>
<option className="dark:bg-slate-900">1 Guest</option>
<option className="dark:bg-slate-900">3 Guests</option>
<option className="dark:bg-slate-900">4+ Guests</option>
</select>
</div>
</div>
</div>

<button className="w-full md:w-auto h-14 md:h-full aspect-square rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 flex items-center justify-center transition-all shadow-lg hover:scale-[1.02] active:scale-95" type="button">
<iconify-icon icon="lucide:search" strokeWidth="2" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-950/50" id="apartments">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Curated Stays</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm">Hand-picked apartments in the heart of Bishkek.</p>
</div>
<a className="text-sm font-medium text-slate-900 dark:text-white hover:opacity-70 flex items-center gap-1 transition-opacity" href="#">
                        View all listings 
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-900">
<img alt="Apartment 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-md text-xs font-semibold shadow-sm">
                                4.9 <span className="text-yellow-500">★</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">Panfilov Park Suite</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Near Ala-Too Square</p>
</div>
<div className="text-right">
<p className="text-base font-medium text-slate-900 dark:text-white">$65</p>
<p className="text-xs text-slate-500 dark:text-slate-400">night</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-900">
<img alt="Apartment 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-md text-xs font-semibold shadow-sm">
                                4.8 <span className="text-yellow-500">★</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">Erkindik Boulevard Loft</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">City Center</p>
</div>
<div className="text-right">
<p className="text-base font-medium text-slate-900 dark:text-white">$82</p>
<p className="text-xs text-slate-500 dark:text-slate-400">night</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-900">
<img alt="Apartment 3" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-md text-xs font-semibold shadow-sm">
                                5.0 <span className="text-yellow-500">★</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">Mountain View Penthouse</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">South District</p>
</div>
<div className="text-right">
<p className="text-base font-medium text-slate-900 dark:text-white">$120</p>
<p className="text-xs text-slate-500 dark:text-slate-400">night</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200/60 dark:border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-6">
                            Everything you need <br /> for a perfect stay.
                        </br></h2>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            We’ve streamlined the experience of renting in Bishkek. From high-speed Wi-Fi to 24/7 support, every detail is considered so you can focus on your trip.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10">
<iconify-icon className="text-slate-900 dark:text-white" icon="lucide:wifi"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-1">Fast Wi-Fi</h4>
<p className="text-xs text-slate-500">Reliable connections in every unit.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10">
<iconify-icon className="text-slate-900 dark:text-white" icon="lucide:key"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-1">Self Check-in</h4>
<p className="text-xs text-slate-500">Seamless entry, any time of day.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10">
<iconify-icon className="text-slate-900 dark:text-white" icon="lucide:sparkles"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-1">Professional Cleaning</h4>
<p className="text-xs text-slate-500">Hotel-grade standards before arrival.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10">
<iconify-icon className="text-slate-900 dark:text-white" icon="lucide:shield-check"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-1">Secure Booking</h4>
<p className="text-xs text-slate-500">Verified properties and payments.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl dark:opacity-20"></div>
<div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
<iconify-icon className="text-slate-900" icon="lucide:message-square" width="20"></iconify-icon>
</div>
<div className="text-white">
<p className="text-sm font-medium">24/7 Support</p>
<p className="text-xs opacity-80">We are always here to help.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-4">Prime Location</h2>
<p className="text-slate-500 dark:text-slate-400 max-w-2xl">
                        Situated in the Golden Square of Bishkek. Minutes away from Erkindik Boulevard and the best coffee shops in town.
                    </p>
</div>

<div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm group">

<div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 transition-colors">
<img alt="Map Location" className="w-full h-full object-cover opacity-80 dark:opacity-40 grayscale contrast-125 dark:invert dark:hue-rotate-180 transition-all duration-500" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative flex h-8 w-8">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-8 w-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 transition-colors">
<iconify-icon icon="lucide:home" width="14"></iconify-icon>
</span>
</div>

<div className="mt-3 px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-100 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap transform translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            BishkekStay HQ
                         </div>
</div>

<div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-white/10 p-5 rounded-2xl shadow-xl transition-colors">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900 dark:text-white" icon="lucide:map-pin"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white text-sm">Erkindik Blvd 12</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Bishkek, Kyrgyzstan</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="lucide:coffee" width="14"></iconify-icon> Sierra Coffee
                                </span>
<span className="font-medium text-slate-900 dark:text-white">2 min walk</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Dordoi Plaza
                                </span>
<span className="font-medium text-slate-900 dark:text-white">10 min drive</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="lucide:plane" width="14"></iconify-icon> Manas Airport
                                </span>
<span className="font-medium text-slate-900 dark:text-white">35 min drive</span>
</div>
</div>
<button className="w-full mt-4 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-medium hover:opacity-90 transition-opacity">
                            Get Directions
                        </button>
</div>

<div className="absolute top-6 right-6 flex flex-col gap-2">
<button className="w-8 h-8 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 shadow-lg transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 shadow-lg transition-colors">
<iconify-icon icon="lucide:minus" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 shadow-lg transition-colors mt-2">
<iconify-icon icon="lucide:compass" width="16"></iconify-icon>
</button>
</div>

<div className="absolute bottom-2 right-3 text-[10px] text-slate-400 dark:text-slate-600 font-medium select-none bg-white/50 dark:bg-black/50 px-1.5 py-0.5 rounded backdrop-blur">
                        © Mapbox © OpenStreetMap
                    </div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200/60 dark:border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-4">Stay updated</h2>
<p className="text-slate-500 dark:text-slate-400 mb-8">Join our newsletter for exclusive offers and travel guides to Kyrgyzstan.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Enter your email" type="email"/>
<button className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                        Subscribe
                    </button>
</form>
</div>
</section>
</main>

<footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-bold tracking-tighter text-slate-900 dark:text-white block mb-4">BISHKEKSTAY</span>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                        Elevating the short-term rental market in Kyrgyzstan with modern design and exceptional service.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Platform</h3>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Browse Homes</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Map Search</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Amenities</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Support</h3>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Cancellation Options</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Trust &amp; Safety</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-white/10 gap-4">
<p className="text-xs text-slate-500 dark:text-slate-400">
                    © 2024 BishkekStay System. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
