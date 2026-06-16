import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="tracking-tighter font-semibold text-lg flex items-baseline gap-1.5" href="#">
                    CHABAW
                    <span className="text-zinc-400 font-medium text-xs tracking-normal">চাবাও</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-zinc-100/50 p-1 rounded-lg border border-zinc-200/50">
<a className="px-3 py-1.5 text-sm font-medium text-zinc-900 bg-white shadow-sm rounded-md transition-all" href="#overview">Overview</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md transition-all" href="#menu">Menu</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md transition-all" href="#reviews">Reviews</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md transition-all" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="tel:01961666601">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    01961-666601
                </a>
<a className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2" href="https://foodpanda.com.bd" target="_blank">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
                    Order
                </a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center" id="overview">

<div className="flex flex-wrap justify-center items-center gap-2 mb-8">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm">
<iconify-icon className="text-amber-500 text-sm" icon="solar:star-bold"></iconify-icon>
                    4.1 <span className="text-zinc-400 font-normal">(644 reviews)</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                    ৳200–400
                </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
                    Restaurant
                </div>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-3xl">
                Experience the authentic taste of Narayanganj.
            </h1>
<p className="text-base sm:text-lg text-zinc-500 max-w-2xl mb-10 leading-relaxed">
                Whether you're looking for a comfortable dine-in experience, a quick drive-through, or convenient no-contact delivery, Chabaw is here to serve you quality food.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="https://foodpanda.com.bd" target="_blank">
<iconify-icon className="text-lg" icon="solar:scooter-linear" strokeWidth="1.5"></iconify-icon>
                    Place an order on Foodpanda
                </a>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-50 transition-all shadow-sm">
<iconify-icon className="text-lg" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
                    Get Directions
                </button>
</div>
</section>

<section className="py-12 bg-white border-y border-zinc-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Service Options</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Dine-in
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Drive-through
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> No-contact delivery
                            </li>
</ul>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Operating Hours</h3>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2 font-medium text-emerald-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                    Open Now
                                </span>
</div>
<p className="text-sm text-zinc-500 mt-2">Closes at 10:30 PM</p>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Pricing Details</h3>
</div>
<div className="flex flex-col gap-2">
<p className="text-sm text-zinc-900 font-medium">৳200–400 <span className="text-zinc-500 font-normal">per person</span></p>
<div className="flex items-start gap-2 mt-2 pt-4 border-t border-zinc-200/60">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs text-zinc-500 leading-relaxed">Reported by 75 people</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="flex flex-col">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Location &amp; Contact</h2>
<div className="flex flex-col gap-8">

<div className="flex gap-4 group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-1">
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Address</h4>
<p className="text-sm text-zinc-600">Octo office, Narayanganj 1400</p>
<div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-100 rounded text-xs font-mono text-zinc-500 w-fit">
<iconify-icon icon="solar:qr-code-linear" strokeWidth="1.5"></iconify-icon>
                                    JFGR+8W Narayanganj
                                </div>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-1">
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Phone</h4>
<a className="text-sm text-zinc-600 hover:text-zinc-900 hover:underline underline-offset-4 transition-all" href="tel:01961666601">
                                    01961-666601
                                </a>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col pt-1">
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Social</h4>
<a className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 w-fit group/link" href="https://facebook.com" target="_blank">
                                    facebook.com
                                    <iconify-icon className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-zinc-200">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon> Directions
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5"></iconify-icon> Save
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> Nearby
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<iconify-icon icon="solar:smartphone-2-linear" strokeWidth="1.5"></iconify-icon> Send to phone
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5"></iconify-icon> Share
                        </button>
</div>
</div>

<div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden group flex items-center justify-center">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 flex flex-col items-center">
<div className="h-14 w-14 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-zinc-900/20 group-hover:-translate-y-2 transition-transform duration-300 ease-out cursor-pointer relative z-20">
<iconify-icon className="text-2xl" icon="solar:map-point-bold"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-900/20 rounded-full animate-ping z-10"></div>
<div className="mt-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-sm border border-zinc-200/50 flex flex-col items-center gap-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="text-xs font-semibold text-zinc-900">Octo office</span>
<span className="text-[10px] text-zinc-500">Narayanganj 1400</span>
</div>
</div>

<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<div className="w-8 h-8 bg-white border border-zinc-200 rounded-lg shadow-sm flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
<div className="w-8 h-8 bg-white border border-zinc-200 rounded-lg shadow-sm flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 py-10 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="tracking-tighter font-semibold text-base text-zinc-900">CHABAW</span>
<span className="text-zinc-300">|</span>
<span className="text-xs text-zinc-500">© 2024. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-xs text-zinc-500 font-medium">
<a className="flex items-center gap-1 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:history-linear"></iconify-icon> Maps History
                </a>
<a className="flex items-center gap-1 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:tag-linear"></iconify-icon> Add Label
                </a>
</div>
</div>
</footer>

    </>
  );
}
