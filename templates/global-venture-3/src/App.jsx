import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
 with brochure content or CMS bindings.
    - Verify responsive spacing at &lt;768px; review grids noted in comments.
    - No animation on static/hero text. Section reveals should be connected to Aura scroll-reveal (commented where needed).
    - Persistent CTA bar must remain visible in all breakpoints. If Aura template omits, re-add sticky bars (comment present).
    - High-contrast toggle requires platform theme hook (comment present).
    - Parallax uses background-attachment: fixed; review stacking in older mobile browsers (comment present).
    - Counters need Aura numeric-count block to animate (comment present). Motion disabled for reduced-motion users.
  --&gt;

  

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded" href="#home">
<div className="h-6 w-6 rounded bg-gray-900 text-white flex items-center justify-center text-xs tracking-tight">T</div>
<span className="text-sm font-medium tracking-tight group-hover:text-gray-900">Talrop</span>
</a>

<nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
<a className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#ecosystem">Ecosystem</a>
<a className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#startups">Startups</a>
<a className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#programs">Programs</a>
<a className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#governments">For Governments</a>
<a className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#corporates">For Corporates</a>
<a className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#about">About</a>
</nav>

<div className="hidden md:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#partner">
<svg className="lucide lucide-handshake w-4 h-4 text-sky-600" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
            Partner with Us
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#apply-programs">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
            Apply for Programs
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#set-up-park">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Set Up a Park
          </a>
</div>

<div className="md:hidden flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#apply-programs">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
            Apply
          </a>
</div>
</div>
</div>
</header>


<div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200">
<div className="mx-auto max-w-7xl px-4 py-2">
<div className="grid grid-cols-3 gap-2">
<a className="flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-xs font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#partner">
<svg className="lucide lucide-handshake w-4 h-4 text-sky-600" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
          Partner
        </a>
<a className="flex items-center justify-center gap-1 rounded-md bg-sky-600 px-2 py-2 text-xs font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#apply-programs">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
          Apply
        </a>
<a className="flex items-center justify-center gap-1 rounded-md bg-gray-900 px-2 py-2 text-xs font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#set-up-park">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Set Up
        </a>
</div>
</div>
</div>

<main className="" id="home">


<section className="relative">

<div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&amp'}}>

</div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-gray-900">
            A Self Sustainable Global Venture Builder Ecosystem
          </h1>
<p className="mt-4 text-base sm:text-lg text-gray-700">
            Talrop is a global venture builder from India, driving impact through innovation infrastructure, talent, and new digital ventures. As an ecosystem operator, Talrop empowers regions with real-world collaborations, nurturing scalable startups, employment, and sustainable growth.
          </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#partner">
<svg className="lucide lucide-handshake w-4 h-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
              Partner with Us
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="#set-up-park">
<svg className="lucide lucide-map w-4 h-4 text-sky-600" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
              Set Up a Park
            </a>
<a className="inline-flex items-center gap-2 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 text-sm font-medium text-white bg-gray-900 rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="#apply-programs">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
              Apply for Programs
            </a>
</div>
</div>
</div>

</section>


<section className="relative" id="ecosystem">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">The Talrop Ecosystem</h2>
<p className="mt-2 text-sm text-gray-600">Talrop builds physical and digital infrastructures—Techies Park, Village Park, and Inventor Park—as platforms for entrepreneurial talent, innovation, and startup creation.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-2 py-1" href="#ecosystem-hub">
            View all
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl border border-gray-200 bg-white hover:shadow-sm hover:-translate-y-0.5 transition will-change-transform focus-within:ring-2 focus-within:ring-sky-500">
<div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-gray-100">
<img alt="Techies Park workspace" className="h-full w-full object-cover group-hover:scale-[1.02] transition" loading="lazy" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-sky-700">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span data-field="type">Techies Park</span>
</div>
<h3 className="mt-2 text-xl tracking-tight font-semibold text-gray-900" data-field="title">Techies Park</h3>
<p className="mt-2 text-sm text-gray-600" data-field="summary">Campus-based innovation and startup parks that transform schools and colleges into real-time industry zones. These hubs integrate academics and entrepreneurship, enabling tech startups to thrive and creating jobs.</p>
<ul className="mt-3 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Engineering squads</span></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Dev tooling &amp; labs</span></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Industry placements</span></li>
</ul>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#ecosystem-techies">
                  Explore
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#set-up-park">
                  Set Up
                  <svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl border border-gray-200 bg-white hover:shadow-sm hover:-translate-y-0.5 transition will-change-transform focus-within:ring-2 focus-within:ring-sky-500">
<div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-gray-100">
<img alt="Village Park community hub" className="h-full w-full object-cover group-hover:scale-[1.02] transition" loading="lazy" src="https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-sky-700">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span data-field="type">Village Park</span>
</div>
<h3 className="mt-2 text-xl tracking-tight font-semibold text-gray-900" data-field="title">Village Park</h3>
<p className="mt-2 text-sm text-gray-600" data-field="summary">Community-driven innovation hubs designed for every district, focusing on nurturing local talent, startup distribution, and grassroots digital asset creation. Designed to scale globally, the model began with hundreds in Kerala.</p>
<ul className="mt-3 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Community labs</span></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Early talent tracks</span></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Local industry links</span></li>
</ul>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#ecosystem-village">
                  Explore
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#set-up-park">
                  Set Up
                  <svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl border border-gray-200 bg-white hover:shadow-sm hover:-translate-y-0.5 transition will-change-transform focus-within:ring-2 focus-within:ring-sky-500">
<div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-gray-100">
<img alt="Inventor Park prototyping lab" className="h-full w-full object-cover group-hover:scale-[1.02] transition" loading="lazy" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-sky-700">
<svg className="lucide lucide-flask-conical w-4 h-4" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
<span data-field="type">Inventor Park</span>
</div>
<h3 className="mt-2 text-xl tracking-tight font-semibold text-gray-900" data-field="title">Inventor Park</h3>
<p className="mt-2 text-sm text-gray-600" data-field="summary">Centers for R&amp;D, makers, and deep-tech development, including labs for prototyping, robotics, AI, and electronics—integrating with Village and Techies Parks.</p>
<ul className="mt-3 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Rapid prototyping</span></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">IP + compliance</span></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span data-field="features">Pilot deployments</span></li>
</ul>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1 py-1" href="#ecosystem-inventor">
                  Explore
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#set-up-park">
                  Set Up
                  <svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</a>
</div>
</div>
</article>
</div>
</div>
</section>


<section className="relative bg-gray-50 border-y border-gray-200" id="implementation">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="flex items-center justify-between">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Implementation Model</h3>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#partner">
            Partner with Us
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 overflow-x-auto">
<ol className="min-w:[800px] min-w-[800px] grid grid-cols-4 gap-4">
<li className="rounded-lg bg-white border border-gray-200 p-5">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4 text-sky-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Step 1</span>
</div>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Village Park</h4>
<p className="mt-1 text-sm text-gray-600">Community activation, talent discovery, and grassroots digital assets.</p>
</li>
<li className="rounded-lg bg-white border border-gray-200 p-5">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-cpu w-4 h-4 text-sky-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg><span>Step 2</span>
</div>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Techies Park</h4>
<p className="mt-1 text-sm text-gray-600">Integrated training and delivery that enables tech startups to thrive and create jobs.</p>
</li>
<li className="rounded-lg bg-white border border-gray-200 p-5">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-flask-conical w-4 h-4 text-sky-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg><span>Step 3</span>
</div>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Inventor Park</h4>
<p className="mt-1 text-sm text-gray-600">R&amp;D, prototyping, robotics, AI, and electronics integrated with Village and Techies.</p>
</li>
<li className="rounded-lg bg-white border border-gray-200 p-5">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-rocket w-4 h-4 text-sky-600" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg><span>Step 4</span>
</div>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Startup Scaling</h4>
<p className="mt-1 text-sm text-gray-600">Venture building, market access, and expansion.</p>
</li>
</ol>
</div>
<p className="mt-3 text-xs text-gray-500">Village Park → Techies Park → Inventor Park → Startup Scaling. All three infrastructures work together for sustainable entrepreneurship anchored in local ecosystems.</p>
</div>
</section>


<section className="relative" id="impact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Impact</h3>
<p className="mt-2 text-sm text-gray-600">Data from our latest report.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-2 py-1" href="#download-impact">
<svg className="lucide lucide-download w-4 h-4 text-sky-600" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            Download report
          </a>
</div>
<dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="rounded-lg border border-gray-200 bg-white p-6">
<dt className="text-sm text-gray-600">Village Parks (Kerala)</dt>
<dd className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">28</dd>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-6">
<dt className="text-sm text-gray-600">Techies Parks (in progress)</dt>
<dd className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">5</dd>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-6">
<dt className="text-sm text-gray-600">Startups launched</dt>
<dd className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">100+</dd>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-6">
<dt className="text-sm text-gray-600">New jobs created</dt>
<dd className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">1000+</dd>
</div>
</dl>
<p className="mt-4 text-sm text-gray-600">Expanded impact to UAE and GCC regions.</p>
<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-400" href="#download-impact">
<svg className="lucide lucide-download w-4 h-4 text-sky-600" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            Download report
          </a>
</div>
</div>
</section>


<section className="relative bg-gray-50 border-y border-gray-200" id="startups">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Startups</h3>
<p className="mt-2 text-sm text-gray-600">Talrop’s startup portfolio includes 100+ ventures across sectors.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-400" href="#submit-startup">
<svg className="lucide lucide-folder-plus w-4 h-4 text-sky-600" data-lucide="folder-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v6"></path><path d="M9 13h6"></path><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
              Submit Your Startup
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700" href="#apply-programs">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Join Acceleration
            </a>
</div>
</div>

<div className="mt-6">
<fieldset>
<legend className="sr-only">Filter by sector</legend>
<div className="flex flex-wrap gap-2">
<input checked="" className="peer/all sr-only" id="f-all" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/all:bg-gray-900 peer-checked/all:text-white" htmlFor="f-all">All</label>
<input className="peer/education sr-only" id="f-education" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/education:bg-gray-900 peer-checked/education:text-white" htmlFor="f-education">Education</label>
<input className="peer/health sr-only" id="f-health" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/health:bg-gray-900 peer-checked/health:text-white" htmlFor="f-health">Health</label>
<input className="peer/agriculture sr-only" id="f-agriculture" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/agriculture:bg-gray-900 peer-checked/agriculture:text-white" htmlFor="f-agriculture">Agriculture</label>
<input className="peer/robotics sr-only" id="f-robotics" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/robotics:bg-gray-900 peer-checked/robotics:text-white" htmlFor="f-robotics">Robotics</label>
<input className="peer/tech sr-only" id="f-tech" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/tech:bg-gray-900 peer-checked/tech:text-white" htmlFor="f-tech">Tech</label>
<input className="peer/creative sr-only" id="f-creative" name="sector" type="radio"/>
<label className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-gray-400 peer-checked/creative:bg-gray-900 peer-checked/creative:text-white" htmlFor="f-creative">Creative</label>
</div>
</fieldset>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

<a className="hidden peer-checked/all:block peer-checked/education:block rounded-xl border border-gray-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-sector="education" href="#">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-900 text-white flex items-center justify-center text-[10px] tracking-tight">ST</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900" data-field="name">Steyp</h4>
<p className="text-xs text-gray-600" data-field="sector">Education</p>
</div>
</div>
<p className="mt-3 text-sm text-gray-700" data-field="milestones">Digital university platform for tech education.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4 text-sky-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span data-field="location">Kerala</span>
</div>
</a>

<a className="hidden peer-checked/all:block peer-checked/tech:block rounded-xl border border-gray-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-sector="tech" href="#">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-900 text-white flex items-center justify-center text-[10px] tracking-tight">TG</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900" data-field="name">Tegain</h4>
<p className="text-xs text-gray-600" data-field="sector">Tech</p>
</div>
</div>
<p className="mt-3 text-sm text-gray-700" data-field="milestones">Centralized IT services and job matching.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4 text-sky-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span data-field="location">Kerala</span>
</div>
</a>

<a className="hidden peer-checked/all:block peer-checked/health:block rounded-xl border border-gray-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-sector="health" href="#">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-900 text-white flex items-center justify-center text-[10px] tracking-tight">HF</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900" data-field="name">HOSFACE</h4>
<p className="text-xs text-gray-600" data-field="sector">Health</p>
</div>
</div>
<p className="mt-3 text-sm text-gray-700" data-field="milestones">Telemedicine and health access.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4 text-sky-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span data-field="location">Kerala</span>
</div>
</a>

<a className="hidden peer-checked/all:block peer-checked/creative:block rounded-xl border border-gray-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-sector="creative" href="#">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-900 text-white flex items-center justify-center text-[10px] tracking-tight">AM</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900" data-field="name">Attmil</h4>
<p className="text-xs text-gray-600" data-field="sector">Creative</p>
</div>
</div>
<p className="mt-3 text-sm text-gray-700" data-field="milestones">Community products &amp; culture from Attappadi.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4 text-sky-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span data-field="location">Kerala</span>
</div>
</a>
</div>
<p className="mt-3 text-xs text-gray-500">Filters are CSS-only; Aura CMS should bind card visibility by sector for SSR.</p>
</div>
</div>
</section>


<section className="relative" id="programs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Programs</h3>
<p className="mt-2 text-sm text-gray-600">From junior innovators to venture acceleration.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-sky-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-sky-700" href="#apply-programs">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
            Apply to Join Program
          </a>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<article className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-sparkles w-4 h-4 text-sky-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span data-field="audience">Students</span>
</div>
<h4 className="mt-2 text-lg font-semibold tracking-tight" data-field="title">Junior Innovators</h4>
<p className="mt-1 text-sm text-gray-700" data-field="curriculum">Empowering school students with hands-on tech education and project-based learning to launch ventures early.</p>
<p className="mt-2 text-xs text-gray-500" data-field="duration">12 weeks</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#apply-programs">Apply<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
<article className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-graduation-cap w-4 h-4 text-sky-600" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span data-field="audience">Aspiring founders</span>
</div>
<h4 className="mt-2 text-lg font-semibold tracking-tight" data-field="title">School of Startups</h4>
<p className="mt-1 text-sm text-gray-700" data-field="curriculum">Entrepreneurship, strategy, and product development program for colleges and ambitious students.</p>
<p className="mt-2 text-xs text-gray-500" data-field="duration">10 weeks</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#apply-programs">Apply<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
<article className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-users2 w-4 h-4 text-sky-600" data-lucide="users2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<span data-field="audience">Founders</span>
</div>
<h4 className="mt-2 text-lg font-semibold tracking-tight" data-field="title">Founders Circle</h4>
<p className="mt-1 text-sm text-gray-700" data-field="curriculum">A peer group for graduates and early founders focused on scaling, mentorship, experience-sharing, and building ventures together.</p>
<p className="mt-2 text-xs text-gray-500" data-field="duration">Ongoing</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#apply-programs">Apply<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
<article className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="lucide lucide-zap w-4 h-4 text-sky-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span data-field="audience">Scale-ups</span>
</div>
<h4 className="mt-2 text-lg font-semibold tracking-tight" data-field="title">Acceleration as a Service</h4>
<p className="mt-1 text-sm text-gray-700" data-field="curriculum">Expert-guided, infrastructure-and-mentoring based acceleration support for high-potential startups.</p>
<p className="mt-2 text-xs text-gray-500" data-field="duration">8–16 weeks</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#apply-programs">Apply<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</article>
</div>
</div>
</section>

<section className="relative" id="governments">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">For Governments</h3>
<p className="mt-2 text-sm text-gray-600">Ecosystem-as-a-Service Model: A comprehensive approach for governments to replicate proven Kerala and UAE models, driving employment, innovation, and entrepreneurship through structured infrastructure, talent development, and digital transformation.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-800" href="#gov-consult">
<svg className="lucide lucide-messages-square w-4 h-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
            Request consultation
          </a>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
<article className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition">
<img alt="Kerala case" className="h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<h4 className="text-lg font-semibold tracking-tight">Kerala</h4>
<p className="mt-1 text-sm text-gray-700">State-wide parks with education-to-employment pipelines.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#impact">See outcomes<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</article>
<article className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition">
<img alt="UAE case" className="h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h4 className="text-lg font-semibold tracking-tight">UAE &amp; GCC</h4>
<p className="mt-1 text-sm text-gray-700">Innovation hubs integrated with industry partners.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#impact">See outcomes<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</article>
</div>
<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-800" href="#gov-consult">
<svg className="lucide lucide-messages-square w-4 h-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
            Request consultation
          </a>
</div>
</div>
</section>
<section className="relative bg-gray-50 border-y border-gray-200" id="corporates">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">For Corporates</h3>
<p className="mt-2 text-sm text-gray-600">Outsource, co-develop, or innovate together using Talrop’s 14 service companies across five B2B verticals.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-sky-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-sky-700" href="#partner">
<svg className="lucide lucide-handshake w-4 h-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
            Submit Partnership Request
          </a>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-lg font-semibold tracking-tight">Collaboration Models</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-briefcase w-4 h-4 text-sky-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>Outsource</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-git-branch w-4 h-4 text-sky-600" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>Co-develop</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-lamp w-4 h-4 text-sky-600" data-lucide="lamp" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12v6"></path><path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"></path><path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"></path></svg>Innovate together</li>
</ul>
<div className="mt-4">
<div className="text-sm font-medium text-gray-900">B2B Verticals</div>
<ul className="mt-2 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-banknote w-4 h-4 text-sky-600" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>Capital</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-users w-4 h-4 text-sky-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Community</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-flask-conical w-4 h-4 text-sky-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>Research &amp; Development</li>
</ul>
</div>
<div className="mt-4 flex flex-col gap-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800" href="#partner">Submit Partnership Request<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-sky-700" href="#partner">Join as Outsourcing Partner<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 md:col-span-2">
<h4 className="text-lg font-semibold tracking-tight">Service Directory</h4>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

<a className="rounded-lg border border-gray-200 p-3 hover:-translate-y-0.5 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-gray-900 text-white flex items-center justify-center text-[10px]">CP</div>
<div>
<div className="text-sm font-medium text-gray-900" data-field="name">Capital</div>
<div className="text-xs text-gray-600" data-field="vertical">Investment readiness</div>
</div>
</div>
</a>
<a className="rounded-lg border border-gray-200 p-3 hover:-translate-y-0.5 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-gray-900 text-white flex items-center justify-center text-[10px]">CM</div>
<div>
<div className="text-sm font-medium text-gray-900" data-field="name">Community</div>
<div className="text-xs text-gray-600" data-field="vertical">Talent &amp; outreach</div>
</div>
</div>
</a>
<a className="rounded-lg border border-gray-200 p-3 hover:-translate-y-0.5 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-gray-900 text-white flex items-center justify-center text-[10px]">RD</div>
<div>
<div className="text-sm font-medium text-gray-900" data-field="name">R&amp;D</div>
<div className="text-xs text-gray-600" data-field="vertical">Labs &amp; prototyping</div>
</div>
</div>
</a>

</div>
</div>
</div>
</div>
</section>

<section className="relative" id="set-up-park">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Launch a Park in Your Region</h3>
<p className="mt-2 text-sm text-gray-600">Turn talent into ventures with an end-to-end ecosystem.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-700" href="#partner">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Get started
          </a>
</div>
</div>
</section>
</main>

<section className="relative bg-gray-50 border-y border-gray-200" id="ecosystem-hub">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Ecosystem</h2>
<p className="mt-2 text-sm text-gray-600">Overview, features, locations, and integrations.</p>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

<a className="rounded-xl border border-gray-200 bg-white p-6 hover:-translate-y-0.5 hover:shadow-sm transition" href="#ecosystem-techies">
<div className="flex items-center gap-2 text-xs text-gray-600"><svg className="lucide lucide-cpu w-4 h-4 text-sky-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>Techies Park</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Overview</h3>
<p className="mt-1 text-sm text-gray-700">Software talent and product delivery engine.</p>
</a>
<a className="rounded-xl border border-gray-200 bg-white p-6 hover:-translate-y-0.5 hover:shadow-sm transition" href="#ecosystem-village">
<div className="flex items-center gap-2 text-xs text-gray-600"><svg className="lucide lucide-users w-4 h-4 text-sky-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Village Park</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Overview</h3>
<p className="mt-1 text-sm text-gray-700">Grassroots innovation network.</p>
</a>
<a className="rounded-xl border border-gray-200 bg-white p-6 hover:-translate-y-0.5 hover:shadow-sm transition" href="#ecosystem-inventor">
<div className="flex items-center gap-2 text-xs text-gray-600"><svg className="lucide lucide-flask-conical w-4 h-4 text-sky-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>Inventor Park</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Overview</h3>
<p className="mt-1 text-sm text-gray-700">Prototyping and productization lab.</p>
</a>
</div>
</div>
</section>

<section className="relative" id="ecosystem-techies">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-2">
<h2 className="text-3xl tracking-tight font-semibold">Techies Park</h2>
<p className="mt-3 text-sm text-gray-700" data-field="overview">Campus-based innovation and startup parks that transform schools and colleges into real-time industry zones. These hubs integrate academics and entrepreneurship, enabling tech startups to thrive and creating jobs.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-gray-200 p-5 bg-white">
<h4 className="text-base font-semibold tracking-tight">Features &amp; Facilities</h4>
<ul className="mt-2 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Software labs</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Foundry pods</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Career services</li>
</ul>
</div>
<div className="rounded-xl border border-gray-200 p-5 bg-white">
<h4 className="text-base font-semibold tracking-tight">Integration</h4>
<p className="mt-2 text-sm text-gray-700" data-field="integration">Feeds talent into startups and corporate squads.</p>
</div>
</div>
<div className="mt-8">
<h4 className="text-base font-semibold tracking-tight">Locations &amp; Projects</h4>
<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<li className="rounded-lg border border-gray-200 p-4 bg-white"><strong className="font-medium">Kerala:</strong> 5 in progress</li>
<li className="rounded-lg border border-gray-200 p-4 bg-white"><strong className="font-medium">UAE &amp; GCC:</strong> Pilots</li>
</ul>
</div>
<div className="mt-8">
<h4 className="text-base font-semibold tracking-tight">Gallery</h4>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
<img alt="Techies Park team" className="h-32 w-full object-cover rounded-lg" loading="lazy" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Engineering lab" className="h-32 w-full object-cover rounded-lg" loading="lazy" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Developer workspace" className="h-32 w-full object-cover rounded-lg" loading="lazy" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-8">
<h4 className="text-base font-semibold tracking-tight">FAQ</h4>
<div className="mt-3 space-y-3">
<details className="rounded-lg border border-gray-200 bg-white p-4">
<summary className="text-sm font-medium cursor-pointer">Who can join Techies Park?</summary>
<p className="mt-2 text-sm text-gray-700">Students, graduates, and professionals through assessments.</p>
</details>
</div>
</div>
</div>
<aside className="lg:col-span-1">
<div className="sticky top-24 space-y-4">
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-base font-semibold tracking-tight">Get Involved</h4>
<div className="mt-3 flex flex-col gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700" href="#apply-programs"><svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>Apply for Programs</a>
<a className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-400" href="#partner"><svg className="lucide lucide-handshake w-4 h-4 text-sky-600" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>Partner with Us</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-base font-semibold tracking-tight">Testimonials</h4>
<blockquote className="mt-3 text-sm text-gray-700">“The program accelerated our delivery capacity and quality.”</blockquote>
<p className="mt-1 text-xs text-gray-500">Leader, Gov Tech unit</p>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="relative bg-gray-50 border-y border-gray-200" id="ecosystem-village">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-2">
<h2 className="text-3xl tracking-tight font-semibold">Village Park</h2>
<p className="mt-3 text-sm text-gray-700" data-field="overview">Community-driven innovation hubs designed for every district, focusing on nurturing local talent, startup distribution, and grassroots digital asset creation.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-gray-200 p-5 bg-white">
<h4 className="text-base font-semibold tracking-tight">Facilities</h4>
<ul className="mt-2 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Maker labs</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Teaching studios</li>
</ul>
</div>
<div className="rounded-xl border border-gray-200 p-5 bg-white">
<h4 className="text-base font-semibold tracking-tight">Integration</h4>
<p className="mt-2 text-sm text-gray-700">Feeds learners into Techies and Inventor tracks.</p>
</div>
</div>
<div className="mt-8">
<h4 className="text-base font-semibold tracking-tight">Locations &amp; Projects</h4>
<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<li className="rounded-lg border border-gray-200 p-4 bg-white"><strong className="font-medium">Kerala:</strong> 28 Village Parks established</li>
<li className="rounded-lg border border-gray-200 p-4 bg-white"><strong className="font-medium">Global:</strong> Model designed to scale</li>
</ul>
</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-xl border border-gray-200 bg-white p-5 sticky top-24">
<h4 className="text-base font-semibold tracking-tight">Set Up a Village Park</h4>
<p className="mt-2 text-sm text-gray-700">Deploy within 90 days with our turnkey playbooks.</p>
<a className="mt-3 inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700" href="#partner"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>Start</a>
</div>
</aside>
</div>
</div>
</section>

<section className="relative" id="ecosystem-inventor">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-2">
<h2 className="text-3xl tracking-tight font-semibold">Inventor Park</h2>
<p className="mt-3 text-sm text-gray-700">Centers for R&amp;D, makers, and deep-tech development, including labs for prototyping, robotics, AI, and electronics—integrating with Village and Techies Parks.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-gray-200 p-5 bg-white">
<h4 className="text-base font-semibold tracking-tight">Facilities</h4>
<ul className="mt-2 space-y-1.5 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Prototyping bays</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Testing &amp; QA</li>
</ul>
</div>
<div className="rounded-xl border border-gray-200 p-5 bg-white">
<h4 className="text-base font-semibold tracking-tight">Integration</h4>
<p className="mt-2 text-sm text-gray-700">Feeds products into corporate pilots and public deployments.</p>
</div>
</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-xl border border-gray-200 bg-white p-5 sticky top-24">
<h4 className="text-base font-semibold tracking-tight">Pilot with Inventor Park</h4>
<a className="mt-3 inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800" href="#partner"><svg className="lucide lucide-handshake w-4 h-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>Request a pilot</a>
</div>
</aside>
</div>
</div>
</section>

<section className="relative bg-gray-50 border-y border-gray-200" id="implementation-model">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<h2 className="text-3xl tracking-tight font-semibold">Implementation Model</h2>
<p className="mt-2 text-sm text-gray-600">Village Park → Techies Park → Inventor Park → Startup Scaling</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-base font-semibold tracking-tight">Village Park</h4>
<p className="mt-1 text-sm text-gray-700">Community activation</p>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-base font-semibold tracking-tight">Techies Park</h4>
<p className="mt-1 text-sm text-gray-700">Talent &amp; delivery</p>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-base font-semibold tracking-tight">Inventor Park</h4>
<p className="mt-1 text-sm text-gray-700">Prototypes to pilots</p>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5">
<h4 className="text-base font-semibold tracking-tight">Startup Scaling</h4>
<p className="mt-1 text-sm text-gray-700">Venture building</p>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-700" href="#partner">
<svg className="lucide lucide-handshake w-4 h-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>Partner with Us
      </a>
<p className="mt-2 text-xs text-gray-500">All three infrastructures work together for sustainable entrepreneurship anchored in local ecosystems.</p>
</div></section>
    </>
  );
}
