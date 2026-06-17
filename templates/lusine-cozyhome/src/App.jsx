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
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'], /* Updated to Playfair Display based on the image style */
},
colors: {
lusine: {
bg: '#e0dcd3',
dark: '#1C1C1C',
teal: '#1B3C3D',
accent: '#A85A3F'
}
}
}
}
}



              window.toggleHotspotPopup = function(event, id) {
                event.stopPropagation();
                const container = event.currentTarget.closest('.relative.group');
                const allPopups = container.querySelectorAll('.hotspot-popup');
                const targetPopup = container.querySelector('#' + id);
                const isTargetOpen = !targetPopup.classList.contains('invisible');
                
                // Close all popups
                allPopups.forEach(p => {
                  p.classList.add('invisible', 'opacity-0', 'translate-y-2');
                  p.classList.remove('translate-y-0');
                });
                
                // Open target if it wasn't open
                if (!isTargetOpen) {
                  targetPopup.classList.remove('invisible', 'opacity-0', 'translate-y-2');
                  targetPopup.classList.add('translate-y-0');
                }
              };

              // Close when clicking outside
              document.addEventListener('click', function(e) {
                if (!e.target.closest('.hotspot-btn') && !e.target.closest('.hotspot-popup')) {
                  document.querySelectorAll('.hotspot-popup').forEach(p => {
                    p.classList.add('invisible', 'opacity-0', 'translate-y-2');
                    p.classList.remove('translate-y-0');
                  });
                }
              });
            


    if (typeof scrollLocations === 'undefined') {
      window.scrollLocations = function(direction) {
        const container = document.getElementById('locations-carousel');
        if (!container) return;
        
        // Calculate width of one item + gap (16px/1rem from gap-4)
        const firstItem = container.querySelector('div');
        const gap = 16; 
        const scrollAmount = firstItem ? firstItem.getBoundingClientRect().width + gap : container.offsetWidth / 2;
        
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const tolerance = 10;
        
        if (direction === 'next') {
          // If we are near the end, loop back to start
          if (currentScroll >= maxScroll - tolerance) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        } else {
          // If we are near the start, loop to end
          if (currentScroll <= tolerance) {
            container.scrollTo({ left: maxScroll, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }
        }
      };
    }
  


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
      

<div className="bg-lusine-teal text-white text-xs md:text-sm py-3 text-center tracking-wide font-medium">
<p className="">
        Free shipping on online orders over $899.
        <span className="underline decoration-1 underline-offset-2 cursor-pointer opacity-80 hover:opacity-100">
          More details here*
        </span>
</p>
</div>

<header className="sticky top-0 z-50 bg-lusine-bg/95 backdrop-blur-sm border-b border-stone-300/50">
<div className="flex bg-[#dfdbd1] max-w-[1920px] mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<a className="group" href="#">
<div className="border-2 border-lusine-dark px-4 py-1.5 relative">
<span className="font-sans font-bold tracking-[0.2em] text-xl block group-hover:scale-105 transition-transform duration-300">
              LUSINE
            </span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-600">
<button className="flex items-center gap-1 hover:text-lusine-dark transition-colors">
            Furniture
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1 hover:text-lusine-dark transition-colors">
            Seating
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1 hover:text-lusine-dark transition-colors">
            Tables
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1 hover:text-lusine-dark transition-colors">
            Beds
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1 hover:text-lusine-dark transition-colors">
            Decor
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1 text-lusine-accent hover:text-lusine-dark transition-colors">
            After Christmas Sale
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</nav>

<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-1 text-sm font-bold hover:opacity-70">
            EN
            <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="hover:scale-110 transition-transform">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button className="hover:scale-110 transition-transform">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hover:scale-110 transition-transform relative">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lusine-teal opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lusine-teal"></span>
</span>
</button>
</div>
</div>
</header>

<div className="uppercase hidden md:block text-xs font-semibold text-stone-500 tracking-wider bg-[#dfdbd1] px-6 py-4">
      Home
      <span className="mx-2">/</span>
      Collections
      <span className="mx-2">/</span>
      After Christmas Sale
    </div>

<section className="overflow-hidden w-full h-[85vh] relative" style={{}}>
<img alt="Christmas Dining" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="flex flex-col bg-center md:p-16 z-10 text-white text-left h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ea8f6ea-65f5-4a23-82d0-860cfd3cd792_3840w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 relative items-start justify-end">

<h1 className="text-4xl font-normal text-white tracking-tight font-serif max-w-2xl mb-6 drop-shadow-xl md:text-5xl lg:text-4xl">
          After Christmas Sale
        </h1>
<button className="text-lusine-dark uppercase hover:bg-lusine-bg transition-colors duration-300 transform hover:-translate-y-1 text-sm font-bold tracking-widest bg-white rounded-full pt-2 pr-6 pb-2 pl-6 shadow-lg">
          Shop the offers
        </button>
</div>
</section>

<section className="bg-slate-50 max-w-[1920px] mr-auto ml-auto pt-2 pr-4 pb-8 pl-4" style={{}}>
<div className="flex mb-12 items-end justify-between">
<h2 className="text-lusine-dark md:text-xl text-2xl font-bold tracking-tight translate-y-4">
          Shop our products
        </h2>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-current pb-0.5 hover:opacity-60 transition-opacity" href="#">
          View all
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-6 md:gap-4">

<div className="group cursor-pointer">

<div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-stone-200 mb-3 md:mb-4 rounded-lg">
<img alt="Sofas" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c20e39b0-d5f4-4d56-a968-266099063e8a_800w.jpg"/>
</div>

<h3 className="md:text-base text-sm font-bold tracking-tight -translate-y-3">
            Sofas &amp; Sectionals
          </h3>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-stone-200 mb-3 md:mb-4 rounded-lg">
<img alt="Tables" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/481d27e6-e6b8-4a1f-87f6-826718fcc450_800w.png"/>
</div>
<h3 className="md:text-base text-sm font-bold tracking-tight -translate-y-3">
            Dining Room
          </h3>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-stone-200 mb-3 md:mb-4 rounded-lg">
<img alt="Bedroom" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f0fd5ce-15db-4fd6-964b-f4cd3d036a13_800w.png"/>
</div>
<h3 className="md:text-base text-sm font-bold tracking-tight -translate-y-3">
            Accent Chairs
          </h3>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-stone-200 mb-3 md:mb-4 rounded-lg">
<img alt="Decoration" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05909c89-56e2-4ba7-9c04-e498478d98bc_800w.jpg"/>
</div>
<h3 className="md:text-base text-sm font-bold tracking-tight -translate-y-3">Beds</h3>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-stone-200 mb-3 md:mb-4 rounded-lg">
<img alt="Luminaires" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab121b50-2066-45cc-9d2b-1097eada39a0_800w.jpg"/>
</div>
<h3 className="md:text-base text-sm font-bold tracking-tight -translate-y-3">Storage</h3>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-stone-200 mb-3 md:mb-4 rounded-lg">
<img alt="Tapis" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16f94dfa-5669-41f4-981e-b57974c53c7d_800w.jpg"/>
</div>
<h3 className="md:text-base text-sm font-bold tracking-tight -translate-y-3">Rugs</h3>
</div>
</div>
</section>

<section className="bg-[#dfdbd1] max-w-[1920px] mr-auto ml-auto pt-8 pr-6 pb-8 pl-6" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" style={{}}>

<div className="group relative aspect-video overflow-hidden cursor-pointer rounded-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors bg-center bg-black/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba38a786-1673-4162-ac2c-1f914a7213d8_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-2xl font-bold tracking-tight mb-2">
              New Arrivals
            </h3>
</div>
</div>

<div className="group relative aspect-video overflow-hidden cursor-pointer rounded-lg">
<img className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1798eec7-6647-40ee-ba8f-66f15a436c23_1600w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-2xl font-bold tracking-tight mb-2">
              Best Sellers
            </h3>
</div>
</div>
</div>
</section>

<section className="bg-[#dfdbd1] pt-5 pb-5">
<div className="bg-[#dfdbd1] max-w-[1920px] mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:gap-20 bg-[#dfdbd1] gap-x-12 gap-y-12 items-center">

<div className="lg:w-1/3 space-y-8">
<span className="uppercase tracking-[0.2em] text-xs font-bold text-stone-500">
              Inspiration
            </span>
<h2 className="leading-[1.1] text-lusine-dark text-5xl tracking-tight font-serif md:text-3xl">
              The Art of Entertaining with Elegance
            </h2>
<p className="leading-relaxed text-base font-medium text-stone-600">
              Create a space where every moment becomes memorable. Our
              collections combine contemporary comfort and timeless design to
              enhance your interior during the holidays and beyond.
            </p>
<button className="border-lusine-dark text-lusine-dark uppercase hover:bg-lusine-dark hover:text-white transition-colors duration-300 text-sm font-bold tracking-widest border-2 rounded-full pt-2 pr-2 pb-2 pl-2">Explore the look</button>
</div>

<div className="lg:w-2/3 group w-full relative">
<img alt="Living Room Lifestyle" className="aspect-[4/3] w-full object-cover rounded-lg shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0cee3e7-6ad3-46a2-b3b7-a608444141ed_1600w.jpg"/>


<div className="absolute top-[52%] left-[55%] z-10">
<button className="hotspot-btn relative w-12 h-12 md:w-8 md:h-8 flex items-center justify-center group/btn focus:outline-none transition-transform active:scale-95" onclick="toggleHotspotPopup(event, 'popup-sofa')">
<span className="animate-ping inline-flex duration-1000 bg-white opacity-75 w-full h-full rounded-full absolute"></span>
<span className="inline-flex group-hover/btn:scale-125 transition-transform duration-300 bg-white w-3 h-3 rounded-full ring-black/5 ring-1 relative shadow-md"></span>
</button>
<div className="hotspot-popup invisible opacity-0 translate-y-2 absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-32 md:w-48 bg-white p-2 shadow-2xl rounded-xl transition-all duration-300 transform border border-stone-100 z-50" id="popup-sofa">
<div className="aspect-square w-full bg-stone-100 rounded-lg mb-2 overflow-hidden">
<img className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26928761-a566-4924-abc2-51357080719c_800w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<span className="leading-tight text-[10px] md:text-sm font-bold text-stone-900">Lowell Sofa</span>
<span className="text-[10px] md:text-xs font-semibold text-stone-500 whitespace-nowrap ml-2">$2,450</span>
</div>
<button className="w-full bg-lusine-dark text-white text-[10px] font-bold py-2.5 rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-widest">
                  Discover More
                </button>
<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-white drop-shadow-sm"></div>
</div>
</div>

<div className="z-10 absolute top-[50%] left-[20%]">
<button className="hotspot-btn flex group/btn focus:outline-none transition-transform active:scale-95 md:w-8 md:h-8 w-12 h-12 relative items-center justify-center" onclick="toggleHotspotPopup(event, 'popup-armchair')">
<span className="animate-ping inline-flex duration-1000 delay-150 -translate-x-8 bg-white opacity-75 w-full h-full rounded-full absolute -translate-x-16 translate-y-6"></span>
<span className="inline-flex group-hover/btn:scale-125 transition-transform duration-300 -translate-x-8 bg-white w-3 h-3 ring-black/5 ring-1 rounded-full relative shadow-md -translate-x-16 translate-y-6"></span>
</button>
<div className="hotspot-popup invisible opacity-0 translate-y-2 -translate-x-1/2 transition-all duration-300 transform z-50 bg-white w-32 md:w-48 border-stone-100 border rounded-xl mb-4 p-2 absolute bottom-full left-1/2 shadow-2xl" id="popup-armchair">
<div className="aspect-square w-full bg-stone-100 rounded-lg mb-2 overflow-hidden">
<img className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f714889-a92e-4f96-9324-e5eca4acbbfe_800w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2" style={{}}>
<span className="leading-tight text-[10px] md:text-sm font-bold text-stone-900">Lucky Armchair</span>
<span className="whitespace-nowrap text-[10px] md:text-xs font-semibold text-zinc-950 ml-2">$1,195</span>
</div>
<button className="w-full bg-lusine-dark text-white text-[10px] font-bold py-2.5 rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-widest">
                  Discover More
                </button>
<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-white drop-shadow-sm"></div>
</div>
</div>

<div className="z-10 absolute top-[70%] left-[75%]" style={{}}>
<button className="hotspot-btn flex group/btn focus:outline-none transition-transform active:scale-95 md:w-8 md:h-8 w-12 h-12 relative -translate-x-12 items-center justify-center" onclick="toggleHotspotPopup(event, 'popup-table')">
<span className="animate-ping inline-flex duration-1000 delay-300 bg-white opacity-75 w-full h-full rounded-full absolute translate-x-16"></span>
<span className="inline-flex group-hover/btn:scale-125 transition-transform duration-300 bg-white w-3 h-3 ring-black/5 ring-1 rounded-full relative shadow-md translate-x-16"></span>
</button>
<div className="hotspot-popup invisible opacity-0 translate-y-2 -translate-x-1/2 transition-all duration-300 transform bg-white w-32 md:w-48 z-50 border-stone-100 border rounded-xl mb-4 p-2 absolute bottom-full left-1/2 shadow-2xl" id="popup-table">
<div className="aspect-square w-full bg-stone-100 rounded-lg mb-2 overflow-hidden">
<img className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c34795b-c5bf-400a-969d-3ef3d17648a4_800w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2" style={{}}>
<span className="leading-tight text-[10px] md:text-sm font-bold text-stone-900">Clovis Table</span>
<span className="whitespace-nowrap text-[10px] md:text-xs font-semibold text-zinc-950 ml-2">$475</span>
</div>
<button className="w-full bg-lusine-dark text-white text-[10px] font-bold py-2.5 rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-widest">
                  Discover More
                </button>
<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-white drop-shadow-sm"></div>
</div>
</div>

<div className="absolute top-[85%] left-[40%] z-10" style={{}}>
<button className="hotspot-btn relative w-12 h-12 md:w-8 md:h-8 flex items-center justify-center group/btn focus:outline-none transition-transform active:scale-95" onclick="toggleHotspotPopup(event, 'popup-rug')">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 duration-1000 delay-700"></span>
<span className="inline-flex group-hover/btn:scale-125 transition-transform duration-300 bg-white w-3 h-3 ring-black/5 ring-1 rounded-full relative shadow-md"></span>
</button>
<div className="hotspot-popup invisible opacity-0 translate-y-2 -translate-x-1/2 transition-all duration-300 transform z-50 bg-white w-32 md:w-48 border-stone-100 border rounded-xl mb-4 p-2 absolute bottom-full left-1/2 shadow-2xl" id="popup-rug" style={{}}>
<div className="aspect-square w-full bg-stone-100 rounded-lg mb-2 overflow-hidden">
<img className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab62ea4a-845a-416d-92d4-f76879f15dfb_800w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<span className="leading-tight text-[10px] md:text-sm font-bold text-stone-900">Meghan Rug</span>
<span className="whitespace-nowrap text-[10px] md:text-xs font-semibold text-zinc-950 ml-2">$875</span>
</div>
<button className="w-full bg-lusine-dark text-white text-[10px] font-bold py-2.5 rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-widest">
                  Discover More
                </button>
<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-white drop-shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 max-w-[1920px] mr-auto ml-auto pt-4 pr-6 pb-4 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#dfdbd1] gap-x-6 gap-y-6">

<div className="group relative aspect-square overflow-hidden bg-stone-100 flex items-center justify-center text-center p-8 cursor-pointer rounded-lg">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ab96199-579e-4b4c-8881-0e3cc9164673_800w.jpg"/>
<div className="group-hover:bg-stone-900/40 transition-colors bg-stone-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 text-white">
<p className="uppercase text-xs font-bold tracking-widest mb-2">VIRTUAL DECOR</p>
<h3 className="text-3xl font-bold tracking-tight mb-4 md:text-2xl">Visualize furniture in your room</h3>
<span className="underline decoration-2 underline-offset-4 font-semibold">Try now</span>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-stone-100 flex items-center justify-center text-center p-8 cursor-pointer rounded-lg">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8cfcff7-a73b-4855-806f-8a1c4fde645d_800w.jpg"/>
<div className="group-hover:bg-stone-900/40 transition-colors bg-stone-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 text-white">
<p className="uppercase tracking-widest text-xs font-bold mb-2">
              Partnership
            </p>
<h3 className="font-bold text-3xl tracking-tight mb-4 md:text-2xl">
              Become an Ambassador
            </h3>
<span className="underline decoration-2 underline-offset-4 font-semibold">
              Join the program
            </span>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-stone-100 flex items-center justify-center text-center p-8 cursor-pointer rounded-lg">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65d9469d-dd43-4328-99a3-6d162d523ff6_800w.webp"/>
<div className="group-hover:bg-stone-900/40 transition-colors bg-stone-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 text-white">
<p className="uppercase tracking-widest text-xs font-bold mb-2">
              Collaboration
            </p>
<h3 className="font-bold text-3xl tracking-tight mb-4 md:text-2xl">
              Véro Magazine
            </h3>
<span className="underline decoration-2 underline-offset-4 font-semibold">
              Read the article
            </span>
</div>
</div>
</div>
</section>


<section className="bg-slate-50 border-stone-300 border-t pt-4 pb-4">
<div className="bg-slate-50 max-w-[1920px] mr-auto ml-auto pr-6 pl-6">
<div className="flex mb-8 items-end justify-between">
<h2 className="text-3xl tracking-tight text-lusine-dark font-bold md:text-2xl">Come visit us</h2>
<div className="flex gap-2 gap-x-2 gap-y-2">
<button aria-label="Previous slide" className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer" onclick="scrollLocations('prev')">
<svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path className="" d="M19 12H5"></path></svg>
</button>
<button aria-label="Next slide" className="flex hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer text-stone-600 w-10 h-10 border-stone-200 border rounded-full items-center justify-center" onclick="scrollLocations('next')">
<svg className="lucide lucide-arrow-right w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(28, 25, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory rounded-lg [scrollbar-width:none] [-ms-overflow-style:none] [&amp;::-webkit-scrollbar]:hidden gap-4 pb-1" id="locations-carousel">

<div className="snap-start shrink-0 w-[85%] md:w-[42%] relative aspect-video bg-stone-200 rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c1cb54d-da54-4386-adf8-6c3019e6cb52_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h4 className="text-2xl font-normal text-white tracking-tight mb-2">Charest</h4>
<p className="text-base font-normal text-white/90">1195 rue Taillon, #250, Québec, Qc, G1N 3V2</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85%] md:w-[42%] relative aspect-video bg-stone-200 rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/240aac12-5ad3-4374-9be1-8d7032fa93ab_1600w.jpg"/>
<div className="transition-opacity bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h4 className="text-2xl font-normal text-white tracking-tight mb-2">Brossard</h4>
<p className="text-base font-normal text-white/90">3400 rue de L'Éclipse, local 112, Brossard, Qc, J4Z 0P3</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85%] md:w-[42%] relative aspect-video bg-stone-200 rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2820467-55da-41d3-b9f1-5e719c8e8915_1600w.jpg"/>
<div className="transition-opacity bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h4 className="text-2xl font-normal text-white tracking-tight mb-2">Pierre-Bertrand</h4>
<p className="text-base font-normal text-white/90">989 boul. Pierre-Bertrand, #100, Québec, Qc, G1M 2E8</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85%] md:w-[42%] relative aspect-video bg-stone-200 rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cad1c8ff-c445-40e5-b8f9-d2168da87da5_1600w.jpg"/>
<div className="transition-opacity bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h4 className="text-2xl font-normal text-white tracking-tight mb-2">Quartier Laval</h4>
<p className="text-base font-normal text-white/90">600 boul. Le Corbusier, Laval, Qc, H7N 09A</p>
</div>
</div>
</div>

</div>
</section>

<footer className="bg-lusine-dark text-stone-400 py-16 text-sm">
<div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<span className="text-white font-sans font-bold tracking-[0.2em] text-lg block mb-4 border border-white/20 inline-block px-3 py-1">
            LUSINE
          </span>
<p className="">Timeless design for modern living.</p>
</div>
<div className="">
<h5 className="text-white font-bold mb-4">Customer Service</h5>
<ul className="space-y-2 font-medium">
<li>
<a className="hover:text-white transition-colors" href="#">
                Contact Us
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                Shipping &amp; Returns
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-4">Company</h5>
<ul className="space-y-2 font-medium">
<li>
<a className="hover:text-white transition-colors" href="#">
                About
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Careers
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Press</a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-white font-bold mb-4">Newsletter</h5>
<div className="flex gap-2">
<input className="bg-stone-800 border-none px-4 py-2 w-full focus:ring-1 focus:ring-white outline-none rounded-full px-6" placeholder="Your email" type="email"/>
<button className="bg-white text-black px-4 py-2 font-bold hover:bg-stone-200 transition-colors rounded-full">
              OK
            </button>
</div>
</div>
</div>

<div className="max-w-[1920px] mx-auto px-6 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
<p>© 2024 Lusine. All rights reserved.</p>
<p>Built by HallTech Solutions</p>
</div>
</footer>


    </>
  );
}
