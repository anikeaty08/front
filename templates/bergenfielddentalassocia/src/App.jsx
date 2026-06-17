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
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#3777bf', /* Brand Primary from source */
700: '#16467d', /* Brand Navy from source */
800: '#1e40af',
900: '#1e3a8a',
},
accent: {
500: '#e89a47', /* Brand Orange from source */
600: '#de903d',
}
}
}
}
}



        const btn = document.getElementById('mobile-toggle');
        const menu = document.getElementById('mobile-menu');
        const close = document.getElementById('mobile-close');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = menu.classList.contains('opacity-0');
            if (isHidden) {
                // Open
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            } else {
                // Close
                menu.classList.add('opacity-0', 'pointer-events-none');
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'auto';
            }
        }

        btn.addEventListener('click', toggleMenu);
        close.addEventListener('click', toggleMenu);
        
        // Close on link click
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
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
      


<div className="hidden lg:block bg-brand-700 text-white py-2 px-4 text-xs font-medium">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5">
<iconify-icon className="" icon="solar:map-point-linear" width="14"></iconify-icon>
                    29 West Church Street, Bergenfield, NJ 07621
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                    Mon: 9-6 | Tue/Thu: 8:30-5:30 | Fri/Sat: 8:30-2
                </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-accent-500 transition-colors" href="tel:2013840100">Call Us: (201) 384-0100</a>
<a className="hover:text-accent-500 transition-colors" href="https://forms.mydentistlink.com/57f9bc2c-7abd-4b84-95c9-9f55e9f07480" target="_blank">Patient Portal</a>
</div>
</div>
</div>

<header className="sticky md:p-4 w-full pt-3 pr-3 pb-3 pl-3 top-0 right-0 left-0">
<nav className="mx-auto max-w-7xl rounded-2xl md:rounded-full backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/40 shadow-slate-200/50">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors text-white">
<iconify-icon height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Bergenfield</span>
<span className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold">Dental Associates</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#doctor">Our Doctor</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#reviews">Reviews</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#contact">Locations</a>
</div>

<div className="flex items-center gap-3 z-50 relative">
<a className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand-600" href="tel:2013840100">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<a className="hidden md:inline-flex items-center gap-2 bg-brand-600 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:bg-brand-700 text-white" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="lg:hidden text-slate-900 p-1 focus:outline-none" id="mobile-toggle">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none flex flex-col pt-32 px-6 pb-6 lg:hidden" id="mobile-menu">

<button className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900" id="mobile-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#doctor">Meet Dr. Shahid</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#reviews">Testimonials</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#contact">Contact &amp; Hours</a>
<hr className="border-slate-200 my-2"/>
<a className="mobile-link w-full bg-brand-600 text-white text-lg font-medium py-4 rounded-xl shadow-xl shadow-brand-600/20" href="#book">
                Book Appointment
            </a>
<a className="w-full bg-accent-500 text-white text-lg font-medium py-4 rounded-xl shadow-xl shadow-accent-500/20" href="tel:2013840100">
                Call (201) 384-0100
            </a>
</div>
</div>

<section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Smile with Confidence in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Bergenfield, NJ</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                        Dr. Ehab Shahid and our team offer advanced General, Cosmetic, Implant, and Sedation dentistry. Experience pain-free care in a modern, compassionate environment.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-brand-600/20 hover:shadow-brand-600/40 hover:-translate-y-1 hover:bg-brand-700 text-white" href="#book">
                            Book Online
                            <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-200 hover:text-brand-600" href="tel:2013840100">
                            Call (201) 384-0100
                            <iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
</div>

<div className="pt-6 border-t border-slate-100 mt-2">
<div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-accent-500" icon="solar:star-bold"></iconify-icon>
                                Top Rated Clinic
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-brand-600" icon="solar:shield-check-bold"></iconify-icon>
                                Most Insurance Accepted
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-brand-600" icon="solar:medical-kit-bold"></iconify-icon>
                                Sedation Available
                            </div>
</div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden group shadow-brand-900/10 rounded-[2.5rem] relative shadow-2xl">

<img alt="Healthy Smile Bergenfield" className="transition-transform duration-700 group-hover:scale-105 w-full h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99b65c05-822e-48f9-b974-321ad4d9c05e_1600w.jpg"/>

<div className="bg-gradient-to-t via-transparent to-transparent from-brand-900/60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center gap-4 bg-white/95 border border-white/50">
<div className="p-3 rounded-full bg-brand-100 text-brand-600">
<iconify-icon icon="solar:heart-angle-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-brand-600">Our Promise</p>
<p className="font-semibold text-slate-900">Gentle, Judgment-Free Care</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="doctor">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-50 relative">

<img alt="Dr. Ehab Shahid" className="w-full h-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/220x240_80/webmgr/14/7/o/shahid2.jpg.webp?e5f443da52bb164c39ba247d9630969a"/>
</div>

<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-brand-100"></div>
</div>
<div className="md:col-span-7">
<span className="text-accent-500 font-bold tracking-wide uppercase text-sm">Meet Your Dentist</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Dr. Ehab Shahid <span className="text-lg font-medium text-slate-500 block mt-1">DMD, MAGD, Diplomate</span></h2>
<div className="prose prose-slate text-slate-600 mb-8">
<p className="mb-4">
                            Dr. Ehab Shahid believes patients come first, above all else. He dedicates time to listen to your concerns, treating you with the care and respect needed to build a lifetime of healthy smiles.
                        </p>
<p>
                            A believer in continuing education, Dr. Shahid stays at the forefront of dental technology—including  and —to provide exceptional, pain-free treatment. Whether you need implants, cosmetics, or sedation, you are in expert hands.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1" icon="solar:diploma-verified-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900">Board Certified</h4>
<p className="text-sm text-slate-500">Expert care you can trust.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1" icon="solar:sleeping-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900">Sedation Certified</h4>
<p className="text-sm text-slate-500">Sleep through your visit.</p>
</div>
</div>
</div>
<a className="inline-flex items-center font-semibold text-brand-600 hover:text-brand-800 transition-colors" href="#book">
                        Schedule a Visit with Dr. Shahid
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    Comprehensive <span className="text-brand-600">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine checkups to full mouth restoration, we perform all procedures under one roof using the latest technology.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-200">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:tooth-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 mb-4">Permanent solutions for missing teeth. We offer single implants, bone grafting, and "Teeth in a Day".</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Bone Grafting</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Teeth in a Day</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-200">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-4">Achieve the smile of your dreams with our aesthetic treatments designed for natural beauty.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Veneers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-200">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:moon-sleep-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Sedation Dentistry</h3>
<p className="text-slate-500 mb-4">Fear the dentist? Relax completely with our sedation options. Wake up with your work done.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> IV Sedation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Oral Conscious Sedation</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-200">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General Dentistry</h3>
<p className="text-slate-500 mb-4">Preventive care to keep your teeth and gums healthy for a lifetime.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Checkups &amp; Cleanings</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon> Fillings &amp; Crowns</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-200">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Invisalign</h3>
<p className="text-slate-500 mb-4">Straighten your teeth discreetly without metal braces using clear aligners.</p>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-200">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:monitor-camera-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Tech</h3>
<p className="text-slate-500 mb-4">We use 3-D Cone Beam Scans and digital x-rays for precise diagnosis and planning.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-700 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free Special Health Information Kits</h2>
<p className="text-brand-100 max-w-2xl mx-auto mb-10 text-lg">
                Know the facts before making a decision. Dr. Shahid provides free guides on Implants, Cosmetics, and Sedation to help you understand your options.
            </p>
<div className="flex flex-wrap justify-center gap-4">
<a className="bg-white text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg" href="https://www.freeinfokitbergenfield.com/implants" target="_blank">Get Implant Kit</a>
<a className="bg-white text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg" href="https://www.freeinfokitbergenfield.com/cosmetic" target="_blank">Get Cosmetic Kit</a>
<a className="bg-white text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg" href="https://www.freeinfokitbergenfield.com/sedation" target="_blank">Get Sedation Kit</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                        Patient <span className="text-brand-600">Stories</span>
</h2>
<div className="flex items-center gap-2 text-accent-500">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<span className="text-slate-400 font-medium ml-2 text-sm">Rated 5.0/5.0 by our patients</span>
</div>
</div>
<a className="text-brand-600 font-semibold flex items-center hover:underline" href="https://g.page/r/CeL9AQ_e5PqxEAI/review" target="_blank">
                    Read more on Google
                    <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<iconify-icon className="text-brand-200 mb-4" icon="solar:quote-up-bold" width="40"></iconify-icon>
<p className="text-slate-600 italic mb-6">"Due to fear, my mouth was a disaster! Dr. Shahid &amp; his staff are THE BEST EVER. Needed extractions, bone grafting, and implants done under sedation. I was never uncomfortable."</p>
<p className="font-bold text-slate-900">- Debra S.</p>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<iconify-icon className="text-brand-200 mb-4" icon="solar:quote-up-bold" width="40"></iconify-icon>
<p className="text-slate-600 italic mb-6">"They offer dental anesthesia, and I had pleasant dreams. Compared to other places, I think they have good prices, and they work with you if like me, you have no insurance."</p>
<p className="font-bold text-slate-900">- Carlo C.</p>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<iconify-icon className="text-brand-200 mb-4" icon="solar:quote-up-bold" width="40"></iconify-icon>
<p className="text-slate-600 italic mb-6">"Total strangers come up to me and say 'You have the most beautiful teeth I've ever seen'. I look 10 years younger. It was better than a face-lift."</p>
<p className="font-bold text-slate-900">- Patricia M.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-50" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-brand-600 font-bold uppercase text-sm tracking-wide">Patient Resources</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 mt-2 text-slate-900">
                    New Patient <span className="text-brand-600">Info &amp; FAQ</span>
</h2>
</div>
<div className="space-y-4 mb-12">

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-brand-500/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold">
                        What insurance do you accept?
                        <iconify-icon className="text-brand-500 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="px-6 pb-6 text-slate-500">We work with most major insurance plans. Please contact our office at (201) 384-0100 to verify your specific coverage.</p>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-brand-500/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold">
                        Do you offer sedation?
                        <iconify-icon className="text-brand-500 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="px-6 pb-6 text-slate-500">Yes! We offer IV Sedation (twilight), Oral Conscious Sedation, and Nitrous Oxide to ensure a completely stress-free experience.</p>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-brand-500/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold">
                        Are new patient forms available online?
                        <iconify-icon className="text-brand-500 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="px-6 pb-6 text-slate-500">Yes, you can fill out our forms online to save time during your first visit.</p>
</details>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:bg-brand-800 transition-all" href="https://forms.mydentistlink.com/57f9bc2c-7abd-4b84-95c9-9f55e9f07480" target="_blank">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
                    Fill New Patient Forms
                </a>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] overflow-hidden relative bg-slate-900 text-white" id="book">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Request Your Appointment
                    </h2>
<p className="font-medium mb-8 text-lg text-brand-200">
                        Ready for a healthier smile? Fill out the form, and our team will contact you to confirm your preferred time.
                    </p>
<div className="flex flex-col gap-4 text-sm font-medium text-slate-300 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white">Or Call Us Directly</p>
<a className="hover:text-brand-400" href="tel:2013840100">(201) 384-0100</a>
</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<form className="space-y-4" id="appointmentForm" onsubmit="event.preventDefault(); document.getElementById('form-success').classList.remove('hidden'); this.style.display='none';">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full border-0 rounded-xl px-5 py-4 placeholder-slate-400 focus:ring-2 focus:ring-brand-500 bg-slate-800/50 text-white" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="sr-only">Phone</label>
<input className="w-full border-0 rounded-xl px-5 py-4 placeholder-slate-400 focus:ring-2 focus:ring-brand-500 bg-slate-800/50 text-white" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
<div>
<label className="sr-only">Email</label>
<input className="w-full border-0 rounded-xl px-5 py-4 placeholder-slate-400 focus:ring-2 focus:ring-brand-500 bg-slate-800/50 text-white" placeholder="Email Address" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer bg-slate-800/50 text-white">
<option className="text-slate-900">Preferred Location</option>
<option className="text-slate-900" selected="">Bergenfield, NJ</option>
</select>
</div>
<div className="relative">
<select className="w-full border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer bg-slate-800/50 text-white">
<option className="text-slate-900">Reason for Visit</option>
<option className="text-slate-900">General Checkup</option>
<option className="text-slate-900">Pain/Emergency</option>
<option className="text-slate-900">Cosmetic Consult</option>
<option className="text-slate-900">Implants</option>
</select>
</div>
</div>
<div>
<input className="w-full border-0 rounded-xl px-5 py-4 placeholder-slate-400 focus:ring-2 focus:ring-brand-500 bg-slate-800/50 text-white" placeholder="Preferred Date &amp; Time (e.g. Mon Morning)" type="text"/>
</div>
<div>
<textarea className="w-full border-0 rounded-xl px-5 py-4 placeholder-slate-400 focus:ring-2 focus:ring-brand-500 bg-slate-800/50 text-white" placeholder="Message or specific concerns..." rows="3"></textarea>
</div>

<button className="w-full bg-brand-600 font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 flex items-center justify-center gap-2 mt-4 hover:bg-brand-500 text-white" type="submit">
                            Request Appointment
                        </button>
</form>

<div className="hidden text-center py-10" id="form-success">
<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-2">Request Received!</h3>
<p className="text-slate-300">Thank you. Our team will contact you shortly to confirm your appointment time.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-brand-600 p-1.5 rounded-lg text-white">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold text-slate-900 leading-none">Bergenfield</span>
<span className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold">Dental Associates</span>
</div>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Proudly Serving Bergenfield, Dumont, New Millford, Tenafly, River Edge and Surrounding Areas with general, cosmetic, and implant dentistry.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="https://www.facebook.com/BergenfieldDental/" target="_blank">
<iconify-icon icon="brandico:facebook"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-brand-600 shrink-0 mt-1" icon="solar:map-point-bold"></iconify-icon>
<span>29 West Church Street<br/>Bergenfield, NJ 07621</span>
</li>
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-brand-600 shrink-0" icon="solar:phone-calling-bold"></iconify-icon>
<a className="hover:text-brand-600" href="tel:2013840100">(201) 384-0100</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Office Hours</h4>
<ul className="space-y-3 text-slate-500 text-sm">
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Monday</span>
<span className="text-slate-900 font-medium">9:00 am - 6:00 pm</span>
</li>
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Tue &amp; Thu</span>
<span className="text-slate-900 font-medium">8:30 am - 5:30 pm</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Quick Links</h4>
<ul className="space-y-3 text-slate-500 text-sm">
<li><a className="hover:text-brand-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#new-patients">Patient Forms</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-400 font-medium text-xs">© 2026 Bergenfield Dental Associates. All Rights Reserved.</p>
<div className="flex gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-brand-600" href="#">Privacy Policy</a>
<a className="hover:text-brand-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
