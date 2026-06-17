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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-400 to-orange-300 flex items-center justify-center text-white">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-800">ARTKIDS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-800 hover:text-rose-500 transition-colors" href="#">Trang chủ</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-500 transition-colors" href="#themes">Chủ đề</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-500 transition-colors" href="#downloads">Thư viện</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-500 transition-colors" href="#reviews">Đánh giá</a>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-white ring-1 ring-slate-200 flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</div>
</nav>

<div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex flex-col gap-16">

<section className="flex flex-col lg:flex-row gap-6">

<div className="flex-grow flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-800">Tô màu trực tuyến</h1>
<p className="text-sm text-slate-400">Chọn màu và sáng tạo ngay trên trình duyệt</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon icon="solar:restart-linear" width="16"></iconify-icon>
                            Làm lại
                        </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500 text-white text-xs font-medium hover:bg-rose-600 transition-colors shadow-sm shadow-rose-200">
<iconify-icon icon="solar:gallery-send-linear" width="16"></iconify-icon>
                            Lưu tác phẩm
                        </button>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 h-[500px]">

<div className="w-full md:w-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex md:flex-col items-center justify-center md:justify-start p-2 gap-3 overflow-x-auto md:overflow-visible order-2 md:order-1">
<button className="p-2.5 rounded-xl bg-rose-50 text-rose-500 transition-all hover:scale-105 active:scale-95 group relative">
<iconify-icon icon="solar:paint-roller-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute left-14 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block z-10">Đổ màu</span>
</button>
<button className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all group relative">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all group relative">
<iconify-icon icon="solar:eraser-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="h-px w-8 bg-slate-100 hidden md:block my-1"></div>
<button className="w-8 h-8 rounded-full bg-rose-400 ring-2 ring-rose-200 ring-offset-2 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-orange-300 hover:scale-110 transition-transform shrink-0"></button>
<button className="w-8 h-8 rounded-full bg-indigo-400 hover:scale-110 transition-transform shrink-0"></button>
</div>

<div className="flex-grow bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex items-center justify-center p-8 order-1 md:order-2">
<div className="absolute inset-0 pattern-bg opacity-50 pointer-events-none"></div>
<svg className="w-full h-full max-w-lg max-h-lg drop-shadow-xl" fill="none" stroke="#1e293b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 400 400">
<path className="fill-white hover:fill-green-100 transition-colors cursor-pointer" d="M200 380 Q 200 300 200 250"></path>
<path className="fill-white hover:fill-green-100 transition-colors cursor-pointer" d="M200 320 Q 240 280 250 290 Q 230 340 200 320"></path>
<path className="fill-white hover:fill-green-100 transition-colors cursor-pointer" d="M200 300 Q 160 260 150 270 Q 170 320 200 300"></path>
<circle className="fill-white hover:fill-yellow-100 transition-colors cursor-pointer z-10 relative" cx="200" cy="150" r="40"></circle>
<path className="fill-white hover:fill-rose-100 transition-colors cursor-pointer" d="M200 110 Q 200 50 240 80 Q 240 140 228 122"></path>
<path className="fill-white hover:fill-rose-100 transition-colors cursor-pointer" d="M228 122 Q 280 110 270 160 Q 220 170 228 178"></path>
<path className="fill-white hover:fill-rose-100 transition-colors cursor-pointer" d="M228 178 Q 260 230 200 230 Q 140 230 172 178"></path>
<path className="fill-white hover:fill-rose-100 transition-colors cursor-pointer" d="M172 178 Q 120 170 130 120 Q 180 110 172 122"></path>
<path className="fill-white hover:fill-rose-100 transition-colors cursor-pointer" d="M172 122 Q 160 60 200 50"></path>
<path d="M185 145 Q 185 145 185 145" stroke="currentColor" strokeWidth="4"></path>
<path d="M215 145 Q 215 145 215 145" stroke="currentColor" strokeWidth="4"></path>
<path d="M190 160 Q 200 168 210 160" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Gợi ý hôm nay</h2>
<div className="bg-white rounded-2xl border border-slate-200 p-3 paper-shadow cursor-pointer group">
<div className="aspect-video rounded-xl bg-orange-50 mb-3 flex items-center justify-center">
<iconify-icon className="text-orange-300 group-hover:scale-110 transition-transform duration-300" icon="solar:cat-linear" width="48"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-800">Mèo con tinh nghịch</h3>
<p className="text-xs text-slate-400">Độ khó: Dễ</p>
</div>
<button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-center flex flex-col items-center gap-3 shadow-lg shadow-indigo-200 mt-auto">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold">Thành viên VIP</h3>
<p className="text-xs text-indigo-100 mt-1">Mở khóa 500+ mẫu vẽ độc quyền và cọ vẽ phép thuật.</p>
</div>
<button className="w-full py-2 bg-white text-indigo-600 text-xs font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                        Dùng thử miễn phí
                    </button>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-start gap-4 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-800">Nội dung an toàn</h3>
<p className="text-sm text-slate-500 mt-1">100% hình ảnh được kiểm duyệt, phù hợp với sự phát triển tâm lý trẻ nhỏ.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-start gap-4 hover:border-rose-200 transition-colors">
<div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
<iconify-icon icon="solar:lightbulb-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-800">Phát triển tư duy</h3>
<p className="text-sm text-slate-500 mt-1">Kích thích trí tưởng tượng và khả năng nhận biết màu sắc qua các chủ đề.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-start gap-4 hover:border-emerald-200 transition-colors">
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-800">In ấn dễ dàng</h3>
<p className="text-sm text-slate-500 mt-1">Tải xuống file PDF/JPG chất lượng cao, chuẩn khổ giấy A4 để in tại nhà.</p>
</div>
</div>
</section>

<section id="themes">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:folder-with-files-linear"></iconify-icon>
                    Khám phá theo chủ đề
                </h2>
<a className="text-xs font-medium text-rose-500 hover:text-rose-600 flex items-center gap-1" href="#">
                    Xem tất cả <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<a className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all" href="#">
<div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-emerald-600">Thiên nhiên</span>
</a>

<a className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all" href="#">
<div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cat-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">Động vật</span>
</a>

<a className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all" href="#">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">Vũ trụ</span>
</a>

<a className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all" href="#">
<div className="w-14 h-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-rose-600">Ngày lễ</span>
</a>

<a className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all" href="#">
<div className="w-14 h-14 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:masks-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-purple-600">Hoạt hình</span>
</a>

<a className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all" href="#">
<div className="w-14 h-14 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bus-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Xe cộ</span>
</a>
</div>
</section>

<section id="downloads">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:download-square-linear"></iconify-icon>
                        Tranh tô màu miễn phí (PDF/JPG)
                    </h2>
<p className="text-sm text-slate-400 mt-1">Tải về và in ra giấy A4 để tô màu thủ công</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon>
                    Mới nhất
                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden paper-shadow flex flex-col">
<div className="relative aspect-[3/4] bg-white p-6 flex items-center justify-center border-b border-slate-100 group-hover:bg-slate-50 transition-colors">
<svg className="w-full h-full text-slate-800 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M50 80 L50 40 M50 60 L70 50 M50 50 L30 40"></path>
<circle cx="50" cy="30" r="15"></circle>
<path d="M35 30 L65 30 M40 25 L45 25" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-3 right-3 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Miễn phí</div>
</div>
<div className="p-4 flex flex-col gap-3 flex-grow">
<div>
<h3 className="font-semibold text-slate-800 truncate">Cây xanh hạnh phúc</h3>
<div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
<iconify-icon icon="solar:file-linear" width="12"></iconify-icon> A4 PDF
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>320KB</span>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-1 py-2 rounded-lg bg-slate-50 text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors">
                                Xem trước
                            </button>
<button className="flex items-center justify-center gap-1 py-2 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-semibold hover:bg-indigo-100 transition-colors">
<iconify-icon icon="solar:download-linear" width="14"></iconify-icon> Tải về
                            </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden paper-shadow flex flex-col">
<div className="relative aspect-[3/4] bg-white p-6 flex items-center justify-center border-b border-slate-100 group-hover:bg-slate-50 transition-colors">
<svg className="w-full h-full text-slate-800 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 100">
<rect height="40" rx="2" width="60" x="20" y="40"></rect>
<polygon points="20,40 50,15 80,40"></polygon>
<rect height="20" width="16" x="42" y="60"></rect>
<circle cx="50" cy="30" r="4" strokeWidth="1"></circle>
</svg>
</div>
<div className="p-4 flex flex-col gap-3 flex-grow">
<div>
<h3 className="font-semibold text-slate-800 truncate">Ngôi nhà mơ ước</h3>
<div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
<iconify-icon icon="solar:file-linear" width="12"></iconify-icon> A4 PDF
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>450KB</span>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-1 py-2 rounded-lg bg-slate-50 text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors">
                                Xem trước
                            </button>
<button className="flex items-center justify-center gap-1 py-2 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-semibold hover:bg-indigo-100 transition-colors">
<iconify-icon icon="solar:download-linear" width="14"></iconify-icon> Tải về
                            </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden paper-shadow flex flex-col">
<div className="relative aspect-[3/4] bg-white p-6 flex items-center justify-center border-b border-slate-100 group-hover:bg-slate-50 transition-colors">
<svg className="w-full h-full text-slate-800 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="30"></circle>
<path d="M35 40 Q 50 50 65 40"></path>
<circle cx="40" cy="40" fill="currentColor" r="2"></circle>
<circle cx="60" cy="40" fill="currentColor" r="2"></circle>
<path d="M20 50 L10 40 M80 50 L90 40"></path>
</svg>
<div className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Mới</div>
</div>
<div className="p-4 flex flex-col gap-3 flex-grow">
<div>
<h3 className="font-semibold text-slate-800 truncate">Mặt trời buổi sáng</h3>
<div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
<iconify-icon icon="solar:file-linear" width="12"></iconify-icon> A4 JPG
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>1.2MB</span>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-1 py-2 rounded-lg bg-slate-50 text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors">
                                Xem trước
                            </button>
<button className="flex items-center justify-center gap-1 py-2 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-semibold hover:bg-indigo-100 transition-colors">
<iconify-icon icon="solar:download-linear" width="14"></iconify-icon> Tải về
                            </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden paper-shadow flex flex-col opacity-75">
<div className="relative aspect-[3/4] bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:lock-keyhole-linear" width="40"></iconify-icon>
<div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<span className="block text-xs font-bold text-slate-800 mb-1">Dành cho VIP</span>
<iconify-icon className="text-indigo-500" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-4 flex flex-col gap-3 flex-grow bg-slate-50">
<div>
<h3 className="font-semibold text-slate-600 truncate">Bộ sưu tập công chúa</h3>
<div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
<iconify-icon icon="solar:file-linear" width="12"></iconify-icon> ZIP Pack
                            </div>
</div>
<button className="mt-auto w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                            Mở khóa ngay
                        </button>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                    Xem thêm 248 mẫu khác
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</section>

<section className="pt-8" id="reviews">
<h2 className="text-xl font-semibold tracking-tight text-slate-800 mb-6 text-center">Phụ huynh nói gì về ArtKids?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 paper-shadow">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">"Bé nhà mình rất thích các hình vẽ ở đây, nét vẽ đơn giản nhưng rất dễ thương. Cuối tuần nào hai mẹ con cũng in ra tô màu cùng nhau."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"/>
<div>
<h4 className="text-sm font-bold text-slate-800">Chị Minh Anh</h4>
<p className="text-xs text-slate-400">Mẹ bé Sóc (4 tuổi)</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 paper-shadow">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">"Web rất dễ dùng, không có quảng cáo độc hại nên mình rất yên tâm để con tự chọn hình. Tính năng tô màu online trên iPad rất mượt."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"/>
<div>
<h4 className="text-sm font-bold text-slate-800">Anh Quốc Tuấn</h4>
<p className="text-xs text-slate-400">Bố Bảo Nam (6 tuổi)</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 paper-shadow">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">"Kho tranh khổng lồ, in ra giấy A4 rất nét không bị vỡ hình. Gói thành viên VIP giá rẻ mà nội dung cập nhật liên tục."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"/>
<div>
<h4 className="text-sm font-bold text-slate-800">Cô Thu Hà</h4>
<p className="text-xs text-slate-400">Giáo viên mầm non</p>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="mt-auto border-t border-slate-200 bg-white pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:palette-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-800">ARTKIDS</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                    Nền tảng sáng tạo nghệ thuật dành riêng cho trẻ em. Giúp bé phát triển tư duy, màu sắc và sự khéo léo thông qua các hoạt động tô màu.
                </p>
<div className="flex gap-4 mt-2">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors" href="#">
<iconify-icon icon="solar:youtube-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-800 mb-4">Khám phá</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">Tranh tô màu mới</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Chủ đề được yêu thích</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Hướng dẫn vẽ cơ bản</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Thử thách sáng tạo</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Gói thành viên VIP</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-800 mb-4">Chính sách</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">Điều khoản sử dụng</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Chính sách bảo mật</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Bản quyền nội dung</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Chính sách hoàn tiền</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Câu hỏi thường gặp (FAQ)</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-800 mb-4">Liên hệ</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Tầng 3, Tòa nhà ArtSpace, Quận 1, TP. Hồ Chí Minh</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-rose-500 transition-colors" href="mailto:support@artkids.vn">support@artkids.vn</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-rose-500 transition-colors" href="tel:1900123456">1900 123 456</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 ArtKids Creative. All rights reserved.</p>
<div className="flex gap-6">
<span>Thiết kế an toàn cho trẻ em</span>
<span>Phát triển bởi ArtTeam</span>
</div>
</div>
</footer>

    </>
  );
}
