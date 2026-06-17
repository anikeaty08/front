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
      

<nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter uppercase">Playmarketing</span>
<span className="text-zinc-300 font-light">×</span>
<span className="text-sm font-semibold tracking-tighter uppercase">Mastercard</span>
</div>
<a className="text-xs font-medium hover:text-zinc-500 transition-colors uppercase tracking-widest" href="#library">Research Library</a>
</div>
</nav>

<header className="relative pt-24 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 mb-8">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Swiss Market Intelligence Partnership</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                Real market intelligence for <br className="hidden md:block"/> Swiss decision-makers
            </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Free sector research teasers, powered by real transactional data. A curated library of Mastercard research extracts—interpreted by Playmarketing in Lugano.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="#library">
                    Browse the Library
                    <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-all" href="#about">
                    Learn about the collaboration
                </a>
</div>
</div>
</header>

<section className="py-24 border-t border-zinc-100 bg-zinc-50/50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">From assumptions to evidence</h2>
<p className="text-base text-zinc-600 leading-relaxed font-light">
                        Playmarketing (Lugano) and Mastercard Data &amp; Services collaborate to help companies move from assumptions to evidence. Mastercard provides aggregated, anonymized transactional signals across online and offline spending.
                    </p>
<p className="text-base text-zinc-600 leading-relaxed font-light">
                        Playmarketing adds qualitative interpretation—so leaders can understand not just <span className="text-zinc-900 font-medium italic">what</span> is happening, but <span className="text-zinc-900 font-medium italic">why</span>.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
<iconify-icon className="text-zinc-400 mb-4" height="24" icon="solar:globus-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Global Reach</h3>
<p className="text-xs text-zinc-500 font-light">Mastercard's vast network provides unparalleled spend signals.</p>
</div>
<div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
<iconify-icon className="text-zinc-400 mb-4" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Swiss Expertise</h3>
<p className="text-xs text-zinc-500 font-light">Interpreted locally in Lugano for the Swiss business landscape.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Why data-grade analysis matters</h2>
<p className="text-base text-zinc-500 font-light">The difference between following trends and leading the market.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50">
<iconify-icon className="text-zinc-900" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold">Real Market Truth</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Internal signals like CRM and ERP are incomplete. They only show your world—not the competitive landscape around you.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50">
<iconify-icon className="text-zinc-900" height="20" icon="solar:cpu-direct-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold">Reliable AI Inputs</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">"Garbage in, garbage out" applies to forecasting and agents. AI needs trusted, real-world inputs to be effective.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50">
<iconify-icon className="text-zinc-900" height="20" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold">Strategic Utility</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Intelligence you can use for strategy, store network planning, pricing, and campaign effectiveness.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white px-6" id="library">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Research Teasers Library</h2>
<p className="text-base text-zinc-400 font-light max-w-3xl">
                    These are illustrations of the kind of custom analysis we build for your company. Choose a sector, request access, and receive the teaser PDF.
                </p>
</div>
<div className="overflow-x-auto border border-white/10 rounded-2xl">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 bg-white/5">
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">PDF Title</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">Sector</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 hidden md:table-cell">Teaser Description</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 text-right">Access</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-6 text-sm font-medium">[Travel spend snapshot: Switzerland]</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light">Travel</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light hidden md:table-cell max-w-xs">Key travel spending patterns and demand signals.</td>
<td className="px-6 py-6 text-right">
<a className="text-xs font-semibold underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all" href="#form">Download</a>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-6 text-sm font-medium">[Fashion market pulse: spending]</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light">Fashion</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light hidden md:table-cell max-w-xs">A quick look at fashion spend dynamics and customer segments.</td>
<td className="px-6 py-6 text-right">
<a className="text-xs font-semibold underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all" href="#form">Download</a>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-6 text-sm font-medium text-zinc-500 italic">—</td>
<td className="px-6 py-6 text-sm text-zinc-500 font-light">Retail</td>
<td className="px-6 py-6 text-sm text-zinc-600 font-light hidden md:table-cell italic">Coming soon: category Trends and regional patterns.</td>
<td className="px-6 py-6 text-right text-xs text-zinc-600">Coming soon</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-6 text-sm font-medium">[Beauty &amp; cosmetics spend insights]</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light">Beauty &amp; Cosmetics</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light hidden md:table-cell max-w-xs">High-level patterns to refine product mix and targeting.</td>
<td className="px-6 py-6 text-right">
<a className="text-xs font-semibold underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all" href="#form">Download</a>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="px-6 py-6 text-sm font-medium">[Swiss major events impact]</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light">Major Events</td>
<td className="px-6 py-6 text-sm text-zinc-400 font-light hidden md:table-cell max-w-xs">Event-driven shifts in transactions and activation planning.</td>
<td className="px-6 py-6 text-right">
<a className="text-xs font-semibold underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all" href="#form">Download</a>
</td>
</tr>
</tbody>
</table>
</div>
<p className="mt-6 text-xs text-zinc-500 font-light max-w-2xl leading-relaxed">
                Note: These PDFs are sample teaser extracts. They are not ready-made reports for sale, but examples of the custom research we build for decision-makers.
            </p>
</div>
</section>

<section className="py-24 px-6" id="form">
<div className="max-w-4xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Get instant access to the library</h2>
<p className="text-base text-zinc-500 font-light mb-8">
                        Fill in your details and we’ll unlock the downloads and share the requested materials with you.
                    </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center">
<iconify-icon className="text-zinc-400" height="16" icon="solar:checklist-minimalistic-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Gated Access</h4>
<p className="text-xs text-zinc-500 font-light">Verified professional emails only for industry research distribution.</p>
</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">First Name</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Last Name</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Work Email</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="jane.doe@company.ch" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Company</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="Enter company name" type="text"/>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Role/Department</label>
<select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all text-zinc-600">
<option>Executive / Management</option>
<option>Marketing / Digital</option>
<option>Strategy / Analysis</option>
<option>Product / Inventory</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Sectors of Interest</label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors">
<input className="custom-checkbox w-4 h-4 rounded border-zinc-300 text-black" type="checkbox"/>
<span className="text-xs text-zinc-600">Travel</span>
</label>
<label className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors">
<input className="custom-checkbox w-4 h-4 rounded border-zinc-300 text-black" type="checkbox"/>
<span className="text-xs text-zinc-600">Fashion</span>
</label>
<label className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors">
<input className="custom-checkbox w-4 h-4 rounded border-zinc-300 text-black" type="checkbox"/>
<span className="text-xs text-zinc-600">Retail</span>
</label>
<label className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors">
<input className="custom-checkbox w-4 h-4 rounded border-zinc-300 text-black" type="checkbox"/>
<span className="text-xs text-zinc-600">Beauty</span>
</label>
</div>
</div>
<div className="flex items-start gap-3 py-4">
<input className="mt-1 w-4 h-4 border-zinc-300 text-black rounded" id="gdpr" type="checkbox"/>
<label className="text-xs text-zinc-400 leading-relaxed font-light" htmlFor="gdpr">
                            By requesting access, I agree to the processing of my data to receive the requested materials and follow-up communication. <a className="underline" href="#">Privacy Policy</a>.
                        </label>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-semibold py-4 rounded-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200" type="submit">
                        Unlock the Teasers
                    </button>
<p className="text-center text-xs text-zinc-400 font-light">We use your details only to share the requested materials.</p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-100 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 grayscale opacity-50">
<span className="text-xs font-semibold tracking-tighter uppercase">Playmarketing</span>
<span className="text-zinc-300 font-light">×</span>
<span className="text-xs font-semibold tracking-tighter uppercase">Mastercard</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Legal Mentions</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
<p className="text-xs text-zinc-400 font-light">© 2024 Playmarketing Lugano. All research powered by Mastercard Data &amp; Services.</p>
</div>
</footer>

    </>
  );
}
