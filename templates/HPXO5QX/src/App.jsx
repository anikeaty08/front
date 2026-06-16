import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with stroke width 1.5
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Simple success state for Quote form
      const quoteForm = document.getElementById('quoteForm');
      const quoteSuccess = document.getElementById('quoteSuccess');
      if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
          e.preventDefault();
          quoteForm.reset();
          quoteSuccess.classList.remove('hidden');
          setTimeout(() => quoteSuccess.classList.add('hidden'), 4000);
        });
      }

      // Simple success state for Contact form
      const contactForm = document.getElementById('contactForm');
      const contactSuccess = document.getElementById('contactSuccess');
      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          contactForm.reset();
          contactSuccess.classList.remove('hidden');
          setTimeout(() => contactSuccess.classList.add('hidden'), 4000);
        });
      }

      // Year
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-white/90 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
<p className="text-xs sm:text-sm text-neutral-600">Licensed &amp; insured • 100% satisfaction guarantee</p>
<div className="hidden sm:flex items-center gap-4 text-neutral-600">
<a className="inline-flex items-center gap-2 hover:text-neutral-900 transition-colors" href="tel:+10000000000">
<i className="w-4 h-4" data-lucide="phone"></i>
<span className="text-xs sm:text-sm">Call us: (000) 000-0000</span>
</a>
<span className="h-4 w-px bg-neutral-200"></span>
<a className="inline-flex items-center gap-2 hover:text-neutral-900 transition-colors" href="mailto:hello@spiknspan.com">
<i className="w-4 h-4" data-lucide="mail"></i>
<span className="text-xs sm:text-sm">hello@spiknspan.com</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group" href="#home">
<div className="h-9 w-9 rounded-md bg-neutral-900 text-white flex items-center justify-center leading-none tracking-tight" style={{letterSpacing: '-0.5px'}}>
<span className="text-sm font-medium">SNS</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] sm:text-base font-semibold tracking-tight group-hover:opacity-90 transition">Spik 'N Span</span>
<span className="text-xs text-neutral-500 -mt-0.5">Cleaning Services</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#home">Home</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 transition" href="#quote">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Free Quote
            </a>
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-200 bg-white" id="mobileMenu">
<div className="px-4 py-3 flex flex-col">
<a className="py-2 text-sm text-neutral-800 hover:text-neutral-900" href="#home">Home</a>
<a className="py-2 text-sm text-neutral-800 hover:text-neutral-900" href="#about">About</a>
<a className="py-2 text-sm text-neutral-800 hover:text-neutral-900" href="#services">Services</a>
<a className="py-2 text-sm text-neutral-800 hover:text-neutral-900" href="#testimonials">Testimonials</a>
<a className="py-2 text-sm text-neutral-800 hover:text-neutral-900" href="#gallery">Gallery</a>
<a className="py-2 text-sm text-neutral-800 hover:text-neutral-900" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition" href="#quote">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Free Quote
          </a>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(700px 300px at 20% 0%, rgba(0,102,255,0.06), transparent 60%), radial-gradient(600px 250px at 80% 10%, rgba(0,0,0,0.04), transparent 60%)'}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-900 px-3 py-1 text-xs font-medium">
<i className="w-4 h-4" data-lucide="shield-check"></i>
              Insured &amp; Background-Checked Professionals
            </div>
<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
              Immaculate cleaning for homes and businesses
            </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl">
              We deliver reliable, detail-focused cleaning tailored to your schedule. From weekly maintenance to deep cleans, we make spaces shine—every time.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-800 transition shadow-sm" href="#quote">
<i className="w-5 h-5" data-lucide="calendar-plus"></i>
                Get a free quote
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition" href="#services">
<i className="w-5 h-5" data-lucide="list-checks"></i>
                Explore services
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkle"></i>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">4.9/5 rating</p>
<p className="text-xs text-neutral-600">Across 500+ reviews</p>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="award"></i>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Bonded &amp; insured</p>
<p className="text-xs text-neutral-600">Peace of mind</p>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="leaf"></i>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Eco options</p>
<p className="text-xs text-neutral-600">Pet &amp; kid safe</p>
</div>
</div>
</div>
</div>

<div className="mt-10">
<p className="text-xs uppercase tracking-wide text-neutral-500">Trusted by local homes &amp; businesses</p>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
<div className="h-10 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 text-sm font-medium tracking-tight" style={{letterSpacing: '-0.2px'}}>ALPHA</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 text-sm font-medium tracking-tight">NOVA</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 text-sm font-medium tracking-tight">PRIME</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 text-sm font-medium tracking-tight">CIVIC</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 text-sm font-medium tracking-tight">METRO</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 text-sm font-medium tracking-tight">ORBIT</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2" id="quote">
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Request a free quote</h2>
<p className="mt-1 text-sm text-neutral-600">Tell us about your space—get a same-day estimate.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-md px-2 py-1">
<i className="w-4 h-4" data-lucide="clock-5"></i>
<span>Response in ~15 min</span>
</div>
</div>
<form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="quoteForm">
<div className="sm:col-span-2">
<label className="text-sm font-medium text-neutral-800">Full name</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Email</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Phone</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" name="phone" placeholder="(000) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Service</label>
<select className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300" name="service">
<option>Residential Cleaning</option>
<option>Commercial Cleaning</option>
<option>Deep Cleaning</option>
<option>Move In / Move Out</option>
<option>Post-Construction</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Approx. size</label>
<select className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300" name="size">
<option>Up to 800 sq ft</option>
<option>800–1500 sq ft</option>
<option>1500–2500 sq ft</option>
<option>2500+ sq ft</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium text-neutral-800">Message</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" name="message" placeholder="Tell us about the rooms, frequency, and any specifics." rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="lock"></i>
                      Your data is protected
                    </div>
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-neutral-800 transition" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                      Get estimate
                    </button>
</div>
</form>
<div className="hidden mt-4 rounded-md border border-green-200 bg-green-50 text-green-800 px-3 py-2 text-sm" id="quoteSuccess">
                  Thank you! We’ve received your request and will contact you shortly.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 bg-white" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Comprehensive cleaning services</h2>
<p className="mt-2 text-neutral-600">Flexible schedules, transparent pricing, and a spotless finish.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-80" href="#quote">
<i className="w-5 h-5" data-lucide="clipboard-check"></i>
            Book a walkthrough
          </a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Residential Cleaning</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Routine, weekly, bi-weekly, or monthly home cleaning.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Kitchens, bathrooms, living areas</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Dusting, vacuuming, mopping</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Appliance exterior wipe-downs</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Commercial Cleaning</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Reliable office and retail maintenance cleaning.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Desks, conference rooms, lobbies</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Window &amp; glass spot cleaning</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>After-hours availability</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="soap"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Deep Cleaning</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Detail-oriented top-to-bottom refresh.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Baseboards, vents, fixtures</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Inside cabinets &amp; appliances</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Detail scrubbing &amp; sanitizing</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="truck"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Move In / Move Out</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Perfect for renters and realtors.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Inside closets &amp; drawers</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Fridge/oven interior (on request)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Rental-ready polish</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="construction"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Post-Construction</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Dust removal and finish detailing.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>HEPA vacuuming</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Paint &amp; adhesive residue</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Final punch-list cleaning</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="recycle"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Green Cleaning</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Non-toxic, biodegradable supplies on request.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Allergy-friendly options</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Pet &amp; child safe</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i>Fragrance-free choices</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 bg-neutral-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
<div className="mt-6 space-y-5">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center"><span className="text-sm font-medium">1</span></div>
<div>
<h4 className="text-base font-semibold tracking-tight">Book your walkthrough</h4>
<p className="text-sm text-neutral-600 mt-1">Tell us about your space and schedule. We’ll tailor a plan that fits.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center"><span className="text-sm font-medium">2</span></div>
<div>
<h4 className="text-base font-semibold tracking-tight">We arrive on time, ready to clean</h4>
<p className="text-sm text-neutral-600 mt-1">Uniformed, vetted pros with pro-grade supplies and checklists.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center"><span className="text-sm font-medium">3</span></div>
<div>
<h4 className="text-base font-semibold tracking-tight">Quality check</h4>
<p className="text-sm text-neutral-600 mt-1">Supervisors verify every detail so you don’t have to.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center"><span className="text-sm font-medium">4</span></div>
<div>
<h4 className="text-base font-semibold tracking-tight">Enjoy your spotless space</h4>
<p className="text-sm text-neutral-600 mt-1">Set up recurring service to keep it that way.</p>
</div>
</div>
</div>
<div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3">
<i className="w-5 h-5 text-green-600" data-lucide="shield-check"></i>
<p className="text-sm text-neutral-700"><span className="font-semibold">Guarantee:</span> If you’re not thrilled, we’ll re-clean for free.</p>
</div>
</div>
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why choose us</h2>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-700" data-lucide="badge-check"></i>
<p className="text-sm font-semibold tracking-tight">Vetted professionals</p>
</div>
<p className="mt-2 text-sm text-neutral-600">Background-checked, trained, and supervised.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-700" data-lucide="timer"></i>
<p className="text-sm font-semibold tracking-tight">On-time, every time</p>
</div>
<p className="mt-2 text-sm text-neutral-600">Reliable schedules with reminders.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-700" data-lucide="wallet"></i>
<p className="text-sm font-semibold tracking-tight">Transparent pricing</p>
</div>
<p className="mt-2 text-sm text-neutral-600">Clear estimates—no surprises.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-700" data-lucide="leaf"></i>
<p className="text-sm font-semibold tracking-tight">Eco-friendly options</p>
</div>
<p className="mt-2 text-sm text-neutral-600">Non-toxic products upon request.</p>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4 text-center">
<p className="text-2xl font-semibold tracking-tight">1,200+</p>
<p className="text-xs text-neutral-600">Spaces cleaned</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4 text-center">
<p className="text-2xl font-semibold tracking-tight">4.9</p>
<p className="text-xs text-neutral-600">Average rating</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4 text-center">
<p className="text-2xl font-semibold tracking-tight">24h</p>
<p className="text-xs text-neutral-600">Turnaround quotes</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 bg-white" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Recent results</h2>
<p className="mt-2 text-neutral-600">Before-and-after moments from our clients.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-80" href="#contact">
<i className="w-5 h-5" data-lucide="image-plus"></i>
            Request a portfolio
          </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">

<img alt="Pristine kitchen" className="aspect-square w-full rounded-lg object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Sparkling bathroom" className="aspect-square w-full rounded-lg object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1584622781564-1a94a0b5b9b8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Bright living room" className="aspect-square w-full rounded-lg object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Office lobby" className="aspect-square w-full rounded-lg object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Clean workspace" className="aspect-square w-full rounded-lg object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Neat hallway" className="aspect-square w-full rounded-lg object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 bg-neutral-50" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What clients say</h2>
<p className="mt-2 text-neutral-600">Real feedback from homeowners and facility managers.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
            4.9 average rating
          </div>
</div>
<div className="mt-8 overflow-x-auto">
<div className="flex gap-4 sm:gap-6 snap-x snap-mandatory">

<div className="min-w-[260px] sm:min-w-[320px] snap-start rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Maya R.</p>
<p className="text-xs text-neutral-600">Residential</p>
</div>
</div>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700">They were punctual, thorough, and friendly. My kitchen hasn’t looked this good in years!</p>
</div>
<div className="min-w-[260px] sm:min-w-[320px] snap-start rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Daniel T.</p>
<p className="text-xs text-neutral-600">Office Manager</p>
</div>
</div>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star-half"></i>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700">Dependable and discreet. Our team loves coming into a clean office each morning.</p>
</div>
<div className="min-w-[260px] sm:min-w-[320px] snap-start rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Ava C.</p>
<p className="text-xs text-neutral-600">Property Manager</p>
</div>
</div>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700">Their move-out clean saved us hours and impressed our new tenants. Highly recommend.</p>
</div>
<div className="min-w-[260px] sm:min-w-[320px] snap-start rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Ethan P.</p>
<p className="text-xs text-neutral-600">Homeowner</p>
</div>
</div>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700">Great communication and attention to detail. The team is courteous and efficient.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 bg-white" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Spik 'N Span</h2>
<p className="mt-3 text-neutral-700">We’re a locally owned, client-first cleaning company built on trust, reliability, and meticulous standards. Our vetted cleaners follow detailed checklists and use high-quality, safe supplies to deliver consistent results.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-700" data-lucide="users"></i>
<p className="text-sm font-semibold tracking-tight">Local &amp; reliable</p>
</div>
<p className="mt-1 text-sm text-neutral-600">Serving our community with pride.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-700" data-lucide="sprout"></i>
<p className="text-sm font-semibold tracking-tight">Sustainable practices</p>
</div>
<p className="mt-1 text-sm text-neutral-600">Reducing waste, improving air quality.</p>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-neutral-800 transition" href="#contact">
<i className="w-4 h-4" data-lucide="phone-call"></i>
                Talk to a specialist
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 transition" href="#services">
<i className="w-4 h-4" data-lucide="info"></i>
                Learn more
              </a>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200">
<img alt="Cleaning team at work" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 bg-neutral-50" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Get in touch</h2>
<p className="mt-2 text-neutral-600">We respond quickly. Call, email, or send a message.</p>
<div className="mt-6 space-y-4">
<a className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition" href="tel:+10000000000">
<i className="w-5 h-5 text-neutral-700" data-lucide="phone"></i>
<div>
<p className="text-sm font-semibold tracking-tight">Phone</p>
<p className="text-sm text-neutral-600">(000) 000-0000</p>
</div>
</a>
<a className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition" href="mailto:hello@spiknspan.com">
<i className="w-5 h-5 text-neutral-700" data-lucide="mail"></i>
<div>
<p className="text-sm font-semibold tracking-tight">Email</p>
<p className="text-sm text-neutral-600">hello@spiknspan.com</p>
</div>
</a>
<div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4">
<i className="w-5 h-5 text-neutral-700" data-lucide="map-pin"></i>
<div>
<p className="text-sm font-semibold tracking-tight">Address</p>
<p className="text-sm text-neutral-600">123 Main St, Suite 200, Your City</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4">
<i className="w-5 h-5 text-neutral-700" data-lucide="clock"></i>
<div>
<p className="text-sm font-semibold tracking-tight">Hours</p>
<p className="text-sm text-neutral-600">Mon–Sat: 8am–6pm</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2">
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-6 sm:p-7">
<h3 className="text-lg font-semibold tracking-tight">Send a message</h3>
<form className="mt-4 space-y-4" id="contactForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium text-neutral-800">Name</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Email</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Subject</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" placeholder="How can we help?" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-neutral-800">Message</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 placeholder:text-neutral-400" placeholder="Tell us about your cleaning needs..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="shield"></i>
                        We never share your details
                      </div>
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-neutral-800 transition" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                        Send message
                      </button>
</div>
</form>
<div className="hidden mt-3 rounded-md border border-green-200 bg-green-50 text-green-800 px-3 py-2 text-sm" id="contactSuccess">
                    Thanks! We’ll reach out shortly.
                  </div>
</div>
<div className="relative">
<div className="absolute inset-0">
<iframe className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509399!2d144.95373531531596!3d-37.816279742012754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1630923792385" style={{filter: 'grayscale(100%)', border: '0'}} title="Map"></iframe>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-3" href="#home">
<div className="h-9 w-9 rounded-md bg-neutral-900 text-white flex items-center justify-center leading-none tracking-tight" style={{letterSpacing: '-0.5px'}}>
<span className="text-sm font-medium">SNS</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight">Spik 'N Span</span>
<span className="text-xs text-neutral-500 -mt-0.5">Cleaning Services</span>
</div>
</a>
<p className="mt-4 text-sm text-neutral-600">Professional, dependable cleaning—every visit, every room.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-neutral-200 hover:bg-neutral-50 transition" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-neutral-200 hover:bg-neutral-50 transition" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-neutral-200 hover:bg-neutral-50 transition" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Company</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#about">About</a></li>
<li><a className="hover:text-neutral-900" href="#services">Services</a></li>
<li><a className="hover:text-neutral-900" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-neutral-900" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Support</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#contact">Contact</a></li>
<li><a className="hover:text-neutral-900" href="#">FAQ</a></li>
<li><a className="hover:text-neutral-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Policies</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-neutral-900" href="#">Insurance &amp; Bonding</a></li>
</ul>
</div>
</div>
<div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© <span id="year"></span> Spik 'N Span Cleaning Services. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<a className="hover:text-neutral-800" href="#">Accessibility</a>
<a className="hover:text-neutral-800" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
