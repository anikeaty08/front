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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e167011f-634b-4a2a-adfe-a8932d564995_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="bg-blue-700 text-white border-b border-blue-800">
<div className="container mx-auto px-4 py-1.5 flex justify-between items-center text-xs font-medium">
<div className="flex items-center gap-4">
<a className="hover:text-blue-200 transition-colors" href="#">Become a Seller</a>
<a className="hover:text-blue-200 transition-colors" href="#">24x7 Customer Care</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
<span>Deliver to: Select Cantonment</span>
</div>
</div>
</div>

<header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
<div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">

<div className="flex items-center justify-between w-full sm:w-auto gap-4">
<a className="text-2xl font-semibold tracking-tighter italic pr-4" href="#">CSD</a>

<div className="flex items-center gap-4 sm:hidden">
<button className="hover:text-slate-200">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
<button className="relative hover:text-slate-200">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-yellow-400 text-slate-900 text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">2</span>
</button>
</div>
</div>

<div className="w-full sm:flex-1 max-w-3xl relative">
<input className="w-full pl-4 pr-12 py-2.5 rounded-sm text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-shadow" placeholder="Search for groceries, electronics, tactical gear and more" type="text"/>
<button className="absolute right-0 top-0 h-full px-3 text-blue-600 hover:text-blue-800 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
</div>

<div className="hidden sm:flex items-center gap-8 text-sm font-medium">
<button className="bg-white text-blue-600 px-8 py-1.5 rounded-sm hover:bg-slate-50 transition-colors shadow-sm">Login</button>
<button className="flex items-center gap-2 hover:text-slate-200 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
<span>Cart</span>
<span className="absolute -top-2 -right-3 bg-yellow-400 text-slate-900 text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>

<nav className="bg-white shadow-sm mb-4">
<div className="container mx-auto px-4 py-3">
<ul className="flex items-center justify-between overflow-x-auto gap-6 sm:gap-8 pb-2 sm:pb-0" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<li className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue-600 shrink-0 text-slate-700 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Groceries</span>
</li>
<li className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue-600 shrink-0 text-slate-700 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:devices-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Electronics</span>
</li>
<li className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue-600 shrink-0 text-slate-700 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hanger-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Uniforms</span>
</li>
<li className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue-600 shrink-0 text-slate-700 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:wineglass-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Liquor</span>
</li>
<li className="flex flex-col cursor-pointer hover:text-blue-600 shrink-0 transition-colors text-slate-700 gap-x-1.5 gap-y-1.5 items-center">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Home &amp; Kitchen</span>
</li>
<li className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue-600 shrink-0 text-slate-700 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Tactical Gear</span>
</li>
<li className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue-600 shrink-0 text-slate-700 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:wheel-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Automotive</span>
</li>
</ul>
</div>
</nav>

<main className="container mx-auto px-4 pb-12">

<div className="bg-white rounded-sm shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden border border-blue-100">
<div className="z-10 relative md:w-1/2">
<span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-sm mb-3">FESTIVE SALE</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3 leading-tight">Exclusive Canteen Discounts up to 60% Off</h2>
<p className="text-slate-600 mb-6 text-sm">Special pricing for Armed Forces Personnel on top brands across all categories.</p>
<button className="bg-blue-600 text-white px-8 py-2.5 rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">Shop Now</button>
</div>
<div className="mt-6 md:mt-0 relative z-10 flex items-center justify-center">
<iconify-icon className="text-[140px] text-blue-500 drop-shadow-lg opacity-90" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
</div>

<section className="bg-white p-4 sm:p-6 rounded-sm shadow-sm mb-6 border border-slate-200">
<div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Daily Essentials</h3>
<button className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white">
<div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10 shadow-sm">15% OFF</div>
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:jar-of-pills-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Groceries</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Premium Assorted Dry Fruits Pack, 500g</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.5 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(1,245)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹450</span>
<span className="text-xs text-slate-500 line-through">₹530</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white">
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Beverages</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Classic Instant Coffee, 200g Jar</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.2 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(890)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹280</span>
<span className="text-xs text-slate-500 line-through">₹310</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white">
<div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10 shadow-sm">5% OFF</div>
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:bag-3-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Staples</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Premium Basmati Rice, 5kg Pack</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.8 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(3,102)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹499</span>
<span className="text-xs text-slate-500 line-through">₹525</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white hidden sm:flex">
<div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10 shadow-sm">20% OFF</div>
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:bath-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Personal Care</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Antibacterial Bath Soap, Pack of 4</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.1 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(450)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹120</span>
<span className="text-xs text-slate-500 line-through">₹150</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white hidden lg:flex">
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:bottle-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Home Care</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Multi-purpose Surface Cleaner, 1L</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.3 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(210)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹85</span>
<span className="text-xs text-slate-500 line-through">₹95</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white p-4 sm:p-6 rounded-sm shadow-sm border border-slate-200">
<div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Tactical Gear &amp; Uniforms</h3>
<button className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white">
<div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10 shadow-sm">30% OFF</div>
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:boots-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Footwear</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Heavy Duty Tactical Combat Boots, Olive</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.7 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(8,432)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹1,450</span>
<span className="text-xs text-slate-500 line-through">₹2,100</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white">
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:backpack-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Gear</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">50L Rucksack Military Grade Backpack</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.6 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(2,150)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹890</span>
<span className="text-xs text-slate-500 line-through">₹1,200</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white">
<div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10 shadow-sm">10% OFF</div>
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:watch-square-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Accessories</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Rugged Digital Sport Watch, Water Resistant</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.4 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(1,120)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹650</span>
<span className="text-xs text-slate-500 line-through">₹720</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white hidden sm:flex">
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:t-shirt-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Clothing</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">Cotton Crew Neck T-Shirt, Olive Green (Pack of 2)</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.2 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(340)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹350</span>
<span className="text-xs text-slate-500 line-through">₹400</span>
</div>
</div>
</div>

<div className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-3 border border-slate-100 hover:border-slate-300 rounded-sm relative flex flex-col h-full bg-white hidden lg:flex">
<div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10 shadow-sm">40% OFF</div>
<button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 z-10 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="aspect-square bg-slate-50 mb-4 flex items-center justify-center relative overflow-hidden rounded-sm">
<iconify-icon className="text-6xl text-slate-400 group-hover:scale-110 transition-transform duration-500" icon="solar:flash-drive-linear"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1 flex flex-col">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Electronics</p>
<h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">High Speed USB 3.0 Pen Drive, 64GB</h4>
<div className="flex items-center gap-1.5 mt-auto pt-2">
<span className="bg-green-600 text-white px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 text-xs font-medium">
                                4.5 <iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-slate-400 text-xs">(5,600)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-lg font-semibold text-slate-900 tracking-tight">₹299</span>
<span className="text-xs text-slate-500 line-through">₹500</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter italic text-white pr-2 border-r border-slate-700">CSD</span>
<span>© 2023 Canteen Stores Department. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
