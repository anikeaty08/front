import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic - Hidden by Default
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open Menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                mobileBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close Menu
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#466C48] text-white py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex justify-center sm:justify-between items-center text-[11px] uppercase tracking-wider font-medium">
<span className="hidden sm:flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#CF963F] animate-pulse"></span>
                Accepting New Patients in East Brunswick &amp; Surrounding Areas
            </span>
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-[#CF963F] transition-colors" href="tel:+17327779577">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (732) 777-9577
                </a>
<span className="hidden sm:flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mon-Fri 10am - 6pm
                </span>
</div>
</div>
</div>

<nav className="sticky transition-all duration-300 z-40 bg-[#FDFCFB]/90 border-stone-200/60 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group relative z-50" href="#">
<img alt="Anara Medspa" className="w-auto h-10 object-contain" src="https://b3523922.smushcdn.com/3523922/wp-content/uploads/2023/11/Anara_logo-1.png?lossy=1&amp;strip=0&amp;webp=1"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-stone-500">
<a className="hover:text-[#466C48] transition-colors py-2" href="#services">Services</a>
<a className="hover:text-[#466C48] transition-colors py-2" href="#about">About Us</a>
<a className="hover:text-[#466C48] transition-colors py-2" href="#locations">Locations</a>
<a className="hover:text-[#466C48] transition-colors py-2" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-4 relative z-50">

<div className="hidden md:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#466C48] bg-[#466C48]/5 px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#466C48]/10 transition">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    East Brunswick
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="bg-[#466C48] text-white px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-[#3d6c4e] transition-all shadow-md hover:shadow-lg active:scale-95 hidden sm:flex items-center gap-2" href="#book">
                    Request Appointment
                </a>

<button className="lg:hidden w-10 h-10 flex items-center justify-center text-[#466C48]" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-30 bg-[#FDFCFB] opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col pt-28 px-6" id="mobile-menu-overlay">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-serif text-[#466C48]" href="#services">Services</a>
<a className="mobile-link text-2xl font-serif text-[#466C48]" href="#about">About Dr. Chandra</a>
<a className="mobile-link text-2xl font-serif text-[#466C48]" href="#locations">Locations</a>
<a className="mobile-link text-2xl font-serif text-[#466C48]" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-serif text-[#466C48]" href="#reviews">Patient Stories</a>
<div className="mt-8 space-y-4">
<a className="block w-full py-4 border border-[#466C48] rounded-xl text-[#466C48] font-semibold uppercase tracking-widest text-xs" href="tel:+17327779577">
                    Call (732) 777-9577
                </a>
<a className="mobile-link block w-full py-4 bg-[#466C48] text-white rounded-xl font-semibold uppercase tracking-widest text-xs shadow-lg" href="#book">
                    Request Appointment
                </a>
</div>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Anara Medspa Interior" className="w-full h-full object-cover object-center" src="https://b3523922.smushcdn.com/3523922/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-05-at-12.23.14-PM.jpeg?lossy=1&amp;strip=0&amp;webp=1"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/20"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32">
<div className="max-w-3xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-[#CF963F] text-sm" icon="solar:cup-star-linear"></iconify-icon>
                    Voted #1 Laser Hair Removal in NJ
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                    Advanced Cosmetic <br/>
<span className="font-serif italic text-[#CF963F]">Laser &amp; Wellness</span>
</h1>
<p className="text-lg md:text-xl text-stone-200/90 font-light leading-relaxed max-w-xl border-l-2 border-[#CF963F] pl-6">
                    Premier medical spa services in East Brunswick led by Dr. Ram Chandra, MD. State-of-the-art technology for laser hair removal, injectables, and skin rejuvenation.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-6">
<a className="bg-[#466C48] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#3d6c4e] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3" href="#book">
                        Request Appointment
                        <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="bg-white text-[#466C48] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-colors flex items-center justify-center gap-3" href="tel:+17327779577">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        (732) 777-9577
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-stone-200 py-6 z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#CF963F] text-3xl" icon="solar:medal-ribbon-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase text-stone-900">Spectrum Award</span>
<span className="text-[10px] text-stone-500">Excellence in Customer Service</span>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#CF963F] text-3xl" icon="solar:star-circle-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase text-stone-900">Best of New Jersey</span>
<span className="text-[10px] text-stone-500">Top Rated Medical Spa</span>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#CF963F] text-3xl" icon="solar:user-id-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase text-stone-900">Dr. Ram Chandra, MD</span>
<span className="text-[10px] text-stone-500">Medical Director On-Site</span>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#CF963F] text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase text-stone-900">Safe &amp; Effective</span>
<span className="text-[10px] text-stone-500">FDA Approved Technology</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#466C48] text-xs font-bold tracking-widest uppercase">Expert Treatments</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-3 mb-4">Curated Aesthetic Services</h2>
<p className="text-stone-500 font-light">Combining medical expertise with artistic precision to enhance your natural beauty.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100" href="#">
<img alt="Laser Hair Removal" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.pexels.com/photos/16032305/pexels-photo-16032305.jpeg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#466C48]/90 via-[#466C48]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-3">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-white text-lg font-bold">Laser Hair Removal</h3>
<p className="text-white/80 text-xs mt-1 font-light line-clamp-2">Advanced laser technology for permanent hair reduction on all skin types.</p>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100" href="#">
<img alt="Botox &amp; Dysport" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.pexels.com/photos/29478909/pexels-photo-29478909.jpeg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#466C48]/90 via-[#466C48]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-3">
<iconify-icon className="text-xl" icon="solar:face-scan-circle-linear"></iconify-icon>
</div>
<h3 className="text-white text-lg font-bold">Botox &amp; Injectables</h3>
<p className="text-white/80 text-xs mt-1 font-light line-clamp-2">Smooth wrinkles and restore volume with Botox, Dysport, and Dermal Fillers.</p>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100" href="#">
<img alt="HydraFacial" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#466C48]/90 via-[#466C48]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-3">
<iconify-icon className="text-xl" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-white text-lg font-bold">Skin Rejuvenation</h3>
<p className="text-white/80 text-xs mt-1 font-light line-clamp-2">HydraFacial, Microneedling, and Chemical Peels for glowing skin.</p>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100" href="#">
<div className="absolute inset-0 bg-[#EEF5F1] flex items-center justify-center">

<iconify-icon className="text-6xl text-[#466C48]/20" icon="solar:body-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#466C48]/90 via-[#466C48]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-3">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-white text-lg font-bold">Weight Management</h3>
<p className="text-white/80 text-xs mt-1 font-light line-clamp-2">Physician-guided weight loss and wellness programs tailored to you.</p>
</div>
</a>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-[#466C48] font-semibold text-xs uppercase tracking-widest border-b border-[#466C48] pb-1 hover:text-[#3d6c4e] transition-colors" href="#">
                    View Complete Service Menu
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#EEF5F1]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Anara Medspa Experience" className="rounded-3xl shadow-2xl relative z-10 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe66ac32-2554-495f-aaea-b85404b71c16_800w.webp"/>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#CF963F]/20 rounded-full blur-2xl z-0"></div>
</div>
<div className="space-y-6">
<span className="text-[#466C48] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#466C48]"></span>
                        About Anara Medspa
                    </span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
                        Enhancing Beauty, <br/>
<span className="italic text-stone-500">Subtracting Years.</span>
</h2>
<p className="text-stone-600 leading-relaxed font-light">
                        First of its kind in Central New Jersey, Anara Medspa was founded with the vision of offering advanced cosmetic laser services in a safe, medical environment complemented by the comfort of a day spa.
                    </p>
<p className="text-stone-600 leading-relaxed font-light">
                        Under the guidance of , our goal is to enhance your natural self-esteem. Whether you are looking for laser hair removal, skin rejuvenation, or anti-aging treatments, we provide personalized care with state-of-the-art technology.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex flex-col">
<span className="text-3xl font-serif text-[#466C48]">17+</span>
<span className="text-xs uppercase tracking-wide text-stone-500 mt-1">Years Experience</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-serif text-[#466C48]">3</span>
<span className="text-xs uppercase tracking-wide text-stone-500 mt-1">Locations Served</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-[#FDFCFB] p-8 rounded-3xl border border-stone-200 hover:border-[#466C48]/30 transition-colors shadow-sm">
<h3 className="text-xl font-serif font-semibold text-stone-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-[#466C48]" icon="solar:map-point-bold"></iconify-icon>
                        East Brunswick
                    </h3>
<div className="space-y-4 text-sm text-stone-600">
<div className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5" icon="solar:map-linear"></iconify-icon>
<span>9 Auer Court Suite C &amp; D<br/>East Brunswick, NJ 08816</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-[#466C48] font-medium" href="tel:+17327779577">(732) 777-9577</a>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<ul className="space-y-1">
<li className="flex justify-between w-40"><span>Mon - Fri</span> <span className="font-medium">10am - 6pm</span></li>
<li className="flex justify-between w-40"><span>Sat - Sun</span> <span className="text-stone-400">Closed</span></li>
</ul>
</div>
</div>
<div className="mt-8 flex gap-4">
<a className="flex-1 py-3 text-center border border-stone-200 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors" href="https://maps.google.com/?q=9+Auer+Court+Suite+C+&amp;+D+East+Brunswick+NJ" target="_blank">
                            Get Directions
                        </a>
<a className="flex-1 py-3 text-center bg-[#466C48] text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#3d6c4e] transition-colors" href="tel:+17327779577">
                            Call Now
                        </a>
</div>
</div>

<div className="flex flex-col justify-center">
<span className="text-[#CF963F] text-xs font-bold tracking-widest uppercase mb-4">Areas We Serve</span>
<h2 className="text-2xl font-serif text-stone-900 mb-6">Conveniently Located for Central NJ</h2>
<p className="text-sm text-stone-500 mb-8">Serving patients from across the region including:</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-stone-50 rounded-full text-xs font-medium text-stone-600 border border-stone-100">Middlesex County</span>
<span className="px-4 py-2 bg-stone-50 rounded-full text-xs font-medium text-stone-600 border border-stone-100">Monmouth County</span>
<span className="px-4 py-2 bg-stone-50 rounded-full text-xs font-medium text-stone-600 border border-stone-100">Somerset County</span>
<span className="px-4 py-2 bg-stone-50 rounded-full text-xs font-medium text-stone-600 border border-stone-100">Mercer County</span>
<span className="px-4 py-2 bg-stone-50 rounded-full text-xs font-medium text-stone-600 border border-stone-100">Union County</span>
<span className="px-4 py-2 bg-stone-50 rounded-full text-xs font-medium text-stone-600 border border-stone-100">Ocean County</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#466C48] text-white relative overflow-hidden" id="book">
<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif mb-4">Request a Consultation</h2>
<p className="text-white/80 font-light">Free consultation when fee applied to products or services.</p>
</div>
<form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-stone-800 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Full Name</label>
<input className="custom-input" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Phone Number</label>
<input className="custom-input" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Email Address</label>
<input className="custom-input" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Interest</label>
<div className="relative">
<select className="custom-input appearance-none cursor-pointer">
<option>General Consultation</option>
<option>Laser Hair Removal</option>
<option>Botox / Fillers</option>
<option>Skin Rejuvenation</option>
<option>Weight Management</option>
</select>
<iconify-icon className="absolute right-4 top-3 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Message (Optional)</label>
<textarea className="custom-input" placeholder="Tell us about your goals..." rows="3"></textarea>
</div>
<button className="w-full bg-[#CF963F] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#b88536] transition-colors shadow-lg mt-4" type="submit">
                    Send Request
                </button>
<p className="text-center text-[10px] text-stone-400 mt-4">
                    By submitting this form, you agree to receive communications from Anara Medspa. Your information is secure.
                </p>

<div className="hidden">Note for dev: Connect form to instant email autoresponder + staff notification email: info@anaramedspa.com</div>
</form>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="block" href="#">
<img alt="Anara Medspa" className="h-12 w-auto brightness-0 invert opacity-80" src="https://b3523922.smushcdn.com/3523922/wp-content/uploads/2023/11/Anara_logo-1.png?lossy=1&amp;strip=0&amp;webp=1"/>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Anara Medspa &amp; Cosmetic Laser Center offers advanced aesthetic treatments in a comfortable, safe environment. Enhancing beauty, naturally.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white" href="https://www.instagram.com/anaramedspa" target="_blank">
<iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white" href="https://www.facebook.com/AnaraMedSpa" target="_blank">
<iconify-icon className="text-lg" icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#CF963F]" icon="solar:map-point-linear"></iconify-icon>
<span>9 Auer Court Suite C &amp; D<br/>East Brunswick, NJ 08816</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#CF963F]" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+17327779577">(732) 777-9577</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Meet the Team</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2025 Anara Medspa &amp; Cosmetic Laser Center. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-400 transition-colors" href="#">Medical Disclaimer</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 md:hidden">
<a className="bg-[#466C48] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform" href="#book">
<iconify-icon className="text-2xl" icon="solar:calendar-add-bold"></iconify-icon>
</a>
</div>



    </>
  );
}
