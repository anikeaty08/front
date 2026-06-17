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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#8B1A1A] rounded-full flex items-center justify-center text-white font-semibold tracking-tighter text-lg">KTC</div>
<span className="font-semibold text-lg tracking-tighter">KTC EVENTS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-[#8B1A1A] transition-colors" href="#">Services</a>
<a className="hover:text-[#8B1A1A] transition-colors" href="#">Programs</a>
<a className="hover:text-[#8B1A1A] transition-colors" href="#">About</a>
<a className="hover:text-[#8B1A1A] transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium" href="#">Sign In</a>
<a className="bg-[#8B1A1A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#6b1414] transition-all" href="#">Enquire Now</a>
</div>
</div>
</nav>

<header className="bg-[#1A1A1A] text-white pt-24 pb-32 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<nav className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-8 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Home</a>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-white">Events</span>
</nav>
<div className="grid lg:grid-cols-2 gap-16 items-end">
<div className="max-w-2xl">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        KTC Events — Where Performance Meets Community
                    </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light mb-10 leading-relaxed">
                        From fitness challenges to professional breakfasts — every event is built on structure, not just energy.
                    </p>
<div className="flex flex-wrap gap-6 border-t border-white/10 pt-8">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-[#8B1A1A] text-xl" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span>4 Events in 2025</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-[#8B1A1A] text-xl" icon="solar:medal-ribbon-star-linear" strokeWidth="1.5"></iconify-icon>
<span>Since 2009</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-[#8B1A1A] text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span>Open to All Levels</span>
</div>
</div>
</div>
<div className="aspect-video bg-neutral-800 rounded-2xl flex items-center justify-center border border-white/5 relative group cursor-pointer overflow-hidden">
<span className="text-sm font-medium text-neutral-500 uppercase tracking-widest group-hover:text-neutral-300 transition-colors">Insert Hero Event Photo Here</span>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</header>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-xs font-semibold text-[#8B1A1A] uppercase tracking-[0.2em] mb-4 block">2025 Event Calendar</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[#1A1A1A]">Mark Your Calendar. These Events Fill Fast.</h2>
<p className="text-neutral-500 max-w-2xl font-light">Each event is capped to ensure quality experience for every participant. Our structure ensures maximum engagement and measurable results.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
<div className="aspect-[16/7] bg-neutral-100 flex items-center justify-center border-b border-neutral-50 relative overflow-hidden">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest z-10">Insert Event Photo — Battle of Power Pairs</span>
<div className="absolute top-4 left-4 bg-[#8B1A1A] text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest z-20">March 2025 — Upcoming</div>
</div>
<div className="p-8 flex-grow">
<div className="text-3xl font-semibold tracking-tighter mb-2">20 March 2025</div>
<h3 className="text-xl font-semibold mb-4 text-[#8B1A1A]">Battle of the Power Pairs</h3>
<p className="text-neutral-500 font-light mb-8 line-clamp-2">A high-energy partner fitness challenge designed to test strength, teamwork and endurance. Compete as a pair — win as one.</p>
<div className="space-y-4 border-y border-neutral-50 py-6 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>20 Couples | 40 Participants</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Johannesburg, South Africa</span>
</div>
</div>
<button className="w-full bg-[#8B1A1A] text-white py-4 rounded-xl font-medium hover:bg-[#6b1414] transition-colors flex items-center justify-center gap-2 group">
                        Register Now
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="aspect-[16/7] bg-neutral-100 flex items-center justify-center border-b border-neutral-50 relative">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Insert Event Photo — Trainers Flex</span>
<div className="absolute top-4 left-4 bg-neutral-900 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">2025 — Coming Soon</div>
</div>
<div className="p-8 flex-grow">
<div className="text-3xl font-semibold tracking-tighter mb-2">TBC — 2025</div>
<h3 className="text-xl font-semibold mb-4 text-[#8B1A1A]">Trainers Flex</h3>
<p className="text-neutral-500 font-light mb-8 line-clamp-2">A platform for personal trainers to showcase skill, connect with peers and elevate the industry standard together.</p>
<div className="space-y-4 border-y border-neutral-50 py-6 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>10 Trainers + 5 Clients Per Trainer</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Johannesburg, South Africa</span>
</div>
</div>
<button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2">
                        Register Interest
                    </button>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="aspect-[16/7] bg-neutral-100 flex items-center justify-center border-b border-neutral-50 relative">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest text-center px-4">Insert Event Photo — Ultimate Fitness Challenge</span>
<div className="absolute top-4 left-4 bg-[#8B1A1A] text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">August 2025</div>
</div>
<div className="p-8 flex-grow">
<div className="text-3xl font-semibold tracking-tighter mb-2">August 2025</div>
<h3 className="text-xl font-semibold mb-4 text-[#8B1A1A]">Kgwahla Ultimate Fitness Challenge</h3>
<p className="text-neutral-500 font-light mb-8 line-clamp-2">The flagship KTC group challenge. Teams of six compete across structured fitness stations — testing endurance, strength and unity.</p>
<div className="space-y-4 border-y border-neutral-50 py-6 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>20 Teams | 120 Participants</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Johannesburg, South Africa</span>
</div>
</div>
<button className="w-full bg-[#8B1A1A] text-white py-4 rounded-xl font-medium hover:bg-[#6b1414] transition-colors flex items-center justify-center gap-2">
                        Register Your Team
                    </button>
</div>
</div>

<div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="aspect-[16/7] bg-neutral-100 flex items-center justify-center border-b border-neutral-50 relative">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Insert Event Breakfast Photo</span>
<div className="absolute top-4 left-4 bg-neutral-900 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">End of Year 2025</div>
</div>
<div className="p-8 flex-grow">
<div className="text-3xl font-semibold tracking-tighter mb-2">Q4 2025</div>
<h3 className="text-xl font-semibold mb-4 text-[#8B1A1A]">Breakfast with the PTs</h3>
<p className="text-neutral-500 font-light mb-8 line-clamp-2">An intimate professional gathering for personal trainers to connect, reflect and grow together. Featuring guest speakers from finance and wellness.</p>
<div className="space-y-4 border-y border-neutral-50 py-6 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>20 Personal Trainers</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Johannesburg, South Africa</span>
</div>
</div>
<button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2">
                        Reserve Your Seat
                    </button>
</div>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-neutral-100 pt-8">
<p className="text-xs text-neutral-400 font-medium uppercase tracking-widest italic">Spots are limited for all events. Register early to secure your place.</p>
<a className="flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-200 text-sm font-medium hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-all group" href="https://wa.me/27815784590">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
                Message Us on WhatsApp for Event Details
            </a>
</div>
</section>

<section className="bg-white py-24 border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold text-[#8B1A1A] uppercase tracking-[0.2em] mb-4 block">Event Experience</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">A Decade of Building Active Communities</h2>
<p className="text-neutral-500 max-w-xl mx-auto font-light">From the first Bootcamp at Virgin Active in 2009 to sold-out fitness challenges — here's the journey so far.</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6">
<div className="masonry-item relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 aspect-[4/5] flex items-center justify-center text-center p-8">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">Insert: Bootcamp Photo — Virgin Active Era</span>
<div className="absolute inset-0 bg-[#8B1A1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-white text-center translate-y-2 group-hover:translate-y-0">
<span className="text-sm font-semibold mb-1">Virgin Active Bootcamp</span>
<span className="text-xs opacity-80 uppercase tracking-widest mb-4">2009 — Inaugural Event</span>
<p className="text-xs font-light">The beginning of KTC's structured group fitness vision.</p>
</div>
</div>
<div className="masonry-item relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 aspect-square flex items-center justify-center text-center p-8">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">Insert: Battle of Power Pairs — Previous Edition</span>
<div className="absolute inset-0 bg-[#8B1A1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
<span className="text-sm font-semibold mb-1">Battle of Power Pairs</span>
<span className="text-xs opacity-80 uppercase tracking-widest mb-2">2023 | 36 Participants</span>
</div>
</div>
<div className="masonry-item relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 aspect-[3/4] flex items-center justify-center text-center p-8">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">Insert: Ultimate Fitness Challenge — Group Shot</span>
<div className="absolute inset-0 bg-[#8B1A1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
<span className="text-sm font-semibold mb-1">Kgwahla Ultimate Challenge</span>
<span className="text-xs opacity-80 uppercase tracking-widest mb-2">2022 | 14 Teams</span>
</div>
</div>
<div className="masonry-item relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 aspect-video flex items-center justify-center text-center p-8">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">Insert: Corporate Wellness Session Photo</span>
<div className="absolute inset-0 bg-[#8B1A1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
<span className="text-sm font-semibold mb-1">Corporate Performance</span>
<span className="text-xs opacity-80 uppercase tracking-widest mb-2">2023 | Tech Firm Workshop</span>
</div>
</div>
<div className="masonry-item relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 aspect-[4/5] flex items-center justify-center text-center p-8">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">Insert: Award/Achievement Moment Photo</span>
</div>
<div className="masonry-item relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 aspect-square flex items-center justify-center text-center p-8">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">Insert: Event Registration Photo</span>
</div>
</div>

<div className="mt-20 overflow-x-auto custom-scrollbar pb-10">
<div className="flex gap-12 min-w-[1000px] items-start">
<div className="flex-shrink-0 w-48 relative pt-6">
<div className="h-0.5 w-full bg-neutral-100 absolute top-0 left-0"></div>
<div className="w-2.5 h-2.5 bg-[#8B1A1A] rounded-full absolute -top-1 left-0"></div>
<span className="text-sm font-semibold text-[#8B1A1A] block mb-2">2009</span>
<p className="text-[11px] leading-relaxed text-neutral-500 font-medium uppercase">First PT Session, Virgin Active Hazeldean</p>
</div>
<div className="flex-shrink-0 w-48 relative pt-6">
<div className="h-0.5 w-full bg-neutral-100 absolute top-0 left-0"></div>
<div className="w-2.5 h-2.5 bg-neutral-200 rounded-full absolute -top-1 left-0"></div>
<span className="text-sm font-semibold text-[#1A1A1A] block mb-2">2014</span>
<p className="text-[11px] leading-relaxed text-neutral-500 font-medium uppercase">Launched Group Bootcamp Programs</p>
</div>
<div className="flex-shrink-0 w-48 relative pt-6">
<div className="h-0.5 w-full bg-neutral-100 absolute top-0 left-0"></div>
<div className="w-2.5 h-2.5 bg-neutral-200 rounded-full absolute -top-1 left-0"></div>
<span className="text-sm font-semibold text-[#1A1A1A] block mb-2">2018</span>
<p className="text-[11px] leading-relaxed text-neutral-500 font-medium uppercase">First Kgwahla Ultimate Fitness Challenge</p>
</div>
<div className="flex-shrink-0 w-48 relative pt-6">
<div className="h-0.5 w-full bg-neutral-100 absolute top-0 left-0"></div>
<div className="w-2.5 h-2.5 bg-neutral-200 rounded-full absolute -top-1 left-0"></div>
<span className="text-sm font-semibold text-[#1A1A1A] block mb-2">2023</span>
<p className="text-[11px] leading-relaxed text-neutral-500 font-medium uppercase">Expanded into Corporate Wellness</p>
</div>
<div className="flex-shrink-0 w-48 relative pt-6">
<div className="h-0.5 w-full bg-neutral-100 absolute top-0 left-0"></div>
<div className="w-2.5 h-2.5 bg-[#8B1A1A] rounded-full absolute -top-1 left-0"></div>
<span className="text-sm font-semibold text-[#8B1A1A] block mb-2">2025</span>
<p className="text-[11px] leading-relaxed text-neutral-500 font-medium uppercase">4 Events Planned, School Program Launch</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-neutral-100 mt-8">
<div>
<div className="text-3xl font-semibold tracking-tighter text-[#8B1A1A]">12+ Years</div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">Events Experience</p>
</div>
<div>
<div className="text-3xl font-semibold tracking-tighter text-[#1A1A1A]">14 Teams</div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">Last Challenge</p>
</div>
<div>
<div className="text-3xl font-semibold tracking-tighter text-[#1A1A1A]">4 Events</div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">Planned This Year</p>
</div>
<div>
<div className="text-3xl font-semibold tracking-tighter text-[#1A1A1A]">100+</div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">Community Members</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-24 items-start">
<div>
<span className="text-xs font-semibold text-[#8B1A1A] uppercase tracking-[0.2em] mb-4 block">Get Involved</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to Be Part of the Next Event?</h2>
<p className="text-neutral-500 font-light mb-12">Whether you're competing, coaching or just showing up — there's a place for you at KTC Events.</p>
<div className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm">
<h3 className="text-lg font-semibold mb-6 tracking-tight">REGISTER YOUR INTEREST</h3>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-[10px] font-semibold uppercase text-neutral-400 tracking-widest">Full Name</label>
<input className="w-full bg-neutral-50 border border-neutral-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#8B1A1A] transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold uppercase text-neutral-400 tracking-widest">Email Address</label>
<input className="w-full bg-neutral-50 border border-neutral-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#8B1A1A] transition-colors" placeholder="email@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold uppercase text-neutral-400 tracking-widest">Phone/WhatsApp</label>
<input className="w-full bg-neutral-50 border border-neutral-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#8B1A1A] transition-colors" placeholder="+27" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold uppercase text-neutral-400 tracking-widest">Which Event?</label>
<div className="relative">
<select className="w-full bg-neutral-50 border border-neutral-100 rounded-lg px-4 py-3 text-sm appearance-none outline-none focus:border-[#8B1A1A] transition-colors">
<option>Battle of the Power Pairs</option>
<option>Trainers Flex</option>
<option>Ultimate Fitness Challenge</option>
<option>Breakfast with the PTs</option>
<option>General Inquiry</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold uppercase text-neutral-400 tracking-widest">Message</label>
<textarea className="w-full bg-neutral-50 border border-neutral-100 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#8B1A1A] transition-colors resize-none" placeholder="Tell us about your team or any questions..." rows="3"></textarea>
</div>
<button className="w-full bg-[#8B1A1A] text-white py-4 rounded-xl font-medium hover:bg-[#6b1414] transition-all shadow-lg shadow-[#8B1A1A]/20">Submit Registration</button>
</form>
</div>
</div>
<div className="lg:pt-24">
<h3 className="text-xl font-semibold mb-8 tracking-tight">Prefer to Chat Directly?</h3>
<div className="space-y-12">
<a className="flex items-center gap-4 group" href="https://wa.me/27815784590">
<div className="w-14 h-14 rounded-full border border-green-500/20 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-1">WhatsApp Us</span>
<span className="text-lg font-medium">+27 81 578 4590</span>
</div>
</a>
<div className="relative">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-100"></div></div>
<div className="relative flex justify-center text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400"><span className="bg-[#FDFCFB] px-4">or connect on social</span></div>
</div>
<div className="flex items-center gap-6">
<a className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-600 hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-600 hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:clapperboard-play-linear"></iconify-icon></a>
<a className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-600 hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-600 hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:share-circle-linear"></iconify-icon></a>
</div>
<div className="space-y-4 pt-6">
<p className="text-sm font-medium text-[#8B1A1A]">@KgwahlaTheCoach</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-[#8B1A1A]" icon="solar:check-circle-linear"></iconify-icon>
<span>We respond to all inquiries within 24 hours.</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-[#8B1A1A]" icon="solar:check-circle-linear"></iconify-icon>
<span>All events are structured, inclusive and professionally facilitated.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] py-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Don't Miss the Next KTC Event.</h2>
<p className="text-neutral-400 font-light mb-10 max-w-xl mx-auto">Join a community that trains with purpose, not just energy. Sign up for our newsletter or secure your spot below.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#8B1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6b1414] transition-all w-full sm:w-auto" href="#">View 2025 Calendar</a>
<a className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#1A1A1A] transition-all w-full sm:w-auto" href="#">Contact Kgwahla</a>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-[#8B1A1A] rounded-full flex items-center justify-center text-white font-semibold tracking-tighter text-sm">K</div>
<span className="font-semibold tracking-tighter">KTC EVENTS</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed font-light">Structure, Performance, and Community since 2009. Building the future of fitness through organized challenges.</p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Programs</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">Corporate Wellness</a></li>
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">School Fitness 11-12</a></li>
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">Performance Coaching</a></li>
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">Communities</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">TikTok</a></li>
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">YouTube</a></li>
<li><a className="hover:text-[#8B1A1A] transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Contact</h4>
<p className="text-sm text-neutral-500 font-light mb-4">Johannesburg,<br/>South Africa</p>
<p className="text-sm font-medium text-[#1A1A1A]">hello@ktcevents.co.za</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-neutral-100 pt-8 gap-4">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">© KTC Events | Kgwahla Masipa. All Rights Reserved.</p>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Designed by <span className="text-neutral-900 font-semibold">Structure Studio</span></p>
</div>
</div>
</footer>

    </>
  );
}
