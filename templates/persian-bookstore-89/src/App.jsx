import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show selected page
            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden');
                window.scrollTo(0,0);
            }

            // Update Nav State
            const navHome = document.getElementById('nav-home');
            const navShop = document.getElementById('nav-shop');
            
            if(pageId === 'home') {
                navHome.classList.add('active-nav');
                navShop.classList.remove('active-nav');
            } else if (pageId === 'shop') {
                navShop.classList.add('active-nav');
                navHome.classList.remove('active-nav');
            } else {
                navHome.classList.remove('active-nav');
                navShop.classList.remove('active-nav');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-4">

<div className="flex items-center gap-4">
<button className="lg:hidden text-gray-500"><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
<a className="flex items-center gap-2 group" href="#" onclick="switchPage('home')">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">پران پژوه</span>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-2xl mx-auto relative group">
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full rounded-xl border-gray-200 bg-gray-100 py-2.5 pr-10 pl-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 hover:bg-gray-50 transition-all outline-none" placeholder="جستجو در میان هزاران کتاب دانشگاهی..." type="text"/>
</div>

<div className="flex items-center gap-2 sm:gap-4">
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors" onclick="switchPage('login')">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
<span>ورود</span>
</button>
<div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
<button className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors group" onclick="switchPage('cart')">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
<span className="absolute top-1 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white group-hover:scale-110 transition-transform">۲</span>
</button>
</div>
</div>

<nav className="hidden lg:flex items-center gap-2 py-3 text-sm font-medium border-t border-gray-100 overflow-x-auto">
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors active-nav" id="nav-home" onclick="switchPage('home')">خانه</button>
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" id="nav-shop" onclick="switchPage('shop')">فروشگاه</button>
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">علوم پزشکی</button>
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">فنی مهندسی</button>
<div className="mr-auto flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold">
<iconify-icon icon="solar:tag-price-linear" width="14"></iconify-icon>
                    تخفیف‌های دانشجویی
                </div>
</nav>
</div>
</header>
<main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

<div className="page-section space-y-12" id="page-home">

<section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[400px]">
<div className="md:col-span-2 md:row-span-2 relative rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 border border-gray-100 p-8 flex flex-col justify-end items-start hover:shadow-lg transition-all duration-300 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10"><svg className="w-full h-full" viewbox="0 0 100 100"><path className="text-emerald-400" d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path></svg></div>
<div className="relative z-10 max-w-sm">
<span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur text-emerald-700 text-xs font-bold mb-3 border border-emerald-100">آغاز ترم جدید</span>
<h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">مرجع کامل کتاب‌های دانشگاهی</h2>
<button className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors mt-4" onclick="switchPage('shop')">مشاهده فروشگاه</button>
</div>
</div>
<div className="md:col-span-2 md:row-span-2 grid grid-cols-2 gap-4">
<div className="cursor-pointer bg-orange-50 border border-orange-100 rounded-2xl p-6 relative hover:shadow-md transition-all" onclick="switchPage('shop')">
<h3 className="font-bold text-gray-900">منابع ارشد</h3>
<iconify-icon className="absolute bottom-2 left-2 text-orange-200" icon="solar:diploma-verified-linear" width="60"></iconify-icon>
</div>
<div className="cursor-pointer bg-blue-50 border border-blue-100 rounded-2xl p-6 relative hover:shadow-md transition-all" onclick="switchPage('shop')">
<h3 className="font-bold text-gray-900">کتب پزشکی</h3>
<iconify-icon className="absolute bottom-2 left-2 text-blue-200" icon="solar:heart-pulse-linear" width="60"></iconify-icon>
</div>
<div className="cursor-pointer col-span-2 bg-gray-100 border border-gray-200 rounded-2xl p-6 flex justify-between items-center hover:bg-gray-200 transition-all" onclick="switchPage('shop')">
<div><h3 className="font-bold text-gray-900">لوازم التحریر</h3><p className="text-xs text-gray-500">مهندسی و معماری</p></div>
<iconify-icon className="text-gray-400" icon="solar:ruler-pen-linear" width="40"></iconify-icon>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-gray-900 flex items-center gap-2"><span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>تازه‌های نشر</h2>
<button className="text-sm font-medium text-emerald-600 flex items-center gap-1" onclick="switchPage('shop')">مشاهده همه <iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon>
<span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">۱۰٪</span>
</div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-emerald-700">مبانی فیزیک هالیدی - جلد ۱</h3>
<p className="text-xs text-gray-500 mb-2">دیوید هالیدی</p>
<div className="mt-auto flex items-end justify-between">
<div><div className="text-[10px] text-gray-400 line-through">۴۵۰,۰۰۰</div><div className="text-sm font-bold">۴۰۵,۰۰۰</div></div>
<button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-emerald-700">فیزیولوژی گایتون ۲۰۲۴</h3>
<p className="text-xs text-gray-500 mb-2">آرتور گایتون</p>
<div className="mt-auto flex items-end justify-between">
<div className="text-sm font-bold">۸۹۰,۰۰۰</div>
<button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-emerald-700">طراحی الگوریتم‌ها</h3>
<p className="text-xs text-gray-500 mb-2">CLRS</p>
<div className="mt-auto flex items-end justify-between">
<div className="text-sm font-bold">۳۲۰,۰۰۰</div>
<button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-emerald-700">ترمودینامیک مهندسی</h3>
<p className="text-xs text-gray-500 mb-2">سنجل</p>
<div className="mt-auto flex items-end justify-between">
<div className="text-sm font-bold">۴۰۰,۰۰۰</div>
<button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-emerald-700">شیمی عمومی ۱</h3>
<p className="text-xs text-gray-500 mb-2">مورتیمر</p>
<div className="mt-auto flex items-end justify-between">
<div className="text-sm font-bold">۲۱۰,۰۰۰</div>
<button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-shop">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 space-y-6 flex-shrink-0">
<div className="bg-white border border-gray-200 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="font-bold text-gray-900">فیلترها</h3>
<button className="text-xs text-red-500 hover:underline">حذف همه</button>
</div>

<div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
<h4 className="text-sm font-bold text-gray-700">دسته‌بندی</h4>
<label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
<input checked="" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/> علوم پایه
                            </label>
<label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/> فنی و مهندسی
                            </label>
<label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/> علوم پزشکی
                            </label>
</div>

<div className="space-y-3">
<h4 className="text-sm font-bold text-gray-700">محدوده قیمت</h4>
<div className="h-1 bg-gray-200 rounded-full relative mt-2">
<div className="absolute left-0 right-1/2 h-full bg-emerald-500 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-emerald-500 rounded-full shadow cursor-pointer"></div>
<div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-emerald-500 rounded-full shadow cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>۰ تومان</span>
<span>۲,۰۰۰,۰۰۰ تومان</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-100">
<label className="flex items-center justify-between cursor-pointer">
<span className="text-sm text-gray-700">فقط کالاهای موجود</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[18px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
</div>
</label>
</div>
</div>
</aside>

<div className="flex-1">

<div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-3 mb-6">
<div className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon icon="solar:sort-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">مرتب‌سازی:</span>
<select className="bg-transparent border-none text-gray-900 font-medium focus:ring-0 text-sm cursor-pointer outline-none">
<option>پرفروش‌ترین</option>
<option>جدیدترین</option>
<option>ارزان‌ترین</option>
</select>
</div>
<span className="text-xs text-gray-400">نمایش ۱۲ از ۱۵۰ کالا</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-700">معماری کامپیوتر موریس مانو</h3>
<div className="mt-auto flex items-center justify-between"><div className="text-sm font-bold">۳۵۰,۰۰۰ <span className="text-[10px] font-normal text-gray-500">تومان</span></div></div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-700">ساختمان داده‌ها</h3>
<div className="mt-auto flex items-center justify-between"><div className="text-sm font-bold">۲۸۰,۰۰۰ <span className="text-[10px] font-normal text-gray-500">تومان</span></div></div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-700">آمار و احتمالات مهندسی</h3>
<div className="mt-auto flex items-center justify-between"><div className="text-sm font-bold">۱۹۵,۰۰۰ <span className="text-[10px] font-normal text-gray-500">تومان</span></div></div>
</div>

<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-700">هوش مصنوعی راسل</h3>
<div className="mt-auto flex items-center justify-between"><div className="text-sm font-bold">۵۶۰,۰۰۰ <span className="text-[10px] font-normal text-gray-500">تومان</span></div></div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-700">مدارهای الکتریکی</h3>
<div className="mt-auto flex items-center justify-between"><div className="text-sm font-bold">۴۱۰,۰۰۰ <span className="text-[10px] font-normal text-gray-500">تومان</span></div></div>
</div>
<div className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-lg transition-all flex flex-col cursor-pointer" onclick="switchPage('product')">
<div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear" width="48"></iconify-icon></div>
<h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-700">ریاضی عمومی ۲</h3>
<div className="mt-auto flex items-center justify-between"><div className="text-sm font-bold">۲۲۰,۰۰۰ <span className="text-[10px] font-normal text-gray-500">تومان</span></div></div>
</div>
</div>

<div className="flex items-center justify-center gap-2 mt-8">
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-600 text-white font-bold">۱</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600">۲</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600">۳</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-product">

<div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
<a href="#" onclick="switchPage('home')">خانه</a> / 
                <a href="#" onclick="switchPage('shop')">کتاب‌های دانشگاهی</a> / 
                <a href="#" onclick="switchPage('shop')">علوم پایه</a> / 
                <span className="text-gray-900 font-medium">مبانی فیزیک هالیدی جلد اول</span>
</div>
<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-4 lg:col-span-3">
<div className="bg-gray-100 rounded-xl aspect-[3/4] flex items-center justify-center mb-3">
<iconify-icon className="text-gray-300" icon="solar:book-linear" width="100"></iconify-icon>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="aspect-square bg-white border border-emerald-500 rounded-lg flex items-center justify-center"><iconify-icon className="text-gray-400" icon="solar:book-linear"></iconify-icon></div>
<div className="aspect-square bg-gray-50 border border-transparent rounded-lg flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear"></iconify-icon></div>
<div className="aspect-square bg-gray-50 border border-transparent rounded-lg flex items-center justify-center"><iconify-icon className="text-gray-300" icon="solar:book-linear"></iconify-icon></div>
</div>
</div>

<div className="md:col-span-8 lg:col-span-6 space-y-4">
<div>
<h1 className="text-2xl font-bold text-gray-900 mb-2">مبانی فیزیک هالیدی - جلد اول (مکانیک)</h1>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span>نویسنده: <span className="text-emerald-600">دیوید هالیدی، رابرت رزنیک</span></span>
<span>ناشر: <span className="text-gray-900">نشر دانشگاهی</span></span>
</div>
</div>
<div className="flex items-center gap-1 text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gray-300" icon="solar:star-linear"></iconify-icon>
<span className="text-gray-400 text-xs mr-1">(۱۲ نظر)</span>
</div>
<div className="grid grid-cols-2 gap-4 text-sm py-4 border-y border-gray-100">
<div className="flex items-center gap-2 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:calendar-linear"></iconify-icon> سال چاپ: ۱۴۰۲</div>
<div className="flex items-center gap-2 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:file-text-linear"></iconify-icon> تعداد صفحه: ۴۵۰</div>
<div className="flex items-center gap-2 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:bookmark-linear"></iconify-icon> قطع: وزیری</div>
<div className="flex items-center gap-2 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:book-2-linear"></iconify-icon> جلد: شومیز</div>
</div>
<div className="text-sm text-gray-600 leading-relaxed">
                            این کتاب مرجع اصلی درس فیزیک ۱ در رشته‌های فنی و مهندسی و علوم پایه است. ویرایش جدید شامل تمرین‌های حل شده بیشتر و مثال‌های کاربردی در صنعت می‌باشد. ترجمه روان و دقیق از ویژگی‌های این نسخه است.
                        </div>
</div>

<div className="md:col-span-12 lg:col-span-3">
<div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
<div className="flex items-center justify-between mb-4">
<span className="text-gray-500 text-sm">قیمت:</span>
<div className="text-left">
<div className="text-gray-400 line-through text-xs">۴۵۰,۰۰۰</div>
<div className="text-xl font-bold text-gray-900">۴۰۵,۰۰۰ <span className="text-xs font-normal text-gray-500">تومان</span></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between bg-white rounded-lg p-1 border border-gray-200">
<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">+</button>
<span className="font-bold text-gray-900">۱</span>
<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">-</button>
</div>
<button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200" onclick="switchPage('cart')">افزودن به سبد خرید</button>
</div>
<div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-emerald-600" icon="solar:verified-check-linear"></iconify-icon>
                                    گارانتی اصالت و سلامت فیزیکی
                                </div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-emerald-600" icon="solar:box-linear"></iconify-icon>
                                    ارسال فوری در تهران
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-cart">
<h1 className="text-2xl font-bold text-gray-900 mb-6">سبد خرید شما</h1>
<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 space-y-4">

<div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center">
<div className="w-20 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="solar:book-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="font-bold text-gray-900 text-sm mb-1">مبانی فیزیک هالیدی - جلد اول</h3>
<p className="text-xs text-gray-500 mb-3">نشر دانشگاهی</p>
<div className="flex items-center justify-between">
<div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 h-8">
<button className="px-2 text-gray-500 hover:text-emerald-600">+</button>
<span className="px-2 text-sm font-medium">۱</span>
<button className="px-2 text-gray-500 hover:text-red-500">-</button>
</div>
<span className="font-bold text-gray-900">۴۰۵,۰۰۰ تومان</span>
</div>
</div>
<button className="text-gray-400 hover:text-red-500 p-2"><iconify-icon icon="solar:trash-bin-linear" width="20"></iconify-icon></button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center">
<div className="w-20 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="solar:book-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="font-bold text-gray-900 text-sm mb-1">ریاضیات مهندسی پیشرفته</h3>
<p className="text-xs text-gray-500 mb-3">کروزیگ</p>
<div className="flex items-center justify-between">
<div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 h-8">
<button className="px-2 text-gray-500 hover:text-emerald-600">+</button>
<span className="px-2 text-sm font-medium">۱</span>
<button className="px-2 text-gray-500 hover:text-red-500">-</button>
</div>
<span className="font-bold text-gray-900">۳۵۰,۰۰۰ تومان</span>
</div>
</div>
<button className="text-gray-400 hover:text-red-500 p-2"><iconify-icon icon="solar:trash-bin-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="w-full lg:w-80">
<div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
<h3 className="font-bold text-gray-900 mb-4">خلاصه سفارش</h3>
<div className="space-y-3 text-sm text-gray-600 pb-4 border-b border-gray-100">
<div className="flex justify-between">
<span>قیمت کالاها (۲)</span>
<span>۷۵۵,۰۰۰ تومان</span>
</div>
<div className="flex justify-between text-red-500">
<span>سود شما از خرید</span>
<span>۴۵,۰۰۰ تومان</span>
</div>
<div className="flex justify-between">
<span>هزینه ارسال</span>
<span>۳۰,۰۰۰ تومان</span>
</div>
</div>
<div className="flex justify-between font-bold text-lg text-gray-900 py-4">
<span>مبلغ قابل پرداخت</span>
<span>۷۴۰,۰۰۰ تومان</span>
</div>
<button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2" onclick="switchPage('checkout')">
                            تسویه حساب
                            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-checkout">
<div className="max-w-3xl mx-auto">
<div className="flex items-center mb-8">
<button className="text-gray-500 hover:text-gray-900 ml-4" onclick="switchPage('cart')"><iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon></button>
<h1 className="text-2xl font-bold text-gray-900">تکمیل سفارش</h1>
</div>
<form className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl p-6">
<div className="flex items-center gap-2 mb-4 text-emerald-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<h3 className="font-bold">اطلاعات ارسال</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-gray-500">نام و نام خانوادگی</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 outline-none" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500">شماره موبایل</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 outline-none" type="tel"/>
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-xs text-gray-500">آدرس پستی</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 outline-none" rows="3"></textarea>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500">کد پستی</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 outline-none" type="number"/>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6">
<div className="flex items-center gap-2 mb-4 text-emerald-600">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
<h3 className="font-bold">شیوه پرداخت</h3>
</div>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 border border-emerald-500 bg-emerald-50 rounded-lg cursor-pointer">
<div className="flex items-center gap-3">
<input checked="" className="text-emerald-600 focus:ring-emerald-500" name="payment" type="radio"/>
<span className="text-sm font-medium text-gray-900">پرداخت اینترنتی</span>
</div>
<iconify-icon className="text-emerald-600" icon="solar:card-send-linear" width="24"></iconify-icon>
</label>
<label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
<div className="flex items-center gap-3">
<input className="text-emerald-600 focus:ring-emerald-500" name="payment" type="radio"/>
<span className="text-sm font-medium text-gray-900">کیف پول (موجودی کافی نیست)</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:wallet-linear" width="24"></iconify-icon>
</label>
</div>
</div>
<button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200" type="button">
                        پرداخت و ثبت نهایی (۷۴۰,۰۰۰ تومان)
                    </button>
</form>
</div>
</div>

<div className="page-section hidden flex items-center justify-center min-h-[500px]" id="page-login">
<div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md shadow-sm">
<div className="text-center mb-8">
<div className="inline-flex w-12 h-12 bg-emerald-100 rounded-xl items-center justify-center text-emerald-600 mb-4">
<iconify-icon icon="solar:user-circle-linear" width="28"></iconify-icon>
</div>
<h2 className="text-xl font-bold text-gray-900">ورود به حساب کاربری</h2>
</div>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">شماره موبایل یا ایمیل</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 px-4 text-sm focus:border-emerald-500 focus:bg-white focus:ring-emerald-500 outline-none transition-all" placeholder="مثلا: 0912..." type="text"/>
</div>
<button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors" type="button">
                        ورود
                    </button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-gray-200"></div>
<span className="flex-shrink-0 mx-4 text-gray-400 text-xs">یا</span>
<div className="flex-grow border-t border-gray-200"></div>
</div>
<button className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="flat-color-icons:google" width="20"></iconify-icon>
                        ورود با گوگل
                    </button>
</form>
<p className="text-center text-xs text-gray-500 mt-6">
                    حساب کاربری ندارید؟ <a className="text-emerald-600 font-bold hover:underline" href="#">ثبت‌نام کنید</a>
</p>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="space-y-4">
<div className="flex items-center gap-2 font-bold text-gray-900">
<iconify-icon className="text-emerald-600" icon="solar:book-2-bold"></iconify-icon>
                        پران پژوه
                    </div>
<p className="text-sm text-gray-500 text-justify leading-6">مرجع تخصصی کتاب‌های دانشگاهی با تضمین بهترین قیمت و اصالت کالا.</p>
</div>
<div>
<h3 className="font-bold text-sm mb-4">دسترسی سریع</h3>
<ul className="text-sm text-gray-500 space-y-2">
<li><a className="hover:text-emerald-600" href="#">پیگیری سفارش</a></li>
<li><a className="hover:text-emerald-600" href="#">قوانین و مقررات</a></li>
<li><a className="hover:text-emerald-600" href="#">تماس با ما</a></li>
</ul>
</div>
<div>
<h3 className="font-bold text-sm mb-4">اطلاعات تماس</h3>
<ul className="text-sm text-gray-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> ۰۲۱-۶۶۰۰۰۰۰۰</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> info@poran.com</li>
</ul>
</div>
<div>
<div className="flex gap-2">
<div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400">ENAMAD</div>
<div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400">SAMANDEHI</div>
</div>
</div>
</div>
<div className="text-center text-xs text-gray-400 pt-8 border-t border-gray-100">
                © ۱۴۰۳ تمامی حقوق محفوظ است.
            </div>
</div>
</footer>



    </>
  );
}
