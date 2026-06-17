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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();
// Mobile Menu Logic
function toggleMobileMenu() {
const menu = document.getElementById('mobile-menu');
menu.classList.toggle('hidden');
// Icon toggle styling (optional visual feedback)
const btn = document.getElementById('mobile-menu-btn');
if(!menu.classList.contains('hidden')) {
btn.classList.add('text-white');
} else {
btn.classList.remove('text-white');
}
}
function toggleMobileSubmenu(id) {
const submenu = document.getElementById(id);
const icon = document.getElementById(id + '-icon');
if (submenu.classList.contains('hidden')) {
submenu.classList.remove('hidden');
submenu.classList.add('flex');
icon.style.transform = 'rotate(180deg)';
} else {
submenu.classList.add('hidden');
submenu.classList.remove('flex');
icon.style.transform = 'rotate(0deg)';
}
}



          !function () {
              if (!window.UnicornStudio) {
                  window.UnicornStudio = { isInitialized: !1 };
                  var i = document.createElement("script");
                  i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
                  i.onload = function () {
                      window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
                  },
                  (document.head || document.body).appendChild(i)
              }
          }();
        
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 hue-rotate-180 brightness-150 invert-0 absolute" data-alpha-mask="91" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 91%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 91%, transparent)'}}>
<div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div>
</div>

<div className="bg-zinc-900 border-b border-white/5 py-2 px-6 hidden md:block z-50 relative">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-zinc-400">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer">
<svg className="" data-icon-set="lucide" data-lucide="phone" height="1em" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            01704 548777 / 07787 138158
          </span>
<span className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer">
<svg className="" data-icon-set="lucide" data-lucide="mail" height="1em" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
            sales@kalash.co.uk
          </span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="font-medium text-zinc-300">
            Open for Reservations &amp; Takeaway
          </span>
</div>
</div>
</div>

<nav className="sticky z-50 bg-zinc-950/60 w-full border-white/5 border-b top-0" style={{'--fx-filter': 'blur(10px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="block" href="https://kalash.co.uk/">
<img alt="Kalash Logo" className="w-auto h-12 brightness-110" onclick="window.location.href='/home'" role="button" src="https://kalash.co.uk/assets/images/kalash_logo.png"/>
</a>

<div className="hidden lg:flex gap-8 text-sm font-medium text-zinc-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-amber-500 transition-colors text-white" href="/home">
      Home
    </a>
<div className="group flex h-full relative items-center">

<button className="flex hover:text-white transition-colors group-hover:text-amber-500 gap-x-1 gap-y-1 items-center">
    Menus
    <svg className="w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chevron-down" height="14" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(245, 158, 11)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button><div className="absolute top-14 left-0 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 flex flex-col p-2">
<a className="px-4 py-2 hover:bg-zinc-800 rounded-md text-zinc-300 hover:text-white transition-colors text-xs" href="/evening-menu">
      Evening Menu
    </a>
<a className="px-4 py-2 hover:bg-zinc-800 rounded-md text-zinc-300 hover:text-white transition-colors text-xs" href="https://kalash.co.uk/pages/takeaway_menu">
      Takeaway Menu
    </a>
<a className="px-4 py-2 hover:bg-zinc-800 rounded-md text-zinc-300 hover:text-white transition-colors text-xs" href="https://kalash.co.uk/pages/vegan_menu">
      Vegan Menu
    </a>
</div>
</div>
<a className="hover:text-white transition-colors" href="https://kalash.co.uk/pages/reservation">
      Reservations
    </a>
<a className="hover:text-white transition-colors" href="/gallery">
      Gallery
    </a>
<a className="hover:text-white transition-colors" href="https://kalash.co.uk/pages/event_catering">
      Event
    </a>
<a className="hover:text-white transition-colors" href="https://kalash.co.uk/pages/contact">
      Contact
    </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 hover:bg-amber-500 transition-all duration-300 text-xs font-semibold text-white tracking-tight bg-amber-600 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_-3px_rgba(217,119,6,0.4)]" href="/i-ll-collect">
  Order Online
  <svg className="" data-icon-set="lucide" data-lucide="shopping-bag" height="1em" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z">
</path>
</g>
</svg>
</a>
<button className="lg:hidden hover:text-white text-zinc-400 transition-colors focus:outline-none" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line className="" x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line className="" x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>

<div className="hidden lg:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-white/5 shadow-2xl overflow-hidden flex flex-col" id="mobile-menu">
<div className="px-6 py-4 space-y-2">
<a className="block py-3 text-sm font-medium text-white border-b border-white/5" href="https://kalash.co.uk/">
            Home
          </a>

<div className="border-b border-white/5">
<button className="w-full flex items-center justify-between py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors focus:outline-none" onclick="toggleMobileSubmenu('menus-submenu')">
              Menus
              <svg className="transition-transform duration-300 text-zinc-500" data-icon-set="lucide" data-lucide="chevron-down" height="16" id="menus-submenu-icon" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="hidden flex-col gap-1 pb-3 pl-4" id="menus-submenu">
<a className="block py-2 text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2" href="https://kalash.co.uk/pages/evening_menu">
<span className="w-1 h-1 rounded-full bg-zinc-700"></span> Evening Menu
              </a>
<a className="block py-2 text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2" href="https://kalash.co.uk/pages/takeaway_menu">
<span className="w-1 h-1 rounded-full bg-zinc-700"></span> Takeaway Menu
              </a>
<a className="block py-2 text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2" href="https://kalash.co.uk/pages/vegan_menu">
<span className="w-1 h-1 rounded-full bg-zinc-700"></span> Vegan Menu
              </a>
</div>
</div>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors border-b border-white/5" href="https://kalash.co.uk/pages/reservation">
            Reservations
          </a>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors border-b border-white/5" href="/gallery">
            Gallery
          </a>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors border-b border-white/5" href="https://kalash.co.uk/pages/event_catering">
            Event
          </a>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="https://kalash.co.uk/pages/contact">
            Contact
          </a>
<div className="pt-4 pb-2">
<a className="flex justify-center items-center gap-2 bg-amber-600 text-white w-full py-3 rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors" href="https://kalash.app4food.co.uk/takeaway/SetPreferredDeliveryMethod">
              Order Online
              <svg data-icon-set="lucide" data-lucide="shopping-bag" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</a>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0">
<img alt="Kalash Interior" className="w-full h-full object-cover opacity-60" src="https://kalash.co.uk/assets/images/bannehome_1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 space-y-8">
<div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="inline-flex items-center justify-center border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
<span className="text-amber-500 text-xs font-medium tracking-wide uppercase">
              Fine Indian Cuisine
            </span>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
          Being True.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">
            Authentic
          </span>
          Indian Food.
        </h1>
<p className="text-lg text-zinc-300 max-w-xl mx-auto font-light leading-relaxed [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate">
          Experience a culinary journey where vibrant aesthetics meet
          traditional techniques. Kalash defines modern gastronomy in Southport.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="https://kalash.co.uk/pages/reservation">
            Make a Reservation
          </a>
<a className="sm:w-auto hover:bg-zinc-800 transition-colors text-sm font-medium text-white bg-zinc-900/50 w-full border-zinc-700 border rounded-full pt-3 pr-8 pb-3 pl-8 backdrop-blur" href="/cart">
            View Menu
          </a>
</div>
</div>
</header>

<section className="bg-zinc-950 border-white/5 border-b pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="space-y-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Our History
            </h2>
<div className="h-1 w-20 bg-amber-600 rounded-full"></div>
</div>
<blockquote className="text-xl text-zinc-300 italic border-l-2 border-amber-600 pl-6 py-2 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
            "It is said that good food is like a spiritual experience."
          </blockquote>
<div className="space-y-6 text-zinc-400 leading-relaxed text-sm md:text-base font-light [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<p className="">
              KALASH makes it Divine as it celebrates the renaissance of Indian
              cuisine in this region of the world. We bring to you light,
              nutritious, aromatic food that's a feast to the senses, with a
              perfect and subtle balance to delight a gourmet's heart and soul.
            </p>
<p className="">
              Kalash Divine Indian is a fine quality Indian restaurant based in
              Southport in the North West of the UK. We pride ourselves on
              creating the highest quality food made from the freshest and best
              ingredients and spices. From our excellent starters, through
              choices of vegetarian and non-vegetarian curries and main courses,
              to our masterfully created desserts with their delicious sweet
              flavours.
            </p>
<p className="text-white font-medium">
              Our mission is simple – To serve the highest quality authentic
              Indian food, with divine flavours, cooked with passion and served
              with affection.
            </p>
</div>
<div className="pt-4 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors group text-sm font-medium text-amber-500" href="https://kalash.co.uk/pages/reservation">
              Book Your Table
              <svg className="group-hover:translate-x-1 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="relative [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-20"></div>
<div className="grid grid-cols-2 gap-4 relative">
<img alt="Gallery Image 1" className="rounded-2xl border border-white/10 w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://kalash.co.uk/assets/images/gallery/1.jpg"/>
<img alt="Gallery Image 2" className="rounded-2xl border border-white/10 w-full h-64 object-cover mt-8 hover:scale-[1.02] transition-transform duration-500" src="https://kalash.co.uk/assets/images/gallery/3.jpg"/>
<img alt="Gallery Image 3" className="rounded-2xl border border-white/10 w-full h-64 object-cover -mt-8 hover:scale-[1.02] transition-transform duration-500" src="https://kalash.co.uk/assets/images/gallery/5.jpg"/>
<img alt="Gallery Image 4" className="rounded-2xl border border-white/10 w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://kalash.co.uk/assets/images/gallery/9.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/30 border-white/5 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
            Visual Experience
          </h2>
<p className="text-zinc-400 text-sm">
            A glimpse into our atmosphere and culinary creations.
          </p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white text-xs font-medium hover:bg-zinc-700 transition-colors" href="https://kalash.co.uk/pages/gallery">
          View Full Gallery
        </a>
</div>

<div className="relative group w-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-zinc-300 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-zinc-800 hover:text-white hover:border-white/20 flex items-center justify-center cursor-pointer" onclick="document.getElementById('gallery-scroll-container').scrollBy({left: -360, behavior: 'smooth'})">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-left" height="18" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="flex overflow-x-auto gap-5 no-scrollbar snap-x px-6 pb-8 pt-2 scroll-smooth items-center" id="gallery-scroll-container">

<div className="flex-none w-[280px] sm:w-[340px] aspect-[4/5] snap-center relative rounded-xl overflow-hidden border border-white/10 group/card bg-zinc-900 shadow-2xl">
<img alt="Dining Atmosphere" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" src="https://kalash.co.uk/assets/images/gallery/2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<span className="text-amber-500 text-[10px] font-semibold tracking-wider uppercase mb-2 translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                Atmosphere
              </span>
<h3 className="text-white text-lg font-medium tracking-tight transform group-hover/card:-translate-y-1 transition-transform duration-300">
                Fine Dining
              </h3>
</div>
</div>

<div className="flex-none w-[280px] sm:w-[340px] aspect-[4/5] snap-center relative rounded-xl overflow-hidden border border-white/10 group/card bg-zinc-900 shadow-2xl">
<img alt="Interior Design" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" src="https://kalash.co.uk/assets/images/gallery/6.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<span className="text-amber-500 text-[10px] font-semibold tracking-wider uppercase mb-2 translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                Interior
              </span>
<h3 className="text-white text-lg font-medium tracking-tight transform group-hover/card:-translate-y-1 transition-transform duration-300">
                Modern Setting
              </h3>
</div>
</div>

<div className="flex-none w-[280px] sm:w-[340px] aspect-[4/5] snap-center relative rounded-xl overflow-hidden border border-white/10 group/card bg-zinc-900 shadow-2xl">
<img alt="Culinary Art" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" src="https://kalash.co.uk/assets/images/gallery/8.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<span className="text-amber-500 text-[10px] font-semibold tracking-wider uppercase mb-2 translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                Cuisine
              </span>
<h3 className="text-white text-lg font-medium tracking-tight transform group-hover/card:-translate-y-1 transition-transform duration-300">
                Signature Dishes
              </h3>
</div>
</div>

<div className="flex-none w-[280px] sm:w-[340px] aspect-[4/5] snap-center relative rounded-xl overflow-hidden border border-white/10 group/card bg-zinc-900 shadow-2xl">
<img alt="Table Setting" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" src="https://kalash.co.uk/assets/images/gallery/10.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<span className="text-amber-500 text-[10px] font-semibold tracking-wider uppercase mb-2 translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                Details
              </span>
<h3 className="text-white text-lg font-medium tracking-tight transform group-hover/card:-translate-y-1 transition-transform duration-300">
                Presentation
              </h3>
</div>
</div>

<div className="flex-none w-[280px] sm:w-[340px] aspect-[4/5] snap-center relative rounded-xl overflow-hidden border border-white/10 group/card bg-zinc-900 shadow-2xl">
<img alt="Restaurant Ambiance" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" src="https://kalash.co.uk/assets/images/gallery/15.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<span className="text-amber-500 text-[10px] font-semibold tracking-wider uppercase mb-2 translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                Experience
              </span>
<h3 className="text-white text-lg font-medium tracking-tight transform group-hover/card:-translate-y-1 transition-transform duration-300">
                Warm Welcome
              </h3>
</div>
</div>
</div>

<button className="-translate-y-1/2 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-zinc-800 hover:text-white hover:border-white/20 flex cursor-pointer text-zinc-300 bg-zinc-900/80 opacity-0 w-10 h-10 z-20 border-white/10 border rounded-full absolute top-1/2 right-4 shadow-xl backdrop-blur-md items-center justify-center" onclick="document.getElementById('gallery-scroll-container').scrollBy({left: 360, behavior: 'smooth'})">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" height="18" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 via-zinc-950/60 to-transparent z-10 pointer-events-none rounded-r-2xl"></div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

<div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-amber-500/20 transition-colors [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-start justify-between mb-8">
<div className="">
<h3 className="text-2xl font-medium text-white mb-2">
                Opening Hours
              </h3>
<p className="text-zinc-500 text-sm">Come dine with us.</p>
</div>
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-500">
<svg className="" data-icon-set="lucide" data-lucide="clock" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-zinc-300 font-medium text-sm">Mon</span>
<span className="text-zinc-400 text-sm">05:00pm – 10:00pm</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-zinc-300 font-medium text-sm">Tue - Thur</span>
<span className="text-zinc-400 text-sm">05:00pm – 10:00pm</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-zinc-300 font-medium text-sm">Fri - Sat</span>
<span className="text-zinc-400 text-sm">05:00pm – 10:00pm</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-zinc-300 font-medium text-sm">Sun</span>
<span className="text-zinc-400 text-sm">05:00pm – 09:00pm</span>
</div>
</div>
<div className="mt-8">
<a className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg text-sm font-medium transition-colors" href="https://kalash.co.uk/pages/reservation">
              Reserve a Table
            </a>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-amber-500/20 transition-colors flex flex-col justify-between [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="">
<div className="flex items-start justify-between mb-8">
<div className="">
<h3 className="text-2xl font-medium text-white mb-2">
                  Our Presence
                </h3>
<p className="text-zinc-500 text-sm">Visit us in Southport.</p>
</div>
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-500">
<svg className="" data-icon-set="lucide" data-lucide="map-pin" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<svg className="text-zinc-500 mt-1" data-icon-set="lucide" data-lucide="navigation" height="36" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 11l19-9l-9 19l-2-8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="">
<p className="text-white text-sm font-medium">1 - 5 Lord St</p>
<p className="text-zinc-400 text-sm">Southport, PR8 1RP</p>
</div>
</div>
<div className="flex gap-4">
<svg className="text-zinc-500 mt-1" data-icon-set="lucide" data-lucide="mail" height="20" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<div>
<a className="text-zinc-300 hover:text-white text-sm transition-colors" href="mailto:sales@kalash.co.uk">
                    sales@kalash.co.uk
                  </a>
</div>
</div>
<div className="flex gap-4">
<svg className="text-zinc-500 mt-1" data-icon-set="lucide" data-lucide="phone" height="40" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="">
<a className="text-zinc-300 hover:text-white text-sm transition-colors block" href="tel:01704548777">
                    01704 548777
                  </a>
<a className="text-zinc-300 hover:text-white text-sm transition-colors block mt-1" href="tel:07787138158">
                    07787 138158
                  </a>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden h-40 border border-zinc-800 relative bg-zinc-800 group">
<iframe allowfullscreen="" className="grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.1342103821257!2d-3.015088083970319!3d53.644579060031205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b3ecfd9930171%3A0x66845221259534e3!2s1-5%20Lord%20St%2C%20Southport%20PR8%201RP%2C%20UK!5e0!3m2!1sen!2sin!4v1570784140623!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<div className="bg-zinc-950 border-t border-zinc-900 py-12 px-6">
<div className="max-w-3xl mx-auto bg-zinc-900/30 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<svg className="text-amber-500" data-icon-set="lucide" data-lucide="calendar-check" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
          Check Availability
        </h4>
<form className="grid md:grid-cols-4 gap-4">
<div className="relative md:col-span-1">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-amber-500 transition-colors custom-input" type="date"/>
</div>
<div className="relative md:col-span-1">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-amber-500 transition-colors custom-input appearance-none">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5+ Guests</option>
</select>
</div>
<div className="relative md:col-span-1">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-amber-500 transition-colors custom-input appearance-none">
<option>19:00</option>
<option>19:30</option>
<option>20:00</option>
<option>20:30</option>
</select>
</div>
<button className="bg-amber-600 hover:bg-amber-500 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-colors md:col-span-1 shadow-lg shadow-amber-900/20" onclick="window.location.href='https://kalash.co.uk/pages/reservation'" type="button">
            Find Table
          </button>
</form>
<div className="mt-4 flex items-center gap-3">
<input className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-amber-600 focus:ring-amber-500 focus:ring-offset-zinc-900 accent-amber-500" id="newsletter" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer select-none" htmlFor="newsletter">
            Send me seasonal menu updates
          </label>
</div>
</div>
</div>

<footer className="bg-zinc-950 pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-2 md:col-span-1">
<a className="block mb-6" href="https://kalash.co.uk/">
<img alt="Kalash Logo" className="h-10 w-auto opacity-90 grayscale hover:grayscale-0 transition-all" src="https://kalash.co.uk/assets/images/kalash_logo.png"/>
</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              A fine quality restaurant serving authentic Indian cuisine in the
              heart of Southport.
            </p>
</div>

<div>
<h5 className="text-white font-medium mb-6 text-sm">Explore</h5>
<ul className="space-y-4 text-xs font-medium text-zinc-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/">
                  Home
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/evening_menu">
                  Evening Menu
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/takeaway_menu">
                  Takeaway
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/vegan_menu">
                  Vegan Options
                </a>
</li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-6 text-sm">Experience</h5>
<ul className="space-y-4 text-xs font-medium text-zinc-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/reservation">
                  Reservations
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/gallery">
                  Gallery
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/event_catering">
                  Private Events
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/contact">
                  Contact Us
                </a>
</li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-6 text-sm">Legal</h5>
<ul className="space-y-4 text-xs font-medium text-zinc-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/term_conditions">
                  Terms &amp; Conditions
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="https://kalash.co.uk/pages/privacy_policy">
                  Privacy Policy
                </a>
</li>
<li><span className="text-zinc-700">© 2019 kalash.co.uk</span></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-zinc-600 uppercase tracking-wider">
            All Rights Reserved
          </p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<svg className="" data-icon-set="lucide" data-lucide="facebook" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<svg className="" data-icon-set="lucide" data-lucide="instagram" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
