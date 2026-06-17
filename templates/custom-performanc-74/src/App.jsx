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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="font-serif text-3xl font-semibold tracking-tight" href="#">Herkie.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#platform">Platform</a>
<a className="hover:text-zinc-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#materials">Materials</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">Log in</a>
<a className="bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors flex items-center gap-2 group" href="#">
                    Contact Sales
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                v2.0 Dashboard Now Live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                The New Standard in <br className="hidden md:block"/>
<span className="text-zinc-400">Custom Performance Wear.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Premium made-to-order uniforms, managed entirely online. <br className="hidden md:block"/>
                Zero spreadsheets, zero sizing errors, absolute precision.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full md:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                    Start Custom Order
                    <i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<button className="w-full md:w-auto bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-50 transition-all">
                    View Lookbook
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 relative mt-12">
<div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-zinc-50 to-white rounded-2xl border border-zinc-100 shadow-2xl overflow-hidden relative">

<div className="absolute inset-0 p-8 flex flex-col">
<div className="w-full h-full border border-zinc-200 rounded-xl bg-white shadow-sm flex overflow-hidden">

<div className="w-64 border-r border-zinc-100 p-6 hidden md:flex flex-col gap-6 bg-zinc-50/50">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div className="space-y-3">
<div className="w-full h-2 bg-zinc-200 rounded-full"></div>
<div className="w-3/4 h-2 bg-zinc-200 rounded-full"></div>
</div>
</div>

<div className="flex-1 relative bg-zinc-50">
<div className="absolute inset-0 grid grid-cols-3 gap-1 p-1">
<div className="bg-zinc-200 rounded-lg h-full animate-pulse"></div>
<div className="bg-zinc-300 rounded-lg h-full"></div>
<div className="bg-zinc-200 rounded-lg h-full animate-pulse delay-75"></div>
</div>

<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur border border-zinc-200 p-4 rounded-lg shadow-xl w-64">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Order Status</span>
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
</div>
<div className="text-sm font-medium text-zinc-900">Cutting Phase</div>
<div className="w-full bg-zinc-100 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-zinc-900 w-3/4 h-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-zinc-400 mb-8">TRUSTED BY ELITE PROGRAMS WORLDWIDE</p>
<div className="flex justify-between items-center opacity-40 grayscale mix-blend-multiply flex-wrap gap-8">

<div className="h-8 w-24 bg-zinc-800/20 rounded"></div>
<div className="h-8 w-24 bg-zinc-800/20 rounded"></div>
<div className="h-8 w-24 bg-zinc-800/20 rounded hidden md:block"></div>
<div className="h-8 w-24 bg-zinc-800/20 rounded hidden md:block"></div>
<div className="h-8 w-24 bg-zinc-800/20 rounded"></div>
<div className="h-8 w-24 bg-zinc-800/20 rounded"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                    Designing uniforms <br/> shouldn't feel like <br/> doing taxes.
                </h2>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="p-2 bg-red-50 text-red-600 rounded-lg mt-1">
<i className="w-5 h-5" data-lucide="x"></i>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900">The Old Way</h3>
<p className="text-zinc-500 mt-1 leading-relaxed">Endless email threads, confusing spreadsheets, lost deposits, and the anxiety of incorrect sizes arriving on game day.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-100 bg-white shadow-sm ring-1 ring-zinc-100">
<div className="p-2 bg-zinc-900 text-white rounded-lg mt-1">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900">The Herkie Way</h3>
<p className="text-zinc-500 mt-1 leading-relaxed">A centralized digital workspace. Visualize designs in 3D, collect sizes via mobile app, and track manufacturing in real-time.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297461136-82lw9b28b58c?q=80&amp;w=2667&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-90 grayscale mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur-md border border-zinc-200 p-8 rounded-2xl shadow-2xl max-w-xs text-center">
<div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<div className="text-2xl font-semibold text-zinc-900 mb-2">100% Digital</div>
<p className="text-zinc-500 text-sm">From concept to cut-and-sew, every step is captured in the cloud.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">The Command Center</h2>
<p className="text-xl text-zinc-500">Collaborate directly with designers, track production in real-time, and manage team rosters in one place.</p>
</div>
<div className="bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden relative aspect-[16/10] md:aspect-[21/10]">

<div className="h-12 border-b border-zinc-100 flex items-center px-6 gap-4 bg-white">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
<div className="h-6 w-px bg-zinc-200"></div>
<div className="text-xs font-medium text-zinc-400">Herkie OS</div>
</div>
<div className="flex h-full">

<div className="w-64 border-r border-zinc-100 hidden lg:block p-6 bg-zinc-50/30">
<div className="space-y-6">
<div className="flex items-center gap-3 text-zinc-900 font-medium">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i> Overview
                            </div>
<div className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="shirt"></i> Designs
                            </div>
<div className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="users"></i> Roster
                            </div>
<div className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="truck"></i> Production
                            </div>
</div>
</div>

<div className="flex-1 p-8 overflow-hidden">
<div className="flex justify-between items-center mb-8">
<h3 className="text-2xl font-semibold tracking-tight">Varsity Collection '24</h3>
<span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600 border border-zinc-200">Production Phase: Sewing</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-50 border border-zinc-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
<div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center border border-zinc-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">View 3D</button>
</div>
<i className="w-12 h-12 text-zinc-300" data-lucide="shirt"></i>
</div>
<div className="flex justify-between items-end">
<div>
<div className="font-medium text-zinc-900">Shell Top</div>
<div className="text-sm text-zinc-500">Mystic Blue / White</div>
</div>
<div className="text-xs font-mono text-zinc-400">#HK-882</div>
</div>
</div>

<div className="bg-zinc-50 border border-zinc-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
<div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center border border-zinc-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">View 3D</button>
</div>
<i className="w-12 h-12 text-zinc-300" data-lucide="scissors"></i>
</div>
<div className="flex justify-between items-end">
<div>
<div className="font-medium text-zinc-900">A-Line Skirt</div>
<div className="text-sm text-zinc-500">Mystic Blue / Silver</div>
</div>
<div className="text-xs font-mono text-zinc-400">#HK-883</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white border border-zinc-100 rounded-xl p-6 shadow-sm">
<div className="text-sm text-zinc-500 mb-2">Team Sizing Completed</div>
<div className="text-3xl font-semibold text-zinc-900">100%</div>
<div className="w-full bg-zinc-100 h-1.5 mt-4 rounded-full">
<div className="bg-zinc-900 h-full w-full rounded-full"></div>
</div>
</div>
<div className="bg-white border border-zinc-100 rounded-xl p-6 shadow-sm">
<div className="text-sm text-zinc-500 mb-2">Estimated Delivery</div>
<div className="text-3xl font-semibold text-zinc-900">Oct 14</div>
<div className="flex items-center gap-2 mt-2 text-green-600 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check-circle"></i> On Schedule
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Precision Sizing</h2>
<p className="text-xl text-zinc-500 max-w-2xl">A closed-loop system designed to eliminate returns. The Herkie Fit Ecosystem combines physical verification with digital accuracy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 bg-zinc-900 rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950"></div>

<div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white rounded-tl-3xl shadow-2xl translate-y-8 translate-x-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 p-6 border border-zinc-200">
<div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
<div className="text-lg font-bold text-zinc-900">My Measurements</div>
<i className="w-5 h-5 text-zinc-400" data-lucide="scan-line"></i>
</div>
<div className="space-y-4">
<div className="h-12 w-full bg-zinc-50 rounded-lg flex items-center px-4 justify-between">
<span className="text-zinc-500 text-sm">Chest</span>
<span className="text-zinc-900 font-medium">34.5"</span>
</div>
<div className="h-12 w-full bg-zinc-50 rounded-lg flex items-center px-4 justify-between">
<span className="text-zinc-500 text-sm">Waist</span>
<span className="text-zinc-900 font-medium">26.0"</span>
</div>
<div className="h-12 w-full bg-zinc-50 rounded-lg flex items-center px-4 justify-between">
<span className="text-zinc-500 text-sm">Hips</span>
<span className="text-zinc-900 font-medium">36.2"</span>
</div>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="p-2 bg-white/10 w-fit rounded-lg backdrop-blur text-white border border-white/20">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<div className="max-w-xs">
<h3 className="text-2xl font-medium text-white mb-2">Virtual Sizing App</h3>
<p className="text-zinc-400">Team members scan themselves in seconds. AI-driven recommendations ensure the perfect fit for every athlete.</p>
</div>
</div>
</div>

<div className="md:col-span-1 bg-zinc-50 border border-zinc-200 rounded-3xl p-8 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zinc-200 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="p-2 bg-white w-fit rounded-lg shadow-sm border border-zinc-100 text-zinc-900">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<div>
<div className="aspect-square w-32 mx-auto bg-white rounded-xl shadow-lg border border-zinc-100 mb-8 rotate-3 hover:rotate-0 transition-transform flex items-center justify-center">
<span className="font-serif italic font-semibold text-2xl">H.</span>
</div>
<h3 className="text-2xl font-medium text-zinc-900 mb-2">The Physical Fit Kit</h3>
<p className="text-zinc-500 text-sm">We ship a full size run to your gym for double-verification. Try on, scan QR, confirm.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Streamlined Process</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-200"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="relative pt-4 md:pt-8 text-center md:text-left group">
<div className="hidden md:block absolute top-10 left-0 w-4 h-4 bg-zinc-900 rounded-full border-4 border-white ring-1 ring-zinc-200 group-hover:scale-110 transition-transform z-10"></div>
<span className="text-xs font-mono font-semibold text-zinc-400 mb-2 block">01</span>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Design</h4>
<p className="text-sm text-zinc-500">Collaborate with our atelier to create a bespoke look.</p>
</div>

<div className="relative pt-4 md:pt-8 text-center md:text-left group">
<div className="hidden md:block absolute top-10 left-0 w-4 h-4 bg-white rounded-full border-4 border-white ring-1 ring-zinc-300 group-hover:bg-zinc-900 transition-colors z-10"></div>
<span className="text-xs font-mono font-semibold text-zinc-400 mb-2 block">02</span>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Fit Kit</h4>
<p className="text-sm text-zinc-500">Receive samples and use the app for sizing.</p>
</div>

<div className="relative pt-4 md:pt-8 text-center md:text-left group">
<div className="hidden md:block absolute top-10 left-0 w-4 h-4 bg-white rounded-full border-4 border-white ring-1 ring-zinc-300 group-hover:bg-zinc-900 transition-colors z-10"></div>
<span className="text-xs font-mono font-semibold text-zinc-400 mb-2 block">03</span>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Roster Setup</h4>
<p className="text-sm text-zinc-500">Digital profiles created for every athlete.</p>
</div>

<div className="relative pt-4 md:pt-8 text-center md:text-left group">
<div className="hidden md:block absolute top-10 left-0 w-4 h-4 bg-white rounded-full border-4 border-white ring-1 ring-zinc-300 group-hover:bg-zinc-900 transition-colors z-10"></div>
<span className="text-xs font-mono font-semibold text-zinc-400 mb-2 block">04</span>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Deposit</h4>
<p className="text-sm text-zinc-500">Secure payment via the dashboard.</p>
</div>

<div className="relative pt-4 md:pt-8 text-center md:text-left group">
<div className="hidden md:block absolute top-10 left-0 w-4 h-4 bg-white rounded-full border-4 border-white ring-1 ring-zinc-300 group-hover:bg-zinc-900 transition-colors z-10"></div>
<span className="text-xs font-mono font-semibold text-zinc-400 mb-2 block">05</span>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Production</h4>
<p className="text-sm text-zinc-500">Real-time tracking until delivery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden relative" id="materials">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-zinc-800 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-8">
                        Design that moves<br/> <span className="text-zinc-500 italic">with you.</span>
</h2>
<p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                        We don't just print on polyester. We engineer proprietary fabrics that offer 4-way stretch, moisture-wicking technology, and shape retention that lasts season after season.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
<span className="text-2xl font-light">01</span>
<span className="text-lg text-zinc-300">Motion-Flex™ Technology</span>
</div>
<div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
<span className="text-2xl font-light">02</span>
<span className="text-lg text-zinc-300">Reinforced Stitching</span>
</div>
<div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
<span className="text-2xl font-light">03</span>
<span className="text-lg text-zinc-300">Crystal &amp; Mesh Integration</span>
</div>
</div>
</div>
<div className="relative h-[600px] w-full bg-zinc-800 rounded-lg overflow-hidden">
<img alt="Fabric Detail" className="object-cover w-full h-full opacity-60 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur px-4 py-2 rounded text-xs tracking-widest uppercase">
                        Elite Performance Fabric
                     </div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-sm">
<a className="font-serif text-3xl font-semibold tracking-tight block mb-6" href="#">Herkie.</a>
<p className="text-zinc-500 leading-relaxed mb-6">
                        The operating system for modern athletic teams. Design, size, and order with confidence.
                    </p>
<div className="flex gap-4">
<button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-medium hover:bg-zinc-800 transition-colors">
<i className="w-4 h-4" data-lucide="apple"></i> App Store
                        </button>
<button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-medium hover:bg-zinc-800 transition-colors">
<i className="w-3 h-3 fill-current" data-lucide="play"></i> Google Play
                        </button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div>
<h5 className="font-semibold text-zinc-900 mb-4">Product</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Platform</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fit Kit</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fabrics</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-zinc-900 mb-4">Company</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="hidden md:block">
<h5 className="font-semibold text-zinc-900 mb-4">Social</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Herkie Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
