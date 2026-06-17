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



        document.getElementById("year").textContent = new Date().getFullYear();
      
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/feb96480-8d50-42ee-a5d5-492ae3318964_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<header className="sticky top-0 z-50 border-b border-black/5 bg-[#FBFAF7]/80 backdrop-blur">
<div className="mx-auto max-w-6xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#top">
<div aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#123B2A] text-[#FBFAF7] shadow-sm">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>JB</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                JuiceBox Hunza
              </div>
<div className="text-xs text-slate-600">Organic • Fresh • Farm-to-Glass</div>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-slate-700 hover:text-slate-900" href="#about">About</a>
<a className="text-sm text-slate-700 hover:text-slate-900" href="#juices">Our Juices</a>
<a className="text-sm text-slate-700 hover:text-slate-900" href="#experience">Farm Experience</a>
<a className="text-sm text-slate-700 hover:text-slate-900" href="#gallery">Gallery</a>
<a className="text-sm text-slate-700 hover:text-slate-900" href="#reviews">Reviews</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/80 md:inline-flex" href="#juices" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
              Explore Juices
            </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-[#123B2A] px-4 py-2 text-sm font-semibold text-[#FBFAF7] shadow-sm hover:bg-[#0F3324]" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Book Experience
            </a>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 text-slate-800 shadow-sm hover:bg-white/80 md:hidden" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')" type="button">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="hidden border-t border-black/5 py-3 md:hidden" id="mobileMenu">
<div className="grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-black/5" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-black/5" href="#juices">Our Juices</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-black/5" href="#experience">Farm Experience</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-black/5" href="#gallery">Gallery</a>
<a className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-black/5" href="#reviews">Reviews</a>
<a className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#123B2A] px-4 py-2 text-sm font-semibold text-[#FBFAF7] shadow-sm hover:bg-[#0F3324]" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              WhatsApp
            </a>
</div>
</div>
</div>
</header>

<main className="" id="top">
<section className="relative">
<div className="absolute inset-0">
<img alt="Hunza Valley mountains and orchards" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/feb96480-8d50-42ee-a5d5-492ae3318964_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#FBFAF7]"></div>
</div>
<div className="relative mx-auto max-w-6xl px-6">
<div className="grid min-h-[36rem] items-end pt-14 pb-14 md:min-h-[42rem] md:py-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
<iconify-icon height="16" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                100% organic • no added sugar • no preservatives
              </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                From Hunza Farms to Your Glass
              </h1>
<p className="mt-4 text-base text-white/85 md:text-lg" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                JuiceBox Hunza is the pioneer of organic fresh juices in Hunza Valley—farm-to-table, chemical-free, and pressed for pure taste.
              </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FBFAF7] px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white" href="#juices" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<iconify-icon height="18" icon="solar:cup-paper-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Explore Our Juices
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur hover:bg-white/15" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Book on WhatsApp
                </a>
</div>
<div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-white">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-semibold" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Pure &amp; clean</span>
</div>
<p className="mt-1 text-xs text-white/80">No chemicals, no shortcuts.</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-white">
<iconify-icon height="18" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-semibold" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Local farms</span>
</div>
<p className="mt-1 text-xs text-white/80">Sourced from Hunza orchards.</p>
</div>
<div className="hidden rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:block">
<div className="flex items-center gap-2 text-white">
<iconify-icon height="18" icon="solar:wind-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-semibold" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Fresh taste</span>
</div>
<p className="mt-1 text-xs text-white/80">Pressed for bright, natural flavor.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 py-14 md:py-20" id="about">
<div className="grid gap-10 md:grid-cols-12 md:items-center">
<div className="md:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
<iconify-icon height="16" icon="solar:mountain-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Hunza Valley, Pakistan
            </div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              A pioneer of organic fresh juices in Hunza
            </h2>

<p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
              JuiceBox Hunza began with a simple promise: bring the valley’s orchard-fresh fruit straight to your glass. We follow a farm-to-table concept,
              celebrating seasonal harvests, sustainable practices, and the purity of truly organic ingredients. Hunza is known for some of the world’s
              finest cherry fruit—three types of cherries—and more than six kinds of apples.
            </p>
</div>
<div className="md:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
<img alt="Orchard fruit close-up" className="h-64 w-full object-cover sm:h-72" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c37d59b9-5623-4cb7-b343-cdaa10ed6121_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"></div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
<img alt="Fresh juice pouring in glass" className="h-64 w-full object-cover sm:h-72" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78d21cf9-bb3e-4d16-b047-d78f08a656f5_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white/60" id="juices">
<div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                Our signature organic juices
              </h2>
<p className="mt-3 text-sm text-slate-600 md:text-base" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                Crafted from local Hunza fruit—bright flavors, clean ingredients, and a finish that tastes like the valley itself.
              </p>
</div>
</div>
<div className="mt-10 grid gap-5 md:grid-cols-3">
<article className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
<div className="relative">
<img alt="Organic cherry juice" className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99032c69-160f-40aa-8e26-4eed0d77f3b2_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"></div>
</div>
<div className="p-5">
<p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>🍒 Cherry Juice

Main Benefits: ✅ Rich in antioxidants (especially anthocyanins) ✅ Reduces inflammation ✅ Good for muscle recovery (great after workouts) ✅ May help with sleep (natural melatonin) ✅ Supports heart health</p>
</div>
</article>
<article className="group overflow-hidden bg-white border-black/10 border rounded-3xl shadow-sm">
<div className="relative">
<img alt="Organic apricot juice" className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7e7a5f4-959b-4134-93bd-3194f5ad607b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"></div>
</div>
<div className="p-5">
<p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>🍑 Apricot Juice

Main Benefits:

✅ High in Vitamin A (good for skin &amp; eyesight)

✅ Supports digestion (natural fiber if pulpy)

✅ Boosts immunity

✅ Good for skin glow

✅ Mild detox support

Best for: Skin health, digestion, general immunity.</p>
</div>
</article>
<article className="group overflow-hidden bg-white border-black/10 border rounded-3xl shadow-sm">
<div className="relative">
<img alt="Special wild flower lemonade" className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04acee4c-aa9c-4d22-9a7d-40df77ba9614_800w.jpg"/>
<div className="bg-gradient-to-t from-black/40 via-black/0 to-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>🍎 Apple Juice

Main Benefits:

✅ Supports heart health

✅ Good source of Vitamin C

✅ Helps digestion

✅ Boosts hydration

✅ Natural energy booster</p>
</div>
</article>
</div>
<div className="mt-10 rounded-3xl border border-black/10 bg-[#123B2A] p-6 text-[#FBFAF7] shadow-sm md:p-8">
<div className="grid gap-6 md:grid-cols-12 md:items-center">
<div className="md:col-span-8">
<h3 className="text-xl font-semibold tracking-tight md:text-2xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                  Want the freshest taste?
                </h3>
<p className="mt-2 text-sm text-white/85 md:text-base" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                  Visit Hunza and try our juices where they’re made—straight from the orchards, served with mountain air.
                </p>
</div>
<div className="md:col-span-4 md:flex md:justify-end">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FBFAF7] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white md:w-auto" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Contact on WhatsApp
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-6 pb-14 pl-6" id="experience">
<div className="grid gap-10 md:grid-cols-12 md:items-start">
<div className="md:col-span-5">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              The JuiceBox Farm Experience
            </h2>
<p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
              A full day in Hunza’s orchards—pick seasonal fruit, water crops, work in the fields, and learn about organic farming with locals. It’s a
              hands-on immersion into authentic Hunza farm life.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#123B2A] px-5 py-3 text-sm font-semibold text-[#FBFAF7] shadow-sm hover:bg-[#0F3324]" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Book on WhatsApp
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/70" href="#gallery" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<iconify-icon height="18" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                View gallery
              </a>
</div>
</div>
<div className="md:col-span-7">
<div className="grid gap-4">
<div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
<img alt="Farm experience in orchards" className="md:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20b350dc-875b-44e3-89d9-5cf4e2c1825d_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/35 via-black/0 to-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-7" id="booking">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div className="">
<div className="text-sm font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                      Booking requests
                    </div>
<div className="mt-1 text-xs text-slate-600">
                      Message us your preferred date and group size. We’ll confirm availability for the orchard visit.
                    </div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#123B2A] px-5 py-3 text-sm font-semibold text-[#FBFAF7] shadow-sm hover:bg-[#0F3324]" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Contact on WhatsApp
                  </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-black/5 bg-[#FBFAF7]">
<div className="max-w-6xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6">
<div className="grid gap-8 md:grid-cols-12 md:items-start">
<div className="md:col-span-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B2A] text-[#FBFAF7] shadow-sm">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>JB</span>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                    JuiceBox Hunza
                  </div>
<div className="text-xs text-slate-600">Organic fresh juices • Hunza Valley</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                Pioneer organic juices in Hunza—fresh, chemical-free, and crafted from local farms with a farm-to-table promise.
              </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
<div className="">
<div className="text-xs font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                  Explore
                </div>
<div className="mt-3 grid gap-2">
<a className="text-sm text-slate-600 hover:text-slate-900" href="#about">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#juices">Our Juices</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#experience">Farm Experience</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#gallery">Gallery</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#reviews">Reviews</a>
</div>
</div>
<div>
<div className="text-xs font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                  Booking
                </div>
<div className="mt-3 grid gap-2">
<a className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/70" href="https://wa.me/923485062015" rel="noopener noreferrer" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Contact on WhatsApp
                  </a>
<div className="text-xs text-slate-500">Send date + group size.</div>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 md:flex-row md:items-center md:justify-between">
<div className="text-xs text-slate-500">© <span id="year">2026</span> JuiceBox Hunza. All rights reserved.</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-700" href="#top">Back to top</a>
<span className="text-slate-300">•</span>
<a className="hover:text-slate-700" href="https://wa.me/923485062015" rel="noopener noreferrer" target="_blank">WhatsApp</a>
</div>
</div>
</div>
</footer>

</main>

    </>
  );
}
