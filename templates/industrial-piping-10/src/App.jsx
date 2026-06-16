import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPage(pageId) {
            const home = document.getElementById('home-view');
            const catalog = document.getElementById('catalog-view');
            
            // Scroll to top
            window.scrollTo(0, 0);

            if (pageId === 'home') {
                home.classList.remove('hidden');
                catalog.classList.add('hidden');
            } else if (pageId === 'catalog') {
                home.classList.add('hidden');
                catalog.classList.remove('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<div className="text-lg w-36 font-semibold text-zinc-900 tracking-tighter">
<img src="https://palaplast.com/wp-content/themes/palaplast/dist/images/palaplast-logo.png"/>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer" onclick="showPage('home')">Home</button>
<button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer" onclick="showPage('catalog')">Catalog</button>
<button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer">Engineering</button>
<button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer">Sustainability</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 bg-transparent border-0 cursor-pointer">Partner Portal</button>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors border-0 cursor-pointer">
                    Get Quote
                </button>
</div>
</div>
</nav>

<div className="" id="main-content">

<div className="fade-in" id="home-view">

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                            ISO 9001:2015 Certified Manufacturing
                        </div>
<h1 className="text-5xl md:text-7xl font-medium text-zinc-900 tracking-tight mb-8 leading-[1.1]">
                            Infrastructure for the<br/>
<span className="text-zinc-400">flow of tomorrow.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed max-w-2xl mb-10">
                            We engineer high-performance HDPE, PVC, and composite piping systems for global irrigation, industrial heating, and municipal water supply networks.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all text-sm group cursor-pointer" onclick="showPage('catalog')">
                                Browse Products
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-all text-sm cursor-pointer">
                                Technical Specs
                            </button>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-semibold text-zinc-900 tracking-tight mb-1">25M+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Meters Installed</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-zinc-900 tracking-tight mb-1">42</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Countries Served</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-zinc-900 tracking-tight mb-1">50yr</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Durability Guarantee</div>
</div>
<div>
<div className="text-3xl font-semibold text-zinc-900 tracking-tight mb-1">0.01%</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Defect Rate</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div className="max-w-lg">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-3">Precision Manufacturing</h2>
<p className="text-zinc-500">Witness our automated extrusion lines and quality control protocols in action at our Hamburg facility.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors mt-4 md:mt-0" href="#">
                            Watch Full Documentary <iconify-icon className="ml-1" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>

<div className="relative w-full rounded-2xl overflow-hidden aspect-video bg-zinc-100 group cursor-pointer border border-zinc-200 shadow-sm">
<img alt="Factory Interior" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-zinc-900/20 transition-colors bg-zinc-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-2xl transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="text-zinc-900" icon="lucide:play" strokeWidth="2" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-4">Core Solutions</h2>
<p className="text-zinc-500 max-w-md">Engineered for thermal stability, pressure resistance, and environmental longevity.</p>
</div>
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors" onclick="showPage('catalog')">
                            View Full Catalog
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Irrigation</h3>
<p className="text-zinc-500 text-sm mb-6">Precision drip lines and sprinklers for agriculture.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-blue-600 transition-colors flex items-center">Learn more <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">HVAC &amp; Heating</h3>
<p className="text-zinc-500 text-sm mb-6">PEX-a pipes for underfloor heating systems.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-orange-600 transition-colors flex items-center">Learn more <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-100 text-zinc-900 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Municipal Water</h3>
<p className="text-zinc-500 text-sm mb-6">High-density polyethylene for safe transport.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors flex items-center">Learn more <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-6">Engineered for Extremes</h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors mt-1">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">Corrosion Resistance</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Our advanced polymer composites are immune to electrochemical corrosion, ensuring a service life exceeding 50 years.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors mt-1">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<h4 className="text-zinc-900 font-medium mb-1">Thermal Efficiency</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Low thermal conductivity materials minimize heat loss in transport, reducing energy consumption by up to 15%.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
<div className="relative bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
<div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-6">
<span className="text-xs font-mono text-zinc-400">SPEC_SHEET_V2.0</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-500 w-24">Tensile Strength</span>
<div className="flex-1 h-8 bg-zinc-50 rounded flex items-center px-2">
<div className="h-4 bg-zinc-800 rounded w-[85%]"></div>
</div>
<span className="text-xs font-mono text-zinc-900">32 MPa</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-500 w-24">Flexural Modulus</span>
<div className="flex-1 h-8 bg-zinc-50 rounded flex items-center px-2">
<div className="h-4 bg-zinc-300 rounded w-[60%]"></div>
</div>
<span className="text-xs font-mono text-zinc-900">1200 MPa</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex justify-between items-center">
<div className="text-xs text-zinc-400">Certified by TUV &amp; ISO</div>
<iconify-icon className="text-blue-500" icon="lucide:badge-check" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ready to upgrade your infrastructure?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">Get in touch with our engineering team for custom consultations.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-colors cursor-pointer">
                            Request Catalogue
                        </button>
<button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors cursor-pointer">
                            Contact Sales
                        </button>
</div>
</div>
</section>
</div>


<div className="hidden fade-in" id="catalog-view">

<div className="bg-zinc-50 border-b border-zinc-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<div className="text-sm font-medium text-blue-600 mb-2">Product Showcase</div>
<h1 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">Component Catalog</h1>
<p className="text-zinc-500 mt-3 max-w-2xl">Complete reference for piping systems, fittings, and installation tools.</p>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-2">
<iconify-icon icon="lucide:download" width="16"></iconify-icon> Download Full PDF
                            </button>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col lg:flex-row gap-10">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-400 focus:ring-0 bg-white placeholder:text-zinc-400" placeholder="Search Reference ID..." type="text"/>
</div>

<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-4">Categories</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 text-[10px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Pipes</span>
<span className="ml-auto text-xs text-zinc-400">124</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 text-[10px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Fittings</span>
<span className="ml-auto text-xs text-zinc-400">450</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 text-[10px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Valves</span>
<span className="ml-auto text-xs text-zinc-400">86</span>
</label>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-4">Pressure Rating</h3>
<div className="space-y-4">
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range"/>
<div className="flex justify-between text-xs text-zinc-500">
<span>PN6</span>
<span>PN32</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-4">Diameter (mm)</h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 text-xs border border-zinc-200 rounded-md bg-zinc-900 text-white hover:bg-zinc-800">20</button>
<button className="px-3 py-1 text-xs border border-zinc-200 rounded-md text-zinc-600 hover:border-zinc-400">32</button>
<button className="px-3 py-1 text-xs border border-zinc-200 rounded-md text-zinc-600 hover:border-zinc-400">50</button>
<button className="px-3 py-1 text-xs border border-zinc-200 rounded-md text-zinc-600 hover:border-zinc-400">75</button>
<button className="px-3 py-1 text-xs border border-zinc-200 rounded-md text-zinc-600 hover:border-zinc-400">110</button>
</div>
</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group border border-zinc-200 rounded-xl p-4 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 bg-white flex flex-col">
<div className="bg-zinc-50 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:cylinder" width="64"></iconify-icon>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-[10px] font-semibold border border-zinc-200 text-zinc-600">PN16</div>
<div className="absolute bottom-3 left-3 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-[10px] font-medium border border-blue-100">In Stock</div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-xs text-blue-600 font-medium mb-1">HDPE Series</div>
<h3 className="text-base font-medium text-zinc-900">Pipe 110mm SDR11</h3>
</div>
</div>
<div className="text-sm text-zinc-500 mb-4 line-clamp-2">High density polyethylene pipe designed for potable water distribution. ISO 4427 compliant.</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">SKU Ref</span>
<span className="text-xs font-mono text-zinc-600">HDPE-110-11</span>
</div>
<button className="text-xs font-medium text-zinc-900 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                                        Spec Sheet <iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-xl p-4 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 bg-white flex flex-col">
<div className="bg-zinc-50 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:circle-dot" width="64"></iconify-icon>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-[10px] font-semibold border border-zinc-200 text-zinc-600">EF</div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-xs text-orange-600 font-medium mb-1">Fittings</div>
<h3 className="text-base font-medium text-zinc-900">Electrofusion Coupler</h3>
</div>
</div>
<div className="text-sm text-zinc-500 mb-4 line-clamp-2">90mm coupler with integrated heating coils and barcode for automated welding.</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">SKU Ref</span>
<span className="text-xs font-mono text-zinc-600">EF-CPL-90</span>
</div>
<button className="text-xs font-medium text-zinc-900 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                                        Spec Sheet <iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-xl p-4 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 bg-white flex flex-col">
<div className="bg-zinc-50 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:git-commit" width="64"></iconify-icon>
<div className="absolute bottom-3 left-3 bg-zinc-800 text-white px-2 py-1 rounded-md text-[10px] font-medium">Made to Order</div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-xs text-green-600 font-medium mb-1">Irrigation</div>
<h3 className="text-base font-medium text-zinc-900">Drip Line Pro 16mm</h3>
</div>
</div>
<div className="text-sm text-zinc-500 mb-4 line-clamp-2">Pressure compensating emitters spaced at 30cm intervals. UV stabilized.</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">SKU Ref</span>
<span className="text-xs font-mono text-zinc-600">IR-DL-1630</span>
</div>
<button className="text-xs font-medium text-zinc-900 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                                        Spec Sheet <iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-xl p-4 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 bg-white flex flex-col">
<div className="bg-zinc-50 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:corner-down-right" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-xs text-orange-600 font-medium mb-1">Fittings</div>
<h3 className="text-base font-medium text-zinc-900">Elbow 90° 63mm</h3>
</div>
</div>
<div className="text-sm text-zinc-500 mb-4 line-clamp-2">Injection molded PE100 elbow for butt fusion applications.</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">SKU Ref</span>
<span className="text-xs font-mono text-zinc-600">FT-EL-9063</span>
</div>
<button className="text-xs font-medium text-zinc-900 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                                        Spec Sheet <iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-xl p-4 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 bg-white flex flex-col">
<div className="bg-zinc-50 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:settings-2" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-xs text-zinc-500 font-medium mb-1">Tools</div>
<h3 className="text-base font-medium text-zinc-900">Beveling Tool</h3>
</div>
</div>
<div className="text-sm text-zinc-500 mb-4 line-clamp-2">Manual beveler for pipe ends 20-63mm. Essential for socket fusion.</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">SKU Ref</span>
<span className="text-xs font-mono text-zinc-600">TL-BVL-001</span>
</div>
<button className="text-xs font-medium text-zinc-900 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                                        Spec Sheet <iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-xl p-4 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 bg-white flex flex-col">
<div className="bg-zinc-50 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:minimize" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-xs text-orange-600 font-medium mb-1">Fittings</div>
<h3 className="text-base font-medium text-zinc-900">Reducer 110-90mm</h3>
</div>
</div>
<div className="text-sm text-zinc-500 mb-4 line-clamp-2">Concentric reducer kit with long spigot. Pressure rated PN16.</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">SKU Ref</span>
<span className="text-xs font-mono text-zinc-600">FT-RED-1190</span>
</div>
<button className="text-xs font-medium text-zinc-900 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1">
                                        Spec Sheet <iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-6">
<span className="text-sm text-zinc-500">Showing 6 of 854 products</span>
<div className="flex gap-2">
<button className="px-4 py-2 border border-zinc-200 rounded-lg text-sm text-zinc-500 hover:border-zinc-400 transition-colors">Previous</button>
<button className="px-4 py-2 bg-zinc-900 text-white border border-zinc-900 rounded-lg text-sm hover:bg-zinc-800 transition-colors">Next</button>
</div>
</div>
</div>
</div>
</div>
<section className="bg-zinc-50 py-16 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Need a custom specification?</h3>
<p className="text-zinc-500 mb-6">We manufacture pipes with custom SDR ratings and color coding upon request.</p>
<button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center justify-center">
                        Contact Engineering Team <iconify-icon className="ml-1" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</section>
</div>

</div>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-zinc-900 rounded-sm flex items-center justify-center text-white">
<iconify-icon icon="lucide:aperture" width="12"></iconify-icon>
</div>
<span className="text-zinc-900 font-semibold tracking-tighter">AQUALINE</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs">
                        Advanced piping solutions for a sustainable industrial future. Manufactured with precision.
                    </p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Products</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer p-0 text-left" onclick="showPage('catalog')">Irrigation</button></li>
<li><button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer p-0 text-left" onclick="showPage('catalog')">Heating</button></li>
<li><button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer p-0 text-left" onclick="showPage('catalog')">Water Supply</button></li>
<li><button className="hover:text-zinc-900 transition-colors bg-transparent border-0 cursor-pointer p-0 text-left" onclick="showPage('catalog')">Fittings</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Certifications</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Aqualine Systems Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-900" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-zinc-900" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="hover:text-zinc-900" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
