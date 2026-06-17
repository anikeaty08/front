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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
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
      
<div className="max-w-[1400px] mx-auto bg-white overflow-hidden">

<div className="flex flex-col lg:flex-row">

<aside className="w-full lg:w-64 p-6 border-r border-slate-100 shrink-0">

<div className="flex items-center gap-2 mb-8">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-purple-700">
              LMS
            </span>
</div>
<p className="text-xs text-slate-400 mb-3">Tổng quan</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-purple-50 text-purple-700" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Bảng điều khiển</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span className="text-sm">Lớp của tôi</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span className="text-sm">Khóa học của tôi</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="text-sm">Sự kiện</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="compass"></i>
<span className="text-sm">Khám phá</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
<span className="text-sm">Báo cáo</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="text-sm">Giảng viên</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
<span className="text-sm">Cài đặt</span>
</a>
</nav>
<p className="text-xs text-slate-400 mt-8 mb-3">Bạn bè</p>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-orange-300"></div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Ava Lee</p>
<p className="text-xs text-slate-400">82 Điểm</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300"></div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Noah Kim</p>
<p className="text-xs text-slate-400">128 Điểm</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-red-300"></div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Ethan Cruz</p>
<p className="text-xs text-slate-400">56 Điểm</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-300 to-pink-300"></div>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Maya Patel</p>
<p className="text-xs text-slate-400">150 Điểm</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 p-6 bg-slate-50/30">

<div className="flex items-center gap-4 mb-6">
<div className="flex-1 bg-white rounded-full border border-slate-200 px-4 py-3 flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="flex-1 outline-none text-sm bg-transparent placeholder:text-slate-400" placeholder="Tìm kiếm theo chủ đề, tiêu đề hoặc tên" type="text"/>
</div>
<div className="bg-white rounded-full border border-slate-200 p-1 flex items-center gap-1">
<button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="sun"></i>
</button>
<button className="w-9 h-9 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-slate-400" data-lucide="moon"></i>
</button>
</div>
<button className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="bell"></i>
</button>
<div className="bg-white rounded-full border border-slate-200 pl-1 pr-3 py-1 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-purple-400"></div>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<div className="bg-gradient-to-r from-purple-100 via-purple-50 to-pink-50 rounded-2xl p-8 flex items-center justify-between overflow-hidden relative">
<div className="relative z-10 max-w-md">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-purple-900 mb-3">
                    Mở khóa hơn 1.000 khóa học cao cấp ngay hôm nay
                  </h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Học từ các chuyên gia hàng đầu với nội dung độc quyền được
                    thiết kế để nâng cao kỹ năng của bạn.
                  </p>
<button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
                    Nâng cấp Premium
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="hidden md:flex items-center justify-center w-64 h-48 relative">
<div className="text-7xl">🧑‍💻</div>
<div className="absolute top-2 right-8 text-3xl">📚</div>
<div className="absolute bottom-4 left-4 text-2xl">📖</div>
<div className="absolute top-12 left-2 text-2xl">📕</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white rounded-2xl p-5 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-8">
<i className="w-5 h-5 text-green-600" data-lucide="check"></i>
</div>
<p className="text-xs text-slate-500 mb-1">Khóa học</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900">
                      05
                      <span className="text-slate-400">/08</span>
</span>
<span className="text-xs text-slate-400">Hoàn thành</span>
</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-8">
<i className="w-5 h-5 text-amber-600" data-lucide="award"></i>
</div>
<p className="text-xs text-slate-500 mb-1">Điểm đạt được</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900">
                      80
                      <span className="text-slate-400">/100</span>
</span>
<span className="text-xs text-slate-400">Điểm</span>
</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 flex items-center justify-center">
<div className="relative w-24 h-24">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="42" stroke="#f1f5f9" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="42" stroke="#a855f7" stroke-dasharray="263.89" stroke-dashoffset="65.97" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-semibold text-slate-900">
                        75%
                      </span>
<span className="text-xs text-slate-400">Tiến độ</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-100">
<div className="flex items-center justify-between mb-5">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    Tiếp tục xem
                  </h3>
<button className="text-sm text-purple-600 font-medium">
                    Xem tất cả
                  </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-amber-200 to-orange-300 mb-3">
<div className="absolute inset-0 flex items-center justify-center text-6xl">
                        👩‍💻
                      </div>
<div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 text-xs text-white">
<i className="w-3 h-3 fill-white" data-lucide="play"></i>
<span>04:50</span>
<div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-white rounded-full"></div>
</div>
<span>05:10</span>
</div>
</div>
<p className="text-xs text-slate-400 mb-1">
                      UX/UI cho người mới bắt đầu
                    </p>
<p className="text-sm font-medium text-slate-900">
                      Làm chủ UI &amp; UX: Thiết kế ứng dụng đầu tiên của bạn
                    </p>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-green-200 to-teal-300 mb-3">
<div className="absolute inset-0 flex items-center justify-center text-6xl">
                        👨‍💼
                      </div>
<div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 text-xs text-white">
<i className="w-3 h-3 fill-white" data-lucide="play"></i>
<span>05:25</span>
<div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-white rounded-full"></div>
</div>
<span>04:35</span>
</div>
</div>
<p className="text-xs text-slate-400 mb-1">
                      Thiết kế web đáp ứng
                    </p>
<p className="text-sm font-medium text-slate-900">
                      Tạo website ưu tiên di động từ đầu
                    </p>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-200 to-purple-300 mb-3">
<div className="absolute inset-0 flex items-center justify-center text-6xl">
                        🧑‍🎓
                      </div>
<div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 text-xs text-white">
<i className="w-3 h-3 fill-white" data-lucide="play"></i>
<span>03:25</span>
<div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white rounded-full"></div>
</div>
<span>11:35</span>
</div>
</div>
<p className="text-xs text-slate-400 mb-1">
                      Kiến thức cơ bản về Framer
                    </p>
<p className="text-sm font-medium text-slate-900">
                      Xây dựng nguyên mẫu tương tác chuyên nghiệp
                    </p>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-2xl p-6 border border-slate-100">
<div className="flex items-center justify-between mb-5">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    Sự kiện
                  </h3>
<button className="text-slate-400">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex justify-between mb-6">
<div className="text-center">
<p className="text-xs text-slate-400 mb-1">CN</p>
<div className="text-sm font-medium text-slate-700 px-2 py-1.5">
                      21
                    </div>
</div>
<div className="text-center">
<p className="text-xs text-purple-600 mb-1">T2</p>
<div className="text-sm font-medium text-white bg-purple-600 rounded-lg px-3 py-1.5">
                      22
                    </div>
</div>
<div className="text-center">
<p className="text-xs text-slate-400 mb-1">T3</p>
<div className="text-sm font-medium text-slate-700 px-2 py-1.5">
                      23
                    </div>
</div>
<div className="text-center">
<p className="text-xs text-slate-400 mb-1">T4</p>
<div className="text-sm font-medium text-slate-700 px-2 py-1.5">
                      24
                    </div>
</div>
<div className="text-center">
<p className="text-xs text-slate-400 mb-1">T5</p>
<div className="text-sm font-medium text-slate-700 px-2 py-1.5">
                      25
                    </div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="help-circle"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                        Trắc nghiệm UI cơ bản
                      </p>
<p className="text-xs text-slate-400">
                        5 câu hỏi nhanh về thiết kế.
                      </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="presentation"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                        Bài tập Framer
                      </p>
<p className="text-xs text-slate-400">Tạo 3 Wireframe</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="code-2"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                        Live Code CSS
                      </p>
<p className="text-xs text-slate-400">Tạo thẻ tương tác</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-pink-600" data-lucide="search"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                        Trắc nghiệm UX Sprint
                      </p>
<p className="text-xs text-slate-400">
                        5 câu Đúng/Sai về nghiên cứu người dùng
                      </p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-100">
<div className="flex items-center justify-between mb-5">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    Nhiệm vụ hàng ngày
                  </h3>
<button className="text-slate-400">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="space-y-5">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="gem"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                          Đăng nhập 5 ngày liên tiếp
                        </p>
<p className="text-xs text-purple-600">+5 Điểm</p>
</div>
</div>
<div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
<div className="h-full w-full bg-purple-500 rounded-full"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">5/5 Hoàn thành</span>
<button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        Nhận thưởng
                      </button>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="puzzle"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                          Vượt qua 3 bài trắc nghiệm không làm lại
                        </p>
<p className="text-xs text-purple-600">+15 Điểm</p>
</div>
</div>
<div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
<div className="h-full w-1/3 bg-purple-500 rounded-full"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">1/3 Hoàn thành</span>
<button className="bg-slate-200 text-slate-400 text-xs font-medium px-3 py-1.5 rounded-full cursor-not-allowed">
                        Nhận thưởng
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
