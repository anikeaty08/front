import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Blur Effect
        const navBg = document.getElementById('nav-bg');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBg.classList.remove('bg-[#1f0b18]/0');
                navBg.classList.add('bg-[#1f0b18]/80', 'backdrop-blur-xl', 'border-b', 'border-pink-500/10');
            } else {
                navBg.classList.add('bg-[#1f0b18]/0');
                navBg.classList.remove('bg-[#1f0b18]/80', 'backdrop-blur-xl', 'border-b', 'border-pink-500/10');
            }
        });

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const body = document.body;
            if (menu.classList.contains('opacity-0')) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                body.style.overflow = 'hidden';
            } else {
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                menu.classList.add('opacity-0', 'pointer-events-none');
                body.style.overflow = '';
            }
        }
        document.getElementById('mobile-toggle').addEventListener('click', toggleMobileMenu);

        // Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="transition-all duration-300 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-none" id="nav-bg"></div>
<div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 z-50 group" href="#">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg amber-gradient-bg shadow-amber-500/30">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-serif text-xl tracking-tight font-bold text-white leading-none transition-colors group-hover:text-amber-400">Glamorous Smile</span>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium mt-1 text-amber-300/80">Dental Spa</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border shadow-lg border-amber-500/20 shadow-amber-900/20">
<a className="px-5 py-2.5 text-xs font-medium hover:text-white rounded-full transition-colors hover:bg-white/5 text-amber-100/80" href="#">Home</a>
<a className="px-5 py-2.5 text-xs font-medium hover:text-white rounded-full transition-colors hover:bg-white/5 text-amber-100/80" href="#about">Dr. Sally</a>
<a className="px-5 py-2.5 text-xs font-medium hover:text-white rounded-full transition-colors hover:bg-white/5 text-amber-100/80" href="#services">Services</a>
<a className="px-5 py-2.5 text-xs font-medium hover:text-white rounded-full transition-colors hover:bg-white/5 text-amber-100/80" href="#locations">Locations</a>
<a className="px-5 py-2.5 text-xs font-bold rounded-full transition-colors text-amber-400 hover:text-amber-300" href="#amenities">Spa Amenities</a>
</div>

<div className="hidden lg:flex items-center gap-5 z-50">
<div className="flex flex-col text-right">
<a className="text-[10px] uppercase font-bold transition-colors tracking-wider text-amber-200/60 hover:text-amber-200" href="tel:+19739129091">Springfield: (973) 912-9091</a>
</div>
<a className="text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide hover:brightness-110 transition-all flex items-center gap-2 amber-gradient-bg amber-glow" href="https://app.nexhealth.com/appt/glamorous-smile-dental-spa?lid=108086" target="_blank">
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
                    Book Visit
                </a>
</div>

<button className="lg:hidden p-2 text-white z-50" id="mobile-toggle">
<iconify-icon className="text-amber-300" height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#1f0b18]/95 backdrop-blur-xl z-40 flex flex-col pt-32 px-8 opacity-0 pointer-events-none" id="mobile-menu">
<div className="flex flex-col gap-8">
<a className="text-4xl font-serif text-white transition-colors hover:text-amber-400" href="#" onclick="toggleMobileMenu()">Home</a>
<a className="text-4xl font-serif transition-colors text-amber-200/70 hover:text-amber-400" href="#about" onclick="toggleMobileMenu()">Dr. Sally</a>
<a className="text-4xl font-serif transition-colors text-amber-200/70 hover:text-amber-400" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-4xl font-serif transition-colors text-amber-200/70 hover:text-amber-400" href="#locations" onclick="toggleMobileMenu()">Locations</a>
<hr className="border-amber-500/20"/>
<a className="flex items-center gap-4 text-white text-lg" href="tel:+19739129091">
<iconify-icon className="text-amber-500" icon="solar:phone-calling-linear"></iconify-icon>
                    Springfield
                </a>
<a className="flex items-center gap-4 text-white text-lg" href="tel:+17325888238">
<iconify-icon className="text-amber-500" icon="solar:phone-calling-linear"></iconify-icon>
                    Neptune
                </a>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24">

<div className="absolute inset-0 z-0">
<img alt="Luxury Smile" className="w-full h-full object-cover opacity-30 scale-105" src="https://images.unsplash.com/photo-1629249688487-1335359265f8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1f0b18] via-[#1f0b18]/50 to-[#1f0b18]/20 mix-blend-multiply"></div>
<div className="opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute inset-0 mix-blend-overlay"></div>
</div>

<div className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none mix-blend-screen bg-amber-600/20"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none mix-blend-screen bg-yellow-600/20"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 backdrop-blur-sm animate-fade-in border-amber-400/30 bg-amber-500/10">
<iconify-icon className="text-xs text-amber-400" icon="solar:heart-angle-bold"></iconify-icon>
<span className="text-[11px] uppercase tracking-widest font-bold text-amber-300">Serving NJ Since 2010</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8 drop-shadow-lg">
                    Designed to be <br/>
<span className="italic font-medium pr-4 amber-gradient-text">Glamorous.</span>
</h1>
<p className="text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed text-amber-100/70">
                    Where dentistry meets a girls' day out. Experience luxury spa amenities, soothing vibes, and Dr. Sally's artistic touch.
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="px-10 py-4 bg-white rounded-full text-sm font-bold tracking-wide transition-colors text-center text-amber-900 hover:bg-amber-50 amber-glow" href="https://app.nexhealth.com/appt/glamorous-smile-dental-spa?lid=108086" target="_blank">
                        Book Your Visit
                    </a>
<a className="px-10 py-4 glass-panel text-white rounded-full text-sm font-bold tracking-wide hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2 group" href="#locations">
                        View Locations <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:block lg:col-span-5 relative">
<div className="relative z-10 grid grid-cols-2 gap-5">
<div className="glass-panel p-7 rounded-[2rem] hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform text-amber-400" icon="solar:wineglass-linear"></iconify-icon>
<h3 className="text-white font-serif text-xl">Spa Vibes</h3>
<p className="text-xs mt-2 font-light text-amber-200/60">Massage chairs, hot towels, and pure relaxation.</p>
</div>
<div className="glass-panel p-7 rounded-[2rem] hover:bg-white/5 transition-all duration-300 mt-10 group hover:-translate-y-1">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform text-amber-400" icon="solar:diploma-verified-linear"></iconify-icon>
<h3 className="text-white font-serif text-xl">NYU Faculty</h3>
<p className="text-xs mt-2 font-light text-amber-200/60">Expert care led by the fabulous Dr. Sally.</p>
</div>
<div className="glass-panel p-7 rounded-[2rem] hover:bg-white/5 transition-all duration-300 -mt-10 group hover:-translate-y-1">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform text-amber-400" icon="solar:calendar-date-linear"></iconify-icon>
<h3 className="text-white font-serif text-xl">Weekends</h3>
<p className="text-xs mt-2 font-light text-amber-200/60">Open Saturdays &amp; Sundays because you're busy.</p>
</div>
<div className="glass-panel p-7 rounded-[2rem] hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform text-amber-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-white font-serif text-xl">Makeovers</h3>
<p className="text-xs mt-2 font-light text-amber-200/60">Stunning veneers and implants for that perfect selfie.</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 px-6 text-slate-900 relative bg-amber-50" id="about">
<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#1f0b18] to-transparent opacity-20"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-20 items-center">

<div className="lg:w-1/2 relative reveal">
<div className="absolute -inset-4 rounded-[2.5rem] rotate-3 opacity-50 blur-sm bg-amber-200"></div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl bg-white border-4 border-white">
<img alt="Dr. Sally Alkamary" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://www.glamoroussmiledentalspa.com/assets/images/index-meet.webp?w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-amber-900/5">
<p className="font-serif italic text-xl text-slate-800 leading-snug">"We treat the person, not just the teeth. Every patient is family."</p>
<div className="flex items-center gap-2 mt-3">
<iconify-icon className="text-amber-500" icon="solar:heart-bold"></iconify-icon>
<p className="text-xs font-bold uppercase tracking-widest text-amber-600">Dr. Sally Alkamary</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 reveal delay-100">
<div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 bg-amber-100 text-amber-600">Girl Boss Dentist</div>
<h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight text-slate-900">Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Dr. Sally.</span><br/>NYU Professor &amp; Implant Specialist.</h2>
<p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">
                        A proud graduate and current NYU faculty, Dr. Sally Alkamary combines academic excellence with a gentle, artistic touch.
                    </p>
<p className="text-slate-600 mb-10 leading-relaxed font-light">
                        She has dedicated countless hours to post-doctoral training in implant surgery and cosmetic reconstruction. At Glamorous Smile, she has created an environment that feels less like a clinic and more like a retreat.
                    </p>
<div className="grid grid-cols-2 gap-y-6 gap-x-8">
<div className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:text-white transition-colors bg-amber-100 text-amber-500 group-hover:bg-amber-500">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">NYU Clinical Professor</span>
</div>
<div className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:text-white transition-colors bg-amber-100 text-amber-500 group-hover:bg-amber-500">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Implant Fellow</span>
</div>
<div className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:text-white transition-colors bg-amber-100 text-amber-500 group-hover:bg-amber-500">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Cosmetic Expert</span>
</div>
<div className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:text-white transition-colors bg-amber-100 text-amber-500 group-hover:bg-amber-500">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Invisalign Provider</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#1f0b18] relative overflow-hidden" id="services">

<div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] top-20 left-1/2 -translate-x-1/2 pointer-events-none bg-amber-600/10"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-amber-400">World Class Care</span>
<h2 className="text-4xl md:text-5xl text-white font-serif">Curated Dental Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 p-10 rounded-[2.5rem] glass-panel group hover:bg-white/5 transition-all duration-500 reveal border-amber-500/10 hover:border-amber-500/30">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 border from-amber-500/20 text-amber-400 border-amber-500/20 to-yellow-500/20">
<iconify-icon icon="solar:stars-minimalistic-bold-duotone" width="28"></iconify-icon>
</div>
<iconify-icon className="transition-colors text-2xl text-amber-500/50 group-hover:text-amber-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-white mb-3">Cosmetic Transformations</h3>
<p className="text-sm leading-relaxed max-w-md font-light text-amber-100/60">
                        Porcelain veneers, professional whitening, and full smile makeovers designed to complement your facial features perfectly. Get that glowing smile you deserve.
                    </p>
</div>

<div className="p-10 rounded-[2.5rem] glass-panel group hover:bg-white/5 transition-all duration-500 reveal delay-75 border-amber-500/10 hover:border-amber-500/30">
<div className="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border from-amber-500/20 text-amber-400 border-amber-500/20 to-yellow-500/20">
<iconify-icon icon="solar:screw-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white mb-3">Dental Implants</h3>
<p className="text-sm leading-relaxed font-light text-amber-100/60">
                        Replace missing teeth with the gold standard in restorative dentistry. Permanent, stable, and natural-looking.
                    </p>
</div>

<div className="p-10 rounded-[2.5rem] glass-panel group hover:bg-white/5 transition-all duration-500 reveal delay-100 border-amber-500/10 hover:border-amber-500/30">
<div className="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border from-amber-500/20 text-amber-400 border-amber-500/20 to-yellow-500/20">
<iconify-icon icon="solar:heart-pulse-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white mb-3">Emergency Care</h3>
<p className="text-sm leading-relaxed font-light text-amber-100/60">
                        Same-day appointments available for pain relief. We handle root canals and extractions with gentle care.
                    </p>
</div>

<div className="md:col-span-2 p-10 rounded-[2.5rem] glass-panel group hover:bg-white/5 transition-all duration-500 reveal delay-150 border-amber-500/10 hover:border-amber-500/30">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 border from-amber-500/20 text-amber-400 border-amber-500/20 to-yellow-500/20">
<iconify-icon icon="solar:sleeping-bold-duotone" width="28"></iconify-icon>
</div>
<iconify-icon className="transition-colors text-2xl text-amber-500/50 group-hover:text-amber-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-white mb-3">Sedation &amp; Comfort</h3>
<p className="text-sm leading-relaxed max-w-md font-light text-amber-100/60">
                        Anxiety-free dentistry using Nitrous Oxide and oral sedation. Sleep through your appointment and wake up with a new smile.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#2d1222] border-y border-amber-500/10" id="amenities">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-10 md:gap-20">
<div className="flex items-center gap-4 hover:text-white transition-colors text-amber-200/80">
<iconify-icon className="text-3xl text-amber-500" icon="solar:armchair-2-bold-duotone"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Massage Chairs</span>
</div>
<div className="flex items-center gap-4 hover:text-white transition-colors text-amber-200/80">
<iconify-icon className="text-3xl text-amber-500" icon="solar:tv-bold-duotone"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Ceiling TVs</span>
</div>
<div className="flex items-center gap-4 hover:text-white transition-colors text-amber-200/80">
<iconify-icon className="text-3xl text-amber-500" icon="solar:cup-hot-bold-duotone"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Coffee Bar</span>
</div>
<div className="flex items-center gap-4 hover:text-white transition-colors text-amber-200/80">
<iconify-icon className="text-3xl text-amber-500" icon="solar:towel-bold-duotone"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Hot Towels</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-slate-900 bg-amber-50/50" id="locations">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-amber-400">Visit Us</span>
<h2 className="text-4xl lg:text-5xl font-serif text-slate-900">Two Chic Locations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-12 rounded-[2.5rem] shadow-xl border flex flex-col relative group overflow-hidden reveal hover:-translate-y-2 transition-transform duration-500 shadow-amber-900/5 border-amber-100">
<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left from-amber-400 to-yellow-500"></div>
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-amber-400">Location 01</p>
<h3 className="text-3xl font-serif text-slate-900">Springfield</h3>
</div>
<div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:text-white transition-colors bg-amber-50 text-amber-400 group-hover:bg-amber-500">
<iconify-icon className="text-xl" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
</div>
<div className="space-y-5 mb-10 flex-grow">
<a className="flex items-start gap-4 text-slate-600 transition-colors group/link hover:text-amber-600" href="#">
<iconify-icon className="mt-1 transition-colors text-lg text-amber-300 group-hover/link:text-amber-500" icon="solar:map-linear"></iconify-icon>
<span className="text-sm font-medium">420 Morris Ave,<br/>Springfield, NJ 07081</span>
</a>
<a className="flex items-center gap-4 text-slate-600 transition-colors group/link hover:text-amber-600" href="tel:+19739129091">
<iconify-icon className="transition-colors text-lg text-amber-300 group-hover/link:text-amber-500" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm font-bold">(973) 912-9091</span>
</a>
<div className="flex items-start gap-4 text-slate-500 text-xs leading-6 pt-6 border-t border-amber-50">
<iconify-icon className="mt-0.5 text-amber-300" icon="solar:clock-circle-linear"></iconify-icon>
<div className="font-medium">
<p className="flex justify-between w-48"><span>Mon, Thu:</span> <span>10am - 6pm</span></p>
<p className="flex justify-between w-48"><span>Tue:</span> <span>12pm - 7pm</span></p>
<p className="flex justify-between w-48"><span>Fri:</span> <span>7am - 2pm</span></p>
<p className="flex justify-between w-48 font-bold text-amber-600"><span>Sat:</span> <span>9am - 2pm</span></p>
</div>
</div>
</div>
<a className="w-full py-4 bg-slate-900 text-white text-center rounded-2xl text-xs font-bold uppercase tracking-wide hover:shadow-lg transition-all hover:bg-amber-500 hover:shadow-amber-500/20" href="https://app.nexhealth.com/appt/glamorous-smile-dental-spa?lid=108086">
                        Book Springfield
                    </a>
</div>

<div className="bg-white p-12 rounded-[2.5rem] shadow-xl border flex flex-col relative group overflow-hidden reveal delay-100 hover:-translate-y-2 transition-transform duration-500 shadow-amber-900/5 border-amber-100">
<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left from-amber-400 to-yellow-500"></div>
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-amber-400">Location 02</p>
<h3 className="text-3xl font-serif text-slate-900">Neptune</h3>
</div>
<div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:text-white transition-colors bg-amber-50 text-amber-400 group-hover:bg-amber-500">
<iconify-icon className="text-xl" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
</div>
<div className="space-y-5 mb-10 flex-grow">
<a className="flex items-start gap-4 text-slate-600 transition-colors group/link hover:text-amber-600" href="#">
<iconify-icon className="mt-1 transition-colors text-lg text-amber-300 group-hover/link:text-amber-500" icon="solar:map-linear"></iconify-icon>
<span className="text-sm font-medium">3301 NJ-66 BLDG-A,<br/>Neptune, NJ 07753</span>
</a>
<a className="flex items-center gap-4 text-slate-600 transition-colors group/link hover:text-amber-600" href="tel:+17325888238">
<iconify-icon className="transition-colors text-lg text-amber-300 group-hover/link:text-amber-500" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm font-bold">(732) 588-8238</span>
</a>
<div className="flex items-start gap-4 text-slate-500 text-xs leading-6 pt-6 border-t border-amber-50">
<iconify-icon className="mt-0.5 text-amber-300" icon="solar:clock-circle-linear"></iconify-icon>
<div className="font-medium">
<p className="flex justify-between w-48"><span>Mon-Thu:</span> <span>12pm - 11:30pm</span></p>
<p className="flex justify-between w-48"><span>Fri:</span> <span>7am - 2pm</span></p>
<p className="flex justify-between w-48 font-bold text-amber-600"><span>Sat:</span> <span>9am - 2pm</span></p>
<p className="flex justify-between w-48 font-bold text-amber-600"><span>Sun:</span> <span>10am - 2pm</span></p>
</div>
</div>
</div>
<a className="w-full py-4 bg-slate-900 text-white text-center rounded-2xl text-xs font-bold uppercase tracking-wide hover:shadow-lg transition-all hover:bg-amber-500 hover:shadow-amber-500/20" href="https://app.nexhealth.com/appt/glamorous-smile-dental-spa?lid=108086">
                        Book Neptune
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1f0b18]">
<div className="max-w-4xl mx-auto glass-panel p-10 md:p-14 rounded-[3rem] reveal border shadow-2xl relative overflow-hidden border-amber-500/20 shadow-amber-900/40">

<div className="absolute -top-20 -right-20 w-64 h-64 blur-[80px] rounded-full pointer-events-none bg-amber-500/20"></div>
<div className="text-center mb-12 relative z-10">
<h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Request Appointment</h2>
<p className="text-sm font-light text-amber-200/60">We will contact you shortly to confirm your preferred time.</p>
</div>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-wider pl-1 text-amber-400">Name</label>
<input className="w-full bg-white/5 border rounded-2xl px-5 py-4 text-white text-sm focus:outline-none transition-all border-amber-500/20 focus:border-amber-500 focus:bg-amber-500/10 placeholder:text-amber-200/20" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-wider pl-1 text-amber-400">Phone</label>
<input className="w-full bg-white/5 border rounded-2xl px-5 py-4 text-white text-sm focus:outline-none transition-all border-amber-500/20 focus:border-amber-500 focus:bg-amber-500/10 placeholder:text-amber-200/20" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-wider pl-1 text-amber-400">Location</label>
<div className="relative">
<select className="w-full bg-white/5 border rounded-2xl px-5 py-4 text-white text-sm focus:outline-none appearance-none cursor-pointer border-amber-500/20 focus:border-amber-500 focus:bg-amber-500/10">
<option className="bg-[#1f0b18]">Springfield, NJ</option>
<option className="bg-[#1f0b18]">Neptune, NJ</option>
</select>
<iconify-icon className="absolute right-5 top-4.5 pointer-events-none text-amber-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-wider pl-1 text-amber-400">Service</label>
<div className="relative">
<select className="w-full bg-white/5 border rounded-2xl px-5 py-4 text-white text-sm focus:outline-none appearance-none cursor-pointer border-amber-500/20 focus:border-amber-500 focus:bg-amber-500/10">
<option className="bg-[#1f0b18]">General Checkup</option>
<option className="bg-[#1f0b18]">Implants / Restoration</option>
<option className="bg-[#1f0b18]">Cosmetic / Veneers</option>
<option className="bg-[#1f0b18]">Emergency</option>
</select>
<iconify-icon className="absolute right-5 top-4.5 pointer-events-none text-amber-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest text-white hover:brightness-110 transition-all mt-6 transform hover:scale-[1.01] duration-300 amber-gradient-bg amber-glow" type="button">
                    Send Request
                </button>
</form>
</div>
</section>

<footer className="bg-[#160511] text-white pt-20 pb-10 border-t border-amber-500/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-3 mb-6">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-amber-500">
<iconify-icon icon="solar:heart-bold" width="18"></iconify-icon>
</div>
<span className="font-serif text-2xl">Glamorous Smile</span>
</div>
<p className="text-xs leading-relaxed mb-8 font-light text-amber-200/40">
                        Redefining the dental experience by combining luxury spa amenities with clinical excellence.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-white transition-all hover:-translate-y-1 border-amber-500/20 text-amber-300 hover:bg-amber-500" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-white transition-all hover:-translate-y-1 border-amber-500/20 text-amber-300 hover:bg-amber-500" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 text-sm">
<div>
<h4 className="font-bold mb-5 text-amber-400">Springfield</h4>
<ul className="space-y-3 text-xs font-light text-amber-200/50">
<li>420 Morris Ave</li>
<li>Springfield, NJ 07081</li>
<li><a className="transition-colors font-medium hover:text-amber-300" href="tel:+19739129091">(973) 912-9091</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-5 text-amber-400">Neptune</h4>
<ul className="space-y-3 text-xs font-light text-amber-200/50">
<li>3301 NJ-66 BLDG-A</li>
<li>Neptune, NJ 07753</li>
<li><a className="transition-colors font-medium hover:text-amber-300" href="tel:+17325888238">(732) 588-8238</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest border-amber-500/10 text-amber-200/30">
<p>© 2026 Glamorous Smile Dental Spa</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-amber-300" href="#">Privacy</a>
<a className="hover:text-amber-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
