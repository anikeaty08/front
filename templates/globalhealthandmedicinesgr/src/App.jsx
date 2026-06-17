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



        lucide.createIcons();
    
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
      

<div className="bg-emerald-50/80 backdrop-blur-sm border-b border-emerald-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-10 text-sm">
<div className="flex items-center gap-6">
<a className="text-emerald-600 hover:text-emerald-900 transition-colors flex items-center gap-1" href="#page-locations">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
<span>Locations</span>
</a>
<a className="text-emerald-600 hover:text-emerald-900 transition-colors" href="#page-careers">Careers</a>
</div>
<div className="flex items-center gap-6">
<a className="text-emerald-600 hover:text-emerald-900 transition-colors" href="#page-support">Support</a>
<a className="text-emerald-600 hover:text-emerald-900 transition-colors flex items-center gap-1" href="#page-contacts">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
<span>Contact</span>
</a>
</div>
</div>
</div>
</div>

<nav className="bg-white/90 backdrop-blur-md border-b border-emerald-200 sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-12">
<a className="text-xl font-medium tracking-tight" href="#home">GHMG</a>
<div className="hidden lg:flex items-center gap-1">
<a className="px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors" href="#home">Home</a>
<div className="relative group">
<button className="px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors flex items-center gap-1">
                                About
                                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-lg border border-emerald-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 first:rounded-t-lg" href="#page-about">About Us</a>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50" href="#page-mission">Our Mission</a>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50" href="#page-values">Our Values</a>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 last:rounded-b-lg" href="#page-vision">Vision</a>
</div>
</div>
<a className="px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors" href="#page-services">Services</a>
<div className="relative group">
<button className="px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors flex items-center gap-1">
                                Technology
                                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg border border-emerald-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 first:rounded-t-lg" href="#page-lab-automation">Laboratory Automation</a>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50" href="#page-minilab">MiniLab Technology</a>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 last:rounded-b-lg" href="#page-lims">Laboratory Information Management System</a>
</div>
</div>
<a className="px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors" href="#page-software">Software</a>
<div className="relative group">
<button className="px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors flex items-center gap-1">
                                More
                                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full right-0 mt-1 w-64 bg-white/95 backdrop-blur-lg border border-emerald-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50" href="#page-ecommerce">E-commerce</a>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50" href="#page-pharmaceuticals">Pharmaceuticals</a>
<div className="border-t border-emerald-200"></div>
<a className="block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 last:rounded-b-lg" href="#page-careers">Careers</a>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<a className="px-4 py-2 text-sm font-medium text-white bg-emerald-900 hover:bg-emerald-800 rounded-md transition-colors shadow-sm" href="#page-ecommerce">
                        Global Store
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative bg-gradient-to-br from-emerald-50 via-white to-cyan-50 overflow-hidden" id="home">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.05),transparent_50%)]"></div>
<div className="sm:px-6 lg:px-8 lg:py-32 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50/80 backdrop-blur-sm text-cyan-700 text-sm font-medium rounded-full mb-6 border border-cyan-200">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Biotechnological Innovation</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-emerald-900 mb-6">
                        Advancing Global Health Through Science
                    </h1>
<p className="text-xl text-emerald-600 mb-8 leading-relaxed font-light">
                        Leading the future of healthcare with cutting-edge biotechnology, comprehensive diagnostic services, and innovative pharmaceutical solutions.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="px-6 py-3 bg-emerald-900 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors inline-flex items-center gap-2 shadow-lg shadow-emerald-900/20" href="#page-ecommerce">
                            Visit E-commerce Platform
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-3 bg-white/80 backdrop-blur-sm text-emerald-900 font-medium rounded-md border border-emerald-300 hover:bg-white transition-colors" href="#page-contacts">
                            Contact Us
                        </a>
</div>
</div>
<div className="relative">
<img alt="Laboratory" className="rounded-lg shadow-2xl border border-emerald-100/50" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl border border-emerald-200">
<div className="text-3xl font-medium tracking-tight text-emerald-900 mb-1">50+</div>
<div className="text-sm text-emerald-600 font-light">Countries Served</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white relative overflow-hidden" id="page-ecommerce">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<a className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors" href="#home">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Back to Home
                </a>
</div>
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-xs tracking-wider uppercase font-medium rounded-full mb-6 backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:planet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Planet-Scale Infrastructure
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
                    Commerce for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">1 Billion</span> Users
                </h1>
<p className="text-xl text-emerald-100/70 max-w-3xl mx-auto leading-relaxed font-light">
                    An enterprise-grade healthcare marketplace engineered for unprecedented scale. Delivering medical supplies, pharmaceuticals, and technology globally with zero downtime.
                </p>
<div className="mt-8 flex justify-center gap-4">
<a className="px-6 py-3 bg-white text-emerald-950 font-medium rounded-md hover:bg-emerald-50 transition-colors inline-flex items-center gap-2" href="#page-ecommerce-store">
                        Enter Marketplace
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="px-6 py-3 bg-white/10 text-white font-medium rounded-md border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm inline-flex items-center gap-2" href="#page-ecommerce-api">
<iconify-icon icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        API Documentation
                    </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium text-emerald-400 mb-1 tracking-tight">1B+</div>
<div className="text-sm text-emerald-100/60 font-light">Active Users</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium text-emerald-400 mb-1 tracking-tight">99.999%</div>
<div className="text-sm text-emerald-100/60 font-light">Uptime SLA</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium text-emerald-400 mb-1 tracking-tight">10k+</div>
<div className="text-sm text-emerald-100/60 font-light">Transactions / Sec</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium text-emerald-400 mb-1 tracking-tight">&lt;50ms</div>
<div className="text-sm text-emerald-100/60 font-light">Global Latency</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20">
<div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:server-square-update-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Edge Computing</h3>
<p className="text-emerald-100/60 leading-relaxed font-light">
                        Distributed edge infrastructure ensures your users experience instant load times and localized content, no matter their geographic location.
                    </p>
</div>
<div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group">
<div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-cyan-400" icon="solar:shield-network-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Enterprise Security</h3>
<p className="text-emerald-100/60 leading-relaxed font-light">
                        Military-grade encryption, automated threat detection, and seamless compliance with global healthcare data regulations including HIPAA and GDPR.
                    </p>
</div>
<div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-all group">
<div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Supply Chain Sync</h3>
<p className="text-emerald-100/60 leading-relaxed font-light">
                        Real-time inventory syncing across thousands of warehouses globally, ensuring predictive restocking and flawless end-to-end fulfillment.
                    </p>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="flex items-center border-b border-white/10 px-4 py-3 bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="mx-auto text-xs font-medium text-emerald-100/40 font-mono">network-topology.ghmg.io</div>
<div className="w-14"></div> 
</div>
<div className="p-8">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1 space-y-6 w-full">
<div className="flex justify-between items-end">
<div>
<div className="text-sm text-emerald-100/60 mb-1 font-medium">Live Global Sessions</div>
<div className="text-4xl lg:text-5xl font-medium text-white tracking-tight font-mono">1,024,853,291</div>
</div>
<div className="text-sm font-medium text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    +12.4% vs last hour
                                </div>
</div>

<div className="w-full h-32 bg-white/5 rounded-lg relative overflow-hidden flex items-end border border-white/5">
<div className="w-full flex items-end justify-between px-2 gap-1 md:gap-2 h-full pt-4">
<div className="w-full bg-emerald-500/20 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '30%'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '45%'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '35%'}}></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '60%'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '55%'}}></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '75%'}}></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '65%'}}></div>
<div className="w-full bg-emerald-500/60 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '85%'}}></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm hover:bg-emerald-400/40 transition-colors" style={{height: '80%'}}></div>
<div className="w-full bg-emerald-400 rounded-t-sm relative shadow-[0_0_15px_rgba(52,211,153,0.5)]" style={{height: '95%'}}>
<div className="absolute -top-2 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-[350px] grid grid-cols-2 gap-4">
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<iconify-icon className="text-emerald-100/40 text-lg mb-2" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs text-emerald-100/60 mb-1">Compute Load</div>
<div className="text-xl font-medium text-white tracking-tight">24.1%</div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<iconify-icon className="text-emerald-100/40 text-lg mb-2" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs text-emerald-100/60 mb-1">Replica Lag</div>
<div className="text-xl font-medium text-emerald-400 tracking-tight">0.2ms</div>
</div>
<div className="bg-white/5 p-4 rounded-xl col-span-2 border border-white/5">
<div className="flex justify-between items-center mb-3">
<div className="text-xs text-emerald-100/60">Active Regions</div>
<div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                        All Systems Operational
                                    </div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-md text-xs text-white font-medium">US-East</span>
<span className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-md text-xs text-white font-medium">EU-Central</span>
<span className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-md text-xs text-white font-medium">AP-South</span>
<span className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-md text-xs text-white font-medium">SA-East</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 text-center border-t border-white/10 pt-12">
<p className="text-sm font-medium text-emerald-100/40 uppercase tracking-widest mb-8">Powering B2B &amp; B2C Healthcare Commerce</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-medium text-white">
<iconify-icon className="text-2xl" icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Checkout
                    </div>
<div className="flex items-center gap-2 text-xl font-medium text-white">
<iconify-icon className="text-2xl" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Payments
                    </div>
<div className="flex items-center gap-2 text-xl font-medium text-white">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Logistics
                    </div>
<div className="flex items-center gap-2 text-xl font-medium text-white">
<iconify-icon className="text-2xl" icon="solar:document-medicine-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Compliance
                    </div>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-pharmaceuticals"></section>
<section className="hidden" id="page-careers"></section>

<footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div>© 2024 Global Health &amp; Medicines Group. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</footer>


    </>
  );
}
