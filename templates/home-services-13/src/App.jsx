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
      

<nav className="fixed top-0 left-0 w-full h-[72px] bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50 flex items-center justify-between px-6 md:px-12">

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter uppercase">DISPATCH</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-wide text-zinc-500 hover:text-black transition-colors" href="#">Services</a>
<a className="text-xs font-medium uppercase tracking-wide text-zinc-500 hover:text-black transition-colors" href="#">Zones</a>
<a className="text-xs font-medium uppercase tracking-wide text-zinc-500 hover:text-black transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium uppercase tracking-wide text-zinc-900 hover:text-zinc-500 transition-colors" href="#">Login</a>
<button className="group relative flex items-center justify-center gap-2 bg-[#FF3300] text-white px-5 py-2.5 transition-all hover:bg-[#cc2900]">
<span className="absolute -inset-1 rounded-sm bg-[#FF3300] opacity-20 group-hover:animate-ping"></span>
<span className="relative text-xs font-semibold uppercase tracking-wide">24/7 Emergency</span>
<iconify-icon className="relative" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</nav>

<section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern -z-10"></div>

<div className="absolute top-32 left-6 md:left-24 bg-white/60 backdrop-blur-xl border border-zinc-200 p-4 w-64 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] animate-[bounce_4s_infinite]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Crew Status</span>
<span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
</div>
<div className="text-sm font-medium">Unit 402 En Route</div>
<div className="text-xs text-zinc-500 mt-1">ETA: 04 Mins</div>
</div>
<div className="absolute bottom-32 right-6 md:right-24 bg-white/60 backdrop-blur-xl border border-zinc-200 p-4 w-64 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] hidden md:block">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Performance</span>
<iconify-icon className="text-[#FF3300]" icon="lucide:zap" width="12"></iconify-icon>
</div>
<div className="text-sm font-medium">Avg. Response: 14m</div>
<div className="w-full bg-zinc-200 h-1 mt-3 overflow-hidden">
<div className="bg-black h-full w-[85%]"></div>
</div>
</div>

<div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-black mb-8">
                LOCAL SERVICES.<br/>
<span className="text-zinc-400">INSTANT RESPONSE.</span>
</h1>
<p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                The new standard for home maintenance. Licensed crews dispatched in minutes, not days.
                <span className="block mt-2 text-black font-medium">No quotes. Flat rates. Radical transparency.</span>
</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="bg-black text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide flex items-center gap-2 hover:bg-zinc-800 transition-colors w-full md:w-auto justify-center">
                    Book Now - $0 Down
                    <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="bg-transparent border border-zinc-200 text-black px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-zinc-50 transition-colors w-full md:w-auto">
                    View Coverage Map
                </button>
</div>
</div>
</section>

<div className="w-full border-y border-zinc-200 bg-zinc-50 py-4 overflow-hidden">
<div className="text-center mb-4">
<span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">Licensed &amp; Insured By</span>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center group-hover:paused">

<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:shield-check" width="24"></iconify-icon> METRO COUNCIL</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:hard-hat" width="24"></iconify-icon> BUILDERS ASSOC.</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:wrench" width="24"></iconify-icon> ALLIANCE HARDWARE</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:landmark" width="24"></iconify-icon> CITY TREASURY</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:zap" width="24"></iconify-icon> POWER GRID CO.</span>

<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:shield-check" width="24"></iconify-icon> METRO COUNCIL</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:hard-hat" width="24"></iconify-icon> BUILDERS ASSOC.</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:wrench" width="24"></iconify-icon> ALLIANCE HARDWARE</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:landmark" width="24"></iconify-icon> CITY TREASURY</span>
<span className="text-xl font-semibold text-zinc-300 flex items-center gap-2"><iconify-icon icon="lucide:zap" width="24"></iconify-icon> POWER GRID CO.</span>
</div>
</div>
</div>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="mb-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">THE SERVICE GRID</h2>
<div className="h-[1px] w-24 bg-[#FF3300]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 md:row-span-2 border border-zinc-200 bg-white p-8 relative overflow-hidden group hover:border-zinc-400 transition-colors">
<div className="absolute inset-0 bg-zinc-50 opacity-50">

<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="absolute bottom-8 right-8 bg-white border border-zinc-200 p-4 shadow-lg w-48 z-10">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-bold text-zinc-400">DRIVER</span>
<span className="h-1.5 w-1.5 bg-[#FF3300] rounded-full animate-pulse"></span>
</div>
<div className="text-sm font-semibold">Mike D.</div>
<div className="text-xs text-zinc-500">Approaching • 2 min</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
<iconify-icon className="text-black mb-4" icon="lucide:map" strokeWidth="1.5" width="40"></iconify-icon>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Real-Time Tracking</h3>
<p className="text-sm text-zinc-500 max-w-xs">Watch your technician arrive on a live map. No more 4-hour service windows.</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 border border-zinc-200 bg-white p-8 group hover:border-zinc-400 transition-colors relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Upfront Pricing</h3>
<p className="text-sm text-zinc-500">Algorithmic flat rates before you book.</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-black transition-colors" icon="lucide:receipt" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="mt-8 flex gap-2">
<span className="inline-block px-2 py-1 bg-zinc-100 text-[10px] uppercase font-semibold text-zinc-600 border border-zinc-200">Plumbing: $149</span>
<span className="inline-block px-2 py-1 bg-zinc-100 text-[10px] uppercase font-semibold text-zinc-600 border border-zinc-200">Electrical: $199</span>
</div>
</div>

<div className="col-span-1 border border-zinc-200 bg-white p-8 group hover:border-zinc-400 transition-colors">
<iconify-icon className="text-[#FF3300] mb-36 md:mb-12" icon="lucide:shield-check" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight">Verified Pros</h3>
<p className="text-sm text-zinc-500 mt-2">Background checked. 5-star rated.</p>
</div>

<div className="col-span-1 border border-zinc-200 bg-white p-8 group hover:border-zinc-400 transition-colors">
<iconify-icon className="text-zinc-900 mb-36 md:mb-12" icon="lucide:message-square" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight">24/7 Support</h3>
<p className="text-sm text-zinc-500 mt-2">Real humans. Seconds away.</p>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-zinc-50 py-24 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">OPERATIONAL ZONES</h2>
<div className="text-right hidden md:block">
<div className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-1">Active Units</div>
<div className="text-2xl font-mono">142</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative aspect-[4/3] overflow-hidden bg-zinc-200 border border-zinc-200 cursor-pointer">
<img alt="Downtown" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-white text-xl font-semibold tracking-tight">DOWNTOWN</h3>
<p className="text-zinc-400 text-xs mt-1">12 Crews Available</p>
</div>
<div className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden bg-zinc-200 border border-zinc-200 cursor-pointer">
<img alt="Westside" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-white text-xl font-semibold tracking-tight">WESTSIDE</h3>
<p className="text-zinc-400 text-xs mt-1">Limited Availability</p>
</div>
<div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden bg-zinc-200 border border-zinc-200 cursor-pointer">
<img alt="North Hills" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-white text-xl font-semibold tracking-tight">NORTH HILLS</h3>
<p className="text-zinc-400 text-xs mt-1">Emergency Only</p>
</div>
<div className="h-2 w-2 bg-[#FF3300] rounded-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white max-w-[1200px] mx-auto">
<h2 className="text-center text-4xl font-semibold tracking-tight mb-16">FLAT RATE MENU</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-zinc-200 p-8 flex flex-col group hover:border-black transition-colors relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
<iconify-icon className="text-zinc-400" icon="lucide:calendar" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-2">Scheduled</h3>
<div className="text-4xl font-semibold tracking-tighter mb-6">$99<span className="text-lg text-zinc-400 font-normal">/visit</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-black" icon="lucide:check" width="16"></iconify-icon> Standard arrival window</li>
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-black" icon="lucide:check" width="16"></iconify-icon> Routine maintenance</li>
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-black" icon="lucide:check" width="16"></iconify-icon> Digital diagnostic</li>
</ul>
<button className="w-full py-3 border border-zinc-200 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors">Book This</button>
</div>

<div className="border border-zinc-200 p-8 flex flex-col group hover:border-[#FF3300] transition-colors relative shadow-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-[#FF3300]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
<iconify-icon className="text-[#FF3300]" icon="lucide:siren" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide text-[#FF3300] mb-2">Priority</h3>
<div className="text-4xl font-semibold tracking-tighter mb-6">$199<span className="text-lg text-zinc-400 font-normal">/visit</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-[#FF3300]" icon="lucide:check" width="16"></iconify-icon> <span className="font-medium text-black">Same-day guarantee</span></li>
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-[#FF3300]" icon="lucide:check" width="16"></iconify-icon> Top-rated technician</li>
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-[#FF3300]" icon="lucide:check" width="16"></iconify-icon> Live GPS tracking</li>
</ul>
<button className="w-full py-3 bg-black text-white text-xs font-semibold uppercase tracking-wide hover:bg-[#FF3300] transition-colors">Dispatch Now</button>
</div>

<div className="border border-zinc-200 p-8 flex flex-col group hover:border-black transition-colors relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
<iconify-icon className="text-zinc-400" icon="lucide:crown" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-2">Club Member</h3>
<div className="text-4xl font-semibold tracking-tighter mb-6">$29<span className="text-lg text-zinc-400 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-black" icon="lucide:check" width="16"></iconify-icon> Priority status always</li>
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-black" icon="lucide:check" width="16"></iconify-icon> $0 Dispatch fees</li>
<li className="text-sm text-zinc-600 flex gap-3"><iconify-icon className="text-black" icon="lucide:check" width="16"></iconify-icon> Annual inspection included</li>
</ul>
<button className="w-full py-3 border border-zinc-200 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors">Join Club</button>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[800px] mx-auto">
<h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-8 border-b border-zinc-200 pb-4">Dispatch Intel</h2>
<div className="flex flex-col">

<details className="group border-b border-zinc-200 cursor-pointer">
<summary className="flex justify-between items-center py-6 hover:bg-zinc-50 transition-colors px-2">
<span className="text-lg font-medium">How fast is the response time?</span>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-zinc-400" icon="lucide:plus" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 px-2 text-zinc-600 leading-relaxed text-sm">
                    Our average response time for Priority and Emergency calls is currently 42 minutes. Scheduled visits are confirmed within a 2-hour window.
                </div>
</details>

<details className="group border-b border-zinc-200 cursor-pointer">
<summary className="flex justify-between items-center py-6 hover:bg-zinc-50 transition-colors px-2">
<span className="text-lg font-medium">Are estimates free?</span>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-zinc-400" icon="lucide:plus" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 px-2 text-zinc-600 leading-relaxed text-sm">
                    Yes. Digital estimates based on photos and descriptions are always free. In-person diagnostic visits incur a dispatch fee unless you proceed with the work.
                </div>
</details>

<details className="group border-b border-zinc-200 cursor-pointer">
<summary className="flex justify-between items-center py-6 hover:bg-zinc-50 transition-colors px-2">
<span className="text-lg font-medium">Do you work weekends?</span>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-zinc-400" icon="lucide:plus" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 px-2 text-zinc-600 leading-relaxed text-sm">
                    We operate 24/7/365. Breakdowns don't respect business hours, so neither do we. Weekend and holiday rates may apply for non-members.
                </div>
</details>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-2xl mx-auto">
<div className="bg-white border border-zinc-200 p-8 shadow-sm">
<div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
<div className="h-3 w-3 rounded-full bg-red-500"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
<div className="h-3 w-3 rounded-full bg-green-500"></div>
<span className="ml-auto text-xs font-mono text-zinc-400">request_terminal_v2.0</span>
</div>
<form className="space-y-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide mb-2 text-zinc-500">Issue Category</label>
<select className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm focus:outline-none focus:border-[#FF3300] focus:ring-1 focus:ring-[#FF3300] transition-all rounded-none appearance-none">
<option>Plumbing Failure</option>
<option>Electrical Outage</option>
<option>HVAC / Climate</option>
<option>Structural Damage</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide mb-2 text-zinc-500">Urgency Level</label>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="urgency" type="radio"/>
<div className="text-center py-3 border border-zinc-200 text-sm font-medium text-zinc-600 peer-checked:bg-zinc-100 peer-checked:border-zinc-400 peer-checked:text-black transition-all">Low</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="urgency" type="radio"/>
<div className="text-center py-3 border border-zinc-200 text-sm font-medium text-zinc-600 peer-checked:bg-zinc-100 peer-checked:border-zinc-400 peer-checked:text-black transition-all">Medium</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="urgency" type="radio"/>
<div className="text-center py-3 border border-zinc-200 text-sm font-medium text-zinc-600 peer-checked:bg-[#FF3300] peer-checked:border-[#FF3300] peer-checked:text-white transition-all">High</div>
</label>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide mb-2 text-zinc-500">Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm font-mono focus:outline-none focus:border-[#FF3300] focus:ring-1 focus:ring-[#FF3300] transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
<button className="w-full bg-black text-white py-4 font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity">
                        Initialize Request
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">POCKET COMMAND.</h2>
<p className="text-lg text-zinc-500 mb-8">Track your technician in real-time. Manage invoices, schedule maintenance, and chat with support directly from the app.</p>
<div className="flex gap-4">
<button className="bg-black text-white px-6 py-3 text-xs font-semibold uppercase tracking-wide rounded-sm flex items-center gap-2">
<iconify-icon icon="lucide:apple" width="16"></iconify-icon> App Store
                    </button>
<button className="bg-white border border-zinc-200 text-black px-6 py-3 text-xs font-semibold uppercase tracking-wide rounded-sm">
                        Google Play
                    </button>
</div>
</div>
<div className="relative flex justify-center">

<div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-zinc-900 shadow-2xl overflow-hidden z-10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">

<div className="w-full h-full bg-white flex flex-col relative">

<div className="absolute inset-0 bg-zinc-200 opacity-50" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>

<div className="relative z-10 pt-12 px-6 flex justify-between items-center">
<div className="h-8 w-8 bg-white rounded-full shadow-md flex items-center justify-center">
<iconify-icon icon="lucide:chevron-left" width="20"></iconify-icon>
</div>
<div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow-sm">En Route</div>
</div>

<div className="absolute bottom-0 w-full bg-white p-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 bg-zinc-100 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-bold text-sm">Tech ID #992</div>
<div className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon className="text-black" icon="lucide:star" width="10"></iconify-icon> 4.9 Rating
                                    </div>
</div>
<div className="ml-auto flex gap-2">
<div className="h-10 w-10 rounded-full border border-zinc-200 flex items-center justify-center">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
</div>
<div className="h-10 w-10 rounded-full border border-zinc-200 flex items-center justify-center">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-[#FF3300] text-white py-3 rounded-lg text-xs font-bold uppercase">View Work Order</button>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-[#FF3300] to-blue-500 opacity-20 blur-3xl rounded-full transform scale-75"></div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-24 pb-0 relative">
<div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
<div className="space-y-4">
<div className="text-sm font-mono text-zinc-500">HQ_LOC_01</div>
<div className="text-lg font-medium">
                    1024 Signal Blvd,<br/>
                    District 9, Metro City
                </div>
<div className="flex flex-col gap-1 text-zinc-500">
<a className="hover:text-black transition-colors" href="tel:5550123">555-0123</a>
<a className="hover:text-black transition-colors" href="mailto:help@dispatch.com">help@dispatch.com</a>
</div>
</div>
<div className="flex gap-12 text-sm">
<div className="flex flex-col gap-4">
<span className="font-semibold text-zinc-400 text-xs uppercase tracking-widest">Legal</span>
<a className="hover:text-[#FF3300] transition-colors" href="#">Terms</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">License #892102</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-zinc-400 text-xs uppercase tracking-widest">Platform</span>
<a className="hover:text-[#FF3300] transition-colors" href="#">Tech Login</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">Vendor Portal</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">API Docs</a>
</div>
</div>
</div>

<a className="block w-full border-t border-zinc-200 hover:bg-zinc-50 transition-colors cursor-pointer group" href="#top">
<h1 className="text-[20vw] leading-[0.8] font-bold tracking-tighter text-center text-black group-hover:text-zinc-800 select-none pb-4 md:pb-8 pt-4">
                DISPATCH
            </h1>
</a>
</footer>

    </>
  );
}
