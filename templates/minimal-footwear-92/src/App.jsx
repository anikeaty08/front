import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="text-base font-semibold tracking-tighter uppercase flex-1 text-center md:flex-none md:text-left font-geist" href="#">
                A E R O
            </a>

<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">Men</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">Women</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">Collections</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">Journal</a>
</nav>

<div className="flex items-center gap-4">
<button className="flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors relative">
<iconify-icon className="" height="22" icon="solar:alt-arrow-down-outline" style={{color: 'rgb(24, 24, 27)'}} width="22"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-zinc-900 text-white text-[10px] font-medium h-4 w-4 rounded-full flex items-center justify-center font-geist">2</span>
</button>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-center md:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/60 mb-6">
<span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 tracking-tight font-geist">Introducing Series 02</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-zinc-900 tracking-tight font-playfair mb-6">
                    Engineered for<br className="hidden md:block"/> infinite motion.
                </h1>
<p className="text-base md:text-lg text-zinc-500 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed font-normal font-geist">
                    Experience weightless performance with our new proprietary foam technology. Designed for the relentless pursuit of progress.
                </p>
<div className="flex items-center justify-center md:justify-start gap-4">
<a className="bg-zinc-900 text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group font-geist" href="#">
                        Shop Collection
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-transparent text-zinc-900 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-100 border border-zinc-200 transition-all font-geist" href="#">
                        Explore Technology
                    </a>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-zinc-50 rounded-3xl -z-10 transform rotate-3 scale-105"></div>
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square bg-zinc-100 border border-zinc-200/50 shadow-sm">
<img alt="White running shoe" className="object-center font-serif w-full h-full object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="border-y border-zinc-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200/60">
<div className="flex flex-col items-center text-center md:items-start md:text-left pt-8 md:pt-0 md:pr-8 first:pt-0">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2 font-geist">Sustainable Materials</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal font-geist">Crafted from 100% recycled ocean plastics and plant-based polymers, reducing our carbon footprint by 40%.</p>
</div>
<div className="flex flex-col items-center text-center md:items-start md:text-left pt-8 md:pt-0 md:px-8">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:clouds-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2 font-geist">Cloud-like Cushioning</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal font-geist">Our AERO-FOAM™ midsole returns 85% of energy with every step, making long distances feel effortless.</p>
</div>
<div className="flex flex-col items-center text-center md:items-start md:text-left pt-8 md:pt-0 md:pl-8">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2 font-geist">Adaptive Durability</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal font-geist">Reinforced wear zones and a weather-resistant upper ensure your pair lasts through all seasons and terrains.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight text-zinc-900 mb-2 font-playfair font-medium">New Arrivals</h2>
<p className="text-base text-zinc-500 font-normal font-geist">The latest additions to the AERO lineup.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors font-geist" href="#">
                    View all <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200/50">
<img alt="Aero Swift 2" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-md text-[10px] font-medium tracking-tight text-zinc-900 shadow-sm font-geist">New</div>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-zinc-900 font-geist">Aero Swift 2.0</h3>
<p className="text-xs text-zinc-500 mt-1 font-normal font-geist">Men's Road Running</p>
</div>
<p className="text-sm font-medium text-zinc-900 font-geist">$165</p>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-zinc-900 border border-zinc-200 shadow-sm"></div>
<div className="w-3.5 h-3.5 rounded-full bg-zinc-300 border border-zinc-200 shadow-sm"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#8A9A86] border border-zinc-200 shadow-sm"></div>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200/50">
<img alt="Aero Trail" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-zinc-900 font-geist">Terrain X</h3>
<p className="text-xs text-zinc-500 mt-1 font-normal font-geist">Unisex Trail Running</p>
</div>
<p className="text-sm font-medium text-zinc-900 font-geist">$180</p>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-[#E5E0D8] border border-zinc-200 shadow-sm"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#4A4B46] border border-zinc-200 shadow-sm"></div>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200/50">
<img alt="Aero Minimal" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-zinc-900 font-geist">Studio Lite</h3>
<p className="text-xs text-zinc-500 mt-1 font-normal font-geist">Women's Training</p>
</div>
<p className="text-sm font-medium text-zinc-900 font-geist">$130</p>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-white border border-zinc-200 shadow-sm"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#D4C3B3] border border-zinc-200 shadow-sm"></div>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200/50">
<img alt="Aero Casual" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-zinc-900 font-geist">City Walk</h3>
<p className="text-xs text-zinc-500 mt-1 font-normal font-geist">Men's Lifestyle</p>
</div>
<p className="text-sm font-medium text-zinc-900 font-geist">$125</p>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-[#2A2A2A] border border-zinc-200 shadow-sm"></div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border border-zinc-200 px-6 py-3 rounded-full hover:bg-zinc-50 transition-colors font-geist" href="#">
                    View all styles <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="relative rounded-3xl overflow-hidden bg-zinc-900 flex flex-col items-center justify-center text-center py-24 px-6 min-h-[400px]">
<img alt="Runner" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
<div className="relative z-10 max-w-lg">
<h2 className="text-3xl md:text-5xl tracking-tight text-white mb-4 font-playfair font-medium">Find your rhythm.</h2>
<p className="text-base text-zinc-300 mb-8 font-normal font-geist">Join the AERO community and get 15% off your first purchase, plus early access to limited drops.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-zinc-400 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all backdrop-blur-sm" placeholder="Enter your email" type="email"/>
<button className="bg-white text-zinc-900 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors whitespace-nowrap font-geist" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="text-base font-semibold tracking-tighter uppercase mb-4 text-zinc-900 font-geist">A E R O</div>
<p className="text-sm text-zinc-500 font-normal max-w-xs mb-6 font-geist">Designing the future of footwear. Minimal aesthetic, maximum performance.</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4 font-geist">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Men's Shoes</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Women's Shoes</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">New Arrivals</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4 font-geist">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Sustainability</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4 font-geist">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">FAQ</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Size Guide</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal font-geist" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200/60 text-xs text-zinc-400 font-normal">
<p className="font-geist">© 2024 AERO Footwear Inc. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900 transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
