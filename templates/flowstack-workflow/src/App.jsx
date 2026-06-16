import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
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
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        
        menuBtn?.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed -z-10 w-full h-screen top-0 saturate-50 hue-rotate-15 blur-3xl" style={{}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/liquidgradientabstractbackground-gEjylYLumN1b1CUcuIb8DyUA" width="100%"></iframe></div>
</div>


<div className="fixed z-50 bg-transparent pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0">
<div className="max-w-4xl mx-auto xl:px-3 [animation:fadeSlideIn_1s_ease-out_0.1s_both] border rounded-2xl px-3 py-3 border-white/10 shadow-xl" style="
    background:
      linear-gradient(180deg, rgba(14,16,26,0.55), rgba(14,16,26,0.35)) padding-box,
      linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08)) border-box;
    border: 1px solid transparent;
    backdrop-filter: blur(16px) saturate(120%);
    -webkit-backdrop-filter: blur(16px) saturate(120%);
    box-shadow:
      0 10px 30px rgba(0,0,0,0.25),
      inset 0 1px 0 rgba(255,255,255,0.04);
  ">
<div className="flex items-center justify-between">

<a className="inline-flex w-[100px] h-[40px] bg-center bg-cover rounded" href="/home" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ab707825-6adb-4b45-8319-4de9275950e8_800w.png\')'}}></a>

<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className="">
<a className="rounded-full px-4 py-2 transition-colors hover:text-white hover:bg-white/5" href="/home">
          Home
        </a>
</li>
<li>
<a className="rounded-full px-4 py-2 transition-colors hover:text-white hover:bg-white/5" href="/create">
          Create
        </a>
</li>
<li className="">
<a className="rounded-full px-4 py-2 transition-colors hover:text-white hover:bg-white/5" href="/pricing">
          Pricing
        </a>
</li>
</ul>

<div className="flex items-center gap-2">

<button aria-label="Menu" className="md:hidden p-2 rounded-full border border-white/5 bg-white/5/10 transition-colors hover:bg-white/5">
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>

<button className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
        Start For Free
      </button>
</div>
</div>
</div>
</div>

<section className="z-10 relative" style={{}}>
<div className="md:px-6 md:pb-16 md:pt-40 max-w-7xl mr-auto ml-auto pt-40 pr-4 pb-16 pl-4">
<div className="text-center max-w-3xl mx-auto">
<h1 className="relative mx-auto text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]" style={{textShadow: '0 10px 40px rgba(0,0,0,0.55)'}}>
<span className="block [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="font-light tracking-tighter font-instrument-serif text-left text-white [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
        Create Music that
      </span>
</span>
<span className="block mt-1 sm:mt-2 [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<span className="font-light tracking-tighter font-instrument-serif text-white">
        Matches Your Vybe
      </span>
</span>
</h1>
<p className="mt-6 text-base md:text-lg text-slate-300 [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
    Write a few words, and Vybe turns them into full compositions — melodies, vocals, and beats that capture your mood.
    No instruments or experience needed.
  </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.5s_both]">

<button aria-label="Generate a Song" className="group relative inline-flex items-center justify-center text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform active:scale-95" style={{borderRadius: '10px', padding: '.75rem 1.5rem', background: 'linear-gradient(336deg,#ffc420 0%,#fe4b08 39%,#fe4b08 57%,#ffc420 100%)', boxShadow: 'inset 12px 0 12px rgba(255,255,255,.25), inset -2px -4px 8px rgba(255,255,255,.25)'}}>
<span className="pointer-events-none absolute inset-0 rounded-[10px] transition-all duration-300 will-change-filter opacity-100 blur-[5px] group-hover:opacity-0 group-hover:blur-0" style={{background: 'linear-gradient(to top, rgba(255,196,32,.53), transparent)', zIndex: '-1'}}></span>
      Generate a Song
    </button>

<button aria-label="Explore Sounds" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors">
      Explore Sounds
    </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto md:px-6 px-4 -mb-8">
<div className="relative w-full overflow-hidden rounded-2xl border backdrop-blur-xl shadow-2xl bg-neutral-50/40 xl:dark:bg-black/60 border-black/10 dark:border-white/10 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">

<div className="flex items-center justify-between border-b px-3 py-4 xl:py-4 border-black/10 dark:border-white/10">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">

<aside className="hidden md:flex md:col-span-3 h-full flex-col bg-black/10 xl:bg-black/30 border-r border-black/10 dark:border-white/10 px-4 py-4">

<div className="mb-4 flex items-center justify-between rounded-lg border bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-2">
<div className="inline-flex items-center gap-2">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg"/>
<div className="leading-tight">
<div className="text-sm text-neutral-800 dark:text-slate-200">Sara Naya</div>
<div className="text-xs text-neutral-500 dark:text-slate-500">@sarahnaya</div>
</div>
</div>
<button className="rounded-md border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 p-1 text-neutral-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<nav className="mb-4 space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-sans">Home</span>
</a>
<a className="group flex items-center gap-3 rounded-md border px-3 py-2 text-sm text-neutral-900 dark:text-white bg-white/70 dark:bg-white/10 border-black/10 dark:border-white/10" href="#">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans">Create</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-sans">Studio</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<span className="font-sans">Library</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="font-sans">Search</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
<span className="font-sans">Radio</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
<span className="font-sans">Hooks</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans">Explore</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="font-sans">Notifications</span>
</a>
</nav>

<div className="mt-4 rounded-lg border bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10 p-3 text-center">
<div className="text-sm"><span className="font-sans text-neutral-800 dark:text-slate-300">2,100</span> <span className="font-sans text-neutral-500 dark:text-slate-500">Credits</span></div>
<button className="mt-3 w-full rounded-md border bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/10 px-4 py-2 text-sm text-neutral-800 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/15">Upgrade</button>
</div>

<div className="mt-4 flex-1 space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span className="font-sans">Earn Credits</span>
</a>
<a className="group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
<span className="font-sans">What's new?</span>
<span className="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-2 text-xs font-medium">20</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-neutral-500 group-hover:text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
<span className="font-sans">More from Vybe</span>
</a>
</div>
</aside>

<main className="relative md:col-span-6 flex h-full flex-col bg-black/5 xl:bg-black/20">
<div className="flex items-center gap-2 border-b border-black/10 dark:border-white/10 px-4 py-3 text-sm text-neutral-700 dark:text-slate-300">
<svg className="h-4 w-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z"></path></svg>
<span className="font-sans">AI Music Generator</span>
<div className="font-sans text-neutral-400 dark:text-slate-500">•</div>
<span className="font-sans text-neutral-500 dark:text-slate-400">3:42 track</span>
<div className="ml-auto flex items-center gap-2">
<div className="text-sm font-sans text-neutral-500 dark:text-slate-500">Status:</div>
<div className="text-sm font-sans text-emerald-600 dark:text-emerald-400">Generated</div>
</div>
</div>
<div className="flex-1 px-4 py-4">
<div className="h-full overflow-hidden rounded-xl border bg-white/70 dark:bg-neutral-900/50 border-black/10 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/10">

<div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 px-4 py-3">
<div className="hidden sm:flex items-center gap-2"></div>
<div className="inline-flex items-center rounded-xl border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 p-1">
<button className="rounded-lg px-4 py-1.5 text-sm font-medium text-neutral-700 dark:text-slate-300 hover:text-neutral-900 dark:hover:text-white">Simple</button>
<button className="rounded-lg border bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:text-white shadow">Custom</button>
</div>
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1 text-xs text-neutral-700 dark:text-slate-300">
                v5
                <svg className="h-4 w-4 text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="h-full overflow-y-auto space-y-4 p-4">

<div className="rounded-xl border border-black/10 dark:border-white/10">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<span className="text-sm font-sans text-neutral-900 dark:text-white">Lyrics</span>
</div>
<button className="rounded-md border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 p-1 text-neutral-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10">
<svg className="h-4 w-4 text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
</button>
</div>
<div className="px-4 pb-4">
<textarea className="min-h-[120px] w-full resize-none rounded-lg border bg-white/70 dark:bg-black/30 border-black/10 dark:border-white/10 px-4 py-3 text-sm font-geist text-neutral-800 dark:text-slate-300 placeholder:text-neutral-400 dark:placeholder:text-slate-500 outline-none focus:border-black/20 dark:focus:border-white/20" placeholder="Write some lyrics (leave empty for instrumental)"></textarea>
</div>
</div>

<div className="rounded-xl border border-black/10 dark:border-white/10">
<div className="flex items-center gap-2 px-4 py-3">
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<span className="text-sm font-sans text-neutral-900 dark:text-white">Styles</span>
</div>
<div className="space-y-3 px-4 pb-4">
<input className="w-full rounded-lg border bg-white/70 dark:bg-black/30 border-black/10 dark:border-white/10 px-4 py-2 text-sm font-geist text-neutral-800 dark:text-slate-300 placeholder:text-neutral-400 dark:placeholder:text-slate-500 outline-none focus:border-black/20 dark:focus:border-white/20" placeholder="Hip-hop, R&amp;B, upbeat" type="text"/>
<div className="no-scrollbar flex items-center gap-2 overflow-x-auto pt-1">
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-800 dark:text-slate-200"><span className="font-sans text-neutral-500 dark:text-slate-400">+</span> orchestral pop</button>
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-800 dark:text-slate-200"><span className="font-sans text-neutral-500 dark:text-slate-400">+</span> pop</button>
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-800 dark:text-slate-200"><span className="font-sans text-neutral-500 dark:text-slate-400">+</span> dubstep</button>
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-800 dark:text-slate-200"><span className="font-sans text-neutral-500 dark:text-slate-400">+</span> ambient</button>
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-800 dark:text-slate-200"><span className="font-sans text-neutral-500 dark:text-slate-400">+</span> synthwave</button>
</div>
</div>
</div>

<button className="flex w-full items-center justify-between rounded-xl border border-black/10 dark:border-white/10 px-4 py-3 text-left">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-sm font-sans text-neutral-800 dark:text-slate-200">Advanced Options</span>
</div>
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
<div className="flex items-center gap-2 px-4 py-3">
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z"></path></svg>
<input className="flex-1 bg-transparent text-sm font-geist text-neutral-800 dark:text-slate-300 placeholder:text-neutral-400 dark:placeholder:text-slate-500 outline-none" placeholder="Add a song title" type="text"/>
</div>
<div className="border-t border-black/10 dark:border-white/10"></div>
<div className="flex items-center justify-between px-4 py-3">
<div className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-slate-300">
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v14a2 2 0 0 0 2 2h14"></path><path d="M3 7h5l2 3h11a2 2 0 0 1 2 2v9"></path><path d="M3 7V5a2 2 0 0 1 2-2h6"></path></svg>
                    Workspace
                  </div>
<button className="inline-flex items-center gap-1 rounded-lg border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-800 dark:text-slate-200">
                    My Workspace
                    <svg className="h-4 w-4 text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="py-2">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500 xl:bg-white xl:text-black">
                  Create
                </button>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:flex md:col-span-3 h-full flex-col bg-black/10 xl:bg-black/30 border-l border-black/10 dark:border-white/10 px-4 py-4">
<div className="mb-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium text-neutral-800 dark:text-slate-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m21 12-6-6-6 6-6-6"></path></svg>
            Settings
          </div>
</div>
<div className="flex-1 space-y-4 overflow-y-auto">

<div className="space-y-4 rounded-lg bg-white/60 dark:bg-white/5 p-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="font-sans text-neutral-800 dark:text-slate-300">Generation Options</span>
</div>
<div className="space-y-3">
<div className="space-y-2">
<label className="text-sm font-sans text-neutral-700 dark:text-slate-300">Track Length</label>
<select className="w-full rounded border bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-2 text-sm text-neutral-800 dark:text-slate-400">
<option>30 seconds</option>
<option>1 minute</option>
<option selected="">2-4 minutes</option>
<option>Full song</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-sans text-neutral-700 dark:text-slate-300">Audio Quality</label>
<select className="w-full rounded border bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-2 text-sm text-neutral-800 dark:text-slate-400">
<option>Standard</option>
<option selected="">High Quality</option>
<option>Studio Master</option>
</select>
</div>
</div>
</div>

<div className="space-y-4 rounded-lg bg-white/60 dark:bg-white/5 p-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="font-sans text-neutral-800 dark:text-slate-300">Style Controls</span>
<button className="text-xs font-sans text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">Advanced</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="font-sans text-neutral-600 dark:text-slate-400">Instrumental</span>
<button className="relative h-4 w-8 rounded-full bg-violet-600">
<div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-sans text-neutral-600 dark:text-slate-400">Add Vocals</span>
<button className="relative h-4 w-8 rounded-full bg-black/10 dark:bg-white/10">
<div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="font-sans text-neutral-600 dark:text-slate-400">Loop Mode</span>
<button className="relative h-4 w-8 rounded-full bg-black/10 dark:bg-white/10">
<div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
</button>
</div>
</div>
</div>

<div className="space-y-4 rounded-lg bg-white/60 dark:bg-white/5 p-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="font-sans text-neutral-800 dark:text-slate-300">Export Format</span>
<span className="rounded-md bg-orange-500/15 px-2 py-1 text-xs font-sans text-orange-600 dark:text-orange-400">WAV</span>
</div>
<div className="space-y-3">
<div className="space-y-2">
<label className="text-sm font-sans text-neutral-700 dark:text-slate-400">File Format</label>
<select className="w-full rounded border bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-2 text-sm text-neutral-800 dark:text-slate-400">
<option>MP3 (320kbps)</option>
<option selected="">WAV (Lossless)</option>
<option>FLAC (Compressed)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-sans text-neutral-700 dark:text-slate-400">Sample Rate</label>
<select className="w-full rounded border bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 px-3 py-2 text-sm text-neutral-800 dark:text-slate-400">
<option>44.1 kHz</option>
<option selected="">48 kHz</option>
<option>96 kHz</option>
</select>
</div>
</div>
</div>

<div className="space-y-4 rounded-lg bg-white/60 dark:bg-white/5 p-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="font-sans text-neutral-800 dark:text-slate-300">Sharing</span>
</div>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="font-sans text-neutral-600 dark:text-slate-400">Public Link</span>
<button className="relative h-4 w-8 rounded-full bg-violet-600">
<div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="font-sans text-neutral-600 dark:text-slate-400">Allow Downloads</span>
<button className="relative h-4 w-8 rounded-full bg-black/10 dark:bg-white/10">
<div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform"></div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-3">
<button className="flex-1 rounded bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">Generate New</button>
<button className="rounded border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10">Share</button>
</div>
</aside>
</div>

<div className="pointer-events-none fixed left-0 right-0 bottom-4 z-50 px-4 md:px-6">
<div className="pointer-events-auto mx-auto max-w-7xl overflow-hidden rounded-2xl border backdrop-blur-xl shadow-2xl border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/90">
<div className="flex items-center gap-4 md:gap-6 px-4 py-3">

<div className="flex min-w-0 items-center gap-3">
<img alt="Cover art" className="h-12 w-12 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b53e590-1a93-4a34-a1ba-ea8dfa6e298c_320w.webp"/>
<div className="min-w-0">
<div className="truncate text-base font-medium tracking-tight text-neutral-900 dark:text-white">I Warn You Now</div>
<div className="mt-0.5 flex items-center gap-2 text-xs text-neutral-600 dark:text-slate-400">
<span className="truncate">Titepomme</span>
<span className="text-neutral-400">|</span>
<span>01:59</span>
<span className="text-neutral-400">/</span>
<span>02:00</span>
</div>
</div>
</div>

<div className="mx-auto hidden items-center gap-4 md:flex">
<button aria-label="Shuffle" className="text-neutral-600 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg>
</button>
<div className="h-5 w-px bg-black/10 dark:bg-white/10"></div>
<button aria-label="Previous" className="text-neutral-900 hover:text-neutral-900 dark:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"></path><path d="M3 20V4"></path></svg>
</button>
<button aria-label="Play" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<button aria-label="Next" className="text-neutral-900 hover:text-neutral-900 dark:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4v16"></path><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"></path></svg>
</button>
<div className="h-5 w-px bg-black/10 dark:bg-white/10"></div>
<button aria-label="Repeat" className="text-neutral-600 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg>
</button>
</div>

<div className="ml-auto hidden items-center gap-4 text-neutral-700 dark:text-slate-300 md:flex">
<button aria-label="Queue" className="hover:text-neutral-900 dark:hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H3"></path><path d="M11 12H3"></path><path d="M11 19H3"></path><path d="M21 16V5"></path><circle cx="18" cy="16" r="3"></circle></svg>
</button>
<button aria-label="Like" className="text-neutral-500 hover:text-neutral-700 dark:text-slate-400 dark:hover:text-slate-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
<button aria-label="Dislike" className="text-neutral-500 hover:text-neutral-700 dark:text-slate-400 dark:hover:text-slate-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
</button>
<button aria-label="Comments" className="hover:text-neutral-900 dark:hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Share" className="hover:text-neutral-900 dark:hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51 15.42 17.49"></path><path d="M15.41 6.51 8.59 10.49"></path></svg>
</button>
<button aria-label="More" className="hover:text-neutral-900 dark:hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<div className="h-5 w-px bg-black/10 dark:bg-white/10"></div>
<button aria-label="Volume" className="hover:text-neutral-900 dark:hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 1 .4l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</button>
</div>
</div>
<div className="h-1 bg-black/10 dark:bg-white/20">
<div className="h-1 w-1/3 bg-neutral-900 dark:bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 xl:pt-48 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto rounded-3xl border dark:border-white/10 px-12 py-12 md:px-12 md:py-12 backdrop-blur-xl dark:bg-neutral-950/80 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)] [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll border-black/10 bg-neutral-50/40">

<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-instrument-serif mb-4 dark:text-neutral-50 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-neutral-900">
      How It Works
    </h2>
<p className="text-base sm:text-lg max-w-2xl mx-auto dark:text-neutral-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-neutral-700">
      Creating music with Vybe is as simple as describing what you want. Our AI handles the rest.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="relative overflow-hidden rounded-2xl border dark:border-white/10 dark:bg-neutral-900/80 p-6 md:p-8 space-y-4 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)] [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll border-black/10 bg-neutral-100/40">
<div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"></div>
<div className="absolute top-6 right-6">
<span className="inline-flex items-center justify-center text-[11px] rounded-full px-2.5 py-1 dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 bg-black/5 border-black/10 text-neutral-700">1</span>
</div>
<h3 className="relative mt-4 text-2xl tracking-tight font-sans font-medium dark:text-white text-neutral-900">Describe Your Vibe</h3>
<p className="relative mt-2 text-sm dark:text-slate-400 text-neutral-600">
        Tell us your mood or style—“upbeat pop anthem” or “chill acoustic vibe.” You can also upload lyrics or let AI create them.
      </p>
<div className="relative mt-4 flex items-center gap-2 text-xs font-sans dark:text-violet-400 text-violet-600">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
        Text prompts • Upload lyrics • Voice notes
      </div>
<div className="relative rounded-2xl border dark:border-white/10 dark:bg-neutral-800 border-black/10 bg-neutral-100/50">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-neutral-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
<span className="text-sm font-sans dark:text-white text-neutral-900">Lyrics</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full dark:bg-white/5 border dark:border-white/10 dark:hover:bg-white/10 bg-black/5 border-black/10 hover:bg-black/10">
<svg className="h-4 w-4 dark:text-slate-300 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path><path d="M3 12h18"></path>
</svg>
</button>
</div>
</div>
<div className="px-4 pb-4">
<textarea className="min-h-[120px] w-full resize-none rounded-lg px-4 py-3 text-sm font-geist outline-none border dark:border-white/10 dark:bg-black/30 dark:text-slate-300 placeholder:text-neutral-400 dark:placeholder:text-slate-500 focus:border-black/20 dark:focus:border-white/20 border-black/10 bg-white/60 text-neutral-800" placeholder="Write some lyrics (leave empty for instrumental)"></textarea>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border dark:border-white/10 dark:bg-neutral-900/80 p-6 md:p-8 space-y-4 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)] [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll border-black/10 bg-neutral-100/40">
<div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"></div>
<div className="absolute top-6 right-6">
<span className="inline-flex items-center justify-center text-[11px] rounded-full px-2.5 py-1 dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 bg-black/5 border-black/10 text-neutral-700">2</span>
</div>
<h3 className="relative mt-4 text-2xl tracking-tight font-sans font-medium dark:text-white text-neutral-900">AI Generates Everything</h3>
<p className="relative mt-2 text-sm dark:text-slate-400 text-neutral-600">
        Our advanced AI creates melody, beats, basslines, and vocals that match your description. No musical knowledge required.
      </p>
<div className="relative mt-4 flex items-center gap-2 text-xs font-sans dark:text-emerald-400 text-emerald-700">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
        Melody • Beats • Vocals • Instruments
      </div>
<div className="w-full max-w-sm overflow-hidden rounded-xl border dark:border-white/10 ring-1 ring-transparent hover:ring-blue-500/30 focus-within:ring-blue-500/40 dark:bg-gray-900/30 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,.8)] transition-all duration-700 border-black/10 bg-white/70">
<ul className="divide-y dark:divide-white/5 divide-black/5" role="list">
<li className="group flex items-center gap-4 px-5 py-5 transition-colors dark:hover:bg-white/5 focus-within:bg-black/5 dark:focus-within:bg-white/5 hover:bg-black/5" role="listitem">
<img alt="Album art for Gravity Bloom" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d95e69f-fe67-4ab5-a2d9-d78a63648c54_320w.webp"/>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans dark:text-white text-neutral-900">Gravity Bloom</h3>
<p className="text-sm leading-tight font-sans dark:text-white/60 text-neutral-600">Echo Signal – Event Horizons</p>
</div>
<span className="text-sm font-sans dark:text-white text-neutral-900">3:56</span>
<button aria-label="Options for Gravity Bloom" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 rounded dark:text-white dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 text-neutral-700 hover:text-blue-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</li>
<li className="group flex items-center gap-4 px-5 py-5 transition-colors dark:hover:bg-white/5 focus-within:bg-black/5 dark:focus-within:bg-white/5 hover:bg-black/5" role="listitem">
<img alt="Album art for Lunar Heartbeat" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1b19f660-f575-44be-a279-ca58e4c916c5_320w.webp"/>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans dark:text-white text-neutral-900">Lunar Heartbeat</h3>
<p className="text-sm leading-tight font-sans dark:text-white/60 text-neutral-600">Orbit Lights – Far Side EP</p>
</div>
<span className="text-sm font-sans dark:text-white text-neutral-900">4:27</span>
<button aria-label="Options for Lunar Heartbeat" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 rounded dark:text-white dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 text-neutral-700 hover:text-blue-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</li>
</ul>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border dark:border-white/10 dark:bg-neutral-900/80 p-6 md:p-8 space-y-4 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)] [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll border-black/10 bg-neutral-100/40">
<div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"></div>
<div className="absolute top-6 right-6">
<span className="inline-flex items-center justify-center text-[11px] rounded-full px-2.5 py-1 dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 bg-black/5 border-black/10 text-neutral-700">3</span>
</div>
<h3 className="relative mt-4 text-2xl tracking-tight font-sans font-medium dark:text-white text-neutral-900">Play, Refine &amp; Export</h3>
<p className="relative mt-2 text-sm dark:text-slate-400 text-neutral-600">
        Listen to your creation, make adjustments with simple controls, then export in high quality. Share or use however you like.
      </p>
<div className="relative mt-4 flex items-center gap-2 text-xs font-sans dark:text-orange-400 text-orange-700">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
        Edit • Download • Share • Commercial use
      </div>
<div className="w-full max-w-sm overflow-hidden rounded-xl border dark:border-white/10 ring-1 ring-transparent hover:ring-blue-500/30 focus-within:ring-blue-500/40 dark:bg-gray-900/30 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,.8)] transition-all duration-700 border-black/10 bg-white/70">
<div className="flex items-center gap-2 px-5 py-3 border-b dark:border-white/5 dark:bg-neutral-950/30 border-black/10 bg-neutral-100/60">
<span className="text-xl tracking-tight font-sans dark:text-white text-neutral-900">Now Playing</span>
<span className="text-xs ml-auto font-sans dark:text-white/60 text-neutral-600">Playlist · 7 Tracks</span>
</div>
<ul className="divide-y dark:divide-white/5 divide-black/5" role="list">
<li className="group relative flex items-start gap-4 px-5 py-5 backdrop-blur-sm dark:bg-white/5 bg-black/5" role="listitem">
<div className="relative">
<img alt="Album art for Starlight Echo" className="w-16 h-16 rounded-lg object-cover transition-transform duration-300 group-hover:rotate-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f578c2b-6d7b-43f5-bbf1-ce4421c18dbd_320w.webp"/>
<span className="absolute -inset-1 rounded-lg border group-hover:border-blue-400/30 group-hover:shadow-[0_0_15px_4px_rgba(99,102,241,.3)] transition border-blue-400/0"></span>
</div>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans dark:text-white text-neutral-900">Starlight Echo</h3>
<p className="text-sm leading-tight font-sans dark:text-white/60 text-neutral-600">Nova Lane – Midnight Blueprints</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs font-sans dark:text-white text-neutral-900">2:07</span>
<input aria-label="Seek through track" className="w-full h-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 accent-blue-600" max="207" min="0" type="range" value="94"/>
<span className="text-xs font-sans dark:text-white/60 text-neutral-600">-1:13</span>
</div>
</div>
<button aria-label="Save to Library" className="rounded dark:text-white dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 text-neutral-700 hover:text-blue-600">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
<path d="M12 7v6"></path><path d="M15 10H9"></path>
</svg>
</button>
</li>
</ul>
</div>
</div>
</div>

</div>
</section>

<section className="z-10 pt-24 pb-24 relative" style={{}}>
<div className="max-w-7xl mx-auto rounded-3xl border dark:border-white/10 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl blur-none px-12 py-12 md:px-12 md:py-12 dark:bg-neutral-950/80 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll border-white/10 bg-neutral-50/40">

<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-instrument-serif mb-4 dark:text-neutral-50 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-neutral-900">
      Edit Mode: Full Creative Control
    </h2>
<p className="text-base sm:text-lg max-w-2xl mx-auto dark:text-neutral-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-neutral-700">
      Dive deep into your music with professional editing tools. Adjust every element, from individual tracks to full arrangements.
    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
<div className="lg:col-span-4 overflow-hidden rounded-2xl border dark:border-white/10 dark:bg-neutral-900 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll border-black/10 bg-neutral-100">

<div className="flex items-center justify-between border-b dark:border-white/10 dark:bg-neutral-900/80 backdrop-blur-xl px-4 md:px-6 py-4 border-black/10 bg-neutral-100/80">
<div className="flex items-center gap-4">
<button className="h-9 w-9 inline-flex items-center justify-center rounded-lg border dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-600 hover:bg-black/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
<div className="text-xl font-medium tracking-tight dark:text-white text-neutral-900">Edit</div>
<div className="hidden md:flex items-center gap-2 md:gap-3 ml-2">
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] uppercase dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3v18"></path><rect height="18" rx="2" width="12" x="6" y="3"></rect><path d="M22 3v18"></path></svg>
<span className="font-sans">Replace Section</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] uppercase dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
<span className="font-sans">Extend</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] uppercase dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="font-sans">Crop</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] uppercase dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
<span className="font-sans">Remove</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] uppercase dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<span className="font-sans">Fade Out</span>
</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-9 w-9 inline-flex items-center justify-center rounded-lg border dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-600 hover:bg-black/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="px-4 md:px-6 py-6 border-b dark:border-white/10 dark:bg-black/30 border-black/10 bg-neutral-100/30"></div>

<div className="relative dark:bg-black/20 bg-neutral-100/20">

<div className="absolute inset-y-0 left-0 w-12 border-r dark:border-white/10 dark:bg-black/30 border-black/10 bg-neutral-100/30">
<div className="h-full flex flex-col items-center justify-center gap-3 py-4">
<button className="inline-flex w-8 h-8 border rounded-md items-center justify-center dark:text-slate-300 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 text-neutral-700 bg-black/5 border-black/10 hover:bg-black/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</button>
<button className="inline-flex w-8 h-8 border rounded-md items-center justify-center dark:text-slate-300 dark:bg:white/5 dark:border-white/10 dark:hover:bg-white/10 text-neutral-700 bg-black/5 border-black/10 hover:bg-black/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"></path></svg>
</button>
</div>
</div>

<div className="ml-12">
<div className="h-10 relative overflow-hidden border-b dark:border-white/10 dark:bg-black/20 [background-image:repeating-linear-gradient(to_right,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_64px)] dark:[background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_64px)] border-black/10 bg-neutral-100/20">
<div className="absolute inset-0 px-4 md:px-6 flex items-center gap-12 text-[11px] font-sans text-neutral-500 dark:text-slate-400">
<span>00:00</span><span>00:15</span><span>00:30</span><span>00:45</span><span>01:00</span><span>01:15</span><span>01:30</span><span>01:45</span><span>02:00</span><span>02:15</span>
</div>
</div>

<div className="relative px-4 md:px-6 py-4">
<div className="relative overflow-x-auto">
<div className="min-w-[900px]">

<div className="flex items-center gap-2 mb-4">
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight bg-emerald-500 text-white">Intro</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight bg-pink-500 text-white">Verse 1</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight bg-emerald-500 text-white">Prech...</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight bg-orange-500 text-white">Chorus</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight bg-pink-500 text-white">Verse 2</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight bg-emerald-500 text-white">Prechorus</div>
</div>

<div className="relative h-48 rounded-xl overflow-hidden border dark:border-white/10 dark:bg-black/20 [background-image:repeating-linear-gradient(to_right,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_64px)] dark:[background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_64px)] border-black/10 bg-neutral-100/20">

<div className="absolute inset-0 px-2 md:px-4 py-6 flex gap-2">
<div className="flex-1 rounded-xl border bg-emerald-500/30 relative overflow-hidden border-emerald-400/40">
<div className="absolute inset-2 rounded-md bg-emerald-900/40"></div>
</div>
<div className="flex-1 rounded-xl border bg-pink-500/30 relative overflow-hidden border-pink-400/40">
<div className="absolute inset-2 rounded-md bg-pink-900/40"></div>
</div>
<div className="flex-1 rounded-xl border bg-emerald-500/30 relative overflow-hidden border-emerald-400/40">
<div className="absolute inset-2 rounded-md bg-emerald-900/40"></div>
</div>
<div className="flex-[1.5] rounded-xl border bg-orange-500/30 relative overflow-hidden border-orange-400/40">
<div className="absolute inset-2 rounded-md bg-orange-900/40"></div>
</div>
<div className="flex-1 rounded-xl border bg-pink-500/30 relative overflow-hidden border-pink-400/40">
<div className="absolute inset-2 rounded-md bg-pink-900/40"></div>
</div>
<div className="flex-[1.8] rounded-xl border bg-emerald-500/30 relative overflow-hidden border-emerald-400/40">
<div className="absolute inset-2 rounded-md bg-emerald-900/40"></div>
</div>
</div>

<div className="absolute inset-y-0 left-[49%] w-px dark:bg-white bg-neutral-900"></div>
<div className="absolute -top-3 left-[49%] -translate-x-1/2">
<div className="translate-y-4 rounded-full px-2.5 py-1 text-[11px] font-medium shadow dark:text-black dark:bg-white text-white bg-neutral-900">
                      00:49
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t dark:border-white/10 border-black/10">
<div className="px-3 md:px-4 py-3 bg-gradient-to-t dark:from-black/60 dark:to-black/20 from-neutral-200/60 to-neutral-100/20">
<div className="flex items-center gap-3">

<div className="flex items-center min-w-0 gap-3">
<img alt="" className="h-9 w-9 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6fb80b1f-66be-4aab-a424-5669352f58ab_320w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium tracking-tight font-sans truncate dark:text-white text-neutral-900">Queen Rising</div>
<div className="mt-0.5 flex items-center gap-2 text-[11px] font-sans text-neutral-500 dark:text-slate-400">
<span className="truncate">sarahnaya</span>
<span className="text-neutral-400">|</span>
<span>00:49</span>
<span className="text-neutral-400">/</span>
<span>02:21</span>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-3 ml-auto">

<button className="h-8 w-8 inline-flex items-center justify-center rounded-full dark:bg-white dark:text-black dark:hover:bg-white/90 bg-neutral-900 text-white hover:bg-neutral-900/90">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</button>

<div className="hidden md:flex items-center gap-3 dark:text-slate-300 text-neutral-700">
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 bg-black/5 border-black/10 hover:bg-black/10">
<span className="text-base leading-none">−</span>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 bg-black/5 border-black/10 hover:bg-black/10">
<span className="text-base leading-none">+</span>
</button>
</div>

<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>

<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 bg-black/5 border-black/10 text-neutral-700 hover:bg-black/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4A.7.7 0 0 0 11 19.3z"></path>
<path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.4 18.4a9 9 0 0 0 0-12.8"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

</div>

<div className="hidden lg:col-span-1"></div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" style={{}}>
<div className="md:pt-12 md:pb-12 md:pl-12 md:pr-12 md:bg-neutral-950/80 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-[#ffffff]/10 border rounded-3xl mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] blur-none backdrop-blur-xl">
<div className="text-center mb-16 px-4">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-instrument-serif mb-4 dark:text-neutral-50 [text-wrap:balance] [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-neutral-900">
    Loved by music creators
  </h2>
<p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto dark:text-neutral-300 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-neutral-700">
    See how artists are bringing their musical visions to life with Vybe’s AI-powered creation tools.
  </p>
</div>
<div className="sm:p-12 flex pt-10 pr-10 pb-10 pl-30 relative items-center justify-center">
<div className="relative sm:h-96 h-[400px] w-full max-w-7xl max-h-full">
<div className="container max-w-full relative flex items-center justify-center h-full">

<div className="glass relative w-[340px] h-[340px] -mx-[50px] rounded-2xl flex items-center justify-center backdrop-blur [box-shadow:0_25px_25px_rgba(0,0,0,0.25)] [background:linear-gradient(rgba(255,255,255,0.10),transparent)] rotate-[-10deg]">
<div className="absolute inset-4 rounded-xl shadow-2xl ring-1 overflow-hidden border dark:bg-neutral-900 dark:text-neutral-100 dark:ring-white/10 dark:border-white/10 bg-neutral-100 text-neutral-900 ring-black/10 border-black/5">
<div className="px-6 py-6">

<div className="inline-flex w-8 h-8 ring-1 rounded-lg mb-4 items-center justify-center bg-white/5 ring-white/10">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(167, 139, 250)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-4 dark:text-neutral-300 text-slate-700">
              "Vybe transformed my creative process completely. I went from struggling with melodies to
              producing full tracks in minutes. The AI understands exactly what vibe I'm going for."
            </p>
<div className="pt-3 border-t flex items-center justify-between dark:border-white/10 border-black/10">
<div className="flex items-center gap-2">
<img alt="Jordan Avery avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div>
<div className="text-xs font-medium dark:text-neutral-100 text-neutral-900">Jordan Avery</div>
<div className="text-xs dark:text-neutral-400 text-slate-600">Music Producer</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-600" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium dark:text-neutral-100 text-neutral-900">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass relative w-[340px] h-[340px] -mx-[50px] rounded-2xl flex items-center justify-center backdrop-blur [box-shadow:0_25px_25px_rgba(0,0,0,0.25)] [background:linear-gradient(rgba(255,255,255,0.08),transparent)] rotate-[-6deg]">
<div className="absolute inset-4 rounded-xl shadow-xl ring-1 backdrop-blur overflow-hidden border dark:bg-neutral-900/95 dark:text-neutral-100 dark:ring-white/10 dark:border-white/10 bg-neutral-100/95 text-neutral-900 ring-black/10 border-black/5">
<div className="p-6">
<div className="inline-flex w-8 h-8 ring-1 rounded-lg mb-4 items-center justify-center bg-white/5 ring-white/10">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(167, 139, 250)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-4 dark:text-neutral-300 text-slate-700">
              "As a singer-songwriter, I was amazed by how Vybe captured the emotion I wanted to convey.
              The vocals it generates feel authentic and the melodies are genuinely catchy."
            </p>
<div className="pt-3 border-t flex items-center justify-between dark:border-white/10 border-black/10">
<div className="flex items-center gap-2">
<img alt="Sarah Chen avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg"/>
<div>
<div className="text-xs font-medium dark:text-neutral-100 text-neutral-900">Sarah Chen</div>
<div className="text-xs dark:text-neutral-400 text-slate-600">Singer-Songwriter</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-600" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295..."></path></svg>
<span className="text-xs font-medium dark:text-neutral-100 text-neutral-900">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass relative w-[340px] h-[340px] -mx-[50px] rounded-2xl flex items-center justify-center backdrop-blur [box-shadow:0_25px_25px_rgba(0,0,0,0.25)] [background:linear-gradient(rgba(255,255,255,0.06),transparent)] rotate-0">
<div className="absolute inset-4 rounded-xl shadow-lg ring-1 overflow-hidden border backdrop-blur dark:bg-neutral-900/90 dark:text-neutral-100 dark:ring-white/10 dark:border-white/10 bg-neutral-100/90 text-neutral-900 ring-black/10 border-black/5">
<div className="p-6">
<div className="inline-flex w-8 h-8 ring-1 rounded-lg mb-4 items-center justify-center bg-white/5 ring-white/10">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(167, 139, 250)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-4 dark:text-neutral-300 text-slate-700">
              "I've been using Vybe for my podcast intro music and video content. The quality is incredible
              and it saves me hours of work. Perfect for content creators on tight deadlines."
            </p>
<div className="pt-3 border-t flex items-center justify-between dark:border-white/10 border-black/10">
<div className="flex items-center gap-2">
<img alt="Marcus Rodriguez avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/890b16bf-eac1-46aa-b8b5-b74ae7a0d51a_3840w.jpg"/>
<div>
<div className="text-xs font-medium dark:text-neutral-100 text-neutral-900">Marcus Rodriguez</div>
<div className="text-xs dark:text-neutral-400 text-slate-600">Content Creator</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-600" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295..."></path></svg>
<span className="text-xs font-medium dark:text-neutral-100 text-neutral-900">5.0</span>
</div>
</div>
</div>
</div>
</div>
<style>
        .container:hover .glass { transform: rotate(0deg) !important; margin: 0 -30px !important; }
      </style>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 xl:pt-0 pt-24 relative">
</section>

<footer className="z-10 xl:mb-12 mb-12 relative">
<div className="md:pt-12 md:pb-12 md:pl-12 md:pr-12 md:bg-[#000000]/80 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-[#ffffff]/10 border rounded-3xl mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] blur-none backdrop-blur-xl">
<div className="sm:py-0 sm:pr-0 sm:pl-0 pt-6 pr-6 pb-6 pl-6 relative">
<div className="grid lg:grid-cols-4 gap-8 lg:gap-12">

<div className="space-y-4">
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ab707825-6adb-4b45-8319-4de9275950e8_320w.png)] bg-cover rounded" href="#">
</a>
</div>
<p className="leading-relaxed text-sm font-sans text-neutral-400">Turn words into music. Create professional tracks
          with AI-powered composition, vocals, and beats. No instruments or experience needed.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight rounded-xl pt-2 pr-4 pb-2 pl-4 hover:bg-white/90 text-neutral-900 bg-white" href="#">
<span className="font-sans">Get Started</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<div className="space-y-2">
<div className="text-xs text-neutral-500 font-sans">Need help? Reach out:</div>
<div className="text-xs font-sans text-neutral-400">hello@vybe.ai</div>
</div>
</div>

<div className="">
<h4 className="text-xs tracking-wider uppercase font-sans font-medium text-neutral-300">Product</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">AI
              Music Generator</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Voice
              Synthesis</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Beat
              Maker</a></li>
<li><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Lyric Writer</a>
</li>
<li><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Music Studio</a>
</li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Mobile
              App</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider uppercase font-sans font-medium text-neutral-300">Resources</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Music
              Library</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Tutorials</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Artist
              Showcase</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Genre
              Guides</a></li>
<li><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">API
              Documentation</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Community</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider uppercase font-sans font-medium text-neutral-300">Company</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">About
              Vybe</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Careers</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Press
              Kit</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Partners</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Contact</a></li>
<li className=""><a className="text-sm transition-colors font-sans text-neutral-400 hover:text-white" href="#">Blog</a></li>
</ul>
</div>
</div>


<div className="mt-8 pt-6 border-t flex flex-col md:flex-row md:items-center gap-4 md:justify-between border-white/10">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-sans text-neutral-400">
<a className="transition-colors hover:text-neutral-200" href="#">Privacy Policy</a>
<span className="text-neutral-700">•</span>
<a className="transition-colors hover:text-neutral-200" href="#">Terms of Service</a>
<span className="text-neutral-700">•</span>
<a className="transition-colors hover:text-neutral-200" href="#">Cookie Policy</a>
<span className="text-neutral-700">•</span>
<a className="transition-colors hover:text-neutral-200" href="#">DMCA</a>
<span className="text-neutral-700">•</span>
<a className="transition-colors hover:text-neutral-200" href="#">Licensing</a>
<span className="text-neutral-700">•</span>
<a className="transition-colors hover:text-neutral-200" href="#">Accessibility</a>
</nav>
<div className="text-[11px] text-neutral-500 font-sans">© 2025 Vybe AI, Inc. All rights reserved.</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
