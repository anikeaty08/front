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



        // --- ADVANCED SCROLL OBSERVER ---
        const initScrollReveal = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // General Reveal
                        if(entry.target.classList.contains('reveal-up') || 
                           entry.target.classList.contains('reveal-fade') ||
                           entry.target.classList.contains('reveal-img') ||
                           entry.target.classList.contains('stagger-parent')) {
                            entry.target.classList.add('active');
                        }
                        
                        // Specific Line Drawing Logic
                        if(entry.target.id === 'itinerario') {
                            document.getElementById('timeline-line').classList.add('active');
                        }
                    }
                });
            }, {
                threshold: 0.15, 
                rootMargin: "0px 0px -80px 0px"
            });

            // Select all elements to animate
            document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-img, .stagger-parent, #itinerario').forEach(el => observer.observe(el));
        };

        // --- COUNTDOWN ---
        const targetDate = new Date("April 11, 2026 17:00:00").getTime();
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);
            
            if(document.getElementById("days")) {
                document.getElementById("days").innerText = d.toString().padStart(2, '0');
                document.getElementById("hours").innerText = h.toString().padStart(2, '0');
                document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
                document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
            }
        };

        // --- MUSIC ---
        let isPlaying = false;
        const audio = document.getElementById("bg-music");
        const icon = document.querySelector("#music-btn iconify-icon");

        function toggleMusic() {
            if (isPlaying) {
                audio.pause();
                icon.setAttribute("icon", "lucide:music");
                icon.classList.remove("text-stone-900");
                icon.parentElement.classList.remove("scale-105");
            } else {
                audio.play().catch(e => console.log("Audio needs user interaction first"));
                icon.setAttribute("icon", "lucide:pause");
                icon.classList.add("text-stone-900");
                icon.parentElement.classList.add("scale-105");
            }
            isPlaying = !isPlaying;
        }

        // --- INIT ---
        document.addEventListener('DOMContentLoaded', () => {
            initScrollReveal();
            setInterval(updateCountdown, 1000);
            updateCountdown();
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
      

<div className="bg-grain"></div>

<div className="fixed bottom-6 right-6 z-[60]">
<button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-stone-600 hover:text-stone-900 hover:scale-105 hover:shadow-lg transition-all duration-500 shadow-stone-200/50" id="music-btn" onclick="toggleMusic()">
<iconify-icon className="animate-pulse" icon="lucide:music" width="18"></iconify-icon>
</button>
<audio id="bg-music" loop="">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
</audio>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-500">
<div className="flex bg-[#78716c] h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="hover:text-stone-500 transition-colors text-xl text-slate-50 tracking-[0.15em] font-heading bg-[#78716c] border-[#ffffff] ring-slate-50" href="#">JOHN MARIE</a>

<div className="hidden md:flex gap-10 text-[11px] font-body uppercase tracking-[0.2em] text-stone-500 font-medium">
<a className="hover:text-stone-900 transition-colors group border-slate-50 ring-[#ffffff] pt-2 pb-2 relative bg-stone-500 lg:text-slate-50 md:text-slate-50" href="/home">HOME</a>
<a className="hover:text-stone-900 transition-colors group text-slate-50 pt-2 pb-2 relative" href="/#Event Details">LOCATION</a>
<a className="hover:text-stone-900 transition-colors group text-slate-50 pt-2 pb-2 relative" href="/#itinerary">ITINERARY</a>
<a className="hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-400/20 transition-all transform hover:-translate-y-0.5 duration-300 text-white bg-stone-800 rounded-sm pt-2 pr-6 pb-2 pl-6" href="/#rsvp">Confirm</a>
</div>

<button className="md:hidden text-stone-800" onclick="alert('Menu expands')">
<iconify-icon className="" height="24" icon="lucide:menu" style={{color: 'rgb(41, 37, 36)'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden w-full pt-20 relative items-center justify-center" id="inicio">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/30 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-stone-300/20 rounded-full blur-[120px]"></div>
</div>
<div className="z-10 flex flex-col text-center pr-6 pl-6 relative items-center">
<p className="reveal-up uppercase active text-sm text-stone-500 tracking-[0.4em] font-body mb-6">We are getting married</p>
<div className="reveal-up active">
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl text-stone-800 tracking-tight font-heading">JOHN <span className="block md:inline md:text-7xl align-middle transform -translate-y-2 font-thin italic text-stone-300">&amp;</span> MARIE</h1>
</div>
<div className="flex items-center justify-center gap-6 pt-10 reveal-up active">
<div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-400"></div>
<p className="md:text-xl text-sm font-light text-stone-600 tracking-[0.2em] font-body">18 . JUNE . 2026</p>
<div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-400"></div>
</div>

<div className="grid grid-cols-4 gap-10 md:gap-20 pt-20 reveal-up active">
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="days">50</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Días</span>
</div>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="hours">16</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Hrs</span>
</div>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="minutes">44</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Min</span>
</div>
<div className="text-center group cursor-default">
<span className="font-heading text-4xl md:text-5xl text-stone-800 block mb-2 transition-transform duration-500 group-hover:-translate-y-1" id="seconds">21</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 border-t border-stone-200 pt-2 block w-full">Seg</span>
</div>
</div>
</div>
<div className="absolute bottom-10 animate-bounce text-stone-400">
<iconify-icon className="" height="24" icon="lucide:chevron-down" style={{color: 'rgb(168, 162, 158)'}} width="24"></iconify-icon>
</div>
</section>

<section className="overflow-hidden w-full pt-0 pb-0 relative" id="historia">
</section>

<section className="bg-stone-100/50 pt-0 pr-4 pb-0 pl-4 relative" id="evento">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-stone-200 to-transparent"></div>
<div className="z-10 max-w-6xl mr-auto ml-auto relative space-y-20">
<div className="text-center reveal-up">
<span className="text-[10px] uppercase block font-bold text-stone-400 tracking-[0.4em] mb-3">Celebration</span>
<h3 className="text-4xl text-stone-800 font-heading">Event Details
</h3>
</div>
<div className="grid md:grid-cols-2 gap-8 gap-x-8 gap-y-8">

<div className="glass-panel group hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-700 reveal-up pt-12 pr-12 pb-12 pl-12 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-stone-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-10">
<div className="bg-white p-4 rounded-full text-stone-800 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:church" width="24"></iconify-icon>
</div>
<span className="bg-stone-200/50 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider text-stone-600 font-medium">17:00 Hrs</span>
</div>
<h4 className="text-2xl text-stone-800 font-heading mb-2">Religious Ceremony</h4>
<p className="uppercase text-xs font-medium text-stone-400 tracking-widest font-body mb-8">Our Lady of Lourdes Parish Church - Silang Junction North, Tagaytay City, Cavite</p>
<p className="leading-7 text-sm font-light text-stone-600 font-body border-stone-200 border-l-2 mb-10 pl-4">We will begin our union with a solemn ceremony. We kindly appreciate your punctuality for this sacred moment. </p>
<a className="inline-flex items-center gap-3 uppercase hover:text-stone-500 transition-colors group-hover:pl-2 duration-300 text-xs text-stone-800 tracking-widest bg-slate-50 pl-2" href="https://maps.app.goo.gl/R4FvCyTAVB1MN8g69">View Location</a>
</div>

<div className="glass-panel group hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-700 reveal-up pt-12 pr-12 pb-12 pl-12 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-stone-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-10">
<div className="bg-white p-4 rounded-full text-stone-800 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:wine" width="24"></iconify-icon>
</div>
<span className="bg-stone-200/50 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider text-stone-600 font-medium">18:30 Hrs</span>
</div>
<h4 className="text-2xl text-stone-800 font-heading mb-2">Reception &amp; CEREMONY</h4>
<p className="uppercase cursor-pointer text-xs font-medium text-stone-400 tracking-widest font-body mb-8" onclick="window.location.href='https://maps.app.goo.gl/x79KsZ9A866J72rL9'" role="button">Hillcreek Gardens Tagaytay</p>
<p className="leading-7 text-sm font-light text-stone-600 font-body border-stone-200 border-l-2 mb-10 pl-4">We will continue with a welcome cocktail in the gardens, followed by a formal dinner and dancing under the stars.
</p>
<a className="inline-flex items-center gap-3 uppercase hover:text-stone-500 transition-colors group-hover:pl-2 duration-300 text-xs text-stone-800 tracking-widest pl-2" href="https://maps.app.goo.gl/x79KsZ9A866J72rL9">View Location</a>
</div>
</div>
</div>
</section>

<section className="pt-20 pr-4 pb-20 pl-4 relative" id="itinerario">
<div className="max-w-2xl mr-auto ml-auto">
<div className="text-center mb-20 reveal-up">
<h3 className="text-4xl text-stone-800 font-heading mb-3">Itinerary</h3>
<p className="uppercase text-sm text-stone-400 tracking-[0.2em] font-body">Thursday 18th of june at 4pm</p>
</div>
<div className="relative">

<div className="absolute left-[19px] top-2 bottom-0 w-px bg-stone-200 h-full"></div>

<div className="absolute left-[19px] top-2 w-px bg-stone-800 draw-line" id="timeline-line"></div>
<div className="space-y-12 relative z-10">

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">17:00 hrs</span>
<h4 className="text-xl text-stone-800 font-heading">Religious Ceremony</h4>
<p className="text-sm font-light text-stone-500 font-body mt-2">The moment of “I do.”</p>
</div>
</div>

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">18:30 hrs</span>
<h4 className="text-xl text-stone-800 font-heading">Welcome Cocktail</h4>
<p className="text-sm font-light text-stone-500 font-body mt-2">Acoustic music and signature mixology.</p>
</div>
</div>

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">20:00 hrs</span>
<h4 className="text-xl text-stone-800 font-heading">Formal Dinner</h4>
<p className="text-sm font-light text-stone-500 font-body mt-2">4-Course Menu</p>
</div>
</div>

<div className="flex group stagger-parent reveal-up">
<div className="flex flex-col items-center mr-10 relative">
<div className="w-2.5 h-2.5 rounded-full border border-stone-800 bg-white z-10 mt-2 transition-transform duration-500 group-hover:scale-150 group-hover:bg-stone-800"></div>
</div>
<div className="pt-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">22:00 hrs</span>
<h4 className="text-xl text-stone-800 font-heading">ceremony</h4>
<p className="text-sm font-light text-stone-500 font-body mt-2">Let’s celebrate all night!</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y reveal-up bg-white border-stone-100 pt-20 pb-20" id="dresscode">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-block p-4 rounded-full bg-stone-50 border border-stone-200 mb-6">
<iconify-icon className="text-stone-600" height="24" icon="lucide:shirt" style={{color: 'rgb(87, 83, 78)'}} width="24"></iconify-icon>
</div>
<h3 className="text-3xl text-stone-800 font-heading mb-2">Dress Code</h3>
<p className="text-lg font-light text-stone-500 tracking-wide font-heading mb-12">Formal Attire Required</p>
<div className="flex flex-wrap justify-center gap-12 mb-12 stagger-parent active">
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 mx-auto rounded-full bg-[#1a1a1a] shadow-lg mb-4"></div>
<span className="text-[10px] uppercase font-medium text-stone-500 tracking-wider">Black</span>
</div>
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 mx-auto rounded-full bg-[#1e293b] shadow-lg mb-4"></div>
<span className="text-[10px] uppercase font-medium text-stone-500 tracking-wider">Midnight Blue</span>
</div>
<div className="stagger-child hover:-translate-y-2 transition-transform duration-300 text-center w-24">
<div className="bg-[#78716c] w-12 h-12 rounded-full mr-auto mb-4 ml-auto shadow-lg"></div>
<span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Taupe</span>
</div>
<div className="text-center w-24 stagger-child hover:-translate-y-2 transition-transform duration-300">
<div className="bg-[#e5e7eb] w-12 h-12 border-stone-200 border rounded-full mr-auto mb-4 ml-auto shadow-lg"></div>
<span className="text-[10px] uppercase font-medium text-stone-500 tracking-wider">Silver</span>
</div>
</div>
<p className="uppercase leading-6 text-xs italic text-stone-400 tracking-widest max-w-lg mr-auto ml-auto">We reserve the color white exclusively for the bride.</p>
</div>
</section>

<section className="pt-0 pr-6 pb-0 pl-6" id="hospedaje">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row gap-6 reveal-up mb-12 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="text-[10px] uppercase block font-bold text-stone-400 tracking-[0.3em] mb-2">COME &amp; JOIN US</span>
<h3 className="text-3xl text-stone-800 font-heading">WE CAN'T WAIT TO SAY "I DO"</h3>
</div>
<div className="w-full md:w-auto h-px bg-stone-200 flex-1 mx-8 hidden md:block"></div>
</div>
<div className="glass-panel rounded-none flex flex-col md:flex-row shadow-xl shadow-stone-200/40 reveal-up">
<div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden group">
<img alt="Hotel" className="transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87b340fc-6359-49f4-8294-cee1841cd71f_1600w.png"/>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[10px] uppercase tracking-wider text-stone-800 shadow-sm">Sede</div>
</div>
<div className="md:p-14 flex-1 flex flex-col bg-white pt-10 pr-10 pb-10 pl-10 justify-center">
<h4 className="text-2xl text-stone-800 font-heading mb-4">TO OUR FAMILY &amp; FRIENDS</h4>
<p className="leading-7 text-sm font-light text-stone-500 mb-8">With hearts full of love and gratitude, we are excited to share the beginning of our lifelong journey together. Your presence means the world to us, and we would be honored to have you celebrate this special day with us.

We look forward to creating beautiful memories together!</p>
<div className="grid grid-cols-2 gap-8 border-y border-stone-100 mb-10 pt-6 pb-6 gap-x-8 gap-y-8">
<div className="">
<span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider mb-1" id="rsvp">WITH LOVED</span>
<span className="hover:text-stone-900 transition-colors cursor-pointer decoration-stone-300 underline underline-offset-4 text-sm text-stone-600">JOHN &amp; MARIE</span>
</div>
</div>
<a className="uppercase hover:bg-stone-700 transition-all shadow-stone-400/20 text-xs text-white tracking-[0.15em] bg-stone-900 w-fit pt-4 pr-8 pb-4 pl-8 shadow-lg" href="/#RSVP">CONFIRM</a>
</div>
</div>
</div>
</section>

<section className="reveal-up pt-0 pr-6 pb-0 pl-6" id="regalos">
<div className="text-center max-w-2xl mr-auto ml-auto">
</div>
</section>

<section className="reveal-up pt-24 pr-6 pb-24 pl-6 relative" id="rsvp">
<div className="z-10 md:p-16 shadow-stone-300/20 bg-white max-w-xl border-stone-100 border mr-auto ml-auto pt-10 pr-10 pb-10 pl-10 relative shadow-2xl">
<div className="text-center mb-12">
<iconify-icon className="text-stone-400 mb-4" icon="lucide:mail-open" width="24"></iconify-icon>
<h3 className="uppercase text-5xl text-stone-800 tracking-widest font-heading">R.S.V.P.</h3>
<p className="uppercase text-xs font-medium text-stone-400 tracking-widest font-body mt-4">Please RSVP by March 1st.</p>
</div>
<form className="space-y-8">
<div className="space-y-3 group">
<label className="text-[10px] uppercase group-focus-within:text-stone-800 transition-colors font-bold text-stone-500 tracking-widest">Full Name</label>
<input className="focus:outline-none focus:border-stone-800 focus:bg-transparent transition-all placeholder-stone-400/50 text-sm text-stone-800 font-body bg-stone-50 w-full border-stone-200 border-b pt-3 pr-3 pb-3 pl-3" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div className="space-y-3">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Asistencia</label>
<div className="grid grid-cols-2 gap-5">
<label className="cursor-pointer hover:border-stone-400 transition-all flex items-center justify-center gap-3 group overflow-hidden bg-white border-stone-200 border pt-4 pr-4 pb-4 pl-4 relative">
<input className="accent-stone-900 scale-110 z-10" name="attendance" type="radio"/>
<span className="group-hover:text-stone-900 z-10 text-sm text-stone-600">Yes, I will attend</span>
</label>
<label className="cursor-pointer border border-stone-200 bg-white p-4 hover:border-stone-400 transition-all flex items-center justify-center gap-3 group">
<input className="accent-stone-900 scale-110" name="attendance" type="radio"/>
<span className="group-hover:text-stone-900 text-sm text-stone-600">I can’t make it</span>
</label>
</div>
</div>
<div className="space-y-3 group">
<label className="text-[10px] uppercase group-focus-within:text-stone-800 transition-colors font-bold text-stone-500 tracking-widest">Message (Opcional)</label>
<textarea className="focus:outline-none focus:border-stone-800 focus:bg-transparent transition-all placeholder-stone-400/50 resize-none text-sm text-stone-800 font-body bg-stone-50 w-full border-stone-200 border-b pt-3 pr-3 pb-3 pl-3" placeholder="Restricciones alimentarias..." rows="2"></textarea>
</div>
<button className="uppercase hover:bg-stone-800 transition-all transform hover:-translate-y-1 shadow-stone-400/20 text-xs font-bold text-white tracking-[0.2em] font-heading bg-stone-900 w-full mt-4 pt-5 pb-5 shadow-xl" type="submit">Send Confirmation</button>
</form>
</div>
</section>

<footer className="z-10 text-center bg-stone-100 border-stone-200 border-t pt-20 pb-20 relative">
<h2 className="uppercase text-2xl text-stone-800 tracking-[0.3em] font-heading mb-8">JOHN <span className="text-stone-400">&amp;</span> MARIE</h2>
<div className="flex justify-center gap-8 text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium mb-10">
<a className="hover:text-stone-900 transition-colors" href="#">HOME</a>
<a className="hover:text-stone-900 transition-colors" href="#">LOCATION</a>
<a className="hover:text-stone-900 transition-colors" href="#">ITINERARY</a>
</div>
<div className="text-[9px] text-stone-400 tracking-widest">DESIGNED WITH LOVE • 2026</div>
</footer>



    </>
  );
}
