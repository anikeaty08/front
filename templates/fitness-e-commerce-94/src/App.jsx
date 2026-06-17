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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 flex-shrink-0 flex flex-col bg-zinc-950/80 backdrop-blur-xl z-20">

<div className="p-5 flex items-center gap-3">
<div className="h-8 w-8 bg-white text-black rounded flex items-center justify-center">
<iconify-icon icon="lucide:dumbbell" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">KINETICS</span>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
<div className="px-2 mb-2 mt-2">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Store</p>
</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-100 bg-zinc-900/50 border border-white/5 rounded-md group font-medium shadow-sm" href="#">
<iconify-icon icon="lucide:store" strokeWidth="1.5" width="16"></iconify-icon>
                Equipment
            </a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all" href="#">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
                My Cart
                <span className="ml-auto text-xs bg-white text-black font-semibold px-1.5 py-0.5 rounded">2</span>
</a>
<div className="px-2 mb-2 mt-6">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Account</p>
</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all" href="#">
<iconify-icon icon="lucide:package-check" strokeWidth="1.5" width="16"></iconify-icon>
                Orders
            </a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all" href="#">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="16"></iconify-icon>
                Payment Methods
            </a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all" href="#">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="16"></iconify-icon>
                Profile &amp; Login
            </a>
</nav>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 hover:bg-white/5 rounded-md transition-colors text-left group">
<img alt="Profile" className="h-8 w-8 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity ring-1 ring-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Sarah Jenkins</span>
<span className="text-xs text-zinc-500">View Profile</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-black relative scroll-smooth">

<header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<h1 className="text-lg font-medium tracking-tight text-white">Equipment Store</h1>
<span className="text-zinc-700 text-lg font-thin">/</span>
<span className="text-sm text-zinc-400">New Arrivals</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-zinc-900/50 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all w-64 placeholder:text-zinc-600" placeholder="Search weights, cardio..." type="text"/>
</div>
<button className="p-2 text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
</button>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto space-y-12 pb-24">

<section className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 h-80 flex items-center group">
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 px-10 max-w-lg">
<span className="inline-block px-2 py-1 rounded border border-white/20 bg-white/10 text-white text-xs font-medium mb-4 backdrop-blur-sm">New Collection</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Forge Your Legacy</h2>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">Professional grade equipment for the home athlete. Milled steel, sustainable materials, and lifetime warranty.</p>
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">Shop Collection</button>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white tracking-tight">Featured Equipment</h3>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-md border border-white/10">All</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors">Strength</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors">Cardio</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 overflow-hidden hover:bg-zinc-900/50">
<div className="aspect-[4/3] bg-zinc-800/50 overflow-hidden relative">
<img alt="Dumbbells" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-black/50 backdrop-blur text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-zinc-200 font-medium">Hex Dumbbell Set</h4>
<p className="text-xs text-zinc-500 mt-1">5lbs - 50lbs Set • Rubber Coated</p>
</div>
<span className="text-zinc-200 font-medium">$499</span>
</div>
<button className="w-full mt-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 overflow-hidden hover:bg-zinc-900/50">
<div className="aspect-[4/3] bg-zinc-800/50 overflow-hidden relative">
<img alt="Treadmill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-zinc-200 font-medium">Pro Runner X1</h4>
<p className="text-xs text-zinc-500 mt-1">Smart Screen • Incline Motor</p>
</div>
<span className="text-zinc-200 font-medium">$1,299</span>
</div>
<button className="w-full mt-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 overflow-hidden hover:bg-zinc-900/50">
<div className="aspect-[4/3] bg-zinc-800/50 overflow-hidden relative">
<img alt="Kettlebell" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3">
<span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Sale</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-zinc-200 font-medium">Cast Iron Kettlebell</h4>
<p className="text-xs text-zinc-500 mt-1">16kg • Powder Coat Finish</p>
</div>
<div className="text-right">
<span className="text-zinc-200 font-medium block">$65</span>
<span className="text-zinc-600 line-through text-xs">$85</span>
</div>
</div>
<button className="w-full mt-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/5">

<section className="space-y-6">
<h3 className="text-lg font-medium text-white tracking-tight">Checkout Details</h3>
<div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6">
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-zinc-300">Payment Method</span>
<div className="flex gap-2">
<div className="h-6 w-10 bg-white/5 rounded border border-white/10 flex items-center justify-center">
<iconify-icon icon="lucide:credit-card" width="16"></iconify-icon>
</div>
<div className="h-6 w-10 bg-white/5 rounded border border-white/10 flex items-center justify-center">
<iconify-icon icon="lucide:banknote" width="16"></iconify-icon>
</div>
</div>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Card Number</label>
<div className="relative">
<input className="block w-full bg-transparent border border-zinc-800 rounded-md py-2 pl-3 pr-10 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20" placeholder="0000 0000 0000 0000" type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-zinc-600" icon="lucide:lock" width="14"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Expiry</label>
<input className="block w-full bg-transparent border border-zinc-800 rounded-md py-2 px-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500" placeholder="MM / YY" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">CVC</label>
<input className="block w-full bg-transparent border border-zinc-800 rounded-md py-2 px-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500" placeholder="123" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Cardholder Name</label>
<input className="block w-full bg-transparent border border-zinc-800 rounded-md py-2 px-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500" type="text" value="Sarah Jenkins"/>
</div>
</form>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-zinc-500">Subtotal</span>
<span className="text-zinc-300">$1,863.00</span>
</div>
<div className="flex justify-between items-center text-sm mb-4">
<span className="text-zinc-500">Shipping</span>
<span className="text-green-500">Free</span>
</div>
<button className="w-full bg-white text-black py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 flex items-center justify-center gap-2">
                            Pay $1,863.00 <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="space-y-6">
<h3 className="text-lg font-medium text-white tracking-tight">Recent Orders</h3>
<div className="bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 text-zinc-400">
<tr>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Order ID</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Date</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-zinc-500 text-xs">#7482-99</td>
<td className="px-6 py-4 text-xs">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Delivered
                                            </span>
</td>
<td className="px-6 py-4 text-right font-medium">$240.00</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-zinc-500 text-xs">#7483-01</td>
<td className="px-6 py-4 text-xs">Nov 02, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                                Shipped
                                            </span>
</td>
<td className="px-6 py-4 text-right font-medium">$89.00</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-zinc-500 text-xs">#7483-12</td>
<td className="px-6 py-4 text-xs">Today</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                                                Processing
                                            </span>
</td>
<td className="px-6 py-4 text-right font-medium">$1,863.00</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-white/5 bg-white/[0.02]">
<button className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
                                View all orders <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
</section>
</div>

<section className="border-t border-white/5 pt-10">
<div className="flex flex-col md:flex-row gap-10">
<div className="w-full md:w-1/3">
<h3 className="text-lg font-medium text-white tracking-tight mb-2">About Kinetics</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Founded in 2023, Kinetics is dedicated to bringing commercial-grade fitness experiences to your home. We source the finest steel and technology to build equipment that lasts a lifetime.
                        </p>
<div className="mt-4 flex gap-4 text-zinc-500">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:twitter" width="18"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:instagram" width="18"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:facebook" width="18"></iconify-icon>
</div>
</div>
<div className="w-full md:w-2/3">
<div className="bg-zinc-900 border border-white/5 rounded-xl p-8">
<h4 className="text-sm font-medium text-zinc-300 mb-6 uppercase tracking-wider">Account Security</h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 border border-zinc-800 rounded-lg bg-black/20">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200">Email Address</div>
<div className="text-xs text-zinc-500">sarah.j@example.com</div>
</div>
</div>
<button className="text-xs text-zinc-400 hover:text-white px-3 py-1.5 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors">Update</button>
</div>
<div className="flex items-center justify-between p-3 border border-zinc-800 rounded-lg bg-black/20">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:key" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200">Password</div>
<div className="text-xs text-zinc-500">Last changed 3 months ago</div>
</div>
</div>
<button className="text-xs text-zinc-400 hover:text-white px-3 py-1.5 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors">Reset</button>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
                                Secure 256-bit SSL Encrypted Connection
                             </div>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
