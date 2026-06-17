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
// Smooth scroll animation setup
document.addEventListener('DOMContentLoaded', function() {
// Intersection Observer for scroll animations
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate');
}
});
}, observerOptions);
// Observe all elements with animation classes
const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
animateElements.forEach(el => observer.observe(el));
// Smooth parallax effect
let ticking = false;
function updateParallax() {
const scrolled = window.pageYOffset;
const parallaxElements = document.querySelectorAll('.parallax');
parallaxElements.forEach((element, index) => {
const speed = 0.5;
const yPos = -(scrolled * speed);
element.style.transform = `translateY(${yPos}px)`;
});
ticking = false;
}
window.addEventListener('scroll', function() {
if (!ticking) {
requestAnimationFrame(updateParallax);
ticking = true;
}
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
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
      

<div className="relative sm:px-8 lg:px-12 max-w-7xl mr-auto ml-auto pr-5 pl-5">

<header className="pt-6 sm:pt-8 fade-in-up animate">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6">
<div className="flex items-center justify-between sm:justify-start">
<span className="sm:text-base text-sm font-semibold tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button">SAKURA</span>
</div>
<div className="col-start-3 flex flex-col items-end text-right">
<span className="text-xs font-semibold tracking-tight">Based in Canada</span>
<span className="text-[13px] text-black/70">Creative Thinker &amp; Interface Builder</span>
</div>
</div>
<div className="mt-5 border-t border-black/15"></div>
</header>

<section className="relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 sm:py-12 pt-8 pb-8 items-start">

<div className="lg:col-span-7 fade-in-left animate">
<h1 className="text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] leading-[1.05] font-semibold tracking-tight">
<span className="block">Lazy Designer.</span>
<span className="block">Efficient by choice.</span>
<span className="block">Exceptional by design.</span>
</h1>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<button className="text-lg" onmousedown="this.style.transform='translateY(10px)'; this.style.boxShadow='0px 0px 1px'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0px 0px 1px'" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0px 7px 1px rgb(0, 0, 0)'" onmouseup="this.style.transform='translateY(-10px)'; this.style.boxShadow='0px 7px 1px rgb(0, 0, 0)'" style={{border: '1px solid black', padding: '12px 30px', borderRadius: '30px', backgroundColor: 'rgb(250, 112, 250)', fontWeight: 'bolder', fontSize: '15px', boxShadow: '0px 0px 1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(0px)'}}>View My Work</button>
<button className="text-lg" onmousedown="this.style.transform='translateY(10px)'; this.style.boxShadow='0px 0px 1px'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0px 0px 1px'" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0px 7px 1px rgb(102, 102, 102)'" onmouseup="this.style.transform='translateY(-10px)'; this.style.boxShadow='0px 7px 1px rgb(102, 102, 102)'" style={{border: '1px solid rgb(102, 102, 102)', padding: '12px 30px', borderRadius: '30px', backgroundColor: 'rgb(248, 248, 248)', fontWeight: 'bolder', fontSize: '15px', boxShadow: '0px 0px 1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(0px)', color: 'rgb(68, 68, 68)'}}>Get In Touch</button>
</div>
</div>

<div className="lg:col-span-5 fade-in-right animate">
<div className="relative rounded-2xl overflow-hidden ring-1 shadow-2xl ring-black/10 bg-black/5">
<img alt="Editorial motion" className="sm:h-[340px] lg:h-[360px] w-full h-[280px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eac34b73-c643-4433-82f0-5ec79e8f5fc9_1600w.jpg" style={{}}/>

</div>
</div>
</div>

<div className="-mt-1 relative mb-8 sm:mb-12 lg:mb-16 fade-in-up animate">
<div className="relative">
<div className="sm:h-12 flex sm:px-6 text-white bg-black w-full h-10 rounded-sm pr-4 pl-4 items-center justify-between">
<div className="w-full grid grid-cols-3 text-[13px] sm:text-sm font-medium">
<div className="flex items-center justify-center cursor-pointer" onclick="window.location.href='/work'" role="button">Work</div>
<div className="flex border-x border-white/20 items-center justify-center cursor-pointer" onclick="window.location.href='/process'" role="button">Process
</div>
<div className="flex items-center justify-center cursor-pointer" onclick="window.location.href='/contact'" role="button">Contact</div>
</div>

</div>
</div>
</div>
</section>

<section className="relative sm:py-12 lg:py-16 pt-10 pb-10 fade-in-up animate">

<div className="absolute right-1 sm:right-2 -top-3 sm:-top-1">
<span className="sm:text-6xl text-4xl font-semibold tracking-tight">PRODUCT DESIGNER</span>
</div>

<div className="overflow-hidden">
<h2 className="leading-[0.9] select-none font-semibold tracking-tight" style={{fontSize: 'clamp(68px, 17vw, 260px)'}}>SAKURA</h2>
</div>
</section>

<section className="ssm:py-24 pt-16 pb-16">
<div className="mb-12 fade-in-up animate">
<div className="text-center mb-12">

<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span className="">ABOUT</span>
<span className="">(01)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">

<div className="lg:col-span-7 fade-in-left animate">
<h3 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight uppercase">Recent Work.</h3>
</div>

<div className="lg:col-span-5 fade-in-right animate">
<p className="text-base sm:text-lg text-black/60 max-w-2xl mt-0 mx-0 mb-6">A curated set of projects from the past months. Clean UI, clear structure, and fast delivery. Designed in Figma and built in React and Tailwind when needed.</p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Get Started</span>
</a>
</div>
</div>
</div>
</div>
</div><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
<div className="lg:col-span-4 fade-in-left animate">
<div className="w-full h-[360px] rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gray-50 mb-6">
<img alt="Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/853977d3-265d-4013-9af2-b0bf5139dfee_800w.jpg" style={{}}/>
</div>
</div>
<div className="lg:col-span-8 fade-in-right animate">
<div className="space-y-6 text-lg leading-relaxed text-black/70">
<p className="">I'm a product designer who believes in the power of simplicity. My approach is rooted in understanding user needs deeply and crafting solutions that feel effortless and intuitive.</p>
<p className="">With over 8 years of experience working with startups and Fortune 500 companies, I've learned that the best designs are often the ones you don't notice – they just work.</p>
<p className="">When I'm not designing, you'll find me exploring new cafés, reading about behavioral psychology, or practicing minimalist photography.</p>
</div>
<div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="scale-in stagger-delay-1 animate">
<div className="text-3xl font-semibold tracking-tight">50+</div>
<div className="text-sm mt-1 text-black/70">Projects Completed</div>
</div>
<div className="scale-in stagger-delay-2 animate">
<div className="text-3xl font-semibold tracking-tight">8</div>
<div className="text-sm mt-1 text-black/70">Years Experience</div>
</div>
<div className="scale-in stagger-delay-3 animate">
<div className="text-3xl font-semibold tracking-tight">15+</div>
<div className="text-sm mt-1 text-black/70">Happy Clients</div>
</div>
<div className="scale-in stagger-delay-4 animate">
<div className="text-3xl font-semibold tracking-tight">3</div>
<div className="text-sm mt-1 text-black/70">Design Awards</div>
</div>
</div>
</div>
</div>
</section>

<section className="ssm:py-24 pt-16 pb-16">
<div className="text-center mb-12 fade-in-up animate">

<div className="mb-6">
<div className="flex text-[13px] sm:text-sm uppercase font-medium text-black tracking-tight items-center justify-between">
<span className="">WORK</span>
<span className="">(02)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">

<div className="lg:col-span-7 fade-in-left animate">
<h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">Recent work.</h3>
</div>

<div className="lg:col-span-5 fade-in-right animate">
<p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">A curated set of projects from the past months. Clean UI, clear structure, and fast delivery. Designed in Figma and built in React and Tailwind when needed.</p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Get Started</span>
</a>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

<article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white fade-in-up stagger-delay-1 animate">
<div className="w-full bg-gray-50">
<img alt="FinFlow Banking App" className="w-full h-[220px] sm:h-[240px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/657ec554-6482-450d-9b61-f6de483507ed_800w.jpg" style={{}}/>
</div>
<div className="p-6 flex flex-col h-full">
<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Mobile App</span>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">FinFlow Banking App</h4>
<p className="text-black/70 mb-6">A simplified mobile banking experience that turns complex money tasks into quick taps.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs rounded bg-black/5">UI/UX</span>
<span className="px-2 py-1 text-xs rounded bg-black/5">Prototyping</span>
<span className="px-2 py-1 text-xs rounded bg-black/5">Research</span>
</div>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium" href="#">
          View Case Study
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</article>

<article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white fade-in-up stagger-delay-2 animate">
<div className="w-full bg-gray-50">
<img alt="TaskFlow Dashboard" className="w-full h-[220px] sm:h-[240px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09b4790c-3486-407c-9054-2703be04e545_800w.jpg" style={{}}/>
</div>
<div className="p-6 flex flex-col h-full">
<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Web Platform</span>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">TaskFlow Dashboard</h4>
<p className="text-black/70 mb-6">A lean project hub that keeps teams aligned with clean visuals and zero fluff.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs rounded bg-black/5">Dashboard</span>
<span className="px-2 py-1 text-xs rounded bg-black/5">Data Viz</span>
<span className="px-2 py-1 text-xs rounded bg-black/5">Design System</span>
</div>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium" href="#">
          View Case Study
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</article>

<article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white fade-in-up stagger-delay-3 animate">
<div className="w-full bg-gray-50">
<img alt="Minimal Store" className="w-full h-[220px] sm:h-[240px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/440f14df-a3b7-4f76-acb9-306f07971d75_800w.jpg"/>
</div>
<div className="p-6 flex flex-col h-full">
<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">E‑commerce</span>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">Minimal Store</h4>
<p className="text-black/70 mb-6">A distraction‑free shop that makes browsing effortless and checkout instant.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs rounded bg-black/5">E‑commerce UX</span>
<span className="px-2 py-1 text-xs rounded bg-black/5">Mobile‑First</span>
<span className="px-2 py-1 text-xs rounded bg-black/5">Conversion</span>
</div>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium" href="#">
          View Case Study
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</article>
</div>
</section><section className="sm:py-24 pt-16 pb-16">
<div className="text-center mb-12 fade-in-up animate">

<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span className="">APPROACH</span>
<span className="">(03)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">

<div className="lg:col-span-7 fade-in-left animate">
<h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">Why Work With Me.</h3>
</div>

<div className="lg:col-span-5 fade-in-right animate">
<p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">Designer who codes. I turn ideas into clear structure, then into working UI. Fast delivery, clean visuals, and components that are easy to ship.
</p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Get Started</span>
</a>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col gap-6 fade-in-left animate">

<article className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 bg-gray-50">
<img alt="Designer workspace with minimal setup" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b533090-af8c-4af9-8ec7-fe2dd77686c9_800w.jpg" style={{}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 70%)'}}></div>
<div className="relative p-6 sm:p-8 h-[320px] sm:h-[420px] flex flex-col justify-between">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Lazy by Design, Exceptional by Nature.</h3>
<div className="flex items-center justify-between">
<span className="text-white/80 text-sm">My working philosophy</span>
<button className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black text-sm font-semibold px-5 py-2 backdrop-blur transition" style={{boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)'}}>
              Let's collaborate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</article>

<article className="flex-grow bg-white ring-black/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h4 className="text-lg font-semibold tracking-tight mb-4">My Working Principles</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3 fade-in-up stagger-delay-1 animate">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(250, 112, 250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</span>
<span className="font-medium">Quality Over Quantity</span>
</li>
<li className="flex items-start gap-3 fade-in-up stagger-delay-2 animate">
<span className="inline-flex items-center justify-center w-8 h-8 border-pink-400/20 border-2 rounded-full mt-0.5" style={{background: 'linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(250, 112, 250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</span>
<span className="font-medium">Honest Communication</span>
</li>
<li className="flex items-start gap-3 fade-in-up stagger-delay-3 animate">
<span className="inline-flex items-center justify-center w-8 h-8 border-pink-400/20 border-2 rounded-full mt-0.5" style={{background: 'linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(250, 112, 250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 2-2 2.5h-3L6 2v3.5L4 8v6l2 2.5V20h4v-3.5L12 14h3l2 2.5V20h1v-4l-2-2.5V8L14 5.5V2h-1z"></path></svg>
</span>
<span className="font-medium">User-First Mindset</span>
</li>
<li className="flex items-start gap-3 fade-in-up stagger-delay-4 animate">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(250, 112, 250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8L21 8h-9l1-6z"></path></svg>
</span>
<span className="font-medium">Efficient Execution</span>
</li>
<li className="flex items-start gap-3 fade-in-up stagger-delay-5 animate">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(250, 112, 250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</span>
<span className="font-medium">Results That Last</span>
</li>
</ul>
</article>
</div>

<article className="relative ring-1 ring-black/10 overflow-hidden flex flex-col lg:min-h-[600px] bg-white h-full bg-cover rounded-2xl bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/34ad3ce9-c409-43e7-947e-bdfd2039b1bc_800w.jpg)] fade-in-up animate">

<div className="pointer-events-none absolute -right-24 -bottom-24 w-[520px] h-[520px] rounded-full" style={{background: 'radial-gradient(closest-side, rgba(250, 112, 250, 0.08), rgba(250, 112, 250, 0.02) 60%, transparent 61%)'}}></div>

<div className="flex sm:p-8 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex -space-x-2">
<img alt="Happy client 1" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/054cd9f9-ea66-4ac7-8e45-659730cfc5a3_320w.jpg" style={{}}/>
<img alt="Happy client 2" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_320w.jpg"/>
<img alt="Happy client 3" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Happy client 4" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&amp;h=80&amp;fit=crop&amp;crop=faces" style={{}}/>
</div>
<div className="text-sm text-black/70 inline-flex items-center gap-1">
          5.0/5
          <svg className="w-4 h-4" fill="currentColor" style={{color: 'rgb(250, 112, 250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<div className="sm:px-8 sm:pb-8 flex-grow flex flex-col pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="mb-4 flex items-center gap-1" style={{color: 'rgb(250, 112, 250)'}}>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center gap-3 mb-4">
<img alt="Maya Chen" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=80&amp;h=80&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-semibold">Maya Chen</div>
<div className="text-xs text-black/70">Product Lead — TechFlow</div>
</div>
</div>
<div className="text-sm text-black/70 font-medium">Trusted by 100+ forward-thinking companies</div>
</div>
</div>
</article>

<div className="flex flex-col gap-6 lg:min-h-[600px] fade-in-right animate h-full">
<article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/55308e17-13d9-47d0-b1c3-968032cd3426_800w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-end">
<h4 className="text-xl font-semibold text-white tracking-tight mb-2">Direct Communication</h4>
<p className="text-sm text-white/80">Skip the middleman. You work directly with me, ensuring your vision stays intact from concept to completion.</p>
</div>
</article>
<article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c96b17c6-0744-4cdc-a8e2-ff92dc6c8eb9_800w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-end">
<h4 className="text-xl font-semibold tracking-tight mb-2 text-white">Strategic Thinking</h4>
<p className="text-sm text-white/80">Every design decision is backed by purpose. I solve real problems, not just make things look pretty.</p>
</div>
</article>
<article className="rounded-2xl ring-1 ring-black/10 bg-white flex-1 relative overflow-hidden" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3bbbf364-3029-4f9e-9987-eb90d946b1b1_800w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-end">
<h4 className="text-xl font-semibold tracking-tight mb-2 text-white">Long-term Partnership</h4>
<p className="text-sm text-white/80">I build relationships, not just projects. Many clients return because they know the value of working together.</p>
</div>
</article>
</div>
</div>
</section>


<section className="sm:py-24 16 pb-16">
<div className="mb-12">
<div className="text-center mb-12 fade-in-up animate">

<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span className="">PROOF</span>
<span className="">(04)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">

<div className="lg:col-span-7 fade-in-left animate">
<h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">What Clients Says. </h3>
</div>

<div className="lg:col-span-5 fade-in-right animate">
<p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">What our clients say about working with us. Real feedback from real partnerships that drive exceptional results.</p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Get Started</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 fade-in-up animate">

<div className="relative overflow-hidden text-white bg-black pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-2 mb-4 items-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path></svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-base leading-relaxed mb-6">Sakura transformed our brand identity beyond what we imagined. Professional, creative, and delivered on time. Our online presence has never looked better.</p>
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm font-medium">Emma Collins</div>
<div className="text-xs mt-1 text-white/70">CEO, Powersurge</div>
</div>
<img alt="Emma Collins" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&amp;h=64&amp;fit=crop&amp;crop=faces" style={{}}/>
</div>
</div>

<div className="relative overflow-hidden text-black bg-white pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<img alt="Michael Brooks" className="w-6 h-6 object-cover rounded-full" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-medium">Michael Brooks</div>
<div className="text-xs text-black/70">CTO, Warpspeed</div>
</div>
</div>
<div className="flex gap-1 text-black mb-4 items-center">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path className="" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="leading-relaxed relative z-10 text-base">Working with Sakura was incredible. The sleek design resonates with customers and has greatly improved our user experience since launch.</p>
</div>

<div className="relative overflow-hidden text-white bg-black pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path></svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-base leading-relaxed mb-6">From strategy to launch, Sakura was with us every step. Their creativity and expertise helped us stand out in a crowded market.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Emily Harris</div>
<div className="text-xs mt-1 text-white/70">CEO, Boltshift</div>
</div>
<img alt="Emily Harris" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>

<div className="lg:col-span-3 border-t border-black/10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="text-white bg-black border-black/10 border-r pt-6 pr-6 pb-6 pl-6 scale-in stagger-delay-1 animate">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">4.6s</div>
<div className="text-xs text-white/70">Average page load time across projects</div>
</div>
<div className="p-6 border-r bg-black text-white border-black/10 scale-in stagger-delay-2 animate">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">18+</div>
<div className="text-xs text-white/70">Countries where our designs are used</div>
</div>
<div className="p-6 bg-black text-white scale-in stagger-delay-3 animate">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">72%</div>
<div className="text-xs text-white/70">Average conversion rate improvement</div>
</div>
</div>
</div>
</div>
</section><section className="sm:py-24 pt-16 pb-16">
<div className="text-center mb-12 fade-in-up animate">

<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span className="">FOCUS</span>
<span className="">(05)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">

<div className="lg:col-span-7 fade-in-left animate">
<h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] font-semibold tracking-tight uppercase">Clean UI. Built Fast.</h3>
</div>

<div className="lg:col-span-5 fade-in-right animate">
<p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto ml-0 mb-6">Designer who codes. Dashboards, landing pages, and design systems delivered in React and Tailwind.</p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Get Started</span>
</a>
</div>
</div>
</div>
</div>
<div className="mt-12 sm:mt-16 perspective-distant">
<div className="flex gap-5 sm:gap-8 overflow-visible sm:px-0 transform-style-preserve-3d select-none pr-2 pb-6 pl-2 items-end justify-center">

<article className="relative rounded-3xl fade-in-up stagger-delay-1 animate" style={{transform: 'rotate(-4deg) translateY(16px)', boxShadow: '0 20px 50px rgba(0,0,0,0.18)'}}>
<img alt="Studio product on dark silk" className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-0 rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/73cec214-1f3d-4c96-a480-b22ce84b98e8_800w.jpg" style={{}}/>
</article>

<article className="relative rounded-3xl fade-in-up stagger-delay-2 animate" style={{transform: 'rotate(-2.5deg) translateY(10px)', boxShadow: '0 18px 44px rgba(0,0,0,0.16)'}}>
<img alt="Close-up of a luxury car front" className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-black/10 ring-1 rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9ab83c55-bb01-43d7-b04c-23f9c4a252e4_800w.jpg" style={{}}/>
</article>

<article className="relative rounded-3xl fade-in-up stagger-delay-3 animate" style={{transform: 'rotate(0deg) translateY(0px) scale(1.01)', boxShadow: '0 22px 56px rgba(0,0,0,0.2)'}}>
<img alt="Portrait partially submerged in water" className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-black/10 ring-1 rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6048d1c9-122b-4335-877b-965b2b899516_800w.jpg" style={{}}/>
</article>

<article className="relative rounded-3xl fade-in-up stagger-delay-4 animate" style={{transform: 'rotate(2.5deg) translateY(10px)', boxShadow: '0 18px 44px rgba(0,0,0,0.16)'}}>
<img alt="Wine bottle in soft studio drape" className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-black/10 ring-1 rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9eccc5e3-286c-44fb-ba83-90f953c8c783_800w.jpg"/>
</article>

<article className="relative rounded-3xl fade-in-up stagger-delay-5 animate" style={{transform: 'rotate(5deg) translateY(16px)', boxShadow: '0 20px 50px rgba(0,0,0,0.18)'}}>
<img alt="Studio portrait in warm light" className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] ring-black/10 ring-1 w-[240px] h-[420px] object-cover rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a936bc9-9869-496e-89c2-32bb97b4aea4_800w.jpg" style={{}}/>
</article>
</div>
</div>
</section>

<section className="sm:py-16 border-black/10 border-t pt-12 pb-0 fade-in-up animate">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
<div className="lg:col-span-6">
<h3 className="uppercase leading-[1.05] tracking-tight font-semibold text-[28px] sm:text-[36px] lg:text-[48px]">Have any project idea? Contact Sakura</h3>
<div className="mt-6">
<button className="text-lg" onmousedown="this.style.transform='translateY(10px)'; this.style.boxShadow='0px 0px 1px'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0px 0px 1px'" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0px 7px 1px rgb(0, 0, 0)'" onmouseup="this.style.transform='translateY(-10px)'; this.style.boxShadow='0px 7px 1px rgb(0, 0, 0)'" style={{border: '1px solid black', padding: '12px 30px', borderRadius: '30px', backgroundColor: 'rgb(250, 112, 250)', fontWeight: 'bolder', fontSize: '15px', boxShadow: '0px 0px 1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(0px)'}}>Contact Now</button>
</div>
</div>
<div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="fade-in-up stagger-delay-1 animate">
<div className="text-sm font-semibold tracking-tight mb-3">Main Pages</div>
<ul className="space-y-2 text-black/70 text-sm">
<li className=""><a className="hover:text-black" href="#">Home</a></li>
<li><a className="hover:text-black" href="#">About</a></li>
<li><a className="hover:text-black" href="#">Projects</a></li>
</ul>
</div>
<div className="fade-in-up stagger-delay-2 animate">
<div className="text-sm font-semibold tracking-tight mb-3">Utility Pages</div>
<ul className="space-y-2 text-black/70 text-sm">
<li className=""><a className="hover:text-black" href="#">Licenses</a></li>
<li className=""><a className="hover:text-black" href="#">404 Page</a></li>
</ul>
</div>
<div className="fade-in-up stagger-delay-3 animate">
<div className="text-sm font-semibold tracking-tight mb-3">More Pages</div>
<ul className="space-y-2 text-black/70 text-sm">
<li className=""><a className="hover:text-black" href="#">Services</a></li>
<li><a className="hover:text-black" href="#">Blog</a></li>
<li className=""><a className="hover:text-black" href="#">Contact</a></li>
</ul>
</div>
<div className="fade-in-up stagger-delay-4 animate">
<div className="text-sm font-semibold tracking-tight mb-3">Socials</div>
<ul className="space-y-2 text-black/70 text-sm">
<li className=""><a className="hover:text-black" href="#">Instagram</a></li>
<li className=""><a className="hover:text-black" href="#">Twitter</a></li>
<li><a className="hover:text-black" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-black/10 mt-10 pt-6">
<p className="text-center text-black/70 text-sm">© 2025 SAKURA. All rights reserved.</p>
</div>
</section></div>
    </>
  );
}
