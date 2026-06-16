import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.addEventListener('DOMContentLoaded', function() {
        // Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Mobile menu
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        if (btn && menu) {
          btn.addEventListener('click', () => {
            const isOpen = !menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', String(!isOpen));
            btn.innerHTML = isOpen
              ? '<i data-lucide="menu" class="w-5 h-5"></i>'
              : '<i data-lucide="x" class="w-5 h-5"></i>';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }

        // Form submission (demo)
        const form = document.getElementById('apptForm');
        const toast = document.getElementById('formToast');
        if (form && toast) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            toast.classList.remove('hidden');
            form.reset();
            setTimeout(() => toast.classList.add('hidden'), 5000);
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-emerald-600 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-[13px]">
        Now accepting new patients • Same-week appointments available
      </div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-emerald-600 text-white grid place-items-center tracking-tight text-sm font-semibold group-hover:shadow-sm transition">
              A
            </div>
<span className="text-[15px] font-semibold tracking-tight">Align Physical Therapy</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#team">Providers</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#testimonials">Testimonials</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#insurance">Insurance</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
              (123) 456-7890
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-emerald-700 hover:shadow-sm transition focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" href="#booking">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Book Appointment
            </a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 hover:bg-slate-50 hover:border-slate-400 transition" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="px-4 py-3 space-y-2">
<a className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#services">Services</a>
<a className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#team">Providers</a>
<a className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#testimonials">Testimonials</a>
<a className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#insurance">Insurance</a>
<a className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#contact">Contact</a>
<div className="pt-2 flex items-center gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
              Call
            </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium hover:bg-emerald-700 transition" href="#booking">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Book
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center py-14 md:py-20">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> One-on-one, 45–60 minute sessions
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl tracking-tight font-semibold text-slate-900">
              Get back to moving better with personalized physical therapy
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-600">
              Evidence-based care for pain, injury, and performance. We take time to understand your goals and create a plan that fits your life.
            </p>
<ul className="mt-6 space-y-3 text-sm text-slate-700">
<li className="flex items-center gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</span>
                Same-week availability
              </li>
<li className="flex items-center gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</span>
                Insurance accepted + transparent self-pay
              </li>
<li className="flex items-center gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</span>
                Sports, orthopedic, and post-op rehab
              </li>
</ul>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-700 hover:shadow-sm transition focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" href="#booking">
<i className="w-4.5 h-4.5" data-lucide="calendar-check"></i>
                Request an Appointment
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" href="#services">
<i className="w-4.5 h-4.5" data-lucide="stethoscope"></i>
                Explore Services
              </a>
</div>
<div className="mt-6 flex items-center gap-4 text-[13px] text-slate-600">
<div className="flex -space-x-2">
<img alt="Patient" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Patient" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Patient" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span>Trusted by 1,200+ patients in our community</span>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-50 blur-2xl opacity-70"></div>
<div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
<img alt="Physical therapy session" className="rounded-xl object-cover w-full h-[380px] sm:h-[440px]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="clock-4"></i>
</span>
<div className="text-sm">
<div className="font-medium">Same-week visits</div>
<div className="text-slate-600">Convenient hours</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="medal"></i>
</span>
<div className="text-sm">
<div className="font-medium">Board-certified</div>
<div className="text-slate-600">DPT clinicians</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</span>
<div className="text-sm">
<div className="font-medium">Insurance-friendly</div>
<div className="text-slate-600">HSA/FSA welcome</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</span>
<div className="text-sm">
<div className="font-medium">Performance care</div>
<div className="text-slate-600">Return to sport</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Services</h2>
<p className="mt-2 text-slate-600">One-on-one, individualized care for every body and every goal.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 underline-offset-4 hover:underline" href="#booking">
            Book a consult
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Orthopedic Rehab</h3>
<p className="mt-2 text-sm text-slate-600">Neck, back, shoulder, hip, and knee pain with hands-on treatment and progressive exercise.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Manual therapy</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Strength &amp; mobility</li>
</ul>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="heart-pulse"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Sports &amp; Performance</h3>
<p className="mt-2 text-sm text-slate-600">From return-to-run to on-field reconditioning and performance tuning.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Return-to-sport plans</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Strength testing</li>
</ul>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="scalpel"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Post-Op Care</h3>
<p className="mt-2 text-sm text-slate-600">Evidence-based protocols after ACL, rotator cuff, TKA/THA, and more.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Surgeon collaboration</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Milestone tracking</li>
</ul>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="hand"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Hands-On Therapy</h3>
<p className="mt-2 text-sm text-slate-600">Joint mobilizations, soft tissue work, and pain modulation techniques.</p>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="stretch-vertical"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Mobility &amp; Prevention</h3>
<p className="mt-2 text-sm text-slate-600">Long-term joint health, posture, and movement efficiency programs.</p>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="baby"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Pelvic Health</h3>
<p className="mt-2 text-sm text-slate-600">Support for prenatal, postpartum, and pelvic floor concerns.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-200 bg-white" id="team">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:flex sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Your Care Team</h2>
<p className="mt-2 text-slate-600">Licensed Doctors of Physical Therapy delivering one-on-one care.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 underline-offset-4 hover:underline" href="#booking">
            Meet with us
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<img alt="Clinician" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Dr. Maya Chen, DPT</h3>
<span className="inline-flex items-center gap-1 text-[12px] text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Downtown
                </span>
</div>
<p className="mt-2 text-sm text-slate-600">Ortho, post-op, and return-to-run specialist. Board-certified OCS.</p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[12px] border border-emerald-100">Ortho</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[12px] border border-emerald-100">Running</span>
</div>
</div>
</article>
<article className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<img alt="Clinician" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Dr. Rafael Ortiz, DPT</h3>
<span className="inline-flex items-center gap-1 text-[12px] text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Riverside
                </span>
</div>
<p className="mt-2 text-sm text-slate-600">Sports rehab, ACL, and performance testing with force profiling.</p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[12px] border border-emerald-100">Sports</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[12px] border border-emerald-100">ACL</span>
</div>
</div>
</article>
<article className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<img alt="Clinician" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Dr. Samira Patel, DPT</h3>
<span className="inline-flex items-center gap-1 text-[12px] text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Westside
                </span>
</div>
<p className="mt-2 text-sm text-slate-600">Pelvic health and postpartum care with individualized plans.</p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[12px] border border-emerald-100">Pelvic Health</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[12px] border border-emerald-100">Postpartum</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">What patients say</h2>
<p className="mt-2 text-slate-600">Real stories from people we’ve helped get back to what they love.</p>
</div>
<div className="hidden sm:flex items-center text-amber-600">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<span className="ml-2 text-sm text-slate-700">4.9/5 average (400+)</span>
</div>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<figure className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-sm font-medium">Taylor R.</div>
<div className="text-xs text-slate-600">Runner • Knee pain</div>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-slate-700">After 6 weeks I ran pain-free for the first time in a year. They explained everything and gave me a plan I could follow.</blockquote>
</figure>
<figure className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-sm font-medium">Marcus P.</div>
<div className="text-xs text-slate-600">Shoulder rehab</div>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-slate-700">Hands-on care plus strengthening got me back to the gym faster than I expected. Highly recommend.</blockquote>
</figure>
<figure className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-sm font-medium">Ana V.</div>
<div className="text-xs text-slate-600">Post-op ACL</div>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-slate-700">They coordinated with my surgeon and kept me motivated through every milestone.</blockquote>
</figure>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-200 bg-white" id="booking">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Request an appointment</h2>
<p className="mt-2 text-slate-600">Tell us about your goals and availability. We’ll confirm within one business day.</p>
<form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" id="apptForm">
<div className="sm:col-span-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="fullName">Full name</label>
<input className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="fullName" name="fullName" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
<input className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="email" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Phone</label>
<input className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="phone" name="phone" placeholder="(123) 456-7890" required="" type="tel"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="service">Service</label>
<select className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="service" name="service">
<option>Orthopedic Evaluation</option>
<option>Sports Rehab</option>
<option>Post-Op Care</option>
<option>Pelvic Health</option>
<option>Follow-up Visit</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="date">Preferred date</label>
<input className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="date" name="date" type="date"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="time">Preferred time</label>
<select className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="time" name="time">
<option>Morning</option>
<option>Midday</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="notes">Notes</label>
<textarea className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" id="notes" name="notes" placeholder="Tell us about your goals, pain, or surgery (if applicable)..." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-start gap-3">
<span className="inline-flex h-5 w-5 items-center justify-center rounded border border-slate-300 bg-slate-100 text-slate-500">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
</span>
<p className="text-[13px] text-slate-600">By submitting, you agree to be contacted about your appointment. We respect your privacy.</p>
</div>
<div className="sm:col-span-2 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-emerald-700 hover:shadow-sm transition focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Submit request
                </button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
                  Or call us
                </a>
</div>
</form>
<div className="mt-4 hidden rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" id="formToast">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                Thanks! We received your request and will reach out shortly.
              </div>
</div>
</div>

<aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
<h3 className="text-xl font-semibold tracking-tight">What to expect</h3>
<ul className="mt-4 space-y-3 text-sm text-slate-700">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-6 w-6 rounded-md bg-white border border-slate-200 text-emerald-700 grid place-items-center">
<i className="w-4 h-4" data-lucide="file-check"></i>
</span>
                Comprehensive evaluation, movement screen, and goal setting.
              </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-6 w-6 rounded-md bg-white border border-slate-200 text-emerald-700 grid place-items-center">
<i className="w-4 h-4" data-lucide="hand-heart"></i>
</span>
                Hands-on treatment paired with a personalized program.
              </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-6 w-6 rounded-md bg-white border border-slate-200 text-emerald-700 grid place-items-center">
<i className="w-4 h-4" data-lucide="list-checks"></i>
</span>
                Clear milestones and home exercises with video guidance.
              </li>
</ul>
<div className="mt-6 h-px bg-slate-200"></div>
<h4 className="mt-6 text-sm font-medium text-slate-900">Transparent pricing</h4>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-slate-600">Initial evaluation</div>
<div className="mt-1 text-lg font-semibold">$160–$220</div>
<div className="mt-1 text-[12px] text-slate-500">Insurance may apply</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-slate-600">Follow-up visit</div>
<div className="mt-1 text-lg font-semibold">$120–$180</div>
<div className="mt-1 text-[12px] text-slate-500">Packages available</div>
</div>
</div>
<div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="info"></i>
<p>We’ll verify your benefits before your first visit and provide an estimate.</p>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="py-14" id="insurance">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Insurance &amp; billing</h2>
<p className="mt-2 text-slate-600">We accept most major plans and offer superbill receipts for out-of-network.</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium tracking-tight text-slate-800">AET</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium tracking-tight text-slate-800">BCBS</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium tracking-tight text-slate-800">UHC</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium tracking-tight text-slate-800">CIG</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium tracking-tight text-slate-800">MED</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium tracking-tight text-slate-800">VA</div>
</div>
<div className="mt-6 text-sm text-slate-600">
          Don’t see your plan? Contact us — we can check your benefits and provide options.
        </div>
</div>
</section>

<section className="py-16 border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Frequently asked questions</h2>
<div className="mt-8 grid lg:grid-cols-2 gap-6">
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm transition">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900">
              Do I need a referral?
              <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-300 text-slate-700 group-open:rotate-180 transition">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Direct access allows you to see a physical therapist without a referral in most cases. Some insurance plans may require one — we’ll help you check.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900">
              What should I wear and bring?
              <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-300 text-slate-700 group-open:rotate-180 transition">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Wear comfortable clothes you can move in (e.g., shorts for knee issues). Bring ID, insurance card, and any imaging or surgical notes if applicable.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900">
              How long are sessions?
              <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-300 text-slate-700 group-open:rotate-180 transition">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Initial evaluations are typically 60 minutes. Follow-ups are 45–60 minutes depending on your plan.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900">
              Do you offer telehealth?
              <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-300 text-slate-700 group-open:rotate-180 transition">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Yes, virtual visits are available when appropriate for coaching, progression, and home program updates.</p>
</details>
</div>
</div>
</section>

<section className="py-16" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Visit us</h2>
<p className="mt-2 text-slate-600">Two convenient locations with free parking and elevator access.</p>
<div className="mt-6 space-y-4">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</span>
<div className="text-sm">
<div className="font-medium">Downtown Clinic</div>
<div className="text-slate-600">123 Main St, Suite 400, City, ST 12345</div>
<div className="mt-1 flex items-center gap-4 text-[13px] text-slate-600">
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock-4"></i> M–F 7a–7p</span>
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="parking-square"></i> Free parking</span>
</div>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
<iframe className="w-full h-56" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840148653088!2d144.9537363153169!3d-37.81627977975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjYiUyAxNDTCsDU3JzI2LjQiRQ!5e0!3m2!1sen!2sus!4v1711840000000" title="Map Downtown"></iframe>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</span>
<div className="text-sm">
<div className="font-medium">Riverside Clinic</div>
<div className="text-slate-600">456 River Rd, Suite 210, City, ST 12345</div>
<div className="mt-1 flex items-center gap-4 text-[13px] text-slate-600">
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock-4"></i> M–Sat 8a–6p</span>
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="accessible"></i> ADA accessible</span>
</div>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
<iframe className="w-full h-56" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840148653088!2d144.9637363153169!3d-37.81627977975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjYiUyAxNDTCsDU3JzM2LjQiRQ!5e0!3m2!1sen!2sus!4v1711840000001" title="Map Riverside"></iframe>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
<h3 className="text-xl font-semibold tracking-tight">Contact</h3>
<div className="mt-4 space-y-3 text-sm">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center"><i className="w-5 h-5" data-lucide="phone"></i></span>
<a className="text-slate-900 hover:underline" href="tel:+1234567890">(123) 456-7890</a>
</div>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center"><i className="w-5 h-5" data-lucide="mail"></i></span>
<a className="text-slate-900 hover:underline" href="mailto:hello@alignpt.com">hello@alignpt.com</a>
</div>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center"><i className="w-5 h-5" data-lucide="calendar"></i></span>
<a className="text-slate-900 hover:underline" href="#booking">Request an appointment</a>
</div>
</div>
<div className="mt-6 h-px bg-slate-200"></div>
<h4 className="mt-6 text-sm font-medium text-slate-900">Follow</h4>
<div className="mt-3 flex items-center gap-2">
<a aria-label="Instagram" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition" href="#">
<i className="w-4.5 h-4.5" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition" href="#">
<i className="w-4.5 h-4.5" data-lucide="facebook"></i>
</a>
<a aria-label="YouTube" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition" href="#">
<i className="w-4.5 h-4.5" data-lucide="youtube"></i>
</a>
</div>
<div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="alert-triangle"></i>
<p>For emergencies, call 911 or go to the nearest emergency room.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Ready to start feeling better?</h3>
<p className="mt-2 text-slate-600">Book your evaluation and get a plan tailored to you.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-700 hover:shadow-sm transition focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" href="#booking">
<i className="w-4.5 h-4.5" data-lucide="calendar-plus"></i>
                Book now
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition" href="tel:+1234567890">
<i className="w-4.5 h-4.5" data-lucide="phone"></i>
                Call the clinic
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
<div>
<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-md bg-emerald-600 text-white grid place-items-center text-sm font-semibold tracking-tight">A</div>
<span className="text-[14px] font-semibold tracking-tight">Align PT</span>
</a>
<p className="mt-3 text-slate-600">Personalized physical therapy for pain, injury, and performance.</p>
</div>
<div>
<div className="font-medium text-slate-900">Explore</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-600 hover:text-slate-900" href="#services">Services</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#team">Providers</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#testimonials">Testimonials</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#insurance">Insurance</a></li>
</ul>
</div>
<div>
<div className="font-medium text-slate-900">Resources</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-600 hover:text-slate-900" href="#">Patient forms</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Blog</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a></li>
</ul>
</div>
<div>
<div className="font-medium text-slate-900">Stay in touch</div>
<form className="mt-3 flex gap-2">
<input className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Your email" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-emerald-700 transition" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                Join
              </button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-600">
<p>© <span id="year"></span> Align Physical Therapy. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-900" href="#">Terms</a>
<span className="text-slate-300">•</span>
<a className="hover:text-slate-900" href="#">Privacy</a>
<span className="text-slate-300">•</span>
<a className="hover:text-slate-900" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
