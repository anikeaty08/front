import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#1e293b', // Custom dark slate
900: '#0f172a', // Deep Navy/Black
},
brand: {
navy: '#0f172a', // Deep Navy Blue
red: '#991b1b',  // Muted Dark Red (700/800 range)
grey: '#334155', // Slate Grey
}
},
backgroundImage: {
'industrial-pattern': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
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
      

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-brand-navy flex items-center justify-center text-white">
<span className="font-bold text-xl tracking-tighter">DM</span>
</div>
<div className="uppercase tracking-tighter font-bold text-lg leading-none text-brand-navy">
          Doubledee<br/><span className="text-slate-400 font-medium tracking-wide text-xs">Mechanical</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-600">
<a className="hover:text-brand-navy transition-colors" href="#">Home</a>
<a className="hover:text-brand-navy transition-colors" href="#">About</a>
<a className="hover:text-brand-navy transition-colors" href="#">Services</a>
<a className="hover:text-brand-navy transition-colors" href="#">Contact</a>
</div>

<div className="hidden lg:flex flex-col items-end">
<span className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1">
<iconify-icon icon="solar:bell-linear" width="14"></iconify-icon>
          24/7 Emergency Services
        </span>
<a className="text-lg font-bold text-brand-navy tracking-tight hover:text-brand-red transition-colors" href="tel:2694591116">
          269-459-1116
        </a>
</div>

<button className="md:hidden text-brand-navy">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Industrial Mechanical Room" className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
<div className="max-w-3xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-sm text-white/70 text-xs tracking-widest uppercase">
<div className="w-2 h-2 bg-brand-red rounded-full"></div>
          Serving Southwest Michigan
        </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
          Industrial Strength <br/>
<span className="text-slate-400">Mechanical Solutions.</span>
</h1>
<div className="border-l-4 border-brand-red pl-6 py-1">
<p className="text-2xl md:text-3xl text-white font-medium italic tracking-tight">
            "Let the Work Do the Talking"
          </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-brand-red hover:bg-red-800 text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-colors shadow-lg shadow-red-900/20">
            Request Service
          </button>
<button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-colors backdrop-blur-sm">
            Our Capabilities
          </button>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-0">

<div className="group relative flex flex-col items-start p-8 md:p-12 border border-slate-200 md:border-r-0 hover:bg-slate-50 transition-colors">
<div className="mb-6 text-brand-navy opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-navy mb-2 tracking-tight">01. Evaluate</h3>
<p className="text-sm text-slate-500 leading-relaxed">System assessment and strategic planning.</p>

<div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 text-slate-300">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>

<div className="md:hidden mt-8 self-center text-slate-300 rotate-90">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-start p-8 md:p-12 border border-slate-200 md:border-r-0 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<div className="mb-6 text-brand-navy opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:screw-driver-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-navy mb-2 tracking-tight">02. Install</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precision execution and implementation.</p>

<div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 text-slate-300">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>

<div className="md:hidden mt-8 self-center text-slate-300 rotate-90">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-start p-8 md:p-12 border border-slate-200 border-l-4 border-l-brand-red bg-white hover:bg-slate-50 transition-colors">
<div className="mb-6 text-brand-red opacity-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-navy mb-2 tracking-tight">03. Maintain</h3>
<p className="text-sm text-slate-500 leading-relaxed">Long-term reliability and support.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">Capabilities</h2>
<div className="h-1 w-20 bg-brand-red mx-auto"></div>
</div>
<div className="grid lg:grid-cols-2 gap-8 md:gap-12">

<div className="bg-white shadow-sm border border-slate-200 p-8 md:p-12 h-full">
<div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
<div className="p-3 bg-brand-navy text-white inline-flex items-center justify-center">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-navy tracking-tight">Commercial</h3>
</div>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-brand-red group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">HVAC Systems</span>
</li>
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-brand-red group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">Industrial Boilers</span>
</li>
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-brand-red group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">Refrigeration &amp; Coolers</span>
</li>
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-brand-red group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">Commercial Plumbing</span>
</li>
</ul>
</div>

<div className="bg-white shadow-sm border border-slate-200 p-8 md:p-12 h-full">
<div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
<div className="p-3 bg-slate-200 text-brand-navy inline-flex items-center justify-center">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-navy tracking-tight">Residential</h3>
</div>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-slate-400 group-hover:text-brand-red transition-colors">
<iconify-icon icon="solar:fire-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">Furnaces</span>
</li>
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-slate-400 group-hover:text-brand-red transition-colors">
<iconify-icon icon="solar:air-conditioner-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">Air Conditioning</span>
</li>
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-slate-400 group-hover:text-brand-red transition-colors">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">Water Heaters</span>
</li>
<li className="flex items-center gap-4 text-brand-grey group cursor-default">
<span className="text-slate-400 group-hover:text-brand-red transition-colors">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="font-medium text-lg">General Plumbing</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-850 h-[500px] flex items-center justify-center overflow-hidden">

<img alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-navy/60"></div>
<div className="relative z-10 text-center max-w-lg px-6">
<div className="mb-6 inline-flex p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-red">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Southwest Michigan</h2>
<p className="text-white/70 text-lg font-light">
        Proudly serving Portage, Kalamazoo, and surrounding communities within a 40-mile radius.
      </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 tracking-tight">Get in Touch with<br/>Doubledee Mechanical</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-6">
<a className="w-full md:w-auto bg-brand-navy text-white px-10 py-5 text-sm font-semibold tracking-wide uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-3" href="tel:2694591116">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
          Call 269-459-1116
        </a>
<a className="w-full md:w-auto bg-white border-2 border-slate-200 text-brand-navy px-10 py-5 text-sm font-semibold tracking-wide uppercase hover:border-brand-navy transition-colors flex items-center justify-center gap-3" href="mailto:info@doubledeemechanical.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
          Email Us
        </a>
</div>
</div>
</section>

<footer className="bg-brand-navy text-white py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white flex items-center justify-center text-brand-navy">
<span className="font-bold text-base tracking-tighter">DM</span>
</div>
<div className="uppercase tracking-tighter font-bold text-base leading-none text-white">
            Doubledee<br/><span className="text-white/40 font-medium tracking-wide text-[10px]">Mechanical</span>
</div>
</div>
<p className="text-slate-400 text-sm max-w-xs font-light">
          Reliable commercial and residential mechanical services tailored for efficiency and durability.
        </p>
</div>

<div className="space-y-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Contact</h4>
<div className="flex items-start gap-3 text-slate-400 text-sm">
<iconify-icon className="mt-0.5 text-brand-red" icon="solar:map-point-linear"></iconify-icon>
<span>5144 S Sprinkle Rd,<br/>Portage, MI 49002</span>
</div>
<div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
<iconify-icon className="text-brand-red" icon="solar:phone-linear"></iconify-icon>
<a href="tel:2694591116">269-459-1116</a>
</div>
<div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
<iconify-icon className="text-brand-red" icon="solar:letter-linear"></iconify-icon>
<a href="mailto:info@doubledeemechanical.com">info@doubledeemechanical.com</a>
</div>
</div>

<div className="space-y-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-slate-500">
<p>© 2024 Doubledee Mechanical. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
