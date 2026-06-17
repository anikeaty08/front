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
      

<nav className="fixed w-full z-50 top-0 bg-[#0B1220]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="text-xl font-bold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-[#C7F000] rounded-lg flex items-center justify-center text-[#0B1220]">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
                SPORT<span className="text-[#C7F000]">MANAGER</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
<a className="hover:text-[#C7F000] transition-colors" href="#features">Tính năng</a>
<a className="hover:text-[#C7F000] transition-colors" href="#how-it-works">Cách hoạt động</a>
<a className="hover:text-[#C7F000] transition-colors" href="#pricing">Giá</a>
<a className="hover:text-[#C7F000] transition-colors" href="#faq">Câu hỏi thường gặp</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-[#C7F000] transition-colors" href="#">Đăng nhập</a>
<a className="bg-[#C7F000] hover:bg-[#b2d600] text-[#0B1220] px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(199,240,0,0.2)]" href="#pricing">
                    Dùng thử miễn phí 14 ngày
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C7F000] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7F000]/10 border border-[#C7F000]/20 text-[#C7F000] text-xs font-semibold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-[#C7F000] animate-pulse"></span>
                    Dành cho chủ sân thể thao
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-5xl font-bold tracking-tight mb-6">
                    Quản lý cho thuê <br/>
<span className="text-white pt-1 pb-1">sân thể thao</span><br className=""/>
<span className="text-[#C7F000]">đơn giản – tự động.</span>
</h1>
<p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    Một nền tảng duy nhất giúp bạn quản lý sân pickleball, bóng đá mini, tennis, cầu lông. Tự động hóa lịch thuê, thanh toán và báo cáo doanh thu.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-[#C7F000] text-[#0B1220] px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(199,240,0,0.3)]" href="#">
                        Xem demo miễn phí
                        <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-center gap-2 glass-card text-white border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors" href="#">
                        Dùng thử 14 ngày – Không cần thẻ
                    </a>
</div>
</div>

<div className="relative mt-12 lg:mt-0">
<div className="relative z-10 bg-[#0F1729] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-[#C7F000]/5 rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div>
<div className="text-xs text-gray-400 mb-1">Tổng doanh thu tháng</div>
<div className="text-2xl font-bold text-white">45.200.000₫</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-[#C7F000] flex items-center justify-center text-[#0B1220] font-bold text-xs">A</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3 mb-4">

<div className="space-y-4 pt-8">
<div className="text-xs text-gray-500 text-right pr-2">16:00</div>
<div className="text-xs text-gray-500 text-right pr-2">17:00</div>
<div className="text-xs text-gray-500 text-right pr-2">18:00</div>
<div className="text-xs text-gray-500 text-right pr-2">19:00</div>
</div>

<div className="col-span-1 space-y-2">
<div className="text-xs font-semibold text-center text-gray-400 mb-2">Sân 1</div>
<div className="h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
<span className="text-[10px] text-emerald-400">Đã đặt</span>
</div>
<div className="h-24 rounded-lg bg-[#C7F000]/20 border border-[#C7F000] flex items-center justify-center flex-col shadow-[0_0_15px_rgba(199,240,0,0.2)]">
<span className="text-[10px] font-bold text-[#C7F000]">Đang đá</span>
<span className="text-[8px] text-[#C7F000]/80">Nhóm Anh Tú</span>
</div>
</div>

<div className="col-span-1 space-y-2">
<div className="text-xs font-semibold text-center text-gray-400 mb-2">Sân 2</div>
<div className="h-20 rounded-lg bg-gray-800/50 border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors group">
<span className="text-[10px] text-gray-500 group-hover:text-white">+ Đặt sân</span>
</div>
<div className="h-16 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
<span className="text-[10px] text-blue-400">Cố định</span>
</div>
</div>

<div className="col-span-1 space-y-2">
<div className="text-xs font-semibold text-center text-gray-400 mb-2">Sân 3</div>
<div className="h-36 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-col">
<span className="text-[10px] text-purple-400">Giải đấu</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-20 bg-[#1F2937] p-4 rounded-xl border border-white/10 shadow-xl animate-bounce duration-[3000ms]">
<div className="flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-lg text-green-400">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<div className="text-xs text-gray-400">Vừa thanh toán</div>
<div className="text-sm font-bold text-white">+ 300.000₫</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#0F1729]/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">Được tin dùng bởi các chủ sân trên toàn quốc</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold text-white mb-2">+120</span>
<span className="text-sm text-gray-400">Sân đang sử dụng</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold text-[#C7F000] mb-2">+35%</span>
<span className="text-sm text-gray-400">Tăng tỷ lệ lấp sân</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold text-white mb-2">-60%</span>
<span className="text-sm text-gray-400">Thời gian quản lý</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Tính năng <span className="text-[#C7F000]">vượt trội</span></h2>
<p className="text-gray-400 max-w-2xl">Mọi công cụ bạn cần để vận hành sân thể thao hiệu quả, tất cả trong một nền tảng.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-3xl hover:border-[#C7F000]/50 transition-colors group">
<div className="w-12 h-12 bg-[#C7F000]/10 rounded-xl flex items-center justify-center text-[#C7F000] mb-6 group-hover:bg-[#C7F000] group-hover:text-[#0B1220] transition-colors">
<svg className="lucide lucide-layout-grid w-6 h-6" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Quản lý toàn bộ sân trong một hệ thống</h3>
<ul className="space-y-2 text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Thêm, sửa, xóa nhiều sân dễ dàng</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Quản lý nhiều cụm sân khác nhau</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Phân quyền nhân viên quản lý</li>
</ul>
</div>

<div className="glass-card p-8 rounded-3xl hover:border-[#C7F000]/50 transition-colors group">
<div className="w-12 h-12 bg-[#C7F000]/10 rounded-xl flex items-center justify-center text-[#C7F000] mb-6 group-hover:bg-[#C7F000] group-hover:text-[#0B1220] transition-colors">
<svg className="lucide lucide-calendar-clock w-6 h-6" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Tự động hóa lịch thuê sân</h3>
<ul className="space-y-2 text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hỗ trợ thuê theo giờ linh hoạt</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Thiết lập lịch cố định theo tháng</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cảnh báo trùng lịch thông minh</li>
</ul>
</div>

<div className="glass-card p-8 rounded-3xl hover:border-[#C7F000]/50 transition-colors group">
<div className="w-12 h-12 bg-[#C7F000]/10 rounded-xl flex items-center justify-center text-[#C7F000] mb-6 group-hover:bg-[#C7F000] group-hover:text-[#0B1220] transition-colors">
<svg className="lucide lucide-smartphone w-6 h-6" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Khách tự đặt – tự thanh toán</h3>
<ul className="space-y-2 text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Khách không cần tạo tài khoản/đăng nhập</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Thanh toán QR Code tự động</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Xác nhận đặt sân qua Zalo/SMS</li>
</ul>
</div>

<div className="glass-card p-8 rounded-3xl hover:border-[#C7F000]/50 transition-colors group">
<div className="w-12 h-12 bg-[#C7F000]/10 rounded-xl flex items-center justify-center text-[#C7F000] mb-6 group-hover:bg-[#C7F000] group-hover:text-[#0B1220] transition-colors">
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Báo cáo doanh thu &amp; hiệu suất</h3>
<ul className="space-y-2 text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Chi tiết doanh thu theo ngày, tuần, tháng</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Biểu đồ tỷ lệ lấp đầy sân</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Phân tích giờ cao điểm/thấp điểm</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0F1729]" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#C7F000] text-sm font-bold uppercase tracking-widest">Quy trình đơn giản</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2">Hoạt động như thế nào?</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-[#C7F000]/30 to-transparent"></div>

<div className="text-center relative z-10">
<div className="w-24 h-24 mx-auto bg-[#0B1220] border-2 border-[#C7F000] rounded-full flex items-center justify-center text-3xl font-bold text-[#C7F000] mb-6 shadow-[0_0_20px_rgba(199,240,0,0.2)]">1</div>
<h3 className="text-xl font-bold text-white mb-3">Thiết lập sân</h3>
<p className="text-gray-400 text-sm leading-relaxed">Nhập thông tin sân, cấu hình giá thuê theo khung giờ và thời gian hoạt động.</p>
</div>

<div className="text-center relative z-10">
<div className="w-24 h-24 mx-auto bg-[#0B1220] border-2 border-white/20 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6">2</div>
<h3 className="text-xl font-bold text-white mb-3">Mở lịch công khai</h3>
<p className="text-gray-400 text-sm leading-relaxed">Chia sẻ đường link đặt sân. Khách tự xem lịch trống và đặt sân trực tiếp trên web.</p>
</div>

<div className="text-center relative z-10">
<div className="w-24 h-24 mx-auto bg-[#0B1220] border-2 border-white/20 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6">3</div>
<h3 className="text-xl font-bold text-white mb-3">Thanh toán &amp; Báo cáo</h3>
<p className="text-gray-400 text-sm leading-relaxed">Hệ thống tự động ghi nhận thanh toán, cập nhật lịch và gửi báo cáo doanh thu cho bạn.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-bold mb-12 text-center">Khách hàng nói gì về chúng tôi?</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 relative">
<svg className="lucide lucide-quote w-10 h-10 text-[#C7F000]/20 absolute top-6 right-6" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg text-gray-300 italic mb-6">"Từ khi dùng hệ thống, sân của tôi không còn trống giờ vàng vì khách dễ dàng đặt trước online. Doanh thu tăng rõ rệt chỉ sau 1 tháng."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">

<svg className="w-full h-full text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<div className="font-bold text-white">Anh Hoàng Minh</div>
<div className="text-sm text-[#C7F000]">Chủ sân Pickleball 365</div>
</div>
</div>
</div>

<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 relative">
<svg className="lucide lucide-quote w-10 h-10 text-[#C7F000]/20 absolute top-6 right-6" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg text-gray-300 italic mb-6">"Khách tự đặt, tự thanh toán. Tôi không cần thuê nhân viên trực điện thoại nữa, chỉ cần mở app xem báo cáo mỗi tối."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">

<svg className="w-full h-full text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<div className="font-bold text-white">Chị Thu Thảo</div>
<div className="text-sm text-[#C7F000]">Chủ sân bóng đá Mini Thảo Điền</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Bảng giá <span className="text-[#C7F000]">linh hoạt</span></h2>
<p className="text-gray-400">Chọn gói phù hợp với quy mô sân của bạn</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-card p-10 rounded-3xl border border-white/10 flex flex-col">
<h3 className="text-2xl font-bold text-white mb-2">BASIC</h3>
<div className="text-4xl font-bold text-white mb-6">Miễn phí <span className="text-base font-normal text-gray-500">/ trọn đời</span></div>
<p className="text-gray-400 text-sm mb-8">Dành cho sân nhỏ mới bắt đầu vận hành.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-gray-300"><svg className="lucide lucide-check w-5 h-5 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Quản lý tối đa 2 sân</li>
<li className="flex items-center gap-3 text-gray-300"><svg className="lucide lucide-check w-5 h-5 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Xem lịch &amp; đặt sân cơ bản</li>
<li className="flex items-center gap-3 text-gray-300"><svg className="lucide lucide-check w-5 h-5 text-gray-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Báo cáo doanh thu ngày</li>
</ul>
<a className="block w-full py-4 rounded-xl border border-white/20 text-center font-semibold hover:bg-white hover:text-black transition-colors" href="#">Bắt đầu miễn phí</a>
</div>

<div className="glass-card p-10 rounded-3xl border border-[#C7F000] relative flex flex-col shadow-[0_0_40px_rgba(199,240,0,0.1)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C7F000] text-[#0B1220] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Khuyên dùng
                    </div>
<h3 className="text-2xl font-bold text-white mb-2">PRO</h3>
<div className="text-4xl font-bold text-[#C7F000] mb-6">299.000đ <span className="text-base font-normal text-gray-500 text-white">/ tháng</span></div>
<p className="text-gray-400 text-sm mb-8">Đầy đủ tính năng cho việc kinh doanh chuyên nghiệp.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-white"><svg className="lucide lucide-check w-5 h-5 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>  số lượng sân</li>
<li className="flex items-center gap-3 text-white"><svg className="lucide lucide-check w-5 h-5 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Quản lý lịch thuê theo giờ &amp; tháng</li>
<li className="flex items-center gap-3 text-white"><svg className="lucide lucide-check w-5 h-5 text-[#C7F000]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Báo cáo &amp; phân tích nâng cao</li>
</ul>
<a className="block w-full py-4 rounded-xl bg-[#C7F000] text-[#0B1220] text-center font-bold hover:bg-white transition-colors" href="#">Dùng thử miễn phí 14 ngày</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0F1729]/50" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-bold mb-12 text-center">Câu hỏi thường gặp</h2>
<div className="space-y-6">
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-bold text-white mb-2">Khách có cần đăng ký tài khoản không?</h3>
<p className="text-gray-400">Không cần. Chúng tôi tối ưu trải nghiệm để khách hàng có thể xem lịch trống, đặt sân và thanh toán trực tiếp mà không cần trải qua các bước đăng ký phức tạp.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-bold text-white mb-2">Hệ thống có dùng được cho Pickleball không?</h3>
<p className="text-gray-400">Có. Hệ thống được thiết kế tối ưu cho Pickleball và các môn thể thao phổ biến khác như Tennis, Bóng đá mini, Cầu lông. Bạn có thể tùy chỉnh thời gian mỗi trận đấu (ví dụ 1h, 1.5h, 2h) dễ dàng.</p>
</div>
<div className="pb-6">
<h3 className="text-lg font-bold text-white mb-2">Tôi có thể quản lý trên điện thoại không?</h3>
<p className="text-gray-400">Hoàn toàn được. Hệ thống hoạt động mượt mà trên trình duyệt điện thoại, máy tính bảng và máy tính để bàn. Bạn có thể quản lý sân ở bất cứ đâu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden text-center">
<div className="absolute inset-0 bg-gradient-to-t from-[#C7F000]/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Bắt đầu quản lý sân chuyên nghiệpngay hôm nay</h2>
<p className="text-xl text-gray-400 mb-10">Tăng doanh thu – Giảm công việc – Không cần nhân sự trực lịch</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-[#C7F000] hover:bg-white text-[#0B1220] px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#C7F000]/20" href="#">
                    Dùng thử miễn phí 14 ngày
                </a>
</div>
</div>
</section>

<footer className="bg-black py-12 px-6 border-t border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-gray-500 text-sm">
                © 2023 SportManager. Bản quyền đã được bảo hộ.
            </div>
<div className="flex gap-8 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Điều khoản sử dụng</a>
<a className="hover:text-white transition-colors" href="#">Chính sách bảo mật</a>
<a className="hover:text-white transition-colors" href="#">Liên hệ</a>
</div>
</div>
</footer>


    </>
  );
}
