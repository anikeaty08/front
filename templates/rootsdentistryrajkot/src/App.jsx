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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-6xl rounded-2xl backdrop-blur-md border px-6 py-3 flex items-center justify-between bg-white/70 border-zinc-200/80 shadow-sm">

<a className="flex items-center gap-2 group" href="#">
<div className="flex items-center justify-center text-zinc-900">
<iconify-icon className="text-2xl tracking-tight" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-900">Roots</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal transition-colors text-zinc-500 hover:text-zinc-900" href="#">Home</a>
<a className="text-sm font-normal transition-colors text-zinc-500 hover:text-zinc-900" href="#about">About</a>
<a className="text-sm font-normal transition-colors text-zinc-500 hover:text-zinc-900" href="#team">Team</a>
<a className="text-sm font-normal transition-colors text-zinc-500 hover:text-zinc-900" href="#services">Services</a>
<a className="text-sm font-normal transition-colors text-zinc-500 hover:text-zinc-900" href="#contact">Contact</a>
</div>

<a className="hidden md:inline-flex items-center gap-2 bg-zinc-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:bg-zinc-800 text-white shadow-sm" href="#book">
                Book Visit
                <iconify-icon className="text-base tracking-tight" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>

<button className="md:hidden text-zinc-900">
<iconify-icon className="text-2xl tracking-tight" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                        Accepting new patients in Rajkot
                    </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-zinc-900">
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500 mb-2">Roots Dentistry.</span>
                        The foundation for a <br/>
<span className="text-zinc-400">lasting smile.</span>
</h1>
<p className="text-lg text-zinc-500 font-normal max-w-lg leading-relaxed">
                        Experience precise, modern dental care designed around your comfort. We blend advanced clinical expertise with a serene environment.
                    </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-sm font-medium px-6 py-3 rounded-xl transition-colors hover:bg-zinc-800 text-white shadow-sm" href="#book">
                            Schedule Appointment
                            <iconify-icon className="text-base tracking-tight" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-sm font-medium px-6 py-3 rounded-xl transition-colors bg-white hover:bg-zinc-50 text-zinc-900 border-zinc-200" href="#services">
                            View Services
                        </a>
</div>

<div className="flex items-center gap-4 pt-6 border-t border-zinc-200/60 mt-8">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex gap-0.5 text-zinc-900">
<iconify-icon className="text-sm tracking-tight" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm tracking-tight" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm tracking-tight" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm tracking-tight" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm tracking-tight" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs font-normal mt-0.5 text-zinc-500">Trusted by over 5,000 families in Gujarat.</p>
</div>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-md">
<div className="relative rounded-2xl overflow-hidden shadow-sm border border-zinc-200/80 bg-white">
<img alt="Colourful Vibrant Smile" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute top-6 left-6 flex flex-col gap-2">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200/50 bg-white/80 text-zinc-900 shadow-sm">
<iconify-icon className="text-sm tracking-tight" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Precision Tech
                            </span>
</div>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md p-4 rounded-xl border border-zinc-200/50 flex items-center justify-between bg-white/80 shadow-sm">
<div>
<p className="text-xs font-medium text-zinc-500 mb-0.5">Our Philosophy</p>
<p className="text-sm font-medium text-zinc-900 tracking-tight">Rooted in genuine care.</p>
</div>
<div className="text-zinc-900">
<iconify-icon className="text-xl tracking-tight" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-zinc-200/80 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x-0 lg:divide-x divide-zinc-200/80">
<div className="lg:px-6 first:pl-0 text-center lg:text-left">
<h3 className="text-3xl font-medium tracking-tight mb-1 text-zinc-900">#1</h3>
<p className="text-sm text-zinc-500 font-normal">Rated Clinic in Rajkot</p>
</div>
<div className="lg:px-6 text-center lg:text-left">
<h3 className="text-3xl font-medium tracking-tight mb-1 text-zinc-900">10k+</h3>
<p className="text-sm text-zinc-500 font-normal">Smiles Restored</p>
</div>
<div className="lg:px-6 text-center lg:text-left">
<h3 className="text-3xl font-medium tracking-tight mb-1 text-zinc-900">15+</h3>
<p className="text-sm text-zinc-500 font-normal">Years of Excellence</p>
</div>
<div className="lg:px-6 text-center lg:text-left">
<h3 className="text-3xl font-medium tracking-tight mb-1 text-zinc-900">100%</h3>
<p className="text-sm text-zinc-500 font-normal">Sterilization Protocol</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">
                    Comprehensive clinical services.
                </h2>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                    From routine maintenance to complex surgical procedures, we offer a full spectrum of dental treatments under one roof.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-5 rounded-2xl border bg-white transition-all duration-200 hover:border-zinc-300 border-zinc-200/80 shadow-sm flex flex-col h-full">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
<img alt="General Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-900 border border-zinc-200/50">
<iconify-icon className="text-xl tracking-tight" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 font-mono tracking-tight">01</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">General Dentistry</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                        Preventive care, detailed diagnostics, and routine maintenance to preserve your natural teeth.
                    </p>
</div>

<div className="group p-5 rounded-2xl border bg-white transition-all duration-200 hover:border-zinc-300 border-zinc-200/80 shadow-sm flex flex-col h-full">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
<img alt="Cosmetic Procedures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-900 border border-zinc-200/50">
<iconify-icon className="text-xl tracking-tight" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 font-mono tracking-tight">02</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">Cosmetic Procedures</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                        Aesthetic enhancements including custom veneers, advanced whitening, and aesthetic bonding.
                    </p>
</div>

<div className="group p-5 rounded-2xl border bg-white transition-all duration-200 hover:border-zinc-300 border-zinc-200/80 shadow-sm flex flex-col h-full">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
<img alt="Oral Surgery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-900 border border-zinc-200/50">
<iconify-icon className="text-xl tracking-tight" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 font-mono tracking-tight">03</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">Oral Surgery</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                        Expert surgical interventions, extractions, and implant placements performed with precision.
                    </p>
</div>

<div className="group p-5 rounded-2xl border bg-white transition-all duration-200 hover:border-zinc-300 border-zinc-200/80 shadow-sm flex flex-col h-full">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
<img alt="Pediatric Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-900 border border-zinc-200/50">
<iconify-icon className="text-xl tracking-tight" icon="solar:emoji-funny-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 font-mono tracking-tight">04</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">Pediatric Care</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                        Gentle, specialized treatments designed to build a foundation of oral health for younger patients.
                    </p>
</div>

<div className="group p-5 rounded-2xl border bg-white transition-all duration-200 hover:border-zinc-300 border-zinc-200/80 shadow-sm flex flex-col h-full">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
<img alt="Orthodontics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-900 border border-zinc-200/50">
<iconify-icon className="text-xl tracking-tight" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 font-mono tracking-tight">05</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">Orthodontics</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                        Modern alignment solutions including clear aligners and traditional methods for optimal function.
                    </p>
</div>

<div className="group p-5 rounded-2xl border bg-white transition-all duration-200 hover:border-zinc-300 border-zinc-200/80 shadow-sm flex flex-col h-full">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
<img alt="Sedation Options" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-900 border border-zinc-200/50">
<iconify-icon className="text-xl tracking-tight" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 font-mono tracking-tight">06</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">Sedation Options</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                        Safe, monitored sedation protocols to ensure an anxiety-free experience during any procedure.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-y border-zinc-200/80" id="team">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">
                        Clinical leadership.
                    </h2>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                        Our practice is led by specialists dedicated to advancing dental care standards in Gujarat through continuous learning and precision.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group border border-zinc-200/80 rounded-2xl overflow-hidden bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="aspect-square w-full relative overflow-hidden bg-zinc-200">
<img alt="Dr. Amit Patel" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<h4 className="text-base font-medium text-zinc-900 tracking-tight">Dr. Amit Patel</h4>
<p className="text-sm font-normal text-zinc-500 mt-0.5">Principal Dentist</p>
</div>
</div>

<div className="group border border-zinc-200/80 rounded-2xl overflow-hidden bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="aspect-square w-full relative overflow-hidden bg-zinc-200">
<img alt="Dr. Neha Sharma" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<h4 className="text-base font-medium text-zinc-900 tracking-tight">Dr. Neha Sharma</h4>
<p className="text-sm font-normal text-zinc-500 mt-0.5">Cosmetic Specialist</p>
</div>
</div>

<div className="group border border-zinc-200/80 rounded-2xl overflow-hidden bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="aspect-square w-full relative overflow-hidden bg-zinc-200">
<img alt="Dr. Rahul Mehta" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<h4 className="text-base font-medium text-zinc-900 tracking-tight">Dr. Rahul Mehta</h4>
<p className="text-sm font-normal text-zinc-500 mt-0.5">Oral Surgeon</p>
</div>
</div>

<div className="group border border-zinc-200/80 rounded-2xl overflow-hidden bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="aspect-square w-full relative overflow-hidden bg-zinc-200">
<img alt="Dr. Priya Desai" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<h4 className="text-base font-medium text-zinc-900 tracking-tight">Dr. Priya Desai</h4>
<p className="text-sm font-normal text-zinc-500 mt-0.5">Orthodontist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-zinc-900">
                    Patient inquiries.
                </h2>
<p className="text-base text-zinc-500 font-normal">
                    Common questions regarding our services and protocols.
                </p>
</div>
<div className="divide-y divide-zinc-200/80 border-y border-zinc-200/80">

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-5 text-zinc-900 focus:outline-none">
<h2 className="text-base font-medium tracking-tight">Are you accepting new patients?</h2>
<span className="text-zinc-400 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl tracking-tight" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="pb-5 text-sm text-zinc-500 leading-relaxed font-normal">
                        Yes, Roots Dentistry is currently welcoming new patients. We suggest booking a comprehensive initial consultation to establish your baseline oral health.
                    </p>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-5 text-zinc-900 focus:outline-none">
<h2 className="text-base font-medium tracking-tight">How often should I schedule a check-up?</h2>
<span className="text-zinc-400 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl tracking-tight" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="pb-5 text-sm text-zinc-500 leading-relaxed font-normal">
                        For optimal maintenance, we advise bi-annual visits (every six months) for professional cleaning and diagnostic review, though individual needs may vary.
                    </p>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-5 text-zinc-900 focus:outline-none">
<h2 className="text-base font-medium tracking-tight">Do you handle dental emergencies?</h2>
<span className="text-zinc-400 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl tracking-tight" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="pb-5 text-sm text-zinc-500 leading-relaxed font-normal">
                        Yes. We prioritize acute pain and trauma cases. Please contact our clinic directly via phone if you require immediate attention.
                    </p>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-5 text-zinc-900 focus:outline-none">
<h2 className="text-base font-medium tracking-tight">What payment methods do you accept?</h2>
<span className="text-zinc-400 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl tracking-tight" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="pb-5 text-sm text-zinc-500 leading-relaxed font-normal">
                        We accept all major credit cards, UPI, and cash. We also collaborate with select insurance providers; please inquire with our front desk for verification.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-zinc-200/80 rounded-3xl p-8 md:p-12 bg-white shadow-sm">
<div className="text-center max-w-xl mx-auto mb-10">
<h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900">
                        Request a consultation.
                    </h2>
<p className="text-sm font-normal text-zinc-500">
                        Submit your details below, and our coordination team will reach out to confirm your slot within operating hours.
                    </p>
</div>
<form className="space-y-4 max-w-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 bg-zinc-50/50 text-zinc-900 transition-shadow" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 bg-zinc-50/50 text-zinc-900 transition-shadow" placeholder="Phone Number" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 appearance-none bg-zinc-50/50 text-zinc-900 transition-shadow">
<option className="text-zinc-400" disabled="" selected="" value="">Select Reason</option>
<option>Initial Consultation</option>
<option>Routine Cleaning</option>
<option>Specific Pain/Issue</option>
<option>Cosmetic Inquiry</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-zinc-400 pointer-events-none tracking-tight" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative">
<input className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 bg-zinc-50/50 text-zinc-900 transition-shadow appearance-none" type="date"/>
</div>
</div>
<div className="pt-2 text-center">
<button className="w-full md:w-auto bg-zinc-900 font-medium text-sm py-3 px-8 rounded-lg transition-colors hover:bg-zinc-800 text-white shadow-sm inline-flex items-center justify-center gap-2" type="button">
                            Submit Request
                        </button>
</div>
<p className="text-xs text-center text-zinc-400 mt-4">By submitting, you agree to our privacy policy regarding health data.</p>
</form>
</div>
</div>
</section>

<footer className="pt-16 pb-8 border-t border-zinc-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="text-zinc-900">
<iconify-icon className="text-2xl tracking-tight" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-900">Roots</span>
</a>
<p className="text-zinc-500 font-normal text-sm leading-relaxed max-w-xs">
                        Advanced clinical dentistry focused on structural integrity and aesthetic precision.
                    </p>
</div>

<div>
<h4 className="text-sm font-medium mb-4 text-zinc-900 tracking-tight">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-zinc-500 font-normal text-sm">
<iconify-icon className="text-base text-zinc-400 shrink-0 mt-0.5 tracking-tight" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>150 Ring Road, Near Circle,<br/>Rajkot, Gujarat 360001</span>
</li>
<li className="flex items-center gap-2.5 text-zinc-500 font-normal text-sm">
<iconify-icon className="text-base text-zinc-400 shrink-0 tracking-tight" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span>+91 98765 43210</span>
</li>
<li className="flex items-center gap-2.5 text-zinc-500 font-normal text-sm">
<iconify-icon className="text-base text-zinc-400 shrink-0 tracking-tight" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span>hello@rootsdentistry.in</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium mb-4 text-zinc-900 tracking-tight">Hours</h4>
<ul className="space-y-2 text-zinc-500 font-normal text-sm">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-zinc-900">10:00 AM - 8:00 PM</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-zinc-900">10:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-zinc-400">Closed</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium mb-4 text-zinc-900 tracking-tight">Legal</h4>
<ul className="space-y-2 text-zinc-500 font-normal text-sm">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="border-t border-zinc-200/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-400 font-normal text-xs">© 2024 Roots Dentistry Rajkot. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg tracking-tight" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group" href="https://wa.me/919876543210" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-3xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute right-16 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
            WhatsApp Us
        </span>
</a>

    </>
  );
}
