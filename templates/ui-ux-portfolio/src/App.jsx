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



    document.getElementById('year').textContent = new Date().getFullYear();

    // Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ strokeWidth: 1.5 });
    });

    // Scroll animations
    (function () {
      if (!window.__inViewIO) {
        window.__inViewIO = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              window.__inViewIO.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
      }

      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        window.__inViewIO.observe(el);
      });
    })();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
      <div className="absolute top-0 w-full -z-10 h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/88317113-0fe5-42fc-8205-7f4c96819e7a_3840w.webp")'}}></div>
<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<div className="overflow-hidden relative">

<header className="z-20 relative" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-6 border-b border-white/[0.06]">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tight font-sans">Alex Chen</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition font-sans" href="#work">Work</a>
<a className="hover:text-white transition font-sans" href="#about">About</a>
<a className="hover:text-white transition font-sans" href="#process">Process</a>
<a className="hover:text-white transition font-sans" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/80 rounded-full px-4 py-2 ring-1 ring-white/[0.06] border-gradient before:rounded-full font-sans" href="#contact">
            Let's Talk
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="z-10 xl:mt-32 xl:mb-32 mt-32 mb-32 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex border-white/[0.06] border-gradient before:rounded-full bg-white/5 rounded-full mb-6 px-3 py-1.5 backdrop-blur gap-2 items-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<span className="text-xs text-white/70 font-sans">Available for select projects in 2025</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto drop-shadow-xl font-manrope font-semibold tracking-tighter" style={{animation: '0.5s ease-in-out 0.2s 1 normal both running fadeSlideIn'}}>
          Designing <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white font-manrope font-semibold tracking-tighter" style={{}}>digital experiences</span> that feel effortless
        </h1>
<p className="md:text-lg md:ml-auto md:mr-auto md:mt-32 text-base text-white/70 max-w-2xl mt-6 mr-auto ml-auto" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
          UI/UX Designer specializing in user research, interface design, and creating intuitive experiences for web and mobile applications.
        </p>
<div className="flex flex-col sm:flex-row max-w-xl mt-8 mx-auto w-full gap-3 items-center justify-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'}}>
<a className="inline-flex items-center gap-2 transition text-sm font-semibold text-black bg-emerald-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:bg-emerald-300 border-gradient before:rounded-full font-sans" href="#work">
            View Work
            <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3 border-gradient before:rounded-full font-sans" href="#contact">
            Download Resume
            <svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
<div className="flex text-xs text-white/60 mt-6 gap-4 items-center justify-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<span className="inline-flex items-center gap-1 text-emerald-300 font-sans">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
            5+ years experience
          </span>
<span className="inline-flex items-center gap-1 font-sans">
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            Awwwards Nominee
          </span>
<span className="inline-flex items-center gap-1 font-sans">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            San Francisco, CA
          </span>
</div>
</div>

</div></section>

<section className="z-10 relative mt-24 py-12 xl:py-24" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 items-start">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<span className="text-xs text-white/70 font-sans">About Me</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl animate-on-scroll font-manrope font-semibold tracking-tighter" style={{animation: '0.5s ease-in-out 0.2s 1 normal both running fadeSlideIn'}}>
              Crafting intuitive experiences through research and design
            </h2>
<p className="text-base md:text-lg text-white/70 max-w-xl mt-6 animate-on-scroll font-sans" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
              I'm a UI/UX designer passionate about solving complex problems through user-centered design. My approach combines deep user research with clean, functional interfaces that users love.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-3 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'}}>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-emerald-300/90 transition text-sm font-semibold text-black bg-emerald-400 rounded-full px-4 py-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-sans" href="#contact">
                Get in Touch
                <svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-4 py-2 font-sans" href="#">
                View Resume
                <svg className="lucide lucide-external-link w-4 h-4 text-white/70" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<div className="mt-10 grid grid-cols-2 gap-6 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<div className="flex gap-3 items-start">
<div className="flex border-gradient before:rounded-lg bg-white/5 w-9 h-9 rounded-lg items-center justify-center">
<svg className="lucide lucide-briefcase w-4 h-4 text-slate-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div>
<p className="text-2xl sm:text-3xl text-white font-manrope font-semibold tracking-tighter" style={{}}>50+</p>
<p className="text-xs text-white/60 font-sans">Projects Completed</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex border-gradient before:rounded-lg bg-white/5 w-9 h-9 rounded-lg items-center justify-center">
<svg className="lucide lucide-users w-4 h-4 text-slate-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-2xl sm:text-3xl text-white font-manrope font-semibold tracking-tighter" style={{}}>20+</p>
<p className="text-xs text-white/60 font-sans">Happy Clients</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.55s both'}}>
<div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5 backdrop-blur">
<img alt="Designer workspace" className="opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ddab06d9-9060-42a5-9052-32121aebd5c5_800w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-sans">User-Centered Design</p>
<p className="mt-1 text-xs text-white/70 font-sans">Research-driven solutions that solve real problems</p>
</div>
</div>
</div>
<div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5">
<img alt="Design mockups" className="opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bef2b047-9a6f-40c2-a946-114088b54c76_800w.webp"/>
<div className="absolute left-0 top-0 m-4 rounded-full bg-neutral-900/70 backdrop-blur px-3 py-1.5">
<span className="text-xs text-white/80 inline-flex items-center gap-1 font-sans">
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                    Creative
                  </span>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 border-gradient before:rounded-xl">
<p className="text-sm font-semibold text-white font-sans">Pixel-Perfect Execution</p>
<p className="mt-1 text-xs text-white/70 font-sans">Attention to detail in every interaction</p>
</div>
</div>
</div>
<div className="relative col-span-2 h-48 md:h-56 overflow-hidden rounded-2xl border-gradient before:rounded-2xl bg-white/5">
<img alt="Collaborative design" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c9aba15a-5e55-49f1-a01a-104873be4ce8_1600w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex border-gradient before:rounded-xl bg-neutral-900/70 rounded-xl px-4 py-3 backdrop-blur items-center justify-between">
<div>
<p className="text-sm font-semibold text-white font-sans">Collaborative Process</p>
<p className="mt-1 text-xs text-white/70 font-sans">Working closely with teams to bring ideas to life</p>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 xl:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp)] bg-cover mt-24 pt-12 pb-12 relative" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
<span className="text-[11px] uppercase text-white/60 tracking-wider font-sans">Skills &amp; Services</span>
</div>
<h2 className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-manrope font-semibold tracking-tighter" style={{}}>
            What I bring to your project
          </h2>
<p className="text-base md:text-lg text-white/70 mt-4 font-sans">
            A comprehensive approach to design that combines strategy, creativity, and technical expertise to deliver exceptional results.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-10">
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div className="flex border-gradient before:rounded-lg bg-white/5 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-compass w-6 h-6 text-emerald-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight font-sans">UX Research</h3>
<p className="mt-2 text-sm text-white/70 font-sans">User interviews, personas, journey mapping, and usability testing to inform design decisions.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">User Testing</span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Analytics</span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Wireframing</span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div className="flex border-gradient before:rounded-lg bg-white/5 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-layout w-6 h-6 text-emerald-400" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight font-sans">UI Design</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Crafting beautiful, intuitive interfaces with design systems and component libraries.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Figma</span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Prototyping</span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Design Systems</span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div className="flex border-gradient before:rounded-lg bg-white/5 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-smartphone w-6 h-6 text-emerald-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight font-sans">Product Design</h3>
<p className="mt-2 text-sm text-white/70 font-sans">End-to-end product design from concept to launch, for web and mobile applications.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Mobile Apps</span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">Web Apps</span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans">SaaS</span>
</div>
</div>
</div>
</div>
</section><section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="issue-tracking">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 items-start">

<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<svg className="lucide lucide-palette w-3.5 h-3.5 text-emerald-300" data-lucide="palette" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-xs text-white/70 font-sans">Recent Work</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-manrope font-semibold tracking-tighter animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
          Clean design that drives results
        </h2>
<p className="text-base md:text-lg text-white/70 mt-4 max-w-xl font-sans animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
          A selection of projects showcasing thoughtful user experiences, modern interfaces, and data-driven design decisions that help businesses grow.
        </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="flex border-gradient before:rounded-md bg-white/5 rounded-md w-8 h-8 items-center justify-center">
<svg className="lucide lucide-users w-4 h-4 text-emerald-300" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<span className="font-sans">User-centered approach</span>
</div>
<div className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="flex border-gradient before:rounded-md bg-white/5 rounded-md w-8 h-8 items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-emerald-300" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="font-sans">Modern aesthetics</span>
</div>
<div className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="flex border-gradient before:rounded-md bg-white/5 rounded-md w-8 h-8 items-center justify-center">
<svg className="lucide lucide-target w-4 h-4 text-emerald-300" data-lucide="target" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</span>
<span className="font-sans">Results-focused design</span>
</div>
<div className="inline-flex items-center gap-2 text-sm text-white/80">
<span className="flex border-gradient before:rounded-md bg-white/5 rounded-md w-8 h-8 items-center justify-center">
<svg className="lucide lucide-rocket w-4 h-4 text-emerald-300" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</span>
<span className="font-sans">Scalable solutions</span>
</div>
</div>
<div className="mt-8 text-[13px] text-white/60 flex items-center gap-2 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border-gradient before:rounded-full">
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</span>
          Each project is crafted with attention to user needs and business goals.
        </div>
<div className="mt-6 grid grid-cols-2 gap-8 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both'}}>
<div className="">
<p className="text-5xl sm:text-6xl font-manrope font-semibold tracking-tight text-white">98%</p>
<p className="text-xs text-white/60 mt-1 font-sans">Client satisfaction rate</p>
</div>
<div className="">
<p className="text-5xl sm:text-6xl font-manrope font-semibold tracking-tight text-white">50+</p>
<p className="text-xs text-white/60 mt-1 font-sans">Completed projects</p>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div className="grid md:grid-cols-2 gap-4">

<div className="rounded-2xl bg-white/5 border-gradient before:rounded-2xl p-3">
<div className="flex items-center justify-between px-2 py-1.5">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-300"></span>
<p className="text-sm font-medium text-white/90 font-sans">Mobile Apps</p>
<span className="text-xs text-white/60 font-sans">12</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
<div className="mt-2 space-y-3">

<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<div className="flex items-start justify-between">
<p className="text-sm text-white/90 font-sans">FinTech Banking App</p>
<svg className="lucide lucide-star w-3.5 h-3.5 text-emerald-300" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/70 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-emerald-300"></span> iOS
                  </span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans inline-flex items-center gap-1">
<svg className="lucide lucide-award w-3 h-3" data-lucide="award" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                    Featured
                  </span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<div className="flex items-start justify-between">
<p className="text-sm text-white/90 font-sans">Health &amp; Wellness Tracker</p>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/70 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-rose-400"></span> Healthcare
                  </span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans inline-flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    2024
                  </span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<div className="flex items-start justify-between">
<p className="text-sm text-white/90 font-sans">Social Media Platform UI</p>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans inline-flex items-center gap-1">
<svg className="lucide lucide-smartphone w-3 h-3" data-lucide="smartphone" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                    Mobile First
                  </span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 border-gradient before:rounded-2xl p-3">
<div className="flex items-center justify-between px-2 py-1.5">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-amber-300"></span>
<p className="text-sm font-medium text-white/90 font-sans">Web Projects</p>
<span className="text-xs text-white/60 font-sans">18</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
<div className="mt-2 space-y-3">
<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<div className="flex items-start justify-between">
<p className="text-sm text-white/90 font-sans">E-commerce Dashboard</p>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/70 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> SaaS
                  </span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans inline-flex items-center gap-1">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    Live
                  </span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<p className="text-sm text-white/90 font-sans">Agency Portfolio Site</p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/70 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-lime-300"></span> Creative
                  </span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-indigo-300"></span> Webflow
                  </span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<p className="text-sm text-white/90 font-sans">Real Estate Platform</p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/70 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-rose-400"></span> PropTech
                  </span>
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/60 font-sans inline-flex items-center gap-1">
<svg className="lucide lucide-briefcase w-3 h-3" data-lucide="briefcase" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                    B2B
                  </span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 backdrop-blur p-3 border-gradient before:rounded-xl">
<p className="text-sm text-white/90 font-sans">Learning Management System</p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/70 font-sans inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> EdTech
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-2xl bg-white/5 border-gradient before:rounded-2xl p-6">
<div className="grid gap-6 md:grid-cols-3">
<div className="md:col-span-2">
<p className="text-sm md:text-base text-white/80 leading-relaxed font-sans">"Alex delivered exceptional design work that exceeded our expectations. The attention to detail and user experience resulted in a 40% increase in engagement."</p>
<p className="text-xs text-white/50 mt-3 font-sans">Sarah Mitchell, Head of Product</p>
</div>
<div className="flex md:justify-end items-end">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border-gradient before:rounded-full">
<span className="h-2 w-2 rounded-full bg-emerald-300"></span>
<span className="text-xs text-white/70 font-sans">View full case study</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 md:mt-16 xl:mt-24 md:py-12 xl:py-24 mt-12 pt-8 pb-8 relative" id="principles">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<svg className="lucide lucide-lightbulb w-3.5 h-3.5 text-emerald-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-xs text-white/70 font-sans">Core Values</span>
</div>
<h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-xl font-manrope font-semibold tracking-tight">
        My design philosophy
      </h2>
<p className="text-sm sm:text-base md:text-lg text-white/70 mt-4 font-sans leading-relaxed">
        These principles shape every project I work on—from initial research through final delivery. They help me create meaningful, user-centered experiences that drive real results.
      </p>
</div>
<div className="mt-8 md:mt-10 rounded-xl md:rounded-2xl border-gradient before:rounded-xl md:before:rounded-2xl bg-white/5 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<ul className="divide-y divide-white/[0.06]">
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">01</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Launch fast, iterate faster</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Get working solutions in front of users quickly, gather feedback, and continuously improve based on real behavior.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">02</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Put users at the center</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Deep listening and observation come first—understand the real problem before designing any solution.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">03</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Set clear quality standards</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Define what success looks like upfront with concrete examples so everyone knows what we're building toward.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">04</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Work from principles, not rules</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Use flexible guidelines that adapt to context while maintaining consistency across every touchpoint.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">05</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Build for longevity</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Create solid foundations with design systems and accessible patterns that scale and evolve over time.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">06</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Stay focused on impact</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Cut unnecessary process and documentation—keep the team laser-focused on delivering value.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">07</span>
<p 60="" className="text-sm md:textCommunicate with clarity&lt;/p&gt; &lt;/div&gt; &lt;p class=" font-sans="" leading-relaxed"="" md:col-span-7="" sm:text-sm="" text-white="" text-xs="">Be direct and honest in feedback while always assuming good intentions from collaborators.</p>
</div></li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">08</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Keep teams lean</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Small, empowered teams move faster and adapt better—embrace versatility when it counts.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">09</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Collaborate with the best</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Talented partners elevate everyone's work and naturally attract more exceptional people to the team.</p>
</li>
<li className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
<div className="md:col-span-5 flex items-start md:items-center gap-3">
<span className="text-xs text-white/50 font-sans flex-shrink-0 mt-0.5 md:mt-0">10</span>
<p className="text-sm md:text-base text-white/90 font-sans font-medium">Design experiences people love</p>
</div>
<p className="md:col-span-7 text-xs sm:text-sm text-white/60 font-sans leading-relaxed">Build products that delight users so much they naturally become advocates and share with others.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17c99676-494f-499d-85cc-8ed2acc9dfb7_3840w.webp)] bg-cover mt-24 pt-12 pb-12 relative" id="contact">
<div className="mx-auto max-w-4xl px-6 lg:px-8">
<div className="rounded-3xl border-gradient before:rounded-3xl bg-white/5 p-8 md:p-12 backdrop-blur-xl text-center animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
<span className="text-xs text-white/70 font-sans">Let's Collaborate</span>
</div>
<h2 className="text-3xl md:text-5xl text-white mb-4 font-manrope font-semibold tracking-tighter" style={{}}>Have a project in mind?</h2>
<p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 font-sans">
            I'm currently available for select freelance projects. Let's discuss how we can work together to create something amazing.
          </p>
<div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-emerald-300/90 transition text-sm font-semibold text-black bg-emerald-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-sans" href="mailto:hello@alexchen.design">
              Send Email
              <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3 font-sans" href="#">
              Schedule a Call
              <svg className="lucide lucide-calendar w-4 h-4 text-white/70" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
<div className="flex items-center justify-center gap-4 mt-8 text-sm text-white/60">
<a className="hover:text-white transition inline-flex items-center gap-1 font-sans" href="https://linkedin.com">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
<a className="hover:text-white transition inline-flex items-center gap-1 font-sans" href="https://dribbble.com">
<svg className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
              Dribbble
            </a>
<a className="hover:text-white transition inline-flex items-center gap-1 font-sans" href="https://behance.net">
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
              Behance
            </a>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="border-white/[0.06] border-t mt-20 pt-10 pb-10">
<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
<p className="text-xs text-white/50 font-sans">© <span className="font-sans" id="year">2025</span> Alex Chen. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-white/60">
<a className="hover:text-white transition font-sans" href="#">Privacy</a>
<a className="hover:text-white transition font-sans" href="#">Terms</a>
<a className="hover:text-white transition font-sans" href="#">Accessibility</a>
</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
