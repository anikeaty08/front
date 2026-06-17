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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
welder: {
orange: '#FF5722', // Industrial Orange
dark: '#0A0A0A',   // Deep Black
steel: '#1F2937',  // Steel Gray
text: '#D1D5DB',   // Light Gray
}
}
}
}
}

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
      

<div className="noise-bg"></div>

<nav className="fixed w-full z-40 top-0 border-b bg-welder-dark/80 backdrop-blur-md border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg aria-hidden="true" className="iconify text-welder-orange text-3xl group-hover:rotate-12 transition-transform duration-300 iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="flex flex-col leading-none">
<span className="font-bold tracking-tighter text-lg uppercase text-white">Steady Fabbin</span>
<span className="text-xs text-gray-500 tracking-widest uppercase font-medium">Mobile Welding</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#reviews">Reviews</a>
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="hover:bg-welder-orange transition-all duration-300 px-5 py-2.5 rounded text-sm font-semibold tracking-tight flex items-center gap-2 bg-white text-black hover:text-white" href="tel:5551234567">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone-call" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Call Now
                </a>
</div>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l to-transparent pointer-events-none from-blue-900/10"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-welder-orange/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-welder-orange/30 bg-welder-orange/10 text-welder-orange text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Available for dispatch
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Mobile Welding <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-welder-orange to-orange-200">Done Right.</span>
</h1>
<p className="text-lg max-w-lg leading-relaxed font-light text-gray-400">
                    On time, every time. Expert fabrication and repair service brought directly to your job site or home. No excuses, just results.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-welder-orange px-8 py-4 rounded text-sm font-semibold tracking-tight transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] text-white hover:bg-orange-600" href="tel:5551234567">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Call Now
                    </a>
<a className="border px-8 py-4 rounded text-sm font-semibold tracking-tight transition-all flex items-center justify-center gap-2 backdrop-blur-sm bg-white/5 border-white/10 text-white hover:bg-white/10" href="#contact">
                        Get a Fast Quote
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="pt-4 flex items-center gap-4 text-sm text-gray-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold bg-gray-800 border-gray-900 text-white">J</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold bg-gray-700 border-gray-900 text-white">M</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold bg-gray-600 border-gray-900 text-white">D</div>
</div>
<p>Trusted by local pros</p>
</div>
</div>

<div className="relative hidden lg:block h-[500px] w-full bg-gradient-to-br rounded-2xl border overflow-hidden group from-gray-800 to-black border-white/10">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" className="iconify text-welder-orange iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="font-bold text-xl tracking-tight text-white">Certified &amp; Insured</span>
</div>
<p className="text-sm text-gray-400">Professional grade equipment for any metal: Steel, Aluminum, Stainless.</p>
</div>
</div>
</div>
</header>

<section className="py-20 border-y bg-neutral-900/50 border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border p-8 rounded-xl hover:border-welder-orange/30 transition-colors group bg-black/40 border-white/5">
<div className="w-12 h-12 bg-welder-orange/10 rounded-lg flex items-center justify-center mb-6 text-welder-orange group-hover:bg-welder-orange group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">On Time, Every Time</h3>
<p className="text-sm leading-relaxed text-gray-400">We respect your schedule. If we say 8:00 AM, we are there at 7:55 AM ready to spark up.</p>
</div>

<div className="border p-8 rounded-xl hover:border-welder-orange/30 transition-colors group bg-black/40 border-white/5">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">Clear Communication</h3>
<p className="text-sm leading-relaxed text-gray-400">No ghosting. You get clear quotes, timeline updates, and honest answers immediately.</p>
</div>

<div className="border p-8 rounded-xl hover:border-welder-orange/30 transition-colors group bg-black/40 border-white/5">
<div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:badge-dollar-sign" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"></path></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-white">Fair, Upfront Pricing</h3>
<p className="text-sm leading-relaxed text-gray-400">High quality work without the surprise fees. You'll know exactly what you're paying for.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Mastery in Metal</h2>
<p className="max-w-lg text-gray-400">Full-service mobile fabrication unit equipped to handle repairs, structural work, and custom modifications on-site.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-welder-orange transition-colors text-sm font-semibold mt-4 md:mt-0 hover:text-white" href="#contact">
                    View Service Area <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative overflow-hidden rounded-lg border p-6 transition-all bg-neutral-900 border-white/5 hover:border-white/20">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-welder-orange/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<svg aria-hidden="true" className="iconify mb-6 iconify--lucide text-gray-300" data-icon="lucide:wrench" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-semibold text-lg tracking-tight mb-2 text-white">Heavy Equipment Repair</h4>
<ul className="text-sm space-y-2 text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Bucket repairs</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Boom cracks</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Hardfacing</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-lg border p-6 transition-all bg-neutral-900 border-white/5 hover:border-white/20">
<svg aria-hidden="true" className="iconify mb-6 iconify--lucide text-gray-300" data-icon="lucide:construction" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="1" width="20" x="2" y="6"></rect><path d="M17 14v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8"></path></g></svg>
<h4 className="font-semibold text-lg tracking-tight mb-2 text-white">Structural Welding</h4>
<ul className="text-sm space-y-2 text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Beams &amp; columns</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Decking</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>On-site fabrication</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-lg border p-6 transition-all bg-neutral-900 border-white/5 hover:border-white/20">
<svg aria-hidden="true" className="iconify mb-6 iconify--lucide text-gray-300" data-icon="lucide:truck" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
<h4 className="font-semibold text-lg tracking-tight mb-2 text-white">Truck &amp; Trailer</h4>
<ul className="text-sm space-y-2 text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Frame repair</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Hinge replacement</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Custom racks</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-lg border p-6 transition-all bg-neutral-900 border-white/5 hover:border-white/20">
<svg aria-hidden="true" className="iconify mb-6 iconify--lucide text-gray-300" data-icon="lucide:home" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<h4 className="font-semibold text-lg tracking-tight mb-2 text-white">Residential</h4>
<ul className="text-sm space-y-2 text-gray-400">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Gate repair</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Railing installs</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-welder-orange rounded-full"></span>Custom furniture</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-1 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide text-yellow-400" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide text-yellow-400" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide text-yellow-400" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide text-yellow-400" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide text-yellow-400" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Real Words from Real Clients</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-welder-dark p-8 rounded-xl border relative border-white/5">
<svg aria-hidden="true" className="iconify absolute top-6 right-6 iconify--lucide text-white/10" data-icon="lucide:quote" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="italic mb-6 relative z-10 text-gray-300">"10/10 experience overall. Great communication from the start… was on time."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center text-xs font-bold border from-gray-700 to-gray-800 text-white border-white/10">JD</div>
<div>
<p className="text-sm font-semibold text-white">Jason D.</p>
<p className="text-xs text-gray-500">Google Review</p>
</div>
</div>
</div>

<div className="bg-welder-dark p-8 rounded-xl border relative border-white/5">
<svg aria-hidden="true" className="iconify absolute top-6 right-6 iconify--lucide text-white/10" data-icon="lucide:quote" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="italic mb-6 relative z-10 text-gray-300">"Prompt, communicated well, quality work, fair price. 5 stars."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center text-xs font-bold border from-gray-700 to-gray-800 text-white border-white/10">MK</div>
<div>
<p className="text-sm font-semibold text-white">Mike K.</p>
<p className="text-xs text-gray-500">Google Review</p>
</div>
</div>
</div>

<div className="bg-welder-dark p-8 rounded-xl border relative border-white/5">
<svg aria-hidden="true" className="iconify absolute top-6 right-6 iconify--lucide text-white/10" data-icon="lucide:quote" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="italic mb-6 relative z-10 text-gray-300">"Kept to his word… very professional… in and out in less than ten minutes."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center text-xs font-bold border from-gray-700 to-gray-800 text-white border-white/10">SR</div>
<div>
<p className="text-sm font-semibold text-white">Sarah R.</p>
<p className="text-xs text-gray-500">Google Review</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -inset-4 bg-welder-orange/20 rounded-xl blur-lg"></div>

<div className="relative rounded-xl overflow-hidden aspect-[4/5] border bg-neutral-800 border-white/10">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/80"></div>
<img alt="Welder at work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<p className="font-bold text-lg text-white">The Steady Standard</p>
<p className="text-welder-orange text-sm font-medium">Precision. Strength. Integrity.</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Built on Blue-Collar Excellence.</h2>
<div className="space-y-6 text-lg font-light leading-relaxed text-gray-400">
<p>
                        At <span className="font-medium text-white">Steady Fabbin</span>, we don't believe in cutting corners. Welding isn't just about melting metal; it's about structural integrity and safety.
                    </p>
<p>
                        We built this business because we saw a gap in the market: reliability. Too many contractors don't pick up the phone. We do. Too many show up late. We're early.
                    </p>
<p>
                        Whether it's a cracked bucket on an excavator that's costing you downtime, or a custom gate for your driveway, we bring the shop to you with fully equipped mobile units.
                    </p>
</div>
<div className="mt-8 flex gap-6">
<div className="flex flex-col">
<span className="text-2xl font-bold text-white">100+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Projects</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-white">24h</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Response</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-white">100%</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Guaranteed</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-neutral-900" id="contact">
<div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-welder-orange/5 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="border rounded-2xl p-8 md:p-12 shadow-2xl bg-black border-white/10">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-white">Ready to get to work?</h2>
<p className="text-gray-400">Fill out the form below or call us directly. We respond fast.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</label>
<input className="w-full border rounded px-4 py-3 focus:outline-none focus:border-welder-orange focus:ring-1 focus:ring-welder-orange transition-all placeholder-gray-600 bg-neutral-900 border-neutral-800 text-white" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
<input className="focus:outline-none focus:border-welder-orange focus:ring-1 focus:ring-welder-orange transition-all placeholder-gray-600 w-full border rounded pt-3 pr-4 pb-3 pl-4 text-white bg-neutral-900 border-neutral-800" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service Needed</label>
<select className="w-full border rounded px-4 py-3 focus:outline-none focus:border-welder-orange focus:ring-1 focus:ring-welder-orange transition-all bg-neutral-900 border-neutral-800 text-gray-300">
<option>General Welding / Repair</option>
<option>Heavy Equipment</option>
<option>Structural</option>
<option>Custom Fabrication</option>
<option>Emergency Service</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Project Details</label>
<textarea className="w-full border rounded px-4 py-3 focus:outline-none focus:border-welder-orange focus:ring-1 focus:ring-welder-orange transition-all placeholder-gray-600 bg-neutral-900 border-neutral-800 text-white" placeholder="Briefly describe what you need done..." rows="4"></textarea>
</div>
<button className="w-full font-bold py-4 rounded hover:bg-welder-orange transition-all duration-300 tracking-tight text-lg shadow-lg bg-white text-black hover:text-white">
                        Request Quote
                    </button>
</form>
<div className="mt-8 text-center pt-8 border-t border-white/5">
<p className="text-gray-500 text-sm mb-2">Prefer to talk?</p>
<a className="text-2xl font-bold hover:text-welder-orange transition-colors tracking-tight text-white" href="tel:5551234567">
                        (555) 123-4567
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 bg-black border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-welder-orange iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold tracking-tight uppercase text-white">Steady Fabbin</span>
</div>
<p className="text-sm text-gray-600">© 2023 Steady Fabbin Mobile Welding. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors text-gray-600 hover:text-white" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="transition-colors text-gray-600 hover:text-white" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full z-50 backdrop-blur-lg border-t p-4 pb-6 bg-neutral-900/90 border-white/10">
<div className="grid grid-cols-2 gap-4">
<a className="bg-welder-orange flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm shadow-lg text-white" href="tel:5551234567">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone-call" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Call Now
            </a>
<a className="flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm shadow-lg bg-white text-black" href="#contact">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                Quote
            </a>
</div>
</div>

    </>
  );
}
