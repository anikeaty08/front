import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile menu toggle
      const btn = document.getElementById('menuBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          menu.classList.toggle('hidden');
        });
      }
      // Current year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Initialize lucide icons with consistent stroke width
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
<p className="text-xs sm:text-sm text-slate-600">Compassionate, evidence-based pain care in Encinitas, CA</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition" href="tel:+17606504040">
<i className="w-4 h-4" data-lucide="phone"></i>
<span className="tracking-tight">760-650-4040</span>
</a>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition" href="mailto:contact@wcpaindoc.com">
<i className="w-4 h-4" data-lucide="mail"></i>
<span className="tracking-tight">contact@wcpaindoc.com</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a aria-label="West Coast Pain Specialists - Home" className="flex items-center gap-3 group" href="/">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center tracking-tighter text-sm">WC</div>
<div className="flex flex-col leading-none">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-700 transition">West Coast Pain Specialists</span>
<span className="text-[10px] sm:text-xs text-slate-500 tracking-tight">Encinitas, CA</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a aria-current="page" className="text-sm text-slate-900 font-medium hover:text-slate-700 transition" href="#">Home</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition" href="#about">About</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition" href="#conditions">Conditions</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition" href="#resources">Patient Resources</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition" href="#prp">PRP</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition" href="#testimonials">Testimonials</a>
</nav>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-800 hover:text-slate-900 hover:border-slate-400 transition" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Request Appointment
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-slate-800 transition" href="#billpay">
<i className="w-4 h-4" data-lucide="credit-card"></i>
            Online Billpay
          </a>
</div>

<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-300 h-9 w-9 text-slate-800 hover:bg-slate-50 transition" id="menuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="lg:hidden hidden border-t border-slate-200" id="mobileMenu">
<div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
<a className="py-2 text-slate-900 font-medium" href="#">Home</a>
<a className="py-2 text-slate-700 hover:text-slate-900" href="#about">About</a>
<a className="py-2 text-slate-700 hover:text-slate-900" href="#conditions">Conditions</a>
<a className="py-2 text-slate-700 hover:text-slate-900" href="#resources">Patient Resources</a>
<a className="py-2 text-slate-700 hover:text-slate-900" href="#prp">PRP</a>
<a className="py-2 text-slate-700 hover:text-slate-900" href="#testimonials">Testimonials</a>
<div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 transition" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar"></i> Request Appointment
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition" href="#billpay">
<i className="w-4 h-4" data-lucide="credit-card"></i> Online Billpay
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-slate-100 blur-3xl opacity-70"></div>
<div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
<div>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Double board-certified expertise
          </span>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">Tired of Living in Pain?</h1>
<p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">We help you reclaim your life with compassionate, evidence-based treatments tailored to your goals. From sports injuries to complex spine and neurologic conditions, we’re here to help.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition shadow-sm" href="#appointment">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
              Get Help
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition" href="#billpay">
<i className="w-5 h-5" data-lucide="credit-card"></i>
              Online Billpay
            </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="tel:+17606504040">
<i className="w-5 h-5" data-lucide="phone"></i>
              760-650-4040
            </a>
</div>

<div className="mt-8 rounded-lg border border-slate-200 bg-white p-4 sm:p-5 flex items-start gap-4">
<img alt="Dr. Brian Belnap, D.O." className="h-16 w-16 rounded-md object-cover object-center ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-900">Brian Belnap, D.O.</p>
<p className="text-sm text-slate-600">Double board-certified in Pain Management &amp; Rehabilitation Medicine</p>
<ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Sports injuries</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Spine &amp; joint disorders</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Polytraumatic injuries</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Neurologic disorders</li>
</ul>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] sm:aspect-[5/4] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
<img alt="Patient consulting with a pain management specialist" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 left-4 rounded-lg bg-white border border-slate-200 shadow-sm px-4 py-3 flex items-center gap-3">
<div className="flex items-center">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star-half"></i>
</div>
<div className="text-sm">
<span className="font-medium text-slate-900">4.7</span>
<span className="text-slate-600">· 101 Reviews</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-7">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Welcome to West Coast Pain Specialists</h2>
<p className="mt-4 text-slate-600 text-base sm:text-lg">We combine advanced diagnostics, interventional procedures, and thoughtful rehabilitation strategies to reduce pain and restore function. Our care plans are collaborative, transparent, and tailored to your life.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition" href="#appointment">
<i className="w-4 h-4" data-lucide="message-square"></i>
                Let’s Talk
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition" href="#resources">
<i className="w-4 h-4" data-lucide="file-text"></i>
                Patient Resources
              </a>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
<p className="text-sm font-medium text-slate-900">How we help</p>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-sky-600" data-lucide="target"></i>
                  Personalized treatment plans aligned to your goals
                </li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-sky-600" data-lucide="syringe"></i>
                  Interventional options including PRP and image-guided procedures
                </li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-sky-600" data-lucide="activity"></i>
                  Rehabilitation-focused recovery to restore function
                </li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-sky-600" data-lucide="clipboard-list"></i>
                  Clear education and support every step of the way
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm hover:border-slate-300 transition group">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-content-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Patient Resources</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Everything you need for your care journey, from forms to visit preparation and post-procedure guidance.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-slate-700 transition" href="#resources">
              Learn More
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm hover:border-slate-300 transition group">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-content-center">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Treatments</h3>
</div>
<p className="mt-3 text-sm text-slate-600">We use advanced medical technologies and a thorough, compassionate approach to diagnose and treat pain.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-slate-700 transition" href="#conditions">
              Learn More
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm hover:border-slate-300 transition group">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900/90 text-white grid place-content-center">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">New Patients</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Save time at your first visit. Access our patient portal and complete forms in advance.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-slate-700 transition" href="#appointment">
              Learn More
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="appointment">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-gradient-to-tr from-slate-50 to-white">
<div className="grid lg:grid-cols-3 gap-6 items-center">
<div className="lg:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Reclaim Your Life</h3>
<p className="mt-2 text-slate-600">Don’t just suffer through it. Make an appointment today—let’s build a plan that gets you moving again.</p>
<div className="mt-4 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition" href="tel:+17606504040">
<i className="w-4 h-4" data-lucide="phone"></i>
                  Call 760-650-4040
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition" href="mailto:contact@wcpaindoc.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                  Email Us
                </a>
</div>
</div>
<div className="lg:col-span-1">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<p className="text-sm font-medium text-slate-900">Quick Links</p>
<div className="mt-3 space-y-2">
<a className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 transition" href="#appointment">
                    Request Appointment
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 transition" href="#billpay" id="billpay">
                    Online Billpay
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 transition" href="#resources">
                    Patient Resources
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-700" data-lucide="map-pin"></i>
                  4405 Manchester Ave, Suite #101, Encinitas, CA 92024
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="conditions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 p-6 bg-white">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Conditions We Treat</h3>
<p className="mt-2 text-sm text-slate-600">Comprehensive evaluation and treatment for acute and chronic pain, including:</p>
<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="dot"></i>Back &amp; neck pain</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="dot"></i>Joint pain (shoulder, hip, knee)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="dot"></i>Nerve pain &amp; neuropathies</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="dot"></i>Sports &amp; overuse injuries</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="dot"></i>Polytraumatic injuries</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="dot"></i>Headache &amp; musculoskeletal disorders</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition" href="#appointment">
              Explore Options
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white" id="prp">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="droplets"></i> PRP
            </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">Platelet-Rich Plasma (PRP)</h3>
<p className="mt-2 text-sm text-slate-600">PRP harnesses your body’s natural healing mechanisms to support recovery from tendon, ligament, and joint injuries.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-sky-600 mt-0.5" data-lucide="shield-check"></i>Autologous treatment with minimal downtime</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-sky-600 mt-0.5" data-lucide="scan-line"></i>Ultrasound guidance for precision</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-sky-600 mt-0.5" data-lucide="timer"></i>Structured follow-up and rehab integration</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition" href="#appointment">
              Discuss PRP with Dr. Belnap
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">What Patients Say</h3>
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
              4.7 average · 101 reviews
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">Google</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">Yelp</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">Facebook</span>
</div>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Reviewer: Matt Cooper" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-900">Matt Cooper</p>
<div className="flex items-center gap-0.5">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
</div>
</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Dr. Belnap took the time to listen and clearly explain my options. The procedure and follow-up made a real difference in my daily life.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Reviewer: Tobye Klug" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-900">Tobye Klug</p>
<div className="flex items-center gap-0.5">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star-half"></i>
</div>
</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Professional, kind, and effective. The team made the process smooth from scheduling to follow-up. Highly recommend.</p>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<p className="text-sm font-medium text-slate-900">Professional Affiliations</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="flex items-center justify-center h-12 rounded-md border border-slate-200 text-sm text-slate-700 bg-slate-50">American Academy of Pain Medicine</div>
<div className="flex items-center justify-center h-12 rounded-md border border-slate-200 text-sm text-slate-700 bg-slate-50">AAPM&amp;R</div>
<div className="flex items-center justify-center h-12 rounded-md border border-slate-200 text-sm text-slate-700 bg-slate-50">Scripps Memorial Hospital Encinitas</div>
<div className="flex items-center justify-center h-12 rounded-md border border-slate-200 text-sm text-slate-700 bg-slate-50">Board-Certified PM&amp;R</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
<div className="grid md:grid-cols-3 gap-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-content-center">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Phone</p>
<a className="block text-sm text-slate-700 hover:text-slate-900 transition" href="tel:+17606504040">760-650-4040</a>
<p className="text-xs text-slate-500">Fax: 760-650-4057</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-content-center">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Email</p>
<a className="block text-sm text-slate-700 hover:text-slate-900 transition" href="mailto:contact@wcpaindoc.com">contact@wcpaindoc.com</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-white border border-slate-200 grid place-content-center">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Address</p>
<a className="block text-sm text-slate-700 hover:text-slate-900 transition" href="https://maps.google.com/?q=4405+Manchester+Ave,+Suite+%23101,+Encinitas,+CA+92024" rel="noopener" target="_blank">
                  4405 Manchester Ave, Suite #101<br/>Encinitas, CA 92024
                </a>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition" href="tel:+17606504040">
<i className="w-4 h-4" data-lucide="phone-call"></i>
              Request Appointment
            </a>
<div className="flex items-center gap-3 text-slate-600">
<a className="inline-flex items-center gap-2 text-sm hover:text-slate-900 transition" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>Facebook
              </a>
<a className="inline-flex items-center gap-2 text-sm hover:text-slate-900 transition" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>Instagram
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center tracking-tighter text-sm">WC</div>
<span className="text-base font-semibold tracking-tight text-slate-900">West Coast Pain Specialists</span>
</div>
<p className="mt-3 text-sm text-slate-600">Compassionate pain management in Encinitas, CA.</p>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Practice</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#">Home</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#about">About</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#conditions">Conditions</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#resources">Patient Resources</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#prp">PRP</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#testimonials">Testimonials</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Support</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#appointment">Request Appointment</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#billpay">Online Billpay</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#">Site Map</a></li>
<li><a className="text-slate-700 hover:text-slate-900 transition" href="#">Website Accessibility</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Contact</p>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<a className="text-slate-700 hover:text-slate-900 transition" href="tel:+17606504040">760-650-4040</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="printer"></i>
<span className="text-slate-700">Fax: 760-650-4057</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mail"></i>
<a className="text-slate-700 hover:text-slate-900 transition" href="mailto:contact@wcpaindoc.com">contact@wcpaindoc.com</a>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="map-pin"></i>
<a className="text-slate-700 hover:text-slate-900 transition" href="https://maps.google.com/?q=4405+Manchester+Ave,+Suite+%23101,+Encinitas,+CA+92024" rel="noopener" target="_blank">
                  4405 Manchester Ave, Suite #101, Encinitas, CA 92024
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© <span id="year"></span> West Coast Pain Specialists. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-slate-600 hover:text-slate-900 transition text-xs inline-flex items-center gap-1" href="#">
<i className="w-3.5 h-3.5" data-lucide="shield"></i> Privacy
            </a>
<a className="text-slate-600 hover:text-slate-900 transition text-xs inline-flex items-center gap-1" href="#">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Terms
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
