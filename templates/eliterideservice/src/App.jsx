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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="bg-white p-1.5 rounded-lg h-10 w-10 flex items-center justify-center">
<svg className="w-full h-full transform translate-y-1" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" viewbox="0 0 200 150">

<path d="M 55 55 L 65 35 H 135 L 145 55"></path>

<path d="M 45 65 Q 25 60 30 75 L 45 75"></path>
<path d="M 155 65 Q 175 60 170 75 L 155 75"></path>

<path d="M 45 55 Q 100 45 155 55 L 160 80 Q 165 95 160 115 L 155 125 H 45 L 40 115 Q 35 95 40 80 Z"></path>

<path d="M 42 75 L 80 82"></path>
<path d="M 158 75 L 120 82"></path>

<path d="M 55 95 L 145 95 L 135 118 H 65 Z"></path>

<path d="M 90 82 Q 100 85 110 82" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col leading-none justify-center">
<span className="text-white font-medium tracking-tighter text-xl group-hover:text-zinc-300 transition-colors">ELITERIDE</span>
<span className="text-zinc-400 font-normal tracking-tighter text-sm -mt-0.5">SERVICE</span>
</div>
</a>
<div className="hidden md:flex gap-8 items-center text-base font-normal">
<a className="hover:text-white transition-colors" href="#vehicles">Vehicles</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:bg-zinc-200 transition-colors text-sm font-medium text-zinc-950 bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#contact">Book Now</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Car background" className="w-full h-full object-cover opacity-20 select-none" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&amp;fit=crop&amp;q=80&amp;w=2000" style={{}}/>
<div className="bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-normal mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                Available 24/7 across Florida
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                Your trusted private driver <br className="hidden md:block"/> anywhere in Florida.
            </h1>
<p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Safe, discreet, multilingual, and tailored to your needs. 
                Experience premium transportation tailored for families, executives, and travelers.
            </p>
<div className="flex flex-wrap justify-center gap-4 text-base font-normal text-zinc-400 mb-12">
<span className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg border border-white/5 backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-message-circle w-5 h-5 stroke-[1.5]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Falamos Português
                </span>
<span className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg border border-white/5 backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-message-circle w-5 h-5 stroke-[1.5]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> We speak English
                </span>
<span className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg border border-white/5 backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-message-circle w-5 h-5 stroke-[1.5]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Hablamos Español
                </span>
</div>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<a className="h-12 px-8 flex items-center justify-center bg-white text-zinc-950 font-medium rounded-lg hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                    Request a Quote
                </a>
<a className="h-12 px-8 flex items-center justify-center bg-zinc-900 text-white border border-white/10 font-normal rounded-lg hover:bg-zinc-800 transition-all" href="#vehicles">
                    View Fleet
                </a>
</div>
</div>
</header>

<section className="px-6 pb-24" id="vehicles">
<div className="max-w-6xl mx-auto">
<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 relative z-10">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Choose Your Vehicle</h2>
<p className="text-xl text-zinc-400">Tell us your group size and we'll recommend the perfect ride.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative z-10">
<div className="group relative">
<label className="block text-sm font-normal text-zinc-400 mb-2 ml-1">Passengers</label>
<div className="h-16 bg-zinc-950/50 border border-zinc-800 rounded-xl flex items-center px-6 justify-between hover:border-zinc-600 transition-colors cursor-pointer group-hover:ring-1 group-hover:ring-white/10">
<span className="text-xl text-white">1 - 4 People</span>
<svg aria-hidden="true" className="lucide lucide-users text-zinc-500 w-6 h-6 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="group relative">
<label className="block text-sm font-normal text-zinc-400 mb-2 ml-1">Luggage</label>
<div className="h-16 bg-zinc-950/50 border border-zinc-800 rounded-xl flex items-center px-6 justify-between hover:border-zinc-600 transition-colors cursor-pointer group-hover:ring-1 group-hover:ring-white/10">
<span className="text-xl text-white">3 - 6 Suitcases</span>
<svg aria-hidden="true" className="lucide lucide-luggage text-zinc-500 w-6 h-6 stroke-[1.5]" data-lucide="luggage" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"></path><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path><path d="M10 20h4"></path><circle cx="16" cy="20" r="2"></circle><circle cx="8" cy="20" r="2"></circle></svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

<div className="relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group shadow-2xl shadow-black/50">
<div className="h-72 overflow-hidden relative">

<img alt="Jeep SUV" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/851da045-a318-4251-ac72-caaca017b636_800w.png" style={{}}/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Recommended
                                </div>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-white mb-1 tracking-tight">Jeep SUV</h3>
<p className="text-zinc-500 mb-6 text-xl">Maximum comfort &amp; space for families</p>
<ul className="space-y-3 mb-2">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-users w-4 h-4 text-indigo-400 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-zinc-300 text-lg">1–4 passengers</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-briefcase w-4 h-4 text-indigo-400 stroke-[1.5]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-zinc-300 text-lg">3–6 suitcases + strollers</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-map w-4 h-4 text-indigo-400 stroke-[1.5]" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<span className="text-zinc-300 text-lg">Airport &amp; Long-distance</span>
</li>
</ul>
</div>
</div>

<div className="relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group shadow-2xl shadow-black/50">
<div className="h-72 overflow-hidden relative">

<img alt="Toyota Corolla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b2160ef-405e-43b0-be90-f6e5f4bfddc0_800w.png" style={{}}/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 text-xs font-medium border border-white/10">
                                    Business
                                </div>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-white mb-1 tracking-tight">Toyota Corolla</h3>
<p className="text-zinc-500 mb-6 text-xl">Efficient &amp; smooth city ride</p>
<ul className="space-y-3 mb-2">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-users w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-zinc-300 text-lg">1–3 passengers</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-briefcase w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-zinc-300 text-lg">1–3 suitcases</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-clock w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-zinc-300 text-lg">Quick city trips</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Why Choose EliteRide?</h2>
<p className="text-2xl text-zinc-400 max-w-2xl">Your comfort and privacy always come first. We provide a first-class experience for every mile.</p>
</div>
<div className="hidden md:block">
<svg aria-hidden="true" className="lucide lucide-shield-check w-14 h-14 text-zinc-800 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4 p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-2 shadow-inner shadow-white/5">
<svg aria-hidden="true" className="lucide lucide-globe w-7 h-7 stroke-[1.5]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-2xl font-normal text-white">Multilingual Service</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Communication is key. We serve clients fluently in Portuguese (PT), English (EN), and Spanish (ES).
                    </p>
</div>

<div className="flex flex-col gap-4 p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-2 shadow-inner shadow-white/5">
<svg aria-hidden="true" className="lucide lucide-star w-7 h-7 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-2xl font-normal text-white">Professional &amp; Discreet</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Punctuality and privacy are our pillars. Clean vehicles and safe driving for peace of mind.
                    </p>
</div>

<div className="flex flex-col gap-4 p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-2 shadow-inner shadow-white/5">
<svg aria-hidden="true" className="lucide lucide-map-pin w-7 h-7 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-normal text-white">Statewide Coverage</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        From airport pickups to long-distance rides across the entire state of Florida.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="text-2xl w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10">🇺🇸</div>
<h2 className="text-3xl font-medium text-white tracking-tight">About Us</h2>
</div>
<div className="prose prose-invert prose-xl text-zinc-400">
<p className="mb-6 leading-relaxed">
                            EliteRide Service is a private transportation company based in Florida, offering discreet, reliable rides to any destination across the state. Whether you're heading to a business meeting, airport, event, or simply need a comfortable ride, we’re here to drive you safely and professionally.
                        </p>
<p className="leading-relaxed">
                            We proudly serve clients in English, Portuguese, and Spanish, ensuring clear communication and personalized service for every passenger. Our team values privacy, punctuality, and comfort — making every ride a premium experience.
                        </p>
</div>
</div>

<div className="lg:border-l lg:border-white/10 lg:pl-16">
<div className="flex items-center gap-3 mb-6">
<div className="text-2xl w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10">🇧🇷</div>
<h2 className="text-3xl font-medium text-white tracking-tight">Sobre Nós</h2>
</div>
<div className="prose prose-invert prose-xl text-zinc-400">
<p className="mb-6 leading-relaxed">
                            A EliteRide Service é uma empresa de transporte privado localizada na Flórida, oferecendo viagens seguras e discretas para qualquer lugar do estado. Seja para reuniões, aeroportos, eventos ou deslocamentos diários, estamos prontos para levar você com conforto e profissionalismo.
                        </p>
<p className="leading-relaxed">
                            Atendemos nossos clientes em português, inglês e espanhol, garantindo uma comunicação clara e um serviço personalizado em cada trajeto. Valorizamos a privacidade, pontualidade e bem-estar — transformando cada viagem em uma experiência de alto padrão.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 border-t border-white/5 bg-zinc-950 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-full h-[500px] bg-indigo-900/10 blur-[150px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center p-5 bg-zinc-900/50 border border-white/5 rounded-2xl mb-8 backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-send w-10 h-10 text-white stroke-[1.5]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Get a Quote Today</h2>
<p className="text-2xl text-zinc-400 mb-10">
                DM us or request a quote anytime. We respond quickly to confirm your booking.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-xl px-8 py-6 w-full md:w-auto hover:bg-zinc-800 hover:border-white/20 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]" href="mailto:eliterideservicebr@gmail.com">
<div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors border border-white/5">
<svg aria-hidden="true" className="lucide lucide-mail w-6 h-6 text-white stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="text-left">
<span className="block text-sm text-zinc-500 font-medium uppercase tracking-wider mb-0.5">Email Us</span>
<span className="text-xl text-white font-medium">eliterideservicebr@gmail.com</span>
</div>
</a>
<a className="group flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-xl px-8 py-6 w-full md:w-auto hover:bg-zinc-800 hover:border-white/20 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]" href="https://instagram.com/eliterideservicebr">
<div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors border border-white/5">
<svg aria-hidden="true" className="lucide lucide-instagram w-6 h-6 text-white stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="text-left">
<span className="block text-sm text-zinc-500 font-medium uppercase tracking-wider mb-0.5">Follow Us</span>
<span className="text-xl text-white font-medium">@eliterideservicebr</span>
</div>
</a>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-base">
<p>© 2024 EliteRide Service. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0 font-medium">
<span className="cursor-pointer hover:text-zinc-400 transition-colors">Privacy Policy</span>
<span className="cursor-pointer hover:text-zinc-400 transition-colors">Terms of Service</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
