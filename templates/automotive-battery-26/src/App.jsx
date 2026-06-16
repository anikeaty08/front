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
},
colors: {
sf: {
red: '#E11D48', // Premium Red
dark: '#0A0A0A',
surface: '#121212',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Reveal on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // Spotlight Effect
        document.addEventListener('mousemove', e => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-4 px-4 md:px-6">
<div className="max-w-5xl mx-auto h-14 rounded-full glass-strong flex items-center justify-between px-5 transition-all duration-300 shadow-2xl shadow-black/50">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-[10px] tracking-tighter shadow-[0_0_15px_rgba(225,29,72,0.5)] group-hover:scale-105 transition-transform">SF</div>
<span className="font-semibold tracking-tighter text-white text-sm">BATTERIES</span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#products">Catalog</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#technology">Tech</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#dealers">Dealers</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors border border-white/5" href="#finder">
<iconify-icon className="text-red-500" icon="solar:bolt-linear"></iconify-icon>
                    Find Battery
                </a>
<button className="md:hidden text-white opacity-70">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50 mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="lg:w-1/2 space-y-8 reveal-up active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-[10px] font-semibold tracking-wider text-red-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                        Engineered for Extremes
                    </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500">
                        Unrelenting <br/> Power.
                    </h1>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-lg border-l border-white/10 pl-6">
                        Advanced calcium-silver alloy technology designed to withstand the toughest Indian roads and temperatures.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold tracking-tight hover:bg-neutral-200 transition-colors flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Select Vehicle
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon className="text-lg opacity-70" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Film
                        </button>
</div>

<div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/5">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">48<span className="text-red-500 text-lg">+</span></div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Months Warranty</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">12K<span className="text-red-500 text-lg">+</span></div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Retail Points</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">0%</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Maintenance</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full relative reveal-up delay-100">
<div className="relative w-full aspect-square max-w-[500px] mx-auto animate-float">

<div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-blue-600/20 blur-[60px] rounded-full"></div>

<div className="absolute inset-4 bg-[#0F0F0F] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative group">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

<div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#141414]">
<div className="flex items-center gap-3">
<iconify-icon className="text-red-500 text-2xl" icon="solar:battery-full-linear"></iconify-icon>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Series</div>
<div className="text-white font-medium tracking-tight">PRO-TURBO X</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
</div>

<div className="flex-1 relative bg-[radial-gradient(circle_at_50%_50%,_rgba(30,30,30,1),_rgba(10,10,10,1))]">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-red-500 opacity-50 animate-spin transition-all duration-[3s]"></div>
<div className="absolute inset-2 rounded-full border-b border-white/20 opacity-30 animate-spin transition-all duration-[5s] reverse"></div>
<div className="text-center z-10">
<div className="text-4xl font-bold text-white tracking-tighter">12.8<span className="text-sm text-neutral-500 font-normal ml-1">V</span></div>
<div className="text-[10px] text-red-400 uppercase tracking-widest mt-1">Optimal</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs font-mono text-neutral-400">
<div className="flex flex-col gap-1">
<span className="opacity-50">CCA</span>
<span className="text-white">480A</span>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="opacity-50">CAPACITY</span>
<span className="text-white">45Ah</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
<div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-400">Warranty</div>
<div className="text-sm font-medium text-white">48 Months</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative z-20 -mt-10 px-6" id="finder">
<div className="max-w-5xl mx-auto">
<div className="glass p-1 rounded-2xl shadow-2xl shadow-black/80 reveal-up">
<div className="bg-[#0A0A0A] rounded-xl border border-white/5 p-6 md:p-8">
<div className="flex flex-col md:flex-row gap-6 md:items-end">
<div className="flex-1 space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-red-500" icon="solar:magnifer-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-wide uppercase">Quick Finder</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="relative group">
<select className="w-full h-12 custom-select border border-white/10 rounded-lg px-4 text-sm text-neutral-300 focus:outline-none focus:border-red-500/50 transition-colors appearance-none cursor-pointer hover:border-white/20">
<option>Select Make</option>
<option>Maruti Suzuki</option>
<option>Hyundai</option>
<option>Honda</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<select className="w-full h-12 custom-select border border-white/10 rounded-lg px-4 text-sm text-neutral-300 focus:outline-none focus:border-red-500/50 transition-colors appearance-none cursor-pointer hover:border-white/20">
<option>Select Model</option>
<option>Swift</option>
<option>City</option>
<option>Creta</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<select className="w-full h-12 custom-select border border-white/10 rounded-lg px-4 text-sm text-neutral-300 focus:outline-none focus:border-red-500/50 transition-colors appearance-none cursor-pointer hover:border-white/20">
<option>Fuel Type</option>
<option>Petrol</option>
<option>Diesel</option>
<option>CNG</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="h-12 px-8 bg-white text-black font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0">
                            Find Battery
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="products">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 reveal-up">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-3">Precision Series.</h2>
<p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
                        Curated power solutions for every vehicle type. Built to last longer and perform better.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-all" href="#">
                    View Full Catalog 
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-900 border border-white/10 relative overflow-hidden group spotlight-card reveal-up">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 backdrop-blur text-[10px] font-medium text-white mb-3 border border-white/10">
<iconify-icon className="text-red-500" icon="solar:star-bold"></iconify-icon> Best Seller
                        </div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">Automotive Elite</h3>
<p className="text-neutral-300 text-sm max-w-sm mb-6">High cranking power for modern SUVs and sedans. Maintenance free design.</p>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 rounded-3xl bg-[#111] border border-white/10 p-6 flex flex-col justify-between group spotlight-card reveal-up delay-75">
<div>
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6 border border-white/5">
<iconify-icon className="text-xl" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">SF-Sonic Technology</h3>
<p className="text-neutral-500 text-xs mt-3 leading-relaxed">
                            Our patented grid design ensures better conductivity and 20% longer life than standard lead-acid batteries.
                        </p>
</div>
<div className="space-y-4">
<div className="h-px w-full bg-white/10"></div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Conductivity</span>
<span className="text-white font-mono">+24%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Life Span</span>
<span className="text-white font-mono">5 Years</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Recharge</span>
<span className="text-white font-mono">2x Fast</span>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group spotlight-card reveal-up delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 h-full flex flex-col justify-between relative z-10">
<iconify-icon className="text-3xl text-white/50 group-hover:text-white transition-colors" icon="solar:bike-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Two Wheeler</h3>
<p className="text-neutral-500 text-xs mt-1">VRLA Instant Start</p>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group spotlight-card reveal-up delay-150">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 h-full flex flex-col justify-between relative z-10">
<iconify-icon className="text-3xl text-white/50 group-hover:text-white transition-colors" icon="solar:home-2-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Home Inverter</h3>
<p className="text-neutral-500 text-xs mt-1">Tubular Deep Cycle</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/30 border-y border-white/5 relative overflow-hidden" id="technology">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="reveal-up">
<div className="w-12 h-12 mx-auto md:mx-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-white" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Weather Proof</h4>
<p className="text-sm text-neutral-500">Tested from -20°C to +60°C operational range.</p>
</div>
<div className="reveal-up delay-75">
<div className="w-12 h-12 mx-auto md:mx-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-white" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Vibration Resistant</h4>
<p className="text-sm text-neutral-500">Reinforced polypropylene casing for rough terrain.</p>
</div>
<div className="reveal-up delay-150">
<div className="w-12 h-12 mx-auto md:mx-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-white" icon="solar:leaf-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Eco Friendly</h4>
<p className="text-sm text-neutral-500">99% recyclable materials used in production.</p>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="dealers">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 reveal-up">
                Never run <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">out of power.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up delay-100">
<button className="h-14 px-8 rounded-full bg-white text-black font-semibold tracking-tight hover:scale-105 transition-transform flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    Locate Nearest Dealer
                </button>
<button className="h-14 px-8 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                    Contact Support
                </button>
</div>
</div>

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
</section>

<footer className="border-t border-white/10 bg-[#080808] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white font-bold text-[8px]">SF</div>
<span className="font-semibold tracking-tighter text-white text-lg">BATTERIES</span>
</a>
<p className="text-neutral-500 text-sm max-w-xs">Powering journeys across the nation with reliable energy storage solutions.</p>
</div>
<div className="flex flex-wrap gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Technology</a>
<a className="hover:text-white transition-colors" href="#">Warranty</a>
<a className="hover:text-white transition-colors" href="#">Dealers</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 SF Batteries. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
<div className="flex gap-3 ml-4 border-l border-white/5 pl-4">
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
