import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
300: '#86efac',
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
700: '#15803d',
800: '#166534',
900: '#14532d',
}
},
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('hidden-left');
            
            if (isOpen) {
                menu.classList.add('hidden-left');
                document.body.style.overflow = 'auto';
            } else {
                menu.classList.remove('hidden-left');
                document.body.style.overflow = 'hidden';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex md:h-20 h-16 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-2.5 group" href="#">
<div className="shadow-brand-200 group-hover:shadow-brand-300 transition-all duration-300 bg-center text-white bg-gradient-to-br from-brand-400 to-brand-600 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a54ea37b-736f-432b-a7d4-e96b1b8874f6_320w.png?w=800&amp;q=80)] bg-cover rounded-xl pt-2 pr-2 pb-2 pl-2 shadow-lg">
<iconify-icon className="" height="20" icon="solar:fire-bold-duotone" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<span className="group-hover:text-brand-600 transition-colors text-lg font-bold text-slate-900 tracking-tight">MNS Frozen Foods</span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#location">Location</a>
<div className="h-4 w-px bg-slate-200"></div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95 border border-transparent" href="tel:+919988554961">
<iconify-icon className="" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="">Order Now</span>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-brand-600 focus:outline-none p-2 bg-slate-50 rounded-lg" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-white hidden-left md:hidden shadow-2xl" id="mobile-menu">
<div className="flex flex-col h-full">
<div className="p-6 border-b border-slate-50 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="bg-brand-500 text-white p-1.5 rounded-lg">
<iconify-icon icon="solar:fire-bold" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900 tracking-tight">Da Sizzling Bite</span>
</div>
<button className="text-slate-400 hover:text-slate-900 p-2 bg-slate-50 rounded-full transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 group transition-colors" href="#menu" onclick="toggleMobileMenu()">
<span className="text-lg font-semibold text-slate-900">Our Menu</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 group transition-colors" href="#reviews" onclick="toggleMobileMenu()">
<span className="text-lg font-semibold text-slate-900">Reviews</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 group transition-colors" href="#location" onclick="toggleMobileMenu()">
<span className="text-lg font-semibold text-slate-900">Location</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="p-6 bg-slate-50 border-t border-slate-100">
<a className="w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform" href="tel:+919988554961">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                    Call +91 99885 54961
                </a>
</div>
</div>
</div>

<section className="md:pt-48 md:pb-32 overflow-hidden hero-gradient pt-32 pb-16 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="text-center lg:text-left space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm transition-transform hover:scale-105 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="uppercase text-xs font-semibold text-slate-600 tracking-wide">Open Daily till 12 PM</span>
</div>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance text-4xl font-bold text-slate-900 tracking-tighter">Quality Frozen<br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-400"> Foods You’ll Love</span></h1>
<p className="lg:mx-0 leading-relaxed text-lg font-medium text-slate-500 max-w-lg mr-auto ml-auto">Welcome to MNS Frozen Foods.We specialize in delivering freshly prepared, hygienically frozen, and ready-to-cook fried items that save your time without compromising on taste or quality.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white text-sm font-bold px-8 py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 hover:-translate-y-1 w-full sm:w-auto active:scale-95" href="#menu">
                            Check Menu
                            <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 text-sm font-bold px-8 py-4 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto active:scale-95" href="tel:+919988554961">
<iconify-icon className="" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                            Call Order
                        </a>
</div>

<div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-semibold">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="18"></iconify-icon>
<span className="text-slate-700">5.0 Rating</span>
</div>
<div className="hidden sm:block h-1 w-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:scooter-linear" width="18"></iconify-icon>
<span>Fast Delivery</span>
</div>
<div className="hidden sm:block h-1 w-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-2">
<iconify-icon className="" icon="solar:bag-check-linear" width="18"></iconify-icon>
<span>Takeaway Available</span>
</div>
</div>
</div>

<div className="relative mt-8 lg:mt-0 px-4 lg:px-0">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-200 to-teal-100 rounded-[2.5rem] blur-2xl opacity-40"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
<img alt="Delicious Pizza" className="transform transition-transform duration-1000 group-hover:scale-105 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93e5dc48-3726-4b84-949d-89d1c7936bb3_1600w.png?w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3">
<div className="bg-orange-50 text-orange-500 p-2 rounded-lg">
<iconify-icon icon="solar:fire-bold" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Top Selling</p>
<p className="text-sm font-bold text-slate-900">Chicken Bites</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-50 pt-16 pb-16">
<div className="sm:px-6 max-w-7xl px-4">
<div className="grid grid-cols-2 translate-x-2 gap-y-6 gap-x-6 md:grid-cols-4">

<div className="hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 group -translate-x-12 -translate-x-2 -translate-x-16 -translate-x-8 -translate-x-4 bg-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 translate-x-1 scale-95">
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-brand-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-1">Freshness</h3>
<p className="text-xs text-slate-500 font-medium">Hand-kneaded daily</p>
</div>


<div className="hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 group -translate-x-16 -translate-x-12 bg-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 translate-x-1 scale-95">
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-brand-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-1">Safe Packing</h3>
<p className="text-xs font-medium text-slate-500">Tamper proof boxes</p>
</div><div className="hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 group -translate-x-16 -translate-x-12 text-left bg-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative translate-x-16 scale-95">
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-brand-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="" height="24" icon="solar:wallet-outline" style={{color: 'rgb(22, 163, 74)'}} width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-1" style={{}}>Best Prices</h3>
<p className="text-xs font-medium text-slate-500">Pocket friendly</p>
</div>

</div>
</div>
</section>

<section className="bg-slate-50/50 pt-24 pb-24" id="menu">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-2 block">Our Kitchen Favorites</span>
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight mb-4">Premium Quality Frozen Fried Items</h2>
<p className="text-balance font-medium text-slate-500">Expertly prepared frozen snacks crafted with quality ingredients and authentic flavours.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">

<div className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Bestseller</span>
<img alt="Paneer 65 Pizza" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e75d2f53-1d59-4638-ac82-3e6199ddf486_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Chicken Bites</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.9</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy, perfectly seasoned chicken bites ready to cook and full of flavour.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900">320Rs (24 pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon className="" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<img alt="Farmhouse Pizza" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8203dce8-47e2-4206-ab5c-ade9a4c5c40a_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col pr-3 pb-3 pl-3">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Cutlets</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.7</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy chicken potato cutlets with riching flavour.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900">600Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<img alt="Farmhouse Pizza" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8687f00-cd0e-421e-b770-ad223cb33227_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col pr-3 pb-3 pl-3">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Chicken Samosas
</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.7</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy chicken-filled samosas, ready to fry and full of flavour.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900">700Rs (12pc)

</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<img alt="Farmhouse Pizza" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/870ad8cd-47f7-4239-8339-3c0878aa154f_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col pr-3 pb-3 pl-3">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900" style={{}}>Shami Kababs</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.7</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Soft, juicy chicken shami kababs made with a perfect blend of lentils and traditional spices.</p>
<div className="flex border-slate-50 border-t mt-auto pt-4 items-center justify-between">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900" style={{}}>700Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon className="" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<img alt="Farmhouse Pizza" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c247b35f-3732-44e8-a25a-d96e1a2ae805_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Chicken Donuts</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.7</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy donuts made from minced chicken, mixed with fresh chopped vegetables and flavoured spices.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900" style={{}}>600Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<img alt="Farmhouse Pizza" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17f1158c-b435-4ba2-b34d-2068856d2cfb_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900" style={{}}>Tandoori Samosas</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.7</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy samosa filled with flavourful tandoori chicken, blended with aromatic spices for a smoky, desi taste.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900">600Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
<img alt="Double Cheese" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85122713-ad97-4d5f-9cc7-d18db912d5f7_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col pr-3 pb-3 pl-3">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Chicken Pockets</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.8</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Soft bread pockets filled with juicy chicken and flavorful spices, perfect for a satisfying bite.</p>
<div className="flex border-slate-50 border-t mt-auto pt-4 items-center justify-between">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900" style={{}}>400Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon className="" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
<img alt="Double Cheese" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48ced55f-223d-484c-af1d-b49f41f73e54_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col pr-3 pb-3 pl-3">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Spring Rolls</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.8</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy rolls stuffed with fresh vegetables and tender chicken, seasoned for a delicious, crunchy bite.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900" style={{}}>500Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
<img alt="Double Cheese" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5522772-5f6b-4f43-9099-aa9daa50c5c5_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900" style={{}}>Mini Samosas</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.8</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy mini samosas filled with creamy malai boti, offering a rich and flavorful bite every time.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900" style={{}}>400Rs (12pc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon className="" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div><div className="group hover:shadow-xl transition-all duration-500 flex flex-col bg-white h-full border-slate-100 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
<img alt="Double Cheese" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac27f9a4-e0c1-4394-ba67-48b52a5492f0_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col pr-3 pb-3 pl-3">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-slate-900">Chinese Samosas</h3>
<div className="flex gap-0.5 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-700 font-bold ml-1">4.8</span>
</div>
</div>
<p className="leading-relaxed line-clamp-2 text-xs font-medium text-slate-500 mb-6">Crispy samosas filled with chicken,macroni and mixed vegetables, tossed in tangy Chinese flavours.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<div className="">
<p className="text-[10px] text-slate-400 font-bold uppercase">Starts at</p>
<p className="text-xl font-bold text-slate-900">450Rs (12oc)</p>
</div>
<button className="bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white p-3 rounded-xl transition-colors active:scale-95">
<iconify-icon className="" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center gap-2 hover:text-brand-600 transition-colors group text-sm font-bold text-slate-400" href="#">Complete Menu</a>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="reviews">
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Loved by MNS Food Lovers</h2>
<p className="font-medium text-slate-500">Don't just take our word for it. Here is what our clients in Karachi have to say.</p>
</div>
<div className="flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
<span className="text-3xl font-bold text-slate-900">4.9</span>
<div className="flex flex-col">
<div className="flex text-orange-400 text-sm gap-0.5">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Based on 500+ Orders</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-slate-50 rounded-[2rem] hover:bg-brand-50/30 transition-colors cursor-default">
<div className="flex text-orange-400 text-xs mb-6 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed font-medium text-slate-700 mb-8">“Mein in frozen items ki quality say bohat impressed hoon. Fry kay baad bhi taste fresh rehta hai aur bilkul homemade feel deta hai.”</p>
<div className="flex items-center gap-3">
<div className="flex text-xs font-bold text-white bg-gradient-to-tr from-blue-400 to-blue-600 w-10 h-10 rounded-full items-center justify-center">FA</div>
<div className="">
<p className="text-sm font-bold text-slate-900">Fareed Ahmed</p>
<p className="text-xs font-medium text-slate-400">North Karachi</p>
</div>
</div>
</div>

<div className="hover:bg-brand-50/30 transition-colors cursor-default bg-slate-50 rounded-[2rem] pt-8 pr-8 pb-8 pl-8">
<div className="flex text-orange-400 text-xs mb-6 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" height="12" icon="solar:star-bold" style={{color: 'rgb(251, 146, 60)'}} width="12"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed font-medium text-slate-700 mb-8">“Variety aur flavour dono kamal hain. Samosay say lay kar chicken pockets tak, har item evenly cook hota hai aur crispy aur delicious nikalta hai.”</p>
<div className="flex gap-x-3 gap-y-3 items-center">
<div className="flex text-xs font-bold text-white bg-gradient-to-tr from-brand-400 to-brand-600 w-10 h-10 rounded-full items-center justify-center">RK</div>
<div className="">
<p className="text-sm font-bold text-slate-900">Rashid Khan</p>
<p className="text-xs font-medium text-slate-400" style={{}}>Surjani Town</p>
</div>
</div>
</div>

<div className="hover:bg-brand-50/30 transition-colors cursor-default bg-slate-50 rounded-[2rem] pt-8 pr-8 pb-8 pl-8">
<div className="flex text-orange-400 text-xs mb-6 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed font-medium text-slate-700 mb-8">“Premium quality aur hygienic packaging kay sath. Sab ke liye highly recommended.”</p>
<div className="flex gap-3 translate-y-12 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs">AM</div>
<div className="">
<p className="text-sm font-bold text-slate-900">Mohammad Hasnain</p>
<p className="text-xs font-medium text-slate-400">DHA,Karachi</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-24 pb-24 relative" id="location">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="space-y-10">
<div className="">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Visit Us</h2>
<p className="leading-relaxed text-lg font-medium text-slate-400">Craving a bite? We are located in the Karachi. Drop by or call us for delivery.</p>
</div>
<div className="space-y-8">

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 shadow-lg">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-white mb-2">Location</h4>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shadow-lg">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-white mb-2">For Order:</h4>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="tel:+919988554961">+92 322 853 8875</a>
<p className="text-xs text-slate-500 mt-1">Available on WhatsApp</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-yellow-400 shadow-lg">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-white mb-2">Opening Hours</h4>
<p className="text-slate-400 text-sm font-medium">Monday - Sunday</p>
<p className="text-sm text-slate-500 mt-1">12:00 AM - 12:00 PM</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-brand-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-400 transition-all active:scale-95 shadow-lg shadow-brand-900/50" href="tel:+919988554961">
<iconify-icon icon="solar:scooter-bold" width="20"></iconify-icon>
                            Order Now
                        </a>
</div>
</div>

<div className="h-full min-h-[400px] bg-slate-800 rounded-[2.5rem] overflow-hidden relative border border-slate-700 shadow-2xl group">
<iframe allowfullscreen="" className="w-full h-full object-cover transition-all duration-700 group-hover:filter-none" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.639695678!2d75.8!3d30.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(1) contrast(1.2) brightness(0.8)'}} width="100%">
</iframe>

<div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-xl text-xs font-bold border border-slate-700 shadow-xl pointer-events-none">
                        Da Sizzling Bite HQ
                    </div>
</div>
</div>
<div className="flex flex-col md:flex-row border-slate-800 border-t mt-20 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs font-medium text-slate-500">© 2026 MNS Frozen Foods. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:twitter-x-line" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>


    </>
  );
}
