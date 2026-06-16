import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconOpen = document.getElementById('icon-open');
        const iconClose = document.getElementById('icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open Menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                iconOpen.classList.add('hidden');
                iconClose.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close Menu
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                iconOpen.classList.remove('hidden');
                iconClose.classList.add('hidden');
                document.body.style.overflow = ''; // Allow scrolling
            }
        }

        // Toggle on button click
        menuToggle.addEventListener('click', toggleMenu);

        // Close on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) toggleMenu();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 z-50">

<div className="bg-[#0b1120] text-white py-2.5 px-4">
<div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-medium tracking-wide uppercase">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#f7941e] animate-pulse"></span>
<span className="hidden sm:inline">Now Accepting New Patients</span>
<span className="sm:hidden">New Patients Welcome</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-[#50a3d5] transition-colors flex items-center gap-1.5" href="tel:2014966112">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> (201) 496-6112
                    </a>
<a className="hidden sm:flex hover:text-[#50a3d5] transition-colors items-center gap-1.5" href="https://goo.gl/maps/Ridgewood" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Ridgewood, NJ
                    </a>
</div>
</div>
</div>

<nav className="bg-white/90 backdrop-blur-md border-b border-stone-200/80 h-16 sm:h-20 flex items-center transition-all">
<div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

<a className="flex items-center gap-2 group z-50 relative" href="#">

<div className="flex flex-col leading-none">
<span className="font-bold text-xl sm:text-2xl tracking-tighter text-slate-800 group-hover:text-[#50a3d5] transition-colors">LIQUIVIDA</span>
<span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-slate-400">Wellness Center</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-stone-600">
<a className="hover:text-[#50a3d5] transition-colors" href="#services">Aesthetics</a>
<a className="hover:text-[#50a3d5] transition-colors" href="#wellness">Wellness &amp; IV</a>
<a className="hover:text-[#50a3d5] transition-colors" href="#team">Our Team</a>
<a className="hover:text-[#50a3d5] transition-colors" href="#locations">Locations</a>
<div className="h-4 w-[1px] bg-stone-200"></div>
<a className="px-5 py-2.5 rounded-full border border-stone-200 text-stone-900 hover:border-[#50a3d5] hover:text-[#50a3d5] transition-all" href="#contact">
                        Request Appointment
                    </a>
<a className="bg-[#50a3d5] text-white px-5 py-2.5 rounded-full hover:bg-[#4090c0] transition-colors shadow-sm hover:shadow-md" href="tel:2014966112">
                        Call Now
                    </a>
</div>

<button aria-label="Toggle Menu" className="z-50 p-2 -mr-2 text-stone-800 hover:bg-stone-100 rounded-full transition-colors" id="menu-toggle">
<iconify-icon className="block" icon="solar:hamburger-menu-linear" id="icon-open" width="24"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="icon-close" width="24"></iconify-icon>
</button>
</div>
</nav>
</div>

<div className="hidden inset-0 bg-white z-40 pt-32 px-6 opacity-0 pointer-events-none flex flex-col gap-6 overflow-y-auto" id="mobile-menu">
<a className="mobile-link text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4" href="#services">Aesthetic Services</a>
<a className="mobile-link text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4" href="#wellness">Wellness &amp; IV</a>
<a className="mobile-link text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4" href="#team">Meet Our Team</a>
<a className="mobile-link text-2xl font-serif text-stone-900 border-b border-stone-100 pb-4" href="#locations">Locations &amp; Hours</a>
<div className="mt-4 space-y-4">
<a className="mobile-link w-full block text-center bg-[#0b1120] text-white py-4 rounded-xl font-medium text-sm uppercase tracking-wider" href="#contact">Book Appointment</a>
<a className="w-full block text-center border border-stone-200 text-stone-900 py-4 rounded-xl font-medium text-sm uppercase tracking-wider" href="tel:2014966112">Call (201) 496-6112</a>
</div>
</div>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">

<div className="bg-neutral-950 opacity-60 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Liquivida Wellness Center Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
<div className="z-20 text-white max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="fade-up max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-[#f7941e]"></span>
                    Your Journey to Vitality Starts Here
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                    Revitalize Your <br/>
<span className="font-serif italic text-[#50a3d5]">Mind &amp; Body</span>
</h1>
<p className="leading-relaxed text-lg font-light text-neutral-50 max-w-lg mb-8">
                    Ridgewood's premier destination for IV Nutrient Therapy, Medical Aesthetics, and Hormone Replacement. Recharge your life with our holistic approach to wellness.
                </p>
<div className="flex flex-col sm:flex-row mt-4 mb-4 gap-x-4 gap-y-4">
<a className="uppercase hover:bg-[#4090c0] transition-colors hover:shadow-xl text-sm font-semibold text-white tracking-wider text-center bg-[#50a3d5] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#contact">
                        Book Appointment
                    </a>
<a className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors text-center flex items-center justify-center gap-2" href="tel:2014966112">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        (201) 496-6112
                    </a>
</div>
</div>
</div>

<div className="z-20 border-t pt-4 pb-4 absolute right-0 bottom-0 left-0 backdrop-blur-md">
<div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mr-auto mb-4 ml-auto pr-6 pl-6 blur-none gap-x-6 gap-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#50a3d5]/10 flex items-center justify-center text-[#50a3d5]">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-bold text-neutral-50">Trusted Care</p>
<p className="text-[10px] text-stone-300">Medical Professionals</p>
</div>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-[#50a3d5]/10 flex items-center justify-center text-[#50a3d5]">
<iconify-icon className="" icon="solar:dropper-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-bold text-neutral-50">IV Therapy</p>
<p className="text-[10px] text-stone-300">Nutrient Infusions</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#50a3d5]/10 flex items-center justify-center text-[#50a3d5]">
<iconify-icon className="" icon="solar:face-scan-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-bold text-neutral-50">Aesthetics</p>
<p className="text-[10px] text-stone-300">Advanced Skincare</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#50a3d5]/10 flex items-center justify-center text-[#50a3d5]">
<iconify-icon className="" icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="uppercase text-xs font-bold text-neutral-50">Open 6 Days</p>
<p className="text-[10px] text-stone-300">Flexible Scheduling</p>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-[#50a3d5] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Aesthetic Services</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-stone-100 min-h-[300px]">
<img alt="Morpheus8 Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://liquividanj.com/wp-content/uploads/2023/01/6-1.jpg.webp"/>
<div className="bg-center bg-neutral-600 mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78287cee-f8de-43f1-8893-5a2abd2c9168_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-white text-2xl font-serif italic mb-2">Morpheus8</h3>
<p className="text-sm italic text-stone-950 max-w-md mb-4">Fractional skin treatment that stimulates collagen production of the underlying layers of the dermis.</p>
<span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/40 pb-1">Learn More</span>
</div>
</div>

<div className="bg-stone-50 border border-stone-100 p-8 rounded-2xl hover:border-[#50a3d5]/30 transition-colors group">
<div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#50a3d5] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:syringe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2">Neurotoxin Injection</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-4">Reduce fine lines and wrinkles for a smoother appearance.</p>
</div>
<div className="bg-stone-50 border border-stone-100 p-8 rounded-2xl hover:border-[#50a3d5]/30 transition-colors group">
<div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#50a3d5] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2">Dermal Fillers</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-4">Restore volume and fullness to facial tissues.</p>
</div>
<div className="bg-stone-50 border border-stone-100 p-8 rounded-2xl hover:border-[#50a3d5]/30 transition-colors group">
<div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#50a3d5] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2">Medical Facials</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-4">Clinical-grade facials customized to your skin type.</p>
</div>
<div className="bg-stone-50 border border-stone-100 p-8 rounded-2xl hover:border-[#50a3d5]/30 transition-colors group">
<div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#50a3d5] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2">PDO Threads</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-4">Non-surgical facelift using dissolvable threads.</p>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-start" id="wellness">
<div className="sticky top-24">
<span className="text-[#50a3d5] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Holistic Health</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-6">Wellness &amp; IV Therapy</h2>
<p className="text-stone-600 font-light mb-8 text-lg leading-relaxed">
                        We don't just treat symptoms; we optimize your body's performance. From our signature IV drips to advanced lab testing, discover what your body truly needs.
                    </p>
<a className="inline-flex items-center gap-2 text-stone-900 font-semibold border-b border-stone-300 pb-1 hover:border-[#50a3d5] hover:text-[#50a3d5] transition-colors" href="#contact">
                        Schedule a Consultation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">IV Nutrient Therapy</h4>
<p className="text-xs text-stone-500">Hydration &amp; Vitamin Infusions</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Weight Loss Programs</h4>
<p className="text-xs text-stone-500">Medically supervised plans</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Hormone Replacement</h4>
<p className="text-xs text-stone-500">Balance &amp; Vitality</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Peptides</h4>
<p className="text-xs text-stone-500">Advanced cellular support</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Lab Testing</h4>
<p className="text-xs text-stone-500">Comprehensive Bloodwork</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Sexual Wellness</h4>
<p className="text-xs text-stone-500">Rejuvenation therapies</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Body Scanner</h4>
<p className="text-xs text-stone-500">Composition Analysis</p>
</a>
<a className="p-6 rounded-xl border border-stone-200 hover:border-[#50a3d5] transition-all hover:shadow-lg group bg-white" href="#">
<h4 className="font-bold text-stone-900 mb-1 group-hover:text-[#50a3d5]">Specialty IV</h4>
<p className="text-xs text-stone-500">Targeted relief</p>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#50a3d5] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Our Locations</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-serif text-stone-900">Ridgewood, NJ</h3>
<span className="px-3 py-1 bg-[#50a3d5]/10 text-[#50a3d5] text-[10px] font-bold uppercase rounded-full tracking-wider">Open Now</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex gap-4">
<iconify-icon className="text-[#50a3d5] mt-1 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
<p className="text-stone-600 text-sm">377 Rt 17 South<br/>Ridgewood, NJ 07450</p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-[#50a3d5] mt-1 shrink-0" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<a className="text-stone-600 text-sm hover:text-[#50a3d5] font-medium" href="tel:2014966112">(201) 496-6112</a>
</div>
<div className="flex gap-4">
<iconify-icon className="text-[#50a3d5] mt-1 shrink-0" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div className="text-stone-600 text-sm space-y-1">
<div className="flex justify-between w-40"><span>Mon - Fri</span> <span>10 AM - 7 PM</span></div>
<div className="flex justify-between w-40"><span>Saturday</span> <span>9 AM - 4 PM</span></div>
<div className="flex justify-between w-40"><span>Sunday</span> <span>In-Home</span></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<a className="flex items-center justify-center gap-2 border border-stone-200 py-3 rounded-lg text-sm font-semibold hover:bg-stone-50 transition-colors" href="tel:2014966112">
<iconify-icon icon="solar:phone-linear"></iconify-icon> Call
                        </a>
<a className="flex items-center justify-center gap-2 bg-[#0b1120] text-white py-3 rounded-lg text-sm font-semibold hover:bg-stone-800 transition-colors" href="https://goo.gl/maps/Ridgewood" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon> Directions
                        </a>
</div>
</div>

<div className="aspect-video md:aspect-auto md:h-full bg-stone-200 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.997974075493!2d-74.09165111335491!3d40.98152519749346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e5fe487a3437%3A0x871e191e7b195e60!2sLiquivida%20Wellness%20Center!5e0!3m2!1sen!2sus!4v1705605681526!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<span className="inline-block py-1 px-3 rounded-full bg-[#f7941e]/10 text-[#f7941e] text-[10px] font-bold uppercase tracking-widest mb-4">Start Your Journey</span>
<h2 className="text-3xl font-medium text-stone-900 mb-4">Request Your Appointment</h2>
<p className="text-stone-500 font-light">Fill out the form below and our team will contact you to confirm your appointment time.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly to confirm.');">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Full Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Phone Number</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all" placeholder="(201) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Preferred Location</label>
<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all appearance-none">
<option>Ridgewood, NJ</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Reason for Visit</label>
<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all appearance-none">
<option>Aesthetic Service</option>
<option>IV Therapy</option>
<option>Wellness Consult</option>
<option>New Patient Inquiry</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Preferred Time</label>
<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all appearance-none">
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Message (Optional)</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#50a3d5]/50 focus:border-[#50a3d5] transition-all" placeholder="Tell us about your goals..." rows="3"></textarea>
</div>
<button className="w-full bg-[#0b1120] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl" type="submit">
                    Submit Request
                </button>
<p className="text-center text-[10px] text-stone-400 italic">By submitting this form, you agree to be contacted by our staff. <br/>(Note for dev: Connect to autoresponder &amp; staff notification)</p>
</form>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-stone-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold">
                        What is nutrient or infusion therapy?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Most people use infusion therapy because they are not getting the proper amount of nutrients through their diet alone. Nutrient infusion therapy is a safe and effective way to receive your vitamins, minerals and other nutrients directly into your bloodstream. Treatment sessions typically last 30-45 minutes and may cause you to feel refreshed and energized.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold">
                        What are the benefits of IV therapy?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Oral vitamins can only lead to about 30 percent absorption rate. However, IV therapy empowers nutrients to be rapidly absorbed into the bloodstream for maximum benefits. There are no major negative side effects to the treatment, especially if cleared from allergies.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold">
                        How is a medical spa different from a clinic?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        As a medical spa, Liquivida Lounge offers a spa-like atmosphere: hip, relaxing and comfortable. However, unlike typical spas, Liquivida offers elective procedures under the supervision of medical professionals.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#0b1120] text-stone-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex flex-col leading-none">
<span className="font-bold text-xl tracking-tighter text-white">LIQUIVIDA</span>
<span className="text-[10px] uppercase tracking-[0.3em] text-[#50a3d5]">Wellness Center</span>
</div>
<p className="text-sm leading-relaxed max-w-sm">
                        Optimizing health and wellness to help you live life to the fullest. We are your one-stop-shop for anti-aging, aesthetics, and holistic care.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#50a3d5] hover:text-white transition-colors" href="https://instagram.com/liquivida_bergennj" target="_blank"><iconify-icon className="grayscale brightness-200 contrast-200" icon="logos:instagram-icon" width="16"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#50a3d5] hover:text-white transition-colors" href="https://www.facebook.com/Liquividamiddletown" target="_blank"><iconify-icon className="grayscale brightness-200 contrast-200" icon="logos:facebook" width="16"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#50a3d5] hover:text-white transition-colors" href="https://www.linkedin.com/company/liquivida/" target="_blank"><iconify-icon className="grayscale brightness-200 contrast-200" icon="logos:linkedin-icon" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#50a3d5]" icon="solar:map-point-linear"></iconify-icon>
<span>377 Rt 17 South<br/>Ridgewood, NJ 07450</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#50a3d5]" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:2014966112">(201) 496-6112</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#50a3d5]" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:liquividanj@gmail.com">liquividanj@gmail.com</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">IV Nutrient Therapy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Medical Aesthetics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hormone Replacement</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2026 Liquivida Wellness Center. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 md:hidden">
<a className="bg-[#50a3d5] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform" href="#contact">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</a>
</div>



    </>
  );
}
