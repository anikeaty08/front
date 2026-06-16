import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Interaction
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');

        function updateNav() {
            if (window.scrollY > 50) {
                navBg.classList.add('shadow-sm');
            } else {
                navBg.classList.remove('shadow-sm');
            }
        }
        window.addEventListener('scroll', updateNav);

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

        // Intersection Observer for Scroll Reveal
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
      

<nav className="fixed z-50 transition-all duration-300 group/nav w-full top-0" id="navbar">
<div className="transition-all duration-300 bg-white/90 z-0 border-neutral-100 absolute top-0 right-0 bottom-0 left-0" id="nav-bg"></div>

<div className="text-[10px] uppercase flex md:justify-center z-50 text-white tracking-widest bg-red-700 pt-2 pr-6 pb-2 pl-6 relative items-center justify-between">
<span className="hidden md:inline">Accepting New Patients in Summit, NJ</span>
<div className="flex items-center gap-4">
<a className="transition-colors flex items-center gap-1 hover:text-red-400" href="tel:9082735656">
<svg className="lucide lucide-phone" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
        (908) 273-5656
      </a>
<span className="hidden md:inline text-neutral-600">|</span>
<span className="hidden md:inline text-neutral-400">Se habla español</span>
</div>
</div>
<div className="flex z-0 h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex flex-col z-50 group relative" href="#">
<span className="transition-colors group-hover:text-red-700 text-xl font-medium text-neutral-900 tracking-tight font-serif">Patient-First Dentistry</span>
<span className="text-[10px] uppercase text-neutral-500 tracking-widest">of Summit</span>
</a>

<div className="hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 transition-colors duration-300" id="nav-container">
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-colors text-neutral-600 hover:bg-neutral-50 hover:text-red-700" href="#home">Home</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-colors text-neutral-600 hover:bg-neutral-50 hover:text-red-700" href="#services">Services</a>
<a className="transition-colors hover:bg-neutral-50 text-xs font-medium text-neutral-600 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 hover:text-red-700" href="#about">Dr.
      Riley</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-colors text-neutral-600 hover:bg-neutral-50 hover:text-red-700" href="#locations">Location</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-colors text-neutral-600 hover:bg-neutral-50 hover:text-red-700" href="#new-patients">New
      Patients</a>
</div>

<div className="hidden lg:flex items-center gap-4 z-50">

<div className="group relative">
<button className="flex items-center gap-2 text-xs font-medium text-neutral-600 hover:text-neutral-900">
<svg className="lucide lucide-map-pin text-[#00000c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Summit, NJ
                        <svg className="lucide lucide-chevron-down opacity-50" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute top-full right-0 mt-2 w-48 border rounded-xl shadow-xl p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 bg-white border-neutral-100">
<div className="px-3 py-2 text-[10px] font-bold uppercase text-neutral-400">Serving</div>
<a className="block px-3 py-1.5 text-xs rounded text-neutral-600 hover:bg-neutral-50" href="#locations">Summit</a>
<a className="block px-3 py-1.5 text-xs rounded text-neutral-600 hover:bg-neutral-50" href="#locations">Short
          Hills</a>
<a className="block px-3 py-1.5 text-xs rounded text-neutral-600 hover:bg-neutral-50" href="#locations">Millburn</a>
</div>
</div>
<a className="transition-colors hover:bg-neutral-800 shadow-neutral-900/10 text-xs font-semibold text-white tracking-wide bg-red-700 rounded-full px-5 py-2.5 shadow-lg" href="#booking">
      Book Your Visit
    </a>
</div>

<button className="lg:hidden p-2 z-50 relative text-neutral-900" id="mobile-toggle">
<svg className="lucide lucide-menu w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line className="" x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>

<div className="fixed z-40 flex flex-col pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto bg-white opacity-0 pt-32 pr-6 pl-6 top-0 right-0 bottom-0 left-0" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="text-2xl text-neutral-900 font-serif" href="#home" onclick="toggleMobileMenu()">Home</a>
<a className="text-2xl text-neutral-900 font-serif" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-2xl text-neutral-900 font-serif" href="#about" onclick="toggleMobileMenu()">Dr. Riley</a>
<a className="text-2xl font-serif text-neutral-900" href="#new-patients" onclick="toggleMobileMenu()">New Patients</a>
<a className="font-semibold text-white bg-red-600 rounded-full mt-4 pt-4 pb-4" href="#booking" onclick="toggleMobileMenu()">Book Appointment</a>
</div>
<button className="pt-2 pr-2 pb-2 pl-2 absolute top-8 right-6" onclick="toggleMobileMenu()">
<svg className="lucide lucide-x w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 6 6 18"></path><path className="" d="m6 6 12 12"></path></svg>
</button>
</div>

<header className="relative w-full min-h-[85vh] flex items-center overflow-hidden pt-20 bg-neutral-900" id="home">

<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Modern Dental Office Summit NJ" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-r to-transparent from-neutral-950/90 via-neutral-950/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex glass-panel animate-fade-in-up border-red-700 rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 animate-pulse bg-red-700 rounded-full"></span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-200">Serving Summit &amp; Chatham</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] animate-fade-in-up delay-100 text-4xl text-white tracking-tight font-serif mb-6">
                    Exceptional care 
                    <span className="italic font-light text-white/70">for your smile.</span>
</h1>
<p className="leading-relaxed animate-fade-in-up delay-200 text-lg font-light text-neutral-300 max-w-lg mb-8">
                    Experience advanced, ultramodern dentistry with Dr. Raynard O. Riley. We prioritize your comfort and long-term health in a stress-free environment.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
<a className="uppercase transition-colors text-xs font-semibold text-neutral-50 tracking-wide text-center bg-red-700 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg hover:bg-red-50" href="#booking">
                        Book Your Visit
                    </a>
<a className="glass-panel uppercase transition-colors flex items-center justify-center gap-2 group hover:bg-white/10 text-xs font-semibold text-white tracking-wide border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8" href="tel:9082735656">
<svg className="lucide lucide-phone group-hover:scale-110 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        (908) 273-5656
                    </a>
</div>
</div>
</div>
</header>

<div className="border-b bg-neutral-50 border-neutral-100">
<div className="max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-3">
<div className="text-[#6c3acb] bg-red-700/50 rounded-full px-2 py-2">
<svg className="lucide lucide-star w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(185, 28, 28)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="text-left">
<p className="text-xs font-bold text-neutral-900">5-Star Care</p>
<p className="text-[10px] text-neutral-500">Trusted by Locals</p>
</div>
</div>
<div className="flex items-center justify-center md:justify-start gap-3">
<div className="text-[#6c3acb] bg-red-700/50 rounded-full px-2 py-2">
<svg className="lucide lucide-map text-red-700 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon></svg>
</div>
<div className="text-left">
<p className="text-xs font-bold text-neutral-900">Summit, NJ</p>
<p className="text-[10px] text-neutral-500">Serving 5+ Towns</p>
</div>
</div>
<div className="flex items-center justify-center md:justify-start gap-3">
<div className="text-[#6c3acb] bg-red-700/50 rounded-full px-2 py-2">
<svg className="lucide lucide-shield-check text-red-700 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-left">
<p className="text-xs font-bold text-neutral-900">Insurance Friendly</p>
<p className="text-[10px] text-neutral-500">Maximizing Benefits</p>
</div>
</div>
<div className="flex items-center justify-center md:justify-start gap-3">
<div className="text-[#6c3acb] bg-red-700/50 rounded-full px-2 py-2">
<svg className="lucide lucide-scan-face text-red-700 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path className="" d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path className="" d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<div className="text-left">
<p className="text-xs font-bold text-neutral-900">Modern Tech</p>
<p className="text-[10px] text-neutral-500">Digital Scans &amp; Imaging</p>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row reveal-on-scroll mb-16 items-end justify-between">
<div className="max-w-xl">
<span className="text-[10px] uppercase block font-bold text-[#00000c] tracking-[0.2em] mb-3">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-neutral-900">Ultramodern Dentistry</h2>
<p className="text-neutral-500 font-light leading-relaxed">
                        From routine preventative care to complex cosmetic transformations, Dr. Riley provides a full spectrum of dental services under one roof.
                    </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide border-b pb-1 transition-colors border-neutral-200 hover:border-neutral-900 hover:text-red-600" href="#booking">
                    View Full Menu <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group hover:shadow-xl transition-all duration-300 reveal-on-scroll cursor-pointer bg-neutral-50 border-neutral-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 hover:border-red-200 hover:shadow-red-900/5">
<div className="flex group-hover:scale-110 transition-transform text-[#00000c] bg-white w-12 h-12 rounded-xl mb-6 shadow-sm items-center justify-center">
<iconify-icon className="" icon="solar:screws-linear" width="28"></iconify-icon>
<iconify-icon className="" height="28" icon="solar:verified-check-outline" style={{color: 'rgb(0, 0, 12)'}} width="28"></iconify-icon></div>
<h3 className="text-xl font-serif mb-2 text-neutral-900">Implant Dentistry</h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-6">Permanent replacement for missing teeth including bone grafts and full restoration.</p>
<span className="flex items-center gap-2 text-xs font-semibold text-red-700">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 reveal-on-scroll delay-100 cursor-pointer bg-neutral-50 border-neutral-100 hover:border-red-200 hover:shadow-red-900/5">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#00000c] bg-white">
<svg className="" data-icon-set="solar" data-solar="stars-minimalistic-linear" height="28" style={{color: 'rgb(0, 0, 12)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" strokeWidth="1.5"></path><path d="M4.99 2s.288 1.458.92 2.085C6.54 4.712 8 4.99 8 4.99s-1.458.288-2.085.92C5.288 6.54 5.01 8 5.01 8s-.288-1.458-.92-2.085C3.46 5.288 2 5.01 2 5.01s1.458-.288 2.085-.92C4.712 3.46 4.99 2 4.99 2Z" strokeLinejoin="round"></path><path d="M18 5h2m-1 1V4" strokeLinecap="round" strokeWidth="1.5"></path></g></svg>
</div>
<h3 className="text-xl text-neutral-900 font-serif mb-2">Cosmetic Dentistry</h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-6">Veneers, bonding, and teeth whitening to help you achieve the smile you've always wanted.</p>
<span className="flex items-center gap-2 text-xs font-semibold text-red-700">View Gallery <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="group hover:shadow-xl transition-all duration-300 reveal-on-scroll delay-200 cursor-pointer bg-neutral-50 border-neutral-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 hover:border-red-200 hover:shadow-red-900/5">
<div className="flex group-hover:scale-110 transition-transform text-[#00000c] bg-white w-12 h-12 rounded-xl mb-6 shadow-sm items-center justify-center">
<iconify-icon className="" height="28" icon="solar:shield-check-linear" style={{color: 'rgb(0, 0, 12)'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-2 text-neutral-900">Restorative Care</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Crowns, bridges, and dentures (including porcelain options) to restore function.</p>
<span className="flex items-center gap-2 text-xs font-semibold text-red-700">Restore Function <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 reveal-on-scroll cursor-pointer bg-neutral-50 border-neutral-100 hover:border-red-200 hover:shadow-red-900/5">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#00000c] bg-white">
<iconify-icon className="" height="28" icon="solar:smile-circle-linear" style={{color: 'rgb(0, 0, 12)'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-2 text-neutral-900">Invisalign®</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Clear aligner therapy for a straighter smile without metal braces.</p>
<span className="flex items-center gap-2 text-xs font-semibold text-red-700">See Clear Results <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 reveal-on-scroll delay-100 cursor-pointer bg-neutral-50 border-neutral-100 hover:border-red-200 hover:shadow-red-900/5">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#00000c] bg-white">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-2 text-neutral-900">Preventative Care</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Routine cleanings, checkups, and gum disease treatment to maintain oral health.</p>
<span className="flex items-center gap-2 text-xs font-semibold text-red-700">Schedule Checkup <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="group hover:shadow-xl transition-all duration-300 reveal-on-scroll delay-200 cursor-pointer bg-neutral-50 border-neutral-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 hover:border-red-200 hover:shadow-red-900/5">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#00000c] bg-white">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-2 text-neutral-900">Surgery &amp; Emergency</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Root canals, extractions, and urgent care for pain relief when you need it most.</p>
<span className="flex items-center gap-2 text-xs font-semibold text-red-700">Get Relief <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-red-100/80 pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="bg-red-700/30 w-1/2 h-full absolute top-0 right-0 skew-x-12"></div>
<div className="grid grid-cols-1 md:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto relative gap-x-16 gap-y-16 items-center">
<div className="order-2 md:order-1 reveal-on-scroll">
<div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10">

<img alt="Dr. Raynard O. Riley" className="w-full h-full object-cover" src="data:image/jpeg;base64,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"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t to-transparent from-black/90">
<p className="text-xl font-serif">Dr. Raynard O. Riley</p>
<p className="uppercase text-xs text-red-700 tracking-widest mt-1">Dentist</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 reveal-on-scroll delay-100">
<span className="text-[10px] uppercase block font-bold text-neutral-950 tracking-[0.2em] mb-4">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6">Patient-First <span className="italic text-neutral-950 font-serif">by design.</span></h2>
<p className="leading-relaxed font-light text-neutral-600 mb-6">
                    Dr. Riley has spent years perfecting the art of dentistry, earning the trust of thousands of patients in Summit and surrounding areas. We believe that your smile is the cornerstone of your expression.
                </p>
<p className="leading-relaxed font-light text-neutral-600 mb-8">
                    "We go the extra mile to help you achieve the beautiful, healthy smile you’ve always wanted – and to give you our personal best no matter what."
                </p>
<div className="grid grid-cols-2 gap-8 border-t pt-8 border-white/10">
<div className="">
<span className="block text-3xl text-zinc-600 font-serif mb-1">15+</span>
<span className="uppercase text-xs text-neutral-950 tracking-wide">Years Serving Summit</span>
</div>
<div className="">
<span className="block text-3xl text-zinc-600 font-serif mb-1">4.9</span>
<span className="uppercase text-xs text-neutral-950 tracking-wide">Average Rating</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-100 border-b pt-24 pr-6 pb-24 pl-6" id="new-patients">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl font-serif mb-4 text-neutral-900">New Patient Information</h2>
<p className="text-neutral-500 font-light">Join our dental family. Here is everything you need to know before your first visit.</p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-xl border bg-neutral-50 border-neutral-100">
<div className="mb-4 text-[#00000c]"><iconify-icon icon="solar:file-text-linear" width="32"></iconify-icon></div>
<h3 className="text-lg font-bold mb-2 text-neutral-900">What to Expect</h3>
<p className="text-sm mb-4 text-neutral-600">A comprehensive exam, digital x-rays, and a consultation with Dr. Riley to discuss your goals.</p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> 60-Minute First Visit</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Full Oral Health Scan</li>
</ul>
</div>

<div className="p-8 rounded-xl border bg-neutral-50 border-neutral-100">
<div className="mb-4 text-[#00000c]"><iconify-icon className="" height="32" icon="solar:card-linear" style={{color: 'rgb(0, 0, 12)'}} width="32"></iconify-icon></div>
<h3 className="text-lg font-bold mb-2 text-neutral-900">Insurance &amp; Payment</h3>
<p className="text-sm mb-4 text-neutral-600">We accept most major insurance plans and help you maximize your benefits.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 border rounded text-[10px] bg-white border-neutral-200">Delta</span>
<span className="px-2 py-1 border rounded text-[10px] bg-white border-neutral-200">Aetna</span>
<span className="px-2 py-1 border rounded text-[10px] bg-white border-neutral-200">MetLife</span>
<span className="px-2 py-1 border rounded text-[10px] bg-white border-neutral-200">Cigna</span>
</div>
</div>

<div className="p-8 rounded-xl border bg-neutral-50 border-neutral-100">
<div className="mb-4 text-[#00000c]"><iconify-icon icon="solar:question-circle-linear" width="32"></iconify-icon></div>
<h3 className="text-lg font-bold mb-2 text-neutral-900">Common Questions</h3>
<div className="space-y-3">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xs text-neutral-800">
<span className="">Do you do root canals?</span>
<span className="transition group-open:rotate-180"><svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
</summary>
<p className="text-neutral-500 mt-2 text-xs group-open:animate-fadeIn">Yes, we offer single-visit root canal therapy.</p>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xs text-neutral-800">
<span>Are you open weekends?</span>
<span className="transition group-open:rotate-180"><svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
</summary>
<p className="text-neutral-500 mt-2 text-xs group-open:animate-fadeIn">We are currently closed on weekends but offer flexible weekday hours.</p>
</details>
</div>
</div>
</div>
</section>

<section className="text-white bg-red-700/90 px-6 py-24">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="opacity-50 mb-6 text-red-400" icon="solar:quote-up-bold" width="48"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-8">
                "Dr Riley's wise counsel resulted in a solution for my dental challenges after a half dozen specialists here and in NYC failed. He is the best. The staff is exceptional. I highly, highly recommend this practice."
            </blockquote>
<div className="flex items-center justify-center gap-2">
<span className="font-bold tracking-wide uppercase text-sm">Real Patient</span>
<span className="mx-2 text-red-400">•</span>
<div className="flex text-red-400">
<iconify-icon className="" height="16" icon="solar:star-bold" style={{color: 'rgb(254, 243, 199)'}} width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" style={{color: 'rgb(254, 243, 199)'}} width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" style={{color: 'rgb(254, 243, 199)'}} width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" style={{color: 'rgb(254, 243, 199)'}} width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" style={{color: 'rgb(254, 243, 199)'}} width="16"></iconify-icon>
</div>
</div>
<a className="inline-block mt-8 text-xs font-semibold border-b pb-1 transition-colors border-red-400/50 hover:text-red-400" href="#">Read More Reviews on Google</a>
</div>
</section>

<section className="py-24 px-6 bg-white" id="locations">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<span className="text-[10px] uppercase block font-bold text-red-700 tracking-[0.2em] mb-3">Our Location</span>
<h2 className="text-4xl font-serif mb-6 text-neutral-900">Conveniently located in <br/>Summit, NJ</h2>
<p className="text-neutral-500 leading-relaxed mb-8">
                        We are proud to serve Summit and the surrounding communities of Chatham, Millburn, New Providence, and Florham Park. Our office is equipped with ultramodern technology for your comfort.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="p-3 rounded-lg h-fit bg-neutral-50"><iconify-icon className="text-neutral-900" icon="solar:map-point-linear" width="24"></iconify-icon></div>
<div className="">
<h4 className="font-bold text-sm text-neutral-900">Visit Us</h4>
<p className="text-sm text-neutral-500 mt-1">52 Deforest Ave,Summit, NJ 07901</p>
<a className="text-xs font-semibold mt-2 inline-block text-[#00000c]" href="https://maps.google.com/?q=52+Deforest+Ave,+Summit,+NJ+07901" target="_blank">Get Directions →</a>
</div>
</div>
<div className="flex gap-4">
<div className="p-3 rounded-lg h-fit bg-neutral-50"><iconify-icon className="text-neutral-900" icon="solar:phone-calling-linear" width="24"></iconify-icon></div>
<div className="">
<h4 className="font-bold text-sm text-neutral-900">Call Us</h4>
<p className="text-sm text-neutral-500 mt-1">Mon - Fri: 9am - 5pm</p>
<a className="inline-block text-xs font-semibold text-red-700 mt-2" href="tel:9082735656">(908) 273-5656</a>
</div>
</div>
</div>
</div>
<div className="h-[400px] rounded-2xl overflow-hidden relative bg-neutral-100">

<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2771569477033!2d-74.36444608459496!3d40.71800097933108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3af3f41295555%3A0x6b0f0b0b0b0b0b0b!2s52%20Deforest%20Ave%2C%20Summit%2C%20NJ%2007901!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6" id="booking">
<div className="max-w-3xl mx-auto rounded-2xl shadow-xl overflow-hidden border bg-white border-neutral-100">
<div className="text-center bg-red-700 pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl text-white font-serif mb-2">Request an Appointment</h3>
<p className="text-xs text-neutral-200">Fill out the form below and our team will contact you to confirm.</p>
</div>
<form className="p-8 md:p-12 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 focus:border-red-600 focus:ring-red-600" placeholder="Jane" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 focus:border-red-600 focus:ring-red-600" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 focus:border-red-600 focus:ring-red-600" placeholder="(908) 555-0123" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 focus:border-red-600 focus:ring-red-600" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Reason for Visit</label>
<select className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 text-neutral-700 focus:border-red-600 focus:ring-red-600">
<option>General Checkup / Cleaning</option>
<option>Tooth Pain / Emergency</option>
<option>Cosmetic Consultation (Veneers/Whitening)</option>
<option>Dental Implants</option>
<option>Invisalign</option>
<option>Other</option>
</select>
</div>
<div className="">
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Preferred Day/Time</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 focus:border-red-600 focus:ring-red-600" placeholder="e.g. Tuesday Mornings" type="text"/>
</div>
<div className="">
<label className="block text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 transition-all text-sm bg-neutral-50 border-neutral-200 focus:border-red-600 focus:ring-red-600" placeholder="Any specific concerns?" rows="3"></textarea>
</div>
<button className="uppercase transition-transform active:scale-[0.99] text-sm font-bold text-white tracking-wide bg-red-700 w-full rounded-lg pt-4 pb-4 shadow-lg hover:bg-red-800" type="submit">
                    Submit Request
                </button>
<p className="text-[10px] text-center mt-4 text-neutral-400">By submitting this form, you agree to receive communications from Patient-First Dentistry.</p>
</form>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-neutral-950 text-white border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-2xl mb-4 block text-white" href="#">Patient-First Dentistry</a>
<p className="text-xs leading-relaxed mb-6 text-neutral-400">
                        Exceptional care for your smile. Serving Summit, Chatham, Millburn, and surrounding areas.
                    </p>
<div className="flex gap-4 text-neutral-400">
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="brandico:linkedin" width="18"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200">Services</h4>
<ul className="space-y-3 text-xs font-light text-neutral-400">
<li><a className="transition-colors hover:text-white" href="#">Implant Dentistry</a></li>
<li><a className="transition-colors hover:text-white" href="#">Cosmetic Dentistry</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200">Contact</h4>
<ul className="space-y-3 text-xs font-light text-neutral-400">
<li className="flex gap-3">
<iconify-icon className="text-[#00000c]" icon="solar:map-point-linear"></iconify-icon>
<a className="transition-colors hover:text-white" href="#">52 Deforest Ave, Summit, NJ 07901</a>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#00000c]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="transition-colors hover:text-white" href="tel:9082735656">(908) 273-5656</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200">Hours</h4>
<ul className="space-y-3 text-xs font-light text-neutral-400">
<li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span></li>
<li className="flex justify-between"><span>Weekend</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4 border-white/10">
<p>© 2026 Patient-First Dentistry of Summit. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
