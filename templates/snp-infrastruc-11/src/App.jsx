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
      

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center" href="#">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</a>

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="text-2xl font-semibold tracking-tighter text-indigo-950">SNP.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-indigo-900 transition-colors" href="#">Home</a>
<a className="hover:text-indigo-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-indigo-900 transition-colors" href="#case-studies">Case Studies</a>
<a className="hover:text-indigo-900 transition-colors" href="#about">About</a>
<a className="hover:text-indigo-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-indigo-950 rounded-md hover:bg-indigo-900 transition-colors shadow-sm" href="#contact">
                Book Strategy Call
            </a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-indigo-950">
<div className="absolute inset-0 z-0">
<img alt="Laboratory Innovation" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-800/50 text-cyan-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Trusted by Institutions, Enterprises &amp; Innovators Across India
            </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
                Empowering the Next Generation of Innovators.
            </h1>
<p className="text-lg lg:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                India's Innovation Infrastructure Company — bridging Education, Industry, Research &amp; Startups through cutting-edge, scalable solutions.
            </p>

<div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mb-12 text-sm text-slate-400 border-y border-white/10 py-6 max-w-3xl">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">500+</span>
<span>Institutions</span>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">1,000+</span>
<span>Labs Installed</span>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">10k+</span>
<span>Students Impacted</span>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">Govt.</span>
<span>&amp; Corporate Clients</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-indigo-950 bg-cyan-400 rounded-md hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] text-center" href="#contact">
                    Book Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-md hover:bg-white/20 transition-colors text-center" href="#solutions">
                    Explore Solutions
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors text-center flex items-center justify-center gap-2" href="#partner">
                    Partner With Us <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by Leading Organizations</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter text-slate-800">TECHCORP</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">GLOBAL.EDU</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">GOV-INITIATIVE</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">STARTUPHUB</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">RESEARCH-X</span>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-indigo-950 mb-2">250+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Schools Served</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-indigo-950 mb-2">1.2k</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">STEM Labs</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-indigo-950 mb-2">5k+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">IT Pros Deployed</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-indigo-950 mb-2">300+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">R&amp;D Projects</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-indigo-950 mb-2">150</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Startups</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-indigo-950 mb-2">12</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Global Clients</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-indigo-950 mb-4">Complete Innovation Ecosystem</h2>
<p className="text-slate-600 text-lg">From idea generation to full-scale execution, we provide the infrastructure and expertise to drive real-world results.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-indigo-600">
<iconify-icon icon="solar:diploma-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Future-Ready STEM Labs</h3>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">Turnkey infrastructure that improves student engagement, hands-on practical learning, and future-proofs educational institutions.</p>
<a className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 gap-1" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors text-cyan-600">
<iconify-icon icon="solar:laptop-3-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Scalable IT Resourcing</h3>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">Rapidly deploy highly skilled technology teams and enterprise services to accelerate your digital transformation and corporate growth.</p>
<a className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-800 gap-1" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors text-emerald-600">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Advanced R&amp;D &amp; Automation</h3>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">End-to-end product development, industrial automation, and deep-tech research solutions for complex engineering challenges.</p>
<a className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 gap-1" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors text-purple-600">
<iconify-icon icon="solar:rocket-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Startup Incubation</h3>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">Comprehensive support system taking raw ideas through validation, prototyping, funding preparation, to full commercialization.</p>
<a className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 gap-1" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 space-y-24">

<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Robotics Lab" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-4">For Education</div>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Building Innovation Mindsets Early</h3>
<p className="text-slate-600 mb-8 leading-relaxed">We don't just supply equipment; we build ecosystems. Our STEM and Robotics labs are designed to bridge the gap between theoretical knowledge and practical industry applications, preparing students for tomorrow's workforce.</p>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-900 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors shadow-sm" href="#">
                        View Education Solutions
                    </a>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Enterprise IT" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-4">For Industry</div>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Accelerating Enterprise Growth</h3>
<p className="text-slate-600 mb-8 leading-relaxed">From dedicated IT resource augmentation to deploying complex automation systems, we provide the technical backbone that allows enterprises to scale efficiently without operational friction.</p>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-900 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors shadow-sm" href="#">
                        View Enterprise Solutions
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Real Results. Real Impact.</h2>
<p className="text-slate-400 text-lg">Proof that our infrastructure and strategies deliver measurable outcomes across sectors.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 gap-1 shrink-0" href="#">
                    View All Case Studies <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded">Top Tier University</span>
<span className="text-slate-500 text-sm">•</span>
<span className="text-slate-400 text-sm">STEM Implementation</span>
</div>
<div className="space-y-4 mb-8">
<div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Problem</span>
<p className="text-sm text-slate-300">Outdated practical curriculum leading to low industry-placement rates.</p>
</div>
<div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Solution</span>
<p className="text-sm text-slate-300">Deployed a custom 5,000 sq.ft. transdisciplinary innovation lab with IoT and AI modules.</p>
</div>
</div>
<div className="pt-6 border-t border-slate-700">
<span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">The Result</span>
<div className="flex items-end gap-2">
<span className="text-4xl font-semibold tracking-tight text-white">40%</span>
<span className="text-sm text-slate-400 mb-1">increase in core engineering placements within 12 months.</span>
</div>
</div>
</div>

<div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded">Fintech Enterprise</span>
<span className="text-slate-500 text-sm">•</span>
<span className="text-slate-400 text-sm">IT Resourcing</span>
</div>
<div className="space-y-4 mb-8">
<div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Problem</span>
<p className="text-sm text-slate-300">6-month backlog on product development due to lack of specialized backend talent.</p>
</div>
<div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Solution</span>
<p className="text-sm text-slate-300">Deployed a dedicated pod of 12 senior engineers within 14 days under managed services.</p>
</div>
</div>
<div className="pt-6 border-t border-slate-700">
<span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">The Result</span>
<div className="flex items-end gap-2">
<span className="text-4xl font-semibold tracking-tight text-white">3x</span>
<span className="text-sm text-slate-400 mb-1">faster time-to-market for their core flagship product feature.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Why Organizations Choose SNP Innovation</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">End-to-End Solutions</h4>
<p className="text-sm text-slate-600 leading-relaxed">We don't deal with multiple vendors. From consulting to procurement, installation, and maintenance, we handle it all.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
<iconify-icon icon="solar:box-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Plug-and-Play Infrastructure</h4>
<p className="text-sm text-slate-600 leading-relaxed">Our lab setups and IT solutions are designed for immediate deployment with minimal disruption to your operations.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
<iconify-icon icon="solar:link-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Industry-Linked Training</h4>
<p className="text-sm text-slate-600 leading-relaxed">Curriculum and training modules designed directly in consultation with industry leaders to ensure real-world relevance.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">IP &amp; Certification Support</h4>
<p className="text-sm text-slate-600 leading-relaxed">We guide researchers and startups through the complex process of patent filing, IP protection, and quality certifications.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
<iconify-icon icon="solar:network-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Transdisciplinary Approach</h4>
<p className="text-sm text-slate-600 leading-relaxed">Breaking silos. We integrate mechanics, electronics, and software to solve complex modern challenges.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
<iconify-icon icon="solar:earth-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Global Network Access</h4>
<p className="text-sm text-slate-600 leading-relaxed">Tap into our vast network of international universities, tech giants, and investor pools to scale your innovation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Our Implementation Process</h2>
<p className="text-slate-600">A systematic, risk-free approach to building your infrastructure.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-200"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center font-semibold mb-4 text-sm shadow-sm">1</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Analysis</h4>
<p className="text-xs text-slate-500">Deep dive into your specific requirements and goals.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-semibold mb-4 text-sm">2</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Design</h4>
<p className="text-xs text-slate-500">Custom blueprinting of the infrastructure or resource plan.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-semibold mb-4 text-sm">3</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Deployment</h4>
<p className="text-xs text-slate-500">Agile execution, installation, and strict quality checks.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-semibold mb-4 text-sm">4</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Training</h4>
<p className="text-xs text-slate-500">Upskilling your team to maximize the new assets.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-semibold mb-4 text-sm">5</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Support</h4>
<p className="text-xs text-slate-500">24/7 maintenance, upgrades, and ongoing consulting.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Trusted by Leaders</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<iconify-icon className="text-slate-300 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"SNP Innovation completely transformed our engineering department. The STEM lab setup was flawless, and the ongoing support ensures our students are always working with industry-standard tools."</p>
<div>
<h5 className="text-sm font-semibold text-slate-900">Dr. Rajesh Kumar</h5>
<p className="text-xs text-slate-500">Dean of Engineering, Tech Univ</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<iconify-icon className="text-slate-300 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"When we needed to scale our dev team rapidly, SNP delivered. Their IT resourcing quality is top-notch. The engineers felt like in-house team members from day one."</p>
<div>
<h5 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h5>
<p className="text-xs text-slate-500">CTO, FinServe Global</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<iconify-icon className="text-slate-300 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Their R&amp;D capability is unmatched. We outsourced a complex automation problem to them, and they delivered a working prototype weeks ahead of schedule."</p>
<div>
<h5 className="text-sm font-semibold text-slate-900">Amit Patel</h5>
<p className="text-xs text-slate-500">Director of Operations, AutoM</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-950 text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Ready to Build Your Innovation Ecosystem?</h2>
<p className="text-lg text-slate-300 mb-10">Whether you are an institution looking to modernize, a company needing scale, or a startup needing direction — SNP Innovation is your infrastructure partner.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-indigo-950 bg-cyan-400 rounded-md hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20" href="#contact">
                    Schedule Free Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-md hover:bg-white/20 transition-colors" href="#contact">
                    Send Requirement
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<span className="text-2xl font-semibold tracking-tighter text-white mb-6 block">SNP.</span>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                        Innovation Infrastructure for Education, Industry, Research, and Startups. Empowering the next generation through technology.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800" href="#">
<iconify-icon icon="solar:inbox-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800" href="#">
<iconify-icon icon="solar:global-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#">STEM &amp; Robotics Labs</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">IT Resourcing</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">R&amp;D &amp; Automation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Startup Incubation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Insights &amp; News</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div id="contact">
<h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Tech Park, Sector 62, Noida, India</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-cyan-400 transition-colors" href="mailto:contact@snpinnovation.com">hello@snpinnovation.com</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-cyan-400 transition-colors" href="tel:+919876543210">+91 98765 43210</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2023 SNP Innovation Pvt. Ltd. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
