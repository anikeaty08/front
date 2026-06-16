import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Navbar Interaction
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navBg.classList.remove('bg-white/0');
                navBg.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-neutral-200/50');
            } else {
                navBg.classList.add('bg-white/0');
                navBg.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-neutral-200/50');
            }
        });

        // Mobile Menu
        const mobileMenu = document.getElementById('mobile-menu');
        document.getElementById('mobile-toggle').addEventListener('click', () => {
             mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        });
        
        function toggleMobileMenu() {
             mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        }

        // Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="absolute inset-0 bg-white/0 transition-all duration-300" id="nav-bg"></div>
<div className="relative flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="relative z-50 flex items-center gap-2 group" href="https://bluespringsfamilydental.com/">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
<span className="font-serif italic font-bold text-lg">B</span>
</div>
<span className="font-serif text-lg tracking-tight font-medium text-neutral-900 transition-colors" id="logo-text">Blue Springs</span>
</a>

<div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-neutral-200/50 shadow-sm">
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all" href="https://bluespringsfamilydental.com/family-dentistry/">Services</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all" href="https://bluespringsfamilydental.com/our-difference/">Why Us</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all" href="https://bluespringsfamilydental.com/financial/">Patient Info</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all" href="https://bluespringsfamilydental.com/office/">About</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all" href="https://bluespringsfamilydental.com/contact/">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-4 z-50">
<a className="text-xs font-medium text-neutral-600 hover:text-neutral-900 flex items-center gap-2" href="tel:+17193943444">
<svg className="w-3.5 h-3.5" data-lucide="phone"></svg> (719) 394-3444
                </a>
<a className="bg-neutral-900 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-neutral-900/20 active:scale-95" href="https://www.patientviewer.com/?RSID=3131343035&amp;CID=30&amp;C=1342" target="_blank">
                    Schedule Now
                </a>
</div>

<button className="lg:hidden p-2 z-50 text-neutral-900" id="mobile-toggle">
<svg className="w-6 h-6" data-lucide="menu"></svg>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 opacity-0 pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="text-2xl font-serif text-neutral-900" href="https://bluespringsfamilydental.com/family-dentistry/">Services</a>
<a className="text-2xl font-serif text-neutral-900" href="https://bluespringsfamilydental.com/our-difference/">Why Us</a>
<a className="text-2xl font-serif text-neutral-900" href="https://bluespringsfamilydental.com/office/">About</a>
<a className="text-2xl font-serif text-neutral-900" href="https://bluespringsfamilydental.com/contact/">Contact</a>
<a className="mt-8 text-lg font-medium text-blue-600" href="tel:+17193943444">(719) 394-3444</a>
<a className="mt-4 px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-semibold" href="https://www.patientviewer.com/?RSID=3131343035&amp;CID=30&amp;C=1342">Schedule Now</a>
</div>
<button className="absolute top-6 right-6 text-neutral-900 p-2" onclick="toggleMobileMenu()">
<svg className="w-6 h-6" data-lucide="x"></svg>
</button>
</div>
</nav>

<header className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Dentist Colorado Springs" className="w-full h-full object-cover opacity-90" src="https://bluespringsfamilydental.com/wp-content/uploads/2019/11/dentist-colorado-springs.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 mb-6 reveal-on-scroll">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-semibold">Accepting New Patients</span>
</div>
<h1 className="text-4xl md:text-6xl font-serif text-neutral-900 leading-[1.05] tracking-tight mb-6 reveal-on-scroll delay-100">
                    Looking for a Dentist in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Colorado Springs?</span>
</h1>
<p className="text-lg text-neutral-500 font-light mb-8 reveal-on-scroll delay-200">
                    We Can Help! Experience personalized care tailored to your unique needs and goals.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 reveal-on-scroll delay-300">
<a className="group flex items-center justify-between px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all" href="https://bluespringsfamilydental.com/emergencies/">
<span className="text-xs font-medium text-neutral-600">I Have Tooth Pain</span>
<svg className="w-4 h-4 text-neutral-300 group-hover:text-blue-500 transition-colors" data-lucide="arrow-right"></svg>
</a>
<a className="group flex items-center justify-between px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all" href="https://bluespringsfamilydental.com/cosmetic-services/">
<span className="text-xs font-medium text-neutral-600">I Want a Confident Smile</span>
<svg className="w-4 h-4 text-neutral-300 group-hover:text-blue-500 transition-colors" data-lucide="sparkles"></svg>
</a>
<a className="group flex items-center justify-between px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all" href="https://bluespringsfamilydental.com/dental-phobia-and-anxiety/">
<span className="text-xs font-medium text-neutral-600">I Have Dental Anxiety</span>
<svg className="w-4 h-4 text-neutral-300 group-hover:text-blue-500 transition-colors" data-lucide="heart-handshake"></svg>
</a>
<a className="flex items-center justify-center px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl shadow-neutral-900/10 transition-all" href="https://www.patientviewer.com/?RSID=3131343035&amp;CID=30&amp;C=1342" target="_blank">
<span className="text-xs font-bold">Schedule Now</span>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal-on-scroll group">
<div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3 scale-[0.98] transition-transform group-hover:rotate-6"></div>
<img alt="Dr. Michael Coughlin" className="relative rounded-2xl shadow-2xl shadow-neutral-200 z-10 w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://bluespringsfamilydental.com/wp-content/uploads/2019/11/Dr-Michael-Coughlin.png"/>
</div>

<div className="reveal-on-scroll delay-100">
<span className="text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Meet the Doctor</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 mb-6 font-serif">Welcome to Blue Springs <span className="italic text-neutral-500">Family Dental</span></h2>
<div className="prose prose-sm text-neutral-600 font-light mb-8 leading-relaxed">
<p>At our dental office, you’re not just another anonymous patient. Rather, we provide personalized care that is always tailored to your unique needs and goals.</p>
<p className="mt-4">We are a family-owned practice and not part of a corporate chain. This means we are always concerned with quality over volume, and your dental health comes first.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 border-b border-neutral-200 pb-1 hover:border-blue-500 transition-colors group" href="https://bluespringsfamilydental.com/colorado-springs-dentist/">
                        Meet Dr. Coughlin 
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
<div className="lg:col-span-6 order-2 lg:order-1 reveal-on-scroll">
<span className="text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">One Office, Full Service</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 mb-6 font-serif">Everything You Need <br/><span className="italic text-neutral-400">Under One Roof</span></h2>
<p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                        Naturally, we are happy to provide you and your family with preventative care and routine treatments, but we also offer more. Instead of referring you out for complex procedures, our team can handle root canals, dental implants, dentures, periodontal care, extractions, clear aligner orthodontics, and more! We are all about your convenience and satisfaction.
                    </p>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-200 bg-transparent text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition-all" href="https://bluespringsfamilydental.com/family-dentistry/">
                        View All Services
                    </a>
</div>
<div className="lg:col-span-6 order-1 lg:order-2 reveal-on-scroll delay-100">
<div className="relative overflow-hidden rounded-2xl">
<img alt="Patient Care" className="w-full object-cover hover:scale-105 transition-transform duration-700" src="https://bluespringsfamilydental.com/wp-content/uploads/2019/08/Colorado-Springs-Dentist-Michael-Coughlin-DDS-Patient.png"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-on-scroll" href="https://bluespringsfamilydental.com/complete-dentures/">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
<svg className="w-5 h-5" data-lucide="smile"></svg>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Dentures &amp; Partials</h3>
<p className="text-[11px] text-neutral-500 leading-relaxed">Get secure, great-looking full and partial dentures. We also provide metal-free partials for an amazing appearance.</p>
</a>

<a className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-on-scroll delay-100" href="https://bluespringsfamilydental.com/porcelain-crowns/">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
<svg className="w-5 h-5" data-lucide="crown"></svg>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Crowns &amp; Bridges</h3>
<p className="text-[11px] text-neutral-500 leading-relaxed">We can set you up with a new crown or bridge or replace your old, worn restorations. Top quality work guaranteed.</p>
</a>

<a className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-on-scroll delay-200" href="https://bluespringsfamilydental.com/veneers/">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
<svg className="w-5 h-5" data-lucide="gem"></svg>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-[11px] text-neutral-500 leading-relaxed">With bonding, veneers, and white fillings, we ensure your smile looks its best and your confidence peaks.</p>
</a>

<a className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-red-100 hover:bg-white hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 reveal-on-scroll delay-300" href="https://bluespringsfamilydental.com/emergencies/">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-sm">
<svg className="w-5 h-5" data-lucide="ambulance"></svg>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Dental Emergencies</h3>
<p className="text-[11px] text-neutral-500 leading-relaxed">Here for you when you have an emergency. Call us right away, and we’ll work to treat you and stop your pain.</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
<h2 className="text-3xl md:text-4xl tracking-tight mb-2 font-serif">Loved by Locals</h2>
<div className="flex justify-center gap-1 text-orange-400 mt-4">
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel-dark p-8 rounded-2xl reveal-on-scroll">
<div className="mb-4 text-blue-400"><svg className="w-6 h-6" data-lucide="quote"></svg></div>
<p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                        "Dr. Coughlin and all the staff were extremely pleasant and professional. The work was done efficiently and I have been so pleased with the results. Dr. Coughlin provided options with different price points and worked with my schedule."
                    </p>
<cite className="not-italic text-xs font-semibold tracking-wide text-white block">— Dalilah</cite>
</div>

<div className="glass-panel-dark p-8 rounded-2xl reveal-on-scroll delay-100">
<div className="mb-4 text-blue-400"><svg className="w-6 h-6" data-lucide="quote"></svg></div>
<p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                        "I haven’t been to the dentist in 2 years so I was very anxious. These guys are wonderful! They explained all my options. They are so kind and patient. Their office has high tech equipment that was very impressive!"
                    </p>
<cite className="not-italic text-xs font-semibold tracking-wide text-white block">— Emma</cite>
</div>

<div className="glass-panel-dark p-8 rounded-2xl reveal-on-scroll delay-200">
<div className="mb-4 text-blue-400"><svg className="w-6 h-6" data-lucide="quote"></svg></div>
<p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                        "Dr. Coughlin is amazing! I've had pretty bad anxiety over going to the dentist. But I felt so at ease. He explained everything he was doing. I will always highly recommend Dr. Coughlin to everyone."
                    </p>
<cite className="not-italic text-xs font-semibold tracking-wide text-white block">— Alyssa</cite>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 bg-white overflow-hidden">
<div className="absolute inset-0">
<img alt="Smiling Patients" className="w-full h-full object-cover opacity-10 grayscale" src="https://bluespringsfamilydental.com/wp-content/uploads/2019/08/dr-michael-coughlin-patients.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center reveal-on-scroll">
<h2 className="text-3xl md:text-5xl tracking-tight text-neutral-900 mb-6 font-serif">Patient Success Stories</h2>
<p className="text-lg text-neutral-500 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                View the gallery of before and after photos of dental treatments provided by Dr. Coughlin and see how we helped our patients to transform a dental problem into a smile of their dreams.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1" href="https://bluespringsfamilydental.com/smile-gallery/">
                View Smile Gallery <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
</div>
</section>

<section className="py-16 px-6 bg-blue-50 border-t border-blue-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-white rounded-xl shadow-sm border border-blue-100 text-blue-600">
<svg className="w-6 h-6" data-lucide="credit-card"></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Flexible Payment Options</h3>
<p className="text-xs text-neutral-500 mt-1">We accept financing with Cherry and CareCredit. We also offer an in-house discount plan.</p>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-2">
<p className="text-xs font-semibold uppercase tracking-wider text-blue-600">New Patients Welcome</p>
<a className="text-2xl font-serif text-neutral-900 hover:text-blue-600 transition-colors" href="tel:+17193943444">
                    (719) 394-3444
                </a>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-20 px-6 border-t border-neutral-800 font-light text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-neutral-900 text-xs font-bold font-serif italic">B</div>
<span className="text-white font-serif tracking-tight text-lg">Blue Springs</span>
</div>
<p className="mb-6">
                        Located at the corner of Stetson and Powers Blvd., two doors away from Ace Hardware.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/BlueSpringsDental/" target="_blank"><svg className="w-5 h-5" data-lucide="facebook"></svg></a>
<a className="hover:text-white transition-colors" href="https://g.page/BlueSpringsFamilyDental80923?share" target="_blank"><svg className="w-5 h-5" data-lucide="map-pin"></svg></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4">Contact Us</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 text-blue-500" data-lucide="map-pin"></svg>
<a className="hover:text-white" href="https://g.page/BlueSpringsFamilyDental80923?share" target="_blank">
                                5944 Stetson Hills Blvd Suite #100, <br/>Colorado Springs, CO 80923
                            </a>
</li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-blue-500" data-lucide="phone"></svg>
<a className="hover:text-white" href="tel:+17193943444">(719) 394-3444</a>
</li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-blue-500" data-lucide="mail"></svg>
<a className="hover:text-white" href="mailto:FrontDesk@BlueSpringsFamilyDental.com">FrontDesk@BlueSpringsFamilyDental.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Hours</h4>
<ul className="space-y-2">
<li className="flex justify-between border-b border-neutral-800 pb-2"><span>Mon - Fri</span> <span className="text-white">8:30 am - 6:00 pm</span></li>
<li className="flex justify-between border-b border-neutral-800 pb-2"><span>Saturday</span> <span>Closed</span></li>
<li className="flex justify-between border-b border-neutral-800 pb-2"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Location</h4>
<div className="w-full h-32 bg-neutral-800 rounded-lg overflow-hidden relative group cursor-pointer">
<img alt="Map" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" src="https://bluespringsfamilydental.com/wp-content/uploads/2019/08/gm.png"/>
<div className="absolute inset-0 flex items-center justify-center">
<a className="px-3 py-1 bg-white text-neutral-900 text-xs font-semibold rounded-full shadow-lg" href="https://g.page/BlueSpringsFamilyDental80923?share" target="_blank">View Map</a>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs">
<p>© 2024 Blue Springs Family Dental, PLLC. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Sitemap</a>
<a className="hover:text-white" href="#">Disclaimer</a>
<a className="hover:text-white" href="#">Accessibility</a>
</div>
</div>
<p className="mt-4 text-[10px] text-neutral-600">
                Blue Springs Family Dental provides family dental care to Ridgeview, Stetson Hills, Woodmen Heights, Wolf Ranch and other communities in Colorado Springs.
            </p>
</div>
</footer>


    </>
  );
}
