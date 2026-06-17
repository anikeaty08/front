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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
navy: '#0F172A',   // Slate-900
orange: '#F97316', // Orange-500
red: '#DC2626',    // Red-600
},
text: {
primary: '#1E293B',   // Slate-800
secondary: '#64748B', // Slate-500
},
bg: {
page: '#F1F5F9', // Slate-100
card: '#FFFFFF',
},
border: {
divider: '#E2E8F0', // Slate-200
}
},
fontFamily: {
sans: ['Roboto', 'sans-serif'],
condensed: ['Roboto Condensed', 'sans-serif'],
},
screens: {
'lg': '1024px',
'xl': '1140px', // Custom breakpoint for container
},
maxWidth: {
'container': '1140px',
},
boxShadow: {
'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
}
}
}
}



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Simple View Switcher (SPA simulation)
        function switchView(viewName) {
            const homeView = document.getElementById('view-home');
            const articleView = document.getElementById('view-article');
            
            // Scroll to top
            window.scrollTo({top: 0, behavior: 'smooth'});

            if (viewName === 'home') {
                homeView.classList.remove('hidden');
                articleView.classList.add('hidden');
            } else if (viewName === 'article') {
                homeView.classList.add('hidden');
                articleView.classList.remove('hidden');
            }
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
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
      



<header className="bg-brand-navy w-full text-white z-50 sticky top-0 shadow-md">

<div className="hidden md:block border-b border-slate-700/50">
<div className="max-w-container mx-auto px-4 h-8 flex items-center justify-between text-xs text-slate-400">
<div className="flex items-center gap-4">
<span>Thứ Tư, 24/05/2024</span>
<span className="text-brand-orange hover:text-white cursor-pointer transition-colors">RSS</span>
<span className="hover:text-white cursor-pointer transition-colors">Liên hệ</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-white transition-colors" href="#">Đăng nhập</a>
<span className="w-px h-3 bg-slate-600"></span>
<a className="hover:text-white transition-colors" href="#">Đăng ký</a>
</div>
</div>
</div>

<div className="max-w-container mx-auto px-4 h-[60px] flex items-center justify-between">

<div className="flex items-center gap-8 h-full">

<a className="flex items-center gap-1 group" href="#" onclick="switchView('home')">
<div className="font-condensed font-bold text-3xl tracking-tight">
<span className="text-brand-orange">7</span><span className="text-white">BONG</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-1 h-full">
<a className="nav-link h-full flex items-center px-3 text-[14px] font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-colors" href="#" onclick="switchView('home')">Trang chủ</a>
<a className="nav-link h-full flex items-center px-3 text-[14px] font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-colors" href="#">Tỷ lệ kèo</a>
<a className="nav-link h-full flex items-center px-3 text-[14px] font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-colors" href="#">Lịch thi đấu</a>
<a className="nav-link h-full flex items-center px-3 text-[14px] font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-colors" href="#">Ngoại Hạng Anh</a>
<a className="nav-link h-full flex items-center px-3 text-[14px] font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-colors" href="#">Champions League</a>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex relative">
<input className="bg-slate-800 text-sm text-white px-3 py-1.5 rounded w-48 border border-slate-700 focus:outline-none focus:border-brand-orange transition-colors placeholder:text-slate-500" placeholder="Tìm kiếm..." type="text"/>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<button className="lg:hidden text-white text-2xl" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-brand-navy border-t border-slate-700 px-4 py-4 space-y-3" id="mobile-menu">
<a className="block text-sm font-bold uppercase text-white hover:text-brand-orange" href="#" onclick="switchView('home')">Trang chủ</a>
<a className="block text-sm font-bold uppercase text-slate-300 hover:text-brand-orange" href="#">Tỷ lệ kèo</a>
<a className="block text-sm font-bold uppercase text-slate-300 hover:text-brand-orange" href="#">Lịch thi đấu</a>
<a className="block text-sm font-bold uppercase text-slate-300 hover:text-brand-orange" href="#">Tin bóng đá</a>
</div>
</header>



<main className="flex-grow max-w-container mx-auto w-full px-4 lg:px-0 py-6">

<section className="mb-6 bg-white rounded-sm shadow-sm border border-border-divider p-1">
<div className="flex items-center gap-2 overflow-x-auto custom-scrollbar p-2">
<div className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-brand-red/10 text-brand-red rounded text-xs font-bold uppercase whitespace-nowrap">
<span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span> Live
                </div>

<div className="flex-shrink-0 min-w-[200px] border-r border-slate-100 px-4 flex flex-col justify-center gap-1 cursor-pointer hover:bg-slate-50 rounded transition-colors group">
<div className="flex justify-between items-center text-[11px] text-text-secondary">
<span>Premier League</span>
<span className="text-brand-red font-bold">72'</span>
</div>
<div className="flex justify-between items-center font-medium text-sm">
<span className="group-hover:text-brand-orange transition-colors">Man Utd</span>
<span className="font-bold">2 - 1</span>
<span className="group-hover:text-brand-orange transition-colors">Chelsea</span>
</div>
</div>

<div className="flex-shrink-0 min-w-[200px] border-r border-slate-100 px-4 flex flex-col justify-center gap-1 cursor-pointer hover:bg-slate-50 rounded transition-colors group">
<div className="flex justify-between items-center text-[11px] text-text-secondary">
<span>La Liga</span>
<span className="text-slate-500">HT</span>
</div>
<div className="flex justify-between items-center font-medium text-sm">
<span className="group-hover:text-brand-orange transition-colors">Real Madrid</span>
<span className="font-bold">0 - 0</span>
<span className="group-hover:text-brand-orange transition-colors">Barca</span>
</div>
</div>

<div className="flex-shrink-0 min-w-[200px] border-r border-slate-100 px-4 flex flex-col justify-center gap-1 cursor-pointer hover:bg-slate-50 rounded transition-colors group">
<div className="flex justify-between items-center text-[11px] text-text-secondary">
<span>Serie A</span>
<span className="text-slate-500">20:45</span>
</div>
<div className="flex justify-between items-center font-medium text-sm">
<span className="group-hover:text-brand-orange transition-colors">Juventus</span>
<span className="font-bold">vs</span>
<span className="group-hover:text-brand-orange transition-colors">Milan</span>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-9 space-y-6">

<div className="space-y-6 block" id="view-home">

<div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 h-auto md:h-[380px]">

<article className="relative md:col-span-2 group cursor-pointer overflow-hidden rounded-[2px]" onclick="switchView('article')">
<img alt="Main News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="bg-brand-red text-white text-[11px] font-bold px-2 py-1 rounded uppercase mb-2 inline-block">Tin Nóng</span>
<h1 className="text-white text-2xl md:text-[28px] font-bold leading-snug group-hover:text-brand-orange transition-colors">
                                    Ten Hag nổi giận sau thất bại tại Anfield: "Chúng ta thiếu bản lĩnh của nhà vô địch"
                                </h1>
<div className="flex items-center gap-3 mt-2 text-slate-300 text-[13px]">
<span>2 giờ trước</span>
<span>•</span>
<span>Bóng đá Anh</span>
</div>
</div>
</article>
</div>

<div className="bg-bg-card rounded-[2px] shadow-sm border border-border-divider p-4 md:p-6">
<div className="flex items-center justify-between border-b-2 border-slate-100 mb-6 pb-2">
<h2 className="text-[20px] font-bold text-brand-navy uppercase border-b-4 border-brand-orange -mb-3 pb-2 inline-block">Tin Mới Nhất</h2>
</div>
<div className="flex flex-col divide-y divide-border-divider">

<article className="flex gap-4 py-4 group cursor-pointer hover:bg-slate-50 transition-colors -mx-4 px-4" onclick="switchView('article')">
<div className="w-[120px] md:w-[220px] h-[80px] md:h-[135px] flex-shrink-0 overflow-hidden rounded-[2px] relative">
<img alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
</div>
<div className="flex flex-col justify-start">
<h3 className="text-[16px] md:text-[18px] font-bold text-text-primary leading-snug mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                                        Chuyển nhượng 24/5: Mbappe chốt tương lai, Real Madrid kích nổ bom tấn 100 triệu euro?
                                    </h3>
<p className="hidden md:block text-[14px] text-text-secondary leading-relaxed mb-2 line-clamp-2">
                                        Thông tin chuyển nhượng mới nhất ngày 24/5. Tương lai của Kylian Mbappe dần sáng tỏ khi PSG đưa ra lời đề nghị cuối cùng.
                                    </p>
<div className="mt-auto flex items-center gap-3 text-[12px] md:text-[13px] text-text-secondary">
<span className="font-bold text-brand-orange uppercase">Chuyển nhượng</span>
<span>•</span>
<span>30 phút trước</span>
</div>
</div>
</article>

<article className="flex gap-4 py-4 group cursor-pointer hover:bg-slate-50 transition-colors -mx-4 px-4" onclick="switchView('article')">
<div className="w-[120px] md:w-[220px] h-[80px] md:h-[135px] flex-shrink-0 overflow-hidden rounded-[2px] relative">
<img alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-start">
<h3 className="text-[16px] md:text-[18px] font-bold text-text-primary leading-snug mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                                        Nhận định Man City vs Arsenal (02h00, 27/5): Chung kết sớm của mùa giải
                                    </h3>
<p className="hidden md:block text-[14px] text-text-secondary leading-relaxed mb-2 line-clamp-2">
                                        Phân tích chuyên sâu, đội hình dự kiến và dự đoán tỷ số trận đại chiến giữa Man City và Arsenal tại Etihad.
                                    </p>
<div className="mt-auto flex items-center gap-3 text-[12px] md:text-[13px] text-text-secondary">
<span className="font-bold text-brand-orange uppercase">Nhận định</span>
<span>•</span>
<span>1 giờ trước</span>
</div>
</div>
</article>

<article className="flex gap-4 py-4 group cursor-pointer hover:bg-slate-50 transition-colors -mx-4 px-4" onclick="switchView('article')">
<div className="w-[120px] md:w-[220px] h-[80px] md:h-[135px] flex-shrink-0 overflow-hidden rounded-[2px] relative">
<img alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-start">
<h3 className="text-[16px] md:text-[18px] font-bold text-text-primary leading-snug mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                                        BXH FIFA tháng 5/2024: Tuyển Việt Nam tăng bậc, Thái Lan dậm chân tại chỗ
                                    </h3>
<p className="hidden md:block text-[14px] text-text-secondary leading-relaxed mb-2 line-clamp-2">
                                        Cập nhật bảng xếp hạng FIFA mới nhất. Đội tuyển Việt Nam có sự thăng tiến nhẹ sau loạt trận giao hữu quốc tế.
                                    </p>
<div className="mt-auto flex items-center gap-3 text-[12px] md:text-[13px] text-text-secondary">
<span className="font-bold text-brand-orange uppercase">Bóng đá Việt Nam</span>
<span>•</span>
<span>4 giờ trước</span>
</div>
</div>
</article>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex justify-center">
<button className="px-6 py-2 bg-slate-100 text-text-secondary font-bold text-sm rounded hover:bg-brand-orange hover:text-white transition-colors">Xem thêm tin khác</button>
</div>
</div>
</div>

<div className="hidden bg-bg-card p-6 md:p-8 rounded-[2px] shadow-sm border border-border-divider" id="view-article">

<div className="flex items-center gap-2 text-[12px] text-text-secondary mb-4 uppercase font-bold">
<a className="hover:text-brand-orange" href="#" onclick="switchView('home')">Trang chủ</a>
<span>/</span>
<a className="hover:text-brand-orange" href="#">Bóng đá Anh</a>
<span>/</span>
<span className="text-text-primary">Chi tiết</span>
</div>

<h1 className="text-[28px] md:text-[34px] font-bold text-text-primary leading-tight mb-4">
                        Ten Hag nổi giận sau thất bại tại Anfield: "Chúng ta thiếu bản lĩnh của nhà vô địch"
                    </h1>

<div className="flex items-center gap-4 text-[13px] text-text-secondary mb-6 border-b border-border-divider pb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear"></iconify-icon> Minh Anh</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 24/05/2024</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-square-linear"></iconify-icon> 12 Bình luận</span>
</div>

<p className="text-[16px] font-bold text-text-primary leading-relaxed mb-6">
                        Huấn luyện viên Erik ten Hag không giấu được sự thất vọng sau màn trình diễn tệ hại của các học trò trong trận Derby nước Anh diễn ra vào tối qua.
                    </p>

<figure className="mb-6">
<img alt="Ten Hag" className="w-full h-auto rounded-[2px] mb-2" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="text-[12px] text-text-secondary italic text-center bg-slate-50 py-2">HLV Ten Hag chỉ đạo bên đường biên.</figcaption>
</figure>

<div className="prose max-w-none text-[16px] text-text-primary leading-7 space-y-4">
<p>
                            Phát biểu trong buổi họp báo sau trận đấu, chiến lược gia người Hà Lan thừa nhận Manchester United đã "vỡ vụn" trước sức ép từ phía Liverpool. Tỷ số 0-3 không chỉ là một thất bại về mặt điểm số, mà còn là đòn giáng mạnh vào tham vọng top 4 của Quỷ đỏ.
                        </p>
<p>
                            "Chúng tôi đã không chơi bóng như một tập thể. Trong hiệp một, mọi thứ vẫn trong tầm kiểm soát, nhưng bàn thua ngay đầu hiệp hai đã thay đổi tất cả. Các cầu thủ đánh mất sự tập trung và kỷ luật chiến thuật," Ten Hag chia sẻ với Sky Sports.
                        </p>
<h2 className="text-[20px] font-bold text-brand-navy mt-6 mb-2">Cần những thay đổi mạnh mẽ</h2>
<p>
                            Khi được hỏi về kế hoạch sắp tới, Ten Hag nhấn mạnh: "Chúng ta cần nhìn thẳng vào sự thật. Đội bóng thiếu bản lĩnh ở những thời điểm quyết định. Tôi sẽ có những buổi làm việc nghiêm túc với từng cá nhân. Không ai được phép đứng trên tập thể."
                        </p>
<p>
                            Trận thua này khiến MU tụt xuống vị trí thứ 6 trên bảng xếp hạng, kém nhóm dự Champions League 5 điểm.
                        </p>
</div>

<div className="mt-8 flex flex-wrap gap-2">
<a className="bg-slate-100 text-[12px] font-bold text-text-secondary px-3 py-1 rounded hover:bg-brand-orange hover:text-white transition-colors" href="#">MAN UTD</a>
<a className="bg-slate-100 text-[12px] font-bold text-text-secondary px-3 py-1 rounded hover:bg-brand-orange hover:text-white transition-colors" href="#">TEN HAG</a>
<a className="bg-slate-100 text-[12px] font-bold text-text-secondary px-3 py-1 rounded hover:bg-brand-orange hover:text-white transition-colors" href="#">PREMIER LEAGUE</a>
</div>
</div>
</div>

<aside className="lg:col-span-3">
<div className="sticky top-24 space-y-6">

<div className="bg-white rounded-[2px] shadow-sm border border-border-divider overflow-hidden">
<div className="bg-brand-navy px-4 py-2 flex justify-between items-center">
<h3 className="widget-title text-white font-bold text-[14px] uppercase">Kèo HOT Hôm Nay</h3>
<iconify-icon className="text-brand-orange" icon="solar:fire-linear"></iconify-icon>
</div>
<div className="p-0">

<div className="border-b border-slate-100 p-3">
<div className="flex justify-between text-[11px] text-text-secondary mb-2 font-bold uppercase">
<span>Ngoại Hạng Anh</span>
<span>22:00</span>
</div>
<div className="flex justify-between items-center mb-2 text-sm font-bold text-text-primary">
<span>Man City</span>
<span className="text-xs font-normal text-slate-400">vs</span>
<span>Arsenal</span>
</div>
<div className="grid grid-cols-3 gap-1">
<button className="bg-slate-50 border border-slate-200 py-1 text-xs rounded hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
<div className="text-[10px] opacity-70">1</div>
<div className="font-bold">1.85</div>
</button>
<button className="bg-slate-50 border border-slate-200 py-1 text-xs rounded hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
<div className="text-[10px] opacity-70">X</div>
<div className="font-bold">3.40</div>
</button>
<button className="bg-slate-50 border border-slate-200 py-1 text-xs rounded hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
<div className="text-[10px] opacity-70">2</div>
<div className="font-bold">4.10</div>
</button>
</div>
</div>

<div className="p-3">
<div className="flex justify-between text-[11px] text-text-secondary mb-2 font-bold uppercase">
<span>La Liga</span>
<span>02:00</span>
</div>
<div className="flex justify-between items-center mb-2 text-sm font-bold text-text-primary">
<span>Sevilla</span>
<span className="text-xs font-normal text-slate-400">vs</span>
<span>Betis</span>
</div>
<div className="grid grid-cols-3 gap-1">
<button className="bg-slate-50 border border-slate-200 py-1 text-xs rounded hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
<div className="text-[10px] opacity-70">1</div>
<div className="font-bold">2.10</div>
</button>
<button className="bg-slate-50 border border-slate-200 py-1 text-xs rounded hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
<div className="text-[10px] opacity-70">X</div>
<div className="font-bold">3.10</div>
</button>
<button className="bg-slate-50 border border-slate-200 py-1 text-xs rounded hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
<div className="text-[10px] opacity-70">2</div>
<div className="font-bold">3.50</div>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2px] shadow-sm border border-border-divider overflow-hidden">
<div className="bg-brand-navy px-4 py-2 flex justify-between items-center">
<h3 className="widget-title text-white font-bold text-[14px] uppercase">BXH Premier League</h3>
<iconify-icon className="text-white opacity-50" icon="solar:cup-star-linear"></iconify-icon>
</div>
<table className="w-full text-sm text-left">
<thead className="text-[11px] text-text-secondary uppercase bg-slate-50 border-b border-slate-100">
<tr>
<th className="pl-3 py-2 w-8">#</th>
<th className="py-2">CLB</th>
<th className="pr-3 py-2 text-right">Đ</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50 text-[13px]">
<tr className="hover:bg-slate-50">
<td className="pl-3 py-2 font-bold text-brand-navy">1</td>
<td className="py-2 font-medium">Man City</td>
<td className="pr-3 py-2 text-right font-bold">88</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="pl-3 py-2 font-bold text-brand-navy">2</td>
<td className="py-2 font-medium">Arsenal</td>
<td className="pr-3 py-2 text-right font-bold">86</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="pl-3 py-2 font-bold text-brand-navy">3</td>
<td className="py-2 font-medium">Liverpool</td>
<td className="pr-3 py-2 text-right font-bold">79</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="pl-3 py-2 font-bold text-slate-500">4</td>
<td className="py-2 font-medium">Aston Villa</td>
<td className="pr-3 py-2 text-right font-bold">68</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="pl-3 py-2 font-bold text-slate-500">5</td>
<td className="py-2 font-medium">Tottenham</td>
<td className="pr-3 py-2 text-right font-bold">66</td>
</tr>
</tbody>
</table>
<a className="block text-center py-2 text-xs font-bold text-brand-orange bg-slate-50 hover:bg-slate-100 border-t border-slate-100" href="#">Xem đầy đủ</a>
</div>

<div className="bg-white rounded-[2px] shadow-sm border border-border-divider overflow-hidden">
<div className="bg-brand-navy px-4 py-2">
<h3 className="widget-title text-white font-bold text-[14px] uppercase">Đọc Nhiều</h3>
</div>
<ul className="divide-y divide-slate-100">
<li className="p-3 hover:bg-slate-50 group cursor-pointer flex gap-3">
<span className="text-2xl font-bold text-slate-200 group-hover:text-brand-orange/50">1</span>
<h4 className="text-[14px] font-medium text-text-primary leading-snug group-hover:text-brand-orange">
                                    Kết quả bốc thăm C1: PSG rơi vào bảng tử thần
                                </h4>
</li>
<li className="p-3 hover:bg-slate-50 group cursor-pointer flex gap-3">
<span className="text-2xl font-bold text-slate-200 group-hover:text-brand-orange/50">2</span>
<h4 className="text-[14px] font-medium text-text-primary leading-snug group-hover:text-brand-orange">
                                    Ronaldo lập hat-trick, Al Nassr thắng hủy diệt
                                </h4>
</li>
<li className="p-3 hover:bg-slate-50 group cursor-pointer flex gap-3">
<span className="text-2xl font-bold text-slate-200 group-hover:text-brand-orange/50">3</span>
<h4 className="text-[14px] font-medium text-text-primary leading-snug group-hover:text-brand-orange">
                                    Lịch thi đấu Euro 2024: Khai mạc tại Munich
                                </h4>
</li>
</ul>
</div>
</div>
</aside>
</div>
</main>



<footer className="bg-brand-navy text-slate-400 text-sm mt-auto border-t-4 border-brand-orange">
<div className="max-w-container mx-auto px-4 py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div>
<div className="font-condensed font-bold text-2xl tracking-tight text-white mb-4">
<span className="text-brand-orange">7</span>BONG
                    </div>
<p className="leading-relaxed mb-4 text-[13px]">
                        Hệ thống dữ liệu bóng đá, tỷ số trực tuyến và phân tích chuyên sâu hàng đầu Việt Nam. Cập nhật liên tục 24/7.
                    </p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-youtube-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-telegram-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-bold uppercase mb-4 text-[14px]">Giải Đấu</h4>
<ul className="space-y-2 text-[13px]">
<li><a className="hover:text-brand-orange transition-colors" href="#">Premier League</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">La Liga</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Serie A</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Bundesliga</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">V-League</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold uppercase mb-4 text-[14px]">Tiện Ích</h4>
<ul className="space-y-2 text-[13px]">
<li><a className="hover:text-brand-orange transition-colors" href="#">Livescore</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Lịch thi đấu</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Bảng xếp hạng</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Top ghi bàn</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Soi kèo nhà cái</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold uppercase mb-4 text-[14px]">Liên Hệ</h4>
<ul className="space-y-2 text-[13px]">
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> contact@7bong.com</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> (+84) 999 888 777</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Hà Nội, Việt Nam</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2024 7BONG. All rights reserved.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-white" href="#">Điều khoản sử dụng</a>
<a className="hover:text-white" href="#">Chính sách bảo mật</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
