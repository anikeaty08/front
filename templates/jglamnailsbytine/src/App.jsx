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



tailwind.config = {
theme: {
extend: {
colors: {
nude: {
50: '#FDFCFB',
100: '#FAF5F2', // Main BG
200: '#F4EAE6', // Card BG
300: '#E8D5CD',
},
burgundy: {
800: '#4A1D2F', // Primary Text
900: '#2A0F1A', // Darker Text
},
accent: {
500: '#9D3456', // Button/Highlight
600: '#7D2944',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });

        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) { 
                nav.classList.add('shadow-md'); 
                nav.classList.replace('bg-nude-100/90', 'bg-white/95'); 
            } else { 
                nav.classList.remove('shadow-md'); 
                nav.classList.replace('bg-white/95', 'bg-nude-100/90'); 
            }
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
      

<div className="border-burgundy-800/10 bg-nude-200 w-full border-b py-2.5 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-wide uppercase font-medium opacity-70 gap-2 md:gap-0">
<span className="flex items-center gap-2">
<iconify-icon height="14" icon="solar:medal-ribbon-linear" width="14"></iconify-icon>
                DTI &amp; BIR Registered
            </span>
<div className="flex gap-4 md:gap-6 flex-wrap justify-center">
<span className="flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:map-point-linear" width="14"></iconify-icon> 
                    Blk 74 Lot 9 CIM St, Upper Bicutan
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="" height="14" icon="solar:phone-calling-linear" width="14"></iconify-icon> 
                    0951 122 4465
                </span>
</div>
</div>
</div>

<nav className="sticky transition-all duration-300 w-full z-50 border-b border-burgundy-800/5 py-4 px-6 top-0 backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-serif text-xl md:text-2xl font-semibold tracking-tight uppercase">J Glam <span className="text-accent-500 text-base font-normal normal-case italic">Nails by Tine</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-burgundy-800/80 tracking-wide gap-x-8 gap-y-8 items-center">
<a className="hover:text-accent-500 transition-colors" href="#philosophy">Why Us</a>
<a className="hover:text-accent-500 transition-colors" href="#services">Pricing</a>
<a className="hover:text-accent-500 transition-colors" href="#gallery">Real Results</a>
<a className="hover:text-accent-500 transition-colors" href="#reviews">Reviews</a>
</div>
<button className="bg-accent-500 hover:bg-burgundy-800 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent-500/20 group" onclick="document.getElementById('services').scrollIntoView()">
                Book Now 
                <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-16 pb-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="text-left reveal-element z-10 in-view">

<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-burgundy-900/5 border border-burgundy-900/10 rounded-full text-burgundy-900 text-[10px] uppercase tracking-widest font-semibold mb-6">
<iconify-icon className="text-accent-500" height="14" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
                    Soft Gel • Press Ons • Gel Polish
                </div>
<h1 className="font-serif text-6xl md:text-8xl leading-[1.05] tracking-tight mb-6 text-burgundy-900">
                    Wear Your <br/>
<span className="text-accent-500 italic font-light">Confidence.</span>
</h1>
<p className="text-burgundy-800/70 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                    It’s not just about the color. It’s about how you feel when you walk out. From custom-fit <span className="font-semibold text-burgundy-900">Press Ons</span> to durable <span className="font-semibold text-burgundy-900">Soft Gel Extensions</span>, we craft nails that empower you.
                </p>

<div className="flex items-center gap-4 mb-8">
<div className="h-px w-8 bg-accent-500/50"></div>
<p className="font-serif italic text-accent-600 text-lg">Lasts up to 3-6 weeks.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-burgundy-800 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent-500 transition-colors duration-300 shadow-xl flex items-center justify-center gap-2" onclick="document.getElementById('services').scrollIntoView()">
                        View Price List
                        <iconify-icon height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</button>

<div className="flex items-center justify-center gap-2 px-6 py-3 border border-burgundy-200 bg-white/50 rounded-full text-xs uppercase tracking-wider font-semibold text-burgundy-900">
<iconify-icon height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
                        Strictly By Appointment
                    </div>
</div>
</div>
<div className="relative reveal-element delay-200 in-view">
<div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden relative z-10 shadow-2xl group">
<img alt="Elegant Soft Gel Nails" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0363d6d8-eae3-472b-b9d3-6d2baad4810b_1600w.jpg"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-[240px] border border-nude-300">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-accent-500" height="20" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-bold">The Promise</span>
</div>
<p className="font-serif italic text-burgundy-900 text-sm leading-snug">"Strong, beautiful nails that handle your daily grind without breaking."</p>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</header>

<section className="bg-white border-nude-200 border-b pt-20 pr-6 pb-20 pl-6" id="trust">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

<div className="reveal-element flex flex-col items-center md:items-start text-center md:text-left in-view">
<div className="w-12 h-12 rounded-full bg-nude-100 flex items-center justify-center mb-4 text-accent-500 border border-nude-200">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-burgundy-900 font-medium mb-2">Sanitized Tools</h3>
<p className="text-sm text-burgundy-800/60 leading-relaxed">Medical-grade sterilization for every client. Your health is non-negotiable.</p>
</div>

<div className="reveal-element delay-100 flex flex-col items-center md:items-start text-center md:text-left in-view">
<div className="w-12 h-12 rounded-full bg-nude-100 flex items-center justify-center mb-4 text-accent-500 border border-nude-200">
<iconify-icon className="" height="24" icon="solar:cosmetic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-burgundy-900 font-medium mb-2">Imported Gels</h3>
<p className="text-sm text-burgundy-800/60 leading-relaxed">We use only premium, non-toxic polishes that protect your natural nail bed.</p>
</div>

<div className="reveal-element delay-200 flex flex-col items-center md:items-start text-center md:text-left in-view">
<div className="w-12 h-12 rounded-full bg-nude-100 flex items-center justify-center mb-4 text-accent-500 border border-nude-200">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-burgundy-900 font-medium mb-2">1 Year Service</h3>
<p className="text-sm text-burgundy-800/60 leading-relaxed">Dedicated to mastering the craft and serving Taguig since 2023.</p>
</div>

<div className="reveal-element delay-300 flex flex-col items-center md:items-start text-center md:text-left in-view">
<div className="w-12 h-12 rounded-full bg-nude-100 flex items-center justify-center mb-4 text-accent-500 border border-nude-200">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-burgundy-900 font-medium mb-2">30+ Loyal Clients</h3>
<p className="text-sm text-burgundy-800/60 leading-relaxed">A growing community of women who trust only J Glam for their nails.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-100" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-element in-view">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4 text-burgundy-900">You Deserve <span className="italic text-accent-500">Better Nails</span></h2>
<p className="text-burgundy-800/60 max-w-lg mx-auto">We've heard your horror stories. We're here to fix them.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

<div className="bg-white p-8 md:p-12 rounded-2xl reveal-element delay-100 border border-nude-200 shadow-sm relative overflow-hidden in-view">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80')] bg-cover bg-center opacity-10 grayscale"></div>
<div className="relative z-10">
<h3 className="font-serif text-2xl mb-6 text-burgundy-900">The Usual Struggle</h3>
<p className="text-sm text-burgundy-800/60 mb-8">Does this sound familiar? You pay full price, but...</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-400 mt-1">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-burgundy-900">They lift immediately.</h4>
<p className="text-xs text-burgundy-800/50 mt-1">Polish that peels off or extensions that pop off after just a few days of wear.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-400 mt-1">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-burgundy-900">Bulky &amp; Unnatural.</h4>
<p className="text-xs text-burgundy-800/50 mt-1">Thick, heavy applications that look wide, fake, and feel uncomfortable on your fingers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-400 mt-1">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-burgundy-900">Damaged Natural Nails.</h4>
<p className="text-xs text-burgundy-800/50 mt-1">Painful "rings of fire" from over-filing and aggressive removal techniques.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="reveal-element delay-200 pl-0 md:pl-4 in-view">
<h3 className="font-serif text-3xl mb-6 text-burgundy-900">The J Glam Standard</h3>
<p className="text-burgundy-800 mb-8 text-lg leading-relaxed">
                        We don't rush art. We take <span className="font-semibold text-accent-500">2-3 hours per client</span> because precise prep work is the secret to retention.
                    </p>
<div className="space-y-8">

<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-accent-500/20">
<iconify-icon className="" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-serif text-xl text-burgundy-900 mb-2">3-Day Service Warranty</h4>
<p className="text-sm text-burgundy-800/70">Chips or breaks within 3 days? We fix it for free. That's how confident we are.</p>
</div>
</div>

<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-nude-200 text-burgundy-900 flex items-center justify-center shrink-0 border border-nude-300">
<iconify-icon className="" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-serif text-xl text-burgundy-900 mb-2">Meticulous Prep</h4>
<p className="text-sm text-burgundy-800/70">We spend 45 minutes just on cleaning your cuticles and prepping the nail plate for maximum adhesion.</p>
</div>
</div>

<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-nude-200 text-burgundy-900 flex items-center justify-center shrink-0 border border-nude-300">
<iconify-icon height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-serif text-xl text-burgundy-900 mb-2">Customized Experience</h4>
<p className="text-sm text-burgundy-800/70">Netflix, chill, and relax. No rushing, just pampering.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-burgundy-900 text-nude-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50 mb-2 block">Booking Policy</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight">Reservation Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-white/10 border-t border-dashed border-white/20 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center reveal-element">
<div className="w-24 h-24 rounded-full bg-burgundy-800 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<span className="font-serif text-3xl italic">1</span>
</div>
<h3 className="text-lg font-semibold mb-2">Send Inspo</h3>
<p className="text-sm opacity-60 max-w-[200px]">Send your nail inspiration first for a price quotation.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-element delay-100">
<div className="w-24 h-24 rounded-full bg-accent-600 border border-white/10 flex items-center justify-center mb-6 shadow-xl ring-4 ring-accent-500/20">
<iconify-icon height="32" icon="solar:calendar-mark-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Set Schedule</h3>
<p className="text-sm opacity-60 max-w-[200px]">Send your preferred time and date for appointment.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-element delay-200">
<div className="w-24 h-24 rounded-full bg-burgundy-800 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<span className="font-serif text-3xl italic">3</span>
</div>
<h3 className="text-lg font-semibold mb-2">Secure Slot</h3>
<p className="text-sm opacity-60 max-w-[200px]">Pay ₱200 reservation fee (Not Refundable) to confirm.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/40 relative" id="services">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500 mb-2 block">Transparency First</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-burgundy-900">The Price List</h2>
<p className="mt-4 text-burgundy-800/60">Estimates only. Send inspo for final quote.</p>
</div>
<div className="grid gap-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-element delay-100">

<div className="bg-white p-8 rounded-xl shadow-sm border border-burgundy-800/5">
<h3 className="font-serif text-xl mb-6 flex items-center gap-2">
<iconify-icon className="text-burgundy-800" height="20" icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
                            Gel Polish Manicure
                        </h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-dashed border-burgundy-800/10 pb-2">
<span className="text-sm font-medium text-burgundy-900">Plain Gel Polish</span>
<span className="font-serif text-lg text-accent-500 font-medium">₱199</span>
</li>
<li className="flex justify-between items-baseline border-b border-dashed border-burgundy-800/10 pb-2">
<span className="text-sm font-medium text-burgundy-900">W/ Minimal Design</span>
<span className="font-serif text-lg text-accent-500 font-medium">₱249</span>
</li>
<li className="flex justify-between items-baseline border-b border-dashed border-burgundy-800/10 pb-2">
<span className="text-sm font-medium text-burgundy-900">Full Design</span>
<span className="font-serif text-lg text-accent-500 font-medium">₱299</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-burgundy-800/5">
<h3 className="font-serif text-xl mb-6 flex items-center gap-2">
<iconify-icon className="text-burgundy-800" height="20" icon="solar:minimalistic-magnifer-linear" width="20"></iconify-icon>
                            Pedicure
                        </h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-dashed border-burgundy-800/10 pb-2">
<span className="text-sm font-medium text-burgundy-900">Plain Gel Polish Only</span>
<span className="font-serif text-lg text-accent-500 font-medium">₱199</span>
</li>
<li className="pt-2 text-xs text-burgundy-800/50 italic flex gap-2 items-start">
<iconify-icon className="mt-0.5" height="14" icon="solar:info-circle-linear" width="14"></iconify-icon> 
                                Clean and long-lasting finish for your toes.
                            </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 reveal-element delay-200">

<div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-burgundy-800/5 overflow-x-auto">
<div className="flex flex-col mb-6">
<h3 className="font-serif text-xl flex items-center gap-2 mb-1">
<iconify-icon className="text-burgundy-800" height="20" icon="solar:gem-linear" width="20"></iconify-icon>
                                Soft Gel Extension
                            </h3>
<span className="text-xs text-burgundy-800/50 uppercase tracking-wider">Durable &amp; Lightweight</span>
</div>
<table className="w-full text-left min-w-[340px]">
<thead className="">
<tr className="border-b-2 border-burgundy-800/10 text-[10px] uppercase tracking-wider text-burgundy-800/60">
<th className="pb-3 font-semibold pl-1">Size</th>
<th className="pb-3 font-semibold text-center">Plain</th>
<th className="pb-3 font-semibold text-center">Minimal</th>
<th className="pb-3 font-semibold text-center pr-1">Full</th>
</tr>
</thead>
<tbody className="text-sm font-medium">
<tr className="border-b border-burgundy-800/5 hover:bg-nude-100 transition-colors">
<td className="py-3 pl-1 text-burgundy-900">Short</td>
<td className="py-3 text-center text-burgundy-800">₱449</td>
<td className="py-3 text-center text-burgundy-800">₱649</td>
<td className="py-3 text-center pr-1 text-accent-500">₱749</td>
</tr>
<tr className="border-b border-burgundy-800/5 hover:bg-nude-100 transition-colors">
<td className="py-3 pl-1 text-burgundy-900">Medium</td>
<td className="py-3 text-center text-burgundy-800">₱499</td>
<td className="py-3 text-center text-burgundy-800">₱699</td>
<td className="py-3 text-center pr-1 text-accent-500">₱799</td>
</tr>
<tr className="border-b border-burgundy-800/5 hover:bg-nude-100 transition-colors">
<td className="py-3 pl-1 text-burgundy-900">Long</td>
<td className="py-3 text-center text-burgundy-800">₱549</td>
<td className="py-3 text-center text-burgundy-800">₱749</td>
<td className="py-3 text-center pr-1 text-accent-500">₱849</td>
</tr>
<tr className="hover:bg-nude-100 transition-colors">
<td className="py-3 pl-1 text-burgundy-900">2XL</td>
<td className="py-3 text-center text-burgundy-800">₱599</td>
<td className="py-3 text-center text-burgundy-800">₱799</td>
<td className="py-3 text-center pr-1 text-accent-500">₱899</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-burgundy-900 p-6 md:p-8 rounded-xl shadow-lg border border-burgundy-800 overflow-x-auto text-nude-100 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col mb-6 relative z-10">
<h3 className="font-serif text-xl flex items-center gap-2 mb-1 text-white">
<iconify-icon className="text-accent-500" height="20" icon="solar:layers-linear" width="20"></iconify-icon>
                                Customized Press Ons
                            </h3>
<span className="text-xs text-white/50 uppercase tracking-wider">Reusable &amp; Custom Fit</span>
</div>
<table className="w-full text-left min-w-[340px] relative z-10">
<thead className="">
<tr className="border-b-2 border-white/10 text-[10px] uppercase tracking-wider text-white/40">
<th className="pb-3 font-semibold pl-1">Size</th>
<th className="pb-3 font-semibold text-center">Plain</th>
<th className="pb-3 font-semibold text-center">Minimal</th>
<th className="pb-3 font-semibold text-center pr-1">Full</th>
</tr>
</thead>
<tbody className="text-sm font-medium">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 pl-1 text-white">Short</td>
<td className="py-3 text-center text-white/80">₱199</td>
<td className="py-3 text-center text-white/80">₱249</td>
<td className="py-3 text-center pr-1 text-accent-500">₱299</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 pl-1 text-white">Medium</td>
<td className="py-3 text-center text-white/80">₱249</td>
<td className="py-3 text-center text-white/80">₱299</td>
<td className="py-3 text-center pr-1 text-accent-500">₱349</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 pl-1 text-white">Long</td>
<td className="py-3 text-center text-white/80">₱299</td>
<td className="py-3 text-center text-white/80">₱349</td>
<td className="py-3 text-center pr-1 text-accent-500">₱399</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="py-3 pl-1 text-white">2XL</td>
<td className="py-3 text-center text-white/80">₱349</td>
<td className="py-3 text-center text-white/80">₱399</td>
<td className="py-3 text-center pr-1 text-accent-500">₱449</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-element delay-300">
<div className="bg-nude-200/50 p-8 rounded-xl border border-nude-300">
<h4 className="font-serif text-lg mb-4 flex items-center gap-2">
<iconify-icon className="text-burgundy-800/60" height="18" icon="solar:eraser-linear" width="18"></iconify-icon> Removal
                        </h4>
<div className="flex justify-between items-center mb-3 pb-3 border-b border-burgundy-800/5">
<span className="text-sm">Gel Polish</span>
<span className="font-medium">₱99</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm">Extension</span>
<span className="font-medium">₱149</span>
</div>
</div>
<div className="bg-nude-200/50 p-8 rounded-xl border border-nude-300">
<h4 className="font-serif text-lg mb-4 flex items-center gap-2">
<iconify-icon className="text-burgundy-800/60" height="18" icon="solar:add-circle-linear" width="18"></iconify-icon> Add Ons
                        </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-nude-300 rounded-md text-xs text-burgundy-800 font-medium">Embossed</span>
<span className="px-3 py-1.5 bg-white border border-nude-300 rounded-md text-xs text-burgundy-800 font-medium">Ombre</span>
<span className="px-3 py-1.5 bg-white border border-nude-300 rounded-md text-xs text-burgundy-800 font-medium">French Tip</span>
<span className="px-3 py-1.5 bg-white border border-nude-300 rounded-md text-xs text-burgundy-800 font-medium">Cateye</span>
<span className="px-3 py-1.5 bg-white border border-nude-300 rounded-md text-xs text-burgundy-800 font-medium">Marble</span>
<span className="px-3 py-1.5 bg-white border border-nude-300 rounded-md text-xs text-burgundy-800 font-medium">Rhinestones</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 reveal-element">
<button className="bg-burgundy-800 hover:bg-accent-500 text-white font-medium uppercase text-sm tracking-wider px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-burgundy-800/20 transform hover:-translate-y-1" onclick="document.getElementById('book').scrollIntoView()">
                    Secure Your Slot
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-burgundy-800/5" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-500/5 border border-accent-500/10 text-accent-600 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 shadow-sm hover:bg-accent-500/10 transition-colors cursor-default">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
    Our Portfolio
</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-burgundy-900">Real Results</h2>
<p className="mt-4 text-burgundy-800/60">No filters needed.</p>
</div>
<div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4 reveal-element delay-100">

<div className="group relative overflow-hidden rounded-xl aspect-square shadow-sm cursor-pointer">
<img alt="Nail Art 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-center bg-black/20 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/995f1282-3bf5-4916-8ec7-d4e3f45223c3_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-square shadow-sm cursor-pointer">
<img alt="Nail Art 2" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac7eeb31-d73d-4bf2-a0e5-5f86ffdb8276_1600w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-square shadow-sm cursor-pointer">
<img alt="Nail Art 3" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4920bba-dc62-4579-bb0d-edf54973463f_1600w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-square shadow-sm cursor-pointer">
<img alt="Nail Art 4" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b4cf971-18e7-467b-aa5e-05e8262a681c_1600w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-square shadow-sm cursor-pointer">
<img alt="Nail Art 5" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4af72b1-b5d0-4561-a3e0-f5bd97f77d48_1600w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-square shadow-sm cursor-pointer">
<img alt="Nail Art 6" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ec39c20-e07b-46d2-a576-22930e6371d6_1600w.jpg"/>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 uppercase hover:text-accent-500 hover:border-accent-500 transition-colors text-xs font-bold text-burgundy-900 tracking-widest border-burgundy-900 border-b pb-1" href="https://www.facebook.com/profile.php?id=61564133044559" target="_blank">
                    View More on Facebook <iconify-icon className="" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-nude-50 pt-24 pr-6 pb-24 pl-6" id="experience">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal-element">
<div className="grid grid-cols-2 gap-4">
<img alt="Salon interior" className="w-full h-96 object-cover rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dca41e92-0246-4544-b9b5-af2a554b67f5_800w.jpg"/>
<img alt="Nail detail" className="w-full h-96 object-cover rounded-2xl mt-8 shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac51ce05-6918-400d-a97b-d5870af8100f_800w.jpg"/>
</div>
</div>
<div className="order-1 md:order-2 reveal-element delay-100">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500 mb-2 block">The Experience</span>
<h2 className="font-serif text-4xl mb-6 text-burgundy-900">Relax While You Wait.</h2>
<p className="text-burgundy-800/70 mb-8 leading-relaxed">
                    This is your time to disconnect. Enjoy your favorite shows or stay connected while we pamper your nails.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-accent-500" height="20" icon="solar:snowflake-linear" width="20"></iconify-icon>
<span className="font-medium">Air-conditioned Studio</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent-500" height="20" icon="solar:tv-linear" width="20"></iconify-icon>
<span className="font-medium">FREE Netflix &amp; YouTube</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-accent-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
<path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
<path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
<line x1="12" x2="12.01" y1="20" y2="20"></line>
</svg>
<span className="font-medium">FREE Internet</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-white border-nude-200 border-t pt-24 pr-6 pb-24 pl-6" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500 mb-2 block">Testimonials</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-burgundy-900">Client Love</h2>
<p className="mt-4 text-burgundy-800/60">Real feedback from our lovely clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-nude-50 p-8 rounded-2xl border border-nude-200 shadow-sm reveal-element hover:shadow-md transition-shadow">
<div className="flex gap-1 text-accent-500 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-burgundy-800/80 mb-6 text-sm leading-relaxed">
                        "Student-friendly budget! The durability and quality are amazing—perfect if you want quality soft gel extensions. She is such a perfectionist with the details; she'll fix it if she feels it's not perfect even if it already looks good to me! You won't get bored because she's so fun to talk to."
                    </p>
<div className="flex items-center gap-3">
<div className="flex font-bold text-burgundy-900 font-serif bg-nude-200 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84285c30-6486-4288-8c87-a08e2b89f082_320w.png)] bg-cover bg-center rounded-full items-center justify-center">E</div>
<div>
<p className="text-sm font-semibold text-burgundy-900">Ellaena Joie Verana</p>
<p className="text-[10px] text-burgundy-800/50 uppercase">Soft Gel Extension</p>
</div>
</div>
</div>

<div className="reveal-element delay-100 hover:shadow-md transition-shadow bg-nude-50 border-nude-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-1 text-accent-500 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-burgundy-800/80 mb-6">"Flawless work! The process was super relaxing. My cuticles are so clean, and the nail art looks like it was done by a pro so detailed! She's incredibly friendly, making time fly. If you want quality, long-lasting nails, she is the one to go to!"</p>
<div className="flex items-center gap-3">
<div className="flex font-bold text-burgundy-900 font-serif bg-nude-200 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9763f79-5c4c-413a-ba9d-22d6c3cb179e_320w.png)] bg-cover bg-center rounded-full items-center justify-center">D</div>
<div className="">
<p className="text-sm font-semibold text-burgundy-900">Daniella Espinosa</p>
<p className="text-[10px] text-burgundy-800/50 uppercase">Nail Art &amp; Care</p>
</div>
</div>
</div>

<div className="bg-nude-50 p-8 rounded-2xl border border-nude-200 shadow-sm reveal-element delay-200 hover:shadow-md transition-shadow">
<div className="flex gap-1 text-accent-500 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-burgundy-800/80 mb-6">
                        "The attention to detail and creativity is everything. She really found a way to achieve my inspo! The appointment wasn't boring at all with all the chatting. The studio has AC and free WiFi, ensuring you're truly comfortable. Will definitely be back!"
                    </p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="flex font-bold text-burgundy-900 font-serif bg-nude-200 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986f69b0-c0be-44e4-872e-4afc1a9146fb_320w.png?w=800&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center">M</div>
<div className="">
<p className="text-sm font-semibold text-burgundy-900">Ma. Alexa Ambrosio</p>
<p className="text-[10px] text-burgundy-800/50 uppercase">Custom Design</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-nude-100 border-t border-nude-200">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-3xl text-center text-burgundy-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-6">

<div className="reveal-element">
<h3 className="font-semibold text-burgundy-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-accent-500" height="18" icon="solar:question-circle-linear" width="18"></iconify-icon> 
                        Do you accept walk-ins?
                    </h3>
<p className="text-burgundy-800/70 text-sm pl-7">We are strictly by appointment to ensure every client gets our full attention without rushing. Please message us to book your slot.</p>
</div>

<div className="reveal-element delay-100">
<h3 className="font-semibold text-burgundy-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-accent-500" height="18" icon="solar:question-circle-linear" width="18"></iconify-icon> 
                        How long does Soft Gel last?
                    </h3>
<p className="text-burgundy-800/70 text-sm pl-7">With proper care, our Soft Gel extensions last 3-4 weeks. We focus on high-quality prep to prevent early lifting.</p>
</div>

<div className="reveal-element delay-200">
<h3 className="font-semibold text-burgundy-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-accent-500" height="18" icon="solar:question-circle-linear" width="18"></iconify-icon> 
                        Is removal free?
                    </h3>
<p className="text-burgundy-800/70 text-sm pl-7">Removal is free if you are getting a new set with us. For removal only, a small fee applies (₱99-₱149).</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-burgundy-900" id="book">

<div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center text-nude-100">
<span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-4 block reveal-element">Reservation Policy</span>
<h2 className="font-serif text-4xl md:text-5xl mb-6 reveal-element delay-100">Ready to Get Glam?</h2>

<div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-lg mx-auto mb-12 reveal-element delay-200 shadow-2xl">
<div className="flex items-center justify-center gap-2 mb-4 text-accent-500">
<iconify-icon height="24" icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-4 uppercase tracking-widest text-white">No DP No Appointment Policy</h3>
<p className="text-sm opacity-80 mb-6 leading-relaxed">
                    A <strong className="">₱200 reservation fee</strong> is required to secure your slot. This is <strong className="">not refundable</strong> but will be deducted from your total payment.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left reveal-element delay-300">
<div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<h4 className="text-sm uppercase tracking-widest font-bold mb-4 opacity-70">Contact Details</h4>
<div className="space-y-3 text-sm">
<p className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon> 0951 122 4465
                        </p>
<p className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon> kiraascares11@gmail.com
                        </p>
<p className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:chat-round-dots-linear" width="16"></iconify-icon> Messenger: J Glam Nails
                        </p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
<p className="text-sm font-medium mb-4">READY TO GET YOUR NAILS DONE?</p>
<a className="uppercase hover:bg-accent-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs font-bold text-burgundy-900 tracking-widest bg-white rounded-full mb-3 pt-3 pr-8 pb-3 pl-8 shadow-xl" href="https://app.funnelpro.ph/v2/preview/LmZEhffAsKNZIriyqPdt">BOOK NOW</a>
<p className="text-[10px] opacity-50">Slots are limited each day.</p>
</div>
</div>
</div>
</section>

<footer className="text-nude-100 bg-burgundy-900 border-white/5 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row transition-all hover:bg-white/10 bg-white/5 max-w-7xl border-white/5 border rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm gap-x-8 gap-y-8 items-start justify-between">
<div className="text-left max-w-md">
<h4 className="font-serif text-2xl font-semibold mb-4 tracking-tight">J GLAM NAILS BY TINE</h4>
<div className="space-y-2 text-sm text-white/70">
<p className="flex items-start gap-2">
<iconify-icon className="mt-1 shrink-0 text-accent-500" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                    Blk 74 Lot 9 CIM Street Brgy. Upper Bicutan, Taguig City
                </p>
<p className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    WhatsApp: +63 951 122 4465
                </p>
</div>
<p className="text-white/40 text-xs mt-4 border-t border-white/10 pt-4 inline-block">DTI &amp; BIR Registered</p>
</div>
<div className="flex gap-4">
<a className="flex items-center justify-center hover:bg-accent-500 transition-colors group bg-white/5 w-10 h-10 rounded-full" href="https://www.facebook.com/profile.php?id=61564133044559">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="ri:facebook-line" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-accent-500 transition-colors group bg-white/5 w-10 h-10 rounded-full" href="mailto:kiraascares11@gmail.com">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="ri:mail-line" style={{color: 'rgb(250, 245, 242)'}} width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-accent-500 transition-colors group bg-white/5 w-10 h-10 rounded-full" href="/#https://www.tiktok.com/@jglamnailssss?_r=1&amp;_t=ZS-941PCo0p2MG">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="ri:tiktok-line" style={{color: 'rgb(250, 245, 242)'}} width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-accent-500 transition-colors group bg-white/5 w-10 h-10 rounded-full" href="/+63 951 122 4465">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="ri:whatsapp-line" style={{color: 'rgb(250, 245, 242)'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-white/30 uppercase tracking-widest">
        © 2024 J Glam Nails by Tine. All rights reserved.
    </div>
</footer>



    </>
  );
}
