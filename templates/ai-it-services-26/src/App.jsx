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
      

<nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-md shadow-black/10 group-hover:shadow-lg transition-all duration-300">
<span className="text-white font-medium tracking-tight text-base">GN</span>
</div>
<span className="font-medium tracking-tight text-lg">GlobalNode</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
<a className="hover:text-black transition-colors" href="#">About</a>
<a className="hover:text-black transition-colors" href="#">Services</a>
<a className="hover:text-black transition-colors" href="#">Tech Stack</a>
<a className="hover:text-black transition-colors" href="#">Process</a>
<a className="hover:text-black transition-colors" href="#">Work</a>
<a className="hover:text-black transition-colors" href="#">Career</a>
<a className="hover:text-black transition-colors" href="#">Contact</a>
</div>
<div>
<a className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 shadow-md shadow-black/10 transition-all duration-300 hover:scale-105 active:scale-95" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-black text-white overflow-hidden isolate">

<video autoplay="" className="absolute inset-0 -z-30 w-full h-full object-cover opacity-10 grayscale mix-blend-screen pointer-events-none" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-background-loop-28823-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[400px] opacity-20 bg-gradient-to-b from-blue-500 to-transparent blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs mb-8 backdrop-blur-sm shadow-2xl">
<span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                Software Development &amp; IT Services
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter max-w-4xl mx-auto leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                Reinventing Every Product With AI
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal">
                We build intelligent software that transforms how businesses operate and grow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5" href="#">
                    Start Your Project <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md" href="#">
                    View Our Work
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-24 pt-12 border-t border-white/10 text-left">
<div>
<div className="text-4xl font-medium tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">50+</div>
<div className="text-zinc-500 text-sm">Projects Delivered</div>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">8+</div>
<div className="text-zinc-500 text-sm">Years Experience</div>
</div>
<div className="col-span-2 md:col-span-1 text-center md:text-left">
<div className="text-4xl font-medium tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">30+</div>
<div className="text-zinc-500 text-sm">Happy Clients</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-zinc-200/50 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between opacity-40 grayscale gap-12 overflow-x-auto pb-4 md:pb-0 hide-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
<span className="text-2xl font-medium tracking-tighter min-w-max">NIVEA</span>
<span className="text-2xl font-medium tracking-tighter min-w-max">CHANEL</span>
<span className="text-2xl font-medium tracking-tighter min-w-max">adidas</span>
<span className="text-2xl font-medium tracking-tighter min-w-max">POPULAR</span>
<span className="text-2xl font-medium tracking-tighter min-w-max">FedEx</span>
<span className="text-2xl font-medium tracking-tighter min-w-max">Picasa</span>
<span className="text-2xl font-medium tracking-tighter min-w-max">NIVEA</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50 relative isolate">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">What We Do</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-zinc-900">Services That Drive Results</h2>
<p className="text-base text-zinc-500">From initial concept to ongoing maintenance, we provide end-to-end software solutions that help businesses thrive in the digital age.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:code-square-linear"></iconify-icon>
</div>
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Custom Software Development</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Tailored solutions built from the ground up to meet your unique business requirements and goals.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Web Applications</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Enterprise</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">APIs</span>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:smartphone-linear"></iconify-icon>
</div>
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Mobile App Development</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">iOS &amp; Android</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">React Native</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Flutter</span>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:cloud-linear"></iconify-icon>
</div>
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Cloud Solutions</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Scalable cloud infrastructure and migration services to modernize your operations.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">AWS &amp; Azure</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Migration</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">DevOps</span>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:cpu-linear"></iconify-icon>
</div>
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">IT Consulting</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Strategic technology guidance to align your IT investments with business objectives.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Strategy</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Transformation</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Architecture</span>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:settings-linear"></iconify-icon>
</div>
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Product Maintenance</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Ongoing support and maintenance to keep your software running at peak performance.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Monitoring</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Bug Fixes</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Optimization</span>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Quality Assurance</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Comprehensive testing services to ensure your software meets the highest standards.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Automated</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Security</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium rounded-full">Performance</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-medium tracking-tight mb-4">Industries we serve</h2>
<p className="text-base text-zinc-500 mb-12 max-w-2xl mx-auto">Empowering businesses across industries with innovative, scalable services.</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="relative h-64 bg-zinc-100 rounded-2xl overflow-hidden group border border-zinc-200/50">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute bottom-6 left-6 text-left z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-white font-medium text-sm tracking-tight block mb-1">Health Systems</span>
<span className="text-zinc-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore solutions</span>
</div>
</div>
<div className="relative h-64 bg-zinc-50 rounded-2xl overflow-hidden group border border-zinc-200/50">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute bottom-6 left-6 text-left z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-white font-medium text-sm tracking-tight block mb-1">Life Sciences</span>
<span className="text-zinc-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore solutions</span>
</div>
</div>
<div className="relative h-64 bg-zinc-100 rounded-2xl overflow-hidden group border border-zinc-200/50">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute bottom-6 left-6 text-left z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-white font-medium text-sm tracking-tight block mb-1">Legal Services</span>
<span className="text-zinc-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore solutions</span>
</div>
</div>
<div className="relative h-64 bg-zinc-50 rounded-2xl overflow-hidden group border border-zinc-200/50">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute bottom-6 left-6 text-left z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-white font-medium text-sm tracking-tight block mb-1">FinTech</span>
<span className="text-zinc-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore solutions</span>
</div>
</div>
<div className="relative h-64 bg-zinc-100 rounded-2xl overflow-hidden group border border-zinc-200/50 hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute bottom-6 left-6 text-left z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-white font-medium text-sm tracking-tight block mb-1">Retail &amp; Commerce</span>
<span className="text-zinc-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore solutions</span>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-10">
<div className="w-6 h-1.5 rounded-full bg-black"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Work &amp; Success Stories</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-lg">Real Problems, Real Solutions</h2>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 flex items-center justify-center border border-zinc-200/60 bg-white rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-zinc-800 hover:scale-105 transition-all shadow-md shadow-black/10">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="bg-zinc-900 rounded-[2rem] aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden shadow-2xl shadow-black/5 ring-1 ring-zinc-200/50">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f6_0%,transparent_40%)] opacity-20"></div>
<span className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-full font-medium z-20">FinTech</span>

<div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 p-6 flex flex-col gap-4 relative z-10">
<div className="h-6 bg-white/10 rounded-md w-1/4"></div>
<div className="flex gap-4 mt-2">
<div className="h-20 bg-gradient-to-br from-white/10 to-transparent rounded-lg w-full border border-white/5"></div>
<div className="h-20 bg-gradient-to-br from-white/10 to-transparent rounded-lg w-full border border-white/5"></div>
<div className="h-20 bg-gradient-to-br from-white/10 to-transparent rounded-lg w-full border border-white/5"></div>
</div>
<div className="h-full bg-gradient-to-br from-white/10 to-transparent rounded-lg w-full border border-white/5 mt-2"></div>
</div>
</div>

<div>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-3 block">Case Study 01 / 03</span>
<h3 className="text-3xl font-medium tracking-tight mb-8">Digital Banking Platform</h3>
<div className="space-y-8">
<div>
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">The Problem</h4>
<p className="text-sm text-zinc-600 leading-relaxed">Legacy banking systems causing slow transactions and poor user experience for 500k+ users.</p>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Our Solution</h4>
<p className="text-sm text-zinc-600 leading-relaxed">Built a modern microservices architecture with real-time transaction processing and intuitive mobile apps.</p>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">The Impact</h4>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white shadow-sm border border-zinc-200/60 rounded-xl p-5 text-center transition-transform hover:-translate-y-1">
<div className="text-2xl font-medium tracking-tight mb-1 text-black">70%</div>
<div className="text-xs text-zinc-500">Faster</div>
</div>
<div className="bg-white shadow-sm border border-zinc-200/60 rounded-xl p-5 text-center transition-transform hover:-translate-y-1">
<div className="text-2xl font-medium tracking-tight mb-1 text-black">45%</div>
<div className="text-xs text-zinc-500">Engagement</div>
</div>
<div className="bg-white shadow-sm border border-zinc-200/60 rounded-xl p-5 text-center transition-transform hover:-translate-y-1">
<div className="text-2xl font-medium tracking-tight mb-1 text-black">$2M</div>
<div className="text-xs text-zinc-500">Savings</div>
</div>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 mt-10 bg-white border border-zinc-200/60 text-black rounded-full font-medium text-sm hover:bg-zinc-50 transition-all shadow-sm hover:shadow" href="#">
                        View Full Case Study
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-y border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="aspect-square bg-zinc-50 rounded-[2rem] overflow-hidden relative border border-zinc-200/50">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

<div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm font-medium relative z-10 backdrop-blur-sm bg-white/30">
                    Team Image Placeholder
                </div>
</div>
<div>
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Your Story</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Who We Are</h2>
<div className="space-y-6 text-base text-zinc-500 mb-10 leading-relaxed">
<p>GlobalNode began with a simple belief: every business deserves access to world-class software solutions. Founded in 2016, we've grown from a small team of passionate developers into a full-service IT partner trusted by companies worldwide.</p>
<p>Today, we bridge the gap between ambitious ideas and technical excellence. Our team combines deep expertise with genuine care for your success, treating every project as if it were our own.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6 mb-10">
<div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6">
<h4 className="text-sm font-medium mb-2 text-black">Our Mission</h4>
<p className="text-sm text-zinc-500">To empower businesses with innovative software solutions that drive growth and create lasting impact.</p>
</div>
<div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6">
<h4 className="text-sm font-medium mb-2 text-black">Our Vision</h4>
<p className="text-sm text-zinc-500">To be the most trusted technology partner for ambitious companies ready to transform their industries.</p>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg" href="#">
                    Insights From Our Leaders
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Technologies We Use</span>
<h2 className="text-4xl font-medium tracking-tight mb-4">Our Tech Stack</h2>
<p className="text-base text-zinc-500">We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions for our clients.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-black" icon="solar:layers-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Frontend</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">React</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Next.js</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Vue.js</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">TypeScript</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Tailwind CSS</span>
</div>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-black" icon="solar:server-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Backend</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Node.js</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Python</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Go</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Java</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">GraphQL</span>
</div>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-black" icon="solar:cloud-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Cloud &amp; DevOps</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">AWS</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Azure</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">GCP</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Docker</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Kubernetes</span>
</div>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-black" icon="solar:smart-home-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight">AI &amp; ML</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">TensorFlow</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">PyTorch</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">OpenAI</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">LangChain</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Hugging Face</span>
</div>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-black" icon="solar:database-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Database</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">PostgreSQL</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">MongoDB</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Redis</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Elasticsearch</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Supabase</span>
</div>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-8 shadow-sm hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-black" icon="solar:smartphone-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Mobile</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">React Native</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Flutter</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Swift</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Kotlin</span>
<span className="px-3 py-1 bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-medium rounded-full">Expo</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-zinc-500 text-sm mb-6">Don't see your preferred technology? We adapt to your needs.</p>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-zinc-200/60 text-black rounded-full font-medium text-sm hover:bg-zinc-50 transition-all shadow-sm" href="#">
                    Discuss Your Project
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-black text-white relative isolate overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-24">
<span className="text-blue-500 text-xs font-medium uppercase tracking-widest mb-4 block">How We Do It</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Our Proven Process</h2>
<p className="text-base text-zinc-400">A structured yet flexible approach that ensures quality delivery while adapting to your unique needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

<div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center mb-6 z-10 mx-auto md:mx-0 shadow-lg group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-blue-500 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mb-2">Phase 01</span>
<h3 className="text-base font-medium tracking-tight mb-3 text-white">Discovery</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">We dive deep into understanding your business, goals, users, and technical requirements to build a solid foundation.</p>
</div>

<div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center mb-6 z-10 mx-auto md:mx-0 shadow-lg group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-blue-500 transition-colors" icon="solar:pen-linear"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mb-2">Phase 02</span>
<h3 className="text-base font-medium tracking-tight mb-3 text-white">Design</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Our design team creates intuitive interfaces and experiences that resonate with your users and brand.</p>
</div>

<div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center mb-6 z-10 mx-auto md:mx-0 shadow-lg group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-blue-500 transition-colors" icon="solar:code-square-linear"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mb-2">Phase 03</span>
<h3 className="text-base font-medium tracking-tight mb-3 text-white">Develop</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">We build your solution using modern technologies and best practices, with regular updates and demos.</p>
</div>

<div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center mb-6 z-10 mx-auto md:mx-0 shadow-lg group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-blue-500 transition-colors" icon="solar:rocket-linear"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mb-2">Phase 04</span>
<h3 className="text-base font-medium tracking-tight mb-3 text-white">Deploy</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">We launch your product with careful planning, testing, and monitoring to ensure a smooth rollout.</p>
</div>

<div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center mb-6 z-10 mx-auto md:mx-0 shadow-lg group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-blue-500 transition-colors" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mb-2">Phase 05</span>
<h3 className="text-base font-medium tracking-tight mb-3 text-white">Maintain</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Our relationship doesn't end at launch. We provide ongoing support to keep your product evolving.</p>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all backdrop-blur-md" href="#">
                    Start Your Journey
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Why Choose Us</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">What Makes Us Different</h2>
<p className="text-base text-zinc-500 mb-12">In a crowded market of IT service providers, we stand out through our genuine commitment to your success. Every decision we make is guided by what's best for your business.</p>
<div className="flex gap-12 mb-10 border-b border-zinc-200/60 pb-10">
<div>
<div className="text-4xl font-medium tracking-tight mb-1">98%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Client Retention Rate</div>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-1">4.9<span className="text-2xl text-zinc-400">/5</span></div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Average Client Rating</div>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all shadow-md" href="#">
                    Work With Us
                </a>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight mb-2">Dedicated Teams</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Expert developers who become an extension of your team, fully invested in your success.</p>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:bolt-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight mb-2">Agile Methodology</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Flexible, iterative development that adapts to changing requirements and delivers value early.</p>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight mb-2">Quality First</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Rigorous testing and code review processes ensure robust, maintainable solutions.</p>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight mb-2">Partnership Approach</h4>
<p className="text-xs text-zinc-500 leading-relaxed">We're not just vendors—we're partners committed to your long-term growth and success.</p>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight mb-2">Proven Track Record</h4>
<p className="text-xs text-zinc-500 leading-relaxed">50+ successful projects across industries, with measurable business impact.</p>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight mb-2">On-Time Delivery</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Transparent timelines and proactive communication keep your projects on track.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Testimonials</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">What Our Clients Say</h2>
<p className="text-base text-zinc-500 mb-10">Don't just take our word for it. Here's what our partners have to say about working with GlobalNode.</p>
<div className="flex items-center gap-3">
<button className="w-12 h-12 flex items-center justify-center border border-zinc-200/60 bg-white rounded-full hover:bg-zinc-50 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-zinc-800 transition-colors shadow-md">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<span className="text-xs text-zinc-400 font-medium ml-3">01 / 04</span>
</div>
</div>
<div className="bg-white border border-zinc-200/60 rounded-[2rem] p-8 md:p-10 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="absolute -top-6 -left-6 w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-black/20">
<iconify-icon className="text-xl text-white" icon="solar:quote-left-bold"></iconify-icon>
</div>
<div className="flex gap-1 mb-6 mt-2">
<iconify-icon className="text-lg text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-zinc-800 leading-relaxed mb-8">"GlobalNode transformed our outdated systems into a modern, scalable platform. Their team felt like an extension of ours—dedicated, responsive, and truly invested in our success."</p>
<div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] text-zinc-400 font-medium">Photo</div>
<div>
<div className="font-medium text-sm">John Smith</div>
<div className="text-xs text-zinc-500">CTO, TechCorp Inc.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Global Recognition</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Global Recognition and Accolades</h2>
<p className="text-sm text-zinc-500 mb-12 max-w-2xl mx-auto">Renowned as a distinguished AI-first technology partner, our customer-centric innovations epitomize excellence and redefine industry paradigms.</p>
<div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar justify-start md:justify-center">

<div className="min-w-[160px] bg-white border border-zinc-200/60 shadow-sm rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 shadow-md">
<iconify-icon className="text-lg text-white" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight">Top AI Company</div>
<div className="text-xs text-zinc-500 mt-1">Clutch</div>
<div className="text-[10px] text-zinc-400 mt-2 font-medium">2024</div>
</div>

<div className="min-w-[160px] bg-white border border-zinc-200/60 shadow-sm rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight">Best Tech Partner</div>
<div className="text-xs text-zinc-500 mt-1">G2</div>
<div className="text-[10px] text-zinc-400 mt-2 font-medium">2024</div>
</div>

<div className="min-w-[160px] bg-white border border-zinc-200/60 shadow-sm rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:star-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight">Innovation Award</div>
<div className="text-xs text-zinc-500 mt-1">TechCrunch</div>
<div className="text-[10px] text-zinc-400 mt-2 font-medium">2023</div>
</div>

<div className="min-w-[160px] bg-white border border-zinc-200/60 shadow-sm rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:cup-first-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight">Excellence in AI</div>
<div className="text-xs text-zinc-500 mt-1">AI Excellence</div>
<div className="text-[10px] text-zinc-400 mt-2 font-medium">2024</div>
</div>

<div className="min-w-[160px] bg-white border border-zinc-200/60 shadow-sm rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-black" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight">Verified Partner</div>
<div className="text-xs text-zinc-500 mt-1">GoodFirms</div>
<div className="text-[10px] text-zinc-400 mt-2 font-medium">2024</div>
</div>
</div>
<div className="text-[10px] text-zinc-400 mt-4 block md:hidden uppercase tracking-widest">← Scroll to see more →</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24">
<div>
<span className="text-blue-600 text-xs font-medium uppercase tracking-widest mb-4 block">Let's Build Together</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to Start Your Project?</h2>
<p className="text-base text-zinc-500 mb-12">Have an idea you'd like to bring to life? Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.</p>
<div className="space-y-8">
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-200/60 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors">
<iconify-icon className="text-lg text-black group-hover:text-white transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Email</div>
<div className="text-sm font-medium">hello@globalnode.tech</div>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-200/60 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors">
<iconify-icon className="text-lg text-black group-hover:text-white transition-colors" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Phone</div>
<div className="text-sm font-medium">+1 (555) 123-4567</div>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-200/60 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors">
<iconify-icon className="text-lg text-black group-hover:text-white transition-colors" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Location</div>
<div className="text-sm font-medium">San Francisco, CA</div>
</div>
</div>
</div>
</div>
<div className="bg-white">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Your Name *</label>
<input className="w-full bg-zinc-50 border border-zinc-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400" placeholder="John Smith" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Email Address *</label>
<input className="w-full bg-zinc-50 border border-zinc-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400" placeholder="john@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Company Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400" placeholder="Company Inc." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Tell Us About Your Project *</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-zinc-400" placeholder="Describe your project requirements, goals, and timeline..." rows="4"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all shadow-md active:scale-[0.98]" type="submit">
                        Send Inquiry <iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-400 text-center uppercase tracking-wider">By submitting this form, you agree to our Privacy Policy.</p>
</form>
</div>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
<span className="text-black font-medium tracking-tight text-base">GN</span>
</div>
<span className="font-medium tracking-tight text-lg">GlobalNode</span>
</div>
<p className="text-sm text-zinc-400 mb-6 max-w-sm leading-relaxed">Building digital solutions that scale. We partner with ambitious companies to create software that drives growth and innovation.</p>
<div className="flex gap-3">
<a className="w-10 h-10 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:hashtag-square-linear"></iconify-icon>
</a>
<a className="w-10 h-10 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white">Company</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press Kit</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white">Services</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Software Development</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mobile Apps</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cloud Solutions</a></li>
<li><a className="hover:text-white transition-colors" href="#">IT Consulting</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500">© 2024 GlobalNode. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
<a className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                    Back to top <iconify-icon className="text-sm group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-up-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
