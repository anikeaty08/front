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



        // Simple client-side routing logic
        function switchPage(pageId) {
            const homeView = document.getElementById('home-view');
            const servicesView = document.getElementById('services-view');
            const navHome = document.getElementById('nav-home');
            const navServices = document.getElementById('nav-services');

            // Scroll to top
            window.scrollTo(0, 0);

            if (pageId === 'home') {
                homeView.classList.remove('hidden');
                servicesView.classList.add('hidden');
                
                navHome.classList.add('active');
                navHome.classList.remove('text-zinc-400');
                
                navServices.classList.remove('active');
                navServices.classList.add('text-zinc-400');
            } else {
                homeView.classList.add('hidden');
                servicesView.classList.remove('hidden');
                
                navServices.classList.add('active');
                navServices.classList.remove('text-zinc-400');
                
                navHome.classList.remove('active');
                navHome.classList.add('text-zinc-400');
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
      

<nav className="fixed top-0 w-full z-50 glass h-16 flex items-center justify-between px-6 lg:px-12">
<div className="flex items-center gap-2 cursor-pointer" onclick="switchPage('home')">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded text-sm font-bold tracking-tighter">M/L</div>
<span className="text-sm font-medium tracking-tight text-zinc-100">MOTO/LAB</span>
</div>
<div className="hidden md:flex items-center bg-zinc-900/50 rounded-full border border-white/10 p-1">
<button className="nav-link active px-5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all" id="nav-home" onclick="switchPage('home')">Home</button>
<button className="nav-link px-5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all" id="nav-services" onclick="switchPage('services')">Services</button>
</div>
<button className="flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
<span>Book Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</nav>

<main className="pt-16 min-h-screen" id="main-content">

<div className="block" id="home-view">

<section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl fade-in" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Workshop Operational • Accepting Bookings
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-8">
                        Precision engineering <br/> for two wheels.
                    </h1>
<p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10 font-light">
                        We blend traditional craftsmanship with modern diagnostics. The premier destination for performance tuning, restoration, and scheduled maintenance.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2" onclick="switchPage('services')">
                            Explore Services
                            <iconify-icon icon="solar:tuning-square-2-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors">
                            View Gallery
                        </button>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 px-6 lg:px-12 bg-zinc-950/50">
<p className="text-center text-xs text-zinc-600 mb-8 font-mono uppercase tracking-widest">Authorized Service Partners</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">

<span className="text-xl font-bold tracking-tight font-serif">DUCATI</span>
<span className="text-xl font-bold tracking-tight">TRIUMPH</span>
<span className="text-xl font-bold tracking-tight italic">MV AGUSTA</span>
<span className="text-xl font-bold tracking-tight">BMW <span className="font-light">MOTORRAD</span></span>
<span className="text-xl font-bold tracking-tight font-mono">YAMAHA</span>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-6">Not just a mechanic.<br/><span className="text-zinc-500">A laboratory for speed.</span></h2>
<p className="text-zinc-400 font-light leading-relaxed">
                            MOTO/LAB was founded on the principle that every motorcycle deserves factory-level precision coupled with bespoke attention. We don't just swap parts; we analyze, tune, and optimize your machine for peak performance.
                        </p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear"></iconify-icon> Factory Certified Technicians
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear"></iconify-icon> State-of-the-art Dyno Room
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear"></iconify-icon> OEM Parts Guarantee
                            </li>
</ul>
</div>
<div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Workshop Interior" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<div className="text-xs text-blue-400 font-mono mb-1">LOCATION: 01</div>
<div className="text-lg font-medium">Main Workshop Floor</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-white/5 bg-zinc-900/20">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl tracking-tight font-medium mb-4">Core Competencies</h2>
<p className="text-zinc-400 font-light">Comprehensive care for your machine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 rounded-xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-white/20 transition-colors cursor-pointer">
<div className="absolute right-0 top-0 p-32 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white" icon="solar:settings-linear" width="32"></iconify-icon>
<div>
<h3 className="text-2xl font-medium mb-2">Full Engine Diagnostics</h3>
<p className="text-sm text-zinc-400 max-w-md">Using proprietary software and mechanical intuition to diagnose issues before they become failures.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-white/20 transition-colors cursor-pointer">
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white" icon="solar:wheel-angle-linear" width="32"></iconify-icon>
<div>
<h3 className="text-xl font-medium mb-2">Tires &amp; Suspension</h3>
<p className="text-sm text-zinc-400">Precision balancing and fork rebuilding.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-white/20 transition-colors cursor-pointer">
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="32"></iconify-icon>
<div>
<h3 className="text-xl font-medium mb-2">Electrical Systems</h3>
<p className="text-sm text-zinc-400">Wiring loom fabrication and ECU re-mapping.</p>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-white/20 transition-colors cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white" icon="solar:paint-roller-linear" width="32"></iconify-icon>
<div>
<h3 className="text-2xl font-medium mb-2">Custom Fabrication</h3>
<p className="text-sm text-zinc-400 max-w-md">Bespoke metalwork, welding, and aesthetic modifications for unique builds.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-white/5">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="text-3xl tracking-tight font-medium">The Lab Process</h2>
<div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
<span>EFFICIENCY: 98%</span>
<span>|</span>
<span>TURNAROUND: 48HRS AVG</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative pl-6 border-l border-white/10">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full border border-zinc-600"></div>
<span className="text-xs text-blue-400 font-mono mb-2 block">01</span>
<h4 className="text-lg font-medium mb-2">Intake &amp; Scan</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Digital logging of bike condition and initial computerized diagnostic scan.</p>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full border border-zinc-600"></div>
<span className="text-xs text-blue-400 font-mono mb-2 block">02</span>
<h4 className="text-lg font-medium mb-2">Quote Approval</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Transparent digital quote sent directly to your phone for instant approval.</p>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full border border-zinc-600"></div>
<span className="text-xs text-blue-400 font-mono mb-2 block">03</span>
<h4 className="text-lg font-medium mb-2">Execution</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Work performed by master technicians with photo updates provided.</p>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<span className="text-xs text-blue-400 font-mono mb-2 block">04</span>
<h4 className="text-lg font-medium mb-2">Quality Control</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Final test ride and detail cleaning before handover.</p>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="px-6 lg:px-12 mb-12">
<h2 className="text-3xl tracking-tight font-medium">Recent Builds</h2>
</div>

<div className="flex overflow-x-auto gap-6 px-6 lg:px-12 pb-8 scrollbar-hide">
<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-zinc-900 rounded-lg relative overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h4 className="text-xl font-medium">Project Midnight</h4>
<p className="text-xs text-zinc-400 mt-1">Yamaha XSR900 Custom</p>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-zinc-900 rounded-lg relative overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h4 className="text-xl font-medium">Café Racer Reborn</h4>
<p className="text-xs text-zinc-400 mt-1">BMW R100 Restoration</p>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-zinc-900 rounded-lg relative overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h4 className="text-xl font-medium">Track Weapon</h4>
<p className="text-xs text-zinc-400 mt-1">Ducati Panigale V4</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-white/5 bg-zinc-900/10">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl tracking-tight font-medium mb-4">Master Mechanics</h2>
<p className="text-zinc-400 font-light max-w-lg">Our team holds certifications from major manufacturers and has over 40 years of combined track and workshop experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50 text-center">
<div className="w-20 h-20 bg-zinc-800 rounded-full mx-auto mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-medium">Alex Thorne</h4>
<p className="text-xs text-blue-400 mt-1 uppercase tracking-wide">Head Technician</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50 text-center">
<div className="w-20 h-20 bg-zinc-800 rounded-full mx-auto mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-medium">Sarah Jenkins</h4>
<p className="text-xs text-blue-400 mt-1 uppercase tracking-wide">Diagnostics Specialist</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50 text-center">
<div className="w-20 h-20 bg-zinc-800 rounded-full mx-auto mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-medium">Marcus Chen</h4>
<p className="text-xs text-blue-400 mt-1 uppercase tracking-wide">Fabrication Lead</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-white/5">
<h2 className="text-3xl tracking-tight font-medium mb-12">Rider Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 font-light italic mb-6">"The attention to detail at MOTO/LAB is unmatched. They fixed an electrical gremlin my dealer couldn't find for months."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<div className="text-sm font-medium">James D.</div>
<div className="text-xs text-zinc-500">Owner, Ducati Monster</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 font-light italic mb-6">"Professional, fast, and the bike feels better than new. The digital inspection report is a game changer."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">EL</div>
<div>
<div className="text-sm font-medium">Elena L.</div>
<div className="text-xs text-zinc-500">Owner, Triumph Street Triple</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-white/5 bg-zinc-950">
<div className="text-center mb-12">
<h2 className="text-3xl tracking-tight font-medium">Service Plans</h2>
<p className="text-zinc-400 mt-2">Annual memberships for the dedicated rider.</p>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border border-white/10 flex flex-col">
<h3 className="text-lg font-medium text-zinc-300">Standard</h3>
<div className="text-3xl font-medium mt-4 mb-6">$199<span className="text-sm text-zinc-500 font-normal">/year</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 2x Oil Changes</li>
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 20-Point Safety Inspection</li>
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Chain Adjustment</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-medium">Select Standard</button>
</div>

<div className="p-8 rounded-2xl border border-blue-500/50 bg-blue-900/5 relative flex flex-col">
<div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-3 py-1 rounded-bl-lg font-bold tracking-widest uppercase">Best Value</div>
<h3 className="text-lg font-medium text-blue-200">Pro Racer</h3>
<div className="text-3xl font-medium mt-4 mb-6">$499<span className="text-sm text-zinc-500 font-normal">/year</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300"><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Unlimited Oil Changes</li>
<li className="flex items-center gap-3 text-sm text-zinc-300"><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Priority Booking</li>
<li className="flex items-center gap-3 text-sm text-zinc-300"><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> 1x Dyno Run per year</li>
<li className="flex items-center gap-3 text-sm text-zinc-300"><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Winter Storage Discount</li>
</ul>
<button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors text-sm font-medium">Select Pro</button>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Ready to tune up?</h2>
<p className="text-zinc-400 mb-10 max-w-lg mx-auto">Book your slot online. No phone calls needed. Just pure efficiency.</p>
<button className="px-10 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform" onclick="switchPage('services')">
                    Book Service Appointment
                </button>
</section>
</div>

<div className="hidden fade-in" id="services-view">

<section className="pt-20 pb-12 px-6 lg:px-12 border-b border-white/5">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
<div>
<div className="text-xs font-mono text-blue-400 mb-4">CATALOGUE // 2024</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter">Service Menu</h1>
</div>
<div className="max-w-sm">
<p className="text-zinc-400 text-sm leading-relaxed">Select specific services to build your booking request. Prices are estimated and confirmed upon physical inspection.</p>
</div>
</div>
</section>
<div className="flex flex-col lg:flex-row">

<aside className="hidden lg:block w-64 border-r border-white/5 p-6 h-[calc(100vh-300px)] sticky top-24">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Categories</div>
<ul className="space-y-3 text-sm">
<li className="text-white font-medium cursor-pointer">Routine Maintenance</li>
<li className="text-zinc-400 hover:text-white cursor-pointer">Engine &amp; Powertrain</li>
<li className="text-zinc-400 hover:text-white cursor-pointer">Chassis &amp; Suspension</li>
<li className="text-zinc-400 hover:text-white cursor-pointer">Electrical &amp; ECU</li>
<li className="text-zinc-400 hover:text-white cursor-pointer">Custom Work</li>
</ul>
</aside>
<div className="flex-1">

<section className="p-6 lg:p-12 border-b border-white/5">
<h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:clipboard-check-linear"></iconify-icon> Routine Maintenance
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all flex justify-between items-start cursor-pointer">
<div>
<h4 className="font-medium text-lg">Synthetic Oil Service</h4>
<p className="text-xs text-zinc-400 mt-2 max-w-[200px]">Motul 300V oil, high-flow filter, crush washer replacement.</p>
</div>
<div className="text-right">
<span className="block text-lg font-medium">$120</span>
<span className="text-xs text-zinc-500">1 hr</span>
</div>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all flex justify-between items-start cursor-pointer">
<div>
<h4 className="font-medium text-lg">Brake Fluid Flush</h4>
<p className="text-xs text-zinc-400 mt-2 max-w-[200px]">Complete flush front &amp; rear with racing fluid.</p>
</div>
<div className="text-right">
<span className="block text-lg font-medium">$85</span>
<span className="text-xs text-zinc-500">45 min</span>
</div>
</div>
</div>
</section>

<section className="p-6 lg:p-12 border-b border-white/5">
<h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:pistons-linear"></iconify-icon> Engine &amp; Performance
                        </h3>
<div className="space-y-4">

<div className="flex flex-col md:flex-row justify-between items-center p-6 bg-zinc-900/10 rounded-lg border border-white/5">
<div className="flex items-start gap-4">
<div className="bg-zinc-800 p-2 rounded text-white"><iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-medium">Valve Clearance Check</h4>
<p className="text-sm text-zinc-400 mt-1">Required every 15k-24k miles depending on manufacturer.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-6">
<div className="text-right">
<div className="font-medium">From $450</div>
</div>
<button className="px-4 py-2 text-xs font-medium border border-white/20 rounded hover:bg-white hover:text-black transition-colors">Select</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center p-6 bg-zinc-900/10 rounded-lg border border-white/5">
<div className="flex items-start gap-4">
<div className="bg-zinc-800 p-2 rounded text-white"><iconify-icon icon="solar:flame-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-medium">Dyno Tuning &amp; Mapping</h4>
<p className="text-sm text-zinc-400 mt-1">Custom fuel mapping for aftermarket exhausts.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-6">
<div className="text-right">
<div className="font-medium">$350</div>
</div>
<button className="px-4 py-2 text-xs font-medium border border-white/20 rounded hover:bg-white hover:text-black transition-colors">Select</button>
</div>
</div>
</div>
</section>

<section className="p-6 lg:p-12 border-b border-white/5">
<h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:suspension-linear"></iconify-icon> Suspension
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 border border-white/5 rounded-xl text-center hover:border-blue-500/50 transition-colors">
<div className="text-sm font-mono text-zinc-500 mb-2">FORKS</div>
<h4 className="text-lg font-medium">Seal Replacement</h4>
<p className="text-2xl mt-4">$220</p>
</div>
<div className="p-6 border border-white/5 rounded-xl text-center hover:border-blue-500/50 transition-colors">
<div className="text-sm font-mono text-zinc-500 mb-2">SHOCK</div>
<h4 className="text-lg font-medium">Rear Rebuild</h4>
<p className="text-2xl mt-4">$180</p>
</div>
<div className="p-6 border border-white/5 rounded-xl text-center hover:border-blue-500/50 transition-colors">
<div className="text-sm font-mono text-zinc-500 mb-2">SETUP</div>
<h4 className="text-lg font-medium">Sag &amp; Clicker Setup</h4>
<p className="text-2xl mt-4">$60</p>
</div>
</div>
</section>

<section className="p-6 lg:p-12 border-b border-white/5">
<h3 className="text-2xl font-medium mb-8">Electrical Services</h3>
<p className="text-zinc-400 text-sm mb-6">We specialize in CAN-bus systems and lithium conversions.</p>
<div className="bg-zinc-900/30 rounded-xl p-6 border border-white/5">
<label className="flex items-center gap-4 cursor-pointer py-2 border-b border-white/5 last:border-0">
<input type="checkbox"/>
<span className="text-sm">Battery Diagnostic &amp; Replacement</span>
</label>
<label className="flex items-center gap-4 cursor-pointer py-2 border-b border-white/5 last:border-0">
<input type="checkbox"/>
<span className="text-sm">Auxiliary Light Installation</span>
</label>
<label className="flex items-center gap-4 cursor-pointer py-2 border-b border-white/5 last:border-0">
<input type="checkbox"/>
<span className="text-sm">Alarm / GPS Tracker Fitment</span>
</label>
</div>
</section>

<section className="p-6 lg:p-12 border-b border-white/5">
<h3 className="text-2xl font-medium mb-6">Tires</h3>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1 bg-zinc-800/20 p-6 rounded-xl">
<h4 className="font-medium mb-4">Mount &amp; Balance</h4>
<ul className="text-sm space-y-2 text-zinc-400">
<li>• Loose Wheel: $30</li>
<li>• On Bike (Front): $50</li>
<li>• On Bike (Rear): $60</li>
</ul>
</div>
<div className="flex-1 bg-zinc-800/20 p-6 rounded-xl">
<h4 className="font-medium mb-4">Inventory Brands</h4>
<div className="flex gap-4 opacity-50">
<span>Pirelli</span>
<span>Michelin</span>
<span>Dunlop</span>
<span>Bridgestone</span>
</div>
</div>
</div>
</section>

<section className="p-6 lg:p-12 border-b border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">12</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Month Warranty</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">OEM</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Parts Only</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">24/7</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Secure Storage</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">100%</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Satisfaction</div>
</div>
</section>

<section className="p-6 lg:p-12 bg-zinc-950">
<h3 className="text-2xl font-medium mb-2">Book Your Appointment</h3>
<p className="text-sm text-zinc-400 mb-8">Secure your spot in the lab.</p>
<form className="max-w-2xl space-y-6" onsubmit="event.preventDefault(); alert('Booking Request Sent!');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Full Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Email</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Make</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Ducati" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Model</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Monster 821" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Year</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="2018" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Preferred Date</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-400 focus:outline-none focus:border-blue-500 transition-colors" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Issue Description / Notes</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors h-32" placeholder="Describe the service needed or any issues..."></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-lg transition-all flex justify-center items-center gap-2" type="submit">
                                Confirm Request
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-500">We will confirm your appointment via email within 2 hours.</p>
</form>
</section>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded text-sm font-bold tracking-tighter mb-4">M/L</div>
<p className="text-sm text-zinc-500">
                    High-performance motorcycle workshop specializing in European and Japanese machinery.
                </p>
</div>
<div>
<h5 className="font-medium mb-4 text-sm">Services</h5>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="hover:text-white cursor-pointer">Diagnostics</li>
<li className="hover:text-white cursor-pointer">Tuning</li>
<li className="hover:text-white cursor-pointer">Restoration</li>
<li className="hover:text-white cursor-pointer">Track Prep</li>
</ul>
</div>
<div>
<h5 className="font-medium mb-4 text-sm">Company</h5>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="hover:text-white cursor-pointer">About Us</li>
<li className="hover:text-white cursor-pointer">Careers</li>
<li className="hover:text-white cursor-pointer">Privacy Policy</li>
<li className="hover:text-white cursor-pointer">Terms</li>
</ul>
</div>
<div>
<h5 className="font-medium mb-4 text-sm">Visit Us</h5>
<p className="text-sm text-zinc-400 mb-2">1024 Cylinder Avenue,<br/>Mechanic District, NY 10012</p>
<p className="text-sm text-zinc-400">hello@motolab.com</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600">© 2024 MOTO/LAB Workshop. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0 text-zinc-400">
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:bicycling-linear"></iconify-icon>
</div>
</div>
</footer>


    </>
  );
}
