import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
emerald: {
400: '#34d399',
500: '#10b981',
600: '#059669',
950: '#022c22',
},
zinc: {
850: '#202023',
900: '#18181b',
950: '#09090b', // Deepest black
}
},
backgroundImage: {
'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255, 255, 255, 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
}
}
}
}



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
                        observer.unobserve(entry.target);
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<span className="iconify" data-icon="lucide:box" data-width="20"></span>
</div>
<span className="font-semibold text-lg tracking-tight text-white">GREENSKY</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-emerald-400 transition-colors" href="#services">Solutions</a>
<a className="hover:text-emerald-400 transition-colors" href="#about">Company</a>
<a className="hover:text-emerald-400 transition-colors" href="#locations">Network</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all" href="#contact">
                    Track Shipment
                </a>
<button className="md:hidden text-zinc-400">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden aurora-bg">

<div className="aurora-blob w-[500px] h-[500px] bg-emerald-500/10 rounded-full top-[-100px] left-[-100px]"></div>
<div className="aurora-blob w-[600px] h-[600px] bg-blue-500/10 rounded-full bottom-[-100px] right-[-100px] animation-delay-2000"></div>
<div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm text-emerald-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Next-Gen Logistics Platform
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
                        Moving the world, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400 animate-gradient">one pixel</span> at a time.
                    </h1>
<p className="text-lg text-zinc-400 mb-8 max-w-lg font-light leading-relaxed">
                        Experience the synchronization of physical storage and digital tracking. We provide high-security warehousing and global freight with real-time analytics.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-zinc-950 text-sm font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]" href="#contact">
                            Start Shipping
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800 transition-all backdrop-blur-sm" href="#services">
                            Explore Solutions
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-8">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-zinc-950" src="https://ui-avatars.com/api/?name=A&amp;background=27272a&amp;color=fff"/>
<img className="w-10 h-10 rounded-full border-2 border-zinc-950" src="https://ui-avatars.com/api/?name=B&amp;background=3f3f46&amp;color=fff"/>
<img className="w-10 h-10 rounded-full border-2 border-zinc-950" src="https://ui-avatars.com/api/?name=C&amp;background=52525b&amp;color=fff"/>
<div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] text-white font-medium">+2k</div>
</div>
<div className="text-sm text-zinc-500">
<span className="text-emerald-400 font-semibold">4.9/5</span> rating from <br/>global partners
                        </div>
</div>
</div>

<div className="relative h-[600px] hidden lg:block reveal delay-200">

<div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
<img className="w-full h-full object-cover scale-110 opacity-60 hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
</div>

<div className="absolute top-12 -left-12 w-64 p-5 rounded-2xl glass-card float-slow">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
<span className="iconify" data-icon="lucide:package" data-width="20"></span>
</div>
<div>
<div className="text-xs text-zinc-400 uppercase tracking-wider">Status</div>
<div className="text-sm font-semibold text-white">In Transit</div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="text-xs text-zinc-500">Jebel Ali Port</div>
<div className="text-xs text-emerald-400">On Time</div>
</div>
<div className="mt-3 h-1 w-full bg-zinc-700/50 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-emerald-500 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-24 -right-8 w-56 p-5 rounded-2xl glass-card float-medium">
<div className="text-xs text-zinc-400 mb-2">Storage Capacity</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-semibold text-white">84%</span>
<span className="text-xs text-emerald-400 mb-1">↑ Optimized</span>
</div>
<div className="grid grid-cols-5 gap-1 h-8 items-end">
<div className="bg-zinc-700 h-[40%] rounded-sm"></div>
<div className="bg-zinc-700 h-[60%] rounded-sm"></div>
<div className="bg-emerald-500 h-[84%] rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="bg-zinc-700 h-[50%] rounded-sm"></div>
<div className="bg-zinc-700 h-[70%] rounded-sm"></div>
</div>
</div>

<div className="absolute bottom-8 left-8 p-3 rounded-xl glass-card flex items-center gap-3 float-fast">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div className="pr-2">
<div className="text-xs font-medium text-white">Unit 402 Active</div>
<div className="text-[10px] text-zinc-400">Dubai Investment Park</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-white"><span className="iconify" data-icon="lucide:triangle"></span> Vertex</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><span className="iconify" data-icon="lucide:hexagon"></span> CubeLog</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><span className="iconify" data-icon="lucide:circle-dashed"></span> Sphere</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><span className="iconify" data-icon="lucide:boxes"></span> Stack</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><span className="iconify" data-icon="lucide:anchor"></span> Harbor</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Mastery in Movement</h2>
<p className="text-zinc-400 max-w-xl mx-auto">Comprehensive logistics solutions tailored for the speed of modern business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group border border-white/5 bg-zinc-900 reveal">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12">
<div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-zinc-950 mb-6">
<span className="iconify" data-icon="lucide:warehouse" data-width="24"></span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Smart Warehousing</h3>
<p className="text-zinc-300 text-sm md:text-base max-w-md">Climate-controlled facilities with AI-driven inventory management. Store your goods with confidence in our Dubai and Abu Dhabi hubs.</p>
</div>
</div>

<div className="rounded-3xl p-8 border border-white/5 bg-zinc-900 hover:bg-zinc-800 transition-colors group reveal delay-100">
<div className="flex justify-between items-start mb-8">
<div className="p-2 bg-zinc-800 rounded-lg text-white group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:plane" data-width="24"></span>
</div>
<span className="iconify text-zinc-600 -rotate-45" data-icon="lucide:arrow-right"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Air Freight</h3>
<p className="text-zinc-400 text-sm">Expedited global shipping for time-sensitive cargo.</p>
</div>

<div className="rounded-3xl p-8 border border-white/5 bg-zinc-900 hover:bg-zinc-800 transition-colors group reveal delay-200">
<div className="flex justify-between items-start mb-8">
<div className="p-2 bg-zinc-800 rounded-lg text-white group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:ship" data-width="24"></span>
</div>
<span className="iconify text-zinc-600 -rotate-45" data-icon="lucide:arrow-right"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Ocean Freight</h3>
<p className="text-zinc-400 text-sm">Cost-effective FCL/LCL solutions for heavy volume.</p>
</div>

<div className="md:col-span-1 rounded-3xl p-8 border border-white/5 bg-zinc-900 hover:bg-zinc-800 transition-colors group reveal delay-300">
<div className="flex justify-between items-start mb-8">
<div className="p-2 bg-zinc-800 rounded-lg text-white group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="24"></span>
</div>
<span className="iconify text-zinc-600 -rotate-45" data-icon="lucide:arrow-right"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">eCommerce</h3>
<p className="text-zinc-400 text-sm">Pick, pack &amp; ship fulfillment for online brands.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">The Green Sky Edge</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-2 mb-6">Precision meets <br/>peace of mind.</h2>
<p className="text-zinc-400 leading-relaxed mb-8 font-light">
                        We don't just store boxes; we protect assets. Our facilities employ military-grade security protocols and next-generation climate control systems.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="mt-1 w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">24/7 Biometric Security</h4>
<p className="text-zinc-500 text-xs mt-1">Facial recognition and fingerprint access.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:thermometer" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Climate Controlled</h4>
<p className="text-zinc-500 text-xs mt-1">Maintained at 23°C with humidity control.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:smartphone" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">App-Based Management</h4>
<p className="text-zinc-500 text-xs mt-1">Book, pay, and track from your phone.</p>
</div>
</li>
</ul>
</div>
<div className="relative reveal delay-200">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
<div className="relative rounded-[2rem] bg-zinc-800 border border-white/10 p-2 shadow-2xl">
<img className="rounded-[1.5rem] w-full object-cover" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-xl max-w-xs">
<div className="flex gap-1 text-emerald-400 mb-2">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-zinc-300 text-xs leading-relaxed">"The most professional logistics team in Dubai. Their dashboard makes tracking inventory incredibly simple."</p>
<div className="mt-3 flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
<span className="text-xs text-zinc-500">Logistics Manager, TechCorp</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="locations">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-white">Global Reach, Local Expertise</h2>
<p className="text-zinc-400 mt-4 text-sm">Operating key hubs in the UAE with a network spanning 90+ countries.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-zinc-800/50 reveal">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<span className="text-[10px] uppercase font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">HQ</span>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Dubai Investment Park</h3>
<p className="text-zinc-500 text-xs mb-4">50,000 sqft Climate Controlled</p>
<div className="flex items-center gap-2 text-zinc-400 text-xs border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:phone" data-width="12"></span> +971 4 123 4567
                    </div>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-zinc-800/50 reveal delay-100">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Abu Dhabi Industrial</h3>
<p className="text-zinc-500 text-xs mb-4">Heavy Machinery &amp; Freight</p>
<div className="flex items-center gap-2 text-zinc-400 text-xs border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:phone" data-width="12"></span> +971 2 987 6543
                    </div>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-zinc-800/50 reveal delay-200">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Jebel Ali Freezone</h3>
<p className="text-zinc-500 text-xs mb-4">Transit &amp; Bonded Warehouse</p>
<div className="flex items-center gap-2 text-zinc-400 text-xs border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:phone" data-width="12"></span> +971 4 555 0192
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/50 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white text-center mb-12">Common Questions</h2>
<div className="space-y-3">
<details className="group p-5 bg-zinc-900 rounded-xl border border-white/5 cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden reveal">
<summary className="flex items-center justify-between font-medium text-zinc-200 hover:text-white transition-colors">
                        How secure are your storage units?
                        <span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pl-2 border-l-2 border-emerald-500">
                        Extremely secure. We use 24/7 CCTV monitoring, perimeter alarms, and individual biometric access controls for all units.
                    </p>
</details>
<details className="group p-5 bg-zinc-900 rounded-xl border border-white/5 cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden reveal">
<summary className="flex items-center justify-between font-medium text-zinc-200 hover:text-white transition-colors">
                        Do you offer insurance for stored goods?
                        <span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pl-2 border-l-2 border-emerald-500">
                        Yes, we offer comprehensive insurance packages covering fire, theft, and damage for total peace of mind.
                    </p>
</details>
<details className="group p-5 bg-zinc-900 rounded-xl border border-white/5 cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden reveal">
<summary className="flex items-center justify-between font-medium text-zinc-200 hover:text-white transition-colors">
                        Can you handle customs clearance?
                        <span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 text-sm text-zinc-400 leading-relaxed pl-2 border-l-2 border-emerald-500">
                        Absolutely. Our team manages all import/export documentation and customs procedures for sea, air, and land freight.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="contact">

<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-950/20 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="reveal">
<span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Get a Quote</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6">Let's move your <br/>business forward.</h2>
<p className="text-zinc-400 mb-8 font-light max-w-md">
                        Fill out the form for a customized logistics proposal. Our team usually responds within 2 hours.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:border-emerald-500 transition-colors">
<span className="iconify" data-icon="lucide:mail"></span>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</div>
<div className="text-white font-medium">info@greensky.ae</div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:border-emerald-500 transition-colors">
<span className="iconify" data-icon="lucide:phone-call"></span>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Call Us</div>
<div className="text-white font-medium">+971 50 123 4567</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/80 p-8 rounded-3xl border border-white/5 backdrop-blur-xl reveal delay-100 shadow-2xl">
<form action="#" className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">First Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Requirement</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer">
<option>Self Storage Unit</option>
<option>Warehousing Solution</option>
<option>International Freight</option>
<option>Local Move</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Details</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Describe your cargo..." rows="4"></textarea>
</div>
<div className="flex items-start gap-2 pt-2">
<input className="custom-checkbox mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-emerald-600 focus:ring-emerald-500 cursor-pointer appearance-none border checked:bg-emerald-500 transition-colors" id="consent" type="checkbox"/>
<label className="text-xs text-zinc-500" htmlFor="consent">I agree to the privacy policy.</label>
</div>
<button className="w-full py-4 rounded-xl bg-white text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] mt-2" type="button">
                            Request Quote
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white border-t border-zinc-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-zinc-950">
<span className="iconify" data-icon="lucide:box" data-width="20"></span>
</div>
<span className="font-semibold text-lg tracking-tight">GREENSKY</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Redefining logistics through technology and security.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm text-zinc-100">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Storage</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Warehousing</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Freight</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Fulfillment</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm text-zinc-100">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm text-zinc-100">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>info@greensky.ae</li>
<li>+971 4 123 4567</li>
<li>Dubai, UAE</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 Green Sky Logistics. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group border-4 border-zinc-950" href="https://wa.me/">
<span className="iconify w-7 h-7" data-icon="lucide:message-circle"></span>
<span className="absolute right-full mr-4 bg-zinc-800 text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Chat with us</span>
</a>



    </>
  );
}
