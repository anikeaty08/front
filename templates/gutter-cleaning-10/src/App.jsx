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
      

<nav className="max-w-5xl mx-auto mb-16 flex justify-between items-center bg-zinc-900/50 backdrop-blur border border-zinc-800 p-3 rounded-2xl sticky top-4 z-50">
<div className="flex items-center gap-2 px-2">
<span className="iconify text-green-500" data-icon="solar:water-drops-linear" data-width="24"></span>
<span className="text-zinc-100 font-semibold tracking-tight text-sm">Aaron's Gutter Cleaning</span>
</div>
<a className="hidden sm:flex items-center gap-2 bg-zinc-100 text-zinc-900 px-4 py-2 rounded-xl text-xs font-medium hover:bg-white transition-colors" href="tel:01785554269">
<span className="iconify" data-icon="solar:phone-calling-linear" data-width="16"></span>
            01785 554269
        </a>
<a className="sm:hidden flex items-center justify-center w-8 h-8 bg-zinc-100 text-zinc-900 rounded-lg" href="tel:01785554269">
<span className="iconify" data-icon="solar:phone-calling-linear" data-width="16"></span>
</a>
</nav>

<main className="max-w-5xl mx-auto space-y-4">

<div className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-12">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/30 bg-green-950/20 text-green-400 text-[10px] font-medium uppercase tracking-wider mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Five Star Rated Trusted Company
                        </div>
<h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tighter leading-[1.1] mb-4">
                            Let's Solve Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-600">Gutter Problems.</span>
</h1>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">
                            Complete gutter clearing, unblocking, and minor repairs. We handle the mess so you don't have to.
                        </p>
</div>
<div className="flex flex-wrap gap-3">
<a className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 px-5 py-2.5 rounded-xl text-xs font-medium transition-all" href="mailto:hello@aaronsguttercleaning.co.uk">
<span className="iconify" data-icon="solar:letter-linear" data-width="16"></span>
                            Email Us
                        </a>
<a className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-xl text-xs font-medium transition-all shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]" href="tel:01785554269">
<span className="iconify" data-icon="solar:phone-calling-linear" data-width="16"></span>
                            01785 554269
                        </a>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">
<div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden">
<img alt="5 Stars" className="w-32 mb-4 opacity-90 mix-blend-screen" src="https://aaronsguttercleaning.co.uk/wp-content/uploads/2024/05/Aaron_Stars-removebg-300x225.png"/>
<h3 className="text-zinc-100 font-medium text-lg tracking-tight">Top Rated</h3>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">Serving Staffordshire with hundreds of happy customers.</p>
</div>
<div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between group hover:border-zinc-700 transition-colors cursor-default">
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Satisfaction</div>
<div className="text-xl text-zinc-200 font-semibold tracking-tight">100% Guarantee</div>
</div>
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<span className="iconify" data-icon="solar:shield-check-linear" data-width="20"></span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-zinc-100" data-icon="solar:list-check-linear" data-width="20"></span>
<h2 className="text-sm font-semibold text-zinc-200">Our Services</h2>
</div>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<span className="iconify text-green-500 mt-0.5" data-icon="solar:check-circle-linear" data-width="16"></span>
<div>
<h4 className="text-xs font-medium text-zinc-300">Clear &amp; Unblock</h4>
<p className="text-[10px] text-zinc-600">Gutters &amp; downpipes fully cleared.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<span className="iconify text-green-500 mt-0.5" data-icon="solar:check-circle-linear" data-width="16"></span>
<div>
<h4 className="text-xs font-medium text-zinc-300">Stop Leaks</h4>
<p className="text-[10px] text-zinc-600">Prevent water damage to your home.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<span className="iconify text-green-500 mt-0.5" data-icon="solar:check-circle-linear" data-width="16"></span>
<div>
<h4 className="text-xs font-medium text-zinc-300">Free Minor Repairs</h4>
<p className="text-[10px] text-zinc-600">Fixed on the spot, free of charge.</p>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
<img alt="Gutter Cleaning" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://aaronsguttercleaning.co.uk/wp-content/uploads/2024/05/gutter-2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-zinc-100 font-medium text-sm">Before &amp; After Photos</div>
<div className="text-zinc-500 text-xs mt-1">We prove our work every time.</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
<img alt="Worker" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://aaronsguttercleaning.co.uk/wp-content/uploads/2024/05/Aarons-gutter-Customer-Satisfaction-768x560-1-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-zinc-100 font-medium text-sm">No Mess Guarantee</div>
<div className="text-zinc-500 text-xs mt-1">We handle 100% of waste removal.</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-sm font-semibold text-zinc-200 uppercase tracking-widest">How It Works</h2>
<span className="text-[10px] font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded">Simple 4-Step</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-zinc-800 -z-10"></div>

<div className="relative">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-100 text-xs font-bold mb-3 z-10">1</div>
<h4 className="text-xs font-medium text-zinc-200 mb-1">Get in Touch</h4>
<p className="text-[10px] text-zinc-500">Call or email us for advice.</p>
</div>

<div className="relative">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-100 text-xs font-bold mb-3 z-10">2</div>
<h4 className="text-xs font-medium text-zinc-200 mb-1">Free Quote</h4>
<p className="text-[10px] text-zinc-500">Confirm needs &amp; pricing.</p>
</div>

<div className="relative">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-100 text-xs font-bold mb-3 z-10">3</div>
<h4 className="text-xs font-medium text-zinc-200 mb-1">The Date</h4>
<p className="text-[10px] text-zinc-500">We arrange a time that suits you.</p>
</div>

<div className="relative">
<div className="w-8 h-8 bg-green-900 border border-green-700 rounded-full flex items-center justify-center text-green-100 text-xs font-bold mb-3 z-10">4</div>
<h4 className="text-xs font-medium text-zinc-200 mb-1">Cleaning</h4>
<p className="text-[10px] text-zinc-500">We turn up on time &amp; solve it.</p>
</div>
</div>
</div>

<div className="md:col-span-4 bg-gradient-to-b from-green-950/30 to-zinc-950 border border-green-900/30 rounded-3xl p-6 flex flex-col justify-center text-center">
<span className="iconify text-green-500 mx-auto mb-4" data-icon="solar:hand-money-linear" data-width="32"></span>
<p className="text-sm font-medium text-zinc-200 mb-2">You Pay Nothing Until Happy</p>
<p className="text-xs text-zinc-500 leading-relaxed">
                    "My number one goal is to show you how much I appreciate your business. You only pay us if you are happy with the service."
                </p>
<div className="mt-4 pt-4 border-t border-zinc-800/50">
<p className="text-[10px] text-zinc-400 font-medium">- Aaron, Business Owner</p>
</div>
</div>
</div>

<div className="w-full overflow-x-auto hide-scroll pb-4">
<div className="flex gap-4 min-w-max">

<div className="w-80 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
<div className="flex items-center gap-3 mb-3">
<img className="w-10 h-10 rounded-full object-cover border border-zinc-700" src="https://aaronsguttercleaning.co.uk/wp-content/uploads/2024/05/c4.jpg"/>
<div>
<div className="text-xs font-medium text-zinc-200">Christine Tilbury</div>
<div className="text-[10px] text-zinc-500">Customer for 7 Years</div>
</div>
</div>
<p className="text-xs text-zinc-400 italic">"I've been a customer of Aaron's for many years and I must say that he has never let me down. Always great customer service."</p>
</div>

<div className="w-80 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
<div className="flex items-center gap-3 mb-3">
<img className="w-10 h-10 rounded-full object-cover border border-zinc-700" src="https://aaronsguttercleaning.co.uk/wp-content/uploads/2024/05/c1.jpg"/>
<div>
<div className="text-xs font-medium text-zinc-200">Julie Lloyd</div>
<div className="text-[10px] text-zinc-500">Customer for 5 Years</div>
</div>
</div>
<p className="text-xs text-zinc-400 italic">"They have always done an amazing job. Nothing is ever too much bother. They're a pleasure to be around."</p>
</div>

<div className="w-80 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
<div className="flex items-center gap-3 mb-3">
<img className="w-10 h-10 rounded-full object-cover border border-zinc-700" src="https://aaronsguttercleaning.co.uk/wp-content/uploads/2024/05/c2.jpg"/>
<div>
<div className="text-xs font-medium text-zinc-200">Charlotte Roberts</div>
<div className="text-[10px] text-zinc-500">Customer for 1 Year</div>
</div>
</div>
<p className="text-xs text-zinc-400 italic">"I noticed my gutters were leaking very heavily. I called Aaron's Gutter Cleaning and problem solved! Five stars!"</p>
</div>
</div>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="space-y-6">
<div>
<h2 className="text-2xl font-medium text-zinc-200 tracking-tight mb-2">Ready for clean gutters?</h2>
<p className="text-sm text-zinc-500">Open 24 Hours • Staffordshire &amp; Surrounding Areas</p>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-zinc-400 text-xs">
<span className="iconify" data-icon="solar:map-point-linear" data-width="14"></span>
                            Leacroft, Stone, ST15 8GF
                        </div>
<div className="flex items-center gap-2 text-zinc-400 text-xs">
<span className="iconify" data-icon="solar:letter-linear" data-width="14"></span>
                            hello@aaronsguttercleaning.co.uk
                        </div>
</div>
</div>
<div className="space-y-4 text-right">
<a className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-zinc-100 text-zinc-900 px-6 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition-transform" href="tel:01785554269">
                        Call 01785 554269
                    </a>
<div className="text-[10px] text-zinc-600 max-w-xs md:ml-auto leading-relaxed">
                        Areas Covered: Staffordshire, Stone, Stafford, Crewe, Nantwich, Stoke-on-Trent, Congleton, Macclesfield, and more.
                    </div>
</div>
</div>
</div>
<div className="text-center py-6">
<p className="text-[10px] text-zinc-700">© 2026 Aaron's Gutter Cleaning. All Rights Reserved.</p>
</div>
</main>

    </>
  );
}
