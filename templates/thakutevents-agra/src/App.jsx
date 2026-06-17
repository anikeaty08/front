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
      

<div className="nested-container relative w-full max-w-[1440px] mx-auto rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/5">

<nav className="sticky top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-xl font-medium text-white tracking-tighter" href="#">THAKUR EVENTS</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#services">Expertise</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#work">Showcase</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Plans</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full border border-white/5 transition-all" href="#contact">
                        Book Consultation
                    </a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<div className="flex-1 relative">

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="glow-orb top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Now accepting bookings for 2025 season
                    </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">The Art of Connection <br/> <span className="text-gradient">precision and soul.</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto [--fx-filter:blur(10px)_liquid-glass(1.4,10)_saturate(1.25)_noise(0.5,1,0)]">"An event is more than just a date on a calendar; it is a meticulously crafted atmosphere where connections are forged and stories begin. Our role is to act as the silent architects of your most important moments."
                    </p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                            Start Planning
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="md:w-auto hover:border-zinc-600 transition-colors flex items-center justify-center gap-2 font-medium text-white bg-black/50 w-full border-zinc-800 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm" href="https://www.instagram.com/sudhit_band.agra/">
                            View Gallery
                        </a>
</div>
</div>

<div className="max-w-6xl mt-20 mr-auto ml-auto pr-6 pl-6 relative">
<div className="cursor-pointer bg-gradient-to-t from-[#030303] via-transparent to-transparent w-full h-full z-10 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://youtube.com/@thakursajavatagra4864?si=1gP27mJFt3VyZGPy'" role="button"></div>
<div className="grid grid-cols-3 gap-4 opacity-60">
<div className="h-64 rounded-xl bg-zinc-900 border border-white/5 overflow-hidden">
<img alt="Corporate Event" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="h-64 rounded-xl bg-zinc-900 border border-white/5 overflow-hidden translate-y-8">
<img alt="Wedding" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="h-64 rounded-xl bg-zinc-900 border border-white/5 overflow-hidden">
<img alt="Concert" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-white/5 bg-black/20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
<svg aria-hidden="true" className="iconify w-24 h-8 iconify--lucide" data-icon="lucide:hexagon" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify w-24 h-8 iconify--lucide" data-icon="lucide:triangle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify w-24 h-8 iconify--lucide" data-icon="lucide:circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<svg aria-hidden="true" className="iconify w-24 h-8 iconify--lucide" data-icon="lucide:square" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><rect className="" fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
<svg aria-hidden="true" className="iconify w-24 h-8 iconify--lucide" data-icon="lucide:diamond" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Orchestrated Perfection</h2>
<p className="text-zinc-400 max-w-xl">We bring a design-driven approach to event management, ensuring every detail aligns with your vision.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 group-hover:border-indigo-500/30 transition-colors">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Corporate Summits</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                Product launches, quarterly meetups, and conferences designed to foster connection and amplify brand messaging.
                            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Venue Logistics
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> AV Production
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Catering Management
                                </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 group-hover:border-purple-500/30 transition-colors">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:glass-water" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"></path><path d="M6 12a5 5 0 0 1 6 0a5 5 0 0 0 6 0"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Private Galas</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                Exclusive parties and weddings curated with an eye for elegance. We handle the invisible details that make the night seamless.
                            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Concept Design
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Guest Experience
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Talent Booking
                                </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 group-hover:border-blue-500/30 transition-colors">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Brand Activations</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                Immersive environments that bring your brand to life. We create viral-worthy moments through physical design.
                            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Spatial Design
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Interactive Tech
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Analytics &amp; ROI
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">The Framework</h2>
<p className="text-zinc-400 mb-8">
                            Our proprietary workflow ensures nothing is left to chance. From the initial moodboard to the final strike, we operate with military precision and artistic flair.
                        </p>
<a className="hover:border-white transition-colors inline-flex items-center gap-1 text-sm font-medium text-white border-white/20 border-b pb-0.5" href="/#">
                            Download our brochure 
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="md:w-2/3 grid gap-8">
<div className="flex gap-6">
<div className="flex-none pt-1">
<div className="w-6 h-6 rounded-full border border-white/20 text-white flex items-center justify-center text-xs">1</div>
</div>
<div>
<h4 className="text-white font-medium mb-2">Discovery &amp; Concept</h4>
<p className="text-sm text-zinc-400 leading-relaxed">We dive deep into your objectives. Moodboards, venue scouting, and budget planning happen here.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-none pt-1">
<div className="w-6 h-6 rounded-full border border-white/20 text-white flex items-center justify-center text-xs">2</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-2">Design &amp; Production</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Our design team creates 3D renders while logistics coordinators secure vendors, permits, and staffing.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-none pt-1">
<div className="w-6 h-6 rounded-full border border-white/20 text-white flex items-center justify-center text-xs">3</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-2">Execution</h4>
<p className="text-sm text-zinc-400 leading-relaxed">On-site management. We run the show minute-by-minute, ensuring a flawless attendee experience.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="">
<div className="text-4xl font-medium text-white tracking-tight mb-2">500+</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">Events Hosted</div>
</div>
<div className="">
<div className="text-4xl font-medium text-white tracking-tight mb-2">50k</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">Attendees</div>
</div>
<div className="">
<div className="text-4xl font-medium text-white tracking-tight mb-2">10+</div>
<div className="uppercase text-xs text-zinc-500 tracking-widest">States</div>
</div>
<div>
<div className="text-4xl font-medium text-white tracking-tight mb-2">98%</div>
<div className="text-xs uppercase tracking-widest text-zinc-500">NPS Score</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="glow-orb bottom-0 right-0 translate-y-1/2 translate-x-1/2 opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ready to create history?</h2>
<p className="text-zinc-400">Tell us about your upcoming event. We'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-2 ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-sm" placeholder="Jane Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-2 ml-1">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-sm" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-2 ml-1">Event Type</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-sm text-zinc-400 border border-white/10 rounded-lg py-2.5 text-center peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:bg-white/5 transition-all">Corporate</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-sm text-zinc-400 border border-white/10 rounded-lg py-2.5 text-center peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:bg-white/5 transition-all">Social</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-sm text-zinc-400 border border-white/10 rounded-lg py-2.5 text-center peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:bg-white/5 transition-all">Wedding</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-sm text-zinc-400 border border-white/10 rounded-lg py-2.5 text-center peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:bg-white/5 transition-all">Other</div>
</label>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-2 ml-1">Project Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-sm resize-none" placeholder="Tell us about the vision, estimated guest count, and date..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="hover:bg-zinc-200 transition-colors flex font-medium text-black bg-white w-full rounded-lg pt-3.5 pb-3.5 gap-x-2 gap-y-2 items-center justify-center" type="button">
                                Send Inquiry
                            </button>
<p className="text-center text-xs text-zinc-600 mt-4">By clicking send, you agree to our terms of service.</p>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-zinc-800 text-white w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold">L</span>
<span className="text-zinc-500 text-sm font-medium tracking-tight">LUMINA © 2024</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
