import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Loader
        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-bar", { width: "100%", duration: 1, ease: "power2.inOut" })
                .to("#loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.2 });

        // Scroll Reveals
        const triggers = document.querySelectorAll('.reveal-trigger');
        triggers.forEach((el) => {
            gsap.fromTo(el, 
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
                }
            );
        });

        // Custom Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
            });
            
            // Hover effects
            const interactables = document.querySelectorAll('a, button, input, textarea, select');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => gsap.to(cursorDot, { scale: 3, opacity: 0.5 }));
                el.addEventListener('mouseleave', () => gsap.to(cursorDot, { scale: 1, opacity: 1 }));
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="flex gap-3 mb-6 items-center">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div className="font-bold text-3xl tracking-tight text-slate-900">TLG Infotech</div>
</div>
<div className="w-48 h-[2px] rounded-full overflow-hidden bg-slate-100">
<div className="loader-bar" id="loader-bar"></div>
</div>
</div>

<div className="cursor-dot hidden md:block"></div>

<nav className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 py-4 pointer-events-none">
<div className="pointer-events-auto glass-panel flex shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.01] duration-500 ease-out rounded-full p-2 items-center mt-2">
<a className="flex items-center gap-2 px-4 pr-8" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:infinity-bold" width="18"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight text-slate-900">TLG</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-blue-600 hover:bg-slate-50 transition-all duration-300 text-[13px] font-medium text-slate-600 rounded-full py-2 px-5" href="#services">Services</a>
<a className="hover:text-blue-600 hover:bg-slate-50 transition-all duration-300 text-[13px] font-medium text-slate-600 rounded-full py-2 px-5" href="#industries">Industries</a>
<a className="hover:text-blue-600 hover:bg-slate-50 transition-all duration-300 text-[13px] font-medium text-slate-600 rounded-full py-2 px-5" href="#about">About Us</a>
<a className="hover:text-blue-600 hover:bg-slate-50 transition-all duration-300 text-[13px] font-medium text-slate-600 rounded-full py-2 px-5" href="#projects">Projects</a>
</div>
<div className="flex items-center gap-2 pl-4">
<a className="group bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300" href="https://wa.me/1234567890">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<a className="hidden sm:flex group bg-slate-900 hover:bg-blue-600 text-white transition-all duration-300 items-center gap-2 text-[12px] font-semibold tracking-wide rounded-full py-2.5 px-6" href="#contact">
<span>Contact Us</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 h-full flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 pt-10 lg:pt-0 mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-8 reveal-trigger">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Premium IT Rentals
                </div>
<h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-slate-900 mb-8 text-balance reveal-trigger">
                    Reliable <span className="text-blue-600">Networking</span> &amp; IT Infrastructure Rentals
                </h1>
<p className="text-lg text-slate-500 leading-relaxed font-normal max-w-lg mb-10 reveal-trigger">
                    Empowering businesses with scalable, high-performance IT equipment on demand. Servers, firewalls, routers, and more—delivered and deployed.
                </p>
<div className="flex flex-wrap gap-4 items-center reveal-trigger">
<a className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full py-4 px-8 flex items-center gap-3" href="tel:+919876543210">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
<span className="font-bold text-sm tracking-wide">Call Now</span>
</a>
<a className="group bg-white border border-slate-200 hover:border-green-500 hover:text-green-600 text-slate-700 rounded-full py-4 px-8 flex items-center gap-3 transition-all duration-300" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span className="font-bold text-sm tracking-wide">WhatsApp</span>
</a>
</div>
<div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500 reveal-trigger">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:verified-check-bold"></iconify-icon>
<span>Original Equipment</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:clock-circle-bold"></iconify-icon>
<span>24/7 Support</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center reveal-trigger">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

<div className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-2 shadow-2xl shadow-blue-900/10 border border-slate-100">
<img alt="Server Room" className="w-full h-auto rounded-xl object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[200px]">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
<iconify-icon icon="solar:shield-check-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-semibold uppercase">Uptime</p>
<p className="text-xl font-bold text-slate-900">99.9%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="services">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-trigger">
<div className="max-w-2xl">
<span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Our Solutions</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Enterprise Rental Services</h2>
<p className="mt-4 text-lg text-slate-500 max-w-xl">Fully managed networking and IT infrastructure available for short-term events or long-term corporate requirements.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-blue-600 border-b border-blue-200 pb-1 hover:border-blue-600 transition-colors mt-6 md:mt-0" href="#contact">
                    Get a Custom Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-trigger">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wi-fi-router-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Networking Equipment</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">High-performance routers, switches, and access points from top brands like Cisco, Juniper, and Aruba.</p>
<ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> L2/L3 Switches
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Enterprise Routers
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 hover:gap-2 transition-all" href="#contact">Enquire Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-trigger">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:server-square-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Server Rental</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Scalable rack, tower, and blade servers configured to your specifications for data centers or office setups.</p>
<ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Dell PowerEdge / HP ProLiant
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Custom RAM/Storage
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:gap-2 transition-all" href="#contact">Enquire Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-trigger">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Firewall Security</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Next-generation firewalls to protect your network infrastructure. Fortinet, Palo Alto, and Sophos solutions.</p>
<ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Threat Protection
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> VPN Configuration
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-red-600 hover:gap-2 transition-all" href="#contact">Enquire Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-trigger">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:camera-square-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">CCTV &amp; Surveillance</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Complete surveillance setups including IP cameras, NVRs, and storage for event security or site monitoring.</p>
<a className="inline-flex items-center text-sm font-semibold text-orange-600 hover:gap-2 transition-all mt-auto" href="#contact">Enquire Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-trigger">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
<iconify-icon icon="solar:box-minimalistic-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Racks &amp; Accessories</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Server racks (24U, 42U), PDUs, patch panels, and structured cabling accessories for organized setups.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-600 hover:gap-2 transition-all mt-auto" href="#contact">Enquire Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 reveal-trigger">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Workstations &amp; Laptops</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">High-end workstations and business laptops for design projects, temporary staff, or training sessions.</p>
<a className="inline-flex items-center text-sm font-semibold text-teal-600 hover:gap-2 transition-all mt-auto" href="#contact">Enquire Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-trigger">
<span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Why Choose TLG</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Your Partner in IT Growth</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        TLG Infotech Pvt Ltd is a premier provider of IT infrastructure rental services. Our mission is to eliminate the capital expenditure of technology procurement, allowing you to focus on your core business.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Rapid Deployment</h4>
<p className="text-sm text-slate-500 mt-1">Equipment delivered and installed within 24-48 hours.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
<iconify-icon icon="solar:wallet-money-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Cost Effective</h4>
<p className="text-sm text-slate-500 mt-1">Save on CAPEX with our flexible rental tenure plans.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
<iconify-icon icon="solar:headphones-round-sound-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Expert Support</h4>
<p className="text-sm text-slate-500 mt-1">Certified engineers available for configuration and maintenance.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 reveal-trigger">
<img alt="Team" className="rounded-2xl w-full h-64 object-cover translate-y-8" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Meeting" className="rounded-2xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] text-white relative overflow-hidden" id="industries">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Industries We Serve</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
<div className="group flex flex-col items-center gap-4 reveal-trigger">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
<iconify-icon icon="solar:buildings-bold" width="32"></iconify-icon>
</div>
<span className="font-medium text-slate-300 group-hover:text-white">Corporate</span>
</div>
<div className="group flex flex-col items-center gap-4 reveal-trigger">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
<iconify-icon icon="solar:laptop-bold" width="32"></iconify-icon>
</div>
<span className="font-medium text-slate-300 group-hover:text-white">IT &amp; Software</span>
</div>
<div className="group flex flex-col items-center gap-4 reveal-trigger">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
<iconify-icon icon="solar:diploma-bold" width="32"></iconify-icon>
</div>
<span className="font-medium text-slate-300 group-hover:text-white">Education</span>
</div>
<div className="group flex flex-col items-center gap-4 reveal-trigger">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
<iconify-icon icon="solar:heart-pulse-bold" width="32"></iconify-icon>
</div>
<span className="font-medium text-slate-300 group-hover:text-white">Healthcare</span>
</div>
<div className="group flex flex-col items-center gap-4 reveal-trigger">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
<iconify-icon icon="solar:confetti-bold" width="32"></iconify-icon>
</div>
<span className="font-medium text-slate-300 group-hover:text-white">Events</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200" id="projects">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-16 text-center">Recent Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all reveal-trigger">
<div className="h-48 bg-slate-200 relative">
<img alt="Corporate Event" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Event</div>
</div>
<div className="p-6">
<h3 className="font-bold text-xl mb-2 text-slate-900">Tech Summit 2024</h3>
<p className="text-sm text-slate-500 mb-4">Deployed high-density Wi-Fi and 50+ laptops for a 3-day international technology conference.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Cisco</span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Dell</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all reveal-trigger">
<div className="h-48 bg-slate-200 relative">
<img alt="Office Setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Corporate</div>
</div>
<div className="p-6">
<h3 className="font-bold text-xl mb-2 text-slate-900">Startup HQ Expansion</h3>
<p className="text-sm text-slate-500 mb-4">Long-term rental of 100 workstations and firewall security for a rapidly growing fintech company.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Fortinet</span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">HP</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all reveal-trigger">
<div className="h-48 bg-slate-200 relative">
<img alt="Exam Center" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Education</div>
</div>
<div className="p-6">
<h3 className="font-bold text-xl mb-2 text-slate-900">Online Examination Center</h3>
<p className="text-sm text-slate-500 mb-4">Setup of 200 desktops with local servers and surveillance for government entrance exams.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Lenovo</span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">Hikvision</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-trigger">
<span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Get In Touch</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">Ready to upgrade your infrastructure?</h2>
<div className="space-y-8">
<a className="flex gap-5 group items-start" href="tel:+919876543210">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900">Call Us</h4>
<p className="text-slate-500">+91 98765 43210</p>
</div>
</a>
<a className="flex gap-5 group items-start" href="mailto:info@tlginfotech.com">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900">Email</h4>
<p className="text-slate-500">info@tlginfotech.com</p>
</div>
</a>
<div className="flex gap-5 group items-start">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900">Location</h4>
<p className="text-slate-500">123 Tech Park, IT Corridor,<br/>Bangalore, Karnataka, 560100</p>
</div>
</div>

<a className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all mt-4" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-bold" width="20"></iconify-icon> Chat on WhatsApp
                        </a>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 reveal-trigger">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm" placeholder="+91" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Service Interest</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm bg-white">
<option>Network Equipment</option>
<option>Server Rental</option>
<option>Firewall/Security</option>
<option>CCTV</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                            Send Enquiry <iconify-icon icon="solar:plain-bold"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
<iconify-icon className="text-blue-500" icon="solar:server-square-bold"></iconify-icon> TLG.
                    </div>
<p className="text-sm leading-relaxed mb-4">Your trusted partner for reliable IT infrastructure rentals and networking solutions.</p>
</div>
<div>
<h4 className="text-white font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-blue-500 transition-colors" href="#">Server Rental</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Networking</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Firewall Security</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">CCTV</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-blue-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#projects">Projects</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:facebook-bold"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:linkedin-bold"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:instagram-bold"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium uppercase tracking-wider">
<p>© 2024 TLG Infotech Private Limited. All Rights Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
