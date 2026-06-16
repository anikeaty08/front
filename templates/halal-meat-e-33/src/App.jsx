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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="iconify text-rose-600" data-height="24" data-icon="lucide:chef-hat" data-width="24" style={{strokeWidth: '1.5'}}></span>
<a className="font-semibold text-lg tracking-tighter uppercase text-zinc-900" href="#">
                        Halal<span className="text-rose-600">Cuts</span>
</a>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-zinc-900" href="#">Do'kon</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Qassob To'plami</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Bizning Manba</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Retseptlar</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<span className="iconify" data-height="20" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button @click="cartOpen = !cartOpen" className="text-zinc-900 hover:text-rose-600 transition-colors relative">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full" x-show="cartCount &gt; 0" x-text="cartCount"></span>
</button>
<button @click="mobileMenuOpen = !mobileMenuOpen" className="md:hidden text-zinc-900">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div @click.away="mobileMenuOpen = false" className="md:hidden bg-white border-b border-zinc-200" x-show="mobileMenuOpen" x-transition="">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-2 rounded-md text-base font-medium text-zinc-900 bg-zinc-50" href="#">Barcha Mahsulotlar</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50" href="#">Mol go'shti</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50" href="#">Qo'y go'shti</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50" href="#">Parranda</a>
</div>
</div>
</nav>

<div aria-labelledby="slide-over-title" aria-modal="true" className="relative z-50" role="dialog" x-show="cartOpen">
<div className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity" x-show="cartOpen" x-transition.opacity=""></div>
<div className="fixed inset-0 overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
<div className="pointer-events-auto w-screen max-w-md" x-show="cartOpen" x-transition:enter="transform transition ease-in-out duration-300 sm:duration-500" x-transition:enter-end="translate-x-0" x-transition:enter-start="translate-x-full" x-transition:leave="transform transition ease-in-out duration-300 sm:duration-500" x-transition:leave-end="translate-x-full" x-transition:leave-start="translate-x-0">
<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
<div className="flex items-start justify-between">
<h2 className="text-lg font-medium text-zinc-900" id="slide-over-title">Savatcha</h2>
<div className="ml-3 flex h-7 items-center">
<button @click="cartOpen = false" className="-m-2 p-2 text-zinc-400 hover:text-zinc-500" type="button">
<span className="sr-only">Yopish</span>
<span className="iconify" data-height="24" data-icon="lucide:x" data-width="24"></span>
</button>
</div>
</div>
<div className="mt-8">
<div className="flow-root">
<ul className="-my-6 divide-y divide-zinc-100" role="list">
<li className="flex py-6">
<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200">
<img alt="Ribeye" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="ml-4 flex flex-1 flex-col">
<div>
<div className="flex justify-between text-base font-medium text-zinc-900">
<h3><a href="#">Premium Ribeye</a></h3>
<p className="ml-4">$45.00</p>
</div>
<p className="mt-1 text-sm text-zinc-500">500g · Tabiiy ozuqa</p>
</div>
</div>
</li>
<li className="flex py-6">
<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200">
<img alt="Lamb Chops" className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="ml-4 flex flex-1 flex-col">
<div>
<div className="flex justify-between text-base font-medium text-zinc-900">
<h3><a href="#">Qo'y Qovurg'alari</a></h3>
<p className="ml-4">$32.50</p>
</div>
<p className="mt-1 text-sm text-zinc-500">1kg · Erkin boqilgan</p>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-200 px-4 py-6 sm:px-6">
<div className="flex justify-between text-base font-medium text-zinc-900">
<p>Jami</p>
<p>$77.50</p>
</div>
<p className="mt-0.5 text-sm text-zinc-500">Yetkazib berish va soliqlar kassada hisoblanadi.</p>
<div className="mt-6">
<a className="flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 transition-all" href="#">Xarid qilish</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<main>
<div className="relative isolate overflow-hidden">
<div className="max-w-7xl mx-auto pb-24 pt-16 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:py-32 items-center">
<div className="px-6 lg:px-0 lg:pt-4">
<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                        100% Sertifikatlangan Halol
                    </div>
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl mb-6">
                        Fermadan dasturxongacha <br/>
<span className="text-zinc-400">Halol sifati.</span>
</h1>
<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-lg">
                        Axloqiy va mahalliy fermalardan olingan premium mol, qo'y va parranda go'shtlari. Qo'lda so'yilgan, qat'iy Halol, eshigingizgacha yangi holda yetkaziladi.
                    </p>
<div className="mt-10 flex items-center gap-x-6">
<a className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" href="#shop">Go'sht Tanlash</a>
<a className="text-sm font-medium leading-6 text-zinc-900 flex items-center gap-1 group" href="#">
                            To'plamlarni ko'rish <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="mt-12 flex gap-8 border-t border-zinc-100 pt-8">
<div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">24s</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Yetkazib berish</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">100%</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Tabiiy Ozuqa</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">5★</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Sifat</div>
</div>
</div>
</div>
<div className="mt-16 sm:mt-24 lg:mx-0 lg:mt-0 lg:w-screen relative">

<div className="absolute -top-4 -left-4 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute -bottom-8 right-1/4 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="relative bg-zinc-50 rounded-2xl p-4 sm:p-8 overflow-hidden shadow-sm border border-zinc-100">
<img alt="Premium Halal Meat Board" className="w-full rounded-xl shadow-lg ring-1 ring-zinc-900/10 grayscale-[10%] hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</div>

<div className="py-12 bg-white border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-medium text-zinc-900 tracking-tight">Kategoriyalar bo'yicha</h2>
<a className="text-xs font-medium text-rose-600 hover:text-rose-700" href="#">Barchasini ko'rish</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-4">

<a className="group min-w-[140px] flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<span className="iconify text-zinc-400 group-hover:text-rose-600 transition-colors mb-3" data-height="32" data-icon="lucide:beef" data-width="32" style={{strokeWidth: '1'}}></span>
<span className="text-sm font-medium text-zinc-900">Mol Go'shti</span>
</a>
<a className="group min-w-[140px] flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<span className="iconify text-zinc-400 group-hover:text-rose-600 transition-colors mb-3" data-height="32" data-icon="lucide:drumstick" data-width="32" style={{strokeWidth: '1'}}></span>
<span className="text-sm font-medium text-zinc-900">Parranda</span>
</a>
<a className="group min-w-[140px] flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<span className="iconify text-zinc-400 group-hover:text-rose-600 transition-colors mb-3" data-height="32" data-icon="lucide:chef-hat" data-width="32" style={{strokeWidth: '1'}}></span>
<span className="text-sm font-medium text-zinc-900">Qo'y Go'shti</span>
</a>
<a className="group min-w-[140px] flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<span className="iconify text-zinc-400 group-hover:text-rose-600 transition-colors mb-3" data-height="32" data-icon="lucide:sandwich" data-width="32" style={{strokeWidth: '1'}}></span>
<span className="text-sm font-medium text-zinc-900">Delikates</span>
</a>
<a className="group min-w-[140px] flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<span className="iconify text-zinc-400 group-hover:text-rose-600 transition-colors mb-3" data-height="32" data-icon="lucide:utensils" data-width="32" style={{strokeWidth: '1'}}></span>
<span className="text-sm font-medium text-zinc-900">Marinadlar</span>
</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="shop">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Yangi Kelganlar</h2>
<p className="mt-2 text-sm text-zinc-500">Har kuni saralanadigan premium mahsulotlar.</p>
</div>

<div className="hidden sm:flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-900 text-white rounded-md">Barchasi</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white border border-zinc-200 text-zinc-600 rounded-md hover:bg-zinc-50">Steyklar</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white border border-zinc-200 text-zinc-600 rounded-md hover:bg-zinc-50">Qiymalar</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white border border-zinc-200 text-zinc-600 rounded-md hover:bg-zinc-50">Qovurma</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div @mouseenter="hover = true" @mouseleave="hover = false" className="group relative" x-data="{ hover: false }">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 relative">
<img alt="Ribeye Steak" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide text-zinc-900 uppercase">
                            Xit Savdo
                        </div>
<button @click="cartCount++" className="absolute bottom-3 right-3 h-8 w-8 bg-white text-zinc-900 rounded-full shadow-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-rose-600 hover:text-white">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Angus Ribeye Steyk
                                </a>
</h3>
<p className="mt-1 text-xs text-zinc-500">Tabiiy ozuqa · 12oz</p>
</div>
<p className="text-sm font-medium text-zinc-900">$28.00</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 relative">
<img alt="Lamb Chops" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button @click="cartCount++" className="absolute bottom-3 right-3 h-8 w-8 bg-white text-zinc-900 rounded-full shadow-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-rose-600 hover:text-white">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Qo'y Qovurg'alari
                                </a>
</h3>
<p className="mt-1 text-xs text-zinc-500">Erkin boqilgan · 1kg</p>
</div>
<p className="text-sm font-medium text-zinc-900">$32.50</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 relative">
<img alt="Whole Chicken" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button @click="cartCount++" className="absolute bottom-3 right-3 h-8 w-8 bg-white text-zinc-900 rounded-full shadow-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-rose-600 hover:text-white">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Butun Organik Tovuq
                                </a>
</h3>
<p className="mt-1 text-xs text-zinc-500">Don bilan boqilgan · 1.4kg</p>
</div>
<p className="text-sm font-medium text-zinc-900">$14.00</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 relative">
<img alt="Ground Beef" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-2 left-2 bg-rose-600/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide text-white uppercase">
                            Aksiya
                        </div>
<button @click="cartCount++" className="absolute bottom-3 right-3 h-8 w-8 bg-white text-zinc-900 rounded-full shadow-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-rose-600 hover:text-white">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Yog'siz Mol Qiymasi
                                </a>
</h3>
<p className="mt-1 text-xs text-zinc-500">90/10 Yog'siz · 1kg</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-rose-600">$12.00</p>
<p className="text-xs text-zinc-400 line-through">$15.00</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors">
                    Ko'proq yuklash
                </button>
</div>
</div>

<div className="bg-zinc-900 text-white py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-start">
<div className="rounded-full bg-zinc-800 p-3 mb-4">
<span className="iconify text-emerald-400" data-height="24" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">100% Sertifikatlangan Halol</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">Har bir mahsulot Halollik sertifikatlash idorasi tomonidan qat'iy tekshiriladi va tasdiqlanadi. Biz Zabiha standartlariga to'liq amal qilamiz.</p>
</div>
<div className="flex flex-col items-start">
<div className="rounded-full bg-zinc-800 p-3 mb-4">
<span className="iconify text-emerald-400" data-height="24" data-icon="lucide:thermometer-snowflake" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Sovutish Tizimli Yetkazib Berish</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">Go'shti muzlatilmagan, balki yangi holda saqlanadi. Bizning maxsus qadoqlarimiz mahsulotni yangi holatda yetkazilishini ta'minlaydi.</p>
</div>
<div className="flex flex-col items-start">
<div className="rounded-full bg-zinc-800 p-3 mb-4">
<span className="iconify text-emerald-400" data-height="24" data-icon="lucide:heart-handshake" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Axloqiy Manba</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">Biz faqat insonparvarlik standartlariga amal qiluvchi mahalliy fermalar bilan hamkorlik qilamiz. Gormonlarsiz, antibiotiklarsiz, faqat sof sifat.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 py-16 border-t border-zinc-200">
<div className="max-w-xl mx-auto px-4 text-center">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Qassoblar klubiga qo'shiling</h3>
<p className="mt-2 text-sm text-zinc-500">Maxsus takliflar, retseptlar va yangi mahsulotlar haqida birinchi bo'lib bilib oling.</p>
<form className="mt-6 flex gap-2">
<input className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder="Emailingizni kiriting" type="email"/>
<button className="flex-none rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600" type="submit">Obuna bo'lish</button>
</form>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Do'kon</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Barcha Mahsulotlar</a></li>
<li><a className="hover:text-zinc-900" href="#">Mol Go'shti</a></li>
<li><a className="hover:text-zinc-900" href="#">Qo'y Go'shti</a></li>
<li><a className="hover:text-zinc-900" href="#">Parranda</a></li>
<li><a className="hover:text-zinc-900" href="#">Aksiya</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Kompaniya</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Biz Haqimizda</a></li>
<li><a className="hover:text-zinc-900" href="#">Bizning Fermalar</a></li>
<li><a className="hover:text-zinc-900" href="#">Halol Sertifikat</a></li>
<li><a className="hover:text-zinc-900" href="#">Karyera</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Yordam</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-900" href="#">Yetkazib berish</a></li>
<li><a className="hover:text-zinc-900" href="#">Biz bilan bog'lanish</a></li>
<li><a className="hover:text-zinc-900" href="#">Foydalanish shartlari</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<a className="font-bold text-lg tracking-tighter uppercase text-zinc-900 flex items-center gap-2 mb-4" href="#">
<span className="iconify text-rose-600" data-height="20" data-icon="lucide:chef-hat" data-width="20"></span>
                        Halal<span className="text-rose-600">Cuts</span>
</a>
<p className="text-xs text-zinc-400 mb-4">
                        Premium sifatli Halol go'shtlar mehr va halollik bilan to'g'ridan-to'g'ri eshigingizgacha yetkaziladi.
                    </p>
<div className="flex space-x-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 Halal Cuts Inc. Barcha huquqlar himoyalangan.</p>
<div className="flex items-center gap-4">
<span className="iconify text-zinc-300" data-icon="lucide:credit-card" data-width="24"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
