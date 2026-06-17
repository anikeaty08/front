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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#000205]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-xl tracking-tighter font-medium" href="#">BMW</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#models">Các dòng xe</a>
<a className="hover:text-white transition-colors duration-300" href="#electric">Xe điện</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Mua trực tuyến</a>
<a className="hover:text-white transition-colors duration-300" href="#world">Thế giới BMW</a>
</div>
</div>
<div className="flex items-center gap-5">
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</button>
<button className="hidden sm:flex items-center gap-2 text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full text-xs font-medium transition-all border border-white/5">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
<span>Đăng nhập</span>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col justify-center overflow-hidden pt-16">

<div className="absolute inset-0 z-0">
<img alt="BMW i7" className="w-full h-full object-cover opacity-60 md:opacity-80 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#000205] via-[#000205]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#000205] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20 md:mt-0">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-medium mb-6 tracking-wide">THE NEW i7</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter font-medium mb-6 leading-[0.9]">
                    Tuyệt tác <br/> <span className="text-zinc-500">Công nghệ.</span>
</h1>
<p className="text-lg text-zinc-300 font-light mb-10 max-w-lg leading-relaxed">
                    Định nghĩa lại sự sang trọng với BMW i7 hoàn toàn mới. Kết hợp hiệu suất thuần điện mạnh mẽ và công nghệ tiên phong.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all active:scale-95">
                        Cấu hình ngay
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all active:scale-95">
                        Đăng ký lái thử
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 border-t border-white/5 bg-black/20 backdrop-blur-md hidden md:block">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex gap-12">
<div>
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Công suất</p>
<p className="text-white text-xl font-medium tracking-tight">544 hp</p>
</div>
<div>
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Tăng tốc (0-100km/h)</p>
<p className="text-white text-xl font-medium tracking-tight">4.7 s</p>
</div>
<div>
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Phạm vi hoạt động</p>
<p className="text-white text-xl font-medium tracking-tight">625 km</p>
</div>
</div>
<div className="flex items-center gap-2 text-blue-400 text-sm cursor-pointer hover:text-blue-300">
<span>Xem thông số kỹ thuật</span>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6" id="models">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-medium mb-4">Danh mục sản phẩm</h2>
<p className="text-zinc-500 max-w-md text-sm leading-relaxed">Khám phá các dòng xe BMW phù hợp với phong cách sống của bạn. Từ sedan sang trọng đến SAV năng động.</p>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer">
<div className="aspect-[4/3] overflow-hidden">
<img alt="BMW 3 Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl text-white font-medium tracking-tight">The 3 Series</h3>
<span className="text-blue-400 text-xs bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Sedan</span>
</div>
<p className="text-zinc-500 text-sm mb-6">Biểu tượng của niềm vui lái xe thể thao.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-zinc-400 text-xs">Từ 1.499.000.000 VNĐ</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer">
<div className="aspect-[4/3] overflow-hidden">
<img alt="BMW X5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl text-white font-medium tracking-tight">The X5</h3>
<span className="text-blue-400 text-xs bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">SAV</span>
</div>
<p className="text-zinc-500 text-sm mb-6">Thống lĩnh mọi địa hình với đẳng cấp vượt trội.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-zinc-400 text-xs">Từ 3.909.000.000 VNĐ</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer">
<div className="aspect-[4/3] overflow-hidden">
<img alt="BMW i4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl text-white font-medium tracking-tight">The i4</h3>
<span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Điện</span>
</div>
<p className="text-zinc-500 text-sm mb-6">Gran Coupé thuần điện đầu tiên.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-zinc-400 text-xs">Liên hệ báo giá</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-medium mb-4">Công nghệ Tiên phong</h2>
<p className="text-zinc-500 text-sm">Trải nghiệm lái xe của tương lai ngay hôm nay.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl relative overflow-hidden group border border-white/5 bg-[#0a0a0a]">
<img alt="Interior" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-12 h-12 rounded-full bg-blue-600/20 backdrop-blur-md flex items-center justify-center mb-4 border border-blue-500/30 text-blue-400">
<i className="w-6 h-6" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white font-medium mb-2 tracking-tight">Màn hình cong BMW</h3>
<p className="text-zinc-400 text-sm max-w-md">Tích hợp bảng đồng hồ kỹ thuật số và màn hình điều khiển trung tâm thành một khối hiển thị duy nhất.</p>
</div>
</div>

<div className="rounded-3xl relative overflow-hidden group border border-white/5 bg-[#0a0a0a]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-black"></div>
<div className="absolute inset-0 flex flex-col justify-between p-8">
<i className="w-8 h-8 text-white" data-lucide="zap" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg text-white font-medium mb-1 tracking-tight">BMW eDrive</h3>
<p className="text-zinc-500 text-xs">Công nghệ pin thế hệ thứ 5 cho hiệu suất tối đa.</p>
</div>
</div>
<div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-32 h-32 bg-blue-500/20 blur-[50px]"></div>
</div>

<div className="rounded-3xl relative overflow-hidden group border border-white/5 bg-[#0a0a0a]">
<img alt="Detail" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-lg text-white font-medium mb-1 tracking-tight">Trợ lý ảo thông minh</h3>
<p className="text-zinc-500 text-xs">Tương tác giọng nói tự nhiên và học hỏi thói quen.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl text-white tracking-tight font-medium mb-4">Đăng ký lái thử</h2>
<p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                            Để lại thông tin để được tư vấn viên BMW liên hệ và sắp xếp lịch lái thử dòng xe bạn yêu thích tại showroom gần nhất.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                                Tư vấn chuyên sâu 1-1
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                                Trải nghiệm cung đường thực tế
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                                Quà tặng độc quyền
                            </li>
</ul>
</div>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Họ và tên</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="Nhập họ tên của bạn" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Số điện thoại</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="090xxxxxxx" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 font-medium ml-1">Dòng xe quan tâm</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all cursor-pointer">
<option>BMW 3 Series</option>
<option>BMW 5 Series</option>
<option>BMW 7 Series / i7</option>
<option>BMW X3</option>
<option>BMW X5</option>
<option>BMW X7</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-lg mt-4 hover:bg-zinc-200 transition-colors active:scale-[0.99] text-sm flex justify-center items-center gap-2" type="submit">
                            Gửi đăng ký
                            <i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
</button>
<p className="text-[10px] text-zinc-600 text-center mt-4">
                            Bằng cách gửi form, bạn đồng ý với Chính sách bảo mật của BMW Vietnam.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#020203]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-tight">Sản phẩm</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">BMW i (Xe điện)</a></li>
<li><a className="hover:text-white transition-colors" href="#">BMW X (SUV)</a></li>
<li><a className="hover:text-white transition-colors" href="#">BMW M (Hiệu suất cao)</a></li>
<li><a className="hover:text-white transition-colors" href="#">BMW 7 Series</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-tight">Dịch vụ &amp; Phụ kiện</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Dịch vụ bảo dưỡng</a></li>
<li><a className="hover:text-white transition-colors" href="#">Phụ tùng chính hãng</a></li>
<li><a className="hover:text-white transition-colors" href="#">BMW Lifestyle Shop</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bảo hành</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-tight">Thế giới BMW</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Về chúng tôi</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tin tức &amp; Sự kiện</a></li>
<li><a className="hover:text-white transition-colors" href="#">Phát triển bền vững</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tuyển dụng</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-tight">Kết nối</h4>
<div className="flex gap-4 mb-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
</div>
<p className="text-xs text-zinc-600">Hotline: 1900 1101</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<div className="text-xl font-bold tracking-tighter text-white mb-4 md:mb-0">BMW</div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Bản quyền</a>
<a className="hover:text-zinc-400" href="#">Chính sách cookie</a>
<a className="hover:text-zinc-400" href="#">Điều khoản sử dụng</a>
</div>
<div className="text-xs text-zinc-700 mt-4 md:mt-0">
                    © 2023 BMW Vietnam. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
