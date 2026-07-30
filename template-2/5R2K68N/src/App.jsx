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



        // Time functionality
        (function () {
            const tz = 'America/New_York';
            const timeEl = document.getElementById('tz-time');

            function tick() {
                const now = new Date();
                const fmt = new Intl.DateTimeFormat('en-GB', { 
                    timeZone: tz, 
                    hour12: false, 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit' 
                });
                timeEl.textContent = fmt.format(now);
                setTimeout(tick, 1000);
            }

            tick();
        })();

        // Initialize Lucide icons
        lucide.createIcons();
    
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/waveform-gm8Mc7BoEALZZ8ggTHi5kSGc" width="100%"></iframe></div></div>
<section className="relative overflow-hidden">

<div className="relative">
<div className="flex w-full max-w-4xl mt-0 mr-auto ml-auto justify-center">
<div className="relative flex flex-col items-center">
<div className="h-24 w-7 mix-blend-multiply bg-neutral-700 rounded-b-md"></div>
<div className="-mt-1 h-6 w-12 rounded-md bg-neutral-900 shadow-lg shadow-neutral-900/20"></div>
<div className="-mt-2 h-3 w-8 rounded-b-xl bg-neutral-200 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.15)]"></div>
</div>
</div>
</div>

<div className="relative -mt-2 w-full max-w-4xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white border-neutral-200 rounded-[32px] mr-auto mb-12 ml-auto">
<div className="sm:p-8 md:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="flex gap-4 flex-wrap mb-8 items-center justify-between">
<div className="flex items-center gap-3 text-sm">
<div className="flex items-center gap-2 text-neutral-700">
<svg className="lucide lucide-map-pin h-4 w-4 text-neutral-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">Based in <span className="font-medium text-neutral-800 font-geist">New York</span> • Shooting Worldwide</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm">
<svg className="lucide lucide-globe h-4 w-4 text-neutral-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-neutral-700 font-geist">Local Time <span className="text-neutral-500" data-locked="true" id="tz-offset">(EST)</span></span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock h-4 w-4 text-neutral-400 hidden sm:block" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-mono text-xl sm:text-2xl tracking-tight text-neutral-900" id="tz-time">10:04:10</span>
</div>
</div>

<img alt="Brand identity materials" className="w-full h-full object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2abdb3e3-80b5-4dae-ba11-ff165a315c91_1600w.jpg" style={{}} /><h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-medium tracking-tight my-10">
                    I'm Sarah,<img alt="Sarah portrait" className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg" style={{}} /> a photographer capturing <img alt="Wedding couple" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-14 md:w-20 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://cdn.midjourney.com/82841a2a-4621-4e29-82a0-a8d587a765cc/0_0.png?w=800&q=80" style={{}} /> life's precious moments
                </h1>
<p className="max-w-2xl sm:text-lg text-base text-neutral-600 font-geist mt-4">
                    I specialize in wedding, portrait, and lifestyle photography that tells your unique story with authenticity and artistry.
                </p>

<div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-8">
<a className="group inline-flex items-center justify-center gap-3 shadow-indigo-600/20 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white font-geist bg-gradient-to-tr from-gray-900 to-black rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#contact">Book a Session
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
<a className="inline-flex items-center justify-center transition-colors hover:bg-neutral-100 text-base font-medium text-neutral-800 font-geist bg-neutral-100/60 border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#portfolio">View Portfolio</a>
</div>

<div className="flex text-sm bg-zinc-950/10 rounded-2xl mt-10 pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-neutral-200 px-2.5 py-1 text-xs text-neutral-700">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="font-geist">Booking Now</span>
</span>
<div className="hidden sm:flex items-center gap-2 text-neutral-600">
<svg className="lucide lucide-camera h-4 w-4 text-neutral-400" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="font-geist"><span className="font-medium text-neutral-800">Sarah Chen Photography</span> • NYC</span>
</div>
</div>
<a className="group inline-flex items-center gap-1.5 text-neutral-900" href="tel:+12125551234">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="font-geist tracking-tight text-lg sm:text-xl font-medium">(212) 555-1234</span>
</a>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 ring-1 ring-neutral-200 bg-white rounded-full px-3 py-1.5 text-neutral-800 transition-colors hover:text-indigo-600" href="mailto:hello@sarahchenphotography.com">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist font-medium">Contact</span>
</a>
</div>
</div>

<section className="mt-10">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(01) Recent Work</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Stories worth telling.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#work">
                            View All Photos
                            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Wedding ceremony" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/49b0ac3d-2cbd-437f-b90e-ecc988088fc0/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Wedding • Ceremony</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Emma & James</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Family portrait" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/524a521b-db59-4ded-aecf-253646a80d72/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Family • Portrait</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">The Johnsons</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a><a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Corporate event" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/44228acb-b357-4821-a090-cb342f303877/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Corporate • Events</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Tech Summit 2024</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Maternity shoot" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/cc6127c3-1915-4209-be59-8092cb87038d/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Maternity • Lifestyle</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Expecting Joy</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Engagement shoot" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/a6270a4c-c513-4fbb-92d1-068644d1407a/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Engagement • Outdoor</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Alex & Maria</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a><a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Branding project" className="h-64 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/e07289f5-2d8e-4d0f-8a02-4018a2762f52/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 pt-5 pr-5 pb-5 pl-5">
<p className="text-xs text-white/70 font-geist">Branding • Visual Identity</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Brand Studio</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Corporate headshots" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/2e78d06c-d602-4e00-9135-dfdf64fed7b3/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Corporate • Headshots</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Professional Series</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Newborn photography" className="h-48 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/2077ebf2-9576-47f8-b7c3-2cd08df78e60/0_0.png?w=800&q=80" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Newborn • Studio</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Baby Rosa</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a><a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Fashion editorial" className="h-64 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f87495d1-10d1-4ec6-9d06-68e52b825d20_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Editorial • Fashion</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Autumn Collection</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="#work">
                            View Full Gallery
                            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section><section className="mt-12">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(02) About</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Behind the lens.</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

<div className="lg:col-span-8">
<div className="relative overflow-hidden bg-white ring-1 ring-neutral-200 rounded-3xl shadow-sm">
<img alt="Sarah Chen at work" className="h-80 sm:h-96 w-full object-cover" src="https://cdn.midjourney.com/26957251-c518-41f9-b07c-022d19666ca2/0_0.png?w=800&q=80" />
<div className="p-6 sm:p-8">
<div className="prose prose-neutral max-w-none">
<p className="text-lg text-neutral-700 font-geist leading-relaxed mb-4">
                            With over eight years of experience capturing life's most precious moments, I believe that every photograph should tell a story worth remembering.
                        </p>
<p className="text-neutral-600 font-geist mb-4">
                            My journey into photography began during college when I discovered the power of freezing time through the lens. What started as a hobby quickly became my passion, and eventually, my calling. I've had the privilege of documenting hundreds of weddings, family milestones, and corporate events across New York and beyond.
                        </p>
<p className="text-neutral-600 font-geist">
                            My approach is rooted in authenticity and connection. I strive to create an environment where you feel comfortable being yourself, allowing genuine emotions and natural interactions to unfold. The result is imagery that feels timeless, honest, and uniquely yours.
                        </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">

<div className="ring-1 ring-neutral-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11h8"></path><path d="M7 16h12"></path><path d="M7 6h3"></path></svg>
<span className="font-geist">By the Numbers</span>
</div>
<div className="space-y-4">
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-900 font-geist">500+</p>
<p className="text-sm text-neutral-600 font-geist">Weddings Captured</p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-900 font-geist">8</p>
<p className="text-sm text-neutral-600 font-geist">Years Experience</p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-900 font-geist">15+</p>
<p className="text-sm text-neutral-600 font-geist">Countries Visited</p>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-3xl shadow-sm p-6">
<div className="flex items-center gap-2 text-white/80 text-xs mb-4">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="font-geist">Equipment</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Canon R5</span>
<span className="text-white/60 text-xs font-geist">Primary</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Canon R6 Mark II</span>
<span className="text-white/60 text-xs font-geist">Backup</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">70-200mm f/2.8</span>
<span className="text-white/60 text-xs font-geist">Telephoto</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">24-70mm f/2.8</span>
<span className="text-white/60 text-xs font-geist">Standard</span>
</div>
</div>
</div>

<div className="ring-1 ring-neutral-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
<span className="font-geist">Recognition</span>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-600 font-geist">Featured in  Magazine</p>
<p className="text-sm text-neutral-600 font-geist">Winner - NYC Wedding Awards 2023</p>
<p className="text-sm text-neutral-600 font-geist">Top 10 NYC Photographers - The Knot</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-12 pt-5 pr-5 pb-5 pl-5">

<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs">
<svg className="lucide lucide-camera h-3.5 w-3.5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="font-geist">Photography Services</span>
</div>
<div className="flex items-baseline gap-2">
<h2 className="sm:text-6xl md:text-7xl leading-[1.05] text-5xl text-white tracking-tight font-geist font-medium">Services.</h2>
</div>
</div>

<div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl mt-8 backdrop-blur-3xl">

<details className="group open:bg-white/5" open="">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(001)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Wedding Photography</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 flex items-start gap-4">
<div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
<img alt="Wedding preview" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=320&h=240&fit=crop" style={{}} />
</div>
<div className="">
<h3 className="text-white font-medium tracking-tight font-geist">Your perfect day, captured perfectly</h3>
<p className="text-neutral-300 text-sm mt-1 font-geist">Full-day wedding coverage including ceremony, reception, portraits, and candid moments that tell your unique love story.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="flex items-center justify-between">
<p className="text-white/80 text-xs font-geist">Includes</p>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">8-10 hours</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Online gallery</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Edited photos</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">USB drive</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Print release</span>
</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-amber-400 transition-colors font-geist" href="#">
                                                Book Consultation
                                                <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(002)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Portrait Sessions</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist">Individual, couple, family, and lifestyle portraits that capture your personality and connections in beautiful, natural settings.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(003)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Event Photography</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist">Corporate events, celebrations, and special occasions documented with professionalism and artistic flair.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(004)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Commercial Photography</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist">Professional headshots, product photography, and brand imagery that elevates your business presence.</p>
</div>
</details>
</div>
</div>
</div>
</section><section className="mt-20">
<div className="relative w-full max-w-4xl mr-auto ml-auto">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-7">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight font-geist">Sarah Chen Photography</h3>
<p className="text-white/60 text-sm font-geist">Capturing life's precious moments</p>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-white/80 text-sm font-geist">New York, NY • Available Worldwide</span>
</div>
<div className="flex items-center gap-3">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<a className="text-white/80 hover:text-white transition-colors text-sm font-geist" href="mailto:hello@sarahchenphotography.com">hello@sarahchenphotography.com</a>
</div>
<div className="flex items-center gap-3">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<a className="text-white/80 hover:text-white transition-colors text-sm font-geist" href="tel:+12125551234">(212) 555-1234</a>
</div>
</div>

<a className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 px-6 py-3 rounded-xl text-sm font-medium transition-colors font-geist" href="#contact">
                            Let's Work Together
                            <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="lg:col-span-5">
<div className="grid grid-cols-2 gap-8">

<div className="">
<h4 className="text-white font-medium mb-4 font-geist">Services</h4>
<ul className="space-y-2">
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#services">Wedding Photography</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#services">Portrait Sessions</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#services">Event Photography</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#services">Commercial Work</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 font-geist">Quick Links</h4>
<ul className="space-y-2">
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#portfolio">Portfolio</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#about">About</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#pricing">Investment</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#contact">Contact</a></li>
</ul>
</div>
</div>

<div className="mt-8">
<h4 className="text-white font-medium mb-4 font-geist">Follow Along</h4>
<div className="flex gap-3">
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37-2.5-1.87-2.5 1.87V4h5z"></path>
</svg>
</a>
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="m12 1 3 6 6 3-6 3-3 6-3-6-6-3 6-3z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 mt-10 pt-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-white/50 text-xs font-geist">© 2024 Sarah Chen Photography. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs">
<a className="text-white/50 hover:text-white/80 transition-colors font-geist" href="#">Privacy Policy</a>
<a className="text-white/50 hover:text-white/80 transition-colors font-geist" href="#">Terms of Service</a>
<a className="text-white/50 hover:text-white/80 transition-colors font-geist" href="#">Print Release</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</section>


    </>
  );
}
