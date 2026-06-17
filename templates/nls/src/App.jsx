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
      

<div className="w-full bg-[#1E2A35] text-[#F5F3EE]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
<p className="text-[13px] leading-5 font-light tracking-tight">A joyful, whole-child education on Nantucket.</p>
<a className="hidden sm:inline-flex items-center gap-2 text-[13px] font-normal hover:text-[#C49B5A] transition-colors" href="#give">
<svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.84 4.61c-1.37-1.2-3.43-1-4.71.3L12 9l-4.13-4.09c-1.28-1.3-3.34-1.5-4.71-.3-1.64 1.44-1.7 3.94-.13 5.46l8.22 8.06 8.22-8.06c1.57-1.52 1.51-4.02-.13-5.46z"></path>
</svg>
          Support NLS
        </a>
</div>
</div>

<header className="sticky top-0 z-50 bg-[#F5F3EE]/80 backdrop-blur supports-[backdrop-filter]:bg-[#F5F3EE]/70 border-b border-[#1E2A35]/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="Nantucket Lighthouse School Home" className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-md bg-[#1E2A35] text-[#F5F3EE] flex items-center justify-center font-semibold tracking-tight">
              NLS
            </div>
<div className="flex flex-col leading-tight">
<span className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Nantucket Lighthouse School</span>
<span className="text-[12px] text-[#7D7D7D] font-light">Preschool–Grade 6</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">

<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm font-normal hover:text-[#4A7C9A] transition-colors">
                The School
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-72 rounded-lg border border-[#1E2A35]/10 bg-white shadow-xl p-3">
<div className="flex flex-col divide-y divide-[#1E2A35]/10">
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#mission">Mission &amp; Philosophy</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#faculty">Faculty &amp; Staff</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#campus">Campus &amp; Facilities</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#handbook">Parent Handbook</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#pals">PALS (Parent Association)</a>
</div>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm font-normal hover:text-[#4A7C9A] transition-colors">
                Our Programs
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-[28rem] rounded-lg border border-[#1E2A35]/10 bg-white shadow-xl p-4">
<div className="grid grid-cols-2 gap-2">
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#early">Early Childhood</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#elementary">Elementary (1–6)</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#extended">Extended Day</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#enrichment">Enrichment Programs</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#camp">Camp Lighthouse</a>
</div>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm font-normal hover:text-[#4A7C9A] transition-colors">
                Community Hub
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-72 rounded-lg border border-[#1E2A35]/10 bg-white shadow-xl p-3">
<div className="flex flex-col divide-y divide-[#1E2A35]/10">
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#news">News &amp; Events</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#calendar">Calendar</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#alumni">Alumni &amp; Donor Stories</a>
</div>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm font-normal hover:text-[#4A7C9A] transition-colors">
                Admissions
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-[26rem] rounded-lg border border-[#1E2A35]/10 bg-white shadow-xl p-4">
<div className="grid grid-cols-2 gap-2">
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#apply">Apply</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#tuition">Tuition &amp; Financial Aid</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#visit">Schedule a Visit</a>
<a className="p-3 rounded-md hover:bg-[#F5F3EE] transition-colors" href="#contact-admissions">Contact Admissions</a>
</div>
</div>
</div>
</nav>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#1E2A35]/15 text-sm hover:bg-white hover:border-[#1E2A35]/30 transition-colors" href="#visit">
<svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"></path><path d="M12 10v.01"></path></svg>
              Visit
            </a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#C49B5A] text-white text-sm hover:bg-[#B38C51] transition-colors shadow-sm" href="#give">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61c-1.37-1.2-3.43-1-4.71.3L12 9l-4.13-4.09c-1.28-1.3-3.34-1.5-4.71-.3-1.64 1.44-1.7 3.94-.13 5.46l8.22 8.06 8.22-8.06c1.57-1.52 1.51-4.02-.13-5.46z"></path></svg>
              Give
            </a>
</div>

<button aria-controls="mobileMenu" aria-expanded="false" className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-[#1E2A35]/15 hover:border-[#1E2A35]/30 hover:bg-white transition-colors" id="mobileMenuBtn">
<svg className="h-5 w-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t border-[#1E2A35]/10" id="mobileMenu">
<div className="px-4 py-4 space-y-6">
<div>
<div className="text-[13px] uppercase tracking-wide text-[#7D7D7D] mb-2">The School</div>
<div className="flex flex-col">
<a className="py-2 hover:text-[#4A7C9A]" href="#mission">Mission &amp; Philosophy</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#faculty">Faculty &amp; Staff</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#campus">Campus &amp; Facilities</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#handbook">Parent Handbook</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#pals">PALS (Parent Association)</a>
</div>
</div>
<div>
<div className="text-[13px] uppercase tracking-wide text-[#7D7D7D] mb-2">Our Programs</div>
<div className="grid grid-cols-2 gap-3">
<a className="py-2 hover:text-[#4A7C9A]" href="#early">Early Childhood</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#elementary">Elementary (1–6)</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#extended">Extended Day</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#enrichment">Enrichment</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#camp">Camp Lighthouse</a>
</div>
</div>
<div>
<div className="text-[13px] uppercase tracking-wide text-[#7D7D7D] mb-2">Community Hub</div>
<div className="flex flex-col">
<a className="py-2 hover:text-[#4A7C9A]" href="#news">News &amp; Events</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#calendar">Calendar</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#alumni">Alumni &amp; Donor Stories</a>
</div>
</div>
<div>
<div className="text-[13px] uppercase tracking-wide text-[#7D7D7D] mb-2">Admissions</div>
<div className="grid grid-cols-2 gap-3">
<a className="py-2 hover:text-[#4A7C9A]" href="#apply">Apply</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#tuition">Tuition &amp; Aid</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#visit">Schedule a Visit</a>
<a className="py-2 hover:text-[#4A7C9A]" href="#contact-admissions">Contact Admissions</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-[#1E2A35]/15 hover:border-[#1E2A35]/30 hover:bg-white transition-colors" href="#visit">
              Visit
            </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#C49B5A] text-white hover:bg-[#B38C51] transition-colors" href="#give">
              Give
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="relative h-[72vh] md:h-[78vh] lg:h-[86vh] overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1523246197848-dae7c62a9f4a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<source src="https://cdn.coverr.co/videos/coverr-children-playing-3861/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/60 via-[#1E2A35]/20 to-transparent"></div>
<div className="relative z-10 h-full">
<div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-end sm:items-center">
<div className="max-w-2xl pb-10 sm:pb-0">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-[600] text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Imagine a school that…
              </h1>
<p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed font-light" style={{fontFamily: '\'Lato\', sans-serif'}}>
                Nurtures curiosity, creativity, and a lifelong love of learning — grounded in warmth, wonder, and belonging.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#4A7C9A] text-white text-sm hover:bg-[#406F8A] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A7C9A] focus:ring-offset-[#F5F3EE]" href="#difference">
                  Experience the Difference
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/90 text-[#1E2A35] text-sm hover:bg-white transition-colors shadow-sm border border-white/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E2A35] focus:ring-offset-[#F5F3EE]" href="#visit">
                  Schedule a Visit
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="mission">
<div className="relative">
<div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&amp'}}></div>
<div className="absolute inset-0 bg-[#F5F3EE]/80"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6">
<div className="relative rounded-xl bg-white/80 backdrop-blur border border-[#1E2A35]/10 p-6 sm:p-8 shadow-sm">
<h2 className="text-3xl sm:text-4xl tracking-tight font-[600] mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Whole-child, whole-hearted</h2>
<p className="text-base leading-relaxed text-[#1E2A35]/90 font-light" style={{fontFamily: '\'Lato\', sans-serif'}}>
                  We believe children thrive when they are known, valued, and inspired. Our approach integrates rigorous academics with artistry, nature, and community connection—nurturing the head, heart, and hands.
                </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#1E2A35]/15 hover:border-[#1E2A35]/30 hover:bg-white transition-colors text-sm" href="#difference">
                    Learn about our philosophy
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#C49B5A] text-white text-sm hover:bg-[#B38C51] transition-colors" href="#faculty">
                    Meet our educators
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a6 6 0 0 0-4-5.65"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</a>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-xl overflow-hidden border border-[#1E2A35]/10 shadow-sm">
<img alt="Children learning outdoors on Nantucket" className="w-full h-[320px] sm:h-[420px] object-cover" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="programs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h3 className="text-3xl sm:text-4xl tracking-tight font-[600]" style={{fontFamily: '\'Playfair Display\', serif'}}>Our Programs</h3>
<p className="mt-2 text-[#7D7D7D] text-sm sm:text-base font-light">Preschool–6th Grade, plus after-school, enrichment, and summer experiences.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm hover:text-[#4A7C9A]" href="#apply">
            Apply now
            <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#elementary">
<div className="relative h-44 overflow-hidden">
<img alt="Elementary students engaged in a creative project" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/50 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/85 backdrop-blur text-xs text-[#1E2A35] border border-white/70">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5V4.5C4 3.12 5.12 2 6.5 2H17.5C18.88 2 20 3.12 20 4.5V19.5L12 16 4 19.5Z"></path></svg>
                Preschool–Grade 6
              </div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Core Program</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">A balanced, integrated curriculum that nurtures curious, capable learners.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                Explore
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="group block rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#extended">
<div className="relative h-44 overflow-hidden">
<img alt="Extended day activities" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/50 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Extended Day</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Care and creativity beyond school hours with movement, making, and play.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                Explore
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="group block rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#enrichment">
<div className="relative h-44 overflow-hidden">
<img alt="Art and enrichment programs" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/50 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Enrichment</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Short-format workshops in arts, nature, makerspace, music, and language.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                Explore
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="group block rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#camp">
<div className="relative h-44 overflow-hidden">
<img alt="Children at summer camp" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/50 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Camp Lighthouse</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Summer on-island: tide pools, trails, storytelling, and joyful discovery.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                Explore
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="community">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-end justify-between gap-6 mb-6">
<div>
<h3 className="text-3xl sm:text-4xl tracking-tight font-[600]" style={{fontFamily: '\'Playfair Display\', serif'}}>Community Highlights</h3>
<p className="mt-2 text-[#7D7D7D] text-sm sm:text-base font-light">Stories, PALS, and events that keep our community thriving.</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#1E2A35]/15 hover:border-[#1E2A35]/30 hover:bg-white transition-colors text-sm" href="#calendar">
<svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Full Calendar
            </a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#4A7C9A] text-white text-sm hover:bg-[#406F8A] transition-colors" href="#news">
              Latest News
            </a>
</div>
</div>

<div className="relative">
<div className="overflow-x-auto scrollbar-thin scroll-smooth" style={{scrollbarWidth: 'thin'}}>
<div className="flex gap-6 snap-x snap-mandatory pb-2">

<a className="min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] snap-start rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#pals">
<div className="relative h-44">
<img alt="Parents volunteering at school" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/60 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/85 text-xs border border-white/70">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    PALS
                  </div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Parent Association</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Connect, volunteer, and help shape campus life.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                    Get involved
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] snap-start rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#news">
<div className="relative h-44">
<img alt="Students presenting their projects" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/60 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/85 text-xs border border-white/70">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5V6.5a2 2 0 0 1 2-2h10l4 4v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M14 2v4h4"></path></svg>
                    News
                  </div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Stories from our classrooms</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Fresh updates, student work, and community spotlights.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                    Read more
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] snap-start rounded-xl overflow-hidden border border-[#1E2A35]/10 bg-white shadow-sm hover:shadow-md transition-shadow" href="#calendar">
<div className="relative h-44">
<img alt="Community gathering outdoors" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A35]/60 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/85 text-xs border border-white/70">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Events
                  </div>
</div>
<div className="p-4">
<h4 className="font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Calendar</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Key dates, family events, and community gatherings.</p>
<div className="mt-3 inline-flex items-center gap-1 text-sm text-[#4A7C9A]">
                    View calendar
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="give">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C49B5A]/10 text-[#C49B5A] text-xs border border-[#C49B5A]/20">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61c-1.37-1.2-3.43-1-4.71.3L12 9l-4.13-4.09c-1.28-1.3-3.34-1.5-4.71-.3-1.64 1.44-1.7 3.94-.13 5.46l8.22 8.06 8.22-8.06c1.57-1.52 1.51-4.02-.13-5.46z"></path></svg>
              Support &amp; Giving
            </div>
<h3 className="mt-4 text-3xl sm:text-4xl tracking-tight font-[600]" style={{fontFamily: '\'Playfair Display\', serif'}}>Imagine what we can build together</h3>
<p className="mt-3 text-base text-[#1E2A35]/90 font-light" style={{fontFamily: '\'Lato\', sans-serif'}}>
              Your generosity sustains joyful learning, dedicated educators, and meaningful experiences on our island. Join our annual campaign, make a gift online, or explore matching opportunities.
            </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#C49B5A] text-white text-sm hover:bg-[#B38C51] transition-colors shadow-sm" href="#donate">
                Donate Online
                <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 17 10-10"></path><path d="m8 7 9 0 0 9"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#1E2A35]/15 hover:border-[#1E2A35]/30 hover:bg-white transition-colors text-sm" href="#campaigns">
                Annual Giving &amp; Campaigns
                <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3 text-sm text-[#7D7D7D]">
<svg className="h-4.5 w-4.5 mt-0.5 text-[#C49B5A]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
<span>Matching Gifts</span>
</div>
<div className="flex items-start gap-3 text-sm text-[#7D7D7D]">
<svg className="h-4.5 w-4.5 mt-0.5 text-[#C49B5A]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18"></path><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M3 21h18"></path></svg>
<span>Mimi Beman Book Fund</span>
</div>
<div className="flex items-start gap-3 text-sm text-[#7D7D7D]">
<svg className="h-4.5 w-4.5 mt-0.5 text-[#C49B5A]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-6"></path><path d="M6 20V10"></path><path d="M18 20V4"></path></svg>
<span>Impact highlights &amp; donor stories</span>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-2xl overflow-hidden border border-[#1E2A35]/10 bg-white">
<div className="grid md:grid-cols-2">
<img alt="Community gathering" className="w-full h-64 md:h-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="p-6 sm:p-8 flex flex-col justify-center">
<blockquote className="text-[17px] leading-relaxed text-[#1E2A35] font-normal" style={{fontFamily: '\'Lato\', sans-serif'}}>
                    “Because of this community, our child sees learning as an adventure. Supporting NLS means supporting joyful, meaningful education.”
                  </blockquote>
<div className="mt-4 flex items-center gap-3">
<img alt="Donor portrait" className="h-9 w-9 rounded-full object-cover border border-white shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-normal">Alumni Family</div>
<div className="text-xs text-[#7D7D7D]">Donor Story</div>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm text-[#4A7C9A] hover:text-[#406F8A]" href="#stories">
                    Read more stories
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="instagram">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-end justify-between gap-6 mb-6">
<div>
<h3 className="text-3xl sm:text-4xl tracking-tight font-[600]" style={{fontFamily: '\'Playfair Display\', serif'}}>From the Island, in the Moment</h3>
<p className="mt-2 text-[#7D7D7D] text-sm sm:text-base font-light">A living snapshot from our community.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm hover:text-[#4A7C9A]" href="#">
            Follow on Instagram
            <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

<a className="group relative rounded-lg overflow-hidden bg-white border border-[#1E2A35]/10" href="#">
<img alt="Instagram moment 1" className="h-40 w-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E2A35]/30"></div>
<div className="absolute bottom-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90">
<svg className="h-4 w-4 text-[#1E2A35]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</div>
</a>
<a className="group relative rounded-lg overflow-hidden bg-white border border-[#1E2A35]/10" href="#">
<img alt="Instagram moment 2" className="h-40 w-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E2A35]/30"></div>
<div className="absolute bottom-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90">
<svg className="h-4 w-4 text-[#1E2A35]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</div>
</a>
<a className="group relative rounded-lg overflow-hidden bg-white border border-[#1E2A35]/10" href="#">
<img alt="Instagram moment 3" className="h-40 w-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E2A35]/30"></div>
<div className="absolute bottom-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90">
<svg className="h-4 w-4 text-[#1E2A35]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</div>
</a>
<a className="group relative rounded-lg overflow-hidden bg-white border border-[#1E2A35]/10" href="#">
<img alt="Instagram moment 4" className="h-40 w-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E2A35]/30"></div>
<div className="absolute bottom-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90">
<svg className="h-4 w-4 text-[#1E2A35]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</div>
</a>
<a className="group relative rounded-lg overflow-hidden bg-white border border-[#1E2A35]/10" href="#">
<img alt="Instagram moment 5" className="h-40 w-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E2A35]/30"></div>
<div className="absolute bottom-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90">
<svg className="h-4 w-4 text-[#1E2A35]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</div>
</a>
<a className="group relative rounded-lg overflow-hidden bg-white border border-[#1E2A35]/10" href="#">
<img alt="Instagram moment 6" className="h-40 w-full object-cover group-hover:scale-[1.03] transition-transform" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E2A35]/30"></div>
<div className="absolute bottom-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90">
<svg className="h-4 w-4 text-[#1E2A35]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="visit">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
<div className="rounded-2xl border border-[#1E2A35]/10 bg-white shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">
<div>
<h4 className="text-2xl tracking-tight font-[600]" style={{fontFamily: '\'Playfair Display\', serif'}}>Come see learning in motion</h4>
<p className="mt-1 text-sm text-[#7D7D7D]">Schedule a tour and experience the warmth of our classrooms and campus.</p>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#4A7C9A] text-white text-sm hover:bg-[#406F8A] transition-colors" href="#schedule">
              Schedule a Visit
              <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#1E2A35]/15 hover:border-[#1E2A35]/30 hover:bg-white transition-colors text-sm" href="#apply">
              Start an Application
              <svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 17 10-10"></path><path d="m8 7 9 0 0 9"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#1E2A35] text-[#F5F3EE] border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-4 gap-10">
<div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#F5F3EE] text-[#1E2A35] flex items-center justify-center font-semibold tracking-tight">NLS</div>
<div className="text-lg font-[600] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Nantucket Lighthouse School</div>
</div>
<p className="mt-4 text-sm text-[#F5F3EE]/80 font-light">1 Rugged Road, Nantucket, MA 02554</p>
<p className="text-sm text-[#F5F3EE]/80 font-light">T: (508) 228-0427</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><path d="M17.5 6.5h.01"></path></svg>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Email" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 8 8 8-8"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div>
<div className="text-sm uppercase tracking-wide text-[#F5F3EE]/60 mb-3">The School</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#C49B5A]" href="#mission">Mission &amp; Philosophy</a></li>
<li><a className="hover:text-[#C49B5A]" href="#faculty">Faculty &amp; Staff</a></li>
<li><a className="hover:text-[#C49B5A]" href="#campus">Campus &amp; Facilities</a></li>
<li><a className="hover:text-[#C49B5A]" href="#handbook">Parent Handbook</a></li>
<li><a className="hover:text-[#C49B5A]" href="#pals">PALS</a></li>
</ul>
</div>
<div>
<div className="text-sm uppercase tracking-wide text-[#F5F3EE]/60 mb-3">Programs</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#C49B5A]" href="#early">Early Childhood</a></li>
<li><a className="hover:text-[#C49B5A]" href="#elementary">Elementary (1–6)</a></li>
<li><a className="hover:text-[#C49B5A]" href="#extended">Extended Day</a></li>
<li><a className="hover:text-[#C49B5A]" href="#enrichment">Enrichment</a></li>
<li><a className="hover:text-[#C49B5A]" href="#camp">Camp Lighthouse</a></li>
</ul>
</div>
<div>
<div className="text-sm uppercase tracking-wide text-[#F5F3EE]/60 mb-3">Admissions &amp; Giving</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#C49B5A]" href="#apply">Apply</a></li>
<li><a className="hover:text-[#C49B5A]" href="#tuition">Tuition &amp; Aid</a></li>
<li><a className="hover:text-[#C49B5A]" href="#visit">Schedule a Visit</a></li>
<li><a className="hover:text-[#C49B5A]" href="#donate">Donate Online</a></li>
<li></li></ul></div></div></div></footer>
    </>
  );
}
