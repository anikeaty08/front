import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['"DM Sans"', 'sans-serif'] }
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        // Set dynamic year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Scroll reveal animation
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Form handling
        const form = document.getElementById('quoteForm');
        const submitBtn = document.getElementById('submitBtn');
        const modal = document.getElementById('success-modal');
        const modalContent = document.getElementById('success-modal-content');
        const closeBtn = document.getElementById('close-modal-btn');

        if(form && submitBtn) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // UX: Disable button and show sending state
            const originalHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<iconify-icon icon="solar:plain-linear" class="animate-pulse text-lg"></iconify-icon> Sending...';

            // Simulate submission
            setTimeout(() => {
              // Trigger modal feedback
              modal.classList.remove('hidden');
              
              requestAnimationFrame(() => {
                modal.classList.add('flex', 'opacity-100');
                modal.classList.remove('opacity-0');
                modalContent.classList.add('scale-100');
                modalContent.classList.remove('scale-95');
              });
              
              // Reset UI safely behind modal
              form.reset();
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalHTML;
            }, 1200);
          });
        }

        // Close modal logic
        if(closeBtn) {
          closeBtn.addEventListener('click', () => {
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
            }, 300);
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="skip text-sm" href="#main">Skip to content</a>

<nav aria-label="Site header" className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
<div className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl flex items-center justify-between px-5 py-3 shadow-2xl">
<a aria-label="D &amp; B Garage Doors home" className="flex items-center gap-3 cursor-pointer" href="#top">
<div aria-hidden="true" className="h-10 w-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center font-semibold text-sm tracking-tight text-red-400">D&amp;B</div>
<div className="hidden sm:block">
<div className="font-semibold text-sm tracking-tight text-slate-50">D&amp;B Garage Doors</div>
<div className="text-xs text-slate-400 mt-0.5">Palm Beach County, FL</div>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="cursor-pointer transition-colors duration-200 hover:text-slate-50" href="#services">Services</a>
<a className="cursor-pointer transition-colors duration-200 hover:text-slate-50" href="#service-areas">Areas</a>
<a className="cursor-pointer transition-colors duration-200 hover:text-slate-50" href="/blog/">Blog</a>
<a className="cursor-pointer transition-colors duration-200 hover:text-slate-50" href="#contact">Contact</a>
</div>
<a aria-label="Call D &amp; B Garage Doors" className="js-phone-link cursor-pointer rounded-xl bg-white text-slate-950 px-5 py-2.5 text-sm font-semibold transition-all hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950" href="tel:+15613055853">
<span className="js-phone-display">(561) 305-5853</span>
</a>
</div>
</nav>
<main id="main">

<section aria-label="Hero" className="relative min-h-[85vh] flex items-center overflow-hidden pt-32 pb-20" id="top">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 js-blobs z-0">
<div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] opacity-20 rounded-full blur-[80px]" style={{background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)', animation: 'blob-morph 15s ease-in-out infinite, float 12s ease-in-out infinite'}}></div>
<div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] opacity-10 rounded-full blur-[80px]" style={{background: 'radial-gradient(circle, #f87171 0%, transparent 70%)', animation: 'blob-morph 18s ease-in-out infinite reverse, float 14s ease-in-out infinite 2s'}}></div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-5" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)'}}></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm mb-8">
<iconify-icon className="text-sm text-red-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                Licensed &amp; Insured • Same-Day Service
              </div>

<h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-50" style={{transitionDelay: '0.1s'}}>
                Palm Beach County's <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">Most Trusted</span> <br/>
                Garage Door Company
              </h1>
<p className="reveal mt-6 text-base text-slate-400 max-w-lg leading-relaxed" style={{transitionDelay: '0.2s'}}>
                At D&amp;B Garage Doors, we provide reliable garage door repair, installation, and emergency service across Palm Beach County. Call now for fast help and a free estimate.
              </p>
<div className="reveal flex flex-wrap gap-4 mt-10" style={{transitionDelay: '0.3s'}}>
<a className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950" href="tel:+15613055853">
                  Call Now
                  <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950" href="#contact">
                  Get a Free Quote
                </a>
</div>
</div>

<div className="reveal" style={{transitionDelay: '0.2s'}}>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 grid gap-6 text-center">
<div className="rounded-2xl bg-slate-50 text-slate-950 p-8 shadow-inner">
<p className="text-xs font-semibold tracking-tight text-slate-500 uppercase">Serving South Florida</p>
<p className="text-5xl font-semibold tracking-tight mt-4 text-slate-900">D&amp;B</p>
<p className="text-lg font-semibold tracking-tight mt-2 text-slate-600">GARAGE DOOR REPAIR</p>
<p className="text-2xl font-semibold tracking-tight mt-4 text-red-600">FREE ESTIMATES</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-5">
<p className="text-red-400 font-semibold text-lg tracking-tight">Garage Door Services by D&amp;B</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Services" className="py-24 border-t border-white/10 bg-slate-950/50" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="reveal max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-tight text-red-400">What We Do</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">Our Services</h2>
<p className="mt-4 text-sm text-slate-400 leading-relaxed">Professional garage door solutions with fast response times. Get a free quote for any service below.</p>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group cursor-pointer">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:smart-home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-red-400 transition-colors">Garage Door Installation</p>
<p className="mt-3 text-sm leading-relaxed text-slate-400">Exceptional installation services featuring a variety of styles. We assist you in selecting the ideal option and ensure it is installed to the highest standard.</p>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group cursor-pointer" style={{transitionDelay: '0.1s'}}>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-red-400 transition-colors">Emergency Repair</p>
<p className="mt-3 text-sm leading-relaxed text-slate-400">If your door is malfunctioning, we offer rapid emergency services to diagnose and fix issues using high-quality parts for lasting smooth operation.</p>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group cursor-pointer" style={{transitionDelay: '0.2s'}}>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-red-400 transition-colors">Opener Repair</p>
<p className="mt-3 text-sm leading-relaxed text-slate-400">If your opener won't respond or makes grinding noises, we'll diagnose sensors, settings, and drive components to restore safe, reliable operation.</p>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group cursor-pointer">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-red-400 transition-colors">Spring Repair</p>
<p className="mt-3 text-sm leading-relaxed text-slate-400">Broken or worn springs can make your door dangerously heavy. We replace springs with the correct sizing and balance so the door lifts smoothly.</p>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group cursor-pointer" style={{transitionDelay: '0.1s'}}>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:link-broken-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-red-400 transition-colors">Cable Repair</p>
<p className="mt-3 text-sm leading-relaxed text-slate-400">Frayed cables can cause uneven lifting and off-track issues. We replace lift cables and reset the system so your door tracks level and operates safely.</p>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group cursor-pointer" style={{transitionDelay: '0.2s'}}>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-red-400 transition-colors">Tune-Up &amp; Maintenance</p>
<p className="mt-3 text-sm leading-relaxed text-slate-400">Prevent breakdowns and reduce noise with a full inspection, lubrication, adjustments, and safety checks to protect your opener over time.</p>
</article>
</div>
</div>
</section>

<section aria-label="Testimonials" className="py-24 border-t border-white/10" id="testimonials">
<div className="mx-auto max-w-7xl px-6">
<div className="reveal max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-tight text-red-400">Client Voices</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">Testimonials</h2>
<p className="mt-4 text-sm text-slate-400 leading-relaxed">Three recent 5-star experiences from homeowners. Get your free quote today.</p>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between transition-all hover:bg-white/10">
<div>
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">"Fast and professional."</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-400">Our spring snapped and the door wouldn't open. They arrived quickly, explained the options, and had it fixed the same day. Great work.</p>
</div>

<div className="mt-8 border-t border-white/10 pt-6">
<p className="text-sm font-semibold tracking-tight text-slate-100">Michael R.</p>
<p className="text-xs text-slate-500 mt-1">Boca Raton, FL</p>
</div>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between transition-all hover:bg-white/10" style={{transitionDelay: '0.1s'}}>
<div>
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">"Honest pricing &amp; great service."</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-400">The opener stopped working out of nowhere. They diagnosed it fast, fixed the problem, and the price matched the quote. Highly recommend.</p>
</div>

<div className="mt-8 border-t border-white/10 pt-6">
<p className="text-sm font-semibold tracking-tight text-slate-100">Sandra L.</p>
<p className="text-xs text-slate-500 mt-1">West Palm Beach, FL</p>
</div>
</article>
<article className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between transition-all hover:bg-white/10" style={{transitionDelay: '0.2s'}}>
<div>
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">"Great installation."</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-400">We upgraded to a new door and opener. The install was clean, the door is quiet, and everything was tuned perfectly. Excellent experience.</p>
</div>

<div className="mt-8 border-t border-white/10 pt-6">
<p className="text-sm font-semibold tracking-tight text-slate-100">James T.</p>
<p className="text-xs text-slate-500 mt-1">Delray Beach, FL</p>
</div>
</article>
</div>
</div>
</section>

<section aria-label="Contact" className="py-24 border-t border-white/10 bg-slate-950/50 relative overflow-hidden" id="contact">
<div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-red-500/10" style={{animation: 'pulse-ring 6s ease-in-out infinite'}}></div>
<div className="mx-auto max-w-3xl px-6 relative z-10">
<div className="reveal rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-slate-50">Connect with Us</h2>
<p className="mt-3 text-center text-sm text-slate-400">Request Service Today for a Free Estimate</p>
<form aria-label="Contact form" className="mt-10 grid gap-6" id="quoteForm">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold tracking-tight mb-2 text-slate-400 uppercase" htmlFor="name">Your Name</label>
<input autocomplete="name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-50 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold tracking-tight mb-2 text-slate-400 uppercase" htmlFor="phone">Phone Number</label>
<input autocomplete="tel" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-50 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" id="phone" inputmode="tel" name="phone" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold tracking-tight mb-2 text-slate-400 uppercase" htmlFor="message">Describe the Issue</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-50 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-y" id="message" name="message" placeholder="My garage door spring broke..." required="" rows="4"></textarea>
</div>
<div className="mt-4 flex flex-col items-center">

<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed" id="submitBtn" type="submit">
                  Send Request
                  <iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-xs text-slate-500 text-center mt-4">For immediate emergencies, call <a className="text-slate-300 hover:text-white transition-colors" href="tel:+15613055853">(561) 305-5853</a>.</p>
</div>
</form>
</div>
</div>
</section>
</main>


<footer aria-label="Footer" className="border-t border-white/10 py-12 bg-slate-950">
<div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 text-center sm:text-left">
<div>
<p className="text-base font-semibold tracking-tight text-slate-50">D&amp;B Garage Doors</p>
<p className="mt-2 text-sm text-slate-400 max-w-xs">Premium garage door repair &amp; installation serving Palm Beach County, FL.</p>
</div>
<div className="flex flex-col items-center sm:items-end gap-2">
<p className="text-xs font-semibold tracking-tight text-slate-500 uppercase">Contact</p>
<a className="text-sm text-slate-300 hover:text-white transition-colors duration-200" href="mailto:anthony@dabgaragedoors.us">anthony@dabgaragedoors.us</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors duration-200" href="tel:+15613055853">(561) 305-5853</a>
</div>
</div>
<div className="mx-auto max-w-7xl px-6 mt-12 border-t border-white/5 pt-8 text-center sm:text-left">
<p className="text-xs text-slate-500">© <span id="year"></span> D&amp;B Garage Doors. All rights reserved.</p>
</div>
</footer>

<div aria-modal="true" className="hidden fixed inset-0 z-[100] items-center justify-center bg-slate-950/80 backdrop-blur-md px-4 transition-opacity duration-300 opacity-0" id="success-modal" role="dialog">
<div className="rounded-3xl border border-white/10 bg-slate-900 max-w-sm w-full p-8 text-center relative transform scale-95 transition-transform duration-300 shadow-2xl" id="success-modal-content">
<div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xl font-semibold tracking-tight text-slate-50 mb-2">Message Sent</p>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">Thank you for reaching out. We will call you shortly to schedule your garage door service.</p>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-slate-50 transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-slate-500" id="close-modal-btn">
          Done
        </button>
</div>
</div>



    </>
  );
}
