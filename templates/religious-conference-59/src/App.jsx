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



        // Initialize Icons
        lucide.createIcons();

        // Chart.js - Line Chart for 'Registrations' card
        const ctx = document.getElementById('loadChart').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 60);
        gradient.addColorStop(0, 'rgba(238, 93, 81, 0.2)');
        gradient.addColorStop(1, 'rgba(238, 93, 81, 0.0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: [{
                    data: [12, 19, 15, 25, 22, 30, 35],
                    borderColor: '#EE5D51',
                    borderWidth: 2,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: {
                    x: { display: false },
                    y: { display: false, min: 0 }
                },
                layout: { padding: 0 }
            }
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
      

<div className="fixed top-0 w-full -z-10 h-screen overflow-hidden pointer-events-none">
<div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#EE5D51]/10 blur-3xl mix-blend-multiply"></div>
<div className="absolute top-1/2 -right-20 h-[500px] w-[500px] rounded-full bg-[#E5E0D8] blur-3xl mix-blend-multiply"></div>
<div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#EE5D51]/5 blur-3xl"></div>
</div>

<header className="sticky top-0 z-50 pt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex bg-[#F9F7F2]/80 border border-[#1A1A1A]/5 rounded-2xl py-3 px-6 shadow-xl shadow-[#1A1A1A]/5 backdrop-blur-md items-center justify-between transition-all duration-300">

<a className="font-serif-display text-2xl tracking-tighter text-[#1A1A1A] font-bold" href="#">
                IEC<span className="text-[#EE5D51]">.</span>
</a>

<nav className="hidden md:flex items-center gap-8 font-sans-ui text-xs uppercase tracking-[0.15em] text-[#5A5A5A]">
<a className="hover:text-[#EE5D51] transition-colors duration-300" href="#">Donate</a>
<a className="hover:text-[#EE5D51] transition-colors duration-300" href="#news">News</a>
<a className="hover:text-[#EE5D51] transition-colors duration-300" href="#about">About</a>
<a className="hover:text-[#EE5D51] transition-colors duration-300" href="#resources">Resources</a>
</nav>

<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-[#1A1A1A] px-5 py-2.5 text-xs font-sans-ui uppercase tracking-widest text-white hover:bg-[#EE5D51] transition-colors shadow-lg shadow-[#1A1A1A]/10" href="#join">
<span>Join Us</span>
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-20">

<section className="relative overflow-hidden group animate-fade-in bg-white/40 border border-[#1A1A1A]/5 rounded-[32px] shadow-2xl shadow-[#1A1A1A]/5 backdrop-blur-sm">
<div className="relative grid grid-cols-1 gap-12 sm:p-12 lg:grid-cols-12 lg:gap-16 pt-10 pb-10 px-6">

<div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-between animate-slide-in-left" style={{animationDelay: '0.2s'}}>
<div className="max-w-xl">

<div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#1A1A1A]/10 bg-[#F9F7F2]/80 px-4 py-1.5 text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#1A1A1A] backdrop-blur hover:bg-white transition-all duration-300 animate-bounce" style={{animation: 'gentleBounce 3s ease-in-out infinite'}}>
<span className="flex h-2 w-2 items-center justify-center rounded-full bg-[#EE5D51]">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#EE5D51] opacity-75"></span>
</span>
                            Sydney 2028
                            <span className="mx-1 h-3 w-[1px] bg-[#1A1A1A]/20"></span>
                            54th International Congress
                        </div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif-display font-medium tracking-tight text-[#1A1A1A] leading-[1.05] animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            A moment <br/>
<span className="italic text-[#EE5D51]">to believe.</span>
</h1>
<p className="mt-8 max-w-lg text-lg font-serif-body leading-relaxed text-[#2C2C2C]/70 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                            In 2028, Australia will host the global encounter with Jesus Christ in the Eucharist. Be renewed, be transformed, be sent.
                        </p>

<div className="flex flex-wrap gap-4 mt-10 items-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
<button className="flex items-center gap-3 bg-[#1A1A1A] text-white rounded-xl px-8 py-4 hover:bg-[#EE5D51] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg shadow-[#1A1A1A]/10 group">
<span className="font-sans-ui text-xs uppercase tracking-widest">Join the Movement</span>
<svg className="lucide lucide-heart group-hover:fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<button className="flex items-center gap-3 bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-xl px-8 py-4 hover:border-[#EE5D51] hover:text-[#EE5D51] transition-all duration-300 hover:-translate-y-1">
<svg className="lucide lucide-play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="font-sans-ui text-xs uppercase tracking-widest">Watch Film</span>
</button>
</div>
</div>

<div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 animate-fade-in-up" style={{animationDelay: '1s'}}>
<div className="rounded-2xl border border-[#1A1A1A]/5 bg-white/60 p-5 backdrop-blur hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group">
<div className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5A5A5A]">Pilgrims</div>
<div className="mt-1 text-2xl font-serif-display font-semibold text-[#1A1A1A] group-hover:text-[#EE5D51] transition-colors">100k+</div>
</div>
<div className="rounded-2xl border border-[#1A1A1A]/5 bg-white/60 p-5 backdrop-blur hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group">
<div className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5A5A5A]">Nations</div>
<div className="mt-1 text-2xl font-serif-display font-semibold text-[#1A1A1A] group-hover:text-[#EE5D51] transition-colors">75</div>
</div>
<div className="rounded-2xl border border-[#1A1A1A]/5 bg-white/60 p-5 backdrop-blur hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group">
<div className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5A5A5A]">Days Left</div>
<div className="mt-1 text-2xl font-serif-display font-semibold text-[#1A1A1A] group-hover:text-[#EE5D51] transition-colors">1,024</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 lg:col-span-6 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
<div className="relative h-full min-h-[500px] flex items-center justify-center">

<div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-[8px] border-white/40 shadow-2xl group z-10">
<img alt="Crowd" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] sepia-[10%]" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#EE5D51]/20 to-transparent mix-blend-overlay"></div>
</div>

<div className="absolute left-0 top-10 sm:-left-4 sm:top-12 animate-float w-64 z-20">
<div className="bg-white/90 border border-[#1A1A1A]/5 rounded-2xl p-4 shadow-xl backdrop-blur hover:scale-105 transition-transform duration-300 cursor-default">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#EE5D51]">Theme</span>
<svg className="lucide lucide-sun text-[#EE5D51]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="font-serif-display text-lg leading-tight text-[#1A1A1A]">"Source of Hope"</div>
<div className="mt-3 h-1 w-full bg-[#F9F7F2] rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[#EE5D51] rounded-full"></div>
</div>
</div>
</div>

<div className="absolute left-4 bottom-20 sm:-left-8 sm:bottom-24 animate-float-delayed z-20">
<div className="flex items-center gap-4 bg-white/90 border border-[#1A1A1A]/5 rounded-2xl p-4 shadow-xl backdrop-blur hover:scale-105 transition-transform duration-300 cursor-default">
<div className="relative w-12 h-12 flex items-center justify-center bg-[#F9F7F2] rounded-full border border-[#1A1A1A]/5">
<svg className="lucide lucide-map-pin text-[#1A1A1A]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<div className="font-serif-display text-lg text-[#1A1A1A]">Sydney</div>
<div className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5A5A5A]">Australia</div>
</div>
</div>
</div>

<div className="absolute right-0 top-16 sm:-right-8 animate-float-reverse w-56 z-20">
<div className="bg-white/90 border border-[#1A1A1A]/5 rounded-2xl p-4 shadow-xl backdrop-blur hover:scale-105 transition-transform duration-300 cursor-default">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5A5A5A]">Registrations</span>
<span className="text-xs font-bold text-[#EE5D51]">+12%</span>
</div>
<div className="relative h-12 w-full">
<canvas className="w-full h-full" id="loadChart"></canvas>
</div>
</div>
</div>

<div className="absolute right-6 bottom-10 sm:-right-6 sm:bottom-12 animate-float w-48 z-20">
<div className="bg-white/90 border border-[#1A1A1A]/5 rounded-2xl p-4 shadow-xl backdrop-blur hover:scale-105 transition-transform duration-300 cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#EE5D51]/10 flex items-center justify-center text-[#EE5D51]">
<svg className="lucide lucide-cross" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"></path></svg>
</div>
<span className="font-serif-body italic text-sm text-[#1A1A1A]">Faith &amp; Unity</span>
</div>
</div>
</div>
</div>
</div>

<div className="order-3 lg:col-span-12 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:p-6 bg-[#F9F7F2] border border-[#1A1A1A]/5 rounded-2xl mt-4 items-start justify-between hover:shadow-md transition-shadow">
<p className="max-w-3xl font-serif-body text-sm text-[#5A5A5A] italic">
                            "The Eucharist is the source and summit of the Christian life." — Lumen Gentium
                        </p>
<div className="flex items-center gap-3">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#EE5D51]">Sign up for updates</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white hover:bg-[#EE5D51] transition-colors">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white/40 max-w-7xl border border-[#1A1A1A]/5 rounded-[32px] mt-12 p-6 sm:p-10 shadow-2xl shadow-[#1A1A1A]/5 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:scale-[1.005]" id="about" style={{animation: 'fadeInUp 0.8s ease-out'}}>

<div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-[32px]">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent opacity-20"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#1A1A1A] to-transparent opacity-20"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-start">

<div className="flex flex-col justify-between min-h-full py-4 animate-slide-in-left">
<div>
<span className="text-xs font-sans-ui font-medium text-[#5A5A5A] uppercase tracking-[0.2em] block mb-4">Our Mission</span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1] text-[#1A1A1A] tracking-tight font-serif-display mb-8">
                            Ever ancient, <br/>
<span className="italic text-[#EE5D51]">ever new.</span>
</h2>

<div className="mt-12 relative border-t border-[#1A1A1A]/10 pt-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="group cursor-pointer">
<div className="flex items-center gap-2 mb-2 text-[#1A1A1A] group-hover:text-[#EE5D51] transition-colors">
<svg className="lucide lucide-plus w-3 h-3 group-hover:rotate-90 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-serif-display text-lg">Worship</span>
</div>
<p className="text-xs font-serif-body text-[#5A5A5A] leading-relaxed">Daily liturgy and adoration.</p>
</div>
<div className="group cursor-pointer">
<div className="flex items-center gap-2 mb-2 text-[#1A1A1A] group-hover:text-[#EE5D51] transition-colors">
<svg className="lucide lucide-plus w-3 h-3 group-hover:rotate-90 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-serif-display text-lg">Culture</span>
</div>
<p className="text-xs font-serif-body text-[#5A5A5A] leading-relaxed">Arts, music, and history.</p>
</div>
<div className="group cursor-pointer">
<div className="flex items-center gap-2 mb-2 text-[#1A1A1A] group-hover:text-[#EE5D51] transition-colors">
<svg className="lucide lucide-plus w-3 h-3 group-hover:rotate-90 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-serif-display text-lg">Service</span>
</div>
<p className="text-xs font-serif-body text-[#5A5A5A] leading-relaxed">Outreach to the city.</p>
</div>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-3 text-sm font-sans-ui uppercase tracking-widest text-[#1A1A1A] hover:text-[#EE5D51] transition-colors group" href="#">
<span>Read our history</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#1A1A1A]/20 group-hover:border-[#EE5D51] group-hover:bg-[#EE5D51] group-hover:text-white transition-all">
<svg className="lucide lucide-arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-4 animate-slide-in-right">

<div className="flex flex-col gap-4 mt-8">

<article className="relative overflow-hidden aspect-[4/5] rounded-2xl group cursor-pointer shadow-md">
<img alt="Prayer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%]" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] group-hover:bg-[#EE5D51] group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-book-open" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</span>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-white/80 block mb-1">Event</span>
<p className="text-white font-serif-display text-lg">Liturgical Acts</p>
</div>
</article>

<article className="relative overflow-hidden aspect-square rounded-2xl group cursor-pointer shadow-md">
<img alt="Youth" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%]" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] group-hover:bg-[#EE5D51] group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</span>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-white/80 block mb-1">Community</span>
<p className="text-white font-serif-display text-lg">Youth Festival</p>
</div>
</article>
</div>

<div className="flex flex-col gap-4">

<article className="relative overflow-hidden aspect-square rounded-2xl group cursor-pointer shadow-md">
<img alt="Speaker" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%]" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] group-hover:bg-[#EE5D51] group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-mic" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</span>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-white/80 block mb-1">Conference</span>
<p className="text-white font-serif-display text-lg">Speakers</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/5] rounded-2xl group cursor-pointer shadow-md">
<img alt="Sydney" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%]" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] group-hover:bg-[#EE5D51] group-hover:text-white transition-all duration-300">
<svg className="lucide lucide-map" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" x2="9" y1="3" y2="18"></line><line x1="15" x2="15" y1="6" y2="21"></line></svg>
</span>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-white/80 block mb-1">Venue</span>
<p className="text-white font-serif-display text-lg">Discover Sydney</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="mt-12 text-center">
<div className="inline-flex items-center gap-6 px-8 py-4 rounded-full border border-[#1A1A1A]/5 bg-white/60 backdrop-blur-sm">
<span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5A5A5A]">Supported by</span>
<div className="h-4 w-px bg-[#1A1A1A]/10"></div>
<span className="font-serif-display italic text-[#1A1A1A]/60">Archdiocese of Sydney</span>
<span className="font-serif-display italic text-[#1A1A1A]/60">ACBC</span>
<span className="font-serif-display italic text-[#1A1A1A]/60">Vatican</span>
</div>
</section>
</main>


    </>
  );
}
