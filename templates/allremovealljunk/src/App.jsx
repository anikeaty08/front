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



      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // Optional: Stop observing once revealed
            }
          });
        }, observerOptions);

        const elementsToReveal = document.querySelectorAll('.reveal');
        elementsToReveal.forEach(el => observer.observe(el));
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

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-zinc-200/80 bg-white/80 transition-all duration-500 reveal active">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group hover:opacity-80 transition-opacity" href="#">
<div className="flex bg-center font-semibold tracking-tighter w-8 h-8 bg-cover rounded-lg items-center justify-center text-white bg-slate-900 shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d54bfaf8-af2a-4eea-8531-5f883dbb75e6_320w.png)]"></div>
<span className="text-lg font-semibold tracking-tight font-google-sans-flex relative overflow-hidden group">
<span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">All Remove All Junk</span>
<span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-zinc-600">All Remove All Junk</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="transition-all duration-300 hover:text-zinc-900 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-zinc-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#services">
            Services
          </a>
<a className="transition-all duration-300 hover:text-zinc-900 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-zinc-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#process">
            How it Works
          </a>
<a className="transition-all duration-300 hover:text-zinc-900 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-zinc-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#about">
            About
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium transition-all duration-300 text-zinc-900 hover:text-zinc-600 hover:scale-105" href="tel:7144993245">
            (714) 499-3245
          </a>
<a className="group relative overflow-hidden text-xs md:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 text-white bg-slate-900 hover:-translate-y-0.5 active:translate-y-0" href="#contact">
<span className="relative z-10">Free Estimate</span>
<div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-zinc-700/50"></div>
</a>
</div>
</div>
</nav>

<header className="overflow-hidden md:pt-48 md:pb-32 group pt-28 pr-6 pb-20 pl-6 relative">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10 animate-breathe opacity-80">
<iframe className="scale-105 transition-transform duration-[20s] ease-linear" frameborder="0" height="100%" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe>
</div>

<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 animate-pulse"></div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 border-zinc-200 bg-white/50 text-zinc-600 backdrop-blur-sm transition-all hover:bg-white hover:border-zinc-300 hover:scale-105 hover:shadow-sm cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
          Serving Residential &amp; Commercial Clients in Santa Ana
        </div>
<h1 className="reveal delay-200 md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight mb-6 text-zinc-900 cursor-default">
<span className="inline-block hover:scale-[1.02] transition-transform duration-500 origin-bottom">Ready to</span>
<span className="inline-block hover:scale-[1.02] transition-transform duration-500 origin-bottom">get rid of</span>
<span className="inline-block hover:scale-[1.02] transition-transform duration-500 origin-bottom bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">the clutter?</span>
</h1>
<p className="reveal delay-300 text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal animate-float-slow">
          We handle the heavy lifting, hauling, and proper disposal so you can
          reclaim your space without stress. No job is too big or too small.
        </p>
<div className="reveal delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative w-full sm:w-auto h-12 px-8 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300 text-white bg-slate-900 hover:bg-zinc-800 hover:shadow-lg hover:shadow-slate-900/25 hover:-translate-y-1 overflow-hidden" href="tel:7144993245">
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="group-hover:rotate-12 transition-transform duration-300" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="relative">(714) 499-3245</span>
</a>
<a className="group w-full sm:w-auto border h-12 px-8 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300 border-zinc-200 text-zinc-900 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-md hover:-translate-y-1" href="#services">
<span>View Services</span>
<iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<div className="max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6 reveal delay-200">
<div className="aspect-[21/9] overflow-hidden bg-zinc-100 w-full border-zinc-200 border rounded-3xl relative group shadow-sm hover:shadow-xl transition-all duration-700">

<img alt="Clean organized garage space" className="object-cover w-full h-full opacity-90 grayscale-[20%] transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64fcdccc-94b8-479e-baec-88caf87b8a76_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-zinc-800 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<span className="flex items-center gap-2">
<iconify-icon className="text-yellow-500 animate-spin-slow" icon="solar:star-linear"></iconify-icon>
                Rated #1 in Santa Ana
            </span>
</div>
</div>
</div>

<section className="border-y border-zinc-100 relative overflow-hidden" id="services">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-50/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="md:text-4xl text-3xl font-semibold text-zinc-900 tracking-tight mb-4 hover:tracking-normal transition-all duration-700">
              Our Services
            </h2>
<p className="text-zinc-500 max-w-md animate-float-slow">
              Whether you are clearing out a home or managing a commercial
              property, we haul it all away.
            </p>
</div>
<div className="flex gap-2 p-1 rounded-lg bg-zinc-100 transition-transform hover:scale-105 duration-300">
<button className="px-4 py-1.5 shadow-sm rounded-md text-sm font-medium bg-white text-zinc-900 transition-all hover:shadow-md">
              Residential
            </button>
<button className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              Commercial
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 group p-8 rounded-2xl border transition-all duration-500 card-3d border-zinc-200 bg-zinc-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 scale-150 pointer-events-none">
<iconify-icon icon="solar:trash-bin-trash-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border-zinc-200 text-zinc-900 bg-white group-hover:shadow-md">
<iconify-icon className="group-hover:animate-shake" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
              General Junk Removal
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
              Fast removal of household clutter, trash, and unwanted items from
              any room in your house.
            </p>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl border transition-all duration-500 card-3d border-zinc-200 bg-zinc-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 scale-150 pointer-events-none">
<iconify-icon icon="solar:box-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border-zinc-200 text-zinc-900 bg-white group-hover:shadow-md">
<iconify-icon className="group-hover:animate-bounce" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
              Garage Cleanouts
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
              Reclaim your parking space. We clear out boxes, old tools, stored
              furniture, and general debris.
            </p>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl border transition-all duration-500 card-3d border-zinc-200 bg-zinc-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 scale-150 pointer-events-none">
<iconify-icon icon="solar:sofa-2-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border-zinc-200 text-zinc-900 bg-white group-hover:shadow-md">
<iconify-icon icon="solar:sofa-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
              Furniture &amp; Mattresses
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
              Heavy lifting included. We take couches, tables, beds, mattresses,
              and bulky items.
            </p>
</div>

<div className="reveal delay-100 group p-8 rounded-2xl border transition-all duration-500 card-3d border-zinc-200 bg-zinc-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 scale-150 pointer-events-none">
<iconify-icon icon="solar:washing-machine-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border-zinc-200 text-zinc-900 bg-white group-hover:shadow-md">
<iconify-icon className="group-hover:animate-pulse" icon="solar:washing-machine-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
              Appliance Removal
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
              Safe disconnection and removal of old washers, dryers,
              refrigerators, and stoves.
            </p>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl border transition-all duration-500 card-3d border-zinc-200 bg-zinc-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 scale-150 pointer-events-none">
<iconify-icon icon="solar:leaf-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border-zinc-200 text-zinc-900 bg-white group-hover:shadow-md">
<iconify-icon className="group-hover:text-green-600 transition-colors" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
              Yard Debris Removal
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
              We haul away branches, storm debris, fencing, and other yard waste
              (we do not mow/landscape).
            </p>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl border transition-all duration-500 lg:col-span-1 card-3d border-zinc-200 bg-zinc-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 scale-150 pointer-events-none">
<iconify-icon icon="solar:buildings-2-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border-zinc-200 text-zinc-900 bg-white group-hover:shadow-md">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
              Commercial &amp; Estate
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
              Office cleanouts, retail spaces, warehouse clearing, foreclosure
              cleanouts, and construction debris.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="md:text-4xl text-3xl font-semibold text-zinc-900 tracking-tight mb-4 animate-float-slow">
            How It Works
          </h2>
<p className="text-zinc-500">
            Simple, transparent, and stress-free service.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-200 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
<style>
                  @keyframes shimmer { 100% { transform: translateX(100%); } }
              </style>
</div>

<div className="reveal delay-100 relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 border rounded-full flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white border-zinc-200 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-400 group-hover:shadow-xl">
<iconify-icon className="text-zinc-800 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" icon="solar:chat-round-call-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:text-zinc-700 transition-colors">
              1. Get a Free Estimate
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs group-hover:text-zinc-600 transition-colors">
              Call us at (714) 499-3245. Describe your junk, and we'll give you
              an honest, upfront estimate.
            </p>
</div>

<div className="reveal delay-300 relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 border rounded-full flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white border-zinc-200 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-400 group-hover:shadow-xl">
<iconify-icon className="text-zinc-800 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110" icon="solar:calendar-date-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:text-zinc-700 transition-colors">
              2. Schedule Pickup
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs group-hover:text-zinc-600 transition-colors">
              We schedule a time that works for you. Weekly and bi-weekly
              service options are available.
            </p>
</div>

<div className="reveal delay-500 relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 border rounded-full flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white border-zinc-200 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-400 group-hover:shadow-xl">
<iconify-icon className="text-zinc-800 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" icon="solar:delivery-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-zinc-900 group-hover:text-zinc-700 transition-colors">
              3. Junk Gone
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs group-hover:text-zinc-600 transition-colors">
              Our team arrives, loads the truck, sweeps up, and hauls it away.
              You don't lift a finger.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 text-zinc-300 bg-slate-900 overflow-hidden relative" id="about">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700/50 via-slate-900 to-slate-900 animate-pulse"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal delay-100">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white hover:text-zinc-100 transition-colors cursor-default">
            Local, Honest, Hardworking.
          </h2>
<div className="space-y-6 text-lg font-light leading-relaxed">
<p className="hover:text-white transition-colors duration-300">
              All Remove All Junk is a locally owned service committed to helping
              our neighbors reclaim their space. We aren't a big corporate
              franchise; we are a dedicated team that values integrity and
              speed.
            </p>
<p className="hover:text-white transition-colors duration-300">
              We respect your property, whether it's a family home or a place of
              business. Our goal is simple: to make the clutter disappear so you
              can move forward, hassle-free.
            </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex items-center gap-3 group">
<iconify-icon className="text-white group-hover:scale-125 group-hover:text-green-400 transition-all" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white group-hover:translate-x-1 transition-transform">Free Estimates</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-white group-hover:scale-125 group-hover:text-green-400 transition-all" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white group-hover:translate-x-1 transition-transform">
                Weekly Service Available
              </span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-white group-hover:scale-125 group-hover:text-green-400 transition-all" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white group-hover:translate-x-1 transition-transform">No Hidden Fees</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-white group-hover:scale-125 group-hover:text-green-400 transition-all" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white group-hover:translate-x-1 transition-transform">
                Eco-Friendly Disposal
              </span>
</div>
</div>
</div>
<div className="reveal delay-300 relative h-96 w-full rounded-2xl overflow-hidden border bg-zinc-800 border-zinc-700 group">
<img alt="Junk removal team working" className="opacity-60 w-full h-full object-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fdde2c2-3a3f-440f-bc67-466600675184_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md rounded-lg border bg-zinc-950/60 border-zinc-800 transition-all duration-500 hover:bg-zinc-950/80 hover:scale-[1.02] hover:shadow-2xl translate-y-2 group-hover:translate-y-0">
<p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
              "All Remove All Junk cleared out my entire garage in under two hours.
              Highly recommended!"
            </p>
<p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Sarah M., Santa Ana Resident
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-zinc-100 bg-zinc-50/50" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center reveal">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-zinc-900 mb-4 animate-float-slow">What Our Clients Say</h2>
<p className="text-zinc-500 max-w-lg mx-auto">Don't just take our word for it. Here's what your neighbors are saying about our service.</p>
</div>

<div className="relative flex flex-col gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

<div className="flex w-max hover:[animation-play-state:paused] animate-scroll-x gap-6 pr-6">

<div className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"Absolutely fantastic service. They showed up exactly on time and completely cleared out years of accumulated junk in my backyard in just a few hours. Will use again!"</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-medium text-sm">MR</div>
<div>
<p className="text-sm font-medium text-zinc-900">Michael R.</p>
<p className="text-xs text-zinc-500">Santa Ana, CA</p>
</div>
</div>
</div>
<div className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"Professional, fast, and completely honest pricing. They removed a massive old sectional sofa and handled the tight staircase without leaving a single scratch on the walls."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">JS</div>
<div>
<p className="text-sm font-medium text-zinc-900">Jessica S.</p>
<p className="text-xs text-zinc-500">Irvine, CA</p>
</div>
</div>
</div>
<div className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"The best junk removal experience I've had. I called them on a Tuesday afternoon, and the construction debris was completely gone by Wednesday morning. Very efficient."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">DL</div>
<div>
<p className="text-sm font-medium text-zinc-900">David L.</p>
<p className="text-xs text-zinc-500">Tustin, CA</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"Absolutely fantastic service. They showed up exactly on time and completely cleared out years of accumulated junk in my backyard in just a few hours. Will use again!"</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-medium text-sm">MR</div>
<div>
<p className="text-sm font-medium text-zinc-900">Michael R.</p>
<p className="text-xs text-zinc-500">Santa Ana, CA</p>
</div>
</div>
</div>
<div aria-hidden="true" className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"Professional, fast, and completely honest pricing. They removed a massive old sectional sofa and handled the tight staircase without leaving a single scratch on the walls."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">JS</div>
<div>
<p className="text-sm font-medium text-zinc-900">Jessica S.</p>
<p className="text-xs text-zinc-500">Irvine, CA</p>
</div>
</div>
</div>
<div aria-hidden="true" className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"The best junk removal experience I've had. I called them on a Tuesday afternoon, and the construction debris was completely gone by Wednesday morning. Very efficient."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">DL</div>
<div>
<p className="text-sm font-medium text-zinc-900">David L.</p>
<p className="text-xs text-zinc-500">Tustin, CA</p>
</div>
</div>
</div>
</div>

<div className="flex w-max hover:[animation-play-state:paused] animate-scroll-x-reverse gap-6 pr-6">

<div className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"I was absolutely dreading the post-renovation cleanup, but this team made it seamless. They even swept up perfectly afterwards. Highly recommend their services."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">KP</div>
<div>
<p className="text-sm font-medium text-zinc-900">Karen P.</p>
<p className="text-xs text-zinc-500">Costa Mesa, CA</p>
</div>
</div>
</div>
<div className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"Great communication from start to finish. Showed up right on time, quoted a very fair price, and handled the heavy lifting of appliances with absolute ease."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-medium text-sm">TG</div>
<div>
<p className="text-sm font-medium text-zinc-900">Thomas G.</p>
<p className="text-xs text-zinc-500">Santa Ana, CA</p>
</div>
</div>
</div>
<div className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"We use them for all our commercial properties. Reliable weekly service, clear communication, and no hidden fees on the invoices. A fantastic local business partner."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">AM</div>
<div>
<p className="text-sm font-medium text-zinc-900">Amanda M.</p>
<p className="text-xs text-zinc-500">Orange, CA</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"I was absolutely dreading the post-renovation cleanup, but this team made it seamless. They even swept up perfectly afterwards. Highly recommend their services."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">KP</div>
<div>
<p className="text-sm font-medium text-zinc-900">Karen P.</p>
<p className="text-xs text-zinc-500">Costa Mesa, CA</p>
</div>
</div>
</div>
<div aria-hidden="true" className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"Great communication from start to finish. Showed up right on time, quoted a very fair price, and handled the heavy lifting of appliances with absolute ease."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-medium text-sm">TG</div>
<div>
<p className="text-sm font-medium text-zinc-900">Thomas G.</p>
<p className="text-xs text-zinc-500">Santa Ana, CA</p>
</div>
</div>
</div>
<div aria-hidden="true" className="w-80 md:w-96 shrink-0 p-6 rounded-2xl border border-zinc-200 bg-white card-3d flex flex-col gap-4">
<div className="flex gap-1 text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed flex-grow">"We use them for all our commercial properties. Reliable weekly service, clear communication, and no hidden fees on the invoices. A fantastic local business partner."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 font-medium text-sm">AM</div>
<div>
<p className="text-sm font-medium text-zinc-900">Amanda M.</p>
<p className="text-xs text-zinc-500">Orange, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="border rounded-3xl p-8 md:p-12 text-center bg-zinc-50 border-zinc-200 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:border-zinc-300 group relative overflow-hidden">

<div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-float"></div>
<div className="absolute -bottom-24 -right-24 w-48 h-48 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-float-slow"></div>
<div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 text-white bg-slate-900 group-hover:scale-110 transition-transform duration-300">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-20 bg-slate-900"></span>
<iconify-icon className="relative group-hover:animate-tada" icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-zinc-900 group-hover:tracking-normal transition-all duration-500">
            Ready to clear the clutter?
          </h2>
<p className="text-zinc-500 mb-10 max-w-lg mx-auto group-hover:text-zinc-600 transition-colors">
            Contact us today for a free estimate. Fast response times and
            reliable service guaranteed.
          </p>
<div className="flex flex-col items-center gap-4 relative z-10">
<a className="text-3xl md:text-5xl font-bold tracking-tight transition-all duration-300 text-zinc-900 hover:text-zinc-700 hover:scale-110 hover:tracking-normal inline-block origin-center" href="tel:7144993245">
              (714) 499-3245
            </a>
<a className="inline-flex items-center justify-center h-12 px-10 rounded-full font-medium transition-all text-white hover:bg-zinc-800 gap-2 mt-2 bg-slate-900 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg hover:shadow-slate-900/25 ring-offset-2 focus:ring-2 ring-slate-900" href="tel:7144993245">
<iconify-icon className="animate-pulse" icon="solar:phone-calling-linear" width="20"></iconify-icon>
              Call Now
            </a>
<a className="group flex items-center gap-2 mt-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-300" href="mailto:allremuvejunk409@gmail.com">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:letter-linear" width="18"></iconify-icon>
<span className="font-medium text-sm">allremuvejunk409@gmail.com</span>
</a>

<div className="mt-8 w-full max-w-lg mx-auto bg-white/80 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-6 shadow-sm text-left relative overflow-hidden">
<div className="flex items-start gap-3 mb-4">
<div className="p-2 rounded-lg bg-zinc-100 text-zinc-600">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Hours of Operation</h3>
<p className="text-xs text-zinc-500 mt-1">We’re open and ready to serve you during the following hours:</p>
</div>
</div>
<div className="space-y-2 text-sm">
<div className="flex justify-between items-center pb-2 border-b border-zinc-100/80">
<span className="text-zinc-500">Monday – Friday</span>
<span className="font-medium text-zinc-900">6:00 AM – 6:00 PM</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-zinc-100/80">
<span className="text-zinc-500">Saturday</span>
<span className="font-medium text-zinc-900">8:00 AM – 3:00 PM</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">Sunday</span>
<span className="font-medium text-zinc-900">8:00 AM – 3:00 PM</span>
</div>
</div>

<div className="mt-4 pt-4 border-t border-zinc-100">
<p className="text-xs text-zinc-500 flex items-center justify-center gap-1.5 mb-3 font-medium">
<iconify-icon className="text-zinc-700" icon="solar:map-point-linear" width="14"></iconify-icon>
                        1106 S Pacific Ave, Santa Ana, CA 92704
                    </p>
<div className="w-full h-56 rounded-xl overflow-hidden border border-zinc-200 relative group/map">
<iframe allowfullscreen="" className="grayscale-[20%] group-hover/map:grayscale-0 transition-all duration-700 ease-in-out" frameborder="0" height="100%" loading="lazy" src="https://maps.google.com/maps?q=1106%20S%20Pacific%20Ave,%20Santa%20Ana,%20CA%2092704&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 border-zinc-200 bg-white relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="flex text-xs font-semibold text-white bg-slate-900 w-6 h-6 bg-cover bg-center rounded-md items-center justify-center transition-transform duration-500 group-hover:rotate-180 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d54bfaf8-af2a-4eea-8531-5f883dbb75e6_320w.png)]"></div>
<span className="font-semibold text-sm text-zinc-900 transition-all duration-300 group-hover:tracking-widest">
              All Remove All Junk
            </span>
</div>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="mailto:allremuvejunk409@gmail.com">
            allremuvejunk409@gmail.com
          </a>
</div>
<div className="flex gap-4">
<a aria-label="Facebook" className="group flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all hover:bg-white hover:text-[#1877F2] hover:border-[#1877F2]/20 hover:scale-110 shadow-sm" href="#">
<iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
<a aria-label="TikTok" className="group flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all hover:bg-white hover:text-black hover:border-black/20 hover:scale-110 shadow-sm" href="#">
<iconify-icon icon="ri:tiktok-fill" width="20"></iconify-icon>
</a>
</div>
<div className="text-sm text-zinc-500 text-center md:text-right">
<p className="hover:text-zinc-900 transition-colors">© 2024 All Remove All Junk. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
