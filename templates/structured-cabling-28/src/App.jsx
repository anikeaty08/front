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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 w-full z-50 glass-nav">
<nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-blue-700" href="#">
                    SUR-LINK <span className="text-slate-400 font-light text-sm ml-1">ULTRA-LINK</span>
</a>
<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#">OEM Services</a>
<a className="hover:text-blue-600 transition-colors" href="#">Manufacturing</a>
<a className="hover:text-blue-600 transition-colors" href="#">Quality &amp; ETL</a>
<a className="hover:text-blue-600 transition-colors" href="#">Global Network</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all shadow-sm">
                    Request a Quote
                </button>
<button className="lg:hidden text-2xl text-slate-700">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hero-gradient">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-blue-200 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Zhejiang Chaolian Electronics • 25+ Years of Excellence
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Structured Cabling OEM Manufacturing <br className="hidden md:block"/> At Industrial Scale
            </h1>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                From high-precision tooling to ETL-certified mass production. We deliver high-yield Electronic Keystone Jacks and network components for global infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-slate-950 font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
                    Schedule Virtual Factory Tour
                </button>
<button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
                    View OEM Capabilities
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Manufacturing Strength</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Advanced Manufacturing. Engineered to Scale.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="subtle-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-4 tracking-tight">Precision Tooling &amp; Molding</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Our internal tooling shop enables rapid prototyping and proprietary mold development for custom keystone modules, ensuring structural integrity and precise fitment.
                    </p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Rapid Structural Prototyping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> High-Tolerance Injection Molding</li>
</ul>
</div>

<div className="subtle-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-4 tracking-tight">Copper Roll Pressing</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Industry-leading roll pressing technology ensures consistent copper contact density, crucial for high-frequency 10G data transmission stability and minimal attenuation.
                    </p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Cat6A/Cat8 Performance Standards</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Optimized Impedance Control</li>
</ul>
</div>

<div className="subtle-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-4 tracking-tight">Automated Insertion Lines</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Our fully automated assembly ecosystem minimizes human error, providing consistent yield rates for large-scale volume orders with accelerated lead times.
                    </p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 100% Automated Optical Inspection</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Scalable Production Clusters</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 border-b border-blue-200 pb-1">
                    Download Equipment List &amp; Capacity Report
                    <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-slate-100">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
                    INTERTEK CORTLAND VERIFIED
                </div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Uncompromising Quality. Globally Verified.</h2>
<p className="text-slate-600 text-base leading-relaxed mb-8">
                    Our electronic Keystone Jacks and cabling components undergo rigorous performance testing at Intertek Cortland laboratories. We ensure every component meets or exceeds international standards, providing a risk-free compliance pathway for our OEM partners.
                </p>
<div className="grid grid-cols-2 gap-6 mb-10">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-slate-900">ISO 9001</span>
<span className="text-xs text-slate-500">Quality Management</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-slate-900">CE / RoHS</span>
<span className="text-xs text-slate-500">Global Compliance</span>
</div>
</div>
<button className="bg-slate-900 text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-slate-800 transition-all">
                    Request ETL Test Reports
                </button>
</div>
<div className="flex-1 bg-slate-50 p-12 rounded-3xl relative overflow-hidden">
<div className="grid grid-cols-2 gap-4">
<div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="text-2xl font-bold tracking-tighter text-slate-800">ETL</span>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="text-2xl font-bold tracking-tighter text-slate-800">UL</span>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="text-2xl font-bold tracking-tighter text-slate-800">Intertek</span>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="text-2xl font-bold tracking-tighter text-slate-800">RoHS</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Global Reach. Localized Support.</h2>
<div className="space-y-8">
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</span>
<h4 className="text-lg font-medium text-blue-400">Turkey Operations Center</h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Located at the heart of Perpa, Istanbul, our Turkey hub serves as the bridge between Chinese manufacturing excellence and EMEA markets.
                        </p>
<div className="flex items-center gap-6 text-xs text-slate-300">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> EMEA Timezone</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon> Local Technical Support</span>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Through our collaborative teams in Ningbo and Istanbul, we provide seamless supply chain management, rapid customs facilitation, and multi-lingual technical consultancy for our strategic OEM partners.
                    </p>
<button className="bg-white text-slate-900 text-sm font-medium px-8 py-3 rounded-lg hover:bg-slate-100 transition-all">
                        Contact Your Local Representative
                    </button>
</div>
</div>
<div className="lg:w-1/2 relative">

<svg className="w-full opacity-30" fill="none" viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-pulse" cx="200" cy="150" fill="#3B82F6" r="4"></circle>
<circle cx="600" cy="180" fill="#3B82F6" r="6"></circle>
<path d="M200 150 Q400 100 600 180" stroke="url(#lineGradient)" stroke-dasharray="10 5" strokeWidth="2"></path>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6"></stop>
<stop offset="100%" stop-color="#60A5FA"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="text-5xl font-semibold tracking-tighter opacity-10 uppercase select-none">Global Network</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Core Solutions</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Comprehensive OEM Solutions</h3>
</div>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                    Explore Full Catalog
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden mb-6 relative">
<img alt="Keystone Jacks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-semibold text-slate-800">CAT6A</span>
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-semibold text-slate-800">SHIELDED</span>
</div>
</div>
<h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Electronic Keystone Jacks</h4>
<p className="text-slate-500 text-sm">Precision-engineered modules designed for high-density patch panels and faceplate applications.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden mb-6 relative">
<img alt="Copper Cabling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1544724569-5f546fa602b5?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-semibold text-slate-800">COPPER</span>
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-semibold text-slate-800">UTP/FTP</span>
</div>
</div>
<h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Copper Cabling Components</h4>
<p className="text-slate-500 text-sm">Industrial-grade modular plugs, patch panels, and copper wiring solutions for data centers.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-blue-700 block mb-6" href="#">
                        SUR-LINK
                    </a>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Zhejiang Chaolian Electronics Co., Ltd. <br/>
                        A global leader in high-performance networking infrastructure and OEM manufacturing.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors text-xl" href="#">
<iconify-icon icon="solar:linkedin-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors text-xl" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Quick Links</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Compliance Docs</a></li>
<li><a className="hover:text-slate-900" href="#">Sitemap</a></li>
<li><a className="hover:text-slate-900" href="#">Career</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Get in Touch</h5>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Full Name" type="text"/>
<input className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Business Email" type="email"/>
</div>
<textarea className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Tell us about your project requirements..."></textarea>
<button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all text-sm">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4 text-xs text-slate-400">
<p>© 2024 Sur-link (UltraLink Electronics). All rights reserved.</p>
<div className="flex gap-6">
<span>Manufacturing in Ningbo, China</span>
<span>Service Center in Istanbul, Turkey</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
