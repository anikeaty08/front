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
      

<div className="bg-blue-900 text-white py-2.5 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
<p className="text-xs font-medium tracking-wide opacity-90">SERVING FOLSOM CONTRACTORS &amp; HOMEOWNERS</p>
<a className="group flex items-center gap-2 text-xs font-semibold hover:text-blue-200 transition-colors" href="https://www.sierrashowroom.com/" target="_blank">
                VISIT OUR GRANITE BAY SHOWROOM
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<nav className="sticky top-0 z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="index.html">
<div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
<iconify-icon height="24" icon="solar:drop-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold text-slate-900 tracking-tight leading-none">FOLSOM</span>
<span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Plumbing Supply</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="index.html">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="about.html">About Us</a>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-[#1877F2] transition-colors" href="https://www.facebook.com/profile.php?id=61574712820130" target="_blank"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#E4405F] transition-colors" href="https://instagram.com/FOLSOMPLUMBINGSUPPLY" target="_blank"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#EA4335] transition-colors" href="https://share.google/QxvOpWmNtb11F7ws2" target="_blank"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2" href="contact.html">
                    Contact Us
                </a>
</div>
</div>
</nav>

<header className="relative min-h-[500px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Warehouse Background" className="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2670&amp;auto=format&amp;fit=crop'" src="images/s1.png"/>
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Open to Public &amp; Pros
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                    Professional Grade.<br/>Locally Owned.
                </h1>
<p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                    Your trusted source for water heaters, pipes, fittings, and fixtures. Serving Folsom since 2008.
                </p>

<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2" href="tel:916-790-8505">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        916-790-8505
                    </a>
<a className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2" href="https://maps.google.com/?q=560+Levy+Rd,+Folsom,+CA" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="20"></iconify-icon>
                        Get Directions
                    </a>
</div>
<p className="text-sm text-slate-400 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    560 Levy Rd., Folsom, CA
                </p>
</div>
</div>
</header>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Our Product Catalog</h2>
<p className="text-slate-500">Comprehensive inventory for every plumbing job.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group" href="#">
                View All Categories <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Water%20Heaters">
<div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-orange-600 text-2xl" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Water Heaters</h3>
<p className="text-sm text-slate-500 mb-4">Tankless, Gas, Electric &amp; Hybrids.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Navien &amp; Rheem</li>
<li>• Heat Pump Hybrids</li>
<li>• Installation Parts</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Pipe">
<div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pipe</h3>
<p className="text-sm text-slate-500 mb-4">ABS, PVC, Copper, PEX &amp; Iron.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Copper Tube</li>
<li>• Schedule 40 &amp; 80</li>
<li>• Gas Poly &amp; CSST</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Faucets">
<div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Faucets</h3>
<p className="text-sm text-slate-500 mb-4">Kitchen, Lavatory &amp; Commercial.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Commercial &amp; Residential</li>
<li>• Tub &amp; Shower Trim</li>
<li>• Replacement Parts</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Valves%20Backflow">
<div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-green-600 text-2xl" icon="solar:stop-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Valves &amp; Backflow</h3>
<p className="text-sm text-slate-500 mb-4">Ball valves, Gates &amp; Regulators.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Pressure Reducing</li>
<li>• Backflow Preventers</li>
<li>• Hose Bibbs</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=New%20Pumps">
<div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-600 text-2xl" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pumps</h3>
<p className="text-sm text-slate-500 mb-4">Sewage, Sump &amp; Recirculation.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Liberty Pumps</li>
<li>• Condensate Pumps</li>
<li>• Booster Systems</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Fixtures">
<div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-teal-600 text-2xl" icon="solar:smart-home-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fixtures</h3>
<p className="text-sm text-slate-500 mb-4">Toilets, Sinks &amp; Disposals.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Commercial &amp; Residential</li>
<li>• Garbage Disposals</li>
<li>• Bottle Fillers</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Tool">
<div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-red-600 text-2xl" icon="solar:hammer-wrench-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Tools</h3>
<p className="text-sm text-slate-500 mb-4">Power Tools &amp; Hand Tools.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Milwaukee Tool</li>
<li>• Wrenches &amp; Cutters</li>
<li>• Blades &amp; Drilling</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Repair%20Parts">
<div className="bg-yellow-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-yellow-600 text-2xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Repair Parts</h3>
<p className="text-sm text-slate-500 mb-4">Fix leaks and broken components.</p>
<ul className="text-xs text-slate-400 space-y-1">
<li>• Toilet Repair</li>
<li>• Cartridges &amp; Stems</li>
<li>• Heater Parts</li>
</ul>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Fittings%20Water%20Supply">
<div className="bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-sky-600 text-2xl" icon="solar:water-drop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Water Fittings</h3>
<p className="text-sm text-slate-500 mb-4">PEX, Copper &amp; Brass.</p>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Fittings%20Gas%20Supply">
<div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:flame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Gas Fittings</h3>
<p className="text-sm text-slate-500 mb-4">Iron, Poly &amp; Gastite.</p>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Fittings%20Waste%20Drainage">
<div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:tunnel-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Waste &amp; Drain</h3>
<p className="text-sm text-slate-500 mb-4">ABS, PVC &amp; Sewer.</p>
</a>

<a className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300" href="/items?c=Sink%20Toilet%20Repair%20Parts">
<div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-600 text-2xl" icon="solar:screw-large-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Install Parts</h3>
<p className="text-sm text-slate-500 mb-4">Supply Lines, Stops &amp; Drains.</p>
</a>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center text-sm font-semibold text-slate-400 tracking-wider uppercase mb-10">Trusted Brands We Carry</h3>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70">

<span className="text-xl font-bold text-slate-800">Milwaukee</span>
<span className="text-xl font-bold text-slate-800">Rheem</span>
<span className="text-xl font-bold text-slate-800 italic">Navien</span>
<span className="text-xl font-bold text-slate-800">Fluidmaster</span>
<span className="text-xl font-bold text-slate-800">VIEGA</span>
<span className="text-xl font-bold text-slate-800">WATTS</span>
<span className="text-xl font-bold text-slate-800 font-serif">Sloan</span>
<span className="text-xl font-bold text-slate-800">Liberty Pumps</span>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline" href="/items?c=Adhesives%20Job%20Site%20Items">
                    Also stocking Adhesives, Filtration, and Job Site Items
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-8">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:drop-bold"></iconify-icon>
<span className="text-xl font-bold">FOLSOM PLUMBING</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Providing top-quality plumbing supplies to contractors and homeowners in Folsom, CA and surrounding areas.
                    </p>
<div className="flex gap-4 pt-2">
<a className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors" href="https://www.facebook.com/profile.php?id=61574712820130" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="bg-slate-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors" href="https://instagram.com/FOLSOMPLUMBINGSUPPLY" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="bg-slate-800 hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors" href="https://share.google/QxvOpWmNtb11F7ws2" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Store Information</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-blue-500" icon="solar:map-point-linear"></iconify-icon>
<span>560 Levy Rd.<br/>Folsom, CA 95630</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:916-790-8505">916-790-8505</a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-400 transition-colors" href="about.html">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="contact.html">Contact Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="https://www.sierrashowroom.com/" target="_blank">Sierra Showroom</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="/items?c=Water%20Heaters">Water Heaters</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
<p>© 2025 Folsom Plumbing Supply. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
