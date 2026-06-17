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
      

<aside className="w-64 bg-[#A71916] text-white flex flex-col flex-shrink-0 shadow-xl transition-all-300 relative z-20">

<div className="h-16 flex items-center px-6 border-b border-white/10">
<div className="flex items-center gap-3">

<div className="h-8 w-8 bg-white rounded-md flex items-center justify-center text-[#A71916] font-bold tracking-tighter text-lg">
                    T
                </div>
<span className="text-lg font-semibold tracking-tight">THILOGI <span className="opacity-70 font-normal">STM</span></span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">

<div className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-white/50">Tổng quan</div>

<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#FFF5D5]/10 border-l-[3px] border-[#FFF5D5] text-white transition-all-300 hover:bg-[#FFF5D5]/20" href="#">
<i className="w-5 h-5 text-[#FFF5D5]" data-lucide="layout-dashboard"></i>
<span className="font-medium">Dashboard</span>
</a>

<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-[3px] border-transparent text-white/90 hover:text-[#FFF5D5] hover:bg-white/5 transition-all-300" href="#">
<i className="w-5 h-5 group-hover:text-[#F6A21A] transition-colors duration-300" data-lucide="truck"></i>
<span className="font-medium">Vận tải đường bộ</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-[3px] border-transparent text-white/90 hover:text-[#FFF5D5] hover:bg-white/5 transition-all-300" href="#">
<i className="w-5 h-5 group-hover:text-[#F6A21A] transition-colors duration-300" data-lucide="ship"></i>
<span className="font-medium">Vận tải biển</span>
</a>

<div className="px-3 mt-6 mb-2 text-xs font-medium uppercase tracking-wider text-white/50">Quản lý</div>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-[3px] border-transparent text-white/90 hover:text-[#FFF5D5] hover:bg-white/5 transition-all-300" href="#">
<i className="w-5 h-5 group-hover:text-[#F6A21A] transition-colors duration-300" data-lucide="package"></i>
<span className="font-medium">Đơn hàng</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-[3px] border-transparent text-white/90 hover:text-[#FFF5D5] hover:bg-white/5 transition-all-300" href="#">
<i className="w-5 h-5 group-hover:text-[#F6A21A] transition-colors duration-300" data-lucide="users"></i>
<span className="font-medium">Đối tác &amp; Tài xế</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-[3px] border-transparent text-white/90 hover:text-[#FFF5D5] hover:bg-white/5 transition-all-300" href="#">
<i className="w-5 h-5 group-hover:text-[#F6A21A] transition-colors duration-300" data-lucide="file-bar-chart-2"></i>
<span className="font-medium">Báo cáo</span>
</a>
</nav>

<div className="p-4 border-t border-white/10">
<a className="flex items-center gap-3 text-white/80 hover:text-[#FFF5D5] transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="font-medium">Cấu hình hệ thống</span>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#F8F9FA]">

<header className="h-16 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] border-b-[3px] border-[#ED1C24] flex items-center justify-between px-6 z-10 flex-shrink-0">

<div className="flex items-center gap-4">
<button className="text-[#231F20] hover:text-[#ED1C24] transition-colors duration-300 lg:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<div className="hidden md:flex items-center text-sm text-gray-500">
<span className="hover:text-[#ED1C24] cursor-pointer transition-colors duration-300">Trang chủ</span>
<i className="w-4 h-4 mx-2" data-lucide="chevron-right"></i>
<span className="text-[#231F20] font-medium">Quản lý đơn hàng</span>
</div>
</div>

<div className="flex items-center gap-6">

<div className="relative hidden md:block group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-[#ED1C24] transition-colors duration-300" data-lucide="search"></i>
<input className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] transition-all-300 placeholder:text-gray-400 text-[#231F20]" placeholder="Tìm kiếm mã vận đơn..." type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="relative text-[#231F20] hover:text-[#ED1C24] transition-colors duration-300">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#ED1C24] rounded-full border-2 border-white"></span>
</button>
<button className="text-[#231F20] hover:text-[#ED1C24] transition-colors duration-300">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</button>
</div>

<div className="pl-4 border-l border-gray-200">
<button className="flex items-center gap-3 group">
<div className="flex flex-col text-right hidden sm:block">
<span className="text-sm font-semibold text-[#231F20] group-hover:text-[#ED1C24] transition-colors duration-300">Nguyễn Văn A</span>
<span className="text-xs text-gray-500">Điều phối viên</span>
</div>
<div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#A71916] font-bold overflow-hidden">
                            NV
                        </div>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 lg:p-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-[#231F20]">Đơn Hàng Vận Tải</h1>
<p className="text-gray-500 mt-1">Quản lý và theo dõi tiến độ vận chuyển</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white border border-[#ED1C24] text-[#ED1C24] rounded-lg text-sm font-medium hover:bg-[#ED1C24] hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Xuất báo cáo</span>
</button>
<button className="px-4 py-2 bg-[#ED1C24] text-white rounded-lg text-sm font-medium hover:bg-[#F6A21A] hover:text-[#231F20] transition-all duration-300 shadow-md flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Tạo đơn hàng</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-white p-5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-all-300 group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-[#FFF5D5] rounded-lg text-[#F6A21A]">
<i className="w-5 h-5" data-lucide="package-check"></i>
</div>
<span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            +12% <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i>
</span>
</div>
<div className="text-3xl font-semibold text-[#231F20] tracking-tight mb-1">1,248</div>
<div className="text-gray-500 text-xs font-medium">Đơn hàng hoàn thành</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-all-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<i className="w-5 h-5" data-lucide="truck"></i>
</div>
<span className="flex items-center text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                            0% <i className="w-3 h-3 ml-1" data-lucide="minus"></i>
</span>
</div>
<div className="text-3xl font-semibold text-[#231F20] tracking-tight mb-1">86</div>
<div className="text-gray-500 text-xs font-medium">Đang vận chuyển</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-all-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-[#A71916]/10 rounded-lg text-[#A71916]">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
</div>
<span className="flex items-center text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                            +2 <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i>
</span>
</div>
<div className="text-3xl font-semibold text-[#231F20] tracking-tight mb-1">4</div>
<div className="text-gray-500 text-xs font-medium">Sự cố phát sinh</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-all-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-100 rounded-lg text-[#231F20]">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
</div>
<div className="text-3xl font-semibold text-[#231F20] tracking-tight mb-1">12</div>
<div className="text-gray-500 text-xs font-medium">Chờ xác nhận</div>
</div>
</div>

<div className="bg-white rounded-t-xl border border-gray-200 border-b-0 p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
<div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
<button className="px-3 py-1.5 text-xs font-medium bg-[#A71916]/10 text-[#A71916] rounded-md border border-[#A71916]/20 whitespace-nowrap">Tất cả</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all whitespace-nowrap">Đang chạy</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all whitespace-nowrap">Hoàn thành</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all whitespace-nowrap">Đã hủy</button>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" data-lucide="filter"></i>
<input className="pl-9 pr-3 py-1.5 w-full bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] transition-all-300" placeholder="Lọc theo khách hàng, biển số..." type="text"/>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-b-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="py-3 px-4 w-12 text-center">
<label className="custom-checkbox cursor-pointer relative flex items-center justify-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border-2 border-gray-300 rounded transition-colors bg-white">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Mã Vận Đơn</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Khách Hàng</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Lộ Trình</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phương Tiện</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Trạng Thái</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Cập Nhật</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Thao Tác</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-[#FFF5D5]/20 transition-colors duration-200">
<td className="py-3 px-4 text-center">
<label className="custom-checkbox cursor-pointer relative flex items-center justify-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border-2 border-gray-300 rounded transition-colors bg-white group-hover:border-[#ED1C24]">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<span className="font-medium text-[#A71916]">STM-2023-001</span>
</td>
<td className="py-3 px-4">
<div className="text-[#231F20] font-medium">Công ty TNHH ABC</div>
<div className="text-xs text-gray-400">Hàng container</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-gray-600">
<span className="text-xs">Chu Lai</span>
<i className="w-3 h-3 text-[#ED1C24]" data-lucide="arrow-right"></i>
<span className="text-xs">Hà Nội</span>
</div>
</td>
<td className="py-3 px-4 text-gray-600 text-sm">
                                    92C-123.45
                                </td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                        Đang vận chuyển
                                    </span>
</td>
<td className="py-3 px-4 text-gray-500 text-xs">
                                    10 phút trước
                                </td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-[#ED1C24] transition-colors p-1">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-[#FFF5D5]/20 transition-colors duration-200">
<td className="py-3 px-4 text-center">
<label className="custom-checkbox cursor-pointer relative flex items-center justify-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border-2 border-gray-300 rounded transition-colors bg-white group-hover:border-[#ED1C24]">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<span className="font-medium text-[#A71916]">STM-2023-002</span>
</td>
<td className="py-3 px-4">
<div className="text-[#231F20] font-medium">Tập đoàn Xây dựng X</div>
<div className="text-xs text-gray-400">Sắt thép</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-gray-600">
<span className="text-xs">Đà Nẵng</span>
<i className="w-3 h-3 text-[#ED1C24]" data-lucide="arrow-right"></i>
<span className="text-xs">Bình Dương</span>
</div>
</td>
<td className="py-3 px-4 text-gray-600 text-sm">
                                    43C-888.99
                                </td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FFF5D5] text-yellow-800 border border-yellow-100">
                                        Chờ xếp hàng
                                    </span>
</td>
<td className="py-3 px-4 text-gray-500 text-xs">
                                    1 giờ trước
                                </td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-[#ED1C24] transition-colors p-1">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-[#FFF5D5]/20 transition-colors duration-200">
<td className="py-3 px-4 text-center">
<label className="custom-checkbox cursor-pointer relative flex items-center justify-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border-2 border-gray-300 rounded transition-colors bg-white group-hover:border-[#ED1C24]">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<span className="font-medium text-[#A71916]">STM-2023-003</span>
</td>
<td className="py-3 px-4">
<div className="text-[#231F20] font-medium">VinFast Auto</div>
<div className="text-xs text-gray-400">Linh kiện</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-gray-600">
<span className="text-xs">Hải Phòng</span>
<i className="w-3 h-3 text-[#ED1C24]" data-lucide="arrow-right"></i>
<span className="text-xs">Chu Lai</span>
</div>
</td>
<td className="py-3 px-4 text-gray-600 text-sm">
                                    15C-567.89
                                </td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                        Hoàn thành
                                    </span>
</td>
<td className="py-3 px-4 text-gray-500 text-xs">
                                    Hôm qua
                                </td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-[#ED1C24] transition-colors p-1">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-[#FFF5D5]/20 transition-colors duration-200">
<td className="py-3 px-4 text-center">
<label className="custom-checkbox cursor-pointer relative flex items-center justify-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border-2 border-gray-300 rounded transition-colors bg-white group-hover:border-[#ED1C24]">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<span className="font-medium text-[#A71916]">STM-2023-004</span>
</td>
<td className="py-3 px-4">
<div className="text-[#231F20] font-medium">Logistics Partner Y</div>
<div className="text-xs text-gray-400">Hàng rời</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-gray-600">
<span className="text-xs">TP.HCM</span>
<i className="w-3 h-3 text-[#ED1C24]" data-lucide="arrow-right"></i>
<span className="text-xs">Đồng Nai</span>
</div>
</td>
<td className="py-3 px-4 text-gray-600 text-sm">
                                    51D-002.33
                                </td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                        Sự cố
                                    </span>
</td>
<td className="py-3 px-4 text-gray-500 text-xs">
                                    2 giờ trước
                                </td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-[#ED1C24] transition-colors p-1">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
<div className="text-xs text-gray-500">
                        Hiển thị <span className="font-medium text-[#231F20]">1</span> đến <span className="font-medium text-[#231F20]">4</span> của <span className="font-medium text-[#231F20]">128</span> kết quả
                    </div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 text-gray-600 disabled:opacity-50">Trước</button>
<button className="px-2 py-1 text-xs bg-[#ED1C24] text-white rounded shadow-sm">1</button>
<button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 text-gray-600">2</button>
<button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 text-gray-600">3</button>
<span className="text-gray-400 text-xs">...</span>
<button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 text-gray-600">Tiếp</button>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
