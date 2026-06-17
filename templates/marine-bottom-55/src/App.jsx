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



        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed');
                menu.classList.add('open');
                icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                menu.classList.remove('open');
                menu.classList.add('closed');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
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
      

<nav className="sticky top-0 w-full z-[100] bg-[#050507]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="flex h-16 max-w-[1400px] mx-auto px-6 items-center justify-between gap-6 relative z-[101]">

<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 z-50 hover:opacity-80 transition-opacity shrink-0" href="index.html">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
          Mad Soaps
        </a>

<div className="hidden lg:flex items-center gap-1 text-sm font-medium text-zinc-400 h-full">
<a className="hover:text-white transition-colors pt-2 pr-4 pb-2 pl-4" href="/home-page">Home</a>

<div className="group flex h-full relative items-center">
<a className="flex items-center gap-1.5 cursor-default text-white pt-2 pr-4 pb-2 pl-4" href="/boat-services">
        Boats
        <iconify-icon className="transition-transform duration-200 group-hover:-rotate-180" height="12" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(255, 255, 255)'}} width="12"></iconify-icon>
</a>

<div className="absolute top-[calc(100%-10px)] left-0 w-64 pt-4 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
<div className="bg-[#050507] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 backdrop-blur-xl ring-1 ring-white/5">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/boat-detailing-packages">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Boat Detailing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/bottom-paint">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:paint-roller-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Bottom Paint</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/varnish-wood">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:brush-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Varnish &amp; Wood</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/winterization">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:snowflake-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Winterization/Shrink Wrap</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors group/item" href="/spring-recommission">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500/10 transition-colors">
<iconify-icon icon="solar:sun-2-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">Spring Recommission</span>
</a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors pt-2 pr-4 pb-2 pl-4" href="/car-detailing-packages">Cars</a>
<a className="hover:text-white transition-colors pt-2 pr-4 pb-2 pl-4" href="/plans-page">Monthly Plans</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="tel:8336237627">
<iconify-icon className="text-zinc-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden xl:inline">(833) 623-7627</span>
</a>
<a className="text-sm font-semibold bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap" href="#booking">
                Get a Quote
            </a>
<button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="mobile-menu closed absolute top-16 left-0 w-full bg-[#050507] border-b border-white/10 shadow-2xl overflow-hidden z-[99]" id="mobile-menu">
<div className="p-4 flex flex-col gap-2">
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="/home-page">Home</a>
<a className="block px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium transition-colors" href="/boat-services">Boats</a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="/car-detailing-packages">Cars</a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="/plans-page">Monthly Plans</a>
</div>
</div>
</nav>
<main className="flex-grow overflow-hidden pt-20 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="text-center max-w-4xl mr-auto mb-16 ml-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                Anti-Fouling &amp; Hull Protection
            </div>
<h1 className="md:text-6xl gradient-text text-4xl font-semibold tracking-tight pb-2" style={{}}>Bottom Paint Services</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                Professional application of ablative and hard anti-fouling paints to prevent growth, increase fuel efficiency, and protect your hull season after season.
            </p>
</div>

<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-24">

<div className="glass-panel rounded-2xl overflow-hidden h-full">
<div className="h-56 relative overflow-hidden bg-zinc-900">
<img alt="Boat in Dry Dock" className="w-full h-full object-cover opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1544158694-85472719277f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-90"></div>
</div>
<div className="-mt-12 z-10 flex flex-col pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6">
<iconify-icon icon="solar:refresh-circle-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Seasonal Recoats</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Essential maintenance for every spring launch. We perform a light sand to promote adhesion, wipe down, and apply 1-2 coats of premium anti-fouling paint compatible with your existing bottom.
                    </p>
<ul className="text-sm text-zinc-300 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Tyvek suit &amp; strict dust control</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Waterline tape-off</li>
</ul>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden h-full">
<div className="h-56 relative overflow-hidden bg-zinc-900">
<img alt="Hull Painting" className="w-full h-full object-cover opacity-80 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-90"></div>
</div>
<div className="p-8 -mt-12 relative z-10 flex flex-col">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6">
<iconify-icon icon="solar:shield-warning-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">New Bottoms &amp; Barrier Coats</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        For new vessels or boats needing a full strip. We remove old paint, sand the gel coat, and apply a high-build epoxy barrier coat to prevent osmosis blistering before applying antifouling.
                    </p>
<ul className="text-sm text-zinc-300 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Soda blasting coordination available</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Multi-coat epoxy system</li>
</ul>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden h-full">
<div className="h-56 relative overflow-hidden bg-zinc-900">
<img alt="Propeller" className="w-full h-full object-cover opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1599557404494-1a3b9340e4f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-90"></div>
</div>
<div className="p-8 -mt-12 relative z-10 flex flex-col">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6">
<iconify-icon icon="solar:wheel-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Running Gear</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Barnacles love metal. We polish props, shafts, struts, and rudders to bare metal and apply specialized foul-release coatings (like PropSpeed) or zinc-based paints to keep your drivetrain clean.
                    </p>
<ul className="text-sm text-zinc-300 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Zinc anode replacement</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Increases vessel speed &amp; RPM</li>
</ul>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mb-24">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight">Choosing the Right Paint</h2>
<p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Not all bottom paints are created equal. We help you select the best product based on how you use your boat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:waterdrops-bold" width="120"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Ablative (Self-Polishing)
                    </h3>
<p className="text-sm text-zinc-400 mb-4">
                        Wears away over time like a bar of soap, constantly revealing fresh biocide.
                    </p>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Best for boats used regularly during the season.</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Prevents heavy paint buildup over years.</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Reactive to water movement (good for sailboats/cruisers).</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:shield-bold" width="120"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Hard Modified Epoxy
                    </h3>
<p className="text-sm text-zinc-400 mb-4">
                        Creates a hard, durable shell. The biocide leaches out but the paint stays.
                    </p>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Ideal for racing sailboats (can be burnished smooth).</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Best for trailered boats or boats that dry out.</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Requires sanding before recoating.</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mb-32 border-t border-white/5 pt-20">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Our Application Process</h2>
<div className="relative pl-8 border-l border-white/10 space-y-12">

<div className="relative">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050507] border-2 border-blue-600"></span>
<h4 className="text-lg font-medium text-white mb-2">1. Assessment &amp; Prep</h4>
<p className="text-sm text-zinc-400 leading-relaxed">We inspect the hull for blisters or delamination. We heavily sand the existing bottom to ensure a mechanical bond for the new paint. Loose chips are scraped away.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050507] border-2 border-zinc-700"></span>
<h4 className="text-lg font-medium text-white mb-2">2. Masking</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Precision is key. We tape the waterline accurately to ensure a crisp, clean line that enhances the look of your vessel.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050507] border-2 border-zinc-700"></span>
<h4 className="text-lg font-medium text-white mb-2">3. Application</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Using professional rollers and brushes (or spray for specific finishes), we apply the paint. High-wear areas like the bow, rudder, and keel receive an extra coat.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050507] border-2 border-zinc-700"></span>
<h4 className="text-lg font-medium text-white mb-2">4. Support Move &amp; Touch Up</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Once the main hull is dry, we coordinate moving the jack stands or lifting straps to paint the spots that were covered.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto glass-panel rounded-2xl p-6 md:p-10 border-white/10 shadow-2xl relative overflow-hidden mb-24" id="booking">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">Get a Bottom Paint Quote</h2>
<p className="text-sm text-zinc-400 mt-2">Pricing typically based on LOA (Length Overall). Fill out the form below for an estimate.</p>
</div>
<div className="w-full min-h-[500px]">
<fieldd-lead-form code="vwsXon"></fieldd-lead-form>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-[#050507]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
<div className="md:col-span-1 space-y-4">

<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="index.html">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                        Mad Soaps
                    </a>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Restoring and protecting yachts in Annapolis and Chesapeake Bay against the elements.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Company</h4>
<a className="text-sm text-white transition-colors" href="/boat-services">Boat Services</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="/car-detailing-packages">Car Services</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="/plans-page">Monthly Plans</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#booking">Contact Us</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Locations</h4>
<span className="text-xs text-zinc-500">Annapolis</span>
<span className="text-xs text-zinc-500">Eastport</span>
<span className="text-xs text-zinc-500">Stevensville</span>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Social Media</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="tel:8336237627"><iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-500 text-xs">© 2024 Mad Soaps. All rights reserved.</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
