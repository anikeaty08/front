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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-white text-xl font-medium tracking-tighter" href="#">JDI</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Compatibility</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Install Guides</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Support</a>
</nav>

<div className="flex items-center space-x-4">
<button className="text-zinc-400 hover:text-white transition-colors p-1">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors p-1">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors p-1 relative">
<iconify-icon className="text-lg" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-white ring-2 ring-zinc-950"></span>
</button>
<button className="md:hidden text-zinc-400 hover:text-white p-1">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">

<div className="absolute inset-0 bg-tech-grid opacity-50 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">New Ghost Systems Available</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
                Modernize Your Drive.<br/>
<span className="text-zinc-500">Upgrade Your Ignition.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
                Plug-and-play push-to-start conversion kits, advanced immobilizers, and power management modules engineered for classic and modern enthusiast vehicles.
            </p>

<div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 max-w-5xl mx-auto glow-effect text-left shadow-2xl">
<div className="mb-4 flex items-center space-x-2 text-white">
<iconify-icon className="text-lg text-zinc-400" icon="solar:routing-2-linear"></iconify-icon>
<h2 className="text-base font-medium tracking-tight">Vehicle Compatibility Search</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="relative">
<label className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Year</label>
<select className="w-full appearance-none bg-zinc-950/50 border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer">
<option disabled="" selected="" value="">Select Year</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
</select>
<div className="pointer-events-none absolute bottom-0 right-0 top-6 flex items-center px-3 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="relative">
<label className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Make</label>
<select className="w-full appearance-none bg-zinc-950/50 border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer">
<option disabled="" selected="" value="">Select Make</option>
<option value="honda">Honda</option>
<option value="acura">Acura</option>
<option value="toyota">Toyota</option>
</select>
<div className="pointer-events-none absolute bottom-0 right-0 top-6 flex items-center px-3 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="relative">
<label className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Model</label>
<select className="w-full appearance-none bg-zinc-950/50 border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm text-zinc-500 focus:outline-none focus:border-white/30 transition-all cursor-not-allowed" disabled="">
<option disabled="" selected="" value="">Select Model</option>
</select>
<div className="pointer-events-none absolute bottom-0 right-0 top-6 flex items-center px-3 text-zinc-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="relative">
<label className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider">Product Type</label>
<select className="w-full appearance-none bg-zinc-950/50 border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer">
<option value="all">All Products</option>
<option value="push-start">Push-Start Conversion</option>
<option value="anti-theft">Anti-Theft System</option>
<option value="audio">Audio Interface</option>
<option value="power">Power Management</option>
<option value="accessories">Accessories</option>
</select>
<div className="pointer-events-none absolute bottom-0 right-0 top-6 flex items-center px-3 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex items-end">
<button className="w-full bg-white text-zinc-950 font-medium text-sm py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-2">
<span>Find My Kit</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-sm font-medium text-zinc-500 tracking-tight mb-6 text-center">Frequently Modified Platforms</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-4">
<a className="group bg-white/5 border border-white/5 hover:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all" href="#">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors mb-2" icon="solar:key-minimalistic-2-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Honda Civic</span>
<span className="text-xs text-zinc-500 mt-1">'92 - '00</span>
</a>
<a className="group bg-white/5 border border-white/5 hover:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all" href="#">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors mb-2" icon="solar:key-minimalistic-2-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Acura Integra</span>
<span className="text-xs text-zinc-500 mt-1">'94 - '01</span>
</a>
<a className="group bg-white/5 border border-white/5 hover:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all" href="#">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors mb-2" icon="solar:key-minimalistic-2-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Acura RSX</span>
<span className="text-xs text-zinc-500 mt-1">'02 - '06</span>
</a>
<a className="group bg-white/5 border border-white/5 hover:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all" href="#">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors mb-2" icon="solar:key-minimalistic-2-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Honda Accord</span>
<span className="text-xs text-zinc-500 mt-1">'94 - '02</span>
</a>
<a className="group bg-white/5 border border-white/5 hover:border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all hidden md:flex" href="#">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors mb-2" icon="solar:key-minimalistic-2-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Toyota Models</span>
<span className="text-xs text-zinc-500 mt-1">Various</span>
</a>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-4">The Ghost Ecosystem</h2>
<p className="text-sm text-zinc-400 max-w-2xl">A modular architecture designed for seamless integration. Build your ultimate interior setup with individual components that work together flawlessly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative flex flex-col">
<div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 mb-5 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent opacity-80 z-10"></div>

<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center z-20 group-hover:border-white/50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<div className="w-8 h-8 rounded-full bg-white/10 animate-pulse"></div>
</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base text-white font-medium">Ghost Key</h3>
<span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-md">Core</span>
</div>
<p className="text-xs text-zinc-400 mb-6 flex-1 line-clamp-2">Complete plug-and-play push-to-start conversion kit replacing your traditional ignition cylinder.</p>
<a className="inline-flex items-center space-x-2 text-xs text-white font-medium hover:text-zinc-300 transition-colors uppercase tracking-wider" href="#">
<span>Explore Module</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 mb-5 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent opacity-80 z-10"></div>
<div className="w-16 h-16 rounded-lg border border-white/20 flex items-center justify-center z-20 group-hover:border-white/50 transition-colors">
<iconify-icon className="text-2xl text-white/50" icon="solar:shield-keyhole-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base text-white font-medium">Ghost Lock</h3>
<span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-md">Security</span>
</div>
<p className="text-xs text-zinc-400 mb-6 flex-1 line-clamp-2">Advanced anti-theft immobilizer system preventing unauthorized engine start.</p>
<a className="inline-flex items-center space-x-2 text-xs text-white font-medium hover:text-zinc-300 transition-colors uppercase tracking-wider" href="#">
<span>Explore Module</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 mb-5 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent opacity-80 z-10"></div>
<div className="w-16 h-16 rounded-lg border border-white/20 flex items-center justify-center z-20 group-hover:border-white/50 transition-colors">
<iconify-icon className="text-2xl text-white/50" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base text-white font-medium">Ghost Power</h3>
<span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-md">Utility</span>
</div>
<p className="text-xs text-zinc-400 mb-6 flex-1 line-clamp-2">Intelligent power management module for accessory distribution and battery protection.</p>
<a className="inline-flex items-center space-x-2 text-xs text-white font-medium hover:text-zinc-300 transition-colors uppercase tracking-wider" href="#">
<span>Explore Module</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 mb-5 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent opacity-80 z-10"></div>
<div className="w-16 h-16 rounded-lg border border-white/20 flex items-center justify-center z-20 group-hover:border-white/50 transition-colors">
<iconify-icon className="text-2xl text-white/50" icon="solar:boombox-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base text-white font-medium">Ghost Box</h3>
<span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-md">Audio</span>
</div>
<p className="text-xs text-zinc-400 mb-6 flex-1 line-clamp-2">High-fidelity audio interface module to connect modern devices to classic head units.</p>
<a className="inline-flex items-center space-x-2 text-xs text-white font-medium hover:text-zinc-300 transition-colors uppercase tracking-wider" href="#">
<span>Explore Module</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative aspect-video bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-tech-grid opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-white ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center">
<span className="text-xs text-white font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">Installation Guide</span>
<span className="text-xs text-zinc-400">08:42</span>
</div>
</div>

<div>
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-4">Engineered for DIY.</h2>
<p className="text-sm text-zinc-400 mb-10">We design our systems from the ground up to utilize factory mounting points and connectors. No splicing, no soldering, no permanent modifications.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex space-x-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-white" icon="solar:plug-defrost-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Plug-and-Play Harness</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Vehicle-specific T-harnesses connect directly inline with factory wiring.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-white" icon="solar:scissors-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">No Wire Cutting</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Preserve your vehicle's factory wiring harness and warranty.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-white" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Under 60 Minutes</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Most installations can be completed in an afternoon with basic hand tools.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-white" icon="solar:wrench-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">100% Reversible</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Return your vehicle back to stock configuration at any time.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
<h3 className="text-sm font-medium text-white tracking-tight">Supported Platforms</h3>
<a className="text-xs text-zinc-400 hover:text-white transition-colors mt-2 md:mt-0 flex items-center space-x-1" href="#">
<span>View full compatibility list</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap gap-8 md:gap-16 opacity-50 grayscale">

<div className="text-xl font-medium tracking-tighter uppercase">Honda</div>
<div className="text-xl font-medium tracking-tighter uppercase">Acura</div>
<div className="text-xl font-medium tracking-tighter uppercase">Toyota</div>
<div className="text-xl font-medium tracking-tighter uppercase">Lexus</div>
<div className="text-xl font-medium tracking-tighter uppercase">Nissan</div>
<div className="text-xl font-medium tracking-tighter uppercase">Hyundai</div>
<div className="text-xl font-medium tracking-tighter uppercase">Kia</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-12">Featured Kits</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group block">
<div className="aspect-square bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl border border-white/10 flex items-center justify-center bg-zinc-950/50">
<span className="text-xs text-zinc-600 font-medium tracking-widest uppercase">Kit Image</span>
</div>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-white font-medium">Honda Civic (EG/EK) Push Start Kit</h3>
</div>
<p className="text-xs text-zinc-500 mb-3">Ghost Key Architecture</p>
<div className="flex items-center justify-between">
<span className="text-sm text-white font-medium">$249.00</span>
<button className="text-xs bg-white text-zinc-950 font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors">View Kit</button>
</div>
</div>

<div className="group block">
<div className="aspect-square bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl border border-white/10 flex items-center justify-center bg-zinc-950/50">
<span className="text-xs text-zinc-600 font-medium tracking-widest uppercase">Kit Image</span>
</div>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-white font-medium">Acura Integra (DC2) Immobilizer</h3>
</div>
<p className="text-xs text-zinc-500 mb-3">Ghost Lock System</p>
<div className="flex items-center justify-between">
<span className="text-sm text-white font-medium">$189.00</span>
<button className="text-xs bg-white text-zinc-950 font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors">View Kit</button>
</div>
</div>

<div className="group block">
<div className="aspect-square bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl border border-white/10 flex items-center justify-center bg-zinc-950/50">
<span className="text-xs text-zinc-600 font-medium tracking-widest uppercase">Kit Image</span>
</div>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-white font-medium">Toyota Tacoma (Gen 1) Push Start</h3>
</div>
<p className="text-xs text-zinc-500 mb-3">Ghost Key Architecture</p>
<div className="flex items-center justify-between">
<span className="text-sm text-white font-medium">$279.00</span>
<button className="text-xs bg-white text-zinc-950 font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors">View Kit</button>
</div>
</div>

<div className="group block">
<div className="aspect-square bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl border border-white/10 flex items-center justify-center bg-zinc-950/50">
<span className="text-xs text-zinc-600 font-medium tracking-widest uppercase">Kit Image</span>
</div>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-white font-medium">Universal Ghost Power Module</h3>
</div>
<p className="text-xs text-zinc-500 mb-3">Power Management</p>
<div className="flex items-center justify-between">
<span className="text-sm text-white font-medium">$129.00</span>
<button className="text-xs bg-white text-zinc-950 font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors">View Kit</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 text-white font-medium text-sm py-3 px-8 rounded-lg hover:bg-white/10 transition-colors" href="#">
<span>Shop All Products</span>
</a>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-4">Community Builds</h2>
<p className="text-sm text-zinc-400 max-w-xl mx-auto">See how enthusiasts are integrating our systems into their builds. Tag us to be featured.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="aspect-[4/5] bg-zinc-900 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs text-white font-medium">@civic_builds</p>
<p className="text-[10px] text-zinc-400">EG Hatch • Ghost Key</p>
</div>
</div>
<div className="aspect-[4/5] bg-zinc-900 rounded-xl border border-white/5 relative overflow-hidden group mt-8">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs text-white font-medium">@dc2_type_r</p>
<p className="text-[10px] text-zinc-400">Integra • Ghost Lock</p>
</div>
</div>
<div className="aspect-[4/5] bg-zinc-900 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs text-white font-medium">@taco_overland</p>
<p className="text-[10px] text-zinc-400">Tacoma • Power Module</p>
</div>
</div>
<div className="aspect-[4/5] bg-zinc-900 rounded-xl border border-white/5 relative overflow-hidden group mt-8">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs text-white font-medium">@s2k_track</p>
<p className="text-[10px] text-zinc-400">S2000 • Full System</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-12 text-center">Driver Reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<div className="flex items-center space-x-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"The Ghost Key completely transformed my '98 Civic. The wiring harness was exactly as described, completely plug-and-play. Took me about 45 minutes to install following the video guide."</p>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">M</div>
<div>
<p className="text-xs text-white font-medium">Michael R.</p>
<p className="text-[10px] text-zinc-500">Verified Buyer • Honda Civic</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<div className="flex items-center space-x-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"Added the immobilizer to my Integra after seeing how many get stolen. The build quality on the module is top-notch, feels like OEM hardware. Peace of mind is worth every penny."</p>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">D</div>
<div>
<p className="text-xs text-white font-medium">David T.</p>
<p className="text-[10px] text-zinc-500">Verified Buyer • Acura Integra</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<div className="flex items-center space-x-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"Customer support is fantastic. I had a question about the accessory power routing for my specific trim level, and they replied within an hour with a diagram. Product works flawlessly."</p>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">S</div>
<div>
<p className="text-xs text-white font-medium">Sarah L.</p>
<p className="text-[10px] text-zinc-500">Verified Buyer • Toyota Tacoma</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-4">Support &amp; FAQ</h2>
<p className="text-sm text-zinc-400">Everything you need to know about compatibility, installation, and warranty.</p>
</div>
<div className="space-y-4">
<details className="group bg-white/5 border border-white/10 rounded-xl px-6 py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-sm text-white outline-none">
<span>Is wire cutting required for installation?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm font-light leading-relaxed">
                        No. All of our primary kits feature specific T-harnesses designed to plug directly into your vehicle's factory connectors. You can easily revert your vehicle to stock condition if needed.
                    </p>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl px-6 py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-sm text-white outline-none">
<span>Will this work with manual transmission vehicles?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm font-light leading-relaxed">
                        Yes, our kits are fully compatible with manual transmissions. They incorporate safety protocols requiring clutch engagement before the starter motor will activate, mimicking factory safety features.
                    </p>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl px-6 py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-sm text-white outline-none">
<span>What is covered under the warranty?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm font-light leading-relaxed">
                        We offer a 2-year limited warranty on all electronic modules and harnesses covering manufacturing defects. Physical damage or damage from improper installation is not covered.
                    </p>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl px-6 py-4 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-sm text-white outline-none">
<span>How do I know if my specific trim is supported?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm font-light leading-relaxed">
                        Use the Vehicle Compatibility Search tool at the top of the page. If your specific trim level is not listed, contact our support team with your VIN, and we will verify harness compatibility for you.
                    </p>
</details>
</div>
<div className="mt-8 text-center">
<a className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4" href="#">Visit Help Center</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-white text-xl font-medium tracking-tighter block mb-4">JDI</span>
<p className="text-xs text-zinc-500 mb-6">Precision automotive electronics and plug-and-play conversion kits for the modern enthusiast.</p>
<div className="flex space-x-4 text-zinc-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:hashtag-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:video-frame-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Ghost Key Kits</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Immobilizer Systems</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Power Modules</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Installation Guides</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Compatibility Checker</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Warranty Info</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-4">Newsletter</h4>
<p className="text-xs text-zinc-500 mb-4">Updates on new vehicle support and product releases.</p>
<form className="flex">
<input className="w-full bg-white/5 border border-white/10 rounded-l-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-white text-zinc-950 font-medium px-4 py-2 rounded-r-lg text-xs hover:bg-zinc-200 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
<p className="text-[10px] text-zinc-600 mb-4 md:mb-0">© 2024 JDI Distributors. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
