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
      

<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle at center, #C6FF4D 0%, transparent 60%)'}}></div>
<div className="absolute top-40 -right-32 h-96 w-96 rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(circle at center, #A8FF60 0%, transparent 65%)'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[40rem] blur-3xl opacity-20" style={{background: 'radial-gradient(circle at center, #22c55e 0%, transparent 70%)'}}></div>
</div>

<header className="border-b border-slate-800 sticky top-0 z-40 backdrop-blur-lg bg-slate-950/80">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-4 py-4">

<div className="inline-flex items-center gap-2">
<div className="h-9 w-9 rounded-2xl border border-slate-700 bg-slate-950 flex items-center justify-center shadow-[0_0_0_1px_rgba(148,163,184,0.5)]">
<span className="text-[0.7rem] font-semibold tracking-[0.18em] text-lime-200 uppercase" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
                TS
              </span>
</div>
<span className="text-sm font-semibold text-slate-50 tracking-tight" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
              [Tên sản phẩm]
            </span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<button className="hover:text-lime-200 transition-colors">Tính năng</button>
<button className="hover:text-lime-200 transition-colors">Cách hoạt động</button>
<button className="hover:text-lime-200 transition-colors">Bảng giá</button>
<button className="hover:text-lime-200 transition-colors">Khách hàng</button>
<button className="hover:text-lime-200 transition-colors">FAQ</button>
</nav>

<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-sm text-slate-100 px-4 py-2 hover:border-lime-300 hover:text-lime-100 transition-colors">
              Đăng nhập
            </button>
<button className="inline-flex items-center justify-center rounded-full text-sm font-medium px-5 py-2 text-slate-950 shadow-[0_0_40px_rgba(198,255,77,0.8)] hover:brightness-110 transition" style={{background: 'linear-gradient(135deg, #C6FF4D, #A8FF60)'}}>
              Dùng thử miễn phí
            </button>
</div>
</div>
</header>
<main className="flex-1">

<section className="w-full border-b border-slate-800">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">
<span className="inline-flex h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_20px_rgba(198,255,77,0.9)]"></span>
<span className="text-xs text-slate-300">Giải pháp quản lý cho thuê sân thể thao all-in-one</span>
</div>
<div className="space-y-4">
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-50 tracking-tight">
                  Lấp đầy lịch sân, quản lý nhẹ tênh
                </h1>
<p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  [Tên sản phẩm] giúp chủ sân pickleball, bóng đá mini, tennis, cầu lông… quản lý lịch đặt sân, thanh toán
                  online và báo cáo doanh thu trên một màn hình duy nhất.
                </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="inline-flex items-center justify-center rounded-full text-base font-medium px-6 py-3 text-slate-950 shadow-[0_0_45px_rgba(198,255,77,0.9)] hover:brightness-110 transition w-full sm:w-auto" style={{background: 'linear-gradient(135deg, #C6FF4D, #A8FF60)'}}>
                  Dùng thử miễn phí 14 ngày
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 text-base text-slate-100 px-6 py-3 hover:border-lime-300 hover:text-lime-100 transition w-full sm:w-auto">
<svg className="lucide lucide-play-circle h-5 w-5 text-lime-300" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Xem demo lịch sân</span>
</button>
</div>

<div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-slate-400">
<div className="inline-flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-slate-700 bg-slate-800/80"></div>
<div className="h-8 w-8 rounded-full border border-slate-700 bg-slate-800/80"></div>
<div className="h-8 w-8 rounded-full border border-slate-700 bg-slate-800/80"></div>
</div>
<span>Hơn 100+ chủ sân đã đăng ký dùng thử.</span>
</div>
<div className="flex items-center gap-1 text-xs text-lime-200">
<svg className="lucide lucide-star h-3.5 w-3.5 text-lime-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.9/5 từ phản hồi của chủ sân</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

<div className="relative p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-black/70 border border-slate-700"></div>
<div className="space-y-0.5">
<p className="text-xs text-slate-200">Chủ sân Phú Thọ Pickleball</p>
<p className="text-[0.7rem] text-slate-400">Xem nhanh lịch hôm nay</p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-black/80 border border-lime-300/70 px-2 py-0.5 text-[0.7rem] text-lime-200">
<span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
                      Live
                    </span>
</div>

<div className="mt-2 rounded-2xl border border-slate-700 bg-slate-950/90 p-3 sm:p-4 space-y-3">
<div className="flex items-center justify-between text-xs text-slate-200 mb-1">
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-slate-600 text-slate-200 hover:border-lime-300 hover:text-lime-200 transition">
<svg className="lucide lucide-chevron-left h-3.5 w-3.5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="font-medium">Tuần này · Thứ 7</span>
</div>
<div className="inline-flex items-center gap-1 text-[0.7rem]">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-slate-300">Đã đặt</span>
<span className="inline-flex h-2 w-2 rounded-full bg-lime-300 ml-2"></span>
<span className="text-slate-300">Giờ trống</span>
</div>
</div>

<div className="grid grid-cols-4 gap-2 text-[0.7rem]">

<div className="space-y-1.5">
<p className="text-slate-400 mb-1">Sân 1</p>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-lime-300/70"></div>
<div className="h-6 rounded-lg bg-slate-800"></div>
</div>

<div className="space-y-1.5">
<p className="text-slate-400 mb-1">Sân 2</p>
<div className="h-6 rounded-lg bg-lime-300/70"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-lime-300/70"></div>
</div>

<div className="space-y-1.5">
<p className="text-slate-400 mb-1">Sân 3</p>
<div className="h-6 rounded-lg bg-slate-800"></div>
<div className="h-6 rounded-lg bg-lime-300/70"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
</div>

<div className="space-y-1.5">
<p className="text-slate-400 mb-1">Sân 4</p>
<div className="h-6 rounded-lg bg-lime-300/70"></div>
<div className="h-6 rounded-lg bg-slate-800"></div>
<div className="h-6 rounded-lg bg-lime-300/70"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
</div>
</div>
<div className="flex items-center justify-between pt-2 text-[0.7rem] text-slate-300">
<span>16 khung giờ đã được lấp đầy hôm nay</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-2 py-0.5 hover:border-lime-300 hover:text-lime-200 transition">
<svg className="lucide lucide-calendar-range h-3.5 w-3.5" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
<span>Xem theo tháng</span>
</button>
</div>
</div>

<div className="mt-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full border border-lime-300/70 bg-black/80"></div>
<div className="space-y-0.5 text-xs">
<p className="text-slate-100">Anh Nam – Chủ cụm sân futsal</p>
<p className="text-slate-400">“Giờ khách tự xem lịch, mình chỉ việc xác nhận.”</p>
</div>
</div>
<div className="hidden sm:flex items-center justify-center rounded-2xl border border-lime-300/70 bg-black/80 px-3 py-2 text-[0.7rem] text-lime-200">
<svg className="lucide lucide-smartphone h-3.5 w-3.5 mr-1.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                      Dashboard trên điện thoại
                    </div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-2 sm:-left-6 bg-slate-950/95 border border-lime-300/60 rounded-2xl shadow-[_18px_45px_rgba(0,0,0,0.9)] px-4 py-3 flex items-center gap-3">
<div className="flex flex-col text-[0.7rem]">
<span className="text-slate-300">Hôm nay</span>
<span className="text-sm font-medium text-lime-200">Tỷ lệ lấp đầy: 86%</span>
</div>
<div className="h-9 w-20 rounded-xl bg-gradient-to-r from-lime-300 to-emerald-400"></div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800">
<div className="max-w-6xl mx-auto px-4 py-10 lg:py-14 space-y-8">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 tracking-tight text-center" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
              Được tin dùng bởi các chủ sân thể thao trên khắp Việt Nam
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
<div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-5 py-4 flex flex-col justify-center text-center">
<p className="text-lg font-medium text-lime-200">+100</p>
<p className="text-base text-slate-200 mt-1">cụm sân tennis &amp; cầu lông</p>
</div>
<div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-5 py-4 flex flex-col justify-center text-center">
<p className="text-lg font-medium text-lime-200">Tăng 35%</p>
<p className="text-base text-slate-200 mt-1">tỷ lệ đặt sân online</p>
</div>
<div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-5 py-4 flex flex-col justify-center text-center">
<p className="text-lg font-medium text-lime-200">Tiết kiệm ~10 giờ/tuần</p>
<p className="text-base text-slate-200 mt-1">cho việc ghi chép</p>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10">
<div className="space-y-5">
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-50 tracking-tight">
                Thiết kế riêng cho chủ sân thể thao
              </h2>
<p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Phù hợp cho:
              </p>
<ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-base text-slate-200">
<li className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-lime-300"></span>
<span>Sân pickleball</span>
</li>
<li className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-lime-300"></span>
<span>Sân bóng đá mini / futsal</span>
</li>
<li className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-lime-300"></span>
<span>Sân tennis, cầu lông, bóng rổ</span>
</li>
</ul>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="space-y-1.5">
<p className="text-base text-slate-50">Đơn giản hóa vận hành với nhiều sân và nhiều khung giờ</p>
<p className="text-sm text-slate-400">
                    Dễ dàng thêm mới, sắp xếp và theo dõi từng sân, từng cụm sân trên một giao diện.
                  </p>
</div>
<div className="space-y-1.5">
<p className="text-base text-slate-50">Hạn chế sai sót khi nhận lịch qua điện thoại</p>
<p className="text-sm text-slate-400">
                    Tất cả lịch đặt được lưu trữ và hiển thị rõ ràng, không còn ghi nhầm khung giờ.
                  </p>
</div>
<div className="space-y-1.5">
<p className="text-base text-slate-50">Khách xem lịch &amp; đặt sân online</p>
<p className="text-sm text-slate-400">
                    Khách chủ động chọn giờ trống, bạn hạn chế phải trả lời tin nhắn hỏi giờ.
                  </p>
</div>
<div className="space-y-1.5">
<p className="text-base text-slate-50">Báo cáo doanh thu minh bạch</p>
<p className="text-sm text-slate-400">
                    Thấy ngay sân nào hiệu quả, khung giờ nào nên đẩy mạnh khuyến mãi.
                  </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-5 sm:p-6 flex flex-col gap-4 shadow-[0_18px_50px_rgba(0,0,0,0.8)]">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300">Tổng quan cụm sân</p>
<span className="inline-flex items-center gap-1 rounded-full bg-black/80 border border-lime-300/60 px-2 py-0.5 text-[0.7rem] text-lime-200">
                  Live
                </span>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-700 p-3 space-y-1">
<p className="text-slate-400">Pickleball</p>
<p className="text-lg text-lime-200 font-medium">4 sân</p>
<p className="text-[0.7rem] text-slate-400">Lấp đầy 82%</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-700 p-3 space-y-1">
<p className="text-slate-400">Futsal</p>
<p className="text-lg text-lime-200 font-medium">3 sân</p>
<p className="text-[0.7rem] text-slate-400">Lấp đầy 89%</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-700 p-3 space-y-1">
<p className="text-slate-400">Tennis</p>
<p className="text-lg text-lime-200 font-medium">6 sân</p>
<p className="text-[0.7rem] text-slate-400">Lấp đầy 78%</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-700 p-3 space-y-1">
<p className="text-slate-400">Cầu lông</p>
<p className="text-lg text-lime-200 font-medium">8 sân</p>
<p className="text-[0.7rem] text-slate-400">Lấp đầy 74%</p>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-xs text-slate-300">
<span>Tổng doanh thu tuần này</span>
<span className="text-lime-200 font-medium">+32% so với tuần trước</span>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800" id="features">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
                Lợi ích nổi bật cho chủ sân
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-400 flex items-center justify-center text-slate-950">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-lg font-medium text-slate-50">
                    Quản lý tất cả sân trên một màn hình
                  </h3>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-slate-300">
<li>Thêm, sửa, xóa thông tin sân</li>
<li>Tùy chỉnh loại sân và giá theo ngày</li>
</ul>
</article>

<article className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-400 flex items-center justify-center text-slate-950">
<svg className="lucide lucide-calendar-clock h-4 w-4" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<h3 className="text-lg font-medium text-slate-50">
                    Lịch đặt sân rõ ràng, tránh trùng giờ
                  </h3>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-slate-300">
<li>Lịch dạng calendar theo ngày/tuần/tháng</li>
<li>Màu phân loại lịch định kỳ &amp; lịch lẻ</li>
</ul>
</article>

<article className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-400 flex items-center justify-center text-slate-950">
<svg className="lucide lucide-globe-2 h-4 w-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-medium text-slate-50">
                    Khách xem lịch &amp; đặt sân online không cần đăng nhập
                  </h3>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-slate-300">
<li>Link công khai lịch sân</li>
<li>Chọn giờ trống &amp; thanh toán online</li>
</ul>
</article>

<article className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-400 flex items-center justify-center text-slate-950">
<svg className="lucide lucide-chart-line h-4 w-4" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-50">
                    Báo cáo hiệu suất &amp; doanh thu chi tiết
                  </h3>
</div>
<ul className="mt-1 space-y-1.5 text-sm text-slate-300">
<li>Doanh thu theo sân, khung giờ, tháng</li>
<li>Tỷ lệ lấp đầy giờ vàng</li>
</ul>
</article>
</div>
</div>
</section>
</main>
</div>

<section className="w-full border-slate-800 border-b bg-slate-950">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 space-y-10">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
<div className="space-y-3 max-w-xl">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
              Cách hoạt động – từng bước đơn giản
            </h2>
<p className="text-base sm:text-lg text-slate-300">
              Từ lúc thiết lập sân đến khi khách thanh toán xong – tất cả đều nằm trong một Dashboard trực quan.
            </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col gap-2">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 text-slate-950 flex items-center justify-center text-sm font-medium">
                  1
                </div>
<p className="text-base font-medium text-slate-50">
                  Thiết lập sân &amp; khung giờ
                </p>
</div>
<p className="text-sm text-slate-300">
                Khai báo số lượng sân, loại sân, giá theo khung giờ và ngày trong tuần.
              </p>
</div>

<div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col gap-2">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 text-slate-950 flex items-center justify-center text-sm font-medium">
                  2
                </div>
<p className="text-base font-medium text-slate-50">
                  Chia sẻ lịch đặt sân cho khách
                </p>
</div>
<p className="text-sm text-slate-300">
                Gửi link lịch sân công khai qua Zalo, Facebook, hoặc gắn trên fanpage.
              </p>
</div>

<div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col gap-2">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 text-slate-950 flex items-center justify-center text-sm font-medium">
                  3
                </div>
<p className="text-base font-medium text-slate-50">
                  Khách tự xem lịch &amp; đặt sân
                </p>
</div>
<p className="text-sm text-slate-300">
                Khách chọn giờ trống, điền thông tin và xác nhận đặt sân trong vài giây.
              </p>
</div>

<div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col gap-2">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 text-slate-950 flex items-center justify-center text-sm font-medium">
                  4
                </div>
<p className="text-base font-medium text-slate-50">
                  Quản lý &amp; xác nhận trong Dashboard
                </p>
</div>
<p className="text-sm text-slate-300">
                Bạn xem, chỉnh sửa, xác nhận hoặc từ chối từng lịch đặt ngay trên hệ thống.
              </p>
</div>

<div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col gap-2 sm:col-span-2">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 text-slate-950 flex items-center justify-center text-sm font-medium">
                  5
                </div>
<p className="text-base font-medium text-slate-50">
                  Theo dõi doanh thu &amp; hiệu suất
                </p>
</div>
<p className="text-sm text-slate-300">
                Xem báo cáo doanh thu theo sân, khung giờ, tháng để tối ưu giá và chương trình khuyến mãi.
              </p>
</div>
</div>

<div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center justify-between text-xs text-slate-300">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-panel-right h-4 w-4 text-lime-300" data-lucide="panel-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M15 3v18"></path></svg>
<span>Dashboard [Tên sản phẩm]</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-black/70 border border-lime-300/60 px-2 py-0.5 text-[0.7rem] text-lime-200">
                Demo
              </span>
</div>
<div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-4 space-y-3">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Hôm nay · Thứ 6</span>
<span className="text-lime-200">7/8 sân đang hoạt động</span>
</div>
<div className="grid grid-cols-4 gap-2 text-[0.7rem]">
<div className="space-y-1.5">
<p className="text-slate-400">07:00</p>
<div className="h-6 rounded-lg bg-lime-300/80"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-lime-300/80"></div>
</div>
<div className="space-y-1.5">
<p className="text-slate-400">09:00</p>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-slate-800"></div>
<div className="h-6 rounded-lg bg-lime-300/80"></div>
</div>
<div className="space-y-1.5">
<p className="text-slate-400">17:00</p>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-lime-300/80"></div>
</div>
<div className="space-y-1.5">
<p className="text-slate-400">19:00</p>
<div className="h-6 rounded-lg bg-lime-300/80"></div>
<div className="h-6 rounded-lg bg-emerald-500/60"></div>
<div className="h-6 rounded-lg bg-slate-800"></div>
</div>
</div>
<div className="flex items-center justify-between pt-2 text-[0.7rem] text-slate-300">
<span>
                  Lịch định kỳ:
                  <span className="text-lime-200">12 khung giờ</span>
</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-2 py-0.5 hover:border-lime-300 hover:text-lime-200 transition">
<svg className="lucide lucide-settings-2 h-3.5 w-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                  Chỉnh sửa
                </button>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-2xl border border-slate-700 bg-black/70 p-3 space-y-1.5">
<p className="text-slate-400">Doanh thu tháng này</p>
<p className="text-lg text-lime-200 font-medium">+37%</p>
<p className="text-[0.7rem] text-slate-400">So với cùng kỳ</p>
</div>
<div className="rounded-2xl border border-slate-700 bg-black/70 p-3 space-y-1.5">
<p className="text-slate-400">Tỷ lệ hủy phút chót</p>
<p className="text-lg text-emerald-300 font-medium">-58%</p>
<p className="text-[0.7rem] text-slate-400">Nhờ nhắc lịch tự động</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 space-y-8">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight text-center" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
          Tác động rõ rệt tới doanh thu sân của bạn
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
<div className="rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 flex flex-col gap-2">
<p className="text-lg font-medium text-lime-200">
              Giảm 70% thời gian nhắn tin &amp; ghi chép
            </p>
<p className="text-sm text-slate-300">
              Không còn phải nhắn từng khung giờ cho khách, mọi thứ đã rõ ngay trên link lịch.
            </p>
</div>
<div className="rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 flex flex-col gap-2">
<p className="text-lg font-medium text-lime-200">
              Tăng tỷ lệ lấp đầy khung giờ trống
            </p>
<p className="text-sm text-slate-300">
              Dễ dàng nhận ra giờ nào còn trống để chạy khuyến mãi hoặc gộp nhóm khách.
            </p>
</div>
<div className="rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 flex flex-col gap-2">
<p className="text-lg font-medium text-lime-200">
              Hạn chế tối đa trùng lịch &amp; hủy phút chót
            </p>
<p className="text-sm text-slate-300">
              Lịch tập trung một nơi, có nhắc lịch tự động giúp giảm hủy sát giờ.
            </p>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 space-y-8">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight text-center" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
          Chủ sân nói gì về [Tên sản phẩm]?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-full border border-lime-300/70 bg-black/80"></div>
<div className="space-y-0.5">
<p className="text-base text-slate-50">Anh Hùng</p>
<p className="text-sm text-slate-400">Chủ cụm sân cầu lông tại Hà Nội</p>
</div>
</div>
<p className="text-base text-slate-200">
              “Trước đây mình phải ôm 2–3 cuốn sổ, giờ chỉ cần mở điện thoại là xem được lịch của tất cả sân.”
            </p>
</article>

<article className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-full border border-lime-300/70 bg-black/80"></div>
<div className="space-y-0.5">
<p className="text-base text-slate-50">Chị Trang</p>
<p className="text-sm text-slate-400">Chủ sân tennis &amp; pickleball tại Đà Nẵng</p>
</div>
</div>
<p className="text-base text-slate-200">
              “Khách rất thích vì xem lịch online nhanh, không cần hỏi giờ trống.”
            </p>
</article>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 space-y-8">
<div className="text-center space-y-3 max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
            Bảng giá đơn giản, phù hợp mọi quy mô sân
          </h2>
<p className="text-base sm:text-lg text-slate-300">
            Bắt đầu miễn phí, nâng cấp khi bạn sẵn sàng mở rộng thêm sân và tăng tần suất đặt lịch.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

<div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 flex flex-col gap-4">
<div className="space-y-1">
<p className="text-sm font-medium text-lime-200">Gói Cơ Bản</p>
<p className="text-2xl font-semibold text-slate-50">Miễn phí</p>
</div>
<ul className="space-y-1.5 text-sm text-slate-300">
<li>Quản lý tối đa X sân</li>
<li>Lịch đặt sân cơ bản</li>
<li>Báo cáo tổng</li>
</ul>
<div className="pt-2">
<button className="inline-flex items-center justify-center rounded-full border border-lime-300 bg-transparent text-base font-medium text-lime-200 px-5 py-2.5 hover:bg-lime-300 hover:text-slate-950 transition w-full">
                Đăng ký ngay
              </button>
</div>
</div>

<div className="rounded-3xl border-2 border-lime-300/80 bg-gradient-to-b from-slate-950 via-slate-950 to-black p-6 flex flex-col gap-4 shadow-[0_24px_80px_rgba(198,255,77,0.35)] relative overflow-hidden">
<div className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(circle at center, #C6FF4D 0%, transparent 65%)'}}></div>
<div className="space-y-1 relative">
<p className="text-sm font-medium text-lime-200">Gói Chuyên Nghiệp</p>
<p className="text-2xl font-semibold text-slate-50">từ 4xx.000đ/tháng</p>
</div>
<ul className="space-y-1.5 text-sm text-slate-300 relative">
<li>Không giới hạn số sân</li>
<li>Lịch định kỳ theo tháng</li>
<li>Thanh toán online</li>
</ul>
<div className="pt-2 relative">
<button className="inline-flex items-center justify-center rounded-full text-base font-medium px-5 py-2.5 text-slate-950 shadow-[0_0_40px_rgba(198,255,77,0.9)] hover:brightness-110 transition w-full" style={{background: 'linear-gradient(135deg, #C6FF4D, #A8FF60)'}}>
                Dùng thử miễn phí 14 ngày
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 space-y-8">
<div className="max-w-2xl space-y-3">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
            Câu hỏi thường gặp
          </h2>
<p className="text-base sm:text-lg text-slate-300">
            Nếu bạn vẫn còn phân vân, dưới đây là một vài thắc mắc phổ biến từ các chủ sân.
          </p>
</div>
<div className="space-y-3">

<details className="group rounded-2xl border border-slate-700 bg-slate-950/80 p-4 sm:p-5">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-base text-slate-50">
<span>Tôi có cần cài đặt phần mềm không?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-3 text-sm text-slate-300">
              Bạn chỉ cần trình duyệt web hoặc điện thoại có internet để sử dụng [Tên sản phẩm], không cần cài đặt
              phức tạp.
            </div>
</details>
<details className="group rounded-2xl border border-slate-700 bg-slate-950/80 p-4 sm:p-5">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-base text-slate-50">
<span>Khách có cần tạo tài khoản để đặt sân không?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-3 text-sm text-slate-300">
              Không cần. Khách có thể xem lịch và đặt sân trực tiếp qua link công khai mà không phải đăng ký tài
              khoản.
            </div>
</details>
<details className="group rounded-2xl border border-slate-700 bg-slate-950/80 p-4 sm:p-5">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-base text-slate-50">
<span>Hệ thống có hỗ trợ lịch định kỳ theo tháng không?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-3 text-sm text-slate-300">
              Có. Bạn có thể tạo lịch định kỳ theo tuần/tháng cho các nhóm khách cố định và vẫn quản lý trên cùng
              một lịch.
            </div>
</details>
<details className="group rounded-2xl border border-slate-700 bg-slate-950/80 p-4 sm:p-5">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-base text-slate-50">
<span>Tôi có thể dùng thử trước khi trả phí không?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-3 text-sm text-slate-300">
              Bạn được dùng thử miễn phí 14 ngày Gói Chuyên Nghiệp, không cần thẻ tín dụng khi đăng ký.
            </div>
</details>
<details className="group rounded-2xl border border-slate-700 bg-slate-950/80 p-4 sm:p-5">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-base text-slate-50">
<span>Dữ liệu lịch và doanh thu của tôi có an toàn không?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-3 text-sm text-slate-300">
              Tất cả dữ liệu được lưu trữ trên máy chủ bảo mật, sao lưu định kỳ và chỉ mình bạn có quyền truy cập
              Dashboard quản lý.
            </div>
</details>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
<div className="rounded-3xl border border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-8 sm:px-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="space-y-3 max-w-xl">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: '\'DynaPuff\', system-ui, sans-serif'}}>
              Sẵn sàng lấp đầy lịch sân của bạn?
            </h2>
<p className="text-base sm:text-lg text-slate-300">
              Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
<button className="inline-flex items-center justify-center rounded-full text-base font-medium px-6 py-3 text-slate-950 shadow-[0_0_45px_rgba(198,255,77,0.9)] hover:brightness-110 transition w-full sm:w-auto" style={{background: 'linear-gradient(135deg, #C6FF4D, #A8FF60)'}}>
              Bắt đầu ngay
            </button>
</div>
</div>
</div>
</section>

    </>
  );
}
