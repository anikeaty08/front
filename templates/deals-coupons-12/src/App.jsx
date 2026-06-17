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
      

<header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="flex items-center justify-between h-16 gap-6">

<a className="flex-shrink-0 flex items-center gap-2.5 group" href="#">

<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 p-[2px] shadow-sm group-hover:shadow-md transition-all">
<div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50"></div>
<iconify-icon className="text-purple-600 relative z-10" height="20" icon="solar:stars-bold-duotone" width="20"></iconify-icon>

<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white z-20"></div>
</div>
</div>

<span className="text-3xl font-brand bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 pb-1">ckupa</span>
</a>

<div className="hidden md:flex flex-1 max-w-2xl relative">
<input className="w-full pl-4 pr-10 py-2.5 bg-neutral-100 border-none rounded-full text-sm focus:ring-2 focus:ring-purple-100 focus:bg-white outline-none placeholder-neutral-400 transition-all" placeholder="Search for deals, stores..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-4 lg:gap-6">
<a className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">
<iconify-icon height="20" icon="solar:smartphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>App</span>
</a>
<div className="h-4 w-px bg-neutral-200 hidden lg:block"></div>
<a className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900" href="#">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900" href="#">
<iconify-icon height="24" icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900" href="#">
<iconify-icon height="24" icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<nav className="flex items-center gap-6 overflow-x-auto hide-scrollbar py-3 text-sm font-medium whitespace-nowrap">
<a className="text-neutral-900 border-b-2 border-neutral-900 pb-0.5" href="#">Home</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Fashion</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Beauty</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Electronics</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Home &amp; Living</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Baby</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Travel</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Financial</a>
<span className="flex-1"></span>
<a className="text-deal-red hover:text-red-700 font-semibold flex items-center gap-1" href="#">
<iconify-icon height="16" icon="solar:fire-linear" width="16"></iconify-icon>
                        Exclusives
                    </a>
</nav>
</div>
</div>
</header>

<main className="flex-grow pt-6 pb-6">
<div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-9 space-y-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

<a className="group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-neutral-200" href="#">
<div className="aspect-square bg-neutral-50 rounded-md mb-3 overflow-hidden relative">
<img alt="Nike" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1 left-1 bg-deal-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">HOT</div>
</div>
<h3 className="text-xs font-semibold text-neutral-800 line-clamp-2 mb-1 group-hover:text-blue-600">Nike Annual Sale Extra 25% Off</h3>
<p className="text-xs text-deal-red font-medium">Up to 60% Off</p>
</a>

<a className="group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-neutral-200" href="#">
<div className="aspect-square bg-neutral-50 rounded-md mb-3 overflow-hidden relative">
<img alt="Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xs font-semibold text-neutral-800 line-clamp-2 mb-1 group-hover:text-blue-600">Sephora Beauty Insider Event</h3>
<p className="text-xs text-deal-red font-medium">Starts 1/24</p>
</a>

<a className="group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-neutral-200" href="#">
<div className="aspect-square bg-neutral-50 rounded-md mb-3 overflow-hidden relative">
<img alt="Headphones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xs font-semibold text-neutral-800 line-clamp-2 mb-1 group-hover:text-blue-600">Bose QC45 Lowest Price Ever</h3>
<p className="text-xs text-deal-red font-medium">$199.99</p>
</a>

<a className="group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-neutral-200" href="#">
<div className="aspect-square bg-neutral-50 rounded-md mb-3 overflow-hidden relative">
<img alt="Watch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1 left-1 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">NEW</div>
</div>
<h3 className="text-xs font-semibold text-neutral-800 line-clamp-2 mb-1 group-hover:text-blue-600">Apple Watch Series 9 Deals</h3>
<p className="text-xs text-deal-red font-medium">$70 Off</p>
</a>
</div>

<div className="flex items-center justify-between">
<h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
                        Today's Top Picks
                    </h2>
<div className="flex gap-2 text-sm text-neutral-500">
<button className="font-medium text-neutral-900">Newest</button>
<span>|</span>
<button className="hover:text-neutral-900">Hottest</button>
</div>
</div>

<div className="space-y-4">

<article className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all group">
<div className="flex flex-col sm:flex-row gap-5">

<div className="w-full sm:w-48 h-48 sm:h-36 flex-shrink-0 relative bg-neutral-50 rounded-lg overflow-hidden">
<img alt="Lancome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-yellow-400 text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                    TOP PICK
                                </div>
</div>

<div className="flex-grow flex flex-col">
<div className="mb-1">
<h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                                        Lancôme Lunar New Year Limited Edition
                                    </h3>
<p className="text-deal-red font-semibold text-base">
                                        Buy 1 Get 1 Free + Extra 30% Off
                                    </p>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 mb-3 mt-1 leading-relaxed">
                                    Ckupa Exclusive! Celebrate the Year of the Horse with Lancôme. Get the limited edition Advanced Génifique Serum and receive a free full-size eye cream. Use code <span className="bg-neutral-100 px-1 rounded border border-neutral-200 text-neutral-700 font-mono text-xs">CKUPANEWYEAR</span> at checkout.
                                </p>
<div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-3">
<div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-1.5 text-neutral-600">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
                                            Lancôme
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                            15m ago
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="" icon="solar:chat-round-line-linear" width="14"></iconify-icon>
                                            24
                                        </div>
</div>
<a className="inline-flex items-center justify-center px-4 py-1.5 bg-deal-red hover:bg-red-700 text-white text-xs font-semibold rounded transition-colors" href="#">
                                        Shop Now
                                    </a>
</div>
</div>
</div>
</article>

<article className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-48 h-48 sm:h-36 flex-shrink-0 relative bg-neutral-50 rounded-lg overflow-hidden">
<img alt="MAC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-grow flex flex-col">
<div className="mb-1">
<h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                                        MAC Cosmetics Studio Fix Fluid
                                    </h3>
<p className="text-deal-red font-semibold text-base">
                                        30% Off Sitewide
                                    </p>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 mb-3 mt-1 leading-relaxed">
                                    Stock up on your favorite foundation. The Studio Fix Fluid brings a matte finish with medium-to-full buildable coverage. Free shipping on orders over $35.
                                </p>
<div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-3">
<div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-1.5 text-neutral-600">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
                                            MAC
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                            1h ago
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
                                            12
                                        </div>
</div>
<a className="inline-flex items-center justify-center px-4 py-1.5 bg-deal-red hover:bg-red-700 text-white text-xs font-semibold rounded transition-colors" href="#">
                                        Shop Now
                                    </a>
</div>
</div>
</div>
</article>

<article className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-48 h-48 sm:h-36 flex-shrink-0 relative bg-neutral-50 rounded-lg overflow-hidden">
<img alt="iPhone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                    POPULAR
                                </div>
</div>
<div className="flex-grow flex flex-col">
<div className="mb-1">
<h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                                        Apple iPhone 15 Pro Max Unlocked
                                    </h3>
<p className="text-deal-red font-semibold text-base">
                                        Save up to $800 with trade-in
                                    </p>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 mb-3 mt-1 leading-relaxed">
                                    Get the new titanium design. Powerful A17 Pro chip. The best iPhone camera ever. Available at major carriers with qualified activation.
                                </p>
<div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-3">
<div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-1.5 text-neutral-600">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
                                            Best Buy
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                            2h ago
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
                                            156
                                        </div>
</div>
<a className="inline-flex items-center justify-center px-4 py-1.5 bg-deal-red hover:bg-red-700 text-white text-xs font-semibold rounded transition-colors" href="#">
                                        Shop Now
                                    </a>
</div>
</div>
</div>
</article>

<article className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-48 h-48 sm:h-36 flex-shrink-0 relative bg-neutral-50 rounded-lg overflow-hidden">
<img alt="Tory Burch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-grow flex flex-col">
<div className="mb-1">
<h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                                        Tory Burch Semi-Annual Sale
                                    </h3>
<p className="text-deal-red font-semibold text-base">
                                        Extra 25% Off Sale Styles
                                    </p>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 mb-3 mt-1 leading-relaxed">
                                    Refresh your wardrobe with designer handbags, shoes, and ready-to-wear pieces. The famous Fleming bag is included in the sale for a limited time.
                                </p>
<div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-3">
<div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-1.5 text-neutral-600">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
                                            Tory Burch
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                            4h ago
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
                                            42
                                        </div>
</div>
<a className="inline-flex items-center justify-center px-4 py-1.5 bg-deal-red hover:bg-red-700 text-white text-xs font-semibold rounded transition-colors" href="#">
                                        Shop Now
                                    </a>
</div>
</div>
</div>
</article>

<article className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-48 h-48 sm:h-36 flex-shrink-0 relative bg-neutral-50 rounded-lg overflow-hidden">
<img alt="Samsonite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-grow flex flex-col">
<div className="mb-1">
<h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                                        Samsonite Voltage DLX Spinner Luggage
                                    </h3>
<p className="text-deal-red font-semibold text-base">
                                        Up to 70% Off + Free Shipping
                                    </p>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 mb-3 mt-1 leading-relaxed">
                                    Perfect for your holiday travels. Lightweight and durable polycarbonate construction. Available in 20", 24", and 28" sizes.
                                </p>
<div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-3">
<div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-1.5 text-neutral-600">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
                                            Samsonite
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                            5h ago
                                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
                                            8
                                        </div>
</div>
<a className="inline-flex items-center justify-center px-4 py-1.5 bg-deal-red hover:bg-red-700 text-white text-xs font-semibold rounded transition-colors" href="#">
                                        Shop Now
                                    </a>
</div>
</div>
</div>
</article>
</div>
<div className="flex justify-center pt-4">
<button className="hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 bg-white border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm">
                        Load More Deals
                    </button>
</div>
</div>

<div className="hidden lg:block lg:col-span-3 space-y-6">

<div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 text-center">
<h3 className="font-bold text-neutral-900 mb-2">Don't Miss Out</h3>
<p className="text-xs text-neutral-500 mb-4">Get the best deals delivered to your inbox.</p>
<input className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-md text-sm mb-2 focus:outline-none focus:border-neutral-400" placeholder="Enter email" type="email"/>
<button className="w-full py-2 bg-neutral-900 text-white text-sm font-semibold rounded-md hover:bg-neutral-800 transition-colors">Subscribe</button>
</div>

<div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50/50">
<h3 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:graph-up-linear"></iconify-icon>
                            Trending Now
                        </h3>
</div>
<div className="divide-y divide-neutral-100">

<a className="flex items-start gap-3 p-3 hover:bg-neutral-50 transition-colors" href="#">
<span className="text-lg font-bold text-neutral-200 mt-0.5">1</span>
<div>
<h4 className="text-xs font-medium text-neutral-800 line-clamp-2 mb-1">Lululemon We Made Too Much Sale</h4>
<span className="text-[10px] text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-deal-red" icon="solar:fire-linear"></iconify-icon> 2.1k views
                                </span>
</div>
</a>

<a className="flex items-start gap-3 p-3 hover:bg-neutral-50 transition-colors" href="#">
<span className="text-lg font-bold text-neutral-200 mt-0.5">2</span>
<div>
<h4 className="text-xs font-medium text-neutral-800 line-clamp-2 mb-1">Adidas Ultraboost 50% Off</h4>
<span className="text-[10px] text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-deal-red" icon="solar:fire-linear"></iconify-icon> 1.8k views
                                </span>
</div>
</a>

<a className="flex items-start gap-3 p-3 hover:bg-neutral-50 transition-colors" href="#">
<span className="text-lg font-bold text-neutral-200 mt-0.5">3</span>
<div>
<h4 className="text-xs font-medium text-neutral-800 line-clamp-2 mb-1">Costco Member Only Savings</h4>
<span className="text-[10px] text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-deal-red" icon="solar:fire-linear"></iconify-icon> 1.5k views
                                </span>
</div>
</a>

<a className="flex items-start gap-3 p-3 hover:bg-neutral-50 transition-colors" href="#">
<span className="text-lg font-bold text-neutral-200 mt-0.5">4</span>
<div>
<h4 className="text-xs font-medium text-neutral-800 line-clamp-2 mb-1">Uniqlo Arigato Festival</h4>
<span className="text-[10px] text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-deal-red" icon="solar:fire-linear"></iconify-icon> 1.2k views
                                </span>
</div>
</a>

<a className="flex items-start gap-3 p-3 hover:bg-neutral-50 transition-colors" href="#">
<span className="text-lg font-bold text-neutral-200 mt-0.5">5</span>
<div>
<h4 className="text-xs font-medium text-neutral-800 line-clamp-2 mb-1">Nordstrom Rack Clear the Rack</h4>
<span className="text-[10px] text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-deal-red" icon="solar:fire-linear"></iconify-icon> 900 views
                                </span>
</div>
</a>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center shadow-md">
<iconify-icon className="mb-2" height="32" icon="solar:gift-linear" width="32"></iconify-icon>
<h3 className="font-bold mb-1">Download App</h3>
<p className="text-xs text-indigo-100 mb-4">Get exclusive deals only on the app.</p>
<button className="bg-white text-indigo-600 px-4 py-1.5 rounded text-xs font-bold hover:bg-indigo-50 transition-colors">Download</button>
</div>
</div>
</div>
</main>

<footer className="bg-white border-neutral-200 border-t mt-auto pt-8 pb-8">
<div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-500">© 2026 Ckupa.com. All rights reserved.</div>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-600" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-600" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-600" href="#"><iconify-icon icon="solar:earth-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
