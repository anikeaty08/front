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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/90 border-zinc-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter flex items-center gap-2 text-zinc-100" href="#">
<div className="w-7 h-7 rounded-lg flex items-center justify-center bg-zinc-100 text-black">
<span className="font-light text-xs">H</span>
</div>
                HAVEN
            </a>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    (555) 123-4567
                </a>
<button className="px-5 py-2 rounded-lg text-xs font-medium transition-all shadow-sm bg-zinc-100 text-black hover:bg-zinc-200">
                    Book Consultation
                </button>
</div>
</div>
</nav>

<section className="pt-28 pb-20 px-6 relative overflow-hidden bg-zinc-950/50">

<div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/4 bg-indigo-900/40"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium border-emerald-800 bg-emerald-950 text-emerald-300">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                    #1 Rated Real Estate Agency 2024
                </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-zinc-100">
                    Stop searching. <br/>
                    Start <span className="text-zinc-600">living.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-lg leading-relaxed">
                    Get exclusive access to off-market properties in California before they hit Zillow or Redfin. Join 500+ families who found their dream home with Haven.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-900 text-emerald-400">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
</div>
<span>Off-Market Access</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900 text-blue-400">
<iconify-icon icon="solar:wallet-linear" width="18"></iconify-icon>
</div>
<span>Best Price Guarantee</span>
</div>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium border-black bg-zinc-900 text-zinc-400">+2k</div>
</div>
<div>
<div className="flex text-xs text-amber-600">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 font-medium mt-0.5">Trusted by homebuyers</p>
</div>
</div>
</div>

<div className="lg:col-span-5 fade-in-up delay-100">
<div className="p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border relative bg-black border-zinc-900">

<div className="absolute -top-4 right-8 text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg bg-zinc-100 text-black">
                        Limited Availability
                    </div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-100">Get the Exclusive List</h3>
<p className="text-sm text-zinc-500 mb-6">Fill out the form to view properties not available to the public.</p>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium ml-1 text-zinc-300">Full Name</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-600" icon="solar:user-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all bg-zinc-950 border-zinc-800" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium ml-1 text-zinc-300">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-600" icon="solar:letter-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all bg-zinc-950 border-zinc-800" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium ml-1 text-zinc-300">Budget Range</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-600" icon="solar:dollar-linear" width="18"></iconify-icon>
<select className="w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all appearance-none bg-zinc-950 border-zinc-800 text-zinc-400">
<option>$500k - $1M</option>
<option>$1M - $3M</option>
<option>$3M+</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 pointer-events-none text-zinc-600" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<button className="w-full py-4 rounded-xl font-medium text-sm transition-all shadow-lg flex items-center justify-center gap-2 mt-2 bg-zinc-100 hover:bg-zinc-200 text-black shadow-zinc-100/20" type="button">
                            See Available Homes
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-[10px] text-center mt-4 text-zinc-600">
                            By clicking, you agree to our Terms &amp; Privacy Policy. No spam, ever.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-900 bg-black">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest mb-8 text-zinc-600">Featured In</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tight">Forbes</span>
<span className="text-xl font-serif italic font-bold">Vogue</span>
<span className="text-xl font-extrabold tracking-tighter">BusinessInsider</span>
<span className="text-xl font-semibold">Bloomberg</span>
<span className="text-xl font-serif font-bold">ElleDecor</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-zinc-100">Why buy with Haven?</h2>
<p className="text-zinc-500">We've streamlined the process to help you find the perfect home with zero stress.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border transition-colors group bg-zinc-950 border-zinc-900 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 shadow-sm group-hover:scale-110 transition-transform bg-black border-zinc-800 text-zinc-100">
<iconify-icon icon="solar:key-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-zinc-100">Exclusive Inventory</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Access properties 7-14 days before they appear on public listing sites.</p>
</div>
<div className="p-8 rounded-2xl border transition-colors group bg-zinc-950 border-zinc-900 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 shadow-sm group-hover:scale-110 transition-transform bg-black border-zinc-800 text-zinc-100">
<iconify-icon icon="solar:hand-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-zinc-100">Zero Hidden Fees</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Transparent pricing structure. You keep more of your money for the renovation.</p>
</div>
<div className="p-8 rounded-2xl border transition-colors group bg-zinc-950 border-zinc-900 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 shadow-sm group-hover:scale-110 transition-transform bg-black border-zinc-800 text-zinc-100">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-zinc-100">Verified Sellers</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every home is vetted legally and structurally. No surprises after closing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-100 text-black">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Latest Off-Market Drops</h2>
<p className="text-sm text-zinc-600">Sign up to view full details and addresses.</p>
</div>
<button className="px-6 py-2 border rounded-full text-xs font-medium transition-colors border-zinc-300 hover:bg-zinc-200">View All Inventory</button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden border bg-zinc-200 border-zinc-300">
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600596542815-60002552dd03?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide text-black">
                            Just Added
                        </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium tracking-tight">Modern Farmhouse</h3>
<span className="font-medium text-emerald-600">$1.2M</span>
</div>
<p className="text-xs mb-4 text-zinc-600">Beverly Grove, Los Angeles (Address Hidden)</p>
<div className="grid grid-cols-3 border-t pt-3 text-xs border-zinc-300 text-zinc-600">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 4 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 3 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear"></iconify-icon> 2,400 sqft</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border bg-zinc-200 border-zinc-300">
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium tracking-tight">The Hillside Villa</h3>
<span className="font-medium text-emerald-600">$2.8M</span>
</div>
<p className="text-xs mb-4 text-zinc-600">Hollywood Hills, CA (Address Hidden)</p>
<div className="grid grid-cols-3 border-t pt-3 text-xs border-zinc-300 text-zinc-600">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 4.5 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear"></iconify-icon> 3,800 sqft</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border bg-zinc-200 border-zinc-300">
<div className="absolute inset-0 z-10 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 bg-zinc-100/60">
<iconify-icon className="mb-3 text-zinc-600" icon="solar:lock-keyhole-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium">Login to View</h3>
<p className="text-xs mb-4 text-zinc-600">This property is exclusive to members.</p>
<button className="px-4 py-2 rounded-lg text-xs font-bold transition-colors bg-black text-zinc-100 hover:bg-zinc-800">
                            Unlock Listing
                        </button>
</div>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-5 opacity-20">
<div className="h-4 rounded w-2/3 mb-2 bg-zinc-300"></div>
<div className="h-3 rounded w-1/2 mb-4 bg-zinc-300"></div>
<div className="h-8 rounded w-full bg-zinc-300"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t bg-zinc-950 border-zinc-900">
<div className="max-w-3xl mx-auto text-center">
<div className="mb-6 flex justify-center text-emerald-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium leading-snug tracking-tight mb-8 text-zinc-100">
                "We had been looking for 6 months with no luck. After joining Haven, we found our dream home in 2 weeks at a price below market value."
            </h3>
<div className="flex items-center justify-center gap-4">
<img className="w-12 h-12 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="text-left">
<p className="text-sm font-medium text-zinc-100">Michael &amp; Sarah T.</p>
<p className="text-xs text-zinc-500">Bought in San Diego, CA</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t bg-black border-zinc-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-zinc-600">© 2024 Haven Real Estate. Lic #01234567</p>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-100" href="#">Privacy Policy</a>
<a className="hover:text-zinc-100" href="#">Terms of Service</a>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full border-t p-4 z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] bg-black border-zinc-800">
<a className="flex-1 border py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 bg-black border-zinc-800 text-zinc-100" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
            Call
        </a>
<button className="flex-1 py-3 rounded-xl text-sm font-medium shadow-lg bg-zinc-100 text-black">
            Get List
        </button>
</div>

    </>
  );
}
