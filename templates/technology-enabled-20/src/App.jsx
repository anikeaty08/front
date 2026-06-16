import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="text-white bg-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-2 py-2 text-sm">
<span className="text-white/90">Canary Care just got smarter — discover what's new!</span>
<svg className="lucide lucide-arrow-right size-4 text-white/80" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
<svg className="lucide lucide-bird size-5" data-lucide="bird" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h.01"></path><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7 2 .5-2 .5"></path><path d="M10 18v3"></path><path d="M14 17.75V21"></path><path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg>
</span>
<span className="text-xl tracking-tight font-semibold">Canary Care</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-neutral-900 transition-colors text-sm text-neutral-700" href="https://www.aura.build/editor/9d6cd648-b3cf-4d6f-b93c-ece7eece3092">Professional</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Personal</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Technology</a>
<button className="group inline-flex items-center gap-1.5 text-sm text-neutral-700 hover:text-neutral-900">
              Discover
              <svg className="lucide lucide-search lucide-chevron-down size-4 group-hover:text-neutral-900 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(23, 23, 23)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</nav>

<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<button className="hidden sm:inline-flex hover:bg-neutral-50 transition text-neutral-900 bg-white w-10 h-10 border-neutral-200 border-2 rounded-full shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] items-center justify-center">
<svg className="lucide lucide-user size-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-neutral-50 transition text-sm text-neutral-900 bg-white h-10 border-neutral-200 border rounded-full pr-4 pl-4 shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset]" href="#">
      Contact
    </a>
<a className="inline-flex items-center gap-2 hover:bg-black transition text-sm text-white font-geist bg-neutral-900 h-10 border-0 ring-1 rounded-full pr-5 pl-5 shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] blur-none backdrop-blur-xl saturate-100" href="#">
<span className="">Shop</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-neutral-900">
<svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
</div>
</header>

<main className="sm:py-10 pt-8 pb-8">
<section className="xl:pl-8 max-w-full mr-auto ml-auto pr-4 pl-8">
<div className="relative overflow-hidden rounded-3xl bg-neutral-200">

<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-neutral-900/50"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/40 to-transparent"></div>

<div className="ring-0 relative">
<div className="sm:px-10 sm:pt-24 lg:pt-28 max-w-4xl mr-auto ml-auto pt-24 pr-6 pl-6">
<p className="text-xs uppercase tracking-[0.18em] text-white/80 xl:text-left">Home is where you're safe</p>
<h1 className="sm:text-5xl lg:text-6xl lg:text-left text-4xl font-semibold text-white tracking-tight font-geist mt-4">
                Technology-enabled care
                <br className="hidden sm:block"/>
                for <span className="inline-block align-baseline xl:my-2 my-2 relative">
<span className="z-[1] sm:px-2 font-semibold text-neutral-900 bg-yellow-400 rounded-md pr-1.5 pl-1.5 relative">independent</span>
</span>
                living.
              </h1>
<p className="leading-relaxed text-base text-white/85 font-roboto max-w-2xl mt-5 sm:text-lg sm:text-left">
                Canary Care's technology-enabled care helps keep our most vulnerable safe in their homes,
                offering peace of mind to those who care for them. Driven by empathy, proven through data,
                designed for everyday life.
              </p>
<div className="sm:mt-10 mt-10">
<a className="inline-flex items-center gap-3 hover:bg-yellow-300 transition sm:px-7 sm:text-base sm:text-center text-sm font-medium text-neutral-900 bg-yellow-400 h-12 rounded-xl pr-7 pl-7 shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] backdrop-blur-md scale-100 rotate-y-15" href="#">
                  Get in touch
                  <svg className="lucide lucide-arrow-right size-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>


<div className="sm:pt-[16rem] md:pt-[14rem] lg:pt-[12rem] pt-[16rem]"></div>
</div>
</div>
</section>

<section className="sm:mt-16 mt-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div className="">
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Features</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 font-geist mt-2">Everything you
          need for safer, independent living</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl">Thoughtfully designed hardware and software
          working together — simple to set up, effortless to trust.</p>
</div>
<a className="inline-flex items-center gap-2 self-start sm:self-auto text-sm text-neutral-900 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-4 h-10 transition shadow-sm" href="#">
        Explore all
        <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

<div className="lg:col-span-7 grid gap-4 sm:gap-6">

<div className="group overflow-hidden sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-neutral-900/5 min-h-[420px] bg-[url(https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=1600&amp;q=80)] bg-cover border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="relative">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white ring-1 ring-neutral-900/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
<svg className="lucide lucide-activity" data-lucide="activity" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl sm:text-slate-50">
              Real‑time insights</h3>
<p className="mt-2 text-neutral-600 xl:text-slate-100">See daily patterns and detect anomalies instantly with a
              live timeline and trend analysis.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 text-xs text-neutral-700 bg-white border border-neutral-200 rounded-full px-2.5 h-7">
<span className="inline h-1.5 w-1.5 rounded-full bg-green-500"></span> Live
              </span>
<span className="inline-flex items-center gap-1 text-xs text-neutral-700 bg-white border border-neutral-200 rounded-full px-2.5 h-7">Trend lines</span>
<span className="inline-flex items-center gap-1 text-xs text-neutral-700 bg-white border border-neutral-200 rounded-full px-2.5 h-7">Daily summary</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-neutral-900/5 min-h-[200px]">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white ring-1 ring-neutral-900/10 shadow-sm">
<svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">Smart alerts</h3>
<p className="mt-2 text-neutral-600">Only the notifications that matter — configurable for time, room, and
              routines.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 h-7">Quiet hours</span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 h-7">Escalations</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-neutral-900/5 min-h-[200px]">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white ring-1 ring-neutral-900/10 shadow-sm">
<svg className="lucide lucide-shield" data-lucide="shield" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">Privacy‑first</h3>
<p className="mt-2 text-neutral-600">No cameras. Secure by design with strong encryption and granular access.
            </p>
</div>
</div>
</div>

<div className="lg:col-span-5 grid gap-4 sm:gap-6">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-neutral-900/5 min-h-[200px]">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white ring-1 ring-neutral-900/10 shadow-sm">
<svg className="lucide lucide-plug" data-lucide="plug" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</div>
<h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">Simple install</h3>
<p className="mt-2 text-neutral-600">Self‑adhesive sensors, long battery life, and guided setup in minutes.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-neutral-900/5 min-h-[200px]">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white ring-1 ring-neutral-900/10 shadow-sm">
<svg className="lucide lucide-map-pin" data-lucide="map-pin" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">Works everywhere</h3>
<p className="mt-2 text-neutral-600">Reliable connectivity and offline resilience across different home layouts.
            </p>
</div>
</div>

<div className="group overflow-hidden sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-neutral-900/5 min-h-[420px] bg-white bg-[url(https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=1600&amp;q=80)] bg-cover border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="relative">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white ring-1 ring-neutral-900/10 shadow-sm">
<svg className="lucide lucide-line-chart" data-lucide="line-chart" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl sm:text-slate-50">Timeline
              &amp; insights</h3>
<p className="mt-2 text-neutral-600 xl:text-slate-50">Understand routines with a clear activity timeline and
              room‑level breakdowns.</p>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-neutral-200 bg-white p-3 text-center transition-colors duration-200 group-hover:border-neutral-300">
<p className="text-xs text-neutral-500">Avg. motion</p>
<p className="mt-1 text-sm font-medium text-neutral-900">+12%</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-3 text-center transition-colors duration-200 group-hover:border-neutral-300">
<p className="text-xs text-neutral-500">Night activity</p>
<p className="mt-1 text-sm font-medium text-neutral-900">Stable</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-3 text-center transition-colors duration-200 group-hover:border-neutral-300">
<p className="text-xs text-neutral-500">Visits</p>
<p className="mt-1 text-sm font-medium text-neutral-900">3 / day</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-neutral-600">Designed with empathy, proven through data.</div>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 h-7">
<span className="inline h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Uptime 99.98%
        </span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 h-7">
<span className="inline h-1.5 w-1.5 rounded-full bg-blue-500"></span> AES‑256
        </span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 h-7">
<span className="inline h-1.5 w-1.5 rounded-full bg-yellow-400"></span> Battery 18–24 mo
        </span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
