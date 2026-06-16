import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

<a className="flex items-center gap-3" href="/">
<img alt="GIIP logo placeholder" className="h-9 w-9 rounded-md object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<div className="text-lg font-semibold tracking-tight">Global Intrigue</div>
<div className="text-xs text-neutral-500">Auto Imports &amp; Parts</div>
</div>
</a>

<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="/">Home</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#mission">Why Choose Us</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="/inventory">Inventory</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#process">How It Works</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="/testimonials">Testimonials</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="/contact">Contact</a>
<a className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900" href="/about">About</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 md:inline-flex" href="/quote">Get a Quote</a>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 text-neutral-700 hover:bg-neutral-100 md:hidden" id="mobileToggle">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden border-t border-neutral-200 bg-white md:hidden" id="mobileMenu">
<nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 md:px-6">
<a className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="/">Home</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#mission">Why Choose Us</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="/inventory">Inventory</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#process">How It Works</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="/testimonials">Testimonials</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="/contact">Contact</a>
<a className="mt-1 rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-600" href="/quote">Get a Quote</a>
</nav>
</div>
</header>
<main className="pt-24 md:pt-28">

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-neutral-50 to-neutral-100"></div>
<div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
<div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            About Global Intrigue
          </h1>
<p className="mt-4 text-base md:text-lg text-neutral-600">
            Your trusted partner for premium Japanese vehicle imports—transparent, personalized, and built on trust.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-orange-600" href="/quote">
<i className="h-4 w-4" data-lucide="steering-wheel"></i>
              Request a Quote
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50" href="#mission">
<i className="h-4 w-4" data-lucide="info"></i>
              Our Mission
            </a>
</div>

<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Trusted Sourcing</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Verified dealers &amp; auction partners.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-blue-600" data-lucide="workflow"></i>
<span className="text-sm font-medium">Transparent Process</span>
</div>
<p className="mt-1 text-xs text-neutral-500">From inspection to delivery.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="ship"></i>
<span className="text-sm font-medium">8–12 Week Delivery</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Regular updates throughout.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-orange-600" data-lucide="badge-dollar-sign"></i>
<span className="text-sm font-medium">Fair Pricing</span>
</div>
<p className="mt-1 text-xs text-neutral-500">No hidden fees—ever.</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-orange-100 via-white to-neutral-100 blur-2xl"></div>
<img alt="Premium Japanese SUV interior" className="w-full rounded-2xl border border-neutral-200 object-cover shadow-sm" src="https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16" id="mission">
<div className="grid gap-10 md:grid-cols-2 md:gap-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Mission</h2>
<p className="mt-4 text-neutral-600">
            More options, fair prices, better service, and absolute trust. We help you source precisely the vehicle you want—from high-end luxury to performance sports cars—with clarity at every step and support you can rely on.
          </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="list-checks"></i>
<span className="text-sm font-medium text-neutral-900">More Options</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Curated access to a wide selection across verified Japanese dealers and auctions.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-600" data-lucide="scale"></i>
<span className="text-sm font-medium text-neutral-900">Fair Pricing</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Direct sourcing with transparent fees so you always understand the value.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="headset"></i>
<span className="text-sm font-medium text-neutral-900">Better Service</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Dedicated updates, inspection reports, and guidance—start to finish.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-600" data-lucide="handshake"></i>
<span className="text-sm font-medium text-neutral-900">Trust</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Integrity and honesty are our foundation. Your confidence is our priority.</p>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="rounded-xl bg-orange-50 p-3 ring-1 ring-orange-100">
<i className="h-6 w-6 text-orange-600" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Proud Partnership with Japan Motors</h3>
<p className="mt-2 text-neutral-600">
                  We’re honored to partner with Japan Motors—one of Japan’s respected auto dealerships—expanding access to high-quality vehicles, from luxury sedans to performance coupes and SUVs.
                </p>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-lg border border-neutral-200 p-4">
<div className="text-sm font-medium text-neutral-900">Verified Stock</div>
<p className="text-xs text-neutral-600">History checks &amp; inspection reports.</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="text-sm font-medium text-neutral-900">Priority Access</div>
<p className="text-xs text-neutral-600">Early visibility on in-demand models.</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="text-sm font-medium text-neutral-900">Consistent Quality</div>
<p className="text-xs text-neutral-600">Same great service, same great prices.</p>
</div>
</div>
<img alt="Premium vehicles lineup" className="mt-6 w-full rounded-xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white"></div>
<div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
<div className="grid items-center gap-10 md:grid-cols-2">
<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Who We Are</h2>
<p className="mt-4 text-neutral-600">
              Global Intrigue’s Auto Imports &amp; Parts (GIIP) was founded to make importing a Japanese vehicle simple, predictable, and enjoyable.
              We pair boutique, person-to-person service with a clear process and curated supply network—so you get exactly what you want, without the stress.
            </p>
<p className="mt-4 text-neutral-600">
              Whether you’re sourcing a daily driver, luxury upgrade, performance build, or hard-to-find parts—if it’s on wheels, we’ll help you find it.
            </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
<i className="h-5 w-5 text-blue-600" data-lucide="file-search"></i>
<span className="text-sm text-neutral-800">Full visibility into history &amp; condition</span>
</div>
<div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="message-square-dots"></i>
<span className="text-sm text-neutral-800">Proactive updates at each milestone</span>
</div>
<div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
<i className="h-5 w-5 text-emerald-600" data-lucide="file-check-2"></i>
<span className="text-sm text-neutral-800">Quality checks before shipping</span>
</div>
<div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
<i className="h-5 w-5 text-orange-600" data-lucide="credit-card"></i>
<span className="text-sm text-neutral-800">Clear pricing with itemized costs</span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-neutral-100 via-white to-orange-100 blur-2xl"></div>
<img alt="Sport coupe on coastal road" className="w-full rounded-2xl border border-neutral-200 object-cover shadow-sm" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What We Stand For</h2>
<p className="mt-3 text-neutral-600">Our core values guide every decision and every delivery.</p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-emerald-600" data-lucide="scale"></i>
<div className="text-lg font-medium text-neutral-900">Integrity</div>
</div>
<p className="mt-2 text-sm text-neutral-600">We do what’s right, not what’s easy—every quote, every report, every handoff.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-blue-600" data-lucide="key-round"></i>
<div className="text-lg font-medium text-neutral-900">Honesty</div>
</div>
<p className="mt-2 text-sm text-neutral-600">Clear communication and documentation, so you always know where things stand.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-indigo-600" data-lucide="sparkles"></i>
<div className="text-lg font-medium text-neutral-900">Exceptional Service</div>
</div>
<p className="mt-2 text-sm text-neutral-600">Boutique support tailored to your goals—from first call to final delivery.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-orange-600" data-lucide="shield"></i>
<div className="text-lg font-medium text-neutral-900">Reliability</div>
</div>
<p className="mt-2 text-sm text-neutral-600">A predictable process that gives you peace of mind at every milestone.</p>
</div>
</div>
</section>

<section className="relative" id="process">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-neutral-50"></div>
<div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How We Work</h2>
<p className="mt-3 text-neutral-600">A simple, transparent five-step journey from request to delivery.</p>
</div>
<div className="mt-10 grid gap-4 md:grid-cols-5">

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-neutral-800">
<span className="text-xs font-medium text-neutral-500">01</span>
<i className="h-4 w-4 text-orange-600" data-lucide="calendar-check-2"></i>
<span className="text-sm font-medium">Consult</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Share your wish list, budget, and timeline.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-neutral-800">
<span className="text-xs font-medium text-neutral-500">02</span>
<i className="h-4 w-4 text-orange-600" data-lucide="search"></i>
<span className="text-sm font-medium">Source</span>
</div>
<p className="mt-2 text-sm text-neutral-600">We shortlist vehicles from verified partners.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-neutral-800">
<span className="text-xs font-medium text-neutral-500">03</span>
<i className="h-4 w-4 text-orange-600" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium">Approve</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Review photos, history, and inspection reports.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-neutral-800">
<span className="text-xs font-medium text-neutral-500">04</span>
<i className="h-4 w-4 text-orange-600" data-lucide="package-check"></i>
<span className="text-sm font-medium">Ship</span>
</div>
<p className="mt-2 text-sm text-neutral-600">We handle paperwork, shipping, and customs.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-neutral-800">
<span className="text-xs font-medium text-neutral-500">05</span>
<i className="h-4 w-4 text-orange-600" data-lucide="car"></i>
<span className="text-sm font-medium">Deliver</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Your car arrives—ready to drive and enjoy.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-12 md:px-6 md:pb-16">
<div className="grid gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-start gap-3">
<div className="rounded-lg bg-emerald-50 p-2 ring-1 ring-emerald-100">
<i className="h-5 w-5 text-emerald-600" data-lucide="gift"></i>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-900">Complimentary $100 Gift Card</h3>
<p className="mt-1 text-sm text-neutral-600">Receive a $100 USD gift card with every purchase—perfect for your next oil change.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-start gap-3">
<div className="rounded-lg bg-indigo-50 p-2 ring-1 ring-indigo-100">
<i className="h-5 w-5 text-indigo-600" data-lucide="percent"></i>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-900">Loyalty Savings</h3>
<p className="mt-1 text-sm text-neutral-600">Up to 5% off your next purchase if made within one year. Thank you for trusting GIIP.</p>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-500">Terms apply. Offers may vary by location and vehicle type.</p>
</section>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white"></div>
<div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">People-First Service</h2>
<p className="mt-3 text-neutral-600">A small, experienced team focused on delivering a seamless import experience.</p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-neutral-200 bg-white p-5 text-center">
<img alt="Team member" className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 text-sm font-medium text-neutral-900">Consulting &amp; Sourcing</div>
<p className="text-xs text-neutral-600">Understanding your needs and finding the right match.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 text-center">
<img alt="Team member" className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 text-sm font-medium text-neutral-900">Inspections &amp; Reports</div>
<p className="text-xs text-neutral-600">Thorough checks with clear documentation.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 text-center">
<img alt="Team member" className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="mt-3 text-sm font-medium text-neutral-900">Logistics &amp; Shipping</div>
<p className="text-xs text-neutral-600">Paperwork, shipping, and customs—handled.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 text-center">
<img alt="Team member" className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 text-sm font-medium text-neutral-900">Customer Success</div>
<p className="text-xs text-neutral-600">Support before and after delivery.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
<div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900">
<img alt="Minimal road at dusk" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="px-6 py-12 text-center md:px-12 md:py-16">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Your Dream Car Awaits</h3>
<p className="mx-auto mt-3 max-w-2xl text-neutral-300">Tell us what you’re looking for. We’ll handle the rest—with transparency, speed, and care.</p>
<div className="mt-6 flex flex-wrap justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-orange-600" href="/quote">
<i className="h-4 w-4" data-lucide="send"></i>
              Request a Quote
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10" href="/contact">
<i className="h-4 w-4" data-lucide="phone"></i>
              Talk to Us
            </a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
<div>
<div className="flex items-center gap-3">
<img alt="GIIP logo placeholder" className="h-9 w-9 rounded-md object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-lg font-semibold tracking-tight">Global Intrigue</div>
</div>
<p className="mt-3 text-sm text-neutral-600">Premium Japanese imports. Clear process, curated quality, and service you can trust.</p>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Quick Links</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="/">Home</a></li>
<li><a className="hover:text-neutral-900" href="/inventory">Inventory</a></li>
<li><a className="hover:text-neutral-900" href="/about">About</a></li>
<li><a className="hover:text-neutral-900" href="/blog">Blog</a></li>
<li><a className="hover:text-neutral-900" href="/contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Legal</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="/privacy">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900" href="/terms">Terms of Service</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Contact</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="phone"></i><span>+1 (555) 123-4567</span></li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail"></i><span>info@globalintrigue.com</span></li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="map-pin"></i><span>Los Angeles, CA</span></li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600" href="/quote">
<i className="h-4 w-4" data-lucide="sparkle"></i>
          Get a Quote
        </a>
</div>
</div>
<div className="border-t border-neutral-200 py-6">
<p className="mx-auto max-w-7xl px-4 text-xs text-neutral-500 md:px-6">© 2025 Global Intrigue. All rights reserved.</p>
</div>
</footer>




    </>
  );
}
