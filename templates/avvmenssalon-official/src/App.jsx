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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#050B14]/80 backdrop-blur-md border-b border-grid transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex flex-col leading-none">
<span className="font-serif text-xl md:text-2xl text-white tracking-wide font-medium">AVV Men's Salon</span>
</div>

<div className="flex items-center gap-8">
<nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-[#C9A24D] transition-colors" href="#about">About</a>
<a className="hover:text-[#C9A24D] transition-colors" href="#services">Services</a>
<a className="hover:text-[#C9A24D] transition-colors" href="#pricing">Pricing</a>
</nav>
<a className="flex items-center gap-2 border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#050B14] px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300" href="tel:8123027785">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>Call Now</span>
</a>
</div>
</div>
</header>
<main>

<section className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="text-center max-w-4xl mx-auto mb-12">
<span className="text-[#C9A24D] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Refined Grooming Standards</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 font-medium">
<br/><span className="italic text-slate-300">AVV Men's Beauty Salon</span>
</h1>
<p className="text-slate-400 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-8">
                    Where precision meets luxury. We provide a sanctuary for those who appreciate exceptional care and master craftsmanship.
                </p>
<div className="flex justify-center gap-4">
<a className="bg-[#C9A24D] text-[#050B14] px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-2" href="tel:8123027785">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        Call Now
                    </a>
</div>
</div>

<div className="w-full max-w-6xl mx-auto aspect-[16/7] relative overflow-hidden border border-grid bg-[#0F172A]">

<img alt="AVV Men's Salon Premium Grooming" className="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'; document.getElementById('hero-fallback').style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19b9bf4f-5ae4-4ca8-82ba-a42ba4d223dc_800w.jpg"/>

<div className="absolute inset-0 hidden items-center justify-center flex-col text-center px-6" id="hero-fallback">
<iconify-icon className="text-slate-600 mb-3" height="52" icon="solar:gallery-wide-linear" width="52">
</iconify-icon>
<h1 className="text-[#F5F5F5] text-2xl md:text-3xl font-bold tracking-wide">
            AVV Men’s Salon
        </h1>
<p className="text-[#B3B3B3] mt-2 text-sm">
            Premium Grooming for the Modern Man
        </p>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent opacity-60"></div>
</div>
</section>

<section className="py-24 border-t border-grid bg-[#050B14]" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
<div className="lg:col-span-5">
<div className="w-16 h-0.5 bg-[#C9A24D] mb-8"></div>
<h2 className="text-3xl md:text-5xl text-white leading-tight mb-8">
                        Elevating the Standard of <span className="italic text-slate-400">Personal Care</span>
</h2>
</div>
<div className="lg:col-span-7 flex flex-col justify-between">
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p>
                            Established with a vision to redefine the men's salon experience, AVV Men's Salon bridges the gap between traditional barbering and modern styling. We believe that grooming is not just a routine, but a ritual of self-respect.
                        </p>
<p>
                            Our professionals are chosen not just for their technical skill, but for their dedication to hygiene and their ability to listen. We use premium, skin-friendly products to ensure your safety and comfort are never compromised.
                        </p>
</div>
<div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-grid">
<div>
<div className="text-4xl md:text-5xl font-serif text-white mb-2">20<span className="text-[#C9A24D] text-2xl align-top">+</span></div>
<div className="text-[10px] uppercase tracking-widest text-slate-500">Years of Professional Experience</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-serif text-white mb-2">10L<span className="text-[#C9A24D] text-2xl align-top">+</span></div>
<div className="text-[10px] uppercase tracking-widest text-slate-500">Happy Clients Served</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080F1F]" id="services">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl text-white mb-3">Curated Services</h2>
<p className="text-slate-500 text-xs tracking-widest uppercase mb-4">Designed for the Modern Man</p>

<p className="text-[#C9A24D] text-sm font-medium tracking-wide">Bridal and Groom Packages Available.</p>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/20 border border-grid">

<div className="bg-[#050B14] p-10 group min-h-[400px] flex flex-col">
<div className="w-full h-48 mb-8 relative overflow-hidden border border-slate-700 bg-[#0F172A]">

<img alt="Professional Haircut" className="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f489033-4107-4507-9e6b-9a03894b302f_800w.jpg"/>

<div className="absolute inset-0 hidden flex-col items-center justify-center text-center">
<iconify-icon className="text-slate-600 mb-2" height="36" icon="solar:scissors-linear" width="36"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<h3 className="text-xl text-white mb-3 font-medium group-hover:text-[#C9A24D] transition-colors">Precision Haircuts</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Consultation followed by a tailored cut that suits your face shape and lifestyle. Finished with a wash and style.
                    </p>
</div>

<div className="bg-[#050B14] p-10 group min-h-[400px] flex flex-col">
<div className="w-full h-48 mb-8 relative overflow-hidden border border-slate-700 bg-[#0F172A]">

<img alt="Beard Grooming" className="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afcbdc91-83d7-4381-ac60-5e6342194c51_800w.jpg"/>

<div className="absolute inset-0 hidden flex-col items-center justify-center text-center">
<iconify-icon className="text-slate-600 mb-2" height="36" icon="solar:user-linear" width="36"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<h3 className="text-xl text-white mb-3 font-medium group-hover:text-[#C9A24D] transition-colors">Beard Sculpting</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Expert trimming and shaping to define your jawline, accompanied by premium oils for a soft finish.
                    </p>
</div>

<div className="bg-[#050B14] p-10 group min-h-[400px] flex flex-col">
<div className="w-full h-48 mb-8 relative overflow-hidden border border-slate-700 bg-[#0F172A]">

<img alt="Facial Service" className="w-full h-full object-cover absolute inset-0" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a28d872-d6a7-4d22-afc8-19c3d99aad56_800w.jpg"/>

<div className="absolute inset-0 hidden flex-col items-center justify-center">
<iconify-icon className="text-slate-600 mb-2" height="32" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<h3 className="text-xl text-white mb-3 font-medium group-hover:text-[#C9A24D] transition-colors">Advanced Facials</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Deep cleansing and rejuvenating treatments using premium organic products to restore skin vitality.
                    </p>
</div>

<div className="bg-[#050B14] p-10 group min-h-[400px] flex flex-col">
<div className="w-full h-48 mb-8 relative overflow-hidden border border-slate-700 bg-[#0F172A]">

<img alt="Hair Spa Service" className="w-full h-full object-cover absolute inset-0" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c1a7280-9126-4230-8988-73341e53023c_800w.jpg"/>

<div className="absolute inset-0 hidden flex-col items-center justify-center">
<iconify-icon className="text-slate-600 mb-2" height="32" icon="solar:drop-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<h3 className="text-xl text-white mb-3 font-medium group-hover:text-[#C9A24D] transition-colors">Hair Spa &amp; Treatment</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Intensive repair therapies for damaged hair, dandruff control, and scalp health enhancement.
                    </p>
</div>

<div className="bg-[#050B14] p-10 group min-h-[400px] flex flex-col">
<div className="w-full h-48 mb-8 relative overflow-hidden border border-slate-700 bg-[#0F172A]">

<img alt="Hair Styling Service" className="w-full h-full object-cover absolute inset-0" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bdcdd5a-81a4-46dc-a59a-342421adc53f_800w.jpg"/>

<div className="absolute inset-0 hidden flex-col items-center justify-center">
<iconify-icon className="text-slate-600 mb-2" height="32" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<h3 className="text-xl text-white mb-3 font-medium group-hover:text-[#C9A24D] transition-colors">Color Studio</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Ammonia-free global coloring, highlights, and root touch-ups by certified colorists.
                    </p>
</div>

<div className="bg-[#050B14] p-10 group min-h-[400px] flex flex-col">

<div className="w-full h-48 mb-8 relative overflow-hidden border border-slate-700 bg-[#0F172A]">

<img alt="Salon Interior" className="w-full h-full object-cover absolute inset-0 opacity-40 grayscale" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19b9bf4f-5ae4-4ca8-82ba-a42ba4d223dc_800w.jpg"/>
<div className="absolute inset-0 hidden flex-col items-center justify-center">
<iconify-icon className="text-slate-600 mb-2" height="32" icon="solar:clipboard-list-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
<iconify-icon className="text-white/50 group-hover:text-[#C9A24D]" height="40" icon="solar:arrow-right-up-linear" width="40"></iconify-icon>
</div>
</div>
<h3 className="text-xl text-white mb-3 font-medium group-hover:text-[#C9A24D] transition-colors">Explore Full Menu</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                        Discover our comprehensive range of services and competitive pricing.
                    </p>
<a className="inline-flex items-center text-[#C9A24D] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" href="#pricing">
                        Check Prices <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050B14]" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl text-white mb-4">Transparent Pricing</h2>
<p className="text-slate-500 text-xs tracking-widest uppercase">No Hidden Charges. Taxes Inclusive.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">

<div className="space-y-8">
<h3 className="text-[#C9A24D] text-xs font-bold tracking-widest uppercase mb-6">Hair Services</h3>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Hair Cut</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹149</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Beard Trim / Shave</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹99</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Head Massage</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹199</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Hair Wash &amp; Styling</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹99</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Keratin Mask + Steam</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹599</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Hair Straightening</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹1499</span>
</div>
</div>

<div className="space-y-8">
<h3 className="text-[#C9A24D] text-xs font-bold tracking-widest uppercase mb-6">Skin &amp; Wellness</h3>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">D-Tan</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹499</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Facial</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹999</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Hair Spa</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹999</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Pedicure</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹699</span>
</div>
<div className="group flex items-end justify-between">
<span className="text-slate-300 font-medium text-sm bg-[#050B14] z-10 pr-2">Manicure</span>
<div className="flex-grow border-b border-slate-800 border-dotted mb-1 mx-1 relative -top-1"></div>
<span className="text-white font-semibold text-sm pl-2">₹499</span>
</div>
</div>
</div>

<div className="mt-24">
<h3 className="text-white text-center text-xl font-serif mb-12">Value Packages</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-slate-800 p-8 hover:border-[#C9A24D]/50 transition-colors bg-[#080F1F]">
<div className="flex justify-between items-start mb-2">
<h4 className="text-white font-medium">Combo 1</h4>
<span className="text-[#C9A24D] font-bold text-lg">₹250</span>
</div>
<p className="text-slate-500 text-sm">Hair Cut + Beard</p>
</div>

<div className="border border-slate-800 p-8 hover:border-[#C9A24D]/50 transition-colors bg-[#080F1F] relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A24D]/10 rounded-bl-full"></div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-white font-medium">Combo 2</h4>
<span className="text-[#C9A24D] font-bold text-lg">₹899</span>
</div>
<p className="text-slate-500 text-sm">Hair Cut + Beard + D-Tan + Head Massage</p>
</div>

<div className="border border-slate-800 p-8 hover:border-[#C9A24D]/50 transition-colors bg-[#080F1F]">
<div className="flex justify-between items-start mb-2">
<h4 className="text-white font-medium">Combo 3</h4>
<span className="text-[#C9A24D] font-bold text-lg">₹1499</span>
</div>
<p className="text-slate-500 text-sm">Hair Cut + Beard + D-Tan + Facial + Head Massage</p>
</div>

<div className="border border-[#C9A24D]/30 p-8 bg-[#080F1F] relative">
<div className="absolute -top-3 left-8 bg-[#050B14] px-2 text-[10px] text-[#C9A24D] uppercase tracking-widest border border-[#C9A24D]/30">Bestseller</div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-white font-medium">Combo 4</h4>
<span className="text-[#C9A24D] font-bold text-lg">₹1999</span>
</div>
<p className="text-slate-500 text-sm">Hair Cut + Beard + D-Tan + Facial + Hair Spa</p>
</div>

<div className="border border-slate-800 p-8 hover:border-[#C9A24D]/50 transition-colors bg-[#080F1F] relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A24D]/10 rounded-bl-full"></div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-white font-medium">Combo 5</h4>
<span className="text-[#C9A24D] font-bold text-lg">₹2499</span>
</div>
<p className="text-slate-500 text-sm">Hair Cut + Beard + Advance D-Tan + Advance Facial + Hydrating Hair Spa</p>
</div>

<div className="border border-slate-800 p-8 hover:border-[#C9A24D]/50 transition-colors bg-[#080F1F] relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A24D]/10 rounded-bl-full"></div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-white font-medium">Combo 6</h4>
<span className="text-[#C9A24D] font-bold text-lg">₹3999</span>
</div>
<p className="text-slate-500 text-sm">Hair Cut + Beard + Premium D-Tan + Premium Facial + Hydrating Hair Spa + Pedicure/Manicure</p>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-slate-600 text-[10px] italic">* Prices may vary based on hair length and stylist seniority.</p>
</div>
</div>
</section>

<section className="py-20 border-t border-grid bg-[#050B14]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div>
<div className="mb-6 flex justify-center">
<iconify-icon className="text-[#C9A24D]" height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Uncompromised Hygiene</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">We adhere to medical-grade sterilization protocols. Your safety is the foundation of our service.</p>
</div>
<div>
<div className="mb-6 flex justify-center">
<iconify-icon className="text-[#C9A24D]" height="32" icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Master Stylists</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">Our team undergoes regular training to stay ahead of global trends while mastering classic techniques.</p>
</div>
<div>
<div className="mb-6 flex justify-center">
<iconify-icon className="text-[#C9A24D]" height="32" icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Respect for Time</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">We value your schedule. Appointments start on time, every time, ensuring a stress-free experience.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#080F1F] border-t border-grid text-center">
<h2 className="text-3xl md:text-5xl text-white mb-6 font-serif">Ready for an Upgrade?</h2>
<p className="text-slate-400 font-light mb-10 max-w-2xl mx-auto">Experience the difference of a true premium salon. Walk-ins welcome, appointments recommended.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="min-w-[160px] bg-[#C9A24D] text-[#050B14] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2" href="tel:8123027785">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    Call Salon
                </a>
<a className="min-w-[160px] border border-slate-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#C9A24D] hover:text-[#C9A24D] transition-colors flex items-center justify-center gap-2" href="https://wa.me/918123027785">
<iconify-icon height="16" icon="ri:whatsapp-line" width="16"></iconify-icon>
                    WhatsApp
                </a>
</div>
</section>
</main>

<footer className="bg-[#020617] pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<h4 className="text-white font-serif text-xl mb-6">AVV Men's Salon</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                    A premium men's salon dedicated to precision, hygiene, and the art of grooming.
                </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-[#C9A24D] transition-colors" href="https://www.instagram.com/avv_menssalon/" target="_blank">
<iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-[#C9A24D] transition-colors" href="mailto:som.vijay.9654@gmail.com">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-6">Contact</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9A24D] mt-1" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>39/1 3rd Cross, 6th Main Road,Appareddy Palya, Indiranagar,Bangalore – 38</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C9A24D]" height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:8123027785">8123027785</a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-6">Hours</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex justify-between"><span>Monday - </span> <span>8:00 AM - 11:00 PM</span></li>
<li className="flex justify-between"><span>Tuesday - </span> <span>9:00 AM - 10:00 PM</span></li>
<li className="flex justify-between"><span>Wednesday - </span> <span>8:00 AM - 11:00 PM</span></li>
<li className="flex justify-between"><span>Thursday - </span> <span>8:00 AM - 11:00 PM</span></li>
<li className="flex justify-between"><span>Friday - </span> <span>8:00 AM - 11:00 PM</span></li>
<li className="flex justify-between"><span>Saturday - </span> <span>8:00 AM - 11:00 PM</span></li>
<li className="flex justify-between"><span>Sunday - </span> <span>8:00 AM - 11:00 PM</span></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-6">Location</h5>
<a className="block w-full h-32 bg-slate-900 border border-slate-800 flex items-center justify-center group hover:border-[#C9A24D] transition-colors" href="https://share.google/MywHj0X6a23hEoaH3" target="_blank">
<div className="text-center">
<iconify-icon className="text-slate-600 mb-2 group-hover:text-[#C9A24D] mx-auto" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-[10px] text-slate-500 uppercase tracking-widest block">Open Maps</span>
</div>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-600 text-[10px]">© 2024 AVV Men's Salon. All rights reserved.</div>
<div className="flex gap-6 text-[10px] text-slate-600">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
