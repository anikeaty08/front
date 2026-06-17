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
      

<div className="w-full max-w-md bg-white h-[90vh] md:h-[850px] md:rounded-3xl shadow-2xl relative flex flex-col overflow-hidden border border-slate-200 ring-1 ring-slate-900/5">

<header className="flex justify-between items-center px-6 pt-8 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center text-lg font-semibold tracking-tighter">
                    VVN
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Dòng họ</span>
<span className="text-sm font-semibold tracking-tight text-slate-900">Vũ Võ Việt Nam</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-full text-slate-600">
                    VIE
                </button>
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24">

<div className="px-6 py-6">
<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-1">Xin chào, Hậu duệ Vũ Võ</h1>
<p className="text-sm text-slate-500 mb-6">Cộng đồng dành riêng cho dòng họ Vũ Võ Việt Nam</p>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-slate-600 transition-colors" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border-none bg-slate-50 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200 transition-all text-slate-800" placeholder="Tìm kiếm thành viên, dự án, tin tức..." type="text"/>
</div>
</div>

<div className="pl-6 mb-8 overflow-x-auto no-scrollbar flex gap-4 pr-6">

<div className="min-w-[85%] h-48 bg-gradient-to-br from-indigo-600 to-slate-800 rounded-2xl p-5 flex flex-col justify-end text-white shadow-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="80"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm self-start px-2.5 py-1 rounded-full text-xs font-medium mb-2 border border-white/10">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> Sự kiện sắp tới
                    </span>
<h3 className="text-lg font-medium tracking-tight leading-snug">Đại hội Dòng họ Vũ Võ Toàn quốc lần thứ X</h3>
<p className="text-xs text-white/70 mt-1">Hà Nội • 24/12/2024</p>
</div>

<div className="min-w-[85%] h-48 bg-slate-100 border border-slate-200 rounded-2xl p-5 flex flex-col justify-end text-slate-800 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 text-slate-300">
<iconify-icon icon="solar:cup-star-linear" width="80"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1.5 bg-white self-start px-2.5 py-1 rounded-full text-xs font-medium mb-2 border border-slate-200 shadow-sm">
<iconify-icon icon="solar:medal-ribbon-linear" width="14"></iconify-icon> Vinh danh
                    </span>
<h3 className="text-lg font-medium tracking-tight leading-snug">Lễ tuyên dương Con ngoan Trò giỏi 2024</h3>
<p className="text-xs text-slate-500 mt-1">Tại Văn miếu Quốc Tử Giám</p>
</div>
</div>

<div className="px-6 mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-medium text-slate-900 tracking-tight">Tiện ích Cộng đồng</h2>
</div>
<div className="grid grid-cols-2 gap-3">

<button className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-2xl hover:border-rose-200 hover:bg-rose-50/30 transition-all group text-left shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="2" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Thiện nguyện</span>
<span className="text-xs text-slate-500 mt-0.5 leading-relaxed">Kết nối &amp; sẻ chia khó khăn</span>
</button>

<button className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group text-left shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="2" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Đầu tư Startup</span>
<span className="text-xs text-slate-500 mt-0.5 leading-relaxed">Kết nối vốn &amp; ý tưởng</span>
</button>

<button className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group text-left shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="2" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Tổ chức Dòng họ</span>
<span className="text-xs text-slate-500 mt-0.5 leading-relaxed">Mạng lưới toàn quốc</span>
</button>

<button className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-2xl hover:border-amber-200 hover:bg-amber-50/30 transition-all group text-left shadow-sm hover:shadow-md relative overflow-hidden">
<div className="absolute top-2 right-2 opacity-10">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="60"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform relative z-10">
<iconify-icon icon="solar:shop-linear" strokeWidth="2" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900 relative z-10">Sản phẩm</span>
<span className="text-xs text-slate-500 mt-0.5 leading-relaxed relative z-10">Liên kết Winvu.vn</span>
</button>
</div>
</div>

<div className="px-6 space-y-6">

<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-slate-900 tracking-tight">Tiêu điểm</h2>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700" href="#">Xem tất cả</a>
</div>

<div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex gap-4 items-start">
<div className="w-20 h-20 bg-slate-100 rounded-xl flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1542810634-71277d95dcbe?ixlib=rb-4.0.3&amp'}}></div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-orange-50 text-orange-600 border border-orange-100 uppercase tracking-wide">Đang kêu gọi</span>
<span className="text-[10px] text-slate-400">2 giờ trước</span>
</div>
<h3 className="text-sm font-medium text-slate-900 leading-snug mb-2">Giúp đỡ gia đình cụ Vũ Thị Mận sửa lại mái nhà</h3>

<div className="w-full bg-slate-100 rounded-full h-1.5 mb-1.5">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<div className="flex justify-between text-[10px] font-medium">
<span className="text-slate-500">Đã nhận: <span className="text-slate-900">13.000.000đ</span></span>
<span className="text-slate-500">Mục tiêu: 20tr</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">W</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Dự án Nông nghiệp sạch WinTech</h3>
<p className="text-xs text-slate-500">Vũ Văn Nam • Nam Định</p>
</div>
<span className="ml-auto px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 uppercase tracking-wide">Thẩm định</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">Mô hình trồng rau thủy canh công nghệ cao kết hợp AI để giám sát chất lượng...</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors">Xem hồ sơ</button>
<button className="flex-1 py-2 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-colors">Quan tâm</button>
</div>
</div>
</div>
</main>

<nav className="bg-white/90 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex justify-between items-center absolute bottom-0 w-full z-30">
<button className="flex flex-col items-center gap-1 text-slate-900 group">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Trang chủ</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors group">
<iconify-icon icon="solar:feed-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Tin tức</span>
</button>
<button className="flex flex-col items-center justify-center -mt-8">
<div className="w-14 h-14 bg-slate-900 rounded-full text-white shadow-lg shadow-slate-300 flex items-center justify-center border-4 border-white">
<iconify-icon icon="solar:add-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors group">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Thông báo</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors group">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Cá nhân</span>
</button>
</nav>
</div>

    </>
  );
}
