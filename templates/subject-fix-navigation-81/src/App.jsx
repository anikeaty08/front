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



          function updateCalculator() {
            const price = parseFloat(document.getElementById('slider-price').value);
            const ratio = parseInt(document.getElementById('slider-ratio').value);
            const term = parseInt(document.getElementById('slider-term').value);
            const rate = 7;

            document.getElementById('val-price-display').innerText = price + ' tỷ';
            document.getElementById('val-ratio-display').innerText = ratio + '%';
            document.getElementById('val-term-display').innerText = term + ' năm';

            const loanAmount = price * (ratio / 100);
            const loanAmountDisplay = loanAmount < 1 ? (loanAmount * 1000).toFixed(0) + ' triệu' : loanAmount.toLocaleString('vi-VN', { maximumFractionDigits: 3 }) + ' tỷ';

            const i = (rate / 100) / 12;
            const n = term * 12;
            const principal = loanAmount * 1000000000;

            let monthlyPayment = 0;
            if(ratio > 0 && term > 0) {
              monthlyPayment = (principal * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
            }

            const monthlyPaymentMillion = monthlyPayment / 1000000;

            document.getElementById('result-loan').innerText = loanAmountDisplay;
            document.getElementById('result-monthly').innerText = '~' + monthlyPaymentMillion.toLocaleString('vi-VN', { maximumFractionDigits: 1 }) + ' tr/th';
          }
        


          (function() {
            const teamCarousel = document.getElementById('team-carousel');
            if (teamCarousel) {
              setInterval(() => {
                if (!teamCarousel.matches(':hover')) {
                    const maxScroll = teamCarousel.scrollWidth - teamCarousel.clientWidth;
                    const cardWidth = 196; // 180 + gap 16
                    if (teamCarousel.scrollLeft >= maxScroll - 10) {
                       teamCarousel.scrollTo({left: 0, behavior: 'smooth'});
                    } else {
                       teamCarousel.scrollBy({left: cardWidth, behavior: 'smooth'});
                    }
                }
              }, 3000);
            }
          })();
        


      (function() {
        const carousel = document.getElementById('price-carousel');
        if (!carousel) return;
        setInterval(() => {
          const card = carousel.querySelector('.snap-center');
          if(!card) return;
          const cardWidth = card.offsetWidth + 16;
          if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }, 4000);
      })();
    


        (function() {
          const card = document.getElementById('fomo-card');
          const messageEl = document.getElementById('fomo-message');
          const messages = [
            '🔔 <span class="text-white font-bold">User #4821</span> đang xem căn 2PN tầng 18',
            '🔥 <span class="text-white font-bold">User #9923</span> vừa đặt chỗ thành công!',
            '👀 <span class="text-white font-bold">5 khách hàng</span> đang xem dự án này',
            '💰 <span class="text-white font-bold">Căn A.05.12</span> vừa được booking',
            '📝 <span class="text-white font-bold">Nguyễn T.</span> vừa đăng ký tư vấn'
          ];

          let isVisible = false;
          let timeoutId;

          function showFomo() {
            if (isVisible) return;
            // Random message
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            messageEl.innerHTML = randomMsg;

            // Slide In
            card.classList.remove('translate-y-24', 'opacity-0');
            isVisible = true;

            // Auto hide after 5s
            timeoutId = setTimeout(() => {
              hideFomo();
            }, 5000);
          }

          function hideFomo() {
            if (!isVisible) return;
            card.classList.add('translate-y-24', 'opacity-0');
            isVisible = false;
          }

          window.closeFomo = function() {
            clearTimeout(timeoutId);
            hideFomo();
          };

          // Initial start
          setTimeout(() => {
            showFomo();
            // Repeat every 10s
            setInterval(showFomo, 10000);
          }, 2000);
        })();
      


      function filterContent(btn, category) {
        // Visual update for Tabs
        const nav = btn.parentElement;
        const buttons = nav.querySelectorAll('button');

        buttons.forEach(b => {
          // Reset to inactive state
          b.classList.remove('border-orange-500', 'text-white', 'font-semibold');
          b.classList.add('border-transparent', 'text-slate-400', 'font-medium');
        });

        // Set active state
        btn.classList.remove('border-transparent', 'text-slate-400', 'font-medium');
        btn.classList.add('border-orange-500', 'text-white', 'font-semibold');

        // Filter Logic
        const articles = document.querySelectorAll('main > article');
        articles.forEach(art => {
          const cats = art.getAttribute('data-category') || '';
          // 'all' shows everything, otherwise check if category is present
          if (category === 'all' || cats.split(' ').includes(category)) {
            art.style.display = 'block';
          } else {
            art.style.display = 'none';
          }
        });
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-slate-800 shadow-md">

<div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">

<div className="flex items-center gap-1.5">
<span className="text-lg font-heading font-semibold text-white tracking-tighter">
            MT Eastmark City
          </span>
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:verified-check-bold" width="16"></iconify-icon>
</div>

<button className="text-slate-400 hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-slate-800/50">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>

<div className="max-w-2xl mx-auto px-4">
<nav className="flex gap-6 overflow-x-auto scrollbar-hide -mb-px gap-x-6 gap-y-6 items-center">
<button className="pb-3 border-b-2 border-orange-500 text-white font-heading font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer outline-none" onclick="filterContent(this, 'all')">
            Trang chủ
          </button>
<button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 font-heading font-medium text-sm whitespace-nowrap transition-colors cursor-pointer outline-none" onclick="filterContent(this, 'units')">
            Loại căn
          </button>
<button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 font-heading font-medium text-sm whitespace-nowrap transition-colors cursor-pointer outline-none" onclick="filterContent(this, 'location')">
            Vị trí
          </button>
<button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 font-heading font-medium text-sm whitespace-nowrap transition-colors cursor-pointer outline-none" onclick="filterContent(this, 'price')">
            Giá bán
          </button>
<button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 font-heading font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer outline-none" onclick="filterContent(this, 'live')">
            Trực tiếp
            <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
</button>
</nav>
</div>
</header>

<main className="max-w-2xl mx-auto pt-28 px-0 sm:px-4">

<div className="animate-in bg-slate-900 sm:rounded-3xl border-b sm:border border-slate-800 shadow-md overflow-hidden mb-6 relative group">

<div className="h-56 w-full bg-cover bg-center relative" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

<div className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur border border-slate-700 rounded-full px-3 py-1 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-xs font-semibold text-white tracking-wide font-heading">
              Đang mở bán
            </span>
</div>
</div>

<div className="px-6 pb-6 relative -mt-16">
<div className="flex justify-between items-end mb-4">
<div className="relative">
<div className="w-28 h-28 rounded-full border-4 border-[#0f172a] overflow-hidden bg-slate-800 shadow-md">
<img alt="Agent Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=688&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-1 right-1 bg-blue-500 text-white text-[12px] p-1 rounded-full border-4 border-[#0f172a] flex items-center justify-center">
<iconify-icon icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
</div>

<div className="flex gap-2 mb-2">
<button className="h-10 px-5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all border border-slate-700 flex items-center gap-2">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                Nhắn tin
              </button>
<button className="h-10 px-5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-500/20 transition-all flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                Theo dõi
              </button>
</div>
</div>
<div className="">
<h1 className="font-semibold text-white tracking-tight font-heading flex items-center gap-2 text-4xl">
              Minh Thư CBC
            </h1>
<p className="text-slate-400 text-base font-normal mb-3">
              @mt.eastmark • Nhà phân phối chính thức
            </p>
<p className="text-slate-300 text-sm leading-relaxed max-w-lg font-normal">
              🏙️ Chuyên tư vấn BĐS Cao cấp TP. Thủ Đức - Gamuda Land.
              <br/>
              ✨
              <span className="text-orange-400 font-medium">MT Eastmark City</span>
              - Trái tim thành phố phía Đông.
              <br/>
              📍 Mặt tiền Vành Đai 3, liền kề cao tốc Long Thành.
            </p>

<div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-slate-800">
<div className="text-center sm:text-left">
<span className="block text-xl text-white font-heading tracking-tight font-semibold">
                  1.2k
                </span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Người quan tâm
                </span>
</div>
<div className="text-center sm:text-left">
<span className="block text-xl text-white font-heading tracking-tight font-semibold">
                  150+
                </span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Căn hộ đã bán
                </span>
</div>
<div className="text-center sm:text-left">
<span className="block text-xl text-white font-heading tracking-tight font-semibold">
                  4.9/5
                </span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Đánh giá
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="animate-in delay-100 bg-slate-900 border border-slate-800 sm:rounded-2xl p-4 mb-6 flex gap-4 items-center shadow-md">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden flex-shrink-0 border border-slate-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=688&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative w-full">
<input className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-slate-500 pl-10" placeholder="Tìm căn hộ theo nhu cầu của bạn..." type="text"/>
<iconify-icon className="absolute left-3 top-3 text-slate-500" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6 animate-in delay-200">
<div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center text-center gap-2 hover:border-orange-500/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon icon="solar:swimming-linear" width="28"></iconify-icon>
</div>
<span className="text-white font-heading font-semibold text-sm">
            Hồ bơi Resort
          </span>
</div>
<div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center text-center gap-2 hover:border-orange-500/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<span className="text-white font-heading font-semibold text-sm">
            Công viên 4ha
          </span>
</div>
<div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center text-center gap-2 hover:border-orange-500/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon icon="solar:dumbbell-large-linear" width="28"></iconify-icon>
</div>
<span className="text-white font-heading font-semibold text-sm">
            Gym &amp; Spa
          </span>
</div>
<div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center text-center gap-2 hover:border-orange-500/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon icon="solar:shop-linear" width="28"></iconify-icon>
</div>
<span className="text-white font-heading font-semibold text-sm">
            Shophouse
          </span>
</div>
</div>
<article className="animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="price">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">
                Vừa xong • 📋 Chính sách
              </p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-4">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            📅
            <strong className="text-white font-semibold">
              Lộ Trình Thanh Toán
            </strong>
            — Linh hoạt, nhẹ nhàng dòng tiền.
          </p>
</div>

<div className="px-4 pb-6 relative">

<div className="absolute left-[31px] top-3 bottom-8 w-0.5 bg-slate-700 overflow-hidden rounded-full">
<div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam"></div>
</div>
<div className="space-y-6 relative">

<div className="flex gap-4 items-start animate-clip" style={{animationDelay: '100ms'}}>
<div className="z-10 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 ring-4 ring-[#1e293b]">
<span className="text-xs font-bold text-white">1</span>
</div>
<div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex-1 hover:border-orange-500/30 transition-colors group/card">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-heading font-semibold text-base flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:bookmark-linear"></iconify-icon>
                    Booking
                  </span>
<span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-2 py-0.5 rounded-full">
                    50 triệu
                  </span>
</div>
<p className="text-sm text-slate-400 font-medium">
                  Giữ chỗ ưu tiên (có hoàn lại)
                </p>
</div>
</div>

<div className="flex gap-4 items-start animate-clip" style={{animationDelay: '200ms'}}>
<div className="z-10 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 ring-4 ring-[#1e293b]">
<span className="text-xs font-bold text-white">2</span>
</div>
<div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex-1 hover:border-orange-500/30 transition-colors group/card">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-heading font-semibold text-base flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:document-add-linear"></iconify-icon>
                    Đặt cọc
                  </span>
<span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-2 py-0.5 rounded-full">
                    10%
                  </span>
</div>
<p className="text-sm text-slate-400 font-medium">
                  Trong vòng 7 ngày sau Booking
                </p>
</div>
</div>

<div className="flex gap-4 items-start animate-clip" style={{animationDelay: '300ms'}}>
<div className="z-10 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 ring-4 ring-[#1e293b]">
<span className="text-xs font-bold text-white">3</span>
</div>
<div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex-1 hover:border-orange-500/30 transition-colors group/card">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-heading font-semibold text-base flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:pen-new-square-linear"></iconify-icon>
                    HĐMB
                  </span>
<span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-2 py-0.5 rounded-full">
                    10%
                  </span>
</div>
<p className="text-sm text-slate-400 font-medium">
                  Ký hợp đồng mua bán
                </p>
</div>
</div>

<div className="flex gap-4 items-start animate-clip" style={{animationDelay: '400ms'}}>
<div className="z-10 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 ring-4 ring-[#1e293b]">
<span className="text-xs font-bold text-white">4</span>
</div>
<div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex-1 hover:border-orange-500/30 transition-colors group/card">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-heading font-semibold text-base flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:city-linear"></iconify-icon>
                    Đợt 2 - 5
                  </span>
<span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-2 py-0.5 rounded-full">
                    50%
                  </span>
</div>
<p className="text-sm text-slate-400 font-medium">
                  Theo tiến độ xây dựng
                </p>
</div>
</div>

<div className="flex gap-4 items-start animate-clip" style={{animationDelay: '500ms'}}>
<div className="z-10 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 ring-4 ring-[#1e293b]">
<span className="text-xs font-bold text-white">5</span>
</div>
<div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex-1 hover:border-orange-500/30 transition-colors group/card">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-heading font-semibold text-base flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:key-linear"></iconify-icon>
                    Nhận nhà
                  </span>
<span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-2 py-0.5 rounded-full">
                    25%
                  </span>
</div>
<p className="text-sm text-slate-400 font-medium">
                  Dự kiến Q4/2027
                </p>
</div>
</div>

<div className="flex gap-4 items-start animate-clip" style={{animationDelay: '600ms'}}>
<div className="z-10 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 ring-4 ring-[#1e293b]">
<span className="text-xs font-bold text-white">6</span>
</div>
<div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex-1 hover:border-orange-500/30 transition-colors group/card">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-heading font-semibold text-base flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:diploma-verified-linear"></iconify-icon>
                    Sổ hồng
                  </span>
<span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-2 py-0.5 rounded-full">
                    5%
                  </span>
</div>
<p className="text-sm text-slate-400 font-medium">
                  Khi có thông báo nhận sổ
                </p>
</div>
</div>
</div>
</div>

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                189 quan tâm
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">24 bình luận</span>
<span className="hover:underline cursor-pointer">8 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>

<article className="group relative animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6" data-category="general" onmousemove="const rect = this.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; this.style.setProperty('--x', x + 'px'); this.style.setProperty('--y', y + 'px');" style={{'--x': '0px', '--y': '0px'}}>
<div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(249, 115, 22, 0.15), transparent 40%)', zIndex: '0'}}></div>
<div className="relative z-10">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                    MT Eastmark City
                  </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">
                  Vừa cập nhật • 🌐
                </p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<div className="w-full aspect-video bg-slate-800 relative group/img overflow-hidden">
<img alt="Skyline" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60"></div>
</div>
<div className="px-4 py-3">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
              🏙️ — Biểu tượng sống mới tại trung tâm TP. Thủ Đức. Kiến tạo bởi
              Gamuda Land — Chủ đầu tư hàng đầu Malaysia 🇲🇾
            </p>
</div>
<div className="px-4 pb-4">
<div className="flex items-center justify-between text-xs text-slate-400 py-3 border-b border-slate-700/50 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                  1,800 lượt thích
                </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">
                  275 bình luận
                </span>
<span className="hover:underline cursor-pointer">89 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
<button className="flex-none flex items-center justify-center w-9 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-orange-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:bookmark-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</article>
<article className="animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="location">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">
                1 giờ trước • 📍 TP. Thủ Đức
              </p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-3">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            📍
            <strong className="text-white font-semibold">Vị trí Vàng</strong>
            — Ngay trung tâm TP. Thủ Đức, kết nối Metro Line 1, xa lộ Hà Nội,
            vành đai 3.
          </p>
</div>

<div className="px-4 pb-4">
<div className="w-full h-[400px] rounded-lg overflow-hidden relative bg-slate-800 border border-slate-700">
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d106.78!3d10.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzEyLjAiTiAxMDbCsDQ2JzQ4LjAiRQ!5e0!3m2!1svi!2s!4v1" style={{border: '0'}} width="100%"></iframe>
</div>

<div className="flex flex-wrap gap-2 mt-3">
<span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 hover:border-orange-500/50 hover:text-orange-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:train-linear" width="14"></iconify-icon>
              🚇 Metro 800m
            </span>
<span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 hover:border-orange-500/50 hover:text-orange-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:diploma-linear" width="14"></iconify-icon>
              🏫 Vinschool 500m
            </span>
<span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 hover:border-orange-500/50 hover:text-orange-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:hospital-linear" width="14"></iconify-icon>
              🏥 BV Quốc tế 1km
            </span>
</div>
</div>

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                856 quan tâm
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">42 bình luận</span>
<span className="hover:underline cursor-pointer">15 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>
<article className="animate-in delay-300 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="price">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">
                2 giờ trước • 📊 Thống kê
              </p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-2">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            📊
            <strong className="text-white font-semibold">
              Tốc Độ Tăng Giá Bất Động Sản
            </strong>
            — So sánh khu vực 2018-2025.
          </p>
</div>

<div className="px-4 pb-4">
<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mt-2">
<div className="h-56 flex items-end justify-between gap-4 sm:gap-8 pb-8 border-b border-slate-700 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-slate-700/30 border-t border-dashed border-slate-600/30"></div>
<div className="w-full h-px bg-slate-700/30 border-t border-dashed border-slate-600/30"></div>
<div className="w-full h-px bg-slate-700/30 border-t border-dashed border-slate-600/30"></div>
<div className="w-full h-px bg-transparent"></div>
</div>

<div className="relative w-1/3 h-full flex flex-col justify-end group/bar z-10">
<div className="flex flex-col items-center w-full" style={{height: '100%'}}>
<span className="mb-2 text-orange-500 font-heading font-bold text-lg animate-in delay-300">
                    14%
                  </span>
<div className="w-full bg-slate-700 rounded-t-lg flex-1 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 bg-orange-500 rounded-t-lg animate-in delay-300 h-full"></div>
</div>
</div>
<span className="absolute -bottom-8 left-0 right-0 text-center text-xs text-slate-400 font-medium truncate">
                  TP. Thủ Đức
                </span>
</div>

<div className="relative w-1/3 h-full flex flex-col justify-end group/bar z-10">
<div className="flex flex-col items-center w-full" style={{height: '42%'}}>
<span className="mb-2 text-slate-400 font-heading font-bold text-lg animate-in delay-400">
                    6%
                  </span>
<div className="w-full bg-slate-700 rounded-t-lg flex-1 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 bg-slate-500 rounded-t-lg animate-in delay-400 h-full"></div>
</div>
</div>
<span className="absolute -bottom-8 left-0 right-0 text-center text-xs text-slate-400 font-medium truncate">
                  Quận 9 cũ
                </span>
</div>

<div className="relative w-1/3 h-full flex flex-col justify-end group/bar z-10">

<div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max bg-white text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl animate-in delay-500 hidden sm:block">
                  Tiềm năng
                  <br/>
                  tăng trưởng cao
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
</div>
<div className="flex flex-col items-center w-full" style={{height: '42%'}}>
<span className="mb-2 text-orange-200 font-heading font-bold text-lg animate-in delay-500">
                    6%
                  </span>
<div className="w-full bg-slate-700 rounded-t-lg flex-1 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 bg-orange-300 rounded-t-lg animate-in delay-500 h-full"></div>
</div>
</div>
<span className="absolute -bottom-8 left-0 right-0 text-center text-white font-semibold text-xs truncate">
                  MT Eastmark
                </span>
</div>
</div>
<div className="mt-10 text-right">
<span className="text-[10px] text-slate-500 italic">
                Nguồn: Báo cáo thị trường BĐS 1H/2025
              </span>
</div>
</div>
</div>

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                328 quan tâm
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">12 bình luận</span>
<span className="hover:underline cursor-pointer">5 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>
<article className="animate-in delay-200 bg-slate-900 border border-slate-800 sm:rounded-3xl overflow-hidden mb-6 shadow-md" data-category="general">

<div className="p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=688&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-base font-semibold text-white font-heading leading-tight">
                Minh Thư CBC
              </h3>
<p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                2 giờ trước
                <span className="w-0.5 h-0.5 rounded-full bg-slate-500"></span>
<iconify-icon icon="solar:globe-linear" width="10"></iconify-icon>
                TP. Thủ Đức
              </p>
</div>
</div>
<button className="text-slate-500 hover:text-white">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-5 pb-4">
<p className="text-sm text-slate-300 leading-relaxed mb-4">
            Chào Quý anh chị! 👋
            <br/>
            Em xin phép giới thiệu "Siêu phẩm" an cư &amp; đầu tư tốt nhất khu
            Đông năm 2024 -
            <span className="text-orange-400 font-semibold">MT Eastmark City</span>
            .
          </p>
<div className="space-y-2 mb-4 bg-[#0f172a] p-4 rounded-xl border border-slate-800">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-300">
                Vị trí vàng 3 mặt tiền đường Vành Đai 3.
              </span>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
<iconify-icon icon="solar:water-drops-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-300">
                Ven sông tự nhiên, không khí trong lành.
              </span>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
<iconify-icon icon="solar:tag-price-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-300">
                Giá rumo chỉ từ
                <span className="text-white font-semibold">42 triệu/m²</span>
                .
              </span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-0.5 bg-[#0f172a] border-y border-slate-800">
<div className="h-72 bg-slate-800 relative group overflow-hidden">
<img alt="Building Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-72 grid grid-rows-2 gap-0.5">
<div className="bg-slate-800 relative group overflow-hidden">
<img alt="Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-slate-800 relative group overflow-hidden">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/30 transition-all cursor-pointer">
<span className="text-white font-heading font-semibold text-lg tracking-tight">
                  +12 Ảnh
                </span>
</div>
</div>
</div>
</div>

<div className="p-4">
<div className="flex items-center justify-between text-slate-500 text-xs mb-3 font-medium">
<div className="flex items-center gap-1">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-slate-900 text-[10px] text-white">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-slate-900 text-[10px] text-white">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 text-slate-400">429 quan tâm</span>
</div>
<span>42 bình luận • 15 chia sẻ</span>
</div>
<div className="border-t border-slate-800 pt-3 flex items-center justify-between">
<button className="flex-1 flex items-center justify-center gap-2 text-slate-400 hover:text-orange-500 transition-colors px-2 py-2 rounded hover:bg-slate-800/50">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-200 transition-colors px-2 py-2 rounded hover:bg-slate-800/50">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-200 transition-colors px-2 py-2 rounded hover:bg-slate-800/50">
<iconify-icon icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>

<article className="animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="live">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">2 giờ trước • 🌐</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-3">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            🎬 Khám phá cuộc sống đẳng cấp tại
            <strong className="text-white font-semibold">MT Eastmark City</strong>
            — Video fly-through toàn dự án
          </p>
</div>

<div className="w-full aspect-video bg-black relative group/video">

<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-orange-500/90 hover:bg-orange-500 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-lg shadow-orange-500/20 backdrop-blur-sm">
<iconify-icon className="ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
<div className="w-full h-1 bg-slate-600 rounded-full mb-3 cursor-pointer relative group/progress">
<div className="absolute left-0 top-0 bottom-0 w-1/3 bg-orange-500 rounded-full"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 shadow"></div>
</div>
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-4">
<button className="hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:pause-bold" width="24"></iconify-icon>
</button>
<button className="hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:volume-high-bold" width="24"></iconify-icon>
</button>
<span className="text-xs font-medium font-mono text-slate-300">
                  0:34 / 2:15
                </span>
</div>
<div className="flex items-center gap-3">
<button className="hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
<button className="hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="px-4 py-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                1,204 lượt thích
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">156 bình luận</span>
<span className="hover:underline cursor-pointer">68 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>
<article className="animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="units price">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">Vừa xong • 🌐</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-4">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            💰
            <strong className="text-white font-semibold">Bảng Giá Tham Khảo</strong>
            — Cập nhật mới nhất T2/2025.
          </p>
</div>

<div className="relative group/carousel pb-4">

<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-hide scroll-smooth" id="price-carousel">

<div className="min-w-[85%] sm:min-w-[60%] snap-center bg-white rounded-2xl p-5 shadow-xl border border-slate-200 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-16 bg-orange-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-transform group-hover/card:scale-110"></div>
<h4 className="text-slate-800 font-heading font-semibold text-2xl mb-1">
                1PN+1
              </h4>
<div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                43m²
                <span>•</span>
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
                Studio
              </div>
<div className="text-orange-500 font-heading font-semibold text-4xl tracking-tight">
                3.487
                <span className="text-lg font-semibold text-orange-400">
                  tỷ VNĐ
                </span>
</div>
<button className="w-full mt-4 py-2.5 bg-slate-900 text-white rounded-xl font-heading font-semibold text-sm hover:bg-orange-500 transition-colors">
                Xem chi tiết
              </button>
</div>

<div className="min-w-[85%] sm:min-w-[60%] snap-center bg-white rounded-2xl p-5 shadow-xl border border-slate-200 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-16 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-transform group-hover/card:scale-110"></div>
<h4 className="text-slate-800 font-heading font-semibold text-2xl mb-1">
                2 Phòng ngủ
              </h4>
<div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                65m²
                <span>•</span>
<iconify-icon icon="solar:bed-linear"></iconify-icon>
                Gia đình trẻ
              </div>
<div className="text-orange-500 font-heading font-semibold text-4xl tracking-tight">
                3.850
                <span className="text-lg font-semibold text-orange-400">
                  tỷ VNĐ
                </span>
</div>
<button className="w-full mt-4 py-2.5 bg-slate-900 text-white rounded-xl font-heading font-semibold text-sm hover:bg-orange-500 transition-colors">
                Xem chi tiết
              </button>
</div>

<div className="min-w-[85%] sm:min-w-[60%] snap-center bg-white rounded-2xl p-5 shadow-xl border border-slate-200 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-16 bg-purple-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-transform group-hover/card:scale-110"></div>
<h4 className="text-slate-800 font-heading font-semibold text-2xl mb-1">
                3 Phòng ngủ
              </h4>
<div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                85m²
                <span>•</span>
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                Đa thế hệ
              </div>
<div className="text-orange-500 font-heading font-semibold text-4xl tracking-tight">
                5.200
                <span className="text-lg font-semibold text-orange-400">
                  tỷ VNĐ
                </span>
</div>
<button className="w-full mt-4 py-2.5 bg-slate-900 text-white rounded-xl font-heading font-semibold text-sm hover:bg-orange-500 transition-colors">
                Xem chi tiết
              </button>
</div>

<div className="min-w-[85%] sm:min-w-[60%] snap-center bg-white rounded-2xl p-5 shadow-xl border border-slate-200 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-16 bg-emerald-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-transform group-hover/card:scale-110"></div>
<h4 className="text-slate-800 font-heading font-semibold text-2xl mb-1">
                Duplex
              </h4>
<div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                110m²
                <span>•</span>
<iconify-icon icon="solar:crown-star-linear"></iconify-icon>
                VIP
              </div>
<div className="text-orange-500 font-heading font-semibold text-4xl tracking-tight">
                7.500
                <span className="text-lg font-semibold text-orange-400">
                  tỷ VNĐ
                </span>
</div>
<button className="w-full mt-4 py-2.5 bg-slate-900 text-white rounded-xl font-heading font-semibold text-sm hover:bg-orange-500 transition-colors">
                Xem chi tiết
              </button>
</div>
</div>

<button className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-800/80 text-white backdrop-blur flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hover:bg-orange-500 shadow-lg" onclick="document.getElementById('price-carousel').scrollBy({left: -240, behavior: 'smooth'})">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-800/80 text-white backdrop-blur flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-orange-500 shadow-lg" onclick="document.getElementById('price-carousel').scrollBy({left: 240, behavior: 'smooth'})">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                312 quan tâm
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">45 bình luận</span>
<span className="hover:underline cursor-pointer">12 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>
<article className="animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group relative" data-category="price" id="mortgage-calculator-post">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">
                Vừa xong • 🧮 Công cụ tài chính
              </p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-4">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            🏦
            <strong className="text-white font-semibold">Ước Tính Khoản Vay</strong>
            — Lãi suất ưu đãi chỉ từ 7%/năm.
          </p>
</div>

<div className="px-4 pb-6">
<div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
<div className="space-y-6 mb-6">

<div>
<div className="flex justify-between items-end mb-2">
<label className="text-sm text-slate-400 font-medium font-heading">
                    Giá trị căn hộ
                  </label>
<span className="text-white font-heading font-semibold text-lg" id="val-price-display">
                    3.85 tỷ
                  </span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" id="slider-price" max="10" min="3" oninput="updateCalculator()" step="0.05" type="range" value="3.85"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
<span>3 tỷ</span>
<span>10 tỷ</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<label className="text-sm text-slate-400 font-medium font-heading">
                    Tỷ lệ vay
                  </label>
<span className="text-white font-heading font-semibold text-lg" id="val-ratio-display">
                    70%
                  </span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" id="slider-ratio" max="70" min="0" oninput="updateCalculator()" step="5" type="range" value="70"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
<span>0%</span>
<span>70%</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<label className="text-sm text-slate-400 font-medium font-heading">
                    Thời hạn vay
                  </label>
<span className="text-white font-heading font-semibold text-lg" id="val-term-display">
                    20 năm
                  </span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" id="slider-term" max="25" min="5" oninput="updateCalculator()" step="1" type="range" value="20"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
<span>5 năm</span>
<span>25 năm</span>
</div>
</div>

<div className="flex items-center justify-between py-2 px-3 bg-slate-700/30 rounded-lg border border-slate-700/50">
<span className="text-xs text-slate-400 font-medium">
                  Lãi suất cố định
                </span>
<span className="text-sm font-semibold text-orange-400 font-heading">
                  7%/năm
                </span>
</div>
</div>

<div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-5 border border-slate-700 shadow-inner relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 bg-orange-500/5 rounded-full blur-xl -mr-6 -mt-6"></div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mb-1.5">
                    Số tiền vay
                  </p>
<p className="text-2xl text-white font-heading font-semibold tracking-tight leading-none" id="result-loan">
                    2.695 tỷ
                  </p>
</div>
<div className="text-right">
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mb-1.5">
                    Trả góp hàng tháng
                  </p>
<p className="text-2xl text-orange-500 font-heading font-semibold tracking-tight leading-none" id="result-monthly">
                    ~20.9 tr
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                542 quan tâm
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">67 bình luận</span>
<span className="hover:underline cursor-pointer">23 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>

</article>
<article className="animate-in delay-200 bg-[#1e293b] rounded-[12px] border border-orange-500/30 shadow-xl overflow-hidden mb-6 group relative" data-category="general">
<div className="p-6">
<div className="text-center mb-6">
<h2 className="text-2xl font-heading font-semibold text-white mb-1">
              🏠 Đăng Ký Tư Vấn Miễn Phí
            </h2>
<p className="text-base text-slate-400 font-nunito">
              Em sẽ liên hệ lại trong vòng 15 phút!
            </p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">

<div className="space-y-3">
<label className="text-sm font-semibold text-slate-300 font-heading">
                Danh xưng
                <span className="text-red-400">*</span>
</label>
<div className="flex gap-6">
<label className="inline-flex items-center cursor-pointer gap-2 group/radio">
<input checked="" className="peer sr-only" name="gender" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-orange-500 peer-checked:bg-orange-500/20 relative flex items-center justify-center transition-all">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 peer-checked:text-white transition-colors font-nunito">
                    Anh
                  </span>
</label>
<label className="inline-flex items-center cursor-pointer gap-2 group/radio">
<input className="peer sr-only" name="gender" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-orange-500 peer-checked:bg-orange-500/20 relative flex items-center justify-center transition-all">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 peer-checked:text-white transition-colors font-nunito">
                    Chị
                  </span>
</label>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-slate-300 font-heading mb-1.5">
                Họ và tên
                <span className="text-red-400">*</span>
</label>
<input className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-nunito" minlength="4" placeholder="Nhập tên Quý anh/chị" type="text"/>
</div>

<div>
<label className="block text-sm font-semibold text-slate-300 font-heading mb-1.5">
                Số điện thoại
                <span className="text-red-400">*</span>
</label>
<input className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-nunito" minlength="9" placeholder="Nhập SĐT liên hệ" type="tel"/>
</div>

<div>
<label className="block text-sm font-semibold text-slate-300 font-heading mb-2">
                Nhu cầu
              </label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-600 bg-[#0f172a] text-orange-500 focus:ring-orange-500 focus:ring-offset-[#1e293b]" type="checkbox"/>
<span className="text-sm text-slate-400 font-nunito">Ở thực</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-600 bg-[#0f172a] text-orange-500 focus:ring-orange-500 focus:ring-offset-[#1e293b]" type="checkbox"/>
<span className="text-sm text-slate-400 font-nunito">Đầu tư</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-600 bg-[#0f172a] text-orange-500 focus:ring-orange-500 focus:ring-offset-[#1e293b]" type="checkbox"/>
<span className="text-sm text-slate-400 font-nunito">
                    Cho thuê
                  </span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-600 bg-[#0f172a] text-orange-500 focus:ring-orange-500 focus:ring-offset-[#1e293b]" type="checkbox"/>
<span className="text-sm text-slate-400 font-nunito">
                    Tìm hiểu
                  </span>
</label>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-slate-300 font-heading mb-1.5">
                Email (Tùy chọn)
              </label>
<input className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-nunito" placeholder="Để nhận thêm tài liệu" type="email"/>
</div>

<div className="pt-2">
<div className="relative group/btn rounded-xl p-[1px] overflow-hidden">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#fff_50%,#f97316_100%)] opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-spin-slow transition-opacity duration-300"></div>
<button className="relative w-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-bold text-base py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 backface-hidden z-10" type="submit">
                  GỬI YÊU CẦU TƯ VẤN 📩
                </button>
</div>
<p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5 font-nunito">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                🔒 Thông tin được bảo mật tuyệt đối
              </p>
</div>
</form>
</div>
</article>
<article className="animate-in delay-300 mb-6" data-category="general">
<div className="px-4 mb-4 flex items-end justify-between">
<div>
<h3 className="text-white font-heading font-semibold text-lg tracking-tight leading-tight">
              👥 Đội Ngũ Tư Vấn Chuyên Nghiệp
            </h3>
<p className="text-slate-400 text-sm font-normal mt-0.5">
              Sẵn sàng hỗ trợ Quý anh chị
            </p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-all" onclick="document.getElementById('team-carousel').scrollBy({left: -200, behavior: 'smooth'})">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-all" onclick="document.getElementById('team-carousel').scrollBy({left: 200, behavior: 'smooth'})">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="relative group/team">
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-hide scroll-smooth" id="team-carousel">

<div className="min-w-[180px] w-[180px] snap-center bg-[#1e293b] rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 group/card">
<div className="w-20 h-20 mb-3 relative">
<img alt="Tuấn Anh" className="w-full h-full rounded-2xl object-cover object-top border-2 border-slate-600 shadow-md group-hover/card:border-orange-500 transition-colors" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#1e293b]"></div>
</div>
<h4 className="text-white font-heading font-bold text-base mb-1">
                Tuấn Anh
              </h4>
<p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                Tư vấn viên — CBC Real Estate
              </p>
<button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl mb-2 shadow-lg shadow-orange-500/20 transition-all">
                📞 Liên hệ
              </button>
<button className="w-full py-2 border border-slate-600 hover:bg-slate-700 hover:text-white text-slate-400 text-xs font-bold rounded-xl transition-all">
                💬 Nhắn tin
              </button>
</div>

<div className="min-w-[180px] w-[180px] snap-center bg-[#1e293b] rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 group/card">
<div className="w-20 h-20 mb-3 relative">
<img alt="Minh Thư" className="w-full h-full rounded-2xl object-cover object-top border-2 border-slate-600 shadow-md group-hover/card:border-orange-500 transition-colors" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#1e293b]"></div>
</div>
<h4 className="text-white font-heading font-bold text-base mb-1">
                Minh Thư
              </h4>
<p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                Tư vấn viên — CBC Real Estate
              </p>
<button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl mb-2 shadow-lg shadow-orange-500/20 transition-all">
                📞 Liên hệ
              </button>
<button className="w-full py-2 border border-slate-600 hover:bg-slate-700 hover:text-white text-slate-400 text-xs font-bold rounded-xl transition-all">
                💬 Nhắn tin
              </button>
</div>

<div className="min-w-[180px] w-[180px] snap-center bg-[#1e293b] rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 group/card">
<div className="w-20 h-20 mb-3 relative">
<img alt="Hoàng Nam" className="w-full h-full rounded-2xl object-cover object-top border-2 border-slate-600 shadow-md group-hover/card:border-orange-500 transition-colors" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-gray-500 rounded-full border-2 border-[#1e293b]"></div>
</div>
<h4 className="text-white font-heading font-bold text-base mb-1">
                Hoàng Nam
              </h4>
<p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                Tư vấn viên — CBC Real Estate
              </p>
<button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl mb-2 shadow-lg shadow-orange-500/20 transition-all">
                📞 Liên hệ
              </button>
<button className="w-full py-2 border border-slate-600 hover:bg-slate-700 hover:text-white text-slate-400 text-xs font-bold rounded-xl transition-all">
                💬 Nhắn tin
              </button>
</div>

<div className="min-w-[180px] w-[180px] snap-center bg-[#1e293b] rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 group/card">
<div className="w-20 h-20 mb-3 relative">
<img alt="Thanh Hà" className="w-full h-full rounded-2xl object-cover object-top border-2 border-slate-600 shadow-md group-hover/card:border-orange-500 transition-colors" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#1e293b]"></div>
</div>
<h4 className="text-white font-heading font-bold text-base mb-1">
                Thanh Hà
              </h4>
<p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                Tư vấn viên — CBC Real Estate
              </p>
<button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl mb-2 shadow-lg shadow-orange-500/20 transition-all">
                📞 Liên hệ
              </button>
<button className="w-full py-2 border border-slate-600 hover:bg-slate-700 hover:text-white text-slate-400 text-xs font-bold rounded-xl transition-all">
                💬 Nhắn tin
              </button>
</div>
</div>
</div>

</article>
<article className="animate-in delay-300 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="price">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">
                Vừa xong • 📊 Thống kê
              </p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-4">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            🏠
            <strong className="text-white font-semibold">Giá Thuê Tham Khảo</strong>
            — Dựa trên khảo sát thị trường khu vực.
          </p>
</div>

<div className="px-4 pb-4">
<div className="w-full overflow-x-auto rounded-xl border border-slate-700 shadow-md">
<table className="w-full text-sm text-left border-collapse">
<thead className="bg-orange-500 text-white font-heading font-bold text-sm">
<tr>
<th className="p-3 whitespace-nowrap">Loại căn</th>
<th className="p-3 whitespace-nowrap text-center">Diện tích</th>
<th className="p-3 whitespace-nowrap text-right">
                    Giá thuê/tháng
                  </th>
<th className="p-3 whitespace-nowrap text-right">Tỷ suất</th>
</tr>
</thead>
<tbody className="font-sans font-medium text-slate-300">
<tr className="bg-[#1e293b] hover:bg-slate-700/50 transition-colors border-b border-slate-700/50">
<td className="p-3 whitespace-nowrap">1PN+1</td>
<td className="p-3 text-center whitespace-nowrap">43m²</td>
<td className="p-3 text-right text-orange-400 font-semibold whitespace-nowrap">
                    8-10 triệu
                  </td>
<td className="p-3 text-right whitespace-nowrap">2.8%</td>
</tr>
<tr className="bg-[#334155] hover:bg-slate-700/50 transition-colors border-b border-slate-700/50">
<td className="p-3 whitespace-nowrap">2PN</td>
<td className="p-3 text-center whitespace-nowrap">65m²</td>
<td className="p-3 text-right text-orange-400 font-semibold whitespace-nowrap">
                    12-15 triệu
                  </td>
<td className="p-3 text-right whitespace-nowrap">3.2%</td>
</tr>
<tr className="bg-[#1e293b] hover:bg-slate-700/50 transition-colors border-b border-slate-700/50">
<td className="p-3 whitespace-nowrap">3PN</td>
<td className="p-3 text-center whitespace-nowrap">85m²</td>
<td className="p-3 text-right text-orange-400 font-semibold whitespace-nowrap">
                    18-22 triệu
                  </td>
<td className="p-3 text-right whitespace-nowrap">3.5%</td>
</tr>
<tr className="bg-[#334155] hover:bg-slate-700/50 transition-colors">
<td className="p-3 whitespace-nowrap">Duplex</td>
<td className="p-3 text-center whitespace-nowrap">110m²</td>
<td className="p-3 text-right text-orange-400 font-semibold whitespace-nowrap">
                    25-30 triệu
                  </td>
<td className="p-3 text-right whitespace-nowrap">3.8%</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-3 text-right">
<span className="text-[10px] text-slate-500 italic">
              * Giá thuê ước tính, có thể thay đổi theo thị trường.
            </span>
</div>
</div>

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                245 quan tâm
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">34 bình luận</span>
<span className="hover:underline cursor-pointer">18 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>
<article className="animate-in delay-300 bg-gradient-to-br from-slate-900 to-[#1e293b] border border-slate-800 sm:rounded-3xl overflow-hidden mb-6 shadow-md relative group" data-category="price">
<div className="absolute top-0 right-0 p-40 bg-orange-500/10 blur-[90px] rounded-full group-hover:bg-orange-500/15 transition-all duration-700"></div>
<div className="p-6 relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=688&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-sm font-semibold text-white font-heading">
                  Minh Thư CBC
                </h3>
<p className="text-xs text-orange-400 font-medium">
                  ✨ Hot Deal hôm nay
                </p>
</div>
</div>
<iconify-icon className="text-slate-500 hover:text-white transition-colors" icon="solar:bookmark-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="font-heading font-semibold text-white tracking-tight mb-6 text-4xl">
            Chính sách ưu đãi
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
              Độc quyền tháng này
            </span>
</h2>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 bg-[#0f172a]/60 p-4 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-base font-semibold text-slate-200 font-heading">
                  Thanh toán nhẹ nhàng
                </p>
<p className="text-sm text-slate-400">Chỉ 30% đến khi nhận nhà</p>
</div>
</div>
<div className="flex items-center gap-4 bg-[#0f172a]/60 p-4 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-base font-semibold text-slate-200 font-heading">
                  Quà tặng nội thất
                </p>
<p className="text-sm text-slate-400">
                  Gói nội thất cao cấp 100-200 triệu
                </p>
</div>
</div>
</div>
<button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold text-base rounded-2xl transition-all shadow-orange-500/20 flex items-center justify-center gap-2 group">
            Tải bảng tính dòng tiền
            <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>
</article>

<article className="animate-in delay-400 bg-[#1e293b] rounded-[12px] border border-slate-700 shadow-lg overflow-hidden mb-6 group" data-category="units">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-white font-heading font-semibold text-base tracking-tight">
                  MT Eastmark City
                </h3>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">Vừa xong • 🌐</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="px-4 pb-3">
<p className="text-[15px] text-slate-300 font-normal font-sans leading-relaxed">
            📸 Phối cảnh &amp; Mặt bằng căn hộ — Thiết kế thông minh, tối ưu
            công năng sống.
          </p>
</div>

<div className="grid grid-cols-2 gap-0.5 bg-slate-800">
<div className="aspect-square relative group/img overflow-hidden cursor-pointer">
<img alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group/img overflow-hidden cursor-pointer">
<img alt="Floorplan" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group/img overflow-hidden cursor-pointer">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group/img overflow-hidden cursor-pointer">
<img alt="Amenities" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors flex items-center justify-center">
<span className="text-white font-heading font-semibold text-xl tracking-tight">
                +12 ảnh
              </span>
</div>
</div>
</div>

<div className="px-4 py-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/50 pb-3 mb-3">
<div className="flex items-center gap-1">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-[#1e293b] text-white text-[10px]">
<iconify-icon icon="solar:like-bold"></iconify-icon>
</div>
</div>
<span className="ml-2 hover:underline cursor-pointer">
                524 lượt thích
              </span>
</div>
<div className="flex gap-3">
<span className="hover:underline cursor-pointer">88 bình luận</span>
<span className="hover:underline cursor-pointer">21 chia sẻ</span>
</div>
</div>
<div className="flex items-center justify-between gap-1">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-red-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Thích</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-blue-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Bình luận</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-green-400 transition-all group/btn">
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:share-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Chia sẻ</span>
</button>
</div>
</div>
</article>
<div className="py-12 flex flex-col items-center justify-center gap-3">
<iconify-icon className="text-orange-500 animate-spin" icon="solar:spinner-linear" width="32"></iconify-icon>
<span className="text-xs text-slate-500 font-medium">
          Đang tải thêm nội dung...
        </span>
</div>
</main>
<footer className="bg-[#0f172a] border-t border-slate-800 pt-12 pb-24 sm:pb-12 relative z-10 font-nunito">
<div className="max-w-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

<div className="space-y-4">
<div className="flex items-center gap-1.5">
<span className="text-xl font-heading font-semibold text-white tracking-tight">
                MT Eastmark City
              </span>
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:verified-check-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
              Dự án căn hộ cao cấp tại TP. Thủ Đức — Kiến tạo bởi Gamuda Land
            </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-[#1877F2] transition-colors" href="#">
<iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#0068FF] transition-colors" href="#">
<iconify-icon icon="simple-icons:zalo" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#FF0000] transition-colors" href="#">
<iconify-icon icon="simple-icons:youtube" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h3 className="text-lg font-heading font-semibold text-white mb-4 tracking-tight">
              Thông tin
            </h3>
<ul className="space-y-2.5 text-sm text-slate-400">
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Tổng quan dự án
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Mặt bằng
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Bảng giá
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Tiến độ
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Chính sách bán hàng
                </a>
</li>
</ul>
</div>

<div>
<h3 className="text-lg font-heading font-semibold text-white mb-4 tracking-tight">
              Liên hệ
            </h3>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Đường Nguyễn Xiển, TP. Thủ Đức, TP.HCM</span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:1900xxxx">
                  1900-xxxx
                </a>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@mteastmark.vn">
                  info@mteastmark.vn
                </a>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-800 pt-6 text-center">
<p className="text-xs text-slate-500">
            © 2025 CBC Real Estate — Đơn vị phân phối chính thức dự án MT
            Eastmark City của Gamuda Land.
          </p>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 z-50 pointer-events-none font-nunito" id="fomo-notification-container">

<div className="bg-[#1e293b] border border-slate-700 rounded-xl shadow-lg shadow-black/20 p-3 flex items-start gap-3 w-80 max-w-[calc(100vw-2rem)] transform transition-all duration-700 ease-out pointer-events-auto relative overflow-hidden" id="fomo-card">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative shrink-0 mt-0.5">
<div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 shadow-inner group">
<iconify-icon className="text-orange-500 group-hover:rotate-12 transition-transform" icon="solar:bell-bing-bold-duotone" width="20"></iconify-icon>
</div>
<div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1e293b] animate-pulse shadow-sm shadow-green-500/50"></div>
</div>

<div className="flex-1 min-w-0 pt-0.5">
<p className="text-[13px] text-slate-300 font-medium leading-snug tracking-normal" id="fomo-message">
            🔥
            <span className="text-white font-bold">User #9923</span>
            vừa đặt chỗ thành công!
          </p>
<p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1 font-semibold uppercase tracking-wide">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon>
            Vừa xong
          </p>
</div>

<button className="text-slate-500 hover:text-white transition-colors -mt-1 -mr-1 p-1.5 rounded-full hover:bg-slate-700/50 group/close" onclick="window.closeFomo()">
<iconify-icon className="group-hover/close:rotate-90 transition-transform" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

</div>
<div className="fixed bottom-6 right-4 z-[999] flex flex-col gap-3 print:hidden">
<a className="w-14 h-14 rounded-full bg-[#0068FF] shadow-lg flex items-center justify-center text-white transition-transform duration-300 hover:scale-110" href="https://zalo.me/0909000000" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="simple-icons:zalo" width="28"></iconify-icon>
</a>
<a className="w-14 h-14 rounded-full bg-[#f97316] shadow-lg flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 animate-heartbeat" href="tel:0909000000">
<iconify-icon icon="solar:phone-calling-bold" width="28"></iconify-icon>
</a>
</div>


    </>
  );
}
