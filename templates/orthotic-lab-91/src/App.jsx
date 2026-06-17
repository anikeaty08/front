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
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.6s ease-out',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
}
}
}
}



        function app() {
            return {
                currentPath: window.location.pathname === '' ? '/' : window.location.pathname,
                scrolled: false,
                mobileMenuOpen: false,
                navLinks: [
                    { text: 'Custom Orthotics', url: '/collections/custom-products' },
                    { text: 'Resources', url: '/pages/order-form' },
                    { text: 'About', url: '/pages/contact' }
                ],
                products: [
                    {
                        id: 1,
                        title: 'Functional Control',
                        category: 'Pathology Management',
                        code: 'RX-F100',
                        url: '/products/functional-orthotics',
                        desc: 'Rigid polypropylene shell with deep heel cup for maximum biomechanical control. Best for plantar fasciitis.',
                        longDesc: 'Our flagship functional orthotic is precision-milled from polypropylene. It features a deep heel cup and high medial flanges to control subtalar joint pronation. The device is finished with a durable vinyl top cover and optional extrinsic posting.',
                        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
                        features: ['3mm or 4mm Polypropylene', 'Deep Heel Cup (14mm)', 'Extrinsic Rearfoot Post', 'Vinyl Top Cover']
                    },
                    {
                        id: 2,
                        title: 'Endurance Sport',
                        category: 'Athletic Performance',
                        code: 'RX-S200',
                        url: '/products/sport-orthotics',
                        desc: 'Semi-flexible shell with high-rebound cushioning. Designed for runners and court athletes.',
                        longDesc: 'Engineered for shock absorption and energy return. The shell is slightly more flexible to allow for natural gait mechanics during high-impact activities, while a Poron middle layer dampens impact forces.',
                        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800',
                        features: ['Semi-flex Poly', 'Poron Arch Fill', 'Full Length Cushion', 'Anti-friction Top Cover']
                    },
                    {
                        id: 3,
                        title: 'Dress Slim',
                        category: 'Footwear Specific',
                        code: 'RX-D300',
                        url: '/products/dress-orthotics',
                        desc: 'Ultra-low profile for dress shoes, loafers, and cleats. Narrow grind width.',
                        longDesc: 'The Dress Slim is ground significantly narrower than standard devices. It omits the heel cup bulk to fit into low-volume footwear without heel slippage. Ideal for soccer cleats or women’s dress flats.',
                        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
                        features: ['Carbon or Thin Poly', 'No Heel Cup', 'Narrow Grind', 'Leather or Suede Top']
                    },
                    {
                        id: 4,
                        title: 'Diabetic Accommodative',
                        category: 'At-Risk Feet',
                        code: 'RX-A400',
                        url: '/products/diabetic-orthotics',
                        desc: 'Multi-density soft materials to redistribute pressure and prevent ulceration.',
                        longDesc: 'Constructed using a base of soft EVA or Cork, layered with Plastazote. This device is designed to conform to deformities and reduce peak pressure points for diabetic or arthritic patients.',
                        image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800',
                        features: ['EVA Base', 'Plastazote Top', 'Metatarsal Pads', 'Total Contact Fit']
                    },
                    {
                        id: 5,
                        title: 'Carbon Elite',
                        category: 'Premium',
                        code: 'RX-C500',
                        url: '/products/carbon-orthotics',
                        desc: 'Featherweight TL-2100 carbon fiber. High stiffness-to-weight ratio.',
                        longDesc: 'For patients demanding the lightest device possible. The carbon shell is razor thin yet extremely rigid, taking up virtually no room in the shoe.',
                        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800',
                        features: ['TL-2100 Carbon', 'Minimal Bulk', 'High Rigidity', 'Synthetic Suede Top']
                    },
                    {
                        id: 6,
                        title: 'Children’s Gait',
                        category: 'Pediatric',
                        code: 'RX-P600',
                        url: '/products/pediatric-orthotics',
                        desc: 'Deep heel cup UCBL style control for pediatric flatfoot.',
                        longDesc: 'Designed to control severe pronation in developing feet. High medial and lateral flanges hold the calcaneus in neutral alignment.',
                        image: 'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?auto=format&fit=crop&q=80&w=800',
                        features: ['Deep UCBL Cup', 'High Flanges', 'Durable Top Cover', 'Gait Plate Extensions']
                    }
                ],

                initApp() {
                    // Handle Scroll for Nav transparency
                    window.addEventListener('scroll', () => {
                        this.scrolled = window.scrollY > 20;
                    });

                    // Handle Back Button
                    window.addEventListener('popstate', (e) => {
                        this.currentPath = window.location.pathname;
                        this.refreshIcons();
                        window.scrollTo(0, 0);
                    });

                    // Initial Icon Load
                    this.refreshIcons();
                },

                navigate(path) {
                    window.history.pushState({}, '', path);
                    this.currentPath = path;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    this.refreshIcons();
                },

                getCurrentProduct() {
                    return this.products.find(p => p.url === this.currentPath);
                },

                refreshIcons() {
                    setTimeout(() => {
                        if (window.lucide) lucide.createIcons();
                    }, 50);
                }
            }
        }
    
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
      

<nav :className="scrolled ? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-sm' : 'bg-transparent border-transparent'" className="fixed top-0 w-full z-50 transition-all duration-300 border-b">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a @click.prevent="navigate('/')" className="flex items-center gap-2.5 z-50" href="/">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="2"></i>
</div>
<span :className="!scrolled &amp;&amp; currentPath === '/' ? 'text-white' : 'text-slate-900'" className="text-sm font-bold tracking-tight text-slate-900">
                    RX<span className="font-normal opacity-70">ORTHOTICS</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<template x-htmlFor="link in navLinks">
<a :className="(!scrolled &amp;&amp; currentPath === '/') ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-blue-600'" :href="link.url" @click.prevent="navigate(link.url)" className="transition-colors duration-200" x-text="link.text"></a>
</template>
</div>

<div className="hidden md:flex items-center gap-4">
<a :className="(!scrolled &amp;&amp; currentPath === '/') ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'" @click.prevent="navigate('/pages/contact')" className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200" href="/pages/contact">
                    Log In
                </a>
<a @click.prevent="navigate('/pages/become-a-client')" className="text-xs font-semibold px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95" href="/pages/become-a-client">
                    Become a Client
                </a>
</div>

<button :className="(!scrolled &amp;&amp; currentPath === '/') ? 'text-white' : 'text-slate-900'" @click="mobileMenuOpen = !mobileMenuOpen" className="md:hidden z-50 p-2">
<i :data-lucide="mobileMenuOpen ? 'x' : 'menu'" className="w-5 h-5"></i>
</button>
</div>

<div className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-center" x-cloak="" x-show="mobileMenuOpen" x-transition.opacity="">
<template x-htmlFor="link in navLinks">
<a :href="link.url" @click.prevent="mobileMenuOpen = false; navigate(link.url)" className="text-xl font-medium text-white hover:text-blue-400" x-text="link.text"></a>
</template>
<div className="h-px w-12 bg-slate-700 my-4"></div>
<a @click.prevent="mobileMenuOpen = false; navigate('/pages/become-a-client')" className="text-base font-semibold text-blue-400" href="/pages/become-a-client">Become a Client</a>
</div>
</nav>

<main className="min-h-screen pt-0">

<div x-show="currentPath === '/'" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0">

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-bg text-white pt-20">
<div className="absolute inset-0 grid-pattern opacity-30"></div>
<div className="absolute inset-0 contour-lines opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-[-5vh]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-8 animate-slide-up">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        Lab Operations Online
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-slide-up" style={{animationDelay: '0.1s'}}>
                        Precision engineered<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">for human motion.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                        The digital-first orthotic lab partnering with forward-thinking podiatrists. Sub-millimeter accuracy from 3D scan to fabrication.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
<a @click.prevent="navigate('/collections/custom-products')" className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-all hover:scale-105" href="/collections/custom-products">
                            Browse Catalogue
                        </a>
<a @click.prevent="navigate('/pages/order-form')" className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 border border-slate-700 text-white text-sm font-semibold rounded-full hover:bg-slate-700 transition-all" href="/pages/order-form">
                            Send a Case
                        </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<i className="w-5 h-5" data-lucide="scan-line"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Universal Scan Input</h3>
<p className="text-sm text-slate-500 leading-relaxed">Accepting STL, OBJ, and PLY from all major scanners including iPad Structure, EinScan, and dedicated foot scanners.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Direct Milling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Polypropylene and EVA devices are milled directly from CAD files, eliminating the variability of vacuum forming.</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">5-Day Turnaround</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our optimized digital workflow allows us to ship standard custom orders within 5 business days of receipt.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Clinical Solutions</h2>
<p className="mt-2 text-slate-500 text-sm">Targeted devices for specific pathologies.</p>
</div>
<a @click.prevent="navigate('/collections/custom-products')" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1" href="/collections/custom-products">
                            View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<template :key="idx" x-htmlFor="(product, idx) in products.slice(0, 4)">
<a :href="product.url" @click.prevent="navigate(product.url)" className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img :src="product.image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors"></div>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1" x-text="product.title"></h4>
<p className="text-xs text-slate-500" x-text="product.category"></p>
</div>
</a>
</template>
</div>
</div>
</section>
</div>

<div className="pt-24 pb-24" x-cloak="" x-show="currentPath === '/collections/custom-products'">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 border-b border-slate-200 pb-8">
<div>
<h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Catalogue</h1>
<p className="text-slate-500 text-sm">Select a device type to configure specifications.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white">All</button>
<button className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">Sport</button>
<button className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">Accommodative</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<template :key="product.id" x-htmlFor="product in products">
<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
<img :alt="product.title" :src="product.image" className="w-full h-full object-cover"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-900 border border-slate-100" x-text="product.code"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-bold text-slate-900" x-text="product.title"></h3>
<p className="text-xs text-slate-500 mt-1" x-text="product.category"></p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-2" x-text="product.desc"></p>
<a :href="product.url" @click.prevent="navigate(product.url)" className="block w-full py-3 px-4 bg-white border border-slate-200 rounded-lg text-center text-sm font-semibold text-slate-700 group-hover:border-slate-300 transition-colors">
                                    View Specifications
                                </a>
</div>
</div>
</template>
</div>
</div>
</div>

<div className="pt-24 pb-24" x-cloak="" x-show="currentPath.startsWith('/products/')">
<template x-if="getCurrentProduct()">
<div className="max-w-7xl mx-auto px-6">
<button @click="navigate('/collections/custom-products')" className="group flex items-center text-xs font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors">
<i className="w-3 h-3 mr-1.5 transition-transform group-hover:-translate-x-1" data-lucide="arrow-left"></i> Back to Catalogue
                    </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">

<div className="space-y-4">
<div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">
<img :src="getCurrentProduct().image" className="w-full h-full object-cover"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[3/2] bg-slate-50 rounded-xl border border-slate-200"></div>
<div className="aspect-[3/2] bg-slate-50 rounded-xl border border-slate-200"></div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">Prescription Only</span>
<span className="text-xs text-slate-400 font-mono" x-text="getCurrentProduct().code"></span>
</div>
<h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6" x-text="getCurrentProduct().title"></h1>
<div className="prose prose-slate prose-sm text-slate-600 mb-8">
<p className="text-base leading-relaxed" x-text="getCurrentProduct().longDesc"></p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-10">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="settings-2"></i> Standard Configuration
                                </h3>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
<template x-htmlFor="feature in getCurrentProduct().features">
<li className="flex items-start gap-2.5 text-xs text-slate-600">
<i className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span x-text="feature"></span>
</li>
</template>
</ul>
</div>
<div className="flex gap-4">
<a @click.prevent="navigate('/pages/order-form')" className="flex-1 py-4 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all text-center shadow-lg shadow-slate-900/10" href="/pages/order-form">
                                    Download RX Form
                                </a>
<a @click.prevent="navigate('/pages/contact')" className="flex-1 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-sm font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all text-center" href="/pages/contact">
                                    Clinician Inquiry
                                </a>
</div>
</div>
</div>
</div>
</template>
</div>

<div className="pt-24 pb-24 px-6" x-cloak="" x-show="currentPath.startsWith('/pages/')">
<div className="max-w-3xl mx-auto animate-fade-in">

<template x-if="currentPath === '/pages/contact'">
<div>
<div className="text-center mb-12">
<h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Contact Lab Support</h1>
<p className="text-slate-500">We are here to help with order inquiries, clinical questions, and account setup.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">First Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Last Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
</form>
</div>
</div>
</template>

<template x-if="currentPath === '/pages/order-form'">
<div>
<div className="text-center mb-12">
<h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Prescription Forms</h1>
<p className="text-slate-500">Download interactive PDFs. Fill digitally or print.</p>
</div>
<div className="grid gap-4">
<div className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="text-left">
<h3 className="font-semibold text-slate-900">Standard Custom Orthotic RX</h3>
<p className="text-xs text-slate-500">For functional, accommodative, and general use.</p>
</div>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-blue-600" data-lucide="download"></i>
</div>
<div className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="text-left">
<h3 className="font-semibold text-slate-900">Richie Brace / AFO RX</h3>
<p className="text-xs text-slate-500">For ankle-foot orthoses casting.</p>
</div>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-blue-600" data-lucide="download"></i>
</div>
</div>
</div>
</template>

<template x-if="currentPath === '/pages/become-a-client'">
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-8 shadow-xl shadow-blue-500/20">
<i className="w-8 h-8" data-lucide="user-plus"></i>
</div>
<h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Partner with RX Orthotics</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-10">
                            Join a network of elite clinicians utilizing our digital lab for precision outcomes. 
                            We provide volume-based pricing and dedicated technical support.
                        </p>
<div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 mb-10 text-left">
<h3 className="font-bold text-slate-900 mb-4">Onboarding Process</h3>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">1</div>
<p className="text-sm text-slate-600">Fill out the new account application form.</p>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">2</div>
<p className="text-sm text-slate-600">Our team configures your scanner preferences (if applicable).</p>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">3</div>
<p className="text-sm text-slate-600">Receive your starter kit and shipping labels.</p>
</div>
</div>
</div>
<button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">Open Account Application</button>
</div>
</template>
</div>
</div>

<div className="pt-24 pb-24 px-6" x-cloak="" x-show="currentPath.startsWith('/policies/')">
<div className="max-w-2xl mx-auto prose prose-slate">
<h1 className="text-3xl font-bold text-slate-900 capitalize tracking-tight" x-text="currentPath.split('/').pop().replace('-', ' ')"></h1>
<p className="text-xs text-slate-400 font-mono mb-8">Ref: L-2023-V4</p>
<div className="bg-white p-8 rounded-2xl border border-slate-200 text-sm leading-relaxed space-y-4">
<p><strong>1. Manufacturing Warranty</strong><br/>RX Orthotics warrants that all custom orthotic devices will be free from defects in materials and workmanship. The polypropylene shell is warranted against breakage for the lifetime of the patient.</p>
<p><strong>2. Top Covers</strong><br/>Top covers and soft tissue supplementation (padding) are warranted for six (6) months from the date of shipment against normal wear and tear.</p>
<p><strong>3. Adjustments</strong><br/>Fit adjustments are provided at no charge for 90 days following the shipping date. This includes narrowing, grinding, or adding arch fill. Major structural changes requiring a new shell are not considered adjustments.</p>
<p className="italic text-slate-400">For specific returns, please contact support prior to shipping devices back to the lab.</p>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a @click.prevent="navigate('/')" className="flex items-center gap-2 mb-6" href="/">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="activity"></i>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">RX ORTHOTICS</span>
</a>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
                        Combining advanced biomechanics with digital manufacturing to serve the modern clinician.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-4">Products</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a @click.prevent="navigate('/products/functional-orthotics')" className="hover:text-blue-600 transition-colors" href="/products/functional-orthotics">Functional</a></li>
<li><a @click.prevent="navigate('/products/sport-orthotics')" className="hover:text-blue-600 transition-colors" href="/products/sport-orthotics">Sport Performance</a></li>
<li><a @click.prevent="navigate('/products/dress-orthotics')" className="hover:text-blue-600 transition-colors" href="/products/dress-orthotics">Dress / Slim</a></li>
<li><a @click.prevent="navigate('/collections/custom-products')" className="hover:text-blue-600 transition-colors" href="/collections/custom-products">Full Catalogue</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a @click.prevent="navigate('/pages/order-form')" className="hover:text-blue-600 transition-colors" href="/pages/order-form">Order Forms</a></li>
<li><a @click.prevent="navigate('/pages/become-a-client')" className="hover:text-blue-600 transition-colors" href="/pages/become-a-client">New Account</a></li>
<li><a @click.prevent="navigate('/pages/contact')" className="hover:text-blue-600 transition-colors" href="/pages/contact">Contact Support</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a @click.prevent="navigate('/policies/warranty')" className="hover:text-blue-600 transition-colors" href="/policies/warranty">Warranty</a></li>
<li><a @click.prevent="navigate('/policies/terms-of-service')" className="hover:text-blue-600 transition-colors" href="/policies/terms-of-service">Terms of Service</a></li>
<li><a @click.prevent="navigate('/policies/privacy-policy')" className="hover:text-blue-600 transition-colors" href="/policies/privacy-policy">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 RX Orthotics Lab. All rights reserved.</p>
<div className="flex gap-6">
<span>Designed in California</span>
<span>FDA Registered Facility</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
