import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Vazirmatn', 'sans-serif'],
serif: ['DM Serif Display', 'serif'],
},
colors: {
lime: {
400: '#a3e635',
500: '#84cc16',
950: '#1a2e05',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Simple initialization for Icons
        lucide.createIcons();

        // Smooth reveal for ID links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Allow default behavior for reveal logic if present, else smooth scroll
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    // If it's the product details, make sure it's visible
                    if(targetId === 'product-details-poco') {
                         targetElement.classList.remove('hidden');
                    }
                    
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-lime-900/10 to-transparent"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="text-xl font-serif text-white flex items-center gap-2 tracking-tight" href="#">
<span className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400">
<i className="w-5 h-5" data-lucide="layers"></i>
</span>
                    Tech<span className="text-lime-400">Mobile</span>
</a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-lime-400 transition-colors" href="#featured">ویژه‌ها</a>
<a className="hover:text-lime-400 transition-colors" href="#products">محصولات</a>
<a className="hover:text-lime-400 transition-colors" href="#specs">مشخصات فنی</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-lime-400 transition-colors items-center gap-2" href="#products">
                    فروشگاه
                    <i className="w-3 h-3" data-lucide="arrow-left"></i>
</a>
<button className="p-2 text-zinc-400 hover:text-white sm:hidden">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>
<main className="relative z-10 flex-grow pt-24">

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">

<div className="relative h-[400px] w-full perspective-container flex items-center justify-center order-2 lg:order-1">

<div className="absolute top-1/2 left-0 right-0 h-[1px] bg-lime-500 shadow-[0_0_20px_#84cc16] z-20"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center -space-y-12 pb-24 opacity-80">
<div className="w-48 h-32 border border-white/5 rounded-xl bg-zinc-900/10 backdrop-blur-sm stack-layer opacity-20"></div>
<div className="w-56 h-36 border border-white/10 rounded-xl bg-zinc-900/20 backdrop-blur-sm stack-layer opacity-40"></div>
<div className="w-64 h-40 border border-white/20 rounded-xl bg-zinc-900/30 backdrop-blur-sm stack-layer opacity-60"></div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center -space-y-12 pt-24">
<div className="w-64 h-40 border border-lime-500/30 rounded-xl bg-lime-900/5 backdrop-blur-md stack-layer z-10 animate-float"></div>
<div className="w-56 h-36 border border-lime-500/20 rounded-xl bg-lime-900/5 backdrop-blur-md stack-layer opacity-70 animate-float" style={{animationDelay: '0.2s'}}></div>
<div className="w-48 h-32 border border-lime-500/10 rounded-xl bg-lime-900/5 backdrop-blur-md stack-layer opacity-40 animate-float" style={{animationDelay: '0.4s'}}></div>
</div>
</div>

<div className="order-1 lg:order-2 text-right">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/20 bg-lime-500/5 text-lime-400 text-[10px] font-mono mb-8">
<span>// Open. Verifiable. Real.</span>
</div>
<h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
                    نسل جدید <br/>
<span className="text-zinc-500">تجربه خرید دیجیتال</span>
</h1>
<p className="text-zinc-400 text-sm sm:text-lg leading-relaxed mb-10 max-w-md mr-0">
                    بررسی تخصصی و بنچمارک واقعی گوشی‌های هوشمند. 
                    دسترسی به جدیدترین تکنولوژی‌های روز با گارانتی معتبر و قیمت شفاف.
                </p>
<div className="flex flex-wrap gap-4">
<a className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-colors flex items-center gap-2" href="#featured">
                        مشاهده بنچمارک‌ها
                        <i className="w-4 h-4" data-lucide="chevron-left"></i>
</a>
<a className="px-6 py-3 border border-white/10 text-zinc-300 text-sm font-medium rounded hover:border-lime-500/50 hover:text-white transition-colors" href="#products">
                        لیست قیمت روز
                    </a>
</div>

<div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
<div>
<div className="text-xs text-lime-500 mb-1 font-mono">0.1</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                            مقایسه دقیق عملکرد پردازنده و دوربین در شرایط واقعی.
                        </p>
</div>
<div>
<div className="text-xs text-lime-500 mb-1 font-mono">0.2</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                            تضمین اصالت کالا با شناسه رهگیری قابل استعلام.
                        </p>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#0a0a0a]" id="featured">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-right">
<div className="text-2xl font-serif text-white mb-1">98%</div>
<div className="text-xs text-zinc-500 font-mono uppercase">رضایت مشتریان</div>
</div>
<div className="text-center md:text-right">
<div className="text-2xl font-serif text-white mb-1">24h</div>
<div className="text-xs text-zinc-500 font-mono uppercase">ارسال سریع</div>
</div>
<div className="text-center md:text-right">
<div className="text-2xl font-serif text-white mb-1">+500</div>
<div className="text-xs text-zinc-500 font-mono uppercase">تنوع محصولات</div>
</div>
<div className="text-center md:text-right">
<div className="text-2xl font-serif text-lime-400 mb-1">100%</div>
<div className="text-xs text-zinc-500 font-mono uppercase">گارانتی اصالت</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 border-b border-white/5" id="products">
<div className="flex flex-col md:flex-row items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-serif text-white mb-2">پیشنهاد ویژه هفته</h2>
<p className="text-sm text-zinc-500 font-mono">// BEST VALUE PERFORMANCE</p>
</div>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
<span className="text-xs text-lime-400">موجودی محدود</span>
</div>
</div>

<div className="relative bg-zinc-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/30 transition-all duration-500 group">
<div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">

<div className="relative order-2 md:order-1 flex items-center justify-center bg-black/40 rounded-xl p-8 border border-white/5">
<div className="absolute inset-0 bg-lime-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<img alt="Xiaomi Poco X3" className="relative z-10 w-full max-w-sm object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="order-1 md:order-2 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-lime-500 text-black">XIAOMI</span>
<span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 text-zinc-400">Global Version</span>
</div>
<h3 className="text-3xl font-bold text-white mb-2">Poco X3 Pro</h3>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                            قاتل پرچمداران با پردازنده اسنپدراگون 860. نمایشگر ۱۲۰ هرتز و باتری قدرتمند ۵۱۶۰ میلی‌آمپری. بهترین انتخاب برای گیمینگ اقتصادی.
                        </p>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-3 bg-white/5 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">پردازنده</div>
<div className="text-xs text-white font-mono">Snapdragon 860</div>
</div>
<div className="p-3 bg-white/5 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">رم / حافظه</div>
<div className="text-xs text-white font-mono">8GB / 256GB</div>
</div>
<div className="p-3 bg-white/5 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">دوربین اصلی</div>
<div className="text-xs text-white font-mono">48 MP Quad</div>
</div>
<div className="p-3 bg-white/5 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">باتری</div>
<div className="text-xs text-white font-mono">5160 mAh</div>
</div>
</div>
<div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
<div>
<div className="text-xs text-zinc-500 line-through mb-1">12,500,000</div>
<div className="text-2xl font-semibold text-lime-400">10,850,000 <span className="text-xs font-normal text-zinc-400">تومان</span></div>
</div>
<a className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-lime-400 transition-colors flex items-center gap-2" href="#product-details-poco" onclick="document.getElementById('product-details-poco').classList.remove('hidden'); window.location.href='#product-details-poco'">
                                خرید سریع
                                <i className="w-4 h-4" data-lucide="shopping-bag"></i>
</a>
</div>
</div>
</div>
</div>

<div className="hidden mt-8 animate-fade-in border-t border-lime-500/20 pt-8" id="product-details-poco">
<div className="bg-lime-900/10 border border-lime-500/20 rounded-xl p-6">
<h4 className="text-lg font-semibold text-lime-400 mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="info"></i>
                        جزئیات تکمیلی سفارش
                    </h4>
<p className="text-sm text-zinc-300 mb-4">
                        شما در حال ثبت سفارش برای گوشی <strong>Xiaomi Poco X3 Pro</strong> رنگ مشکی فانتوم هستید.
                        <br/>
                        این محصول دارای ۱۸ ماه گارانتی شرکتی و کد رجیستری معتبر می‌باشد.
                    </p>
<button className="w-full sm:w-auto px-8 py-3 bg-lime-500 text-black font-bold rounded hover:bg-lime-400 transition-colors">
                        افزودن به سبد خرید و پرداخت نهایی
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-32">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-serif text-white">جدیدترین‌های بازار</h2>
<a className="text-xs font-mono text-zinc-500 hover:text-white flex items-center gap-2" href="#">
                    VIEW ALL PRODUCTS
                    <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/20 border border-white/5 hover:border-lime-500/30 rounded-xl p-4 transition-all duration-300">
<div className="aspect-square bg-black/50 rounded-lg mb-4 overflow-hidden relative">
<img alt="iPhone 15" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-lime-500 text-black text-[10px] font-bold px-2 py-0.5 rounded">NEW</div>
</div>
<h3 className="text-base font-medium text-white mb-1">iPhone 15 Pro Max</h3>
<div className="flex items-center justify-between mt-4">
<div className="text-sm text-zinc-400">68,500,000 <span className="text-[10px]">تومان</span></div>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all" href="#prod-1">
<i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 hover:border-lime-500/30 rounded-xl p-4 transition-all duration-300">
<div className="aspect-square bg-black/50 rounded-lg mb-4 overflow-hidden relative">
<img alt="S24 Ultra" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-white mb-1">Samsung S24 Ultra</h3>
<div className="flex items-center justify-between mt-4">
<div className="text-sm text-zinc-400">61,200,000 <span className="text-[10px]">تومان</span></div>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all" href="#prod-2">
<i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 hover:border-lime-500/30 rounded-xl p-4 transition-all duration-300">
<div className="aspect-square bg-black/50 rounded-lg mb-4 overflow-hidden relative">
<img alt="Xiaomi 13T" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-white mb-1">Xiaomi 13T Pro</h3>
<div className="flex items-center justify-between mt-4">
<div className="text-sm text-zinc-400">24,800,000 <span className="text-[10px]">تومان</span></div>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all" href="#prod-3">
<i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-32" id="specs">
<div className="grid md:grid-cols-3 gap-8">
<div className="col-span-1">
<h3 className="text-2xl font-serif text-white mb-4">مقایسه فنی</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        جدول مقایسه مشخصات فنی برترین گوشی‌های بازار در بازه قیمتی ۱۰ تا ۱۵ میلیون تومان.
                    </p>
<a className="text-lime-400 text-sm flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        مشاهده کامل
                        <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>
<div className="col-span-2">
<div className="overflow-x-auto">
<table className="w-full text-sm text-right">
<thead className="text-zinc-500 font-mono text-xs uppercase border-b border-white/10">
<tr>
<th className="py-4 px-4 font-normal">مدل</th>
<th className="py-4 px-4 font-normal">پردازنده</th>
<th className="py-4 px-4 font-normal">بنچمارک</th>
<th className="py-4 px-4 font-normal">قیمت</th>
</tr>
</thead>
<tbody className="text-zinc-300 divide-y divide-white/5">
<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 px-4 font-medium text-white group-hover:text-lime-400 transition-colors">Poco X3 Pro</td>
<td className="py-4 px-4 font-mono text-xs">Snapdragon 860</td>
<td className="py-4 px-4 font-mono text-lime-500">561,000</td>
<td className="py-4 px-4">10.8 M</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 px-4 font-medium text-white group-hover:text-lime-400 transition-colors">Galaxy A54</td>
<td className="py-4 px-4 font-mono text-xs">Exynos 1380</td>
<td className="py-4 px-4 font-mono text-zinc-500">507,000</td>
<td className="py-4 px-4">13.2 M</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 px-4 font-medium text-white group-hover:text-lime-400 transition-colors">Redmi Note 13</td>
<td className="py-4 px-4 font-mono text-xs">Dimensity 6080</td>
<td className="py-4 px-4 font-mono text-zinc-500">445,000</td>
<td className="py-4 px-4">9.5 M</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#080808] relative">

<div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-lg font-serif text-white flex items-center gap-2 mb-2" href="#">
<i className="w-5 h-5 text-lime-500" data-lucide="layers"></i>
                        TechMobile
                    </a>
<p className="text-xs text-zinc-500 font-mono">
                        // DESIGNED FOR PERFORMANCE
                    </p>
</div>
<div className="flex gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">قوانین</a>
<a className="hover:text-white transition-colors" href="#">حریم خصوصی</a>
<a className="hover:text-white transition-colors" href="#">تماس</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-lime-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-600 hover:text-lime-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-zinc-600 hover:text-lime-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5 text-center md:text-right">
<p className="text-[10px] text-zinc-600 font-mono">
                    © 2024 TECHMOBILE INC. ALL RIGHTS RESERVED.
                </p>
</div>
</div>
</footer>


    </>
  );
}
