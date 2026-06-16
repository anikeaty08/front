import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Interaction
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const logoImg = document.getElementById('logo-img');
        const logoContainer = document.getElementById('logo-icon-container');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateNav() {
            if (window.scrollY > 50) {
                // Scrolled State
                navBg.classList.add('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.remove('bg-transparent');
                
                logoContainer.classList.remove('bg-white/10');
                
                // Darken Text
                navLinks.forEach(el => {
                    el.classList.remove('text-white/90', 'hover:text-white');
                    el.classList.add('text-neutral-600', 'hover:text-neutral-900');
                });
                
            } else {
                // Top State
                navBg.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.add('bg-transparent');
                
                logoContainer.classList.add('bg-white/10');

                // Lighten Text
                navLinks.forEach(el => {
                    el.classList.add('text-white/90', 'hover:text-white');
                    el.classList.remove('text-neutral-600', 'hover:text-neutral-900');
                });
            }
        }
        window.addEventListener('scroll', updateNav);
        updateNav(); // Init

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('opacity-0')) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        document.getElementById('mobile-toggle').addEventListener('click', toggleMobileMenu);

        // Intersection Observer
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 group/nav" id="navbar">
<div className="transition-all duration-300 absolute top-0 right-0 bottom-0 left-0 bg-transparent" id="nav-bg"></div>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 z-50 relative" href="#">

<div className="h-10 transition-all duration-300 rounded p-1 bg-white/10" id="logo-icon-container">
<img alt="Smiles by Bergen Dental" className="h-full object-contain" id="logo-img" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/1518638984816-J1264GLZG709NNI5T2YY/SBBD+final+logo-Horizontal.png?format=500w"/>
</div>
</a>

<div className="hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 border transition-colors duration-300" id="nav-container">
<a className="nav-link transition-colors text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4 text-white/90 hover:text-white" href="#">Home</a>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors text-white/90 hover:text-white">
                        Locations <iconify-icon className="opacity-70 w-3 h-3" height="12" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(255, 255, 255)'}} width="12"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-4 w-56 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#midland-park" style={{}}>Midland
                    Park Office</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#emerson" style={{}}>Emerson
                    Office</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#dumont" style={{}}>Dumont
                    Office</a>
</div>
</div>

<div className="group relative">
<button className="nav-link flex gap-1 transition-colors text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-1 gap-y-1 items-center text-white/90 hover:text-white">
                        Services <iconify-icon className="w-3 h-3 opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white border border-neutral-100 rounded-xl shadow-2xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out overflow-hidden p-6">
<div className="grid grid-cols-2 gap-8">
<div>
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Preventive
                            &amp; Family</h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Dental
                                Hygiene</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Pediatric
                                Cleanings</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Periodontal
                                Disease</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Night
                                Guards / Bruxism</a>
</div>
</div>
<div className="border-l border-neutral-100 pl-8">
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Cosmetic &amp;
                            Restorative</h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Invisalign®</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Veneers
                                &amp; Whitening</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Implants,
                                Crowns &amp; Bridges</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Root
                                Canals &amp; Extractions</a>
</div>
</div>
</div>
</div>
</div>
<a className="nav-link transition-colors text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4 text-white/90 hover:text-white" href="#doctors">Our
  Doctors</a>
<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors text-white/90 hover:text-white">
                        New Patients <iconify-icon className="w-3 h-3 opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-4 w-52 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Patient
                    Forms</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Insurance
                    &amp; Financing</a>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-3 z-50">
<div className="hidden xl:block group text-right mr-2 relative">
<p className="text-[10px] uppercase text-sm font-semibold text-stone-950/80 tracking-normal" style={{}}>
    Call Us Today
</p>
<button className="inline-flex hover:text-cyan-300 transition-colors text-xs font-bold text-neutral-950/90 mix-blend-normal gap-x-1 gap-y-1 items-center" style={{}} type="button">
            Choose Location
            <span className="text-[10px]">▼</span>
</button>
<div className="absolute right-0 mt-2 w-72 rounded-lg bg-white shadow-xl ring-1 ring-black/10 overflow-hidden hidden group-hover:block z-50">
<a className="flex items-center justify-between px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100 whitespace-nowrap" href="tel:+12014443049">
<span className="font-medium">Emerson</span>
<span className="tabular-nums">(201) 444-3049</span>
</a>
<a className="flex items-center justify-between px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100 whitespace-nowrap border-t border-neutral-200" href="tel:+12015551234">
<span className="font-medium">Dumont</span>
<span className="tabular-nums">(201) 555-1234</span>
</a>
<a className="flex items-center justify-between px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100 whitespace-nowrap border-t border-neutral-200" href="tel:+12016667890">
<span className="font-medium">Midland Park</span>
<span className="tabular-nums">(201) 666-7890</span>
</a>
</div>
</div>
<a className="hover:bg-neutral-200 transition-colors shadow-white/10 text-xs font-semibold text-neutral-950 tracking-wide bg-white rounded-full pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#booking">
            Request Appointment
        </a>
</div>

<button aria-label="Menu" className="lg:hidden z-50 pt-2 pr-2 pb-0 pl-2 relative" id="mobile-toggle">
<iconify-icon className="text-white w-6 h-6" height="24" icon="solar:hamburger-menu-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</button>
</div>

<div className="fixed hidden flex flex-col transition-all duration-300 lg:hidden overflow-y-auto bg-neutral-950 pt-24 pr-6 pl-6 top-0 right-0 bottom-0 left-0" id="mobile-menu">
<div className="flex flex-col gap-6 pb-20 gap-x-6 gap-y-6">
<a className="text-xl text-white font-serif border-white/10 border-b pb-4" href="#" onclick="toggleMobileMenu()">Home</a>
<a className="text-lg text-neutral-300 font-light" href="#locations" onclick="toggleMobileMenu()">Locations</a>
<a className="text-lg text-neutral-300 font-light" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-lg text-neutral-300 font-light" href="#doctors" onclick="toggleMobileMenu()">Our Doctors</a>
<a className="mt-8 px-8 py-4 bg-white text-neutral-950 rounded-full text-center text-sm font-semibold" href="#booking" onclick="toggleMobileMenu()">Request Appointment</a>
</div>
<button className="text-white pt-8 pb-0 pl-2 absolute top-6 right-6" onclick="toggleMobileMenu()">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="solar" data-solar="close-circle-linear" height="32" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</button>
</div>
</nav>

<header className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-neutral-950">

<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Smiles by Bergen Dental Family" className="w-full h-full object-cover opacity-70" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/1519073745830-N8ZJRDZLSMQHYH19EX4C/iStock-644607222.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/20"></div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="flex flex-col md:pb-20 h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pb-12 pl-6 relative justify-end">
<div className="max-w-3xl">

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] animate-fade-in-up delay-100 text-4xl text-white tracking-tight font-serif mb-6 drop-shadow-lg">
                    Helping patients achieve their <span className="font-light italic text-white/80">most beautiful smile.</span>
</h1>
<p className="text-neutral-200 text-sm md:text-base font-light mb-8 max-w-xl animate-fade-in-up delay-200 leading-relaxed">
                    Experience comprehensive, mercury-free family and cosmetic dentistry. Serving the communities of Emerson, Dumont, and Midland Park with care and advanced technology.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200 mb-8">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors text-center shadow-lg shadow-white/5 uppercase tracking-wider" href="#booking">
                        Request Appointment
                    </a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-xs font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group border border-white/20 uppercase tracking-wider" href="#locations">
                        Find a Location
                        <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap gap-4 md:gap-8 animate-fade-in-up delay-300 pt-6 border-t border-white/10">
<div className="flex items-center gap-2 text-white/80">
<iconify-icon className="text-cyan-400 w-5 h-5" icon="solar:check-circle-linear" style={{}}></iconify-icon>
<span className="text-xs font-medium tracking-wide">Mercury &amp; Metal Free</span>
</div>
<div className="flex items-center gap-2 text-white/80">
<iconify-icon className="text-cyan-400 w-5 h-5" icon="solar:map-point-linear" style={{}}></iconify-icon>
<span className="text-xs font-medium tracking-wide">3 Convenient Locations</span>
</div>
<div className="flex items-center gap-2 text-white/80">
<iconify-icon className="text-cyan-400 w-5 h-5" icon="solar:heart-angle-linear" style={{}}></iconify-icon>
<span className="text-xs font-medium tracking-wide">Accepting New Patients</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white border-neutral-100 border-b pt-16 pr-6 pb-16 pl-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row reveal-on-scroll mb-16 items-end justify-between">
<div className="">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{}}>Comprehensive Care</span>
<h2 className="w-full !text-left md:!text-center md:text-4xl text-3xl tracking-tight">Our Expertise</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-pointer reveal-on-scroll">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200">
<img alt="Preventive Dentistry" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/1518644615594-LX84KT7V2SIX32APU5FY/iStock-157740766.jpg"/>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600" style={{}}>Preventive Dentistry</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3">Hygiene, periodontal care, and pediatric checkups for the whole family.</p>
<a className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4" href="#">Learn More</a>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100 xl:text-slate-50 font-bold bg-gradient-to-br from-white/10 to-white/0" style={{}}>
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200">
<img alt="Cosmetic Dentistry" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99b65c05-822e-48f9-b974-321ad4d9c05e_1600w.jpg"/>
<div className="text-[10px] uppercase font-bold tracking-wide bg-neutral-400/90 rounded-sm px-2 py-1 absolute top-4 right-4 backdrop-blur">Invisalign Provider</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600" style={{}}>Cosmetic &amp; Invisalign</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3">Straighten teeth without braces, plus veneers and professional whitening.</p>
<a className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4" href="#">Transform Your Smile</a>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200">
<img alt="Restorative Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/1518643812150-G33JOOT5N4GW2FC6VSPG/iStock-657119868.jpg"/>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600" style={{}}>Restorative &amp; Implants</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3">Metal-free fillings, crowns, bridges, and dental implants to restore function.</p>
<a className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4" href="#">Restore Function</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 border-neutral-100 border-b pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal-on-scroll">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
<img alt="Smiles by Bergen Team" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover shadow blur-none grayscale-0 invert-0" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/1616440798111-UWUNBPAR36H5YEU9QYHV/138808784_1565445323646963_652281389880057321_o.png?w=800&amp;q=80" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
</div>
<div className="order-1 md:order-2 reveal-on-scroll delay-100">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block" style={{}}>About Us</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-neutral-900 mb-6 font-serif">A Sanctuary for <span className="italic text-neutral-500">Modern Dentistry</span></h2>
<p className="text-neutral-600 font-light leading-relaxed mb-6">
                        We welcome you to Smiles by Bergen Dental. Our office welcomes patients of all ages and helps you achieve the most beautiful smile. We pride ourselves on being mercury and metal-free facilities, providing the most up-to-date dental procedures in combination with the newest technology.
                    </p>
<p className="text-neutral-600 font-light leading-relaxed mb-8">
                        We strongly believe in taking time to explain all available treatment options. Together, we can achieve a brighter and healthier smile in a caring, stress-free environment.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-cyan-600 transition-colors" href="#booking" style={{}}>
                        Meet Our Team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="locations">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{}}>Visit Us</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif">3 Convenient Locations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-neutral-100 rounded-2xl bg-neutral-50 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 reveal-on-scroll">
<div className="h-48 mb-6 overflow-hidden rounded-lg bg-neutral-200">
<img alt="Midland Park Office" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/a91460f2-7953-43ba-9563-ca751137db53/emerson.jpg"/>
</div>
<h3 className="text-xl font-serif text-neutral-900 mb-4">Midland Park</h3>
<div className="space-y-3 text-sm text-neutral-600">
<p className="flex items-start gap-3"><iconify-icon className="shrink-0 mt-1 text-cyan-600" icon="solar:map-point-linear" style={{}}></iconify-icon> 339 Godwin Avenue, <br/>Midland Park, NJ 07432</p>
<p className="flex items-center gap-3"><iconify-icon className="shrink-0 text-cyan-600" icon="solar:phone-calling-linear" style={{}}></iconify-icon> <a className="hover:underline" href="tel:+12014443049">(201) 444-3049</a></p>
<p className="flex items-start gap-3"><iconify-icon className="shrink-0 mt-1 text-cyan-600" icon="solar:clock-circle-linear" style={{}}></iconify-icon>
<span className="text-xs leading-relaxed">
                                Mon: 12pm - 7pm
                                Tue: 9am - 7pm
                                Wed/Fri: 9am - 5pm
                                Thu/Sat: 9am/8am - 2pm
                            </span>
</p>
</div>
<a className="mt-6 block w-full py-3 border border-neutral-200 text-center rounded-lg text-xs font-semibold hover:bg-neutral-900 hover:text-white transition-colors" href="mailto:info@smilesbybergendental.com">Email Office</a>
</div>

<div className="p-8 border border-neutral-100 rounded-2xl bg-neutral-50 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 reveal-on-scroll delay-100">
<div className="h-48 mb-6 overflow-hidden rounded-lg bg-neutral-200">
<img alt="Emerson Office" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/8fd6f5e9-0a3a-4c1d-88f9-ecbe1544e8c4/IMG_8531.jpg"/>
</div>
<h3 className="text-xl font-serif text-neutral-900 mb-4">Emerson</h3>
<div className="space-y-3 text-sm text-neutral-600">
<p className="flex items-start gap-3"><iconify-icon className="shrink-0 mt-1 text-cyan-600" icon="solar:map-point-linear" style={{}}></iconify-icon> 310 Main St, <br/>Emerson, NJ 07630</p>
<p className="flex items-center gap-3"><iconify-icon className="shrink-0 text-cyan-600" icon="solar:phone-calling-linear" style={{}}></iconify-icon> <a className="hover:underline" href="tel:+12012613364">(201) 261-3364</a></p>
<p className="flex items-start gap-3"><iconify-icon className="shrink-0 mt-1 text-cyan-600" icon="solar:clock-circle-linear" style={{}}></iconify-icon>
<span className="text-xs leading-relaxed">
                                Mon/Tue: 11am - 7pm
                                Wed: 9am - 5pm
                                Thu: 9am - 2pm
                                Sat: 8am - 2pm
                            </span>
</p>
</div>
<a className="mt-6 block w-full py-3 border border-neutral-200 text-center rounded-lg text-xs font-semibold hover:bg-neutral-900 hover:text-white transition-colors" href="mailto:info@sbbdemerson.com">Email Office</a>
</div>

<div className="p-8 border border-neutral-100 rounded-2xl bg-neutral-50 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 reveal-on-scroll delay-200">
<div className="h-48 mb-6 overflow-hidden rounded-lg bg-neutral-200">
<img alt="Dumont Office" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/4b97aa08-13b3-4228-aca3-a0c66c4006f0/Dumont.jpg"/>
</div>
<h3 className="text-xl font-serif text-neutral-900 mb-4">Dumont</h3>
<div className="space-y-3 text-sm text-neutral-600">
<p className="flex items-start gap-3"><iconify-icon className="shrink-0 mt-1 text-cyan-600" icon="solar:map-point-linear" style={{}}></iconify-icon> 166 Washington Ave, <br/>Dumont, NJ 07628</p>
<p className="flex items-center gap-3"><iconify-icon className="shrink-0 text-cyan-600" icon="solar:phone-calling-linear" style={{}}></iconify-icon> <a className="hover:underline" href="tel:+12013842112">(201) 384-2112</a></p>
<p className="flex items-start gap-3"><iconify-icon className="shrink-0 mt-1 text-cyan-600" icon="solar:clock-circle-linear" style={{}}></iconify-icon>
<span className="text-xs leading-relaxed">
                                Mon: 9am - 5pm
                                Tue: 11am - 7pm
                                Wed: 10am - 7pm
                                Thu/Sat: 9am/8am - 2pm
                            </span>
</p>
</div>
<a className="mt-6 block w-full py-3 border border-neutral-200 text-center rounded-lg text-xs font-semibold hover:bg-neutral-900 hover:text-white transition-colors" href="mailto:info@sbbddumont.com">Email Office</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 text-white" id="booking" style={{}}>
<div className="max-w-5xl mx-auto bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row">

<div className="md:w-1/3 bg-cyan-950 p-10 text-white flex flex-col justify-between relative overflow-hidden" style={{}}>
<div className="absolute inset-0 bg-cyan-600/20" style={{}}></div>
<div className="relative z-10">
<h3 className="text-2xl font-serif mb-4">Book Your Visit</h3>
<p className="text-xs text-cyan-100 mb-8 leading-relaxed" style={{}}>
                        Select your preferred location and time. Our team will confirm your appointment shortly.
                    </p>
<ul className="space-y-4 text-xs text-white/80">
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold" style={{}}></iconify-icon>
                            Easy Scheduling
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-bold" style={{}}></iconify-icon>
                            Insurance Accepted
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:clock-circle-bold" style={{}}></iconify-icon>
                            New Patients Welcome
                        </li>
</ul>
</div>
</div>

<div className="md:w-2/3 p-10 bg-white text-neutral-900">
<form className="" onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly to confirm.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all" placeholder="Jane" required="" style={{}} type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all" placeholder="Doe" required="" style={{}} type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all" placeholder="(201) 555-0123" required="" style={{}} type="tel"/>
</div>
<div className="">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all" placeholder="jane@example.com" required="" style={{}} type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Preferred Location</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="location" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-neutral-200 text-xs font-medium text-center peer-checked:bg-cyan-600 peer-checked:text-white peer-checked:border-cyan-600 transition-all" style={{}}>Midland Park</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="location" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-neutral-200 text-xs font-medium text-center peer-checked:bg-cyan-600 peer-checked:text-white peer-checked:border-cyan-600 transition-all" style={{}}>Emerson</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="location" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-neutral-200 text-xs font-medium text-center peer-checked:bg-cyan-600 peer-checked:text-white peer-checked:border-cyan-600 transition-all" style={{}}>Dumont</div>
</label>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Reason for Visit</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all h-24 resize-none" placeholder="E.g., Cleaning, Tooth Pain, Invisalign..." style={{}}></textarea>
</div>
<button className="w-full py-4 bg-neutral-900 text-white rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-transform active:scale-[0.99] flex items-center justify-center gap-2" type="submit">
                        Submit Request <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-neutral-400 mt-4 text-center">Your request will be sent securely. We will contact you to confirm the exact time.</p>
</form>
</div>
</div>
</section>

<footer className="bg-white text-neutral-900 pt-20 pb-10 border-t border-neutral-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="h-8 mb-6 opacity-80">
<img alt="Smiles by Bergen Dental" className="filter contrast-125 h-full object-contain my-8 px-0 grayscale-0" src="https://images.squarespace-cdn.com/content/v1/5a39ae8df14aa1d16a12839a/1518638984816-J1264GLZG709NNI5T2YY/SBBD+final+logo-Horizontal.png?format=300w"/>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-cyan-500 mb-6">Navigation</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-medium">
<li className=""><a className="hover:text-cyan-600 transition-colors" href="#" style={{}}>Home</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#about" style={{}}>About</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#services" style={{}}>Services</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-cyan-500 mb-6">Locations</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-medium">
<li className=""><a className="hover:text-cyan-600 transition-colors" href="#midland-park" style={{}}>Midland Park Office</a></li>
<li className=""><a className="hover:text-cyan-600 transition-colors" href="#emerson" style={{}}>Emerson Office</a></li>
<li className=""><a className="hover:text-cyan-600 transition-colors" href="#dumont" style={{}}>Dumont Office</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-cyan-500 mb-6">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-medium">
<li className="flex gap-3">
<a className="hover:text-cyan-600 transition-colors" href="tel:+12013842112" style={{}}>Call Dumont: (201) 384-2112</a>
</li>
<li className="flex gap-3">
<a className="hover:text-cyan-600 transition-colors" href="tel:+12014443049" style={{}}>Call Midland Park: (201) 444-3049</a>
</li>
<li className="flex gap-3">
<a className="hover:text-cyan-600 transition-colors" href="tel:+12012613364" style={{}}>Call Emerson: (201) 261-3364</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 gap-4">
<p className="">© 2026 Smiles by Bergen Dental. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
