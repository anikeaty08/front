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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#FFF8F0]/80 backdrop-blur-md border-b border-[#1ECAD3]/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#1ECAD3] rounded-xl flex items-center justify-center text-white text-xl font-['Nunito'] font-semibold tracking-tighter shadow-lg shadow-[#1ECAD3]/20 group-hover:scale-105 transition-transform duration-300">
                    DW
                </div>
<span className="text-xl font-['Nunito'] font-semibold tracking-tight text-slate-900">Dreamwave</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#1ECAD3] transition-colors" href="#rooms">Rooms</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1ECAD3] transition-colors" href="#amenities">Experience</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1ECAD3] transition-colors" href="#gallery">Gallery</a>
<a className="bg-[#FF7A59] hover:bg-[#ff6138] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#FF7A59]/30 hover:-translate-y-0.5 flex items-center gap-2" href="#book">
                    Book Your Escape
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden text-slate-800 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Tropical Pool" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FFF8F0]"></div>
<div className="absolute inset-0 bg-[#1ECAD3]/10 mix-blend-overlay"></div>
</div>
<div className="relative z-10 text-center max-w-3xl px-6 mt-10">
<div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full mb-6 shadow-sm animate-[fadeIn_1s_ease-out]">
<iconify-icon className="text-[#FF7A59]" icon="solar:sun-2-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold text-[#FF7A59] uppercase tracking-wider">The Vacation Starts Now</span>
</div>
<h1 className="font-['Nunito'] text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Welcome to your <br/>
<span className="text-[#bafffd]">island escape.</span>
</h1>
<p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed font-medium drop-shadow-sm">
                Nandito ka na. Bakasyon na. Let the waves handle the stress while you enjoy the sun, sand, and soul of Dreamwave.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#1ECAD3] hover:bg-[#19b1b9] text-white text-base font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-[#1ECAD3]/30 hover:-translate-y-1 flex items-center justify-center gap-2" href="#book">
<iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
                    Book Your Stay
                </a>
<a className="w-full sm:w-auto bg-white/90 hover:bg-white text-slate-800 text-base font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg backdrop-blur flex items-center justify-center gap-2" href="#rooms">
                    View Rooms
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF7A59]/10 rounded-full blur-3xl"></div>
<img alt="Relaxing with drink" className="relative z-10 rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 w-full object-cover h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-[#E0F7F8] p-2 rounded-full text-[#1ECAD3]">
<iconify-icon icon="solar:music-note-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Current Vibe</p>
<p className="text-sm font-semibold text-slate-900">Tropical House Mix</p>
</div>
</div>
</div>
<div>
<h2 className="font-['Nunito'] text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
                    Feels like a beach party at <span className="text-[#FF7A59]">golden hour.</span>
</h2>
<p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Dreamwave isn't just a hotel; it's that feeling when you finally take your slippers off and feel the sand. Whether you're a local looking for a weekend reset or a traveler seeking tropical energy, we've curated every corner to spark joy.
                </p>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<iconify-icon className="text-[#1ECAD3]" icon="solar:confetti-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-['Nunito'] font-semibold text-lg text-slate-900">Pure Joy</h3>
<p className="text-sm text-slate-500">Carefree vibes and colorful spaces designed for smiles.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-[#1ECAD3]" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-['Nunito'] font-semibold text-lg text-slate-900">Island Energy</h3>
<p className="text-sm text-slate-500">Fresh air, green corners, and a rhythm that slows down time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white rounded-t-[3rem] border-t border-slate-100" id="rooms">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-[#1ECAD3] font-semibold tracking-widest text-xs uppercase mb-3 block">Accommodations</span>
<h2 className="font-['Nunito'] text-4xl font-semibold text-slate-900 tracking-tight mb-4">Your Room is Waiting</h2>
<p className="text-slate-500 text-lg">Clean lines, soft beds, and just enough tropical flair to remind you where you are.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-[#FFF8F0] rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#1ECAD3]/20">
<div className="h-64 overflow-hidden relative">
<img alt="The Solo Wave" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                            Best Seller
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="font-['Nunito'] text-xl font-semibold text-slate-900">The Solo Wave</h3>
<span className="text-[#1ECAD3] font-bold">₱3,500<span className="text-slate-400 text-sm font-normal">/n</span></span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Perfect for the digital nomad or solo soul-searcher. High-speed wifi included.</p>
<div className="flex gap-3 mb-8">
<div className="flex items-center gap-1 text-slate-400 text-xs bg-white px-2 py-1 rounded-lg">
<iconify-icon icon="solar:user-linear" width="14"></iconify-icon> 1 Guest
                            </div>
<div className="flex items-center gap-1 text-slate-400 text-xs bg-white px-2 py-1 rounded-lg">
<iconify-icon icon="solar:bed-linear" width="14"></iconify-icon> Queen
                            </div>
</div>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-[#1ECAD3] hover:text-white hover:border-[#1ECAD3] transition-colors flex items-center justify-center gap-2">
                            Check Availability
                        </button>
</div>
</div>

<div className="group bg-[#FFF8F0] rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#1ECAD3]/20">
<div className="h-64 overflow-hidden relative">
<img alt="Couple's Cove" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="font-['Nunito'] text-xl font-semibold text-slate-900">Couple's Cove</h3>
<span className="text-[#1ECAD3] font-bold">₱5,200<span className="text-slate-400 text-sm font-normal">/n</span></span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">A romantic setup with balcony views. Sunset watching is mandatory here.</p>
<div className="flex gap-3 mb-8">
<div className="flex items-center gap-1 text-slate-400 text-xs bg-white px-2 py-1 rounded-lg">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="14"></iconify-icon> 2 Guests
                            </div>
<div className="flex items-center gap-1 text-slate-400 text-xs bg-white px-2 py-1 rounded-lg">
<iconify-icon icon="solar:sofa-linear" width="14"></iconify-icon> Balcony
                            </div>
</div>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-[#1ECAD3] hover:text-white hover:border-[#1ECAD3] transition-colors flex items-center justify-center gap-2">
                            Check Availability
                        </button>
</div>
</div>

<div className="group bg-[#FFF8F0] rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#1ECAD3]/20">
<div className="h-64 overflow-hidden relative">
<img alt="Barkada Suite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-[#FF7A59] px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                            Group Fav
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="font-['Nunito'] text-xl font-semibold text-slate-900">Barkada Suite</h3>
<span className="text-[#1ECAD3] font-bold">₱8,500<span className="text-slate-400 text-sm font-normal">/n</span></span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Spacious enough for games, stories, and late-night snacks. The ultimate sleepover.</p>
<div className="flex gap-3 mb-8">
<div className="flex items-center gap-1 text-slate-400 text-xs bg-white px-2 py-1 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> 4-6 Guests
                            </div>
<div className="flex items-center gap-1 text-slate-400 text-xs bg-white px-2 py-1 rounded-lg">
<iconify-icon icon="solar:fridge-linear" width="14"></iconify-icon> Kitchenette
                            </div>
</div>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-[#1ECAD3] hover:text-white hover:border-[#1ECAD3] transition-colors flex items-center justify-center gap-2">
                            Check Availability
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1ECAD3] relative overflow-hidden" id="amenities">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 50 Q 25 25 50 50 T 100 50 V 100 H 0 Z" fill="white"></path>
<path d="M0 70 Q 25 45 50 70 T 100 70 V 100 H 0 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-['Nunito'] text-4xl font-semibold text-white tracking-tight mb-2">Experiences</h2>
<p className="text-[#bafffd] text-lg">More than just a place to sleep.</p>
</div>
<button className="bg-white text-[#1ECAD3] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#E0F7F8] transition-colors self-start md:self-auto">
                    View Activity Schedule
                </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-default">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1ECAD3] mb-4 shadow-md">
<iconify-icon icon="solar:water-sun-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="font-['Nunito'] font-semibold text-white text-lg mb-1">Infinity Pool</h3>
<p className="text-white/80 text-sm">Open until 10 PM for starry swims.</p>
</div>

<div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-default">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF7A59] mb-4 shadow-md">
<iconify-icon icon="solar:wineglass-triangle-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="font-['Nunito'] font-semibold text-white text-lg mb-1">Tiki Bar</h3>
<p className="text-white/80 text-sm">Signature cocktails and fresh juices.</p>
</div>

<div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-default">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1ECAD3] mb-4 shadow-md">
<iconify-icon icon="solar:bicycle-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="font-['Nunito'] font-semibold text-white text-lg mb-1">Island Tours</h3>
<p className="text-white/80 text-sm">Bikes and guides available daily.</p>
</div>

<div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-default">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF7A59] mb-4 shadow-md">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="font-['Nunito'] font-semibold text-white text-lg mb-1">Local Dining</h3>
<p className="text-white/80 text-sm">Authentic island flavors.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FFF8F0]" id="gallery">
<div className="max-w-7xl mx-auto">
<h2 className="font-['Nunito'] text-4xl font-semibold text-slate-900 tracking-tight mb-10 text-center">Moments we love</h2>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Sunset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Golden hour magic ✨</p>
</div>
</div>
<div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group relative">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&amp;w=2575&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group relative">
<img alt="Poolside" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 row-span-1 rounded-3xl overflow-hidden group relative">
<img alt="Hotel View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-100" id="book">
<div className="max-w-4xl mx-auto bg-[#FFF8F0] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-[#1ECAD3]/10">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1ECAD3]/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<h2 className="font-['Nunito'] text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Start Your Journey</h2>
<p className="text-slate-500">Let us know when you're arriving, and we'll prepare the coconuts. 🥥</p>
</div>
<form className="relative z-10 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide ml-2">Check-in</label>
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1ECAD3] transition-colors" icon="solar:calendar-linear" width="20"></iconify-icon>
<input className="w-full bg-white border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-800 font-medium shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-[#1ECAD3] focus:outline-none transition-all cursor-pointer" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide ml-2">Check-out</label>
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1ECAD3] transition-colors" icon="solar:calendar-linear" width="20"></iconify-icon>
<input className="w-full bg-white border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-800 font-medium shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-[#1ECAD3] focus:outline-none transition-all cursor-pointer" type="date"/>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide ml-2">Guests</label>
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1ECAD3] transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<select className="w-full bg-white border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-800 font-medium shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-[#1ECAD3] focus:outline-none transition-all appearance-none cursor-pointer">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4+ Guests</option>
<option>Large Group</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide ml-2">Room Type</label>
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1ECAD3] transition-colors" icon="solar:bed-linear" width="20"></iconify-icon>
<select className="w-full bg-white border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-800 font-medium shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-[#1ECAD3] focus:outline-none transition-all appearance-none cursor-pointer">
<option>The Solo Wave</option>
<option>Couple's Cove</option>
<option>Barkada Suite</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide ml-2">Email Address</label>
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1ECAD3] transition-colors" icon="solar:letter-linear" width="20"></iconify-icon>
<input className="w-full bg-white border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-800 font-medium shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-[#1ECAD3] focus:outline-none transition-all placeholder:text-slate-300" placeholder="hello@example.com" type="email"/>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-[#1ECAD3] hover:bg-[#19b1b9] text-white text-lg font-semibold py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-[#1ECAD3]/20 hover:-translate-y-1 flex items-center justify-center gap-2 group" type="button">
                        Inquire Availability
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plane-linear" width="24"></iconify-icon>
</button>
<p className="text-center text-slate-400 text-xs mt-4">No credit card required for inquiry.</p>
</div>
</form>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-10 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#1ECAD3] rounded-lg flex items-center justify-center text-white text-sm font-['Nunito'] font-bold">DW</div>
<span className="text-lg font-['Nunito'] font-bold text-slate-900">Dreamwave</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Your tropical sanctuary designed for joy, relaxation, and making memories.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#FF7A59] transition-colors" href="#">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#FF7A59] transition-colors" href="#">
<iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#FF7A59] transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-['Nunito'] font-semibold text-slate-900 mb-4">Explore</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Rooms</a></li>
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Amenities</a></li>
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Dining</a></li>
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h4 className="font-['Nunito'] font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Press</a></li>
<li><a className="hover:text-[#1ECAD3] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-['Nunito'] font-semibold text-slate-900 mb-4">Find Us</h4>
<div className="flex items-start gap-3 mb-4">
<iconify-icon className="text-[#FF7A59] mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<p className="text-slate-500 text-sm">
                            123 Palm Avenue,<br/>
                            Tropical Island, PH 5400
                        </p>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF7A59]" icon="solar:phone-linear" width="20"></iconify-icon>
<p className="text-slate-500 text-sm">+63 917 123 4567</p>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs">© 2024 Dreamwave Hotel. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
