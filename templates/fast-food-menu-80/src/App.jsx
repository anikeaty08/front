import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

<div className="flex items-center gap-2">
<a className="flex items-center gap-1" href="#">
<span className="text-xl font-semibold tracking-tighter text-gray-900">FriChiks</span>
<span className="rounded bg-orange-50 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-orange-600">Fortress</span>
</a>
</div>

<div className="hidden max-w-md flex-1 px-8 md:block">
<div className="group relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400 group-focus-within:text-gray-600" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-100 placeholder:text-gray-400" placeholder="Search for burgers, pizza..." type="text"/>
<div className="absolute right-2 flex items-center rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-gray-400 border border-gray-100 shadow-sm">⌘K</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="hidden flex-col items-end sm:flex">
<span className="text-xs font-medium text-gray-900">Delivery (Now)</span>
<span className="text-[10px] text-gray-400">30-45 min</span>
</div>
<button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
<span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white">2</span>
</button>
<button className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-gray-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="border-b border-gray-200 bg-white px-4 py-3 md:hidden">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-gray-300" placeholder="Search menu..." type="text"/>
</div>
</div>
<main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

<header className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:items-end">
<div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">Menu</h1>
<p className="mt-2 text-sm text-gray-500">Discover the best fried chicken and pizza in Lahore.</p>
</div>
<div className="flex items-center gap-2">
<button className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-gray-300 hover:bg-gray-50">
<iconify-icon icon="solar:sort-vertical-linear" width="16"></iconify-icon>
<span>Filter</span>
</button>
<button className="group flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800">
<span>Popular</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<section className="mb-16">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Browse by categories</h2>
<div className="flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 hover:bg-gray-50">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-orange-600">Chiky Jr. Meals</h3>
<p className="text-xs text-gray-400">2 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-green-600">New Arrivals</h3>
<p className="text-xs text-gray-400">8 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600">Family Feasts</h3>
<p className="text-xs text-gray-400">4 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-yellow-600">Family Favourites</h3>
<p className="text-xs text-gray-400">3 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Pizza</h3>
<p className="text-xs text-gray-400">14 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Discounted Deals</h3>
<p className="text-xs text-gray-400">5 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="solar:hamburger-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-orange-600">Burgers &amp; Combo</h3>
<p className="text-xs text-gray-400">5 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Meal Box</h3>
<p className="text-xs text-gray-400">4 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-rose-600">Super Value</h3>
<p className="text-xs text-gray-400">8 items</p>
</div>
</a>
<a className="group flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm" href="#">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-amber-600">Chicken Snacks</h3>
<p className="text-xs text-gray-400">10 items</p>
</div>
</a>
</div>
</section>

<section className="mb-16">
<div className="mb-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Best Seller</h2>
<p className="mt-1 text-sm text-gray-500">Most ordered products by our customers.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">

<img alt="Crown Crust Pizza" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-900 backdrop-blur-sm shadow-sm">Hot</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Crown Crust Pizza</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 1450</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Thrilling Thursday" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Thrilling Thursday</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 2400</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Supreme Deal" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Supreme Deal</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 2190</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Scrumptious Deal" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Scrumptious Deal</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 1770</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Crispy Perfection" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Crispy Perfection</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 1120</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Family Feasts 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Family Feasts 1</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 1650</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Royal Deal" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Royal Deal</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 3250</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg">
<div className="aspect-square w-full bg-gray-100 relative">
<img alt="Fish Burger" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="font-medium text-gray-900">Fish Burger</h3>
<div className="mt-auto flex items-center justify-between pt-4">
<span className="text-sm font-semibold text-gray-900">Rs. 599</span>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16">
<div className="mb-6 flex items-end justify-between">
<div>
<h2 className="text-xl font-medium tracking-tight text-gray-900">Recommended</h2>
<p className="mt-1 text-sm text-gray-500">See recommended food by Frichiks.</p>
</div>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Meal Box 1</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">1 Karizma Burger, 1 Pc Chiken, 1 Reg Fries &amp; Regular Soft Drink</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">Rs. 920</span>
<span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">Popular</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Meal Box" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Hot Wings + Drink</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">6 Hot Wings + 1 Reg Drink</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 550</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Wings" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Karizma Burger</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">Crispy Chicken fried thighs with mayonese and lettuce</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 520</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Karizma Burger" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Chicken Macaroni Pasta</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">Creamy chicken pasta with special herbs.</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 799</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Pasta" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Cheese Stick Platter</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">4 Cheese Sticks + Fries + 5 Grilled wings + Reg Drink</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 1350</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Platter" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Family Feasts 4</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">2 karizma burgers +2Pcs Chiken 1 Large Fries + 2 Reg drinks</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 1650</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Feast" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Malai Boti Pizza</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">ButterCream Sauce, Malai Chicken boti, jalapeno, mushroom</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 690</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Malai Boti" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Loaded Fries</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">Fries topped with cheese sauce, jalapenos and chicken chunks.</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 650</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Fries" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-md">
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Twin Tuesday</h3>
<p className="mt-1 text-xs leading-relaxed text-gray-500">2 Medium Pizzas, Only available on Thursdays.</p>
<div className="mt-3">
<span className="text-sm font-semibold text-gray-900">Rs. 2050</span>
</div>
</div>
<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
<img alt="Pizza" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition hover:bg-gray-100">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-gray-200 bg-white pb-10 pt-16">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="grid grid-cols-1 gap-10 md:grid-cols-4">
<div className="md:col-span-2">
<a className="mb-4 block text-xl font-semibold tracking-tighter text-gray-900" href="#">FriChiks</a>
<p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">Ordering made easy! Enjoy the best fast food in Lahore, delivered straight to your doorstep.</p>
<div className="flex gap-4">
<a className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:border-gray-900 hover:text-gray-900" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:border-gray-900 hover:text-gray-900" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="mb-4 text-sm font-semibold text-gray-900">Contact</h3>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>FriChiks Fortress, Lahore</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>04236689121</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-gray-900" href="mailto:info@frichiks.pk">info@frichiks.pk</a>
</li>
</ul>
</div>
<div>
<h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-gray-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-gray-900" href="#">User Data Deletion</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
<p className="text-xs text-gray-400">© 2024 Frichiksfortress.pk All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-gray-400">
<span>Developed by:</span>
<a className="font-medium text-gray-600 hover:underline" href="http://www.foodtocart.com">www.foodtocart.com</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
