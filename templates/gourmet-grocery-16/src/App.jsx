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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-6">

<div className="flex-shrink-0 flex items-center">
<a className="flex flex-col" href="#">
<span className="text-xl tracking-tighter font-semibold uppercase text-slate-900 leading-none">WCP</span>
</a>
</div>

<div className="flex-1 max-w-2xl hidden md:flex items-center bg-gray-100 rounded-full px-5 py-3 transition-all hover:bg-gray-200/80 focus-within:bg-gray-100 focus-within:ring-2 focus-within:ring-emerald-500">
<iconify-icon className="w-6 h-6 text-gray-500 mr-3" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="bg-transparent border-none outline-none w-full text-base text-slate-900 placeholder-gray-500" placeholder="Search groceries, wine, gifts..." type="text"/>
</div>

<div className="flex items-center space-x-6">
<button className="md:hidden text-slate-700 hover:text-emerald-500 transition-colors">
<iconify-icon className="w-7 h-7" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-slate-700 hover:text-emerald-500 transition-colors flex items-center gap-2">
<iconify-icon className="w-7 h-7" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden md:inline text-base font-medium">Log in</span>
</button>
<button className="bg-emerald-500 text-white rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-emerald-600 transition-colors shadow-sm">
<iconify-icon className="w-6 h-6" icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium">0</span>
</button>
</div>
</div>
</header>

<div className="md:hidden bg-white px-4 py-3 border-b border-gray-100">
<div className="flex items-center bg-gray-100 rounded-full px-5 py-3">
<iconify-icon className="w-6 h-6 text-gray-500 mr-3" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="bg-transparent border-none outline-none w-full text-base text-slate-900 placeholder-gray-500" placeholder="Search store..." type="text"/>
</div>
</div>

<nav className="bg-white sticky top-20 z-40 pb-2 pt-4">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<ul className="flex space-x-3 overflow-x-auto py-2" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<li><a className="whitespace-nowrap text-sm font-medium bg-emerald-500 text-white px-5 py-2.5 rounded-full shadow-sm" href="#groceries">Local Groceries</a></li>
<li><a className="whitespace-nowrap text-sm font-medium bg-gray-100 text-slate-700 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors" href="#wine">Wine Selection</a></li>
<li><a className="whitespace-nowrap text-sm font-medium bg-gray-100 text-slate-700 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors" href="#grab-go">Grab &amp; Go</a></li>
<li><a className="whitespace-nowrap text-sm font-medium bg-gray-100 text-slate-700 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors" href="#gifts">Gifts &amp; Home</a></li>
</ul>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-8 w-full space-y-20">

<section className="relative rounded-[2rem] overflow-hidden bg-slate-900 h-72 md:h-96 flex items-center shadow-sm">
<img alt="Store interior" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent"></div>
<div className="relative z-10 px-8 md:px-16 max-w-2xl">
<span className="text-sm font-medium text-emerald-300 mb-3 block uppercase tracking-widest bg-emerald-900/30 w-fit px-3 py-1 rounded-full backdrop-blur-sm">Locally Owned</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-4">
                    Discover Bend's Best
                </h1>
<p className="text-lg text-emerald-50 font-normal mb-8 line-clamp-2 md:line-clamp-none max-w-md">
                    Curated selection of groceries, wine, beer, prepared foods, and unique home goods.
                </p>
<div className="flex items-center gap-2 text-slate-900 bg-white rounded-full px-5 py-3 w-fit shadow-lg hover:scale-105 transition-transform cursor-pointer">
<iconify-icon className="w-5 h-5 text-emerald-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">2735 NW Crossing Dr, Bend</span>
</div>
</div>
</section>

<section className="scroll-mt-32" id="groceries">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Local Groceries</h2>
<p className="text-base text-gray-500 font-normal mt-1">Fresh produce and artisanal pantry staples.</p>
</div>
<a className="text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full transition-colors hidden md:block" href="#">View all</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">

<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Artisan Bread" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$8.50</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Sourdough Loaf</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Locally baked daily</p>
</div>
</div>
<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Organic Milk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$6.00</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Organic Whole Milk</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Farm fresh, 1/2 Gallon</p>
</div>
</div>
<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Farm Eggs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$7.50</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Pasture Raised Eggs</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Dozen, Large</p>
</div>
</div>
<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Coffee Beans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$18.00</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">House Roast Coffee</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Whole bean, 12oz</p>
</div>
</div>
</div>
</section>

<section className="bg-emerald-50 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border-none shadow-sm">
<div className="p-10 md:p-16 flex flex-col justify-center md:w-1/2">
<span className="text-emerald-600 font-medium text-sm tracking-widest uppercase mb-3">Exclusive</span>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Join Our Wine Club
                </h2>
<p className="text-base text-gray-600 font-normal mb-8 leading-relaxed">
                    Explore lesser-known regions and discover new producers through members-only tastings and events. Curated by our expert sommeliers.
                </p>
<button className="bg-emerald-500 text-white font-medium text-base px-8 py-4 rounded-full w-fit hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg">
                    View Membership Options
                </button>
</div>
<div className="md:w-1/2 h-72 md:h-auto relative p-4 md:p-6">
<img alt="Wine selection" className="w-full h-full object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</section>

<section className="scroll-mt-32" id="grab-go">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Grab and Go</h2>
<p className="text-base text-gray-500 font-normal mt-1">Convenient, fresh selections for your busy schedule.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">

<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Salad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$12.00</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Kale &amp; Quinoa Bowl</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">House dressing</p>
</div>
</div>
<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Sandwich" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$14.50</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Turkey &amp; Brie Baguette</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Fig jam, arugula</p>
</div>
</div>
<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Kombucha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$5.00</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Local Kombucha</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Ginger Lemon</p>
</div>
</div>
<div className="group flex flex-col bg-transparent cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative mb-4">
<img alt="Cake slice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all">
<iconify-icon className="w-6 h-6" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-2 flex flex-col flex-grow">
<div className="font-semibold text-lg text-slate-900 mb-1">$6.50</div>
<h3 className="text-base font-medium text-slate-800 leading-snug">Carrot Cake Slice</h3>
<p className="text-sm text-gray-500 font-normal mt-0.5 line-clamp-1">Cream cheese frosting</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-50 text-slate-900 pt-16 pb-8 mt-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

<div>
<div className="mb-8">
<div className="flex flex-col text-slate-900">
<span className="text-xl tracking-tighter font-semibold uppercase leading-none">WCP</span>
<span className="text-xs tracking-widest font-medium uppercase mt-2 text-emerald-600">Bend, OR</span>
</div>
</div>
<ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-600">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Events</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Wine Club</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Blogs</a></li>
</ul>
</div>

<div className="flex flex-col justify-start md:items-end">
<p className="text-sm font-normal text-slate-500 mb-4 md:text-right max-w-sm">
                        Join our mailing list to get the latest updates on products and events.
                    </p>
<form className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
<input className="flex-grow px-5 py-3 rounded-full text-sm bg-white border border-gray-200 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="Email address" type="email"/>
<button className="bg-slate-900 text-white font-medium px-6 py-3 rounded-full hover:bg-emerald-500 transition-colors whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
<div className="flex space-x-5 mt-8 text-slate-400">
<a className="hover:text-emerald-500 transition-colors" href="#">
<iconify-icon className="w-6 h-6" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-emerald-500 transition-colors" href="#">
<iconify-icon className="w-6 h-6" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-normal text-slate-500">
<ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Accessibility</a></li>
</ul>
<p>© 2024 West Coast Provisions. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
