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
      

<header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center text-black font-black italic transform -skew-x-12 group-hover:skew-x-0 transition-transform">S</div>
<span className="text-xl font-bold tracking-tighter text-white">SPORT<span className="text-lime-400">MANAGER</span></span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors uppercase" href="#features">Tính năng</a>
<a className="hover:text-white transition-colors uppercase" href="#benefits">Lợi ích</a>
<a className="hover:text-white transition-colors uppercase" href="#pricing">Bảng giá</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex px-6 py-2.5 bg-lime-400 text-black text-sm font-bold rounded-full hover:bg-lime-300 transition-colors uppercase tracking-wide" href="#">
                    Dùng thử miễn phí
                </a>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 -z-10"></div>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-500/20 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                        Giải pháp dành cho chủ sân thể thao 4.0
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                        Quản lý sân <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Nhàn Tênh</span> <br/>
<span className="text-lime-400">Doanh thu tăng đột phá</span>
</h1>
<p className="text-lg text-zinc-400 font-medium max-w-xl leading-relaxed">
                        Hệ thống quản lý toàn diện &amp; Cho phép khách <span className="text-white font-semibold">Booking Online trong 30s</span> không cần đăng nhập. Loại bỏ 100% tình trạng trùng lịch.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-400 text-black text-sm font-bold uppercase tracking-wide rounded-sm hover:bg-lime-300 transition-all hover:translate-y-[-2px]">
                            Tải App Quản Lý Ngay <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white text-sm font-bold uppercase tracking-wide rounded-sm hover:bg-zinc-800 transition-all">
<i className="w-5 h-5" data-lucide="play-circle"></i> Xem Demo
                        </button>
</div>
</div>

<div className="relative lg:h-[700px] flex items-center justify-center">
<div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="w-full h-full bg-zinc-950 flex flex-col relative">

<div className="p-6 pt-12 flex justify-between items-center bg-gradient-to-b from-zinc-900 to-zinc-950">
<div>
<p className="text-zinc-400 text-xs font-medium uppercase">Tổng doanh thu</p>
<h3 className="text-3xl font-bold text-white tracking-tight">18.500.000đ</h3>
</div>
<div className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
</div>

<div className="p-6 space-y-4">
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<div className="flex-none px-4 py-2 bg-lime-400 text-black rounded-lg text-xs font-bold uppercase">Sân 1</div>
<div className="flex-none px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg text-xs font-bold uppercase">Sân 2</div>
<div className="flex-none px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg text-xs font-bold uppercase">Sân 3</div>
</div>
<div className="space-y-3">

<div className="flex gap-4 p-3 bg-zinc-900/50 border-l-4 border-lime-400 rounded-r-lg">
<div className="text-center min-w-[3rem]">
<p className="text-xs text-zinc-500 font-bold">17:00</p>
<p className="text-xs text-zinc-500 font-bold">18:30</p>
</div>
<div>
<p className="text-sm font-bold text-white">Nguyễn Văn A</p>
<p className="text-xs text-zinc-400">Đã thanh toán • Pickleball</p>
</div>
</div>

<div className="flex gap-4 p-3 bg-zinc-900/50 border-l-4 border-lime-400 rounded-r-lg">
<div className="text-center min-w-[3rem]">
<p className="text-xs text-zinc-500 font-bold">18:30</p>
<p className="text-xs text-zinc-500 font-bold">20:00</p>
</div>
<div>
<p className="text-sm font-bold text-white">CLB Cầu Lông</p>
<p className="text-xs text-zinc-400">Đã cọc 50% • Cố định</p>
</div>
</div>

<div className="flex gap-4 p-3 bg-zinc-900/50 border-l-4 border-zinc-700 rounded-r-lg opacity-60">
<div className="text-center min-w-[3rem]">
<p className="text-xs text-zinc-500 font-bold">20:00</p>
<p className="text-xs text-zinc-500 font-bold">21:00</p>
</div>
<div>
<p className="text-sm font-bold text-white">Trống</p>
<p className="text-xs text-zinc-400">Chạm để đặt lịch</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6">
<button className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center shadow-lg shadow-lime-400/20">
<i className="w-8 h-8 text-black" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover object-center -z-20 opacity-20 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1626248318376-7848b8c19958?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-800 bg-zinc-900/30">
<div className="max-w-screen-2xl mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">

<div className="flex gap-8 divide-x divide-zinc-700">
<div className="pr-4">
<p className="text-3xl font-black text-white">500+</p>
<p className="text-xs text-zinc-500 font-bold uppercase tracking-wide">Sân tin dùng</p>
</div>
<div className="px-8">
<p className="text-3xl font-black text-white">10K+</p>
<p className="text-xs text-zinc-500 font-bold uppercase tracking-wide">Booking/Tháng</p>
</div>
<div className="pl-8">
<p className="text-3xl font-black text-white">99.9%</p>
<p className="text-xs text-zinc-500 font-bold uppercase tracking-wide">Hoạt động ổn định</p>
</div>
</div>

<div className="flex items-center gap-8 opacity-40 grayscale">
<div className="flex items-center gap-2 font-black text-xl italic"><i className="w-6 h-6" data-lucide="activity"></i> PICKLEBALL.VN</div>
<div className="hidden sm:flex items-center gap-2 font-black text-xl italic"><i className="w-6 h-6" data-lucide="trophy"></i> SPORT.CENTER</div>
<div className="hidden md:flex items-center gap-2 font-black text-xl italic"><i className="w-6 h-6" data-lucide="zap"></i> ARENA.PRO</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="features">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
                    Tại sao chọn <span className="text-lime-400">chúng tôi?</span>
</h2>
<div className="w-20 h-1 bg-lime-400"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">

<div className="bg-zinc-950 p-12 group relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-900 rounded-sm flex items-center justify-center mb-6 border border-zinc-800 text-lime-400">
<i className="w-6 h-6" data-lucide="sliders-horizontal"></i>
</div>
<h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Kiểm soát toàn diện</h3>
<p className="text-zinc-400 font-medium leading-relaxed max-w-sm">
                            Thêm, sửa, xóa sân, điều chỉnh giá linh hoạt theo khung giờ cao điểm/thấp điểm chỉ với 1 chạm ngay trên điện thoại.
                        </p>
</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-lime-400/5 blur-[80px] group-hover:bg-lime-400/10 transition-colors"></div>
</div>

<div className="bg-zinc-900 p-12 group relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1577286367500-6c92e9734493?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-end">
<div className="w-12 h-12 bg-lime-400 rounded-sm flex items-center justify-center mb-6 text-black shadow-lg shadow-lime-400/20">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Khách đặt không cần Login</h3>
<p className="text-zinc-300 font-medium leading-relaxed max-w-sm">
                            Loại bỏ rào cản đăng ký. Khách xem lịch trống <i className="w-3 h-3 inline" data-lucide="arrow-right"></i> Chọn giờ <i className="w-3 h-3 inline" data-lucide="arrow-right"></i> Thanh toán. Tỉ lệ chốt đơn tăng 300%.
                        </p>
</div>
</div>

<div className="bg-zinc-950 p-12 group relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-900 rounded-sm flex items-center justify-center mb-6 border border-zinc-800 text-lime-400">
<i className="w-6 h-6" data-lucide="calendar-check"></i>
</div>
<h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Lịch cố định &amp; Vãng lai</h3>
<p className="text-zinc-400 font-medium leading-relaxed max-w-sm">
                            Tự động sắp xếp lịch khách thuê tháng và khách lẻ, hệ thống tự động cảnh báo và chặn trùng lịch (Double booking).
                        </p>
</div>
</div>

<div className="bg-zinc-950 p-12 group relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-900 rounded-sm flex items-center justify-center mb-6 border border-zinc-800 text-lime-400">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Doanh số minh bạch</h3>
<p className="text-zinc-400 font-medium leading-relaxed max-w-sm">
                            Theo dõi dòng tiền, hiệu suất lấp đầy sân theo thời gian thực. Báo cáo chi tiết theo ngày, tuần, tháng.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-900 bg-zinc-950">
<div className="max-w-screen-xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-black text-center text-white tracking-tighter uppercase mb-20">
                Bắt đầu chỉ với <span className="text-lime-400 decoration-4 underline decoration-lime-400 underline-offset-4">3 bước</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-800 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-zinc-800 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-lime-400 transition-colors">
<i className="w-10 h-10 text-zinc-400 group-hover:text-lime-400 transition-colors" data-lucide="download"></i>
<span className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center text-xs font-bold border border-black">01</span>
</div>
<h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Tải App &amp; Tạo sân</h3>
<p className="text-zinc-500 font-medium text-sm px-4">Đăng ký tài khoản chủ sân và thiết lập thông tin giá vé, khung giờ.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-zinc-800 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-lime-400 transition-colors">
<i className="w-10 h-10 text-zinc-400 group-hover:text-lime-400 transition-colors" data-lucide="share-2"></i>
<span className="absolute -top-2 -right-2 w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center text-xs font-bold border border-black">02</span>
</div>
<h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Chia sẻ Link đặt sân</h3>
<p className="text-zinc-500 font-medium text-sm px-4">Gửi link đặt sân lên Facebook, Zalo hoặc ghim trên Bio Page.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-zinc-800 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-lime-400 transition-colors">
<i className="w-10 h-10 text-zinc-400 group-hover:text-lime-400 transition-colors" data-lucide="wallet"></i>
<span className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center text-xs font-bold border border-black">03</span>
</div>
<h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Nhận thông báo &amp; Tiền</h3>
<p className="text-zinc-500 font-medium text-sm px-4">Hệ thống tự động chốt lịch khi khách chuyển khoản. Tiền về ngay ví của bạn.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black overflow-hidden relative">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-zinc-900/30 skew-x-12 -z-10"></div>
<div className="max-w-screen-xl mx-auto px-6">
<h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-16">Chủ sân nói gì?</h2>
<div className="relative bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-sm max-w-4xl">
<i className="w-12 h-12 text-lime-400/20 absolute top-8 left-8" data-lucide="quote"></i>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
<div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
<img alt="Chủ sân" className="w-full h-full object-cover rounded-full border-2 border-lime-400 grayscale" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 text-center md:text-left">
<p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
                            "Từ ngày dùng App, tôi không còn phải trực điện thoại hay lo bị trùng lịch khách nữa. Khách cũng khen đặt sân nhanh gọn, không cần tạo tài khoản rườm rà."
                        </p>
<div>
<p className="text-lime-400 font-bold uppercase tracking-wide">Anh Tuấn</p>
<p className="text-zinc-500 text-sm font-medium">Chủ cụm sân Pickleball Hà Nội</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-black text-white tracking-tighter uppercase text-center mb-16">Câu hỏi thường gặp</h2>
<div className="space-y-4">

<details className="group bg-black border border-zinc-800 overflow-hidden cursor-pointer open:border-zinc-700 transition-colors">
<summary className="flex justify-between items-center p-6 text-lg font-bold text-white uppercase tracking-tight">
<span className="flex items-center gap-4"><span className="text-lime-400 font-mono">/01</span> Khách có cần tải App để đặt sân không?</span>
<span className="text-lime-400 group-open:rotate-180 transition-transform"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-zinc-900 mt-2">
                        KHÔNG. Khách hàng chỉ cần truy cập vào đường link bạn chia sẻ để xem lịch trống và đặt sân ngay lập tức trên trình duyệt web.
                    </div>
</details>

<details className="group bg-black border border-zinc-800 overflow-hidden cursor-pointer open:border-zinc-700 transition-colors">
<summary className="flex justify-between items-center p-6 text-lg font-bold text-white uppercase tracking-tight">
<span className="flex items-center gap-4"><span className="text-lime-400 font-mono">/02</span> Tôi có thể quản lý nhiều cụm sân không?</span>
<span className="text-lime-400 group-open:rotate-180 transition-transform"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-zinc-900 mt-2">
                        CÓ. Ứng dụng cho phép bạn tạo và quản lý không giới hạn số lượng sân và cụm sân khác nhau trên cùng một tài khoản.
                    </div>
</details>

<details className="group bg-black border border-zinc-800 overflow-hidden cursor-pointer open:border-zinc-700 transition-colors">
<summary className="flex justify-between items-center p-6 text-lg font-bold text-white uppercase tracking-tight">
<span className="flex items-center gap-4"><span className="text-lime-400 font-mono">/03</span> Chi phí sử dụng phần mềm thế nào?</span>
<span className="text-lime-400 group-open:rotate-180 transition-transform"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-zinc-900 mt-2">
                        Chúng tôi có gói miễn phí trọn đời cho các sân nhỏ. Với các hệ thống lớn hơn, phí chỉ từ 200.000đ/tháng.
                    </div>
</details>

<details className="group bg-black border border-zinc-800 overflow-hidden cursor-pointer open:border-zinc-700 transition-colors">
<summary className="flex justify-between items-center p-6 text-lg font-bold text-white uppercase tracking-tight">
<span className="flex items-center gap-4"><span className="text-lime-400 font-mono">/04</span> App có hỗ trợ xuất báo cáo Excel không?</span>
<span className="text-lime-400 group-open:rotate-180 transition-transform"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-zinc-900 mt-2">
                        Có. Bạn có thể xuất toàn bộ dữ liệu booking, khách hàng và doanh thu ra file Excel bất cứ lúc nào để lưu trữ và đối soát.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-lime-400 text-black text-center px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Sẵn sàng số hóa sân của bạn?</h2>
<p className="text-xl md:text-2xl font-semibold mb-10 text-black/80">Trải nghiệm miễn phí trọn bộ tính năng ngay hôm nay.</p>
<button className="px-12 py-5 bg-black text-white text-lg font-black uppercase tracking-wide rounded-sm hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl">
                Tạo tài khoản ngay
            </button>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-16 mb-20">

<div className="w-full md:w-1/3">
<a className="text-4xl font-black tracking-tighter text-white block mb-6" href="#">SPORT<span className="text-zinc-600">MGR</span>.</a>
<p className="text-zinc-500 font-medium">Sứ mệnh số hóa ngành thể thao Việt Nam. Giúp chủ sân quản lý hiệu quả, gia tăng doanh thu.</p>
</div>

<div className="w-full md:w-1/3">
<h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Liên hệ</h4>
<ul className="space-y-4 text-zinc-500 font-medium">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-lime-400" data-lucide="phone"></i> 1900 6868</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-lime-400" data-lucide="mail"></i> support@sportmgr.vn</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-lime-400" data-lucide="map-pin"></i> Tầng 5, Tòa nhà Tech, Hà Nội</li>
</ul>
</div>

<div className="w-full md:w-1/3 md:text-right">
<h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Kết nối</h4>
<div className="flex gap-4 md:justify-end">
<a className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-white hover:bg-lime-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-white hover:bg-lime-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-white hover:bg-lime-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-medium">© 2025 SportManager. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-600 font-bold uppercase">
<a className="hover:text-white" href="#">Điều khoản</a>
<a className="hover:text-white" href="#">Bảo mật</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
