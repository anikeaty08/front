import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative z-20">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-5">

<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-md bg-blue-900 text-white flex items-center justify-center tracking-tight text-base font-medium" style={{fontFamily: '\'Fraunces\', serif'}}>
            CF
          </div>
<div className="leading-tight">
<div className="text-slate-900 text-lg font-medium tracking-tight" style={{fontFamily: '\'Fraunces\', serif'}}>ClearFlow</div>
<div className="text-xs text-slate-500 tracking-wide" style={{fontFamily: '\'Inter\', sans-serif'}}>Plumbing</div>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm" style={{fontFamily: '\'Inter\', sans-serif'}}>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-blue-900 px-4 py-2 text-white text-sm font-medium hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-colors" href="tel:+1234567890" style={{fontFamily: '\'Inter\', sans-serif'}}>
<i className="h-4 w-4" data-lucide="phone"></i>
            Call Now
          </a>
<a aria-label="Call Now" className="sm:hidden inline-flex items-center justify-center rounded-md bg-blue-900 p-2 text-white hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-colors" href="tel:+1234567890">
<i className="h-4 w-4" data-lucide="phone"></i>
</a>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
</header>

<section className="relative">

<div className="absolute inset-0 -z-10 overflow-hidden">
<img alt="Modern bathroom sink" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{filter: 'grayscale(100%) brightness(0.98) saturate(80%) blur(1.5px)'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/85 to-white"></div>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white"></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
          Your Local Plumbing Experts
        </h1>
<p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl" style={{fontFamily: '\'Inter\', sans-serif'}}>
          Fast, Reliable, and Affordable Service.
        </p>
<div className="mt-8 flex items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-5 py-3 text-white text-sm font-medium hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-colors" href="#contact" style={{fontFamily: '\'Inter\', sans-serif'}}>
<i className="h-5 w-5" data-lucide="calendar"></i>
            Book a Service
          </a>
<a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors" href="#services" style={{fontFamily: '\'Inter\', sans-serif'}}>
<i className="h-5 w-5" data-lucide="chevron-right"></i>
            Explore Services
          </a>
</div>
</div>
</div>
</section>

<section className="relative" id="services">
<div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
<div className="flex items-end justify-between gap-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
          Services
        </h2>
<div className="hidden sm:block text-sm text-slate-500" style={{fontFamily: '\'Inter\', sans-serif'}}>
          Licensed, insured, and trusted locally
        </div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<div className="h-11 w-11 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center ring-1 ring-inset ring-blue-100">
<i className="h-5 w-5" data-lucide="wrench"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
              Emergency Repairs
            </h3>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            24/7 response for leaks, bursts, and urgent issues with fast diagnostics and lasting fixes.
          </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<div className="h-11 w-11 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center ring-1 ring-inset ring-blue-100">
<i className="h-5 w-5" data-lucide="filter"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
              Drain Cleaning
            </h3>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            Clear clogs and restore flow with safe, professional equipment and methods.
          </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<div className="h-11 w-11 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center ring-1 ring-inset ring-blue-100">
<i className="h-5 w-5" data-lucide="shower-head"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
              Fixture Installation
            </h3>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            Precision installs for faucets, sinks, toilets, and showers—done right the first time.
          </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<div className="h-11 w-11 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center ring-1 ring-inset ring-blue-100">
<i className="h-5 w-5" data-lucide="thermometer-sun"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
              Water Heater Service
            </h3>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            Repair, replacement, and maintenance for tank and tankless systems.
          </p>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
</section>

<section id="about">
<div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-50">
<img alt="Smiling professional plumber" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
            Trusted, Local, and Experienced
          </h2>
<p className="mt-5 text-base text-slate-600 leading-relaxed" style={{fontFamily: '\'Inter\', sans-serif'}}>
            For over a decade, ClearFlow Plumbing has helped homeowners and businesses keep their water moving. Our licensed team is known for transparent pricing, on-time arrivals, and workmanship that stands the test of time.
          </p>
<ul className="mt-6 space-y-3" style={{fontFamily: '\'Inter\', sans-serif'}}>
<li className="flex items-center gap-3 text-slate-700">
<i className="h-5 w-5 text-blue-900" data-lucide="badge-check"></i>
              Licensed &amp; insured technicians
            </li>
<li className="flex items-center gap-3 text-slate-700">
<i className="h-5 w-5 text-blue-900" data-lucide="shield"></i>
              Upfront, honest pricing
            </li>
<li className="flex items-center gap-3 text-slate-700">
<i className="h-5 w-5 text-blue-900" data-lucide="clock"></i>
              Same-day service available
            </li>
</ul>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
</section>

<section className="bg-slate-50/60" id="testimonials">
<div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
          What Our Customers Say
        </h2>
<p className="mt-4 text-slate-600 text-base" style={{fontFamily: '\'Inter\', sans-serif'}}>
          Real feedback from homeowners and businesses we proudly serve.
        </p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=1592&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900" style={{fontFamily: '\'Inter\', sans-serif'}}>Ava R.</div>
<div className="flex items-center gap-1 text-blue-900 mt-1">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            They arrived within an hour and fixed a burst pipe quickly. Clear pricing and super professional.
          </p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1548&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900" style={{fontFamily: '\'Inter\', sans-serif'}}>Marcus L.</div>
<div className="flex items-center gap-1 text-blue-900 mt-1">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            Great communication and the new water heater works perfectly. Highly recommend!
          </p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=1633&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900" style={{fontFamily: '\'Inter\', sans-serif'}}>Sophie K.</div>
<div className="flex items-center gap-1 text-blue-900 mt-1">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            On time, tidy, and friendly. They installed new fixtures and everything looks and works great.
          </p>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
</section>

<section id="contact">
<div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', serif'}}>
            Get in Touch
          </h2>
<p className="mt-4 text-base text-slate-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
            Tell us what you need and we’ll respond promptly.
          </p>
<div className="mt-6 flex items-center gap-6">
<a className="inline-flex items-center gap-3 text-blue-900 hover:opacity-90 transition-opacity" href="tel:+1234567890" style={{fontFamily: '\'Inter\', sans-serif'}}>
<i className="h-5 w-5" data-lucide="phone"></i>
<span className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Fraunces\', serif'}}>(123) 456-7890</span>
</a>
<span className="text-sm text-slate-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Available 24/7</span>
</div>

<form action="#" className="mt-8 space-y-4" method="post" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div>
<label className="block text-sm text-slate-700 mb-1" htmlFor="name">Name</label>
<input className="w-full rounded-md border-slate-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-200/70 placeholder-slate-400" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1" htmlFor="phone">Phone</label>
<input className="w-full rounded-md border-slate-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-200/70 placeholder-slate-400" id="phone" name="phone" placeholder="(123) 456-7890" required="" type="tel"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1" htmlFor="service">Service Needed</label>
<input className="w-full rounded-md border-slate-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-200/70 placeholder-slate-400" id="service" name="service" placeholder="e.g., Drain cleaning, leak repair" required="" type="text"/>
</div>
<div className="pt-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-5 py-3 text-white text-sm font-medium hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-colors" type="submit">
<i className="h-5 w-5" data-lucide="send"></i>
                Submit Request
              </button>
</div>
</form>
</div>

<div>
<div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
<div className="aspect-[4/3]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31514.82378247428!2d-122.4312973!3d37.773972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816df3d2bff1%3A0x9a2c7b7d3e490!2sDowntown!5e0!3m2!1sen!2sus!4v1689611111111" style={{border: '0', filter: 'grayscale(80%) contrast(95%) brightness(102%)'}} title="Service Area Map" width="100%"></iframe>
</div>
<div className="p-4 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/40">
<div className="flex items-center gap-3 text-slate-700" style={{fontFamily: '\'Inter\', sans-serif'}}>
<i className="h-5 w-5 text-blue-900" data-lucide="map-pin"></i>
                Serving the local metro area and nearby neighborhoods
              </div>
</div>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
</section>

<footer className="bg-white">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-blue-900 text-white flex items-center justify-center tracking-tight text-sm font-medium" style={{fontFamily: '\'Fraunces\', serif'}}>
            CF
          </div>
<div className="text-slate-800 text-sm" style={{fontFamily: '\'Inter\', sans-serif'}}>ClearFlow Plumbing</div>
</div>
<div className="flex items-center gap-6 text-sm" style={{fontFamily: '\'Inter\', sans-serif'}}>
<a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors" href="tel:+1234567890">
<i className="h-4 w-4" data-lucide="phone"></i>
            (123) 456-7890
          </a>
<a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors" href="mailto:hello@clearflow.com">
<i className="h-4 w-4" data-lucide="mail"></i>
            hello@clearflow.com
          </a>
<div className="inline-flex items-center gap-3">
<a aria-label="Instagram" className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="facebook"></i>
</a>
<a aria-label="Twitter" className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>
<div className="mt-6 text-xs text-slate-500" style={{fontFamily: '\'Inter\', sans-serif'}}>
        © <span id="year">2025</span> ClearFlow Plumbing. All rights reserved.
      </div>
</div>
</footer>




    </>
  );
}
