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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0B2545]/5 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed top-0 z-50 w-full px-6 pt-6">
<div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-white/40 bg-white/80 px-6 backdrop-blur-xl shadow-sm transition-all">

<a className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B2545] text-white transition-colors group-hover:bg-[#1a3a63]">
<span className="font-medium text-sm text-[#C5A572]">AD</span>
</div>
<span className="text-sm font-semibold tracking-tight text-[#0B2545]">Advanced Dentistry</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-[#0B2545] transition-colors" href="#about">Our Practice</a>
<a className="text-xs font-medium text-slate-500 hover:text-[#0B2545] transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-slate-500 hover:text-[#0B2545] transition-colors" href="#doctors">Doctors</a>
<a className="text-xs font-medium text-slate-500 hover:text-[#0B2545] transition-colors" href="#gallery">Smile Gallery</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[#0B2545]" href="tel:5033523224">
<iconify-icon className="text-[#C5A572]" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                    (503) 352-3224
                </a>
<a className="flex items-center gap-2 rounded-full bg-[#0B2545] px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#1a3a63] hover:shadow-lg hover:shadow-[#0B2545]/20" href="#contact">
<span>Contact Us</span>
<iconify-icon className="text-[#C5A572]" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="mx-auto max-w-5xl px-6 text-center">
<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0B2545]/10 bg-[#0B2545]/5 px-3 py-1 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A572] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A572]"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-[#0B2545]">Harvard Trained | Portland Perfected</span>
</div>
<h1 className="mb-8 text-5xl font-semibold leading-[1.1] tracking-tight text-[#0B2545] md:text-7xl">
                Restoring Confidence,<br/>
<span className="text-slate-400">One Smile at a Time.</span>
</h1>
<p className="mx-auto mb-10 max-w-2xl text-lg font-normal text-slate-500 leading-relaxed">
                Your premier Portland prosthodontists. We specialize in enhancing well-being by addressing everything that needs replacement, repair, or restoration in your mouth. From the ground up.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group flex items-center gap-2 rounded-full bg-[#0B2545] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#0B2545]/20 transition-all hover:bg-[#1a3a63] hover:shadow-[#0B2545]/30" href="#new-patient">
                    Schedule Consultation
                    <iconify-icon className="text-[#C5A572] transition-transform group-hover:translate-x-0.5" height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-[#C5A572]/50 hover:bg-slate-50 hover:text-[#0B2545]" href="#video">
<iconify-icon className="text-[#C5A572]" height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Our Story
                </a>
</div>

<div className="mt-20 border-t border-slate-200/60 pt-10">
<p className="mb-6 text-xs font-medium text-slate-400 uppercase tracking-widest">Trusted Education &amp; Affiliations</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-sm font-semibold text-[#0B2545] flex items-center gap-2"><iconify-icon className="text-[#C5A572]" icon="solar:diploma-linear"></iconify-icon> Harvard University</span>
<span className="text-sm font-semibold text-[#0B2545] flex items-center gap-2"><iconify-icon className="text-[#C5A572]" icon="solar:diploma-linear"></iconify-icon> UCSF Dentistry</span>
<span className="text-sm font-semibold text-[#0B2545] flex items-center gap-2"><iconify-icon className="text-[#C5A572]" icon="solar:diploma-linear"></iconify-icon> UNC Chapel Hill</span>
<span className="text-sm font-semibold text-[#0B2545] flex items-center gap-2"><iconify-icon className="text-[#C5A572]" icon="solar:shield-check-linear"></iconify-icon> American College of Prosthodontists</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="mx-auto max-w-5xl px-6">
<div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
<div className="relative">
<div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-900/5">
<img alt="Advanced Dentistry Care" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 rounded-xl border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2545]/5 text-[#0B2545]">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-[#0B2545]">3</p>
<p className="text-xs font-medium text-slate-500">Expert Prosthodontists</p>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl font-semibold tracking-tight text-[#0B2545] md:text-4xl">Prosthodontic Care in Portland, OR</h2>
<div className="space-y-6 text-base text-slate-500 leading-relaxed">
<p>
                            Drs. Halmos, Manning, and Redmond are more than renowned prosthodontists — they are your trusted companions on your journey to a more confident smile.
                        </p>
<p>
                            We specialize in everything that needs to be replaced, repaired, or restored. From the ground up, we craft personalized solutions to rejuvenate smiles affected by decay or disease. Our team works alongside an in-house master ceramist to ensure red-carpet-worthy results.
                        </p>
</div>
<div className="flex flex-col gap-4 pt-4">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#C5A572]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm">Specialists in Implants &amp; Restorative Dentistry</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#C5A572]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm">In-house Master Ceramist &amp; Lab Technicians</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#C5A572]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm">Custom-tailored, interdisciplinary approach</p>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#0B2545] hover:text-[#C5A572] transition-colors" href="#learn-more">
                            Why Choose a Prosthodontist?
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="mx-auto max-w-5xl px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-[#0B2545]">Comprehensive Solutions</h2>
<p className="mt-4 text-slate-500">We work from the gums up. Whether you need a single implant or a full mouth rehabilitation, we deliver precision and artistry.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-[#C5A572]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0B2545]/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-100 text-[#0B2545] shadow-sm group-hover:bg-[#0B2545] group-hover:text-[#C5A572] group-hover:border-[#0B2545] transition-colors">
<iconify-icon icon="solar:screw-large-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#0B2545]">Dental Implants</h3>
<p className="max-w-md text-sm text-slate-500 leading-relaxed">
                        Replace missing teeth and restore function. Whether you need a single implant, All-on-4, or All-on-6 solutions, we provide custom-tailored care. We also treat failing dental implants.
                    </p>
<div className="mt-6">
<span className="text-xs font-medium text-slate-400 group-hover:text-[#C5A572] transition-colors">Learn more →</span>
</div>
</div>

<div className="group relative col-span-1 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-[#C5A572]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0B2545]/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-100 text-[#0B2545] shadow-sm group-hover:bg-[#0B2545] group-hover:text-[#C5A572] group-hover:border-[#0B2545] transition-colors">
<iconify-icon icon="solar:teeth-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#0B2545]">Restorative</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Full mouth rehabilitation, crowns, and bridges designed to improve form, health, and function.
                    </p>
</div>

<div className="group relative col-span-1 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-[#C5A572]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0B2545]/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-100 text-[#0B2545] shadow-sm group-hover:bg-[#0B2545] group-hover:text-[#C5A572] group-hover:border-[#0B2545] transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#0B2545]">Cosmetic</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Porcelain veneers, teeth whitening, and smile makeovers. Cover problem teeth and enjoy perfection.
                    </p>
</div>

<div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-[#C5A572]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0B2545]/5">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-100 text-[#0B2545] shadow-sm group-hover:bg-[#0B2545] group-hover:text-[#C5A572] group-hover:border-[#0B2545] transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#0B2545]">Dentures &amp; Repair</h3>
<p className="max-w-sm text-sm text-slate-500 leading-relaxed">
                                Take back your smile with custom full or partial dentures. We offer expert fitting and repair services.
                            </p>
</div>

<div className="hidden md:block opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-200 group-hover:text-[#C5A572]/20" icon="solar:bone-linear" width="80"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B2545] text-white relative overflow-hidden" id="doctors">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A572]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="mx-auto max-w-5xl px-6 relative z-10">
<div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Meet The Experts</h2>
<p className="mt-4 max-w-md text-slate-300">Harvard Trained. Portland Perfected. Our doctors bring decades of specialized experience to your care.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#C5A572] hover:text-white transition-colors" href="#team">
                    View full team
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="group relative">
<div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1a3a63] ring-1 ring-white/10">
<img alt="Dr. David Halmos" className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-white">Dr. David Halmos</h3>
<p className="text-sm text-[#C5A572]">Prosthodontist</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1a3a63] ring-1 ring-white/10">
<img alt="Dr. Lauren Manning" className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-white">Dr. Lauren Manning</h3>
<p className="text-sm text-[#C5A572]">Prosthodontist</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1a3a63] ring-1 ring-white/10">
<img alt="Dr. Redmond" className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-white">Dr. Redmond</h3>
<p className="text-sm text-[#C5A572]">Prosthodontist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
<div className="mx-auto max-w-4xl px-6 text-center">
<iconify-icon className="text-[#0B2545] mb-8 opacity-30" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<figure>
<blockquote className="text-2xl font-medium leading-normal tracking-tight text-[#0B2545] md:text-3xl">
                    "I can't praise this office enough. The space is beautiful and welcoming. Dr. Manning’s fine attention to detail left me feeling comfortable and at ease. The fix was perfection - it even fooled my dentist!"
                </blockquote>
<figcaption className="mt-10 flex items-center justify-center gap-4">
<div className="h-10 w-10 rounded-full bg-[#0B2545]/5 flex items-center justify-center font-bold text-[#0B2545] text-xs shadow-inner">CH</div>
<div className="text-left">
<div className="text-sm font-semibold text-[#0B2545]">Cynthia H.</div>
<div className="text-xs text-slate-500">Patient</div>
</div>
</figcaption>
</figure>
</div>
</section>

<section className="relative py-24" id="contact">
<div className="mx-auto max-w-5xl px-6">
<div className="grid gap-8 lg:grid-cols-2">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
<h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0B2545]">Visit Our Office</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2545]/5 text-[#0B2545]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#0B2545]">Address</p>
<p className="mt-1 text-sm text-slate-500 leading-relaxed">
                                    11790 SW Barnes Rd, Ste #260<br/>
                                    Portland, OR 97225
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2545]/5 text-[#0B2545]">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#0B2545]">Hours</p>
<p className="mt-1 text-sm text-slate-500">
                                    Mon-Thurs: 8:00am - 4:30pm<br/>
                                    Fri: 8:00am - 4:00pm
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2545]/5 text-[#0B2545]">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#0B2545]">Contact</p>
<a className="mt-1 block text-sm text-[#0B2545] font-medium hover:underline hover:text-[#C5A572]" href="tel:5033523224">(503) 352-3224</a>
</div>
</div>
</div>
<div className="mt-10 h-48 w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-900/5">

<iframe allowfullscreen="" className="h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.6302741164527!2d-122.80054868444087!3d45.51752087910165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ecc4d4331463c42!2sAdvanced+Dentistry+David+R.+Halmos%2C+DMD+%26+Lauren+B.+Manning%2C+DDS%2C+DMSc!5e0!3m2!1sen!2sus!4v1539273896995"></iframe>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl bg-[#0B2545] p-8 md:p-12 text-white shadow-xl shadow-[#0B2545]/10">
<div>
<div className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm border border-white/10 text-[#C5A572]">
                            New Patient? Start Here
                        </div>
<h2 className="mb-6 text-3xl font-semibold tracking-tight text-white">Not Your Typical Dentist Office</h2>
<p className="mb-8 text-slate-300 leading-relaxed">
                            We don't offer regular dental exams or cleanings. We focus on facial problems that involve restoring missing or damaged teeth. Your first visit includes 90 minutes of focused, one-on-one time with your doctor.
                        </p>
<ul className="space-y-4 text-sm text-slate-200">
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-[#C5A572]" icon="solar:check-circle-linear"></iconify-icon>
<span>Detailed medical history review</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-[#C5A572]" icon="solar:check-circle-linear"></iconify-icon>
<span>Head, neck, and oral cancer screening</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-[#C5A572]" icon="solar:check-circle-linear"></iconify-icon>
<span>Full tooth and gum analysis</span>
</li>
</ul>
</div>
<div className="mt-10">
<p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C5A572]">Payment Options</p>
<div className="flex flex-wrap gap-2 text-xs text-white opacity-60 mb-8">
<span className="border border-white/20 px-2 py-1 rounded bg-[#1a3a63]">Cash</span>
<span className="border border-white/20 px-2 py-1 rounded bg-[#1a3a63]">Credit Card</span>
<span className="border border-white/20 px-2 py-1 rounded bg-[#1a3a63]">CareCredit</span>
<span className="border border-white/20 px-2 py-1 rounded bg-[#1a3a63]">Lending Club</span>
</div>
<a className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C5A572] px-6 py-4 text-sm font-semibold text-[#0B2545] transition-transform hover:scale-[1.02] hover:bg-white hover:shadow-lg shadow-black/10" href="#schedule">
                            Schedule New Patient Exam
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white/80 backdrop-blur-md py-12">
<div className="mx-auto max-w-5xl px-6">
<div className="grid gap-12 md:grid-cols-4">
<div className="col-span-1 md:col-span-2">
<a className="mb-6 flex items-center gap-2" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-[#0B2545] text-white">
<span className="text-[10px] font-bold text-[#C5A572]">AD</span>
</div>
<span className="text-sm font-semibold tracking-tight text-[#0B2545]">Advanced Dentistry</span>
</a>
<p className="max-w-xs text-xs text-slate-500 leading-relaxed">
                        Providing the highest quality care and custom dental prosthetics in Portland and beyond. We believe in creating individualized treatment plans for unique needs.
                    </p>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0B2545]">Patient</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-[#0B2545] transition-colors" href="#">New Patient Experience</a></li>
<li><a className="hover:text-[#0B2545] transition-colors" href="#">Payment Info</a></li>
<li><a className="hover:text-[#0B2545] transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-[#0B2545] transition-colors" href="#">Cancellation Policy</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0B2545]">Social</h4>
<ul className="flex gap-4 text-slate-400">
<li><a className="hover:text-[#0B2545] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a></li>
<li><a className="hover:text-[#0B2545] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a></li>
<li><a className="hover:text-[#0B2545] transition-colors" href="#"><iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 Advanced Dentistry. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-[#0B2545]" href="#">Privacy</a>
<a className="hover:text-[#0B2545]" href="#">Terms</a>
<a className="hover:text-[#0B2545]" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
