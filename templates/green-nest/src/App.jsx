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
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    


      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
          menu.classList.remove('hidden');
          setTimeout(() => {
            menu.style.maxHeight = menu.scrollHeight + 'px';
          }, 10);
        } else {
          menu.style.maxHeight = '0px';
          setTimeout(() => {
            menu.classList.add('hidden');
          }, 300);
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
      

<div className="min-h-screen">

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-5">

<a className="inline-flex items-center justify-center bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2cdb38b4-fe8a-4ba3-88db-1d7db4b2c9a4_1600w.png)] bg-cover rounded-full" href="#"></a>

<div className="flex items-center gap-2 sm:gap-3 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both] animate">
<button aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition" onclick="toggleMenu()">
<svg className="lucide lucide-menu h-5 w-5 text-neutral-700" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<button aria-label="Notifications" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
<svg className="lucide lucide-bell h-5 w-5 text-neutral-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>
</div>
</header>
<nav className="relative z-10 overflow-hidden transition-all duration-300 ease-in-out hidden" id="mobile-menu" style={{maxHeight: '0px'}}>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="py-6 space-y-2">
<a className="block px-4 py-3 rounded-xl text-neutral-900 font-medium hover:bg-white transition ring-1 ring-transparent hover:ring-black/5 font-geist" href="#">
              Home
            </a>
<a className="block px-4 py-3 rounded-xl text-neutral-900 font-medium hover:bg-white transition ring-1 ring-transparent hover:ring-black/5 font-geist" href="#">
              My Plants
            </a>
<a className="block px-4 py-3 rounded-xl text-neutral-900 font-medium hover:bg-white transition ring-1 ring-transparent hover:ring-black/5 font-geist" href="#">
              Scan Leaf
            </a>
<a className="block px-4 py-3 rounded-xl text-neutral-900 font-medium hover:bg-white transition ring-1 ring-transparent hover:ring-black/5 font-geist" href="#">
              Care Tips
            </a>
<a className="block px-4 py-3 rounded-xl text-neutral-900 font-medium hover:bg-white transition ring-1 ring-transparent hover:ring-black/5 font-geist" href="#">
              Settings
            </a>
</div>
</div>
</nav>

<main className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">

<section className="space-y-6 sm:space-y-8">

<div className="">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both] animate font-jakarta font-medium tracking-tighter" style={{}}>
                  Nurture your
                  <span className="block font-medium text-neutral-800 font-jakarta tracking-tighter" style={{}}>
                    Indoor Garden
                  </span>
</h1>
<p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-neutral-600 font-normal animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate font-geist">
                  Timely care tips, gentle reminders, and instant leaf scans to
                  keep every plant happy.
                </p>

<div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both] animate">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition font-geist" href="#">
<svg className="lucide lucide-scan h-5 w-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
                    Scan a leaf
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-neutral-900 font-medium shadow-sm ring-1 ring-black/5 hover:shadow-md transition font-geist" href="#">
<svg className="lucide lucide-plus h-5 w-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    Add plant
                  </a>
</div>
</div>

<div className="inline-flex w-full sm:w-auto items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate">
<button className="flex-1 sm:flex-none rounded-full px-4 py-2 text-sm font-medium bg-emerald-50 text-emerald-700 font-geist">
                  Recently added
                </button>
<button className="flex-1 sm:flex-none rounded-full px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 font-geist">
                  Archived
                </button>
</div>

<div className="overflow-hidden sm:rounded-3xl animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.25s_both] animate bg-gradient-to-b from-emerald-50 to-white ring-black/5 ring-1 rounded-2xl relative shadow-lg">
<div className="grid grid-cols-1">
<div className="relative min-w-0">
<img alt="Monstera close-up" className="sm:h-72 md:h-96 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/35e0dc47-390a-4444-9429-52ad0c0d3797_1600w.jpg"/>

<div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:left-6 md:right-6">
<div className="flex flex-col gap-2 sm:gap-3 sm:flex-row">
<div className="flex-1 min-w-[220px] rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm p-3 sm:p-4 shadow-md ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div>
<p className="text-xs sm:text-sm text-neutral-500 font-geist">
                  Monstera Deliciosa
                </p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">
                  9 days since planted
                </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-medium text-emerald-700 font-geist">
<svg className="lucide lucide-sprout h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
                Thriving
              </span>
</div>
<div className="mt-2 sm:mt-3 grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 rounded-lg sm:rounded-xl bg-neutral-50 p-2 ring-1 ring-black/5">
<div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-emerald-500/10">
<svg className="lucide lucide-thermometer h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div>
<p className="text-[10px] sm:text-[11px] text-neutral-500 font-geist">
                    Room temp
                  </p>
<p className="text-xs sm:text-sm font-medium font-geist">22°C</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg sm:rounded-xl bg-neutral-50 p-2 ring-1 ring-black/5">
<div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-amber-500/10">
<svg className="lucide lucide-sun h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-600" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div>
<p className="text-[10px] sm:text-[11px] text-neutral-500 font-geist">
                    Room light
                  </p>
<p className="text-xs sm:text-sm font-medium font-geist">68%</p>
</div>
</div>
</div>
</div>
<div className="hidden sm:block w-20 sm:w-24 shrink-0 rounded-xl sm:rounded-2xl bg-white/90 p-3 sm:p-4 text-center backdrop-blur-sm shadow-md ring-1 ring-black/5">
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">Water in</p>
<p className="mt-1 text-base sm:text-lg font-semibold tracking-tight font-geist">
              3d
            </p>
</div>
</div>
</div>
</div>

<div className="sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 min-w-[240px] pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3">
<div className="flex items-center justify-between">
<p className="text-xs sm:text-sm font-medium font-geist">Quick picks</p>
<button className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
<svg className="lucide lucide-grid-2x2 h-4 w-4 sm:h-5 sm:w-5 text-neutral-700" data-lucide="grid-2x2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-2 sm:gap-3">
<div className="rounded-xl sm:rounded-2xl bg-white p-2 sm:p-3 ring-1 ring-black/5 hover:shadow transition min-w-0">
<img alt="Aloe Vera" className="sm:h-20 sm:rounded-xl w-full h-16 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46916c7a-828c-4b95-826f-b7af016e08fb_800w.jpg"/>
<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium font-geist truncate">Aloe Vera</p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">12 days</p>
</div>
<div className="rounded-xl sm:rounded-2xl bg-white p-2 sm:p-3 ring-1 ring-black/5 hover:shadow transition min-w-0">
<img alt="Calathea" className="sm:h-20 sm:rounded-xl w-full h-16 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b8c3eacb-37fb-4654-bbe4-7aeb059c265a_800w.jpg"/>
<p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium font-geist truncate">Calathea</p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">30 days</p>
</div>
</div>
<a className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-neutral-900 px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition font-geist" href="#">
<svg className="lucide lucide-leaf h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
        Browse collection
      </a>
</div>
</div>
</div>
</section>

<section className="space-y-4 sm:space-y-6">
<div className="relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 ring-1 ring-black/5 shadow-lg animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate">

<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-emerald-50 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both] animate">
<div className="absolute -left-10 -top-10 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-emerald-200/40 blur-2xl"></div>
<img alt="Fiddle Leaf Fig" className="sm:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/18db19c0-a49c-41aa-b613-72e7b13fb697_1600w.jpg"/>
<div className="absolute left-3 top-3 sm:left-4 sm:top-4">
<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/90 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-emerald-700 shadow ring-1 ring-black/5 backdrop-blur-sm font-geist">
<svg className="lucide lucide-sparkles h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                      Healthy growth
                    </span>
</div>
</div>

<div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl bg-emerald-500 text-white animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate">
<button className="flex w-full items-center justify-between gap-3 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3">
<span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium font-geist">
<svg className="lucide lucide-scan h-4 w-4 sm:h-5 sm:w-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
                      Scan a leaf
                    </span>
<svg className="lucide lucide-chevron-right h-4 w-4 sm:h-5 sm:w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="mt-4 sm:mt-5">
<div className="flex items-start justify-between animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.25s_both] animate">
<h2 className="text-xl sm:text-2xl md:text-3xl font-jakarta font-medium tracking-tighter" style={{}}>
                      Fiddle Leaf Fig
                    </h2>
<button aria-label="Favorite" className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-black/5 hover:bg-neutral-100 transition">
<svg className="lucide lucide-heart h-4 w-4 sm:h-5 sm:w-5 text-neutral-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate">
<div className="rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 ring-1 ring-black/5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500/10">
<svg className="lucide lucide-sun h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-600" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">Room light</p>
<p className="text-sm sm:text-base font-medium font-geist">62%</p>
</div>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 ring-1 ring-black/5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-emerald-500/10">
<svg className="lucide lucide-thermometer h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">Room temp</p>
<p className="text-sm sm:text-base font-medium font-geist">22°C</p>
</div>
</div>
</div>
</div>

<div className="mt-3 sm:mt-4 flex flex-wrap gap-2 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.35s_both] animate">
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium ring-1 ring-black/5 font-geist">
<svg className="lucide lucide-droplets h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                      Water every 5d
                    </span>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium ring-1 ring-black/5 font-geist">
<svg className="lucide lucide-wind h-3 w-3 sm:h-3.5 sm:w-3.5" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
                      Avoid drafts
                    </span>
</div>
</div>
</div>

<div className="grid grid-cols-2 sm:gap-4 gap-x-3 gap-y-3">
<div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both] animate">
<img alt="Snake Plant" className="h-28 sm:h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eb7733c1-154e-4c25-ba9f-f8ec606ff684_800w.jpg"/>
<div className="p-3 sm:p-4">
<p className="text-xs sm:text-sm font-medium font-geist">Snake Plant</p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">14 days until trim</p>
</div>
</div>
<div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate">
<img alt="Golden Pothos" className="h-28 sm:h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6af504a2-7140-4f58-9536-3b4b3fbe4af0_800w.jpg"/>
<div className="p-3 sm:p-4">
<p className="text-xs sm:text-sm font-medium font-geist">Golden Pothos</p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">21 days until trim</p>
</div>
</div>
</div><div className="grid grid-cols-2 sm:gap-4 gap-x-3 gap-y-3">
<div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both] animate">
<img alt="Peace Lily" className="sm:h-32 w-full h-28 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e05e29ef-d772-430e-a4d6-9a890911f625_800w.webp"/>
<div className="p-3 sm:p-4">
<p className="text-xs sm:text-sm font-medium font-geist">Peace Lily</p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">Water in 3 days</p>
</div>
</div>
<div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate">
<img alt="Spider Plant" className="sm:h-32 w-full h-28 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70dc18c6-7df4-4541-b2de-bc96d4526504_800w.webp"/>
<div className="p-3 sm:p-4">
<p className="text-xs sm:text-sm font-medium font-geist">Spider Plant</p>
<p className="text-[10px] sm:text-xs text-neutral-500 font-geist">Ready to repot</p>
</div>
</div>
</div>
</section>
</div>
</div><div className="lg:px-8 max-w-7xl mt-16 mx-auto px-6">
<section className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white ring-1 ring-black/5 shadow-lg">
<div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-5 sm:p-8">

<div className="flex flex-col justify-center">
<p className="text-xs text-white/70 font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both]">Under the hood</p>
<h3 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-jakarta font-medium tracking-tighter animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
          Our <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Care Stack</span>
</h3>
<p className="mt-3 text-sm sm:text-base text-white/80 max-w-md font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both]">
          The tools that power greener homes—fast scans, smart automations, and climate‑aware tips.
        </p>
<div className="inline-flex animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] ring-white/15 ring-1 text-xs font-geist bg-white/10 w-fit rounded-full mt-5 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          New: quicker scans • richer species data
        </div>
</div>

<div className="relative hidden md:block h-[340px]">

<div className="absolute left- top-12 z-[50] w-56 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between hover:bg-white/10 transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A1]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-scan h-14 w-14 text-white/30" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">LeafScan AI</p>
<span className="text-[11px] text-white/60 font-geist">v2.6</span>
</div>
</div>

<div className="absolute left-20 top-9 z-[40] w-56 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between rotate-[-2deg] hover:-translate-y-1 hover:rotate-0 transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.13s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A2]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-zap h-14 w-14 text-white/30" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">CareFlow</p>
<span className="text-[11px] text-white/60 font-geist">120 runs/hr</span>
</div>
</div>

<div className="absolute left-40 top-6 z-[30] w-56 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between hover:-translate-y-1 transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.16s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A3]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-database h-14 w-14 text-white/30" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">PlantBase</p>
<span className="text-[11px] text-white/60 font-geist">200+ species</span>
</div>
</div>

<div className="absolute left-60 top-9 z-[20] w-56 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between rotate-[2deg] hover:-translate-y-1 hover:rotate-0 transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.19s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A4]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-link-2 h-14 w-14 text-white/30" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">GrowthChain</p>
<span className="text-[11px] text-white/60 font-geist">3 models</span>
</div>
</div>

<div className="absolute left-80 top-12 z-[10] w-56 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between hover:bg-white/10 transition animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.22s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A5]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-cloud-sun h-14 w-14 text-white/30" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">ClimateKit</p>
<span className="text-[11px] text-white/60 font-geist">8 cities</span>
</div>
</div>
</div>

<div className="md:hidden -mx-1 px-1">
<div className="flex gap-3 overflow-x-auto pb-2">
<div className="shrink-0 w-60 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A1]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-scan h-14 w-14 text-white/30" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">LeafScan AI</p>
<span className="text-[11px] text-white/60 font-geist">v2.6</span>
</div>
</div>
<div className="shrink-0 w-60 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.13s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A2]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-zap h-14 w-14 text-white/30" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">CareFlow</p>
<span className="text-[11px] text-white/60 font-geist">120 runs/hr</span>
</div>
</div>
<div className="shrink-0 w-60 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.16s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A3]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-database h-14 w-14 text-white/30" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">PlantBase</p>
<span className="text-[11px] text-white/60 font-geist">200+ species</span>
</div>
</div>
<div className="shrink-0 w-60 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.19s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A4]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-link-2 h-14 w-14 text-white/30" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">GrowthChain</p>
<span className="text-[11px] text-white/60 font-geist">3 models</span>
</div>
</div>
<div className="shrink-0 w-60 h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 flex flex-col justify-between animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.22s_both]">
<div className="text-[10px] tracking-widest text-white/60 font-geist">[A5]</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-cloud-sun h-14 w-14 text-white/30" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">ClimateKit</p>
<span className="text-[11px] text-white/60 font-geist">8 cities</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div><div className="lg:px-8 lg:mb-16 max-w-7xl mt-16 mr-auto mb-16 ml-auto pr-6 pl-6">
<section className="space-y-8">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
<div className="">
<h2 className="sm:text-4xl animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both] text-3xl font-medium font-jakarta tracking-tighter" style={{}}>
          Plant care dashboard
        </h2>
<p className="mt-2 text-neutral-600 font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
          Updated 5 minutes ago • synced with your garden
        </p>
</div>
<span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-black/5 shadow-sm font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<svg className="lucide lucide-refresh-cw h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
        Auto-sync
      </span>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

<div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both]">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-500 font-geist">Garden status</p>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 font-geist">
<svg className="lucide lucide-sprout h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path className="" d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
            Thriving
          </span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10">
<svg className="lucide lucide-leaf text-emerald-600 h-6 w-6" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-500 font-geist">Healthy plants</p>
<p className="text-sm font-medium font-geist">All doing well</p>
</div>
</div>
<p className="text-4xl font-medium font-jakarta tracking-tighter" style={{}}>12</p>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
<svg className="lucide lucide-droplets text-cyan-600 h-4.5 w-4.5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-500 font-geist">Water today</p>
<p className="text-base font-medium font-geist">3 plants</p>
</div>
</div>
</div>
<div className="bg-neutral-50 ring-black/5 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
<svg className="lucide lucide-sun text-amber-600 h-4.5 w-4.5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-500 font-geist">Light levels</p>
<p className="text-base font-medium font-geist">Optimal</p>
</div>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-black/5 shadow-sm font-geist">
<svg className="lucide lucide-leaf h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            Monstera
          </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-black/5 shadow-sm font-geist">
<svg className="lucide lucide-sprout h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path className="" d="M5 21h14"></path></svg>
            Pothos
          </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-black/5 shadow-sm font-geist">
<svg className="lucide lucide-flower h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
            Aloe
          </span>
</div>
</div>

<div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">Living Room</p>
<button aria-label="Add plant" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-black/5 hover:bg-neutral-100 transition">
<svg className="lucide lucide-plus h-4.5 w-4.5 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="M12 5v14"></path></svg>
</button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
<svg className="lucide lucide-leaf h-4 w-4 text-emerald-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<p className="text-sm font-medium font-geist">Monstera</p>
</div>
</div>
<p className="mt-2 text-xs text-neutral-500 font-geist">Water in 2 days</p>
</div>
<div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
<svg className="lucide lucide-sprout h-4 w-4 text-amber-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<p className="text-sm font-medium font-geist">Pothos</p>
</div>
</div>
<p className="mt-2 text-xs text-neutral-500 font-geist">Water today</p>
</div>
<div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
<svg className="lucide lucide-flower-2 h-4 w-4 text-violet-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
</div>
<p className="text-sm font-medium font-geist">Orchid</p>
</div>
</div>
<p className="mt-2 text-xs text-neutral-500 font-geist">Mist tomorrow</p>
</div>
<div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
<svg className="lucide lucide-waves h-4 w-4 text-cyan-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<p className="text-sm font-medium font-geist">Fern</p>
</div>
</div>
<p className="mt-2 text-xs text-neutral-500 font-geist">High humidity</p>
</div>
</div>
<div className="mt-3 rounded-2xl bg-white p-4 ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
<svg className="lucide lucide-sun h-4 w-4 text-emerald-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<p className="text-sm font-medium font-geist">Grow Light</p>
</div>
<span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-geist">On</span>
</div>
<p className="mt-2 text-xs text-neutral-500 font-geist">8 hours daily</p>
</div>
</div>

<div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.25s_both] sm:col-span-2 lg:col-span-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">Watering Schedule</p>
<div className="flex items-center gap-2">
<button aria-label="Previous week" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-black/5 hover:bg-neutral-100 transition">
<svg className="lucide lucide-chevron-left h-4.5 w-4.5 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next week" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-black/5 hover:bg-neutral-100 transition">
<svg className="lucide lucide-chevron-right h-4.5 w-4.5 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-5 flex items-center justify-center">
<div className="relative h-48 w-48 rounded-full [background:conic-gradient(theme(colors.emerald.500)_40%,theme(colors.neutral.200)_0)]">
<div className="absolute inset-3 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center">
<div className="text-center">
<p className="text-xs text-neutral-500 font-geist">This week</p>
<p className="mt-1 text-4xl font-jakarta font-medium tracking-tighter" style={{}}>3</p>
<p className="text-xs text-neutral-500 font-geist">plants</p>
</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-2">
<button className="rounded-xl bg-neutral-50 px-3 py-2 text-xs font-medium ring-1 ring-black/5 hover:bg-neutral-100 transition font-geist">Today</button>
<button className="rounded-xl bg-emerald-500 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-600 transition font-geist">Tomorrow</button>
<button className="rounded-xl bg-neutral-50 px-3 py-2 text-xs font-medium ring-1 ring-black/5 hover:bg-neutral-100 transition font-geist">Week</button>
</div>
<div className="mt-4">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-white font-medium hover:bg-emerald-600 transition font-geist">
<svg className="lucide lucide-droplets h-4.5 w-4.5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
            View Schedule
          </button>
</div>
</div>
</div>
</section>
</div><div className="lg:px-8 max-w-7xl mt-16 mx-auto px-6">
<section className="relative overflow-hidden rounded-3xl bg-emerald-900 text-emerald-50 ring-1 ring-black/5 shadow-lg">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-5 sm:p-8">

<div className="relative overflow-hidden rounded-2xl">
<img alt="Hands holding a young plant" className="sm:h-80 md:h-full w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92abb509-03ae-49b6-baeb-24e8fa1126eb_1600w.webp"/>
<div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl"></div>
<div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-lime-300/20 blur-2xl"></div>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-emerald-100/90 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both]">
<svg className="lucide lucide-sparkles h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-geist">About GreenNest</span>
</div>
<h3 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-jakarta font-medium tracking-tighter animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
          Strong roots, thriving homes.
        </h3>
<p className="mt-3 text-sm sm:text-base text-emerald-50/80 font-geist max-w-xl animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both]">
          We help busy plant lovers build resilient indoor jungles with smart care, gentle reminders, and a kind community. Together, we grow greener spaces—one leaf at a time.
        </p>
<div className="mt-5 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both]">
<a className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-neutral-900 font-medium hover:bg-lime-400 transition font-geist" href="#">
            Learn more
            <svg className="lucide lucide-arrow-right h-4.5 w-4.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="">
<p className="font-geist text-sm font-medium">Care you can trust</p>
<p className="text-xs text-emerald-50/70 font-geist">Your data stays private—only what helps your plants.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="">
<p className="font-geist text-sm font-medium">Community-first</p>
<p className="text-xs text-emerald-50/70 font-geist">4,280 members • workshops in 32 cities.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="">
<p className="font-geist text-sm font-medium">Budget-friendly</p>
<p className="text-xs text-emerald-50/70 font-geist">Starter kits from $19 • 286 free guides.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div><div className="lg:px-8 lg:ml-auto lg:mr-auto lg:mb-16 max-w-7xl mt-16 mr-auto mb-16 ml-auto px-6">
<section className="space-y-8">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
<div className="">
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both] tracking-tighter" style={{}}>
          Care reminders
        </h2>
<p className="mt-2 text-neutral-600 font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
          Updated 2 minutes ago • synced with your devices
        </p>
</div>
<span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-black/5 shadow-sm font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<svg className="lucide lucide-calendar h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        This week
      </span>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

<div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">Today's care tasks</p>
<button aria-label="More" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-black/5 hover:bg-neutral-100 transition">
<svg className="lucide lucide-more-horizontal h-4.5 w-4.5 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<ol className="mt-5 space-y-4">
<li className="flex items-start gap-3">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-200">
<svg className="lucide lucide-droplets h-4 w-4 text-emerald-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm font-medium font-geist">Water Golden Pothos</p>
<p className="text-xs text-neutral-500 font-geist">Living Room • Morning</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 ring-1 ring-amber-200">
<svg className="lucide lucide-spray-can h-4 w-4 text-amber-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01"></path><path d="M7 5h.01"></path><path d="M11 7h.01"></path><path d="M3 7h.01"></path><path d="M7 9h.01"></path><path d="M3 11h.01"></path><rect height="4" width="4" x="15" y="5"></rect><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path><path d="m13 14 8-2"></path><path d="m13 19 8-2"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm font-medium font-geist">Mist Orchid leaves</p>
<p className="text-xs text-neutral-500 font-geist">Living Room • Afternoon</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 ring-1 ring-violet-200">
<svg className="lucide lucide-rotate-cw h-4 w-4 text-violet-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm font-medium font-geist">Rotate Fiddle Leaf Fig</p>
<p className="text-xs text-neutral-500 font-geist">By the window</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-200">
<svg className="lucide lucide-droplets h-4 w-4 text-cyan-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm font-medium font-geist">Check Fern humidity</p>
<p className="text-xs text-neutral-500 font-geist">Living Room • Evening</p>
</div>
</li>
</ol>
<div className="mt-6">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-50 p-3 ring-1 ring-black/5">
<svg className="lucide lucide-search h-4.5 w-4.5 text-neutral-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 font-geist" placeholder="Search plants or tasks..."/>
<button className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-3 py-2 text-white text-xs font-medium hover:bg-neutral-800 transition font-geist">
<svg className="lucide lucide-sliders-horizontal h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white p-6 ring-1 ring-black/5 shadow-lg animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">Weekly progress</p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/20 hover:bg-white/15 transition font-geist">
            This week
            <svg className="lucide lucide-chevron-down h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="mt-6 relative h-72 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]"></div>

<div className="relative">
<svg className="w-48 h-48 transform -rotate-90">
<circle cx="96" cy="96" fill="none" r="88" stroke="rgba(255,255,255,0.1)" strokeWidth="12"></circle>
<circle cx="96" cy="96" fill="none" r="88" stroke="rgb(16,185,129)" stroke-dasharray="553" stroke-dashoffset="138" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<p className="text-4xl font-medium font-jakarta tracking-tighter" style={{}}>75%</p>
<p className="text-xs text-white/70 mt-1 font-geist">Tasks completed</p>
</div>
</div>

<div className="absolute left-4 bottom-4 right-4">
<div className="rounded-2xl bg-white/10 backdrop-blur-md px-4 py-3 text-white shadow ring-1 ring-white/20">
<div className="flex items-center justify-between gap-6">
<div>
<p className="text-xs text-white/80 font-geist">Completed today</p>
<p className="text-sm font-medium font-geist mt-0.5">9 of 12 tasks</p>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<p className="text-xs text-white/80 font-geist">On track</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">

<div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<p className="text-sm font-medium font-geist">Current streak</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div>
<p className="text-xs text-neutral-500 font-geist">Consecutive days</p>
<p className="mt-1 text-4xl font-medium font-jakarta tracking-tighter" style={{}}>14</p>
<p className="text-xs text-neutral-500 font-geist mt-1">Keep it up!</p>
</div>
<div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100">
<svg className="lucide lucide-flame text-emerald-600" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-600 font-geist">
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-calendar h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Started Nov 15
            </div>
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-trophy h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
              Best: 21 days
            </div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 ring-1 ring-black/5 shadow-lg">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="relative">
<p className="text-white/90 text-sm font-medium font-geist">Recent care</p>
<div className="mt-3 space-y-2">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
<svg className="lucide lucide-droplets h-4 w-4 text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">Monstera watered</p>
<p className="text-xs text-white/70 font-geist">2 hours ago</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
<svg className="lucide lucide-sun h-4 w-4 text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">Snake plant relocated</p>
<p className="text-xs text-white/70 font-geist">Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div><div className="lg:px-8 max-w-7xl mt-16 mx-auto px-6">
<section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white ring-1 ring-black/5 shadow-xl">
<div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
<div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-lime-300/20 blur-3xl"></div>
<div className="relative px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 text-center">
<div className="mx-auto max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium ring-1 ring-white/30 backdrop-blur-sm font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both]">
<svg className="lucide lucide-sparkles h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Start your plant journey today
        </div>
<h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-jakarta font-medium tracking-tighter animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
          Ready to grow with us?
        </h2>
<p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both]">
          Join thousands of plant lovers who never miss a watering day. Get personalized care tips, instant leaf diagnostics, and a thriving green space.
        </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both]">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-emerald-700 font-medium shadow-lg hover:bg-neutral-50 transition font-geist w-full sm:w-auto" href="#">
<svg className="lucide lucide-leaf h-5 w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            Start free trial
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-white font-medium ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/15 transition font-geist w-full sm:w-auto" href="#">
<svg className="lucide lucide-play-circle h-5 w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Watch demo
          </a>
</div>
<div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80 font-geist animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            14-day free trial
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            No credit card required
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            Cancel anytime
          </div>
</div>
</div>
</div>
</section>
</div><footer className="mt-24 bg-neutral-900 text-neutral-300">
<div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12 lg:py-16">

<div className="lg:col-span-2">
<div className="inline-flex bg-center opacity-90 w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2cdb38b4-fe8a-4ba3-88db-1d7db4b2c9a4_1600w.png)] bg-cover rounded-full invert items-center justify-center"></div>
<p className="mt-4 text-sm text-neutral-400 max-w-xs font-geist">
          Helping plant lovers build thriving indoor gardens with smart care reminders and instant diagnostics.
        </p>
<div className="mt-6 flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-youtube" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><polygon points="10 15 15 12 10 9 10 15"></polygon></svg>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-white font-geist">Product</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Features</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Plant Scanner</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Care Reminders</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Plant Database</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Pricing</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-white font-geist">Resources</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Care Guides</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Community</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">API Docs</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-white font-geist">Company</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">About</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Press Kit</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Contact</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Partners</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 py-8">
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-sm text-neutral-500 font-geist">
          © 2024 GreenNest. All rights reserved.
        </p>
<div className="flex flex-wrap items-center justify-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Privacy Policy</a>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Terms of Service</a>
<a className="text-sm text-neutral-400 hover:text-white transition font-geist" href="#">Cookie Policy</a>
</div>
</div>
</div>
</div>
</footer>
</main>

</div>





    </>
  );
}
