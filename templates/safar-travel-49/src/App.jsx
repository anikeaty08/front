import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
},
colors: {
brand: {
50: '#F2FBF7',
100: '#E1F6EB',
200: '#C3ECD9',
300: '#95DDBF',
400: '#5EC59D',
500: '#38A77E',
600: '#288564',
700: '#236A51',
800: '#1F5442',
900: '#1A4537',
950: '#0B2820',
},
stone: {
850: '#1f1f1e',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Single Page Routing Logic
        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none'; // Ensure display is none for transition reset
            });

            // Show selected section
            const targetSection = document.getElementById(pageId);
            if (targetSection) {
                targetSection.style.display = 'block';
                // Small timeout to allow display:block to apply before opacity transition
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 10);
            }

            // Update Navbar State
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active', 'text-white', 'bg-white/10');
                link.classList.add('text-stone-300');
            });

            const activeBtn = document.getElementById('nav-' + pageId);
            if (activeBtn) {
                activeBtn.classList.add('active', 'text-white', 'bg-white/10');
                activeBtn.classList.remove('text-stone-300');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 p-4">
<nav className="bg-brand-950/90 backdrop-blur-xl text-white rounded-2xl shadow-2xl shadow-brand-900/10 border border-white/5 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="switchPage('home')">
<div className="bg-gradient-to-tr from-brand-400 to-brand-600 p-2 rounded-lg text-brand-950">
<i className="w-5 h-5" data-lucide="compass"></i>
</div>
<span className="text-lg font-bold tracking-tighter">سفـر</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
<button className="nav-link active px-4 py-2 rounded-lg text-sm font-medium text-stone-300 hover:text-white transition-all" id="nav-home" onclick="switchPage('home')">خانه</button>
<button className="nav-link px-4 py-2 rounded-lg text-sm font-medium text-stone-300 hover:text-white transition-all" id="nav-destinations" onclick="switchPage('destinations')">مقاصد</button>
<button className="nav-link px-4 py-2 rounded-lg text-sm font-medium text-stone-300 hover:text-white transition-all" id="nav-tours" onclick="switchPage('tours')">تورها</button>
<button className="nav-link px-4 py-2 rounded-lg text-sm font-medium text-stone-300 hover:text-white transition-all" id="nav-about" onclick="switchPage('about')">درباره ما</button>
</div>
<div className="flex items-center gap-3">
<div className="hidden lg:flex items-center gap-2 text-xs font-medium text-stone-400 border-l border-white/10 pl-4 ml-2">
<i className="w-3 h-3" data-lucide="phone"></i>
<span>۰۲۱-۸۸۸۸۱۲۳۴</span>
</div>
<button className="bg-white text-brand-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-200 transition-colors shadow-lg shadow-white/10 flex items-center gap-2 group">
<span>ورود</span>
<i className="w-4 h-4 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i>
</button>
</div>
</nav>
</header>

<div className="h-28"></div>


<main className="page-section active w-full max-w-7xl mx-auto px-4 md:px-6 mb-20" id="home">

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 min-h-[80vh]">

<div className="md:col-span-8 flex flex-col gap-4">
<div className="relative bg-stone-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-end items-start overflow-hidden min-h-[500px] group">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d92d2c04-2d44-4e95-95f5-186ff07dfb6b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent"></div>
<div className="relative z-10 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-medium mb-6 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                            فصل سفر به جنوب
                        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                            ایران را دوباره <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-300 to-white">کشف کنید</span>
</h1>
<p className="text-stone-300 text-lg max-w-lg leading-relaxed mb-10">
                            تجربه‌ای متفاوت از گردشگری با خدماتی در کلاس جهانی. ما پیچیدگی‌های سفر را حذف می‌کنیم تا شما فقط لذت ببرید.
                        </p>

<div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-2xl">
<div className="flex-1 bg-stone-950/40 rounded-xl px-4 py-3 flex items-center gap-3 border border-white/5 hover:border-white/20 transition-colors cursor-pointer group/input">
<i className="text-stone-400 w-5 h-5 group-hover/input:text-brand-400 transition-colors" data-lucide="map-pin"></i>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider">مقصد</span>
<input className="bg-transparent border-none p-0 text-white text-sm placeholder-stone-400 focus:ring-0 w-full" placeholder="کجا می‌روید؟" type="text"/>
</div>
</div>
<div className="flex-1 bg-stone-950/40 rounded-xl px-4 py-3 flex items-center gap-3 border border-white/5 hover:border-white/20 transition-colors cursor-pointer group/input">
<i className="text-stone-400 w-5 h-5 group-hover/input:text-brand-400 transition-colors" data-lucide="calendar"></i>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider">تاریخ</span>
<span className="text-white text-sm">انتخاب کنید</span>
</div>
</div>
<button className="bg-brand-500 hover:bg-brand-400 text-brand-950 px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center" onclick="switchPage('destinations')">
                                جستجو
                            </button>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4 md:gap-6">

<div className="bg-white border border-stone-200 rounded-[2.5rem] p-8 flex flex-col justify-center flex-1 shadow-sm hover:shadow-md transition-shadow">
<div className="flex -space-x-3 space-x-reverse mb-6">
<img alt="u1" className="w-12 h-12 rounded-full border-4 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="u2" className="w-12 h-12 rounded-full border-4 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="w-12 h-12 rounded-full border-4 border-white bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600">+2k</div>
</div>
<div className="space-y-1">
<h3 className="text-4xl font-semibold text-stone-900 tracking-tight">۴.۹/۵</h3>
<p className="text-stone-500 font-medium">رضایت مسافران ما</p>
</div>
</div>

<div className="bg-brand-900 rounded-[2.5rem] p-8 flex flex-col justify-between text-white relative overflow-hidden flex-1 group cursor-pointer" onclick="switchPage('tours')">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-700 to-transparent opacity-50"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
<i className="w-6 h-6 text-brand-300" data-lucide="percent"></i>
</div>
<div className="bg-brand-500 text-brand-950 text-xs font-bold px-3 py-1.5 rounded-full">ویژه</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-2">تخفیف‌های پاییزی</h3>
<div className="flex items-center gap-2 text-brand-200 text-sm group-hover:text-white transition-colors">
                            مشاهده تورها
                            <i className="w-4 h-4 transition-transform group-hover:-translate-x-1" data-lucide="arrow-left"></i>
</div>
</div>
</div>
</div>
</div>

<section className="mt-24">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight">محبوب‌ترین‌ها</h2>
<p className="text-stone-500 mt-2">مقاصدی که بیشترین بازدید را داشته‌اند</p>
</div>
<button className="text-sm font-medium text-stone-900 border border-stone-200 px-4 py-2 rounded-full hover:bg-stone-50 transition-colors" onclick="switchPage('destinations')">مشاهده همه</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
<img alt="Shiraz" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 right-6 text-white">
<h3 className="text-xl font-semibold">شیراز</h3>
<p className="text-sm text-stone-200">فارس</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
<img alt="Isfahan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 right-6 text-white">
<h3 className="text-xl font-semibold">اصفهان</h3>
<p className="text-sm text-stone-200">اصفهان</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
<img alt="North" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 right-6 text-white">
<h3 className="text-xl font-semibold">رامسر</h3>
<p className="text-sm text-stone-200">مازندران</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
<img alt="Yazd" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 right-6 text-white">
<h3 className="text-xl font-semibold">یزد</h3>
<p className="text-sm text-stone-200">یزد</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section w-full max-w-7xl mx-auto px-4 md:px-6 mb-20" id="destinations">
<div className="bg-stone-900 text-white rounded-[2.5rem] p-10 mb-12 relative overflow-hidden">
<div className="relative z-10 max-w-2xl">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">کاوش مقاصد</h1>
<p className="text-stone-300 text-lg">از کویرهای پرستاره تا جنگل‌های هیرکانی، ایران را بگردید.</p>
</div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900/50 to-transparent pointer-events-none"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-3 space-y-8">
<div>
<h3 className="font-semibold text-lg mb-4">فیلترها</h3>
<div className="space-y-4">

<div className="relative">
<input className="w-full bg-white border border-stone-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-brand-500 transition-colors" placeholder="نام شهر..." type="text"/>
<i className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" data-lucide="search"></i>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-6">
<h4 className="text-sm font-medium text-stone-900 mb-4">منطقه</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 rounded border border-stone-300 flex items-center justify-center transition-colors">
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">شمال</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 rounded border border-stone-300 flex items-center justify-center transition-colors">
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">جنوب (کیش/قشم)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 rounded border border-stone-300 flex items-center justify-center transition-colors">
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">کویر مرکزی</span>
</label>
</div>
</div>
<div className="border-t border-stone-200 pt-6">
<h4 className="text-sm font-medium text-stone-900 mb-4">نوع سفر</h4>
<div className="flex flex-wrap gap-2">
<button className="text-xs border border-stone-200 px-3 py-1.5 rounded-full hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-all">تاریخی</button>
<button className="text-xs border border-stone-200 px-3 py-1.5 rounded-full hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-all">طبیعت</button>
<button className="text-xs border border-stone-200 px-3 py-1.5 rounded-full hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-all">لوکس</button>
<button className="text-xs border border-stone-200 px-3 py-1.5 rounded-full hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-all">اقتصادی</button>
</div>
</div>
</div>

<div className="lg:col-span-9">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">۴ روزه</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg">شیراز گردی</h3>
<div className="flex items-center gap-1 text-xs font-medium text-amber-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.8
                                </div>
</div>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">بازدید از تخت جمشید، حافظیه و باغ ارم با اقامت در هتل ۵ ستاره.</p>
<div className="flex items-center justify-between pt-4 border-t border-stone-100">
<span className="text-stone-900 font-bold">۳,۵۰۰,۰۰۰ <span className="text-xs font-normal text-stone-500">تومان</span></span>
<button className="bg-stone-900 text-white p-2 rounded-full hover:bg-brand-500 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
</div>
</div>
</div>

<div className="bg-white border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">۳ روزه</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg">کیش رویایی</h3>
<div className="flex items-center gap-1 text-xs font-medium text-amber-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.9
                                </div>
</div>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">تفریحات دریایی، هتل داریوش و گشت جزیره با ترانسفر رایگان.</p>
<div className="flex items-center justify-between pt-4 border-t border-stone-100">
<span className="text-stone-900 font-bold">۵,۲۰۰,۰۰۰ <span className="text-xs font-normal text-stone-500">تومان</span></span>
<button className="bg-stone-900 text-white p-2 rounded-full hover:bg-brand-500 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
</div>
</div>
</div>

<div className="bg-white border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 group">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">۲ روزه</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg">کویر مرنجاب</h3>
<div className="flex items-center gap-1 text-xs font-medium text-amber-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.7
                                </div>
</div>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">شب نشینی زیر ستاره‌ها، سافاری و عکاسی در تپه‌های شنی.</p>
<div className="flex items-center justify-between pt-4 border-t border-stone-100">
<span className="text-stone-900 font-bold">۱,۸۰۰,۰۰۰ <span className="text-xs font-normal text-stone-500">تومان</span></span>
<button className="bg-stone-900 text-white p-2 rounded-full hover:bg-brand-500 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section w-full max-w-5xl mx-auto px-4 md:px-6 mb-20" id="tours">
<div className="text-center mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-stone-900">تورهای ویژه فصل</h1>
<p className="text-stone-500 mt-2">بهترین پکیج‌های مسافرتی با خدمات کامل</p>
</div>
<div className="space-y-6">

<div className="bg-white border border-stone-200 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:border-brand-300 transition-all shadow-sm group">
<div className="w-full md:w-64 h-48 md:h-auto rounded-2xl overflow-hidden relative shrink-0">
<img alt="Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d92d2c04-2d44-4e95-95f5-186ff07dfb6b_800w.webp"/>
<div className="absolute top-3 right-3 bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded">ظرفیت محدود</div>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-stone-900">تور بزرگ شیراز و اصفهان</h3>
<div className="flex items-center gap-2">
<span className="line-through text-stone-400 text-sm">۸,۰۰۰,۰۰۰</span>
<span className="text-brand-600 font-bold text-lg">۷,۲۰۰,۰۰۰</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-4">
                            یک هفته سفر فراموش نشدنی در قلب تاریخ ایران. اقامت در هتل‌های سنتی، ترانسفر اختصاصی و راهنمای تور مجرب.
                        </p>
<div className="flex gap-4 text-xs text-stone-600 font-medium mb-6">
<div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> ۷ روز
                            </div>
<div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="users"></i> گروهی
                            </div>
<div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="plane"></i> پرواز ماهان
                            </div>
</div>
</div>
<div className="flex items-center justify-between border-t border-stone-100 pt-4">
<div className="flex -space-x-2 space-x-reverse">
<img alt="user" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="user" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-[10px] text-stone-500">+12</span>
</div>
<button className="bg-stone-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-brand-600 transition-colors">
                            رزرو آنلاین
                        </button>
</div>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:border-brand-300 transition-all shadow-sm group">
<div className="w-full md:w-64 h-48 md:h-auto rounded-2xl overflow-hidden relative shrink-0">
<img alt="Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-stone-900">تور طبیعت گردی گیلان</h3>
<div className="flex items-center gap-2">
<span className="text-brand-600 font-bold text-lg">۴,۵۰۰,۰۰۰</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-4">
                            کمپ در ییلاقات ماسال، بازدید از قلعه رودخان و طعم غذاهای محلی شمالی.
                        </p>
<div className="flex gap-4 text-xs text-stone-600 font-medium mb-6">
<div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> ۳ روز
                            </div>
<div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="users"></i> اکوتوریسم
                            </div>
<div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded">
<i className="w-3.5 h-3.5" data-lucide="bus"></i> اتوبوس VIP
                            </div>
</div>
</div>
<div className="flex items-center justify-between border-t border-stone-100 pt-4">
<div className="flex -space-x-2 space-x-reverse">
<img alt="user" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-[10px] text-stone-500">+8</span>
</div>
<button className="bg-stone-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-brand-600 transition-colors">
                            رزرو آنلاین
                        </button>
</div>
</div>
</div>
</div>
</main>

<main className="page-section w-full max-w-4xl mx-auto px-4 md:px-6 mb-20" id="about">
<div className="text-center space-y-4 mb-16">
<span className="text-brand-600 font-semibold tracking-wide text-xs uppercase bg-brand-50 px-3 py-1 rounded-full border border-brand-100">داستان ما</span>
<h1 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">ما کی هستیم؟</h1>
<p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
                سفـر پلتفرمی است که با عشق به ایران و تکنولوژی ساخته شده است. ماموریت ما ساده‌سازی فرآیند سفر و معرفی زیبایی‌های سرزمینمان به جهانیان است.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="bg-stone-100 rounded-3xl p-8">
<i className="w-8 h-8 text-brand-600 mb-4" data-lucide="target"></i>
<h3 className="text-xl font-bold mb-2">هدف ما</h3>
<p className="text-stone-500 text-sm leading-relaxed">ارائه با کیفیت‌ترین خدمات گردشگری با قیمتی رقابتی و پشتیبانی ۲۴ ساعته برای اطمینان خاطر مسافران.</p>
</div>
<div className="bg-stone-100 rounded-3xl p-8">
<i className="w-8 h-8 text-brand-600 mb-4" data-lucide="shield"></i>
<h3 className="text-xl font-bold mb-2">تعهد ما</h3>
<p className="text-stone-500 text-sm leading-relaxed">ما متعهد به حفظ محیط زیست و حمایت از جوامع محلی در تمامی مقاصد گردشگری خود هستیم.</p>
</div>
</div>
<div className="bg-brand-950 rounded-3xl p-10 text-center text-white relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-3xl font-semibold mb-6">به تیم ما بپیوندید</h2>
<p className="text-brand-100/70 mb-8 max-w-lg mx-auto">ما همیشه به دنبال افراد خلاق و پرانرژی هستیم تا آینده گردشگری را با هم بسازیم.</p>
<button className="bg-white text-brand-950 px-6 py-3 rounded-xl font-semibold hover:bg-brand-200 transition-colors">
                    مشاهده فرصت‌های شغلی
                </button>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-800 to-transparent pointer-events-none"></div>
</div>
</main>

<footer className="mt-auto bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<i className="w-6 h-6 text-brand-500" data-lucide="compass"></i>
<span className="text-xl font-bold tracking-tight text-stone-900">سفـر</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-6">
                        سامانه جامع برنامه‌ریزی و رزرو خدمات گردشگری در ایران. تجربه‌ای امن و لذت‌بخش برای تمام فصول.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-brand-500 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-brand-500 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-brand-500 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-4">دسترسی سریع</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-brand-600 transition-colors" href="#" onclick="switchPage('home')">خانه</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#" onclick="switchPage('destinations')">مقاصد</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#" onclick="switchPage('tours')">تورها</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#" onclick="switchPage('about')">درباره ما</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-4">پشتیبانی</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">سوالات متداول</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">شرایط و قوانین</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">حریم خصوصی</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">تماس با ما</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-4">نماد اعتماد</h4>
<div className="flex gap-2">
<div className="bg-stone-100 w-16 h-16 rounded-lg"></div>
<div className="bg-stone-100 w-16 h-16 rounded-lg"></div>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>تمامی حقوق برای "سفـر" محفوظ است © ۱۴۰۳</p>
<div className="flex gap-4">
<span>طراحی شده با عشق</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
