import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-black/5 bg-slate-50/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-black">
<iconify-icon className="text-cyan-500" height="24" icon="solar:solar-power-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter">SES<span className="text-slate-500 font-normal">.Kuwait</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="transition-colors hover:text-black" href="#products">Equipment</a>
<a className="transition-colors hover:text-black" href="#solutions">Solutions</a>
<a className="transition-colors hover:text-black" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all group bg-slate-900 text-slate-50 hover:bg-black" href="#contact">
                Get Quote
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Solar Panels Desert" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=2432&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-slate-50"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-50/0 to-slate-50/0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-10">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xs font-medium mb-8 backdrop-blur-sm text-cyan-700">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                Powering the future of Kuwait
            </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[1.1] text-black">
                Harness the <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-800 to-cyan-400">Sun.</span><br/>
                Power your World.
            </h1>
<p className="reveal delay-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md text-slate-700">
                Premier supplier of high-efficiency solar energy equipment tailored for extreme desert climates. Next-generation PV panels, inverters, and storage.
            </p>
<div className="reveal delay-300 flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] bg-black text-slate-50 hover:bg-slate-800" href="#contact">
                    Request Catalog
                    <iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-4 border backdrop-blur-md rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 bg-slate-100/50 border-black/20 text-black hover:bg-slate-200/50" href="#products">
                    View Products
                </a>
</div>
</div>
</header>

<section className="border-y backdrop-blur-sm relative z-20 -mt-20 border-black/5 bg-slate-100/20">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="reveal text-center md:text-left">
<div className="text-3xl font-semibold tracking-tight mb-1 text-black">98%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Efficiency Rate</div>
</div>
<div className="reveal delay-100 text-center md:text-left">
<div className="text-3xl font-semibold tracking-tight mb-1 text-black">10+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</div>
</div>
<div className="reveal delay-200 text-center md:text-left">
<div className="text-3xl font-semibold tracking-tight mb-1 text-black">500+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Installations</div>
</div>
<div className="reveal delay-300 text-center md:text-left">
<div className="text-3xl font-semibold tracking-tight mb-1 text-black">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Support Cycle</div>
</div>
</div>
</section>

<section className="py-32 relative bg-slate-50" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">Engineered for Efficiency.</h2>
<p className="max-w-xl text-lg text-slate-600">Our equipment is specifically selected to withstand the high temperatures and dust conditions of the Kuwaiti environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group reveal glass-panel p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-slate-100/60">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 text-cyan-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 bg-slate-200/50 border-slate-300/50">
<iconify-icon icon="solar:sun-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-black">High-Temp PV Panels</h3>
<p className="text-sm leading-relaxed text-slate-600">
                        Photovoltaic modules designed with low temperature coefficients to maintain optimal output even during Kuwait's peak summer heat.
                    </p>
</div>

<div className="group reveal delay-100 glass-panel p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-slate-100/60">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 text-cyan-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 bg-slate-200/50 border-slate-300/50">
<iconify-icon icon="solar:battery-charge-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-black">Smart Storage</h3>
<p className="text-sm leading-relaxed text-slate-600">
                        Advanced LiFePO4 battery systems that store excess energy for night-time use, ensuring complete energy independence.
                    </p>
</div>

<div className="group reveal delay-200 glass-panel p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-slate-100/60">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 text-cyan-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 bg-slate-200/50 border-slate-300/50">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-black">Dust Resistant</h3>
<p className="text-sm leading-relaxed text-slate-600">
                        Anti-soiling coatings on all glass surfaces to minimize efficiency loss from dust accumulation and sandstorms.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t relative border-black/5" id="products">
<div className="absolute inset-0 bg-slate-100/20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-black">Supply Inventory</h2>
<p className="text-sm text-slate-600">Top-tier components for residential and commercial systems.</p>
</div>
<a className="text-sm text-cyan-500 flex items-center gap-1 transition-colors hover:text-cyan-600" href="#">
                    View Full Catalog <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px] auto-rows-fr">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border reveal border-black/10 bg-slate-50">
<img alt="Solar Panels" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-50" src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-50 via-slate-50/20"></div>
<div className="absolute bottom-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<div className="text-cyan-500 text-xs font-bold mb-2 uppercase tracking-wider bg-cyan-500/10 px-2 py-1 rounded w-fit border border-cyan-500/20">Best Seller</div>
<h3 className="text-3xl font-semibold mb-2 text-black">Monocrystalline Panels</h3>
<p className="text-sm max-w-sm line-clamp-2 text-slate-700">Industry-leading efficiency ratings up to 22.8% with half-cut cell technology.</p>
</div>
<div className="h-10 w-10 rounded-full backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-black/10 text-black">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl border p-6 flex flex-col justify-between reveal delay-100 border-black/10 bg-slate-50">
<img alt="Inverter" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-500" src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-50"></div>
<div className="relative z-10 flex justify-between items-start">
<iconify-icon className="text-slate-700" icon="solar:server-square-linear" width="28"></iconify-icon>
<span className="backdrop-blur border text-[10px] px-2 py-1 rounded-full bg-slate-100/80 border-black/10 text-black">In Stock</span>
</div>
<div className="relative z-10">
<h4 className="text-lg font-medium text-black">Hybrid Inverters</h4>
<p className="text-xs mt-1 text-slate-600">5kW - 50kW Capacity</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl border p-6 flex flex-col justify-between reveal delay-200 border-black/10 bg-slate-50">
<img alt="Mounting" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-500" src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-50"></div>
<div className="relative z-10 flex justify-between items-start">
<iconify-icon className="text-slate-700" icon="solar:structure-linear" width="28"></iconify-icon>
</div>
<div className="relative z-10">
<h4 className="text-lg font-medium text-black">Mounting Systems</h4>
<p className="text-xs mt-1 text-slate-600">Aluminum Alloy Structures</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl border p-8 flex items-center justify-between reveal delay-300 border-black/10 bg-slate-50">
<div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<h4 className="text-xl font-medium mb-2 text-black">Cabling &amp; Accessories</h4>
<p className="text-sm max-w-[250px] text-slate-600">UV-resistant PV cables and IP68 connectors for long-term durability.</p>
</div>
<div className="relative z-10 h-16 w-16 rounded-2xl border flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-300 bg-slate-200 border-slate-300">
<iconify-icon icon="solar:cable-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-black">Power your project.</h2>
<p className="mb-10 leading-relaxed text-lg font-light text-slate-600">
                    Ready to switch to sustainable energy? Visit our headquarters or send us a message to discuss your equipment needs.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl transition-colors border border-transparent hover:bg-slate-100/50 hover:border-black/5">
<div className="mt-1 w-10 h-10 rounded-full border flex items-center justify-center shrink-0 text-cyan-500 bg-slate-100 border-slate-200">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-black">Headquarters</h4>
<p className="text-sm mt-1 text-slate-600">8W5V+6JG, Al</p>
<p className="text-sm text-slate-600">Kuwait</p>
<a className="text-xs text-cyan-500 mt-2 inline-flex items-center gap-1 hover:underline" href="https://maps.google.com/?q=8W5V+6JG,+al,+Kuwait" target="_blank">
                                Open in Maps <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl transition-colors border border-transparent hover:bg-slate-100/50 hover:border-black/5">
<div className="mt-1 w-10 h-10 rounded-full border flex items-center justify-center shrink-0 text-cyan-500 bg-slate-100 border-slate-200">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-black">Email Us</h4>
<p className="text-sm mt-1 text-slate-600">contact@solarenergysystem.kw</p>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-3xl reveal delay-100 shadow-2xl shadow-white/50">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-slate-600">First Name</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-700 bg-slate-50/40 border-slate-300/50 text-black" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-slate-600">Last Name</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-700 bg-slate-50/40 border-slate-300/50 text-black" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-slate-600">Email Address</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-700 bg-slate-50/40 border-slate-300/50 text-black" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-slate-600">System Type</label>
<div className="relative">
<select className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer bg-slate-50/40 border-slate-300/50 text-slate-700 hover:bg-slate-100/50">
<option>Residential Solar</option>
<option>Commercial Project</option>
<option>Equipment Supply Only</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-slate-600">Message</label>
<textarea className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-700 resize-none bg-slate-50/40 border-slate-300/50 text-black" placeholder="Tell us about your energy requirements..." rows="4"></textarea>
</div>
<button className="w-full font-semibold py-3.5 rounded-xl transition-colors mt-2 text-sm flex items-center justify-center gap-2 group bg-black text-slate-50 hover:bg-slate-800" type="button">
                        Send Inquiry
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t py-12 border-black/5 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-black">
<iconify-icon className="text-cyan-400" icon="solar:solar-power-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Solar Energy System</span>
</div>
<div className="text-xs font-medium text-slate-400">
                © 2023 Solar Energy System Kuwait. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="transition-colors text-slate-400 hover:text-black" href="#"><iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon></a>
<a className="transition-colors text-slate-400 hover:text-black" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="transition-colors text-slate-400 hover:text-black" href="#"><iconify-icon icon="brandico:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
