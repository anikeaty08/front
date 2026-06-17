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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab switching logic
        function switchTab(tabName, btn) {
            const allBtns = document.querySelectorAll('.icon-btn');
            allBtns.forEach(b => {
                b.classList.remove('active', 'text-white');
                b.classList.add('text-white/40');
            });
            btn.classList.add('active', 'text-white');
            btn.classList.remove('text-white/40');

            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(c => c.classList.add('hidden'));

            const target = document.getElementById(`tab-${tabName}`);
            if(target) {
                target.classList.remove('hidden');
                target.style.animation = 'none';
                target.offsetHeight; /* trigger reflow */
                target.style.animation = null; 
            }
        }

        // Internal scroll logic
        const scrollContainer = document.getElementById('main-scroll-container');

        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                // Calculate position relative to container
                const topPos = element.offsetTop;
                scrollContainer.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });
            }
        }

        function scrollToTop() {
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            root: scrollContainer,
            threshold: 0.1
        });

        document.querySelectorAll('.feature-card').forEach((el) => {
            observer.observe(el);
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
      
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
<div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 pointer-events-none mix-blend-overlay"></div>
<div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

<div className="relative w-[96vw] max-w-[1700px] h-[94vh] transition-all duration-700">
<div className="glass-panel w-full h-full rounded-[3rem] relative overflow-y-auto no-scrollbar scroll-smooth" id="main-scroll-container">
<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-0"></div>

<div className="sticky top-0 z-50 px-6 sm:px-12 lg:px-16 pt-12 pb-4 bg-gradient-to-b from-[#020205]/80 to-transparent backdrop-blur-sm">
<div className="flex justify-between items-center border-b border-white/5 pb-8">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="text-xl font-medium text-black">S</span>
</div>
<span className="text-2xl text-white font-medium tracking-tight">SportSync</span>
</div>

<nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
<button className="px-6 py-2 rounded-full text-white text-sm font-medium bg-white/10 shadow-inner hover:bg-white/20 transition-all" onclick="scrollToTop()">Tính năng</button>
<button className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all" onclick="scrollToSection('features')">Hoạt động</button>
<button className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all" onclick="scrollToSection('testimonials')">Đánh giá</button>
<button className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all" onclick="scrollToSection('faq')">FAQ</button>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/20">
<span className="text-xs text-emerald-400 font-mono font-medium">Đăng ký dùng thử</span>
</div>
<div className="w-px h-6 bg-white/10 hidden lg:block"></div>
<button className="text-white/60 hover:text-white transition-colors flex items-center gap-2" title="Đăng nhập CMS">
<iconify-icon icon="solar:user-circle-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="min-h-[calc(90vh-140px)] px-6 sm:px-12 lg:px-16 flex flex-col justify-between pb-12 relative z-10">
<div className="flex flex-col lg:flex-row justify-between lg:items-end mt-8 gap-4">
<div>
<h1 className="text-5xl lg:text-7xl text-white font-medium tracking-tighter mb-4 text-glow drop-shadow-2xl leading-[1.1]">Nền tảng quản lý<br/> sân thể thao.</h1>
</div>
<div className="flex flex-col items-start lg:items-end gap-2 mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></div>
<span className="text-xs font-mono text-emerald-400/80 tracking-widest uppercase">Hệ thống ổn định</span>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono">PICKLEBALL</span>
<span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono">BÓNG ĐÁ MINI</span>
<span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono">TENNIS</span>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row flex-grow items-start lg:items-center gap-8 lg:gap-12 z-10 my-12">
<div className="flex lg:flex-col gap-4">
<button className="icon-btn active w-20 h-20 lg:w-24 lg:h-24 rounded-[1.5rem] flex flex-col gap-2 items-center justify-center text-white group" onclick="switchTab('manage', this)">
<iconify-icon className="group-hover:scale-110 transition-transform duration-300" height="32" icon="solar:widget-5-linear" width="32"></iconify-icon>
<span className="text-[10px] font-mono tracking-widest opacity-70">QUẢN LÝ</span>
</button>
<button className="icon-btn w-20 h-20 lg:w-24 lg:h-24 rounded-[1.5rem] flex flex-col gap-2 items-center justify-center text-white/40 hover:text-white group" onclick="switchTab('schedule', this)">
<iconify-icon className="group-hover:scale-110 transition-transform duration-300" height="32" icon="solar:calendar-linear" width="32"></iconify-icon>
<span className="text-[10px] font-mono tracking-widest opacity-70">LỊCH THUÊ</span>
</button>
<button className="icon-btn w-20 h-20 lg:w-24 lg:h-24 rounded-[1.5rem] flex flex-col gap-2 items-center justify-center text-white/40 hover:text-white group" onclick="switchTab('booking', this)">
<iconify-icon className="group-hover:scale-110 transition-transform duration-300" height="32" icon="solar:wallet-linear" width="32"></iconify-icon>
<span className="text-[10px] font-mono tracking-widest opacity-70">BOOKING</span>
</button>
</div>
<div className="flex-grow w-full h-full min-h-[400px] relative">

<div className="tab-content grid md:grid-cols-3 gap-6 h-full absolute inset-0" id="tab-manage">

<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-500/30 transition-all"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/40" icon="solar:map-point-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">CƠ SỞ</span>
</div>
<div className="text-lg text-white/80 font-medium mb-1">Thông tin sân</div>
<p className="text-white/40 text-sm font-light leading-relaxed">Dễ dàng thêm, sửa loại sân, bảng giá linh hoạt và các tiện ích đi kèm.</p>
</div>
<div className="text-6xl lg:text-7xl text-white font-light stat-value mt-2 group-hover:text-indigo-200 transition-colors">100<span className="text-3xl text-white/30 ml-1">%</span></div>
</div>

<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 blur-[60px] rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/40" icon="solar:chart-square-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">BÁO CÁO</span>
</div>
<div className="text-lg text-white/80 font-medium mb-1">Hiệu suất</div>
<p className="text-white/40 text-sm font-light leading-relaxed">Dashboard báo cáo doanh thu, tỷ lệ lấp đầy theo giờ, ngày, tháng trực quan.</p>
</div>
<div className="text-6xl lg:text-7xl text-white font-light stat-value mt-2 group-hover:text-emerald-200 transition-colors">+30<span className="text-3xl text-white/30 ml-1">%</span></div>
</div>

<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/20 blur-[60px] rounded-full group-hover:bg-pink-500/30 transition-all"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/40" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-pink-300 bg-pink-500/10 px-2 py-1 rounded border border-pink-500/20">NHÂN SỰ</span>
</div>
<div className="text-lg text-white/80 font-medium mb-1">Phân quyền</div>
<p className="text-white/40 text-sm font-light leading-relaxed">Kiểm soát truy cập chặt chẽ cho quản lý, nhân viên trực sân và kế toán.</p>
</div>
<div className="text-6xl lg:text-7xl text-white font-light stat-value mt-2 group-hover:text-pink-200 transition-colors">24<span className="text-3xl text-white/30 ml-1">/7</span></div>
</div>
</div>

<div className="tab-content grid md:grid-cols-3 gap-6 h-full absolute inset-0 hidden" id="tab-schedule">

<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full group-hover:bg-amber-500/30 transition-all"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/40" icon="solar:calendar-mark-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">THÁNG</span>
</div>
<div className="text-lg text-white/80 font-medium mb-1">Lịch cố định</div>
<p className="text-white/40 text-sm font-light leading-relaxed">Dễ dàng setup lịch lặp lại hàng tuần/tháng cho các đội khách quen.</p>
</div>
<div className="text-6xl lg:text-7xl text-white font-light stat-value mt-2 group-hover:text-amber-200 transition-colors">30<span className="text-3xl text-white/30 ml-1">d</span></div>
</div>

<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full group-hover:bg-cyan-500/30 transition-all"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/40" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">GIỜ</span>
</div>
<div className="text-lg text-white/80 font-medium mb-1">Lịch vãng lai</div>
<p className="text-white/40 text-sm font-light leading-relaxed">Nhận booking linh hoạt theo từng khung giờ lẻ, tối ưu hóa thời gian trống.</p>
</div>
<div className="text-6xl lg:text-7xl text-white font-light stat-value mt-2 group-hover:text-cyan-200 transition-colors">1<span className="text-3xl text-white/30 ml-1">h</span></div>
</div>

<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/30 transition-all"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/40" icon="solar:eye-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">UI/UX</span>
</div>
<div className="text-lg text-white/80 font-medium mb-1">Trực quan hóa</div>
<p className="text-white/40 text-sm font-light leading-relaxed">Bảng lịch trực quan dạng lưới. Loại bỏ hoàn toàn tình trạng trùng lịch.</p>
</div>
<div className="text-6xl lg:text-7xl text-white font-light stat-value mt-2 group-hover:text-purple-200 transition-colors">0<span className="text-3xl text-white/30 ml-1">lỗi</span></div>
</div>
</div>

<div className="tab-content w-full h-full absolute inset-0 hidden" id="tab-booking">
<div className="w-full h-full bg-[#0d0d12] border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-white/30">sportsync-booking-sys — log — 80x24</div>
</div>
<div className="font-mono text-sm text-white/80 space-y-2 overflow-hidden">
<div className="flex gap-2"><span className="text-emerald-400">➜</span><span className="text-white/50">~</span> <span className="text-white">Nhận yêu cầu đặt sân Pickleball #01</span></div>
<div className="text-white/30 text-xs pb-2">Khách hàng: Nguyen Van A - SĐT: 098xxxxxxx</div>
<div className="flex gap-2"><span className="text-emerald-400">➜</span><span className="text-white/50">~</span> <span className="text-white">Kiểm tra khung giờ 18:00 - 19:30...</span></div>
<div className="pt-2 pl-4 border-l-2 border-white/10 space-y-1 mb-2">
<div className="text-blue-400">STATUS: <span className="text-white/70">Trạng thái sân: <span className="text-emerald-200">[TRỐNG]</span></span></div>
<div className="text-blue-400">INFO: <span className="text-white/70">Khóa tạm thời khung giờ trong 5 phút.</span></div>
</div>
<div className="flex gap-2"><span className="text-emerald-400">➜</span><span className="text-white/50">~</span> <span className="text-white">Khởi tạo mã QR thanh toán (VietQR)...</span></div>
<div className="pt-2 pl-4 border-l-2 border-white/10 space-y-1">
<div className="text-yellow-400">WAITING: <span className="text-white/70">Đang chờ khách hàng quét mã...</span></div>
<div className="text-emerald-400">SUCCESS: <span className="text-white/70">Thanh toán hoàn tất. Cập nhật lịch tự động.</span></div>
<a className="text-indigo-400 underline decoration-indigo-400/30 underline-offset-4" href="#">SMS: Gửi thành công xác nhận đến KH.</a>
</div>
<div className="flex gap-2 pt-2"><span className="text-emerald-400">➜</span><span className="text-white/50">~</span> <span className="w-2 h-4 bg-white/50 animate-pulse inline-block align-middle"></span></div>
</div>

<div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] pointer-events-none"></div>
</div>
</div>
</div>
</div>
<div className="flex items-end justify-between z-10 pt-4 border-t border-white/5">

<div className="w-full md:w-1/2 bg-black/20 h-20 rounded-2xl border border-white/10 flex items-center justify-between px-6 relative overflow-hidden group cursor-pointer backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-4 z-10">
<iconify-icon className="text-white/60" icon="solar:cup-star-linear" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="font-mono text-xs text-emerald-400 mb-1">TÍN NHIỆM BỞI</span>
<span className="font-mono text-lg text-white/90">1,000+ Sân hoạt động</span>
</div>
</div>
<div className="h-8 w-px bg-white/10 mx-2 hidden sm:block"></div>
<div className="hidden sm:flex items-center gap-2 z-10 opacity-60 transition-all duration-500">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="font-mono text-base text-white">50,000+ Khách</span>
</div>
</div>
<div className="hidden md:flex flex-col items-end gap-3 pb-1">
<button className="group flex items-center gap-3 text-white/60 hover:text-white text-sm font-medium transition-colors py-2 animate-bounce" onclick="scrollToSection('features')">
<span>Khám phá</span>
<iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="px-6 sm:px-12 lg:px-16 pt-32 pb-24 relative z-10 border-t border-white/5" id="features">
<div className="flex flex-col items-center mb-16 text-center feature-card">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-[10px] font-mono tracking-widest uppercase mb-4">Các tính năng nổi bật</span>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight text-glow mb-6">Mọi công cụ bạn cần<br/>để vận hành sân hiệu quả.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="feature-card bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Quản lý Thông tin Sân</h3>
<p className="text-white/40 text-sm leading-relaxed">Giới thiệu khả năng thêm, xóa, sửa thông tin chi tiết (loại sân, giá, tiện ích) cho các cụm sân. Quản lý đồng bộ.</p>
</div>
<div className="feature-card bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-amber-400" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Quản lý Lịch Thuê</h3>
<p className="text-white/40 text-sm leading-relaxed">Nhấn mạnh tính năng quản lý lịch thuê cố định (theo tháng) và lịch vãng lai (theo giờ). Trực quan hóa bảng lịch.</p>
</div>
<div className="feature-card bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400" icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Booking &amp; Thanh toán</h3>
<p className="text-white/40 text-sm leading-relaxed">Cho phép người chơi xem lịch trống, đặt sân và thanh toán online qua QR Code mà không cần tạo tài khoản.</p>
</div>
<div className="feature-card bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Báo cáo Hiệu suất</h3>
<p className="text-white/40 text-sm leading-relaxed">Show dashboard báo cáo doanh thu, tỷ lệ lấp đầy (theo giờ, ngày, tháng) để chủ sân nắm bắt tình hình kinh doanh.</p>
</div>
<div className="feature-card bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-rose-400" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Mini CMS Tích hợp</h3>
<p className="text-white/40 text-sm leading-relaxed">Cung cấp giao diện quản trị đơn giản để chỉnh sửa nội dung, thay đổi text/link trên trang chủ dễ dàng.</p>
</div>
<div className="feature-card bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Bảo mật &amp; Phân quyền</h3>
<p className="text-white/40 text-sm leading-relaxed">Xác thực an toàn, quản lý thành viên linh hoạt. Tính năng tạo role riêng biệt cho Admin và Staff.</p>
</div>
</div>
</div>

<div className="px-6 sm:px-12 lg:px-16 py-24 relative z-10 border-t border-white/5 bg-black/20" id="testimonials">
<div className="flex flex-col items-center mb-16 text-center feature-card">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[10px] font-mono tracking-widest uppercase mb-4">Câu chuyện thành công</span>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight text-glow mb-6">Khách hàng nói gì về chúng tôi.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="feature-card bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col relative group">
<div className="mb-6">
<div className="text-lg text-white font-medium mb-1">Anh Tuấn</div>
<div className="text-sm text-white/50">Chủ sân Pickleball</div>
</div>
<div className="flex items-center gap-1 mb-8 text-amber-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-start text-sm text-white/70"><span className="check-icon"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Khách tự động đặt sân online</div>
<div className="flex items-start text-sm text-white/70"><span className="check-icon"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Không còn tình trạng trùng lịch</div>
<div className="flex items-start text-sm text-white/70"><span className="check-icon"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Doanh thu tăng trưởng 30%</div>
</div>
<div className="w-full pt-4 border-t border-white/5 text-white/40 text-sm font-medium italic">
                            "Từ khi sử dụng SportSync, việc quản lý cụm 4 sân Pickleball của tôi nhàn hơn hẳn. Giao diện trực quan và khách cũng thích việc tự do booking."
                        </div>
</div>

<div className="feature-card bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-emerald-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_50px_-20px_rgba(16,185,129,0.3)] transform scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Khuyên dùng</div>
<div className="mb-6">
<div className="text-lg text-white font-medium mb-1">Chị Hà</div>
<div className="text-sm text-white/50">Quản lý sân bóng đá mini</div>
</div>
<div className="flex items-center gap-1 mb-8 text-amber-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-start text-sm text-white/90"><span className="check-icon bg-emerald-500/20 text-emerald-300"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Lên lịch cố định cho team dễ dàng</div>
<div className="flex items-start text-sm text-white/90"><span className="check-icon bg-emerald-500/20 text-emerald-300"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Tích hợp VietQR nhận tiền liền tay</div>
<div className="flex items-start text-sm text-white/90"><span className="check-icon bg-emerald-500/20 text-emerald-300"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Kiểm soát doanh thu chặt chẽ</div>
</div>
<div className="w-full pt-4 border-t border-white/5 text-white/70 text-sm font-medium italic">
                            "Tính năng thanh toán QR tự động là điểm tôi ưng ý nhất. Mọi giao dịch được đối soát thẳng trên hệ thống, không lo thất thoát."
                        </div>
</div>

<div className="feature-card bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col relative group">
<div className="mb-6">
<div className="text-lg text-white font-medium mb-1">Anh Minh</div>
<div className="text-sm text-white/50">Chủ cụm sân Tennis</div>
</div>
<div className="flex items-center gap-1 mb-8 text-amber-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-start text-sm text-white/70"><span className="check-icon"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Dashboard tỷ lệ lấp đầy trực quan</div>
<div className="flex items-start text-sm text-white/70"><span className="check-icon"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Quản lý nhân viên trực sân tốt</div>
<div className="flex items-start text-sm text-white/70"><span className="check-icon"><iconify-icon icon="solar:check-read-linear"></iconify-icon></span>Khách hàng phản hồi rất tích cực</div>
</div>
<div className="w-full pt-4 border-t border-white/5 text-white/40 text-sm font-medium italic">
                            "Báo cáo hiệu suất giúp tôi biết được chính xác khung giờ vàng nào đang trống, từ đó tung ra khuyến mãi kịp thời để tối ưu."
                        </div>
</div>
</div>
</div>

<div className="px-6 sm:px-12 lg:px-16 pt-24 pb-32 relative z-10 border-t border-white/5" id="faq">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 feature-card">
<div>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-[10px] font-mono tracking-widest uppercase mb-4 inline-block">Hỗ trợ nhanh</span>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight text-glow mt-2">Các câu hỏi<br/>thường gặp.</h2>
</div>

<div className="w-full md:w-auto min-w-[300px] relative group">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-black/40 border border-white/10 rounded-full flex items-center justify-between pl-4 pr-1 py-1 gap-3 focus-within:border-cyan-500/50 transition-colors">
<iconify-icon className="text-white/40" icon="solar:letter-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-white/30 font-mono py-2" placeholder="Nhập email nhận tư vấn..." type="email"/>
<button className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium transition-colors">Gửi</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="feature-card block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all group">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
<span className="text-cyan-400 font-mono text-sm">Q</span>
</div>
<h4 className="text-white font-medium">Có cần cài đặt phần mềm phức tạp không?</h4>
</div>
<p className="text-white/40 text-sm leading-relaxed pl-11">Không, hệ thống của chúng tôi chạy trên nền tảng Cloud (Web App). Bạn chỉ cần mở trình duyệt trên điện thoại hoặc máy tính để sử dụng ngay mà không cần cài đặt.</p>
</div>

<div className="feature-card block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all group" style={{transitionDelay: '50ms'}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
<span className="text-cyan-400 font-mono text-sm">Q</span>
</div>
<h4 className="text-white font-medium">Khách hàng của tôi có cần tải App để đặt sân?</h4>
</div>
<p className="text-white/40 text-sm leading-relaxed pl-11">Không bắt buộc. Khách hàng có thể click vào đường link Landing Page của bạn để xem lịch trống và tiến hành đặt sân &amp; thanh toán ngay trên trình duyệt web rất tiện lợi.</p>
</div>

<div className="feature-card block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all group" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
<span className="text-cyan-400 font-mono text-sm">Q</span>
</div>
<h4 className="text-white font-medium">Phần mềm có hỗ trợ quản lý nội dung (CMS) không?</h4>
</div>
<p className="text-white/40 text-sm leading-relaxed pl-11">Có! Hệ thống đi kèm Mini CMS cho phép bạn tùy chỉnh hiển thị thông tin, bật/tắt các phần giới thiệu, và sửa đổi chữ/link trên Landing Page mà không cần biết code.</p>
</div>

<div className="feature-card block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all group" style={{transitionDelay: '150ms'}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
<span className="text-cyan-400 font-mono text-sm">Q</span>
</div>
<h4 className="text-white font-medium">Hệ thống có tích hợp thanh toán tự động không?</h4>
</div>
<p className="text-white/40 text-sm leading-relaxed pl-11">Chúng tôi hỗ trợ tạo mã QR tự động qua cổng VietQR/Momo. Khi khách quét mã và thanh toán, hệ thống sẽ tự động đối soát và cập nhật trạng thái "Đã thanh toán" trên lịch.</p>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-mono">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition-colors" href="#">TÍNH NĂNG</a>
<a className="hover:text-white transition-colors" href="#">BẢNG GIÁ</a>
<a className="hover:text-white transition-colors" href="#">HỖ TRỢ</a>
<a className="hover:text-white transition-colors" href="#">CMS LOGIN</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">ĐIỀU KHOẢN</a>
<a className="hover:text-white transition-colors" href="#">BẢO MẬT</a>
<span>SPORTSYNC © 2025</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
