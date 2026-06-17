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
      

<nav className="fixed z-50 md:px-12 flex backdrop-blur-[2px] bg-gradient-to-b from-neutral-950/80 to-transparent mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<a className="uppercase text-xl font-semibold text-white tracking-tighter z-50" href="#">DEJA VU</a>
<div className="hidden md:flex gap-8 text-sm tracking-wide text-neutral-300 font-medium">
<a className="hover:text-white transition-colors" href="/home">Home</a>
<a className="hover:text-white transition-colors" href="/#portfolio">Social  Events</a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
<a className="hover:text-white transition-colors" href="#contact">Become A Partner</a>
</div>
<button className="md:hidden text-white z-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Tattoo Artist Work" className="w-full h-full object-cover opacity-60 grayscale filter contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2f61e32-f7d9-46ee-9655-df126da6fdd8_original.gif" style={{}}/>
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/30 absolute top-0 right-0 bottom-0 left-0 grayscale-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
<p className="uppercase text-xs text-neutral-400 tracking-[0.2em]"> 1 Diamond St, Aberdeen AB10 1QX</p>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl italic text-white tracking-tight font-serif">DEJA VU </h1>
<p className="md:text-base leading-relaxed text-sm text-neutral-400 max-w-md mt-4 mr-auto ml-auto">Afro/African Club Celebrating Sound, Style, And Culture. Expect The Hottest Afrobeats, Amapiano, And Dancehall, A Vibrant Crowd, And Nights That Hit So Hard They Feel Familiar.</p>
<div className="mt-8 flex flex-col items-center gap-4">
<span className="h-16 w-[1px] bg-gradient-to-b from-neutral-500 to-transparent"></span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950">
<div className="max-w-2xl mx-auto text-center space-y-8">
<svg aria-hidden="true" className="iconify mx-auto text-neutral-600 iconify--lucide" data-height="24" data-icon="lucide:pen-tool" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path className="" d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
<h2 className="md:text-4xl serif leading-snug text-2xl text-white tracking-tight">"Where Sophistication Meets the Night."</h2>
<p className="leading-loose md:text-base text-sm font-light text-neutral-400">In a city as vibrant and evolving as Aberdeen, Deja Vu stands out as a symbol of sophistication and charm. With its carefully curated atmosphere, exceptional service, and refined offerings, every detail is designed to elevate your night.
Experience Deja Vu, where high-end luxury meets timeless elegance in the heart of Aberdeen.</p>
</div>
</section>

<section className="md:px-12 bg-neutral-950 pr-4 pb-24 pl-4" id="portfolio">
<div className="flex justify-between items-end mb-12 border-b border-neutral-900 pb-6">
<h3 className="serif text-xl text-white tracking-tight">Social Events</h3>
<a className="uppercase hover:text-white transition-colors flex items-center gap-2 text-xs text-neutral-500 tracking-widest" href="/#">
                Instagram <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="masonry-grid">

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Back piece tattoo" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d81b5e1c-a902-4feb-84f5-711fee587988_1600w.png"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400"></span>
<span className="text-xs text-gray-50">DJ EVZ</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Arm tattoo detail" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cd0d5c7-f136-4289-9928-3a5a20e5fd47_1600w.png"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400"></span>
<span className="text-xs text-neutral-600"></span>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer mb-6">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Fine line tattoo" className="group-hover:grayscale-0 group-hover:scale-99 transition-all duration-700 ease-out hover:opacity-100 bg-center opacity-90 w-full h-auto max-w-none max-h-none object-cover blur-none grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d01d289-804d-47d7-913f-52bc6ab2d930_1600w.png"/>
</div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 mt-3 items-center justify-between">
<span className="text-xs text-gray-50">06/02/2026</span>
<span className="text-xs text-gray-50">OLD SCHOOL R&amp;B CLASSICS</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Hand tattoo" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcdaf5cb-c756-4491-ae10-3ee16fe225f7_original.gif"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400"></span>
<span className="text-xs text-neutral-600"></span>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer mb-6">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Leg tattoo" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e13d1e4-f661-4f89-b0d6-b002dc5b593d_800w.png"/>
</div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 mt-3 items-center justify-between">
<span className="text-xs text-neutral-400"></span>
<span className="text-xs text-gray-50">DJ KULTUUR</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Abstract Tattoo" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10c91e34-672d-4d73-b8e2-e54abaa8531a_1600w.png"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400"></span>
<span className="text-xs text-neutral-600"></span>
</div>
</div>
</div>
</section>

<section className="md:px-12 border-y bg-neutral-900/30 border-neutral-900 pt-24 pr-6 pb-24 pl-6" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h3 className="text-3xl serif text-white tracking-tight mb-2">The Process</h3>
<p className="text-sm text-neutral-500 max-w-lg">As the evening unfolds, refined Afro and Caribbean rhythms set the tone, creating a seamless flow from relaxed elegance to a lively, sophisticated dancefloor.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">01</span>
<h4 className="text-lg font-medium text-white mb-3">Afrobeat</h4>
<p className="leading-relaxed text-sm text-neutral-400" style={{}}></p>
</div>

<div className="group">
<span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">02</span>
<h4 className="text-lg font-medium text-white mb-3">R&amp;B &amp; More</h4>
<p className="leading-relaxed text-sm text-neutral-400"></p>
</div>

<div className="group">
<span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">03</span>
<h4 className="text-lg font-medium text-white mb-3">Amapiano</h4>
<p className="leading-relaxed text-sm text-neutral-400"></p>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-neutral-950 pt-24 pr-6 pb-24 pl-6" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="overflow-hidden bg-neutral-900 w-full h-[500px] border-neutral-800 border rounded-sm relative shadow-2xl">

<iframe allowfullscreen="" className="map-dark absolute inset-0 w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=1%20Diamond%20St%2C%20Aberdeen%20AB10%201QX%2C%20UK&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
<div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-4 py-2 rounded-sm z-10 pointer-events-none">
<span className="text-xs text-white uppercase tracking-widest flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> 1 Diamond St, Aberdeen AB10 1QX, UK
                    </span>
</div>
</div>
<div className="space-y-10">
<div className="">
<h3 className="serif text-3xl text-white tracking-tight mb-4">The Club</h3>
<p className="leading-relaxed text-sm text-neutral-400">A luxury nightclub in the heart of the city, where elegant
        design, prime location, and an electric atmosphere come together for an unforgettable night.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="p-2 bg-neutral-900 rounded-full text-neutral-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<div className="">
<h5 className="text-white text-sm font-medium mb-1">Impeccable Hygiene</h5>
<p className="text-neutral-500 text-xs leading-relaxed">Single-use equipment, REACH compliant inks, strict
            sterilization protocol.</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-neutral-700 mb-6 iconify--lucide" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="md:text-xl serif leading-relaxed text-lg italic text-neutral-300 mb-6">"Excellent nightlife experience in the bustling Aberdeen city centre."</p>
<p className="uppercase text-xs text-neutral-500 tracking-widest">— Taiwo A</p>
</div>
</section>

<section className="md:px-12 bg-neutral-900 pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h3 className="md:text-4xl serif text-3xl text-white tracking-tight mb-4">GET IN TOUCH</h3>
</div>
<form className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Full Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" placeholder="your@email.com" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
</div>


<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Project Description</label>
</div>

<div className="relative border border-dashed border-neutral-700 bg-neutral-950/50 p-8 text-center rounded-sm hover:border-neutral-500 transition-colors cursor-pointer group">
<svg aria-hidden="true" className="iconify mx-auto text-neutral-600 group-hover:text-neutral-400 mb-2 iconify--lucide" data-icon="lucide:upload-cloud" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
<p className="text-xs text-neutral-400">Drag your visual references here or click to browse</p>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
<div className="pt-6 text-center">
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase text-white border border-neutral-700 hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto" type="button">
<span className="">Send Request</span>
<svg aria-hidden="true" className="iconify ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-[10px] text-neutral-600 mt-4">By submitting this form, you consent to being contacted to discuss your request.</p>
</div>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-neutral-900 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between">
<div className="text-center md:text-left">
<p className="text-xl text-white tracking-tight font-serif">DEJA VU.</p>
<p className="text-xs text-neutral-600 mt-1">Nightclub</p>
</div>
<div className="flex gap-x-6 gap-y-6">
<a className="hover:text-white transition-colors text-neutral-500" href="https://www.instagram.com/dejavunightclub_?igsh=MXBwOXVkcmR6anphdA==">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-icon-replaced="true" data-icon-set="lucide" data-lucide="instagram" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="hover:text-white transition-colors text-neutral-500" href="https://www.facebook.com/share/18F89k5gqA/?mibextid=wwXIfr">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-icon-replaced="true" data-icon-set="lucide" data-lucide="facebook" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
<div className="text-xs text-neutral-700 font-medium">
      © Deja Vu. All rights reserved.
    </div>
</div>
</footer>

    </>
  );
}
