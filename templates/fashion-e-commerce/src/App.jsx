import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let cart = [];
        const scrollContainer = document.getElementById('product-scroll-container');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        const cartBadge = document.getElementById('cart-badge');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartTotalElement = document.getElementById('cart-total');
        const cartHeaderCount = document.getElementById('cart-items-count-header');
        const emptyCartMsg = document.getElementById('empty-cart-msg');

        function scrollProducts(direction) {
            const scrollAmount = 350;
            if (direction === 'left') {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }

        function toggleCart() {
            const isHidden = cartSidebar.classList.contains('-translate-x-full');
            
            if (isHidden) {
                cartSidebar.classList.remove('-translate-x-full');
                cartSidebar.classList.add('translate-x-0');
                cartOverlay.classList.remove('hidden');
                setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
            } else {
                cartSidebar.classList.remove('translate-x-0');
                cartSidebar.classList.add('-translate-x-full');
                cartOverlay.classList.add('opacity-0');
                setTimeout(() => {
                    cartOverlay.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            }
        }

        function addToCart(title, price, image) {
            const numericPrice = parseInt(price);
            cart.push({ title, price: numericPrice, image });
            updateCartUI();
            
            // Badge Animation
            cartBadge.classList.remove('opacity-0');
            cartBadge.classList.add('animate-ping');
            setTimeout(() => cartBadge.classList.remove('animate-ping'), 500);

            // Toast Animation
            const toast = document.getElementById('toast');
            toast.classList.remove('opacity-0', 'translate-y-[-20px]');
            toast.classList.add('opacity-100', 'translate-y-0');
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'translate-y-[-20px]');
            }, 2500);
            
            // Open cart nicely
            // toggleCart(); 
        }

        function removeItem(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function updateCartUI() {
            cartBadge.textContent = cart.length;
            if(cart.length === 0) cartBadge.classList.add('opacity-0');
            else cartBadge.classList.remove('opacity-0');
            
            cartHeaderCount.textContent = `${cart.length} مورد`;
            
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotalElement.textContent = total.toLocaleString('fa-IR');

            if (cart.length === 0) {
                emptyCartMsg.style.display = 'flex';
                cartItemsContainer.innerHTML = '';
                cartItemsContainer.appendChild(emptyCartMsg);
            } else {
                emptyCartMsg.style.display = 'none';
                cartItemsContainer.innerHTML = '';
                
                cart.forEach((item, index) => {
                    const el = document.createElement('div');
                    el.className = 'flex gap-4 py-2 animate-[fadeIn_0.3s_ease-out] border-b border-slate-50 pb-4 last:border-0';
                    el.innerHTML = `
                        <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200">
                            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop" alt="${item.title}" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="flex flex-1 flex-col justify-between">
                            <div>
                                <h3 class="text-sm font-bold text-slate-900 line-clamp-1">${item.title}</h3>
                                <p class="text-sm font-medium text-slate-500 mt-1">${item.price.toLocaleString('fa-IR')} تومان</p>
                            </div>
                            <button type="button" onclick="removeItem(${index})" class="self-end font-medium text-rose-500 hover:text-rose-700 flex items-center gap-1 text-xs bg-rose-50 px-2 py-1 rounded hover:bg-rose-100 transition-colors">
                                <span class="iconify" data-icon="lucide:trash-2"></span>
                                حذف
                            </button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(el);
                });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[70] transition-all duration-300 opacity-0 translate-y-[-20px] pointer-events-none" id="toast">
<div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 text-sm font-medium border border-slate-700">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle"></span>
            به سبد خرید اضافه شد
        </div>
</div>

<div className="fixed inset-0 bg-slate-900/40 z-50 hidden transition-opacity duration-300 backdrop-blur-sm" id="cart-overlay" onclick="toggleCart()"></div>
<div className="fixed top-0 left-0 h-full w-full md:w-[450px] bg-white z-[60] transform -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xl border-r border-slate-100 flex flex-col" id="cart-sidebar">
<div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md">
<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
<span className="iconify" data-icon="lucide:shopping-bag"></span>
                سبد خرید
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full" id="cart-items-count-header">0 مورد</span>
</h2>
<button className="text-slate-400 hover:text-slate-900 transition-colors p-1 hover:bg-slate-50 rounded-full" onclick="toggleCart()">
<span className="iconify w-6 h-6" data-icon="lucide:x"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items-container">
<div className="flex flex-col items-center justify-center h-full text-slate-400 text-center" id="empty-cart-msg">
<div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
<span className="iconify w-10 h-10 text-slate-300" data-icon="lucide:shopping-cart"></span>
</div>
<p className="text-lg font-bold text-slate-900">سبد خرید شما خالی است</p>
<p className="text-sm mt-2 text-slate-500">به نظر می‌رسد هنوز چیزی انتخاب نکرده‌اید.</p>
<button className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all" onclick="toggleCart()">مشاهده محصولات</button>
</div>
</div>
<div className="border-t border-slate-100 p-6 bg-slate-50">
<div className="flex justify-between items-center mb-4">
<span className="text-slate-500 text-sm">مجموع قابل پرداخت</span>
<span className="text-xl font-bold text-slate-900 tracking-tight"><span id="cart-total">0</span> <span className="text-xs font-normal text-slate-500 align-top">تومان</span></span>
</div>
<button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-all flex justify-center items-center gap-2 shadow-xl shadow-slate-900/10">
                ادامه جهت تسویه حساب
                <span className="iconify rotate-180" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>

<nav className="fixed w-full z-40 top-0 start-0 border-b border-slate-200/50 glass-nav transition-all duration-300">
<div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<span className="self-center text-2xl font-black tracking-tighter whitespace-nowrap text-slate-900 group-hover:text-slate-700 transition-colors">SOLHIPOUR</span>
</a>
<div className="hidden md:flex items-center space-x-reverse space-x-6 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">زنانه</a>
<a className="hover:text-slate-900 transition-colors" href="#">مردانه</a>
<a className="hover:text-slate-900 transition-colors text-rose-600" href="#">تخفیفات</a>
</div>
</div>
<div className="flex items-center gap-3 md:gap-4">
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors" type="button">
<span className="iconify w-5 h-5" data-icon="lucide:search"></span>
</button>
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors" type="button">
<span className="iconify w-5 h-5" data-icon="lucide:user"></span>
</button>
<button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors group" onclick="toggleCart()" type="button">
<span className="iconify w-5 h-5" data-icon="lucide:shopping-bag"></span>
<span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-slate-900 rounded-full opacity-0 transition-opacity min-w-[18px]" id="cart-badge">0</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Fashion Hero" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 animate-[fadeInUp_1s_ease-out]">
<span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider shadow-lg">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                کالکشن جدید پاییزه
            </span>
<h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
                استایل خود را<br/>پیدا کنید
            </h1>
<p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto font-light">
                ترکیبی از اصالت و مدرنیته. جدیدترین طراحی‌های فصل را با بهترین کیفیت پارچه تجربه کنید.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="py-4 px-10 text-sm font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10" href="#products-carousel">مشاهده محصولات</a>
<a className="py-4 px-10 text-sm font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all" href="#">درباره ما</a>
</div>
</div>
</header>

<section className="py-12 border-b border-slate-200 bg-white">
<div className="max-w-[1500px] mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center gap-4 group cursor-default">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:truck"></span>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900">ارسال سریع</h4>
<p className="text-xs text-slate-500 mt-0.5">برای سفارشات بالای ۲ میلیون</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:shield-check"></span>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900">ضمانت اصالت</h4>
<p className="text-xs text-slate-500 mt-0.5">تضمین کیفیت تمامی کالاها</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:refresh-cw"></span>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900">۷ روز بازگشت</h4>
<p className="text-xs text-slate-500 mt-0.5">در صورت عدم رضایت</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:headphones"></span>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900">پشتیبانی</h4>
<p className="text-xs text-slate-500 mt-0.5">همه روزه از ۹ صبح تا ۹ شب</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 max-w-[1500px] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative h-[400px] group overflow-hidden rounded-2xl cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542272617-08f086303294?q=80&amp;w=1975&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 right-8 text-white">
<h3 className="text-3xl font-bold mb-2">کالکشن مردانه</h3>
<p className="text-sm opacity-90 mb-4">کت، شلوار و اکسسوری‌های فصل</p>
<span className="inline-flex items-center gap-2 text-sm font-bold border-b border-white pb-1">خرید کنید <span className="iconify" data-icon="lucide:arrow-left"></span></span>
</div>
</div>
<div className="relative h-[400px] group overflow-hidden rounded-2xl cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 right-8 text-white">
<h3 className="text-3xl font-bold mb-2">کالکشن زنانه</h3>
<p className="text-sm opacity-90 mb-4">جدیدترین ترندهای سال</p>
<span className="inline-flex items-center gap-2 text-sm font-bold border-b border-white pb-1">خرید کنید <span className="iconify" data-icon="lucide:arrow-left"></span></span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white overflow-hidden" id="products-carousel">
<div className="max-w-[1500px] mx-auto px-4 md:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-2">
                        منتخب هفته
                        <span className="text-xs font-normal text-white bg-slate-900 px-2 py-1 rounded">HOT</span>
</h2>
<p className="text-slate-500 text-sm">محصولاتی که بیشترین بازدید را داشته‌اند</p>
</div>
<div className="flex items-center gap-2">
<button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95 group" onclick="scrollProducts('right')">
<span className="iconify rotate-180" data-icon="lucide:arrow-right"></span>
</button>
<button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95" onclick="scrollProducts('left')">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth" id="product-scroll-container">

<div className="min-w-[280px] md:min-w-[320px] snap-center group select-none">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/95 backdrop-blur text-slate-900 py-3 rounded-xl shadow-lg font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2" onclick="addToCart('کت تک مردانه', '3500000', '...')">
<span className="iconify" data-icon="lucide:plus"></span>
                                افزودن به سبد
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-bold text-slate-900">کت تک مردانه کلاسیک</h3>
<p className="text-sm text-slate-500 mt-1">خاکستری تیره</p>
</div>
<p className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">۳.۵ م</p>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group select-none">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded">۳۰٪ تخفیف</div>
<div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/95 backdrop-blur text-slate-900 py-3 rounded-xl shadow-lg font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2" onclick="addToCart('مانتو بهاره لینن', '1900000', '...')">
<span className="iconify" data-icon="lucide:plus"></span>
                                افزودن به سبد
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-bold text-slate-900">مانتو بهاره لینن</h3>
<p className="text-sm text-slate-500 mt-1">زرد خردلی</p>
</div>
<p className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">۱.۹ م</p>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group select-none">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/95 backdrop-blur text-slate-900 py-3 rounded-xl shadow-lg font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2" onclick="addToCart('تیشرت نخی ساده', '550000', '...')">
<span className="iconify" data-icon="lucide:plus"></span>
                                افزودن به سبد
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-bold text-slate-900">تیشرت نخی مینیمال</h3>
<p className="text-sm text-slate-500 mt-1">سفید یخی</p>
</div>
<p className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">۵۵۰ ه.ت</p>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group select-none">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/95 backdrop-blur text-slate-900 py-3 rounded-xl shadow-lg font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2" onclick="addToCart('پیراهن مردانه', '1200000', '...')">
<span className="iconify" data-icon="lucide:plus"></span>
                                افزودن به سبد
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-bold text-slate-900">پیراهن آکسفورد</h3>
<p className="text-sm text-slate-500 mt-1">خاکی</p>
</div>
<p className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">۱.۲ م</p>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group select-none">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/95 backdrop-blur text-slate-900 py-3 rounded-xl shadow-lg font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2" onclick="addToCart('کاپشن جین', '2100000', '...')">
<span className="iconify" data-icon="lucide:plus"></span>
                                افزودن به سبد
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-bold text-slate-900">کاپشن جین اورسایز</h3>
<p className="text-sm text-slate-500 mt-1">آبی کلاسیک</p>
</div>
<p className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">۲.۱ م</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-20 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="text-center md:text-right flex-1">
<span className="text-emerald-400 font-bold tracking-wider text-sm uppercase mb-2 block">پیشنهاد ویژه فصل</span>
<h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">استایل خود را<br/>تکمیل کنید</h2>
<p className="text-slate-400 text-lg mb-8 max-w-md mx-auto md:mx-0">تا ۵۰٪ تخفیف روی تمامی اکسسوری‌ها و کیف‌های چرم طبیعی، فقط تا پایان هفته جاری.</p>
<div className="flex gap-4 justify-center md:justify-start">
<button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">مشاهده تخفیف‌ها</button>
</div>
</div>
<div className="flex-1 relative w-full max-w-md">
<div className="relative aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 rotate-3 hover:rotate-0 transition-transform duration-500">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-[1500px] mx-auto px-4 md:px-8">
<div className="flex justify-between items-center mb-10">
<h2 className="text-2xl font-bold text-slate-900">مجله خبری صلحی پور</h2>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1" href="#">
                    مشاهده همه
                    <span className="iconify" data-icon="lucide:arrow-left"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-bold text-slate-500 mb-2 block">۱۲ آبان ۱۴۰۳</span>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">راهنمای انتخاب پالتو برای زمستان</h3>
<p className="text-sm text-slate-500 line-clamp-2">نکاتی که باید قبل از خرید پالتوی زمستانی بدانید تا بهترین انتخاب را داشته باشید.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-bold text-slate-500 mb-2 block">۸ آبان ۱۴۰۳</span>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">رنگ‌های ترند سال ۲۰۲۵</h3>
<p className="text-sm text-slate-500 line-clamp-2">بررسی پالت رنگی محبوب طراحان بزرگ مد و فشن در سال آینده میلادی.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-bold text-slate-500 mb-2 block">۱ آبان ۱۴۰۳</span>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">مراقبت از لباس‌های پشمی</h3>
<p className="text-sm text-slate-500 line-clamp-2">چگونه طول عمر لباس‌های بافتنی و پشمی خود را افزایش دهیم؟</p>
</article>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-[1500px] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
<div className="md:col-span-4">
<a className="text-2xl font-black tracking-tighter text-slate-900 mb-6 block" href="#">SOLHIPOUR</a>
<p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-sm">
                        فروشگاه اینترنتی پوشاک صلحی پور، مرجع تخصصی مد و استایل. ما متعهد به ارائه بهترین کیفیت و جدیدترین ترندهای جهانی هستیم.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:instagram"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:twitter"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:linkedin"></span></a>
</div>
</div>
<div className="md:col-span-2">
<h3 className="text-sm font-bold text-slate-900 mb-4">دسترسی سریع</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">مردانه</a></li>
<li><a className="hover:text-slate-900" href="#">زنانه</a></li>
<li><a className="hover:text-slate-900" href="#">بچگانه</a></li>
<li><a className="hover:text-slate-900" href="#">اکسسوری</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h3 className="text-sm font-bold text-slate-900 mb-4">راهنما</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">تماس با ما</a></li>
<li><a className="hover:text-slate-900" href="#">سوالات متداول</a></li>
<li><a className="hover:text-slate-900" href="#">حریم خصوصی</a></li>
<li><a className="hover:text-slate-900" href="#">شرایط استفاده</a></li>
</ul>
</div>
<div className="md:col-span-4">
<h3 className="text-sm font-bold text-slate-900 mb-4">عضویت در خبرنامه</h3>
<p className="text-sm text-slate-500 mb-4">از تخفیف‌ها و کالکشن‌های جدید زودتر باخبر شوید.</p>
<form className="flex gap-2">
<input className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all" placeholder="ایمیل خود را وارد کنید" type="email"/>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors" type="submit">تایید</button>
</form>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© ۱۴۰۳ تمامی حقوق محفوظ است.</p>
<div className="flex gap-4">

<div className="w-8 h-5 bg-slate-100 rounded"></div>
<div className="w-8 h-5 bg-slate-100 rounded"></div>
<div className="w-8 h-5 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</footer>



    </>
  );
}
