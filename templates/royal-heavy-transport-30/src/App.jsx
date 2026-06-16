import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Simple script to simulate page navigation
function showProject(id) {
document.getElementById('home-view').classList.add('hidden');
document.getElementById('project-view').classList.remove('hidden');
window.scrollTo(0, 0);
}
function showHome() {
document.getElementById('project-view').classList.add('hidden');
document.getElementById('home-view').classList.remove('hidden');
window.scrollTo(0, 0);
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="showHome()">
<span className="iconify text-[#D4AF37] text-xl" data-icon="lucide:crown"></span>
<div className="flex flex-col leading-none">
<span className="text-white font-semibold tracking-tight text-lg">ROYAL</span>
<span className="text-[10px] text-[#D4AF37] font-medium tracking-widest uppercase">Fast &amp; Safe</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[#D4AF37] transition-colors" href="#services" onclick="showHome()">Services</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#projects" onclick="showHome()">Projects</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#process" onclick="showHome()">Process</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#fleet" onclick="showHome()">Fleet</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Log In</a>
<a className="bg-[#D4AF37] text-slate-950 hover:bg-[#c5a059] text-xs sm:text-sm font-semibold py-2 px-4 rounded-full transition-colors shadow-[0_0_15px_-3px_rgba(212,175,55,0.3)]" href="#quote">
                    Request Quote
                </a>
</div>
</div>
</nav>

<main id="home-view">

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#D4AF37] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4D078]"></span>
</span>
                    Nationwide Premium Logistics Active
                </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 text-glow">
                    The Crown Jewel of <br className="hidden sm:block"/>
<span className="text-gold-gradient">Heavy Transport.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Elite logistics solutions for high-value assets. We handle superloads, complex permitting, and route engineering with royal precision.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c5a059] text-slate-950 font-semibold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2" href="#quote">
                        Start a Shipment
                        <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
<button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:phone"></span>
                        (800) 555-ROYAL
                    </button>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-slate-900/30 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Trusted by Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2 text-white font-bold text-xl"><span className="iconify" data-icon="lucide:box"></span> CAT</div>
<div className="flex items-center gap-2 text-white font-bold text-xl"><span className="iconify" data-icon="lucide:triangle"></span> KOMATSU</div>
<div className="flex items-center gap-2 text-white font-bold text-xl"><span className="iconify" data-icon="lucide:wind"></span> VESTAS</div>
<div className="flex items-center gap-2 text-white font-bold text-xl"><span className="iconify" data-icon="lucide:hammer"></span> DEERE</div>
<div className="flex items-center gap-2 text-white font-bold text-xl"><span className="iconify" data-icon="lucide:zap"></span> GE ENERGY</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border border-white/10 bg-white/[0.02] rounded-3xl p-8 md:p-12">
<div className="text-center border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0">
<p className="text-3xl md:text-4xl font-semibold text-white mb-2">15k+</p>
<p className="text-sm text-slate-500">Safe Loads Delivered</p>
</div>
<div className="text-center border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0">
<p className="text-3xl md:text-4xl font-semibold text-white mb-2">99.8%</p>
<p className="text-sm text-slate-500">On-Time Performance</p>
</div>
<div className="text-center border-r-0 md:border-r border-white/5 pb-0">
<p className="text-3xl md:text-4xl font-semibold text-white mb-2">50</p>
<p className="text-sm text-slate-500">States Covered</p>
</div>
<div className="text-center">
<p className="text-3xl md:text-4xl font-semibold text-white mb-2">$5M</p>
<p className="text-sm text-slate-500">Cargo Insurance</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-slate-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Services</h2>
<p className="text-slate-400 max-w-xl text-lg">Engineered solutions for every classification of heavy transport.</p>
</div>
<a className="text-[#D4AF37] hover:text-[#F4D078] text-sm font-medium flex items-center gap-1" href="#">
                        View full capabilities <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D4AF37]/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20">
<span className="iconify" data-icon="lucide:truck" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Heavy Haul</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Transporting construction, mining, and agricultural equipment up to 150,000 lbs.
                        </p>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D4AF37]/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20">
<span className="iconify" data-icon="lucide:anchor" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Superloads</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Specialized modular trailers for loads exceeding standard dimensional limits.
                        </p>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D4AF37]/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20">
<span className="iconify" data-icon="lucide:map" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Route Planning</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Surveying, bridge engineering, and permit acquisition for every state crossed.
                        </p>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D4AF37]/30 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pilot Services</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Certified civilian escorts and police coordination for maximum safety compliance.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">How We Move the Impossible</h2>
<p className="text-slate-400">A rigorous four-step engineering process ensures your asset arrives safely, every time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#D4AF37] transition-colors shadow-lg">
<span className="text-2xl font-bold text-[#D4AF37]">01</span>
</div>
<h3 className="text-lg font-medium text-white text-center mb-3">Consultation &amp; Quote</h3>
<p className="text-sm text-slate-500 text-center leading-relaxed">We analyze dimensions, weight, and timeline to provide an accurate, transparent estimate.</p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#D4AF37] transition-colors shadow-lg">
<span className="text-2xl font-bold text-[#D4AF37]">02</span>
</div>
<h3 className="text-lg font-medium text-white text-center mb-3">Survey &amp; Permitting</h3>
<p className="text-sm text-slate-500 text-center leading-relaxed">Our engineers route the path, acquire state permits, and coordinate utility lifts.</p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#D4AF37] transition-colors shadow-lg">
<span className="text-2xl font-bold text-[#D4AF37]">03</span>
</div>
<h3 className="text-lg font-medium text-white text-center mb-3">Execution &amp; Transport</h3>
<p className="text-sm text-slate-500 text-center leading-relaxed">Experienced drivers and pilot cars move your load with real-time GPS tracking.</p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#D4AF37] transition-colors shadow-lg">
<span className="text-2xl font-bold text-[#D4AF37]">04</span>
</div>
<h3 className="text-lg font-medium text-white text-center mb-3">Delivery &amp; Offload</h3>
<p className="text-sm text-slate-500 text-center leading-relaxed">Precise positioning at the destination and post-trip verification reports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Recent Projects</h2>
<p className="text-slate-500 text-sm mb-6">Select a project below to view full details.</p>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-white text-slate-950 text-xs font-medium border border-white">All Projects</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors">Heavy Equipment</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors">Wind Energy</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors">Industrial</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative block h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 cursor-pointer" onclick="showProject(1)">
<img alt="Excavator Transport" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#D4AF37] text-slate-950 tracking-wide">Heavy Equipment</span>
<span className="text-xs text-slate-300 flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> TX → ND</span>
</div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#D4AF37] transition-colors">CAT 390F Excavator Move</h3>
<p className="text-sm text-slate-400 line-clamp-2">Transported via 9-axle RGN combination. Required height pole escort due to 16'2" loaded height.</p>
<div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs text-white">View Full Case Study</span>
<span className="iconify text-[#D4AF37]" data-icon="lucide:arrow-right"></span>
</div>
</div>
</div>

<div className="group relative block h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 cursor-pointer" onclick="showProject(2)">
<img alt="Turbine Transport" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#D4AF37] text-slate-950 tracking-wide">Wind Energy</span>
<span className="text-xs text-slate-300 flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> CO → WY</span>
</div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#D4AF37] transition-colors">Wind Turbine Nacelle</h3>
<p className="text-sm text-slate-400 line-clamp-2">Superload classification. 185,000 lbs payload. Utilized dual-lane modular trailer system.</p>
<div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs text-white">View Full Case Study</span>
<span className="iconify text-[#D4AF37]" data-icon="lucide:arrow-right"></span>
</div>
</div>
</div>

<div className="group relative block h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 cursor-pointer" onclick="showProject(3)">
<img alt="Industrial Tank" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2732&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#D4AF37] text-slate-950 tracking-wide">Industrial</span>
<span className="text-xs text-slate-300 flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> LA → TX</span>
</div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#D4AF37] transition-colors">Pressure Vessel Relocation</h3>
<p className="text-sm text-slate-400 line-clamp-2">Cross-state transport of 14ft diameter vessel. Night movement required through Houston metro.</p>
<div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs text-white">View Full Case Study</span>
<span className="iconify text-[#D4AF37]" data-icon="lucide:arrow-right"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/20" id="fleet">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">World-Class Fleet</h2>
<p className="text-slate-400">Our extensive inventory of specialized trailers ensures we always have the right tool for the job.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/10 bg-slate-950">
<div className="h-40 bg-slate-900 rounded-lg mb-4 flex items-center justify-center border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all"></div>
<span className="relative z-10 bg-slate-950/80 px-3 py-1 rounded text-white text-xs font-bold border border-white/10">Removable Gooseneck</span>
</div>
<h3 className="text-white font-medium mb-1">RGN (Lowboy)</h3>
<p className="text-xs text-slate-500 mb-3">Capacity: Up to 150,000 lbs</p>
<ul className="space-y-1">
<li className="text-xs text-slate-400 flex items-center gap-2"><span className="iconify text-[#D4AF37]" data-icon="lucide:check" data-width="12"></span> 29-34ft Well Length</li>
<li className="text-xs text-slate-400 flex items-center gap-2"><span className="iconify text-[#D4AF37]" data-icon="lucide:check" data-width="12"></span> 18-24" Deck Height</li>
</ul>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-slate-950">
<div className="h-40 bg-slate-900 rounded-lg mb-4 flex items-center justify-center border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all"></div>
<span className="relative z-10 bg-slate-950/80 px-3 py-1 rounded text-white text-xs font-bold border border-white/10">Extendable</span>
</div>
<h3 className="text-white font-medium mb-1">Stretch Flatbed</h3>
<p className="text-xs text-slate-500 mb-3">Capacity: 48,000 lbs - 80ft Long</p>
<ul className="space-y-1">
<li className="text-xs text-slate-400 flex items-center gap-2"><span className="iconify text-[#D4AF37]" data-icon="lucide:check" data-width="12"></span> Extends 48' to 80'</li>
<li className="text-xs text-slate-400 flex items-center gap-2"><span className="iconify text-[#D4AF37]" data-icon="lucide:check" data-width="12"></span> Ideal for Piping/Steel</li>
</ul>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-slate-950">
<div className="h-40 bg-slate-900 rounded-lg mb-4 flex items-center justify-center border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586191582114-1d86f780053e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all"></div>
<span className="relative z-10 bg-slate-950/80 px-3 py-1 rounded text-white text-xs font-bold border border-white/10">Modular</span>
</div>
<h3 className="text-white font-medium mb-1">Multi-Axle Modular</h3>
<p className="text-xs text-slate-500 mb-3">Capacity: 200,000+ lbs</p>
<ul className="space-y-1">
<li className="text-xs text-slate-400 flex items-center gap-2"><span className="iconify text-[#D4AF37]" data-icon="lucide:check" data-width="12"></span> Dual Lane Systems</li>
<li className="text-xs text-slate-400 flex items-center gap-2"><span className="iconify text-[#D4AF37]" data-icon="lucide:check" data-width="12"></span> Hydraulic Steering</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950 relative overflow-hidden">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-xs font-medium text-[#D4AF37] mb-6">
<span className="iconify" data-icon="lucide:shield"></span> Safety First
                     </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Uncompromising Compliance &amp; Safety Standards</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                         In heavy haul, safety isn't just a policy—it's physics. We maintain the highest safety ratings in the industry through rigorous maintenance, continuous driver training, and strict adherence to DOT regulations.
                     </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 text-[#D4AF37]">
<span className="iconify" data-icon="lucide:file-check" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium">Permit Precision</h4>
<p className="text-sm text-slate-500 mt-1">Direct connections with state permitting offices ensure all legal requirements are met before a wheel turns.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 text-[#D4AF37]">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium">Certified Escorts</h4>
<p className="text-sm text-slate-500 mt-1">We utilize only certified pilot car operators and coordinate law enforcement escorts when mandated.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-white/10 bg-slate-900 p-8 relative z-10">
<h3 className="text-white font-medium mb-6">Certifications</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-slate-950 border border-white/5 flex items-center gap-3">
<span className="iconify text-[#D4AF37]" data-icon="lucide:award"></span>
<span className="text-sm text-slate-300">SC&amp;RA Member</span>
</div>
<div className="p-4 rounded-lg bg-slate-950 border border-white/5 flex items-center gap-3">
<span className="iconify text-[#D4AF37]" data-icon="lucide:check-circle"></span>
<span className="text-sm text-slate-300">DOT Compliant</span>
</div>
<div className="p-4 rounded-lg bg-slate-950 border border-white/5 flex items-center gap-3">
<span className="iconify text-[#D4AF37]" data-icon="lucide:umbrella"></span>
<span className="text-sm text-slate-300">$5M Insurance</span>
</div>
<div className="p-4 rounded-lg bg-slate-950 border border-white/5 flex items-center gap-3">
<span className="iconify text-[#D4AF37]" data-icon="lucide:map"></span>
<span className="text-sm text-slate-300">GPS Tracking</span>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-full h-full border border-white/5 rounded-2xl -z-0"></div>
<div className="absolute -bottom-4 -left-4 w-full h-full border border-white/5 rounded-2xl -z-0"></div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Client Voices</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-slate-950 relative">
<span className="iconify text-[#D4AF37]/20 absolute top-6 right-6 text-4xl" data-icon="lucide:quote"></span>
<div className="flex gap-1 text-[#D4AF37] mb-4 text-xs">
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">"ROYAL handled our turbine transport with incredible professionalism. The route survey saved us thousands by avoiding a low bridge that other carriers missed."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs">JS</div>
<div>
<p className="text-white text-sm font-medium">James Smith</p>
<p className="text-xs text-slate-500">Logistics Manager, WindCo</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-slate-950 relative">
<span className="iconify text-[#D4AF37]/20 absolute top-6 right-6 text-4xl" data-icon="lucide:quote"></span>
<div className="flex gap-1 text-[#D4AF37] mb-4 text-xs">
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">"Communication was constant. I knew exactly where my excavator was at all times. They handled the permits across 5 states effortlessly."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs">MR</div>
<div>
<p className="text-white text-sm font-medium">Maria Rodriguez</p>
<p className="text-xs text-slate-500">VP Operations, BuildRight</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-slate-950 relative">
<span className="iconify text-[#D4AF37]/20 absolute top-6 right-6 text-4xl" data-icon="lucide:quote"></span>
<div className="flex gap-1 text-[#D4AF37] mb-4 text-xs">
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">"We've used many carriers for our pressure vessels, but ROYAL is the only one we trust with the Superloads. Truly the gold standard."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs">DK</div>
<div>
<p className="text-white text-sm font-medium">David Kim</p>
<p className="text-xs text-slate-500">Project Lead, InduChem</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium hover:text-[#D4AF37] transition-colors">
                            What information do I need for a quote?
                            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            To provide an accurate quote, we need the origin and destination zip codes, commodity description, and precise dimensions (Length, Width, Height, Weight). Photos or technical drawings are highly recommended for specialized loads.
                        </div>
</details>
<details className="group bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium hover:text-[#D4AF37] transition-colors">
                            How long does it take to get permits?
                            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            Permit times vary by state and load size. Standard oversize permits usually take 1-3 business days. Superload permits requiring bridge analysis can take 10-21 days depending on the state DOT's backlog.
                        </div>
</details>
<details className="group bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium hover:text-[#D4AF37] transition-colors">
                            Do you offer insurance for high-value loads?
                            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            Yes. We carry $1M in general liability and $100k cargo insurance as standard. For high-value assets, we can instantly increase cargo coverage up to $5M or more upon request.
                        </div>
</details>
<details className="group bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium hover:text-[#D4AF37] transition-colors">
                            Can you handle international shipments to Canada/Mexico?
                            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            Absolutely. We have established partners for border crossings and manage the transloading or through-trailer service for shipments into Canada and Mexico.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="quote">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">Request Quote</h2>
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-400 mb-2">Your Name</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-slate-600" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Phone Number</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-slate-600" placeholder="555-555-5555" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Email</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-slate-600" placeholder="john.doe@example.com" type="email"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-400 mb-2">Load Description</label>
<textarea className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-slate-600" placeholder="Describe commodity, dimensions, or specific requirements..." rows="3"></textarea>
</div>
</div>
<div className="pt-2">
<button className="mt-8 bg-[#D4AF37] hover:bg-[#c5a059] text-slate-950 font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 w-full" type="button">
                                Submit Request
                            </button>
</div>
</form>
</div>
</div>
</section>
</main>

<main className="hidden pt-24 pb-20" id="project-view">

<div className="max-w-7xl mx-auto px-6 mb-8">
<button className="text-sm text-slate-500 hover:text-[#D4AF37] flex items-center gap-2 mb-6 transition-colors" onclick="showHome()">
<span className="iconify" data-icon="lucide:arrow-left"></span>
                Back to Projects
            </button>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-[#D4AF37] text-slate-950 tracking-wide">Heavy Equipment</span>
<span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-white/5 text-slate-300 border border-white/10 tracking-wide">Completed 2024</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">CAT 390F Excavator Relocation</h1>
<p className="text-lg text-slate-400">Complex interstate mining equipment transport requiring specialized 9-axle configuration.</p>
</div>
<div className="flex gap-3">
<button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:share-2"></span> Share
                    </button>
<a className="bg-[#D4AF37] hover:bg-[#c5a059] text-slate-950 text-sm font-bold px-5 py-2.5 rounded-lg transition-colors" href="#quote">
                        Quote Similar
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-12">

<div className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white">
<span className="iconify inline mr-1" data-icon="lucide:camera"></span> On-site in North Dakota
                    </div>
</div>

<div className="space-y-6">
<div>
<h3 className="text-2xl font-medium text-white mb-4">The Challenge</h3>
<p className="text-slate-400 leading-relaxed">
                            Our client needed to relocate a Caterpillar 390F hydraulic excavator from a holding yard in Houston, Texas, to an active mine site in North Dakota. The primary challenge was the machine's dimensions: 16'2" height when loaded and a gross weight of 196,500 lbs. This classified the move as a Superload in three of the four states along the route, triggering requirements for bridge engineering reviews and utility bucket truck escorts to lift power lines.
                        </p>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-4">The Solution</h3>
<p className="text-slate-400 leading-relaxed mb-4">
                            ROYAL utilized a specialized 9-axle Removable Gooseneck (RGN) trailer with a deck extension to distribute the weight appropriately across the bridge spans. Our route survey team identified a path that minimized utility obstructions, though two high-wire lifts were still required in Kansas.
                        </p>
<ul className="space-y-3 mt-6">
<li className="flex items-start gap-3 text-slate-400">
<span className="iconify text-[#D4AF37] mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<span>Coordinated with 4 state DOT permit offices for synchronized entry/exit times.</span>
</li>
<li className="flex items-start gap-3 text-slate-400">
<span className="iconify text-[#D4AF37] mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<span>Deployed 2 certified pilot cars and 1 height-pole escort vehicle.</span>
</li>
<li className="flex items-start gap-3 text-slate-400">
<span className="iconify text-[#D4AF37] mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<span>Completed delivery 2 days ahead of client schedule.</span>
</li>
</ul>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-white mb-6">Project Gallery</h3>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-xl border border-white/10 w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="rounded-xl border border-white/10 w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="rounded-xl border border-white/10 w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="rounded-xl border border-white/10 w-full h-48 bg-slate-900 flex flex-col items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
<span className="iconify text-3xl mb-2" data-icon="lucide:plus"></span>
<span className="text-xs font-medium uppercase tracking-wider">View All 12 Photos</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-8">

<div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sticky top-24">
<h4 className="text-white font-medium mb-6 flex items-center gap-2">
<span className="iconify text-[#D4AF37]" data-icon="lucide:clipboard-list"></span> Load Specifications
                    </h4>
<div className="space-y-5">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-slate-500">Total Weight</span>
<span className="text-sm text-white font-mono">196,500 lbs</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-slate-500">Loaded Height</span>
<span className="text-sm text-white font-mono">16' 2"</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-slate-500">Width</span>
<span className="text-sm text-white font-mono">14' 0"</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-slate-500">Length</span>
<span className="text-sm text-white font-mono">105' (Combo)</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-slate-500">Equipment</span>
<span className="text-sm text-white text-right">9-Axle RGN<br/><span className="text-xs text-slate-500">Western Star 4900</span></span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<h4 className="text-white font-medium mb-4 flex items-center gap-2">
<span className="iconify text-[#D4AF37]" data-icon="lucide:map"></span> Route Details
                        </h4>
<div className="relative pl-6 space-y-6 border-l border-white/10 ml-2">
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
<p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Origin</p>
<p className="text-white text-sm font-medium">Houston, TX</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-slate-800 border border-slate-600"></span>
<p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Transit</p>
<p className="text-white text-sm">Via OK, KS, SD</p>
<p className="text-xs text-slate-600 mt-1">1,420 Miles</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-white border border-white"></span>
<p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Destination</p>
<p className="text-white text-sm font-medium">Williston, ND</p>
</div>
</div>

<div className="mt-6 h-32 w-full bg-slate-800 rounded-lg relative overflow-hidden opacity-80">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<svg className="absolute inset-0 w-full h-full" style={{stroke: '#D4AF37', strokeWidth: '2', fill: 'none'}}>
<path d="M50,110 C80,80 120,60 200,20" stroke-dasharray="4"></path>
</svg>
<div className="absolute bottom-2 left-8 text-[10px] text-white font-bold bg-slate-900 px-1 rounded">TX</div>
<div className="absolute top-2 right-12 text-[10px] text-white font-bold bg-slate-900 px-1 rounded">ND</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-2xl p-6 text-center">
<div className="h-10 w-10 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-slate-950">
<span className="iconify" data-icon="lucide:phone-call"></span>
</div>
<h5 className="text-white font-medium mb-2">Have a similar load?</h5>
<p className="text-xs text-slate-400 mb-4">Our engineers are ready to plan your route.</p>
<a className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium py-2 rounded transition-colors" href="#quote">Contact Dispatch</a>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-[#D4AF37]" data-icon="lucide:crown" data-width="20"></span>
<span className="text-white font-semibold tracking-tight">ROYAL</span>
</div>
<p className="text-sm text-slate-500">
                        The gold standard in specialized heavy haul and open deck transport solutions across North America.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Oversize Loads</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Superloads</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Power Only</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Safety Record</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            Houston, TX
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            dispatch@royaltransport.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Royal Transport Inc. DOT #3849201</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-[#D4AF37] transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="text-slate-500 hover:text-[#D4AF37] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-slate-500 hover:text-[#D4AF37] transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
