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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#3d8b5d] flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-xl text-[#3d8b5d]">S&amp;C</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-[#111827]" href="#">Trang chủ</a>
<a className="text-sm font-medium text-[#4b5563] hover:text-[#3d8b5d] transition-colors" href="#">Khám phá</a>
<a className="text-sm font-medium text-[#4b5563] hover:text-[#3d8b5d] transition-colors" href="#">Cộng đồng</a>
<a className="text-sm font-medium text-[#4b5563] hover:text-[#3d8b5d] transition-colors" href="#">Tác động</a>
</div>

<div className="flex items-center space-x-4">
<button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-[#4b5563] hover:bg-gray-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</button>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#f0f7f4] text-[#3d8b5d] rounded-xl font-medium text-sm hover:bg-[#3d8b5d] hover:text-white transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                        Tặng đồ
                    </button>

<div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
</div>
</div>
</div>
</nav>

<section className="relative bg-gradient-to-b from-[#f0f7f4] to-[#f9fafb] pt-20 pb-28 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3d8b5d]/5 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#10b981]/5 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
<span className="flex w-2 h-2 rounded-full bg-[#10b981] animate-subtle-pulse"></span>
<span className="text-xs font-medium text-[#4b5563]">Hơn 500+ món đồ mới hôm nay</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111827] leading-tight mb-6">
                Cho Đi Là Hạnh Phúc <br/>
<span className="text-[#3d8b5d]">Tái Chế Là Tương Lai</span>
</h1>
<p className="text-base md:text-lg text-[#4b5563] mb-10 max-w-2xl mx-auto">
                Kết nối yêu thương qua những món đồ cũ. Tham gia cộng đồng sống xanh, giảm thiểu rác thải và trao cơ hội cho những người cần.
            </p>

<div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row items-center gap-2">
<div className="flex-1 flex items-center px-4 py-2 w-full">
<iconify-icon className="text-xl text-gray-400" icon="solar:magnifier-linear"></iconify-icon>
<input className="w-full ml-3 bg-transparent border-none outline-none text-base text-[#111827] placeholder-gray-400" placeholder="Bạn đang tìm kiếm gì?" type="text"/>
</div>
<div className="w-full sm:w-px sm:h-8 bg-gray-100"></div>
<div className="flex-1 flex items-center px-4 py-2 w-full cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
<iconify-icon className="text-xl text-[#3d8b5d]" icon="solar:map-point-linear"></iconify-icon>
<span className="ml-3 text-sm font-medium text-[#4b5563] whitespace-nowrap">Bán kính 5km</span>
<iconify-icon className="ml-auto text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-[#3d8b5d] text-white rounded-xl font-medium text-sm hover:bg-[#2e6e47] transition-colors shadow-sm">
                    Tìm kiếm
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center text-[#3d8b5d]">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-[#111827]">12,450</div>
<div className="text-sm text-[#4b5563]">Thành viên tích cực</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center text-[#3d8b5d]">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-[#111827]">45,802</div>
<div className="text-sm text-[#4b5563]">Món đồ đã trao tặng</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center text-[#3d8b5d]">
<iconify-icon className="text-2xl" icon="solar:cloud-water-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-[#10b981]">12.5 Tấn</div>
<div className="text-sm text-[#4b5563]">CO2 được tiết kiệm</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-[#111827] mb-2">Khám phá danh mục</h2>
<p className="text-sm text-[#4b5563]">Tìm kiếm đồ dùng bạn cần theo phân loại</p>
</div>
<a className="text-sm font-medium text-[#3d8b5d] hover:text-[#2e6e47] hidden sm:block" href="#">Xem tất cả</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<a className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#3d8b5d]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center" href="#">
<div className="w-14 h-14 rounded-full bg-[#f0f7f4] group-hover:bg-[#3d8b5d] flex items-center justify-center text-[#3d8b5d] group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon className="text-2xl" icon="solar:hanger-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#111827]">Quần áo</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#3d8b5d]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center" href="#">
<div className="w-14 h-14 rounded-full bg-[#f0f7f4] group-hover:bg-[#3d8b5d] flex items-center justify-center text-[#3d8b5d] group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon className="text-2xl" icon="solar:book-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#111827]">Sách vở</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#3d8b5d]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center" href="#">
<div className="w-14 h-14 rounded-full bg-[#f0f7f4] group-hover:bg-[#3d8b5d] flex items-center justify-center text-[#3d8b5d] group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon className="text-2xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#111827]">Nội thất</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#3d8b5d]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center" href="#">
<div className="w-14 h-14 rounded-full bg-[#f0f7f4] group-hover:bg-[#3d8b5d] flex items-center justify-center text-[#3d8b5d] group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon className="text-2xl" icon="solar:devices-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#111827]">Điện tử</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#3d8b5d]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center" href="#">
<div className="w-14 h-14 rounded-full bg-[#f0f7f4] group-hover:bg-[#3d8b5d] flex items-center justify-center text-[#3d8b5d] group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon className="text-2xl" icon="solar:cup-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#111827]">Gia dụng</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#3d8b5d]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center" href="#">
<div className="w-14 h-14 rounded-full bg-[#f0f7f4] group-hover:bg-[#3d8b5d] flex items-center justify-center text-[#3d8b5d] group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon className="text-2xl" icon="solar:widget-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#111827]">Khác</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-[#111827] mb-2">Đồ đang tặng quanh bạn</h2>
<p className="text-sm text-[#4b5563]">Những món đồ mới nhất được chia sẻ trong bán kính 10km</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#111827] hover:border-gray-300 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#111827] border-gray-300 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col">
<div className="relative h-48 bg-gray-100 overflow-hidden">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#3d8b5d] text-xs font-semibold rounded-full shadow-sm">Mới 90%</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-[#ef4444] transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-[#4b5563] flex items-center gap-1">
<iconify-icon className="text-[#3d8b5d]" icon="solar:map-point-linear"></iconify-icon>
                            Cách 2.5km
                        </span>
<span className="text-xs text-gray-400">10 phút trước</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111827] mb-1 line-clamp-1">Sách tiểu thuyết văn học</h3>
<p className="text-sm text-[#4b5563] line-clamp-2 mb-4 flex-1">Mình có vài cuốn sách đọc xong muốn tặng lại cho bạn nào thích đọc văn học nước ngoài.</p>
<div className="flex items-center gap-2 mb-4 pt-4 border-t border-gray-50">
<div className="relative w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</div>
<span className="text-xs font-medium text-[#111827]">Minh Tuấn</span>
<iconify-icon className="text-[#10b981] text-sm" icon="solar:verified-check-circle-linear" title="Người dùng xác thực"></iconify-icon>
</div>
<button className="w-full py-2.5 rounded-xl border border-[#3d8b5d] text-[#3d8b5d] text-sm font-medium hover:bg-[#3d8b5d] hover:text-white transition-colors duration-300">
                        Xin nhận món này
                    </button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col">
<div className="relative h-48 bg-gray-100 overflow-hidden">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#f59e0b] text-xs font-semibold rounded-full shadow-sm">Đã qua sử dụng</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-[#4b5563] flex items-center gap-1">
<iconify-icon className="text-[#3d8b5d]" icon="solar:map-point-linear"></iconify-icon>
                            Cách 4km
                        </span>
<span className="text-xs text-gray-400">1 giờ trước</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111827] mb-1 line-clamp-1">Lò vi sóng mini Sharp</h3>
<p className="text-sm text-[#4b5563] line-clamp-2 mb-4 flex-1">Đổi nhà nên mình pass lại lò vi sóng, vẫn xài tốt nhưng hơi cũ bên ngoài.</p>
<div className="flex items-center gap-2 mb-4 pt-4 border-t border-gray-50">
<div className="relative w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
</div>
<span className="text-xs font-medium text-[#111827]">Hải Yến</span>
</div>
<button className="w-full py-2.5 rounded-xl border border-[#3d8b5d] text-[#3d8b5d] text-sm font-medium hover:bg-[#3d8b5d] hover:text-white transition-colors duration-300">
                        Xin nhận món này
                    </button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col">
<div className="relative h-48 bg-gray-100 overflow-hidden">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#3d8b5d] text-xs font-semibold rounded-full shadow-sm">Như mới</span>
</div>

<div className="absolute bottom-3 right-3 px-2 py-1 bg-gray-900/70 backdrop-blur-sm rounded-lg flex items-center gap-1">
<iconify-icon className="text-white text-xs" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-[10px] text-white font-medium">3 người đang xin</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-[#4b5563] flex items-center gap-1">
<iconify-icon className="text-[#3d8b5d]" icon="solar:map-point-linear"></iconify-icon>
                            Cách 1.2km
                        </span>
<span className="text-xs text-gray-400">Hôm qua</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111827] mb-1 line-clamp-1">Áo khoác len mùa đông</h3>
<p className="text-sm text-[#4b5563] line-clamp-2 mb-4 flex-1">Áo len dày dặn, mặc được 1-2 lần. Phù hợp cho bạn nữ 45-50kg nhé.</p>
<div className="flex items-center gap-2 mb-4 pt-4 border-t border-gray-50">
<div className="relative w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=5"/>
</div>
<span className="text-xs font-medium text-[#111827]">Lan Anh</span>
<iconify-icon className="text-[#10b981] text-sm" icon="solar:verified-check-circle-linear"></iconify-icon>
</div>
<button className="w-full py-2.5 rounded-xl bg-[#f0f7f4] text-[#3d8b5d] text-sm font-medium hover:bg-[#e0efe8] transition-colors duration-300">
                        Tham gia hàng đợi
                    </button>
</div>
</div>

<div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:bg-white hover:border-[#3d8b5d]/30 transition-all duration-300 cursor-pointer min-h-[350px]">
<div className="w-16 h-16 rounded-full bg-[#f0f7f4] flex items-center justify-center text-[#3d8b5d] mb-4">
<iconify-icon className="text-3xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111827] mb-2">Bạn có đồ không dùng?</h3>
<p className="text-sm text-[#4b5563] mb-6">Đăng tin ngay để trao cơ hội cho những người đang cần.</p>
<button className="px-5 py-2.5 bg-[#3d8b5d] text-white rounded-xl text-sm font-medium hover:bg-[#2e6e47] transition-colors shadow-sm w-full">
                    Đăng tin tặng đồ
                </button>
</div>
</div>
</section>

<section className="bg-white border-y border-gray-100 py-20 mt-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="w-full md:w-1/2">
<div className="relative bg-[#f0f7f4] rounded-3xl p-8 overflow-hidden">
<div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
<iconify-icon className="text-[200px] text-[#3d8b5d]" icon="solar:leaf-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#111827] mb-4">Tác động của bạn <br/> tạo nên sự khác biệt</h2>
<p className="text-sm text-[#4b5563] mb-8 max-w-md">Mỗi món đồ được trao đi không chỉ là hành động sẻ chia mà còn góp phần giảm thiểu rác thải, bảo vệ môi trường chung.</p>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-[#111827]">Mục tiêu trồng cây tháng này</span>
<span className="text-[#3d8b5d]">75%</span>
</div>
<div className="w-full bg-white rounded-full h-2">
<div className="bg-[#3d8b5d] h-2 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-[#111827]">Lượng quần áo tái sử dụng</span>
<span className="text-[#10b981]">1,200 kg</span>
</div>
<div className="w-full bg-white rounded-full h-2">
<div className="bg-[#10b981] h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2">
<h3 className="text-xl font-semibold tracking-tight text-[#111827] mb-6 flex items-center gap-2">
<iconify-icon className="text-[#f59e0b] text-2xl" icon="solar:cup-star-linear"></iconify-icon>
                        Đại sứ Sống Xanh (Tháng 10)
                    </h3>
<div className="space-y-3">

<div className="flex items-center p-3 rounded-2xl hover:bg-[#f9fafb] border border-transparent hover:border-gray-100 transition-colors">
<div className="w-8 text-center font-semibold text-[#f59e0b]">#1</div>
<div className="w-10 h-10 rounded-full bg-gray-200 ml-2 overflow-hidden border border-gray-100">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-[#111827]">Trần Đại</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#f0f7f4] text-[#3d8b5d] border border-[#3d8b5d]/20">Cây Cổ Thụ</span>
</div>
<span className="text-xs text-[#4b5563]">Đã tặng 45 món đồ</span>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-[#3d8b5d]">240đ</div>
<div className="text-[10px] text-gray-400">Tích lũy</div>
</div>
</div>

<div className="flex items-center p-3 rounded-2xl hover:bg-[#f9fafb] border border-transparent hover:border-gray-100 transition-colors">
<div className="w-8 text-center font-semibold text-gray-400">#2</div>
<div className="w-10 h-10 rounded-full bg-gray-200 ml-2 overflow-hidden border border-gray-100">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-[#111827]">Ngọc Trâm</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#f0f7f4] text-[#3d8b5d] border border-[#3d8b5d]/20">Tán Lá Xanh</span>
</div>
<span className="text-xs text-[#4b5563]">Đã tặng 32 món đồ</span>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-[#3d8b5d]">185đ</div>
</div>
</div>

<div className="flex items-center p-3 rounded-2xl hover:bg-[#f9fafb] border border-transparent hover:border-gray-100 transition-colors">
<div className="w-8 text-center font-semibold text-[#b45309]">#3</div>
<div className="w-10 h-10 rounded-full bg-gray-200 ml-2 overflow-hidden border border-gray-100">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-[#111827]">Đức Phúc</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#f9fafb] text-gray-600 border border-gray-200">Mầm Xanh</span>
</div>
<span className="text-xs text-[#4b5563]">Đã tặng 28 món đồ</span>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-[#3d8b5d]">120đ</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-[#3d8b5d] flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg text-[#3d8b5d]">S&amp;C</span>
</div>
<p className="text-xs text-[#4b5563]">
                © 2023 Share &amp; Care. Vì một cộng đồng bền vững.
            </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#3d8b5d] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#3d8b5d] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:info-circle-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
