import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-wait').forEach((el) => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-[url('https://velascomaterials.com/wp-content/uploads/2021/03/Velasco-Home-Slider-BG2-01.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#020406] via-[#020406]/95 to-[#020406] pointer-events-none"></div>

<nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-[#020406]/80 border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">

<img alt="Velasco Logo" className="h-8 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" src="https://velascomaterials.com/wp-content/uploads/2021/03/Velasco_Materials_Logo-3.svg"/>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-slate-400">
<a className="hover:text-sky-400 transition-colors" href="#">Home</a>
<a className="hover:text-sky-400 transition-colors" href="#services">Products &amp; Services</a>
<a className="hover:text-sky-400 transition-colors" href="#about">About Us</a>
<a className="hover:text-sky-400 transition-colors" href="#testimonials">Testimonials</a>
</div>

<div className="flex items-center gap-4">
<button className="btn-beam hidden sm:flex items-center justify-center px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase font-medium text-white hover:scale-105 transition-transform duration-300">
<span>Get A Quote</span>
</button>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden -mt-20 pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://velascomaterials.com/wp-content/uploads/2021/03/Velasco-Home-Slider-BG2-01.jpg')] bg-cover bg-center transition-transform duration-[20s] hover:scale-105" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)', opacity: '0.5'}}>
</div>
</div>
<div className="relative z-10 max-w-4xl mx-auto">
<div className="reveal-wait mb-6 flex justify-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/30 border border-sky-500/20 backdrop-blur-md text-[10px] tracking-[0.2em] font-semibold text-sky-400 uppercase">
<iconify-icon icon="solar:map-point-linear" width="12"></iconify-icon>
                        Serving Southern California
                    </span>
</div>
<h1 className="reveal-wait delay-100 text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-newsreader font-light tracking-tight text-white mb-8">
                    Material Supply <br/>
<span className="text-slate-500 italic font-light">&amp; Logistics.</span>
</h1>
<p className="reveal-wait delay-200 text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed mb-12">
                    From bulk aggregates and custom soil blending to specialized blower installation. We provide the foundation for landscapes across the region.
                </p>
<div className="reveal-wait delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-[1.02]">
<span className="relative z-10 text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                            View Products
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all text-xs font-semibold tracking-widest uppercase">
                        Contact Sales
                    </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#020406]/50 backdrop-blur-sm py-8 reveal-wait delay-300 hidden md:block">
<div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-slate-500">
<div className="flex items-center gap-4">
<span className="text-3xl font-newsreader text-white">12+</span>
<span className="text-[10px] tracking-widest uppercase leading-tight">Years<br/>Established</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-4">
<span className="text-3xl font-newsreader text-white">100%</span>
<span className="text-[10px] tracking-widest uppercase leading-tight">In-House<br/>Blending</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-4">
<span className="text-3xl font-newsreader text-white">SoCal</span>
<span className="text-[10px] tracking-widest uppercase leading-tight">Delivery<br/>Network</span>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1400px] mx-auto px-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-wait">
<div>
<span className="text-sky-500 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-newsreader font-light tracking-tight text-white">
                        Comprehensive Solutions.
                    </h2>
</div>
<p className="mt-6 md:mt-0 text-slate-400 text-sm max-w-xs leading-relaxed">
                    We have the right delivery truck to accommodate any size project, from residential backyards to large scale freeways.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="service-card group p-8 rounded-xl border border-white/5 relative overflow-hidden reveal-wait">
<div className="absolute top-8 right-8 text-sky-500/20 group-hover:text-sky-500 transition-colors">
<iconify-icon icon="solar:box-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-4 mt-8">Landscaping Supplies</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                        Pickup &amp; delivery options for gravel, stone, river rock, ground cover, aggregates, mulch, and bark.
                    </p>
<a className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-white group-hover:text-sky-400 transition-colors" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="service-card group p-8 rounded-xl border border-white/5 relative overflow-hidden reveal-wait delay-100">
<div className="absolute top-8 right-8 text-sky-500/20 group-hover:text-sky-500 transition-colors">
<iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-4 mt-8">Custom Soil Blending</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                        Superior soil mixes providing the best environment. We blend proprietary soils and specialty mixes in-house.
                    </p>
<a className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-white group-hover:text-sky-400 transition-colors" href="#">
                        View Mixes <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="service-card group p-8 rounded-xl border border-white/5 relative overflow-hidden reveal-wait delay-200">
<div className="absolute top-8 right-8 text-sky-500/20 group-hover:text-sky-500 transition-colors">
<iconify-icon icon="solar:wind-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-4 mt-8">Blower Service</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                        Specialized blower trucks for installing mulches, playground chips, compost, and soils efficiently on any terrain.
                    </p>
<a className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-white group-hover:text-sky-400 transition-colors" href="#">
                        Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="service-card group p-8 rounded-xl border border-white/5 relative overflow-hidden reveal-wait">
<div className="absolute top-8 right-8 text-sky-500/20 group-hover:text-sky-500 transition-colors">
<iconify-icon icon="solar:transfer-horizontal-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-4 mt-8">Transloading</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                        Offloading, storage, and reloading of bulk commodity materials for large volume customers.
                    </p>
<a className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-white group-hover:text-sky-400 transition-colors" href="#">
                        Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="service-card group p-8 rounded-xl border border-white/5 relative overflow-hidden reveal-wait delay-100">
<div className="absolute top-8 right-8 text-sky-500/20 group-hover:text-sky-500 transition-colors">
<iconify-icon icon="solar:delivery-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-4 mt-8">Bulk Delivery</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                        Walking floors, transfer trucks, roll offs, and dump trailers. We have the fleet to fulfill any project demand.
                    </p>
<a className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-white group-hover:text-sky-400 transition-colors" href="#">
                        Fleet Info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="service-card group p-8 rounded-xl border border-white/5 relative overflow-hidden reveal-wait delay-200">
<div className="absolute top-8 right-8 text-sky-500/20 group-hover:text-sky-500 transition-colors">
<iconify-icon icon="solar:layers-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-4 mt-8">Artificial Turf</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                        Referrals to certified contractors for high-quality artificial turf installation for residential and commercial use.
                    </p>
<a className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-white group-hover:text-sky-400 transition-colors" href="#">
                        Turf Options <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080c12] border-y border-white/5" id="about">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="relative reveal-wait">
<div className="aspect-[4/3] rounded-sm overflow-hidden border border-white/5 relative">

<img alt="Velasco Truck Fleet" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://velascomaterials.com/wp-content/uploads/2021/03/Velasco-Home-Slider-BG2-05.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent pointer-events-none"></div>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/[0.02]">
<iconify-icon className="text-sky-500" icon="solar:verified-check-linear" width="48"></iconify-icon>
</div>
</div>
<div className="reveal-wait delay-200">
<span className="text-sky-500 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">About VelasCo</span>
<h2 className="text-4xl md:text-5xl font-newsreader font-light tracking-tight text-white mb-8">
                        Over a decade of <br/>logistical excellence.
                    </h2>
<div className="space-y-6 text-slate-400 text-sm font-light leading-relaxed">
<p>
                            VelasCo started over 12 years ago as a small fleet trucking company hauling bulk commodities utilizing walking floor trailers. Over the years, we have grown into a premier trucking and brokering logistics company.
                        </p>
<p>
                            Specializing in the bulk landscape materials market, we bridge the gap between material sourcing and on-site delivery, ensuring your projects proceed without delay.
                        </p>
</div>
<div className="mt-10 flex gap-12">
<div>
<span className="block text-3xl font-newsreader text-white mb-1">24/7</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Logistics Support</span>
</div>
<div>
<span className="block text-3xl font-newsreader text-white mb-1">100%</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Licensed &amp; Bonded</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1400px] mx-auto px-6" id="testimonials">
<div className="text-center mb-20 reveal-wait">
<h2 className="text-3xl md:text-4xl font-newsreader font-light tracking-tight text-white mb-4">Trusted by the community.</h2>
<div className="w-12 h-px bg-sky-500 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-[#080c12] border border-white/5 rounded-2xl reveal-wait relative group">
<iconify-icon className="text-sky-900 absolute top-6 right-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<div className="flex gap-1 text-sky-500 mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-400 text-sm italic mb-8 leading-relaxed">
                        "VelasCo was so helpful and accommodating in helping me renovate my backyard. Their prices were great and they even delivered after hours!"
                    </p>
<div>
<span className="block text-white font-medium text-sm">Karen Dykes</span>
<span className="block text-xs text-slate-600 uppercase tracking-wider mt-1">Jurupa Valley, CA</span>
</div>
</div>

<div className="p-8 bg-[#080c12] border border-white/5 rounded-2xl reveal-wait delay-100 relative group">
<iconify-icon className="text-sky-900 absolute top-6 right-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<div className="flex gap-1 text-sky-500 mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-400 text-sm italic mb-8 leading-relaxed">
                        "Great quality products and amazing customer service. They were willing to go the extra mile in helping us get what we needed."
                    </p>
<div>
<span className="block text-white font-medium text-sm">Monica Grey</span>
<span className="block text-xs text-slate-600 uppercase tracking-wider mt-1">Menifee, CA</span>
</div>
</div>

<div className="p-8 bg-[#080c12] border border-white/5 rounded-2xl reveal-wait delay-200 relative group">
<iconify-icon className="text-sky-900 absolute top-6 right-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<div className="flex gap-1 text-sky-500 mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-400 text-sm italic mb-8 leading-relaxed">
                        "VelasCo was extremely accommodating adjusting to my delivery needs. Driver was professional arriving as scheduled."
                    </p>
<div>
<span className="block text-white font-medium text-sm">Josh Oelrich</span>
<span className="block text-xs text-slate-600 uppercase tracking-wider mt-1">Menifee, CA</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#080c12] overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<p className="text-center text-[10px] tracking-[0.2em] uppercase text-slate-600 mb-8">Trusted Partners</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<img alt="American Landscape" className="h-10 w-auto mix-blend-screen" src="https://velascomaterials.com/wp-content/uploads/2019/09/Velasco-Client-Logo-American-Landscape.jpg"/>
<img alt="Brightview" className="h-10 w-auto mix-blend-screen" src="https://velascomaterials.com/wp-content/uploads/2019/09/Velasco-Client-Logo-Brightview.jpg"/>
<img alt="Gothic" className="h-10 w-auto mix-blend-screen" src="https://velascomaterials.com/wp-content/uploads/2019/09/Velasco-Client-Logo-Gothic.jpg"/>
<img alt="Park West" className="h-10 w-auto mix-blend-screen" src="https://velascomaterials.com/wp-content/uploads/2019/09/Velasco-Client-Logo-Park-West.jpg"/>
<img alt="Platinum" className="h-10 w-auto mix-blend-screen" src="https://velascomaterials.com/wp-content/uploads/2019/09/Velasco-Client-Logo-Platinum.jpg"/>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-sky-900/5 -z-10"></div>
<div className="max-w-2xl mx-auto px-6 text-center">
<iconify-icon className="text-sky-500 mb-6 reveal-wait" icon="solar:box-linear" width="40"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-newsreader font-light tracking-tight text-white mb-6 reveal-wait delay-100">
                    Ready to start?
                </h2>
<p className="text-lg text-slate-400 font-light mb-10 reveal-wait delay-200">
                    Get a quote for your next landscaping project. Our team is ready to assist with custom blends and logistics.
                </p>
<div className="reveal-wait delay-300">
<button className="btn-beam px-12 py-4 rounded-full border border-white/10 bg-[#0f172a] text-white text-xs font-semibold tracking-widest uppercase hover:scale-105 transition-transform duration-300">
                        Contact Us Today
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#020406] pt-24 pb-12 border-t border-white/5 text-sm">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="flex flex-col items-start">
<img alt="Velasco Logo" className="h-8 w-auto brightness-0 invert opacity-80 mb-6" src="https://velascomaterials.com/wp-content/uploads/2021/03/Velasco_Materials_Logo-3.svg"/>
<p className="text-slate-500 leading-relaxed mb-8 max-w-xs text-xs">
                    Serving Southern California landscaping material supplies. Quality aggregates, soils, and reliable delivery since 2012.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="https://www.instagram.com/velascomaterials" target="_blank">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="https://www.facebook.com/VCMhomeimprovment/" target="_blank">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>

<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="https://offerup.com/item/detail/664449005/" target="_blank">
<iconify-icon icon="simple-icons:offerup" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Products</h4>
<ul className="flex flex-col gap-3 text-slate-500 text-xs">
<li><a className="hover:text-sky-400 transition-colors" href="#">Aggregates</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Ground Covers</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Planting Soils</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Artificial Turf</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Weed Barrier</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Services</h4>
<ul className="flex flex-col gap-3 text-slate-500 text-xs">
<li><a className="hover:text-sky-400 transition-colors" href="#">Bulk Delivery</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Custom Blending</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Blower Installation</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Transloading</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Contact</h4>
<ul className="flex flex-col gap-4 text-slate-500 text-xs">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-white" icon="solar:map-point-linear"></iconify-icon>
<span>Perris, CA &amp; <br/>Surrounding Areas</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">951.555.0123</a> 
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">sales@velascomaterials.com</a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 VelasCo Materials. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
