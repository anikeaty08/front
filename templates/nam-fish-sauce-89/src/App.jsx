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



      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons();
        }
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-[#E6D5B8]/70 backdrop-blur-sm">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 md:px-6 lg:px-0">

<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full border border-[#C9A227]/60 bg-[#E6D5B8]/60 flex items-center justify-center">
<span className="text-[#0B3D59] tracking-tight font-semibold" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>NÔ</span>
</div>
<div className="flex flex-col">
<span className="tracking-tight font-semibold" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>Nam Ô Fish Sauce</span>
<span className="text-sm text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Đà Nẵng • Từ làng chài biển</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<a className="text-[#0B3D59]/80 hover:text-[#0B3D59] transition-colors" href="#story">Câu chuyện</a>
<a className="text-[#0B3D59]/80 hover:text-[#0B3D59] transition-colors" href="#process">Quy trình</a>
<a className="text-[#0B3D59]/80 hover:text-[#0B3D59] transition-colors" href="#products">Sản phẩm</a>
<a className="text-[#0B3D59]/80 hover:text-[#0B3D59] transition-colors" href="#heritage">Di sản</a>
<a className="text-[#167E7E] hover:text-[#0B3D59] transition-colors" href="#contact">Liên hệ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 border border-[#0B3D59]/10 rounded-full bg-[#F8F5EF]/80 hover:bg-[#E6D5B8]/40 hover:border-[#0B3D59]/20 transition-colors px-4 py-1.5 text-sm text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-4 h-4 text-[#167E7E]" data-lucide="map-pin"></i>
              Đặt tại nhà hàng
            </button>
<button className="inline-flex items-center gap-2 rounded-full bg-[#B5651D] text-white hover:bg-[#B5651D]/90 hover:outline hover:outline-1 hover:outline-[#C9A227]/80 transition-all px-4 py-1.5 text-sm shadow-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Mua cho gia đình
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="border-b border-[#E6D5B8]/80">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/60 bg-[#E6D5B8]/60 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
<span className="text-xs tracking-tight uppercase text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Làng nghề Nam Ô • Đà Nẵng</span>
</div>
<h1 className="tracking-tight font-semibold text-[#0B3D59] leading-tight text-3xl md:text-4xl lg:text-5xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Nước mắm Nam Ô<br className="hidden md:block"/>
                trong trẻo vị biển Đà Nẵng
              </h1>
<p className="text-base md:text-lg text-[#0B3D59]/80 max-w-xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Ủ chượp trong chum gốm dưới nắng biển, từ cá cơm than và muối Cà Ná, không chất phụ gia. Mộc mạc như làng chài xưa, tinh sạch cho căn bếp hiện đại.
              </p>
<div className="flex flex-wrap gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B5651D] text-white hover:bg-[#B5651D]/90 hover:outline hover:outline-1 hover:outline-[#C9A227]/80 transition-all px-6 py-2 text-sm md:text-base shadow-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Đặt ngay chai 500ml
                  <i className="w-4 h-4" data-lucide="shopping-bag"></i>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/15 bg-[#F8F5EF] hover:bg-[#E6D5B8]/40 hover:border-[#0B3D59]/25 transition-colors px-5 py-2 text-sm md:text-base text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Nếm thử tại Nam Ô
                  <i className="w-4 h-4 text-[#167E7E]" data-lucide="navigation"></i>
</button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-dashed border-[#E6D5B8]">
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-1 text-[#C9A227]" data-lucide="shield-check"></i>
<div>
<div className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Truyền thống 100+ năm</div>
<p className="text-sm text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Tiếp nối bí quyết làng chài Nam Ô.</p>
</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-1 text-[#167E7E]" data-lucide="drop"></i>
<div>
<div className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Đạm cá tự nhiên</div>
<p className="text-sm text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Chượp 12–18 tháng, lọc nhỏ giọt.</p>
</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-1 text-[#B5651D]" data-lucide="check-circle-2"></i>
<div>
<div className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Sạch &amp; kiểm định</div>
<p className="text-sm text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Kiểm nghiệm an toàn cho trẻ nhỏ.</p>
</div>
</div>
</div>
</div>

<div className="relative">

<div className="relative rounded-3xl border border-[#E6D5B8] bg-[#F8F5EF] shadow-sm overflow-hidden">
<div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-full">

<div className="relative">
<img alt="Chai nước mắm và chum vại gốm Nam Ô" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B3D59]/40 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4 right-4">
<div className="flex items-center justify-between gap-3">
<div className="space-y-1">
<span className="inline-flex items-center gap-1 rounded-full bg-[#F8F5EF]/85 px-2 py-0.5 text-[0.7rem] tracking-tight text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="w-1 h-1 rounded-full bg-[#E85D3F]"></span>
                            Mắm cốt cá cơm than
                          </span>
<p className="text-sm text-[#F8F5EF]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                            Nhỏ giọt từ chum gốm, giữ trọn vị biển và màu hổ phách tự nhiên.
                          </p>
</div>
<div className="shrink-0">
<div className="rounded-full border border-[#C9A227]/80 bg-[#E6D5B8]/90 px-3 py-1 text-right">
<div className="text-[0.7rem] uppercase tracking-tight text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Độ đạm</div>
<div className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>35°N</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col h-full">
<div className="flex-1 relative">
<img alt="Biển Nam Ô, thuyền chài và sóng biển" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0B3D59]/20 mix-blend-multiply"></div>

<div className="absolute top-4 right-4">
<div className="rounded-full border border-[#C9A227]/80 bg-[#F8F5EF]/95 px-3 py-1.5 shadow-sm flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="award"></i>
<div className="flex flex-col">
<span className="text-[0.65rem] tracking-tight uppercase text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>OCOP Đà Nẵng</span>
<span className="text-xs font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Sản phẩm 4 sao</span>
</div>
</div>
</div>
</div>

<div className="border-t border-[#E6D5B8] bg-[#F8F5EF]/95 px-4 py-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-[#E6D5B8]">
<img alt="Nghệ nhân làng nghề Nam Ô" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<div className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Nguyễn Thị Gái</div>
<div className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Đời thứ 3 giữ nghề mắm Nam Ô</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-[#0B3D59]/70 uppercase tracking-tight mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Mẻ chượp</div>
<div className="flex items-center gap-1 text-sm text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          2024-03
                          <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex absolute -left-6 bottom-10 items-center gap-3">
<div className="w-0.5 h-10 bg-[#B5651D]/40"></div>
<div className="rounded-full border border-dashed border-[#B5651D]/60 bg-[#E6D5B8]/80 px-3 py-1 text-xs text-[#0B3D59]/80 shadow-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Ủ chượp trong chum gốm tối thiểu 365 ngày
                </div>
</div>
</div>
</div>
</section>

<section className="bg-[#E6D5B8]/60 border-b border-[#E6D5B8]" id="story">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-12 md:py-16">
<div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-start">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#F8F5EF]/70 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#167E7E]"></span>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Câu chuyện làng nghề</span>
</div>
<h2 className="tracking-tight font-semibold text-2xl md:text-3xl text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Từ vịnh Nam Ô đến căn bếp hiện đại
                </h2>
<p className="text-base md:text-lg text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Ở cửa ngõ phía Bắc Đà Nẵng, làng chài Nam Ô từ lâu nổi tiếng với những chum mắm ủ trên cát, dưới nắng và gió biển. Mỗi mùa cá cơm than về, người dân lại lặng lẽ trộn muối, xếp cá, buộc nắp chum bằng dây thừng và chờ đợi thời gian làm phần còn lại.
                </p>
<p className="text-base md:text-lg text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Hôm nay, nước mắm Nam Ô bước vào không gian bếp mới: sạch sẽ, tinh gọn, đúng chuẩn vệ sinh – nhưng vẫn giữ trọn màu hổ phách, hương thơm dịu và hậu vị đậm đà không thể lẫn của làng nghề trăm năm.
                </p>
<div className="grid sm:grid-cols-3 gap-4 pt-2">
<div className="rounded-xl border border-[#0B3D59]/10 bg-[#F8F5EF]/60 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-[#167E7E]" data-lucide="anchor"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Biển – Muối – Cá</span>
</div>
<p className="text-sm text-[#0B3D59]/75" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Cá cơm than đánh bắt gần bờ, muối Cà Ná hạt to, phơi đủ nắng – chỉ 2 thành phần trong mỗi giọt mắm.
                    </p>
</div>
<div className="rounded-xl border border-[#0B3D59]/10 bg-[#F8F5EF]/60 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="sun-medium"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Nắng &amp; thời gian</span>
</div>
<p className="text-sm text-[#0B3D59]/75" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Chum gốm dày, vùi chân cát, ủ từ 12–18 tháng để đạm cá chín tới, không cần chất điều vị.
                    </p>
</div>
<div className="rounded-xl border border-[#0B3D59]/10 bg-[#F8F5EF]/60 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-[#B5651D]" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Tinh sạch &amp; chuẩn vị</span>
</div>
<p className="text-sm text-[#0B3D59]/75" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Lọc nhỏ giọt qua vải thưa, chiết rót trong xưởng khép kín – đảm bảo an toàn cho mọi bữa cơm.
                    </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-3 border-t border-dashed border-[#0B3D59]/15">
<div className="flex -space-x-2">
<img alt="Nghệ nhân" className="w-8 h-8 rounded-full border border-[#F8F5EF] object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Người dân làng chài" className="w-8 h-8 rounded-full border border-[#F8F5EF] object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Thợ làm mắm" className="w-8 h-8 rounded-full border border-[#F8F5EF] object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="text-sm text-[#0B3D59]/75" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Gắn bó với hơn <span className="font-medium text-[#0B3D59]">60 hộ</span> làm nghề truyền thống tại Nam Ô.
                  </div>
</div>
</div>

<div className="space-y-5">
<div className="rounded-3xl border border-[#0B3D59]/12 bg-[#F8F5EF]/90 p-5 md:p-6 shadow-sm">
<div className="flex items-center justify-between gap-4 mb-4">
<div>
<div className="text-sm uppercase tracking-tight text-[#0B3D59]/70 mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Ghi chú từ làng chài</div>
<div className="flex items-center gap-2">
<span className="w-1 h-6 bg-[#B5651D]/60 rounded-full"></span>
<p className="text-sm text-[#0B3D59]/75 max-w-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          “Nước mắm ngon là mắm đủ nắng, đủ gió và đủ kiên nhẫn.”
                        </p>
</div>
</div>
<div className="rounded-full border border-dashed border-[#B5651D]/60 px-3 py-2 text-right">
<div className="text-[0.7rem] uppercase tracking-tight text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Từ 1920s</div>
<div className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Di sản Nam Ô</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl overflow-hidden border border-[#E6D5B8] bg-[#F8F5EF]">
<img alt="Dây thừng và mạn thuyền" className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-3">
<div className="text-xs uppercase tracking-tight text-[#0B3D59]/70 mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Vị mặn lành</div>
<p className="text-sm text-[#0B3D59]/75" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          Muối phơi đủ 12 tháng giúp mắm trong và êm, không gắt cổ.
                        </p>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-[#E6D5B8] bg-[#F8F5EF]">
<img alt="Sóng biển và mặt nước" className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-3">
<div className="text-xs uppercase tracking-tight text-[#0B3D59]/70 mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Sắc mắm hổ phách</div>
<p className="text-sm text-[#0B3D59]/75" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          Màu amber tự nhiên, không caramel, không phụ gia tạo màu.
                        </p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-[#C9A227]/60 bg-[#F8F5EF]/95 p-5 md:p-6 flex flex-col gap-4 shadow-sm" id="heritage">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#C9A227]" data-lucide="certificate"></i>
<div>
<div className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Chỉ dẫn địa lý Nam Ô</div>
<div className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Được bảo hộ bởi địa phương Đà Nẵng</div>
</div>
</div>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/60 border border-[#0B3D59]/10 rounded-full px-2 py-0.5" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Heritage line
                    </span>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<ul className="space-y-1.5 text-sm text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#167E7E]"></span>
                        100% nguyên liệu đánh bắt trong vùng vịnh Nam Ô.
                      </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#167E7E]"></span>
                        Xưởng đạt chứng nhận vệ sinh an toàn thực phẩm.
                      </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#167E7E]"></span>
                        Truy xuất nguồn gốc từng mẻ chượp qua QR code.
                      </li>
</ul>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span>Lô mẻ đang bán</span>
<span className="font-medium text-[#0B3D59]">2024-02A</span>
</div>
<div className="w-full h-1.5 rounded-full bg-[#E6D5B8]/80 overflow-hidden">
<div className="h-full w-3/4 bg-[#167E7E]"></div>
</div>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        Mỗi lô mắm đều được kiểm nghiệm định kỳ về chỉ tiêu vi sinh, kim loại nặng và độ đạm.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#E6D5B8]/80" id="process">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-12 md:py-16 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#E6D5B8]/40 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#B5651D]"></span>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Quy trình 4 bước</span>
</div>
<h2 className="mt-3 tracking-tight font-semibold text-2xl md:text-3xl text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Mắm cốt Nam Ô – từ thuyền cá đến chai thủy tinh
                </h2>
<p className="text-base md:text-lg text-[#0B3D59]/80 max-w-xl mt-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Mỗi bước đều được giữ nguyên tinh thần làng nghề, nhưng được cải tiến để đảm bảo vệ sinh và sự ổn định trong từng chai.
                </p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#F8F5EF]/80 px-3 py-1.5 text-xs text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3.5 h-3.5 text-[#167E7E]" data-lucide="leaf"></i>
                  Không chất bảo quản, không phẩm màu.
                </div>
</div>
</div>
<div className="grid md:grid-cols-4 gap-4 md:gap-5">

<div className="relative group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] hover:border-[#0B3D59]/25 hover:shadow-sm transition-all p-4 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-[#167E7E]/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#167E7E]" data-lucide="ship"></i>
</div>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Bước 1</span>
</div>
<span className="text-xs font-medium text-[#0B3D59]/60" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Sáng sớm</span>
</div>
<h3 className="text-sm font-medium text-[#0B3D59] mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Chọn cá cơm than tươi</h3>
<p className="text-sm text-[#0B3D59]/75 mb-3 flex-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Cá được ướp muối ngay trên thuyền, đưa thẳng về bến Nam Ô trong vòng vài giờ để giữ độ tươi.
                </p>
<span className="text-xs text-[#0B3D59]/60 mt-auto" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Tỷ lệ cá : muối được cân chỉnh chuẩn từng mẻ.
                </span>
</div>

<div className="relative group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] hover:border-[#0B3D59]/25 hover:shadow-sm transition-all p-4 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-[#B5651D]/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#B5651D]" data-lucide="amphora"></i>
</div>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Bước 2</span>
</div>
<span className="text-xs font-medium text-[#0B3D59]/60" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Ngày đầu</span>
</div>
<h3 className="text-sm font-medium text-[#0B3D59] mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Ủ chượp trong chum gốm</h3>
<p className="text-sm text-[#0B3D59]/75 mb-3 flex-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Cá và muối được xếp lớp, nén chặt bằng vỉ tre, bịt kín bằng bùn và dây thừng – để nắng, gió và thời gian làm chín.
                </p>
<span className="text-xs text-[#0B3D59]/60 mt-auto" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Ủ từ 12–18 tháng tuỳ mùa và độ nắng.
                </span>
</div>

<div className="relative group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] hover:border-[#0B3D59]/25 hover:shadow-sm transition-all p-4 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-[#167E7E]/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#167E7E]" data-lucide="filter"></i>
</div>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Bước 3</span>
</div>
<span className="text-xs font-medium text-[#0B3D59]/60" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Giọt mắm đầu</span>
</div>
<h3 className="text-sm font-medium text-[#0B3D59] mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Rút mắm cốt &amp; lọc tinh</h3>
<p className="text-sm text-[#0B3D59]/75 mb-3 flex-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Mắm cốt được rút từ đáy chum, lọc nhỏ giọt qua nhiều lớp vải thưa để đạt độ trong, thơm, không vẩn đục.
                </p>
<span className="text-xs text-[#0B3D59]/60 mt-auto" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Không dùng chất trợ lọc công nghiệp.
                </span>
</div>

<div className="relative group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] hover:border-[#0B3D59]/25 hover:shadow-sm transition-all p-4 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#C9A227]" data-lucide="bottle"></i>
</div>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Bước 4</span>
</div>
<span className="text-xs font-medium text-[#0B3D59]/60" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Đến tay bạn</span>
</div>
<h3 className="text-sm font-medium text-[#0B3D59] mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Chiết rót &amp; niêm phong</h3>
<p className="text-sm text-[#0B3D59]/75 mb-3 flex-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Mắm được chiết vào chai thủy tinh, niêm phong, dán nhãn, gắn QR truy xuất – sẵn sàng lên bàn ăn hoặc quầy bếp nhà hàng.
                </p>
<span className="text-xs text-[#0B3D59]/60 mt-auto" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Giữ mắm nơi khô ráo, tránh ánh nắng trực tiếp.
                </span>
</div>
</div>
</div>
</section>

<section className="border-b border-[#E6D5B8]/80" id="products">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-12 md:py-16 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#E6D5B8]/40 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#167E7E]"></span>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Dòng sản phẩm</span>
</div>
<h2 className="mt-3 tracking-tight font-semibold text-2xl md:text-3xl text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Mộc mạc trên bàn cơm, tinh tế trên bàn chef
                </h2>
<p className="text-base md:text-lg text-[#0B3D59]/80 max-w-xl mt-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text, sans-serif'}}>
                  Hai dòng mắm cốt và mắm pha giúp bạn dễ dàng dùng hàng ngày, làm nước chấm, ướp nướng hay hoàn thiện món ăn cao cấp.
                </p>
</div>
<div className="flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#F8F5EF]/80 hover:bg-[#E6D5B8]/50 transition-colors px-4 py-1.5 text-xs md:text-sm text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3.5 h-3.5 text-[#167E7E]" data-lucide="info"></i>
                  Xem hướng dẫn bảo quản
                </button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 md:gap-5">

<article className="group relative rounded-3xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4 flex flex-col shadow-sm hover:shadow-md hover:border-[#0B3D59]/20 transition-all">
<div className="flex items-start justify-between gap-3 mb-3">
<div>
<h3 className="text-base font-semibold text-[#0B3D59] mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Mắm cốt Nam Ô 35°N
                    </h3>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Dành cho nêm nếm, ướp và pha nước chấm.
                    </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-[#E6D5B8]/80 px-2 py-0.5 text-[0.7rem] text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="w-1 h-1 rounded-full bg-[#B5651D]"></span>
                    Signature
                  </span>
</div>
<div className="relative rounded-2xl overflow-hidden border border-[#E6D5B8] bg-[#F8F5EF] mb-3">
<img alt="Chai nước mắm cốt Nam Ô 35N" className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B3D59]/25 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[0.7rem] text-[#F8F5EF]/95" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex items-center gap-1">
<i className="w-3 h-3 text-[#C9A227]" data-lucide="droplets"></i>
                      Độ đạm 35°N
                    </span>
<span className="inline-flex items-center gap-1">
<i className="w-3 h-3 text-[#F8F5EF]/90" data-lucide="beaker"></i>
                      Không phụ gia
                    </span>
</div>
</div>
<ul className="space-y-1.5 text-xs text-[#0B3D59]/80 mb-4" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Chai thủy tinh 500ml/250ml, nắp chống tràn.
                  </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Hương mắm dịu, hậu ngọt, không gắt mũi.
                  </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Phù hợp nêm canh, kho, rim, ướp nướng.
                  </li>
</ul>
<div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-dashed border-[#E6D5B8]">
<div>
<div className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>120.000đ</div>
<div className="text-[0.7rem] text-[#0B3D59]/65" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Chai 500ml • Lô 2024-02A</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-[#B5651D] text-white px-3 py-1.5 text-xs hover:bg-[#B5651D]/90 transition-colors" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3. h-3.5" data-lucide="shopping-cart"></i>
                    Thêm vào giỏ
                  </button>
</div>
</article>

<article className="group relative rounded-3xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4 flex flex-col shadow-sm hover:shadow-md hover:border-[#0B3D59]/20 transition-all">
<div className="flex items-start justify-between gap-3 mb-3">
<div>
<h3 className="text-base font-semibold text-[#0B3D59] mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Mắm pha sẵn 18°N
                    </h3>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Pha sẵn tỉ lệ chua – ngọt – mặn, dùng trực tiếp.
                    </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-[#167E7E]/10 px-2 py-0.5 text-[0.7rem] text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3 h-3 text-[#167E7E]" data-lucide="star"></i>
                    Ready to use
                  </span>
</div>
<div className="relative rounded-2xl overflow-hidden border border-[#E6D5B8] bg-[#F8F5EF] mb-3">
<img alt="Chén nước mắm pha Nam Ô" className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B3D59]/25 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[0.7rem] text-[#F8F5EF]/95" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex items-center gap-1">
<i className="w-3 h-3 text-[#F8F5EF]/90" data-lucide="salad"></i>
                      Ăn kèm gỏi, đồ luộc
                    </span>
<span className="inline-flex items-center gap-1">
<i className="w-3 h-3 text-[#C9A227]" data-lucide="clock-3"></i>
                      Mở nắp là dùng
                    </span>
</div>
</div>
<ul className="space-y-1.5 text-xs text-[#0B3D59]/80 mb-4" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif%'}}>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Sử dụng mắm cốt Nam Ô làm nền, thêm tỏi, ớt, đường, chanh.
                  </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Hương vị cân bằng, phù hợp khẩu vị miền Trung – Bắc – Nam.
                  </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Lý tưởng cho quán ăn, nhà hàng cần phục vụ nhanh.
                  </li>
</ul>
<div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-dashed border-[#E6D5B8]">
<div>
<div className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>95.000đ</div>
<div className="text-[0.7rem] text-[#0B3D59]/65" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Chai 500ml • HSD 12 tháng</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#0B3D59] border border-[#0B3D59]/20 px-3 py-1.5 text-xs hover:bg-[#E6D5B8]/70 transition-colors" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
                    Xem chi tiết
                  </button>
</div>
</article>

<article className="group relative rounded-3xl border border-[#C9A227]/70 bg-[#F8F5EF] p-4 flex flex-col shadow-sm hover:shadow-md hover:border-[#C9A227] transition-all">
<div className="flex items-start justify-between gap-3 mb-3">
<div>
<h3 className="text-base font-semibold text-[#0B3D59] mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Hộp quà Nam Ô Heritage
                    </h3>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Bộ quà tặng tinh tế cho đối tác, gia đình xa quê.
                    </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-[#C9A227]/10 px-2 py-0.5 text-[0.7rem] text-[#0B3D59]/90" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3 h-3 text-[#C9A227]" data-lucide="gift"></i>
                    Gift set
                  </span>
</div>
<div className="relative rounded-2xl overflow-hidden border border-[#E6D5B8] bg-[#F8F5EF] mb-3">
<img alt="Hộp quà nước mắm Nam Ô" className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=900=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B3D59]/30 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[0.7rem] text-[#F8F5EF]/95" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex items-center gap-1">
<i className="w-3 h-3 text-[#F8F5EF]/90" data-lucide="box"></i>
                      2 chai 500ml + sổ nhỏ
                    </span>
<span className="inline-flex items-center gap-1">
<i className="w-3 h-3 text-[#C9A227]" data-lucide="pen"></i>
                      Kèm thiệp tay
                    </span>
</div>
</div>
<ul className="space-y-1.5 text-xs text-[#0B3D59]/80 mb-4" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    01 chai mắm cốt 35°N + 01 chai mắm pha 18°N.
                  </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Hộp giấy kraft, in nổi logo Nam Ô Fish Sauce.
                  </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#167E7E]"></span>
                    Có thể in tên doanh nghiệp theo yêu cầu (&gt;50 hộp).
                  </li>
</ul>
<div className="mt-auto flex items-center justify-between gap-3 pt-3 border-top border-t border-dashed border-[#E6D5B8]">
<div>
<div className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>320.000đ</div>
<div className="text-[0.7rem] text-[#0B3D59]/65" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Giá cho 1 hộp quà</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-[#0B3D59] text-white px-3 py-1.5 text-xs hover:bg-[#0B3D59]/90 transition-colors" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="phone-call"></i>
                    Liên hệ đặt số lượng lớn
                  </button>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-[#E6D5B8]/80 bg-[#F8F5EF]">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-12 md:py-16">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#E6D5B8]/60 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#B5651D]"></span>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Gợi ý sử dụng</span>
</div>
<h2 className="mt-3 tracking-tight font-semibold text-2xl md:text-3xl text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Từ bữa cơm nhà đến bàn ăn nhà hàng
                </h2>
<p className="text-base md:text-lg text-[#0B3D59]/80 max-w-xl mt-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Một chai mắm có thể đi cùng rất nhiều món: chấm, kho, nướng, gỏi… Dưới đây là vài gợi ý để bạn bắt đầu.
                </p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#F8F5EF] px-3 py-1.5 text-xs text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3.5 h-3.5 text-[#167E7E]" data-lucide="chef-hat"></i>
                  Đồng hành cùng 15+ nhà hàng tại Đà Nẵng
                </div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-3xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4 flex flex-col">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-[#167E7E]/10 flex items-center justify-center">
<i className="w-4 h-4 text-[#167E7E]" data-lucide="home"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Bữa cơm gia đình</h3>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Nêm canh, kho cá, rim thịt, chấm rau luộc.</p>
</div>
</div>
<ul className="space-y-1.5 text-xs text-[#0B3D59]/75 mb-3" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li>• Dùng mắm cốt 35°N, thêm ít đường để vị mềm hơn.</li>
<li>• Pha 1 thìa mắm : 1 thìa đường : 1 thìa nước ấm cho món xào.</li>
<li>• Với trẻ nhỏ: nêm rất ít, thêm vào cuối khi tắt bếp.</li>
</ul>
<div className="mt-auto text-[0.7rem] text-[#0B3D59]/65 border-t border-dashed border-[#E6D5B8] pt-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Gợi ý: chai 250ml phù hợp gia đình nhỏ 2–3 người.
                </div>
</div>

<div className="rounded-3xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4 flex flex-col">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-[#B5651D]/10 flex items-center justify-center">
<i className="w-4 h-4 text-[#B5651D]" data-lucide="utensils"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Nhà hàng &amp; quán ăn</h3>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Ổn định vị, tối ưu chi phí, dễ bảo quản.</p>
</div>
</div>
<ul className="space-y-1.5 text-xs text-[#0B3D59]/75 mb-3" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li>• Cung cấp thùng 12 chai, hoá đơn đầy đủ.</li>
<li>• Tư vấn công thức pha chấm chuẩn hoá cho bếp.</li>
<li>• Nhãn phụ/tem riêng theo concept nhà hàng nếu cần.</li>
</ul>
<div className="mt-auto flex items-center justify-between gap-3 border-t border-dashed border-[#E6D5B8] pt-2">
<span className="text-[0.7rem] text-[#0B3D59]/65" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Hỗ trợ test thử 2–3 chai trước khi ký hợp đồng.
                  </span>
<button className="inline-flex items-center gap-1.5 rounded-full bg-[#0B3D59] text-white px-3 py-1.5 text-[0.7rem] hover:bg-[#0B3D59]/90 transition-colors" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<i className="w-3.5 h-3.5" data-lucide="mail"></i>
                    Nhận báo giá
                  </button>
</div>
</div>

<div className="rounded-3xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4 flex flex-col">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="plane"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Mang ra nước ngoài</h3>
<p className="text-xs text-[#0B3D59]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Quà cho người thân, bạn bè xa xứ.</p>
</div>
</div>
<ul className="space-y-1.5 text-xs text-[#0B3D59]/75 mb-3" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li>• Khuyên dùng chai 250ml, đóng kèm túi zip chống tràn.</li>
<li>• Có hướng dẫn tiếng Anh đính kèm trong hộp quà.</li>
<li>• Liên hệ trước để được tư vấn quy định mang chất lỏng.</li>
</ul>
<div className="mt-auto text-[0.7rem] text-[#0B3D59]/65 border-t border-dashed border-[#E6D5B8] pt-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Hộp quà Heritage là lựa chọn được khách Việt kiều ưa chuộng.
                </div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#E6D5B8]/80 bg-[#E6D5B8]/40">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-12 md:py-16">
<div className="max-w-2xl mb-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#0B3D59]/10 bg-[#F8F5EF]/90 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#167E7E]"></span>
<span className="text-xs uppercase tracking-tight text-[#0B3D59]/80" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Câu hỏi thường gặp</span>
</div>
<h2 className="mt-3 tracking-tight font-semibold text-2xl md:text-3xl text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                Một vài điều bạn có thể đang thắc mắc
              </h2>
</div>
<div className="space-y-3">

<details className="group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#167E7E]" data-lucide="help-circle"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Nước mắm có cần bảo quản trong tủ lạnh không?
                    </span>
</div>
<i className="w-4 h-4 text-[#0B3D59]/70 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-[#0B3D59]/80 max-w-2xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Không bắt buộc, chỉ cần để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Nếu khí hậu quá nóng hoặc ít dùng, bạn có thể để ngăn mát tủ lạnh để hương vị ổn định hơn.
                </div>
</details>
<details className="group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#167E7E]" data-lucide="help-circle"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Vì sao màu mắm có thể đậm nhạt khác nhau giữa các lô?
                    </span>
</div>
<i className="w-4 h-4 text-[#0B3D59]/70 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-[#0B3D59]/80 max-w-2xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Màu mắm phụ thuộc vào mùa cá, thời gian ủ và cường độ nắng – vì chúng tôi không dùng chất tạo màu nên mỗi lô sẽ có sắc hổ phách khác nhau một chút, nhưng đều đạt chuẩn đạm và an toàn.
                </div>
</details>
<details className="group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#167E7E]" data-lucide="help-circle"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Trẻ nhỏ và người lớn tuổi dùng được không?
                    </span>
</div>
<i className="w-4 h-4 text-[#0B3D59]/70 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-[#0B3D59]/80 max-w-2xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Được, với điều kiện dùng lượng vừa phải theo chỉ dẫn dinh dưỡng. Sản phẩm đã kiểm nghiệm các chỉ tiêu vi sinh, kim loại nặng. Với trẻ dưới 1 tuổi, bạn nên tham khảo thêm ý kiến bác sĩ nhi.
                </div>
</details>
<details className="group rounded-2xl border border-[#0B3D59]/10 bg-[#F8F5EF] p-4">
<summary className="flex items-center justify-between gap-3 cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#167E7E]" data-lucide="help-circle"></i>
<span className="text-sm font-medium text-[#0B3D59]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Nam Ô có giao hàng toàn quốc không?
                    </span>
</div>
<i className="w-4 h-4 text-[#0B3D59]/70 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-[#0B3D59]/80 max-w-2xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Có. Chúng tôi gửi hàng qua đơn vị vận chuyển uy tín, đóng gói chống vỡ nhiều lớp. Với đơn hàng số lượng lớn hoặc giao gấp, vui lòng liên hệ trực tiếp để được sắp xếp phù hợp.
                </div>
</details>
</div>
</div>
</section>

<section className="bg-[#0B3D59] text-[#F8F5EF]" id="contact">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-12 md:py-16">
<div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-start">

<div className="space-y-5">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#F8F5EF]/20 bg-[#F8F5EF]/10 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
<span className="text-xs uppercase tracking-tight" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Liên hệ &amp; đặt hàng</span>
</div>
<h2 className="mt-3 tracking-tight font-semibold text-2xl md:text-3xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                    Đặt mắm Nam Ô cho gia đình hoặc nhà hàng của bạn
                  </h2>
<p className="text-sm md:text-base text-[#F8F5EF]/80 mt-2 max-w-xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Gửi thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24 giờ (trừ Chủ nhật). Đối với nhà hàng, vui lòng ghi rõ số lượng ước tính để có báo giá tốt nhất.
                  </p>
</div>
<div className="grid sm:grid-cols-2 gap-4 text-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="phone"></i>
</div>
<div>
<div className="text-[#F8F5EF]/70 text-xs uppercase tracking-tight mb-0.5">Hotline</div>
<a className="text-sm text-[#F8F5EF] hover:underline" href="tel:+84901234567">+84 90 123 45 67</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="mail"></i>
</div>
<div>
<div className="text-[#F8F5EF]/70 text-xs uppercase tracking-tight mb-0.5">Email</div>
<a className="text-sm text-[#F8F5EF] hover:underline" href="mailto:hello@nammofishsauce.vn">hello@nammofishsauce.vn</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-[#F8F5EF]/70 text-xs uppercase tracking-tight mb-0.5">Xưởng &amp; showroom</div>
<p className="text-sm text-[#F8F5EF]/90">
                        Tổ 3, làng Nam Ô, phường Hòa Hiệp Nam, quận Liên Chiểu, Đà Nẵng
                      </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-4 h-4 text-[#C9A227]" data-lucide="clock-4"></i>
</div>
<div>
<div className="text-[#F8F5EF]/70 text-xs uppercase tracking-tight mb-0.5">Giờ mở cửa</div>
<p className="text-sm text-[#F8F5EF]/90">Thứ 2 – Thứ 7, 8:00 – 17:00</p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-[#F8F5EF]/15 bg-[#F8F5EF]/5 p-5 md:p-6 shadow-sm">
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="name" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Họ và tên</label>
<input className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] placeholder:text-[#F8F5EF]/40 focus:outline-none focus:ring-1 focus:ring-[#C9A227]" id="name" name="name" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="phone" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Số điện thoại</label>
<input className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] placeholder:text-[#F8F5EF]/40 focus:outline-none focus:ring-1 focus:ring-[#C9A227]" id="phone" name="phone" placeholder="090..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="email" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Email (tuỳ chọn)</label>
<input className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] placeholder:text-[#F8F5EF]/40 focus:outline-none focus:ring-1 focus:ring-[#C9A227]" id="email" name="email" placeholder="ban@nha-hang.vn" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="type" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}} type"="">Bạn là</label>
<select className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] focus:outline-none focus:ring-1 focus:ring-[#C9A227]" id="type" name="type">
<option className="bg-[#0B3D59]" value="">Chọn loại khách hàng</option>
<option className="bg-[#0B3D59]" value="family">Gia đình / cá nhân</option>
<option className="bg-[#0B3D59]" value="restaurant">Nhà hàng / quán ăn</option>
<option className="bg-[#0B3D59]" value="gift">Mua làm quà / doanh nghiệp</option>
</select>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="volume" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Số lượng dự kiến</label>
<input className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] placeholder:text-[#F8F5EF]/40 focus:outline-none focus:ring-1 focus:ring-[#C9A227]" id="volume" name="volume" placeholder="Ví dụ: 6 chai / tháng" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="product" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Quan tâm đến</label>
<select className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] focus:outline-none:ring-1 focus:ring-[#C9A227]" id="product" name="product">
<option className="bg-[#0B3D59]" value="">Chọn sản phẩm</option>
<option className="bg-[#0B3D59]" value="cot">Mắm cốt 35°N</option>
<option className="bg-[#0B3D59]" value="mixed">Mắm pha 18°N</option>
<option className="bg-[#0B3D59]" value="gift">ộp quà Heritage</option>
<option className="bg-[#0B3D59]" value="all">Tất cả các dòng</option>
</select>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-tight text-[#F8F5EF]/70 mb-1.5" htmlFor="message" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Nội dung</label>
<textarea className="w-full rounded-xl border border-[#F8F5EF]/20 bg-[#0B3D59]/40 px-3 py-2 text-sm text-[#F8F5EF] placeholder:text-[#F8F5EF]/40 focus:outline-none focus:ring-1 focus:ring-[#C9A227]" id="message" name="message" placeholder="Cho chúng tôi biết nhu cầu, địa điểm giao hàng, thời gian mong muốn..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
<div className="flex items-center gap-2 text-[0.7rem] text-[#F8F5EF]/70" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<input className="w-3.5 h-3.5 rounded border-[#F8F5EF]/40 bg-transparent text-[#C9A227] focus:ring-[#C9A227]" id="newsletter" name="newsletter" type="checkbox"/>
<label className="cursor-pointer" htmlFor="newsletter">
                        Nhận kèm công thức món ăn &amp; tin khuyến mãi qua email.
                      </label>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] text-[#0B3D59] px-5 py-2 text-xs md:text-sm font-medium hover:bg-[#E6D5B8] hover:text-[#0B3D59] transition-colors shadow-sm" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}} type="submit">
                      Gửi thông tin
                      <i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
<p className="mt-1 text-[0.7rem] text-[#F8F5EF]/50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Bằng cách gửi form, bạn đồng ý để chúng tôi liên hệ lại qua điện thoại hoặc email về đơn hàng và thông tin sản phẩm.
                  </p>
</form>
</div>
</div>

<div className="mt-10 pt-6 border-t border-[#F8F5EF]/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<div className="flex items-center gap-2 text-[#F8F5EF]/70">
<span className="font-semibold text-[#F8F5EF]">Nam Ô Fish Sauce</span>
<span className="w-1 h-1 rounded-full bg-[#F8F5EF]/40"></span>
<span>Làng Nam Ô, Đà Nẵng</span>
<span className="w-1 h-1 rounded-full bg-[#F8F5EF]/40 hidden sm:inline-block"></span>
<span className="hidden sm:inline-block">Mắm cốt truyền thống • Độ đạm tự nhiên</span>
</div>
<div className="flex flex-wrap items-center gap-3 text-[#F8F5EF]/60">
<div className="flex items-center gap-2">
<a className="hover:text-[#F8F5EF] transition-colors underline-offset-2 hover:underline" href="#">Chính sách bảo mật</a>
<span className="w-1 h-1 rounded-full bg-[#F8F5EF]/40"></span>
<a className="hover:text-[#F8F5EF] transition-colors underline-offset-2 hover:underline" href="#">Điều khoản sử dụng</a>
</div>
<div className="flex items-center gap-2">
<a aria-label="Facebook Nam Ô" className="w-6 h-6 rounded-full border border-[#F8F5EF]/30 flex items-center justify-center hover:bg-[#F8F5EF]/10 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="facebook"></i>
</a>
<a aria-label="Instagram Nam Ô" className="w-6 h-6 rounded-full border border-[#F8F5EF]/30 flex items-center justify-center hover:bg-[#F8F5EF]/10 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="instagram"></i>
</a>
<a aria-label="Location Nam Ô on Map" className="w-6 h-6 rounded-full border border-[#F8F5EF]/30 flex items-center justify-center hover:bg-[#F8F5EF]/10 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
</a>
</div>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
