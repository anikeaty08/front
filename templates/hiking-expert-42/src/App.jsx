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
      

<div className="wpa-texture"></div>

<nav className="fixed top-0 w-full z-40 bg-[#2D6F81] text-[#F8F5F0] border-b-4 border-[#FCCF79] shadow-lg">
<div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-10 h-10 bg-[#FCCF79] rounded-full flex items-center justify-center text-[#4E1C12] border-2 border-[#F8F5F0]">
<iconify-icon icon="solar:hiking-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-wpa text-xl leading-none tracking-tight uppercase font-medium">The Trailmaster</span>
<span className="font-wpa text-xs tracking-widest text-[#FCCF79] uppercase opacity-90">John McKinney</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="font-wpa uppercase tracking-widest text-sm hover:text-[#FCCF79] transition-colors" href="#trails">Trails</a>
<a className="font-wpa uppercase tracking-widest text-sm hover:text-[#FCCF79] transition-colors" href="#tales">Tales</a>
<a className="font-wpa uppercase tracking-widest text-sm hover:text-[#FCCF79] transition-colors" href="#tips">Tips</a>
<a className="font-wpa uppercase tracking-widest text-sm hover:text-[#FCCF79] transition-colors" href="#shop">Shop</a>
<a className="font-wpa uppercase tracking-widest text-sm hover:text-[#FCCF79] transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<button className="hover:text-[#FCCF79] transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="relative hover:text-[#FCCF79] transition-colors">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#AF5342] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</button>

<button className="md:hidden text-[#F8F5F0]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#2D6F81] overflow-hidden">

<div className="absolute inset-0 z-0">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FCCF79] rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>

<div className="absolute bottom-0 left-0 w-full h-48 bg-[#4E1C12] opacity-30 clip-mountain-top"></div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-[#4E1C12] opacity-60 clip-mountain-top" style={{transform: 'scaleX(-1)'}}></div>
</div>
<div className="container mx-auto px-4 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 flex flex-col gap-6 text-[#F8F5F0]">
<div className="inline-flex items-center gap-2 text-[#FCCF79] border border-[#FCCF79] px-3 py-1 w-fit rounded-sm">
<iconify-icon icon="solar:videocamera-record-linear" width="16"></iconify-icon>
<span className="font-wpa text-xs uppercase tracking-widest">Featured Series</span>
</div>
<h1 className="font-wpa text-6xl lg:text-7xl font-medium uppercase tracking-tight leading-[0.9] text-shadow-sm">
                        Every Trail <br/>
<span className="text-[#FCCF79]">Tells a Story</span>
</h1>
<p className="text-lg lg:text-xl font-light text-[#F8F5F0] opacity-90 max-w-md leading-relaxed">
                        Follow John McKinney as he shares his unique philosophy and the mental, physical, and spiritual benefits of hiking California's wild places.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-[#AF5342] text-[#F8F5F0] border-2 border-[#AF5342] px-8 py-3 font-wpa uppercase tracking-widest text-sm hover:bg-[#4E1C12] hover:border-[#4E1C12] transition-all retro-shadow retro-shadow-hover">
                            Discover More
                        </button>
<button className="bg-transparent text-[#FCCF79] border-2 border-[#FCCF79] px-8 py-3 font-wpa uppercase tracking-widest text-sm hover:bg-[#FCCF79] hover:text-[#4E1C12] transition-all">
                            Visit Shop
                        </button>
</div>
</div>

<div className="lg:col-span-7 relative">

<div className="bg-[#181D14] p-2 retro-shadow border-4 border-[#FCCF79]">
<div className="aspect-video w-full bg-black relative group cursor-pointer overflow-hidden">

<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=2021&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-[#AF5342] rounded-full flex items-center justify-center text-white retro-shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="2" width="40"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<span className="bg-[#2D6F81] text-white px-3 py-1 font-wpa text-sm uppercase tracking-wide">Now Playing</span>
<h3 className="text-white font-wpa text-2xl uppercase mt-2 tracking-wide drop-shadow-md">Hike California State Parks</h3>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-6">

<div className="cursor-pointer border-2 border-[#FCCF79] opacity-100">
<div className="aspect-video bg-[#181D14] relative">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
</div>
<p className="bg-[#2D6F81] text-[#F8F5F0] text-[10px] font-wpa uppercase p-1 truncate">State Parks</p>
</div>

<div className="cursor-pointer border-2 border-transparent hover:border-[#AF5342] opacity-70 hover:opacity-100 transition-all">
<div className="aspect-video bg-[#181D14] relative">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
</div>
<p className="bg-[#4E1C12] text-[#F8F5F0] text-[10px] font-wpa uppercase p-1 truncate">Holy Mountain</p>
</div>

<div className="cursor-pointer border-2 border-transparent hover:border-[#AF5342] opacity-70 hover:opacity-100 transition-all">
<div className="aspect-video bg-[#181D14] relative">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
</div>
<p className="bg-[#4E1C12] text-[#F8F5F0] text-[10px] font-wpa uppercase p-1 truncate">Trail Building</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-8 bg-[#F8F5F0] clip-mountain-bottom"></div>
</header>

<section className="py-20 container mx-auto px-4 lg:px-8" id="trails">
<div className="text-center mb-12">
<span className="text-[#AF5342] font-wpa uppercase tracking-widest text-sm font-medium">Explore The Golden State</span>
<h2 className="text-[#2D6F81] font-wpa text-4xl lg:text-5xl uppercase tracking-tight mt-2">California's Diverse Landscapes</h2>
<div className="w-24 h-1 bg-[#FCCF79] mx-auto mt-4"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-[#181D14] retro-shadow-sm border border-[#2D6F81] overflow-hidden">
<div className="aspect-[4/5] relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181D14] via-transparent to-transparent opacity-90"></div>

<div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#FCCF79]"></div>
<div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#FCCF79]"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-[#F8F5F0] font-wpa text-3xl uppercase tracking-tight mb-2">Coastal Trails</h3>
<p className="text-[#F8F5F0] text-sm opacity-80 mb-4 font-light leading-snug">Dramatic cliffs and ocean vistas along the California Coastal Trail.</p>
<a className="inline-block bg-[#AF5342] text-[#F8F5F0] text-xs font-wpa uppercase tracking-widest px-4 py-2 hover:bg-[#FCCF79] hover:text-[#4E1C12] transition-colors" href="#">
                            Explore Guide
                        </a>
</div>
</div>
</div>

<div className="group relative bg-[#181D14] retro-shadow-sm border border-[#2D6F81] overflow-hidden">
<div className="aspect-[4/5] relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181D14] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#FCCF79]"></div>
<div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#FCCF79]"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-[#F8F5F0] font-wpa text-3xl uppercase tracking-tight mb-2">High Sierra</h3>
<p className="text-[#F8F5F0] text-sm opacity-80 mb-4 font-light leading-snug">Granite peaks of Yosemite and Sequoia National Parks.</p>
<a className="inline-block bg-[#AF5342] text-[#F8F5F0] text-xs font-wpa uppercase tracking-widest px-4 py-2 hover:bg-[#FCCF79] hover:text-[#4E1C12] transition-colors" href="#">
                            Explore Guide
                        </a>
</div>
</div>
</div>

<div className="group relative bg-[#181D14] retro-shadow-sm border border-[#2D6F81] overflow-hidden">
<div className="aspect-[4/5] relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1505521216430-8b73b2067df0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181D14] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#FCCF79]"></div>
<div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#FCCF79]"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-[#F8F5F0] font-wpa text-3xl uppercase tracking-tight mb-2">Desert Wonders</h3>
<p className="text-[#F8F5F0] text-sm opacity-80 mb-4 font-light leading-snug">Golden dunes of Death Valley and twisted Joshua Trees.</p>
<a className="inline-block bg-[#AF5342] text-[#F8F5F0] text-xs font-wpa uppercase tracking-widest px-4 py-2 hover:bg-[#FCCF79] hover:text-[#4E1C12] transition-colors" href="#">
                            Explore Guide
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#4E1C12] text-[#F8F5F0] relative overflow-hidden" id="guides">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, #FCCF79 0, #FCCF79 2px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
<div className="container mx-auto px-4 lg:px-8 relative z-10">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="font-wpa text-4xl lg:text-5xl uppercase tracking-tight text-[#FCCF79]">Day Hiking Guides</h2>
<p className="text-[#F8F5F0] opacity-80 mt-2 font-light">The definitive collection for California explorers.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 border border-[#FCCF79] text-[#FCCF79] flex items-center justify-center hover:bg-[#FCCF79] hover:text-[#4E1C12]">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 border border-[#FCCF79] text-[#FCCF79] flex items-center justify-center hover:bg-[#FCCF79] hover:text-[#4E1C12]">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-8">

<div className="min-w-[220px] md:min-w-[260px] snap-center group">
<div className="aspect-[2/3] bg-[#2D6F81] border-4 border-[#F8F5F0] relative retro-shadow transition-transform group-hover:-translate-y-2">

<div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-center">
<div className="w-full text-center border-b-2 border-[#FCCF79] pb-2">
<span className="font-wpa text-[#FCCF79] text-xs uppercase tracking-widest block">The Trailmaster</span>
</div>
<h3 className="font-wpa text-3xl uppercase leading-none text-[#F8F5F0] mt-4">Hike<br/>Yosemite</h3>
<div className="w-16 h-16 rounded-full bg-[#FCCF79] opacity-20 blur-xl"></div>
<div className="bg-[#181D14] w-full py-1 mt-auto">
<span className="font-wpa text-[#FCCF79] text-sm">John McKinney</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-wpa text-xl text-[#F8F5F0]">$16.95</span>
<button className="text-[#AF5342] hover:text-[#FCCF79] font-wpa uppercase text-xs tracking-widest flex items-center gap-1">
                            Add <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[220px] md:min-w-[260px] snap-center group">
<div className="aspect-[2/3] bg-[#AF5342] border-4 border-[#F8F5F0] relative retro-shadow transition-transform group-hover:-translate-y-2">
<div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-center">
<div className="w-full text-center border-b-2 border-[#FCCF79] pb-2">
<span className="font-wpa text-[#FCCF79] text-xs uppercase tracking-widest block">The Trailmaster</span>
</div>
<h3 className="font-wpa text-3xl uppercase leading-none text-[#F8F5F0] mt-4">Hike<br/>Los Angeles</h3>
<div className="w-16 h-16 rounded-full bg-[#FCCF79] opacity-20 blur-xl"></div>
<div className="bg-[#181D14] w-full py-1 mt-auto">
<span className="font-wpa text-[#FCCF79] text-sm">John McKinney</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-wpa text-xl text-[#F8F5F0]">$16.95</span>
<button className="text-[#AF5342] hover:text-[#FCCF79] font-wpa uppercase text-xs tracking-widest flex items-center gap-1">
                            Add <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[220px] md:min-w-[260px] snap-center group">
<div className="aspect-[2/3] bg-[#2D6F81] border-4 border-[#F8F5F0] relative retro-shadow transition-transform group-hover:-translate-y-2">
<div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-center">
<div className="w-full text-center border-b-2 border-[#FCCF79] pb-2">
<span className="font-wpa text-[#FCCF79] text-xs uppercase tracking-widest block">The Trailmaster</span>
</div>
<h3 className="font-wpa text-3xl uppercase leading-none text-[#F8F5F0] mt-4">Hike<br/>Redwoods</h3>
<div className="w-16 h-16 rounded-full bg-[#FCCF79] opacity-20 blur-xl"></div>
<div className="bg-[#181D14] w-full py-1 mt-auto">
<span className="font-wpa text-[#FCCF79] text-sm">John McKinney</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-wpa text-xl text-[#F8F5F0]">$16.95</span>
<button className="text-[#AF5342] hover:text-[#FCCF79] font-wpa uppercase text-xs tracking-widest flex items-center gap-1">
                            Add <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[220px] md:min-w-[260px] snap-center group">
<div className="aspect-[2/3] bg-[#181D14] border-4 border-[#F8F5F0] relative retro-shadow transition-transform group-hover:-translate-y-2">
<div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-center">
<div className="w-full text-center border-b-2 border-[#FCCF79] pb-2">
<span className="font-wpa text-[#FCCF79] text-xs uppercase tracking-widest block">The Trailmaster</span>
</div>
<h3 className="font-wpa text-3xl uppercase leading-none text-[#F8F5F0] mt-4">Hike<br/>Joshua Tree</h3>
<div className="w-16 h-16 rounded-full bg-[#FCCF79] opacity-20 blur-xl"></div>
<div className="bg-[#AF5342] w-full py-1 mt-auto">
<span className="font-wpa text-[#F8F5F0] text-sm">John McKinney</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-wpa text-xl text-[#F8F5F0]">$16.95</span>
<button className="text-[#AF5342] hover:text-[#FCCF79] font-wpa uppercase text-xs tracking-widest flex items-center gap-1">
                            Add <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[220px] md:min-w-[260px] snap-center group">
<div className="aspect-[2/3] bg-[#2D6F81] border-4 border-[#F8F5F0] relative retro-shadow transition-transform group-hover:-translate-y-2">
<div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-center">
<div className="w-full text-center border-b-2 border-[#FCCF79] pb-2">
<span className="font-wpa text-[#FCCF79] text-xs uppercase tracking-widest block">The Trailmaster</span>
</div>
<h3 className="font-wpa text-3xl uppercase leading-none text-[#F8F5F0] mt-4">Hike<br/>San Gabriel</h3>
<div className="w-16 h-16 rounded-full bg-[#FCCF79] opacity-20 blur-xl"></div>
<div className="bg-[#181D14] w-full py-1 mt-auto">
<span className="font-wpa text-[#FCCF79] text-sm">John McKinney</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-wpa text-xl text-[#F8F5F0]">$16.95</span>
<button className="text-[#AF5342] hover:text-[#FCCF79] font-wpa uppercase text-xs tracking-widest flex items-center gap-1">
                            Add <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="text-center mt-8">
<a className="inline-block bg-[#FCCF79] text-[#4E1C12] font-wpa uppercase tracking-widest px-8 py-3 retro-shadow hover:translate-y-1 hover:shadow-none transition-all" href="#">
                    Visit The Shop
                </a>
</div>
</div>
</section>

<section className="py-20 bg-[#F8F5F0] border-b border-[#2D6F81]">
<div className="container mx-auto px-4 lg:px-8">
<h2 className="font-wpa text-4xl text-[#2D6F81] uppercase tracking-tight mb-8">Hike On Gear</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="bg-[#EBE7E0] aspect-square flex items-center justify-center p-6 border-2 border-transparent group-hover:border-[#AF5342] transition-colors relative">
<iconify-icon className="text-[#2D6F81] opacity-80 group-hover:scale-110 transition-transform duration-300" icon="solar:t-shirt-linear" width="120"></iconify-icon>
<span className="absolute top-2 right-2 bg-[#AF5342] text-white text-[10px] font-wpa px-2 py-1 uppercase tracking-wider">New</span>
</div>
<div className="mt-3">
<h4 className="font-wpa text-lg uppercase leading-none text-[#181D14]">Every Trail Tells a Story</h4>
<span className="font-mono text-sm text-[#AF5342] font-semibold">$28.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#EBE7E0] aspect-square flex items-center justify-center p-6 border-2 border-transparent group-hover:border-[#AF5342] transition-colors relative">
<iconify-icon className="text-[#4E1C12] opacity-80 group-hover:scale-110 transition-transform duration-300" icon="solar:t-shirt-linear" width="120"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-wpa text-lg uppercase leading-none text-[#181D14]">Peace Love Hike</h4>
<span className="font-mono text-sm text-[#AF5342] font-semibold">$28.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#EBE7E0] aspect-square flex items-center justify-center p-6 border-2 border-transparent group-hover:border-[#AF5342] transition-colors relative">
<iconify-icon className="text-[#2D6F81] opacity-80 group-hover:scale-110 transition-transform duration-300" icon="solar:t-shirt-linear" width="120"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-wpa text-lg uppercase leading-none text-[#181D14]">Hike Defined</h4>
<span className="font-mono text-sm text-[#AF5342] font-semibold">$28.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#EBE7E0] aspect-square flex items-center justify-center p-6 border-2 border-transparent group-hover:border-[#AF5342] transition-colors relative">
<iconify-icon className="text-[#4E1C12] opacity-80 group-hover:scale-110 transition-transform duration-300" icon="solar:t-shirt-linear" width="120"></iconify-icon>
</div>
<div className="mt-3">
<h4 className="font-wpa text-lg uppercase leading-none text-[#181D14]">Hike On. I Love You.</h4>
<span className="font-mono text-sm text-[#AF5342] font-semibold">$28.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 container mx-auto px-4 lg:px-8" id="about">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative pl-6 pb-6">

<div className="absolute top-0 left-0 w-full h-full border-4 border-[#2D6F81] z-0 translate-x-4 translate-y-4"></div>
<div className="relative z-10 bg-[#FCCF79] p-1 retro-shadow">
<img className="w-full h-auto grayscale contrast-125 sepia-[.3]" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div>
<span className="text-[#AF5342] font-wpa uppercase tracking-widest text-sm font-medium">The Expert</span>
<h2 className="text-[#181D14] font-wpa text-5xl uppercase tracking-tight mt-2 mb-6">Meet John McKinney<br/><span className="text-[#2D6F81]">The Trailmaster</span></h2>
<div className="space-y-4 text-[#181D14] font-light leading-relaxed text-lg">
<p>For over 30 years, John McKinney has been the voice of California hiking. He is the only person to have hiked all <span className="font-semibold text-[#2D6F81]">280 California State Parks</span> and completed the entire 1,600-mile California Coastal Trail.</p>
<p>More than just a guide, John is an outdoor philosopher who shares the mental, physical, and spiritual benefits of connecting with nature.</p>
</div>
<div className="mt-8 flex gap-8">
<div className="flex flex-col">
<span className="font-wpa text-4xl text-[#AF5342]">30+</span>
<span className="text-xs uppercase tracking-wider opacity-70">Years Experience</span>
</div>
<div className="flex flex-col">
<span className="font-wpa text-4xl text-[#AF5342]">18+</span>
<span className="text-xs uppercase tracking-wider opacity-70">Guidebooks</span>
</div>
<div className="flex flex-col">
<span className="font-wpa text-4xl text-[#AF5342]">1600</span>
<span className="text-xs uppercase tracking-wider opacity-70">Miles Coastal</span>
</div>
</div>
<a className="inline-block mt-8 text-[#2D6F81] border-b-2 border-[#2D6F81] font-wpa uppercase tracking-widest hover:text-[#AF5342] hover:border-[#AF5342] transition-colors pb-1" href="#">
                    Read Full Biography
                </a>
</div>
</div>
</section>

<section className="bg-[#2D6F81] text-[#F8F5F0] py-20 relative">
<div className="container mx-auto px-4 lg:px-8">
<div className="flex items-center gap-4 mb-12">
<div className="h-[2px] bg-[#FCCF79] flex-1"></div>
<h2 className="font-wpa text-3xl lg:text-4xl uppercase tracking-tight text-center">Spiritual Journeys</h2>
<div className="h-[2px] bg-[#FCCF79] flex-1"></div>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="bg-[#181D14] p-8 border border-[#FCCF79] flex flex-col md:flex-row gap-8 items-start retro-shadow">
<div className="w-full md:w-1/3 bg-[#F8F5F0] aspect-[2/3] flex items-center justify-center text-[#181D14] p-4 text-center border-2 border-[#AF5342]">
<div>
<span className="font-wpa uppercase text-sm">John McKinney</span>
<h3 className="font-wpa text-2xl uppercase leading-none mt-2">Hiking the<br/>Holy Mountain</h3>
</div>
</div>
<div className="flex-1">
<h3 className="font-wpa text-2xl uppercase text-[#FCCF79]">Hiking the Holy Mountain</h3>
<p className="font-wpa text-sm text-[#AF5342] uppercase tracking-wide mb-3">Tales of Monks and Miracles</p>
<p className="font-light text-sm opacity-90 mb-6">While the 'plot' and colorful cast of Greek monks seem like they came from a movie script, this is very much a true story of Mt. Athos.</p>
<a className="inline-flex items-center gap-2 text-[#F8F5F0] hover:text-[#FCCF79] font-wpa uppercase tracking-widest text-sm border-b border-transparent hover:border-[#FCCF79] transition-all" href="#">
                            Buy on Amazon <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#F8F5F0] p-8 border border-[#4E1C12] flex flex-col md:flex-row gap-8 items-start retro-shadow">
<div className="w-full md:w-1/3 bg-[#2D6F81] aspect-[2/3] flex items-center justify-center text-[#F8F5F0] p-4 text-center border-2 border-[#FCCF79]">
<div>
<span className="font-wpa uppercase text-xs opacity-80">The Trailmaster</span>
<h3 className="font-wpa text-2xl uppercase leading-none mt-2">Hiking<br/>On The Edge</h3>
</div>
</div>
<div className="flex-1 text-[#181D14]">
<h3 className="font-wpa text-2xl uppercase text-[#2D6F81]">Hiking on the Edge</h3>
<p className="font-wpa text-sm text-[#AF5342] uppercase tracking-wide mb-3">1600 Miles on the CA Coastal Trail</p>
<p className="font-light text-sm opacity-90 mb-6">No one had ever walked along the edge of the state to determine if a California Coastal Trail was even possible. Until now.</p>
<button className="bg-[#AF5342] text-[#F8F5F0] px-6 py-2 font-wpa uppercase tracking-widest text-xs hover:bg-[#4E1C12] transition-colors">
                            Add to Cart - $16.95
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 container mx-auto px-4 lg:px-8">

<div className="flex justify-center mb-12">
<div className="inline-flex border-b-2 border-[#E5E7EB]">
<button className="px-8 py-4 font-wpa uppercase tracking-widest text-sm text-[#2D6F81] border-b-4 border-[#2D6F81] -mb-[2px]">Trail Tales</button>
<button className="px-8 py-4 font-wpa uppercase tracking-widest text-sm text-[#181D14] opacity-50 hover:opacity-100 hover:text-[#AF5342]">Trail Tips</button>
<button className="px-8 py-4 font-wpa uppercase tracking-widest text-sm text-[#181D14] opacity-50 hover:opacity-100 hover:text-[#AF5342]">More Videos</button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border-2 border-[#E5E7EB] hover:border-[#FCCF79] transition-colors group">
<div className="h-48 overflow-hidden bg-[#2D6F81]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-[#AF5342] text-[10px] font-wpa uppercase tracking-widest">Blog Post</span>
<h3 className="font-wpa text-xl uppercase mt-2 mb-3 leading-tight group-hover:text-[#2D6F81]">Nine Months of Spring Hiking</h3>
<p className="text-sm font-light text-gray-600 mb-4 line-clamp-3">Spring is the exact same length as other seasons. But wherever you live, and wherever you hike, spring is the season everyone agrees upon.</p>
<a className="text-xs font-wpa uppercase tracking-widest border-b border-[#181D14] pb-1" href="#">Read Story</a>
</div>
</div>

<div className="bg-white border-2 border-[#E5E7EB] hover:border-[#FCCF79] transition-colors group">
<div className="h-48 overflow-hidden bg-[#4E1C12]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6">
<span className="text-[#AF5342] text-[10px] font-wpa uppercase tracking-widest">Dictionary</span>
<h3 className="font-wpa text-xl uppercase mt-2 mb-3 leading-tight group-hover:text-[#2D6F81]">Why I Compiled a Hiker's Dictionary</h3>
<p className="text-sm font-light text-gray-600 mb-4 line-clamp-3">The idea for a Hiker's Dictionary came to me a few years ago when I was speaking to the annual California Recreational Trails Conference.</p>
<a className="text-xs font-wpa uppercase tracking-widest border-b border-[#181D14] pb-1" href="#">Read Story</a>
</div>
</div>

<div className="bg-white border-2 border-[#E5E7EB] hover:border-[#FCCF79] transition-colors group">
<div className="h-48 overflow-hidden bg-[#2D6F81]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6">
<span className="text-[#AF5342] text-[10px] font-wpa uppercase tracking-widest">State Parks</span>
<h3 className="font-wpa text-xl uppercase mt-2 mb-3 leading-tight group-hover:text-[#2D6F81]">Best Parks for Spring Flowers</h3>
<p className="text-sm font-light text-gray-600 mb-4 line-clamp-3">California State Parks offer some of the best hiking the state has to offer: Torrey Pines, Malibu Creek, Point Lobos.</p>
<a className="text-xs font-wpa uppercase tracking-widest border-b border-[#181D14] pb-1" href="#">Read Story</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#181D14] text-[#F8F5F0] pt-16 border-t-8 border-[#2D6F81] relative">
<div className="container mx-auto px-4 lg:px-8 pb-12">
<div className="grid md:grid-cols-4 gap-12">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#FCCF79] rounded-full flex items-center justify-center text-[#4E1C12]">
<iconify-icon icon="solar:hiking-linear" width="18"></iconify-icon>
</div>
<span className="font-wpa text-xl uppercase tracking-wide">The Trailmaster</span>
</div>
<div className="flex gap-4">
<a className="text-[#FCCF79] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="text-[#FCCF79] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon></a>
<a className="text-[#FCCF79] hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
</div>
</div>

<div className="col-span-1">
<h4 className="font-wpa text-[#FCCF79] uppercase tracking-widest text-sm mb-6">Explore</h4>
<ul className="space-y-3 font-light text-sm opacity-80">
<li><a className="hover:text-[#FCCF79]" href="#">Hiking Guides</a></li>
<li><a className="hover:text-[#FCCF79]" href="#">Trail Tales Blog</a></li>
<li><a className="hover:text-[#FCCF79]" href="#">John's Bio</a></li>
<li><a className="hover:text-[#FCCF79]" href="#">Contact Us</a></li>
</ul>
</div>

<div className="col-span-2 bg-[#2D6F81] p-8 retro-shadow border border-[#4E1C12]">
<h4 className="font-wpa text-2xl uppercase mb-2">Join the Adventure</h4>
<p className="text-sm font-light mb-4 opacity-90">Get the latest trail tips, tales, and exclusive offers delivered to your inbox.</p>
<div className="flex gap-2">
<input className="bg-[#F8F5F0] text-[#181D14] px-4 py-3 w-full font-light focus:outline-none border-2 border-transparent focus:border-[#FCCF79]" placeholder="Email Address" type="email"/>
<button className="bg-[#AF5342] text-white px-6 font-wpa uppercase tracking-widest text-xs hover:bg-[#4E1C12] transition-colors">Sign Up</button>
</div>
</div>
</div>
</div>

<div className="border-t border-[#2D6F81] bg-[#12160F] py-6">
<div className="container mx-auto px-4 text-center">
<p className="text-xs text-gray-500 font-wpa uppercase tracking-widest">© 2026 The Trailmaster Inc. All Rights Reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
