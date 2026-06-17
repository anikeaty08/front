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



      // Set current year in footer
      document.getElementById("year-span").textContent = new Date().getFullYear();
    
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
      
<div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="border-b border-slate-800/70 sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 lg:px-0">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
<span className="text-base font-semibold tracking-tight font-sans">CZT</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50 font-sans">CZT System</span>
<span className="text-xs text-slate-400 font-sans">Quản lý team ngay trên Zalo</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors font-sans" href="#bottleneck">Vấn đề</a>
<a className="hover:text-slate-50 transition-colors font-sans" href="#cost">Chi phí ẩn</a>
<a className="hover:text-slate-50 transition-colors font-sans" href="#solution">Giải pháp</a>
<a className="hover:text-slate-50 transition-colors font-sans" href="#how-it-works">Cách hoạt động</a>
<a className="hover:text-slate-50 transition-colors font-sans" href="#benefits">Lợi ích</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors">
<span className="font-sans">Dùng thử demo</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-600 text-xs font-semibold text-white px-4 py-2 shadow-lg shadow-blue-700/30">
<span className="font-sans">TÔI MUỐN QUẢN LÝ THÔNG MINH HƠN</span>
</button>
</div>
</div>
</header>
<main className="lg:px-0 max-w-6xl mr-auto ml-auto pr-4 pb-24 pl-4">

<section className="pt-12 lg:pt-20">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-12 gap-x-10 gap-y-10 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-sans">Dành cho Founder / CEO / Quản lý team 5–50 người</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
                Tại Sao Bạn Làm CEO/Quản Lý Mà Vẫn Bận Như Nhân Viên?
              </h1>
<p className="text-base sm:text-lg text-slate-300 font-sans" style={{}}>
                Mỗi ngày hỏi <span className="italic font-sans">"Sao việc này chưa xong?"</span>, <span className="italic font-sans">"Ai đang làm việc kia?"</span>, <span className="italic font-sans">"Tháng trước mình giao ai làm nhỉ?"</span>...
                <br className="hidden sm:block"/>
<span className="font-semibold text-slate-100 font-sans">Bạn không phải giám sát viên. Bạn là người dẫn dắt.</span>
</p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex justify-center items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-600 text-sm font-semibold text-white px-6 py-3 shadow-xl shadow-blue-700/40">
<span className="font-sans">TÔI MUỐN QUẢN LÝ THÔNG MINH HƠN</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
<button className="inline-flex justify-center items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 text-xs font-medium text-slate-200 px-4 py-2 hover:border-slate-500 hover:bg-slate-900 transition-colors">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 border border-slate-950"></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-400 border border-slate-950"></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 border border-slate-950"></div>
</div>
<span className="font-sans">Xem cách các CEO đang dùng CZT</span>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
<div className="text-xs text-slate-400 font-sans">Thời gian quản lý vặt</div>
<div className="mt-1 text-lg font-semibold text-emerald-400 font-sans">−70%</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
<div className="text-xs text-slate-400 font-sans">Số giờ nghĩ chiến lược</div>
<div className="mt-1 text-lg font-semibold text-sky-400 font-sans">+3.5h/ngày</div>
</div>
<div className="hidden sm:block rounded-xl border border-slate-800 bg-slate-900/60 p-3">
<div className="text-xs text-slate-400 font-sans">Triển khai</div>
<div className="mt-1 text-lg font-semibold text-slate-100 font-sans">&lt; 24 giờ</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_60%)] pointer-events-none"></div>
<div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-[0_0_80px_rgba(15,23,42,0.9)] overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="relative border-b md:border-b-0 md:border-r border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.18),_transparent_60%)]"></div>
<div className="sm:p-5 flex flex-col gap-4 pt-4 pr-4 pb-4 pl-4 relative gap-x-4 gap-y-4">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-red-900/40 border border-red-500/40 text-[0.65rem] font-medium text-red-200 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
<span className="font-sans">20:30 • Vẫn đang làm việc</span>
</span>
<span className="text-[0.65rem] text-slate-400 font-sans">Trước khi dùng CZT</span>
</div>

<div className="mt-1 rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-slate-800 flex items-center justify-center text-[0.7rem] text-slate-200 font-medium font-sans">
                              CEO
                            </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-100 tracking-tight font-sans">Bạn</span>
<span className="text-[0.65rem] text-slate-400 font-sans">Bị vây bởi tin nhắn</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1 w-1 rounded-full bg-red-500"></span>
<span className="h-1 w-1 rounded-full bg-amber-400"></span>
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-[0.65rem] text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-2 py-1.5">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-sky-500/30 flex items-center justify-center">
<span className="text-[0.55rem] font-semibold text-sky-200 font-sans">Z</span>
</div>
<span className="font-sans">Team Design (124)</span>
</div>
<span className="inline-flex items-center justify-center rounded-full bg-red-600 text-[0.6rem] font-semibold text-white w-4 h-4 font-sans">9</span>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-2 py-1.5">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-sky-500/30 flex items-center justify-center">
<span className="text-[0.55rem] font-semibold text-sky-200 font-sans">Z</span>
</div>
<span className="font-sans">Sales Pipeline (89)</span>
</div>
<span className="inline-flex items-center justify-center rounded-full bg-red-600 text-[0.6rem] font-semibold text-white w-4 h-4 font-sans">7</span>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-2 py-1.5">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-sky-500/30 flex items-center justify-center">
<span className="text-[0.55rem] font-semibold text-sky-200 font-sans">Z</span>
</div>
<span className="font-sans">Marketing Weekly (203)</span>
</div>
<span className="inline-flex items-center justify-center rounded-full bg-red-600 text-[0.6rem] font-semibold text-white w-4 h-4 font-sans">12</span>
</div>
</div>
<div className="mt-3 rounded-xl bg-slate-950/90 border border-slate-800 px-3 py-2 text-xs">
<div className="text-[0.65rem] text-slate-400 mb-1 font-sans">Tin nhắn gần nhất</div>
<div className="space-y-1.5">
<div className="flex gap-2">
<span className="text-[0.65rem] text-slate-500 font-sans">Bạn:</span>
<span className="font-sans">"Việc X làm xong chưa?"</span>
</div>
<div className="flex gap-2">
<span className="text-[0.65rem] text-slate-500 font-sans">Bạn:</span>
<span className="font-sans">"Ai đang làm việc kia?"</span>
</div>
<div className="flex gap-2">
<span className="text-[0.65rem] text-slate-500 font-sans">Bạn:</span>
<span className="font-sans">"Tháng trước mình giao ai làm nhỉ?"</span>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-red-900/50 border border-red-500/50 text-[0.65rem] font-medium text-red-100 px-2 py-1">
<svg className="w-3.5 h-3.5 text-red-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 7v6"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="font-sans">70% thời gian = quản lý vặt</span>
</span>
<span className="text-[0.65rem] text-slate-500 font-sans">Giấy tờ, file, tin nhắn rối tung</span>
</div>
</div>
</div>

<div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)]"></div>
<div className="sm:p-5 flex flex-col gap-4 pt-4 pr-4 pb-4 pl-4 relative gap-x-4 gap-y-4">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/50 border border-emerald-500/40 text-[0.65rem] font-medium text-emerald-100 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-sans">Sáng hôm sau • Cafe, laptop, dashboard</span>
</span>
<span className="text-[0.65rem] text-slate-300 font-sans">Sau khi dùng CZT</span>
</div>

<div className="grid grid-cols-5 gap-3 items-start">
<div className="col-span-2 flex flex-col gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/40">
<span className="text-sm font-semibold tracking-tight text-white font-sans">CEO</span>
</div>
<div className="flex flex-col items-center text-center gap-1">
<span className="text-xs font-medium text-slate-100 tracking-tight font-sans">Thư thái, quan sát</span>
<span className="text-[0.7rem] text-slate-300 font-sans">Cà phê, không còn phải "spam" Zalo hỏi việc</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 border border-slate-800/80 px-2.5 py-1">
<div className="h-6 w-6 rounded-lg bg-amber-500/20 border border-amber-300/50 flex items-center justify-center">
<span className="h-3 w-3 rounded-full bg-amber-300"></span>
</div>
<span className="text-[0.7rem] text-slate-200 font-sans">Cốc cà phê • "Mọi thứ trong tầm kiểm soát"</span>
</div>
</div>
<div className="col-span-3">
<div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-sky-500/30 flex items-center justify-center">
<span className="text-[0.55rem] font-semibold text-sky-200 font-sans">C</span>
</div>
<span className="text-[0.7rem] font-medium text-slate-100 tracking-tight font-sans">Dashboard CZT</span>
</div>
<span className="text-[0.65rem] text-slate-400 font-sans">Realtime</span>
</div>

<div className="grid grid-cols-3 gap-2 mb-2">
<div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-2">
<div className="text-[0.65rem] text-slate-400 mb-0.5 font-sans">Tasks Done (tuần)</div>
<div className="text-sm font-semibold text-emerald-400 font-sans">23</div>
</div>
<div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-2">
<div className="text-[0.65rem] text-slate-400 mb-0.5 font-sans">Đang làm</div>
<div className="text-sm font-semibold text-sky-400 font-sans">5</div>
</div>
<div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-2">
<div className="text-[0.65rem] text-slate-400 mb-0.5 font-sans">Overdue</div>
<div className="text-sm font-semibold text-amber-300 font-sans">2</div>
</div>
</div>
<div className="mt-1 grid grid-cols-5 gap-3 items-center">

<div className="col-span-2 flex items-center justify-center">
<div className="relative h-20 w-20">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="15.5" stroke="#020617" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="15.5" stroke="#38bdf8" stroke-dasharray="40 100" strokeLinecap="round" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="15.5" stroke="#22c55e" stroke-dasharray="30 100" stroke-dashoffset="-40" strokeLinecap="round" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="15.5" stroke="#f97316" stroke-dasharray="20 100" stroke-dashoffset="-70" strokeLinecap="round" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="15.5" stroke="#e5e7eb" stroke-dasharray="10 100" stroke-dashoffset="-90" strokeLinecap="round" stroke-opacity="0.2" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-[0.6rem] text-slate-400 font-sans">Phân bổ</span>
<span className="text-xs font-semibold text-slate-100 font-sans">Workload</span>
</div>
</div>
</div>

<div className="col-span-3 space-y-1.5 text-[0.7rem] text-slate-300">
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-3 rounded-full bg-sky-400"></span>
<span className="font-sans">Design</span>
</div>
<span className="text-slate-100 font-medium font-sans">40%</span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-3 rounded-full bg-emerald-400"></span>
<span className="font-sans">Sales</span>
</div>
<span className="text-slate-100 font-medium font-sans">30%</span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-3 rounded-full bg-orange-400"></span>
<span className="font-sans">Marketing</span>
</div>
<span className="text-slate-100 font-medium font-sans">20%</span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-3 rounded-full bg-slate-400/80"></span>
<span className="font-sans">Admin</span>
</div>
<span className="text-slate-100 font-medium font-sans">10%</span>
</div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/40 border border-emerald-500/40 text-[0.65rem] font-medium text-emerald-100 px-2 py-1">
<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h3l3 8 4-16 3 8h5"></path>
</svg>
<span className="font-sans">Mọi thứ trong tầm kiểm soát</span>
</span>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 px-2.5 py-1 text-[0.7rem] text-slate-200 hover:border-slate-500 transition-colors">
<svg className="w-3.5 h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
<span className="font-sans">Export báo cáo 10s</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
<div className="hidden md:flex items-center gap-2">
<div className="h-[1px] w-10 bg-gradient-to-r from-red-500/40 via-slate-500/70 to-emerald-400/70"></div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/90 border border-slate-700/70 px-3 py-1.5 shadow-lg shadow-slate-950/90">
<span className="text-[0.7rem] text-slate-100 font-sans">CZT biến điều này...</span>
<svg className="w-3.5 h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
<span className="text-[0.7rem] text-emerald-300 font-sans">thành điều này</span>
</div>
<div className="h-[1px] w-10 bg-gradient-to-l from-emerald-400/70 via-slate-500/70 to-red-500/40"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 lg:mt-28" id="bottleneck">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
              Công Ty Bạn Không Lớn Vì... Bạn Đang Làm Quá Nhiều Việc Nhỏ
            </h2>
<p className="mt-4 text-base text-slate-300 font-sans">
              Một ngày của bạn thực sự như thế nào?
            </p>
</div>

<div className="mt-8 grid lg:grid-cols-[2fr_1.3fr] gap-10">
<div className="relative">
<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>
<div className="relative border border-slate-800 rounded-3xl bg-slate-950/80 p-5">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-200 tracking-tight font-sans">Timeline 1 ngày của bạn</span>
<span className="text-[0.7rem] text-slate-400 font-sans">Zalo • Tin nhắn • Gọi điện</span>
</div>
<div className="relative pl-4">
<div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-slate-700 to-red-500"></div>
<div className="space-y-4">

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.18)]"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 8:00 sáng - Mở Zalo</span>
<span className="text-[0.65rem] text-red-300 font-sans">+15 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          47 tin nhắn chưa đọc từ team. Bạn bắt đầu scroll ngược lên để tìm tin quan trọng. Mất 15 phút.
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/90"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 8:30 - Trả lời câu hỏi</span>
<span className="text-[0.65rem] text-red-300 font-sans">+10 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          "Anh ơi, việc thiết kế logo cho client A thế nào rồi ạ?"  
                          Bạn phải nghĩ lại xem giao cho ai, khi nào...
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/80"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 9:00 - Tin nhắn tiếp theo</span>
<span className="text-[0.65rem] text-red-300 font-sans">+15 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          "Chị ơi, chị nhớ tháng trước giao em làm việc gì không ạ?"  
                          Bạn lục lại tin nhắn 3 tuần trước. Không thấy → bỏ qua.
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/70"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 10:00 - Check tiến độ</span>
<span className="text-[0.65rem] text-red-300 font-sans">+45 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          Mở 5 group chat để hỏi: "Việc X, Y, Z các em làm thế nào rồi?"  
                          3 người trả lời "Dạ đang làm ạ". 2 người "seen" nhưng không rep.
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/60"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 11:00 - Họp team</span>
<span className="text-[0.65rem] text-red-300 font-sans">+60 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          "Tuần này ai đang làm việc gì?"  
                          Mọi người nói lần lượt. Bạn cố ghi nhớ nhưng quên sau 5 phút.
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/60"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 14:00 - Nhân viên "quên việc"</span>
<span className="text-[0.65rem] text-red-300 font-sans">+20 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          "Anh ơi, em quên mất việc đó rồi ạ. Anh nhắc em từ bao giờ vậy ạ?"  
                          Bạn không tìm được tin nhắn cũ → chỉ biết nói "Lần sau cẩn thận hơn nhé."
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/50"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 17:00 - Làm báo cáo</span>
<span className="text-[0.65rem] text-red-300 font-sans">+120 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          Hỏi lại từng người đã làm gì → tổng hợp Excel → làm slide.  
                          Gửi đi với cảm giác "mình đang đoán nhiều hơn là biết chắc".
                        </p>
</div>
</div>

<div className="relative pl-4">
<div className="absolute -left-[0.59rem] top-1 h-3 w-3 rounded-full bg-sky-400/40"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-sans">📱 19:00 - Về nhà</span>
<span className="text-[0.65rem] text-red-300 font-sans">+60 phút lãng phí</span>
</div>
<p className="text-xs text-slate-300 font-sans">
                          Vẫn phải trả lời Zalo. Người thân nói: "Lúc nào cũng dán mắt vào điện thoại."
                        </p>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400 font-sans">Tổng: ~5 giờ/ngày dành cho "quản lý vặt"</span>
<span className="inline-flex items-center gap-1 rounded-full bg-red-900/40 border border-red-500/40 text-[0.7rem] text-red-100 px-2 py-1 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-red-300"></span>
                    TIME WASTED tích lũy
                  </span>
</div>
</div>
</div>

<div className="space-y-5">
<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5">
<h3 className="text-sm font-semibold tracking-tight text-slate-100 mb-3 font-sans">
                  Bạn đang dành thời gian cho điều gì?
                </h3>
<div className="space-y-3">

<div>
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-red-300 font-medium font-sans">Quản lý vặt</span>
<span className="text-slate-300 font-medium font-sans">70% = 8.4 giờ</span>
</div>
<div className="h-2 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-red-500 via-orange-500 to-amber-400"></div>
</div>
</div>

<div>
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-emerald-300 font-medium font-sans">Làm việc chiến lược</span>
<span className="text-slate-300 font-medium font-sans">30% = 3.6 giờ</span>
</div>
<div className="h-2 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-[30%] bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500"></div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-300">
<span className="font-semibold text-slate-100 font-sans">70% thời gian của bạn = Làm việc BẠN KHÔNG NÊN LÀM.</span>
</p>
</div>
<div className="border border-slate-800 rounded-3xl bg-red-950/40 p-5">
<p className="text-sm font-semibold tracking-tight text-slate-50 font-sans">
                  Đây không phải "làm việc chăm chỉ". Đây là "làm việc SAI CÁCH".
                </p>
<p className="mt-3 text-xs text-slate-200 font-sans">
                  Bạn đang là nút thắt của công ty: mọi thứ phải đi qua bạn, hỏi bạn, chờ bạn.
                </p>
</div>
</div>
</div>
</section>

<section className="mt-20 lg:mt-28" id="cost">
<div className="grid lg:grid-cols-[1.4fr_1.1fr] gap-10 lg:gap-12 items-start">
<div className="">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
                Mỗi Giờ Của Bạn Đáng Giá Bao Nhiêu?
              </h2>
<p className="mt-3 text-base text-slate-300 font-sans">
                Hầu hết CEO/Founder không bao giờ tính. Đó là lý do họ lãng phí thời gian vào việc sai.
              </p>
<div className="mt-5 border border-slate-800 rounded-3xl bg-slate-950/80 p-4 sm:p-5">
<h3 className="text-sm font-semibold tracking-tight text-slate-100 mb-3 font-sans">
                  Công thức nhanh:
                </h3>
<div className="space-y-3 text-xs text-slate-200">
<div className="flex flex-col gap-1">
<span className="font-sans">Doanh thu công ty 1 tháng:</span>
<div className="flex items-center gap-2">
<div className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.8rem] text-slate-200 font-sans">
                        _____________ đồng
                      </div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-slate-400 font-sans">÷</span>
<span className="font-sans">200 giờ (25 ngày x 8 giờ)</span>
</div>
<div className="flex flex-col gap-1 pt-1 border-t border-slate-800">
<span className="font-sans">= Giá trị 1 giờ của bạn:</span>
<div className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.8rem] text-slate-200 font-sans">
                      _____________ đồng
                    </div>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs">
<div className="rounded-xl bg-slate-900/80 border border-slate-700 p-3">
<div className="text-[0.7rem] text-slate-400 mb-1 font-sans">Ví dụ 1</div>
<p className="text-slate-200 font-sans">
                      Nếu doanh thu <span className="font-semibold text-emerald-400 font-sans">100 triệu/tháng</span> →  
                      <span className="font-semibold font-sans">~500,000đ/giờ</span>.
                    </p>
</div>
<div className="rounded-xl bg-slate-900/80 border border-slate-700 p-3">
<div className="text-[0.7rem] text-slate-400 mb-1 font-sans">Ví dụ 2</div>
<p className="text-slate-200 font-sans">
                      Nếu doanh thu <span className="font-semibold text-emerald-400 font-sans">300 triệu/tháng</span> →  
                      <span className="font-semibold font-sans">~1,500,000đ/giờ</span>.
                    </p>
</div>
</div>
</div>
<div className="mt-6 border border-slate-800 rounded-3xl bg-slate-950/80 p-4 sm:p-5">
<h3 className="text-sm font-semibold tracking-tight text-slate-100 mb-3 font-sans">
                  Hiện tại bạn đang LÃNG PHÍ như thế nào?
                </h3>
<ul className="space-y-2 text-xs text-slate-200">
<li className="font-sans">❌ Hỏi nhân viên về tiến độ công việc</li>
<li className="font-sans">❌ Tìm lại tin nhắn/email cũ để check ai làm việc gì</li>
<li className="font-sans">❌ Nhắc nhở deadline thủ công</li>
<li className="font-sans">❌ Làm báo cáo tiến độ bằng tay</li>
<li className="font-sans">❌ Giải quyết conflict "anh nói - em nói" vì không có proof</li>
</ul>
<p className="mt-3 text-xs text-slate-300 font-sans">
                  Trung bình: <span className="font-semibold text-slate-100 font-sans">5 giờ/ngày = 150 giờ/tháng</span>.
                </p>
<div className="mt-4 rounded-2xl bg-red-950/40 border border-red-500/40 p-4 text-xs text-red-50">
<p className="font-sans">
                    Nếu 1 giờ của bạn = <span className="font-semibold font-sans">500,000đ</span> →  
                    <span className="font-semibold font-sans">150 giờ x 500,000đ = 75,000,000đ/tháng</span> bị lãng phí.
                  </p>
<p className="mt-1 font-sans">
                    × 12 tháng = <span className="font-semibold text-amber-200 font-sans">900,000,000đ/năm</span>.
                  </p>
</div>
</div>
</div>

<div className="space-y-6">

<div className="border border-slate-800 rounded-3xl bg-slate-950/90 p-5">
<h3 className="text-sm font-semibold tracking-tight text-slate-100 flex items-center justify-between">
<span className="font-sans">TÍNH GIÁ TRỊ THỜI GIAN CỦA BẠN</span>
<span className="text-[0.65rem] text-slate-400 font-sans">Ước lượng nhanh</span>
</h3>
<div className="mt-4 space-y-3 text-xs text-slate-200">
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-300 font-sans">Doanh thu công ty/tháng</label>
<div className="flex items-center gap-2">
<div className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.8rem] text-slate-300 font-sans flex items-center justify-between gap-2">
<input className="w-full bg-transparent outline-none border-none text-[0.8rem] text-slate-100 placeholder:text-slate-500 font-sans" min="0" oninput="(function(el){var v=parseFloat(el.value||0);var hourlyEl=document.getElementById('calc-hourly-value');var dailyEl=document.getElementById('calc-daily-loss');var monthlyEl=document.getElementById('calc-monthly-loss');var yearlyEl=document.getElementById('calc-yearly-loss');if(!hourlyEl||!dailyEl||!monthlyEl||!yearlyEl)return;var hourly=v*1000000/200;var daily=hourly*5;var monthly=daily*25;var yearly=monthly*12;var fmt=function(x){if(!isFinite(x)||x&lt;=0)return'0';return x.toLocaleString('vi-VN');};hourlyEl.textContent=fmt(hourly)+' đ/giờ';dailyEl.textContent=fmt(daily)+' đ/ngày';monthlyEl.textContent=fmt(monthly)+' đ/tháng';yearlyEl.textContent=fmt(yearly)+' đ/năm';})(this)" placeholder="Nhập doanh thu" step="10" type="number"/>
<span className="whitespace-nowrap text-[0.75rem] text-slate-400 font-sans">triệu đồng</span>
</div>
</div>
<div className="mt-1.5 grid grid-cols-2 gap-2 text-[0.7rem] text-slate-300">
<div className="rounded-md bg-slate-900/80 border border-slate-700 px-2 py-1.5 flex flex-col">
<span className="text-slate-400 mb-0.5 font-sans">Giá trị 1 giờ của bạn</span>
<span className="text-slate-100 font-medium font-sans" id="calc-hourly-value">0 đ/giờ</span>
</div>
<div className="rounded-md bg-red-900/40 border border-red-500/40 px-2 py-1.5 flex flex-col">
<span className="text-red-200 mb-0.5 font-sans">Lãng phí mỗi ngày (5h)</span>
<span className="text-red-100 font-medium font-sans" id="calc-daily-loss">0 đ/ngày</span>
</div>
<div className="rounded-md bg-amber-900/40 border border-amber-500/40 px-2 py-1.5 flex flex-col">
<span className="text-amber-200 mb-0.5 font-sans">Lãng phí mỗi tháng</span>
<span className="text-amber-100 font-medium font-sans" id="calc-monthly-loss">0 đ/tháng</span>
</div>
<div className="rounded-md bg-emerald-900/40 border border-emerald-500/40 px-2 py-1.5 flex flex-col">
<span className="text-emerald-200 mb-0.5 font-sans">Lãng phí mỗi năm</span>
<span className="text-emerald-100 font-medium font-sans" id="calc-yearly-loss">0 đ/năm</span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-300 font-sans">→ Giá trị 1 giờ của bạn</label>
<div className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.8rem] text-slate-300 font-sans">
                      [___________] đồng/giờ
                    </div>
</div>
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-300 font-sans">→ Bạn dành cho "quản lý vặt"</label>
<div className="flex items-center gap-2">
<div className="w-20 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.8rem] text-slate-300 text-center font-sans">
                        5
                      </div>
<span className="text-[0.7rem] text-slate-400 font-sans">giờ/ngày (trung bình)</span>
</div>
</div>
<div className="pt-2 border-t border-slate-800">
<p className="text-[0.7rem] font-semibold text-amber-300 mb-2 uppercase font-sans">💸 Tổng lãng phí (ước tính)</p>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-[0.75rem]">
<span className="text-slate-300 font-sans">📅 Mỗi ngày</span>
<span className="text-slate-100 font-sans">[__________] đồng</span>
</div>
<div className="flex items-center justify-between text-[0.75rem]">
<span className="text-slate-300 font-sans">📅 Mỗi tháng</span>
<span className="text-slate-100 font-sans">[__________] triệu</span>
</div>
<div className="flex items-center justify-between text-[0.75rem]">
<span className="text-slate-300 font-sans">📅 Mỗi năm</span>
<span className="text-slate-100 font-sans">[__________] triệu</span>
</div>
</div>
<div className="mt-3 rounded-xl bg-red-900/50 border border-red-400/50 p-3 text-[0.75rem] text-red-50">
<p className="font-semibold font-sans">❗ CƠ HỘI BỎ LỠ (nếu dùng thời gian đúng)</p>
<p className="mt-1 font-sans">
                        Ước tính: <span className="font-semibold font-sans">[___________] triệu/năm</span> bạn có thể tạo thêm nếu dùng 5 giờ/ngày cho chiến lược, khách hàng, sản phẩm.
                      </p>
</div>
</div>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5">
<h3 className="text-sm font-semibold tracking-tight text-slate-100 mb-4 font-sans">
                  Bạn đang dùng thời gian vs. Bạn nên dùng
                </h3>
<div className="grid grid-cols-2 gap-4 text-[0.7rem] text-slate-200">

<div>
<p className="font-medium text-red-300 mb-1 font-sans">THỜI GIAN ĐANG DÙNG</p>
<div className="space-y-2">
<div>
<div className="flex items-center justify-between mb-0.5">
<span className="font-sans">Quản lý vặt</span>
<span className="text-slate-300 font-sans">70%</span>
</div>
<div className="h-8 rounded-md bg-slate-900 overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-red-500 via-red-400 to-orange-400"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-0.5">
<span className="font-sans">Họp, admin</span>
<span className="text-slate-300 font-sans">20%</span>
</div>
<div className="h-4 rounded-md bg-slate-900 overflow-hidden">
<div className="h-full w-[20%] bg-gradient-to-r from-sky-500 to-sky-400"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-0.5">
<span className="font-sans">Strategy</span>
<span className="text-slate-300 font-sans">10%</span>
</div>
<div className="h-3 rounded-md bg-slate-900 overflow-hidden">
<div className="h-full w-[10%] bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
</div>
</div>
</div>
</div>

<div className="">
<p className="font-medium text-emerald-300 mb-1 font-sans">THỜI GIAN NÊN DÙNG</p>
<div className="space-y-2">
<div className="">
<div className="flex items-center justify-between mb-0.5">
<span className="font-sans">Quản lý vặt</span>
<span className="text-slate-300 font-sans">10%</span>
</div>
<div className="h-3 rounded-md bg-slate-900 overflow-hidden">
<div className="h-full w-[10%] bg-gradient-to-r from-red-400 to-orange-400"></div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between mb-0.5">
<span className="font-sans">Họp, admin</span>
<span className="text-slate-300 font-sans">20%</span>
</div>
<div className="h-4 rounded-md bg-slate-900 overflow-hidden">
<div className="h-full w-[20%] bg-gradient-to-r from-sky-500 to-sky-400"></div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between mb-0.5">
<span className="font-sans">Strategy</span>
<span className="text-slate-300 font-sans">70%</span>
</div>
<div className="h-8 rounded-md bg-slate-900 overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 border border-slate-700/80 px-3 py-1.5 text-[0.7rem] text-slate-200">
<svg className="w-3.5 h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
<span className="font-sans">CZT giúp bạn đảo ngược tỷ lệ này</span>
</div>
<p className="text-xs text-red-300 font-semibold text-center sm:text-right font-sans">
                    CƠ HỘI BỊ BỎ LỠ = HÀNG TRĂM TRIỆU/NĂM, thậm chí HÀNG TỶ.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 lg:mt-28" id="why">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
              Không Phải Lỗi Của Bạn. Đó Là Lỗi Của Hệ Thống.
            </h2>
<p className="mt-3 text-base text-slate-300 font-sans">
              Bạn đã cố gắng. Bạn đã thử nhiều cách. Nhưng không tool nào thật sự fit với context của bạn.
            </p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-5">

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-sky-500/20 flex items-center justify-center">
<span className="text-xs font-semibold text-sky-300 tracking-tight font-sans">Z</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">ZALO</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Công cụ chat, KHÔNG PHẢI quản lý</p>
</div>
</div>
</div>
<ul className="space-y-1.5 text-xs text-slate-200 flex-1">
<li className="font-sans">❌ Tin nhắn quan trọng chìm trong 100+ tin khác</li>
<li className="font-sans">❌ Không có structure → Không track được ai làm gì</li>
<li className="font-sans">❌ File tự động xóa sau 7-30 ngày → Mất data</li>
<li className="font-sans">❌ Search kém hiệu quả → Tìm task như tìm kim đáy bể</li>
</ul>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-900/40 border border-amber-500/40 text-[0.7rem] text-amber-100 px-2 py-1">
<span className="font-sans">Adoption: 90%</span>
<span className="text-amber-300 font-semibold font-sans">• Ineffective</span>
</span>
<span className="text-[0.7rem] text-slate-400 font-sans">Chỉ tốt cho giao tiếp</span>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
<span className="text-xs font-semibold text-emerald-300 tracking-tight font-sans">S</span>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Google Sheet / Notion</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Đẹp trên lý thuyết, bỏ hoang thực tế</p>
</div>
</div>
</div>
<ul className="space-y-1.5 text-xs text-slate-200 flex-1">
<li className="font-sans">❌ Nhân viên lười mở app/tab khác để update</li>
<li className="font-sans">❌ Bạn vẫn phải hỏi thủ công từng người</li>
<li className="font-sans">❌ Data không realtime → Dễ ra quyết định sai</li>
<li className="font-sans">❌ Không có accountability rõ ràng</li>
</ul>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-900/40 border border-amber-500/40 text-[0.7rem] text-amber-100 px-2 py-1">
<span className="font-sans">Adoption: ~40%</span>
<span className="text-amber-300 font-semibold font-sans">• Ineffective</span>
</span>
<span className="text-[0.7rem] text-slate-400 font-sans">Tốt cho lưu trữ, không cho vận hành</span>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-violet-500/20 flex items-center justify-center">
<span className="text-xs font-semibold text-violet-300 tracking-tight font-sans">T</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Trello / Asana / Monday</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Quá phức tạp cho SME Việt Nam</p>
</div>
</div>
</div>
<ul className="space-y-1.5 text-xs text-slate-200 flex-1">
<li className="font-sans">❌ Team không quen → Kháng cự, lười dùng</li>
<li className="font-sans">❌ Phải train 3–5 ngày → Rất tốn thời gian</li>
<li className="font-sans">❌ Phí đắt nhưng chỉ dùng 30% tính năng</li>
<li className="font-sans">❌ Không integrate với Zalo → Luôn phải switch app</li>
</ul>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-900/40 border border-amber-500/40 text-[0.7rem] text-amber-100 px-2 py-1">
<span className="font-sans">Adoption: &lt;30%</span>
<span className="text-amber-300 font-semibold font-sans">• Ineffective</span>
</span>
<span className="text-[0.7rem] text-slate-400 font-sans">Overkill + Expensive</span>
</div>
</div>
</div>
<div className="mt-7 border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50 font-sans">
                Vậy nên... Không phải bạn quản lý kém. Là bạn chưa có TOOL PHÙ HỢP.
              </p>
<p className="mt-2 text-xs text-slate-300 font-sans">
                Bạn cần 1 giải pháp:
                - Dễ như Zalo ✅  
                - Structured như Sheet ✅  
                - Powerful như Trello ✅  
                <span className="font-semibold text-sky-300 font-sans">VÀ ĐÓ LÀ CZT.</span>
</p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-sky-700 hover:bg-sky-600 text-xs font-semibold text-white px-5 py-2 shadow-lg shadow-sky-700/40">
<span className="font-sans">Tìm hiểu CZT hoạt động thế nào</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
</button>
</div>
</section>

<section className="mt-20 lg:mt-28" id="solution">
<div className="grid lg:grid-cols-[1.2fr_1.1fr] gap-10 lg:gap-12 items-start">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
                CZT - Hệ Thống Quản Lý Team Ngay Trên Zalo
              </h2>
<p className="mt-3 text-base text-slate-300 font-sans">
                Nhân viên vẫn chat Zalo như thường.  
                Nhưng mọi công việc <span className="font-semibold text-slate-100 font-sans">TỰ ĐỘNG</span> được track, báo cáo, phân tích.  
                Bạn chỉ cần mở 1 Dashboard để thấy <span className="font-semibold text-sky-300 font-sans">TOÀN BỘ</span>.
              </p>
<div className="mt-6 space-y-4 text-sm text-slate-200">
<div>
<p className="font-semibold text-slate-100 mb-1 font-sans">🎯 Không cần nhân viên học tool mới</p>
<p className="text-xs text-slate-300 font-sans">
                    Họ vẫn gõ Zalo như đang nhắn tin: "Thiết kế logo # Client A - Done". Thế là xong.
                  </p>
</div>
<div>
<p className="font-semibold text-slate-100 mb-1 font-sans">🎯 Không cần bạn hỏi "Việc X thế nào"</p>
<p className="text-xs text-slate-300 font-sans">
                    Mở Dashboard 30 giây → Thấy realtime ai đang làm gì, việc gì done, việc gì pending.
                  </p>
</div>
<div>
<p className="font-semibold text-slate-100 mb-1 font-sans">🎯 Không cần làm báo cáo thủ công</p>
<p className="text-xs text-slate-300 font-sans">
                    Export PDF/Excel trong 10 giây. Data đẹp, professional, đầy đủ cho sếp, đối tác, nhà đầu tư.
                  </p>
</div>
</div>
<div className="mt-5 rounded-3xl border border-sky-700/60 bg-sky-950/40 p-4">
<p className="text-sm font-semibold tracking-tight text-sky-100 font-sans">
                  "Mọi thứ TỰ ĐỘNG. Bạn chỉ cần... NHÌN."
                </p>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/90 p-4 sm:p-5">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Xem CZT hoạt động trong 60 giây</p>
<p className="text-[0.7rem] text-slate-400 font-sans">(Góc nhìn từ CEO/Manager)</p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-700/80 p-1.5 text-slate-200 hover:border-sky-500 hover:text-sky-300 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-3 gap-3 mb-3 text-[0.65rem]">

<div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-300 font-medium font-sans">0–15s</span>
<span className="text-slate-500 font-sans">Frame 1</span>
</div>
<div className="mt-1 flex-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-400 text-center font-sans">
                      CEO nhận tin nhắn Zalo:
                      "Em làm xong logo Client A rồi ạ"
                    </span>
</div>
<p className="mt-1 text-[0.65rem] text-slate-400 font-sans">
                    Nhân viên báo cáo như bình thường.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-300 font-medium font-sans">15–25s</span>
<span className="text-slate-500 font-sans">Frame 2</span>
</div>
<div className="mt-1 flex-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-400 text-center font-sans">
                      Nhân viên gõ vào CZT Bot:
                      "Thiết kế logo # Client A - Done"
                    </span>
</div>
<p className="mt-1 text-[0.65rem] text-slate-400 font-sans">
                    Chỉ 1 dòng. Mất 5 giây.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-300 font-medium font-sans">25–35s</span>
<span className="text-slate-500 font-sans">Frame 3</span>
</div>
<div className="mt-1 flex-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-400 text-center font-sans">
                      Dòng mới tự động xuất hiện trong Google Sheet của bạn.
                    </span>
</div>
<p className="mt-1 text-[0.65rem] text-slate-400 font-sans">
                    Timestamp, người làm, task, status đầy đủ.
                  </p>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-[0.65rem]">

<div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-300 font-medium font-sans">35–45s</span>
<span className="text-slate-500 font-sans">Frame 4</span>
</div>
<div className="mt-1 flex-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-400 text-center font-sans">
                      CEO mở dashboard:  
                      23 task done, 5 pending, 2 overdue.
                    </span>
</div>
<p className="mt-1 text-[0.65rem] text-slate-400 font-sans">
                    Tất cả trong một màn hình.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-300 font-medium font-sans">45–55s</span>
<span className="text-slate-500 font-sans">Frame 5</span>
</div>
<div className="mt-1 flex-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-400 text-center font-sans">
                      Click "Export report" → PDF đẹp trong 3 giây.
                    </span>
</div>
<p className="mt-1 text-[0.65rem] text-slate-400 font-sans">
                    Logo công ty, charts, numbers đầy đủ.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-300 font-medium font-sans">55–60s</span>
<span className="text-slate-500 font-sans">Frame 6</span>
</div>
<div className="mt-1 flex-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] text-slate-400 text-center font-sans">
                      CEO nhắm mắt uống cà phê:
                      "Tại sao mình không làm điều này sớm hơn?"
                    </span>
</div>
<p className="mt-1 text-[0.65rem] text-slate-400 font-sans">
                    CZT - Quản lý team không cần hỏi.
                  </p>
</div>
</div>
<div className="mt-5 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-500 text-sm font-semibold text-white px-6 py-2.5 shadow-lg shadow-orange-500/30">
<span className="font-sans">TÔI MUỐN DÙNG NGAY</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="mt-20 lg:mt-28" id="how-it-works">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
              Hệ Thống Hoạt Động Như Thế Nào?
            </h2>
<p className="mt-3 text-base text-slate-300 font-sans">
              5 bước. Tất cả tự động. Bạn chỉ cần nhìn.
            </p>
</div>
<div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-10">

<div className="space-y-6 text-xs text-slate-200">
<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-4 sm:p-5">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 mb-3">
<span className="text-[0.65rem] font-semibold text-sky-300 font-sans">BƯỚC 1</span>
<span className="text-[0.65rem] text-slate-300 font-sans">Bạn giao việc (như mọi khi)</span>
</div>
<p className="text-slate-200 font-sans">
                  Bạn có thể giao việc qua:
                </p>
<ul className="mt-2 space-y-1 text-slate-200">
<li className="font-sans">💬 Zalo: "Em làm giúp anh việc X cho client Y nhé"</li>
<li className="font-sans">📧 Email: Forward email cho nhân viên</li>
<li className="font-sans">🗣️ Meeting: Nói trực tiếp</li>
<li className="font-sans">📞 Điện thoại: Gọi giao việc</li>
</ul>
<p className="mt-2 text-slate-300 font-sans">
                  → <span className="font-semibold text-slate-100 font-sans">Không thay đổi cách bạn đang làm.</span>
</p>
</div>
<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-4 sm:p-5">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 mb-3">
<span className="text-[0.65rem] font-semibold text-sky-300 font-sans">BƯỚC 2</span>
<span className="text-[0.65rem] text-slate-300 font-sans">Nhân viên xác nhận (5 giây)</span>
</div>
<p className="text-slate-200 font-sans">
                  Nhân viên mở Zalo → Gõ vào CZT Bot theo format:
                </p>
<div className="mt-2 rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-[0.7rem] text-slate-100 font-sans">
                  Tên việc # Client/Project - Deadline
                </div>
<p className="mt-2 text-slate-200 font-sans">Ví dụ:</p>
<div className="mt-1 space-y-1 font-mono text-[0.7rem] text-slate-100">
<div className="rounded-lg bg-slate-950 border border-slate-800 px-3 py-1.5 font-sans">
                    Thiết kế logo # Client A - 25/11
                  </div>
<div className="rounded-lg bg-slate-950 border border-slate-800 px-3 py-1.5 font-sans">
                    Viết content Facebook # Campaign Tết - 30/11
                  </div>
<div className="rounded-lg bg-slate-950 border border-slate-800 px-3 py-1.5 font-sans">
                    Gọi khách hàng XYZ # Sales - 20/11
                  </div>
</div>
<p className="mt-2 text-slate-300 font-sans">
                  → Đơn giản như nhắn tin. Không cần học gì cả.
                </p>
</div>
<div className="border border-slate-800 rounded-3xl bg-sky-950/40 p-4 sm:p-5">
<div className="inline-flex items-center gap-2 rounded-full bg-sky-900/40 border border-sky-600/60 px-3 py-1 mb-3">
<span className="text-[0.65rem] font-semibold text-sky-100 font-sans">BƯỚC 3</span>
<span className="text-[0.65rem] text-sky-100 font-sans">Hệ thống tự động làm hết</span>
</div>
<ul className="space-y-1.5 text-slate-100">
<li className="font-sans">✅ Lưu vào Google Sheet/Notion với timestamp chính xác</li>
<li className="font-sans">✅ Tự động phân loại (Design, Sales, Marketing, Admin...)</li>
<li className="font-sans">✅ Tự động tính deadline (còn bao nhiêu ngày)</li>
<li className="font-sans">✅ Lưu file đính kèm vào Google Drive (nếu có)</li>
<li className="font-sans">✅ Gắn tag theo dự án, client, loại công việc</li>
</ul>
<p className="mt-2 text-slate-100 font-semibold font-sans">
                  → <span className="uppercase font-sans">AUTOMATIC</span> – Bạn không cần làm gì cả.
                </p>
</div>
<div className="border border-slate-800 rounded-3xl bg-emerald-950/40 p-4 sm:p-5">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/40 border border-emerald-600/60 px-3 py-1 mb-3">
<span className="text-[0.65rem] font-semibold text-emerald-100 font-sans">BƯỚC 4</span>
<span className="text-[0.65rem] text-emerald-100 font-sans">Bạn mở Dashboard</span>
</div>
<p className="text-slate-100 font-sans">
                  Mở Google Sheet/Notion → Thấy realtime:
                </p>
<ul className="mt-1.5 space-y-1 text-slate-100">
<li className="font-sans">- Ai đang làm việc gì</li>
<li className="font-sans">- Việc gì done, việc gì pending, việc gì sắp đến deadline</li>
<li className="font-sans">- Performance từng người, từng tháng</li>
</ul>
<p className="mt-2 text-slate-100 font-sans">
                  Export PDF/Excel <span className="font-semibold font-sans">trong 10–30 giây</span> để gửi sếp, đối tác, nhà đầu tư.
                </p>
</div>
<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-4 sm:p-5">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 mb-3">
<span className="text-[0.65rem] font-semibold text-sky-300 font-sans">BƯỚC 5</span>
<span className="text-[0.65rem] text-slate-300 font-sans">Ra quyết định nhanh, chính xác</span>
</div>
<p className="text-slate-200 font-sans">
                  Dựa trên data realtime, bạn biết:
                </p>
<ul className="mt-1.5 space-y-1 text-slate-200">
<li className="font-sans">✅ Ai đang overload → Phân bổ lại</li>
<li className="font-sans">✅ Loại việc nào tốn thời gian nhất → Tối ưu quy trình</li>
<li className="font-sans">✅ Tháng nào performance cao nhất → Nhân rộng chiến lược</li>
<li className="font-sans">✅ Ai xứng đáng tăng lương → Không còn "cảm tính"</li>
</ul>
<p className="mt-2 text-slate-300 font-sans">
                  → Từ <span className="italic font-sans">"đoán mò"</span> thành <span className="font-semibold text-emerald-300 font-sans">"data-driven"</span>.
                </p>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5">
<p className="text-sm font-semibold tracking-tight text-slate-100 mb-4 font-sans">
                Flow 5 bước – từ giao việc đến quyết định
              </p>
<div className="relative pl-5">
<div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-emerald-400 to-sky-400"></div>

<div className="relative mb-6 pl-3">
<div className="absolute -left-[0.7rem] top-1 h-4 w-4 rounded-full bg-slate-950 border border-sky-400 flex items-center justify-center text-[0.6rem] text-sky-200 font-semibold font-sans">
                    1
                  </div>
<div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-100 tracking-tight font-sans">Bạn (CEO/Manager)</span>
<span className="text-[0.65rem] text-slate-400 font-sans">💬📧🗣️</span>
</div>
<p className="text-[0.7rem] text-slate-300 font-sans">
                      Giao việc như bình thường qua Zalo, Email, Meeting, Call.
                    </p>
</div>
</div>

<div className="relative mb-6 pl-3">
<div className="absolute -left-[0.7rem] top-1 h-4 w-4 rounded-full bg-slate-950 border border-sky-400 flex items-center justify-center text-[0.6rem] text-sky-200 font-semibold font-sans">
                    2
                  </div>
<div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-100 tracking-tight font-sans">Nhân viên</span>
<span className="text-[0.65rem] text-slate-400 font-sans">⌨️ Zalo Bot • ⏱️ 5s</span>
</div>
<p className="text-[0.7rem] text-slate-300 font-sans">
                      Gõ: <span className="font-mono text-[0.7rem] text-slate-100 font-sans">"Task # Client - Deadline"</span>.
                    </p>
</div>
</div>

<div className="relative mb-6 pl-3">
<div className="absolute -left-[0.7rem] top-1 h-4 w-4 rounded-full bg-slate-950 border border-emerald-400 flex items-center justify-center text-[0.6rem] text-emerald-200 font-semibold font-sans">
                    3
                  </div>
<div className="rounded-2xl bg-sky-950/40 border border-sky-600/60 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-sky-100 tracking-tight font-sans">CZT System</span>
<span className="text-[0.65rem] text-sky-200 font-sans">⚙️🤖 Automatic</span>
</div>
<p className="text-[0.7rem] text-sky-50 font-sans">
                      Lưu, phân loại, tính deadline, gắn tag, lưu file hoàn toàn tự động.
                    </p>
</div>
</div>

<div className="relative mb-6 pl-3">
<div className="absolute -left-[0.7rem] top-1 h-4 w-4 rounded-full bg-slate-950 border border-emerald-400 flex items-center justify-center text-[0.6rem] text-emerald-200 font-semibold font-sans">
                    4
                  </div>
<div className="rounded-2xl bg-emerald-950/40 border border-emerald-600/60 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-emerald-100 tracking-tight font-sans">Bạn (CEO/Manager)</span>
<span className="text-[0.65rem] text-emerald-100 font-sans">📊📈 Dashboard</span>
</div>
<p className="text-[0.7rem] text-emerald-50 font-sans">
                      Xem realtime, xem báo cáo, export PDF trong &lt;30 giây.
                    </p>
</div>
</div>

<div className="relative pl-3">
<div className="absolute -left-[0.7rem] top-1 h-4 w-4 rounded-full bg-slate-950 border border-sky-400 flex items-center justify-center text-[0.6rem] text-sky-200 font-semibold font-sans">
                    5
                  </div>
<div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-100 tracking-tight font-sans">Ra quyết định</span>
<span className="text-[0.65rem] text-slate-400 font-sans">💡✅ Data-driven</span>
</div>
<p className="text-[0.7rem] text-slate-300 font-sans">
                      Điều chỉnh nhân sự, quy trình, chiến lược dựa trên số liệu cụ thể, không còn cảm tính.
                    </p>
</div>
</div>
</div>
<div className="mt-5 rounded-2xl bg-slate-950/90 border border-slate-700/80 p-3 text-[0.7rem] text-slate-200">
<p className="font-semibold text-emerald-300 mb-1 font-sans">
                  Highlight:
                </p>
<p className="font-sans">
                  Bước 3 &amp; 4 là <span className="font-semibold font-sans">AUTOMATIC</span> – bạn không phải thao tác.  
                  Đây là nơi CZT tiết kiệm cho bạn hàng trăm giờ mỗi tháng.
                </p>
</div>
</div>
</div>
</section>

<section className="mt-20 lg:mt-28" id="benefits">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
                CZT Giúp Founder/CEO/Quản Lý Như Thế Nào?
              </h2>
<p className="mt-3 text-base text-slate-300 font-sans">
                5 lợi ích trực tiếp. Có thể đo lường. Có thể thấy ngay.
              </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-600 text-xs font-semibold text-white px-4 py-2 shadow-lg shadow-blue-700/40">
<span className="font-sans">Đặt lịch demo 30 phút</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
</div>
<div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5">

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
<span className="text-sm font-sans">💰</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Benefit 1</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Giải phóng 70% thời gian quản lý vặt</p>
</div>
</div>
</div>
<div className="text-[0.75rem] text-slate-200 space-y-2">
<p className="font-semibold text-slate-100 font-sans">Before CZT:</p>
<ul className="space-y-1">
<li className="font-sans">❌ 5 giờ/ngày hỏi "Việc X thế nào?"</li>
<li className="font-sans">❌ Scroll Zalo tìm tin nhắn cũ</li>
<li className="font-sans">❌ Nhắc deadline thủ công</li>
<li className="font-sans">❌ Làm báo cáo 2 tiếng/tuần</li>
</ul>
<p className="pt-1 font-semibold text-slate-100 font-sans">After CZT:</p>
<ul className="space-y-1">
<li className="font-sans">✅ Mở Sheet → Thấy ngay (30 giây)</li>
<li className="font-sans">✅ Hệ thống tự nhắc deadline</li>
<li className="font-sans">✅ Báo cáo auto generate (10 giây)</li>
</ul>
<p className="pt-1 font-sans">
<span className="font-semibold text-emerald-300 font-sans">Kết quả:</span> 5 giờ/ngày → 1.5 giờ/ngày  
                  <span className="font-semibold text-amber-300 font-sans">Impact:</span> 3.5 giờ x 500k = 1.75 triệu/ngày → ~420 triệu/năm được giải phóng.
                </p>
</div>
<div className="mt-3 h-2 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500"></div>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-sky-500/15 flex items-center justify-center">
<span className="text-sm font-sans">📊</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Benefit 2</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Quyết định dựa trên data, không cảm tính</p>
</div>
</div>
</div>
<div className="text-[0.75rem] text-slate-200 space-y-2">
<p className="font-semibold text-slate-100 font-sans">Before CZT:</p>
<ul className="space-y-1">
<li className="font-sans">😰 "Em Tuấn làm cũng khá..." (không rõ bao nhiêu)</li>
<li className="font-sans">😰 "Tháng này chắc team ổn..." (không số liệu)</li>
<li className="font-sans">😰 Tăng lương, thưởng dựa vào cảm giác</li>
</ul>
<p className="pt-1 font-semibold text-slate-100 font-sans">After CZT:</p>
<ul className="space-y-1">
<li className="font-sans">✅ "Tuấn: 15 tasks, 95% on-time. Linh: 12 tasks, 70% on-time."</li>
<li className="font-sans">✅ "Tháng này: 87 tasks done, +23% vs tháng trước."</li>
<li className="font-sans">✅ Tăng lương, fire, coaching đều có data backing.</li>
</ul>
<p className="pt-1 font-sans">
<span className="font-semibold text-emerald-300 font-sans">Impact:</span> Chỉ cần 1 quyết định đúng (dựa data) đã có thể hoàn vốn CZT hàng trăm lần.
                </p>
</div>
</div>

<div 80="" bg-slate-950="" border="" border-slate-800="" className="border &lt;div class=" flex="" flex-col"="" p-5="" rounded-3xl="">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-violet-500/15 flex items-center justify-center">
<span className="text-sm font-sans">🧠</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Benefit 3</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Tăng chất lượng cuộc sống &amp; giảm stress</p>
</div>
</div>
</div>
<div className="text-[0.75rem] text-slate-200 space-y-2">
<p className="font-semibold text-slate-100 font-sans">Before CZT:</p>
<ul className="space-y-1">
<li className="font-sans">❌ Luôn phải “on” 24/7 vì sợ miss việc</li>
<li className="font-sans">❌ Vừa ăn tối vừa cầm điện thoại trả lời Zalo</li>
<li className="font-sans">❌ Đầu óc lúc nào cũng nghĩ: “Không biết team có quên việc gì không?”</li>
</ul>
<p className="pt-1 font-semibold text-slate-100 font-sans">After CZT:</p>
<ul className="space-y-1">
<li className="font-sans">✅ Mở Dashboard 10 phút/ngày là đủ</li>
<li className="font-sans">✅ Buổi tối tắt máy, vẫn yên tâm vì mọi thứ đã được log</li>
<li className="font-sans">✅ Đầu óc rảnh để nghĩ chiến lược, sản phẩm, gia đình</li>
</ul>
<p className="pt-1 font-sans">
<span className="font-semibold text-emerald-300 font-sans">Impact:</span> Bớt burn-out, bớt mệt mỏi, tăng năng lượng cho những quyết định quan trọng.
                </p>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-amber-500/15 flex items-center justify-center">
<span className="text-sm font-sans">🚀</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Benefit 4</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Scale team mà không lo “vỡ trận”</p>
</div>
</div>
</div>
<div className="text-[0.75rem] text-slate-200 space-y-2">
<p className="font-semibold text-slate-100 font-sans">Vấn đề thường gặp:</p>
<ul className="space-y-1">
<li className="font-sans">❌ Team từ 5 → 15 người là mọi thứ bắt đầu loạn</li>
<li className="font-sans">❌ Founder không dám tuyển thêm vì sợ không manage nổi</li>
</ul>
<p className="pt-1 font-semibold text-slate-100 font-sans">Với CZT:</p>
<ul className="space-y-1">
<li className="font-sans">✅ Cứ có người mới → add vào flow cũ, không cần quy trình mới</li>
<li className="font-sans">✅ Tất cả đều đi qua 1 chuẩn: “Task # Client - Deadline”</li>
<li className="font-sans">✅ Dashboard tự mở rộng, không cần chỉnh sửa phức tạp</li>
</ul>
<p className="pt-1 font-sans">
<span className="font-semibold text-emerald-300 font-sans">Impact:</span> Dễ dàng scale từ 5 → 20 → 50 người mà không tăng áp lực quản lý lên 10 lần.
                </p>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-red-500/15 flex items-center justify-center">
<span className="text-sm font-sans">🧾</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100 font-sans">Benefit 5</p>
<p className="text-[0.7rem] text-slate-400 font-sans">Minh bạch, công bằng, hết tranh cãi</p>
</div>
</div>
</div>
<div className="text-[0.75rem] text-slate-200 space-y-2">
<p className="font-semibold text-slate-100 font-sans">Trong team hiện tại:</p>
<ul className="space-y-1">
<li className="font-sans">❌ “Anh nhớ em làm việc đó rồi mà?” – “Không anh, em không nhớ…”</li>
<li className="font-sans">❌ Tranh cãi ai làm nhiều hơn, ai đóng góp nhiều hơn</li>
</ul>
<p className="pt-1 font-semibold text-slate-100 font-sans">Với CZT:</p>
<ul className="space-y-1">
<li className="font-sans">✅ Mỗi task đều có log: ai tạo, thời gian, deadline, status</li>
<li className="font-sans">✅ Review lương, thưởng, KPI dựa trên con số cụ thể</li>
<li className="font-sans">✅ Không còn “anh nói – em nói”</li>
</ul>
<p className="pt-1 font-sans">
<span className="font-semibold text-emerald-300 font-sans">Impact:</span> Văn hoá công bằng, minh bạch; người giỏi được ghi nhận, người yếu biết cần cải thiện gì.
                </p>
</div>
</div>
</div>
<div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 border border-slate-800 rounded-3xl bg-slate-950/80 p-5">
<div className="space-y-1">
<p className="text-sm font-semibold tracking-tight text-slate-50 font-sans">
                Nếu CZT giúp bạn lấy lại ít nhất 2 giờ/ngày, nó đã tự trả chi phí hàng chục lần.
              </p>
<p className="text-xs text-slate-300 font-sans">
                Câu hỏi không phải là <span className="font-semibold font-sans">"CZT giá bao nhiêu?"</span>  
                mà là <span className="font-semibold text-emerald-300 font-sans">"Bạn đang để mất bao nhiêu nếu KHÔNG dùng?"</span>
</p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white px-5 py-2 shadow-lg shadow-emerald-600/40">
<span className="font-sans">Nhận tư vấn &amp; demo miễn phí</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
</div>
</section>

<section className="mt-20 lg:mt-28" id="cta">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-50 font-sans font-semibold" style={{}}>
              Triển Khai CZT Trong &lt; 24 Giờ
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 font-sans">
              Không cần IT, không cần dev, không cần đổi hệ thống hiện tại.  
              Chỉ cần bạn và team sẵn sàng quản lý thông minh hơn.
            </p>
</div>
<div className="mt-8 grid md:grid-cols-[1.1fr_1fr] gap-6 items-start">

<div className="border border-sky-700/70 bg-sky-950/40 rounded-3xl p-6 relative overflow-hidden">
<div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-sky-600/20 blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-4 relative">
<div className="text-left">
<p className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase font-sans">GÓI KHUYẾN NGHỊ</p>
<p className="mt-1 text-lg font-semibold text-slate-50 font-sans">CZT cho team 5–30 người</p>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-400/60 px-3 py-1 text-[0.7rem] text-emerald-100 font-medium font-sans">
                  Hoàn vốn &lt; 30 ngày
                </span>
</div>
<div className="relative flex items-end gap-2">
<span className="text-3xl text-slate-50 font-sans font-semibold">Liên hệ</span>
<span className="mb-1 text-xs text-slate-400 font-sans">để nhận báo giá phù hợp quy mô team</span>
</div>
<ul className="mt-5 space-y-2 text-xs text-slate-100">
<li className="font-sans">✅ Setup CZT Bot kết nối Zalo của bạn</li>
<li className="font-sans">✅ Thiết kế Google Sheet/Notion Dashboard theo mô hình công ty</li>
<li className="font-sans">✅ Tùy biến theo phòng ban (Sales, Marketing, Ops, Admin...)</li>
<li className="font-sans">✅ Hướng dẫn sử dụng cho bạn và team (online)</li>
<li className="font-sans">✅ Support 1-1 trong giai đoạn đầu triển khai</li>
</ul>
<p className="mt-4 text-[0.7rem] text-slate-300 font-sans">
                * Không cần trả phí theo user phức tạp.  
                * Có thể nâng cấp/scale lên nhiều phòng ban sau này.
              </p>
<div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-700 hover:bg-blue-600 text-xs font-semibold text-white px-5 py-2.5 shadow-lg shadow-blue-700/40">
<span className="font-sans">Đặt lịch tư vấn 30 phút</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 hover:border-slate-500 text-[0.7rem] font-medium text-slate-100 px-4 py-2">
<span className="font-sans">Nhận demo file mẫu CZT</span>
</button>
</div>
</div>

<div className="border border-slate-800 rounded-3xl bg-slate-950/80 p-5 space-y-4 text-xs text-slate-200">
<div>
<p className="text-sm font-semibold text-slate-100 mb-1 font-sans">CZT có phù hợp với team nhỏ không?</p>
<p className="text-slate-300 font-sans">
                  Có. CZT được thiết kế cho team từ 3–50 người. Team càng nhỏ, bạn càng nên set nền tảng quản lý chuẩn ngay từ đầu để sau này scale không bị “vỡ”.
                </p>
</div>
<div>
<p className="text-sm font-semibold text-slate-100 mb-1 font-sans">Có cần technical hay IT để triển khai?</p>
<p className="text-slate-300 font-sans">
                  Không. Bạn chỉ cần biết dùng Zalo &amp; Google Sheet cơ bản. Phần còn lại team triển khai sẽ set cho bạn.
                </p>
</div>
<div>
<p className="text-sm font-semibold text-slate-100 mb-1 font-sans">Mất bao lâu để team quen?</p>
<p className="text-slate-300 font-sans">
                  Đa số team chỉ cần 1–2 ngày vì cách dùng chỉ là nhắn tin theo cú pháp rất đơn giản trên Zalo. Không phải mở thêm app, không phải nhớ quy trình phức tạp.
                </p>
</div>
<div className="border-t border-slate-800 pt-3">
<p className="text-[0.7rem] text-slate-400 font-sans">
                  Bạn có thể bắt đầu bằng 1 phòng ban nhỏ (ví dụ: Marketing hoặc Sales), chạy thử 2–3 tuần rồi mới nhân rộng toàn công ty.
                </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/70 mt-16">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center">
<span className="text-[0.7rem] font-semibold font-sans">CZT</span>
</div>
<div className="flex flex-col">
<span className="font-semibold text-slate-100 text-[0.8rem] font-sans">CZT System</span>
<span className="text-[0.7rem] font-sans">Quản lý team ngay trên Zalo</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<span className="font-sans">© <span className="font-sans" id="year-span">2025</span> CZT. All rights reserved.</span>
<span className="hidden sm:inline-block h-3 w-px bg-slate-700"></span>
<a className="hover:text-slate-200 transition-colors font-sans" href="#bottleneck">Vấn đề</a>
<a className="hover:text-slate-200 transition-colors font-sans" href="#solution">Giải pháp</a>
<a className="hover:text-slate-200 transition-colors font-sans" href="#cta">Đặt lịch demo</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
