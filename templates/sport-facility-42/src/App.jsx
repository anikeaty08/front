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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-lg group-hover:scale-110 transition-transform">
                        SM
                    </div>
<span className="font-bold text-xl tracking-tight text-slate-900">SportMaster</span>
</div>

<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-green-600 transition-colors" href="#tinh-nang">Tính năng</a>
<a className="hover:text-green-600 transition-colors" href="#loi-ich">Lợi ích</a>
<a className="hover:text-green-600 transition-colors" href="#bang-gia">Bảng giá</a>
<a className="hover:text-green-600 transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:block text-slate-600 font-medium text-sm hover:text-slate-900">Đăng nhập</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                        Bắt đầu ngay
                    </button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-slate-800">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-green-400 text-xs font-semibold tracking-wide uppercase mb-6 animate-slide-up">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Giải pháp số 1 cho chủ sân
                    </div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 animate-slide-up delay-100">
                        Quản lý sân bóng <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">thông minh</span><br/>
                        Tối ưu doanh thu.
                    </h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg animate-slide-up delay-200">
                        Nền tảng toàn diện giúp chủ sân quản lý lịch trình, tự động hóa đặt sân và báo cáo doanh thu chỉ trong một màn hình.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
<button className="bg-green-600 hover:bg-green-500 text-white text-base font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-green-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
<span>Dùng thử miễn phí</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-base font-semibold py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>Xem bản Demo</span>
</button>
</div>
<div className="mt-10 flex items-center gap-4 text-slate-500 text-sm animate-slide-up delay-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
</div>
<p>Được tin dùng bởi <strong className="text-white">500+</strong> chủ sân</p>
</div>
</div>

<div className="relative lg:h-[500px] w-full flex items-center justify-center animate-slide-up delay-300">

<div className="relative w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-sm">Lịch đặt sân</h3>
<p className="text-slate-400 text-xs">Thứ 7, 24 Tháng 8</p>
</div>
</div>
<div className="px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium">
                                +12% Tuần này
                            </div>
</div>

<div className="space-y-3">

<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/50 border border-slate-600/50">
<div className="text-slate-300 text-xs font-mono w-12">17:30</div>
<div className="flex-1">
<div className="text-white text-sm font-medium">Sân 7 - FC Anh Em</div>
<div className="text-slate-400 text-[10px]">Đã thanh toán • Momo</div>
</div>
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/50 border border-slate-600/50">
<div className="text-slate-300 text-xs font-mono w-12">19:00</div>
<div className="flex-1">
<div className="text-white text-sm font-medium">Sân 5 - Team Văn Phòng</div>
<div className="text-orange-400 text-[10px]">Chờ check-in • Tiền mặt</div>
</div>
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-600 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
<div className="text-slate-300 text-xs font-mono w-12">20:30</div>
<div className="flex-1 text-slate-400 text-sm">Trống - Nhấn để đặt</div>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-6">
<div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
<p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Doanh thu hôm nay</p>
<p className="text-white font-semibold text-lg">2.4tr</p>
</div>
<div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
<p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Tỉ lệ lấp đầy</p>
<p className="text-white font-semibold text-lg">85%</p>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:chart-2-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-900 font-bold text-sm">Hiệu suất tăng</p>
<p className="text-green-600 text-xs font-bold">+30%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div className="group">
<p className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">500+</p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Chủ sân tin dùng</p>
</div>
<div className="group">
<p className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">10k+</p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Lượt đặt / tháng</p>
</div>
<div className="group">
<p className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">30%</p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Tăng trưởng doanh thu</p>
</div>
<div className="group">
<p className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">24/7</p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Hỗ trợ kỹ thuật</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="tinh-nang">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Mọi thứ bạn cần để vận hành</h2>
<p className="text-slate-600">Loại bỏ sổ sách thủ công. SportMaster mang đến quy trình quản lý hiện đại, chính xác và hiệu quả.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Loại bỏ sai sót</h3>
<p className="text-sm text-slate-500 leading-relaxed">Không còn tình trạng chồng lịch hay quên lịch. Hệ thống tự động kiểm tra và khóa khung giờ đã đặt.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Thanh toán nhanh</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tích hợp mã QR và ví điện tử. Hỗ trợ thanh toán online tiện lợi, giảm thiểu rủi ro tiền mặt.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Báo cáo chuẩn xác</h3>
<p className="text-sm text-slate-500 leading-relaxed">Biểu đồ doanh thu trực quan theo thời gian thực. Theo dõi dòng tiền minh bạch, chi tiết.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Tiếp cận khách hàng</h3>
<p className="text-sm text-slate-500 leading-relaxed">Website đặt sân riêng cho cơ sở của bạn. Khách dễ dàng tìm và đặt sân trên mọi thiết bị.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-green-600 font-semibold tracking-wider text-xs uppercase mb-2 block">Quy trình đơn giản</span>
<h2 className="text-3xl font-semibold text-slate-900 mb-8 tracking-tight">Bắt đầu chỉ với 3 bước</h2>
<div className="space-y-10">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Thiết lập sân &amp; Bảng giá</h3>
<p className="text-slate-500 text-sm leading-relaxed">Nhập thông tin số lượng sân, loại sân và thiết lập khung giá linh hoạt theo giờ vàng/thường.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">2</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Chia sẻ &amp; Đặt lịch</h3>
<p className="text-slate-500 text-sm leading-relaxed">Gửi đường link đặt sân cho khách hàng. Hệ thống tự động cập nhật trạng thái sân trống.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Quản lý &amp; Tăng trưởng</h3>
<p className="text-slate-500 text-sm leading-relaxed">Theo dõi báo cáo doanh thu hàng ngày, tối ưu vận hành và chăm sóc khách hàng thân thiết.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative">

<div className="space-y-4">
<div className="flex justify-between items-center mb-6">
<div className="font-bold text-lg text-slate-900">Thiết lập giá</div>
<button className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">Lưu thay đổi</button>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
<div>
<p className="text-sm font-semibold text-slate-900">Giờ Vàng (17h - 21h)</p>
<p className="text-xs text-slate-400">Thứ 2 - Thứ 6</p>
</div>
<span className="text-green-600 font-mono font-bold">450k/h</span>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
<div>
<p className="text-sm font-semibold text-slate-900">Giờ Thường</p>
<p className="text-xs text-slate-400">Thứ 2 - Thứ 6</p>
</div>
<span className="text-slate-600 font-mono font-bold">300k/h</span>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center opacity-75">
<div>
<p className="text-sm font-semibold text-slate-900">Cuối Tuần</p>
<p className="text-xs text-slate-400">T7 - CN</p>
</div>
<span className="text-green-600 font-mono font-bold">500k/h</span>
</div>
</div>
<div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-4 rounded-lg shadow-xl text-center">
<p className="text-xs text-slate-400 mb-1">Dễ dàng</p>
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-16 tracking-tight">Khách hàng nói gì về chúng tôi?</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6">"Hệ thống giúp tôi giảm 80% thời gian trực điện thoại. Khách tự đặt sân, tự thanh toán cọc, tôi chỉ việc kiểm tra ứng dụng."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">

<iconify-icon className="text-slate-400 w-full h-full" icon="solar:user-circle-bold" width="40"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Anh Tuấn</p>
<p className="text-xs text-slate-500">Chủ sân bóng Đại học Y</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6">"Báo cáo doanh thu rất chi tiết, dễ hiểu hơn dùng Excel nhiều. Giúp tôi biết giờ nào vắng khách để chạy khuyến mãi."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<iconify-icon className="text-slate-400 w-full h-full" icon="solar:user-circle-bold" width="40"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Chị Lan</p>
<p className="text-xs text-slate-500">Quản lý cụm sân Tân Bình</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-12 tracking-tight">Câu hỏi thường gặp</h2>
<div className="space-y-4">
<div className="border border-slate-200 rounded-xl p-6 hover:border-green-500 transition-colors">
<h3 className="flex items-center gap-3 font-semibold text-slate-900 mb-2">
<iconify-icon className="text-green-600" icon="solar:question-circle-linear" width="20"></iconify-icon>
                        Tôi có thể quản lý nhiều chi nhánh không?
                    </h3>
<p className="text-slate-500 text-sm pl-8">Hoàn toàn được, hệ thống hỗ trợ quản lý tập trung nhiều cụm sân trên cùng một tài khoản quản trị.</p>
</div>
<div className="border border-slate-200 rounded-xl p-6 hover:border-green-500 transition-colors">
<h3 className="flex items-center gap-3 font-semibold text-slate-900 mb-2">
<iconify-icon className="text-green-600" icon="solar:question-circle-linear" width="20"></iconify-icon>
                        Khách hàng có cần tải app để đặt sân không?
                    </h3>
<p className="text-slate-500 text-sm pl-8">Không, SportMaster tối ưu cho trình duyệt web và di động. Khách hàng có thể đặt trực tiếp qua link bạn chia sẻ mà không cần cài đặt ứng dụng.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 border-t border-slate-800">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Sẵn sàng số hóa sân thể thao của bạn?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Đăng ký ngay để nhận 14 ngày dùng thử miễn phí đầy đủ tính năng. Không cần thẻ tín dụng.</p>
<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-10 rounded-xl shadow-lg shadow-orange-900/20 transition-transform hover:-translate-y-1">
                Bắt đầu ngay
            </button>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">SM</div>
<span className="font-semibold text-white">SportMaster</span>
</div>
<div className="text-sm flex gap-6">
<a className="hover:text-white transition-colors" href="#">Điều khoản dịch vụ</a>
<a className="hover:text-white transition-colors" href="#">Chính sách bảo mật</a>
<a className="hover:text-white transition-colors" href="#">Liên hệ</a>
</div>
<div className="text-xs text-slate-600">
                Copyright © 2024 SportMaster. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
