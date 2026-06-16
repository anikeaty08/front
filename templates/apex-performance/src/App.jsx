import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
red: '#DC2626', // Vibrant Racing Red
dark: '#050505',
panel: '#0F0F0F',
surface: '#171717',
gray: '#262626'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-brand-red flex items-center justify-center transform -skew-x-12">
<span className="font-display font-semibold text-white text-xl transform skew-x-12">AP</span>
</div>
<span className="font-display font-semibold text-2xl text-white tracking-tight group-hover:text-brand-red transition-colors">APEX<span className="text-brand-red">PERFORMANCE</span></span>
</a>

<div className="hidden lg:flex items-center gap-10 text-sm font-normal tracking-wide text-white/80">
<a className="hover:text-brand-red transition-colors" href="#home">Home</a>
<a className="hover:text-brand-red transition-colors" href="#services">Services</a>
<a className="hover:text-brand-red transition-colors" href="#projects">Projects</a>
<a className="hover:text-brand-red transition-colors" href="#about">About</a>
<a className="hover:text-brand-red transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-white bg-brand-red hover:bg-red-700 transition-colors uppercase tracking-widest rounded-sm" href="#contact">
                    Book Service
                </a>
<button className="lg:hidden text-white hover:text-brand-red transition-colors">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Sports Car Garage" className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-brand-red/30 rounded-full bg-brand-red/10 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
<span className="text-xs font-semibold text-brand-red uppercase tracking-widest">Elite Tuning &amp; Diagnostics</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[0.9] mb-8">
                    PRECISION <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">MEETS SPEED</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed font-light">
                    Specialized in high-performance tuning, track preparation, and maintenance for modern sports cars. We don't just fix cars; we optimize them.
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-brand-red hover:bg-red-700 transition-all uppercase tracking-widest rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.3)]" href="#services">
                        Explore Services
                        <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all uppercase tracking-widest backdrop-blur-sm rounded-sm" href="#projects">
                        View Builds
                    </a>
</div>
</div>
</div>
</header>

<section className="pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">OUR EXPERTISE</h2>
<p className="text-neutral-400 max-w-md font-light">Comprehensive solutions for the demanding driver.</p>
</div>
<div className="hidden md:block h-px bg-white/10 flex-grow ml-12 mb-3"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">



<article className="group hover:border-brand-red/50 transition-all duration-300 border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red/20 transition-colors">
<iconify-icon className="text-brand-red" height="24" icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Track Prep</h3>
<p className="text-sm text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors leading-relaxed">
                        Suspension geometry, brake upgrades, and weight reduction for optimal lap times.
                    </p>
<ul className="text-xs text-neutral-400 space-y-3 font-medium uppercase tracking-wide">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-red rounded-full"></span>Coilover Setup</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-red rounded-full"></span>Big Brake Kits</li>
</ul>
</article>

<article className="group hover:border-brand-red/50 transition-all duration-300 border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red/20 transition-colors">
<iconify-icon className="text-brand-red" height="24" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Maintenance</h3>
<p className="group-hover:text-neutral-400 transition-colors leading-relaxed text-sm text-neutral-500 mb-6">
                        Dealer-quality service using OEM or superior performance fluids and filters.
                    </p>
<ul className="text-xs text-neutral-400 space-y-3 font-medium uppercase tracking-wide">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="w-1 h-1 bg-brand-red rounded-full"></span>Oil Analysis</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-red rounded-full"></span>Digital Logs</li>
</ul>
</article>
<article className="group hover:border-brand-red/50 transition-all duration-300 border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red/20 transition-colors">
<iconify-icon className="text-brand-red" height="24" icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Performance Parts</h3>
<p className="group-hover:text-neutral-400 transition-colors leading-relaxed text-sm text-neutral-500 mb-6">Installation of high-flow intakes, exhaust systems, intercoolers, and upgraded turbochargers.</p>
<ul className="text-xs text-neutral-400 space-y-3 font-medium uppercase tracking-wide">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Turbo Upgrade</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Exhaust Systems</li>
</ul>
</article><article className="group hover:border-brand-red/50 transition-all duration-300 border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red/20 transition-colors">
<iconify-icon className="text-brand-red" height="24" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">ECU Tuning</h3>
<p className="group-hover:text-neutral-400 transition-colors leading-relaxed text-sm text-neutral-500 mb-6">Stage 1/2/3 software optimization tailored to your engine. Unlock horsepower and torque safely.</p>
<ul className="text-xs text-neutral-400 space-y-3 font-medium uppercase tracking-wide">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Dyno Testing</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Custom Maps</li>
</ul>
</article></div>
</div>
</section>

<section className="py-24 bg-brand-panel border-y border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative group">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-red/50 transition-all group-hover:border-brand-red"></div>
<img alt="Team working on engine" className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-black/50 rounded-sm" src="https://images.unsplash.com/photo-1530906358829-e84b2769270f?q=80&amp;w=2873&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-red/50 transition-all group-hover:border-brand-red"></div>
</div>
<div className="">
<h4 className="text-brand-red uppercase tracking-[0.2em] font-semibold text-xs mb-3">Who We Are</h4>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">BORN ON THE <br/> RACETRACK.</h2>
<div className="space-y-6 text-neutral-400 font-light text-base">
<p>
                            Apex Performance started in a pit lane, fueled by the desire to shave milliseconds off lap times. What began as a private racing team has evolved into a premier facility for automotive enthusiasts.
                        </p>
<p className="">
                            We specialize in platforms like Porsche GT, BMW M, and Nissan GTR. Our philosophy is simple: precision engineering and data-driven tuning. We don't guess; we measure, analyze, and improve.
                        </p>
<p className="">
                            Whether you need a reliable track weapon or a street car with supercar performance, our team of certified engineers delivers results you can feel.
                        </p>
</div>
<div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
<div className="">
<span className="block text-3xl font-display text-white font-semibold">15+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mt-1 block">Years Racing</span>
</div>
<div>
<span className="block text-3xl font-display text-white font-semibold">1k+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mt-1 block">Cars Tuned</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark" id="projects">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">FEATURED BUILDS</h2>
<a className="hidden md:inline-flex items-center text-sm font-medium text-brand-red hover:text-white transition-colors mt-4 md:mt-0 uppercase tracking-wide" href="#">
                View Portfolio 
                <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Porsche GT3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-red text-xs uppercase tracking-widest font-bold mb-2">Track Build</p>
<h3 className="text-white text-2xl font-display font-medium">Porsche 911 GT3 RS</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="BMW M4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1622034114457-200d191cc875?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-red text-xs uppercase tracking-widest font-bold mb-2">Stage 2 Tuning</p>
<h3 className="text-white text-2xl font-display font-medium">BMW M4 Competition</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Nissan GTR" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-red text-xs uppercase tracking-widest font-bold mb-2">Engine Rebuild</p>
<h3 className="text-white text-2xl font-display font-medium">Nissan GT-R Alpha 12</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Supra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-red text-xs uppercase tracking-widest font-bold mb-2">Turbo Kit</p>
<h3 className="text-white text-2xl font-display font-medium">Toyota Supra MK4</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="McLaren" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1588294020274-1e23a4815b72?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-red text-xs uppercase tracking-widest font-bold mb-2">Exhaust &amp; Aero</p>
<h3 className="text-white text-2xl font-display font-medium">McLaren 720S</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Audi RS6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-red text-xs uppercase tracking-widest font-bold mb-2">Suspension</p>
<h3 className="text-white text-2xl font-display font-medium">Audi RS6 Avant</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-panel" id="pricing">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-8">BASE PRICING</h2>
<p className="text-neutral-400 mb-8 font-light">Prices vary based on vehicle model and modification complexity. Below are starting rates for standard labor.</p>
<div className="space-y-4">
<div className="flex justify-between items-center p-5 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/30 transition-colors">
<span className="text-white font-medium">Diagnostics / Dyno Run</span>
<span className="text-brand-red font-semibold">$150 / hr</span>
</div>
<div className="flex justify-between items-center p-5 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/30 transition-colors">
<span className="text-white font-medium">Performance Oil Service</span>
<span className="text-brand-red font-semibold">from $250</span>
</div>
<div className="flex justify-between items-center p-5 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/30 transition-colors">
<span className="text-white font-medium">Stage 1 ECU Tune</span>
<span className="text-brand-red font-semibold">from $800</span>
</div>
<div className="flex justify-between items-center p-5 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/30 transition-colors">
<span className="text-white font-medium">Suspension Install (Coilovers)</span>
<span className="text-brand-red font-semibold">from $600</span>
</div>
<div className="flex justify-between items-center p-5 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/30 transition-colors">
<span className="text-white font-medium">Full Engine Build</span>
<span className="text-brand-red font-semibold">Custom Quote</span>
</div>
</div>
<div className="mt-8 p-5 bg-brand-red/10 border border-brand-red/20 rounded-sm flex gap-3">
<iconify-icon className="text-brand-red shrink-0" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-brand-red font-medium">All performance parts come with manufacturer warranty. Labor guaranteed for 12 months/12k miles.</p>
</div>
</div>

<div className="">
<h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-8">COMMON QUESTIONS</h2>
<div className="space-y-4">
<details className="group p-6 bg-brand-surface border-l-2 border-transparent open:border-brand-red cursor-pointer transition-all hover:bg-neutral-900 rounded-sm">
<summary className="flex justify-between items-center font-medium text-white list-none text-lg">
                            Do you tune ECU or TCU?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-brand-red">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base font-light leading-relaxed">
                            Yes, we offer both Engine Control Unit (ECU) and Transmission Control Unit (TCU) tuning. We can optimize shift points, clutch pressure, and engine timing to ensure your car performs harmoniously.
                        </p>
</details>
<details className="group p-6 bg-brand-surface border-l-2 border-transparent open:border-brand-red cursor-pointer transition-all hover:bg-neutral-900 rounded-sm">
<summary className="flex justify-between items-center font-medium text-white list-none text-lg">
                            Can I bring my own parts?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-brand-red">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base font-light leading-relaxed">
                            We generally recommend sourcing parts through us to ensure authenticity and fitment. However, we do install customer-supplied parts if they meet our quality standards (top-tier brands only).
                        </p>
</details>
<details className="group p-6 bg-brand-surface border-l-2 border-transparent open:border-brand-red cursor-pointer transition-all hover:bg-neutral-900 rounded-sm">
<summary className="flex justify-between items-center font-medium text-white list-none text-lg">
                            Do you offer track-side support?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-brand-red">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base font-light leading-relaxed">
                            Absolutely. We offer full track day support packages, including transport, tire changes, and data logging analysis between sessions to help you improve your driving and car setup.
                        </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="contact">
<div className="bg-gradient-to-l from-brand-red/10 to-transparent w-full md:w-1/2 h-full absolute top-0 right-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">START YOUR BUILD</h2>
<p className="text-neutral-400 mb-10 text-lg font-light">Ready to transform your vehicle? Fill out the form below detailing your car and goals. Our engineers will review your request.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-red focus:outline-none transition-colors rounded-sm text-sm" placeholder="Full Name" type="text"/>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-red focus:outline-none transition-colors rounded-sm text-sm" placeholder="Phone Number" type="tel"/>
</div>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-red focus:outline-none transition-colors rounded-sm text-sm" placeholder="Email Address" type="email"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-red focus:outline-none transition-colors rounded-sm text-sm" placeholder="Vehicle Year/Make/Model" type="text"/>
<select className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-brand-red focus:outline-none transition-colors rounded-sm appearance-none text-sm cursor-pointer">
<option className="text-neutral-600" disabled="" selected="" value="">Service Type</option>
<option value="tuning">ECU Tuning</option>
<option value="maintenance">Maintenance</option>
<option value="track">Track Prep</option>
<option value="consultation">Build Consultation</option>
</select>
</div>
<textarea className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-red focus:outline-none transition-colors rounded-sm text-sm" placeholder="Describe your goals or current issues..." rows="4"></textarea>
<button className="w-full md:w-auto px-10 py-4 bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3 rounded-sm" type="submit">
                            Submit Request
                            <iconify-icon height="20" icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
</div>
<div className="flex flex-col justify-between">
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="p-3 bg-brand-panel border border-white/5 rounded-sm">
<iconify-icon className="text-brand-red" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 uppercase tracking-wide text-sm">Location</h3>
<p className="text-neutral-400 font-light">800 Performance Way<br/>Los Angeles, CA 90012</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-brand-panel border border-white/5 rounded-sm">
<iconify-icon className="text-brand-red" height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-white font-medium mb-1 uppercase tracking-wide text-sm">Contact</h3>
<p className="text-neutral-400 font-light hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</p>
<p className="text-neutral-400 font-light hover:text-white transition-colors cursor-pointer">info@apexperformance.com</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-brand-panel border border-white/5 rounded-sm">
<iconify-icon className="text-brand-red" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 uppercase tracking-wide text-sm">Shop Hours</h3>
<p className="text-neutral-400 font-light">Mon - Fri: 8:00 AM - 6:00 PM</p>
<p className="text-neutral-400 font-light">Sat: By Appointment Only</p>
</div>
</div>
</div>

<div className="mt-12 w-full h-64 bg-neutral-900 border border-white/5 relative flex items-center justify-center group overflow-hidden rounded-sm">
<img alt="Map Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2948&amp;auto=format&amp;fit=crop"/>
<a className="relative z-10 px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-sm shadow-lg hover:bg-brand-red hover:text-white transition-colors" href="#">
                            Get Directions
                         </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/5 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-brand-red flex items-center justify-center transform -skew-x-12">
<span className="font-display font-bold text-white text-base transform skew-x-12">AP</span>
</div>
<span className="font-display font-bold text-xl text-white tracking-tight">APEX<span className="text-brand-red">PERFORMANCE</span></span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed font-light">
                        The ultimate destination for automotive perfection. Specializing in European and JDM sports cars.
                    </p>
</div>
<div>
<h5 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Services</h5>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-brand-red transition-colors" href="#">ECU Tuning</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Dyno Testing</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Company</h5>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-brand-red transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#projects">Build Gallery</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Follow Us</h5>
<div className="flex gap-4">
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all rounded-sm" href="#">
<iconify-icon height="20" icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all rounded-sm" href="#">
<iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all rounded-sm" href="#">
<iconify-icon height="20" icon="ri:youtube-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs font-light">© 2024 Apex Performance. All rights reserved.</p>
<div className="text-neutral-700 text-xs flex gap-4 uppercase tracking-wider font-medium">
<span>Privacy Policy</span>
<span>•</span>
<span>Terms of Service</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
