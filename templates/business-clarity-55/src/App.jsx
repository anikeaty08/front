import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth w-full h-screen">

<section className="flex snap-center bg-zinc-700 w-full h-screen pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">

<div className="glass-panel aspect-[3/4] flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-700 ease-out sm:p-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate font-normal w-full max-w-[420px] rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] justify-between" style={{}}>
<img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b559630-56ed-4afe-9ab0-1d489c1ff780_3840w.webp?w=800&amp;q=80"/>

<div className="absolute inset-0 v-lines pointer-events-none z-0"></div>
<div className="absolute inset-0 border-x pointer-events-none z-0 m-8 sm:m-10 border-black/40"></div>

<div className="flex animate-fade-up z-10 opacity-0 w-full items-center justify-between" style={{animationDelay: '600ms'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-canada-red" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase font-space-grotesk font-medium tracking-tighter text-stone-600" style={{}}>Toronto, CA</span>
</div>
<div className="animate-ping w-1.5 h-1.5 bg-green-500 rounded-full"></div>
</div>

<div className="flex-1 flex flex-col z-10 text-center space-y-10 items-center justify-center">
<div className="animate-float">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr border flex items-center justify-center shadow-lg from-stone-950 to-black border-stone-900 shadow-stone-800/50">
<iconify-icon className="text-stone-300" height="32" icon="solar:compass-linear" width="32"></iconify-icon>
</div>
</div>
<h1 className="sm:text-5xl leading-[0.9] text-4xl font-medium tracking-tighter font-space-grotesk flex flex-col items-center gap-2 text-stone-100">

<div className="flex gap-[0.2em]">
<span className="char-wrapper"><span className="char d-1 font-space-grotesk tracking-tighter font-medium" style={{}}>L</span></span><span className="char-wrapper"><span className="char d-2 font-space-grotesk tracking-tighter font-medium" style={{}}>i</span></span><span className="char-wrapper"><span className="char d-3 font-space-grotesk tracking-tighter font-medium" style={{}}>f</span></span><span className="char-wrapper"><span className="char d-4 font-space-grotesk tracking-tighter font-medium" style={{}}>e</span></span>
<span className="char-wrapper w-2"></span>
<span className="char-wrapper"><span className="char d-5 font-space-grotesk tracking-tighter font-medium" style={{}}>d</span></span><span className="char-wrapper" style={{}}></span><span className="char-wrapper" style={{}}><span className="char d-7 font-space-grotesk tracking-tighter font-medium" style={{}}>e</span></span><span className="char-wrapper"><span className="char d-8 font-space-grotesk tracking-tighter font-medium" style={{}}>s</span></span><span className="char-wrapper"><span className="char d-9 font-space-grotesk tracking-tighter font-medium" style={{}}>n</span></span><span className="char-wrapper"><span className="char d-10 font-space-grotesk tracking-tighter font-medium" style={{}}>'</span></span><span className="char-wrapper"><span className="char d-11 font-space-grotesk tracking-tighter font-medium" style={{}}>t</span></span>
</div>

<div className="flex gap-x-[0.2em] gap-y-[0.2em] text-stone-600">
<span className="char-wrapper"><span className="char d-12 font-space-grotesk tracking-tighter font-medium" style={{}}>g</span></span><span className="char-wrapper"><span className="char d-13 font-space-grotesk tracking-tighter font-medium" style={{}}>e</span></span><span className="char-wrapper"><span className="char d-14 font-space-grotesk tracking-tighter font-medium" style={{}}>t</span></span>
<span className="char-wrapper w-2"></span>
<span className="char-wrapper"><span className="char d-15 font-space-grotesk tracking-tighter font-medium" style={{}}>e</span></span><span className="char-wrapper"><span className="char d-16 font-space-grotesk tracking-tighter font-medium" style={{}}>a</span></span><span className="char-wrapper"><span className="char d-17 font-space-grotesk tracking-tighter font-medium" style={{}}>s</span></span><span className="char-wrapper"><span className="char d-18 font-space-grotesk tracking-tighter font-medium" style={{}}>i</span></span><span className="char-wrapper"><span className="char d-19 font-space-grotesk tracking-tighter font-medium" style={{}}>e</span></span><span className="char-wrapper"><span className="char d-20 font-space-grotesk tracking-tighter font-medium" style={{}}>r</span></span>
</div>
</h1>
<div className="w-px h-12 bg-gradient-to-b from-transparent to-transparent opacity-0 animate-fade-up via-stone-700" style={{animationDelay: '800ms'}}></div>
<p className="text-xs text-stone-500 uppercase max-w-[280px] opacity-0 animate-fade-up font-space-grotesk font-medium tracking-tighter" style={{animationDelay: '900ms'}}>
        You get clearer.
      </p>
</div>

<div className="w-full flex justify-between items-end border-t pt-6 opacity-0 animate-fade-up z-10 border-stone-900" style={{animationDelay: '1000ms'}}>
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:vercel" width="70"></iconify-icon>
<svg className="group-hover:text-stone-800 transition-colors duration-300 text-stone-700" data-icon-set="solar" data-solar="arrow-right-linear" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 hidden lg:flex">
<div className="w-1 h-8 rounded-full bg-stone-200"></div>
<div className="w-1 h-1 rounded-full bg-stone-700"></div>
<div className="w-1 h-1 rounded-full bg-stone-700"></div>
<div className="w-1 h-1 rounded-full bg-stone-700"></div>
<div className="w-1 h-1 rounded-full bg-stone-700"></div>
</div>
</section>

<section className="flex snap-center bg-gray-700 w-full h-screen pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="glass-panel aspect-[3/4] flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-center sm:p-10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95fba954-68d6-4e3e-97c6-886b1e28b4bd_3840w.webp?w=800&amp;q=80)] max-w-[420px] bg-cover border-black/60 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]">
<div className="absolute inset-0 v-lines pointer-events-none z-0 opacity-50"></div>

<div className="flex z-10 mb-10 items-start justify-between">
<span className="text-[10px] font-medium text-black tracking-tighter font-space-grotesk bg-stone-100 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 shadow-lg">01</span>
<iconify-icon className="text-canada-red" height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 flex flex-col z-10 justify-center">
<h2 className="sm:text-3xl leading-tight animate-fade-up text-2xl font-space-grotesk mb-8 text-stone-100 tracking-tighter font-medium" style={{}}>
                        Stop trying to<span className="block font-space-grotesk text-stone-600 tracking-tighter font-medium" style={{}}>fix everything.</span>
</h2>
<div className="space-y-6 text-stone-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p className="font-space-grotesk text-sm font-medium tracking-tighter" style={{}}>
                            Resource allocation is critical. Most inefficiencies stem from fighting multiple fronts simultaneously.
                        </p>
<div className="pl-4 border-l-2 border-stone-200">
<p className="font-space-grotesk text-sm font-medium tracking-tighter text-stone-200" style={{}}>
                                Focus creates leverage.
                            </p>
</div>
</div>
</div>

<div className="flex z-10 border-stone-900 border-t mt-auto pt-8 items-center justify-between">
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:linear" width="70"></iconify-icon>
<div className="h-0.5 w-12 rounded-full overflow-hidden bg-stone-900">
<div className="h-full w-1/6 bg-stone-200"></div>
</div>
</div>
</div>
</section>

<section className="flex snap-center w-full h-screen pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-gray-700">
<div className="glass-panel aspect-[3/4] flex flex-col sm:p-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15d5300c-3d1e-44a8-ba13-dfe7c284250e_1600w.webp)] max-w-[420px] bg-cover bg-center border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] border-black/60">
<div className="absolute inset-0 v-lines pointer-events-none z-0 opacity-50"></div>
<div className="flex z-10 mb-10 items-start justify-between">
<span className="text-[10px] border px-2.5 py-1 rounded-full font-space-grotesk font-medium tracking-tighter text-stone-600 border-stone-800" style={{}}>02</span>
<iconify-icon className="text-stone-600" height="24" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 flex flex-col z-10 justify-center">
<h2 className="text-2xl sm:text-3xl mb-8 leading-tight animate-fade-up font-space-grotesk text-stone-100 tracking-tighter font-medium" style={{}}>
                        Reduce decisions,<span className="block font-space-grotesk text-stone-600 tracking-tighter font-medium" style={{}}>not effort.</span>
</h2>
<div className="space-y-6 text-stone-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<ul className="space-y-3">
<li className="flex items-center gap-3 p-2 rounded-lg border bg-black/50 border-stone-900/50">
<iconify-icon className="text-stone-200" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-space-grotesk font-medium tracking-tighter text-stone-300" style={{}}>Standardize basics</span>
</li>
<li className="flex items-center gap-3 p-2 rounded-lg border bg-black/50 border-stone-900/50">
<iconify-icon className="text-stone-200" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-space-grotesk font-medium tracking-tighter text-stone-300" style={{}}>Fix schedules</span>
</li>
<li className="flex items-center gap-3 p-2 rounded-lg border bg-black/50 border-stone-900/50">
<iconify-icon className="text-stone-200" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-space-grotesk font-medium tracking-tighter text-stone-300" style={{}}>Repeat processes</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t mt-auto flex items-center justify-between z-10 border-stone-900">
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:notion" width="70"></iconify-icon>
<div className="h-0.5 overflow-hidden w-12 rounded-full bg-stone-900">
<div className="h-full w-2/6 bg-stone-200"></div>
</div>
</div>
</div>
</section>

<section className="flex snap-center w-full h-screen pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-gray-700">
<div className="glass-panel aspect-[3/4] flex flex-col sm:p-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-center w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09c05e7d-3a5c-47bd-97ce-8935fc3b6489_1600w.webp)] max-w-[420px] bg-cover border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] border-black/60">
<div className="absolute inset-0 v-lines pointer-events-none z-0 opacity-50"></div>
<div className="flex z-10 mb-10 items-start justify-between">
<span className="text-[10px] border px-2.5 py-1 rounded-full font-space-grotesk font-medium tracking-tighter text-stone-600 border-stone-800" style={{}}>03</span>
<svg className="text-stone-600" data-icon-set="solar" data-solar="settings-linear" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"></path></g></svg>
</div>
<div className="flex-1 flex flex-col justify-center z-10">
<h2 className="text-2xl sm:text-3xl mb-8 leading-tight animate-fade-up font-space-grotesk text-stone-100 tracking-tighter font-medium" style={{}}>
                        Build systems,<span className="block font-space-grotesk text-stone-600 tracking-tighter font-medium" style={{}}>not discipline.</span>
</h2>
<div className="space-y-6 text-stone-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p className="font-space-grotesk text-sm font-medium tracking-tighter" style={{}}>
                            Discipline is a finite resource. Systems are scalable assets.
                        </p>
<div className="border rounded-xl px-5 py-5 shadow-sm bg-slate-950 border-stone-900">
<p className="text-sm font-space-grotesk font-medium tracking-tighter text-stone-200" style={{}}>
                                Automate progress.
                                <span className="font-space-grotesk block mt-1 font-medium tracking-tighter text-stone-600" style={{}}>Independent of energy levels.</span>
</p>
</div>
</div>
</div>
<div className="pt-8 border-t mt-auto flex items-center justify-between z-10 border-stone-900">
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:loom" width="70"></iconify-icon>
<div className="h-0.5 w-12 rounded-full overflow-hidden bg-stone-900">
<div className="h-full w-3/6 bg-stone-200"></div>
</div>
</div>
</div>
</section>

<section className="flex snap-center w-full h-screen pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-gray-700">
<div className="glass-panel aspect-[3/4] flex flex-col sm:p-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaf0ab2e-3b5d-4cb6-b43c-770b78ca9e64_3840w.webp?w=800&amp;q=80)] max-w-[420px] bg-cover bg-center border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] border-black/60">
<div className="absolute inset-0 v-lines pointer-events-none z-0 opacity-50"></div>
<div className="flex justify-between items-start mb-10 z-10">
<span className="text-[10px] border px-2.5 py-1 rounded-full font-space-grotesk font-medium tracking-tighter text-stone-600 border-stone-800" style={{}}>04</span>
<iconify-icon className="text-stone-600" height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center z-10">
<h2 className="text-2xl sm:text-3xl mb-8 leading-tight animate-fade-up font-space-grotesk text-stone-100 tracking-tighter font-medium" style={{}}>
                        Track reality,<span className="block font-space-grotesk text-stone-600 tracking-tighter font-medium" style={{}}>not dreams.</span>
</h2>
<div className="space-y-6 text-stone-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between px-4 py-3 rounded-lg border bg-stone-900/50 border-stone-800">
<span className="text-sm font-space-grotesk font-medium tracking-tighter text-stone-200" style={{}}>Actions Taken</span>
<iconify-icon className="text-stone-200" icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between px-4 py-3 rounded-lg border opacity-60 bg-stone-950 border-stone-900">
<span className="text-sm font-space-grotesk line-through font-medium tracking-tighter text-stone-600" style={{}}>Intentions</span>
<iconify-icon className="text-stone-700" icon="solar:close-circle-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t mt-auto flex items-center justify-between z-10 border-stone-900">
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:airtable" width="70"></iconify-icon>
<div className="h-0.5 w-12 rounded-full overflow-hidden bg-stone-900">
<div className="h-full w-4/6 bg-stone-200"></div>
</div>
</div>
</div>
</section>

<section className="flex snap-center w-full h-screen pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-gray-700">
<div className="glass-panel aspect-[3/4] flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:p-10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c4869c1-c844-44c1-a6a6-0379518efe53_1600w.webp?w=800&amp;q=80)] max-w-[420px] bg-contain border rounded-[2rem] px-8 py-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] text-slate-900 border-black/60">
<div className="absolute inset-0 v-lines pointer-events-none z-0 opacity-50"></div>
<div className="flex z-10 mb-10 items-start justify-between">
<span className="text-[10px] border px-2.5 py-1 rounded-full font-space-grotesk font-medium tracking-tighter text-stone-600 border-stone-800" style={{}}>05</span>
<iconify-icon className="text-stone-600" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center z-10">
<h2 className="sm:text-3xl leading-tight animate-fade-up text-2xl font-space-grotesk mb-8 text-stone-100 tracking-tighter font-medium" style={{}}>
                        Accept<span className="block font-space-grotesk text-stone-600 tracking-tighter font-medium" style={{}}>steady growth.</span>
</h2>
<div className="space-y-6 text-stone-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p className="font-space-grotesk text-sm font-medium tracking-tighter" style={{}}>
                            Sustainable progress appears mundane externally but compounds significantly.
                        </p>
<div className="pt-4 border-t border-stone-900">
<span className="block text-base mb-1 font-space-grotesk font-medium tracking-tighter text-stone-100" style={{}}>Consistency &gt; Intensity</span>
</div>
</div>
</div>
<div className="pt-8 border-t mt-auto flex items-center justify-between z-10 border-stone-900">
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:stripe" width="70"></iconify-icon>
<div className="h-0.5 w-12 rounded-full overflow-hidden bg-stone-900">
<div className="h-full w-5/6 bg-stone-200"></div>
</div>
</div>
</div>
</section>

<section className="flex snap-center w-full h-screen px-4 py-4 items-center justify-center bg-gray-700">
<div className="glass-panel aspect-[3/4] flex flex-col sm:p-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f2888b4-e1a6-4ffb-ad99-dee099d4bd94_1600w.webp)] max-w-[420px] bg-cover bg-center border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] border-black/60">
<div className="absolute inset-0 v-lines pointer-events-none z-0 opacity-50"></div>
<div className="flex justify-between items-start mb-10 z-10">
<span className="text-[10px] border px-2.5 py-1 rounded-full font-space-grotesk font-medium tracking-tighter text-stone-600 border-stone-800" style={{}}>06</span>
<iconify-icon className="text-stone-600" height="24" icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center z-10">
<h2 className="text-2xl sm:text-3xl mb-8 leading-tight animate-fade-up font-space-grotesk text-stone-100 tracking-tighter font-medium" style={{}}>
                        Cut what<span className="block font-space-grotesk text-stone-600 tracking-tighter font-medium" style={{}}>drains capital.</span>
</h2>
<div className="space-y-6 text-stone-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<div className="grid grid-cols-1 gap-2">
<div className="flex items-center gap-3 border px-4 py-2.5 rounded-lg text-sm font-space-grotesk font-medium tracking-tighter border-stone-800 bg-stone-950/50 text-stone-400" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> Bad habits
                            </div>
<div className="flex items-center gap-3 border px-4 py-2.5 rounded-lg text-sm font-space-grotesk font-medium tracking-tighter border-stone-800 bg-stone-950/50 text-stone-400" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> Noise &amp; Distraction
                            </div>
</div>
</div>
</div>
<div className="pt-8 border-t mt-auto flex items-center justify-between z-10 border-stone-900">
<iconify-icon className="text-stone-700" height="20" icon="simple-icons:intercom" width="70"></iconify-icon>
<div className="h-0.5 w-12 rounded-full overflow-hidden bg-stone-900">
<div className="h-full w-full bg-stone-200"></div>
</div>
</div>
</div>
</section>

<section className="flex snap-center w-full h-screen pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-zinc-700">
<div className="aspect-[3/4] flex flex-col sm:p-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#1c1c1c] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c68d968c-addf-43d4-a2e6-887530e5a223_1600w.webp)] max-w-[420px] bg-cover bg-center border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] text-black border-stone-200">
<div className="absolute inset-0 v-lines opacity-10 pointer-events-none z-0"></div>
<div className="flex animate-float z-10 w-full mb-auto pt-10 justify-center">
<div className="w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-inner border from-stone-200 to-stone-100 text-black border-stone-300/50">
<iconify-icon className="text-stone-800" height="28" icon="solar:bookmark-linear" width="28"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col z-10 text-center items-center justify-center">
<h2 className="sm:text-3xl leading-tight text-2xl font-space-grotesk mb-6 tracking-tighter font-medium" style={{}}>
                        Optimize yourdecision making.
                    </h2>
<div className="space-y-2 text-sm font-normal text-stone-600">
<p className="font-space-grotesk font-medium tracking-tighter" style={{}}>Save this framework.</p>
<p className="font-space-grotesk font-medium tracking-tighter" style={{}}>Review during operational stress.</p>
</div>
<button className="mt-8 transition-all rounded-full px-8 py-3 text-sm hover:shadow-lg hover:-translate-y-1 duration-300 flex items-center gap-2 font-space-grotesk font-medium tracking-tighter bg-black text-stone-50 hover:bg-stone-800" style={{}}>
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
                        Save Resource
                    </button>
</div>
<div className="pt-8 border-t mt-auto flex justify-between items-center w-full z-10 border-stone-200">
<iconify-icon className="text-stone-400" height="20" icon="simple-icons:vercel" width="70"></iconify-icon>
<div className="flex gap-5 text-stone-600">
<iconify-icon className="transition-colors cursor-pointer hover:text-black" icon="solar:heart-linear" width="20"></iconify-icon>
<iconify-icon className="transition-colors cursor-pointer hover:text-black" icon="solar:plain-2-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
