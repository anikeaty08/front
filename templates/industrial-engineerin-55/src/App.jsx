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



function route(pageId) {
// 1. Hide all pages
document.querySelectorAll('.page-content').forEach(page => {
page.classList.remove('active');
});
// 2. Show selected page
const target = document.getElementById(pageId);
if(target) {
target.classList.add('active');
window.scrollTo(0, 0);
}
// 3. Update Navigation States
document.querySelectorAll('.nav-link').forEach(link => {
link.classList.remove('active');
if(link.getAttribute('data-page') === pageId) {
link.classList.add('active');
}
});
}
// Initialize on load
window.onload = () => {
route('home');
};

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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="javascript:void(0)" onclick="route('home')">
<div className="w-8 h-8 bg-neutral-900 flex items-center justify-center text-white group-hover:bg-orange-600 transition-colors">
<iconify-icon icon="lucide:box" width="16"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight uppercase">Struktur</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-500">
<button className="nav-link hover:text-neutral-900 transition-colors" data-page="home" onclick="route('home')">Home</button>
<button className="nav-link hover:text-neutral-900 transition-colors" data-page="about" onclick="route('about')">About</button>
<button className="nav-link hover:text-neutral-900 transition-colors" data-page="sectors" onclick="route('sectors')">Sectors</button>
<button className="nav-link hover:text-neutral-900 transition-colors" data-page="projects" onclick="route('projects')">Projects</button>
<button className="nav-link hover:text-neutral-900 transition-colors" data-page="shop" onclick="route('shop')">Shop</button>
<button className="nav-link hover:text-neutral-900 transition-colors" data-page="team" onclick="route('team')">Team</button>
</div>

<button className="bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-orange-600 transition-colors" onclick="route('contact')">
                Contact
            </button>
</div>
</nav>

<main className="flex-grow pt-20">

<div className="page-content active" id="home">

<header className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-8 border border-orange-100">
<div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></div>
                                Engineering The Invisible
                            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-neutral-900 leading-[0.9] mb-8">
                                SYSTEM <br/>
<span className="text-neutral-300">INTEGRITY.</span>
</h1>
<p className="text-xl text-neutral-500 font-light max-w-lg leading-relaxed mb-10">
                                We provide structural analysis and mechanical engineering for the world's most complex industrial environments.
                            </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors flex items-center gap-2" onclick="route('projects')">
                                    View Projects <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-widest hover:bg-neutral-50 transition-colors" onclick="route('about')">
                                    Our Methodology
                                </button>
</div>
</div>

<div className="relative h-[600px] w-full bg-neutral-100 overflow-hidden border border-neutral-200">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl border border-neutral-100 max-w-xs">
<div className="flex items-center gap-4 mb-4 border-b border-neutral-100 pb-4">
<div className="bg-green-100 text-green-600 p-2 rounded-full">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-neutral-400">System Status</div>
<div className="text-sm font-bold text-neutral-900">Optimal Load</div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-neutral-500">
<span>Pressure</span>
<span>1240 PSI</span>
</div>
<div className="w-full h-1 bg-neutral-100"><div className="w-[85%] h-full bg-neutral-900"></div></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-screen-2xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-4xl font-light tracking-tighter mb-1">142</div>
<div className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Global Projects</div>
</div>
<div>
<div className="text-4xl font-light tracking-tighter mb-1">45y</div>
<div className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Experience</div>
</div>
<div>
<div className="text-4xl font-light tracking-tighter mb-1">0%</div>
<div className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Net Carbon</div>
</div>
<div>
<div className="text-4xl font-light tracking-tighter mb-1">800+</div>
<div className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Engineers</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="about">
<div className="bg-neutral-900 text-white py-32">
<div className="max-w-screen-2xl mx-auto px-6">
<span className="text-orange-500 font-mono text-xs mb-4 block">EST. 1979</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-12 max-w-3xl">WE ENGINEER <br/>THE BACKBONE OF INDUSTRY.</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-neutral-400 leading-relaxed font-light text-lg">
<p>Struktur was founded on a simple principle: complexity is just order waiting to be discovered. From our humble beginnings in Rotterdam to our current status as a global engineering consultancy, we have remained focused on precision.</p>
<p>We combine traditional mechanical engineering principles with cutting-edge computational fluid dynamics and AI-driven load testing to build infrastructure that stands the test of time.</p>
</div>
</div>
</div>
<div className="py-24 max-w-screen-2xl mx-auto px-6">
<img className="w-full h-[500px] object-cover grayscale mb-8" src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&amp;q=80"/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-8 bg-neutral-50">
<iconify-icon className="mb-4 text-orange-600" icon="lucide:pencil-ruler" width="32"></iconify-icon>
<h3 className="font-bold mb-2">Design</h3>
<p className="text-sm text-neutral-500">CAD &amp; BIM modeling</p>
</div>
<div className="p-8 bg-neutral-50">
<iconify-icon className="mb-4 text-orange-600" icon="lucide:hammer" width="32"></iconify-icon>
<h3 className="font-bold mb-2">Construct</h3>
<p className="text-sm text-neutral-500">On-site supervision</p>
</div>
<div className="p-8 bg-neutral-50">
<iconify-icon className="mb-4 text-orange-600" icon="lucide:bar-chart-2" width="32"></iconify-icon>
<h3 className="font-bold mb-2">Analyze</h3>
<p className="text-sm text-neutral-500">Maintenance data</p>
</div>
</div>
</div>
</div>

<div className="page-content" id="sectors">
<div className="py-32 max-w-screen-2xl mx-auto px-6">
<div className="mb-20">
<h1 className="text-5xl font-semibold tracking-tighter mb-6">SECTORS</h1>
<p className="text-xl text-neutral-500 max-w-2xl">Our multidisciplinary approach covers six key areas of industrial development.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="bg-neutral-50 p-10 hover:bg-neutral-900 hover:text-white transition-all group duration-300">
<iconify-icon className="mb-8 text-neutral-400 group-hover:text-orange-500" icon="lucide:building-2" width="40"></iconify-icon>
<h3 className="text-2xl font-bold mb-4">Civil</h3>
<p className="text-sm opacity-60 leading-relaxed">Urban infrastructure, bridges, tunnels, and large-scale public works.</p>
</div>
<div className="bg-neutral-50 p-10 hover:bg-neutral-900 hover:text-white transition-all group duration-300">
<iconify-icon className="mb-8 text-neutral-400 group-hover:text-orange-500" icon="lucide:zap" width="40"></iconify-icon>
<h3 className="text-2xl font-bold mb-4">Energy</h3>
<p className="text-sm opacity-60 leading-relaxed">Renewable grids, solar farms, and high-voltage transmission systems.</p>
</div>
<div className="bg-neutral-50 p-10 hover:bg-neutral-900 hover:text-white transition-all group duration-300">
<iconify-icon className="mb-8 text-neutral-400 group-hover:text-orange-500" icon="lucide:settings-2" width="40"></iconify-icon>
<h3 className="text-2xl font-bold mb-4">Mechanical</h3>
<p className="text-sm opacity-60 leading-relaxed">Heavy machinery, robotics, and automated assembly line design.</p>
</div>
<div className="bg-neutral-50 p-10 hover:bg-neutral-900 hover:text-white transition-all group duration-300">
<iconify-icon className="mb-8 text-neutral-400 group-hover:text-orange-500" icon="lucide:droplets" width="40"></iconify-icon>
<h3 className="text-2xl font-bold mb-4">Hydraulic</h3>
<p className="text-sm opacity-60 leading-relaxed">Water treatment, dams, and fluid dynamic systems for refineries.</p>
</div>
<div className="bg-neutral-50 p-10 hover:bg-neutral-900 hover:text-white transition-all group duration-300">
<iconify-icon className="mb-8 text-neutral-400 group-hover:text-orange-500" icon="lucide:cpu" width="40"></iconify-icon>
<h3 className="text-2xl font-bold mb-4">Systems</h3>
<p className="text-sm opacity-60 leading-relaxed">Software integration, IoT monitoring, and digital twin technology.</p>
</div>
<div className="bg-neutral-50 p-10 hover:bg-neutral-900 hover:text-white transition-all group duration-300">
<iconify-icon className="mb-8 text-neutral-400 group-hover:text-orange-500" icon="lucide:leaf" width="40"></iconify-icon>
<h3 className="text-2xl font-bold mb-4">Eco</h3>
<p className="text-sm opacity-60 leading-relaxed">Sustainability auditing and carbon-capture facility engineering.</p>
</div>
</div>
</div>
</div>

<div className="page-content" id="projects">
<div className="py-32 max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h1 className="text-5xl font-semibold tracking-tighter">SELECTED WORKS</h1>
<div className="flex gap-6 text-sm font-medium">
<button className="text-orange-600 border-b border-orange-600 pb-1">All</button>
<button className="text-neutral-400 hover:text-neutral-900 pb-1">Europe</button>
<button className="text-neutral-400 hover:text-neutral-900 pb-1">Asia</button>
<button className="text-neutral-400 hover:text-neutral-900 pb-1">Americas</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden relative aspect-video bg-neutral-200 mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=1200&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold font-mono">2023</div>
</div>
<h3 className="text-2xl font-medium mb-1 group-hover:text-orange-600 transition-colors">North Sea Wind Farm</h3>
<p className="text-neutral-500 text-sm">Offshore Energy • Netherlands</p>
</div>
<div className="group cursor-pointer">
<div className="overflow-hidden relative aspect-video bg-neutral-200 mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold font-mono">2022</div>
</div>
<h3 className="text-2xl font-medium mb-1 group-hover:text-orange-600 transition-colors">Tokyo Metro Extension</h3>
<p className="text-neutral-500 text-sm">Civil Infrastructure • Japan</p>
</div>
<div className="group cursor-pointer">
<div className="overflow-hidden relative aspect-video bg-neutral-200 mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold font-mono">2021</div>
</div>
<h3 className="text-2xl font-medium mb-1 group-hover:text-orange-600 transition-colors">Silicon Valley Fab 4</h3>
<p className="text-neutral-500 text-sm">Industrial Manufacturing • USA</p>
</div>
<div className="group cursor-pointer">
<div className="overflow-hidden relative aspect-video bg-neutral-200 mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574689211272-bc14e289e223?w=1200&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold font-mono">2020</div>
</div>
<h3 className="text-2xl font-medium mb-1 group-hover:text-orange-600 transition-colors">Berlin Central Terminal</h3>
<p className="text-neutral-500 text-sm">Logistics • Germany</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="border border-neutral-300 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors">Load Archive</button>
</div>
</div>
</div>

<div className="page-content" id="shop">
<div className="py-32 max-w-screen-2xl mx-auto px-6">
<div className="mb-12 border-b border-neutral-200 pb-8 flex justify-between items-end">
<div>
<h1 className="text-5xl font-semibold tracking-tighter">EQUIPMENT</h1>
<p className="text-neutral-500 mt-2">Professional grade gear for site engineers.</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon icon="lucide:shopping-bag"></iconify-icon>
<span>0 Items ($0.00)</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="bg-neutral-50 aspect-square flex items-center justify-center mb-4 relative">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" icon="lucide:hard-hat" width="80"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-sm">Site Helmet MK-II</h3>
<p className="text-xs text-neutral-500">Impact Resistant</p>
</div>
<span className="text-sm font-mono">$45.00</span>
</div>
<button className="w-full mt-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
</div>

<div className="group">
<div className="bg-neutral-50 aspect-square flex items-center justify-center mb-4 relative">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" icon="lucide:ruler" width="80"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-sm">Steel Caliper</h3>
<p className="text-xs text-neutral-500">Precision 0.01mm</p>
</div>
<span className="text-sm font-mono">$89.00</span>
</div>
<button className="w-full mt-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
</div>

<div className="group">
<div className="bg-neutral-50 aspect-square flex items-center justify-center mb-4 relative">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" icon="lucide:glasses" width="80"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-sm">Safety Optics</h3>
<p className="text-xs text-neutral-500">Anti-Glare / UV</p>
</div>
<span className="text-sm font-mono">$35.00</span>
</div>
<button className="w-full mt-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
</div>

<div className="group">
<div className="bg-neutral-50 aspect-square flex items-center justify-center mb-4 relative">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" icon="lucide:clipboard-list" width="80"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-sm">Field Journal</h3>
<p className="text-xs text-neutral-500">Waterproof Paper</p>
</div>
<span className="text-sm font-mono">$24.00</span>
</div>
<button className="w-full mt-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
</div>
</div>
</div>
</div>

<div className="page-content" id="team">
<div className="py-32 max-w-screen-2xl mx-auto px-6">
<div className="text-center mb-20">
<h1 className="text-5xl font-semibold tracking-tighter mb-4">LEADERSHIP</h1>
<p className="text-neutral-500">The minds behind the machinery.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="group">
<div className="aspect-[3/4] bg-neutral-200 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&amp;q=80"/>
</div>
<h4 className="font-bold text-lg">James Sterling</h4>
<p className="text-xs uppercase tracking-widest text-orange-600">Chief Executive</p>
</div>
<div className="group">
<div className="aspect-[3/4] bg-neutral-200 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;q=80"/>
</div>
<h4 className="font-bold text-lg">Dr. Helena Voss</h4>
<p className="text-xs uppercase tracking-widest text-orange-600">Head of Engineering</p>
</div>
<div className="group">
<div className="aspect-[3/4] bg-neutral-200 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&amp;q=80"/>
</div>
<h4 className="font-bold text-lg">Marcus Chen</h4>
<p className="text-xs uppercase tracking-widest text-orange-600">Operations Director</p>
</div>
<div className="group">
<div className="aspect-[3/4] bg-neutral-200 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&amp;q=80"/>
</div>
<h4 className="font-bold text-lg">Sarah Jenkins</h4>
<p className="text-xs uppercase tracking-widest text-orange-600">Sustainability Lead</p>
</div>
</div>
</div>
</div>

<div className="page-content" id="contact">
<div className="min-h-screen flex items-center py-20 bg-neutral-50">
<div className="max-w-screen-xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<h1 className="text-5xl font-semibold tracking-tighter mb-8">START A PROJECT</h1>
<p className="text-lg text-neutral-500 mb-12">We are currently accepting new commissions for Q3 2024. Please provide your project specifications below.</p>
<div className="space-y-6 text-sm">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
</div>
<div>
<p className="font-bold">Headquarters</p>
<p className="text-neutral-500">Industrieweg 84, Rotterdam, NL</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<div>
<p className="font-bold">Email</p>
<p className="text-neutral-500">hello@struktur.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-10 border border-neutral-200 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Name</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-600 transition-colors" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Company</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-600 transition-colors" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Email</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-600 transition-colors" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Message</label>
<textarea className="w-full p-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-600 transition-colors" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-neutral-900 text-white font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors" type="button">
                                    Send Request
                                </button>
</form>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-neutral-900 text-white py-16">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-neutral-500">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="lucide:box"></iconify-icon>
<span className="font-bold tracking-widest uppercase">Struktur</span>
</div>
<div>© 2024 Struktur Engineering Group. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
