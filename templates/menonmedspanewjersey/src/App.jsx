import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icon Initialization
        lucide.createIcons();

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const overlay = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = overlay.classList.contains('menu-closed');
            if (isClosed) {
                overlay.classList.remove('menu-closed');
                overlay.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                overlay.classList.add('menu-closed');
                overlay.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#1C1917] text-white/90 py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#C4A484] animate-pulse"></span>
                Top-Rated Medispa in Millburn, NJ
            </span>
<div className="flex gap-6 items-center">
<a className="flex items-center gap-1.5 hover:text-[#C4A484] transition-colors" href="https://maps.app.goo.gl/mivcp8ass589nYwo6" target="_blank">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 45 Essex St, Suite 202, Millburn
                </a>
<span className="hidden sm:flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mon-Fri 10am-6pm, Sat 10am-4pm
                </span>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">
<div>
<span className="block text-xl font-serif font-bold tracking-tight text-[#1C1917] leading-none">Menon</span>
<span className="text-[9px] uppercase tracking-[0.25em] text-[#C4A484] font-bold block mt-0.5">Medispa &amp; Wellness</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-stone-500">
<a className="hover:text-[#C4A484] transition-colors py-2" href="#about">About</a>
<a className="hover:text-[#C4A484] transition-colors py-2" href="#services">Services</a>
<a className="hover:text-[#C4A484] transition-colors py-2" href="#hair">Hair</a>
<a className="hover:text-[#C4A484] transition-colors py-2" href="#iv-therapy">IV Therapy</a>
<a className="hover:text-[#C4A484] transition-colors py-2" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-[#1C1917] font-medium text-xs hover:text-[#C4A484] transition-colors" href="tel:+19734948431">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
                    (973) 494-8431
                </a>
<div className="flex items-center gap-3">

<div className="hidden md:flex items-center gap-1 text-[10px] uppercase font-bold text-stone-400 tracking-wider border-r border-stone-200 pr-4 mr-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                        Millburn
                    </div>
<a className="bg-[#C4A484] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#b09070] transition-all shadow-md active:scale-95 flex items-center gap-2" href="#booking">
                        Book Now
                    </a>

<button aria-label="Open Menu" className="lg:hidden p-2 text-stone-800" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-white menu-closed lg:hidden flex flex-col" id="mobile-menu-overlay">
<div className="flex justify-between items-center p-6 border-b border-stone-100">
<div className="">
<span className="block text-lg font-serif font-bold text-[#1C1917]">Menon</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-[#C4A484]">Medispa</span>
</div>
<button className="p-2 text-stone-800" id="close-menu-btn">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<div className="flex flex-col p-8 gap-6 text-center text-lg font-serif">
<a className="mobile-link hover:text-[#C4A484]" href="#about">About Dr. Menon</a>
<a className="mobile-link hover:text-[#C4A484]" href="#services">Face &amp; Body</a>
<a className="mobile-link hover:text-[#C4A484]" href="#hair">Hair Restoration</a>
<a className="mobile-link hover:text-[#C4A484]" href="#iv-therapy">IV Therapy</a>
<a className="mobile-link hover:text-[#C4A484]" href="#contact">Contact &amp; Hours</a>
<a className="mobile-link text-[#C4A484] font-sans text-base font-bold flex justify-center items-center gap-2" href="tel:+19734948431">
<i className="w-4 h-4" data-lucide="phone"></i> (973) 494-8431
            </a>
</div>
</div>

<header className="min-h-[85vh] flex overflow-hidden relative items-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">

<img alt="Woman receiving facial treatment" className="bg-neutral-950 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8740df36-2064-4dbe-b21a-e5d311294c20_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32">
<div className="max-w-3xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-bold shadow-sm">
<i className="w-3 h-3 text-[#C4A484]" data-lucide="sparkles"></i>
                    Medical-Grade Expertise
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.05]">
                    Your Skin <br/>
<span className="font-serif italic text-[#E5Dccd]">Comes First</span>
</h1>
<p className="text-lg md:text-xl text-stone-100 font-light leading-relaxed max-w-xl border-l-2 border-[#C4A484] pl-6 fade-up delay-100">
                    Advanced Botox, facials, and body treatments delivered by medical experts. Discover why Millburn residents choose Menon Medispa for their aesthetic goals.
                </p>
<div className="flex flex-col sm:flex-row fade-up delay-200 pt-6 gap-x-4 gap-y-4">
<a className="uppercase hover:bg-[#b09070] transition-all hover:shadow-2xl flex items-center justify-center gap-3 text-xs font-bold text-white tracking-widest bg-[#C4A484] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#booking">
                        Request Appointment
                        <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-3" href="tel:+19734948431">
<i className="w-4 h-4" data-lucide="phone"></i>
                        Call (973) 494-8431
                    </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 backdrop-blur-md">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto pt-4 pr-6 pb-6 pl-6 gap-x-8 gap-y-8">
<div className="flex items-center gap-3 text-white/90">
<i className="w-5 h-5 text-[#C4A484] fill-[#C4A484]" data-lucide="star"></i>
<span className="text-xs uppercase tracking-wider font-bold">75+ 5-Star Reviews</span>
</div>
<div className="flex items-center gap-3 text-white/90">
<i className="w-5 h-5 text-[#C4A484]" data-lucide="stethoscope"></i>
<span className="text-xs uppercase tracking-wider font-bold">MD Led Facility</span>
</div>
<div className="flex items-center gap-3 text-white/90">
<i className="w-5 h-5 text-[#C4A484]" data-lucide="clock"></i>
<span className="text-xs uppercase tracking-wider font-bold">Same-Week Appts</span>
</div>
<div className="flex items-center gap-3 text-white/90">
<i className="w-5 h-5 text-[#C4A484]" data-lucide="check-circle"></i>
<span className="text-xs uppercase tracking-wider font-bold">State of the Art Tech</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">

<img alt="Dr. Aditi Menon" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/f61cce_f774e973c0a647caa3114351c5082ccb%7Emv2.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-[#C4A484] text-white p-6 rounded-tl-3xl shadow-xl hidden md:block">
<p className="text-2xl font-serif italic">"Beauty comes <br/>from within."</p>
</div>
</div>
<div className="space-y-8">
<div>
<span className="text-[#C4A484] text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-4">
<span className="w-8 h-[1px] bg-[#C4A484]"></span>
                            Meet The Expert
                        </span>
<h2 className="text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
                            Dr. Aditi Menon, MD
                        </h2>
</div>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                        Founded and led by regenerative medicine specialist Dr. Aditi Menon, our medispa provides aesthetic and dermatological treatment solutions to maintain your outer glow and inner beauty. 
                    </p>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                        The health, rejuvenation, and body confidence that patients get from their treatments are at the heart of what we do. We customize every treatment to your unique needs using medical-grade expertise.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#C4A484] pb-1 hover:text-[#C4A484] transition-colors" href="#booking">
                            Book Your Consultation
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6] border-t border-stone-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#C4A484] text-xs font-bold tracking-widest uppercase mb-3 block">Our Treatments</span>
<h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917]">Comprehensive Medical Aesthetics</h2>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#C4A484] mb-6 group-hover:bg-[#C4A484] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-bold text-[#1C1917] mb-4">Face &amp; Injectables</h3>
<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Botox® Injectables ($14/unit)</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Juvéderm Fillers</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Microneedling</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Chemical Peels &amp; Acne Facials</li>
</ul>
</div>

<div className="bg-[#1C1917] p-8 rounded-2xl shadow-xl transform md:-translate-y-4 border border-stone-800 group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#C4A484] text-white text-[10px] font-bold px-3 py-1 uppercase">Top Rated</div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#C4A484] mb-6">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-bold text-white mb-4">Hair Restoration</h3>
<ul className="space-y-3 text-stone-300 text-sm mb-8">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> HydraFacial™ Keravive™</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> PRP Hair Restoration</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Exosome Treatments</li>
</ul>
<a className="block w-full py-3 bg-[#C4A484] text-white text-center rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1C1917] transition-colors" href="#booking">
                        Learn More
                    </a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#C4A484] mb-6 group-hover:bg-[#C4A484] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-bold text-[#1C1917] mb-4">Body &amp; Wellness</h3>
<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Laser Hair Removal</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> IV Nutrient Therapy</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Semaglutide (Weightloss)</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#C4A484]" data-lucide="check"></i> Vascular Treatments</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<img alt="HydraFacial Keravive" className="rounded-2xl shadow-2xl w-full object-cover" src="https://static.wixstatic.com/media/f61cce_3a5dfd300d0e476caf8a5f734771a869~mv2.jpg"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1C1917]">
                        Discover the Power of <br/>
<span className="text-[#C4A484] italic">HydraFacial™ Keravive™</span>
</h2>
<p className="text-stone-600">
                        A unique, relaxing treatment designed to cleanse, exfoliate, nourish, and hydrate the scalp for healthier and fuller-looking hair for all skin and hair types.
                    </p>
<ul className="space-y-2 text-sm font-medium text-stone-700">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></span> Vortex Technology dislodges impurities
                        </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></span> Peptide Complex Solution infusion
                        </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></span> Biomimetic growth factors
                        </li>
</ul>
<button className="mt-4 px-8 py-3 bg-[#1C1917] text-white rounded-full text-xs uppercase font-bold tracking-widest hover:bg-[#C4A484] transition-colors">
                        Book Treatment - $500
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EF] relative scroll-mt-20" id="booking">
<div className="max-w-4xl mx-auto px-6 bg-white rounded-3xl shadow-xl p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-3xl font-serif font-medium text-[#1C1917] mb-4">Request An Appointment</h2>
<p className="text-stone-500 text-sm">Fill out the form below and we will contact you to confirm your appointment availability.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-2">First Name</label>
<input className="w-full bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-2">Last Name</label>
<input className="w-full bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-colors" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-2">Email Address</label>
<input className="w-full bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-2">Phone Number</label>
<input className="w-full bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-colors" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-2">Interested Service</label>
<select className="w-full bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-colors text-stone-600">
<option>Botox / Dysport</option>
<option>Dermal Fillers</option>
<option>HydraFacial</option>
<option>Microneedling</option>
<option>Laser Hair Removal</option>
<option>Hair Restoration (PRP/Keravive)</option>
<option>IV Therapy</option>
<option>General Consultation</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase text-stone-500 mb-2">Message (Optional)</label>
<textarea className="w-full bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C4A484] transition-colors" rows="3"></textarea>
</div>
<button className="w-full bg-[#C4A484] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#1C1917] transition-colors shadow-lg" type="button">
                    Send Request
                </button>
<p className="text-center text-xs text-stone-400 mt-4">
                    *This form requests an appointment. Our staff will contact you to finalize the date and time.
                </p>
</form>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="block" href="#">
<span className="text-xl font-bold text-white tracking-tight">Menon Medispa.</span>
<span className="block text-xs text-[#C4A484] tracking-widest uppercase">Wellness &amp; Aesthetics</span>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Millburn, NJ's premier destination for physician-led aesthetic treatments. We combine science and beauty to help you look and feel your best.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4A484] hover:text-white transition-colors" href="https://www.instagram.com/menonmedispa" target="_blank"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C4A484] hover:text-white transition-colors" href="https://www.facebook.com/menonmedispa" target="_blank"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C4A484]" data-lucide="map-pin"></i>
<span>45 Essex Street, Suite 202<br/>Millburn, NJ 07041</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#C4A484]" data-lucide="phone"></i>
<span>(973) 494-8431</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#C4A484]" data-lucide="mail"></i>
<span>admin@menonregen.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">10:00am - 6:00pm</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">10:00am - 4:00pm</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-stone-600">Closed</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2024 Menon Medispa &amp; Wellness. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="bg-[#C4A484] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center" href="#booking">
<i className="w-6 h-6" data-lucide="calendar-days"></i>
</a>
</div>



    </>
  );
}
