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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg">
<span className="iconify" data-icon="lucide:gem" data-strokeWidth="1.5"></span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tighter leading-none text-sm uppercase">Golden Gate</span>
<span className="text-slate-500 font-medium tracking-tight text-xs uppercase">Foods</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">Về chúng tôi</a>
<a className="hover:text-slate-900 transition-colors" href="#products">Sản phẩm</a>
<a className="hover:text-slate-900 transition-colors" href="#brands">Thương hiệu</a>
<a className="hover:text-slate-900 transition-colors" href="#news">Tin tức</a>
<a className="hover:text-slate-900 transition-colors" href="#buy">Mua hàng</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5"></span>
<span>VN/EN</span>
</button>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 text-white text-xs font-medium tracking-wide hover:bg-slate-800 transition-colors shadow-sm" href="#contact">
                    Liên hệ Hợp tác
                </a>

<button className="md:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Golden Gate Factory" className="w-full h-full object-cover opacity-[0.08] grayscale" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-xs font-medium mb-6 animate-fade-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Tiên phong kiến tạo giá trị ẩm thực
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto animate-fade-up" style={{animationDelay: '0.1s'}}>
                Chuẩn mực <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Quốc tế</span>.<br/>
                Hương vị <span className="italic font-serif text-slate-700">Việt Nam</span>.
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{animationDelay: '0.2s'}}>
                Golden Gate Foods - Thành viên Golden Gate Group. Đơn vị sản xuất và cung ứng thực phẩm hàng đầu, kết nối tinh hoa ẩm thực Việt với thị trường toàn cầu.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
<a className="h-12 px-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-200" href="#products">
                    Khám phá Sản phẩm
                </a>
<a className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center text-sm font-medium hover:bg-slate-50 transition-all group" href="#contact">
<span className="iconify mr-2 text-slate-400 group-hover:text-slate-900" data-icon="lucide:play-circle" data-strokeWidth="1.5"></span>
                    Xem Video Nhà máy
                </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group cursor-help" title="Food Safety System Certification">
<span className="iconify w-8 h-8 text-slate-800" data-icon="lucide:shield-check" data-strokeWidth="1.5"></span>
<span className="text-xs font-semibold tracking-widest text-slate-900">FSSC 22000</span>
</div>
<div className="flex items-center gap-2 group cursor-help" title="International Organization for Standardization">
<span className="iconify w-8 h-8 text-slate-800" data-icon="lucide:award" data-strokeWidth="1.5"></span>
<span className="text-xs font-semibold tracking-widest text-slate-900">ISO 22000:2018</span>
</div>
<div className="flex items-center gap-2 group cursor-help" title="Halal Certified">
<span className="iconify w-8 h-8 text-slate-800" data-icon="lucide:globe-2" data-strokeWidth="1.5"></span>
<span className="text-xs font-semibold tracking-widest text-slate-900">HALAL</span>
</div>
<div className="flex items-center gap-2 group cursor-help" title="FDA Approved">
<span className="iconify w-8 h-8 text-slate-800" data-icon="lucide:check-circle-2" data-strokeWidth="1.5"></span>
<span className="text-xs font-semibold tracking-widest text-slate-900">FDA</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
<img alt="Production Line" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
<p className="text-xs font-medium text-slate-900">Nhà máy Thạch Thất</p>
<p className="text-[10px] text-slate-500">Công suất lớn - Công nghệ hiện đại</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<span className="iconify w-6 h-6 text-orange-600 mb-3" data-icon="lucide:sprout" data-strokeWidth="1.5"></span>
<h4 className="text-sm font-medium text-slate-900 mb-1">Phát triển bền vững</h4>
<p className="text-xs text-slate-500 leading-relaxed">Cam kết ESG trong mọi quy trình sản xuất và vận hành.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<span className="iconify w-6 h-6 text-orange-600 mb-3" data-icon="lucide:microscope" data-strokeWidth="1.5"></span>
<h4 className="text-sm font-medium text-slate-900 mb-1">R&amp;D Chuyên sâu</h4>
<p className="text-xs text-slate-500 leading-relaxed">Đội ngũ chuyên gia hàng đầu phát triển sản phẩm mới.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-orange-600 font-medium text-xs tracking-wider uppercase mb-2 block">Về Golden Gate Foods</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Năng lực sản xuất<br/>đạt chuẩn Quốc tế</h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Thừa hưởng nền tảng vững chắc từ Golden Gate Group - tập đoàn ẩm thực số 1 Việt Nam. Golden Gate Foods sở hữu hệ thống 3 nhà máy quy mô tại An Khánh và Thạch Thất, cung cấp giải pháp thực phẩm toàn diện từ sơ chế đến đóng gói thành phẩm.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="iconify text-green-600 mt-1 flex-shrink-0" data-icon="lucide:check" data-strokeWidth="2"></span>
<span className="text-sm text-slate-600">Quy trình kiểm soát chất lượng nghiêm ngặt (QA/QC).</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-green-600 mt-1 flex-shrink-0" data-icon="lucide:check" data-strokeWidth="2"></span>
<span className="text-sm text-slate-600">Công nghệ cấp đông IQF và đóng gói Skinpack tiên tiến.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-green-600 mt-1 flex-shrink-0" data-icon="lucide:check" data-strokeWidth="2"></span>
<span className="text-sm text-slate-600">Cung ứng cho chuỗi 400+ nhà hàng và xuất khẩu.</span>
</li>
</ul>
<div className="flex gap-4">
<a className="text-sm font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 pb-0.5 transition-colors" href="https://ggg.com.vn" target="_blank">
                            Tìm hiểu về Tập đoàn (GGG) -&gt;
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-orange-600 font-medium text-xs tracking-wider uppercase mb-2 block">Sản phẩm &amp; Giải pháp</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Danh mục Sản phẩm</h2>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
<button className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-medium whitespace-nowrap">Tất cả</button>
<button className="px-4 py-2 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-100 whitespace-nowrap">Thịt &amp; Hải sản</button>
<button className="px-4 py-2 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-100 whitespace-nowrap">Sốt &amp; Gia vị</button>
<button className="px-4 py-2 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-100 whitespace-nowrap">Thực phẩm chế biến</button>
<button className="px-4 py-2 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-100 whitespace-nowrap">Dimsum &amp; Há cảo</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-100 overflow-hidden relative">
<img alt="Meat Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wider text-slate-900 uppercase">Xuất khẩu</div>
</div>
<div className="p-5">
<p className="text-xs text-slate-500 mb-1">Thịt &amp; Hải sản</p>
<h3 className="text-base font-medium text-slate-900 mb-2">Thịt Bò Mỹ Cắt Thái</h3>
<p className="text-xs text-slate-400 line-clamp-2 mb-4">Quy trình cắt thái tự động, đóng gói Skinpack đảm bảo độ tươi ngon.</p>
<a className="inline-flex items-center text-xs font-medium text-orange-600 hover:text-orange-700" href="#">
                            Xem chi tiết <span className="iconify ml-1" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-100 overflow-hidden relative">
<img alt="Sauce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5">
<p className="text-xs text-slate-500 mb-1">Gia vị &amp; Sốt</p>
<h3 className="text-base font-medium text-slate-900 mb-2">Sốt Lẩu Cốt Icook</h3>
<p className="text-xs text-slate-400 line-clamp-2 mb-4">Công thức độc quyền từ các thương hiệu lẩu nổi tiếng Kichi-Kichi, Manwah.</p>
<a className="inline-flex items-center text-xs font-medium text-orange-600 hover:text-orange-700" href="#">
                            Xem chi tiết <span className="iconify ml-1" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-100 overflow-hidden relative">
<img alt="Dimsum" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-5">
<p className="text-xs text-slate-500 mb-1">Dimsum</p>
<h3 className="text-base font-medium text-slate-900 mb-2">Há Cảo &amp; Mandu</h3>
<p className="text-xs text-slate-400 line-clamp-2 mb-4">Sản xuất trên dây chuyền tự động, vỏ mỏng nhân đầy, hương vị Á Đông.</p>
<a className="inline-flex items-center text-xs font-medium text-orange-600 hover:text-orange-700" href="#">
                            Xem chi tiết <span className="iconify ml-1" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</div>

<div className="group bg-slate-900 rounded-xl overflow-hidden flex flex-col justify-center items-center text-center p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
<div className="relative z-10">
<span className="iconify w-10 h-10 text-orange-400 mb-4 mx-auto" data-icon="lucide:file-text" data-strokeWidth="1.5"></span>
<h3 className="text-lg font-medium text-white mb-2">Catalogue &amp; Hồ sơ</h3>
<p className="text-xs text-slate-400 mb-6 px-4">Tải xuống hồ sơ năng lực và danh mục sản phẩm chi tiết.</p>
<button className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-xs font-medium hover:bg-slate-100 w-full transition-colors">
                            Tải tài liệu ngay
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-200" id="brands">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Thương hiệu Phân phối</h2>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center px-6">

<span className="text-2xl font-bold tracking-tight text-slate-400 font-serif">iCook</span>
<span className="text-2xl font-semibold tracking-tighter text-slate-400">UNICHEF</span>
<span className="text-2xl font-light tracking-wide text-slate-400 uppercase">Bellina</span>
<span className="text-2xl font-black tracking-tight text-slate-400">MISHENKA</span>
<span className="text-2xl font-medium tracking-tight text-slate-400 italic">PhoInn</span>
<span className="text-2xl font-bold tracking-tight text-slate-400">ĐỈNH ĐỈNH</span>

<span className="text-2xl font-bold tracking-tight text-slate-400 font-serif">iCook</span>
<span className="text-2xl font-semibold tracking-tighter text-slate-400">UNICHEF</span>
<span className="text-2xl font-light tracking-wide text-slate-400 uppercase">Bellina</span>
<span className="text-2xl font-black tracking-tight text-slate-400">MISHENKA</span>
<span className="text-2xl font-medium tracking-tight text-slate-400 italic">PhoInn</span>
<span className="text-2xl font-bold tracking-tight text-slate-400">ĐỈNH ĐỈNH</span>
</div>
</div>
<style>
            .animate-marquee {
                animation: marquee 25s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        </style>
</section>

<section className="py-24" id="news">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Tin tức &amp; Hoạt động</h2>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Xem tất cả -&gt;</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl bg-slate-100 overflow-hidden mb-4">
<img alt="Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2032&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
<span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">Doanh nghiệp</span>
<time>12 Tháng 5, 2024</time>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Golden Gate Foods mở rộng quy mô xuất khẩu sang thị trường Đông Á</h3>
<p className="text-sm text-slate-500 line-clamp-2">Ký kết hợp tác chiến lược với các đối tác bán lẻ hàng đầu tại Hàn Quốc và Nhật Bản.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl bg-slate-100 overflow-hidden mb-4">
<img alt="Product Launch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
<span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">Sản phẩm mới</span>
<time>28 Tháng 4, 2024</time>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Ra mắt dòng sản phẩm Ready-to-cook chuẩn vị nhà hàng</h3>
<p className="text-sm text-slate-500 line-clamp-2">Mang trải nghiệm ẩm thực 5 sao về gian bếp gia đình với dòng sản phẩm mới.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl bg-slate-100 overflow-hidden mb-4">
<img alt="CSR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
<span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">CSR</span>
<time>15 Tháng 4, 2024</time>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Hành trình Xanh: Cam kết giảm thiểu rác thải nhựa trong sản xuất</h3>
<p className="text-sm text-slate-500 line-clamp-2">Golden Gate Foods triển khai chiến dịch bao bì thân thiện với môi trường.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block border-l border-slate-200"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="mb-12">
<span className="text-orange-600 font-medium text-xs tracking-wider uppercase mb-2 block">Kênh Mua hàng</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Điểm bán &amp; Phân phối</h2>
<div className="space-y-6">

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:shopping-cart" data-strokeWidth="1.5"></span>
                                    Kênh Trực tuyến
                                </h4>
<div className="flex flex-wrap gap-3">
<a className="px-4 py-2 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all" href="#">Shopee Mall</a>
<a className="px-4 py-2 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all" href="#">Lazada</a>
<a className="px-4 py-2 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all" href="#">Zalo Shop</a>
</div>
</div>

<div className="p-6 bg-slate-900 rounded-xl text-white mt-8">
<h4 className="text-lg font-medium mb-2">Trở thành Nhà phân phối?</h4>
<p className="text-sm text-slate-400 mb-4">Kết nối qua Zalo OA để nhận chính sách đại lý và báo giá sỉ tốt nhất.</p>
<button className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5"></span>
                                    Chat Zalo OA
                                </button>
</div>

<div className="mt-10 pt-10 border-t border-slate-200">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Thông tin Công ty</h4>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 text-slate-400" data-icon="lucide:map-pin" data-strokeWidth="1.5"></span>
<span>KCN Thạch Thất - Quốc Oai, Xã Phùng Xá, Huyện Thạch Thất, Hà Nội</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-400" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
<span>1900 6622</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-400" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
<span>support@goldengatefoods.com</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="lg:pl-8">
<div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
<h3 className="text-2xl font-medium text-slate-900 mb-2">Liên hệ Hợp tác</h3>
<p className="text-sm text-slate-500 mb-8">Để lại thông tin, đội ngũ kinh doanh sẽ liên hệ trong vòng 24h.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Họ và tên</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:border-slate-500 focus:ring-0 text-sm outline-none transition-colors" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Tên doanh nghiệp</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:border-slate-500 focus:ring-0 text-sm outline-none transition-colors" placeholder="Công ty ABC" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Email công việc</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:border-slate-500 focus:ring-0 text-sm outline-none transition-colors" placeholder="example@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Số điện thoại</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:border-slate-500 focus:ring-0 text-sm outline-none transition-colors" placeholder="09xxxxxxx" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Mục đích liên hệ</label>
<div className="relative">
<select className="w-full h-10 px-3 rounded-md border border-slate-200 focus:border-slate-500 focus:ring-0 text-sm outline-none appearance-none bg-white text-slate-600 cursor-pointer">
<option>Đăng ký Nhà phân phối / Đại lý</option>
<option>Gia công sản xuất (OEM/ODM)</option>
<option>Mua hàng số lượng lớn (B2B)</option>
<option>Khác</option>
</select>
<span className="absolute right-3 top-3 pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Nội dung chi tiết</label>
<textarea className="w-full p-3 rounded-md border border-slate-200 focus:border-slate-500 focus:ring-0 text-sm outline-none transition-colors h-24 resize-none" placeholder="Vui lòng mô tả nhu cầu của quý đối tác..."></textarea>
</div>
<div className="flex items-center gap-2 pt-2">
<input className="custom-checkbox" id="consent" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="consent">Tôi đồng ý với chính sách bảo mật thông tin.</label>
</div>
<button className="w-full h-11 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl mt-2" type="submit">
                                Gửi yêu cầu
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded-md">
<span className="iconify" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Golden Gate Foods</span>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Trang chủ</a>
<a className="hover:text-slate-900 transition-colors" href="#">Về chúng tôi</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sản phẩm</a>
<a className="hover:text-slate-900 transition-colors" href="#">Tin tức</a>
<a className="hover:text-slate-900 transition-colors" href="#">Liên hệ</a>
</div>
<div className="text-[10px] text-slate-400">
                    © 2024 Golden Gate Foods. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
