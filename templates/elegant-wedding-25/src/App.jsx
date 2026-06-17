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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


  // Simple intersection observer for reveal elements
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-element').forEach(el => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('nav button');
    const closeBtn = document.getElementById('close-menu-btn');
    const overlay = document.getElementById('nav-overlay');

    menuBtn.addEventListener('click', () => {
      overlay.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('open');
    });
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
      

<div className="fixed top-0 w-full h-screen -z-10 opacity-90 blur-lg mix-blend-darken" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 53%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 53%, transparent)'}}>
<div className="top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex px-6 justify-between items-center md:px-12 max-w-screen-2xl mx-auto">
<span className="text-xl font-medium tracking-tight">E&amp;J</span>
<button className="flex hover:scale-105 transition-transform bg-white w-10 h-10 rounded-full shadow-sm border border-black/5 items-center justify-center">
<iconify-icon className="text-black" height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-[#FAFAFA] z-[60] flex flex-col opacity-0 invisible" id="nav-overlay">
<div className="md:top-8 md:right-8 absolute top-6 right-6">
<button className="flex hover:scale-105 transition-transform bg-white w-14 h-14 rounded-full shadow-sm border border-black/5 items-center justify-center" id="close-menu-btn">
<iconify-icon className="text-black" height="24" icon="solar:close-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="flex flex-col items-center gap-8 md:gap-10" id="nav-links">
<a className="text-4xl md:text-6xl font-medium tracking-tight hover:text-gray-500 transition-colors" href="#">Our Story</a>
<a className="text-4xl md:text-6xl font-medium tracking-tight hover:text-gray-500 transition-colors" href="#">The Details</a>
<a className="text-4xl md:text-6xl font-medium tracking-tight hover:text-gray-500 transition-colors" href="#">Registry</a>
<a className="text-4xl md:text-6xl font-medium tracking-tight hover:text-gray-500 transition-colors" href="#">RSVP</a>
<a className="text-4xl md:text-6xl font-medium tracking-tight hover:text-gray-500 transition-colors" href="#">Contact</a>
</div>
</div>
</div>

<header className="relative w-full min-h-[85vh] flex flex-col justify-center items-center overflow-hidden pt-20">
<div className="relative z-10 flex flex-col items-center text-[#17191F] w-full max-w-[90vw] pointer-events-none select-none text-center mt-10">
<div className="reveal-element mb-8 flex items-center gap-2 px-4 py-1.5 bg-white border border-black/5 rounded-full shadow-sm">
<div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">
        October 12, 2024
      </span>
</div>
<h1 className="flex flex-col items-center leading-none tracking-tighter">
<span className="text-7xl md:text-8xl lg:text-9xl reveal-element font-medium text-black visible">
        Emma
      </span>
<span className="text-7xl md:text-8xl lg:text-9xl reveal-element font-medium text-black visible">
        &amp; James
      </span>
</h1>
<div className="mt-8 md:mt-12 reveal-element flex flex-col items-center gap-6 visible max-w-3xl mx-auto">
<p className="text-xl md:text-2xl font-normal tracking-tight text-center leading-snug text-gray-700">
        A weekend of love, laughter, and happily ever after.
      </p>
<p className="text-sm md:text-base text-gray-500 max-w-xl text-center leading-relaxed font-light">
        We invite you to share in our joy as we exchange vows, celebrate with our favorite people, and begin our new life together in beautiful Bali.
      </p>
</div>
</div>
</header>

<section className="md:px-12 xl:px-24 z-20 -mt-10 px-6 relative">
<div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 border border-black/5 reveal-element visible">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
            1. The Celebration
          </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
            Two Families Become One.
          </h2>
</div>
<p className="text-base text-gray-500 leading-relaxed font-light">
          After five wonderful years together, countless adventures, and moving across the country, we are absolutely thrilled to invite our closest family and friends to witness the start of our next big chapter.
        </p>
<div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-6 border-t border-gray-100">
<div>
<div className="text-2xl md:text-3xl font-medium tracking-tight">Villa Botanica</div>
<div className="text-sm text-gray-400 font-medium mt-1">The Venue</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-medium tracking-tight">4:00 PM</div>
<div className="text-sm text-gray-400 font-medium mt-1">Ceremony Starts</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-gray-800">Black Tie</div>
<div className="text-sm text-gray-400 font-medium mt-1">Dress Code</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-rose-400">Oct 12</div>
<div className="text-sm text-gray-400 font-medium mt-1">Save the Date</div>
</div>
</div>
</div>

<div className="w-full flex justify-center py-12 bg-zinc-50 rounded-2xl border border-black/5">
<div className="relative w-72 h-72 md:w-80 md:h-80">

<svg className="absolute inset-0 w-full h-full z-0 text-gray-200" viewbox="0 0 400 400">
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5" x1="200" x2="200" y1="200" y2="60"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5" x1="200" x2="70" y1="200" y2="300"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5" x1="200" x2="330" y1="200" y2="300"></line>
<circle cx="200" cy="200" fill="none" r="140" stroke="currentColor" stroke-opacity="0.3" strokeWidth="1"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#17191F] rounded-full flex flex-col items-center justify-center text-white z-10 pulse-circle shadow-lg ring-4 ring-white">
<iconify-icon className="mb-2" height="32" icon="solar:hearts-linear" width="32"></iconify-icon>
<span className="font-medium text-sm tracking-tight">The Big Day</span>
</div>

<div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col bg-white w-32 z-10 border border-black/5 rounded-xl py-3 shadow-sm items-center justify-center">
<iconify-icon className="mb-1.5 text-rose-400" height="20" icon="solar:rings-linear" width="20"></iconify-icon>
<span className="font-medium text-[10px] uppercase tracking-widest text-gray-600">Ceremony</span>
</div>

<div className="absolute bottom-12 left-0 bg-white w-28 border border-black/5 rounded-xl py-3 flex flex-col items-center justify-center shadow-sm z-10">
<iconify-icon className="mb-1.5 text-gray-500" height="20" icon="solar:wineglass-linear" width="20"></iconify-icon>
<span className="font-medium text-[10px] uppercase tracking-widest text-gray-600">Reception</span>
</div>

<div className="absolute bottom-12 right-0 bg-white w-28 border border-black/5 rounded-xl py-3 flex flex-col items-center justify-center shadow-sm z-10">
<iconify-icon className="mb-1.5 text-gray-500" height="20" icon="solar:music-notes-linear" width="20"></iconify-icon>
<span className="font-medium text-[10px] uppercase tracking-widest text-gray-600">After Party</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 xl:px-24 max-w-7xl mx-auto py-24 px-6 text-center">
<div className="reveal-element max-w-4xl mx-auto space-y-20">
<div className="space-y-6">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-4">
<span className="w-12 h-px bg-gray-200"></span>
        2. Our Promise
        <span className="w-12 h-px bg-gray-200"></span>
</h3>
<h4 className="text-3xl md:text-5xl font-medium tracking-tight text-[#17191F]">
        A Lifetime of Adventures.
      </h4>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
        To love, support, and cherish one another through all of life's seasons, building a home filled with endless laughter, kindness, and far too many dogs.
      </p>
</div>
<div className="space-y-6">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-4">
<span className="w-12 h-px bg-gray-200"></span>
        The Vibe
        <span className="w-12 h-px bg-gray-200"></span>
</h3>
<p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
        To host an intimate, joyous celebration where friends become family, surrounded by beautiful nature, incredible food, and our absolute favorite people.
      </p>
</div>
</div>
</section>

<section className="bg-white py-24 border-y border-black/5">
<div className="md:px-12 xl:px-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="reveal-element">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
          3. The Journey
        </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-10 leading-tight">
          How We Got
          <br/>
<span className="text-gray-400">To This Moment.</span>
</h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-rose-500" icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1 tracking-tight">The First Meeting</h4>
<p className="text-gray-500 text-sm leading-relaxed font-light">
                A chance encounter at a local coffee shop over spilled cold brew that changed absolutely everything.
              </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1 tracking-tight">The Big Move</h4>
<p className="text-gray-500 text-sm leading-relaxed font-light">
                Packing up our lives and driving a tiny sedan across three states to start our first home together.
              </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-500" icon="solar:diamond-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1 tracking-tight">The Proposal</h4>
<p className="text-gray-500 text-sm leading-relaxed font-light">
                A rainy mountain hike that unexpectedly ended with a perfect question and a very definite yes.
              </p>
</div>
</div>
</div>
<div className="mt-10 p-6 bg-zinc-50 rounded-2xl border border-black/5">
<p className="text-base font-normal italic text-gray-600 leading-relaxed">
            "Whatever our souls are made of, his and mine are the same."
          </p>
</div>
</div>

<div className="reveal-element space-y-6">
<div className="bg-zinc-50 p-8 rounded-[24px] border border-black/5 space-y-8">
<h4 className="font-medium text-base border-b border-gray-200 pb-4 tracking-tight">
            Relationship Metrics
          </h4>

<div>
<div className="flex justify-between mb-3 items-end">
<span className="text-sm text-gray-500 font-medium">Cups of Coffee Shared</span>
<span className="font-medium text-xl tracking-tight">1,240</span>
</div>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-[#17191F] w-full rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between mb-3 items-end">
<span className="text-sm text-gray-500 font-medium">Flights Taken Together</span>
<span className="font-medium text-xl tracking-tight">45</span>
</div>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 w-[65%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between mb-3 items-end">
<span className="text-sm text-gray-500 font-medium">Netflix Shows Binged</span>
<span className="font-medium text-xl tracking-tight">82</span>
</div>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-gray-300 w-[85%] rounded-full"></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-zinc-50 p-6 rounded-[24px] border border-black/5">
<div className="text-3xl font-medium mb-2 tracking-tight">5</div>
<div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Years Together</div>
<div className="mt-3 text-xs text-rose-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:hearts-linear" width="14"></iconify-icon> And counting
            </div>
</div>
<div className="bg-zinc-50 p-6 rounded-[24px] border border-black/5">
<div className="text-3xl font-medium mb-2 tracking-tight text-blue-500">1</div>
<div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Beautiful Dog</div>
<div className="mt-3 text-xs text-blue-500 font-medium flex items-center gap-1">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon> The real star
            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto">
<div className="mb-12 reveal-element">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
      4. The Memories
    </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
      Captured Moments.
    </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal-element">
<div className="col-span-2 md:col-span-2 aspect-[4/3] bg-zinc-50 rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-gray-300" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
<div className="col-span-1 aspect-square bg-zinc-50 rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-gray-300" icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
<div className="col-span-1 aspect-square bg-zinc-50 rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-gray-300" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div className="col-span-1 aspect-square bg-zinc-50 rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-gray-300" icon="solar:video-camera-linear" width="24"></iconify-icon>
</div>
<div className="col-span-1 aspect-square bg-zinc-50 rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-gray-300" icon="solar:album-linear" width="24"></iconify-icon>
</div>
<div className="col-span-2 aspect-[4/3] md:aspect-[2/1] bg-zinc-50 rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-gray-300" icon="solar:panorama-linear" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 border-y border-black/5">
<div className="md:px-12 xl:px-24 max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-element text-center">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
        5. The Party
      </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
        Our Favorite People.
      </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 reveal-element">

<div className="bg-white p-8 rounded-[24px] border border-black/5 shadow-sm">
<h3 className="text-xl font-medium tracking-tight mb-6 flex items-center gap-3">
<iconify-icon className="text-rose-400" icon="solar:stars-linear"></iconify-icon>
          Team Emma
        </h3>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
<span className="text-base font-medium">Sarah Jenkins</span>
<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Maid of Honor</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
<span className="text-base font-medium">Emily Chen</span>
<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Bridesmaid</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
<span className="text-base font-medium">Jessica Torres</span>
<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Bridesmaid</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[24px] border border-black/5 shadow-sm">
<h3 className="text-xl font-medium tracking-tight mb-6 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:cup-star-linear"></iconify-icon>
          Team James
        </h3>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
<span className="text-base font-medium">Michael Chang</span>
<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Best Man</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
<span className="text-base font-medium">David Miller</span>
<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Groomsman</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
<span className="text-base font-medium">Alex Thompson</span>
<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Groomsman</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto">
<div className="mb-12 reveal-element">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
      6. Information
    </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
      Travel &amp; Accommodations
    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-element">

<div className="p-8 border border-black/5 rounded-2xl bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
<iconify-icon className="text-gray-500" icon="solar:plane-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 tracking-tight">Nearest Airport</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        DPS International Airport is just a scenic 45-minute drive from the main venue.
      </p>
</div>

<div className="p-8 border border-black/5 rounded-2xl bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
<iconify-icon className="text-gray-500" icon="solar:bed-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 tracking-tight">Hotel Block</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        We've reserved discounted rooms at The Grand Resort under the Smith-Jones party.
      </p>
</div>

<div className="p-8 border border-black/5 rounded-2xl bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
<iconify-icon className="text-gray-500" icon="solar:bus-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 tracking-tight">Transportation</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        Complimentary shuttles will be provided to and from the main hotel and the venue.
      </p>
</div>

<div className="p-8 border border-black/5 rounded-2xl bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
<iconify-icon className="text-gray-500" icon="solar:cloud-sun-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 tracking-tight">The Weather</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        Expect warm, sunny days in the 80s and breezy evenings. Light layers are recommended.
      </p>
</div>

<div className="p-8 border border-black/5 rounded-2xl bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
<iconify-icon className="text-gray-500" icon="solar:user-block-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 tracking-tight">Kids Policy</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        While we adore your little ones, we are keeping this an adults-only celebration.
      </p>
</div>
</div>
</section>

<section className="bg-[#17191F] text-white py-24 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="md:px-12 xl:px-24 max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-20 reveal-element">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4 block">
        7. Schedule
      </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
        The Weekend Itinerary.
      </h2>
<p className="text-lg md:text-xl text-gray-400 font-light">
        A three-day celebration of food, music, and love.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 reveal-element">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:glass-water-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-base mb-2 tracking-tight">Welcome Drinks</h4>
<p className="text-sm text-gray-400 font-light leading-relaxed">
          Friday, 7:00 PM at The Beach Club. Casual attire.
        </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:rings-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-base mb-2 tracking-tight">The Ceremony</h4>
<p className="text-sm text-gray-400 font-light leading-relaxed">
          Saturday, 4:00 PM at the Garden Pavilion. Please arrive early.
        </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:music-note-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-base mb-2 tracking-tight">The Reception</h4>
<p className="text-sm text-gray-400 font-light leading-relaxed">
          Saturday, 6:00 PM under the stars. Dinner and heavy dancing.
        </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-base mb-2 tracking-tight">Farewell Brunch</h4>
<p className="text-sm text-gray-400 font-light leading-relaxed">
          Sunday, 10:00 AM at the Villa. Drop in before you fly out.
        </p>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        What to Expect:
      </span>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
          Open Bar
        </span>
<span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
          Live Band
        </span>
<span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
          Late Night Snacks
        </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto">
<div className="mb-16 reveal-element">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
      8. Details
    </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
      Frequently Asked Questions
    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 reveal-element">
<div>
<h4 className="text-base font-medium mb-2 tracking-tight">Are children invited?</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        We love your little ones, but our wedding events will be adults-only so everyone can relax and enjoy the evening.
      </p>
</div>
<div>
<h4 className="text-base font-medium mb-2 tracking-tight">Can I bring a plus one?</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        If your invitation says "and Guest," you may bring a plus one. Otherwise, we ask that only the people specifically listed on the invitation attend.
      </p>
</div>
<div>
<h4 className="text-base font-medium mb-2 tracking-tight">Is parking available at the venue?</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        Yes, there is complimentary valet parking available at Villa Botanica for all guests attending the ceremony and reception.
      </p>
</div>
<div>
<h4 className="text-base font-medium mb-2 tracking-tight">What should I wear?</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">
        The dress code is Black Tie. We encourage tuxedos or dark suits for men, and elegant floor-length gowns for women.
      </p>
</div>
</div>
</section>

<section className="md:px-12 xl:px-24 max-w-7xl mx-auto py-24 px-6 border-t border-black/5">
<div className="mb-16 reveal-element text-center">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
      9. Next Steps
    </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">
      Registry &amp; RSVP
    </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="group reveal-element hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col bg-white border border-black/5 rounded-3xl p-8 relative">
<div className="w-10 h-10 bg-gray-50 text-gray-800 rounded-full flex items-center justify-center mb-6 border border-black/5">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 tracking-tight">RSVP Online</h3>
<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-6">
        Attendance
      </p>
<div className="flex-1">
<p className="text-sm text-gray-500 mb-6 font-light leading-relaxed">
          Please let us know if you will be able to celebrate with us.
        </p>
<ul className="space-y-4 mb-8">
<li className="text-gray-600 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-400 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Deadline is October 1st</span>
</li>
<li className="flex gap-3 text-sm text-gray-600 items-start">
<iconify-icon className="shrink-0 text-gray-400 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Include dietary restrictions</span>
</li>
<li className="text-gray-600 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-400 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Submit your song requests</span>
</li>
</ul>
</div>
<button className="w-full py-3 bg-[#17191F] text-white rounded-xl text-sm font-medium hover:bg-black transition-colors">
        Submit RSVP
      </button>
</div>

<div className="group relative bg-[#17191F] text-white rounded-3xl p-8 overflow-hidden reveal-element hover:scale-[1.02] transition-transform duration-300 flex flex-col">
<div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 border border-white/10">
<iconify-icon icon="solar:gift-linear" width="18"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 tracking-tight">Our Registry</h3>
<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-6">
        Gifting
      </p>
<div className="flex-1">
<p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">
          Your presence is enough, but if you wish to contribute:
        </p>
<ul className="space-y-4 mb-8">
<li className="text-gray-300 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-500 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Honeymoon Fund</span>
</li>
<li className="text-gray-300 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-500 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">New Home Essentials</span>
</li>
<li className="text-gray-300 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-500 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Charity Donation in our name</span>
</li>
</ul>
</div>
<button className="w-full py-3 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
        View Registry
      </button>
</div>

<div className="group reveal-element hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col bg-white border border-black/5 rounded-3xl p-8 relative">
<div className="w-10 h-10 bg-gray-50 text-gray-800 rounded-full flex items-center justify-center mb-6 border border-black/5">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 tracking-tight">Get in Touch</h3>
<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-6">
        Support
      </p>
<div className="flex-1">
<p className="text-sm text-gray-500 mb-6 font-light leading-relaxed">
          Have questions about travel, outfits, or anything else?
        </p>
<ul className="space-y-4 mb-8">
<li className="text-gray-600 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-400 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Email our wedding planner</span>
</li>
<li className="flex gap-3 text-sm text-gray-600 items-start">
<iconify-icon className="shrink-0 text-gray-400 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Check the FAQ section</span>
</li>
<li className="text-gray-600 text-sm flex gap-3 items-start">
<iconify-icon className="shrink-0 text-gray-400 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-light">Day-of coordinator contacts</span>
</li>
</ul>
</div>
<div className="p-5 bg-zinc-50 rounded-2xl border border-black/5">
<span className="text-[10px] font-semibold uppercase text-gray-400 tracking-widest block mb-2">
          Direct Email
        </span>
<p className="text-sm text-gray-600 font-light leading-relaxed">
          hello@emmaandjames.wedding
        </p>
</div>
</div>
</div>
</section>


    </>
  );
}
