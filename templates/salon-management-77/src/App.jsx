import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
                b.classList.remove('bg-blue-50', 'text-blue-700');
                b.classList.add('text-slate-600');
            });
            el.classList.remove('text-slate-600');
            el.classList.add('bg-blue-50', 'text-blue-700');

            // Cập nhật tiêu đề trang
            document.getElementById('page-title').textContent = title;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[250px] flex-shrink-0 bg-white border-r border-slate-200 flex flex-col h-full z-20">

<div className="flex h-[72px] border-slate-100 border-b pr-6 pl-6 items-center">
<div className="flex items-center gap-3">
<div className="flex text-sm font-bold text-white tracking-tighter bg-gradient-to-br from-blue-500 to-blue-600 w-8 h-8 rounded-lg items-center justify-center">LOGO</div>
<div className="">
<span className="block leading-none text-sm font-bold text-slate-900 tracking-tight">Sunny Spa</span>
<span className="text-[10px] font-medium text-slate-400 tracking-wide">Quản lý hệ thống</span>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto pt-6 pr-3 pb-6 pl-3 space-y-1">
<button className="nav-btn active flex transition-all text-sm font-medium text-blue-700 bg-blue-50 w-full rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 gap-x-3 gap-y-3 items-center" onclick="nav('dashboard', 'Tổng Quan', this)">
<iconify-icon className="text-lg" icon="lucide:layout-grid" strokeWidth="1.5"></iconify-icon> Tổng Quan
            </button>
<button className="nav-btn flex hover:bg-slate-50 hover:text-slate-900 transition-all text-sm font-medium text-slate-600 w-full rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 gap-x-3 gap-y-3 items-center" onclick="nav('booking', 'Lịch Hẹn', this)">
<iconify-icon className="text-lg" icon="lucide:calendar-days" strokeWidth="1.5"></iconify-icon> Lịch Hẹn
            </button>
<button className="nav-btn flex gap-3 hover:bg-slate-50 hover:text-slate-900 transition-all text-sm font-medium text-slate-600 w-full rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 gap-x-3 gap-y-3 items-center" onclick="nav('customers', 'Khách Hàng 360°', this)">
<iconify-icon className="text-lg" icon="lucide:users" strokeWidth="1.5"></iconify-icon> Khách Hàng 360°
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('services', 'Dịch Vụ', this)">
<iconify-icon className="text-lg" icon="lucide:scissors" strokeWidth="1.5"></iconify-icon> Dịch Vụ
            </button>
<button className="nav-btn flex hover:bg-slate-50 hover:text-slate-900 transition-all text-sm font-medium text-slate-600 w-full rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 gap-x-3 gap-y-3 items-center" onclick="nav('inventory', 'Kho Hàng', this)">
<iconify-icon className="text-lg" icon="lucide:package-check" strokeWidth="1.5"></iconify-icon> Kho Hàng
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('staff', 'Nhân Sự &amp; Lương', this)">
<iconify-icon className="text-lg" icon="lucide:id-card" strokeWidth="1.5"></iconify-icon> Nhân Sự &amp; Lương
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('pos', 'Bán Hàng (POS)', this)">
<iconify-icon className="text-lg" icon="lucide:monitor" strokeWidth="1.5"></iconify-icon> Bán Hàng (POS)
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('reports', 'Báo Cáo', this)">
<iconify-icon className="text-lg" icon="lucide:bar-chart-big" strokeWidth="1.5"></iconify-icon> Báo Cáo
            </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="nav('settings', 'Cài Đặt', this)">
<iconify-icon className="text-lg" icon="lucide:settings-2" strokeWidth="1.5"></iconify-icon> Cài Đặt
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
<input className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Tìm kiếm hệ thống (Cmd+K)" type="text"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" icon="lucide:search"></iconify-icon>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-700 flex items-center gap-2 shadow-sm">
<iconify-icon className="" icon="lucide:plus"></iconify-icon> Đặt Nhanh
                </button>
</div>
</header>

<div className="flex-1 overflow-auto bg-[#F2F4F8] p-6 relative">

<div className="module-section h-full pb-10" id="dashboard">

<div className="mb-6 bg-red-50 border border-red-100 rounded-lg p-3 flex items-start justify-between shadow-sm animate-fade-in-down">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-500 text-lg" icon="lucide:alert-octagon"></iconify-icon>
</div>
<span className="text-sm text-slate-700 leading-snug">
                            Sản phẩm <strong className="text-red-600">Gel phá móng</strong> đang hết hàng, vui lòng nhập thêm!
                        </span>
</div>
<button className="text-slate-400 hover:text-red-500 transition-colors p-1" onclick="this.parentElement.remove()">
<iconify-icon className="text-lg" icon="lucide:x"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

<div className="xl:col-span-3 space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 flex justify-between items-center relative overflow-hidden">
<div className="flex flex-col justify-between h-full z-10">
<div>
<h3 className="text-sm font-semibold text-slate-900">Lịch hẹn hôm nay</h3>
<div className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">0</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-red-50 text-red-500">
<iconify-icon className="text-[10px]" icon="lucide:arrow-down"></iconify-icon> 100%
                                        </span>
<span className="text-[10px] text-slate-400 ml-1">So với hôm qua</span>
</div>
</div>
<div className="w-32 h-16 flex items-end justify-center relative mt-4">
<svg className="w-full h-full" viewbox="0 0 100 50">
<path d="M10,50 A40,40 0 1,1 90,50" fill="none" stroke="#f1f5f9" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="absolute bottom-0 left-0 right-0 text-center mb-1">
<div className="text-xl font-bold text-slate-400 tracking-tight">0%</div>
<div className="text-[9px] text-slate-400 font-medium">Hoàn thành: 0 lịch</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 flex justify-between items-center">
<div className="flex flex-col h-full z-10 flex-1">
<h3 className="text-sm font-semibold text-slate-900">Khách hàng hôm nay</h3>
<div className="text-3xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">0</div>
<div className="space-y-1">
<div className="flex items-center text-[11px] text-slate-500">
<span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
<span className="flex-1">Khách mới</span>
<span className="font-medium text-slate-700">0 lượt</span>
</div>
<div className="flex items-center text-[11px] text-slate-500">
<span className="w-2 h-2 rounded-full bg-blue-300 mr-2"></span>
<span className="flex-1">Quay lại</span>
<span className="font-medium text-slate-700">0 lượt</span>
</div>
<div className="flex items-center text-[11px] text-slate-500">
<span className="w-2 h-2 rounded-full bg-blue-100 mr-2"></span>
<span className="flex-1">Khách lẻ</span>
<span className="font-medium text-slate-700">0 lượt</span>
</div>
</div>
</div>
<div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 ml-2">
<iconify-icon className="text-4xl" icon="lucide:pie-chart" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 flex justify-between items-center">
<div className="flex flex-col h-full z-10 flex-1 w-full">
<h3 className="text-sm font-semibold text-slate-900 flex items-center justify-between w-full">
                                        Thu chi hôm nay 
                                        <iconify-icon className="text-slate-300 text-xs cursor-pointer hover:text-slate-500" icon="lucide:info"></iconify-icon>
</h3>
<div className="grid grid-cols-1 gap-3 mt-4 w-full">

<div className="flex items-center justify-between">
<div className="flex items-center text-[11px] text-slate-500">
<div className="w-6 h-6 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2">
<iconify-icon className="text-xs" icon="lucide:trending-up"></iconify-icon>
</div>
<span className="font-medium">Tổng thu</span>
</div>
<span className="text-sm font-bold text-slate-900">0 ₫</span>
</div>

<div className="flex items-center justify-between border-t border-slate-50 pt-2">
<div className="flex items-center text-[11px] text-slate-500">
<div className="w-6 h-6 rounded bg-red-100 text-red-600 flex items-center justify-center mr-2">
<iconify-icon className="text-xs" icon="lucide:trending-down"></iconify-icon>
</div>
<span className="font-medium">Tổng vốn chi</span>
</div>
<span className="text-sm font-bold text-slate-900">0 ₫</span>
</div>

<div className="flex items-center justify-between border-t border-slate-50 pt-2">
<div className="flex items-center text-[11px] text-slate-500">
<div className="w-6 h-6 rounded bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
<iconify-icon className="text-xs" icon="lucide:coins"></iconify-icon>
</div>
<span className="font-medium">Tổng hoa hồng</span>
</div>
<span className="text-sm font-bold text-slate-900">0 ₫</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-semibold text-slate-900">Lượng khách hàng</h3>
<button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs font-medium hover:bg-slate-200">
                                        Tháng này <iconify-icon className="text-[10px]" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<div className="mb-4">
<span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded">30 lượt khách</span>
</div>
<div className="flex border-b border-slate-100 mb-6">
<button className="pb-2 text-xs font-semibold text-blue-600 border-b-2 border-blue-600 mr-6">Theo giờ</button>
<button className="pb-2 text-xs font-medium text-slate-500 hover:text-slate-800 mr-6">Theo ngày</button>
<button className="pb-2 text-xs font-medium text-slate-500 hover:text-slate-800">Theo thứ</button>
</div>
<div className="relative h-64 w-full">
<div className="absolute left-0 top-0 bottom-6 w-6 flex flex-col justify-between text-[10px] text-slate-400 font-medium text-right pr-2">
<span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span>
</div>
<div className="absolute left-8 right-0 top-2 bottom-6 chart-grid border-b border-dashed border-slate-200">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,40 L6,40 L10,50 L25,50 L30,50 L35,40 L40,50 L45,40 L50,50 L75,50 L80,20 L85,30 L90,25 L100,5" fill="none" stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-slate-400 font-medium pt-2">
<span>00:00</span><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span><span>21:00</span><span>23:00</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-semibold text-slate-900">Doanh thu thuần</h3>
<button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs font-medium hover:bg-slate-200">
                                        Tháng này <iconify-icon className="text-[10px]" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<div className="flex gap-2 mb-4">
<span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded">9,980</span>
<span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded">15 hóa đơn</span>
</div>
<div className="flex border-b border-slate-100 mb-6">
<button className="pb-2 text-xs font-semibold text-blue-600 border-b-2 border-blue-600 mr-6">Theo giờ</button>
<button className="pb-2 text-xs font-medium text-slate-500 hover:text-slate-800 mr-6">Theo ngày</button>
<button className="pb-2 text-xs font-medium text-slate-500 hover:text-slate-800">Theo thứ</button>
</div>
<div className="relative h-64 w-full">
<div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-slate-400 font-medium text-right pr-2">
<span>3n</span><span>2n</span><span>1n</span><span>0</span>
</div>
<div className="absolute left-10 right-0 top-2 bottom-6 chart-grid border-b border-dashed border-slate-200 flex items-end justify-between px-2">
<div className="w-6 bg-[#007AFF] rounded-t-sm h-[30%]"></div>
<div className="w-6 bg-[#007AFF] rounded-t-sm h-[45%]"></div>
<div className="w-6 bg-[#007AFF] rounded-t-sm h-[28%]"></div>
<div className="w-6 bg-[#007AFF] rounded-t-sm h-[32%]"></div>
<div className="w-6 bg-[#007AFF] rounded-t-sm h-[95%]"></div>
<div className="w-6 bg-[#007AFF] rounded-t-sm h-[60%]"></div>
</div>
<div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-slate-400 font-medium pt-2 px-1">
<span>07:00</span><span>10:00</span><span>12:00</span><span>15:00</span><span>18:00</span><span>20:00</span>
</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded-lg p-5 shadow-sm border border-slate-100">
<div className="flex justify-between items-center mb-4">
<div className="flex items-baseline gap-2">
<h3 className="text-sm font-semibold text-slate-900">Top nhân viên xuất sắc</h3>
<a className="text-xs font-semibold text-blue-600 hover:underline" href="#">Chi tiết</a>
</div>
<button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs font-medium hover:bg-slate-200">
                                    Hôm nay <iconify-icon className="text-[10px]" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<div className="flex border-b border-slate-100 mb-4">
<button className="px-4 py-2 text-xs font-semibold text-blue-600 border-b-2 border-blue-600">Doanh thu</button>
<button className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800">Số lượng</button>
<button className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800">Hoa hồng</button>
</div>
<div className="h-32 flex items-center justify-center text-xs text-slate-400">
                                Chưa có dữ liệu nhân viên hôm nay
                            </div>
</div>
</div>

<div className="xl:col-span-1 space-y-6">

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 flex flex-col h-[400px]">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Lịch hẹn sắp tới</h3>
<a className="text-xs font-medium text-blue-600 hover:underline" href="#">Xem tất cả</a>
</div>
<div className="flex-1 overflow-y-auto space-y-3 pr-1">

<div className="flex gap-3 items-start p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex flex-col items-center min-w-[40px]">
<span className="text-xs font-bold text-slate-900">14:00</span>
<span className="text-[10px] font-medium text-slate-400">Hôm nay</span>
<div className="h-full w-px bg-slate-200 mt-2 group-last:hidden"></div>
</div>
<div className="flex-1 pb-2 border-b border-slate-50 group-last:border-none">
<div className="flex justify-between items-start">
<span className="text-xs font-semibold text-slate-800">Nguyễn Thúy Hằng</span>
<span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-blue-600">SẮP TỚI</span>
</div>
<div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Cắt tóc nữ • Nhuộm Highlight</div>
<div className="flex items-center gap-1 mt-1.5">
<img alt="Staff" className="w-4 h-4 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"/>
<span className="text-[10px] text-slate-400">Annie (Thợ chính)</span>
</div>
</div>
</div>

<div className="flex gap-3 items-start p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex flex-col items-center min-w-[40px]">
<span className="text-xs font-bold text-slate-900">15:30</span>
<span className="text-[10px] font-medium text-slate-400">Hôm nay</span>
<div className="h-full w-px bg-slate-200 mt-2 group-last:hidden"></div>
</div>
<div className="flex-1 pb-2 border-b border-slate-50 group-last:border-none">
<div className="flex justify-between items-start">
<span className="text-xs font-semibold text-slate-800">Trần Minh Quân</span>
<span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange-50 text-orange-600">CHỜ</span>
</div>
<div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Combo Cắt + Gội</div>
<div className="flex items-center gap-1 mt-1.5">
<img alt="Staff" className="w-4 h-4 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin"/>
<span className="text-[10px] text-slate-400">Kevin</span>
</div>
</div>
</div>

<div className="flex gap-3 items-start p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex flex-col items-center min-w-[40px]">
<span className="text-xs font-bold text-slate-900">16:15</span>
<span className="text-[10px] font-medium text-slate-400">Hôm nay</span>
<div className="h-full w-px bg-slate-200 mt-2 group-last:hidden hidden"></div>
</div>
<div className="flex-1 pb-2 border-b border-slate-50 group-last:border-none">
<div className="flex justify-between items-start">
<span className="text-xs font-semibold text-slate-800">Lê Lan Anh</span>
<span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-500">ĐẶT TRƯỚC</span>
</div>
<div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Phục hồi tóc hư tổn</div>
<div className="flex items-center gap-1 mt-1.5">
<span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[8px] text-slate-400">?</span>
<span className="text-[10px] text-slate-400">Chưa chỉ định</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Nhật ký hoạt động</h3>
<div className="space-y-4 pl-1">

<div className="flex gap-3 relative">
<div className="absolute left-[5px] top-2 bottom-[-16px] w-px bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white relative z-10 mt-1.5"></div>
<div>
<div className="text-xs text-slate-800"><span className="font-semibold">Lễ tân</span> đã tạo lịch hẹn mới cho <span className="font-semibold">Khách vãng lai</span>.</div>
<div className="text-[10px] text-slate-400 mt-0.5">2 phút trước</div>
</div>
</div>

<div className="flex gap-3 relative">
<div className="absolute left-[5px] top-2 bottom-[-16px] w-px bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-white relative z-10 mt-1.5"></div>
<div>
<div className="text-xs text-slate-800"><span className="font-semibold">Annie</span> đã hoàn thành dịch vụ <span className="font-semibold">Nhuộm nâu khói</span>.</div>
<div className="text-[10px] text-slate-400 mt-0.5">15 phút trước</div>
</div>
</div>

<div className="flex gap-3 relative">
<div className="absolute left-[5px] top-2 bottom-[-16px] w-px bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white relative z-10 mt-1.5"></div>
<div>
<div className="text-xs text-slate-800">Đã cập nhật tồn kho <span className="font-semibold">Oxy Trợ Nhuộm</span>.</div>
<div className="text-[10px] text-slate-400 mt-0.5">1 giờ trước</div>
</div>
</div>

<div className="flex gap-3 relative">

<div className="w-2.5 h-2.5 rounded-full bg-slate-200 ring-4 ring-white relative z-10 mt-1.5"></div>
<div>
<div className="text-xs text-slate-800">Hệ thống sao lưu dữ liệu tự động.</div>
<div className="text-[10px] text-slate-400 mt-0.5">3 giờ trước</div>
</div>
</div>
</div>
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
<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer bg-blue-50 border-l-4 border-l-blue-500">
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
<div className="text-2xl font-bold text-blue-600">24.5M ₫</div>
</div>
</div>

<div className="border-b border-slate-100 mb-6 flex gap-6">
<button className="pb-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Lịch sử</button>
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

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative group hover:border-blue-500 transition-colors">
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
<button className="text-xs text-blue-600 font-medium hover:underline">Tải Excel</button>
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
<tbody className="divide-y divide-slate-5">
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
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-slate-900 font-bold">A</div>
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
<button className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Cắt Nam</span>
<span className="block text-xs text-slate-500 mt-1">150,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Cắt Nữ</span>
<span className="block text-xs text-slate-500 mt-1">350,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Nhuộm Chân</span>
<span className="block text-xs text-slate-500 mt-1">800,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition-all text-left bg-slate-50">
<span className="block font-medium text-slate-900 text-sm">Nhuộm Toàn Bộ</span>
<span className="block text-xs text-slate-500 mt-1">1,500,000 ₫</span>
</button>
<button className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition-all text-left bg-slate-50">
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
<button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20">THANH TOÁN</button>
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
<div className="w-full bg-blue-50 rounded-t h-[75%] relative"><div className="absolute bottom-0 w-full bg-blue-500 h-[60%] rounded-t opacity-80"></div></div>
<div className="w-full bg-blue-50 rounded-t h-[90%] relative"><div className="absolute bottom-0 w-full bg-blue-500 h-[85%] rounded-t opacity-80"></div></div>
</div>
<div className="mt-4 text-center text-xs text-slate-500">Doanh thu tăng 12% so với tháng trước</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center">
<h3 className="font-bold text-slate-900 mb-4 w-full text-left">Tỷ Trọng Danh Mục</h3>
<div className="w-40 h-40 rounded-full border-[12px] border-slate-100 border-t-blue-500 border-r-blue-500 rotate-45 mb-4"></div>
<div className="flex gap-4 text-xs font-medium">
<div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> Dịch Vụ (75%)</div>
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
<div className="w-10 h-5 bg-blue-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div></div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-bold text-slate-900">Tích Hợp Zalo</div>
<div className="text-xs text-slate-500">Tự động gửi nhắc lịch qua Zalo OA.</div>
</div>
<div className="w-10 h-5 bg-blue-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div></div>
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
