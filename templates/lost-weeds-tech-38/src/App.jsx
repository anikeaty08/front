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
      

<div className="absolute inset-0 bg-grid-pattern z-[-1] pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, white, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent 80%)'}}></div>

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-neutral-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-emerald-600 text-lg group-hover:-rotate-12 transition-transform duration-500" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium tracking-tighter uppercase text-neutral-900">Lost Weeds</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#shop">Shop Hardware</a>
<a className="hover:text-neutral-900 transition-colors" href="#digital">Digital Solutions</a>
<a className="hover:text-neutral-900 transition-colors" href="#custom">Custom Build</a>
</nav>

<div className="flex items-center gap-5 text-neutral-500">
<button className="hover:text-neutral-900 transition-colors hidden sm:block">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="hover:text-neutral-900 transition-colors relative group">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium group-hover:bg-emerald-600 transition-colors">2</span>
</button>
</div>
</div>
</header>

<main className="flex-grow pt-16">

<section className="relative min-h-[90vh] flex items-center overflow-visible pt-10">

<div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200/60 shadow-sm text-neutral-600 text-xs font-normal mb-8 backdrop-blur-md">
<iconify-icon className="text-emerald-500" icon="solar:star-fall-linear"></iconify-icon>
                        Premium Digital Atelier
                    </div>
<h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] text-neutral-900 mb-6">
                        Cultivating <br/>
<span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-emerald-800 to-emerald-600">Elite Tech.</span>
</h1>
<p className="text-base text-neutral-500 mb-10 leading-relaxed max-w-lg font-light">
                        Discover a curated collection of bespoke hardware, advanced AI models, and custom digital infrastructure designed for the modern visionary.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-emerald-700 transition-all duration-300 rounded-md shadow-lg shadow-neutral-900/10 flex items-center gap-2 group" href="#shop">
                            Explore Collection
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white text-neutral-700 border border-neutral-200/80 shadow-sm px-6 py-3 text-sm font-medium hover:border-neutral-300 hover:text-neutral-900 transition-all duration-300 rounded-md" href="#custom">
                            Request Custom Build
                        </a>
</div>
</div>
<div className="relative h-[600px] hidden lg:block rounded-2xl overflow-hidden bg-white border border-neutral-200/50 shadow-2xl shadow-neutral-900/5 group p-2">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 to-transparent pointer-events-none rounded-xl"></div>
<img alt="Abstract Tech" className="w-full h-full object-cover rounded-xl opacity-90 transition-transform duration-1000 group-hover:scale-105 filter contrast-110 saturate-50" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-xl shadow-lg flex items-center justify-between opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900 tracking-tight">QPU Core v2</p>
<p className="text-xs text-neutral-500">System Nominal</p>
</div>
</div>
<div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Online</div>
</div>
</div>
</div>
</section>

<div className="py-10 relative overflow-hidden border-y border-neutral-200/50 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
<span className="text-[10px] font-medium text-neutral-400 tracking-[0.2em] uppercase mb-3">A Brand Experience By</span>
<div className="text-xl font-medium tracking-[0.2em] text-neutral-300">XHUB</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6 relative" id="digital">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-2">Digital Solutions</h2>
<p className="text-sm text-neutral-500 font-light">Intelligent architecture designed for scale.</p>
</div>
<a className="group flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors" href="#">
                    View All Categories 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative h-[400px] rounded-2xl overflow-hidden bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500 block" href="#">
<div className="absolute inset-2 rounded-xl overflow-hidden bg-neutral-100">
<img alt="AI Models" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 filter saturate-50" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"></div>
</div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="flex items-end justify-between">
<div>
<div className="text-[10px] font-medium text-emerald-300 uppercase tracking-widest mb-2">Intelligence</div>
<h3 className="text-2xl font-medium text-white tracking-tight">AI Models</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative h-[400px] rounded-2xl overflow-hidden bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500 block" href="#">
<div className="absolute inset-2 rounded-xl overflow-hidden bg-neutral-100">
<img alt="Web Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 filter saturate-50" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"></div>
</div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="flex items-end justify-between">
<div>
<div className="text-[10px] font-medium text-emerald-300 uppercase tracking-widest mb-2">Infrastructure</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Architecture</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative h-[400px] rounded-2xl overflow-hidden bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500 block" href="#">
<div className="absolute inset-2 rounded-xl overflow-hidden bg-neutral-100">
<img alt="Community Bots" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 filter saturate-50" src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"></div>
</div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="flex items-end justify-between">
<div>
<div className="text-[10px] font-medium text-emerald-300 uppercase tracking-widest mb-2">Ecosystem</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Community</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200/60 relative" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-xs font-normal mb-4">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                        Inventory
                    </div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-3">Featured Harvest</h2>
<p className="text-sm text-neutral-500 max-w-xl mx-auto font-light">Select components and ready-to-deploy software curated for peak performance.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-50 border border-neutral-200/60 mb-4 rounded-xl overflow-hidden flex items-center justify-center group-hover:border-neutral-300 transition-colors">
<div className="absolute top-3 left-3 bg-white text-neutral-900 text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm z-10 border border-neutral-200/50">New</div>
<img alt="Tech Part" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110 filter saturate-50" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>

<div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
<button className="w-full bg-white/90 backdrop-blur-md border border-white shadow-sm text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Hardware</p>
<p className="text-sm font-medium text-neutral-900">$450</p>
</div>
<h3 className="text-sm font-normal text-neutral-700 group-hover:text-emerald-700 transition-colors">Quantum Processing Unit v2</h3>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-50 border border-neutral-200/60 mb-4 rounded-xl overflow-hidden flex items-center justify-center group-hover:border-neutral-300 transition-colors">
<img alt="Tech Part" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110 filter saturate-50" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
<button className="w-full bg-white/90 backdrop-blur-md border border-white shadow-sm text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Software</p>
<p className="text-sm font-medium text-neutral-900">$120</p>
</div>
<h3 className="text-sm font-normal text-neutral-700 group-hover:text-emerald-700 transition-colors">LW Nexus Discord Bot Core</h3>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-50 border border-neutral-200/60 mb-4 rounded-xl overflow-hidden flex items-center justify-center group-hover:border-neutral-300 transition-colors">
<img alt="AI Model" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110 filter saturate-50 contrast-125" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
<button className="w-full bg-white/90 backdrop-blur-md border border-white shadow-sm text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">AI Models</p>
<p className="text-sm font-medium text-neutral-900">$89<span className="text-[10px] text-neutral-400 font-normal">/mo</span></p>
</div>
<h3 className="text-sm font-normal text-neutral-700 group-hover:text-emerald-700 transition-colors">Neural Text Generation API</h3>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-50 border border-neutral-200/60 mb-4 rounded-xl overflow-hidden flex items-center justify-center group-hover:border-neutral-300 transition-colors">
<div className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm z-10 border border-neutral-800">Limited</div>
<img alt="Tech Part" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110 filter grayscale-[40%]" src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
<button className="w-full bg-white/90 backdrop-blur-md border border-white shadow-sm text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="px-1">
<div className="flex justify-between items-start mb-1">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Hardware</p>
<p className="text-sm font-medium text-neutral-900">$850</p>
</div>
<h3 className="text-sm font-normal text-neutral-700 group-hover:text-emerald-700 transition-colors">Emerald Edition Logic Board</h3>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="px-6 py-3 border border-neutral-200 bg-neutral-50 text-sm font-medium text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 transition-colors rounded-md shadow-sm">
                        View Full Inventory
                    </button>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 text-white relative overflow-hidden" id="custom">

<div className="absolute inset-0 bg-grid-pattern-dark opacity-30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-emerald-400 mb-8 backdrop-blur-sm">
<iconify-icon className="text-2xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-white">Bespoke Digital Forging</h2>
<p className="text-neutral-400 text-sm md:text-base mb-10 mx-auto font-light leading-relaxed">
                    Off-the-shelf is an illusion for the extraordinary. Commission a custom website, a tailored AI model, or a proprietary ecosystem designed exclusively for your brand's DNA.
                </p>
<button className="bg-white text-neutral-950 px-8 py-3.5 text-sm font-medium hover:bg-neutral-200 transition-colors rounded-md shadow-xl shadow-white/5 flex items-center gap-2 mx-auto">
                    Initiate Custom Consultation
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200/60 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-4 group inline-flex" href="#">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:leaf-linear"></iconify-icon>
<span className="text-base font-medium tracking-tighter uppercase text-neutral-900">Lost Weeds</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed mb-6 font-light">
                        Premium hardware, custom intelligence, and elite digital architecture. Cultivated for the extraordinary.
                    </p>
<div className="text-[10px] font-medium text-neutral-400 uppercase tracking-[0.2em]">
                        By XHUB
                    </div>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900 mb-4 tracking-wider uppercase">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Tech Hardware</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">AI Models</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Discord Bots</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Web Templates</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900 mb-4 tracking-wider uppercase">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Custom Build</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Consulting</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">API Access</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900 mb-4 tracking-wider uppercase">Legal &amp; Support</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400 font-light">© 2023 Lost Weeds by XHub. All rights reserved.</p>
<div className="w-4 h-4 bg-transparent cursor-default"></div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="bg-neutral-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-neutral-900/20 hover:scale-105 transition-all duration-300 group relative border border-neutral-800">
<iconify-icon className="group-hover:hidden transition-all" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-hover:block transition-all" icon="solar:pen-linear" width="22"></iconify-icon>

<span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-neutral-900 rounded-full"></span>
</button>
</div>

    </>
  );
}
