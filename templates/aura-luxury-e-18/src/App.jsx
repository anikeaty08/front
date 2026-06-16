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
      

<header className="border-b border-stone-200/60 bg-[#FCFAF8]/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="lg:hidden text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="text-xl tracking-tighter font-medium uppercase text-stone-900" href="#">Aura</a>
</div>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Колекції</a>
<a className="hover:text-stone-900 transition-colors" href="#">Тарілки</a>
<a className="hover:text-stone-900 transition-colors" href="#">Чашки</a>
<a className="text-[#6C2424]" href="#">Новинки</a>
</nav>
<div className="flex items-center gap-5 text-stone-600">
<button className="hover:text-stone-900 transition-colors"><iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon></button>
<button className="hover:text-stone-900 transition-colors"><iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="22"></iconify-icon></button>
<button className="hover:text-stone-900 transition-colors relative">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#6C2424] text-white text-[10px] font-medium h-4 w-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">

<nav className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-8">
<a className="hover:text-stone-800 transition-colors" href="#">Головна</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<a className="hover:text-stone-800 transition-colors" href="#">Колекція "Ренесанс"</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-stone-800">Тарілка обідня</span>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

<div className="lg:col-span-7 flex flex-col gap-4">
<div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden relative group cursor-crosshair">
<img alt="Обідня тарілка" className="w-full h-full object-cover object-center mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/80 backdrop-blur-sm text-stone-800 text-xs font-medium px-2.5 py-1 rounded-md">Хіт продажів</span>
</div>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
<button className="w-20 h-20 shrink-0 rounded-xl border-2 border-[#6C2424] overflow-hidden">
<img alt="Thumb 1" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</button>
<button className="w-20 h-20 shrink-0 rounded-xl border border-stone-200 overflow-hidden hover:border-stone-300 transition-colors">
<img alt="Thumb 2" className="w-full h-full object-cover mix-blend-multiply opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</button>
<button className="w-20 h-20 shrink-0 rounded-xl border border-stone-200 overflow-hidden hover:border-stone-300 transition-colors">
<img alt="Thumb 3" className="w-full h-full object-cover mix-blend-multiply opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</button>
<button className="w-20 h-20 shrink-0 rounded-xl border border-stone-200 bg-stone-100 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors">
<iconify-icon icon="solar:video-frame-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col">
<div className="mb-6">
<h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-stone-900 mb-2 font-serif">Тарілка обідня "Ренесанс", 28 см</h1>
<p className="text-sm text-stone-500 mb-6">Артикул: RN-280-BG</p>
<div className="flex items-end gap-4 mb-8">
<span className="text-3xl font-medium tracking-tight text-[#6C2424]">1 450 ₴</span>
<span className="text-base text-stone-400 line-through mb-1">1 800 ₴</span>
</div>
</div>

<div className="flex gap-4 mb-8">
<div className="flex items-center border border-stone-200 rounded-xl h-12 w-32 px-1">
<button className="w-10 h-full flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors"><iconify-icon icon="solar:minus-linear" width="18"></iconify-icon></button>
<input className="w-full h-full bg-transparent text-center text-sm font-medium focus:outline-none" readonly="" type="text" value="1"/>
<button className="w-10 h-full flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors"><iconify-icon icon="solar:add-linear" width="18"></iconify-icon></button>
</div>
<button className="flex-1 bg-[#6C2424] hover:bg-[#581c1c] text-white rounded-xl h-12 flex items-center justify-center gap-2 transition-colors shadow-sm shadow-[#6C2424]/20">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">В кошик</span>
</button>
</div>

<div className="grid grid-cols-2 gap-4 mb-10 py-6 border-y border-stone-200/60">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#6C2424]/5 flex items-center justify-center text-[#6C2424] shrink-0">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-0.5">Надійне пакування</h4>
<p className="text-[11px] text-stone-500 leading-tight">Гарантуємо цілісність під час доставки</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#6C2424]/5 flex items-center justify-center text-[#6C2424] shrink-0">
<iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-0.5">Швидка доставка</h4>
<p className="text-[11px] text-stone-500 leading-tight">Відправка в день замовлення</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#6C2424]/5 flex items-center justify-center text-[#6C2424] shrink-0">
<iconify-icon icon="solar:refresh-circle-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-0.5">Обмін та повернення</h4>
<p className="text-[11px] text-stone-500 leading-tight">Протягом 14 днів без питань</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#6C2424]/5 flex items-center justify-center text-[#6C2424] shrink-0">
<iconify-icon icon="solar:medal-star-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-0.5">Преміум якість</h4>
<p className="text-[11px] text-stone-500 leading-tight">Справжня кістяна порцеляна</p>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex border-b border-stone-200 mb-5">
<button className="pb-3 text-sm font-medium text-[#6C2424] border-b-2 border-[#6C2424] px-1 mr-6">Опис</button>
<button className="pb-3 text-sm font-medium text-stone-400 hover:text-stone-600 px-1 mr-6 transition-colors">Характеристики</button>
<button className="pb-3 text-sm font-medium text-stone-400 hover:text-stone-600 px-1 transition-colors flex items-center gap-1">
                            Відгуки <span className="bg-stone-100 text-stone-500 text-[10px] px-1.5 py-0.5 rounded-full">12</span>
</button>
</div>
<div className="text-sm text-stone-600 leading-relaxed">
<p>Вишукана обідня тарілка з колекції "Ренесанс" стане головною прикрасою вашого святкового столу. Виготовлена з найтоншої кістяної порцеляни теплого молочного відтінку, вона вирізняється неймовірною легкістю та міцністю.</p>
<p className="mt-3">Делікатний рельєфний візерунок по краю додає виробу аристократичного шарму. Ідеально підходить для подачі основних страв.</p>
</div>
</div>

<div>
<div className="flex gap-2 p-1 bg-stone-100/80 rounded-lg mb-4">
<button className="flex-1 py-1.5 text-xs font-medium bg-white text-stone-900 rounded-md shadow-sm border border-stone-200/50">Доставка</button>
<button className="flex-1 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors">Оплата</button>
<button className="flex-1 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors">Гарантія</button>
</div>
<div className="bg-white border border-stone-100 rounded-xl p-4 text-xs text-stone-600 shadow-sm shadow-stone-100/50">
<ul className="space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-stone-300"></div> Нова Пошта (відділення) — за тарифами перевізника</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-stone-300"></div> Кур'єр Нової Пошти — за тарифами перевізника</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#6C2424]"></div> Безкоштовно при замовленні від 3000 грн</li>
</ul>
</div>
</div>
</div>
</div>

<section className="mb-24 bg-[#F5F3ED] rounded-3xl p-6 lg:p-10 border border-stone-200/50">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
<div>
<h2 className="text-2xl font-normal tracking-tight text-stone-900 font-serif mb-1">Зберіть свій ідеальний сервіз</h2>
<p className="text-sm text-stone-500">Додайте товари з колекції "Ренесанс", щоб створити завершений образ столу.</p>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="bg-white p-4 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-[#6C2424]/20 transition-colors cursor-pointer group custom-checkbox">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-stone-300 absolute right-6 mt-1 flex items-center justify-center transition-colors z-10 group-hover:border-stone-400">
<svg className="w-3 h-3 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="aspect-square bg-stone-50 rounded-xl overflow-hidden relative">
<img alt="Тарілка" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900 mb-1 leading-tight">Тарілка супова 22 см</h3>
<p className="text-sm text-[#6C2424] font-medium">1 200 ₴</p>
</div>
</label>

<label className="bg-white p-4 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-[#6C2424]/20 transition-colors cursor-pointer group custom-checkbox">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-stone-300 absolute right-6 mt-1 flex items-center justify-center transition-colors z-10 group-hover:border-stone-400">
<svg className="w-3 h-3 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="aspect-square bg-stone-50 rounded-xl overflow-hidden relative">
<img alt="Чашка" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900 mb-1 leading-tight">Чашка з блюдцем 250 мл</h3>
<p className="text-sm text-[#6C2424] font-medium">1 850 ₴</p>
</div>
</label>

<label className="bg-white p-4 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-[#6C2424]/20 transition-colors cursor-pointer group custom-checkbox">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-stone-300 absolute right-6 mt-1 flex items-center justify-center transition-colors z-10 group-hover:border-stone-400">
<svg className="w-3 h-3 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="aspect-square bg-stone-50 rounded-xl overflow-hidden relative">
<img alt="Салатник" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900 mb-1 leading-tight">Салатник 16 см</h3>
<p className="text-sm text-[#6C2424] font-medium">950 ₴</p>
</div>
</label>
</div>

<div className="lg:w-72 bg-white rounded-2xl p-6 border border-stone-200/50 flex flex-col justify-center h-full min-h-[160px]">
<div className="text-xs text-stone-500 mb-2">Обрано товарів: 2</div>
<div className="flex items-end gap-2 mb-6">
<span className="text-stone-400 text-sm mb-1">Разом:</span>
<span className="text-2xl font-medium tracking-tight text-[#6C2424]">2 650 ₴</span>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-colors">
<span className="font-medium text-sm">Додати все в кошик</span>
</button>
</div>
</div>
</section>

<section className="mb-24">
<h2 className="text-2xl font-normal tracking-tight text-stone-900 font-serif mb-6">Розпакування та огляди</h2>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">

<div className="w-56 shrink-0 aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer snap-start">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555037015-1498966bcd7c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/80 overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<span className="text-xs text-white font-medium shadow-sm drop-shadow-md">@home_aesthetics</span>
</div>
</div>

<div className="w-56 shrink-0 aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer snap-start">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/80 overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5"/></div>
<span className="text-xs text-white font-medium drop-shadow-md">@ceramic.love</span>
</div>
</div>

<div className="w-56 shrink-0 aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer snap-start">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/80 overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=9"/></div>
<span className="text-xs text-white font-medium drop-shadow-md">@table_setting</span>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-normal tracking-tight text-stone-900 font-serif">Ви нещодавно переглядали</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-800 hover:border-stone-300 transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-800 hover:border-stone-300 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<a className="group block" href="#">
<div className="aspect-square bg-[#F5F3ED] rounded-xl overflow-hidden mb-3 relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-stone-400 hover:text-[#6C2424] transition-colors opacity-0 group-hover:opacity-100"><iconify-icon icon="solar:heart-linear"></iconify-icon></button>
</div>
<h3 className="text-xs font-medium text-stone-800 mb-1">Салатник "Ренесанс", 16 см</h3>
<p className="text-xs font-medium text-[#6C2424]">950 ₴</p>
</a>

<a className="group block" href="#">
<div className="aspect-square bg-[#F5F3ED] rounded-xl overflow-hidden mb-3 relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="text-xs font-medium text-stone-800 mb-1">Тарілка супова, 22 см</h3>
<p className="text-xs font-medium text-[#6C2424]">1 200 ₴</p>
</a>

<a className="group block" href="#">
<div className="aspect-square bg-[#F5F3ED] rounded-xl overflow-hidden mb-3 relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xs font-medium text-stone-800 mb-1">Чашка з блюдцем</h3>
<p className="text-xs font-medium text-[#6C2424]">1 850 ₴</p>
</a>

<a className="group block" href="#">
<div className="aspect-square bg-[#F5F3ED] rounded-xl overflow-hidden mb-3 relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-2 left-2 bg-[#6C2424] text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Sale</span>
</div>
<h3 className="text-xs font-medium text-stone-800 mb-1">Тарілка десертна, 20 см</h3>
<div className="flex gap-2 items-center">
<p className="text-xs font-medium text-[#6C2424]">850 ₴</p>
<p className="text-[10px] text-stone-400 line-through">1 100 ₴</p>
</div>
</a>
</div>
</section>
</main>

    </>
  );
}
