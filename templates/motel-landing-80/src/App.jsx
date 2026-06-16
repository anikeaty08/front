import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init lucide with 1.5 stroke width
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      // Year
      document.getElementById('y').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-slate-200/70">
<div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>MOA</div>
<div className="flex flex-col">
<span className="text-sm" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600', letterSpacing: '-0.01em'}}>Motel on A’Beckett</span>
<span className="text-xs text-slate-500 tracking-tight">Inverloch, Victoria</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-slate-700 hover:text-slate-900" href="#">Rooms</a>
<a className="text-slate-700 hover:text-slate-900" href="#">Facilities</a>
<a className="text-slate-700 hover:text-slate-900" href="#">Location</a>
<a className="text-slate-700 hover:text-slate-900" href="#">Gallery</a>
<a className="text-slate-700 hover:text-slate-900" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="tel:+61000000000">
<i className="h-4 w-4" data-lucide="phone"></i>
<span>Call</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-sky-700/20 bg-sky-700 text-white px-4 py-2 text-sm hover:bg-sky-800 hover:border-sky-800/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition" href="#">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span>Book Now</span>
</a>
</div>
</div>
</header>
<main>

<section className="mx-auto max-w-7xl px-5 pt-10 pb-8">
<div className="mb-6">
<h1 className="text-3xl sm:text-4xl tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>
            Coastal comfort in the heart of Inverloch
          </h1>
<p className="mt-2 text-slate-600 text-base sm:text-lg max-w-2xl">
            A short stroll to the beach and cafes. Modern rooms, friendly service, always easy.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<a className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white" href="#">
<div className="relative aspect-[4/3]">
<img alt="Modern accommodation room" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-slate-900/0 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
<div>
<h3 className="text-white text-xl tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Accommodation</h3>
<p className="text-white/80 text-sm">Queen, Twin &amp; Family rooms</p>
</div>
<div className="rounded-full bg-white/90 text-slate-900 p-2 border border-white/70 group-hover:bg-white transition">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white" href="#">
<div className="relative aspect-[4/3]">
<img alt="Inverloch seaside packages" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-slate-900/0 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
<div>
<h3 className="text-white text-xl tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Packages</h3>
<p className="text-white/80 text-sm">Seasonal offers &amp; extras</p>
</div>
<div className="rounded-full bg-white/90 text-slate-900 p-2 border border-white/70 group-hover:bg-white transition">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-sky-200 bg-sky-50" href="#">
<div className="relative aspect-[4/3] flex flex-col items-start justify-end p-5 sm:p-6">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/40 blur-3xl"></div>
</div>
<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-sky-900 text-xs">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i> Instant confirmation
              </div>
<h3 className="text-2xl tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Book Now</h3>
<p className="mt-1 text-slate-700 text-sm">Best rate direct. Flexible options.</p>
<div className="mt-4 inline-flex items-center gap-2 rounded-md border border-sky-700/20 bg-sky-700 text-white px-4 py-2 text-sm hover:bg-sky-800 hover:border-sky-800/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition">
<span>Check Availability</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</a>
</div>
</section>

<div className="mx-auto max-w-7xl px-5">
<div className="h-px w-full bg-slate-200/70"></div>
</div>

<section className="mx-auto max-w-7xl px-5 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="relative rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-[4/3]">
<img alt="Motel exterior near the coast" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Welcome to Motel on A’Beckett</h2>
<p className="mt-3 text-slate-700 text-base leading-relaxed max-w-prose">
              Set in the heart of Inverloch, our motel is just a two‑minute stroll to the beach, cafes and coastal walks. Enjoy contemporary rooms, warm hospitality and thoughtful amenities designed for easy, comfortable stays.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition" href="#">
                View Rooms
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-sky-700/20 bg-sky-700 text-white px-4 py-2 text-sm hover:bg-sky-800 hover:border-sky-800/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition" href="#">
                Check Availability
              </a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-5 pb-12">
<div className="mb-6 flex items-end justify-between">
<h2 className="text-2xl tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Facilities &amp; Features</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-slate-50/60 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="bed"></i>
</div>
<div>
<h3 className="text-slate-900 text-base tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Comfortable rooms</h3>
<p className="text-sm text-slate-600">Queen, Twin &amp; Family</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-slate-50/60 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="waves"></i>
</div>
<div>
<h3 className="text-slate-900 text-base tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Heated pool &amp; spa</h3>
<p className="text-sm text-slate-600">Relax year‑round</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-slate-50/60 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-slate-900 text-base tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>2‑minute walk</h3>
<p className="text-sm text-slate-600">Beach &amp; local cafes</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-slate-50/60 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<div className="flex items-center gap-1.5">
<i className="h-4.5 w-4.5" data-lucide="car"></i>
<i className="h-4.5 w-4.5" data-lucide="wifi"></i>
</div>
</div>
<div>
<h3 className="text-slate-900 text-base tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Free parking &amp; Wi‑Fi</h3>
<p className="text-sm text-slate-600">Included in every stay</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-5 pb-6">
<div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
<div className="mb-4">
<h2 className="text-base tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Recognised by guests and partners</h2>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

<div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-6">
<span className="text-slate-800 tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Tripadvisor</span>
</div>
<div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-6">
<span className="text-slate-800 tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>HotelsCombined</span>
</div>
<div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-6">
<span className="text-slate-800 tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Travelmyth</span>
</div>
<div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-6">
<span className="text-slate-800 tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Booking.com</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-5 py-10">
<div className="mb-6 flex items-end justify-between">
<h2 className="text-2xl tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Guest reviews</h2>
<a className="hidden sm:inline-flex text-sm text-slate-700 hover:text-slate-900" href="#">Read all</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50/60 transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="quote"></i>
</div>
<div>
<p className="text-slate-800 text-base leading-relaxed">Fantastic location and spotless rooms. We loved the short walk to the beach and morning coffee on A’Beckett.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Guest" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Sophie M.</div>
<div className="text-slate-500">Melbourne</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50/60 transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="quote"></i>
</div>
<div>
<p className="text-slate-800 text-base leading-relaxed">Warm welcome, comfy bed, great Wi‑Fi. The heated pool and spa were the perfect end to our day.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Guest" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Daniel R.</div>
<div className="text-slate-500">Sydney</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-t border-slate-200/80 bg-sky-50">
<div className="mx-auto max-w-7xl px-5 py-10">
<div className="rounded-xl border border-sky-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
<div>
<h3 className="text-2xl tracking-tight text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Ready to book your Inverloch stay?</h3>
<p className="mt-1 text-slate-700 text-sm">Secure your dates in seconds. Best rate direct.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition" href="#">
                View Rooms
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-sky-700/20 bg-sky-700 text-white px-4 py-2 text-sm hover:bg-sky-800 hover:border-sky-800/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition" href="#">
                Check Availability
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>
</main>
<footer className="mx-auto max-w-7xl px-5 py-10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border border-slate-200 rounded-xl p-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>MOA</div>
<div className="text-sm">
<div className="text-slate-900" style={{fontFamily: 'Poppins, Lato, sans-serif', fontWeight: '600'}}>Motel on A’Beckett</div>
<div className="text-slate-600">Inverloch, Victoria</div>
</div>
</div>
<div className="text-sm text-slate-600">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>63 A’Beckett St, Inverloch VIC</span>
</div>
<div className="flex items-center gap-2 mt-1">
<i className="h-4 w-4" data-lucide="phone"></i>
<a className="hover:text-slate-900" href="tel:+61000000000">+61 (0) 3 0000 0000</a>
</div>
<div className="flex items-center gap-2 mt-1">
<i className="h-4 w-4" data-lucide="mail"></i>
<a className="hover:text-slate-900" href="mailto:stay@motelonabeckett.com">stay@motelonabeckett.com</a>
</div>
</div>
<div className="text-sm text-slate-600">
<div>© <span id="y"></span> Motel on A’Beckett. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
