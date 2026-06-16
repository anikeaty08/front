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
      
<div className="min-h-screen w-full flex flex-col items-center justify-start py-6">
<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-6 flex items-center justify-between">
<div>
<div className="text-xs uppercase tracking-[0.2em] text-stone-500">Mobile App UI</div>
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-stone-900 mt-1">Coffee &amp; Snacks Experience</h1>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-full bg-white/90 shadow-sm ring-1 ring-stone-200 px-4 py-2">
<span className="text-sm font-medium text-stone-700">MLKBRW</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">

<section className="rounded-[2rem] bg-[#f7f1ea] shadow-[0_20px_50px_rgba(120,86,52,0.10)] ring-1 ring-[#eadfce] overflow-hidden max-w-sm mx-auto w-full">
<div className="bg-[#f7f1ea] px-5 pt-5 pb-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-stone-500">Good morning</div>
<div className="text-lg font-semibold text-stone-900">Ready for your coffee?</div>
</div>
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="22" icon="solar:bag-3-linear" style={{color: '#6b5b4d'}} width="22"></iconify-icon>
</div>
</div>
</div>
<div className="px-5">
<div className="rounded-[1.5rem] overflow-hidden bg-[#5f4332] relative">
<img alt="Coffee and snacks" className="h-48 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#4b3427]/85 via-[#4b3427]/45 to-transparent"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">Fresh today</span>
</div>
<div>
<h2 className="text-2xl tracking-tight font-semibold text-white leading-tight">Milk coffee and quick bites for busy days</h2>
<p className="text-sm text-white/85 mt-2 max-w-[14rem]">Fast pickup, warm flavors, and easy ordering in seconds.</p>
<button className="mt-4 w-full rounded-full bg-[#f5e4cf] text-[#5a3f2f] text-sm font-semibold py-3 shadow-sm">Quick Order</button>
</div>
</div>
</div>
</div>
<div className="px-5 pt-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-stone-900">Categories</h3>
<span className="text-xs text-stone-500">Swipe</span>
</div>
<div className="grid grid-cols-5 gap-3">
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 flex items-center justify-center">
<iconify-icon height="22" icon="solar:cup-hot-linear" style={{color: '#6c4a36'}} width="22"></iconify-icon>
</div>
<span className="text-xs text-center text-stone-600">Coffee</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 flex items-center justify-center">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" style={{color: '#6c4a36'}} width="22"></iconify-icon>
</div>
<span className="text-xs text-center text-stone-600">Sandwich</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 flex items-center justify-center">
<iconify-icon height="22" icon="solar:donut-linear" style={{color: '#6c4a36'}} width="22"></iconify-icon>
</div>
<span className="text-xs text-center text-stone-600">Rolls</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 flex items-center justify-center">
<iconify-icon height="22" icon="solar:cake-linear" style={{color: '#6c4a36'}} width="22"></iconify-icon>
</div>
<span className="text-xs text-center text-stone-600">Pastry</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 flex items-center justify-center">
<iconify-icon height="22" icon="solar:box-linear" style={{color: '#6c4a36'}} width="22"></iconify-icon>
</div>
<span className="text-xs text-center text-stone-600">Snacks</span>
</div>
</div>
</div>
<div className="px-5 pt-5 pb-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-stone-900">Featured</h3>
<span className="text-xs text-stone-500">See all</span>
</div>
<div className="space-y-3">
<div className="rounded-[1.25rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 flex gap-3">
<img alt="Latte" className="h-20 w-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<div>
<h4 className="text-sm font-semibold text-stone-900">Creamy Latte</h4>
<p className="text-xs text-stone-500 mt-1">Silky milk, rich espresso</p>
</div>
<span className="text-sm font-semibold text-[#6c4a36]">$4.80</span>
</div>
<button className="mt-3 rounded-full bg-stone-900 text-white text-xs font-medium px-4 py-2">Add to Cart</button>
</div>
</div>
<div className="rounded-[1.25rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 flex gap-3">
<img alt="Sandwich" className="h-20 w-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<div>
<h4 className="text-sm font-semibold text-stone-900">Ham Sandwich</h4>
<p className="text-xs text-stone-500 mt-1">Toasted, easy to carry</p>
</div>
<span className="text-sm font-semibold text-[#6c4a36]">$5.20</span>
</div>
<button className="mt-3 rounded-full bg-[#efe5d8] text-[#6c4a36] text-xs font-medium px-4 py-2">Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="border-t border-[#eadfce] bg-[#fbf7f2] px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex flex-col items-center gap-1 text-[#6c4a36]">
<iconify-icon height="20" icon="solar:home-2-linear" style={{color: '#6c4a36'}} width="20"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:widget-5-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Browse</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:bag-4-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Cart</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:user-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Profile</span>
</div>
</div>
</div>
</section>

<section className="rounded-[2rem] bg-[#fcfaf7] shadow-[0_20px_50px_rgba(120,86,52,0.08)] ring-1 ring-[#eee4d8] overflow-hidden max-w-sm mx-auto w-full">
<div className="px-5 pt-5 pb-4">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="20" icon="solar:arrow-left-linear" style={{color: '#6b5b4d'}} width="20"></iconify-icon>
</div>
<h2 className="text-base font-semibold text-stone-900">Browse Menu</h2>
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="20" icon="solar:tuning-2-linear" style={{color: '#6b5b4d'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 rounded-full bg-white ring-1 ring-stone-200 flex items-center gap-3 px-4 py-3 shadow-sm">
<iconify-icon height="18" icon="solar:magnifer-linear" style={{color: '#a8a29e'}} width="18"></iconify-icon>
<span className="text-sm text-stone-400">Search coffee or snacks</span>
</div>
<div className="mt-4 flex gap-2 overflow-x-auto pb-1">
<button className="shrink-0 rounded-full bg-stone-900 text-white text-xs font-medium px-4 py-2.5">All</button>
<button className="shrink-0 rounded-full bg-[#efe5d8] text-[#6c4a36] text-xs font-medium px-4 py-2.5">Coffee</button>
<button className="shrink-0 rounded-full bg-white text-stone-600 text-xs font-medium px-4 py-2.5 ring-1 ring-stone-200">Sandwiches</button>
<button className="shrink-0 rounded-full bg-white text-stone-600 text-xs font-medium px-4 py-2.5 ring-1 ring-stone-200">Pastries</button>
<button className="shrink-0 rounded-full bg-white text-stone-600 text-xs font-medium px-4 py-2.5 ring-1 ring-stone-200">Snacks</button>
</div>
</div>
<div className="px-5 pb-6">
<div className="grid grid-cols-2 gap-3">
<div className="rounded-[1.4rem] bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden">
<img alt="Cappuccino" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-semibold text-stone-900 leading-snug">Cappuccino</h3>
<span className="text-sm font-semibold text-[#6c4a36]">$4.60</span>
</div>
<p className="text-xs text-stone-500 mt-1">Foamy, smooth, balanced milk coffee</p>
<button className="mt-3 w-full rounded-full bg-stone-900 text-white text-xs font-medium py-2.5">Add to Cart</button>
</div>
</div>
<div className="rounded-[1.4rem] bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden">
<img alt="Latte" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-semibold text-stone-900 leading-snug">Vanilla Latte</h3>
<span className="text-sm font-semibold text-[#6c4a36]">$5.10</span>
</div>
<p className="text-xs text-stone-500 mt-1">Sweet vanilla with creamy steamed milk</p>
<button className="mt-3 w-full rounded-full bg-[#efe5d8] text-[#6c4a36] text-xs font-medium py-2.5">Add to Cart</button>
</div>
</div>
<div className="rounded-[1.4rem] bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden">
<img alt="Croissant sandwich" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-semibold text-stone-900 leading-snug">Egg Sandwich</h3>
<span className="text-sm font-semibold text-[#6c4a36]">$5.40</span>
</div>
<p className="text-xs text-stone-500 mt-1">Soft, filling, made for quick mornings</p>
<button className="mt-3 w-full rounded-full bg-stone-900 text-white text-xs font-medium py-2.5">Add to Cart</button>
</div>
</div>
<div className="rounded-[1.4rem] bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden">
<img alt="Pastry" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-semibold text-stone-900 leading-snug">Butter Roll</h3>
<span className="text-sm font-semibold text-[#6c4a36]">$3.20</span>
</div>
<p className="text-xs text-stone-500 mt-1">Flaky and light with a warm buttery bite</p>
<button className="mt-3 w-full rounded-full bg-[#efe5d8] text-[#6c4a36] text-xs font-medium py-2.5">Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="border-t border-[#eee4d8] bg-[#fffdfa] px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:home-2-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#6c4a36]">
<iconify-icon height="20" icon="solar:widget-5-linear" style={{color: '#6c4a36'}} width="20"></iconify-icon>
<span className="text-xs font-medium">Browse</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:bag-4-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Cart</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:user-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Profile</span>
</div>
</div>
</div>
</section>

<section className="rounded-[2rem] bg-[#f8f3ec] shadow-[0_20px_50px_rgba(120,86,52,0.09)] ring-1 ring-[#eadfce] overflow-hidden max-w-sm mx-auto w-full">
<div className="px-5 pt-5 pb-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-stone-500">Fastest way</div>
<h2 className="text-xl tracking-tight font-semibold text-stone-900">Quick Order</h2>
</div>
<div className="h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="21" icon="solar:history-linear" style={{color: '#6b5b4d'}} width="21"></iconify-icon>
</div>
</div>
</div>
<div className="px-5">
<div className="rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-stone-200">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-stone-500">Popular combo</div>
<div className="text-base font-semibold text-stone-900 mt-1">Latte + Ham Sandwich</div>
</div>
<span className="rounded-full bg-[#f4e6d4] px-3 py-1 text-xs font-medium text-[#6c4a36]">Save 12%</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-2xl overflow-hidden bg-stone-100">
<img alt="Latte" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden bg-stone-100">
<img alt="Sandwich" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="flex-1 rounded-2xl bg-[#fcfaf7] ring-1 ring-stone-200 p-3">
<div className="text-xs text-stone-500">Pickup</div>
<div className="text-sm font-medium text-stone-900 mt-1">Ready in 8 min</div>
</div>
<div className="flex-1 rounded-2xl bg-[#fcfaf7] ring-1 ring-stone-200 p-3">
<div className="text-xs text-stone-500">Total</div>
<div className="text-sm font-medium text-stone-900 mt-1">$8.90</div>
</div>
</div>
</div>
</div>
<div className="px-5 pt-5">
<h3 className="text-sm font-semibold text-stone-900 mb-3">Select quantity</h3>
<div className="rounded-[1.4rem] bg-white p-4 shadow-sm ring-1 ring-stone-200 flex items-center justify-between">
<div>
<div className="text-sm font-semibold text-stone-900">Repeat last order</div>
<div className="text-xs text-stone-500 mt-1">1 latte, 1 sandwich</div>
</div>
<div className="flex items-center gap-3">
<button className="h-9 w-9 rounded-full bg-[#f3ede6] text-[#6c4a36] flex items-center justify-center">
<iconify-icon height="18" icon="solar:minus-linear" style={{color: '#6c4a36'}} width="18"></iconify-icon>
</button>
<span className="text-sm font-semibold text-stone-900">1</span>
<button className="h-9 w-9 rounded-full bg-stone-900 text-white flex items-center justify-center">
<iconify-icon height="18" icon="solar:add-linear" style={{color: 'white'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="px-5 pt-5 pb-6">
<h3 className="text-sm font-semibold text-stone-900 mb-3">Popular picks</h3>
<div className="space-y-3">
<div className="rounded-[1.25rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 flex items-center gap-3">
<img alt="Milk coffee" className="h-16 w-16 rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1">
<div className="text-sm font-semibold text-stone-900">Milk Coffee</div>
<div className="text-xs text-stone-500 mt-1">Best for a quick caffeine stop</div>
</div>
<button className="rounded-full bg-[#efe5d8] text-[#6c4a36] text-xs font-medium px-4 py-2">Select</button>
</div>
<div className="rounded-[1.25rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 flex items-center gap-3">
<img alt="Coffee and chips" className="h-16 w-16 rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1">
<div className="text-sm font-semibold text-stone-900">Coffee + Chips</div>
<div className="text-xs text-stone-500 mt-1">Crunchy, salty, grab-and-go combo</div>
</div>
<button className="rounded-full bg-stone-900 text-white text-xs font-medium px-4 py-2">Select</button>
</div>
</div>
<button className="mt-5 w-full rounded-full bg-[#6c4a36] text-white text-sm font-semibold py-3.5 shadow-[0_12px_30px_rgba(108,74,54,0.25)]">Order in 1 Tap</button>
</div>
<div className="border-t border-[#eadfce] bg-[#fbf7f2] px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:home-2-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:widget-5-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Browse</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#6c4a36]">
<iconify-icon height="20" icon="solar:flash-circle-linear" style={{color: '#6c4a36'}} width="20"></iconify-icon>
<span className="text-xs font-medium">Quick</span>
</div>
<div className="flex flex-col items-center gap-1 text-stone-400">
<iconify-icon height="20" icon="solar:bag-4-linear" style={{color: '#a8a29e'}} width="20"></iconify-icon>
<span className="text-xs">Cart</span>
</div>
</div>
</div>
</section>

<section className="rounded-[2rem] bg-[#fffdfa] shadow-[0_20px_50px_rgba(120,86,52,0.08)] ring-1 ring-[#eee4d8] overflow-hidden max-w-sm mx-auto w-full">
<div className="px-5 pt-5 pb-4">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="20" icon="solar:arrow-left-linear" style={{color: '#6b5b4d'}} width="20"></iconify-icon>
</div>
<h2 className="text-base font-semibold text-stone-900">Your Cart</h2>
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="20" icon="solar:trash-bin-trash-linear" style={{color: '#6b5b4d'}} width="20"></iconify-icon>
</div>
</div>
</div>
<div className="px-5 pb-5 space-y-3">
<div className="rounded-[1.4rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 flex gap-3">
<img alt="Latte" className="h-20 w-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="text-sm font-semibold text-stone-900">Creamy Latte</h3>
<p className="text-xs text-stone-500 mt-1">Regular size</p>
</div>
<span className="text-sm font-semibold text-[#6c4a36]">$4.80</span>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs text-stone-500">Edit</button>
<div className="flex items-center gap-3">
<button className="h-8 w-8 rounded-full bg-[#f3ede6] flex items-center justify-center">
<iconify-icon height="16" icon="solar:minus-linear" style={{color: '#6c4a36'}} width="16"></iconify-icon>
</button>
<span className="text-sm font-semibold text-stone-900">1</span>
<button className="h-8 w-8 rounded-full bg-stone-900 flex items-center justify-center">
<iconify-icon height="16" icon="solar:add-linear" style={{color: 'white'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="rounded-[1.4rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 flex gap-3">
<img alt="Sandwich" className="h-20 w-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="text-sm font-semibold text-stone-900">Ham Sandwich</h3>
<p className="text-xs text-stone-500 mt-1">Toasted</p>
</div>
<span className="text-sm font-semibold text-[#6c4a36]">$5.20</span>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs text-stone-500">Edit</button>
<div className="flex items-center gap-3">
<button className="h-8 w-8 rounded-full bg-[#f3ede6] flex items-center justify-center">
<iconify-icon height="16" icon="solar:minus-linear" style={{color: '#6c4a36'}} width="16"></iconify-icon>
</button>
<span className="text-sm font-semibold text-stone-900">1</span>
<button className="h-8 w-8 rounded-full bg-stone-900 flex items-center justify-center">
<iconify-icon height="16" icon="solar:add-linear" style={{color: 'white'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="rounded-[1.5rem] bg-[#f7f1ea] p-4 ring-1 ring-[#eadfce]">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold text-stone-900">Pickup today</div>
<div className="text-xs text-stone-500 mt-1">Ready in 10–12 min</div>
</div>
<div className="h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-stone-200">
<iconify-icon height="20" icon="solar:clock-circle-linear" style={{color: '#6b5b4d'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-auto border-t border-[#eee4d8] bg-white px-5 py-5">
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-stone-500">Subtotal</span>
<span className="font-medium text-stone-900">$10.00</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-stone-500">Pickup fee</span>
<span className="font-medium text-stone-900">$0.00</span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="text-base font-semibold text-stone-900">Total</span>
<span className="text-xl tracking-tight font-semibold text-[#6c4a36]">$10.00</span>
</div>
</div>
<button className="mt-5 w-full rounded-full bg-stone-900 text-white text-sm font-semibold py-3.5 shadow-[0_14px_30px_rgba(28,25,23,0.18)]">Checkout</button>
</div>
</section>
</div>
</div>
</div>

    </>
  );
}
