import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      document.getElementById('y').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10 group-hover:ring-slate-900/20 transition">
<span className="text-[13px] tracking-tight font-semibold">CLP</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">Clip</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#browse">Find Barbers</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#how">How it works</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#features">Features</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition">
<i className="h-4 w-4" data-lucide="log-in"></i>
              Sign in
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90 transition shadow-sm ring-1 ring-transparent hover:ring-slate-900/20">
<i className="h-4 w-4" data-lucide="scissors"></i>
              List your shop
            </button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10 pointer-events-none">
<div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-slate-100 blur-3xl"></div>
<div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-slate-50 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 py-16 sm:py-20">

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 w-max mb-4">
<i className="h-3.5 w-3.5 text-emerald-600" data-lucide="check"></i>
              Trusted by clients and barbers across 120+ cities
            </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Find a barber in your city. Book in minutes.
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              Discover top-rated barbers near you, compare reviews, and secure your slot with fast, secure in‑app payment.
            </p>

<form action="#browse" className="mt-8">
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
<i className="h-5 w-5 text-slate-500" data-lucide="map-pin"></i>
</div>
<input autocomplete="off" className="w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 py-3 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-400 transition" name="city" placeholder="Search your city (e.g., New York)" type="search"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90 transition shadow-sm ring-1 ring-transparent hover:ring-slate-900/20">
<i className="h-4.5 w-4.5" data-lucide="search"></i>
                  Search
                </button>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
<span className="text-slate-500">Popular:</span>
<div className="flex flex-wrap gap-2">
<a className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition" href="#browse">New York</a>
<a className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition" href="#browse">London</a>
<a className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition" href="#browse">Toronto</a>
<a className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition" href="#browse">Sydney</a>
</div>
</div>
</form>

<div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 text-slate-600">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-600" data-lucide="shield-check"></i>
<span className="text-sm">Secure payments</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-amber-500" data-lucide="star"></i>
<span className="text-sm">Verified reviews</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-slate-700" data-lucide="clock"></i>
<span className="text-sm">Real‑time availability</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-slate-700" data-lucide="lock"></i>
<span className="text-sm">Privacy‑first</span>
</div>
</div>
</div>

<div className="lg:pl-6">
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-violet-600" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-slate-900">Barber spotlight</span>
</div>
<a className="text-sm text-slate-600 hover:text-slate-900 hover:underline underline-offset-4" href="#browse">See all</a>
</div>
<div className="p-4 sm:p-6">
<div className="flex gap-5">
<img alt="Barber portrait" className="h-20 w-20 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Aiden Cole</h3>
<div className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-amber-700 border border-amber-200">
<i className="h-4 w-4" data-lucide="star"></i>
<span className="text-sm font-medium">4.9</span>
<span className="text-xs text-amber-700/80">(312)</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>Williamsburg, Brooklyn</span>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-xs rounded-full border border-slate-200 px-2 py-1 text-slate-700">Skin fade</span>
<span className="text-xs rounded-full border border-slate-200 px-2 py-1 text-slate-700">Beard trim</span>
<span className="text-xs rounded-full border border-slate-200 px-2 py-1 text-slate-700">Hot towel</span>
</div>
</div>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="h-4.5 w-4.5" data-lucide="calendar"></i>
                      Next available
                    </div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm transition">10:30</button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm transition">11:15</button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm transition">12:00</button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm transition">14:20</button>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="h-4.5 w-4.5" data-lucide="credit-card"></i>
                      From
                    </div>
<div className="mt-2 flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight">$28</div>
<div className="text-xs text-slate-500">Basic cut · 30min</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm hover:bg-slate-800 transition shadow-sm ring-1 ring-transparent hover:ring-slate-900/20">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
                        Book now
                      </button>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between rounded-lg border border-slate-200 p-3">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="h-4.5 w-4.5" data-lucide="shield"></i>
                    Protected booking &amp; instant confirmation
                  </div>
<i className="h-4.5 w-4.5 text-slate-400" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/60" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid md:grid-cols-4 gap-6">
<div className="rounded-lg bg-white border border-slate-200 p-6 hover:shadow-sm hover:border-slate-300 transition">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-items-center mb-4 ring-1 ring-slate-900/10">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1.5">Find barbers</h3>
<p className="text-sm text-slate-600">Search by city to discover nearby barbers and shops that match your style and schedule.</p>
</div>
<div className="rounded-lg bg-white border border-slate-200 p-6 hover:shadow-sm hover:border-slate-300 transition">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-items-center mb-4 ring-1 ring-slate-900/10">
<i className="h-5 w-5" data-lucide="star"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1.5">Rating barbers</h3>
<p className="text-sm text-slate-600">Verified reviews and photos help you choose the right pro with confidence.</p>
</div>
<div className="rounded-lg bg-white border border-slate-200 p-6 hover:shadow-sm hover:border-slate-300 transition">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-items-center mb-4 ring-1 ring-slate-900/10">
<i className="h-5 w-5" data-lucide="calendar"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1.5">Book appointment</h3>
<p className="text-sm text-slate-600">See real-time availability and lock your slot. Instant confirmations, reminders included.</p>
</div>
<div className="rounded-lg bg-white border border-slate-200 p-6 hover:shadow-sm hover:border-slate-300 transition">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-items-center mb-4 ring-1 ring-slate-900/10">
<i className="h-5 w-5" data-lucide="credit-card"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1.5">In‑app payment</h3>
<p className="text-sm text-slate-600">Pay securely with your saved card or wallet. No cash, no hassle.</p>
</div>
</div>
</div>
</section>

<section className="bg-white" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
<p className="mt-2 text-slate-600">From search to seat in three simple steps.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-lg border border-slate-200 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10">
<i className="h-4.5 w-4.5" data-lucide="search"></i>
</div>
<h3 className="font-medium">Search your city</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Enter your city and explore a curated list of barbers and shops near you.</p>
</div>
<div className="rounded-lg border border-slate-200 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10">
<i className="h-4.5 w-4.5" data-lucide="users"></i>
</div>
<h3 className="font-medium">Compare &amp; choose</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Check ratings, services, and pricing. Save your favorites for later.</p>
</div>
<div className="rounded-lg border border-slate-200 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10">
<i className="h-4.5 w-4.5" data-lucide="calendar-check"></i>
</div>
<h3 className="font-medium">Book &amp; pay</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Pick a time that works and pay securely in‑app. You're all set.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/50" id="browse">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-end justify-between gap-4 flex-wrap">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Popular in your area</h2>
<p className="mt-2 text-slate-600">Handpicked barbers with top reviews and availability this week.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#">
            View all barbers
            <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition overflow-hidden">
<div className="relative">
<img alt="Barbershop interior" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur px-2.5 py-1.5 text-xs text-slate-800 border border-slate-200">
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i>
                  SoHo
                </div>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="font-semibold tracking-tight">Blade &amp; Co.</h3>
<div className="inline-flex items-center gap-1 text-amber-600">
<i className="h-4 w-4" data-lucide="star"></i>
<span className="text-sm font-medium">4.8</span>
</div>
</div>
<p className="mt-1 text-sm text-slate-600">Skin fades, beard styling, hot towel shaves</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-slate-600">From <span className="text-slate-900 font-medium">$30</span></div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition">
<i className="h-4 w-4" data-lucide="calendar"></i>
                  Book
                </button>
</div>
</div>
</article>

<article className="group rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition overflow-hidden">
<div className="relative">
<img alt="Barber cutting hair" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur px-2.5 py-1.5 text-xs text-slate-800 border border-slate-200">
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i>
                  Shoreditch
                </div>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="font-semibold tracking-tight">Kingsman Cuts</h3>
<div className="inline-flex items-center gap-1 text-amber-600">
<i className="h-4 w-4" data-lucide="star"></i>
<span className="text-sm font-medium">4.9</span>
</div>
</div>
<p className="mt-1 text-sm text-slate-600">Classic cuts, razor fades, luxury finish</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-slate-600">From <span className="text-slate-900 font-medium">$34</span></div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition">
<i className="h-4 w-4" data-lucide="calendar"></i>
                  Book
                </button>
</div>
</div>
</article>

<article className="group rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition overflow-hidden">
<div className="relative">
<img alt="Barber chair" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur px-2.5 py-1.5 text-xs text-slate-800 border border-slate-200">
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i>
                  Queen West
                </div>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="font-semibold tracking-tight">North &amp; Fade</h3>
<div className="inline-flex items-center gap-1 text-amber-600">
<i className="h-4 w-4" data-lucide="star"></i>
<span className="text-sm font-medium">4.7</span>
</div>
</div>
<p className="mt-1 text-sm text-slate-600">Modern styles, textured crops, beard sculpt</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-slate-600">From <span className="text-slate-900 font-medium">$26</span></div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition">
<i className="h-4 w-4" data-lucide="calendar"></i>
                  Book
                </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Sofia</div>
<div className="text-xs text-slate-500">New York</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Booked in under a minute and got the best skin fade I’ve had in years. Love the reminders!</p>
</div>
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Marcus</div>
<div className="text-xs text-slate-500">London</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Great selection of barbers and transparent pricing. The ratings really help.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Daniel</div>
<div className="text-xs text-slate-500">Toronto</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Easy booking and secure payment. My go‑to app for haircuts now.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="max-w-2xl">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Your fresh cut is a few taps away</h3>
<p className="mt-2 text-slate-600">Search your city to get started and book a time that works for you.</p>
</div>
<form action="#browse" className="w-full max-w-xl">
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
<i className="h-5 w-5 text-slate-500" data-lucide="map-pin"></i>
</div>
<input className="w-full rounded-md border border-slate-300 bg-white pl-10 pr-28 py-3 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-400 transition" placeholder="Try: Los Angeles, Chicago, Berlin..." type="search"/>
<button className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90 transition shadow-sm ring-1 ring-transparent hover:ring-slate-900/20">
                Search
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10">
<span className="text-[13px] tracking-tight font-semibold">CLP</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">Clip</span>
</a>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
<a className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4" href="#features">Features</a>
<a className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4" href="#how">How it works</a>
<a className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4" href="#browse">Find barbers</a>
<a className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4" href="#">Support</a>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 pt-6">
<p className="text-sm text-slate-500">© <span id="y"></span> Clip Technologies. All rights reserved.</p>
<div className="flex items-center gap-3 text-slate-500">
<a className="inline-flex items-center gap-1 hover:text-slate-900 transition" href="#">
<i className="h-4 w-4" data-lucide="shield"></i>
<span className="text-sm">Privacy</span>
</a>
<span className="text-slate-300">•</span>
<a className="inline-flex items-center gap-1 hover:text-slate-900 transition" href="#">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span className="text-sm">Terms</span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
