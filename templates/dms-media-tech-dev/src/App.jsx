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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-[#0b4454]/95 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0b4454] font-bold text-xl tracking-tighter group-hover:scale-105 transition-transform duration-300">
                    DMS
                </div>
<span className="self-center text-xl font-medium whitespace-nowrap text-white tracking-tight">Media Tech</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-[#00b2c1] hover:bg-[#009aa6] focus:ring-4 focus:outline-none focus:ring-[#00b2c1]/30 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#00b2c1]/20" type="button">
<span>Contact Sales</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-white/10 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li>
<a aria-current="page" className="block py-2 px-3 text-white bg-[#00b2c1] rounded md:bg-transparent md:text-[#00b2c1] md:p-0" href="#">Home</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#">Integration</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#">Company</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b4454]">

<div className="absolute inset-0 z-0">
<img alt="Server Room" className="w-full h-full object-cover opacity-30 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0b4454] via-[#0b4454]/90 to-[#00b2c1]/40"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', backgroundSize: '60px 60px'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00b2c1]/10 border border-[#00b2c1]/20 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b2c1] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b2c1]"></span>
</span>
<span className="text-xs font-medium tracking-wide text-[#00b2c1] uppercase">Systems Operational</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Complex Tech. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Simple Delivery.</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
                    Over <span className="text-white font-medium">25 years</span> of expertise in broadcasting and IT systems integration. We bridge the gap between technical complexity and user-centric operation.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#00b2c1] rounded-lg hover:bg-[#009aa6] transition-all duration-200 shadow-lg shadow-[#00b2c1]/25 hover:-translate-y-0.5" href="#">
                        Explore Solutions
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm" href="#">
                        View Case Studies
                    </a>
</div>
</div>

<div className="lg:col-span-5 hidden lg:block relative">
<div className="relative w-full aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden group">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00b2c1]/30 rounded-full blur-3xl group-hover:bg-[#00b2c1]/40 transition-all duration-700"></div>
<div className="space-y-6 relative z-10">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-[#00b2c1]/20 rounded-lg text-[#00b2c1]">
<iconify-icon icon="solar:server-path-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">System Status</h3>
<p className="text-xs text-gray-400">Live Monitoring</p>
</div>
</div>
<div className="text-[#00b2c1] text-xs font-mono">99.9% Uptime</div>
</div>
<div className="space-y-3">
<div className="bg-white/5 rounded p-3 flex items-center justify-between">
<span className="text-gray-300 text-xs">Signal Flow</span>
<div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#00b2c1] w-[85%] rounded-full"></div>
</div>
</div>
<div className="bg-white/5 rounded p-3 flex items-center justify-between">
<span className="text-gray-300 text-xs">Bandwidth</span>
<div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#00b2c1] w-[60%] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-8">
<div className="grid grid-cols-2 gap-4">
<div className="border border-white/10 rounded p-4 text-center">
<div className="text-2xl font-bold text-white tracking-tight">2.5<span className="text-[#00b2c1] text-lg">Pb</span></div>
<div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Data Handled</div>
</div>
<div className="border border-white/10 rounded p-4 text-center">
<div className="text-2xl font-bold text-white tracking-tight">4K<span className="text-[#00b2c1] text-lg">+</span></div>
<div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Streams</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-2xl font-bold tracking-tighter text-slate-800">NPO<span className="text-[#00b2c1]">.</span></div>
<div className="text-2xl font-semibold tracking-wide text-slate-800 flex items-center gap-1"><span className="block w-4 h-4 rounded-full bg-slate-800"></span>NOS</div>
<div className="text-2xl font-bold tracking-tight text-slate-800 italic">T-Mobile</div>
<div className="text-xl font-medium tracking-widest text-slate-800 uppercase border-2 border-slate-800 px-2 py-0.5">RTL</div>
<div className="text-2xl font-bold tracking-tighter text-slate-800 flex items-center gap-1">ZIGGO<span className="text-[#00b2c1] text-4xl leading-none">.</span></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<h2 className="text-sm font-bold text-[#00b2c1] uppercase tracking-widest">Why DMS Media Tech</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-[#0b4454] tracking-tight">Engineered for the future of broadcasting.</h3>
<p className="text-slate-500 leading-relaxed">
                        In an era where content delivery is critical, we provide the backbone for seamless operations. From IP-based broadcast infrastructures to high-capacity data storage, our integration strategies are designed to be robust, scalable, and technically superior.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00b2c1]/10 flex items-center justify-center text-[#00b2c1]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-slate-800 font-medium text-sm">Seamless Integration</h4>
<p className="text-xs text-slate-500 mt-1">Bridging legacy systems with cutting-edge IP workflows.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00b2c1]/10 flex items-center justify-center text-[#00b2c1]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-slate-800 font-medium text-sm">Reliability First</h4>
<p className="text-xs text-slate-500 mt-1">Mission-critical architecture with redundant failovers.</p>
</div>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00b2c1]/5 to-transparent rounded-3xl"></div>
<div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 relative overflow-hidden">

<div className="absolute right-0 top-0 opacity-5">
<iconify-icon className="text-[#0b4454]" icon="solar:graph-up-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 grid grid-cols-2 gap-6">

<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#00b2c1]">
<iconify-icon icon="solar:satellite-antenna-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#0b4454]">Signal Acquisition</span>
</div>

<div className="p-4 rounded-2xl bg-[#0b4454] border border-[#0b4454] flex flex-col items-center text-center space-y-3 shadow-lg shadow-[#0b4454]/20">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white">Processing Core</span>
</div>

<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-3 col-span-2">
<div className="w-full flex justify-between px-8 text-gray-300 mb-2">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#0b4454] flex items-center gap-2">
<iconify-icon className="text-[#00b2c1]" icon="solar:global-linear"></iconify-icon>
                                    Global Distribution
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0b4454] tracking-tight">Core Competencies</h2>
<p className="text-slate-500 mt-4 max-w-2xl mx-auto">We deliver specialized solutions tailored to the unique demands of high-throughput media environments.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00b2c1]/30 hover:shadow-xl hover:shadow-[#00b2c1]/5 transition-all duration-300">
<div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00b2c1] to-[#0b4454] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0b4454] group-hover:text-[#00b2c1] group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-[#00b2c1] transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#0b4454] mb-3 group-hover:text-[#00b2c1] transition-colors">Broadcast Solutions</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        End-to-end studio design, OB van configurations, and master control room integration using SMPTE 2110 standards.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Studio Design</span>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Playout Automation</span>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">IP Video</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00b2c1]/30 hover:shadow-xl hover:shadow-[#00b2c1]/5 transition-all duration-300">
<div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00b2c1] to-[#0b4454] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0b4454] group-hover:text-[#00b2c1] group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-[#00b2c1] transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#0b4454] mb-3 group-hover:text-[#00b2c1] transition-colors">IT &amp; Infrastructure</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        High-performance computing for media rendering, petabyte-scale storage, and secure cloud networking architectures.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Cloud Hybrid</span>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Cybersecurity</span>
<span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">Storage Arrays</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0b4454] tracking-tight mb-6">Ready to upgrade your infrastructure?</h2>
<p className="text-slate-500 mb-8 max-w-lg mx-auto">Schedule a technical consultation with our senior engineers to discuss your next project.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-[#00b2c1] rounded-lg hover:bg-[#009aa6] transition-all shadow-lg shadow-[#00b2c1]/20" href="#">
                    Start Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-[#0b4454] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all" href="#">
                    View Portfolio
                </a>
</div>
</div>
</section>

<footer className="bg-[#0b4454] text-white/80 pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#0b4454] font-bold text-sm tracking-tighter">
                            DMS
                        </div>
<span className="text-lg font-medium text-white tracking-tight">Media Tech</span>
</a>
<p className="text-sm leading-relaxed text-gray-400">
                        Pioneering the convergence of broadcast technology and IT infrastructure for over two decades.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-gray-400 hover:text-[#00b2c1] transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#00b2c1] transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Solutions</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">Broadcast Systems</a></li>
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">IT Infrastructure</a></li>
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">Cloud Integration</a></li>
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">Managed Services</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#00b2c1] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Stay Updated</h4>
<p className="text-xs text-gray-400 mb-4">Technical insights delivered to your inbox.</p>
<form className="flex flex-col gap-3">
<input className="bg-white/5 border border-white/10 text-white text-sm rounded-lg focus:ring-[#00b2c1] focus:border-[#00b2c1] block w-full p-2.5 placeholder-gray-500 outline-none" placeholder="Enter your email" type="email"/>
<button className="text-white bg-[#00b2c1] hover:bg-[#009aa6] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<div>© 2023 DMS Media Tech. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
