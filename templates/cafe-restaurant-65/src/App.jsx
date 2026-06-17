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
      

<div className="bg-stone-900 px-4 py-2 text-center">
<p className="text-xs font-medium tracking-wide text-stone-300">
<span className="text-white">Bella! Did you eat?</span> Sunday Brunch Buffet is back.
            <a className="ml-2 inline-flex items-center text-white underline decoration-stone-600 underline-offset-2 hover:decoration-white" href="#">Reserve Now <svg className="lucide lucide-arrow-right ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</p>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-stone-200 bg-[#FAFAF9]/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

<div className="hidden w-1/3 items-center gap-6 md:flex">
<a className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900" href="#">Menu</a>
<a className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900" href="#">Events</a>
<a className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900" href="#">History</a>
</div>

<div className="flex w-full justify-center md:w-1/3">
<a className="group flex flex-col items-center" href="#">
<span className="font-serif text-2xl italic leading-none tracking-tight text-stone-900">Free Times</span>
<span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-orange-600 transition-colors">Cafe • Est. 1980</span>
</a>
</div>

<div className="flex w-1/3 justify-end gap-4">
<button className="hidden items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 md:flex">
<svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
<a className="inline-flex h-9 items-center justify-center rounded-full border border-stone-200 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-stone-900 shadow-sm transition-all hover:border-orange-200 hover:bg-orange-50" href="#">
                    Book Table
                </a>
</div>
</div>
</nav>

<header className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

<div className="flex flex-col justify-center lg:col-span-5">
<div className="mb-6 flex items-center gap-3">
<div className="h-px w-8 bg-orange-600"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-orange-700">The Heart of College St.</span>
</div>
<h1 className="mb-6 font-serif text-6xl font-normal leading-[1.05] tracking-tight text-stone-900 md:text-7xl">
                        Food for the <span className="italic text-stone-500">soul</span>, music for the <span className="italic text-stone-500">spirit</span>.
                    </h1>
<p className="mb-8 max-w-md text-lg leading-relaxed text-stone-500">
                        An authentic Toronto landmark serving Jewish home cooking and hosting live acoustic music every single night since 1980.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-stone-900 px-6 text-sm font-medium text-white transition-all hover:bg-stone-800">
                            See What's On
                            <svg className="lucide lucide-arrow-down-right transition-transform group-hover:rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 5 7 7-7 7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="inline-flex h-11 items-center justify-center rounded-full border border-stone-200 px-6 text-sm font-medium text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-900">
                            View Menu
                        </button>
</div>
</div>

<div className="relative lg:col-span-7">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-stone-200 md:aspect-auto md:h-[500px]">
<img alt="Musician performing" className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 z-10 hidden md:block">
<div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-orange-600 text-white shadow-xl ring-4 ring-[#FAFAF9]">
<span className="font-serif text-3xl italic">44</span>
<span className="text-[0.6rem] font-bold uppercase tracking-widest">Years</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-t border-stone-200 py-20">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900">This Week</h2>
<p className="mt-2 text-stone-500">Curated experiences in dining and entertainment.</p>
</div>
<a className="text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-orange-500" href="#">View Full Calendar</a>
</div>
<div className="grid grid-cols-1 gap-px bg-stone-200 md:grid-cols-3 lg:gap-px">

<div className="group relative flex flex-col justify-between bg-[#FAFAF9] p-8 transition-colors hover:bg-white">
<div className="mb-8">
<div className="mb-4 inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-xs font-medium text-stone-600">
                            Tonight • 8:00 PM
                        </div>
<h3 className="mb-2 font-serif text-2xl text-stone-900">Open Mic Night</h3>
<p className="text-sm leading-relaxed text-stone-500">The longest running open stage in Toronto. Come share your songs, poems, and stories in our legendary Club Room.</p>
</div>
<div className="flex items-center justify-between border-t border-stone-100 pt-6">
<div className="flex -space-x-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 ring-2 ring-white text-[10px] font-bold text-stone-400">?</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 ring-2 ring-white text-[10px] text-white">You</div>
</div>
<span className="text-xs font-medium text-stone-400">Free Entry</span>
</div>
</div>

<div className="group relative flex flex-col justify-between bg-[#FAFAF9] p-8 transition-colors hover:bg-white">
<div className="mb-8">
<div className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                            Signature Event
                        </div>
<h3 className="mb-2 font-serif text-2xl text-stone-900">Bella! Did Ya Eat?</h3>
<p className="text-sm leading-relaxed text-stone-500">Our world-famous Sunday Brunch Buffet features over 50 items of authentic Jewish home cooking, plus live Klezmer music.</p>
</div>
<div className="flex items-center justify-between border-t border-stone-100 pt-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-star text-orange-400 fill-orange-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<span className="text-xs font-medium text-stone-600">Best Brunch 2023</span>
</div>
<span className="text-xs font-medium text-stone-400">Sundays 10am-3pm</span>
</div>
</div>

<div className="group relative flex flex-col justify-between bg-[#FAFAF9] p-8 transition-colors hover:bg-white">
<div className="mb-8">
<div className="mb-4 inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-xs font-medium text-stone-600">
                            Dining
                        </div>
<h3 className="mb-2 font-serif text-2xl text-stone-900">The Latke Platter</h3>
<p className="text-sm leading-relaxed text-stone-500">Crispy potato pancakes served with homemade applesauce and sour cream. A Free Times staple since day one.</p>
</div>
<div className="relative mt-auto h-32 w-full overflow-hidden rounded bg-stone-100">
<img alt="Latkes" className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" src="https://images.unsplash.com/photo-1606756209252-a6e53d537f22?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-stone-900 text-stone-300">
<div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

<div className="relative flex min-h-[500px] flex-col justify-center overflow-hidden border-b border-stone-800 p-12 md:border-b-0 md:border-r">
<div className="absolute inset-0 bg-[radial-gradient(#3c3c3c_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
<div className="relative z-10">
<svg className="lucide lucide-mic mb-6 text-stone-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<h2 className="mb-4 font-serif text-4xl text-white">The Club Room</h2>
<p className="mb-8 max-w-sm text-stone-400">An intimate listening room where the music comes first. Experience folk, roots, and jazz in a distraction-free environment.</p>
<ul className="space-y-4">
<li className="flex items-center gap-4 border-b border-stone-800 pb-4">
<span className="font-mono text-xs text-stone-500">OCT 24</span>
<span className="text-sm font-medium text-white">Laura Smith Trio</span>
<span className="ml-auto text-xs text-stone-500">8:30 PM</span>
</li>
<li className="flex items-center gap-4 border-b border-stone-800 pb-4">
<span className="font-mono text-xs text-stone-500">OCT 25</span>
<span className="text-sm font-medium text-white">Toronto Folk Collective</span>
<span className="ml-auto text-xs text-stone-500">9:00 PM</span>
</li>
</ul>
</div>
</div>

<div className="relative flex min-h-[500px] flex-col justify-center p-12">
<div className="absolute inset-0">
<img alt="Bistro interior" className="h-full w-full object-cover opacity-10" src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/60"></div>
</div>
<div className="relative z-10">
<svg className="lucide lucide-utensils-crossed mb-6 text-stone-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path><path d="m2.1 21.8 6.4-6.3"></path><path d="m19 5-7 7"></path></svg>
<h2 className="mb-4 font-serif text-4xl text-white">The Bistro</h2>
<p className="mb-8 max-w-sm text-stone-400">From our famous blintzes to hearty brisket dinners. A menu celebrating tradition, comfort, and flavor.</p>
<div className="grid grid-cols-2 gap-4">
<a className="group block rounded bg-stone-800 p-4 transition-colors hover:bg-stone-700" href="#">
<span className="mb-1 block text-xs text-stone-500">Menu</span>
<span className="block font-medium text-white group-hover:text-orange-300">Dinner</span>
</a>
<a className="group block rounded bg-stone-800 p-4 transition-colors hover:bg-stone-700" href="#">
<span className="mb-1 block text-xs text-stone-500">Menu</span>
<span className="block font-medium text-white group-hover:text-orange-300">Brunch</span>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#FAFAF9] pt-20 pb-12">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 gap-12 border-b border-stone-200 pb-16 md:grid-cols-4">
<div className="md:col-span-1">
<span className="font-serif text-xl italic leading-none tracking-tight text-stone-900">Free Times Cafe</span>
<p className="mt-4 text-sm text-stone-500">Authentic food &amp; music culture in Toronto since 1980.</p>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-900">Visit</h4>
<p className="text-sm leading-6 text-stone-600">
                        320 College Street<br/>
                        Toronto, ON M5T 1S3<br/>
<a className="hover:text-stone-900" href="tel:4169671078">416-967-1078</a>
</p>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-900">Hours</h4>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex justify-between"><span>Mon-Thu</span> <span>11am - 11pm</span></li>
<li className="flex justify-between"><span>Fri-Sat</span> <span>11am - 12am</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>10am - 11pm</span></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-900">Newsletter</h4>
<form className="flex flex-col gap-2">
<input className="h-9 w-full rounded-md border border-stone-200 bg-white px-3 text-sm placeholder:text-stone-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Email address" type="email"/>
<button className="h-9 w-full rounded-md bg-stone-900 text-sm font-medium text-white transition-colors hover:bg-stone-800">Subscribe</button>
</form>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
<p className="text-xs text-stone-400">© 2024 Free Times Cafe. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-stone-400 transition-colors hover:text-stone-900" href="#"><svg className="lucide lucide-instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-400 transition-colors hover:text-stone-900" href="#"><svg className="lucide lucide-facebook" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
