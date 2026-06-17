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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#FBF8F3',
100: '#F5F0E6',
200: '#E6DCC3',
300: '#D4C49B',
400: '#B0965B',
500: '#906E27', // Original Brand Color
600: '#735820',
900: '#2A200B',
},
dark: '#0F172A',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<div className="bg-dark text-white text-xs py-2 text-center tracking-wide font-medium">
<span className="opacity-80">Serving Templestowe, Doncaster &amp; Manningham since 1988</span>
</div>

<nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300 top-8">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white group-hover:scale-95 transition-transform">
<span className="font-serif italic font-semibold text-xl">K</span>
</div>
<div className="flex flex-col">
<span className="font-semibold text-dark tracking-tight leading-none">King Street</span>
<span className="text-xs text-brand-500 uppercase tracking-widest font-medium">Dental Group</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-500 transition-colors" href="#about">About</a>
<a className="hover:text-brand-500 transition-colors" href="#services">Services</a>
<a className="hover:text-brand-500 transition-colors" href="#treatments">Treatments</a>
<a className="hover:text-brand-500 transition-colors" href="#team">Our Team</a>
<a className="hover:text-brand-500 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-dark hover:text-brand-500 transition-colors" href="tel:0398418033">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    03 9841 8033
                </a>
<a className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40" href="#">
                    Book Online
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:star-shine-linear"></iconify-icon>
                    Home of the Smile Makeover
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-dark tracking-tighter leading-[1.1] mb-6">
                    Dentist Templestowe <br/>
<span className="text-slate-400 font-serif italic font-normal">&amp; Manningham.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed mb-8">
                    Comprehensive family dentistry trusted by the community. From routine check-ups to complex cosmetic transformations, we are here for your smile.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-dark text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group" href="#">
                        Book Appointment
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white border border-slate-200 text-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-all" href="#services">
                        View Services
                    </a>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
<div>
<p className="text-3xl font-semibold text-brand-500 tracking-tight">35+</p>
<p className="text-xs text-slate-400 uppercase tracking-wide">Years Experience</p>
</div>
<div>
<p className="text-3xl font-semibold text-brand-500 tracking-tight">4.9</p>
<p className="text-xs text-slate-400 uppercase tracking-wide">Google Rating</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-brand-100 rounded-[2.5rem] rotate-3 opacity-50 blur-sm transform translate-y-4 translate-x-4"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/10 border border-white">
<img alt="King Street Dental Team" className="w-full h-auto object-cover bg-slate-50" src="https://manninghamdentist.com.au/wp-content/uploads/2024/12/kingstnew-1.png"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-lg flex items-center gap-3">
<div className="bg-brand-50 p-2 rounded-full text-brand-500">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-dark">Accepted Insurances</p>
<p className="text-[10px] text-slate-500">Bupa, Medibank, HBF &amp; more</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex gap-8 overflow-x-auto no-scrollbar items-center justify-start lg:justify-between">
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-500 whitespace-nowrap group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-brand-500 text-lg" icon="solar:smile-circle-linear"></iconify-icon> Invisalign
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-500 whitespace-nowrap group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-brand-500 text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon> Porcelain Veneers
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-500 whitespace-nowrap group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-brand-500 text-lg" icon="solar:medical-kit-linear"></iconify-icon> Root Canal
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-500 whitespace-nowrap group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-brand-500 text-lg" icon="solar:sleeping-linear"></iconify-icon> Sleep Dentistry
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-500 whitespace-nowrap group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-brand-500 text-lg" icon="solar:bone-broken-linear"></iconify-icon> Wisdom Teeth
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-500 whitespace-nowrap group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-brand-500 text-lg" icon="solar:screw-linear"></iconify-icon> Implants
                </a>
</div>
</div>
</div>

<section className="py-24 bg-brand-50/50" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold text-dark tracking-tight mb-6">
                King Street Dental Group
            </h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                Whether it’s a nagging toothache or a desire for a complete smile transformation, we, your trusted dentist in Templestowe, are here to cater to all your dental needs. We take the time to listen to your concerns and understand what you want when it comes to your dental health and aesthetics.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-brand-500 text-3xl mb-3" icon="solar:heart-angle-linear"></iconify-icon>
<h3 className="font-semibold text-dark text-sm">Compassion</h3>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-brand-500 text-3xl mb-3" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="font-semibold text-dark text-sm">Community</h3>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-brand-500 text-3xl mb-3" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="font-semibold text-dark text-sm">Trust</h3>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<iconify-icon className="text-brand-500 text-3xl mb-3" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="font-semibold text-dark text-sm">Reliability</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-brand-500 font-medium text-sm tracking-wider uppercase">Our Expertise</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-dark tracking-tight mt-2">Comprehensive Dental Care</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-500" href="#">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group card-hover p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-brand-500 mb-6 shadow-sm">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-dark mb-2">General Dentistry</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Includes root canal treatment, wisdom teeth extraction and sleep dentistry.
                        </p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group card-hover p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-brand-500 mb-6 shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-dark mb-2">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Smile makeovers, Invisalign, Veneers, Crowns, Bridges and whitening.
                        </p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group card-hover p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-brand-500 mb-6 shadow-sm">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-dark mb-2">Dental Emergencies</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Available for emergency treatments, lost fillings and trauma.
                        </p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group card-hover p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-brand-500 mb-6 shadow-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-dark mb-2">Children's Dentist</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Full range of services for young patients including CDBS access.
                        </p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="treatments">
<div className="max-w-7xl mx-auto px-6 space-y-24">

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500 text-2xl" icon="solar:ruler-pen-linear"></iconify-icon>
<span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Early Orthodontics</span>
</div>
<h3 className="text-3xl font-semibold text-dark tracking-tight mb-4">Teeth Straightening</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Helping your loved ones to be proud of their beautiful smiles. Early intervention can prevent complex issues later in life.
                    </p>
<a className="text-brand-600 font-medium hover:underline" href="#">Explore Orthodontics</a>
</div>
<div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-xl border border-white">
<img alt="Teeth Straightening" className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700" src="https://manninghamdentist.com.au/wp-content/uploads/2024/12/Essix-retainer.jpg"/>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-1 rounded-3xl overflow-hidden shadow-xl border border-white">
<img alt="Dental Implants" className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700" src="https://manninghamdentist.com.au/wp-content/uploads/2024/12/cosmetic-dentestry.webp"/>
</div>
<div className="order-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500 text-2xl" icon="solar:screw-linear"></iconify-icon>
<span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Restoration</span>
</div>
<h3 className="text-3xl font-semibold text-dark tracking-tight mb-4">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Restoring your lost teeth and bringing back your smile. We use the latest technology for precise placement and natural-looking results.
                    </p>
<a className="text-brand-600 font-medium hover:underline" href="#">Learn about Implants</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-500 font-medium text-sm tracking-wider uppercase">Our Experts</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-dark tracking-tight mt-2 mb-4">Meet Your Dentists</h2>
<p className="text-slate-500">
                    With over three decades of experience, our esteemed dentists bring vast knowledge and a gentle touch to every consultation.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-brand-50/30 rounded-3xl p-6 text-center border border-slate-100 hover:border-brand-200 transition-colors">
<div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
<img alt="Dr. Joanne Ling" className="w-full h-full object-cover" src="https://manninghamdentist.com.au/wp-content/uploads/2025/08/Dr-Joanne-Ling.jpg"/>
</div>
<h3 className="text-xl font-semibold text-dark">Dr. Joanne Ling</h3>
<p className="text-sm text-brand-600 font-medium uppercase tracking-wide mt-1">General Dentist</p>
</div>

<div className="bg-brand-50/30 rounded-3xl p-6 text-center border border-slate-100 hover:border-brand-200 transition-colors">
<div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
<img alt="Dr. Bhumika Ghevariya" className="w-full h-full object-cover" src="https://manninghamdentist.com.au/wp-content/uploads/2025/11/IMG_4349-scaled.jpg"/>
</div>
<h3 className="text-xl font-semibold text-dark">Dr. Bhumika Ghevariya</h3>
<p className="text-sm text-brand-600 font-medium uppercase tracking-wide mt-1">Principal Dentist</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-dark text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="flex items-center justify-center gap-1 mb-6 text-brand-500">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">"Best dentist I have ever had. The staff are friendly and capable."</h2>
<div className="flex justify-center gap-8 text-sm text-slate-400">
<span>Google Reviews</span>
<span>•</span>
<span>Verified Patients</span>
<span>•</span>
<span>Excellence Guaranteed</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-dark tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group border border-slate-200 rounded-2xl p-6 open:bg-brand-50/30 transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-dark list-none">
                        Where is King Street Dental Group located?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 leading-relaxed text-sm">
                        Our dental clinic is conveniently located at 105 King Street, Templestowe VIC 3106, making it easily reachable for all our patients in Manningham.
                    </p>
</details>

<details className="group border border-slate-200 rounded-2xl p-6 open:bg-brand-50/30 transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-dark list-none">
                        What services do you offer?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 leading-relaxed text-sm">
                        We offer a wide range of services including general dentistry, preventative care, cosmetic dentistry (veneers, implants, Invisalign), orthodontics, and emergency dental services.
                    </p>
</details>

<details className="group border border-slate-200 rounded-2xl p-6 open:bg-brand-50/30 transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-dark list-none">
                        Do you offer emergency dental services?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 leading-relaxed text-sm">
                        Yes, we prioritize emergency cases. If you are experiencing sudden pain or trauma, please call us immediately at 03 9841 8033.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6 text-dark font-semibold">
<div className="w-8 h-8 bg-brand-500 rounded text-white flex items-center justify-center font-serif italic">K</div>
                        King Street Dental
                    </div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        A boutique dental practice specialising in general and cosmetic dentistry. We invite you to experience the difference.
                    </p>
<p className="text-xs text-slate-400">
                        Accepted: Bupa, Medibank, HBF, CDBS, DVA &amp; more.
                    </p>
</div>

<div>
<h4 className="font-semibold text-dark mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 text-lg mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<a className="hover:text-brand-600" href="#">105 King Street,<br/>Templestowe VIC 3106</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-600" href="tel:0398418033">03 9841 8033</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500 text-lg" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand-600" href="mailto:contact@dentistoftemplestowe.com.au">contact@dentistoftemplestowe.com.au</a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-dark mb-6">Opening Hours</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Mon - Sun</span>
<span className="text-dark font-medium">8:00am - 7:00pm</span>
</li>
<li className="text-xs pt-2 text-brand-600 font-medium">
                            *Available 7 days a week
                        </li>
</ul>
</div>

<div>
<h4 className="font-semibold text-dark mb-6">Treatments</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#">Invisalign</a></li>
<li><a className="hover:text-brand-600" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-600" href="#">Wisdom Teeth Removal</a></li>
<li><a className="hover:text-brand-600" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-brand-600" href="#">Emergency Dental</a></li>
</ul>
</div>
</div>

<div className="border-t border-slate-200 pt-8 mb-8">
<p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">Service Areas</p>
<div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
<span>Bulleen</span> • <span>Doncaster</span> • <span>Donvale</span> • <span>Nunawading</span> • <span>Park Orchards</span> • <span>Ringwood North</span> • <span>Warrandyte</span> • <span>Wonga Park</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 pt-8 border-t border-slate-200">
<p>© 2024 King Street Dental Group. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-brand-600" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-brand-600" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-brand-600" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
