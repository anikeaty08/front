import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeButtons = document.querySelectorAll('.close-menu');

        function toggleMenu() {
            if (mobileMenu.classList.contains('menu-hidden')) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        
        closeButtons.forEach(btn => {
            btn.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#2e1065] text-white/90 py-3 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
<span className="flex items-center gap-2 opacity-90">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Accepting New Patients • Rahway &amp; Fair Lawn, NJ
            </span>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="tel:+18483043063">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> Call Rahway
                </a>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="tel:+15513471025">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> Call Fair Lawn
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="w-10 h-10 bg-[#7a00df] text-white flex items-center justify-center rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:health-linear" width="22"></iconify-icon>
</div>
<div>
<span className="block text-lg font-bold tracking-tight text-slate-900 leading-none">RevivalMD</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-slate-500">West Hill Medical Group</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
<a className="hover:text-[#7a00df] transition-colors py-2" href="#primary-care">Primary Care</a>
<a className="hover:text-[#7a00df] transition-colors py-2" href="#aesthetics">Aesthetics</a>
<a className="hover:text-[#7a00df] transition-colors py-2" href="#locations">Locations</a>
<a className="hover:text-[#7a00df] transition-colors py-2" href="#new-patients">New Patients</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex bg-[#7a00df] text-white px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-[#6002ad] transition-all shadow-md hover:shadow-lg active:scale-95 items-center gap-2" href="#book">
                    Book Appointment
                </a>

<button className="lg:hidden text-slate-900 p-2 z-50 relative" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#FDFCFB] z-40 flex flex-col justify-center items-center gap-8 menu-hidden" id="mobile-menu">
<button className="close-menu absolute top-6 right-6 p-4 text-slate-900">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="close-menu text-2xl font-serif text-slate-900" href="#primary-care">Primary Care</a>
<a className="close-menu text-2xl font-serif text-slate-900" href="#aesthetics">Aesthetics</a>
<a className="close-menu text-2xl font-serif text-slate-900" href="#locations">Locations</a>
<a className="close-menu text-2xl font-serif text-slate-900" href="#new-patients">New Patients</a>
<a className="close-menu bg-[#7a00df] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold shadow-xl" href="#book">
            Book Appointment
        </a>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Medical Aesthetic Clinic Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
<div className="max-w-2xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-amber-300" icon="solar:star-linear"></iconify-icon>
                    Premier Medical &amp; Aesthetic Care
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                    Tailored Health <br/>
<span className="font-serif italic text-slate-200">&amp; Inner Radiance</span>
</h1>
<p className="text-lg md:text-xl text-slate-200/90 font-light leading-relaxed max-w-lg border-l-2 border-[#7a00df] pl-6 fade-up delay-100">
                    West Hill Medical Group in Fair Lawn &amp; Rahway, NJ offers expert primary care and advanced aesthetic services for your total well-being.
                </p>
<div className="flex flex-col sm:flex-row gap-5 pt-6 fade-up delay-200">
<a className="bg-white text-slate-900 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group" href="#book">
                        Book Online
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-3" href="tel:+18483043063">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                        (848) 304-3063
                    </a>
</div>
</div>
</div>
</header>

<section className="border-b border-slate-100 bg-white relative z-20 -mt-10 mx-6 rounded-2xl shadow-xl lg:mx-auto max-w-7xl lg:mt-0 lg:shadow-none lg:rounded-none lg:border-none">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6 lg:px-0">
<div className="flex flex-col gap-1 items-center text-center lg:items-start lg:text-left">
<span className="text-[#7a00df] font-serif text-2xl font-medium">2</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">NJ Locations</span>
</div>
<div className="flex flex-col gap-1 items-center text-center lg:items-start lg:text-left">
<span className="text-[#7a00df] font-serif text-2xl font-medium">Primary</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Care Experts</span>
</div>
<div className="flex flex-col gap-1 items-center text-center lg:items-start lg:text-left">
<span className="text-[#7a00df] font-serif text-2xl font-medium">Top</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Aesthetic Tech</span>
</div>
<div className="flex flex-col gap-1 items-center text-center lg:items-start lg:text-left">
<span className="text-[#7a00df] font-serif text-2xl font-medium">New</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Patients Welcome</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
<div className="space-y-6">
<span className="text-[#7a00df] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#7a00df]"></span>
                        Our Expertise
                    </span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
                        Comprehensive Care <br/><span className="font-serif italic text-slate-500">Inside &amp; Out</span>
</h2>
<p className="text-slate-600 leading-relaxed font-light text-lg">
                        We combine traditional medical excellence with modern aesthetic artistry to help you look and feel your absolute best.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 transition-all hover:shadow-xl" id="primary-care">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-105" src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors"></div>
</div>
<div className="relative p-10 h-full flex flex-col justify-between min-h-[400px]">
<div className="w-12 h-12 bg-white text-[#7a00df] rounded-full flex items-center justify-center shadow-sm mb-6 z-10">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<div className="z-10 text-slate-900 group-hover:text-white transition-colors">
<h3 className="text-2xl font-serif font-medium mb-3">Primary Care</h3>
<p className="text-sm opacity-80 mb-6 leading-relaxed max-w-sm">
                                Comprehensive health management available at our Rahway location. From check-ups to chronic disease management.
                            </p>
<ul className="space-y-2 text-sm font-medium mb-8">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Annual Physicals</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Sick Visits</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Preventive Care</li>
</ul>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-current pb-1 hover:opacity-70" href="#book">
                                Book Medical Visit
                            </a>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-[#2e1065] text-white border border-[#2e1065] transition-all hover:shadow-xl" id="aesthetics">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative p-10 h-full flex flex-col justify-between min-h-[400px]">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-sm mb-6 z-10">
<iconify-icon icon="solar:cosmetic-linear" width="24"></iconify-icon>
</div>
<div className="z-10">
<h3 className="text-2xl font-serif font-medium mb-3">Aesthetics</h3>
<p className="text-sm opacity-80 mb-6 leading-relaxed max-w-sm">
                                Transformative beauty treatments available at Rahway &amp; Fair Lawn. Reveal your inner radiance.
                            </p>
<ul className="space-y-2 text-sm font-medium mb-8">
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Injectables &amp; Fillers</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Skin Rejuvenation</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Body Contouring</li>
</ul>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-current pb-1 hover:opacity-70" href="#book">
                                Book Consultation
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<span className="text-[#7a00df] text-xs font-bold tracking-widest uppercase">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Our Locations</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-[#7a00df]/30 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-serif text-slate-900">Rahway, NJ</h3>
<span className="px-3 py-1 bg-purple-50 text-[#7a00df] rounded-full text-[10px] uppercase font-bold tracking-wide">Primary Care &amp; Aesthetics</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Address</p>
<p className="text-sm text-slate-500">1531 Irving St,<br/>Rahway, NJ 07065</p>
<a className="text-xs font-medium text-[#7a00df] mt-1 inline-block underline decoration-[#7a00df]/30 hover:decoration-[#7a00df]" href="https://maps.google.com/?q=1531+Irving+St,+Rahway,+NJ+07065" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Phone</p>
<a className="text-sm text-slate-500 hover:text-[#7a00df]" href="tel:+18483043063">(848) 304-3063</a>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100">
<a className="w-full block text-center bg-slate-900 text-white py-3 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#7a00df] transition-colors" href="#book">
                            Book Rahway
                        </a>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-[#7a00df]/30 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-serif text-slate-900">Fair Lawn, NJ</h3>
<span className="px-3 py-1 bg-purple-50 text-[#7a00df] rounded-full text-[10px] uppercase font-bold tracking-wide">Aesthetics Only</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Address</p>
<p className="text-sm text-slate-500">11-19 River Rd,<br/>Fair Lawn, NJ 07410</p>
<a className="text-xs font-medium text-[#7a00df] mt-1 inline-block underline decoration-[#7a00df]/30 hover:decoration-[#7a00df]" href="https://maps.google.com/?q=11-19+River+Rd,+Fair+Lawn,+NJ+07410" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Phone</p>
<a className="text-sm text-slate-500 hover:text-[#7a00df]" href="tel:+15513471025">(551) 347-1025</a>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100">
<a className="w-full block text-center bg-slate-900 text-white py-3 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#7a00df] transition-colors" href="#book">
                            Book Fair Lawn
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-10 text-center">Patient Information</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-xl border border-slate-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold">
                        Do you accept insurance?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        For Primary Care services at our Rahway location, we accept most major insurance plans. Aesthetic services are typically elective and not covered by insurance. Please call our office for specific plan verification.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl border border-slate-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold">
                        How do I book an appointment?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        You can book directly through our website using the "Book Appointment" form below, or by calling our specific location numbers.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl border border-slate-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold">
                        What services are offered in Fair Lawn?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        Our Fair Lawn location specializes exclusively in Aesthetic Services. For Primary Care needs, please visit our Rahway clinic.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#2e1065] text-slate-200 relative overflow-hidden" id="book">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-purple-300 text-xs font-bold tracking-widest uppercase">Start Your Journey</span>
<h2 className="text-4xl font-serif text-white mt-2">Request Appointment</h2>
</div>
<form className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl space-y-6" onsubmit="event.preventDefault(); alert('Thank you for your request. Our staff will contact you shortly to confirm your appointment time.');">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Full Name</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Phone Number</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Email Address</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Preferred Location</label>
<div className="relative">
<select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors appearance-none">
<option className="text-slate-900">Rahway (Primary Care &amp; Aesthetics)</option>
<option className="text-slate-900">Fair Lawn (Aesthetics Only)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Reason for Visit</label>
<div className="relative">
<select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors appearance-none">
<option className="text-slate-900">General Consultation</option>
<option className="text-slate-900">Aesthetics / Cosmetic</option>
<option className="text-slate-900">Primary Care Check-up</option>
<option className="text-slate-900">Sick Visit</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Preferred Day/Time</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors" placeholder="e.g. Mon Mornings" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-purple-200">Message (Optional)</label>
<textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors h-24" placeholder="How can we help you?"></textarea>
</div>
<button className="w-full bg-white text-[#2e1065] font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-purple-100 transition-colors shadow-lg" type="submit">
                    Submit Request
                </button>
<p className="text-[10px] text-center text-white/40 uppercase tracking-widest">Connects to secure automated scheduling system</p>
</form>
</div>
</section>

<footer className="bg-[#1C1917] text-slate-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2 text-white" href="#">
<iconify-icon className="text-[#7a00df]" icon="solar:health-linear" width="24"></iconify-icon>
<span className="text-xl font-bold tracking-tight">RevivalMD</span>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        West Hill Medical Group.<br/>
                        Tailored health and beauty solutions for your well-being.
                    </p>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Rahway</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>1531 Irving St,<br/>Rahway, NJ 07065</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+18483043063">(848) 304-3063</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Fair Lawn</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>11-19 River Rd,<br/>Fair Lawn, NJ 07410</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+15513471025">(551) 347-1025</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2025 West Hill Medical Group. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="/privacy-policy/">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="/terms-of-service/">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-30 md:hidden">
<a className="bg-[#7a00df] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center" href="#book">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</a>
</div>


    </>
  );
}
