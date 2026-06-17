import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const openIcon = document.getElementById('open-icon');
        const closeIcon = document.getElementById('close-icon');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('hidden-menu');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden-menu');
                mobileMenu.classList.add('visible-menu');
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('visible-menu');
                mobileMenu.classList.add('hidden-menu');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-[#1E404A] text-white text-[11px] font-medium tracking-wide py-2.5 px-4 text-center">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-[#A1A438]" icon="solar:heart-pulse-bold"></iconify-icon>
            February is AMERICAN HEART HEALTH MONTH - Learn More About Cardiovascular Support
        </span>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-xl bg-[#0E9EC1] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:dropper-bold" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[#1E404A] font-bold text-lg leading-none tracking-tight">THE DRIPBaR</span>
<span className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase">Cranford, NJ</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#0E9EC1] transition-colors" href="#drips">IV Drips</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#0E9EC1] transition-colors" href="#health">Health Support</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#0E9EC1] transition-colors" href="#wellness">Wellness Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#0E9EC1] transition-colors" href="#membership">Memberships</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 text-[#1E404A] font-semibold text-sm hover:opacity-75" href="tel:9083150117">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        (908) 315-0117
                    </a>
<a className="bg-[#0E9EC1] hover:bg-[#1E404A] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8" target="_blank">
                        Book Appointment
                        <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden p-2 text-[#1E404A] hover:bg-slate-100 rounded-lg transition-colors z-50 relative" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="open-icon" width="24"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="close-icon" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="hidden-menu fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-semibold text-[#1E404A]" href="#drips">IV Drips</a>
<a className="mobile-link text-xl font-semibold text-[#1E404A]" href="#health">Health Support</a>
<a className="mobile-link text-xl font-semibold text-[#1E404A]" href="#wellness">Wellness Services</a>
<a className="mobile-link text-xl font-semibold text-[#1E404A]" href="#membership">Memberships</a>
<hr className="border-slate-200"/>
<a className="text-lg font-medium text-[#0E9EC1] flex items-center justify-center gap-2" href="tel:9083150117">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon> (908) 315-0117
            </a>
<a className="bg-[#0E9EC1] text-white py-4 rounded-xl text-lg font-semibold shadow-xl" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8" target="_blank">
                Book Now
            </a>
</div>
</div>

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1E404A]">

<div className="absolute inset-0 z-0">
<img alt="IV Therapy Infusion" className="w-full h-full object-cover object-center opacity-40" src="https://cranford-nj.thedripbar.com/wp-content/uploads/sites/24/2025/12/iv-therapy-closeup-infusion-1.avif"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E404A] via-[#1E404A]/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-12">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-medium uppercase tracking-widest mb-6">
<span className="w-2 h-2 rounded-full bg-[#A1A438]"></span>
                    Cellular Health &amp; Wellness
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                    Feed your Cells.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E9EC1] to-[#A1A438]">Fuel your Life.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
                    Experience premier IV vitamin therapy in Cranford. Our licensed nurses administer medical-grade infusions tailored to restore your energy, immunity, and mental clarity in a modern, spa-like environment.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#0E9EC1] hover:bg-[#0b86a3] text-white px-8 py-4 rounded-full font-semibold text-center transition-all shadow-[0_0_20px_rgba(14,158,193,0.3)] hover:shadow-[0_0_30px_rgba(14,158,193,0.5)] active:scale-95" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8" target="_blank">
                        Book Appointment
                    </a>
<a className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-center backdrop-blur-sm flex items-center justify-center gap-2" href="tel:9083150117">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        (908) 315-0117
                    </a>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A438]">
<iconify-icon icon="solar:user-hand-up-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-bold">Licensed Nurses</p>
<p className="text-slate-400 text-xs">Medical staff on-site</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A438]">
<iconify-icon icon="solar:test-tube-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-bold">797 Compliance</p>
<p className="text-slate-400 text-xs">Medical grade ingredients</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A438]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-bold">5.0 Star Rating</p>
<p className="text-slate-400 text-xs">Based on 43 reviews</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A438]">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-bold">Cranford, NJ</p>
<p className="text-slate-400 text-xs">102A North Union Ave</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="drips">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#0E9EC1] font-bold tracking-widest text-xs uppercase mb-2 block">Our Menu</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#1E404A] mb-4">IV Lifestyle Drips</h2>
<p className="text-slate-500">Formulated to support your daily life, from energy boosts to immune defense.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-[#0E9EC1]/20">
<div className="w-12 h-12 bg-[#0E9EC1]/10 text-[#0E9EC1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1E404A] mb-2">Powerpack</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Boost energy and support recovery with Vitamin C, Magnesium, and B vitamins. Perfect for stamina and mental clarity.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-bold text-[#1E404A]">$199</span>
<a className="text-[#0E9EC1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8">Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-[#0E9EC1]/20">
<div className="w-12 h-12 bg-[#A1A438]/10 text-[#A1A438] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1E404A] mb-2">Allstar</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Comprehensive recovery and energy blend. Contains Vitamin C, Magnesium, L-Arginine, B12, and more.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-bold text-[#1E404A]">$199</span>
<a className="text-[#0E9EC1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8">Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-[#0E9EC1]/20">
<div className="w-12 h-12 bg-[#0E9EC1]/10 text-[#0E9EC1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:refresh-circle-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1E404A] mb-2">Restoration</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Hydration and essential nutrients to support energy and immune health. Reduces fatigue and improves clarity.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-bold text-[#1E404A]">$199</span>
<a className="text-[#0E9EC1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8">Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-[#0E9EC1]/20">
<div className="w-12 h-12 bg-[#1E404A]/10 text-[#1E404A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hourglass-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1E404A] mb-2">Time Machine</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Anti-aging support with high dose antioxidants to combat oxidative stress and promote cellular repair.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-bold text-[#1E404A]">$199</span>
<a className="text-[#0E9EC1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8">Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-[#0E9EC1]/20">
<div className="w-12 h-12 bg-[#A1A438]/10 text-[#A1A438] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1E404A] mb-2">Metabolize</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Supports metabolism and energy levels. Ideal for active lifestyles and weight management support.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-bold text-[#1E404A]">$199</span>
<a className="text-[#0E9EC1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8">Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-[#0E9EC1]/20">
<div className="w-12 h-12 bg-[#0E9EC1]/10 text-[#0E9EC1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:moon-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1E404A] mb-2">Soother</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Magnesium, Calcium, and Taurine blend to support relaxation, muscle comfort, and restful sleep.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-bold text-[#1E404A]">$199</span>
<a className="text-[#0E9EC1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8">Book <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="health">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0E9EC1] rounded-full blur-3xl"></div>
<div className="absolute top-1/2 right-0 w-64 h-64 bg-[#A1A438] rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-3xl font-bold text-[#1E404A] mb-6">IV Health Support Drips</h2>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Advanced formulations with added guidance for specific wellness needs. These targeted therapies may require a brief consultation to ensure safety.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A1A438] mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-700"><strong className="text-[#1E404A]">High Dose Vitamin C:</strong> Powerful immune system support.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A1A438] mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-700"><strong className="text-[#1E404A]">NAD+:</strong> Supports mitochondrial function and cognitive clarity.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A1A438] mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-700"><strong className="text-[#1E404A]">Alpha Lipoic Acid:</strong> Potent antioxidant for metabolic balance.</span>
</li>
</ul>
</div>
<div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
<img alt="Nurse Preparing IV" className="w-full h-full object-cover" src="https://cranford-nj.thedripbar.com/wp-content/uploads/sites/24/2025/12/nurse-preparing-iv-infusion-1.avif"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E404A]/80 to-transparent flex items-end p-8">
<div className="text-white">
<p className="font-bold text-lg">Clinical Excellence</p>
<p className="text-sm opacity-90">Every drip is mixed in a sterile hood.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
<div className="text-center mb-10">
<h2 className="text-2xl font-bold text-[#1E404A] mb-2">IM Quick Shots</h2>
<p className="text-slate-500">Fast, effective nutrient boosts in minutes.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-[#0E9EC1] mb-3">B12</div>
<span className="font-semibold text-[#1E404A]">Energy</span>
</div>
<div className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-[#0E9EC1] mb-3">D3</div>
<span className="font-semibold text-[#1E404A]">Immunity</span>
</div>
<div className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-[#0E9EC1] mb-3">Glutathione</div>
<span className="font-semibold text-[#1E404A]">Detox</span>
</div>
<div className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-[#0E9EC1] mb-3">Biotin</div>
<span className="font-semibold text-[#1E404A]">Beauty</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="wellness">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-[#1E404A] mb-4">Wellness Services</h2>
<p className="text-slate-500 max-w-xl">Beyond IV therapy, we offer cutting-edge treatments to enhance your recovery and results.</p>
</div>
<a className="text-[#0E9EC1] font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="https://thedripbar.zenoti.com/webstoreNew/services/816ff5c2-0343-4e52-920c-42453d6110f8" target="_blank">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group rounded-2xl overflow-hidden h-80">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cranford-nj.thedripbar.com/wp-content/uploads/sites/24/2025/12/cranford-private-sauna-room-1.avif"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<h3 className="text-xl font-bold text-white mb-1">Red Light Therapy</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Promotes cellular repair and reduces inflammation.</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden h-80">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cranford-nj.thedripbar.com/wp-content/uploads/sites/24/2025/12/halotherapy-salt-aerosol-1.avif"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<h3 className="text-xl font-bold text-white mb-1">Halotherapy</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Salt therapy for respiratory support and skin health.</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden h-80">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cranford-nj.thedripbar.com/wp-content/uploads/sites/24/2025/12/normatec-compression-boots-relaxation-1.avif"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<h3 className="text-xl font-bold text-white mb-1">Compression Boots</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Enhance circulation and speed up muscle recovery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1E404A] text-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-bold mb-4">Visit Our Lounge</h2>
<p className="text-slate-300">Relax in our modern, spa-like environment while you receive your treatment.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0E9EC1] mt-1 text-xl" icon="solar:map-point-bold"></iconify-icon>
<div>
<h4 className="font-bold">Address</h4>
<a className="text-slate-300 hover:text-white transition-colors" href="https://maps.app.goo.gl/vY7vdjTqTeX5wEAr9" target="_blank">
                                    102A North Union Ave<br/>Cranford, NJ 07016
                                </a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0E9EC1] mt-1 text-xl" icon="solar:phone-calling-bold"></iconify-icon>
<div>
<h4 className="font-bold">Phone</h4>
<a className="text-slate-300 hover:text-white transition-colors" href="tel:9083150117">(908) 315-0117</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0E9EC1] mt-1 text-xl" icon="solar:clock-circle-bold"></iconify-icon>
<div>
<h4 className="font-bold">Hours</h4>
<ul className="text-slate-300 text-sm space-y-1 mt-1">
<li className="flex justify-between w-48"><span>Mon:</span> <span>Closed</span></li>
<li className="flex justify-between w-48"><span>Tue - Thu:</span> <span>10am - 7pm</span></li>
<li className="flex justify-between w-48"><span>Fri:</span> <span>10am - 5pm</span></li>
<li className="flex justify-between w-48"><span>Sat - Sun:</span> <span>10am - 3pm</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
<h3 className="text-2xl font-bold text-[#1E404A] mb-6">Request Appointment</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('This is a demo form. In a real implementation, this would connect to your email automation system.');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">First Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-[#0E9EC1] focus:ring-[#0E9EC1]" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Last Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-[#0E9EC1] focus:ring-[#0E9EC1]" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Email</label>
<input className="w-full rounded-lg border-slate-200 focus:border-[#0E9EC1] focus:ring-[#0E9EC1]" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Phone</label>
<input className="w-full rounded-lg border-slate-200 focus:border-[#0E9EC1] focus:ring-[#0E9EC1]" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Service Interest</label>
<select className="w-full rounded-lg border-slate-200 focus:border-[#0E9EC1] focus:ring-[#0E9EC1]">
<option>IV Lifestyle Drip</option>
<option>IV Health Support</option>
<option>IM Shot</option>
<option>Wellness Service</option>
<option>Membership Inquiry</option>
</select>
</div>
<button className="w-full bg-[#0E9EC1] hover:bg-[#1E404A] text-white font-bold py-3 rounded-xl transition-colors mt-2" type="submit">
                            Submit Request
                        </button>
<p className="text-xs text-center text-slate-400 mt-2">Our team will contact you shortly to confirm.</p>
</form>


</div>
</div>
</div>
</section>

<footer className="bg-[#152e36] text-slate-400 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg bg-[#0E9EC1] flex items-center justify-center text-white">
<iconify-icon icon="solar:dropper-bold"></iconify-icon>
</div>
<span className="text-white font-bold text-xl">THE DRIPBaR</span>
</div>
<p className="text-sm max-w-sm mb-6">
                        At The DRIPBaR Cranford, your well-being is our top priority. Our Medical Director, Augustine Nguyen, leads our care team with expert guidance.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/thedripbarcranford/" target="_blank"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/thedripbarcranford/" target="_blank"><iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#drips">Services</a></li>
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#membership">Memberships</a></li>
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-[#0E9EC1] transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2026 The DRIPBaR Cranford. All Rights Reserved.</p>
<p className="mt-2 md:mt-0">Medical Director: Augustine Nguyen (License No: 25MA09559300)</p>
</div>
</div>
</footer>



    </>
  );
}
