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
      

<nav className="border-b border-gray-100 sticky top-0 bg-white z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="font-bold tracking-tight text-xl text-[#10397E] uppercase" href="#">CHV</a>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-semibold text-[#000000]" href="#">Explore</a>
<a className="text-sm font-medium text-[#666666] hover:text-[#000000] transition-colors" href="#">Events</a>
<a className="text-sm font-medium text-[#666666] hover:text-[#000000] transition-colors" href="#">Hosts</a>
<a className="text-sm font-medium text-[#666666] hover:text-[#000000] transition-colors" href="#">Community</a>
</div>
</div>

<div className="flex items-center gap-6">
<div className="hidden lg:flex relative items-center">
<iconify-icon className="absolute left-3 text-[#666666] text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#10397E] w-64 transition-colors placeholder:text-gray-400" placeholder="Search Happy Valley" type="text"/>
</div>
<a className="hidden sm:block text-sm font-medium text-[#000000] hover:text-[#10397E]" href="#">Login</a>
<a className="bg-[#E55B24] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c94a1b] transition-colors" href="#">Sign Up</a>
</div>
</div>
</nav>




<section className="relative bg-black">
<img alt="Concert Crowd" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
<div className="max-w-2xl mb-12">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
                    What’s Coming Up in Happy Valley
                </h1>
<p className="text-base md:text-lg text-white/90 font-regular">
                    Find what's happening tonight, the Hosts creating energy, and the conversations shaping this place.
                </p>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-6 snap-x -mx-4 px-4 sm:mx-0 sm:px-0">

<a className="min-w-[280px] md:min-w-[340px] bg-white rounded-lg overflow-hidden border border-gray-200 snap-start flex-shrink-0 group hover:border-gray-300 transition-colors" href="#">
<img alt="Drinks Downtown" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#10397E] transition-colors">Drinks Downtown</h3>
<p className="text-sm font-semibold text-[#000000] mb-3">Wednesday, 7:00 PM</p>
<p className="text-xs text-[#666666] font-regular">28 Going</p>
</div>
</a>

<a className="min-w-[280px] md:min-w-[340px] bg-white rounded-lg overflow-hidden border border-gray-200 snap-start flex-shrink-0 group hover:border-gray-300 transition-colors" href="#">
<img alt="Chef's Tasting" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#10397E] transition-colors">Chef’s Tasting</h3>
<p className="text-sm font-semibold text-[#000000] mb-3">Wednesday, 7:00 PM</p>
<p className="text-xs text-[#666666] font-regular">28 Going</p>
</div>
</a>

<a className="min-w-[280px] md:min-w-[340px] bg-white rounded-lg overflow-hidden border border-gray-200 snap-start flex-shrink-0 group hover:border-gray-300 transition-colors" href="#">
<img alt="Brunch C.O &amp; Salts" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="p-5">
<h3 className="text-xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#10397E] transition-colors">Brunch C.O &amp; Salts</h3>
<p className="text-sm font-semibold text-[#000000] mb-3">Wednesday, 7:00 PM</p>
<p className="text-xs text-[#666666] font-regular">28 Going</p>
</div>
</a>
</div>

<div className="mt-6">
<button className="bg-[#E55B24] text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#c94a1b] transition-colors w-full sm:w-auto">
                    Plan This Week
                    <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<h2 className="text-2xl font-bold tracking-tight text-[#000000] mb-8">Plan Your Weekend</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block" href="#">
<div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4 border border-gray-100">
<img alt="Weekend Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#000000] mb-1">Local Indie Showcase</h3>
<p className="text-sm font-semibold text-[#10397E] mb-1">Friday, 8:00 PM</p>
<p className="text-xs text-[#666666] font-regular">$15 • The State Theatre</p>
</a>

<a className="group block" href="#">
<div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4 border border-gray-100">
<img alt="Food Festival" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#000000] mb-1">Downtown Food Walk</h3>
<p className="text-sm font-semibold text-[#10397E] mb-1">Saturday, 12:00 PM</p>
<p className="text-xs text-[#666666] font-regular">Free Entry • Calder Way</p>
</a>

<a className="group block" href="#">
<div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4 border border-gray-100">
<img alt="Community Market" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#000000] mb-1">Sunday Artisan Market</h3>
<p className="text-sm font-semibold text-[#10397E] mb-1">Sunday, 9:00 AM</p>
<p className="text-xs text-[#666666] font-regular">Family Friendly • Boal Mansion</p>
</a>
</div>
</section>

<section className="bg-gray-50 py-16 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-bold tracking-tight text-[#000000] mb-6">Explore by Interest</h2>
<div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
<button className="bg-[#E55B24] text-white border border-[#E55B24] rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:music-note-linear"></iconify-icon>
                    Live Music
                </button>
<button className="bg-white text-[#000000] border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap flex items-center gap-2 hover:border-gray-300 transition-colors">
<iconify-icon className="text-lg text-[#666666]" icon="solar:cup-linear"></iconify-icon>
                    Food &amp; Drink
                </button>
<button className="bg-white text-[#000000] border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap flex items-center gap-2 hover:border-gray-300 transition-colors">
<iconify-icon className="text-lg text-[#666666]" icon="solar:football-linear"></iconify-icon>
                    Sports
                </button>
<button className="bg-white text-[#000000] border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap flex items-center gap-2 hover:border-gray-300 transition-colors">
<iconify-icon className="text-lg text-[#666666]" icon="solar:users-group-two-linear"></iconify-icon>
                    Family
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="flex items-end justify-between mb-8">
<h2 className="text-2xl font-bold tracking-tight text-[#000000]">Walk in Happy Valley</h2>
<a className="text-sm font-medium text-[#10397E] hover:underline hidden sm:block" href="#">View all places</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<a className="group block" href="#venue-detail">
<div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] mb-5 border border-gray-100">
<img alt="Pine Grove Hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-bold tracking-tight text-[#000000] mb-2">Pine Grove Hall</h3>
<p className="text-sm text-[#666666] font-regular leading-relaxed max-w-md">
                    A thoughtfully restored gathering place offering casual upscale dining and an intimate listening room for live music.
                </p>
</a>

<a className="group block" href="#">
<div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] mb-5 border border-gray-100">
<img alt="Gigi's Southern Table" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-bold tracking-tight text-[#000000] mb-2">Gigi's Southern Table</h3>
<p className="text-sm text-[#666666] font-regular leading-relaxed max-w-md">
                    Farm-to-table southern cuisine paired with craft cocktails in a warm, elevated neighborhood setting.
                </p>
</a>
</div>
</section>

<div className="w-full border-t-[8px] border-gray-100 my-8"></div>



<div className="bg-white" id="venue-detail">

<section className="relative w-full h-[50vh] min-h-[400px] bg-black">
<img alt="Pine Grove Hall Interior" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:px-8 max-w-7xl mx-auto pb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-2.5 py-1 rounded-full font-medium">Live Music</span>
<span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-2.5 py-1 rounded-full font-medium">Dining</span>
<span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-2.5 py-1 rounded-full font-medium">Community</span>
</div>
<h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">Pine Grove Hall</h1>
<p className="text-sm text-white/90 font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            101 E Pine Grove Rd, Pine Grove Mills
                        </p>
</div>
<div className="flex items-center gap-3">
<button className="bg-white text-[#000000] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                            See Upcoming Events
                        </button>
<button className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:bookmark-linear"></iconify-icon>
</button>
<button className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:forward-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

<div className="lg:col-span-2 space-y-16">

<section>
<p className="text-base text-[#000000] font-regular leading-relaxed">
                        Housed in a meticulously restored 1900s building, Pine Grove Hall is where the community gathers for exceptional scratch-made food, craft cocktails, and world-class live music. Designed as an intimate listening room, it brings artists and audiences closer together, shaping the cultural heartbeat of the valley.
                    </p>
</section>

<section>
<h2 className="text-2xl font-bold tracking-tight text-[#000000] mb-6">What’s Happening Here</h2>
<div className="space-y-4">

<div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white">
<div className="sm:w-32 flex-shrink-0">
<p className="text-sm font-semibold text-[#E55B24]">Thu, Oct 12</p>
<p className="text-sm text-[#666666] font-medium">8:00 PM</p>
</div>
<div className="flex-grow">
<h4 className="text-base font-semibold text-[#000000] mb-1">The Extraordinaires</h4>
<p className="text-xs text-[#666666] font-regular">Folk / Americana • Intimate Session</p>
</div>
<div className="sm:self-center mt-3 sm:mt-0">
<button className="w-full sm:w-auto bg-[#10397E] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#0d2d63] transition-colors">Tickets</button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white">
<div className="sm:w-32 flex-shrink-0">
<p className="text-sm font-semibold text-[#E55B24]">Fri, Oct 13</p>
<p className="text-sm text-[#666666] font-medium">9:00 PM</p>
</div>
<div className="flex-grow">
<h4 className="text-base font-semibold text-[#000000] mb-1">Late Night Jazz Syndicate</h4>
<p className="text-xs text-[#666666] font-regular">Jazz / Instrumental</p>
</div>
<div className="sm:self-center mt-3 sm:mt-0">
<button className="w-full sm:w-auto bg-[#10397E] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#0d2d63] transition-colors">Tickets</button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white">
<div className="sm:w-32 flex-shrink-0">
<p className="text-sm font-semibold text-[#E55B24]">Sun, Oct 15</p>
<p className="text-sm text-[#666666] font-medium">11:00 AM</p>
</div>
<div className="flex-grow">
<h4 className="text-base font-semibold text-[#000000] mb-1">Sunday Bluegrass Brunch</h4>
<p className="text-xs text-[#666666] font-regular">Live Music • Dining</p>
</div>
<div className="sm:self-center mt-3 sm:mt-0">
<button className="w-full sm:w-auto border border-gray-200 text-[#000000] px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Reserve Table</button>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-bold tracking-tight text-[#000000] mb-6">The Vibe</h2>
<div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
<img alt="Crowd" className="h-48 md:h-64 w-auto rounded-lg border border-gray-100 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Band Performance" className="h-48 md:h-64 w-auto rounded-lg border border-gray-100 object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Food Plate" className="h-48 md:h-64 w-auto rounded-lg border border-gray-100 object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Social Moments" className="h-48 md:h-64 w-auto rounded-lg border border-gray-100 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</section>
</div>

<div className="space-y-12">

<section className="bg-gray-50 rounded-xl p-6 border border-gray-100">
<h3 className="text-base font-semibold text-[#000000] mb-5">Experience</h3>
<div className="grid grid-cols-2 gap-y-5 gap-x-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666666]" icon="solar:plate-linear"></iconify-icon>
<span className="text-sm font-medium text-[#000000]">Dining</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666666]" icon="solar:music-notes-linear"></iconify-icon>
<span className="text-sm font-medium text-[#000000]">Live Music</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666666]" icon="solar:glass-water-linear"></iconify-icon>
<span className="text-sm font-medium text-[#000000]">Bar Available</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666666]" icon="solar:users-group-two-linear"></iconify-icon>
<span className="text-sm font-medium text-[#000000]">Family Friendly</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666666]" icon="solar:sofa-linear"></iconify-icon>
<span className="text-sm font-medium text-[#000000]">Indoor Seating</span>
</div>
</div>
</section>

<section>
<details className="group border-t border-b border-gray-200">
<summary className="flex items-center justify-between py-5 cursor-pointer list-none">
<h3 className="text-base font-semibold text-[#000000]">Plan Your Visit</h3>
<iconify-icon className="text-xl text-[#666666] group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 space-y-4 text-sm font-regular text-[#666666]">
<div className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#000000]" icon="solar:map-point-linear"></iconify-icon>
<span>101 E Pine Grove Rd<br/>Pine Grove Mills, PA 16868</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#000000]" icon="solar:clock-circle-linear"></iconify-icon>
<span>Wed - Sun: 4:00 PM - 10:00 PM<br/>Closed Mon &amp; Tue</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg flex-shrink-0 text-[#000000]" icon="solar:parking-linear"></iconify-icon>
<span>Free lot available behind venue</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg flex-shrink-0 text-[#000000]" icon="solar:wheelchair-linear"></iconify-icon>
<span>Fully accessible 1st floor</span>
</div>
<div className="pt-2 flex flex-col gap-2">
<a className="text-[#10397E] hover:underline font-medium" href="#">pinegrovehall.com</a>
<a className="text-[#10397E] hover:underline font-medium" href="#">(814) 555-0199</a>
</div>
</div>
</details>
</section>

<section>
<h3 className="text-base font-semibold text-[#000000] mb-4">Nearby Places</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors" href="#">
<div className="w-12 h-12 bg-gray-200 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-[#000000]">Naked Egg Cafe</h4>
<p className="text-xs text-[#666666] font-regular">Dinner nearby • 0.2 mi</p>
</div>
</a>
<a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors" href="#">
<div className="w-12 h-12 bg-gray-200 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-[#000000]">Rothrock State Forest</h4>
<p className="text-xs text-[#666666] font-regular">Walkable trail • 0.5 mi</p>
</div>
</a>
</div>
</section>
</div>
</div>
</div>

<footer className="bg-white border-t border-gray-100 py-12 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-sm text-[#666666] font-regular">
                © 2026 Connect Happy Valley. All rights reserved.
            </p>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50 px-2 pb-safe">
<a className="flex flex-col items-center justify-center w-full h-full text-[#10397E]" href="#">
<iconify-icon className="text-2xl mb-1" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-[10px] font-semibold">Home</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-[#666666] hover:text-[#000000]" href="#">
<iconify-icon className="text-2xl mb-1" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[10px] font-medium">Events</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-[#666666] hover:text-[#000000]" href="#">
<iconify-icon className="text-2xl mb-1" icon="solar:user-speak-linear"></iconify-icon>
<span className="text-[10px] font-medium">Hosts</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-[#666666] hover:text-[#000000]" href="#">
<iconify-icon className="text-2xl mb-1" icon="solar:planet-linear"></iconify-icon>
<span className="text-[10px] font-medium">Community</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-[#666666] hover:text-[#000000]" href="#">
<iconify-icon className="text-2xl mb-1" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>

    </>
  );
}
