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
colors: {
brand: {
red: '#C81E1E', // Deep Red
dark: '#0F172A', // Navy/Charcoal
accent: '#F59E0B', // Amber
surface: '#FAFAF9', // Warm off-white
gray: '#F5F5F4'
}
},
fontSize: {
xs: '0.875rem',    // 14px
sm: '1rem',        // 16px
base: '1.125rem',  // 18px (Body text +1 size)
lg: '1.25rem',     // 20px
xl: '1.5rem',      // 24px
'2xl': '1.875rem', // 30px
'3xl': '2.25rem',  // 36px
'4xl': '3rem',     // 48px
},
letterSpacing: {
tight: '-0.025em',
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex flex-col justify-center">
<span className="text-2xl font-bold tracking-tight text-brand-red leading-none">HALOTEC</span>
<span className="text-xs font-medium text-slate-500 tracking-wider">DAUHALOTEC.COM</span>
</div>

<div className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#benefits">Công dụng</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#how-it-works">Cơ chế</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#products">Chọn đúng loại</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#before-after">Trước–Sau</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#trust">Bằng chứng</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#reviews">Đánh giá</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-brand-red hover:bg-red-800 transition-all shadow-md hover:shadow-lg" href="#products">
                        MUA NGAY
                    </a>

<button className="lg:hidden p-2 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-stone-100 z-0">

<div className="opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium">
<svg aria-hidden="true" className="lucide lucide-alert-triangle w-4 h-4" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                        Dành cho xe yếu – ì – ồn – rung – hao nhiên liệu – khói (tùy tình trạng)
                    </div>
<h1 className="lg:text-5xl leading-snug text-3xl font-semibold text-slate-900 tracking-tight">
                        PHỤC HỒI ĐỘNG CƠ <br className="hidden lg:block"/>
<span className="text-brand-red">KHỎE NHƯ MỚI</span> – TĂNG HIỆU SUẤT – TIẾT KIỆM NHIÊN LIỆU
                    </h1>
<p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                        Chọn đúng dòng Động cơ hoặc Buồng đốt, đúng dung tích theo loại xe.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-700"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-slate-700 font-medium">Hết khói đen (tùy tình trạng xe)</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-700"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-slate-700 font-medium">Cải thiện vận hành / đạt khí thải (tùy tình trạng xe)</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-700"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-slate-700 font-medium">Tiết kiệm nhiên liệu (tùy tình trạng xe &amp; cách vận hành)</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-green-100 p-1 rounded-full text-green-700"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-slate-700 font-medium">Máy êm, bốc, khỏe (tùy tình trạng xe)</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-8 py-4 bg-brand-red text-white text-base font-semibold rounded-lg shadow-lg shadow-brand-red/30 hover:bg-red-800 hover:-translate-y-0.5 transition-all" href="#products">
                            MUA NGAY
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-300 text-base font-semibold rounded-lg hover:bg-slate-50 transition-all" href="#">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5 mr-2 text-slate-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            TƯ VẤN NHANH (Zalo/Hotline)
                        </a>
</div>
<p className="text-sm text-slate-500 italic">
                        Gửi loại xe + dung tích dầu/nhớt + tình trạng hiện tại, Halotec chọn đúng loại cho bạn.
                    </p>
</div>

<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-white">

<div className="aspect-[4/3] bg-stone-200 flex items-center justify-center relative group">
<img alt="Engine Mechanic" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="font-semibold text-lg">Công nghệ mạ ion kim loại</div>
<div className="text-sm text-white/80">Phục hồi chi tiết máy không cần tháo rã</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 md:-right-10 bg-brand-dark text-white p-4 rounded-xl shadow-xl max-w-[160px] hidden md:block">
<div className="text-brand-accent mb-1"><svg aria-hidden="true" className="lucide lucide-award w-8 h-8" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></div>
<div className="text-sm font-semibold leading-tight">Công nghệ được cấp bằng sáng chế</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<span className="text-sm font-semibold text-slate-700">Thương hiệu 21 năm – được kiểm chứng</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-green-50 text-green-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<span className="text-sm font-semibold text-slate-700">Tư vấn kỹ thuật 1:1</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
<span className="text-sm font-semibold text-slate-700">Cam kết chính hãng</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-truck w-6 h-6" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></div>
<span className="text-sm font-semibold text-slate-700">Giao nhanh (tùy khu vực)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-stone-100 pt-8">
<div className="">
<div className="text-3xl font-bold text-slate-900 tracking-tight">50,000+</div>
<div className="text-base text-slate-500 mt-1">Khách hàng đã sử dụng</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">100,000+</div>
<div className="text-base text-slate-500 mt-1">Lượt tư vấn kỹ thuật</div>
</div>
<div>
<div className="text-3xl font-bold text-brand-accent tracking-tight flex justify-center items-center gap-2">
                        4.9/5 <svg aria-hidden="true" className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="text-base text-slate-500 mt-1">Điểm đánh giá trung bình</div>
</div>
</div>
<div className="mt-10 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-10 w-32 bg-slate-200 rounded animate-pulse"></div>
<div className="h-10 w-32 bg-slate-200 rounded animate-pulse"></div>
<div className="h-10 w-32 bg-slate-200 rounded animate-pulse"></div>
<div className="h-10 w-32 bg-slate-200 rounded animate-pulse"></div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">CÔNG DỤNG VƯỢT TRỘI</h2>
<p className="text-slate-600 mt-2">Giải pháp toàn diện cho động cơ xe của bạn</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-100 text-brand-red rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="lucide lucide-settings w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">DẦU PHỤC HỒI ĐỘNG CƠ</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-red shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Bốc hơn – êm hơn – mượt hơn (tùy tình trạng)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-red shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Giảm rung/ồn (tùy tình trạng)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-red shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Tiết kiệm nhiên liệu (tùy tình trạng)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-red shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Giảm hao / giảm khói (tùy tình trạng)</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-amber-100 text-brand-accent rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="lucide lucide-flame w-6 h-6" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">DẦU PHỤC HỒI BUỒNG ĐỐT</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-accent shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Làm sạch kim phun</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-accent shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Phục hồi buồng đốt (tùy tình trạng)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-accent shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Giảm khí thải (tùy tình trạng)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-brand-accent shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700">Bảo vệ môi trường</span>
</li>
</ul>
</div>
</div>
<p className="text-center text-sm text-slate-500 mt-8 bg-stone-100 py-3 rounded-lg border border-stone-200 inline-block px-6 mx-auto w-full md:w-auto">
<svg aria-hidden="true" className="lucide lucide-info w-4 h-4 inline mr-1 mb-0.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                Hiệu quả phụ thuộc tình trạng xe, mức độ hao mòn và cách sử dụng.
            </p>
</div>
</section>

<section className="py-20 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                    Halotec tác động theo 3 lớp: <br className="md:hidden"/>
<span className="text-brand-red">Làm sạch – Bồi đắp – Ổn định vận hành</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:border-brand-red group-hover:text-brand-red transition-colors shadow-sm">
                        1
                    </div>
<div className="p-4 bg-stone-50 rounded-xl w-full border border-stone-100">
<svg aria-hidden="true" className="lucide lucide-droplets w-8 h-8 text-blue-500 mx-auto mb-3" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<h3 className="text-lg font-bold text-slate-900">Làm sạch cặn bẩn</h3>
</div>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:border-brand-red group-hover:text-brand-red transition-colors shadow-sm">
                        2
                    </div>
<div className="p-4 bg-stone-50 rounded-xl w-full border border-stone-100">
<svg aria-hidden="true" className="lucide lucide-layers w-8 h-8 text-brand-red mx-auto mb-3" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-lg font-bold text-slate-900">Hỗ trợ phục hồi bề mặt ma sát</h3>
</div>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:border-brand-red group-hover:text-brand-red transition-colors shadow-sm">
                        3
                    </div>
<div className="p-4 bg-stone-50 rounded-xl w-full border border-stone-100">
<svg aria-hidden="true" className="lucide lucide-activity w-8 h-8 text-green-500 mx-auto mb-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-lg font-bold text-slate-900">Ổn định vận hành</h3>
</div>
</div>
</div>
<div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg max-w-3xl mx-auto flex gap-4 items-start">
<svg aria-hidden="true" className="lucide lucide-alert-octagon w-6 h-6 text-red-600 shrink-0" data-lucide="alert-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path></svg>
<p className="text-slate-700 font-medium">
                    Halotec không thay thế sửa chữa cơ khí. Xe rò rỉ dầu, gõ máy, lỗi nặng cần kiểm tra trước.
                </p>
</div>
</div>
</section>

<section className="py-20 bg-brand-dark text-white" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Chọn đúng loại – đúng dung tích – đúng tình trạng xe</h2>
<p className="text-slate-400 text-lg">Đảm bảo hiệu quả tối đa cho phương tiện của bạn</p>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
<div className="bg-brand-red p-2 rounded-lg"><svg aria-hidden="true" className="lucide lucide-settings w-5 h-5 text-white" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
<h3 className="text-2xl font-bold text-white tracking-tight">PHỤC HỒI ĐỘNG CƠ</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-red transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi động cơ xe máy 50ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-red hover:text-white transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-red transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi động cơ xe ô tô 200ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-red hover:text-white transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-red transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi động cơ xe tải 500ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-red hover:text-white transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-red transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi động cơ xe tải 800ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-red hover:text-white transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
<div className="bg-brand-accent p-2 rounded-lg text-brand-dark"><svg aria-hidden="true" className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg></div>
<h3 className="text-2xl font-bold text-white tracking-tight">PHỤC HỒI BUỒNG ĐỐT</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-accent transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi buồng đốt 50ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-accent transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-accent transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi buồng đốt 200ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-accent transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-accent transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi buồng đốt 500ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-accent transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>

<div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-brand-accent transition-all group flex flex-col h-full">
<div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500 relative overflow-hidden">
<span className="text-sm">Ảnh Sản Phẩm</span>
</div>
<h4 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-[3rem]">Dầu phục hồi buồng đốt 800ml</h4>
<div className="mt-auto">
<div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-4"></div>
<button className="w-full py-2 bg-white text-brand-dark font-semibold rounded hover:bg-brand-accent transition-colors text-sm">
                                Chọn loại này
                            </button>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur border border-slate-600 rounded-2xl p-8">
<h3 className="text-xl font-bold text-center mb-6 text-brand-accent uppercase">Tư vấn chọn đúng loại</h3>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<input className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none" placeholder="Loại xe (VD: Honda Civic, Exciter...)" type="text"/>
<input className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none" placeholder="Dung tích dầu/nhớt" type="text"/>
</div>
<input className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none" placeholder="Tình trạng xe (khói, ì, kêu to...)" type="text"/>
<button className="w-full py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/50">
                        NHẬN TƯ VẤN 1:1
                    </button>
</form>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="before-after">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trước và sau khi sử dụng Halotec</h2>
</div>
<div className="grid md:grid-cols-2 gap-10 mb-16">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center text-slate-400">
                            Trước: ...
                        </div>
<div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center text-slate-400">
                            Sau: ...
                        </div>
</div>
<p className="text-sm text-slate-600 font-medium">Minh chứng: [ảnh/clip]</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center text-slate-400">
                            Trước: ...
                        </div>
<div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center text-slate-400">
                            Sau: ...
                        </div>
</div>
<p className="text-sm text-slate-600 font-medium">Minh chứng: [ảnh/clip]</p>
</div>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 mb-12 relative overflow-hidden" id="reviews">
<div className="absolute top-0 right-0 p-8 text-stone-100 opacity-20"><svg aria-hidden="true" className="lucide lucide-quote w-32 h-32" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
<div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div className="aspect-video bg-stone-900 rounded-lg flex items-center justify-center text-white/50">
                        [Video Testimonial Placeholder]
                    </div>
<div>
<div className="flex text-brand-accent mb-4">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="text-xl text-slate-700 italic mb-6">
                            "Xe chạy êm hơn hẳn, cảm giác bốc hơn. Trước đây sáng ra đề máy hay bị khói, giờ hết hẳn."
                        </blockquote>
<div className="font-bold text-slate-900">Anh Nguyễn Văn A</div>
<div className="text-sm text-slate-500">Chủ xe Toyota Vios - Hà Nội</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4">
<a className="px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all" href="#products">MUA NGAY</a>
<a className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-stone-50 transition-all" href="#">TƯ VẤN NHANH</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-200" id="trust">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">Thương hiệu 21 năm – được kiểm chứng</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center justify-items-center">
<div className="h-64 w-full bg-stone-100 border border-stone-200 rounded-xl flex items-center justify-center text-slate-400 p-4 text-center">
                    [Chứng nhận chất lượng]
                </div>
<div className="h-64 w-full bg-stone-100 border border-stone-200 rounded-xl flex items-center justify-center text-slate-400 p-4 text-center">
                    [Báo chí nói về Halotec]
                </div>
<div className="space-y-4 w-full">
<div className="bg-green-50 p-4 rounded-xl flex items-center gap-4 border border-green-100">
<div className="bg-green-100 p-2 rounded-full text-green-600"><svg aria-hidden="true" className="lucide lucide-check-circle w-6 h-6" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div>
<span className="font-semibold text-slate-700">Cam kết chính hãng</span>
</div>
<div className="bg-blue-50 p-4 rounded-xl flex items-center gap-4 border border-blue-100">
<div className="bg-blue-100 p-2 rounded-full text-blue-600"><svg aria-hidden="true" className="lucide lucide-refresh-cw w-6 h-6" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></div>
<span className="font-semibold text-slate-700">Chính sách đổi trả/bảo hành</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-center text-slate-900 tracking-tight mb-12">Câu hỏi thường gặp</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Halotec có thể phục hồi động cơ cho những loại phương tiện nào?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Halotec có các dòng sản phẩm chuyên biệt cho xe máy, ô tô con và xe tải. Tùy tình trạng và dung tích động cơ sẽ có loại phù hợp.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Xe mới có nên sử dụng dầu trung tu Halotec không?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Có thể sử dụng liều lượng bảo dưỡng để giúp động cơ vận hành trơn tru hơn và kéo dài tuổi thọ ngay từ đầu.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Xe cũ có nên sử dụng dầu trung tu Halotec không?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Rất nên sử dụng. Halotec đặc biệt hiệu quả với xe cũ, giúp phục hồi các chi tiết bị hao mòn, giảm khói và tiếng ồn (tùy tình trạng).
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Một lần sử dụng dầu trung tu Halotec có tác dụng bao lâu?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Tác dụng có thể kéo dài hàng nghìn km tùy vào điều kiện vận hành. Chúng tôi khuyên dùng định kỳ để đạt hiệu quả tốt nhất.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Dùng Halotec có ảnh hưởng gì đến động cơ không?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Halotec sử dụng công nghệ mạ ion, bám vào bề mặt ma sát kim loại, không gây hại và không làm thay đổi tính chất của dầu nhớt chính.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Halotec có bảo hành hay cam kết gì không?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Chúng tôi cam kết hàng chính hãng 100% và hỗ trợ tư vấn kỹ thuật trọn đời sản phẩm.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-800 text-lg">Mua Dầu Trung Tu Halotec ở đâu?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        Bạn có thể đặt mua ngay tại website DAUHALOTEC.COM hoặc liên hệ hotline để được chỉ dẫn đại lý gần nhất.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-brand-red/10"></div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Chọn đúng loại Halotec – 
                <span className="text-brand-accent">Chạy êm hơn, bốc hơn, tiết kiệm hơn</span>
<span className="block text-xl md:text-2xl font-normal text-slate-400 mt-3">(tùy tình trạng)</span>
</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
<a className="px-10 py-5 bg-brand-red text-white text-lg font-bold rounded-lg shadow-xl shadow-red-900/50 hover:bg-red-700 hover:-translate-y-1 transition-all" href="#products">
                    MUA NGAY
                </a>
<a className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all" href="#">
                    TƯ VẤN NHANH
                </a>
</div>
<p className="text-slate-400 text-sm">
                Nhắn 'LOẠI XE + DUNG TÍCH DẦU + TÌNH TRẠNG' để được chốt đúng sản phẩm trong 60 giây.
            </p>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-bold text-brand-red tracking-tight">HALOTEC</span>
<p className="mt-4 text-slate-600 max-w-sm">
                        [Tên doanh nghiệp]<br/>
                        [MST]<br/>
                        [Địa chỉ]
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Liên hệ</h4>
<p className="text-slate-600 mb-2">Hotline/Zalo: [SĐT]</p>
<div className="flex gap-4 mt-4">

<div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white transition-colors cursor-pointer"><svg aria-hidden="true" className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></div>
<div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white transition-colors cursor-pointer"><svg aria-hidden="true" className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></div>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Hỗ trợ</h4>
<ul className="space-y-2 text-slate-600">
<li><a className="hover:text-brand-red" href="#">Chính sách giao hàng</a></li>
<li><a className="hover:text-brand-red" href="#">Đổi trả</a></li>
<li><a className="hover:text-brand-red" href="#">Bảo hành</a></li>
<li><a className="hover:text-brand-red" href="#">Bảo mật</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 text-center text-slate-500 text-sm">
                © 2024 HALOTEC. All rights reserved.
            </div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-3 z-50 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<div className="grid grid-cols-3 gap-2">
<a className="flex flex-col items-center justify-center py-2 text-slate-600 active:text-brand-red" href="#">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5 mb-1" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-xs font-semibold">Gọi ngay</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-blue-600 active:text-blue-800" href="#">
<svg aria-hidden="true" className="lucide lucide-message-circle w-5 h-5 mb-1" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-xs font-semibold">Zalo</span>
</a>
<a className="flex flex-col items-center justify-center py-2 bg-brand-red text-white rounded-lg active:bg-red-800" href="#products">
<span className="text-sm font-bold">Mua ngay</span>
</a>
</div>
</div>


    </>
  );
}
