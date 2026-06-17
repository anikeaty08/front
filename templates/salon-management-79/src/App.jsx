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



        function nav(id, title, el) {
            // Ẩn tất cả các phần
            document.querySelectorAll('.module-section').forEach(s => {
                s.classList.add('hidden');
            });
            // Hiện phần mục tiêu
            document.getElementById(id).classList.remove('hidden');
            
            // Cập nhật trạng thái thanh bên
            document.querySelectorAll('.nav-btn').forEach(b => {
                b.classList.remove('bg-[#effcfc]', 'text-[#0f766e]');
                b.classList.add('text-slate-600');
            });
            el.classList.remove('text-slate-600');
            el.classList.add('bg-[#effcfc]', 'text-[#0f766e]');

            // Cập nhật tiêu đề trang
            document.getElementById('page-title').textContent = title;
        }
    
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
      

<aside className="w-[250px] flex-shrink-0 bg-white border-r border-slate-200 flex flex-col h-full z-20">

<div className="h-[72px] flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6CCAC4] to-[#4db5af] flex items-center justify-center text-white font-bold text-sm tracking-tighter">CT</div>
<div>
<span className="block font-bold text-slate-900 text-sm tracking-tight leading-none">CTSS Salon</span>
<span className="text-[10px] text-slate-400 font-medium tracking-wide">SYSTEM v2.0</span>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<button className="nav-btn active w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all bg-[#effcfc] text-[#0f766e]" onclick="nav('dashboard', 'Tổng Quan', this)">
<iconify-icon className="text-lg" icon="lucide:layout-grid"></iconify-icon> Tổng Quan
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('booking', 'Lịch Hẹn', this)">
<iconify-icon className="text-lg" icon="lucide:calendar-days"></iconify-icon> Lịch Hẹn
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('customers', 'Khách Hàng 360°', this)">
<iconify-icon className="text-lg" icon="lucide:users"></iconify-icon> Khách Hàng 360°
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('services', 'Dịch Vụ', this)">
<iconify-icon className="text-lg" icon="lucide:scissors"></iconify-icon> Dịch Vụ
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('inventory', 'Kho Hàng', this)">
<iconify-icon className="text-lg" icon="lucide:package-check"></iconify-icon> Kho Hàng
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('staff', 'Nhân Sự &amp; Lương', this)">
<iconify-icon className="text-lg" icon="lucide:id-card"></iconify-icon> Nhân Sự &amp; Lương
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('pos', 'Bán Hàng (POS)', this)">
<iconify-icon className="text-lg" icon="lucide:monitor"></iconify-icon> Bán Hàng (POS)
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('reports', 'Báo Cáo', this)">
<iconify-icon className="text-lg" icon="lucide:bar-chart-big"></iconify-icon> Báo Cáo
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('settings', 'Cài Đặt', this)">
<iconify-icon className="text-lg" icon="lucide:settings-2"></iconify-icon> Cài Đặt
            </button>
</nav>

<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<img alt="User" className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=ChiTam"/>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-800">Chí Tâm</span>
<span className="text-[10px] text-slate-400">Quản Trị Viên</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
<div className="flex items-center gap-2 text-sm text-slate-400">
<span className="text-slate-500 font-medium">Quản lý Salon</span>
<iconify-icon className="text-xs" icon="lucide:chevron-right"></iconify-icon>
<span className="text-slate-900 font-medium" id="page-title">Tổng Quan</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<input className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-[#6CCAC4]" placeholder="Tìm kiếm hệ thống (Cmd+K)" type="text"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" icon="lucide:search"></iconify-icon>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<button className="bg-[#6CCAC4] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#5dbcb6] flex items-center gap-2 shadow-sm shadow-[#6CCAC4]/30">
<iconify-icon icon="lucide:plus"></iconify-icon> Đặt Nhanh
                </button>
</div>
</header>

<div className="flex-1 overflow-auto bg-slate-50 p-6 relative">

<div className="module-section space-y-6" id="dashboard">
<div className="grid grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Doanh Thu (Hôm nay)</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-slate-900 tracking-tight">12.5M ₫</span>
<span className="text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+15%</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Lịch Hẹn</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-slate-900 tracking-tight">24</span>
<span className="text-xs text-slate-400">4 đã hủy</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Nhân Viên Hoạt Động</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-slate-900 tracking-tight">8/10</span>
<div className="flex -space-x-1">
<span className="w-5 h-5 rounded-full bg-slate-200 border border-white"></span>
<span className="w-5 h-5 rounded-full bg-slate-300 border border-white"></span>
<span className="w-5 h-5 rounded-full bg-slate-400 border border-white"></span>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Giá Trị TB/Đơn</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-slate-900 tracking-tight">520k ₫</span>
<span className="text-xs text-emerald-600 font-medium">Cao</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 h-[400px]">
<div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-semibold text-slate-900">Tổng Quan Doanh Thu</h3>
<select className="text-xs border-none bg-slate-50 rounded px-2 py-1 text-slate-600 cursor-pointer outline-none"><option>7 ngày qua</option></select>
</div>
<div className="flex-1 flex items-end justify-between gap-4 px-2">
<div className="w-full bg-[#effcfc] rounded-t-sm h-[40%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[30%] rounded-t-sm"></div></div>
<div className="w-full bg-[#effcfc] rounded-t-sm h-[60%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[45%] rounded-t-sm"></div></div>
<div className="w-full bg-[#effcfc] rounded-t-sm h-[45%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[35%] rounded-t-sm"></div></div>
<div className="w-full bg-[#effcfc] rounded-t-sm h-[80%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[70%] rounded-t-sm"></div></div>
<div className="w-full bg-[#effcfc] rounded-t-sm h-[55%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[40%] rounded-t-sm"></div></div>
<div className="w-full bg-[#effcfc] rounded-t-sm h-[90%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[85%] rounded-t-sm"></div></div>
<div className="w-full bg-[#effcfc] rounded-t-sm h-[70%] relative group"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[60%] rounded-t-sm"></div></div>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-400 px-2">
<span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
</div>
</div>
<div className="bg-gradient-to-b from-[#0f766e] to-[#115e59] rounded-xl shadow-sm p-6 text-white flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 opacity-90">
<iconify-icon className="text-lg text-[#6CCAC4]" icon="lucide:sparkles"></iconify-icon>
<span className="font-medium">Phân Tích AI</span>
</div>
<p className="text-sm leading-relaxed text-slate-200">Đề xuất: Lượng khách dự kiến tăng cao vào chiều Thứ 7 dựa trên xu hướng đặt lịch. Gợi ý bổ sung thêm 1 nhân viên phụ.</p>
</div>
<div className="space-y-3">
<div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
<div className="text-xs text-slate-300 mb-1">Dịch vụ hàng đầu</div>
<div className="font-medium">Phục hồi Nano Complex</div>
</div>
<button className="w-full py-2 bg-white text-[#0f766e] rounded-lg text-xs font-semibold hover:bg-slate-100">Xem Phân Tích Đầy Đủ</button>
</div>
</div>
</div>
</div>

<div className="module-section hidden h-full flex flex-col" id="booking">
<div className="flex items-center justify-between mb-4 flex-shrink-0">
<div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
<button className="px-4 py-1.5 text-xs font-medium bg-slate-100 rounded text-slate-900">Dòng thời gian</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900">Danh sách</button>
</div>
<div className="text-sm font-semibold text-slate-800">24 Tháng 10, 2023</div>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-500"><iconify-icon icon="lucide:chevron-left"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-500"><iconify-icon icon="lucide:chevron-right"></iconify-icon></button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl flex-1 flex flex-col overflow-hidden shadow-sm">
<div className="grid grid-cols-6 border-b border-slate-100 bg-slate-50/50">
<div className="p-3 text-xs font-semibold text-slate-400 text-center border-r border-slate-100">Giờ</div>
<div className="p-3 text-center border-r border-slate-100"><span className="block text-xs font-bold text-slate-800">Annie</span><span className="text-[10px] text-slate-500">Thợ Chính</span></div>
<div className="p-3 text-center border-r border-slate-100"><span className="block text-xs font-bold text-slate-800">Kevin</span><span className="text-[10px] text-slate-500">Thợ Cả</span></div>
<div className="p-3 text-center border-r border-slate-100"><span className="block text-xs font-bold text-slate-800">Sarah</span><span className="text-[10px] text-slate-500">Thợ Nhuộm</span></div>
<div className="p-3 text-center border-r border-slate-100"><span className="block text-xs font-bold text-slate-800">David</span><span className="text-[10px] text-slate-500">Thợ Phụ</span></div>
<div className="p-3 text-center"><span className="block text-xs font-bold text-slate-800">Lisa</span><span className="text-[10px] text-slate-500">Nails</span></div>
</div>
<div className="flex-1 overflow-y-auto relative">
<div className="grid grid-cols-6 h-[600px] divide-x divide-slate-100">

<div className="text-center text-[10px] text-slate-400 bg-slate-50/30">
<div className="h-20 pt-2 border-b border-dashed border-slate-200">09:00</div>
<div className="h-20 pt-2 border-b border-dashed border-slate-200">10:00</div>
<div className="h-20 pt-2 border-b border-dashed border-slate-200">11:00</div>
<div className="h-20 pt-2 border-b border-dashed border-slate-200">12:00</div>
</div>

<div className="relative p-1 border-b border-dashed border-slate-100">
<div className="absolute top-2 left-1 right-1 h-36 bg-blue-100 border border-blue-200 rounded-lg p-2 cursor-pointer hover:shadow-md transition-all">
<div className="text-xs font-bold text-blue-800">Chị Hương Giang</div>
<div className="text-[10px] text-blue-600">Cắt + Nhuộm</div>
<div className="mt-1 flex gap-1"><span className="px-1 bg-white/50 rounded text-[9px] text-blue-800">VIP</span></div>
</div>
</div>

<div className="relative p-1 border-b border-dashed border-slate-100">
<div className="absolute top-24 left-1 right-1 h-16 bg-orange-100 border border-orange-200 rounded-lg p-2 cursor-pointer">
<div className="text-xs font-bold text-orange-800">Anh Tuấn</div>
<div className="text-[10px] text-orange-600">Cắt Nam</div>
</div>
</div>

<div className="relative p-1 border-b border-dashed border-slate-100">

</div>

<div className="relative p-1 border-b border-dashed border-slate-100">
<div className="absolute top-2 left-1 right-1 h-20 bg-slate-100 border border-slate-200 rounded-lg p-2 flex items-center justify-center">
<span className="text-[10px] text-slate-500 font-medium">Đào tạo</span>
</div>
</div>

<div className="relative p-1 border-b border-dashed border-slate-100">
<div className="absolute top-10 left-1 right-1 h-12 bg-pink-100 border border-pink-200 rounded-lg p-2">
<div className="text-xs font-bold text-pink-800">Chị Lan</div>
<div className="text-[10px] text-pink-600">Sơn Gel</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="module-section hidden h-full flex gap-6" id="customers">

<div className="w-80 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
<div className="p-3 border-b border-slate-100 bg-slate-50">
<input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs" placeholder="Tìm khách hàng..." type="text"/>
</div>
<div className="flex-1 overflow-y-auto">
<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer bg-[#effcfc] border-l-4 border-l-[#6CCAC4]">
<h4 className="text-sm font-semibold text-slate-900">Lê Thị Hồng</h4>
<p className="text-xs text-slate-500">090 123 4567 • Vàng</p>
</div>
<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
<h4 className="text-sm font-semibold text-slate-900">Trần Văn Bảo</h4>
<p className="text-xs text-slate-500">091 888 9999 • Bạc</p>
</div>
<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
<h4 className="text-sm font-semibold text-slate-900">Nguyễn Thu Thủy</h4>
<p className="text-xs text-slate-500">098 777 6666 • Mới</p>
</div>
</div>
</div>

<div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm p-8 overflow-y-auto">
<div className="flex justify-between items-start mb-8">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold">LH</div>
<div>
<h2 className="text-xl font-bold text-slate-900">Lê Thị Hồng</h2>
<p className="text-sm text-slate-500">Khách từ năm 2021</p>
<div className="flex gap-2 mt-2">
<span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-bold uppercase tracking-wide">Hạng Vàng</span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wide">Tóc Khô</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Tổng Chi Tiêu</div>
<div className="text-2xl font-bold text-[#0f766e]">24.5M ₫</div>
</div>
</div>

<div className="border-b border-slate-100 mb-6 flex gap-6">
<button className="pb-2 text-sm font-medium text-[#0f766e] border-b-2 border-[#0f766e]">Lịch sử</button>
<button className="pb-2 text-sm font-medium text-slate-500 hover:text-slate-800">Công thức</button>
<button className="pb-2 text-sm font-medium text-slate-500 hover:text-slate-800">Thư viện ảnh</button>
</div>
<div className="space-y-4">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5"></div>
<div className="w-px h-full bg-slate-200 my-1"></div>
</div>
<div className="pb-4">
<div className="text-sm font-bold text-slate-900">10 Th10, 2023</div>
<div className="text-sm text-slate-600">Nhuộm &amp; Cắt</div>
<div className="bg-slate-50 p-2 rounded text-xs text-slate-500 mt-1 border border-slate-100">Công thức: 6.1 + 7.1 (1:1) với Oxy 6%. Ghi chú: Khách thích tông khói.</div>
</div>
</div>
</div>
</div>
</div>

<div className="module-section hidden" id="services">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold text-slate-900">Danh Sách Dịch Vụ</h2>
<button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium hover:bg-white text-slate-600 bg-white shadow-sm">+ Thêm Dịch Vụ</button>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
<tr>
<th className="p-4">Tên Dịch Vụ</th>
<th className="p-4">Danh Mục</th>
<th className="p-4">Thời Lượng</th>
<th className="p-4">Giá</th>
<th className="p-4 text-right">Thao Tác</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="p-4 font-medium text-slate-900">Cắt Tóc Cao Cấp</td>
<td className="p-4 text-slate-500">Cắt</td>
<td className="p-4 text-slate-500">45p</td>
<td className="p-4 text-slate-900">350,000 ₫</td>
<td className="p-4 text-right"><iconify-icon className="text-slate-400 cursor-pointer" icon="lucide:more-horizontal"></iconify-icon></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="p-4 font-medium text-slate-900">Nhuộm Balayage</td>
<td className="p-4 text-slate-500">Nhuộm</td>
<td className="p-4 text-slate-500">180p</td>
<td className="p-4 text-slate-900">2,500,000 ₫</td>
<td className="p-4 text-right"><iconify-icon className="text-slate-400 cursor-pointer" icon="lucide:more-horizontal"></iconify-icon></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="p-4 font-medium text-slate-900">Phục Hồi Keratin</td>
<td className="p-4 text-slate-500">Phục Hồi</td>
<td className="p-4 text-slate-500">90p</td>
<td className="p-4 text-slate-900">1,200,000 ₫</td>
<td className="p-4 text-right"><iconify-icon className="text-slate-400 cursor-pointer" icon="lucide:more-horizontal"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="module-section hidden" id="inventory">
<div className="grid grid-cols-4 gap-4 mb-6">
<div className="col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Tổng Giá Trị Kho</div>
<div className="text-xl font-bold text-slate-900">145.2M ₫</div>
</div>
<div className="col-span-1 bg-red-50 p-4 rounded-xl border border-red-100 shadow-sm">
<div className="text-xs text-red-500 mb-1 font-medium">Cảnh Báo Tồn Kho</div>
<div className="text-xl font-bold text-red-700">3 Sản phẩm</div>
</div>
</div>
<div className="grid grid-cols-5 gap-4">

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative group hover:border-[#6CCAC4] transition-colors">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-300">
<iconify-icon className="text-3xl" icon="lucide:flask-conical"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-slate-900">Olaplex No.1</h3>
<p className="text-xs text-slate-500 mb-3">Chai 525ml</p>
<div className="w-full bg-slate-100 h-1.5 rounded-full mb-1">
<div className="w-[70%] bg-emerald-500 h-1.5 rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] font-medium text-slate-500">
<span>Còn 14</span>
<span>Định mức: 20</span>
</div>
</div>

<div className="bg-white border border-red-200 rounded-xl p-4 shadow-sm relative group">
<div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-300">
<iconify-icon className="text-3xl" icon="lucide:droplet"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-slate-900">L'Oreal 6.1</h3>
<p className="text-xs text-slate-500 mb-3">Tuýp 100ml</p>
<div className="w-full bg-red-100 h-1.5 rounded-full mb-1">
<div className="w-[15%] bg-red-500 h-1.5 rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] font-medium text-red-500">
<span>Còn 2</span>
<span>Đặt hàng ngay</span>
</div>
</div>
</div>
</div>

<div className="module-section hidden" id="staff">
<div className="flex gap-6">
<div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="font-bold text-slate-900">Bảng Lương: Tháng 10</h3>
<button className="text-xs text-[#0f766e] font-medium hover:underline">Tải Excel</button>
</div>
<table className="w-full text-left text-sm">
<thead className="text-slate-500 text-xs uppercase bg-slate-50 border-b border-slate-100">
<tr>
<th className="p-4">Nhân Viên</th>
<th className="p-4">Vai Trò</th>
<th className="p-4">Lương Cứng</th>
<th className="p-4">Hoa Hồng</th>
<th className="p-4 text-right">Thực Nhận</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr>
<td className="p-4 font-medium text-slate-900">Annie Nguyen</td>
<td className="p-4 text-xs"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Thợ Chính</span></td>
<td className="p-4 text-slate-600">15.0M ₫</td>
<td className="p-4 text-emerald-600">+12.4M ₫</td>
<td className="p-4 font-bold text-slate-900 text-right">27.4M ₫</td>
</tr>
<tr>
<td className="p-4 font-medium text-slate-900">Kevin Tran</td>
<td className="p-4 text-xs"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Thợ Cả</span></td>
<td className="p-4 text-slate-600">10.0M ₫</td>
<td className="p-4 text-emerald-600">+6.2M ₫</td>
<td className="p-4 font-bold text-slate-900 text-right">16.2M ₫</td>
</tr>
</tbody>
</table>
</div>
<div className="w-80 space-y-4">
<div className="bg-slate-800 text-white p-5 rounded-xl shadow-lg">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-[#6CCAC4] flex items-center justify-center text-slate-900 font-bold">A</div>
<div>
<div className="text-sm font-bold">Annie Nguyen</div>
<div className="text-xs text-slate-400">Nhân viên xuất sắc</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 text-center">
<div className="bg-white/10 rounded-lg p-2">
<div className="text-lg font-bold">98%</div>
<div className="text-[10px] text-slate-300">Giữ chân</div>
</div>
<div className="bg-white/10 rounded-lg p-2">
<div className="text-lg font-bold">45</div>
<div className="text-[10px] text-slate-300">Lượt khách</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="module-section hidden h-full" id="pos">
<div className="flex h-full gap-4">

<div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
<div className="p-4 border-b border-slate-100 flex gap-2">
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium">Dịch Vụ</button>
<button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-200">Sản Phẩm</button>
</div>
<div className="p-4 grid grid-cols-3 gap-4 overflow-y-auto">
<button className="p-4 border border-slate-200 rounded-xl hover:border-[#6CCAC4] hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Cắt Nam</span>
<span className="block text-xs text-slate-500 mt-1">150,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-[#6CCAC4] hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Cắt Nữ</span>
<span className="block text-xs text-slate-500 mt-1">350,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-[#6CCAC4] hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Nhuộm Chân</span>
<span className="block text-xs text-slate-500 mt-1">800,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-[#6CCAC4] hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Nhuộm Toàn Bộ</span>
<span className="block text-xs text-slate-500 mt-1">1,500,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-[#6CCAC4] hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Gội Đầu Dưỡng Sinh (60p)</span>
<span className="block text-xs text-slate-500 mt-1">500,000 ₫</span>
</button>
</div>
</div>

<div className="w-96 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
<div className="p-4 border-b border-slate-100 bg-slate-50 rounded-t-xl">
<div className="flex justify-between items-center">
<span className="font-bold text-slate-800">Đơn #1024</span>
<span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Chờ xử lý</span>
</div>
<div className="mt-2 text-sm text-slate-600">Khách: <span className="font-medium text-slate-900">Khách Vãng Lai</span></div>
</div>
<div className="flex-1 p-4 space-y-3 overflow-y-auto">
<div className="flex justify-between items-start text-sm">
<div>
<div className="font-medium text-slate-900">Cắt Nữ</div>
<div className="text-xs text-slate-400">Thợ: Annie</div>
</div>
<div className="font-medium text-slate-900">350k</div>
</div>
<div className="flex justify-between items-start text-sm">
<div>
<div className="font-medium text-slate-900">Nhuộm Chân</div>
<div className="text-xs text-slate-400">Thợ: Annie</div>
</div>
<div className="font-medium text-slate-900">800k</div>
</div>
</div>
<div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-xl">
<div className="flex justify-between text-lg font-bold text-slate-900 mb-4">
<span>Tổng cộng</span>
<span>1,150,000 ₫</span>
</div>
<button className="w-full bg-[#0f766e] text-white py-3 rounded-xl font-bold hover:bg-[#0d6b63] shadow-lg shadow-[#0f766e]/20">THANH TOÁN</button>
</div>
</div>
</div>
</div>

<div className="module-section hidden" id="reports">
<div className="grid grid-cols-2 gap-6 mb-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="font-bold text-slate-900 mb-4">Tăng Trưởng Tháng</h3>
<div className="h-48 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-slate-100 rounded-t h-[40%]"></div>
<div className="w-full bg-slate-100 rounded-t h-[55%]"></div>
<div className="w-full bg-slate-100 rounded-t h-[50%]"></div>
<div className="w-full bg-[#effcfc] rounded-t h-[75%] relative"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[60%] rounded-t opacity-80"></div></div>
<div className="w-full bg-[#effcfc] rounded-t h-[90%] relative"><div className="absolute bottom-0 w-full bg-[#6CCAC4] h-[85%] rounded-t opacity-80"></div></div>
</div>
<div className="mt-4 text-center text-xs text-slate-500">Doanh thu tăng 12% so với tháng trước</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center">
<h3 className="font-bold text-slate-900 mb-4 w-full text-left">Tỷ Trọng Danh Mục</h3>
<div className="w-40 h-40 rounded-full border-[12px] border-slate-100 border-t-[#6CCAC4] border-r-[#6CCAC4] rotate-45 mb-4"></div>
<div className="flex gap-4 text-xs font-medium">
<div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#6CCAC4] rounded-full"></span> Dịch Vụ (75%)</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 bg-slate-200 rounded-full"></span> Bán Lẻ (25%)</div>
</div>
</div>
</div>
</div>

<div className="module-section hidden" id="settings">
<div className="max-w-3xl bg-white rounded-xl border border-slate-200 shadow-sm p-8">
<h2 className="text-xl font-bold text-slate-900 mb-6">Cấu Hình Salon</h2>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Tên Salon</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 font-medium" type="text" value="CTSS – Hệ Thống Salon Chí Tâm"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Số Điện Thoại Chính</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 font-medium" type="text" value="090 123 4567"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Địa Chỉ</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 font-medium" type="text" value="Quận 1, TP. Hồ Chí Minh, Việt Nam"/>
</div>
<div className="border-t border-slate-100 pt-6">
<div className="flex items-center justify-between mb-4">
<div>
<div className="text-sm font-bold text-slate-900">Tính Năng AI</div>
<div className="text-xs text-slate-500">Bật dự đoán đặt lịch và phân tích tồn kho.</div>
</div>
<div className="w-10 h-5 bg-[#6CCAC4] rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div></div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-bold text-slate-900">Tích Hợp Zalo</div>
<div className="text-xs text-slate-500">Tự động gửi nhắc lịch qua Zalo OA.</div>
</div>
<div className="w-10 h-5 bg-[#6CCAC4] rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div></div>
</div>
</div>
<div className="pt-4 flex justify-end">
<button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">Lưu Thay Đổi</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
