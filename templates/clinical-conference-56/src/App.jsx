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
      



<div className="min-h-screen flex flex-col relative pb-24" id="page-1">

<header className="bg-[#1E1B4B] text-white/90 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">GU</span>
<span className="text-xs bg-white/10 px-2 py-0.5 rounded-full border border-white/20 tracking-wide">NAAC A++</span>
</div>
<nav className="hidden md:flex gap-5 font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">University</a>
<a className="hover:text-white transition-colors" href="#">Student</a>
<a className="hover:text-white transition-colors" href="#">Departments</a>
<a className="hover:text-white transition-colors" href="#">Research</a>
<a className="text-white" href="#">Happenings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hover:text-white transition-colors p-1"><iconify-icon className="text-lg" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
<button className="flex items-center gap-2 hover:text-white transition-colors"><iconify-icon className="text-lg" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="hidden sm:inline">Sign In</span></button>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 w-full">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Happenings</h1>
<div className="flex space-x-1 border-b border-slate-200 overflow-x-auto hide-scrollbar">
<button className="px-5 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap">News</button>
<button className="relative px-5 py-2.5 text-sm font-medium text-[#1E1B4B] whitespace-nowrap">
                    Events
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1E1B4B] rounded-t-full"></div>
<div className="absolute inset-0 bg-slate-100/50 rounded-t-lg -z-10"></div>
</button>
<button className="px-5 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap">Circular</button>
<button className="px-5 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap">Gallery</button>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Active Events</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"><iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"><iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden" href="#page-2">
<div className="relative aspect-video overflow-hidden bg-slate-100">
<img alt="AI Conference" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 shadow-sm">Upcoming</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-3">Intl. Conference on Emerging Issues in AI &amp; Cyber Security</h3>
<div className="mt-auto flex flex-col gap-2 text-sm text-slate-500">
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:calendar-linear"></iconify-icon> Oct 12–14, 2025</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Science Block A</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-purple-100 transition-all duration-300 cursor-pointer overflow-hidden relative" href="#page-2">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>
<div className="relative aspect-video overflow-hidden bg-slate-100 z-10">
<img alt="Embryology" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 to-transparent mix-blend-overlay"></div>
<div className="absolute top-3 left-3 bg-purple-600 text-white px-2.5 py-1 rounded-md text-xs font-medium shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Registration Open
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow z-10">
<h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-3">3rd Annual Convention for Clinical Embryology &amp; ART</h3>
<div className="mt-auto flex flex-col gap-2 text-sm text-slate-500">
<div className="flex items-center gap-2"><iconify-icon className="text-purple-400" icon="solar:calendar-linear"></iconify-icon> March 8–10, 2026</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Main Auditorium</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden" href="#page-2">
<div className="relative aspect-video overflow-hidden bg-slate-100">
<div className="w-full h-full bg-gradient-to-br from-indigo-100 to-pink-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
<iconify-icon className="text-4xl text-indigo-300" icon="solar:music-notes-linear"></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-3">Mosaic 3.0 – Intercollege Cultural Fest</h3>
<div className="mt-auto flex flex-col gap-2 text-sm text-slate-500">
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:calendar-linear"></iconify-icon> April 20–22, 2026</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> University Grounds</div>
</div>
</div>
</a>
</div>
</main>

<div className="mt-24 border-t border-dashed border-slate-300 pt-8 text-center text-xs text-slate-400 font-mono">SCROLL DOWN TO VIEW INDIVIDUAL EVENT PAGE</div>
</div>



<div className="min-h-screen bg-white" id="page-2">

<section className="relative w-full overflow-hidden bg-[#1E1B4B] pt-24 pb-32 lg:pt-32 lg:pb-40 animate-gradient-x bg-gradient-to-br from-[#1E1B4B] via-[#2E1065] to-[#1E1B4B]">

<div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] via-transparent to-transparent"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none animate-float" style={{animationDelay: '2s'}}></div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 text-xs text-purple-200 uppercase tracking-widest font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                    ACCA 2026
                </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-4 leading-tight">
<span className="block text-2xl md:text-3xl font-medium text-slate-300 tracking-tight mb-2">3rd Annual Convention for</span>
                    Clinical Embryology <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">&amp; ART</span>
</h1>
<p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl font-light">
                    Join leading global experts to explore precision AI-driven embryology, advanced cryopreservation, and the future of reproductive medicine.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-200 mb-10">
<div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-lg text-pink-300" icon="solar:calendar-linear"></iconify-icon> March 8–10, 2026
                    </div>
<div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-lg text-pink-300" icon="solar:map-point-linear"></iconify-icon> Gujarat University, Ahmedabad
                    </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm shadow-lg shadow-purple-900/50 hover:shadow-purple-900/80 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" href="#page-3">
<span className="relative z-10">Register Now</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</a>
<button className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-medium text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                        Download Brochure <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="w-full bg-gradient-to-r from-purple-900 to-[#1E1B4B] border-y border-purple-800/50 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between relative z-10">
<div className="text-sm font-medium text-purple-100 tracking-wide flex items-center gap-3 mb-2 sm:mb-0">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
</span>
                    REGISTRATION OPEN NOW
                </div>
<div className="flex items-center gap-4 text-white font-mono text-sm">
<div className="flex flex-col items-center"><span className="font-semibold text-lg leading-none">42</span><span className="text-[10px] text-purple-300">DAYS</span></div><span className="text-purple-500">:</span>
<div className="flex flex-col items-center"><span className="font-semibold text-lg leading-none">14</span><span className="text-[10px] text-purple-300">HRS</span></div><span className="text-purple-500">:</span>
<div className="flex flex-col items-center"><span className="font-semibold text-lg leading-none">30</span><span className="text-[10px] text-purple-300">MIN</span></div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Convention Themes</h2>
<p className="mt-4 text-slate-500 text-sm max-w-2xl mx-auto">Exploring the frontiers of reproductive science through specialized tracks focused on innovation, ethics, and clinical excellence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-transparent hover:border-pink-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-100 transition-all">
<iconify-icon className="text-2xl text-purple-600" icon="solar:dna-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 tracking-tight leading-snug">Precision ART &amp; AI-driven Embryology</h3>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-transparent hover:border-pink-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-pink-100 transition-all">
<iconify-icon className="text-2xl text-pink-600" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 tracking-tight leading-snug">Reproductive &amp; Environmental Impacts</h3>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-transparent hover:border-pink-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-indigo-100 transition-all">
<iconify-icon className="text-2xl text-indigo-600" icon="solar:test-tube-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 tracking-tight leading-snug">Pharmacological Innovations in Infertility</h3>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-transparent hover:border-pink-200 hover:shadow-lg transition-all duration-300 group lg:col-start-2">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
<iconify-icon className="text-2xl text-blue-600" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 tracking-tight leading-snug">Advanced Embryo Culture &amp; Cryopreservation</h3>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-transparent hover:border-pink-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-teal-100 transition-all">
<iconify-icon className="text-2xl text-teal-600" icon="solar:document-medicine-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 tracking-tight leading-snug">Clinical Challenges &amp; Policy in Modern Medicine</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-xs font-semibold tracking-widest text-purple-600 uppercase mb-2">Renowned Experts</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Who is Speaking</h3>
</div>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">View All Speakers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Dr. Sarah Jenkins" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#1E1B4B] transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Dr. Sarah Jenkins</h4>
<p className="text-xs text-slate-500 mt-1">Chief Embryologist, London Fertility Centre</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Prof. Alan Chen" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#1E1B4B] transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Prof. Alan Chen</h4>
<p className="text-xs text-slate-500 mt-1">Director of ART Research, Stanford Univ.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Dr. Maya Patel" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#1E1B4B] transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Dr. Maya Patel</h4>
<p className="text-xs text-slate-500 mt-1">Head of Genetics, Gujarat Medical</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Dr. Elena Rostova" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#1E1B4B] transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
</div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Dr. Elena Rostova</h4>
<p className="text-xs text-slate-500 mt-1">Pioneer in Vitrification, Swiss Med Inst.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMzBsNjAgME0zMCAwbDAgNjAiLz48L2c+PC9zdmc+')]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Pre-Conference Workshops</h2>
<p className="mt-2 text-slate-400 text-sm">March 7, 2026 • Hands-on training sessions</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
<iconify-icon className="text-3xl text-purple-300 mb-6" icon="solar:dropper-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Oocyte Vitrification</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Master the latest protocols in ultra-rapid cooling. This intensive session covers setup, handling, and troubleshooting for optimal survival rates.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-white transition-colors" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
<iconify-icon className="text-3xl text-blue-300 mb-6" icon="solar:microscope-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Andrology: Male Infertility</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Advanced semen analysis, sperm DNA fragmentation techniques, and preparation methods for complex cases including severe oligozoospermia.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-white transition-colors" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Registration Fees</h2>
<p className="mt-4 text-slate-500 text-sm">Secure your spot for the premier embryology event of the year.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-slate-500 text-sm font-medium mb-4">Students</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-2xl font-medium text-slate-400">₹</span>
<span className="text-4xl font-semibold tracking-tight text-slate-900">1250</span>
</div>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Full conference access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Delegate kit</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> E-certificate</li>
</ul>
<a className="block w-full py-2.5 px-4 text-center rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors" href="#page-3">Book Now</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl shadow-purple-900/5 border-2 border-purple-100 md:scale-105 relative transform z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm">RECOMMENDED</div>
<div className="text-purple-600 text-sm font-medium mb-4">Professionals</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-2xl font-medium text-slate-400">₹</span>
<span className="text-4xl font-semibold tracking-tight text-slate-900">2500</span>
<span className="text-xs text-slate-400 ml-1">/ med/clinical</span>
</div>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> All Student benefits</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Gala Dinner access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> CME Credits applied</li>
</ul>
<a className="block w-full py-2.5 px-4 text-center rounded-lg bg-[#1E1B4B] text-white font-medium text-sm hover:bg-purple-900 transition-colors shadow-md" href="#page-3">Book Now</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-slate-500 text-sm font-medium mb-4">Foreign Delegates</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-2xl font-medium text-slate-400">$</span>
<span className="text-4xl font-semibold tracking-tight text-slate-900">250</span>
</div>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Full access &amp; Gala</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Visa assistance letter</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> VIP Lounge access</li>
</ul>
<a className="block w-full py-2.5 px-4 text-center rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors" href="#page-3">Book Now</a>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">Supported By Industry Leaders</h3>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="text-xl font-semibold tracking-tighter text-slate-800">MED<span className="text-blue-600">TECH</span></div>
<div className="text-xl font-semibold tracking-tight text-slate-800">BioGenetics INC</div>
<div className="text-xl font-semibold tracking-tighter text-slate-800">IVF<span className="font-light">Solutions</span></div>
<div className="text-xl font-bold tracking-tighter text-slate-800 italic">CryoSystems</div>
</div>
</div>
</section>

<footer className="bg-[#0B0A1A] text-slate-400 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="text-xl font-semibold tracking-tighter text-white mb-4">ACCA 2026</div>
<p className="text-sm text-slate-500 max-w-sm mb-6">Organized by the Department of Biological &amp; Forensic Sciences (DBFS), Gujarat University.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><iconify-icon icon="solar:mailbox-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-purple-400 transition-colors" href="#">Schedule</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Speakers</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Abstract Submission</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Accommodation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>Gujarat University</li>
<li>Navrangpura, Ahmedabad</li>
<li>Gujarat 380009, India</li>
<li className="pt-2 text-purple-400">acca2026@gujaratuniversity.ac.in</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-xs text-slate-600 flex flex-col sm:flex-row justify-between items-center">
<p>© 2026 Gujarat University. All rights reserved.</p>
<div className="flex gap-4 mt-2 sm:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

<div className="mt-12 border-t border-dashed border-slate-300 pt-8 text-center text-xs text-slate-400 font-mono pb-24 bg-slate-50">SCROLL DOWN TO VIEW REGISTRATION FORM</div>
</div>



<div className="min-h-screen bg-slate-50 flex flex-col" id="page-3">

<header className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-[#1E1B4B]">GU</span>
</div>
<div className="text-sm font-medium text-slate-500">
<span className="hover:text-slate-900 cursor-pointer">Home</span> <span className="mx-2 text-slate-300">/</span> <span className="text-slate-900">Registration</span>
</div>
</div>
</header>

<main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-100/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10 relative z-10">
<div className="text-center mb-10">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Delegate Registration</h1>
<p className="text-sm text-slate-500">ACCA 2026 • March 8–10, 2026</p>
</div>
<form className="space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">You are registering as</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 outline-none transition-colors">
<option>Student</option>
<option>Medical/Clinical Professional</option>
<option>Foreign Delegate</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Apply for</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 outline-none transition-colors">
<option>Conference Only</option>
<option>Workshop Only</option>
<option>Both (Conference + Workshop)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<hr className="border-slate-100"/>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">

<div className="relative z-0 w-full group">
<input className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" id="first_name" name="first_name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="first_name">First Name</label>
</div>
<div className="relative z-0 w-full group">
<input className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" id="last_name" name="last_name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="last_name">Last Name</label>
</div>
<div className="relative z-0 w-full group sm:col-span-2">
<input className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Address</label>
</div>
<div className="relative z-0 w-full group sm:col-span-2">
<input className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" id="phone" name="phone" placeholder=" " required="" type="tel"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="phone">Contact Number</label>
</div>
</div>

<div className="flex items-end gap-4">
<div className="relative z-0 flex-grow group">
<input className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" id="captcha" name="captcha" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="captcha">Enter Captcha</label>
</div>
<div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
<span className="font-mono font-medium tracking-widest text-slate-600 text-sm line-through decoration-slate-400">8Xv2P</span>
<button className="text-slate-400 hover:text-purple-600 transition-colors p-1" type="button"><iconify-icon icon="solar:refresh-linear"></iconify-icon></button>
</div>
</div>

<div className="pt-4">
<button className="w-full text-white bg-gradient-to-r from-[#1E1B4B] to-purple-800 hover:from-purple-900 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-xl text-sm px-5 py-3.5 text-center shadow-lg shadow-purple-900/20 transition-all duration-300 flex justify-center items-center gap-2" type="button">
                            Submit Registration <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
<div className="mt-8 text-center">
<p className="text-xs text-slate-500">If you already have an account, <a className="font-medium text-purple-600 hover:text-purple-500 underline decoration-purple-200 underline-offset-4 transition-colors" href="#">Sign In</a></p>
</div>
</div>
</main>
</div>

    </>
  );
}
