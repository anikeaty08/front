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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const themeToggleBtn = document.getElementById('themeToggle');
        const html = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
            } else {
                html.classList.add('dark');
            }
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
      

<aside className="w-64 bg-white dark:bg-neutral-900/50 border-r border-neutral-200 dark:border-neutral-700 flex flex-col hidden md:flex shrink-0 transition-colors duration-200">

<div className="p-8 pb-6">
<h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">Pioneer</h1>
<p className="text-sm font-medium text-neutral-500 dark:text-neutral-500 mt-1 uppercase tracking-widest">Elite Mgt</p>
</div>

<nav className="flex-1 px-4 space-y-1 mt-2">
<a className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all" href="#">
<iconify-icon className="text-base text-neutral-400 dark:text-neutral-500" icon="solar:widget-linear"></iconify-icon>
                Command Center
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg transition-all" href="#">
<iconify-icon className="text-base text-neutral-900 dark:text-neutral-50" icon="solar:chart-square-linear"></iconify-icon>
                Leaderboards
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all" href="#">
<iconify-icon className="text-base text-neutral-400 dark:text-neutral-500" icon="solar:clipboard-list-linear"></iconify-icon>
                Discipline Log
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all" href="#">
<iconify-icon className="text-base text-neutral-400 dark:text-neutral-500" icon="solar:chart-up-linear"></iconify-icon>
                Rank Progress
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all" href="#">
<iconify-icon className="text-base text-neutral-400 dark:text-neutral-500" icon="solar:cup-star-linear"></iconify-icon>
                Achievements
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all" href="#">
<iconify-icon className="text-base text-neutral-400 dark:text-neutral-500" icon="solar:archive-linear"></iconify-icon>
                System Archive
            </a>
</nav>

<div className="p-6 space-y-4">
<button className="w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center text-base shadow-sm">
                New Entry
            </button>
<div className="space-y-1 pt-4 border-t border-neutral-200 dark:border-neutral-700">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:question-circle-linear"></iconify-icon>
                    Support
                </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:logout-linear"></iconify-icon>
                    Sign Out
                </a>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">

<header className="h-14 shrink-0 bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between px-8 sticky top-0 z-20 transition-colors duration-200">
<div className="flex items-center gap-3">
<h2 className="text-base font-medium tracking-tight text-neutral-900 dark:text-neutral-50">Pioneer OS</h2>
<span className="text-neutral-300 dark:text-neutral-700">/</span>
<span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Khen Thưởng &amp; Kỷ Luật</span>
</div>
<div className="flex items-center gap-5">
<button className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors" id="themeToggle">
<iconify-icon className="text-base hidden dark:block" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="text-base block dark:hidden" icon="solar:sun-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors relative">
<iconify-icon className="text-base" icon="solar:bell-linear"></iconify-icon>
<span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
</button>
<button className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon>
</button>
<div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="text-right hidden sm:block">
<div className="text-sm font-medium text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Admin Chieu</div>
</div>
<img alt="Profile" className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-800" src="https://ui-avatars.com/api/?name=Admin+Chieu&amp;background=0a0a0a&amp;color=fff"/>
</div>
</div>
</header>

<div className="flex-1 p-8 space-y-8 max-w-[1200px] mx-auto w-full">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 bg-white dark:bg-neutral-900 rounded-2xl p-7 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">Trạng thái Kỷ luật</h3>
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-base text-neutral-500 dark:text-neutral-400" icon="solar:shield-linear"></iconify-icon>
</div>
</div>
<p className="text-base text-neutral-500 dark:text-neutral-400 mb-8 max-w-[280px]">Hệ thống 3-Strike duy trì tiêu chuẩn vận hành của Pioneer OS.</p>
<div className="space-y-5">

<div className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-sm font-medium text-blue-600 dark:text-blue-400">1</span>
</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Strike 1: Cảnh báo</h4>
<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">Ghi nhận vi phạm nhẹ, nhắc nhở nội bộ.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">2</span>
</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-600 dark:text-neutral-400">Strike 2: Kiểm điểm</h4>
<p className="text-sm text-neutral-400 dark:text-neutral-600 mt-0.5">Hình thức kỷ luật mức 2, trừ điểm tích lũy.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">3</span>
</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-600 dark:text-neutral-400">Strike 3: Đình chỉ</h4>
<p className="text-sm text-neutral-400 dark:text-neutral-600 mt-0.5">Khóa tài khoản và xem xét loại bỏ.</p>
</div>
</div>
</div>
</div>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 mt-10 transition-colors" href="#">
                        Xem chi tiết nội quy
                        <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-7 flex flex-col gap-5">

<div className="flex items-end justify-between mb-1">
<div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">Hệ thống Rank Đặc quyền</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Cơ cấu danh hiệu hiện tại</p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-44 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors group">
<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">Initiate</p>
</div>
<h4 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-1.5">Khởi đầu kỹ năng</h4>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">Nhận 100% điểm cơ bản cho mọi task hoàn thành đúng hạn.</p>
</div>

<div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-44 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors group">
<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">Innovator</p>
</div>
<h4 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-1.5">Nhân tố bứt phá</h4>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">Bonus 15% điểm thưởng. Quyền ưu tiên chọn dự án mới.</p>
</div>
</div>

<div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-between mt-auto hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors group">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
<p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">Pioneer</p>
</div>
<h4 className="text-base font-medium text-neutral-900 dark:text-neutral-100">Cấp bậc tinh hoa</h4>
</div>
<div className="flex gap-6 text-right">
<div>
<p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1">Multiplier</p>
<p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">2.0x</p>
</div>
<div className="w-px bg-neutral-100 dark:bg-neutral-700"></div>
<div>
<p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1">Slot</p>
<p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Top 1%</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flex flex-col gap-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">Bảng Xếp Hạng</h3>
<div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                            Tháng 10
                            <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm overflow-hidden flex flex-col">

<div className="flex items-center p-5 border-b border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group">
<span className="text-base font-medium text-neutral-400 dark:text-neutral-500 w-10 text-center">1</span>
<img alt="Avatar" className="w-9 h-9 rounded-full mr-4 bg-neutral-100 dark:bg-neutral-800" src="https://ui-avatars.com/api/?name=Tran+Cao+Minh&amp;background=f43f5e&amp;color=fff"/>
<div className="flex-1">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100">Trần Cao Minh</h5>
<span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 mt-0.5 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                    Pioneer
                                </span>
</div>
<div className="text-right">
<div className="text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">4,850</div>
<div className="text-xs text-neutral-400 dark:text-neutral-500">điểm</div>
</div>
</div>

<div className="flex items-center p-5 border-b border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group">
<span className="text-base font-medium text-neutral-400 dark:text-neutral-500 w-10 text-center">2</span>
<img alt="Avatar" className="w-9 h-9 rounded-full mr-4 bg-neutral-100 dark:bg-neutral-800" src="https://ui-avatars.com/api/?name=Le+Minh+Anh&amp;background=10b981&amp;color=fff"/>
<div className="flex-1">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100">Lê Minh Anh</h5>
<span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 mt-0.5 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Innovator
                                </span>
</div>
<div className="text-right">
<div className="text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">4,620</div>
<div className="text-xs text-neutral-400 dark:text-neutral-500">điểm</div>
</div>
</div>

<div className="flex items-center p-5 border-b border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group">
<span className="text-base font-medium text-neutral-400 dark:text-neutral-500 w-10 text-center">3</span>
<img alt="Avatar" className="w-9 h-9 rounded-full mr-4 bg-neutral-100 dark:bg-neutral-800" src="https://ui-avatars.com/api/?name=Nguyen+Thanh+Trung&amp;background=10b981&amp;color=fff"/>
<div className="flex-1">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100">Nguyễn Thành Trung</h5>
<span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 mt-0.5 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Innovator
                                </span>
</div>
<div className="text-right">
<div className="text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">4,110</div>
<div className="text-xs text-neutral-400 dark:text-neutral-500">điểm</div>
</div>
</div>

<div className="p-2">
<div className="flex items-center px-3 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors">
<span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 w-10 text-center">4</span>
<h5 className="text-base font-medium text-neutral-700 dark:text-neutral-300 flex-1">Phạm Hải Đăng</h5>
<span className="text-sm text-neutral-500 dark:text-neutral-400 mr-6">Initiate</span>
<div className="text-base font-medium text-neutral-900 dark:text-neutral-100 w-12 text-right">3,980</div>
</div>
<div className="flex items-center px-3 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors">
<span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 w-10 text-center">5</span>
<h5 className="text-base font-medium text-neutral-700 dark:text-neutral-300 flex-1">Vũ Khánh Linh</h5>
<span className="text-sm text-neutral-500 dark:text-neutral-400 mr-6">Initiate</span>
<div className="text-base font-medium text-neutral-900 dark:text-neutral-100 w-12 text-right">3,850</div>
</div>
<div className="flex items-center px-3 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors">
<span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 w-10 text-center">6</span>
<h5 className="text-base font-medium text-neutral-700 dark:text-neutral-300 flex-1">Hoàng Thu Trang</h5>
<span className="text-sm text-neutral-500 dark:text-neutral-400 mr-6">Initiate</span>
<div className="text-base font-medium text-neutral-900 dark:text-neutral-100 w-12 text-right">3,720</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">Biến động Điểm</h3>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors" href="#">Xem tất cả</a>
</div>
<div className="space-y-3">

<div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-4 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-base text-emerald-600 dark:text-emerald-400" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">Hoàn thành task Sprint A</h5>
<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">2 giờ trước</p>
</div>
<div className="text-base font-medium text-emerald-600 dark:text-emerald-400 shrink-0">+10</div>
</div>

<div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-4 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-base text-blue-600 dark:text-blue-400" icon="solar:star-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">Mentor xuất sắc tuần</h5>
<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">5 giờ trước</p>
</div>
<div className="text-base font-medium text-blue-600 dark:text-blue-400 shrink-0">+50</div>
</div>

<div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-4 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-base text-rose-600 dark:text-rose-400" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">Trễ deadline nộp report</h5>
<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">Hôm qua</p>
</div>
<div className="text-base font-medium text-rose-600 dark:text-rose-400 shrink-0">-10</div>
</div>

<div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-4 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-base text-emerald-600 dark:text-emerald-400" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">Sáng kiến tối ưu UI</h5>
<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">2 ngày trước</p>
</div>
<div className="text-base font-medium text-emerald-600 dark:text-emerald-400 shrink-0">+120</div>
</div>

<div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-4 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-base text-rose-600 dark:text-rose-400" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h5 className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">Vi phạm quy tắc bảo mật</h5>
<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">3 ngày trước</p>
</div>
<div className="text-base font-medium text-rose-600 dark:text-rose-400 shrink-0">-200</div>
</div>
</div>
</div>
</div>
<div className="h-8"></div>
</div>
</main>


    </>
  );
}
