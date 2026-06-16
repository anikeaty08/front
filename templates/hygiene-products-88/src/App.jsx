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
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
950: '#030712',
}
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
      

<nav className="fixed top-0 w-full z-50 border-b glass-panel border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-sm flex items-center justify-center bg-stone-900 text-white">
<span className="text-xs font-semibold tracking-tighter">B</span>
</div>
<span className="text-sm font-semibold tracking-tight group-hover:text-stone-600 transition-colors text-stone-900">BURHANI TISSUE</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-stone-500 transition-colors font-medium hover:text-stone-900" href="#products">Products</a>
<a className="text-sm text-stone-500 transition-colors font-medium hover:text-stone-900" href="#about">Process</a>
<a className="text-sm text-stone-500 transition-colors font-medium hover:text-stone-900" href="#sustainability">Sustainability</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Sign in</a>
<a className="transition-colors px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-stone-900 text-white hover:bg-stone-800" href="#contact">
                    Contact Sales
                </a>
</div>
</div>
</nav>

<main className="sm:pt-40 sm:pb-24 overflow-hidden subtle-grid pt-40 pb-24 relative">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent via-stone-200"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 animate-fade-in-up bg-stone-50 border-stone-200">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium uppercase tracking-wide text-stone-600">New: Bamboo Series Eco-Rolls</span>
</div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tighter mb-6 leading-[1.1] text-stone-900">
                Engineered for <br className="hidden sm:block"/>
<span className="text-stone-400">everyday</span> hygiene.
            </h1>
<p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Manufacturing premium table tissues, kitchen rolls, and napkins with a focus on softness and sustainability. Meeting the demands of modern households and businesses.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 group shadow-lg bg-stone-900 text-white hover:bg-stone-800 shadow-stone-200/50">
                    View Products
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 border rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-white border-stone-200 text-stone-700 hover:bg-stone-50">
<iconify-icon icon="solar:file-download-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Download Catalog
                </button>
</div>
</div>
</main>

<section className="py-24 border-t border-stone-100 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl border-stone-100 hover:border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-stone-100/50">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm bg-white border-stone-100 text-stone-900">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-stone-900">Eco-Friendly Materials</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Responsible sourcing and sustainable manufacturing processes. We utilize recyclable materials to minimize environmental impact without compromising quality.
                    </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl border-stone-100 hover:border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-stone-100/50">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm bg-white border-stone-100 text-stone-900">
<iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-stone-900">Premium Softness</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Advanced layering technology creates tissues that are gentle on the skin yet durable enough for tough messes. The perfect balance of comfort and strength.
                    </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl border-stone-100 hover:border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-stone-100/50">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm bg-white border-stone-100 text-stone-900">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-stone-900">Certified Hygiene</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Manufactured in sterile environments. Our products meet rigorous health standards, making them safe for both food contact and personal care.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-stone-50 border-stone-100" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-stone-900">Product Collection</h2>
<p className="text-stone-500 max-w-md text-sm leading-relaxed">
                        From household essentials to commercial bulk supplies, explore our range of high-absorbency paper products.
                    </p>
</div>
<a className="text-sm font-medium flex items-center gap-1 transition-colors text-stone-900 hover:text-stone-600" href="#">
                    View Full Catalog <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border overflow-hidden transition-all cursor-pointer bg-white border-stone-200 hover:border-stone-300">
<div className="h-64 relative flex items-center justify-center overflow-hidden bg-stone-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] opacity-50 from-white via-stone-100 to-stone-200"></div>

<div className="w-32 h-20 rounded shadow-sm border transform group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center bg-white border-stone-100">
<span className="text-[10px] tracking-widest font-semibold text-stone-300">TISSUE</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-stone-900">Premium Table Tissues</h3>
<span className="text-xs px-2 py-1 rounded bg-stone-100 text-stone-600">200 Pulls</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Ultra-soft 2-ply facial tissues designed for dining tables and living areas. High absorbency.</p>
<div className="flex items-center gap-4 border-t pt-4 border-stone-100">
<div className="flex items-center gap-1 text-xs text-stone-500">
<iconify-icon icon="solar:layers-linear" width="14"></iconify-icon> 2-Ply
                            </div>
<div className="flex items-center gap-1 text-xs text-stone-500">
<iconify-icon icon="solar:box-minimalistic-linear" width="14"></iconify-icon> Bulk Pack
                            </div>
</div>
</div>
</div>

<div className="group rounded-xl border overflow-hidden transition-all cursor-pointer bg-white border-stone-200 hover:border-stone-300">
<div className="h-64 relative flex items-center justify-center overflow-hidden bg-stone-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] opacity-50 from-white via-stone-100 to-stone-200"></div>

<div className="w-16 h-32 rounded shadow-sm border transform group-hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between py-2 items-center bg-white border-stone-100">
<div className="w-full h-px bg-stone-100"></div>
<div className="w-full h-px bg-stone-100"></div>
<div className="w-full h-px bg-stone-100"></div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-stone-900">Heavy-Duty Kitchen Roll</h3>
<span className="text-xs px-2 py-1 rounded bg-stone-100 text-stone-600">Extra Strong</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Embossed texture for maximum spill absorption. Ideal for kitchen cleaning and food prep.</p>
<div className="flex items-center gap-4 border-t pt-4 border-stone-100">
<div className="flex items-center gap-1 text-xs text-stone-500">
<iconify-icon icon="solar:layers-linear" width="14"></iconify-icon> 3-Ply
                            </div>
<div className="flex items-center gap-1 text-xs text-stone-500">
<iconify-icon icon="solar:water-linear" width="14"></iconify-icon> Absorbent
                            </div>
</div>
</div>
</div>

<div className="group rounded-xl border overflow-hidden transition-all cursor-pointer bg-white border-stone-200 hover:border-stone-300">
<div className="h-64 relative flex items-center justify-center overflow-hidden bg-stone-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] opacity-50 from-white via-stone-100 to-stone-200"></div>

<div className="w-24 h-24 rounded shadow-sm border transform rotate-45 group-hover:-translate-y-2 transition-transform duration-500 bg-white border-stone-100"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-stone-900">Soft Dinner Napkins</h3>
<span className="text-xs px-2 py-1 rounded bg-stone-100 text-stone-600">Commercial</span>
</div>
<p className="text-xs text-stone-500 mb-4 line-clamp-2">Elegant, soft-touch napkins suitable for restaurants, cafes, and events. Eco-friendly pulp.</p>
<div className="flex items-center gap-4 border-t pt-4 border-stone-100">
<div className="flex items-center gap-1 text-xs text-stone-500">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon> Biodegradable
                            </div>
<div className="flex items-center gap-1 text-xs text-stone-500">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon> Premium
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div>
<p className="text-4xl font-medium tracking-tighter mb-2 text-stone-900">100%</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Hygienic Process</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tighter mb-2 text-stone-900">50+</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Business Partners</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tighter mb-2 text-stone-900">24/7</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Customer Support</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tighter mb-2 text-stone-900">Eco</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Conscious Brand</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-stone-900 text-white" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 bg-stone-800"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter mb-6">Partner with Burhani.</h2>
<p className="text-lg mb-10 font-light text-stone-400">
                Secure reliable supply chains for your business or home. Experience quality that builds trust.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 rounded-md text-sm font-medium transition-colors bg-white text-stone-950 hover:bg-stone-100">
                    Get a Quote
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border rounded-md text-sm font-medium transition-colors border-stone-700 text-stone-300 hover:bg-stone-800">
                    Contact Support
                </button>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded-sm flex items-center justify-center bg-stone-900 text-white">
<span className="text-[10px] font-semibold">B</span>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">BURHANI TISSUE</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs">
                        Committed to quality, hygiene, and customer satisfaction. The trusted choice for modern tissue products.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-stone-900">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Table Tissues</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Kitchen Rolls</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Napkins</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Bulk Orders</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-stone-900">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">About Us</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Careers</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Sustainability</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">News</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-stone-900">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-stone-900">Social</h4>
<ul className="space-y-3">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Twitter</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-stone-100">
<p className="text-[10px] text-stone-400">© 2024 Burhani Tissue Manufacturing. All rights reserved.</p>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-[10px] text-stone-500">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
