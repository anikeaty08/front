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



    const playToggle = document.getElementById('playToggle'); const muteToggle = document.getElementById('muteToggle'); const volumeLabel = document.getElementById('volumeLabel'); let playing = true; let muted = false; playToggle.addEventListener('click', () => { playing = !playing; if (playing) { playToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>'; playToggle.setAttribute('aria-label', 'Pause'); } else { playToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>'; playToggle.setAttribute('aria-label', 'Play'); } }); muteToggle.addEventListener('click', () => { muted = !muted; if (muted) { muteToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M22 9 16 15"></path><path d="M16 9l6 6"></path></svg>'; muteToggle.setAttribute('aria-label', 'Unmute'); volumeLabel.textContent = '0%'; } else { muteToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>'; muteToggle.setAttribute('aria-label', 'Mute'); volumeLabel.textContent = '72%'; } });
  


    const playToggle = document.getElementById('playToggle'); const muteToggle = document.getElementById('muteToggle'); const volumeLabel = document.getElementById('volumeLabel'); let playing = true; let muted = false; playToggle.addEventListener('click', () => { playing = !playing; if (playing) { playToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>'; playToggle.setAttribute('aria-label', 'Pause'); } else { playToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>'; playToggle.setAttribute('aria-label', 'Play'); } }); muteToggle.addEventListener('click', () => { muted = !muted; if (muted) { muteToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M22 9 16 15"></path><path d="M16 9l6 6"></path></svg>'; muteToggle.setAttribute('aria-label', 'Unmute'); volumeLabel.textContent = '0%'; } else { muteToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>'; muteToggle.setAttribute('aria-label', 'Mute'); volumeLabel.textContent = '72%'; } });
  


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
<div className="xl:pr-3 xl:pl-3 [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-4xl border-white/10 border rounded-2xl mr-auto ml-auto pt-3 pr-3 pb-3 pl-3" style={{background: 'linear-gradient(180deg, rgba(14,16,26,0.55), rgba(14,16,26,0.35)) padding-box, linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08)) border-box', border: '1px solid transparent', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', boxShadow: '0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ab707825-6adb-4b45-8319-4de9275950e8_800w.png)] bg-cover rounded invert-0" href="/home"></a>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className="">
<a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4" href="/home">Home</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4" href="/create">Create</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4" href="/pricing">Pricing</a>
</li>
<li className="">
</li>
<li className="">
</li>
</ul>
<div className="flex items-center gap-1.5 md:gap-2">
<button aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<button className="inline-flex hover:bg-white/10 transition-colors text-sm font-medium text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6 items-center justify-center">Start For Free</button>
</div>
</div>
</div>
</div>

<section className="z-10 relative" style={{}}>
<div className="md:px-6 md:pb-16 md:pt-40 max-w-7xl mr-auto ml-auto pt-40 pr-4 pb-16 pl-4">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h1 className="relative mx-auto text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]" style={{textShadow: '0 10px 40px rgba(0,0,0,0.55)'}}>
<span className="block [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="[animation:fadeSlideIn_1s_ease-out_0.2s_both] font-light text-white tracking-tighter font-instrument-serif text-left">Create Music that</span>
</span>
<span className="block sm:mt-2 [animation:fadeSlideIn_1s_ease-out_0.3s_both] mt-1">
<span className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] font-light text-white tracking-tighter font-instrument-serif">Matches Your Vybe</span>
</span>
</h1>
<p className="md:text-lg [animation:fadeSlideIn_1s_ease-out_0.4s_both] text-base text-slate-300 mt-6">Write a few words, and Vybe turns them into full compositions — melodies, vocals, and beats that capture your mood. No instruments or experience needed.</p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.5s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
<button className="inline-flex transition-all duration-200 text-sm font-semibold text-white items-center justify-center" onmousedown="this.style.transform='scale(0.95)';" onmouseleave="this.style.transform='scale(1)';" onmouseout="this.querySelector('.glow').style.filter='blur(5px)'; this.querySelector('.glow').style.opacity='1';" onmouseover="this.querySelector('.glow').style.filter='blur(0)'; this.querySelector('.glow').style.opacity='0';" onmouseup="this.style.transform='scale(1)';" style={{borderRadius: '10px', boxShadow: 'rgba(255, 255, 255, 0.25) 12px 0px 12px inset, rgba(255, 255, 255, 0.25) -2px -4px 8px inset', background: 'linear-gradient(336deg, rgb(255, 196, 32) 0%, rgb(254, 75, 8) 39%, rgb(254, 75, 8) 57%, rgb(255, 196, 32) 100%)', padding: '0.75rem 1.5rem', border: 'none', cursor: 'pointer', position: 'relative', transform: 'scale(1)'}}>
<div className="glow" style={{content: '""', position: 'absolute', inset: '0px', insetBlockEnd: '-2px', borderRadius: 'inherit', background: 'linear-gradient(to top, rgba(255, 196, 32, 0.533), transparent)', zIndex: '-1', filter: 'blur(5px)', transition: '0.2s', pointerEvents: 'none', opacity: '1'}}></div>
  Generate a Song
</button>
<button className="inline-flex hover:bg-white/10 transition-colors border-gradient before:rounded-lg text-sm font-medium text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6 items-center justify-center">Explore Sounds</button>
</div>
</div>
</div>

<div className="md:px-6 -mb-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{}}>
<div className="overflow-hidden xl:bg-[#000000]/60 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll w-full border-white/10 border rounded-2xl relative shadow-2xl backdrop-blur-xl animate">

<div className="flex xl:pt-4 xl:pb-4 border-white/10 border-b pt-4 pr-3 pb-4 pl-3 items-center justify-between" style={{}}>
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">

<aside className="hidden md:flex md:col-span-3 flex-col bg-black/30 h-full border-white/10 border-r pt-4 pr-4 pb-4 pl-4">

<div className="mb-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="inline-flex items-center gap-2">
<img alt="" className="w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg" style={{}}/>
<div className="leading-tight">
<div className="text-sm text-slate-200">Sara Naya</div>
<div className="text-xs text-slate-500">@sarahnaya</div>
</div>
</div>
<button className="hover:bg-white/10 text-slate-300 bg-white/5 border-white/10 border rounded-md pt-1 pr-1 pb-1 pl-1">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<nav className="space-y-1 mb-4">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-home h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-sans">Home</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white bg-white/10 border border-white/10 font-geist" href="#">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans">Create</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-slate400 group-hover:text-slate-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-sans">Studio</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-library h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<span className="font-sans">Library</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-search h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="font-sans">Search</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-radio h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
<span className="font-sans">Radio</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-webhook h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
<span className="font-sans">Hooks</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-compass h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans">Explore</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-bell h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="font-sans">Notifications</span>
</a>
</nav>

<div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-center">
<div className="text-sm text-slate-300 font-sans">2,100 <span className="text-slate-500 font-sans">Credits</span></div>
<button className="hover:bg-white/15 text-sm text-slate-200 bg-white/10 w-full border-white/10 border rounded-md mt-3 pt-2 pr-4 pb-2 pl-4">Upgrade</button>
</div>

<div className="flex-1 mt-4 space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-gift h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span className="font-sans">Earn Credits</span>
</a>
<a className="group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-newspaper h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg><span className="font-sans">What's new?</span>
<span className="ml-auto inline-flex items-center justify-center rounded-full bg-white text-xs text-black h-5 min-w-5 px-2 font-medium font-sans">20</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-more-horizontal h-4 w-4 text-slate-400 group-hover:text-slate-300" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
<span className="">More from vybe</span>
</a>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20 flex flex-col h-full">
<div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm text-slate-300">
<svg className="h-4 w-4 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
<span className="font-sans">AI Music Generator</span>
<div className="text-slate-500 font-sans">•</div>
<span className="text-slate-400 font-sans">3:42 track</span>
<div className="ml-auto flex items-center gap-2">
<div className="text-sm text-slate-500 font-sans">Status:</div>
<div className="text-sm text-emerald-400 font-sans">Generated</div>
</div>
</div>
<div className="flex-1 xl:bg-[#ffffff]/10 px-4 py-4">
<div className="overflow-hidden bg-neutral-900/50 h-full border-white/10 border ring-white/10 ring-1 rounded-xl">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/30">
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{visibility: 'hidden'}}>
<svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9 18V5l12-v13"></path><path d="m6 15-4-1V5.5"></path><path d="M12 8a2 2 0 0 0-2-2c-.5 0-1 0-1 1.5v1.5"></path></svg>
                  2.1k
                </span>
</div>
<div className="inline-flex bg-white/5 border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 items-center">
<button className="hover:text-white text-sm font-medium text-slate-300 rounded-lg pt-1.5 pr-4 pb-1.5 pl-4">Simple</button>
<button className="text-sm font-medium text-white bg-white/10 border-white/10 border rounded-lg pt-1.5 pr-4 pb-1.5 pl-4 shadow">Custom</button>
</div>
<button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 font-sans">
                v5
                <svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="overflow-y-auto h-full pt-4 pr-4 pb-4 pl-4 space-y-4">

<div className="border-white/10 border rounded-xl">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
<span className="text-sm text-white font-sans">Lyrics</span>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-white/10 text-slate-300 bg-white/5 border-white/10 border rounded-md pt-1 pr-1 pb-1 pl-1">
<svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
</button>
</div>
</div>
<div className="px-4 pb-4">
<textarea className="placeholder:text-slate-500 outline-none focus:border-white/20 min-h-[120px] text-sm text-slate-300 font-geist bg-black/30 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4 resize-none" placeholder="Write some lyrics (leave empty for instrumental)"></textarea>
</div>
</div>

<div className="border-white/10 border rounded-xl">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
<span className="text-sm text-white font-sans">Styles</span>
</div>
</div>
<div className="px-4 pb-4 space-y-3">
<input className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2 text-sm text-slate-300 placeholder:text-slate-500 outline-none focus:border-white/20 font-geist" placeholder="Hip-hop, R&amp;B, upbeat" type="text"/>
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
<button className="inline-flex text-xs text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
<span className="text-slate-400 font-sans">+</span> orchestral pop
                    </button>
<button className="inline-flex text-xs text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
<span className="text-slate-400 font-sans">+</span> pop
                    </button>
<button className="inline-flex text-xs text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
<span className="text-slate-400 font-sans">+</span> dubstep
                    </button>
<button className="inline-flex text-xs text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
<span className="text-slate-400 font-sans">+</span> ambient
                    </button>
<button className="inline-flex text-xs text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
<span className="text-slate-400 font-sans">+</span> synthwave
                    </button>
</div>
</div>
</div>

<button className="flex text-left w-full border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-sm text-slate-200 font-sans">Advanced Options</span>
</div>
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="overflow-hidden border-white/10 border rounded-xl">
<div className="flex gap-2 pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path className="" d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
<input className="flex-1 outline-none placeholder:text-slate-500 text-sm text-slate-300 font-geist bg-transparent" placeholder="Add a song title" type="text"/>
</div>
<div className="border-t border-white/10"></div>
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 font-sans">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 7v14a2 2 0 0 0 2 2h14"></path>
<path d="M3 7h5l2 3h11a2 2 0 0 1 2 2v9"></path>
<path d="M3 7V5a2 2 0 0 1 2-2h6"></path>
</svg>
                    Workspace
                  </div>
<button className="inline-flex text-xs text-slate-200 bg-white/5 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
                    My Workspace
                    <svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="pt-2 pb-2">
<button className="inline-flex hover:bg-violet-500 transition-colors xl:bg-[#ffffff] xl:text-[#000000] text-sm font-medium text-white bg-violet-600 w-full rounded-xl pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center">
                  
                  Create
                </button>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:flex md:col-span-3 bg-black/30 border-white/10 border-l pt-4 pr-4 pb-4 pl-4 flex-col h-full">
<div className="mb-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 1v6m0 6v6"></path>
<path d="m21 12-6-6-6 6-6-6"></path>
</svg>
            Settings
          </div>
</div>
<div className="space-y-4 flex-1 overflow-y-auto">


<div className="bg-white/5 rounded-lg p-4 space-y-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans">Generation Options</span>
</div>
<div className="space-y-3">
<div className="space-y-2">
<label className="text-sm text-slate-300 font-sans">Track Length</label>
<select className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-slate-400 font-geist">
<option className="font-sans">30 seconds</option>
<option className="font-sans">1 minute</option>
<option className="font-sans" selected="">2-4 minutes</option>
<option className="font-sans">Full song</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-300 font-sans">Audio Quality</label>
<select className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-slate-400 font-geist">
<option className="font-sans">Standard</option>
<option className="font-sans" selected="">High Quality</option>
<option className="font-sans">Studio Master</option>
</select>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-4 space-y-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans">Style Controls</span>
<button className="text-xs text-violet-400 hover:text-violet-300 font-sans">Advanced</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400 font-sans">Instrumental</span>
<button className="w-8 h-4 bg-violet-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400 font-sans">Add Vocals</span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400 font-sans">Loop Mode</span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5-0.5 transition-transform"></div>
</button>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-4 space-y-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans">Export Format</span>
<span className="rounded-md bg-orange-500/20 px-2 py-1 text-xs text-orange-400 font-sans">WAV</span>
</div>
<div className="space-y-3">
<div className="space-y-2">
<label className="text-sm text-slate-400 font-sans">File Format</label>
<select className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-slate-400 font-geist">
<option className="font-sans">MP3 (320kbps)</option>
<option className="font-sans" selected="">WAV (Lossless)</option>
<option className="font-sans">FLAC (Compressed)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-400 font-sans">Sample Rate</label>
<select className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-slate-400 font-geist">
<option className="font-sans">44.1 kHz</option>
<option className="font-sans" selected="">48 kHz</option>
<option className="font-sans">96 kHz</option>
</select>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-4 space-y-4">
<div className="mb-2 flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans">Sharing</span>
</div>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">Public Link</span>
<button className="w-8 h-4 bg-violet-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">Allow Downloads</span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-3">
<button className="flex-1 px-4 py-2 bg-violet-600 text-white rounded text-sm font-medium hover:bg-violet-500 font-sans">Generate New</button>
<button className="px-4 py-2 bg-white/5 text-slate-300 rounded text-sm font-medium border border-white/10 hover:bg-white/10 font-sans">Share</button>
</div>
</aside>
</div>

<div className="fixed left-0 right-0 bottom-4 z-50 px-4 md:px-6 pointer-events-none">
<div className="max-w-7xl mx-auto pointer-events-auto">
<div className="rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
<div className="flex items-center gap-4 md:gap-6 px-4 py-3">

<div className="flex items-center gap-3 min-w-0">
<img alt="Cover art" className="h-12 w-12 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b53e590-1a93-4a34-a1ba-ea8dfa6e298c_320w.webp" style={{}}/>
<div className="min-w-0">
<div className="text-white text-base font-medium tracking-tight font-sans truncate">I Warn You Now</div>
<div className="mt-0.5 flex items-center gap-2 text-xs text-slate-400 font-sans">
<span className="truncate">Titepomme</span>
<span className="text-slate-600">|</span>
<span>01:59</span>
<span className="text-slate-600">/</span>
<span>02:00</span>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-4 mx-auto">
<button aria-label="Shuffle" className="text-slate-400 hover:text-slate-300">
<svg className="lucide lucide-shuffle h-5 w-5" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg>
</button>
<div className="w-px h-5 bg-white/10"></div>
<button aria-label="Previous" className="text-white hover:text-white">
<svg className="lucide lucide-skip-back h-5 w-5" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"></path><path d="M3 20V4"></path></svg>
</button>
<button aria-label="Play" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-black hover:bg-white/90">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<button aria-label="Next" className="text-white hover:text-white">
<svg className="lucide lucide-skip-forward h-5 w-5" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4v16"></path><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"></path></svg>
</button>
<div className="w-px h-5 bg-white/10"></div>
<button aria-label="Repeat" className="text-slate-400 hover:text-slate-300">
<svg className="lucide lucide-repeat-2 h-5 w-5" data-lucide="repeat-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg>
</button>
</div>

<div className="hidden md:flex items-center gap-4 ml-auto text-slate-300">
<button aria-label="Queue" className="text-slate-300 hover:text-white">
<svg className="lucide lucide-list-music h-5 w-5" data-lucide="list-music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H3"></path><path d="M11 12H3"></path><path d="M11 19H3"></path><path d="M21 16V5"></path><circle cx="18" cy="16" r="3"></circle></svg>
</button>
<button aria-label="Like" className="text-slate-400 hover:text-slate-">
<svg className="lucide lucide-thumbs-up h-5 w-5" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
<button aria-label="Dislike" className="text-slate-400 hover:text-slate-300">
<svg className="lucide lucide-thumbs-down h-5 w-5" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
</button>
<button aria-label="Comments" className="text-slate-300 hover:text-white">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Share" className="text-slate-300 hover:text-white">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
<button aria-label="More" className="text-slate-300 hover:text-white">
<svg className="lucide lucide-more-horizontal h-5 w-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<div className="w-px h-5 bg-white/10"></div>
<button aria-label="Volume" className="text-slate-300 hover:text-white">
<svg className="lucide lucide-volume-2 h-5 w-5" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</button>
</div>
</div>

<div className="h-1 bg-white/20">
<div className="h-1 bg-white w-1/3"></div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed left-0 right-0 bottom-4 z-50 px-4 md:px-6 pointer-events-none">
</div>
</div>
</section>

<section className="z-10 xl:pt-48 pt-24 pb-24 relative">
<div className="md:pt-12 md:pb-12 md:pl-12 md:pr-12 md:bg-neutral-950/80 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-[#ffffff]/10 border rounded-3xl mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] blur-none backdrop-blur-xl">
<div className="text-center mb-16">
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-3xl font-light text-white tracking-tight font-instrument-serif mb-4">
            How It Works
        </h2>
<p className="[animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-lg text-slate-300 max-w-2xl mr-auto ml-auto">
            Creating music with Vybe is as simple as describing what you want. Our AI handles the rest.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 gap-x-6 gap-y-6">

<div className="overflow-hidden md:p-8 md:bg-neutral-900/80 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] space-y-4">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px', backgroundPosition: '0 0'}}></div>
<div className="absolute top-6 right-6">
<span className="inline-flex items-center justify-center text-[11px] text-slate-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">1</span>
</div>
<h3 className="relative mt-4 text-2xl text-white tracking-tight font-sans font-medium">Describe Your Vibe</h3>
<p className="text-sm text-slate-400 mt-2 relative" style={{}}>Tell us your mood or style - "upbeat pop anthem" or "chill acoustic vibe." You can also upload lyrics or let AI create them.</p>
<div className="relative mt-4 flex items-center gap-2 text-xs text-violet-400 font-sans">
<svg className="lucide lucide-check h-3 w-3" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Text prompts • Upload lyrics • Voice notes
            </div>
<div className="xl:bg-neutral-800 border-white/10 border rounded-2xl">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
<span className="text-sm text-white font-sans">Lyrics</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
<svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 3v18"></path><path className="" d="M3 12h18"></path></svg>
</button>
</div>
</div>
<div className="pr-4 pb-4 pl-4">
<textarea className="placeholder:text-slate-500 outline-none focus:border-white/20 min-h-[120px] resize-none xl:bg-neutral-950/30 text-sm text-slate-300 font-geist bg-black/30 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Write some lyrics (leave empty for instrumental)"></textarea>
</div>
</div>
</div>

<div className="overflow-hidden md:p-8 md:bg-neutral-900/80 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] space-y-4">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px', backgroundPosition: '0 0'}}></div>
<div className="absolute top-6 right-6">
<span className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-slate-300 font-sans">2</span>
</div>
<h3 className="relative mt-4 text-2xl text-white tracking-tight font-sans font-medium">AI Generates Everything</h3>
<p className="relative mt-2 text-sm text-slate-400 font-sans">Our advanced AI creates melody, beats, basslines, and vocals that match your description. No musical knowledge required.</p>
<div className="relative mt-4 flex items-center gap-2 text-xs text-emerald-400 font-sans">
<svg className="lucide lucide-check h-3 w-3" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Melody • Beats • Vocals • Instruments
            </div>
<div className="hover:ring-blue-500/30 focus-within:ring-blue-500/40 overflow-hidden transition-all duration-700 xl:bg-neutral-800 bg-gray-900/30 w-full max-w-sm border-white/10 border ring-transparent ring-1 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,.8)] backdrop-blur-md">
<style className="">@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');</style>
<ul className="divide-y divide-white/5" role="list">
<li className="group flex gap-4 hover:bg-white/5 focus-within:bg-white/5 transition-colors pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-center" role="listitem">
<img alt="Album art for Gravity Bloom" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d95e69f-fe67-4ab5-a2d9-d78a63648c54_320w.webp" style={{}}/>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-inter text-white">Gravity Bloom</h3>
<p className="text-sm text-white/60 leading-tight font-inter">Echo Signal – Event Horizons</p>
</div>
<span className="text-sm font-inter text-white">3:56</span>
<button aria-label="Options for Gravity Bloom" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</li>
<li className="group flex gap-4 hover:bg-white/5 focus-within:bg-white/5 transition-colors pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-center" role="listitem">
<img alt="Album art for Lunar Heartbeat" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1b19f660-f575-44be-a279-ca58e4c916c5_320w.webp" style={{}}/>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-inter text-white">Lunar Heartbeat</h3>
<p className="text-sm text-white/60 leading-tight font-inter">Orbit Lights – Far Side EP</p>
</div>
<span className="text-sm font-inter text-white">4:27</span>
<button aria-label="Options for Lunar Heartbeat" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition text-white">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle className="" cx="19" cy="12" r="1"></circle>
<circle className="" cx="5" cy="12" r="1"></circle>
</svg>
</button>
</li>
</ul>

</div>
</div>

<div className="overflow-hidden md:p-8 md:bg-neutral-900/80 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] space-y-4">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px', backgroundPosition: '0 0'}}></div>
<div className="absolute top-6 right-6">
<span className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-slate-300 font-sans">3</span>
</div>
<h3 className="relative mt-4 text-2xl text-white tracking-tight font-sans font-medium">Play, Refine &amp; Export</h3>
<p className="relative mt-2 text-sm text-slate-400 font-sans">Listen to your creation, make adjustments with simple controls, then export in high quality. Share or use however you like.</p>
<div className="relative mt-4 flex items-center gap-2 text-xs text-orange-400 font-sans">
<svg className="lucide lucide-check h-3 w-3" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Edit • Download • Share • Commercial use
            </div>
<div className="ring-1 ring-transparent hover:ring-blue-500/30 focus-within:ring-blue-500/40 overflow-hidden transition-all duration-700 xl:bg-neutral-800 bg-gray-900/30 w-full max-w-sm border-white/10 border rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,.8)] backdrop-blur-md">
<style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');</style>
<div className="flex xl:bg-neutral-950/30 bg-white/5 border-white/5 border-b pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2 items-center">
<span className="text-xl tracking-tight font-inter text-white">Now Playing</span>
<span className="text-xs text-white/60 ml-auto font-inter">Playlist · 7 Tracks</span>
</div>
<ul className="divide-y divide-white/5" role="list">
<li className="group flex gap-4 bg-white/5 pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-sm gap-x-4 gap-y-4 items-start" role="listitem">
<div className="relative">
<img alt="Album art for Starlight Echo" className="w-16 h-16 rounded-lg object-cover transition-transform duration-300 group-hover:rotate-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f578c2b-6d7b-43f5-bbf1-ce4421c18dbd_320w.webp" style={{}}/>
<span className="absolute -inset-1 rounded-lg border border-blue-400/0 group-hover:border-blue-400/30 group-hover:shadow-[0_0_15px_4px_rgba(99,102,241,.3)] transition"></span>
</div>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-inter text-white">Starlight Echo</h3>
<p className="text-sm text-white/60 leading-tight font-inter">Nova Lane – Midnight Blueprints</p>
<div className="flex items-center gap-2 mt-3">
<span className="text-xs font-inter text-white">2:07</span>
<input aria-label="Seek through track" className="w-full h-1 accent-blue-500/90 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60" max="207" min="0" type="range" value="94"/>
<span className="text-xs text-white/60 font-inter">-1:13</span>
</div>
</div>
<button aria-label="Save to Library" className="hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition text-white">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
<line x1="12" x2="12" y1="7" y2="13"></line>
<line x1="15" x2="9" y1="10" y2="10"></line>
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
<div className="md:pt-12 md:pb-12 md:pl-12 md:pr-12 md:bg-neutral-950/80 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-[#ffffff]/10 border rounded-3xl mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] blur-none backdrop-blur-xl">
<div className="text-center mb-16">
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-3xl font-light text-white tracking-tight font-instrument-serif mb-4">
            Edit Mode: Full Creative Control
        </h2>
<p className="[animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-lg text-slate-300 max-w-2xl mr-auto ml-auto">
            Dive deep into your music with professional editing tools. Adjust every element, from individual tracks to full arrangements.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="overflow-hidden lg:col-span-4 lg:bg-neutral-900 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll border-white/10 border rounded-2xl">

<div className="flex md:px-6 bg-neutral-900/80 border-white/10 border-b pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl items-center justify-between">
<div className="flex items-center gap-4">
<button className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-more-vertical h-4 w-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
<div className="text-white text-xl tracking-tight font-medium font-sans">Edit</div>
<div className="hidden md:flex items-center gap-2 md:gap-3 ml-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] uppercase text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-gallery-horizontal lucide-replace h-3.5 w-3.5" data-icon-replaced="true" data-lucide="gallery-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 3v18"></path><rect height="18" rx="2" width="12" x="6" y="3"></rect><path d="M22 3v18"></path></svg>
<span className="font-sans">Replace Section</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] uppercase text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-arrow-left-right h-3.5 w-3.5" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
<span className="font-sans">Extend</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] uppercase text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-scissors h-3.5 w-3.5" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="font-sans">Crop</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] uppercase text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-trash-2 h-3.5 w-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
<span className="font-sans">Remove</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] uppercase text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-signal h-3.5 w-3.5" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<span className="font-sans">Fade Out</span>
</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="px-4 md:px-6 py-6 border-b border-white/10 bg-black/30">
</div>

<div className="relative bg-black/20">

<div className="absolute top-0 bottom-0 left-0 w-12 border-r border-white/10 bg-black/30">
<div className="h-full flex flex-col items-center justify-center gap-3 py-4">
<button className="inline-flex hover:bg-white/10 text-slate-300 bg-white/5 w-8 h-8 border-white/10 border rounded-md items-center justify-center">
<svg className="lucide lucide-film h-4 w-4" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</button>
<button className="inline-flex hover:bg-white/10 text-slate-300 bg-white/5 w-8 h-8 border-white/10 border rounded-md items-center justify-center">
<svg className="lucide lucide-audio-waveform lucide-film w-4 h-4" data-icon-replaced="true" data-lucide="audio-waveform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"></path></svg>
</button>
</div>
</div>

<div className="ml-12">

<div className="h-10 bg-black/20 border-b border-white/10 relative overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 64px)'}}>
<div className="absolute inset-0 px-4 md:px-6 flex items-center gap-12 text-[11px] text-slate-400 font-sans">
<span>00:00</span><span>00:15</span><span>00:30</span><span>00:45</span><span>01:00</span><span>01:15</span><span className="">01:30</span><span>01:45</span><span className="">02:00</span><span className="">02:15</span>
</div>
</div>

<div className="relative px-4 md:px-6 py-4">
<div className="relative overflow-x-auto">
<div className="min-w-[900px]">

<div className="flex items-center gap-2 mb-4">
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight text-white bg-emerald-500">Intro</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight text-white bg-pink-500">Verse 1</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight text-white bg-emerald-500">Prech...</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight text-white bg-orange-500">Chorus</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight text-white bg-pink-500">Verse 2</div>
<div className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-tight text-white bg-emerald-500">Prechorus</div>
</div>

<div className="relative h-48 rounded-xl bg-black/20 border border-white/10 overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 64px)'}}>

<div className="absolute inset-0 px-2 md:px-4 py-6 flex items-stretch gap-2">
<div className="flex-1 rounded-xl border border-emerald-400/40 bg-emerald-500/30 relative overflow-hidden">
<div className="absolute inset-2 rounded-md bg-emerald-900/40"></div>
</div>
<div className="flex-1 rounded-xl border border-pink-400/40 bg-pink-500/30 relative overflow-hidden">
<div className="absolute inset-2 rounded-md bg-pink-900/40"></div>
</div>
<div className="flex-1 rounded-xl border border-emerald-400/40 bg-emerald-500/30 relative overflow-hidden">
<div className="absolute inset-2 rounded-md bg-emerald-900/40"></div>
</div>
<div className="flex-[1.5] rounded-xl border border-orange-400/40 bg-orange-500/30 relative overflow-hidden">
<div className="absolute inset-2 rounded-md bg-orange-900/40"></div>
</div>
<div className="flex-1 rounded-xl border border-pink-400/40 bg-pink-500/30 relative overflow-hidden">
<div className="absolute inset-2 rounded-md bg-pink-900/40"></div>
</div>
<div className="flex-[1.8] rounded-xl border border-emerald-400/40 bg-emerald-500/30 relative overflow-hidden">
<div className="absolute inset-2 rounded-md bg-emerald-900/40"></div>
</div>
</div>

<div className="absolute inset-y-0 left-[49%] w-px bg-white"></div>
<div className="absolute -top-3 left-[49%] -translate-x-1/2">
<div className="text-[11px] font-medium text-black bg-white rounded-full pt-1 pr-2.5 pb-1 pl-2.5 shadow translate-y-4">00:49</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10">
<div className="px-3 md:px-4 py-3 bg-gradient-to-t from-black/60 to-black/20">
<div className="flex items-center gap-3">

<div className="flex items-center min-w-0 gap-3">
<img alt="" className="h-9 w-9 rounded-lg object-cover flex-sh-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6fb80b1f-66be-4aab-a424-5669352f58ab_320w.webp"/>
<div className="min-w-0">
<div className="text-white text-sm font-medium tracking-tight font-sans truncate">Queen Rising</div>
<div className="mt-0.5 flex items-center gap-2 text-[11px] text-slate-400 font-sans">
<span className="truncate">sarahnaya</span>
<span className="text-slate-600">|</span>
<span>00:49</span>
<span className="text-slate-600">/</span>
<span>02:21</span>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-3 ml-auto">

<button className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</button>

<div className="hidden md:flex md:gap-x-3 text-slate-300 gap-x-3 gap-y-2 items-center">
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
<span className="text-base leading-none">−</span>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
<span className="text-base leading-none">+</span>
</button>
</div>

<button className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path>
</svg>
</button>

<button className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10">
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

<div className="hidden lg:col-span-1"></div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" style={{}}>
<div className="md:pt-12 md:pb-12 md:pl-12 md:pr-12 md:bg-neutral-950/80 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl border-[#ffffff]/10 border rounded-3xl mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] blur-none backdrop-blur-xl">
<div className="text-center mb-16">
<h2 className="sm:text-4xl lg:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-3xl font-light text-white tracking-tighter font-instrument-serif mb-4">
                    Loved by music creators
                </h2>
<p className="[animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-lg text-slate-300 max-w-2xl mr-auto ml-auto">
                    See how artists are bringing their musical visions to life with Vybe's AI-powered creation tools.
                </p>
</div>
<div className="relative sm:p-12 flex pt-10 pr-10 pb-10 pl-30 items-center justify-center">
<div className="relative sm:h-96 w-full h-400 max-w-7xl max-h-full">
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>

<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-10deg)', -R: '-32', [animation: 'fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll'}}>
<div className="absolute inset-4 rounded-xl bg-neutral-900 text-white shadow-2xl ring-1 ring-white/10 overflow-hidden border border-white/5">
<div className="px-6 py-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 mb-4">
<svg className="h-4 w-4 text-violet-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 mb-4">
              "Vybe transformed my creative process completely. I went from struggling with melodies to producing full tracks in minutes. The AI understands exactly what vibe I'm going for."
            </p>

<div className="pt-3 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Jordan Avery avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div>
<div className="text-xs font-medium text-white">Jordan Avery</div>
<div className="text-xs text-slate-400">Music Producer</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium text-white">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-6deg)', -R: '-6', [animation: 'fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll'}}>
<div className="absolute inset-4 rounded-xl bg-neutral-900/95 text-white shadow-xl ring-1 ring-white/10 backdrop-blur overflow-hidden border border-white/5">
<div className="px-6 py-6">

<div className="inline-flex ring-1 ring-white/10 bg-white/5 w-8 h-8 rounded-lg mb-4 items-center justify-center">
<svg className="h-4 w-4 text-violet-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 mb-4">
              "As a singer-songwriter, I was amazed by how Vybe captured the emotion I wanted to convey. The vocals it generates feel authentic and the melodies are genuinely catchy."
            </p>

<div className="pt-3 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Sarah Chen avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg"/>
<div>
<div className="text-xs font-medium text-white">Sarah Chen</div>
<div className="text-xs text-slate-400">Singer-Songwriter</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium text-white">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.06), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(0deg)', -R: '0', [animation: 'fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll'}}>
<div className="ring-1 ring-white/10 overflow-hidden xl:bg-neutral-900/90 text-white bg-neutral-900/90 border-white/5 border rounded-xl absolute top-4 right-4 bottom-4 left-4 shadow-lg backdrop-blur">
<div className="pt-6 pr-6 pb-6 pl-6 xl:bg-neutral-900">

<div className="inline-flex bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg mb-4 items-center justify-center">
<svg className="h-4 w-4 text-violet-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-slate-300 mb-4">
              "I've been using Vybe for my podcast intro music and video content. The quality is incredible and it saves me hours of work. Perfect for content creators on tight deadlines."
            </p>

<div className="pt-3 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Marcus Rodriguez avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/890b16bf-eac1-46aa-b8b5-b74ae7a0d51a_3840w.jpg"/>
<div className="">
<div className="text-xs font-medium text-white">Marcus Rodriguez</div>
<div className="text-xs text-slate-400">Content Creator</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium text-white">5.0</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
        .container:hover .glass {
          transform: rotate(0deg) !important;
          margin: 0 -30px !important;
        }
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
<p className="leading-relaxed text-sm text-neutral-400 font-sans">Turn words into music. Create professional tracks with AI-powered composition, vocals, and beats. No instruments or experience needed.</p>
<a className="inline-flex items-center gap-2 hover:bg-white/90 text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-xl pt-2 pr-4 pb-2 pl-4" href="#">
<span className="font-sans">Get Started</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="space-y-2">
<div className="text-xs text-neutral-500 font-sans">Need help? Reach out:</div>
<div className="text-xs text-neutral-400 font-sans">hello@vybe.ai</div>
</div>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-sans font-medium">Product</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">AI Music Generator</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Voice Synthesis</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Beat Maker</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Lyric Writer</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Music Studio</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Mobile App</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-sans font-medium">Resources</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Music Library</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Tutorials</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Artist Showcase</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Genre Guides</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">API Documentation</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Community</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-sans font-medium">Company</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">About Vybe</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Press Kit</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Partners</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Contact</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition-colors font-sans" href="#">Blog</a></li>
</ul>
</div>
</div>


<div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-sans">
<a className="hover:text-neutral-200 transition-colors" href="#">Privacy Policy</a>
<span className="text-neutral-700">•</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Terms of Service</a>
<span className="text-neutral-700">•</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Cookie Policy</a>
<span className="text-neutral-700">•</span>
<a className="hover:text-neutral-200 transition-colors" href="#">DMCA</a>
<span className="text-neutral-700">•</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Licensing</a>
<span className="text-neutral-700">•</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Accessibility</a>
</nav>
<div className="text-[11px] text-neutral-500 font-sans">© 2025 Vybe AI, Inc. All rights reserved.</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
