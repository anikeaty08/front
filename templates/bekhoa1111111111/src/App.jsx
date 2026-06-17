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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Xây Kênh</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#tinh-nang">Tính năng</a>
<a className="hover:text-blue-600 transition-colors" href="#loi-ich">Lợi ích</a>
<a className="hover:text-blue-600 transition-colors" href="#cau-chuyen">Câu chuyện</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Đăng nhập</a>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-md shadow-blue-600/20" href="#">
                        Trải nghiệm ngay
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="animate-fade-in">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Giải pháp cho nhà bán hàng nhỏ
                </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
                    Nền tảng tạo lập và quản lý nội dung <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">cho cá nhân &amp; chủ shop nhỏ</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Chỉ cần ý tưởng, phần còn lại để Xây Kênh lo. Tiết kiệm thời gian, không cần kiến thức marketing phức tạp.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2" href="#">
                        Đăng ký miễn phí
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Xem demo
                    </a>
</div>
</div>

<div className="relative max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-200/60 overflow-hidden">

<div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 text-center text-xs font-medium text-slate-400">app.xaykenh.vn</div>
</div>

<div className="flex h-[500px] sm:h-[600px] text-left">

<div className="w-16 sm:w-64 bg-slate-50/50 border-r border-slate-200 flex-shrink-0 flex flex-col justify-between py-6">
<div>
<div className="px-4 sm:px-6 mb-8 flex items-center gap-2">
<div className="bg-blue-600 text-white p-1 rounded-md">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<span className="hidden sm:block font-semibold text-slate-900 tracking-tight">Xây Kênh</span>
</div>
<div className="space-y-1 px-2 sm:px-4">
<div className="flex items-center gap-3 px-3 py-2 bg-white text-blue-600 rounded-lg shadow-sm border border-slate-100 cursor-pointer">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="hidden sm:block text-sm font-medium">Tổng quan</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
<span className="hidden sm:block text-sm font-medium">Tạo nội dung AI</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
<i className="w-5 h-5" data-lucide="calendar"></i>
<span className="hidden sm:block text-sm font-medium">Lịch đăng bài</span>
</div>
</div>
</div>
<div className="px-2 sm:px-4">
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="hidden sm:block text-sm font-medium">Cài đặt</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto app-scroll bg-white">

<div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 sticky top-0 bg-white/90 backdrop-blur z-10">
<h2 className="text-base font-semibold text-slate-900">Xin chào, Chị Mai 👋</h2>
<div className="flex items-center gap-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="hidden sm:inline">Viết bài mới</span>
</button>
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-xs border border-indigo-200">
                                        M
                                    </div>
</div>
</div>

<div className="p-6 space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Lượt tiếp cận</p>
<i className="w-4 h-4 text-slate-400" data-lucide="users"></i>
</div>
<p className="text-2xl font-semibold text-slate-900">12.5K</p>
<div className="mt-1 flex items-center gap-1 text-xs text-green-600 font-medium">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+14% tuần này</span>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Tương tác</p>
<i className="w-4 h-4 text-slate-400" data-lucide="heart"></i>
</div>
<p className="text-2xl font-semibold text-slate-900">843</p>
<div className="mt-1 flex items-center gap-1 text-xs text-green-600 font-medium">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+5% tuần này</span>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Bài viết AI</p>
<i className="w-4 h-4 text-blue-500" data-lucide="sparkles"></i>
</div>
<p className="text-2xl font-semibold text-slate-900">24</p>
<div className="mt-1 flex items-center gap-1 text-xs text-slate-400 font-medium">
<span>Đã tạo tháng này</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-slate-50/50 p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="pen-line"></i>
                                            Tạo nhanh ý tưởng
                                        </h3>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-slate-600 mb-1">Chủ đề bài viết</label>
<input className="w-full text-sm border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2" placeholder="Ví dụ: Giảm giá son môi mùa hè..." type="text"/>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium py-2 px-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="facebook"></i> Facebook
                                                </button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium py-2 px-3 rounded-lg hover:border-pink-300 hover:text-pink-600 transition-colors flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="instagram"></i> Instagram
                                                </button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium py-2 px-3 rounded-lg hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2">
<span className="font-bold font-serif italic text-[10px]">Tik</span> TikTok
                                                </button>
</div>
<button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 mt-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                                                AI Viết Ngay
                                            </button>
</div>
</div>

<div className="rounded-xl border border-slate-100 bg-white p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Lịch đăng sắp tới</h3>
<div className="space-y-4">
<div className="flex gap-3">
<div className="flex flex-col items-center justify-center w-10 h-10 bg-blue-50 rounded-lg text-blue-600 border border-blue-100">
<span className="text-[10px] font-bold uppercase">T2</span>
<span className="text-sm font-bold leading-none">14</span>
</div>
<div>
<p className="text-xs font-medium text-slate-900 line-clamp-1">Review set son mới về</p>
<p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
<i className="w-3 h-3" data-lucide="clock"></i> 09:00 AM • Facebook
                                                    </p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center justify-center w-10 h-10 bg-slate-50 rounded-lg text-slate-500 border border-slate-100">
<span className="text-[10px] font-bold uppercase">T4</span>
<span className="text-sm font-bold leading-none">16</span>
</div>
<div>
<p className="text-xs font-medium text-slate-900 line-clamp-1">Tip chăm sóc da mùa hè</p>
<p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
<i className="w-3 h-3" data-lucide="clock"></i> 20:00 PM • TikTok
                                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10"></div>
<div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-600 rounded-full blur-3xl opacity-20 -z-10"></div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Đơn giản hoá công việc kinh doanh online</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-md"></div>
<span className="font-bold text-slate-800 tracking-tighter text-xl">FashionShop</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 border-2 border-slate-800 rounded-full"></div>
<span className="font-bold text-slate-800 tracking-tighter text-xl">OrganicFood</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-full"></div>
<span className="font-bold text-slate-800 tracking-tighter text-xl">DecorHome</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="w-6 h-6 border-2 border-slate-800 rotate-45 rounded-sm"></div>
<span className="font-bold text-slate-800 tracking-tighter text-xl">TechLife</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="tinh-nang">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Mọi thứ bạn cần để bán hàng tốt hơn</h2>
<p className="text-lg text-slate-500">Chúng tôi tích hợp các công cụ mạnh mẽ nhất nhưng với giao diện thân thiện nhất cho người Việt.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Tạo nội dung bằng AI</h3>
<p className="text-slate-500 leading-relaxed">Viết bài quảng cáo, mô tả sản phẩm, kịch bản video chỉ trong 1 cú click chuột. Nội dung chuẩn giọng văn bán hàng.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="calendar-check-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Lên lịch &amp; Đăng đa nền tảng</h3>
<p className="text-slate-500 leading-relaxed">Đăng đồng thời lên Facebook, Instagram, TikTok và Zalo. Tiết kiệm 80% thời gian quản lý.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Dashboard theo dõi hiệu quả</h3>
<p className="text-slate-500 leading-relaxed">Biết chính xác bài nào ra đơn, khung giờ nào nhiều người xem nhất. Số liệu trực quan, dễ hiểu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Quy trình đơn giản trong <span className="text-blue-400">4 bước</span></h2>
<p className="text-slate-400 text-lg mb-10">Không cần đội ngũ marketing, bạn vẫn có thể vận hành chuyên nghiệp.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">1</div>
<div>
<h4 className="text-lg font-medium mb-1">Nhập ý tưởng</h4>
<p className="text-slate-400 text-sm">Gõ vài từ khóa về sản phẩm hoặc chương trình khuyến mãi.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm text-slate-300">2</div>
<div>
<h4 className="text-lg font-medium mb-1">AI gợi ý nội dung</h4>
<p className="text-slate-400 text-sm">Hệ thống tự động viết nội dung và gợi ý hình ảnh phù hợp.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm text-slate-300">3</div>
<div>
<h4 className="text-lg font-medium mb-1">Đặt lịch &amp; đăng bài</h4>
<p className="text-slate-400 text-sm">Chọn thời gian vàng và đăng lên mọi kênh cùng lúc.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm text-slate-300">4</div>
<div>
<h4 className="text-lg font-medium mb-1">Theo dõi hiệu suất</h4>
<p className="text-slate-400 text-sm">Xem báo cáo để tối ưu doanh số bán hàng.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
<div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">

<div className="space-y-4">
<div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<div className="ml-auto text-xs text-slate-500">AI Generator</div>
</div>
<div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
<div className="text-xs text-blue-400 mb-2 font-mono">Input</div>
<div className="text-sm text-slate-300">"Sale 50% áo thun cotton, freeship Hà Nội"</div>
</div>
<div className="flex justify-center">
<i className="text-slate-500 w-5 h-5" data-lucide="arrow-down"></i>
</div>
<div className="bg-slate-700/50 p-4 rounded-lg border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
<div className="flex items-center justify-between mb-2">
<div className="text-xs text-green-400 font-mono flex items-center gap-1">
<i className="w-3 h-3" data-lucide="bot"></i> AI Output
                                    </div>
<div className="text-[10px] bg-blue-600 px-2 py-0.5 rounded text-white">Facebook</div>
</div>
<div className="text-sm text-white leading-relaxed">
                                    🔥 SĂN SALE CỰC CHÁY - ÁO THUN GIẢM 50% 🔥<br/><br/>
                                    Chỉ duy nhất hôm nay! Áo thun cotton cao cấp, thấm hút mồ hôi cực tốt.<br/>
                                    🎁 Freeship nội thành Hà Nội.<br/>
                                    👉 Comment ngay để chốt đơn!
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50" id="cau-chuyen">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-white relative">
<div className="absolute -top-6 -left-6 text-blue-200">
<i className="w-16 h-16 fill-current opacity-50" data-lucide="quote"></i>
</div>
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-shrink-0">
<div className="w-24 h-24 md:w-32 md:h-32 bg-slate-200 rounded-full overflow-hidden border-4 border-white shadow-lg relative">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
<i className="w-12 h-12 text-slate-400" data-lucide="user"></i>
</div>
</div>
</div>
<div className="text-center md:text-left">
<p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed mb-6">
                            "Mình bán mỹ phẩm online một mình, trước đây ngày nào cũng mất 2-3 tiếng nghĩ content rồi đăng từng kênh. Từ lúc dùng Xây Kênh, mình chỉ tốn 15 phút là xong việc cả tuần. Doanh thu tăng đều vì bài đăng rất đều đặn."
                        </p>
<div>
<h4 className="font-bold text-slate-900 text-lg">Chị Mai</h4>
<p className="text-slate-500">Chủ shop mỹ phẩm nhỏ tại Hà Nội</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Sẵn sàng tăng trưởng doanh số?</h2>
<p className="text-lg text-slate-500 mb-10">Không cần thẻ tín dụng. Bắt đầu miễn phí ngay hôm nay.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg shadow-blue-600/25 transition-all" href="#">
                    Đăng ký miễn phí
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-full border border-slate-200 transition-all" href="#">
                    Liên hệ tư vấn
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="bg-blue-600 text-white p-1 rounded">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<span className="text-lg font-bold text-slate-900 tracking-tight">Xây Kênh</span>
</div>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        Nền tảng hỗ trợ cá nhân và chủ shop nhỏ xây dựng thương hiệu và quản lý nội dung đa kênh hiệu quả.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Sản phẩm</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Tính năng</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Bảng giá</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Tích hợp</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Hỗ trợ</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Tài liệu</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Cộng đồng</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Liên hệ</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Pháp lý</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Chính sách bảo mật</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Điều khoản sử dụng</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2024 Xây Kênh. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
