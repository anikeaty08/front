import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Navbar entrance
        gsap.from("nav", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // Hero Content Stagger
        gsap.from(".hero-anim", {
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.5
        });

        // Stat items
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: ".stat-item",
                start: "top 85%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Services Cards Stagger
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: "#services",
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Image reveal effect for Lookbook
        gsap.utils.toArray('.group').forEach(group => {
            gsap.from(group, {
                scrollTrigger: {
                    trigger: group,
                    start: "top 90%",
                },
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg z-50 mix-blend-difference" href="#">U R NEX</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="hover:text-white transition-colors duration-300" href="#styles">Lookbook</a>
</div>
<button className="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200">
<span className="relative z-10 flex items-center gap-2">
                    Book Seat
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
<div className="hero-anim inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Now accepting walk-ins for the weekend
            </div>
<h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[0.95]">
                Refine Your <br/>
<span className="text-gradient">Signature Look.</span>
</h1>
<p className="hero-anim text-base md:text-lg text-zinc-500 max-w-xl mx-auto font-light leading-relaxed">
                Experience precision grooming in a space designed for modern aesthetics. 
                Where classic techniques meet contemporary style. U R Nex is waiting.
            </p>
<div className="hero-anim flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-zinc-950 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-3 border border-zinc-800 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-900 transition-colors hover:border-zinc-700">
                    View Prices
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-zinc-600">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-zinc-600 to-transparent"></div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="stat-item text-center md:text-left space-y-1">
<h3 className="text-3xl font-medium text-white tracking-tight">4.9</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Average Rating</p>
</div>
<div className="stat-item text-center md:text-left space-y-1">
<h3 className="text-3xl font-medium text-white tracking-tight">12k+</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Cuts Delivered</p>
</div>
<div className="stat-item text-center md:text-left space-y-1">
<h3 className="text-3xl font-medium text-white tracking-tight">04</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Master Barbers</p>
</div>
<div className="stat-item text-center md:text-left space-y-1">
<h3 className="text-3xl font-medium text-white tracking-tight">100%</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Satisfaction</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Curated Services</h2>
<p className="text-sm text-zinc-500 max-w-sm">Tailored experiences for the modern gentleman. We don't just cut hair; we sculpt confidence.</p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">View full menu</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="service-card group relative p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">The Precision Cut</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Consultation, wash, precision shear/clipper work, style, and hot towel finish.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-xs text-zinc-400">45 Minutes</span>
<span className="text-sm font-medium text-white">$45.00</span>
</div>
</div>

<div className="service-card group relative p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:beard-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Beard Sculpting</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Detailed shaping, razor lining, moisturizing treatment, and beard oil application.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-xs text-zinc-400">30 Minutes</span>
<span className="text-sm font-medium text-white">$30.00</span>
</div>
</div>

<div className="service-card group relative p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">The "Nex" Level</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Full service: Haircut, beard trim, black mask facial, ear/nose wax, and massage.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-xs text-zinc-400">90 Minutes</span>
<span className="text-sm font-medium text-white">$95.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2 space-y-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Effortless Scheduling</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Select your preferred barber and time slot. No accounts needed. Just refined service at your fingertips.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                        Instant confirmation
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                        Syncs with Calendar
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                        Zero cancellation fees <span className="text-zinc-600 text-xs ml-1">(24h notice)</span>
</li>
</ul>
</div>

<div className="w-full md:w-1/2">
<div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-white">Select Barber</span>
<span className="text-xs text-zinc-500">Step 1 of 3</span>
</div>
<div className="space-y-3">

<label className="block cursor-pointer group">
<input checked="" className="custom-radio hidden" name="barber" type="radio"/>
<div className="flex items-center p-3 rounded-lg border border-white/10 bg-zinc-900/30 hover:border-zinc-600 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 mr-4 overflow-hidden">
<img alt="Barber" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">James "Fade" Doe</div>
<div className="text-xs text-zinc-500">Master Barber • Next available: 2:00 PM</div>
</div>
<div className="radio-indicator w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center transition-all"></div>
</div>
</label>

<label className="block cursor-pointer group">
<input className="custom-radio hidden" name="barber" type="radio"/>
<div className="flex items-center p-3 rounded-lg border border-white/10 bg-zinc-900/30 hover:border-zinc-600 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 mr-4 overflow-hidden">
<img alt="Barber" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Alex Rivera</div>
<div className="text-xs text-zinc-500">Stylist • Next available: 3:30 PM</div>
</div>
<div className="radio-indicator w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center transition-all"></div>
</div>
</label>

<label className="block cursor-pointer group">
<input className="custom-radio hidden" name="barber" type="radio"/>
<div className="flex items-center p-3 rounded-lg border border-white/10 bg-zinc-900/30 hover:border-zinc-600 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 mr-4 overflow-hidden">
<img alt="Barber" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Marcus Chen</div>
<div className="text-xs text-zinc-500">Colorist • Next available: Tomorrow</div>
</div>
<div className="radio-indicator w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center transition-all"></div>
</div>
</label>
</div>
<button className="w-full mt-6 bg-white hover:bg-zinc-200 text-zinc-950 font-medium py-3 rounded-lg text-sm transition-colors">
                        Continue to Time
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="styles">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">The Lookbook</h2>
<p className="text-sm text-zinc-500">Real clients. Real cuts. Filter by style to find your next inspiration.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cut" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6">
<span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded text-[10px] text-white uppercase tracking-wider mb-2">Fade</span>
<p className="text-white font-medium">Textured Crop</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cut" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cut" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="col-span-2 relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cut" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6">
<span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded text-[10px] text-white uppercase tracking-wider mb-2">Beard</span>
<p className="text-white font-medium">Line Up &amp; Shape</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-white font-semibold tracking-tighter text-2xl mb-6 block" href="#">U R NEX</a>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        Redefining the neighborhood barbershop experience. 
                        Premium service, modern atmosphere, classic results.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Visit Us</h4>
<address className="text-sm text-zinc-500 not-italic space-y-2">
<p>1240 Market Street</p>
<p>San Francisco, CA 94103</p>
<p className="pt-2 text-white hover:text-zinc-300 transition-colors cursor-pointer">Get Directions</p>
</address>
</div>
<div>
<h4 className="text-white font-medium mb-4">Hours</h4>
<ul className="text-sm text-zinc-500 space-y-2">
<li className="flex justify-between max-w-[140px]"><span>Mon - Fri</span> <span className="text-zinc-300">10am - 8pm</span></li>
<li className="flex justify-between max-w-[140px]"><span>Saturday</span> <span className="text-zinc-300">9am - 6pm</span></li>
<li className="flex justify-between max-w-[140px]"><span>Sunday</span> <span className="text-zinc-300">Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2023 U R Nex Barbershop. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
